#!/usr/bin/env python3
from pathlib import Path
import hashlib,json,re
root=Path(__file__).resolve().parent.parent
for page in root.glob('*.html'):
 text=page.read_text()
 def asset(match):
  path=match[2].split('?',1)[0];p=root/path
  if not p.is_file():raise FileNotFoundError(p)
  return match[1]+path+'?v='+hashlib.sha256(p.read_bytes()).hexdigest()[:16]+match[3]
 text=re.sub(r'((?:src|href)=")([^"\s]+\.(?:css|js|png)(?:\?v=[a-f0-9]+)?)(")',asset,text)
 text=re.sub(r'(href="(?:index|deriva)\.html)(?:\?v=(?:[a-f0-9]+|__LSAR_BUILD__))?(")',r'\g<1>?v=__LSAR_BUILD__\2',text)
 text=re.sub(r'(<meta name="lsar-build" content=")[^"]+(">)',r'\g<1>__LSAR_BUILD__\2',text)
 page.write_text(text)
digest=hashlib.sha256()
for p in sorted(root.rglob('*')):
 if not p.is_file() or p.name=='versao.json' or '__pycache__' in p.parts or p.suffix=='.pyc':continue
 digest.update(p.relative_to(root).as_posix().encode());digest.update(b'\0');digest.update(p.read_bytes());digest.update(b'\0')
version=digest.hexdigest()[:16]
for p in root.glob('*.html'):p.write_text(p.read_text().replace('__LSAR_BUILD__',version))
(root/'versao.json').write_text(json.dumps({'version':version},separators=(',',':'))+'\n')
print('Versão do pacote:',version)
