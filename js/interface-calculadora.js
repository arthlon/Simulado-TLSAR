'use strict';
(function(){
 const $=id=>document.getElementById(id),dock=$('calculation-dock');if(!dock)return;
 let active='drift-section';
 function refresh(){
  const drift=active==='drift-section',search=active==='search-section';dock.hidden=!drift&&!search;
  if(dock.hidden)return;
  const prefix=drift?'drift':'search',result=$(prefix+'-result'),error=$(prefix+'-error').textContent,dirty=$(prefix+'-dirty').textContent;
  $('dock-title').textContent=drift?'Deriva e DATUM':'Cobertura e área';
  const button=$('dock-submit'),ready=!result.hidden&&!error&&!dirty;
  button.setAttribute('form',prefix+'-form');button.type=ready?'button':'submit';
  if(ready){button.dataset.next=drift?'search-section':'map-section';button.textContent=drift?'Ir para: área →':'Ir para: mapa →';}
  else{delete button.dataset.next;button.textContent=drift?'Calcular deriva →':'Calcular área →';}
  $('dock-note').textContent=error?'Confira os dados informados.':dirty?'Dados alterados · calcule para atualizar.':!result.hidden?'Resultado calculado.':'Preencha os dados e calcule.';
  $('dock-result').hidden=result.hidden&&!error;
  $('dock-result').textContent=error?'Ver aviso ↑':'Ver resultado ↓';
 }
 document.addEventListener('lsar:workspace-view',e=>{active=e.detail.id;refresh();});
 document.addEventListener('lsar:map-state',refresh);
 document.addEventListener('submit',e=>{if(!['drift-form','search-form'].includes(e.target.id))return;refresh();});
 $('dock-submit').addEventListener('click',event=>{
  const target=event.currentTarget.dataset.next;if(!target)return;
  event.preventDefault();document.querySelector('[data-view="'+target+'"]')?.click();
 });
 $('dock-result').onclick=()=>{
  const prefix=active==='drift-section'?'drift':'search',error=$(prefix+'-error'),target=error.textContent?error:$(prefix+'-result');
  const reduced=typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'});target.tabIndex=-1;target.focus({preventScroll:true});
 };
 document.addEventListener('lsar:workspace-ready',()=>{const current=document.querySelector('[data-view][aria-current="page"]');active=current?.dataset.view||active;refresh();});
})();
