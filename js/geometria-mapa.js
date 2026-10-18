'use strict';
(function(root){
 const M=root.SARDrift||(typeof require==='function'?require('./calculos-deriva.js'):null);
 const MAX_LAT=85.05112878;
 function visible(p){return !!p&&Number.isFinite(p.latitude)&&Number.isFinite(p.longitude)&&Math.abs(p.latitude)<=MAX_LAT;}
 function near(lon,reference){return lon+360*Math.round((reference-lon)/360);}
 function path(start,distance,direction){
  const points=[];let reference=start.longitude;
  for(let i=0;i<=64;i++){
   const p=M.rhumbDestination(start.latitude,start.longitude,distance*i/64,direction);
   if(!visible(p))throw Error('O trajeto ultrapassa o limite de latitude deste mapa (85,05°).');
   reference=near(p.longitude,reference);points.push([p.latitude,reference]);
  }
  return points;
 }
 function rotate(p,heading=0){const a=heading*Math.PI/180;return {x:p.x*Math.cos(a)+p.y*Math.sin(a),y:-p.x*Math.sin(a)+p.y*Math.cos(a)};}
 function project(p,center,reference=center.longitude){
  const result=M.rhumbDestination(center.latitude,center.longitude,Math.hypot(p.x,p.y),M.normalize(Math.atan2(p.x,p.y)*180/Math.PI));
  if(!visible(result))throw Error('A área ultrapassa o limite de latitude deste mapa.');
  return [result.latitude,near(result.longitude,reference)];
 }
 function orientation(state,options={}){return options.areaMode==='manual'?M.bearing(options.areaHeading,'Orientação da área'):state.drift?.direction??0;}
 function future(datum,drift,hours){if(!Number.isFinite(hours)||hours<0)throw Error('Tempo de previsão inválido.');return M.rhumbDestination(datum.latitude,datum.longitude,drift.speed*hours,drift.direction);}
 function square(center,side,reference=center.longitude,heading=0){
  if(!Number.isFinite(side)||side<=0)throw Error('O lado do quadrado deve ser positivo.');
  // Local N/E offsets: corners at half a side north/south and east/west.
  const r=side/2;return [{x:-r,y:r},{x:r,y:r},{x:r,y:-r},{x:-r,y:-r}].map(p=>project(rotate(p,heading),center,reference));
 }
 const api=Object.freeze({visible,near,path,square,rotate,project,orientation,future});root.SARMapGeometry=api;
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
