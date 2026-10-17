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
 function square(center,side,reference=center.longitude){
  if(!Number.isFinite(side)||side<=0)throw Error('O lado do quadrado deve ser positivo.');
  // Local N/E offsets: corners at half a side north/south and east/west.
  const r=side/2,points=[315,45,135,225].map(b=>M.rhumbDestination(center.latitude,center.longitude,r*Math.SQRT2,b));
  if(points.some(p=>!visible(p)))throw Error('O quadrado ultrapassa o limite de latitude deste mapa.');
  return points.map(p=>[p.latitude,near(p.longitude,reference)]);
 }
 const api=Object.freeze({visible,near,path,square});root.SARMapGeometry=api;
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
