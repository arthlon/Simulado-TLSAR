#!/usr/bin/env python3
"""Converte carta local KAP/GeoTIFF em tiles XYZ e atualiza catálogo e versão."""
import argparse
import hashlib
import json
from pathlib import Path
import re
import shutil
import subprocess
import sys
import tempfile


def convert(args):
    root = Path(__file__).resolve().parent.parent
    source = Path(args.arquivo).resolve()
    if not source.is_file():
        raise ValueError('Arquivo de origem não encontrado.')
    if not re.fullmatch(r'[a-z0-9][a-z0-9_-]{0,63}', args.id):
        raise ValueError('Use um id com letras minúsculas, números, hífen ou sublinhado.')
    match = re.fullmatch(r'(\d+)-(\d+)', args.zoom)
    if not match or not 0 <= int(match[1]) <= int(match[2]) <= 20:
        raise ValueError('Use --zoom mínimo-máximo, entre 0 e 20. Ex.: 8-15.')
    target = root / 'cartas' / args.id
    if target.exists():
        raise ValueError('Este id já existe. Escolha outro id para preservar a carta publicada.')
    for command in ['gdalwarp', 'gdalinfo', 'gdal_translate']:
        if not shutil.which(command):
            raise ValueError('Instale o GDAL com seus utilitários e bindings Python antes de converter.')
    tiler = shutil.which('gdal2tiles.py') or shutil.which('gdal2tiles')
    tiler_command = [tiler] if tiler else [sys.executable, '-m', 'osgeo_utils.gdal2tiles']
    catalog_path = root / 'cartas' / 'catalogo.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    if any(c['id'] == args.id for c in catalog['charts']):
        raise ValueError('Este id já está no catálogo.')
    with tempfile.TemporaryDirectory(prefix='carta-lsar-') as temporary:
        temporary = Path(temporary)
        original = json.loads(subprocess.check_output(['gdalinfo', '-json', str(source)], text=True))
        if any(band.get('colorInterpretation') == 'Palette' for band in original.get('bands', [])):
            expanded = temporary / 'rgba.tif'
            subprocess.run(['gdal_translate', '-expand', 'rgba', str(source), str(expanded)], check=True)
            source_for_warp = expanded
        else:
            source_for_warp = source
        warped = temporary / 'carta.tif'
        subprocess.run(['gdalwarp', '-overwrite', '-t_srs', 'EPSG:3857', '-r', 'near', '-dstalpha', '-co', 'COMPRESS=DEFLATE', str(source_for_warp), str(warped)], check=True)
        info = json.loads(subprocess.check_output(['gdalinfo', '-json', str(warped)], text=True))
        coordinates = info['wgs84Extent']['coordinates'][0]
        south, north = min(p[1] for p in coordinates), max(p[1] for p in coordinates)
        west, east = min(p[0] for p in coordinates), max(p[0] for p in coordinates)
        if not (-85.05112878 <= south < north <= 85.05112878 and -180 <= west < east <= 180 and east-west <= 180):
            raise ValueError('Extensão incompatível. Recorte a carta, especialmente no antimeridiano ou nos polos.')
        tiles = temporary / 'tiles'
        subprocess.run(tiler_command + ['--xyz', '--webviewer=none', '--zoom=' + args.zoom, str(warped), str(tiles)], check=True)
        if not any(tiles.rglob('*.png')):
            raise ValueError('A conversão não gerou tiles PNG.')
        digest = hashlib.sha256()
        with source.open('rb') as stream:
            for block in iter(lambda: stream.read(1024 * 1024), b''):
                digest.update(block)
        version = digest.hexdigest()[:16]
        entry = {'id': args.id, 'name': args.nome, 'url': 'cartas/' + args.id + '/{z}/{x}/{y}.png', 'bounds': [south, west, north, east], 'minZoom': int(match[1]), 'maxZoom': int(match[2]), 'version': version, 'attribution': args.creditos}
        shutil.move(str(tiles), str(target))
        catalog['charts'].append(entry)
        catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    subprocess.run([sys.executable, str(root / 'ferramentas' / 'atualizar_versao.py')], check=True)
    print('Carta pronta em:', target)
    print('Publique a pasta cartas e os HTMLs/versao.json atualizados junto com o site.')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('arquivo', help='Caminho da carta KAP ou GeoTIFF')
    parser.add_argument('--id', required=True, help='Ex.: vitoria-1401')
    parser.add_argument('--nome', required=True, help='Nome exibido no seletor')
    parser.add_argument('--creditos', required=True, help='Fonte e créditos aplicáveis à carta')
    parser.add_argument('--zoom', default='8-15', help='Faixa dos níveis de zoom gerados (padrão 8-15)')
    try:
        convert(parser.parse_args())
    except (ValueError, OSError, subprocess.CalledProcessError, KeyError) as error:
        print('Não foi possível converter a carta:', error, file=sys.stderr)
        sys.exit(1)
