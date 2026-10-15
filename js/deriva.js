'use strict';
(function(){
 const M=window.SARDrift,D=window.SAR_DRIFT_TABLES,$=id=>document.getElementById(id),KEY='missao-lsar-deriva-v1';
 const fields=['incident','arrival','currentSpeed','currentDirection','windSpeed','windDirection','windConvention','leewayCondition','leeway','leewayNote'];
 const unitFields=['name','platform','object','visibility','weather','wu','fw','spacing','speed','time'];
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
 function addUnit(data={}){
  const card=document.createElement('fieldset');card.className='unit-card';card.dataset.unit=String(nextUnit++);
  card.innerHTML=`<legend>Meio de busca</legend><div class="unit-top"><button type="button" class="unit-remove" aria-label="Remover este meio">Remover meio</button></div><div class="form-grid"><label>Nome do meio<input data-field="name" type="text" maxlength="80" placeholder="Ex.: LSAR-02, aeronave ou navio"></label><label>Fonte da largura Wu<select data-field="platform">${Object.entries(D.platforms).map(([k,v])=>option(k,v.label)).join('')}${option('manual','Manual — LSAR/outro meio ou outra fonte')}</select></label><label data-scope="table">Objeto da busca<select data-field="object"></select></label><label data-scope="table">Visibilidade — coluna da tabela<select data-field="visibility"></select></label><label data-scope="weather" class="span-two">Condições do tempo para fw<select data-field="weather"></select></label><label>Wu — largura não corrigida (MN)<input data-field="wu" type="text" inputmode="decimal" placeholder="Selecione os dados ou use manual"></label><label>fw — fator do tempo<input data-field="fw" type="text" inputmode="decimal" placeholder="Selecione a faixa ou informe o fator"></label><label>Espaçamento S entre pernadas (MN)<input data-field="spacing" type="text" inputmode="decimal" placeholder="Ex.: 0,5"></label><label>Velocidade V de busca (nós)<input data-field="speed" type="text" inputmode="decimal" placeholder="Ex.: 10"></label><label>Tempo T disponível de busca<input data-field="time" type="text" inputmode="decimal" placeholder="Ex.: 02:30 ou 2,5 horas"></label></div><p class="unit-hint"></p>`;
  $('units').appendChild(card);el(card,'platform').value=D.platforms[data.platform]||data.platform==='manual'?data.platform:'merchant';populateUnit(card);
  for(const key of unitFields)if(data[key]!==undefined&&key!=='platform')el(card,key).value=String(data[key]);populateUnit(card);
  renumberUnits();return card;
 }
 function renumberUnits(){const cards=[...$('units').querySelectorAll('.unit-card')];cards.forEach((c,i)=>{c.querySelector('legend').textContent=`Meio ${i+1}`;c.querySelector('.unit-remove').disabled=cards.length===1;});}
 function plot(r){
  const points=[{east:0,north:0},r.current,r.windDrift,{east:r.east,north:r.north}],xs=points.map(p=>p.east),ys=points.map(p=>p.north),minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys),span=Math.max(maxX-minX,maxY-minY,0.1),scale=260/span,cx=(maxX+minX)/2,cy=(maxY+minY)/2;
  const xy=p=>({x:190+(p.east-cx)*scale,y:170-(p.north-cy)*scale}),o=xy(points[0]),c=xy(r.current),w=xy(r.windDrift),z=xy(points[3]);
  const line=(a,b,color,id,width)=>Math.hypot(a.x-b.x,a.y-b.y)<1e-7?'':`<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="${color}" stroke-width="${width}" marker-end="url(#${id})"/>`;
  return `<svg class="vector-diagram" viewBox="0 0 380 340" role="img" aria-label="Diagrama vetorial da corrente, do leeway e da resultante, com norte para cima e escala igual nos dois eixos"><defs>${[['current-arrow','#296da5'],['leeway-arrow','#d28a20'],['result-arrow','#087970']].map(([id,color])=>`<marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="${color}"/></marker>`).join('')}</defs><line x1="20" x2="360" y1="${o.y}" y2="${o.y}" stroke="#c8d8df" stroke-dasharray="4 4"/><line x1="${o.x}" x2="${o.x}" y1="20" y2="320" stroke="#c8d8df" stroke-dasharray="4 4"/><line x1="${c.x}" y1="${c.y}" x2="${z.x}" y2="${z.y}" stroke="#d28a20" stroke-dasharray="4 4"/><line x1="${w.x}" y1="${w.y}" x2="${z.x}" y2="${z.y}" stroke="#296da5" stroke-dasharray="4 4"/>${line(o,c,'#296da5','current-arrow',3)}${line(o,w,'#d28a20','leeway-arrow',3)}${line(o,z,'#087970','result-arrow',4)}<circle cx="${o.x}" cy="${o.y}" r="4" fill="#19354a"/><text x="328" y="28" font-size="12" fill="#546c7c">N ↑</text><text x="20" y="326" font-size="11" fill="#546c7c">Velocidades em nós · escala proporcional</text></svg><div class="vector-legend"><span><i style="background:#296da5"></i>Corrente</span><span><i style="background:#d28a20"></i>Leeway</span><span><i style="background:#087970"></i>Resultante</span></div>`;
 }
 function metric(label,value,sub=''){return `<div class="calc-metric"><span>${label}</span><strong>${value}</strong>${sub?`<small>${sub}</small>`:''}</div>`;}
 function computeDrift(e){
  e.preventDefault();$('drift-error').textContent='';lastDrift=null;$('drift-result').hidden=true;updateExport();
  try{
   const raw=rawDrift(),condition=D.leewayConditions.find(c=>c.id===raw.leewayCondition);if(!condition)throw Error('Selecione o objeto/condição do leeway.');
   const r=M.drift(raw);
   if(condition.id!=='manual'&&r.windSpeed>32)throw Error('O gráfico fornecido abrange vento de 0 a 32 nós. Fora dessa faixa, use leeway de outra fonte no modo manual.');
   if(condition.id!=='manual'&&r.leeway>2.5)throw Error('O eixo de leeway do gráfico fornecido vai até 2,5 nós. Confira a leitura ou selecione outra fonte.');
   if(condition.id!=='manual'&&r.windSpeed===0&&r.leeway>0)throw Error('No gráfico fornecido, vento zero corresponde a leeway zero. Confira os dados.');
   const hh=Math.floor(r.time),mm=Math.round((r.time-hh)*60),duration=`${Math.floor((hh*60+mm)/60)}h ${String((hh*60+mm)%60).padStart(2,'0')}min`,heading=r.direction===null?'Indeterminada':`${f(r.direction,1)}°V`;
   lastDrift={raw,condition:condition.label,result:r};
   $('drift-result').innerHTML=`<div class="result-block"><p class="calc-summary-tag">Resultado da deriva</p><div class="result-grid">${metric('Tempo decorrido',duration,`${f(r.time,5)} horas`)}${metric('Intensidade resultante',`${f(r.speed)} nós`)}${metric('Direção para onde deriva',heading,r.direction===null?'Vetores se anulam':'Referência: norte verdadeiro')}${metric('Distância derivada',`${f(r.distance)} MN`,`${f(r.distanceKm)} km`)}</div><div class="vector-layout"><div>${plot(r)}</div><div class="calculation-steps"><h3>Memória de cálculo</h3><p>Leeway informado: <strong>${f(r.leeway)} nós</strong> · ${esc(condition.label)}.</p><p>Direção do leeway: <strong>${f(r.leewayDirection,1)}°V</strong> ${raw.windConvention==='from'?'(vento + 180°, normalizado)':'(direção do vento já informada para onde sopra)'}.</p><div class="formula-line">Leste: ${f(r.currentSpeed)} × sen(${f(r.currentDirection)}°) + ${f(r.leeway)} × sen(${f(r.leewayDirection)}°) = ${f(r.east,6)} nós</div><div class="formula-line">Norte: ${f(r.currentSpeed)} × cos(${f(r.currentDirection)}°) + ${f(r.leeway)} × cos(${f(r.leewayDirection)}°) = ${f(r.north,6)} nós</div><div class="formula-line">Intensidade = √(Leste² + Norte²) = ${f(r.speed,6)} nós</div><div class="formula-line">Direção = atan2(Leste, Norte), normalizada = ${heading}</div><div class="formula-line">Distância = ${f(r.speed,6)} × ${f(r.time,6)} = ${f(r.distance,6)} MN</div><p class="helper">Os cálculos usam os valores completos. O arredondamento ocorre apenas na exibição.</p></div></div>${r.windSpeed===0&&r.leeway>0?'<p class="result-warn">Vento informado como zero e leeway positivo: confira se a leitura e o vento pertencem à mesma condição.</p>':''}<p class="helper">Uma direção única foi calculada no modelo de leeway alinhado ao vento. A leitura gráfica e as condições podem introduzir incertezas não representadas aqui.</p></div>`;
   $('drift-result').hidden=false;$('drift-dirty').textContent='';save();updateExport();
  }catch(error){$('drift-error').textContent=error.message;$('drift-dirty').textContent='';}
 }
 function computeSearch(e){
  e.preventDefault();$('search-error').textContent='';lastSearch=null;$('search-result').hidden=true;updateExport();
  try{
   const units=[...$('units').querySelectorAll('.unit-card')].map((card,i)=>{
    const raw=Object.fromEntries(unitFields.map(k=>[k,val(card,k)])),name=raw.name.trim()||`Meio ${i+1}`,platform=D.platforms[raw.platform],row=platform?.rows.find(r=>r.id===raw.object);
    if(raw.platform!=='manual'){
     if(!platform||!row)throw Error(`Meio ${i+1}: selecione o objeto da busca.`);
     if(raw.visibility===''||!platform.visibility[Number(raw.visibility)])throw Error(`Meio ${i+1}: selecione a coluna de visibilidade.`);
     if(row.weatherGroup&&raw.weather==='')throw Error(`Meio ${i+1}: selecione a faixa das condições do tempo.`);
    }
    let r;try{r=M.searchUnit(raw);}catch(error){throw Error(`${name}: ${error.message}`);}
    return {name,raw,result:r,source:platform?`${platform.label}; ${row.label}; visibilidade ${platform.visibility[Number(raw.visibility)]}; ${row.weatherGroup?D.weatherBands[Number(raw.weather)].label:'fw manual'}`:'Wu e fw informados manualmente'};
   });
   const total=M.searchTotal(units.map(u=>u.result));lastSearch={units,total};
   $('search-result').innerHTML=`<div class="result-block"><p class="calc-summary-tag">Cobertura e área nominal de busca</p>${units.map((u,i)=>{const r=u.result;return `<article class="unit-result"><h3>${i+1}. ${esc(u.name)}</h3><p class="helper">${esc(u.source)}</p><div class="formula-line">Wc = Wu × fw = ${f(r.wu)} × ${f(r.fw)} = <strong>${f(r.wc,6)} MN</strong></div><div class="formula-line">C = Wc / S = ${f(r.wc,6)} / ${f(r.spacing)} = <strong>${f(r.coverage,6)}</strong></div><div class="formula-line">A${i+1} = S × V × T = ${f(r.spacing)} × ${f(r.speed)} × ${f(r.time,6)} = <strong>${f(r.area,6)} MN²</strong></div>${r.wu===0?'<p class="result-warn">A tabela retorna Wu = 0 nesta condição. A cobertura calculada é zero; a área percorrida não representa capacidade efetiva de detecção.</p>':''}</article>`;}).join('')}<div class="search-summary result-grid">${metric('At — soma nominal',`${f(total.area)} MN²`)}${metric('Lado do quadrado',`${f(total.side)} MN`)}${metric('R = √At / 2',`${f(total.radius)} MN`,'Metade do lado do quadrado')}${metric('Meios considerados',String(units.length))}</div><div class="formula-line" style="margin-top:18px">At = ${units.map(u=>f(u.result.area,6)).join(' + ')} = ${f(total.area,6)} MN²<br>R = √${f(total.area,6)} / 2 = ${f(total.radius,6)} MN</div><p class="result-warn">R é a meia-largura do quadrado equivalente da fórmula fornecida, não o raio de um círculo nem uma margem de incerteza da deriva. A soma At não desconta sobreposições entre buscas.</p></div>`;
   $('search-result').hidden=false;$('search-dirty').textContent='';save();updateExport();
  }catch(error){$('search-error').textContent=error.message;$('search-dirty').textContent='';}
 }
 function exportReport(){
  const lines=['MISSÃO LSAR — MEMÓRIA DE CÁLCULO','Unidades: nós, horas, milhas náuticas (MN) e MN². Direções verdadeiras.',''];
  if(lastDrift){const {raw,condition,result:r}=lastDrift;lines.push('DERIVA',`Incidente: ${raw.incident}`,`Chegada: ${raw.arrival}`,`Tempo decorrido: ${r.time} h`,`Corrente: ${r.currentSpeed} nós para ${r.currentDirection}°V`,`Vento: ${r.windSpeed} nós, ${r.windDirection}°V, convenção ${raw.windConvention==='from'?'de onde sopra':'para onde sopra'}`,`Leeway lido: ${r.leeway} nós; ${condition}`,`Observação: ${raw.leewayNote||'não informada'}`,`Direção do leeway: ${r.leewayDirection}°V`,`Componente leste: ${r.east} nós; componente norte: ${r.north} nós`,`Intensidade resultante: ${r.speed} nós`,`Direção resultante: ${r.direction===null?'indeterminada (resultante zero)':r.direction+'°V'}`,`Distância derivada: ${r.distance} MN`,'');}
  if(lastSearch){lines.push('PLANEJAMENTO DA BUSCA');lastSearch.units.forEach((u,i)=>{const r=u.result;lines.push(`${i+1}. ${u.name}`,u.source,`Wu = ${r.wu} MN; fw = ${r.fw}`,`Wc = Wu × fw = ${r.wc} MN`,`S = ${r.spacing} MN; V = ${r.speed} nós; T de busca = ${r.time} h`,`C = Wc / S = ${r.coverage}`,`A${i+1} = S × V × T = ${r.area} MN²`,'');});const t=lastSearch.total;lines.push(`At = soma das áreas nominais = ${t.area} MN²`,`Lado do quadrado = √At = ${t.side} MN`,`R = √At / 2 = ${t.radius} MN (meia-largura do quadrado)`,'A soma não desconta sobreposições. R não representa incerteza da deriva.','');}
  lines.push('Hipóteses: corrente e leeway constantes; leeway para onde o vento sopra; sem divergência angular ou estimativa da incerteza. A leitura do leeway é manual. As tabelas não são extrapoladas nem interpoladas.','Valores de Wu e fw: fotos fornecidas para estudo. Confira a adequação ao meio, objeto e condições.');
  const blob=new Blob(['\ufeff'+lines.join('\n')],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='Memoria_Calculo_SAR.txt';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
 }
 $('leewayCondition').innerHTML+=D.leewayConditions.map(c=>option(c.id,c.label)).join('');
 $('table-reference').innerHTML=Object.values(D.platforms).map(p=>`<div class="table-wrap"><table><caption>${esc(p.label)} · Wu em MN</caption><thead><tr><th scope="col">Objeto</th>${p.visibility.map(v=>`<th scope="col">${esc(v)}</th>`).join('')}</tr></thead><tbody>${p.rows.map(r=>`<tr><th scope="row">${esc(r.label)}</th>${r.values.map(n=>`<td>${f(n)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`).join('');
 $('weather-reference').innerHTML=D.weatherBands.map(b=>`<tr><td>${esc(b.label)}</td><td>${f(b.person)}</td><td>${f(b.raft)}</td></tr>`).join('');
 $('external-references').innerHTML=D.sources.filter(s=>s.url).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join('');
 let draft=null;try{const saved=JSON.parse(localStorage.getItem(KEY));if(saved?.version===1&&saved.drift&&Array.isArray(saved.units)&&saved.units.length<=30)draft=saved;}catch{}
 if(draft){for(const id of fields)if(typeof draft.drift[id]==='string')$(id).value=draft.drift[id];draft.units.forEach(u=>{if(u&&typeof u==='object')addUnit(u);});}
 if(!$('units').children.length)addUnit();
 $('drift-form').addEventListener('submit',computeDrift);$('search-form').addEventListener('submit',computeSearch);
 $('drift-form').addEventListener('input',()=>invalidate('drift'));$('drift-form').addEventListener('change',()=>invalidate('drift'));
 $('search-form').addEventListener('input',e=>{if(!e.target.closest('.unit-card'))return;invalidate('search');});
 $('search-form').addEventListener('change',e=>{const card=e.target.closest('.unit-card');if(!card)return;const key=e.target.dataset.field;if(['platform','object','visibility','weather'].includes(key))populateUnit(card,key==='platform');invalidate('search');});
 $('units').addEventListener('click',e=>{const button=e.target.closest('.unit-remove');if(!button||button.disabled)return;button.closest('.unit-card').remove();renumberUnits();invalidate('search');});
 $('add-unit').onclick=()=>{if($('units').children.length>=30){$('search-error').textContent='Limite de 30 meios nesta calculadora.';return;}addUnit();invalidate('search');};
 $('export-report').onclick=exportReport;
 $('clear-calculator').onclick=()=>{if(!window.confirm('Limpar os dados da calculadora? Os simulados não serão alterados.'))return;$('drift-form').reset();$('units').replaceChildren();addUnit();lastDrift=null;lastSearch=null;$('drift-result').hidden=true;$('search-result').hidden=true;['drift-error','search-error','drift-dirty','search-dirty'].forEach(id=>$(id).textContent='');updateExport();save();};
})();
