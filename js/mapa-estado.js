'use strict';
(function(){
 const KEY='missao-lsar-mapa-snapshot-v1',UI='missao-lsar-mapa-opcoes-v1';
 const standalone=document.body.classList.contains('standalone-map');
 const empty=()=>({lkp:null,drift:null,search:null});let state=empty(),stamp=0;
 function valid(data){
  return data&&data.version===1&&data.state&&(!data.state.search||(Number.isFinite(data.state.search.side)&&Array.isArray(data.state.search.units)&&data.state.search.units.length<=30));
 }
 function read(){try{const data=JSON.parse(localStorage.getItem(KEY));if(valid(data)){stamp=data.updated;return data.state;}}catch{}return empty();}
 function status(){const target=document.getElementById('map-sync-status');if(target)target.textContent=stamp?'Dados da calculadora recebidos às '+new Date(stamp).toLocaleTimeString('pt-BR')+'. Atualizações recebidas enquanto esta aba estiver aberta.':'Nenhum cálculo recebido. Abra a calculadora, calcule a deriva e a área e use “Abrir em nova aba”.';}
 function publish(value){state=value;stamp=Date.now();try{localStorage.setItem(KEY,JSON.stringify({version:1,updated:stamp,state:value}));return true;}catch{return false;}}
 if(standalone){
  state=read();window.SARCalculatorMap=Object.freeze({getState:()=>structuredClone(state)});
  addEventListener('storage',event=>{if(event.key!==KEY)return;state=read();status();document.dispatchEvent(new CustomEvent('lsar:map-state',{detail:structuredClone(state)}));});status();
 }else if(window.SARCalculatorMap){
  state=window.SARCalculatorMap.getState();publish(state);
  document.addEventListener('lsar:map-state',event=>publish(event.detail));
 }
 addEventListener('storage',event=>{if(event.key===UI){let options={};try{options=JSON.parse(event.newValue)||{};}catch{}document.dispatchEvent(new CustomEvent('lsar:map-options',{detail:options}));}});
 window.SARMapSession=Object.freeze({standalone,publish,readOptions(){try{return JSON.parse(localStorage.getItem(UI))||{};}catch{return {};}},saveOptions(options){try{localStorage.setItem(UI,JSON.stringify(options));return true;}catch{return false;}}});
})();
