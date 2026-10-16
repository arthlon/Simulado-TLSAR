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
  const result={time,currentSpeed,currentDirection,windSpeed,windDirection,leeway,leewayDirection,current,windDrift,east,north,speed,direction,distance,distanceKm:distance*1.852};
  result.datum=datumFromLKP(input,result);return result;
 }
 function parseCoordinateDetails(value,axis,format='auto',hemisphere){
  if(!['lat','lon'].includes(axis))throw Error('Tipo de coordenada inválido.');
  const lat=axis==='lat',limit=lat?90:180,label=lat?'Latitude do LKP':'Longitude do LKP',mode=format||'auto';
  if(!['auto','dd','dmm','dms','gps'].includes(mode))throw Error('Selecione o formato das coordenadas do LKP.');
  const canonical=h=>h==='O'?'W':h==='L'?'E':h;
  let text=String(value??'').trim().toUpperCase().replace(/[−–]/g,'-').replace(/\u00a0/g,' '),embedded=null;
  if(/^[NSEWLO]/.test(text)){embedded=canonical(text[0]);text=text.slice(1).replace(/^\s*[,;]?\s*/,'');}
  if(/[NSEWLO]$/.test(text)){
   if(embedded)throw Error(label+': use apenas uma letra de hemisfério, no início ou no fim.');
   embedded=canonical(text.slice(-1));text=text.slice(0,-1).replace(/\s*[,;]?\s*$/,'');
  }
  let sign=null;if(/^[+-]/.test(text)){sign=text[0];text=text.slice(1).trim();}
  const allowed=lat?['N','S']:['E','W'],signed=sign===null?null:lat?(sign==='-'?'S':'N'):(sign==='-'?'W':'E');
  if(embedded&&!allowed.includes(embedded))throw Error(label+': hemisfério incompatível com '+(lat?'latitude (N/S).':'longitude (L/E/O/W).'));
  if(embedded&&signed&&embedded!==signed)throw Error(label+': o sinal e a letra do hemisfério se contradizem.');
  const effective=embedded||signed||canonical(String(hemisphere||'').toUpperCase());
  if(!allowed.includes(effective))throw Error(label+': selecione o hemisfério ou informe-o no texto.');
  const num='(?:\\d+(?:[.,]\\d*)?|[.,]\\d+)',degreeSep='(?:\\s*[°º˚:]\\s*|\\s+)',minuteSep="(?:\\s*['′’:]\\s*|\\s+)";
  const patterns={dd:new RegExp('^('+num+')\\s*[°º˚]?$'),dmm:new RegExp('^(\\d{1,3})'+degreeSep+'('+num+")\\s*['′’]?$") ,dms:new RegExp('^(\\d{1,3})'+degreeSep+'(\\d{1,2})'+minuteSep+'('+num+")(?:\\s*(?:[\"″”]|'{2}))?$")};
  let detected=mode,match;
  if(mode==='auto'){
   if(new RegExp('^\\d{'+(lat?4:5)+'}(?:[.,]\\d+)?$').test(text))throw Error(label+': valor compacto ambíguo. Selecione GPS/NMEA ou Graus decimais para indicar a interpretação.');
   detected=['dd','dmm','dms'].find(key=>patterns[key].test(text));
   if(!detected)throw Error(label+': use graus decimais, graus/minutos ou graus/minutos/segundos. Para coordenadas compactas, selecione “GPS/NMEA”.');
  }
  let degrees,minutes=0,seconds=0;
  if(detected==='gps'){
   match=text.match(new RegExp('^(\\d{'+(lat?2:3)+'})(\\d{2}(?:[.,]\\d+)?)$'));
   if(!match)throw Error(label+': no modo GPS/NMEA, use '+(lat?'DDMM.mmmm (ex.: 2018.5000).':'DDDMM.mmmm (ex.: 04017.2000).'));
   degrees=Number(match[1]);minutes=number(match[2],label+' — minutos');
  }else{
   match=text.match(patterns[detected]);
   if(!match)throw Error(label+': o valor não corresponde ao formato selecionado.');
   degrees=number(match[1],label+' — graus');
   if(detected!=='dd')minutes=number(match[2],label+' — minutos');
   if(detected==='dms')seconds=number(match[3],label+' — segundos');
  }
  if(minutes<0||minutes>=60)throw Error(label+': os minutos devem ser de 0 até menos de 60.');
  if(seconds<0||seconds>=60)throw Error(label+': os segundos devem ser de 0 até menos de 60.');
  if(degrees>limit||(degrees===limit&&(minutes!==0||seconds!==0)))throw Error(label+': limite de '+limit+'°, com minutos e segundos zero nesse limite.');
  const magnitude=degrees+minutes/60+seconds/3600;
  if(!Number.isFinite(magnitude)||magnitude>limit)throw Error(label+': coordenada fora do intervalo.');
  return {value:(effective==='S'||effective==='W'?-1:1)*magnitude,hemisphere:effective,format:detected,explicit:!!embedded||sign!==null};
 }
 function parseCoordinate(value,axis,format='auto',hemisphere){return parseCoordinateDetails(value,axis,format,hemisphere).value;}
 function formatCoordinate(value,axis,format='dmm'){
  if(!['lat','lon'].includes(axis)||!Number.isFinite(value)||Math.abs(value)>(axis==='lat'?90:180))throw Error('Coordenada fora do intervalo.');
  const negative=value<0||Object.is(value,-0),hemisphere=axis==='lat'?(negative?'S':'N'):(negative?'O':'L'),pad=axis==='lat'?2:3;
  if(format==='dd')return Math.abs(value).toFixed(6).replace('.',',')+'° '+hemisphere;
  if(format==='dms'){
   const ticks=Math.round(Math.abs(value)*360000),degrees=Math.floor(ticks/360000),rest=ticks-degrees*360000,minutes=Math.floor(rest/6000),seconds=(rest-minutes*6000)/100;
   return String(degrees).padStart(pad,'0')+'° '+String(minutes).padStart(2,'0')+'′ '+seconds.toFixed(2).padStart(5,'0').replace('.',',')+'″ '+hemisphere;
  }
  const thousandths=Math.round(Math.abs(value)*60000),degrees=Math.floor(thousandths/60000),minutes=(thousandths-degrees*60000)/1000;
  return String(degrees).padStart(pad,'0')+'° '+minutes.toFixed(3).padStart(6,'0').replace('.',',')+'′ '+hemisphere;
 }
 // Constant true bearing on a sphere (rhumb line), R=6371000 m, 1 MN=1852 m.
 // Reference: Movable Type Scripts, “Destination point along rhumb line”.
 function rhumbDestination(latitude,longitude,distanceNM,direction){
  if(![latitude,longitude,distanceNM].every(Number.isFinite)||Math.abs(latitude)>90||Math.abs(longitude)>180||distanceNM<0)throw Error('Dados de posição ou distância inválidos para o DATUM.');
  if(distanceNM===0)return {latitude,longitude};
  if(!Number.isFinite(direction))throw Error('A direção da deriva é necessária para calcular o DATUM.');
  const phi1=latitude*rad,theta=normalize(direction)*rad,delta=distanceNM*1852/6371000,dPhi=delta*Math.cos(theta),phi2=phi1+dPhi;
  if(Math.abs(phi1)>=Math.PI/2-1e-12||Math.abs(phi2)>=Math.PI/2-1e-12)throw Error('O trajeto atinge um polo ou parte dele; o modelo de DATUM por rumo constante não se aplica.');
  const dPsi=Math.log(Math.tan(Math.PI/4+phi2/2)/Math.tan(Math.PI/4+phi1/2)),q=Math.abs(dPsi)>1e-11?dPhi/dPsi:Math.cos(phi1),dLon=delta*Math.sin(theta)/q;
  const lat=phi2/rad,lon=((longitude+dLon/rad+180)%360+360)%360-180;
  if(![lat,lon].every(Number.isFinite))throw Error('O cálculo do DATUM excedeu o intervalo numérico.');
  return {latitude:Math.abs(lat)<1e-12?0:lat,longitude:Math.abs(lon)<1e-12?0:lon};
 }
 function datumFromLKP(input,result){
  const latText=String(input.lkpLatitude??'').trim(),lonText=String(input.lkpLongitude??'').trim(),ownTime=String(input.lkpTime??'').trim();
  if(!latText&&!lonText&&!ownTime)return null;
  if(!latText||!lonText)throw Error('LKP: preencha latitude e longitude ou deixe os dois campos e o horário do LKP em branco.');
  const format=input.lkpFormat||'auto',latitude=parseCoordinate(latText,'lat',format,input.lkpLatHem||'S'),longitude=parseCoordinate(lonText,'lon',format,input.lkpLonHem||'W'),startTime=ownTime||input.incident;
  const start=wallTime(startTime,'Horário do LKP'),end=wallTime(input.arrival,'Chegada');
  if(start>end)throw Error('O horário do LKP não pode ser posterior à chegada.');
  const time=(end-start)/3600000,distance=result.speed*time;
  if(!Number.isFinite(distance))throw Error('A distância desde o LKP excede o intervalo de cálculo.');
  return {...rhumbDestination(latitude,longitude,distance,result.direction),lkp:{latitude,longitude},startTime,endTime:input.arrival,time,distance,direction:result.direction,method:'Rumo constante em esfera, R = 6.371 km'};
 }
 function leewayAt(wind,points){
  const speed=nonnegative(wind,'Intensidade do vento');
  if(!Array.isArray(points)||points.length<2||!points.every((p,i)=>Array.isArray(p)&&p.length===2&&p.every(Number.isFinite)&&p[0]>=0&&p[1]>=0&&(i===0||p[0]>points[i-1][0])))throw Error('Curva de leeway inválida.');
  if(speed<points[0][0]||speed>points[points.length-1][0])throw Error('O gráfico digitalizado abrange vento de 0 a 32 nós. Use o modo manual fora dessa faixa.');
  for(let i=1;i<points.length;i++){const [x0,y0]=points[i-1],[x1,y1]=points[i];if(speed<=x1)return y0+(y1-y0)*(speed-x0)/(x1-x0);}
  return points[points.length-1][1];
 }
 function searchUnit(input){
  const wu=nonnegative(input.wu,'Wu'),fw=positive(input.fw,'Fator do tempo fw'),speed=positive(input.speed,'Velocidade V do meio'),time=hours(input.time,'Tempo T de busca'),spacingMode=input.spacingMode||'spacing';
  if(!['spacing','coverage'].includes(spacingMode))throw Error('Selecione como definir o espaçamento.');
  const wc=wu*fw;
  const desiredCoverage=spacingMode==='coverage'?positive(input.desiredCoverage,'Cobertura desejada C'):null;
  if(spacingMode==='coverage'&&wc===0)throw Error('Wc é zero: não é possível obter cobertura positiva calculando S. Confira Wu e fw ou use um S informado para avaliar cobertura zero.');
  const spacing=spacingMode==='coverage'?wc/desiredCoverage:positive(input.spacing,'Espaçamento S');
  if(!Number.isFinite(spacing)||spacing<=0)throw Error('Espaçamento S calculado deve ser positivo e finito.');
  const coverage=wc/spacing,area=spacing*speed*time;if(![wc,coverage,area].every(Number.isFinite))throw Error('Os valores do meio excedem o intervalo de cálculo.');return {wu,fw,wc,spacing,speed,time,coverage,area,spacingMode,desiredCoverage};
 }
 function searchTotal(units){if(!units.length)throw Error('Adicione pelo menos um meio de busca.');const area=units.reduce((sum,u)=>sum+u.area,0);if(!Number.isFinite(area))throw Error('Área total fora do intervalo numérico.');return {area,side:Math.sqrt(area),radius:Math.sqrt(area)/2};}
 const api=Object.freeze({number,nonnegative,positive,bearing,hours,normalize,elapsed,vector,drift,parseCoordinate,parseCoordinateDetails,formatCoordinate,rhumbDestination,datumFromLKP,leewayAt,searchUnit,searchTotal});root.SARDrift=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
