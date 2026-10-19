'use strict';
(function(){
 const $=id=>document.getElementById(id),PDF=window.SARPDF,api=window.SARCalculatorSession,bridge=window.SARCalculatorMap;
 if(!api||!bridge)return;
 const buttons=[...document.querySelectorAll('[data-pdf-export]')];let available=false;
 const objectLabel=raw=>window.SAR_DRIFT_TABLES?.leewayConditions.find(c=>c.id===raw.drift.leewayCondition)?.label||raw.drift.leewayCondition;
 function model(){const raw=api.capture();return {title:$('mission-title').value.trim()||'Missão sem título',raw,state:bridge.getState(),objectLabel:objectLabel(raw)};}
 function savedModel(item){return {title:item.title,raw:item.data,state:api.evaluate(item.data).state,objectLabel:objectLabel(item.data)};}
 function validate(data){if(!PDF)throw Error('O recurso de PDF não carregou. Recarregue a página e tente novamente.');PDF.validate(data);}
 function refresh(){
  let message;try{const data=model();validate(data);available=true;message=data.state.drift.datum?'PDF de 2 páginas: resumo dos cálculos e carta de plotagem.':'PDF de 1 página: resumo dos cálculos. Informe o LKP para incluir a carta.';}catch(error){available=false;message=error.message;}
  buttons.forEach(button=>{button.disabled=!available;button.title=message;});$('pdf-export-status').textContent=message;
 }
 function downloadPDF(data){
  validate(data);
  const bytes=PDF.build(data),blob=new Blob([bytes],{type:'application/pdf'}),url=URL.createObjectURL(blob),a=document.createElement('a');
  const title=data.title.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9_-]+/g,'_').replace(/^_|_$/g,'').slice(0,80)||'Missao_SAR';
  a.href=url;a.download='Resumo_SAR_'+title+'.pdf';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);
 }
 window.SARExports=Object.freeze({
  availability(item,format){try{if(format==='pdf')validate(savedModel(item));else{const result=api.evaluate(item.data);if(!result.drift&&!result.search)throw Error('A missão foi salva como rascunho. Abra, calcule e atualize antes de exportar.');}return {available:true,message:format==='pdf'?'Exportar o resumo PDF desta missão.':'Exportar a memória de cálculo desta missão.'};}catch(error){return {available:false,message:error.message};}},
  mission(item,format){if(format==='pdf')downloadPDF(savedModel(item));else if(format==='txt')api.exportReport(item.data,item.title);else throw Error('Formato de exportação inválido.');}
 });
 buttons.forEach(button=>button.addEventListener('click',()=>{
  if(!available){refresh();return;}
  try{const data=model();downloadPDF(data);$('pdf-export-status').textContent=data.state.drift.datum?'PDF gerado com 2 páginas. DATUM 1 = LKP; DATUM 2 = posição estimada na chegada.':'PDF gerado com 1 página: resumo dos cálculos, sem LKP informado.';}catch(error){$('pdf-export-status').textContent='Não foi possível gerar o PDF. '+error.message;}
 }));
 document.addEventListener('lsar:map-state',refresh);refresh();
})();
