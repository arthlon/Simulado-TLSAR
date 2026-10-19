'use strict';
(function(){
 const $=id=>document.getElementById(id),M=window.SARDrift,G=window.SARMapGeometry,bridge=window.SARCalculatorMap,session=window.SARMapSession;
 if(!$('sar-map')||!bridge)return;
 const build=document.querySelector('meta[name="lsar-build"]')?.content||'1';
 let state=bridge.getState(),map,layers,bounds,loading=false,needsFit=true;const assets=new Map();
 const num=n=>n.toLocaleString('pt-BR',{maximumFractionDigits:3});
 const text=value=>{const p=document.createElement('p');p.textContent=value;return p;};
 const position=p=>M.formatCoordinate(p.latitude,'lat')+' · '+M.formatCoordinate(p.longitude,'lon');
 const icon=(kind,label)=>L.divIcon({className:'sar-map-marker',html:'<span class="sar-pin '+kind+'">'+label+'</span>',iconSize:[38,38],iconAnchor:[19,19]});
 function fit(){if(!map)return;if($('map-section').hidden){needsFit=true;return;}map.invalidateSize({pan:false});if(bounds?.isValid())map.fitBounds(bounds,{padding:[30,30],maxZoom:15});needsFit=false;}
 function render(focus=false){
  if(!map)return;layers.clearLayers();bounds=L.latLngBounds([]);let message=state.search?'Área calculada: '+num(state.search.area)+' MN² · R = '+num(state.search.radius)+' MN. Informe o LKP e calcule a deriva para posicionar a área no mapa.':'Informe um LKP e calcule a deriva para visualizar o DATUM.';
  if(G.visible(state.lkp)){const p=[state.lkp.latitude,state.lkp.longitude];bounds.extend(p);L.marker(p,{icon:icon('lkp','L'),title:'LKP'}).bindPopup(text('LKP · '+position(state.lkp))).addTo(layers);}
  const d=state.drift?.datum;
  if(d&&G.visible(d)&&G.visible(d.lkp))try{
   const path=G.path(d.lkp,d.distance,d.direction),point=path[path.length-1];bounds.extend(point);
   L.polyline(path,{color:'#087970',weight:3,dashArray:'8 6'}).bindPopup(text('Deriva LKP → DATUM · '+num(d.distance)+' MN')).addTo(layers);
   L.marker(point,{icon:icon('datum','D'),title:'DATUM na chegada'}).bindPopup(text('DATUM na chegada · '+position(d))).addTo(layers);
   message='LKP, DATUM e deslocamento estimado até a chegada.';
   if(state.search?.radius>0){
    const angle=0,r=state.search.radius,corners=G.square(d,state.search.side,point[1],angle);
    L.circle(point,{radius:r*1852,color:'#9361a5',weight:2,fill:false,dashArray:'6 4'}).bindPopup(text('R = '+num(r)+' MN · centro no DATUM · círculo inscrito no quadrado.')).addTo(layers);
    L.polygon(corners,{color:'#d28a20',fillColor:'#e4aa40',fillOpacity:.08,weight:2}).bindPopup(text('Área nominal dos meios independentes: '+num(state.search.area)+' MN² · lado '+num(state.search.side)+' MN · eixo '+num(angle)+'°.')).addTo(layers);
    corners.forEach(p=>bounds.extend(p));message+=' R = '+num(r)+' MN; lado = '+num(state.search.side)+' MN; eixo = '+num(angle)+'°.';
   }
  }catch(error){message=error.message;}
  else if(d)message='A posição excede a latitude disponível neste mapa.';
  $('map-mission-status').textContent=message;if(focus)fit();
 }
 function resource(path,css=false){
  if(assets.has(path))return assets.get(path);
  const promise=new Promise((resolve,reject)=>{
   const element=document.createElement(css?'link':'script');let timer;
   const fail=()=>{clearTimeout(timer);element.remove();assets.delete(path);reject(Error('Não foi possível carregar o mapa. Confira a conexão. Os cálculos foram mantidos.'));};
   if(css){element.rel='stylesheet';element.href=path+'?v='+build;}else element.src=path+'?v='+build;
   element.onload=()=>{clearTimeout(timer);resolve();};element.onerror=fail;timer=setTimeout(fail,30000);document.head.append(element);
  });assets.set(path,promise);return promise;
 }
 async function ensureMap(){
  if(map){map.invalidateSize({pan:false});if(needsFit)fit();return;}if(loading)return;
  loading=true;$('retry-summary-map').hidden=true;$('map-load-status').textContent='Carregando mapa…';
  try{
   await Promise.all([resource('vendor/leaflet.css',true),window.L?Promise.resolve():resource('vendor/leaflet.js')]);
   map=L.map('sar-map',{scrollWheelZoom:false,worldCopyJump:true}).setView([-20.3,-40.28],9);
   const base=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'}).addTo(map);
   base.on('tileerror',()=>{$('map-load-status').textContent='O mapa base requer conexão. Os cálculos e os traçados continuam disponíveis.';});
   L.control.scale({imperial:false}).addTo(map);layers=L.featureGroup().addTo(map);render(true);map.invalidateSize();$('map-load-status').textContent='';
   if(typeof ResizeObserver==='function')new ResizeObserver(()=>{map.invalidateSize({pan:false});if(needsFit&&!$('map-section').hidden)fit();}).observe($('sar-map'));
  }catch(error){map?.remove();map=null;layers=null;$('retry-summary-map').hidden=false;$('map-load-status').textContent=error.message;}
  finally{loading=false;}
 }
 $('retry-summary-map').onclick=ensureMap;
 document.addEventListener('lsar:workspace-view',e=>{if(e.detail?.id==='map-section')ensureMap();});
 addEventListener('online',()=>{if(!$('map-section').hidden)ensureMap();});
 $('fit-mission').onclick=fit;
 $('map-new-tab').href='mapa.html?v='+build;
 $('map-new-tab').onclick=event=>{if(!session?.publish(state)){event.preventDefault();$('map-load-status').textContent='Permita armazenamento neste navegador para compartilhar os cálculos com a nova aba.';}};
 document.addEventListener('lsar:map-state',event=>{state=event.detail;render(true);});

})();
