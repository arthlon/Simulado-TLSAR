'use strict';
(function(){
 const M=window.SARDrift,D=window.SAR_DRIFT_TABLES,$=id=>document.getElementById(id),KEY='missao-lsar-deriva-v1';
 const fields=['incident','arrival','currentSpeed','currentDirection','windSpeed','windDirection','windConvention','leewayCondition','leewayMode','leeway','leewayNote','lkpFormat','lkpLatitude','lkpLongitude','lkpLatHem','lkpLonHem','lkpTime'];
 const unitFields=['name','platform','object','visibility','weather','wu','fw','spacing','speed','time','spacingMode','desiredCoverage'];
 let nextUnit=1,lastDrift=null,lastSearch=null,storageOK=true;
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const f=(n,d=3)=>n.toLocaleString('pt-BR',{maximumFractionDigits:d});
 const val=(card,key)=>card.querySelector(`[data-field="${key}"]`).value;
 const el=(card,key)=>card.querySelector(`[data-field="${key}"]`);
 const option=(value,label)=>`<option value="${esc(value)}">${esc(label)}</option>`;
 function rawDrift(){return Object.fromEntries(fields.map(id=>[id,$(id).value]));}
 function rawUnits(){return [...$('units').querySelectorAll('.unit-card')].map(c=>Object.fromEntries(unitFields.map(k=>[k,val(c,k)])));}
 function save(){try{localStorage.setItem(KEY,JSON.stringify({version:1,drift:rawDrift(),units:rawUnits()}));}catch{storageOK=false;$('storage-note').textContent='O navegador não permitiu salvar os dados desta calculadora. Mantenha a página aberta até terminar.';}}
 function updateExport(){$('export-report').disabled=!lastDrift&&!lastSearch;}
 function invalidate(section){if(section==='drift'){lastDrift=null;$('drift-result').hidden=true;$('drift-dirty').textContent='Dados alterados. Calcule para atualizar.';$('drift-error').textContent='';}else{lastSearch=null;$('search-result').hidden=true;$('search-dirty').textContent='Dados alterados. Calcule para atualizar.';$('search-error').textContent='';}updateExport();save();}
 function populateUnit(card,reset=false){
  const platform=val(card,'platform'),p=D.platforms[platform],isManual=platform==='manual';
  const oldObject=reset?'':val(card,'object'),oldVis=reset?'':val(card,'visibility'),oldWeather=reset?'':val(card,'weather');
  el(card,'object').innerHTML=option('','Selecione o objeto')+(p?p.rows.map(r=>option(r.id,r.label)).join(''):'');el(card,'object').value=oldObject;
  el(card,'visibility').innerHTML=option('','Selecione a coluna')+(p?p.visibility.map((label,i)=>option(i,label)).join(''):'');el(card,'visibility').value=oldVis;
  el(card,'weather').innerHTML=option('','Selecione a faixa do tempo')+D.weatherBands.map((band,i)=>option(i,band.label)).join('');el(card,'weather').value=oldWeather;
  const row=p?.rows.find(r=>r.id===val(card,'object')),index=val(card,'visibility'),weather=val(card,'weather'),group=row?.weatherGroup;
  if(card.dataset.weatherGroup&&!group)el(card,'fw').value='';
  card.dataset.weatherGroup=group||'';
  card.querySelectorAll('[data-scope="table"]').forEach(x=>x.hidden=isManual);
  card.querySelector('[data-scope="weather"]').hidden=!group;
  el(card,'wu').readOnly=!isManual;
  if(!isManual)el(card,'wu').value=row&&index!==''&&row.values[Number(index)]!==undefined?String(row.values[Number(index)]):'';
  el(card,'fw').readOnly=!isManual&&(!row||!!group);
  if(!isManual&&group)el(card,'fw').value=weather!==''?String(D.weatherBands[Number(weather)][group]):'';
  else if(!isManual&&!row)el(card,'fw').value='';
  if(reset){el(card,'wu').value='';el(card,'fw').value='';}
  card.querySelector('.unit-hint').textContent=isManual?'Informe Wu (MN) e fw de uma fonte aplicável ao meio e ao objeto. Use este modo para LSAR ou condições não cobertas pelas tabelas fornecidas.':group?'Wu e fw serão preenchidos pela tabela selecionada. Confira as faixas de vento e mar: a intensidade do vento sozinha não define todas as condições.':row?'A foto não fornece fw para embarcação como objeto de busca. Informe manualmente o fator de uma fonte aplicável.':'Selecione objeto, visibilidade e, quando aplicável, a faixa do tempo. Os valores das tabelas são usados em MN, sem interpolação.';
 }
 function syncSpacing(card){
  const automatic=val(card,'spacingMode')==='coverage';
  el(card,'spacing').readOnly=automatic;
  card.querySelector('[data-scope="coverage"]').hidden=!automatic;
  const note=card.querySelector('.spacing-hint');
  if(!automatic){note.textContent='Você informa S; o cálculo mostrará C = Wc / S. C é uma razão sem unidade, não uma porcentagem nem uma garantia de detecção.';return;}
  el(card,'spacing').value='';
  try{
   const wc=M.nonnegative(val(card,'wu'),'Wu')*M.positive(val(card,'fw'),'fw'),coverage=M.positive(val(card,'desiredCoverage'),'Cobertura desejada C');
   if(!Number.isFinite(wc))throw Error('Wc fora do intervalo de cálculo.');
   if(wc===0)throw Error('Wc é zero; não há S positivo que produza a cobertura desejada.');
   const spacing=wc/coverage;if(!Number.isFinite(spacing)||spacing<=0)throw Error('S calculado deve ser positivo e finito.');
   el(card,'spacing').value=String(spacing).replace('.',',');
   note.textContent=`S = Wc / C = ${f(wc,6)} / ${f(coverage,6)} ≈ ${f(spacing,6)} MN. O cálculo usa o valor completo. Confira se o espaçamento pode ser navegado com segurança; para ajustá-lo, escolha “Informar S”.`;
  }catch(error){note.textContent='Para calcular S, preencha Wu, fw e uma cobertura desejada maior que zero. '+error.message;}
 }
 function addUnit(data={}){
  const card=document.createElement('fieldset');card.className='unit-card';card.dataset.unit=String(nextUnit++);
  card.innerHTML=`<legend>Meio de busca</legend><div class="unit-top"><button type="button" class="unit-remove" aria-label="Remover este meio">Remover meio</button></div><div class="form-grid"><label>Nome do meio<input data-field="name" type="text" maxlength="80" placeholder="Ex.: LSAR-02, aeronave ou navio"></label><label>Fonte da largura Wu<select data-field="platform">${Object.entries(D.platforms).map(([k,v])=>option(k,v.label)).join('')}${option('manual','Manual — LSAR/outro meio ou outra fonte')}</select></label><label data-scope="table">Objeto da busca<select data-field="object"></select></label><label data-scope="table">Visibilidade — coluna da tabela<select data-field="visibility"></select></label><label data-scope="weather" class="span-two">Condições do tempo para fw<select data-field="weather"></select></label><label>Wu — largura não corrigida (MN)<input data-field="wu" type="text" inputmode="decimal" placeholder="Selecione os dados ou use manual"></label><label>fw — fator do tempo<input data-field="fw" type="text" inputmode="decimal" placeholder="Selecione a faixa ou informe o fator"></label><label class="span-two">Como definir o espaçamento<select data-field="spacingMode"><option value="spacing">Informar S → calcular cobertura C</option><option value="coverage">Informar cobertura C → calcular S</option></select></label><label data-scope="coverage" hidden>Cobertura desejada C (sem unidade)<input data-field="desiredCoverage" type="text" inputmode="decimal" placeholder="Valor definido no planejamento"></label><label>Espaçamento S entre pernadas (MN)<input data-field="spacing" type="text" inputmode="decimal" placeholder="Ex.: 0,5"></label><label>Velocidade V de busca (nós)<input data-field="speed" type="text" inputmode="decimal" placeholder="Ex.: 10"></label><label>Tempo T efetivo de busca<input data-field="time" type="text" inputmode="decimal" placeholder="Ex.: 02:30 ou 2,5 horas"></label></div><p class="unit-hint"></p><p class="spacing-hint helper" aria-live="polite"></p>`;
  $('units').appendChild(card);el(card,'platform').value=D.platforms[data.platform]||data.platform==='manual'?data.platform:'merchant';populateUnit(card);
  for(const key of unitFields)if(data[key]!==undefined&&key!=='platform')el(card,key).value=String(data[key]);populateUnit(card);
  syncSpacing(card);renumberUnits();return card;
 }
 function renumberUnits(){const cards=[...$('units').querySelectorAll('.unit-card')];cards.forEach((c,i)=>{c.querySelector('legend').textContent=`Meio ${i+1}`;c.querySelector('.unit-remove').disabled=cards.length===1;});}
 function syncLeeway(){
  const mode=$('leewayMode').value,condition=$('leewayCondition').value,curve=D.leewayDigitization.curves.find(c=>c.id===condition),manualChoice=condition==='manual';
  $('leewayMode').querySelector('option[value="auto"]').disabled=manualChoice;
  if(manualChoice&&mode==='auto')$('leewayMode').value='manual';
  const automatic=$('leewayMode').value==='auto';$('leeway').readOnly=automatic;
  if(automatic){
   $('leeway').value='';
   if(!curve)$('leeway-lookup-note').textContent='Selecione uma condição de balsa e informe a intensidade do vento para consultar o leeway automaticamente.';
   else try{const value=M.leewayAt($('windSpeed').value,curve.points);$('leeway').value=value.toFixed(2).replace('.',',');$('leeway-lookup-note').textContent=`Estimativa automática: aproximadamente ${f(value,2)} nós, para vento de ${f(M.number($('windSpeed').value))} nós. Escolha “Manual” para ajustar.`;}catch(error){$('leeway-lookup-note').textContent=error.message;}
  }else $('leeway-lookup-note').textContent='Modo manual: o valor digitado será usado no cálculo. O gráfico continua disponível para comparação.';
  renderLeewayChart();
 }
 function renderLeewayChart(){
  const curves=D.leewayDigitization.curves,selected=$('leewayCondition').value,curve=curves.find(c=>c.id===selected),left=60,top=24,width=540,height=275,bottom=top+height;
  const x=v=>left+v/32*width,y=v=>bottom-v/2.5*height;
  let wind=null,manualValue=null;try{wind=M.nonnegative($('windSpeed').value,'Vento');}catch{}
  if($('leewayMode').value==='manual')try{manualValue=M.nonnegative($('leeway').value,'Leeway');}catch{}
  let guides='',readout='Selecione a condição da balsa e informe o vento.';
  if(curve&&wind!==null&&wind<=32){
   const value=M.leewayAt(wind,curve.points),px=x(wind),py=y(value);
   guides=`<line x1="${px}" x2="${px}" y1="${top}" y2="${bottom}" stroke="#617b8a" stroke-dasharray="4 4"/><line x1="${left}" x2="${px}" y1="${py}" y2="${py}" stroke="${curve.color}" stroke-dasharray="4 4"/><circle cx="${px}" cy="${py}" r="5" fill="${curve.color}" stroke="white" stroke-width="2"><title>Estimativa: ${f(value,2)} nós para vento de ${f(wind)} nós</title></circle>`;
   readout=`${f(wind)} nós de vento → aproximadamente ${f(value,2)} nós de leeway (${curve.label}).`;
  }else if(wind!==null&&wind>32)readout='Vento fora da faixa digitalizada. Use o modo manual; não há extrapolação.';
  if(wind!==null&&wind<=32&&manualValue!==null&&manualValue<=2.5){guides+=`<path d="M${x(wind)} ${y(manualValue)-7}l7 7l-7 7l-7 -7Z" fill="white" stroke="#19354a" stroke-width="2"><title>Valor manual: ${f(manualValue)} nós</title></path>`;readout+=` Valor manual: ${f(manualValue)} nós (losango).`;}
  $('leeway-chart').innerHTML=`<svg class="leeway-digital" viewBox="0 0 640 365" role="img" aria-label="Gráfico digitalizado de leeway por vento, com quatro curvas de balsas e ponto da consulta atual"><rect x="${left}" y="${top}" width="${width}" height="${height}" fill="#f8fbfc"/>${Array.from({length:17},(_,i)=>i*2).map(v=>`<line x1="${x(v)}" x2="${x(v)}" y1="${top}" y2="${bottom}" stroke="${v%4===0?'#c8d8df':'#e3ecef'}"/>${v%4===0?`<text x="${x(v)}" y="${bottom+20}" text-anchor="middle" font-size="13" fill="#546c7c">${v}</text>`:''}`).join('')}${Array.from({length:11},(_,i)=>i*.25).map(v=>`<line x1="${left}" x2="${left+width}" y1="${y(v)}" y2="${y(v)}" stroke="${v%.5===0?'#c8d8df':'#e3ecef'}"/>${v%.5===0?`<text x="${left-10}" y="${y(v)+4}" text-anchor="end" font-size="13" fill="#546c7c">${f(v,1)}</text>`:''}`).join('')}<path d="M${left} ${top}V${bottom}H${left+width}" fill="none" stroke="#617b8a"/>${curves.map(c=>`<polyline data-curve="${c.id}" points="${c.points.map(p=>`${x(p[0])},${y(p[1])}`).join(' ')}" fill="none" stroke="${c.color}" stroke-width="${c.id===selected?3.5:1.8}" opacity="${selected&&c.id!==selected?.5:1}"><title>${esc(c.label)}</title></polyline>`).join('')}${guides}<text x="${left+width/2}" y="350" text-anchor="middle" font-size="14" fill="#19354a">Velocidade do vento (nós)</text><text transform="translate(17 165) rotate(-90)" text-anchor="middle" font-size="14" fill="#19354a">Leeway (nós)</text></svg><div class="curve-legend">${curves.map(c=>`<span class="${c.id===selected?'active':''}"><i style="background:${c.color}"></i>${esc(c.label.replace('Balsa ',''))}</span>`).join('')}</div><p class="chart-readout" aria-live="polite">${esc(readout)}</p>`;
 }
 function plot(r,expanded=false){
  const prefix=expanded?'detail-':'';
  const size=560,cx=280,cy=270,outer=190,max=Math.max(r.currentSpeed,r.speed,.01),power=Math.pow(10,Math.floor(Math.log10(max))),extent=Math.ceil(max/power)*power,scale=160/extent;
  const xy=p=>({x:cx+p.east*scale,y:cy-p.north*scale}),o={x:cx,y:cy},c=xy(r.current),z=xy({east:r.east,north:r.north});
  const polar=(radius,degrees)=>({x:cx+radius*Math.sin(degrees*Math.PI/180),y:cy-radius*Math.cos(degrees*Math.PI/180)});
  const same=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y)<1e-7;
  const line=(id,a,b,color,marker,width)=>same(a,b)?'':`<line id="${prefix}${id}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="${color}" stroke-width="${width}" marker-end="url(#${prefix}${marker})"/>`;
  const ticks=Array.from({length:360},(_,a)=>{const q=polar(outer,a),p=polar(outer-(a%10===0?12:a%5===0?7:3),a);return `<line x1="${p.x}" y1="${p.y}" x2="${q.x}" y2="${q.y}" stroke="${a%10===0?'#617b8a':'#a5bac4'}" stroke-width="${a%10===0?1.1:.55}"/>`;}).join('');
  const spokes=Array.from({length:expanded?36:12},(_,i)=>{const a=i*(expanded?10:30),p=polar(outer-13,a);return `<line x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}" stroke="#d7e3e8" stroke-dasharray="3 4"/>`;}).join('');
  const labels=Array.from({length:expanded?36:12},(_,i)=>{const a=i*(expanded?10:30),p=polar(214,a);return `<text x="${p.x}" y="${p.y+5}" text-anchor="middle" font-size="${expanded?12:14}" font-weight="${a%90===0?700:400}" fill="#34596c">${String(a).padStart(3,'0')}°</text>`;}).join('');
  const rings=(expanded?[20,40,60,80,100,120,140,160]:[40,80,120,160]).map(radius=>{const p=polar(radius,300);return `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="none" stroke="#d1e1e6"/><text x="${p.x-3}" y="${p.y-3}" font-size="11" fill="#718895" paint-order="stroke" stroke="#f8fbfc" stroke-width="3">${f(radius/scale,2)}</text>`;}).join('');
  const cardinal=[['N',0],['L',90],['S',180],['O',270]].map(([label,a])=>{const p=polar(246,a);return `<text x="${p.x}" y="${p.y+5}" text-anchor="middle" font-size="17" font-weight="750" fill="#19354a">${label}</text>`;}).join('');
  const tag=(p,label)=>`<text x="${p.x+8}" y="${p.y+16}" font-size="13" font-weight="750" fill="#19354a" paint-order="stroke" stroke="#f8fbfc" stroke-width="4">${label}</text>`;
  let pointLabels=tag(o,same(o,c)&&same(o,z)?'O/C/D':same(o,c)?'O/C':same(o,z)?'O/D':'O');if(!same(o,c))pointLabels+=tag(c,same(c,z)?'C/D':'C');if(!same(o,z)&&!same(c,z))pointLabels+=tag(z,'D');
  const svg=`<svg class="vector-diagram maneuver-rose" viewBox="0 0 ${size} 590" role="img" aria-label="Rosa de manobra com azimutes verdadeiros: corrente do centro O até C, leeway da ponta da corrente C até D e resultante de O até D. Escala igual nos dois eixos."><defs>${[['current-arrow','#296da5'],['leeway-arrow','#d28a20'],['result-arrow','#087970']].map(([id,color])=>`<marker id="${prefix}${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="${color}"/></marker>`).join('')}</defs><circle cx="${cx}" cy="${cy}" r="${outer}" fill="#f8fbfc" stroke="#8da8b5"/>${spokes}${rings}${ticks}${labels}${cardinal}${line('current-vector',o,c,'#296da5','current-arrow',3.4)}${line('leeway-vector',c,z,'#d28a20','leeway-arrow',3.4)}${line('resultant-vector',o,z,'#087970','result-arrow',3.7)}<circle cx="${o.x}" cy="${o.y}" r="3.3" fill="#19354a"/><circle cx="${c.x}" cy="${c.y}" r="3.1" fill="#296da5"/><circle cx="${z.x}" cy="${z.y}" r="3.1" fill="#087970"/>${pointLabels}<text x="280" y="555" text-anchor="middle" font-size="13" fill="#546c7c">Rosa verdadeira · 000° ao norte · anéis em nós</text><text x="280" y="577" text-anchor="middle" font-size="12" fill="#546c7c">Corrente O→C + Leeway C→D = Resultante O→D</text></svg>`;
  if(expanded)return svg;
  return `<button class="rose-open" type="button" aria-haspopup="dialog" aria-controls="rose-dialog" aria-label="Ampliar rosa de manobra e consultar os dados dos vetores">${svg}<span class="rose-open-hint">⤢ Toque ou clique para ampliar e ver os dados</span></button><div class="vector-legend"><span><i style="background:#296da5"></i>Corrente O→C</span><span><i style="background:#d28a20"></i>Leeway C→D</span><span><i style="background:#087970"></i>Resultante O→D</span></div><p class="helper">A seta laranja representa a velocidade de leeway causada pelo vento, em nós; seu comprimento não representa a intensidade do vento.</p>`;
 }
 function updateCoordinateHelp(){
  const mode=$('lkpFormat').value,examples={auto:['20 18,500 S','040 17,200 O'],dd:['-20,308333','-40,286667'],dmm:['20° 18,500′ S','040° 17,200′ O'],dms:['20° 18′ 30″ S','040° 17′ 12″ O'],gps:['2018.5000 S','04017.2000 W']},sample=examples[mode]||examples.auto;
  $('lkpLatitude').inputMode='text';$('lkpLongitude').inputMode='text';
  $('lkpLatitude').placeholder=sample[0];$('lkpLongitude').placeholder=sample[1];
  const instructions={auto:'Identifica graus decimais, graus/minutos ou graus/minutos/segundos em cada campo. Para DDMM.mmmm / DDDMM.mmmm, selecione GPS/NMEA.',dd:'Graus decimais: -20,308333 ou 20.308333 S.',dmm:'Graus e minutos: 20 18,500 S ou 20°18.500′S.',dms:'Graus, minutos e segundos: 20 18 30 S ou 20°18′30″S. Os segundos podem ter parte decimal.',gps:'Latitude DDMM.mmmm (2018.5000 S); longitude DDDMM.mmmm (04017.2000 W). Preserve os zeros iniciais. Informe só a coordenada, não a sentença NMEA completa.'};
  $('lkp-format-help').textContent=(instructions[mode]||instructions.auto)+' Aceita ponto ou vírgula decimal. Sem sinal ou letra, usa o seletor; com sinal ou letra, o hemisfério é identificado no texto e o seletor acompanha. Sinal e letra contraditórios são rejeitados.';
 }
 function syncCoordinatePreview(){
  const preview=$('lkp-preview'),parsed=[],errors=[];let filled=0;
  for(const [axis,id,hem]of [['lat','lkpLatitude','lkpLatHem'],['lon','lkpLongitude','lkpLonHem']]){
   const text=$(id).value.trim(),selector=$(hem);selector.disabled=false;if(!text)continue;filled++;
   try{
    const info=M.parseCoordinateDetails(text,axis,$('lkpFormat').value,selector.value);
    if(info.explicit){selector.value=info.hemisphere;selector.disabled=true;}
    parsed.push(M.formatCoordinate(info.value,axis));
   }catch(error){errors.push(error.message);}
  }
  preview.hidden=filled===0;preview.dataset.state=errors.length?'error':'ok';
  preview.textContent=errors.length?errors.join(' '):'Coordenada interpretada: '+parsed.join(' · ')+(filled===1?' — preencha também a outra coordenada.':'');
 }
 function positionText(position,format='dmm'){
  return M.formatCoordinate(position.latitude,'lat',format)+' · '+M.formatCoordinate(position.longitude,'lon',format);
 }
 function datumView(r){
  const d=r.datum;if(!d)return '<p class="helper datum-optional">LKP não informado. Para obter as coordenadas do DATUM estimado, preencha a posição inicial opcional.</p>';
  const heading=d.distance===0?'sem deslocamento':`${f(d.direction,3)}°V`,time=t=>esc(t.replace('T',' · '));
  return `<section class="datum-box" aria-label="Posição estimada do DATUM"><p class="calc-summary-tag">Posição geográfica estimada na chegada</p><h3>DATUM estimado</h3><div class="position-results"><div><span>LKP · posição de partida</span><strong><span>${M.formatCoordinate(d.lkp.latitude,'lat')}</span><span>${M.formatCoordinate(d.lkp.longitude,'lon')}</span></strong><small>${time(d.startTime)}</small></div><div class="datum-coordinate"><span>DATUM · posição na chegada</span><strong><span>${M.formatCoordinate(d.latitude,'lat')}</span><span>${M.formatCoordinate(d.longitude,'lon')}</span></strong><small>${time(d.endTime)}</small></div></div><p class="datum-decimal">Graus decimais do DATUM: <strong>${positionText(d,'dd')}</strong></p><p class="datum-decimal">Graus, minutos e segundos do DATUM: <strong>${positionText(d,'dms')}</strong></p><div class="formula-line">LKP → DATUM: ${f(r.speed,6)} nós × ${f(d.time,6)} h = <strong>${f(d.distance,6)} MN</strong> · ${heading}</div><p class="helper">${d.time!==r.time?'O intervalo do LKP é próprio; a distância acima pode ser diferente da deriva calculada desde o incidente. ':''}Projeção por rumo constante em uma Terra esférica (R = 6.371 km). As casas exibidas não representam a precisão da posição. É uma estimativa do modelo, sem margens de incerteza, divergência de leeway ou evolução das condições.</p></section>`;
 }
 function openRose(){
  if(!lastDrift)return;
  const {raw,condition,result:r}=lastDrift,heading=v=>v===null?'Indeterminada':`${f(v,2)}°V`;
  $('rose-graphic').innerHTML=plot(r,true);
  $('rose-details').innerHTML=`${datumView(r)}<p class="eyebrow">Dados do cálculo atual</p><h3>Vetores e resultante</h3><div class="table-wrap"><table class="rose-data"><caption>Velocidades em nós · azimutes verdadeiros</caption><thead><tr><th>Vetor</th><th>Intensidade</th><th>Para onde</th><th>Leste</th><th>Norte</th></tr></thead><tbody><tr><th>Corrente O→C</th><td>${f(r.currentSpeed,4)}</td><td>${heading(r.currentDirection)}</td><td>${f(r.current.east,5)}</td><td>${f(r.current.north,5)}</td></tr><tr><th>Leeway C→D</th><td>${f(r.leeway,4)}</td><td>${heading(r.leewayDirection)}</td><td>${f(r.windDrift.east,5)}</td><td>${f(r.windDrift.north,5)}</td></tr><tr><th>Resultante O→D</th><td>${f(r.speed,5)}</td><td>${heading(r.direction)}</td><td>${f(r.east,5)}</td><td>${f(r.north,5)}</td></tr></tbody></table></div><dl class="rose-facts"><dt>Incidente</dt><dd>${esc(raw.incident.replace('T',' · '))}</dd><dt>Chegada ao local</dt><dd>${esc(raw.arrival.replace('T',' · '))}</dd><dt>Tempo decorrido</dt><dd>${f(r.time,6)} h</dd><dt>Distância derivada</dt><dd><strong>${f(r.distance,5)} MN</strong> · ${f(r.distanceKm,5)} km</dd><dt>Vento informado</dt><dd>${f(r.windSpeed)} nós · ${heading(r.windDirection)} · ${raw.windConvention==='from'?'de onde sopra':'para onde sopra'}</dd><dt>Leeway adotado</dt><dd>${raw.leewayMode==='auto'?'Automático · estimativa digitalizada':'Manual'} · ${esc(condition)}</dd></dl><p class="helper">O é a origem; C é a ponta da corrente; D é a ponta da resultante. As componentes positivas apontam para leste e norte; as negativas, para oeste e sul. Os anéis medem velocidade em nós, não distância. A seta laranja é o leeway induzido pelo vento, não a velocidade do próprio vento.</p><p class="helper">Modelo: corrente e leeway constantes, leeway alinhado ao vento e direções verdadeiras. Não inclui divergência angular nem margens de incerteza. Uma resultante zero não tem direção definida.</p>`;
  $('rose-zoom').value='100';setRoseZoom();
  $('rose-dialog').showModal();document.body.classList.add('rose-modal-open');
 }
 function setRoseZoom(){
  const zoom=Number($('rose-zoom').value);$('rose-graphic').style.width=zoom+'%';$('rose-zoom-value').textContent=zoom+'%';
 }
 function metric(label,value,sub=''){return `<div class="calc-metric"><span>${label}</span><strong>${value}</strong>${sub?`<small>${sub}</small>`:''}</div>`;}
 function computeDrift(e){
  e.preventDefault();syncLeeway();$('drift-error').textContent='';lastDrift=null;$('drift-result').hidden=true;updateExport();
  try{
   const raw=rawDrift(),condition=D.leewayConditions.find(c=>c.id===raw.leewayCondition);if(!condition)throw Error('Selecione o objeto/condição do leeway.');
   if(!['auto','manual'].includes(raw.leewayMode))throw Error('Selecione o modo automático ou manual do leeway.');
   if(raw.leewayMode==='auto'){const curve=D.leewayDigitization.curves.find(c=>c.id===condition.id);if(!curve)throw Error('O modo automático exige uma condição de balsa do gráfico.');M.leewayAt(raw.windSpeed,curve.points);}
   const r=M.drift(raw);
   const hh=Math.floor(r.time),mm=Math.round((r.time-hh)*60),duration=`${Math.floor((hh*60+mm)/60)}h ${String((hh*60+mm)%60).padStart(2,'0')}min`,heading=r.direction===null?'Indeterminada':`${f(r.direction,1)}°V`;
   lastDrift={raw,condition:condition.label,result:r};
   $('drift-result').innerHTML=`<div class="result-block"><p class="calc-summary-tag">Deriva resultante e posição estimada</p><div class="result-grid">${metric('Tempo incidente → chegada',duration,`${f(r.time,5)} horas`)}${metric('Intensidade resultante',`${f(r.speed)} nós`)}${metric('Direção para onde deriva',heading,r.direction===null?'Vetores se anulam':'Referência: norte verdadeiro')}${metric('Deriva desde o incidente',`${f(r.distance)} MN`,`${f(r.distanceKm)} km`)}</div>${datumView(r)}<div class="vector-layout"><div>${plot(r)}</div><div class="calculation-steps"><h3>Composição da deriva</h3><p>Leeway ${raw.leewayMode==='auto'?'estimado automaticamente':'manual'}: <strong>${f(r.leeway)} nós</strong> · ${esc(condition.label)}.</p><p>Direção do leeway: <strong>${f(r.leewayDirection,1)}°V</strong> ${raw.windConvention==='from'?'(vento + 180°, normalizado)':'(direção do vento já informada para onde sopra)'}.</p><div class="formula-line">Leste: ${f(r.currentSpeed)} × sen(${f(r.currentDirection)}°) + ${f(r.leeway)} × sen(${f(r.leewayDirection)}°) = ${f(r.east,6)} nós</div><div class="formula-line">Norte: ${f(r.currentSpeed)} × cos(${f(r.currentDirection)}°) + ${f(r.leeway)} × cos(${f(r.leewayDirection)}°) = ${f(r.north,6)} nós</div><div class="formula-line">Intensidade = √(Leste² + Norte²) = ${f(r.speed,6)} nós</div><div class="formula-line">Direção = atan2(Leste, Norte), normalizada = ${heading}</div><div class="formula-line">Distância = ${f(r.speed,6)} × ${f(r.time,6)} = ${f(r.distance,6)} MN</div><p class="helper">Os cálculos usam os valores completos. O arredondamento ocorre apenas na exibição.</p></div></div>${r.windSpeed===0&&r.leeway>0?'<p class="result-warn">Vento informado como zero e leeway positivo: confira se a leitura e o vento pertencem à mesma condição.</p>':''}<p class="helper">Uma direção única foi calculada no modelo de leeway alinhado ao vento. A digitalização gráfica e as condições podem introduzir incertezas não representadas aqui.</p></div>`;
   $('drift-result').hidden=false;$('drift-dirty').textContent='';save();updateExport();
  }catch(error){$('drift-error').textContent=error.message;$('drift-dirty').textContent='';}
 }
 function computeSearch(e){
  e.preventDefault();$('search-error').textContent='';lastSearch=null;$('search-result').hidden=true;updateExport();
  try{
   const units=[...$('units').querySelectorAll('.unit-card')].map((card,i)=>{
    syncSpacing(card);const raw=Object.fromEntries(unitFields.map(k=>[k,val(card,k)])),name=raw.name.trim()||`Meio ${i+1}`,platform=D.platforms[raw.platform],row=platform?.rows.find(r=>r.id===raw.object);
    if(raw.platform!=='manual'){
     if(!platform||!row)throw Error(`Meio ${i+1}: selecione o objeto da busca.`);
     if(raw.visibility===''||!platform.visibility[Number(raw.visibility)])throw Error(`Meio ${i+1}: selecione a coluna de visibilidade.`);
     if(row.weatherGroup&&raw.weather==='')throw Error(`Meio ${i+1}: selecione a faixa das condições do tempo.`);
    }
    let r;try{r=M.searchUnit(raw);}catch(error){throw Error(`${name}: ${error.message}`);}
    return {name,raw,result:r,source:platform?`${platform.label}; ${row.label}; visibilidade ${platform.visibility[Number(raw.visibility)]}; ${row.weatherGroup?D.weatherBands[Number(raw.weather)].label:'fw manual'}`:'Wu e fw informados manualmente'};
   });
   const total=M.searchTotal(units.map(u=>u.result));lastSearch={units,total};
   $('search-result').innerHTML=`<div class="result-block"><p class="calc-summary-tag">Cobertura e área nominal de busca</p>${units.map((u,i)=>{const r=u.result;return `<article class="unit-result"><h3>${i+1}. ${esc(u.name)}</h3><p class="helper">${esc(u.source)}</p><div class="formula-line">Wc = Wu × fw = ${f(r.wu)} × ${f(r.fw)} = <strong>${f(r.wc,6)} MN</strong></div>${r.spacingMode==='coverage'?`<div class="formula-line">S = Wc / C desejado = ${f(r.wc,6)} / ${f(r.desiredCoverage,6)} = <strong>${f(r.spacing,6)} MN</strong></div>`:''}<div class="formula-line">C = Wc / S = ${f(r.wc,6)} / ${f(r.spacing,6)} = <strong>${f(r.coverage,6)}</strong> (sem unidade)</div><p class="helper">C expressa o esforço de busca por área. Mantendo Wc, V e T, aumentar C aproxima as pernadas e reduz a área nominal pesquisada.</p><div class="formula-line">A${i+1} = S × V × T = ${f(r.spacing,6)} × ${f(r.speed)} × ${f(r.time,6)} = <strong>${f(r.area,6)} MN²</strong></div>${r.wu===0?'<p class="result-warn">A tabela retorna Wu = 0 nesta condição. A cobertura calculada é zero; a área percorrida não representa capacidade efetiva de detecção.</p>':''}</article>`;}).join('')}<div class="search-summary result-grid">${metric('At — soma nominal',`${f(total.area)} MN²`)}${metric('Lado do quadrado',`${f(total.side)} MN`)}${metric('R = √At / 2',`${f(total.radius)} MN`,'Metade do lado do quadrado')}${metric('Meios considerados',String(units.length))}</div><div class="formula-line" style="margin-top:18px">At = ${units.map(u=>f(u.result.area,6)).join(' + ')} = ${f(total.area,6)} MN²<br>R = √${f(total.area,6)} / 2 = ${f(total.radius,6)} MN</div><p class="result-warn">R é o raio de busca ajustado para uma área quadrada em torno de um datum pontual, não o raio de um círculo nem uma margem de incerteza da deriva. A soma At não desconta sobreposições entre buscas.</p></div>`;
   $('search-result').hidden=false;$('search-dirty').textContent='';save();updateExport();
  }catch(error){$('search-error').textContent=error.message;$('search-dirty').textContent='';}
 }
 function exportReport(){
  const lines=['MISSÃO LSAR — MEMÓRIA DE CÁLCULO','Unidades: nós, horas, milhas náuticas (MN) e MN². Direções verdadeiras.',''];
  if(lastDrift){const {raw,condition,result:r}=lastDrift;lines.push('DERIVA',`Incidente: ${raw.incident}`,`Chegada: ${raw.arrival}`,`Tempo decorrido: ${r.time} h`,`Corrente: ${r.currentSpeed} nós para ${r.currentDirection}°V`,`Vento: ${r.windSpeed} nós, ${r.windDirection}°V, convenção ${raw.windConvention==='from'?'de onde sopra':'para onde sopra'}`,`Leeway ${raw.leewayMode==='auto'?'automático (estimativa digitalizada da foto, arredondada a 0,01 nó)':'manual'}: ${r.leeway} nós; ${condition}`,`Observação: ${raw.leewayNote||'não informada'}`,`Direção do leeway: ${r.leewayDirection}°V`,`Componente leste: ${r.east} nós; componente norte: ${r.north} nós`,`Intensidade resultante: ${r.speed} nós`,`Direção resultante: ${r.direction===null?'indeterminada (resultante zero)':r.direction+'°V'}`,`Distância derivada: ${r.distance} MN`,'');}
  if(lastDrift?.result.datum){const d=lastDrift.result.datum;lines.push('POSIÇÃO INICIAL E DATUM ESTIMADO',`LKP: ${positionText(d.lkp)}`,`LKP em graus decimais: ${d.lkp.latitude}, ${d.lkp.longitude}`,`Horário do LKP usado: ${d.startTime}`,`Horário do DATUM: ${d.endTime}`,`Tempo LKP → DATUM: ${d.time} h`,`Distância LKP → DATUM: ${d.distance} MN`,`Direção: ${d.direction===null?'indeterminada (sem deriva)':d.direction+'°V'}`,`DATUM estimado: ${positionText(d)}`,`DATUM em graus decimais: ${d.latitude}, ${d.longitude}`,`DATUM em graus, minutos e segundos: ${positionText(d,'dms')}`,`Método: ${d.method}; corrente e leeway constantes; sem margens de incerteza.`,'');}
  if(lastSearch){lines.push('PLANEJAMENTO DA BUSCA');lastSearch.units.forEach((u,i)=>{const r=u.result;lines.push(`${i+1}. ${u.name}`,u.source,`Wu = ${r.wu} MN; fw = ${r.fw}`,`Wc = Wu × fw = ${r.wc} MN`,r.spacingMode==='coverage'?`S calculado = Wc / C desejado (${r.desiredCoverage}) = ${r.spacing} MN`:'S informado pelo usuário',`S = ${r.spacing} MN; V = ${r.speed} nós; T de busca = ${r.time} h`,`C = Wc / S = ${r.coverage}`,`A${i+1} = S × V × T = ${r.area} MN²`,'');});const t=lastSearch.total;lines.push(`At = soma das áreas nominais = ${t.area} MN²`,`Lado do quadrado = √At = ${t.side} MN`,`R = √At / 2 = ${t.radius} MN (meia-largura do quadrado)`,'A soma não desconta sobreposições. R não representa incerteza da deriva.','');}
  lines.push('Hipóteses: corrente e leeway constantes; leeway para onde o vento sopra; sem divergência angular ou estimativa da incerteza. Leeway automático: interpolação das retas digitalizadas da foto, de 0 a 32 nós, como estimativa. Modo manual disponível. As tabelas Wu e fw não são extrapoladas nem interpoladas.','Valores de Wu e fw: fotos fornecidas para estudo. Confira a adequação ao meio, objeto e condições.');
  const blob=new Blob(['\ufeff'+lines.join('\n')],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='Memoria_Calculo_SAR.txt';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
 }
 const roseDialog=document.createElement('dialog');roseDialog.id='rose-dialog';roseDialog.className='rose-dialog';roseDialog.setAttribute('aria-labelledby','rose-title');
 roseDialog.innerHTML=`<div class="rose-dialog-header"><div><p class="eyebrow">Deriva · visualização ampliada</p><h2 id="rose-title">Rosa de manobra</h2></div><button type="button" id="rose-close" class="btn secondary" autofocus>Fechar</button></div><div class="rose-dialog-grid"><div><label class="rose-zoom-control">Ampliação <input id="rose-zoom" type="range" min="100" max="200" step="25" value="100"><output id="rose-zoom-value" for="rose-zoom">100%</output></label><p class="helper">Graduação de 1°, números a cada 10°. Aumente a ampliação e deslize o gráfico para consultar os detalhes.</p><div class="rose-viewport" tabindex="0" role="region" aria-label="Rosa ampliada; use a rolagem para explorar quando houver zoom"><div id="rose-graphic"></div></div><div class="vector-legend"><span><i style="background:#296da5"></i>Corrente</span><span><i style="background:#d28a20"></i>Leeway</span><span><i style="background:#087970"></i>Resultante</span></div></div><div id="rose-details"></div></div>`;
 document.body.appendChild(roseDialog);
 $('drift-result').addEventListener('click',e=>{if(e.target.closest('.rose-open'))openRose();});
 function cleanRose(){if(roseDialog.open)return;document.body.classList.remove('rose-modal-open');$('rose-graphic').replaceChildren();$('rose-details').replaceChildren();}
 function closeRose(){roseDialog.close();cleanRose();}
 $('rose-close').onclick=closeRose;$('rose-zoom').addEventListener('input',setRoseZoom);
 roseDialog.addEventListener('cancel',e=>{e.preventDefault();closeRose();});
 roseDialog.addEventListener('close',cleanRose);
 roseDialog.addEventListener('click',e=>{if(e.target!==roseDialog)return;const r=roseDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeRose();});
 $('leewayCondition').innerHTML+=D.leewayConditions.map(c=>option(c.id,c.label)).join('');
 $('table-reference').innerHTML=Object.values(D.platforms).map(p=>`<div class="table-wrap"><table><caption>${esc(p.label)} · Wu em MN</caption><thead><tr><th scope="col">Objeto</th>${p.visibility.map(v=>`<th scope="col">${esc(v)}</th>`).join('')}</tr></thead><tbody>${p.rows.map(r=>`<tr><th scope="row">${esc(r.label)}</th>${r.values.map(n=>`<td>${f(n)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`).join('');
 $('weather-reference').innerHTML=D.weatherBands.map(b=>`<tr><td>${esc(b.label)}</td><td>${f(b.person)}</td><td>${f(b.raft)}</td></tr>`).join('');
 $('external-references').innerHTML=D.sources.filter(s=>s.url).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join('');
 let draft=null;try{const saved=JSON.parse(localStorage.getItem(KEY));if(saved?.version===1&&saved.drift&&Array.isArray(saved.units)&&saved.units.length<=30)draft=saved;}catch{}
 if(draft&&draft.drift.leewayMode===undefined&&draft.drift.leeway)$('leewayMode').value='manual';
 if(draft){for(const id of fields)if(typeof draft.drift[id]==='string')$(id).value=draft.drift[id];draft.units.forEach(u=>{if(u&&typeof u==='object')addUnit(u);});}
 if(!$('units').children.length)addUnit();
 syncLeeway();updateCoordinateHelp();syncCoordinatePreview();
 $('lkpFormat').addEventListener('change',updateCoordinateHelp);
 $('clear-lkp').onclick=()=>{['lkpLatitude','lkpLongitude','lkpTime'].forEach(id=>$(id).value='');syncCoordinatePreview();invalidate('drift');};
 $('drift-form').addEventListener('submit',computeDrift);$('search-form').addEventListener('submit',computeSearch);
 $('drift-form').addEventListener('input',()=>{syncLeeway();syncCoordinatePreview();invalidate('drift');});$('drift-form').addEventListener('change',()=>{syncLeeway();syncCoordinatePreview();invalidate('drift');});
 $('search-form').addEventListener('input',e=>{const card=e.target.closest('.unit-card');if(!card)return;syncSpacing(card);invalidate('search');});
 $('search-form').addEventListener('change',e=>{const card=e.target.closest('.unit-card');if(!card)return;const key=e.target.dataset.field;if(['platform','object','visibility','weather'].includes(key))populateUnit(card,key==='platform');syncSpacing(card);invalidate('search');});
 $('units').addEventListener('click',e=>{const button=e.target.closest('.unit-remove');if(!button||button.disabled)return;button.closest('.unit-card').remove();renumberUnits();invalidate('search');});
 $('add-unit').onclick=()=>{if($('units').children.length>=30){$('search-error').textContent='Limite de 30 meios nesta calculadora.';return;}addUnit();invalidate('search');};
 $('export-report').onclick=exportReport;
 $('clear-calculator').onclick=()=>{if(!window.confirm('Limpar os dados da calculadora? Os simulados não serão alterados.'))return;$('drift-form').reset();syncLeeway();updateCoordinateHelp();syncCoordinatePreview();$('units').replaceChildren();addUnit();lastDrift=null;lastSearch=null;$('drift-result').hidden=true;$('search-result').hidden=true;['drift-error','search-error','drift-dirty','search-dirty'].forEach(id=>$(id).textContent='');updateExport();save();};
})();
