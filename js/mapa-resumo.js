'use strict';
(function(){
 const $=id=>document.getElementById(id),M=window.SARDrift,G=window.SARMapGeometry,bridge=window.SARCalculatorMap,session=window.SARMapSession;
 if(!$('open-map')||!bridge)return;
 const build=document.querySelector('meta[name="lsar-build"]')?.content||'1';
 let state=bridge.getState(),map,layers,bounds;
 const num=n=>n.toLocaleString('pt-BR',{maximumFractionDigits:3});
 const text=value=>{const p=document.createElement('p');p.textContent=value;return p;};
 const position=p=>M.formatCoordinate(p.latitude,'lat')+' · '+M.formatCoordinate(p.longitude,'lon');
 const icon=(kind,label)=>L.divIcon({className:'sar-map-marker',html:'<span class="sar-pin '+kind+'">'+label+'</span>',iconSize:[38,38],iconAnchor:[19,19]});
 function fit(){if(bounds?.isValid())map.fitBounds(bounds,{padding:[30,30],maxZoom:15});}
 function render(focus=false){
  if(!map)return;layers.clearLayers();bounds=L.latLngBounds([]);let message='Informe um LKP e calcule a deriva para visualizar o DATUM.';
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
    L.polygon(corners,{color:'#d28a20',fillColor:'#e4aa40',fillOpacity:.08,weight:2}).bindPopup(text('Área nominal dos meios independentes: '+num(state.search.area)+' MN² · lado '+num(state.search.side)+' MN · eixo '+num(angle)+'°V.')).addTo(layers);
    corners.forEach(p=>bounds.extend(p));message+=' R = '+num(r)+' MN; lado = '+num(state.search.side)+' MN; eixo = '+num(angle)+'°V.';
   }
  }catch(error){message=error.message;}
  else if(d)message='A posição excede a latitude disponível neste mapa.';
  $('map-mission-status').textContent=message;if(focus)fit();
 }
 function resource(path,css=false){return new Promise((resolve,reject)=>{
  const element=document.createElement(css?'link':'script');let timer;
  const fail=()=>{clearTimeout(timer);element.remove();reject(Error('Não foi possível abrir o mapa. Confira a conexão e tente novamente.'));};
  if(css){element.rel='stylesheet';element.href=path+'?v='+build;}else element.src=path+'?v='+build;
  element.onload=()=>{clearTimeout(timer);resolve();};element.onerror=fail;timer=setTimeout(fail,30000);document.head.append(element);
 });}
 $('open-map').onclick=async()=>{
  $('open-map').disabled=true;$('map-load-status').textContent='Abrindo mapa…';
  try{
   if(!window.L)await Promise.all([resource('vendor/leaflet.css',true),resource('vendor/leaflet.js')]);
   $('map-workspace').hidden=false;map=L.map('sar-map',{scrollWheelZoom:false,worldCopyJump:true}).setView([-20.3,-40.28],9);
   const base=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'}).addTo(map);
   base.on('tileerror',()=>{$('map-load-status').textContent='O mapa base requer conexão. Os cálculos continuam disponíveis.';});
   L.control.scale({imperial:false}).addTo(map);layers=L.featureGroup().addTo(map);render(true);map.invalidateSize();$('open-map').hidden=true;$('map-load-status').textContent='';
   if(typeof ResizeObserver==='function')new ResizeObserver(()=>map.invalidateSize({pan:false})).observe($('sar-map'));
  }catch(error){map?.remove();map=null;$('map-workspace').hidden=true;$('open-map').disabled=false;$('map-load-status').textContent=error.message;}
 };
 $('fit-mission').onclick=fit;
 $('map-new-tab').href='mapa.html?v='+build;
 $('map-new-tab').onclick=event=>{if(!session?.publish(state)){event.preventDefault();$('map-load-status').textContent='Permita armazenamento neste navegador para compartilhar os cálculos com a nova aba.';}};
 document.addEventListener('lsar:map-state',event=>{state=event.detail;render(true);});

})();
