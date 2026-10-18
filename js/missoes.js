'use strict';
(function(){
 const $=id=>document.getElementById(id),api=window.SARCalculatorSession,session=window.SARMapSession;
 if(!$('mission-title')||!api)return;
 const KEY='missao-lsar-missoes-v1',WORK='missao-lsar-missao-aberta-v1',MAX=200;
 const panels=[...document.querySelectorAll('[data-workspace-panel]')];let currentId=null,baseline='',loadedVersion=null,readingError=false;
 function view(id,focus=false){
  if(!panels.some(p=>p.id===id))id='drift-section';
  panels.forEach(p=>p.hidden=p.id!==id);
  document.querySelectorAll('[data-view]').forEach(a=>{if(a.dataset.view===id)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  // Leaflet must measure its canvas after the hidden panel becomes visible.
  requestAnimationFrame(()=>dispatchEvent(new Event('resize')));
  if(focus){const heading=$(id).querySelector('h2');heading.tabIndex=-1;heading.focus({preventScroll:true});}
 }
 document.body.classList.add('workspace-ready');view(location.hash.slice(1));
 document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const id=a.getAttribute('href').slice(1);if(!panels.some(p=>p.id===id))return;e.preventDefault();history.replaceState(null,'','#'+id);view(id,true);});
 addEventListener('hashchange',()=>view(location.hash.slice(1)));
 function read(){
  const raw=localStorage.getItem(KEY);if(!raw)return [];
  const data=JSON.parse(raw);if(data?.version!==1||!Array.isArray(data.missions)||data.missions.length>MAX||!data.missions.every(valid))throw Error('O arquivo de missões neste navegador não pôde ser lido. Os dados existentes foram preservados.');
  const ids=new Set(data.missions.map(m=>m.id));if(ids.size!==data.missions.length)throw Error('Há identificadores de missões repetidos. Dados preservados.');
  return data.missions;
 }
 function valid(m){return !!m&&typeof m.id==='string'&&m.id.length<=100&&typeof m.title==='string'&&m.title.trim().length>0&&m.title.length<=100&&typeof m.updatedAt==='string'&&Number.isFinite(Date.parse(m.updatedAt))&&typeof m.createdAt==='string'&&Number.isFinite(Date.parse(m.createdAt))&&validPayload(m.data)&&(!m.options||validOptions(m.options));}
 function validOptions(options){
  const record=o=>o&&typeof o==='object'&&!Array.isArray(o);
  const scalar=v=>typeof v==='boolean'||typeof v==='string'&&v.length<=1000||typeof v==='number'&&Number.isFinite(v);
  if(!record(options))return false;
  for(const key of ['layers','planning','coordination'])if(options[key]!==undefined&&(!record(options[key])||!Object.values(options[key]).every(scalar)))return false;
  if(options.configs!==undefined&&(!record(options.configs)||!Object.values(options.configs).every(c=>record(c)&&Object.values(c).every(scalar))))return false;
  if(options.layers&&!Object.values(options.layers).every(v=>typeof v==='boolean'))return false;
  if(options.planning?.areaMode==='manual'){try{window.SARDrift.bearing(options.planning.areaHeading,'Orientação');}catch{return false;}}
  return ['chartId','base','opacity','evaluation'].every(k=>options[k]===undefined||scalar(options[k]));
 }
 function validPayload(data){
  const sample=api.capture();return data?.version===1&&data.drift&&typeof data.drift==='object'&&Object.keys(sample.drift).every(k=>typeof data.drift[k]==='string'&&data.drift[k].length<=1000)&&Array.isArray(data.units)&&data.units.length>0&&data.units.length<=30&&data.units.every(u=>u&&Object.keys(sample.units[0]).every(k=>typeof u[k]==='string'&&u[k].length<=1000));
 }
 function write(missions){if(missions.length>MAX)throw Error('Limite de 200 missões. Exporte uma cópia e remova missões que não utiliza.');localStorage.setItem(KEY,JSON.stringify({version:1,missions}));}
 function message(text,error=false){$('mission-status').textContent=text;$('mission-status').classList.toggle('error',error);}
 function working(){try{localStorage.setItem(WORK,JSON.stringify({id:currentId,title:$('mission-title').value}));}catch{/* Named save reports storage failures separately. */}}
 function signature(){return JSON.stringify({title:$('mission-title').value,data:api.capture(),options:session?.readOptions()||{}});}
 function uuid(){return crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);}
 function render(){
  let items;try{items=read();readingError=false;}catch(error){readingError=true;$('mission-count').textContent='Missões indisponíveis.';message(error.message,true);$('mission-list').replaceChildren();$('mission-update').disabled=true;return;}
  if(currentId&&!items.some(m=>m.id===currentId)){currentId=null;loadedVersion=null;working();}
  $('mission-update').disabled=!currentId;$('missions-export').disabled=!items.length;
  const query=$('mission-filter').value.toLocaleLowerCase('pt-BR').trim(),filtered=items.filter(m=>m.title.toLocaleLowerCase('pt-BR').includes(query)).sort((a,b)=>b.updatedAt.localeCompare(a.updatedAt));
  $('mission-count').textContent=`${items.length} missão(ões) salva(s)`+(query?` · ${filtered.length} encontrada(s)`:'');
  const list=$('mission-list');list.replaceChildren();
  if(!filtered.length){const p=document.createElement('p');p.className='helper mission-empty';p.textContent=items.length?'Nenhuma missão corresponde à busca.':'Nenhuma missão salva ainda. Preencha os dados e use “Salvar como nova”.';list.append(p);}
  for(const item of filtered){
   const article=document.createElement('article');article.className='mission-item';
   const description=document.createElement('div'),title=document.createElement('h3'),info=document.createElement('p');title.textContent=item.title;info.className='helper';info.textContent=new Date(item.updatedAt).toLocaleString('pt-BR')+' · '+item.data.units.length+' meio(s)'+(item.id===currentId?' · aberta':'');description.append(title,info);
   const actions=document.createElement('div');actions.className='mission-buttons';
   for(const [action,label]of [['open','Abrir'],['delete','Excluir']]){const button=document.createElement('button');button.type='button';button.className=action==='open'?'btn secondary':'link-btn';button.dataset.missionAction=action;button.dataset.missionId=item.id;button.textContent=label;button.setAttribute('aria-label',label+' missão '+item.title);actions.append(button);}
   article.append(description,actions);list.append(article);
  }
 }
 function save(update){
  try{
   const title=$('mission-title').value.trim();if(!title){message('Dê um título à missão antes de salvar.',true);$('mission-title').focus();return;}
   const items=read(),existing=items.find(m=>m.id===currentId);
   if(update&&(!existing||existing.updatedAt!==loadedVersion))throw Error('A missão foi alterada ou removida em outra aba. Abra a versão atual ou salve como nova.');
   const at=new Date().toISOString(),record={id:update?existing.id:uuid(),title,createdAt:update?existing.createdAt:at,updatedAt:at,data:api.capture(),options:structuredClone(session?.readOptions()||{})};
   if(!valid(record))throw Error('As opções da missão estão inválidas. Revise os dados antes de salvar.');
   if(update)items[items.findIndex(m=>m.id===currentId)]=record;else items.push(record);
   write(items);currentId=record.id;loadedVersion=at;$('mission-title').value=title;working();baseline=signature();render();message((update?'Missão atualizada: ':'Nova missão salva: ')+title+'. As próximas alterações ficam no rascunho até você atualizar ou salvar outra missão.');
  }catch(error){message('Não foi possível salvar. '+(error.name==='QuotaExceededError'?'O armazenamento está cheio. Exporte uma cópia e libere espaço.':error.message),true);}
 }
 $('mission-save').onclick=()=>save(false);$('mission-update').onclick=()=>save(true);
 $('mission-title').oninput=()=>{working();message('Título em edição. Use “Atualizar missão” ou “Salvar como nova” para gravar.');};
 $('mission-filter').oninput=render;
 $('mission-list').onclick=e=>{
  const button=e.target.closest('[data-mission-action]');if(!button)return;
  try{
   const items=read(),item=items.find(m=>m.id===button.dataset.missionId);if(!item){render();return;}
   if(button.dataset.missionAction==='delete'){
    if(!confirm('Excluir a missão “'+item.title+'”? O cálculo aberto continuará como rascunho.'))return;
    write(items.filter(m=>m.id!==item.id));if(currentId===item.id){currentId=null;loadedVersion=null;working();}render();message('Missão excluída. O rascunho atual foi mantido.');return;
   }
   if(signature()!==baseline&&!confirm('Abrir “'+item.title+'” e substituir o rascunho atual? Para preservá-lo, cancele e use “Salvar como nova”.'))return;
   const restored=api.restore(structuredClone(item.data));const options={layers:{},configs:{},evaluation:false,coordination:{},planning:{},chartId:'',base:true,opacity:'85',...structuredClone(item.options||{})};session?.saveOptions(options);document.dispatchEvent(new CustomEvent('lsar:map-options',{detail:options}));
   currentId=item.id;loadedVersion=item.updatedAt;$('mission-title').value=item.title;working();baseline=signature();render();const failed=item.data.calculated?.drift&&!restored.drift||item.data.calculated?.search&&!restored.search;message('Missão aberta: '+item.title+(failed?'. Alguns resultados exigem revisão; confira os avisos nos formulários.':'. Dados restaurados; resultados salvos foram recalculados.'),!!failed);
   history.replaceState(null,'','#drift-section');view('drift-section',true);
  }catch(error){message('Não foi possível concluir a ação. '+error.message,true);}
 };
 $('mission-new').onclick=()=>{$('clear-calculator').click();};
 document.addEventListener('lsar:calculator-cleared',()=>{currentId=null;loadedVersion=null;$('mission-title').value='';const options={layers:{},configs:{},evaluation:false,coordination:{},planning:{},chartId:'',base:true,opacity:'85'};session?.saveOptions(options);document.dispatchEvent(new CustomEvent('lsar:map-options',{detail:options}));working();baseline=signature();render();message('Novo rascunho. Suas missões salvas foram mantidas.');history.replaceState(null,'','#drift-section');view('drift-section',true);});
 $('missions-export').onclick=()=>{try{const missions=read(),blob=new Blob([JSON.stringify({type:'lsar-missions-backup',version:1,missions},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='Missoes_LSAR_'+new Date().toISOString().slice(0,10)+'.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);$('missions-backup-status').textContent='Cópia exportada. Guarde o arquivo fora do navegador.';}catch(error){$('missions-backup-status').textContent=error.message;}};
 $('missions-import').onchange=async()=>{const input=$('missions-import'),file=input.files[0];if(!file)return;try{
  if(file.size>5*1024*1024)throw Error('O arquivo deve ter até 5 MB.');
  const data=JSON.parse(await file.text());if(data?.type!=='lsar-missions-backup'||data.version!==1||!Array.isArray(data.missions)||data.missions.length>MAX||!data.missions.every(valid))throw Error('Arquivo de missões inválido. Nenhuma missão foi alterada.');
  const items=read(),now=new Date().toISOString();write([...items,...data.missions.map(m=>({...m,id:uuid(),createdAt:now,updatedAt:now}))]);render();$('missions-backup-status').textContent=data.missions.length+' missão(ões) importada(s) como cópias.';
 }catch(error){$('missions-backup-status').textContent='Não foi possível importar. '+error.message;}finally{input.value='';}};
 addEventListener('storage',e=>{if(e.key===KEY)render();});
 try{const meta=JSON.parse(localStorage.getItem(WORK));if(meta&&typeof meta.title==='string'){$('mission-title').value=meta.title.slice(0,100);currentId=typeof meta.id==='string'?meta.id:null;const item=read().find(m=>m.id===currentId);loadedVersion=item?.updatedAt||null;}}catch{/* Preserve legacy calculator draft independently. */}
 render();baseline=signature();document.dispatchEvent(new Event('lsar:workspace-ready'));
})();
