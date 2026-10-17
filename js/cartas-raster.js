'use strict';
(function(root){
 function inspect(buffer){
  const v=new DataView(buffer),fail=message=>{throw Error(message);};
  if(v.byteLength<8)fail('Arquivo TIFF incompleto.');
  const order=v.getUint16(0),little=order===0x4949;
  if(!little&&order!==0x4d4d)fail('O arquivo não é um TIFF válido.');
  const u16=p=>{if(p<0||p+2>v.byteLength)fail('Metadados TIFF incompletos.');return v.getUint16(p,little);};
  const u32=p=>{if(p<0||p+4>v.byteLength)fail('Metadados TIFF incompletos.');return v.getUint32(p,little);};
  if(u16(2)!==42)fail('Use um GeoTIFF clássico. BigTIFF precisa ser convertido em tiles.');
  const offset=u32(4),n=u16(offset),tags=new Map();
  if(n>4096)fail('A tabela de metadados TIFF excede o limite desta versão.');
  for(let i=0;i<n;i++){
   const p=offset+2+i*12,tag=u16(p),type=u16(p+2),count=u32(p+4);
   if(![256,257,258,262,274,277,338,339,34735,33550,33922,34264].includes(tag))continue;
   const size={3:2,4:4,12:8}[type];if(!size||count>65536)continue;
   const start=count*size<=4?p+8:u32(p+8);
   if(start+count*size>v.byteLength)fail('Metadados TIFF fora do arquivo.');
   tags.set(tag,Array.from({length:count},(_,j)=>type===12?v.getFloat64(start+j*8,little):type===3?u16(start+j*2):u32(start+j*4)));
  }
  const width=tags.get(256)?.[0],height=tags.get(257)?.[0],bands=tags.get(277)?.[0]||1;
  if(!width||!height)fail('Dimensões da carta não encontradas.');
  if(width*height>12000000)fail('A carta excede 12 milhões de pixels. Converta em tiles para manter o desempenho no celular/iPad.');
  if(bands>4||(tags.get(258)||[1]).some(b=>b!==8)||(tags.get(339)||[1]).some(f=>f!==1))fail('Para leitura local, use carta de imagem com até 4 bandas de 8 bits sem sinal. Converta outros tipos em tiles.');
  const photometric=tags.get(262)?.[0]??1,alpha=tags.get(338)?.[0]||0;
  if((tags.get(274)?.[0]||1)!==1)fail('Cartas com orientação TIFF invertida precisam ser convertidas em tiles.');
  if(![0,1,2,3,6].includes(photometric)||([2,6].includes(photometric)&&bands<3)||(photometric===3&&bands!==1))fail('Modelo de cores não suportado nesta leitura local. Converta a carta em tiles.');
  const keys=tags.get(34735);
  if(!keys||!(tags.has(34264)||(tags.has(33550)&&tags.has(33922))))fail('A carta não contém georreferenciamento GeoTIFF completo.');
  const matrix=tags.get(34264);if(matrix&&(matrix.length!==16||matrix[1]!==0||matrix[4]!==0||matrix[0]<=0||matrix[5]>=0))fail('Cartas rotacionadas ou invertidas precisam ser convertidas em tiles.');
  let epsg=null;for(let i=4;i+3<keys.length;i+=4)if([2048,3072].includes(keys[i])&&keys[i+1]===0&&keys[i+2]===1&&keys[i+3]!==32767)epsg=keys[i+3];
  if(!epsg)fail('A projeção da carta precisa ter um código EPSG reconhecível. Converta esta carta em tiles.');
  return {width,height,bands,epsg,photometric,alpha};
 }
 function colorFunction(raster,info){
  if(info.photometric===6)return undefined; // GeoRasterLayer converts YCbCr to RGB itself.
  return values=>{
   if(!values||values.every(v=>v==null||!Number.isFinite(v)||v===raster.noDataValue))return null;
   let r,g,b,a=255;
   if(info.photometric===3){const c=raster.palette?.[values[0]];if(!c)return null;[r,g,b]=c;a=c[3]??255;}
   else if(info.photometric===0||info.photometric===1){r=g=b=info.photometric===0?255-values[0]:values[0];if(info.bands===2)a=values[1];}
   else{[r,g,b]=values;if(info.bands===4)a=values[3];}
   if(a===0)return null;
   if(info.alpha===1&&a<255){const scale=255/a;r=Math.min(255,r*scale);g=Math.min(255,g*scale);b=Math.min(255,b*scale);}
   return `rgba(${r},${g},${b},${a/255})`;
  };
 }
 const api=Object.freeze({inspect,colorFunction});root.SARChartRaster=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
