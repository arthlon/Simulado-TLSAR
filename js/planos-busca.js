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
 function generate(unit,rect,options={},multiple=false){
  const r=unit.result,type=options.type||'PS',spacing=positive(r.spacing,'S'),speed=positive(r.speed,'V'),time=positive(r.time,'T'),budget=positive(speed*time,'Percurso V × T');
  if(!names[type])throw Error('Selecione um padrão válido.');
  if(multiple&&['SS','VS'].includes(type))throw Error('SS e VS exigem um único meio nesta versão. Use PS/CS para subáreas ou calcule somente um meio.');
  const width=positive(rect.east-rect.west,'Largura'),height=positive(rect.north-rect.south,'Altura');
  let points=[],legs=[],distance=0,reason='Padrão concluído',halt=false,radius=null;
  const start=p=>{if(!inside(p,rect))throw Error('O início do padrão está fora da área.');points.push(p);};
  function go(target,kind='busca'){
   if(halt)return false;const a=points[points.length-1],dx=target.x-a.x,dy=target.y-a.y,full=Math.hypot(dx,dy);if(full<EPS)return true;
   if(legs.length>=LIMIT){reason='Limite de 2.000 pernadas atingido; aumente S ou reduza o tempo/área.';halt=true;return false;}
   const byArea=segmentExit(a,target,rect),remaining=Math.max(0,budget-distance),byTime=remaining/full,ratio=Math.min(1,byArea,byTime);
   if(ratio<EPS){reason=byArea<=byTime?'Limite da área atingido':'Tempo disponível atingido';halt=true;return false;}
   const b={x:a.x+dx*ratio,y:a.y+dy*ratio},length=full*ratio,heading=M.normalize(Math.atan2(dx,dy)*180/Math.PI);
   points.push(b);distance+=length;legs.push({from:a,to:b,distance:length,heading,time:length/speed,kind,partial:ratio<1-EPS});
   if(ratio<1-EPS){reason=byArea<=byTime?'Limite da área atingido (última pernada parcial)':'Tempo disponível atingido (última pernada parcial)';halt=true;return false;}
   return true;
  }
  if(type==='PS'||type==='CS'){
   const alongNorth=type==='PS'?height>=width:height<width,cross=alongNorth?width:height,along=alongNorth?height:width;
   const tracks=Math.ceil(cross/spacing-EPS)||1;
   if(tracks>LIMIT/2)throw Error('Mais de 1.000 linhas seriam necessárias. Aumente S ou reduza a área.');
   const margin=(cross-(tracks-1)*spacing)/2,reverse=!!options.reverse;
   const point=(i,high)=>alongNorth?{x:rect.west+margin+i*spacing,y:high?rect.north:rect.south}:{x:high?rect.east:rect.west,y:rect.north-margin-i*spacing};
   start(point(0,reverse));
   for(let i=0;i<tracks&&!halt;i++){
    const high=(i%2===0)!==reverse;go(point(i,high));
    if(i+1<tracks&&!halt)go(point(i+1,high),'ligação');
   }
  }else{
   const heading=Number(options.heading??0);if(!Number.isFinite(heading)||heading<0||heading>=360)throw Error('Rumo inicial: use 0 até menos de 360°V.');
   start({x:0,y:0});
   if(type==='SS'){
    for(let i=0;i<LIMIT&&!halt;i++){
     const course=(heading+i*90)*Math.PI/180,length=(Math.floor(i/2)+1)*spacing,a=points[points.length-1];
     go({x:a.x+length*Math.sin(course),y:a.y+length*Math.cos(course)});
    }
    if(!halt)reason='Limite de 2.000 pernadas atingido.';
   }else{
    radius=positive(Number(options.radius??Math.min(width,height)/2),'Raio do setor');
    if(radius>Math.min(width,height)/2+EPS)throw Error('O raio do setor deve caber no quadrado (máximo: R).');
    const passes=Number(options.passes??1);if(![1,2].includes(passes))throw Error('Escolha uma ou duas passagens do setor.');
    for(let pass=0;pass<passes&&!halt;pass++)for(const [i,factor] of [1,1,2,1,2,1,1].entries()){
     const course=(heading+pass*30+i*120)*Math.PI/180,a=points[points.length-1];
     if(!go({x:a.x+factor*radius*Math.sin(course),y:a.y+factor*radius*Math.cos(course)}))break;
    }
   }
  }
  return {type,name:names[type],rect,points,legs,distance,time:distance/speed,budget,speed,spacing,radius,reason,finished:!halt,area:r.area};
 }
 function geographic(point,datum,reference=datum.longitude){
  const distance=Math.hypot(point.x,point.y),bearing=M.normalize(Math.atan2(point.x,point.y)*180/Math.PI),p=M.rhumbDestination(datum.latitude,datum.longitude,distance,bearing);
  if(Math.abs(p.latitude)>85.05112878)throw Error('O traçado ultrapassa a latitude disponível no mapa.');
  return [p.latitude,p.longitude+360*Math.round((reference-p.longitude)/360)];
 }
 const api=Object.freeze({names,partition,generate,geographic,inside});root.SARSearchPlans=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
