'use strict';
(function(){
 const $=id=>document.getElementById(id),M=window.SARDrift,G=window.SARMapGeometry,bridge=window.SARCalculatorMap;
 if(!$('open-map')||!M||!G||!bridge)return;
 const build=document.querySelector('meta[name="lsar-build"]')?.content||'1';
 const versioned=path=>path+'?v='+encodeURIComponent(build),assets=new Map();
 let map,base,mission,chart=null,chartBounds=null,picking=false,selection=null,loading=false,expanded=false;
 const P=window.SARSearchPlans,session=window.SARMapSession;
 let state=bridge.getState(),catalog=[],planData=[],allBounds=null;
 const defaults={circle:true,future:true,lkp:true,datum:true,drift:true,area:true,subareas:true,plans:true,crossings:true,labels:true,values:true};
 const stored=session?.readOptions()||{};let lastOptions=stored;
 let ui={...defaults,...stored.layers},configs=stored.configs||{},evaluation=!!stored.evaluation;
 let planning={areaMode:'auto',areaHeading:'0',forecast:0,...stored.planning};
 let areaHeading=0,displaySearch=null;
 let coordination={mode:'individual',speedMode:'required',headingMode:'auto',heading:'0',...(stored.coordination||{})},joint=null,jointError='';
 const colors=['#8b3bb0','#c54d21','#2368b5','#087970','#9a6515','#b12c65'];
 const shown=key=>!!ui[key]&&(!evaluation||!['labels','values'].includes(key));
 const num=(x,d=3)=>Number(x).toLocaleString('pt-BR',{maximumFractionDigits:d});
 const escape=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function persist(){session?.saveOptions({layers:ui,configs,evaluation,coordination,planning,chartId:$('chart-catalog').value,base:$('map-base').checked,opacity:$('chart-opacity').value});}
 function applyVisibility(){
  $('map-evaluation').checked=evaluation;
  document.querySelectorAll('[data-overlay]').forEach(input=>{input.checked=!!ui[input.dataset.overlay];input.disabled=evaluation&&['labels','values'].includes(input.dataset.overlay);});
  for(const id of ['area-orientation-controls','forecast-controls','plan-mode-controls','plan-config','plan-results','plan-status','map-mission-status'])$(id).hidden=evaluation;
  $('map-legend').hidden=evaluation||!shown('labels');
  document.querySelectorAll('[data-group-for]').forEach(group=>group.hidden=evaluation);
  document.querySelector('.map-control-details').open=evaluation?true:document.querySelector('.map-control-details').open;
  document.querySelector('.plan-method').hidden=evaluation;
  $('plan-title').textContent=evaluation?'Planos · respostas ocultas':coordination.mode==='CSC'?'Pente coordenado · navio e aeronave':'Planos de busca por meio';
  if(evaluation&&picking)setPicking(false);
  $('pick-lkp').disabled=evaluation||!!session?.standalone;
 }
 function decorate(layer,text){if(shown('values'))layer.bindPopup(textNode('p',text));return layer;}
 function buildPlans(){
  planData=[];joint=null;jointError='';displaySearch=state.search;
  try{areaHeading=G.orientation(state,planning);}catch{areaHeading=0;}
  $('area-orientation-mode').value=planning.areaMode;
  $('area-orientation-heading').readOnly=planning.areaMode!=='manual';
  if(planning.areaMode!=='manual')$('area-orientation-heading').value=areaHeading;
  $('area-orientation-status').textContent='Eixo longitudinal: '+num(areaHeading,2)+'°V. Automático: paralelo à deriva prevista sob condições constantes; revise se a previsão durante a busca mudar.';
  const units=state.search?.units,datum=state.drift?.datum;
  if(!datum){$('forecast-status').textContent='Calcule um DATUM com LKP para visualizar a previsão.';$('forecast-time-value').textContent='0 h';}
  if(!P||!datum||!units?.length||!state.search?.side){$('plan-status').textContent='Calcule a deriva com LKP e a área de cada meio para gerar os planos.';return;}
  if(coordination.mode==='CSC'){
   try{
    if(units.length!==2)throw Error('O CSC desta versão exige exatamente dois meios calculados. Cadastre um navio e uma aeronave na etapa de área de busca.');
    if(!coordination.airId){const suggested=units.find(u=>['helicopter','fixed'].includes(u.platform))||units[1];coordination.airId=suggested.id;coordination.shipId=units.find(u=>u.id!==suggested.id).id;}
    const aircraft=units.find(u=>u.id===coordination.airId),ship=units.find(u=>u.id===coordination.shipId);
    if(!aircraft||!ship)throw Error('Selecione os meios do par coordenado.');
    displaySearch=P.coordinatedArea(aircraft,ship);
    const heading=coordination.headingMode==='manual'?M.bearing(coordination.heading,'Rumo do navio'):areaHeading;
    joint=P.coordinated(aircraft,ship,displaySearch.side,{...coordination,heading,areaHeading});
    for(const [index,unit,plan,role] of [[0,ship,joint.shipPlan,'Navio'],[1,aircraft,joint.airPlan,'Aeronave']]){
     const config=configs[unit.id]||(configs[unit.id]={type:'PS',visible:true});
     planData.push({unit,plan,config,role,color:colors[index],rect:plan.rect});
    }
    $('plan-status').textContent='CSC conjunto: o navio segue o eixo e a aeronave cruza sobre ele. Área CSC dimensionada pelo esforço aéreo, sem somar a área do navio. Tempos de ligação são informados separadamente.';
   }catch(error){jointError=error.message;$('plan-status').textContent=jointError;}
   return;
  }
  try{
   const parts=P.partition(units,state.search.side);
   parts.forEach(({unit,rect},index)=>{
    const config=configs[unit.id]||(configs[unit.id]={type:'PS',headingMode:'auto',heading:'0',reverse:false,visible:true});
    try{const automatic=config.type==='SS'?(state.drift.windSpeed>0?M.normalize(state.drift.leewayDirection+180):0):(state.drift.direction??0);const heading=config.headingMode==='manual'?M.bearing(config.heading,'Rumo inicial'):automatic;const plan=P.generate(unit,rect,{...config,heading:M.normalize(heading-areaHeading),radius:config.radius||state.search.radius},units.length>1);planData.push({unit,plan,config,color:colors[index%colors.length],rect});}
    catch(error){planData.push({unit,error:error.message,config,color:colors[index%colors.length],rect});}
   });
   $('plan-status').textContent=units.length>1?'Subáreas proporcionais a Ai, distribuídas transversalmente ao eixo da área. Cada meio usa seu próprio S, V e T.':'Escolha o padrão do meio. O DATUM permanece no centro da área.';
  }catch(error){$('plan-status').textContent=error.message;}
 }
 function planControls(){
  const multiple=(state.search?.units?.length||0)>1;
  $('plan-organization').value=coordination.mode;
  if(coordination.mode==='CSC'){
   const units=state.search?.units||[],opts=selected=>'<option value="">Selecione</option>'+units.map(u=>`<option value="${escape(u.id)}" ${u.id===selected?'selected':''}>${escape(u.name)}</option>`).join('');
   $('plan-config').innerHTML=`<fieldset class="plan-card csc-config"><legend>Pente coordenado · par navio–aeronave</legend><div class="form-grid"><label>Navio<select data-csc-field="shipId">${opts(coordination.shipId)}</select></label><label>Aeronave<select data-csc-field="airId">${opts(coordination.airId)}</select></label><label>Orientação do navio<select data-csc-field="headingMode"><option value="auto" ${coordination.headingMode!=='manual'?'selected':''}>Automática · eixo longitudinal da área</option><option value="manual" ${coordination.headingMode==='manual'?'selected':''}>Manual</option></select></label><label ${coordination.headingMode==='manual'?'':'hidden'}>Rumo manual do navio (°V)<input type="number" min="0" max="359.999" step="any" data-csc-field="heading" value="${escape(coordination.heading)}"></label><label>Como sincronizar<select data-csc-field="speedMode"><option value="required" ${coordination.speedMode==='required'?'selected':''}>Informar L → calcular Vs do navio</option><option value="fixed" ${coordination.speedMode==='fixed'?'selected':''}>Manter Vs do navio → calcular L</option></select></label>${coordination.speedMode==='required'?`<label class="span-two">Comprimento L da pernada da aeronave (MN)<input type="number" min="0" step="any" data-csc-field="legLength" value="${escape(coordination.legLength||'')}" placeholder="Automático: lado inscrito menos S"></label>`:''}<label>Limite total opcional (h)<input type="number" min="0" step="any" data-csc-field="maxTotalTime" value="${escape(coordination.maxTotalTime||'')}" placeholder="Busca + ligações"></label></div><p class="helper">No mapa, navio = linha tracejada; aeronave = linha contínua. As setas indicam a sequência das pernadas e os marcadores de encontro indicam os cruzamentos sincronizados. S e Va vêm do cálculo da aeronave. Vs informado e T vêm do navio. No modo por L, a velocidade calculada de coordenação é usada somente neste plano; o quadrado CSC usa S × Va × mínimo(Ta, Tn), um limite nominal de capacidade aérea. Não soma o navio e não desconta ligações ou perdas de manobra desse limite. A área independente da calculadora permanece disponível para comparação.</p><p class="error" id="csc-error">${escape(jointError)}</p></fieldset>`;
  }else $('plan-config').innerHTML=planData.map(({unit,config,color})=>`<fieldset class="plan-card" data-plan="${escape(unit.id)}"><legend><i style="background:${color}"></i>${escape(unit.name)}</legend><div class="form-grid"><label>Padrão de busca<select data-plan-field="type">${Object.entries(P.names).map(([id,name])=>`<option value="${id}" ${config.type===id?'selected':''} ${multiple&&['SS','VS'].includes(id)?'disabled':''}>${name}</option>`).join('')}</select></label>${['PS','CS'].includes(config.type)?`<label>Sentido da primeira pernada<select data-plan-field="reverse"><option value="false" ${!config.reverse?'selected':''}>Normal · eixo da área</option><option value="true" ${config.reverse?'selected':''}>Inverter</option></select></label>`:`<label>Rumo inicial<select data-plan-field="headingMode"><option value="auto" ${config.headingMode!=='manual'?'selected':''}>Automático · SS contra o vento; VS na deriva</option><option value="manual" ${config.headingMode==='manual'?'selected':''}>Manual</option></select></label><label ${config.headingMode==='manual'?'':'hidden'}>Rumo manual (°V)<input type="number" min="0" max="359.999" step="any" data-plan-field="heading" value="${escape(config.heading??0)}"></label>`}${config.type==='VS'?`<label>Raio do setor (MN)<input type="number" min="0" step="any" max="${state.search.radius}" data-plan-field="radius" value="${escape(config.radius||state.search.radius)}"></label><label>Passagens<select data-plan-field="passes"><option value="1" ${Number(config.passes||1)===1?'selected':''}>Uma</option><option value="2" ${Number(config.passes)===2?'selected':''}>Duas · segunda girada 30°</option></select></label>`:''}<label>Limite total opcional (h)<input type="number" min="0" step="any" data-plan-field="maxTotalTime" value="${escape(config.maxTotalTime||'')}" placeholder="Busca + ligações"></label></div><p class="helper">SS sem vento: rumo automático 000°V. T é produtivo; ligações acrescentam tempo. S = ${num(unit.result.spacing)} MN · V = ${num(unit.result.speed)} nós · T = ${num(unit.result.time)} h · Ai = ${num(unit.result.area)} MN².</p></fieldset>`).join('');
  $('plan-layer-controls').innerHTML=planData.map(({unit,config,color})=>`<label class="map-check"><input type="checkbox" data-plan-visible="${escape(unit.id)}" ${config.visible!==false?'checked':''}><i class="plan-color" style="background:${color}"></i>${escape(unit.name)}</label>`).join('');
 }
 function reports(){
  const summary=joint?`<article class="plan-report csc-summary"><h4>Pente coordenado (CSC) · sincronização</h4><div class="formula-line">Vs = S × Va / (L + S) = ${num(joint.s)} × ${num(joint.va)} / (${num(joint.length)} + ${num(joint.s)}) = <strong>${num(joint.vs)} nós</strong></div><p class="helper">Vs usado no desenho: <strong>${num(joint.vs)} nós</strong> · V informado para o navio: ${num(joint.suppliedVs)} nós.<br>L: ${num(joint.length)} MN · S: ${num(joint.s)} MN · Va: ${num(joint.va)} nós · rumo do navio: ${num(joint.heading,2)}°V.<br>Margens laterais: ${num(joint.margin)} MN · linhas separadas por S · avanço pelo eixo da área.<br>Tempo conjunto: ${num(joint.time)} h · ${joint.crossings.length} encontros previstos · ${escape(joint.reason)}.<br>Área nominal CSC (capacidade aérea): ${num(joint.nominal.area)} MN² · lado ${num(joint.nominal.side)} MN · R ${num(joint.nominal.radius)} MN.<br>Área independente anterior: ${num(state.search.area)} MN². Limite nominal de capacidade aérea; não garante cobertura integral nem desconta giros/ligações. Não soma o esforço do navio de referência.</p><details class="reference-details"><summary>Instantes de passagem sobre o navio</summary><div class="table-wrap"><table><thead><tr><th>Encontro</th><th>Pernada da aeronave</th><th>Minutos após início</th></tr></thead><tbody>${joint.crossings.map((c,i)=>`<tr><td>${i+1}</td><td>${c.leg}</td><td>${num(c.time*60,3)}</td></tr>`).join('')}</tbody></table></div></details></article>`:'';
  $('plan-results').innerHTML=summary+planData.map(({unit,plan,error,color})=>{
   if(error)return `<article class="plan-report"><h4>${escape(unit.name)}</h4><p class="error">${escape(error)}</p></article>`;
   const first=plan.points[0],last=plan.points[plan.points.length-1],datum=state.drift.datum;
   let startPosition='Fora da projeção do mapa';try{const p=G.project(G.rotate(first,areaHeading),datum);startPosition=position({latitude:p[0],longitude:((p[1]+180)%360+360)%360-180});}catch{}
   return `<article class="plan-report"><h4><i class="plan-color" style="background:${color}"></i>${escape(unit.name)} · ${escape(plan.name)}${plan.type==='CSC'?' · '+(plan===joint.shipPlan?'Navio':'Aeronave'):''}</h4><p class="helper">CSP: ${escape(startPosition)}<br>Busca: ${num(plan.searchDistance)} MN de ${num(plan.budget)} MN produtivas disponíveis · ligações: ${num(plan.linkDistance)} MN.<br>Tempo executado: busca ${num(plan.searchTime)} h + ligações ${num(plan.linkTime)} h = ${num(plan.time)} h. T produtivo informado: ${num(unit.result.time)} h.<br>Padrão completo exigiria ${num(plan.fullRequiredTime)} h (sem giros) · ${plan.legs.length} pernadas executadas.${plan.edgeAdjusted?' Último espaçamento reduzido para respeitar S/2 na borda.':''}<br>${escape(plan.reason)}${plan.type==='VS'?` · raio do setor ${num(plan.radius)} MN (não equivale a S).`:''}</p><details class="reference-details" data-report-unit="${escape(unit.id)}"><summary>Rumos, distâncias e tempos por pernada</summary><div class="table-wrap"><table><thead><tr><th>Pernada</th><th>Tipo</th><th>Rumo °V</th><th>Distância MN</th><th>Tempo min</th></tr></thead><tbody></tbody></table></div><p class="helper">* Pernada parcial no limite de tempo/área. Tempos usam V constante e não incluem manobra de giro.</p></details></article>`;
  }).join('');
  $('plan-results').querySelectorAll('[data-report-unit]').forEach(details=>details.addEventListener('toggle',()=>{
   const tbody=details.querySelector('tbody');if(!details.open||tbody.childElementCount)return;
   const entry=planData.find(p=>p.unit.id===details.dataset.reportUnit);if(!entry?.plan)return;
   tbody.innerHTML=entry.plan.legs.map((leg,i)=>`<tr><td>${i+1}${leg.partial?' *':''}</td><td>${leg.kind==='ligação'?'Ligação':'Busca'}</td><td>${num(M.normalize(leg.heading+areaHeading),2)}</td><td>${num(leg.distance)}</td><td>${num(leg.time*60,2)}</td></tr>`).join('');
  }));
 }
 function drawPlans(datum,reference){
  for(const {unit,plan,config,color,rect} of planData){
   if(config.visible===false)continue;
   try{
    if(shown('subareas')&&planData.length>1&&plan?.type!=='CSC'){const corners=[{x:rect.west,y:rect.south},{x:rect.west,y:rect.north},{x:rect.east,y:rect.north},{x:rect.east,y:rect.south}].map(p=>G.project(G.rotate(p,areaHeading),datum,reference));decorate(L.polygon(corners,{color,weight:1.5,fillOpacity:.04,dashArray:'5 4'}),unit.name+' · subárea nominal '+num(unit.result.area)+' MN²').addTo(mission);}
    if(!plan||!shown('plans'))continue;
    const points=plan.points.map(p=>G.project(G.rotate(p,areaHeading),datum,reference));
    const isShip=plan.type==='CSC'&&plan===joint?.shipPlan;
    const line=decorate(L.polyline(points,{color,weight:isShip?4:2.5,opacity:.95,dashArray:isShip?'10 6':null}),unit.name+' · '+plan.name+' · '+num(plan.distance)+' MN · '+num(plan.time)+' h');
    if(shown('labels'))line.bindTooltip(textNode('span',unit.name+' · '+plan.type));line.addTo(mission);
    if(points.length>1&&shown('labels')){
     L.circleMarker(points[0],{radius:5,color,fillColor:'#fff',fillOpacity:1}).bindTooltip(textNode('span','CSP · '+unit.name),{permanent:true,direction:'top'}).addTo(mission);
     L.circleMarker(points[points.length-1],{radius:4,color,fillColor:color,fillOpacity:1}).bindTooltip(textNode('span','Fim'),{direction:'bottom'}).addTo(mission);
     // A directional arrow on the first leg clarifies the start without thousands of markers.
     const a=points[0],b=points[1],mid=[(a[0]+b[0])/2,(a[1]+b[1])/2];
     L.marker(mid,{interactive:false,icon:L.divIcon({className:'plan-direction',html:`<span style="color:${color};transform:rotate(${M.normalize(plan.legs[0].heading+areaHeading)}deg)">▲</span>`,iconSize:[20,20],iconAnchor:[10,10]})}).addTo(mission);
    }
    if(plan.type==='CSC'&&shown('labels'))for(const leg of plan.legs.filter(l=>l.kind==='busca').slice(1).filter((_,i)=>i%Math.max(1,Math.ceil(plan.legs.length/60))===0)){
     const a=G.project(G.rotate(leg.from,areaHeading),datum,reference),b=G.project(G.rotate(leg.to,areaHeading),datum,reference);
     L.marker([(a[0]+b[0])/2,(a[1]+b[1])/2],{interactive:false,icon:L.divIcon({className:'plan-direction',html:`<span style="color:${color};transform:rotate(${M.normalize(leg.heading+areaHeading)}deg)">▲</span>`,iconSize:[20,20],iconAnchor:[10,10]})}).addTo(mission);
    }
   }catch(error){if(!evaluation)$('plan-status').textContent=error.message;}
  }
  if(joint&&shown('crossings')&&shown('plans')&&planData.every(entry=>entry.config.visible!==false))for(const [i,c] of joint.crossings.entries()){
   try{const point=G.project(G.rotate(c.point,areaHeading),datum,reference),marker=decorate(L.circleMarker(point,{radius:4,color:'#19354a',weight:1,fillColor:'#fff',fillOpacity:1}),'Encontro '+(i+1)+' · '+num(c.time*60,3)+' min após início conjunto');
    if(shown('labels'))marker.bindTooltip(textNode('span','Encontro '+(i+1)));marker.addTo(mission);
   }catch(error){if(!evaluation)$('plan-status').textContent=error.message;}
  }
 }

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
 function missionBounds(){return allBounds||mission?.getBounds();}
 function fitMission(){const b=missionBounds();if(b?.isValid())fit(b);else $('map-mission-status').textContent='Informe um LKP válido ou escolha um ponto no mapa. Calcule a deriva para exibir o DATUM.';}
 function icon(kind,label){return L.divIcon({className:'sar-map-marker',html:'<span class="sar-pin '+kind+'">'+label+'</span>',iconSize:[38,38],iconAnchor:[19,19]});}
 function render(focus=false){
  if(!map)return;map.closePopup();mission.clearLayers();buildPlans();if($('csc-error'))$('csc-error').textContent=jointError;applyVisibility();allBounds=L.latLngBounds([]);
  let message='',lkp=state.lkp,datum=state.drift?.datum;
  if(lkp&&G.visible(lkp)){
   allBounds.extend([lkp.latitude,lkp.longitude]);
   if(shown('lkp'))decorate(L.marker([lkp.latitude,lkp.longitude],{icon:icon('lkp',shown('labels')?'L':''),title:shown('labels')?'LKP':'Ponto',alt:shown('labels')?'LKP':'Ponto'}),'LKP · '+position(lkp)).addTo(mission);
   message='LKP válido. Calcule a deriva para estimar o DATUM.';
  }else if(lkp)message='O LKP está além de ±85,05° de latitude, fora da projeção deste mapa.';
  else message='Informe um LKP válido ou escolha um ponto no mapa. O mapa é opcional para os cálculos.';
  if(datum&&G.visible(datum)&&G.visible(datum.lkp)){
   try{
    const path=G.path(datum.lkp,datum.distance,datum.direction),point=path[path.length-1];allBounds.extend(point);
    if(shown('drift'))decorate(L.polyline(path,{color:'#087970',weight:3,dashArray:'8 6'}),'LKP → DATUM · '+num(datum.distance)+' MN').addTo(mission);
    if(shown('datum'))decorate(L.marker(point,{icon:icon('datum',shown('labels')?'D':''),title:shown('labels')?'DATUM estimado':'Ponto',alt:shown('labels')?'DATUM estimado':'Ponto'}),'DATUM estimado · '+position(datum)).addTo(mission);
    message='Posições atualizadas. Use os controles ao lado para escolher as informações visíveis.';
    if(displaySearch?.side>0){
     const corners=G.square(datum,displaySearch.side,point[1],areaHeading);corners.forEach(p=>allBounds.extend(p));
     if(shown('area'))decorate(L.polygon(corners,{color:'#d28a20',fillColor:'#e4aa40',fillOpacity:.08,weight:2}),'Área nominal: '+num(displaySearch.area)+' MN² · lado '+num(displaySearch.side)+' MN · centro no DATUM.').addTo(mission);
     if(shown('circle'))decorate(L.circle(point,{radius:displaySearch.radius*1852,color:'#9361a5',weight:2,fill:false,dashArray:'5 4'}),'Raio R = √A / 2 = '+num(displaySearch.radius)+' MN').addTo(mission);
     message+=' Quadrado tangente ao círculo, eixo '+num(areaHeading,2)+'°V.';
    }
    drawPlans(datum,point[1]);drawForecast(datum,point[1]);
   }catch(error){message+=' '+error.message;}
  }else if(datum)message='O DATUM ou o LKP ultrapassa o limite de latitude deste mapa (85,05°). Consulte as coordenadas no resultado.';
  $('map-mission-status').textContent=message;reports();if(focus)fitMission();
 }
 function drawForecast(datum,reference){
  const max=Math.max(1,...(state.search?.units||[]).map(u=>u.result.time),...planData.map(p=>p.plan?.time||0));
  const slider=$('forecast-time');slider.max=max;const hours=Math.min(max,Math.max(0,Number(planning.forecast)||0));slider.value=hours;
  $('forecast-time-value').textContent=num(hours,2)+' h';
  $('forecast-status').textContent='Previsão '+num(hours,2)+' h após a chegada, mantendo vento e corrente constantes. Os trajetos permanecem ancorados no DATUM inicial: não há compensação automática da deriva durante a busca.';
  if(!hours||!shown('future'))return;
  try{const future=G.future(datum,state.drift,hours),point=[future.latitude,G.near(future.longitude,reference)];allBounds.extend(point);
   decorate(L.polyline([[datum.latitude,reference],point],{color:'#9361a5',dashArray:'2 6',weight:2}),'Deslocamento futuro: '+num(state.drift.speed*hours)+' MN').addTo(mission);
   const marker=decorate(L.circleMarker(point,{radius:6,color:'#9361a5',fillOpacity:1}),'DATUM futuro · '+position(future)+' · +'+num(hours)+' h');
   if(shown('labels'))marker.bindTooltip(textNode('span','DATUM +'+num(hours)+' h'));marker.addTo(mission);
   if(displaySearch?.side>0){const corners=G.square(future,displaySearch.side,point[1],areaHeading);corners.forEach(p=>allBounds.extend(p));if(shown('area'))L.polygon(corners,{color:'#9361a5',dashArray:'3 6',fillOpacity:0,weight:1}).addTo(mission);if(shown('circle'))L.circle(point,{radius:displaySearch.radius*1852,color:'#9361a5',dashArray:'3 6',fill:false,weight:1}).addTo(mission);}
  }catch(error){$('forecast-status').textContent=error.message;}
 }
 $('area-orientation-heading').value=planning.areaHeading;
 $('area-orientation-mode').onchange=()=>{planning.areaMode=$('area-orientation-mode').value;refreshPlans(true);};
 $('area-orientation-heading').onchange=()=>{try{M.bearing($('area-orientation-heading').value,'Orientação');planning.areaHeading=$('area-orientation-heading').value;refreshPlans(true);}catch(error){$('area-orientation-status').textContent=error.message;}};
 $('forecast-time').oninput=()=>{planning.forecast=Number($('forecast-time').value);render();persist();};
 document.addEventListener('lsar:map-state',e=>{const before=JSON.stringify(state.drift?.datum),side=state.search?.side;state=e.detail;buildPlans();planControls();render(!!state.drift?.datum&&(JSON.stringify(state.drift.datum)!==before||(state.search?.side!==undefined&&state.search.side!==side)));});
 function setPicking(value){picking=value;$('pick-lkp').setAttribute('aria-pressed',String(value));$('pick-lkp').textContent=value?'Cancelar escolha do LKP':'Escolher LKP no mapa';$('sar-map').classList.toggle('map-picking',value);$('map-instruction').textContent=value?'Toque na posição desejada e confirme “Usar como LKP” no balão.':'Para escolher uma posição, ative “Escolher LKP no mapa”, toque no local e confirme no balão.';if(!value&&selection){map.removeLayer(selection);selection=null;}}
 async function readCatalog(){
  try{
   const response=await fetch(versioned('cartas/catalogo.json'),{cache:'no-cache'});if(!response.ok)throw Error();const data=await response.json();
   catalog=Array.isArray(data.charts)?data.charts.filter(c=>typeof c.id==='string'&&typeof c.name==='string'&&typeof c.url==='string'&&Array.isArray(c.bounds)&&c.bounds.length===4&&c.bounds.every(Number.isFinite)&&c.bounds[0]<c.bounds[2]&&c.bounds[1]<c.bounds[3]&&Math.abs(c.bounds[0])<=85.05112878&&Math.abs(c.bounds[2])<=85.05112878&&Math.abs(c.bounds[1])<=180&&Math.abs(c.bounds[3])<=180&&Number.isInteger(c.minZoom)&&Number.isInteger(c.maxZoom)&&c.minZoom>=0&&c.maxZoom<=22&&c.maxZoom>=c.minZoom):[];
   for(const c of catalog){const option=document.createElement('option');option.value=c.id;option.textContent=c.name;$('chart-catalog').appendChild(option);}
   if(lastOptions.chartId&&catalog.some(c=>c.id===lastOptions.chartId)){$('chart-catalog').value=lastOptions.chartId;$('chart-catalog').dispatchEvent(new Event('change'));}
   $('chart-catalog-status').textContent=catalog.length?'Selecione uma carta para sobrepor ao mapa.':'Ainda não há cartas publicadas no catálogo. Você pode abrir um GeoTIFF do dispositivo.';
  }catch{$('chart-catalog-status').textContent='Catálogo indisponível. Você pode abrir um GeoTIFF do dispositivo; em arquivo local, o catálogo precisa de hospedagem HTTP.';}
 }
 $('open-map').onclick=async()=>{
  $('open-map').disabled=true;$('map-load-status').textContent='Abrindo mapa…';
  try{
   await Promise.all([load('vendor/leaflet.css',true),load('vendor/leaflet.js')]);
   $('map-workspace').hidden=false;
   map=L.map('sar-map',{scrollWheelZoom:false,worldCopyJump:true}).setView([-20.3,-40.28],9);
   base=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'});if($('map-base').checked)base.addTo(map);
   base.on('tileerror',()=>{$('map-load-status').textContent='O mapa base não carregou. Confira a conexão; os cálculos e a carta local continuam disponíveis.';});
   L.control.scale({imperial:false}).addTo(map);mission=L.featureGroup().addTo(map);
   map.on('click',e=>{
    if(!picking||!bridge.setLKP||evaluation)return;if(selection)map.removeLayer(selection);
    const latitude=e.latlng.lat,longitude=((e.latlng.lng+180)%360+360)%360-180,content=document.createElement('div');
    content.append(textNode('p',position({latitude,longitude})));const button=textNode('button','Usar como LKP');button.type='button';button.className='map-use-point';
    button.onclick=()=>{bridge.setLKP(latitude,longitude);setPicking(false);$('map-instruction').textContent='LKP atualizado nos campos e salvo neste navegador. Confira o horário do LKP e calcule a deriva para obter o DATUM.';};content.append(button);
    selection=L.marker([latitude,longitude],{icon:icon('selection','?')}).addTo(map).bindPopup(content).openPopup();
   });
   buildPlans();planControls();render(true);map.invalidateSize();$('open-map').hidden=true;$('map-load-status').textContent='';readCatalog();
   if(typeof ResizeObserver==='function')new ResizeObserver(()=>map.invalidateSize({pan:false})).observe($('sar-map'));
  }catch(error){if(map){map.remove();map=null;}$('map-workspace').hidden=true;$('map-load-status').textContent=error.message;$('open-map').disabled=false;}
 };
 $('pick-lkp').onclick=()=>setPicking(!picking);$('fit-mission').onclick=fitMission;
 $('map-expand').onclick=()=>{expanded=!expanded;$('sar-map').classList.toggle('map-expanded',expanded);$('map-expand').textContent=expanded?'Reduzir mapa':'Ampliar mapa';$('map-expand').setAttribute('aria-pressed',String(expanded));map.invalidateSize();};
 $('map-base').onchange=()=>{if($('map-base').checked)base.addTo(map);else map.removeLayer(base);persist();};
 function chartControls(){const on=!!chart;for(const id of ['chart-visible','chart-opacity','fit-chart','remove-chart'])$(id).disabled=!on||loading;$('chart-file').disabled=loading;$('chart-catalog').disabled=loading;}
 function replaceChart(layer,bounds,message){if(chart)map.removeLayer(chart);chart=layer;chartBounds=bounds;$('chart-visible').checked=true;layer.setOpacity(Number($('chart-opacity').value)/100);layer.addTo(map);$('chart-status').textContent=message;chartControls();fit(bounds);}
 $('chart-visible').onchange=()=>{if(!chart)return;if($('chart-visible').checked)chart.addTo(map);else map.removeLayer(chart);};
 $('chart-opacity').oninput=()=>{const value=Number($('chart-opacity').value);$('chart-opacity-value').textContent=value+'%';chart?.setOpacity(value/100);persist();};
 $('fit-chart').onclick=()=>fit(chartBounds);
 $('remove-chart').onclick=()=>{if(chart)map.removeLayer(chart);chart=null;chartBounds=null;$('chart-file').value='';$('chart-catalog').value='';$('chart-status').textContent='Nenhuma carta carregada.';chartControls();persist();};
 $('chart-catalog').onchange=()=>{
  const c=catalog.find(c=>c.id===$('chart-catalog').value);if(!c){$('remove-chart').click();return;}
  try{
   // Catalogue is hosted by the site owner. Accept only same-origin relative tile paths.
   if(!/^cartas\/[a-zA-Z0-9_./-]+\/\{z\}\/\{x\}\/\{y\}\.png$/.test(c.url)||c.url.includes('..'))throw Error('Endereço da carta inválido no catálogo.');
   const bounds=L.latLngBounds([[c.bounds[0],c.bounds[1]],[c.bounds[2],c.bounds[3]]]);
   const attribution=document.createElement('span');attribution.textContent=c.attribution||c.name;
   const layer=L.tileLayer(c.url+'?v='+encodeURIComponent(c.version||build),{bounds,minZoom:0,maxZoom:22,minNativeZoom:c.minZoom,maxNativeZoom:c.maxZoom,noWrap:true,attribution:attribution.innerHTML});
   layer.on('tileerror',()=>{$('chart-status').textContent='Alguns blocos da carta não carregaram. Confira a publicação da pasta de tiles e a conexão.';});
   replaceChart(layer,bounds,'Carta publicada: '+c.name);$('chart-file').value='';persist();
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
   replaceChart(layer,bounds,'Carta local: '+file.name+' · '+info.width+' × '+info.height+' pixels · EPSG:'+info.epsg+'.');$('chart-catalog').value='';persist();
  }catch(error){$('chart-status').textContent='Não foi possível abrir a carta. '+(error.message||String(error)||'Formato não suportado.')+(chart?' A carta anterior foi mantida.':'');}
  finally{loading=false;chartControls();$('chart-file').value='';}
 };
 $('plan-organization').onchange=()=>{coordination.mode=$('plan-organization').value;refreshPlans(true);};
 function refreshPlans(rebuild=false){buildPlans();if(rebuild)planControls();render();persist();}
 $('map-layer-controls').onchange=e=>{if(!e.target.dataset.overlay)return;ui[e.target.dataset.overlay]=e.target.checked;render();persist();};
 $('map-evaluation').onchange=()=>{evaluation=$('map-evaluation').checked;render();persist();};
 $('restore-map-visibility').onclick=()=>{ui={...defaults};evaluation=false;Object.values(configs).forEach(c=>c.visible=true);planControls();render();persist();};
 $('plan-config').addEventListener('input',e=>{
  if(e.target.dataset.cscField&&e.target.tagName!=='SELECT'){coordination[e.target.dataset.cscField]=e.target.value;refreshPlans();return;}
  const field=e.target.dataset.planField,card=e.target.closest('[data-plan]');if(!field||!card||e.target.tagName==='SELECT')return;
  configs[card.dataset.plan][field]=e.target.value;refreshPlans();
 });
 $('plan-config').addEventListener('change',e=>{
  if(e.target.dataset.cscField){const field=e.target.dataset.cscField;coordination[field]=e.target.value;refreshPlans(e.target.tagName==='SELECT');return;}
  const field=e.target.dataset.planField,card=e.target.closest('[data-plan]');if(!field||!card)return;
  configs[card.dataset.plan][field]=field==='reverse'?e.target.value==='true':e.target.value;refreshPlans(field==='type'||field==='headingMode');
 });
 $('plan-layer-controls').onchange=e=>{const id=e.target.dataset.planVisible;if(!id)return;configs[id].visible=e.target.checked;render();persist();};
 $('map-new-tab').href='mapa.html?v='+encodeURIComponent(build);
 $('map-new-tab').addEventListener('click',e=>{
  persist();if(!session?.publish(state)){e.preventDefault();$('map-load-status').textContent='O navegador bloqueou o compartilhamento local entre abas. Permita armazenamento para este site e tente novamente.';}
 });
 document.addEventListener('lsar:map-options',e=>{
  const opts=e.detail||{};lastOptions=opts;ui={...defaults,...opts.layers};configs=opts.configs||{};evaluation=!!opts.evaluation;coordination={mode:'individual',speedMode:'required',headingMode:'auto',heading:'0',...(opts.coordination||{})};planning={areaMode:'auto',areaHeading:'0',forecast:0,...opts.planning};$('area-orientation-heading').value=planning.areaHeading;
  if(typeof opts.base==='boolean'){$('map-base').checked=opts.base;if(map&&base){if(opts.base&&!map.hasLayer(base))base.addTo(map);else if(!opts.base&&map.hasLayer(base))map.removeLayer(base);}}
  if(opts.opacity!==undefined){$('chart-opacity').value=opts.opacity;$('chart-opacity-value').textContent=$('chart-opacity').value+'%';chart?.setOpacity(Number($('chart-opacity').value)/100);}
  if(typeof opts.chartId==='string'&&opts.chartId!==$('chart-catalog').value&&(!opts.chartId||catalog.some(c=>c.id===opts.chartId))){$('chart-catalog').value=opts.chartId;$('chart-catalog').dispatchEvent(new Event('change'));}
  buildPlans();planControls();render();
 });
 if(stored.opacity!==undefined){$('chart-opacity').value=stored.opacity;$('chart-opacity-value').textContent=stored.opacity+'%';}
 if(stored.base===false)$('map-base').checked=false;
 if(session?.standalone){
  $('map-new-tab').hidden=true;$('pick-lkp').hidden=true;$('map-instruction').textContent='Esta aba recebe os cálculos da calculadora. Ajuste os padrões, cartas e visibilidade nesta aba. O mapa da calculadora mantém a visão resumida. Cartas GeoTIFF locais devem ser selecionadas novamente nesta aba.';
  $('open-map').click();
 }

})();
