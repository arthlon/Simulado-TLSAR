/* Cálculos puros: ângulos náuticos verdadeiros, norte=0°, leste=90°; nós, horas e MN. */
(function(root){
 'use strict';
 const rad=Math.PI/180;
 function number(value,label='Valor'){
  const text=String(value??'').trim();
  if(!/^[+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+)$/.test(text))throw Error(label+': informe um número válido, sem separador de milhares.');
  const n=Number(text.replace(',','.'));if(!Number.isFinite(n))throw Error(label+': valor fora do intervalo numérico.');return n;
 }
 function nonnegative(v,label){const n=number(v,label);if(n<0)throw Error(label+': o valor não pode ser negativo.');return n;}
 function positive(v,label){const n=number(v,label);if(n<=0)throw Error(label+': informe um valor maior que zero.');return n;}
 function normalize(n){return ((n%360)+360)%360;}
 function bearing(v,label){const n=nonnegative(v,label);if(n>360)throw Error(label+': use de 0° a 360°.');return normalize(n);}
 function hours(v,label='Tempo de busca'){
  const s=String(v??'').trim();if(!s.includes(':'))return positive(s,label);
  if(!/^\d+:\d{2}$/.test(s))throw Error(label+': use horas decimais ou HH:MM.');
  const [h,m]=s.split(':').map(Number);if(m>=60)throw Error(label+': os minutos devem estar entre 00 e 59.');return positive(h+m/60,label);
 }
 function wallTime(v,label){
  const m=String(v).match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?$/);if(!m)throw Error(label+': preencha a data e a hora.');
  const [y,mo,d,h,mi,s]=[+m[1],+m[2],+m[3],+m[4],+m[5],+(m[6]||0)];
  if(y<100||mo<1||mo>12||d<1||h>23||mi>59||s>59)throw Error(label+': data ou hora inválida.');
  const t=Date.UTC(y,mo-1,d,h,mi,s),z=new Date(t);if(z.getUTCFullYear()!==y||z.getUTCMonth()!==mo-1||z.getUTCDate()!==d)throw Error(label+': data inválida.');return t;
 }
 function elapsed(start,end){const a=wallTime(start,'Incidente'),b=wallTime(end,'Chegada');if(b<a)throw Error('A chegada não pode ser anterior ao incidente. Confira também as datas.');return (b-a)/3600000;}
 function vector(speed,dir){return {east:speed*Math.sin(dir*rad),north:speed*Math.cos(dir*rad)};}
 function drift(input){
  const time=elapsed(input.incident,input.arrival),currentSpeed=nonnegative(input.currentSpeed,'Intensidade da corrente'),currentDirection=bearing(input.currentDirection,'Direção da corrente'),windSpeed=nonnegative(input.windSpeed,'Intensidade do vento'),windDirection=bearing(input.windDirection,'Direção do vento'),leeway=nonnegative(input.leeway,'Leeway');
  if(!['from','to'].includes(input.windConvention))throw Error('Selecione a convenção da direção do vento.');
  const leewayDirection=normalize(windDirection+(input.windConvention==='from'?180:0)),current=vector(currentSpeed,currentDirection),windDrift=vector(leeway,leewayDirection);
  let east=current.east+windDrift.east,north=current.north+windDrift.north,speed=Math.hypot(east,north);
  if(speed<1e-12*Math.max(1,currentSpeed,leeway)){speed=0;east=0;north=0;}
  const direction=speed===0?null:normalize(Math.atan2(east,north)/rad),distance=speed*time;
  if(![speed,time,distance,east,north].every(Number.isFinite))throw Error('Os valores excedem o intervalo de cálculo.');
  return {time,currentSpeed,currentDirection,windSpeed,windDirection,leeway,leewayDirection,current,windDrift,east,north,speed,direction,distance,distanceKm:distance*1.852};
 }
 function searchUnit(input){
  const wu=nonnegative(input.wu,'Wu'),fw=positive(input.fw,'Fator do tempo fw'),spacing=positive(input.spacing,'Espaçamento S'),speed=positive(input.speed,'Velocidade V do meio'),time=hours(input.time,'Tempo T de busca');
  const wc=wu*fw,coverage=wc/spacing,area=spacing*speed*time;if(![wc,coverage,area].every(Number.isFinite))throw Error('Os valores do meio excedem o intervalo de cálculo.');return {wu,fw,wc,spacing,speed,time,coverage,area};
 }
 function searchTotal(units){if(!units.length)throw Error('Adicione pelo menos um meio de busca.');const area=units.reduce((sum,u)=>sum+u.area,0);if(!Number.isFinite(area))throw Error('Área total fora do intervalo numérico.');return {area,side:Math.sqrt(area),radius:Math.sqrt(area)/2};}
 const api=Object.freeze({number,nonnegative,positive,bearing,hours,normalize,elapsed,vector,drift,searchUnit,searchTotal});root.SARDrift=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
