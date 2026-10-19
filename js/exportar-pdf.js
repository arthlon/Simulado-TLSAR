'use strict';
(function(){
 const $=id=>document.getElementById(id),PDF=window.SARPDF,api=window.SARCalculatorSession,bridge=window.SARCalculatorMap;
 if(!api||!bridge)return;
 if(!PDF){$('pdf-export-status').textContent='O recurso de PDF não carregou. Recarregue a página e tente novamente.';return;}
 const buttons=[...document.querySelectorAll('[data-pdf-export]')];let available=false;
 function model(){const raw=api.capture();return {title:$('mission-title').value.trim()||'Missão sem título',raw,state:bridge.getState(),objectLabel:window.SAR_DRIFT_TABLES?.leewayConditions.find(c=>c.id===raw.drift.leewayCondition)?.label||raw.drift.leewayCondition};}
 function refresh(){
  let message;try{PDF.validate(model());available=true;message='PDF de 2 páginas: resumo dos cálculos e carta de plotagem.';}catch(error){available=false;message=error.message;}
  buttons.forEach(button=>{button.disabled=!available;button.title=message;});$('pdf-export-status').textContent=message;
 }
 function download(){
  if(!available){refresh();return;}
  try{
   const data=model(),bytes=PDF.build(data),blob=new Blob([bytes],{type:'application/pdf'}),url=URL.createObjectURL(blob),a=document.createElement('a');
   const title=data.title.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9_-]+/g,'_').replace(/^_|_$/g,'').slice(0,80)||'Missao_SAR';
   a.href=url;a.download='Resumo_SAR_'+title+'.pdf';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);
   $('pdf-export-status').textContent='PDF gerado com 2 páginas. DATUM 1 = LKP; DATUM 2 = posição estimada na chegada.';
  }catch(error){$('pdf-export-status').textContent='Não foi possível gerar o PDF. '+error.message;}
 }
 buttons.forEach(button=>button.addEventListener('click',download));document.addEventListener('lsar:map-state',refresh);refresh();
})();
