'use strict';
(function(){
 const $=id=>document.getElementById(id),M=window.SARDrift,G=window.SARMapGeometry,bridge=window.SARCalculatorMap;
 if(!$('open-map')||!M||!G||!bridge)return;
 const build=document.querySelector('meta[name="lsar-build"]')?.content||'1';
 const versioned=path=>path+'?v='+encodeURIComponent(build),assets=new Map();
 let map,base,mission,chart=null,chartBounds=null,picking=false,selection=null,loading=false,expanded=false;
 let state=bridge.getState(),catalog=[];
 const position=p=>M.formatCoordinate(p.latitude,'lat')+' · '+M.formatCoordinate(p.longitude,'lon');
 const textNode=(tag,text)=>{const n=document.createElement(tag);n.textContent=text;return n;};
 function load(path,css=false){
  if(assets.has(path))return assets.get(path);
  const promise=new Promise((resolve,reject)=>{
   const node=document.createElement(css?'link':'script');let timer;
   const fail=()=>{clearTimeout(timer);node.remove();assets.delete(path);reject(Error('Não foi possível carregar os recursos do mapa. Confira a conexão e tente novamente.'));};
   if(css){node.rel='stylesheet';node.href=versioned(path);}else node.src=versioned(path);
   node.onload=()=>{clearTimeout(timer);resolve();};node.onerror=fail;
   timer=setTimeout(fail,30000);document.head.appendChild(node);
  });assets.set(path,promise);return promise;
 }
 function fit(bounds){if(bounds?.isValid())map.fitBounds(bounds,{padding:[30,30],maxZoom:15});}
 function missionBounds(){return mission?.getBounds();}
 function fitMission(){const b=missionBounds();if(b?.isValid())fit(b);else $('map-mission-status').textContent='Informe um LKP válido ou escolha um ponto no mapa. Calcule a deriva para exibir o DATUM.';}
 function icon(kind,label){return L.divIcon({className:'sar-map-marker',html:'<span class="sar-pin '+kind+'">'+label+'</span>',iconSize:[38,38],iconAnchor:[19,19]});}
 function render(focus=false){
  if(!map)return;mission.clearLayers();let message='',lkp=state.lkp,datum=state.drift?.datum;
  if(lkp&&G.visible(lkp)){
   L.marker([lkp.latitude,lkp.longitude],{icon:icon('lkp','L'),title:'LKP',alt:'LKP'}).bindPopup(textNode('p','LKP · '+position(lkp))).addTo(mission);
   message='LKP exibido. Calcule a deriva para estimar o DATUM.';
  }else if(lkp)message='O LKP está além de ±85,05° de latitude, fora da projeção deste mapa. O cálculo geográfico continua disponível.';
  else message='Informe um LKP válido ou escolha um ponto no mapa. O mapa é opcional para os cálculos.';
  if(datum&&G.visible(datum)&&G.visible(datum.lkp)){
   try{
    const path=G.path(datum.lkp,datum.distance,datum.direction),point=path[path.length-1];
    L.polyline(path,{color:'#087970',weight:4,dashArray:'8 6'}).bindPopup(textNode('p','LKP → DATUM · '+datum.distance.toLocaleString('pt-BR',{maximumFractionDigits:3})+' MN')).addTo(mission);
    L.marker(point,{icon:icon('datum','D'),title:'DATUM estimado',alt:'DATUM estimado'}).bindPopup(textNode('p','DATUM estimado · '+position(datum))).addTo(mission);
    message='LKP e DATUM calculado exibidos. Linha tracejada: deslocamento estimado por rumo constante.';
    if(state.search?.side>0){
     const corners=G.square(datum,state.search.side,point[1]);
     L.polygon(corners,{color:'#d28a20',fillColor:'#e4aa40',fillOpacity:.15,weight:2}).bindPopup(textNode('p','Área nominal: '+state.search.area.toLocaleString('pt-BR',{maximumFractionDigits:3})+' MN² · lado: '+state.search.side.toLocaleString('pt-BR',{maximumFractionDigits:3})+' MN · quadrado aproximado centrado no DATUM.')).addTo(mission);
     message+=' Quadrado: área nominal total, com lado √At, orientado N/S.';
    }
   }catch(error){message+=' '+error.message;}
  }else if(datum)message='O DATUM ou o LKP ultrapassa o limite de latitude deste mapa (85,05°). Consulte as coordenadas no resultado.';
  if(state.search&&!datum)message+=' Para posicionar a área nominal, informe o LKP e calcule a deriva.';
  $('map-mission-status').textContent=message;if(focus)fitMission();
 }
 document.addEventListener('lsar:map-state',e=>{const before=JSON.stringify(state.drift?.datum),side=state.search?.side;state=e.detail;render(!!state.drift?.datum&&(JSON.stringify(state.drift.datum)!==before||(state.search?.side!==undefined&&state.search.side!==side)));});
 function setPicking(value){picking=value;$('pick-lkp').setAttribute('aria-pressed',String(value));$('pick-lkp').textContent=value?'Cancelar escolha do LKP':'Escolher LKP no mapa';$('sar-map').classList.toggle('map-picking',value);$('map-instruction').textContent=value?'Toque na posição desejada e confirme “Usar como LKP” no balão.':'Para escolher uma posição, ative “Escolher LKP no mapa”, toque no local e confirme no balão.';if(!value&&selection){map.removeLayer(selection);selection=null;}}
 async function readCatalog(){
  try{
   const response=await fetch(versioned('cartas/catalogo.json'),{cache:'no-cache'});if(!response.ok)throw Error();const data=await response.json();
   catalog=Array.isArray(data.charts)?data.charts.filter(c=>typeof c.id==='string'&&typeof c.name==='string'&&typeof c.url==='string'&&Array.isArray(c.bounds)&&c.bounds.length===4&&c.bounds.every(Number.isFinite)&&c.bounds[0]<c.bounds[2]&&c.bounds[1]<c.bounds[3]&&Math.abs(c.bounds[0])<=85.05112878&&Math.abs(c.bounds[2])<=85.05112878&&Math.abs(c.bounds[1])<=180&&Math.abs(c.bounds[3])<=180&&Number.isInteger(c.minZoom)&&Number.isInteger(c.maxZoom)&&c.minZoom>=0&&c.maxZoom<=22&&c.maxZoom>=c.minZoom):[];
   for(const c of catalog){const option=document.createElement('option');option.value=c.id;option.textContent=c.name;$('chart-catalog').appendChild(option);}
   $('chart-catalog-status').textContent=catalog.length?'Selecione uma carta para sobrepor ao mapa.':'Ainda não há cartas publicadas no catálogo. Você pode abrir um GeoTIFF do dispositivo.';
  }catch{$('chart-catalog-status').textContent='Catálogo indisponível. Você pode abrir um GeoTIFF do dispositivo; em arquivo local, o catálogo precisa de hospedagem HTTP.';}
 }
 $('open-map').onclick=async()=>{
  $('open-map').disabled=true;$('map-load-status').textContent='Abrindo mapa…';
  try{
   await Promise.all([load('vendor/leaflet.css',true),load('vendor/leaflet.js')]);
   $('map-workspace').hidden=false;
   map=L.map('sar-map',{scrollWheelZoom:false,worldCopyJump:true}).setView([-20.3,-40.28],9);
   base=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'}).addTo(map);
   base.on('tileerror',()=>{$('map-load-status').textContent='O mapa base não carregou. Confira a conexão; os cálculos e a carta local continuam disponíveis.';});
   L.control.scale({imperial:false}).addTo(map);mission=L.featureGroup().addTo(map);
   map.on('click',e=>{
    if(!picking)return;if(selection)map.removeLayer(selection);
    const latitude=e.latlng.lat,longitude=((e.latlng.lng+180)%360+360)%360-180,content=document.createElement('div');
    content.append(textNode('p',position({latitude,longitude})));const button=textNode('button','Usar como LKP');button.type='button';button.className='map-use-point';
    button.onclick=()=>{bridge.setLKP(latitude,longitude);setPicking(false);$('map-instruction').textContent='LKP atualizado nos campos e salvo neste navegador. Confira o horário do LKP e calcule a deriva para obter o DATUM.';};content.append(button);
    selection=L.marker([latitude,longitude],{icon:icon('selection','?')}).addTo(map).bindPopup(content).openPopup();
   });
   render(true);map.invalidateSize();$('open-map').hidden=true;$('map-load-status').textContent='';readCatalog();
   if(typeof ResizeObserver==='function')new ResizeObserver(()=>map.invalidateSize({pan:false})).observe($('sar-map'));
  }catch(error){if(map){map.remove();map=null;}$('map-workspace').hidden=true;$('map-load-status').textContent=error.message;$('open-map').disabled=false;}
 };
 $('pick-lkp').onclick=()=>setPicking(!picking);$('fit-mission').onclick=fitMission;
 $('map-expand').onclick=()=>{expanded=!expanded;$('sar-map').classList.toggle('map-expanded',expanded);$('map-expand').textContent=expanded?'Reduzir mapa':'Ampliar mapa';$('map-expand').setAttribute('aria-pressed',String(expanded));map.invalidateSize();};
 $('map-base').onchange=()=>{if($('map-base').checked)base.addTo(map);else map.removeLayer(base);};
 function chartControls(){const on=!!chart;for(const id of ['chart-visible','chart-opacity','fit-chart','remove-chart'])$(id).disabled=!on||loading;$('chart-file').disabled=loading;$('chart-catalog').disabled=loading;}
 function replaceChart(layer,bounds,message){if(chart)map.removeLayer(chart);chart=layer;chartBounds=bounds;$('chart-visible').checked=true;layer.setOpacity(Number($('chart-opacity').value)/100);layer.addTo(map);$('chart-status').textContent=message;chartControls();fit(bounds);}
 $('chart-visible').onchange=()=>{if(!chart)return;if($('chart-visible').checked)chart.addTo(map);else map.removeLayer(chart);};
 $('chart-opacity').oninput=()=>{const value=Number($('chart-opacity').value);$('chart-opacity-value').textContent=value+'%';chart?.setOpacity(value/100);};
 $('fit-chart').onclick=()=>fit(chartBounds);
 $('remove-chart').onclick=()=>{if(chart)map.removeLayer(chart);chart=null;chartBounds=null;$('chart-file').value='';$('chart-catalog').value='';$('chart-status').textContent='Nenhuma carta carregada.';chartControls();};
 $('chart-catalog').onchange=()=>{
  const c=catalog.find(c=>c.id===$('chart-catalog').value);if(!c){$('remove-chart').click();return;}
  try{
   // Catalogue is hosted by the site owner. Accept only same-origin relative tile paths.
   if(!/^cartas\/[a-zA-Z0-9_./-]+\/\{z\}\/\{x\}\/\{y\}\.png$/.test(c.url)||c.url.includes('..'))throw Error('Endereço da carta inválido no catálogo.');
   const bounds=L.latLngBounds([[c.bounds[0],c.bounds[1]],[c.bounds[2],c.bounds[3]]]);
   const attribution=document.createElement('span');attribution.textContent=c.attribution||c.name;
   const layer=L.tileLayer(c.url+'?v='+encodeURIComponent(c.version||build),{bounds,minZoom:0,maxZoom:22,minNativeZoom:c.minZoom,maxNativeZoom:c.maxZoom,noWrap:true,attribution:attribution.innerHTML});
   layer.on('tileerror',()=>{$('chart-status').textContent='Alguns blocos da carta não carregaram. Confira a publicação da pasta de tiles e a conexão.';});
   replaceChart(layer,bounds,'Carta publicada: '+c.name);$('chart-file').value='';
  }catch(error){$('chart-status').textContent=error.message;}
 };
 $('chart-file').onchange=async()=>{
  const file=$('chart-file').files[0];if(!file||loading)return;
  if(/\.kap$/i.test(file.name)){$('chart-status').textContent='KAP precisa ser convertido em tiles antes de publicar. Consulte “Como disponibilizar uma carta KAP ou GeoTIFF no site”.';$('chart-file').value='';return;}
  if(!/\.(tif|tiff|geotiff)$/i.test(file.name)||file.size>40*1024*1024){$('chart-status').textContent='Selecione um GeoTIFF de até 40 MB. Para cartas maiores, use a conversão em tiles.';$('chart-file').value='';return;}
  loading=true;chartControls();$('chart-status').textContent='Lendo carta no dispositivo…';
  try{
   const buffer=await file.arrayBuffer();await load('js/cartas-raster.js');const info=window.SARChartRaster.inspect(buffer);
   await load('vendor/georaster.js');await load('vendor/georaster-layer.js');
   const raster=await parseGeoraster(buffer);
   if(!raster.projection||Number(raster.projection)!==info.epsg)throw Error('A projeção da carta não pôde ser confirmada. Converta esta carta em tiles.');
   const layer=new GeoRasterLayer({georaster:raster,resolution:256,opacity:.85,pane:'tilePane',resampleMethod:'nearest',pixelValuesToColorFn:window.SARChartRaster.colorFunction(raster,info)}),bounds=layer.getBounds();
   if(!bounds?.isValid()||!Number.isFinite(bounds.getWest())||!Number.isFinite(bounds.getEast())||bounds.getWest() < -180||bounds.getEast()>180||bounds.getEast()-bounds.getWest()>180||bounds.getSouth() < -85.05112878||bounds.getNorth()>85.05112878)throw Error('A extensão geográfica desta carta não é compatível com o mapa. Converta em tiles e confira o georreferenciamento.');
   replaceChart(layer,bounds,'Carta local: '+file.name+' · '+info.width+' × '+info.height+' pixels · EPSG:'+info.epsg+'.');$('chart-catalog').value='';
  }catch(error){$('chart-status').textContent='Não foi possível abrir a carta. '+(error.message||String(error)||'Formato não suportado.')+(chart?' A carta anterior foi mantida.':'');}
  finally{loading=false;chartControls();$('chart-file').value='';}
 };
})();
