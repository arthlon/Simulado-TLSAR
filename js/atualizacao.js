/* Lightweight release check. Rendering and application startup never wait for it. */
(() => {
 'use strict';
 if(!/^https?:$/.test(location.protocol))return;
 const build=document.querySelector('meta[name="lsar-build"]')?.content;
 if(!build)return;
 // Links between application pages use the current release, avoiding cached old HTML.
 document.addEventListener('click',event=>{
  const anchor=event.target.closest?.('a[href]');if(!anchor||anchor.hasAttribute('download'))return;
  const href=anchor.getAttribute('href');if(!href||href.startsWith('#'))return;
  const url=new URL(href,document.baseURI);
  if(url.origin!==location.origin||!/(?:^|\/)(?:index|deriva|mapa)\.html$/.test(url.pathname))return;
  url.searchParams.set('v',build);anchor.href=url.href;
 },true);
 let active=false,busy=false,lastCheck=0;
 for(const type of ['pointerdown','keydown','input'])addEventListener(type,()=>{active=true;},{capture:true,once:true});
 const attemptKey='missao-lsar-update:'+location.pathname;
 function previouslyAttempted(version){
  try{if(sessionStorage.getItem(attemptKey)===version)return true;}catch{}
  return new URL(location.href).searchParams.get('v')===version;
 }
 function refresh(version){
  try{sessionStorage.setItem(attemptKey,version);}catch{}
  const url=new URL(location.href);url.searchParams.delete('_lsar');url.searchParams.set('v',version);
  location.replace(url.href);
 }
 function notice(version){
  if(document.getElementById('update-notice'))return;
  const box=document.createElement('aside');box.id='update-notice';box.className='update-notice';box.setAttribute('role','status');
  const text=document.createElement('span');text.textContent='Há uma versão nova disponível.';
  const button=document.createElement('button');button.type='button';button.textContent='Atualizar';button.onclick=()=>refresh(version);
  box.append(text,button);document.body.append(box);
 }
 async function check(){
  if(busy||document.hidden||Date.now()-lastCheck<30000)return;
  lastCheck=Date.now();busy=true;
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),3000);
  try{
   const response=await fetch(new URL('versao.json',document.baseURI),{cache:'no-cache',credentials:'same-origin',signal:controller.signal});
   if(!response.ok)return;
   const data=await response.json();
   if(typeof data.version!=='string'||!/^[a-f0-9]{16}$/.test(data.version)||data.version===build)return;
   // Do not interrupt an answered question, edits, or a restored back/forward view.
   if(!active&&!previouslyAttempted(data.version))refresh(data.version);
   else notice(data.version);
  }catch(_){/* A failed update check never blocks the current page. */}
  finally{clearTimeout(timer);busy=false;}
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(check,0),{once:true});else setTimeout(check,0);
 addEventListener('pageshow',event=>{if(event.persisted){active=true;check();}});
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)check();});
})();
