'use strict';
(function(root){
 const M=root.SARDrift||(typeof require==='function'?require('./calculos-deriva.js'):null),EPS=1e-9,LIMIT=2000;
 const names={PS:'Rotas paralelas (PS)',CS:'Varredura transversal (CS)',SS:'Quadrado crescente (SS)',VS:'Setores — saída do DATUM (VS/USCG)'};
 const positive=(x,label)=>{if(!Number.isFinite(x)||x<=0)throw Error(label+' deve ser positivo.');return x;};
 function partition(units,side){
  positive(side,'Lado');const area=units.reduce((s,u)=>s+positive(u.result.area,'Área do meio'),0);let x=-side/2;
  return units.map((unit,index)=>{const width=index===units.length-1?side/2-x:side*unit.result.area/area,rect={west:x,east:x+width,south:-side/2,north:side/2};x+=width;return {unit,rect};});
 }
 const inside=(p,r)=>p.x>=r.west-EPS&&p.x<=r.east+EPS&&p.y>=r.south-EPS&&p.y<=r.north+EPS;
 function segmentExit(a,b,r){
  let fraction=1;const dx=b.x-a.x,dy=b.y-a.y;
  if(dx>0)fraction=Math.min(fraction,(r.east-a.x)/dx);if(dx<0)fraction=Math.min(fraction,(r.west-a.x)/dx);
  if(dy>0)fraction=Math.min(fraction,(r.north-a.y)/dy);if(dy<0)fraction=Math.min(fraction,(r.south-a.y)/dy);
  return Math.max(0,Math.min(1,fraction));
 }
 function consume(points,kinds,speed,productiveTime,maxTotal=Infinity,endReason='Padrão concluído'){
  const result={points:[points[0]],legs:[],distance:0,searchDistance:0,linkDistance:0,time:0,searchTime:0,linkTime:0,budget:speed*productiveTime,reason:endReason,finished:true};
  result.fullRequiredTime=0;result.fullSearchTime=0;result.fullLinkTime=0;
  for(let i=1;i<points.length;i++){const t=Math.hypot(points[i].x-points[i-1].x,points[i].y-points[i-1].y)/speed;result.fullRequiredTime+=t;if(kinds[i-1]==='ligação')result.fullLinkTime+=t;else result.fullSearchTime+=t;}
  for(let i=1;i<points.length;i++){
   const a=points[i-1],target=points[i],kind=kinds[i-1],full=Math.hypot(target.x-a.x,target.y-a.y);if(full<EPS)continue;
   const productiveRemaining=Math.max(0,productiveTime-result.searchTime),remaining=Math.max(0,maxTotal-result.time);
   if(productiveRemaining<EPS){result.reason='Tempo produtivo disponível atingido';result.finished=false;break;}
   const fraction=Math.min(1,remaining*speed/full,kind==='busca'?productiveRemaining*speed/full:Infinity);
   if(fraction<EPS){result.reason='Limite de tempo total atingido';result.finished=false;break;}
   const b={x:a.x+(target.x-a.x)*fraction,y:a.y+(target.y-a.y)*fraction},distance=full*fraction,time=distance/speed;
   result.points.push(b);result.legs.push({from:a,to:b,distance,time,kind,heading:M.normalize(Math.atan2(b.x-a.x,b.y-a.y)*180/Math.PI),partial:fraction<1-EPS,startTime:result.time,endTime:result.time+time});
   result.distance+=distance;result.time+=time;
   if(kind==='busca'){result.searchDistance+=distance;result.searchTime+=time;}else{result.linkDistance+=distance;result.linkTime+=time;}
   if(fraction<1-EPS){result.reason=kind==='busca'&&productiveRemaining<remaining?'Tempo produtivo disponível (pernada parcial)':'Limite de tempo total (pernada parcial)';result.finished=false;break;}
  }
  return result;
 }
 function generate(unit,rect,options={},multiple=false){
  const r=unit.result,type=options.type||'PS',spacing=positive(r.spacing,'S'),speed=positive(r.speed,'V'),productiveTime=positive(r.time,'T produtivo');
  if(!names[type])throw Error('Selecione um padrão válido.');
  if(multiple&&['SS','VS'].includes(type))throw Error('SS e VS exigem um único meio nesta versão. Use PS/CS para subáreas ou calcule somente um meio.');
  const width=positive(rect.east-rect.west,'Largura'),height=positive(rect.north-rect.south,'Altura'),maxTotal=options.maxTotalTime?M.hours(options.maxTotalTime,'Limite total do padrão'):Infinity;
  const raw=[],kinds=[];let radius=null,endReason='Padrão concluído',edgeAdjusted=false;
  const start=p=>{if(!inside(p,rect))throw Error('O início do padrão está fora da área.');raw.push(p);};
  const go=(p,kind='busca')=>{const a=raw[raw.length-1];if(Math.hypot(a.x-p.x,a.y-p.y)<EPS)return;raw.push(p);kinds.push(kind);};
  if(type==='PS'||type==='CS'){
   const alongNorth=type==='PS'?height>=width:height<width,cross=alongNorth?width:height,along=alongNorth?height:width;
   if(cross<spacing-EPS||along<=spacing+EPS)throw Error('S não cabe com recuo de S/2 nos dois lados do canto. Reduza S ou reveja a subárea.');
   const count=Math.floor((cross-spacing)/spacing+EPS)+1;if(count>999)throw Error('Mais de 1.000 linhas seriam necessárias. Aumente S ou reduza a área.');
   const offsets=Array.from({length:count},(_,i)=>spacing/2+i*spacing),last=cross-spacing/2;
   if(last-offsets[offsets.length-1]>EPS){offsets.push(last);edgeAdjusted=true;}
   const reverse=!!options.reverse;
   const point=(offset,high)=>alongNorth?{x:rect.west+offset,y:high?rect.north-spacing/2:rect.south+spacing/2}:{x:high?rect.east-spacing/2:rect.west+spacing/2,y:rect.north-offset};
   start(point(offsets[0],reverse));
   offsets.forEach((offset,i)=>{const high=(i%2===0)!==reverse;go(point(offset,high));if(i+1<offsets.length)go(point(offsets[i+1],high),'ligação');});
  }else{
   const heading=Number(options.heading??0);if(!Number.isFinite(heading)||heading<0||heading>=360)throw Error('Rumo inicial: use 0 até menos de 360°.');
   start({x:0,y:0});
   if(type==='SS'){
    for(let i=0;i<LIMIT;i++){
     const course=(heading+i*90)*Math.PI/180,length=(Math.floor(i/2)+1)*spacing,a=raw[raw.length-1],b={x:a.x+length*Math.sin(course),y:a.y+length*Math.cos(course)},f=segmentExit(a,b,rect);
     go({x:a.x+(b.x-a.x)*f,y:a.y+(b.y-a.y)*f});
     if(f<1-EPS){endReason='Limite da área atingido';break;}
     if(i===LIMIT-1)endReason='Limite de 2.000 pernadas atingido';
    }
   }else{
    radius=positive(Number(options.radius??Math.min(width,height)/2),'Raio do setor');
    if(radius>Math.min(width,height)/2+EPS)throw Error('O raio do setor deve caber no quadrado (máximo: R).');
    const passes=Number(options.passes??1);if(![1,2].includes(passes))throw Error('Escolha uma ou duas passagens do setor.');
    // Split diameter crossings at DATUM: nine radius-length legs, 9r per pass.
    for(let pass=0;pass<passes;pass++)for(const turn of [0,120,240,240,360,480,480,600,720]){
     const course=(heading+pass*30+turn)*Math.PI/180,a=raw[raw.length-1];go({x:a.x+radius*Math.sin(course),y:a.y+radius*Math.cos(course)});
    }
   }
  }
  const result=consume(raw,kinds,speed,productiveTime,maxTotal,endReason);
  return {...result,type,name:names[type],rect,speed,spacing,radius,area:r.area,edgeAdjusted,maxTotalTime:Number.isFinite(maxTotal)?maxTotal:null};
 }
 function coordinatedArea(aircraft,ship){
  const time=Math.min(positive(aircraft.result.time,'T da aeronave'),positive(ship.result.time,'T do navio'));
  const area=positive(aircraft.result.spacing,'S da aeronave')*positive(aircraft.result.speed,'Va')*time;
  positive(area,'Área nominal aérea do par');return {area,side:Math.sqrt(area),radius:Math.sqrt(area)/2,time};
 }
 function coordinated(aircraft,ship,side,options={}){
  positive(side,'Lado da área');
  if(aircraft.id===ship.id)throw Error('Escolha meios diferentes para aeronave e navio.');
  const va=positive(aircraft.result.speed,'Velocidade da aeronave'),s=positive(aircraft.result.spacing,'S da aeronave');
  const ta=positive(aircraft.result.time,'Tempo da aeronave'),ts=positive(ship.result.time,'Tempo do navio');
  const suppliedVs=positive(ship.result.speed,'Velocidade informada do navio'),heading=Number(options.heading??0);
  if(!Number.isFinite(heading)||heading<0||heading>=360)throw Error('Rumo do navio: use 0 até menos de 360°.');
  const angle=(heading-Number(options.areaHeading||0))*Math.PI/180,sin=Math.sin(angle),cos=Math.cos(angle),extent=side/(Math.abs(sin)+Math.abs(cos));
  const availableLeg=extent-s;
  if(availableLeg<=EPS)throw Error('S não cabe na área com margem de S/2. Reveja o espaçamento ou a área.');
  const mode=options.speedMode||'required';if(!['required','fixed'].includes(mode))throw Error('Selecione como coordenar a velocidade do navio.');
  let length,vs;
  if(mode==='fixed'){
   if(suppliedVs>=va)throw Error('No CSC, a velocidade do navio deve ser menor que a da aeronave.');
   vs=suppliedVs;length=s*(va/vs-1);
  }else{length=positive(Number(options.legLength||availableLeg),'Comprimento L');vs=s*va/(length+s);}
  positive(length,'Comprimento L');positive(vs,'Velocidade coordenada do navio');
  if(length>availableLeg+EPS)throw Error('O comprimento L não cabe na área neste rumo com margem S/2 (máximo '+availableLeg.toLocaleString('pt-BR',{maximumFractionDigits:3})+' MN). Ajuste o modo, o rumo ou os dados dos meios.');
  const phase=vs*length/(2*va),tracks=Math.floor((extent-s)/s+EPS)+1;
  if(tracks<1)throw Error('Não há espaço para iniciar os dois meios dentro da área.');
  if(tracks>1000)throw Error('Mais de 1.000 pernadas CSC seriam necessárias. Aumente S ou reduza a área.');
  const first=-(tracks-1)*s/2,shipStart=first-phase;
  const fullTime=(tracks*length+(tracks-1)*s)/va;
  const xy=(axis,cross)=>({x:axis*sin+cross*cos,y:axis*cos-cross*sin});
  const rect={west:-side/2,east:side/2,south:-side/2,north:side/2};
  const raw=[xy(first,-length/2)],kinds=[];
  for(let i=0;i<tracks;i++){raw.push(xy(first+i*s,i%2===0?length/2:-length/2));kinds.push('busca');if(i+1<tracks){raw.push(xy(first+(i+1)*s,i%2===0?length/2:-length/2));kinds.push('ligação');}}
  const maxTotal=Math.min(ts,options.maxTotalTime?M.hours(options.maxTotalTime,'Limite total CSC'):Infinity);
  const consumed=consume(raw,kinds,va,ta,maxTotal,'Faixa CSC concluída'),time=consumed.time,reason=consumed.reason;
  const airPlan={...consumed,type:'CSC',name:'Pente coordenado (CSC)',rect,speed:va,spacing:s,area:aircraft.result.area};
  const start=xy(shipStart,0),end=xy(shipStart+vs*time,0),distance=vs*time;
  const shipPlan={type:'CSC',name:'Pente coordenado (CSC)',rect,points:[start,end],legs:[{from:start,to:end,distance,time,kind:'busca',heading:M.normalize(heading-Number(options.areaHeading||0)),partial:!consumed.finished,startTime:0,endTime:time}],distance,searchDistance:distance,linkDistance:0,time,searchTime:time,linkTime:0,fullRequiredTime:fullTime,fullSearchTime:fullTime,fullLinkTime:0,budget:vs*ts,speed:vs,spacing:ship.result.spacing,area:ship.result.area,reason,finished:consumed.finished};
  const crossings=[];
  for(let i=0;i<tracks;i++){
   const at=(length/2+i*(length+s))/va;if(at>time+EPS)break;
   crossings.push({time:at,point:xy(first+i*s,0),leg:2*i+1});
  }
  if([...airPlan.points,...shipPlan.points].some(p=>!inside(p,rect)))throw Error('O traçado coordenado ultrapassaria a área. Confira L, S e o rumo.');
  return {airPlan,shipPlan,crossings,va,vs,s,length,suppliedVs,heading,mode,time,fullTime,extent,tracks,phase,reason,margin:(extent-length)/2,axisMargin:(extent-(tracks-1)*s)/2,nominal:coordinatedArea(aircraft,ship)};
 }
 function geographic(point,datum,reference=datum.longitude){
  const distance=Math.hypot(point.x,point.y),bearing=M.normalize(Math.atan2(point.x,point.y)*180/Math.PI),p=M.rhumbDestination(datum.latitude,datum.longitude,distance,bearing);
  if(Math.abs(p.latitude)>85.05112878)throw Error('O traçado ultrapassa a latitude disponível no mapa.');
  return [p.latitude,p.longitude+360*Math.round((reference-p.longitude)/360)];
 }
 const api=Object.freeze({names,partition,generate,coordinated,coordinatedArea,geographic,inside});root.SARSearchPlans=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
