'use strict';
(function(root){
 const REF=root.SARPDFReference||(typeof require==='function'?require('./pdf-referencia.js'):null);
 const M=root.SARDrift||(typeof require==='function'?require('./calculos-deriva.js'):null),PT=72/25.4,W=297,H=210,EARTH=6371000/1852,RAD=Math.PI/180;
 const WIDTHS=[[761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584,761,556,556,222,556,333,1000,556,556,333,1000,667,333,1000,556,611,556,556,222,222,333,333,350,556,1000,333,1000,500,333,944,556,500,667,278,333,556,556,556,556,260,556,333,737,370,556,584,333,737,333,400,584,333,333,333,556,537,278,333,333,365,556,834,834,834,611,667,667,667,667,667,667,1000,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,500,556,556,556,556,278,278,278,278,556,556,556,556,556,556,556,584,611,556,556,556,556,500,556,500],[761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,278,333,474,556,556,889,722,238,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,333,333,584,584,584,611,975,722,722,722,722,667,611,778,722,278,556,722,611,833,722,778,667,778,722,667,611,722,667,944,667,667,611,333,278,333,584,556,333,556,611,556,611,556,333,611,611,278,278,556,278,889,611,611,611,611,389,556,333,611,556,778,556,556,500,389,280,389,584,761,556,611,278,556,500,1000,556,556,333,1000,667,333,1000,611,611,611,611,278,278,500,500,350,556,1000,333,1000,556,333,944,611,500,667,278,333,556,556,556,556,280,556,333,737,370,556,584,333,737,333,400,584,333,333,333,611,556,278,333,333,365,556,834,834,834,611,722,722,722,722,722,722,1000,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,556,556,556,556,556,278,278,278,278,611,611,611,611,611,611,611,584,611,611,611,611,611,556,611,556]];
 const C={ink:'#19354a',muted:'#546c7c',line:'#c4d3da',navy:'#0d273c',teal:'#087970',blue:'#296da5',gold:'#c0841e',purple:'#8853a1',pale:'#edf6f3'};
 const num=(n,d=4)=>n!==0&&(Math.abs(n)<.001||Math.abs(n)>=1e8)?n.toExponential(3).replace('.',','):n.toLocaleString('pt-BR',{maximumFractionDigits:d});
 const clean=s=>String(s??'').normalize('NFC').replace(/[\u2010-\u2015\u2212]/g,'-').replace(/[\u2032\u2018\u2019]/g,"'").replace(/[\u2033\u201c\u201d]/g,'"').replace(/→/g,'->').replace(/√/g,'sqrt').replace(/\u2026/g,'...');
 const special={'€':128,'‚':130,'ƒ':131,'„':132,'…':133,'†':134,'‡':135,'ˆ':136,'‰':137,'Š':138,'‹':139,'Œ':140,'Ž':142,'‘':145,'’':146,'“':147,'”':148,'•':149,'–':150,'—':151,'˜':152,'™':153,'š':154,'›':155,'œ':156,'ž':158,'Ÿ':159};
 function encoded(s){return Array.from(clean(s),c=>c.charCodeAt(0)<=255?c.charCodeAt(0):(special[c]??63));}
 function literal(s){return '('+encoded(s).map(c=>c===40||c===41||c===92?'\\'+String.fromCharCode(c):c<32||c>126?'\\'+c.toString(8).padStart(3,'0'):String.fromCharCode(c)).join('')+')';}
 function width(s,size=9,bold=false){return encoded(s).reduce((a,c)=>a+WIDTHS[bold?1:0][c],0)*size/1000/PT;}
 function ellipsis(s,max,size=9,bold=false){s=clean(s);if(width(s,size,bold)<=max)return s;while(s&&width(s+'...',size,bold)>max)s=s.slice(0,-1);return s+'...';}
 function rgb(hex){return [1,3,5].map(i=>(parseInt(hex.slice(i,i+2),16)/255).toFixed(4)).join(' ');}
 const p=n=>(n*PT).toFixed(3),q=n=>Number(n).toFixed(3);
 class Page{
  constructor(w=W,h=H){this.w=w;this.h=h;this.ops=[];}
  text(x,y,s,size=9,bold=false,color=C.ink,align='left'){
   if(align==='right')x-=width(s,size,bold);else if(align==='center')x-=width(s,size,bold)/2;
   this.ops.push(`BT /${bold?'FB':'FR'} ${q(size)} Tf ${rgb(color)} rg 1 0 0 1 ${p(x)} ${p(this.h-y)} Tm ${literal(s)} Tj ET`);
  }
  line(x1,y1,x2,y2,color=C.line,weight=.2,dash=[]){this.path([[x1,y1],[x2,y2]],color,weight,null,false,dash);}
  rect(x,y,w,h,fill=null,stroke=null,weight=.2){this.ops.push(`q ${fill?rgb(fill)+' rg ':''}${stroke?rgb(stroke)+' RG '+p(weight)+' w ':''}${p(x)} ${p(this.h-y-h)} ${p(w)} ${p(h)} re ${fill&&stroke?'B':fill?'f':'S'} Q`);}
  path(points,stroke=C.ink,weight=.25,fill=null,closed=false,dash=[]){
   if(!points.length)return;let s=`q ${rgb(stroke)} RG ${p(weight)} w [${dash.map(p).join(' ')}] 0 d `+(fill?rgb(fill)+' rg ':'');
   s+=points.map(([x,y],i)=>`${p(x)} ${p(this.h-y)} ${i?'l':'m'}`).join(' ');if(closed)s+=' h';s+=' '+(fill?'B':'S')+' Q';this.ops.push(s);
  }
  circle(x,y,r,stroke=C.ink,fill=null,weight=.3){const pts=Array.from({length:97},(_,i)=>{const a=i*Math.PI/48;return [x+r*Math.cos(a),y+r*Math.sin(a)]});this.path(pts,stroke,weight,fill,true);}
  reference(){this.ops.push(`q ${p(this.w)} 0 0 ${p(this.h)} 0 0 cm /REF Do Q`);}
  clip(frame){this.ops.push(`q ${p(frame.x)} ${p(this.h-frame.y-frame.h)} ${p(frame.w)} ${p(frame.h)} re W n`);}
  unclip(){this.ops.push('Q');}
  stream(){return this.ops.join('\n')+'\n';}
 }
 function pdf(pages,title){
  const imageId=5+pages.length*2;
  const objects=['<< /Type /Catalog /Pages 2 0 R >>','<< /Type /Pages /Count '+pages.length+' /Kids ['+pages.map((_,i)=>(5+i*2)+' 0 R').join(' ')+'] >>','<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>','<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>'];
  pages.forEach((page,i)=>{const stream=page.stream();objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${p(page.w)} ${p(page.h)}] /Resources << /Font << /FR 3 0 R /FB 4 0 R >> /XObject << /REF ${imageId} 0 R >> >> /Contents ${6+i*2} 0 R >>`);objects.push(`<< /Length ${stream.length} >>\nstream\n${stream}endstream`);});
  const image=typeof atob==='function'?atob(REF.data):Buffer.from(REF.data,'base64').toString('latin1');
  objects.push(`<< /Type /XObject /Subtype /Image /Width ${REF.width} /Height ${REF.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /FlateDecode /Length ${image.length} >>\nstream\n${image}\nendstream`);
  objects.push('<< /Title '+literal(title)+' /Author (Missao LSAR) /Creator (Calculadora SAR) >>');
  let data='%PDF-1.4\n%\xE2\xE3\xCF\xD3\n',offsets=[0];objects.forEach((obj,i)=>{offsets.push(data.length);data+=(i+1)+' 0 obj\n'+obj+'\nendobj\n';});const start=data.length;
  data+='xref\n0 '+(objects.length+1)+'\n0000000000 65535 f \n'+offsets.slice(1).map(o=>String(o).padStart(10,'0')+' 00000 n \n').join('');data+=`trailer\n<< /Size ${objects.length+1} /Root 1 0 R /Info ${objects.length} 0 R >>\nstartxref\n${start}\n%%EOF\n`;
  return Uint8Array.from(data,c=>c.charCodeAt(0));
 }
 const finite=(v,label)=>{if(!Number.isFinite(v))throw Error(label+' inválido.');return v;};
 function validate(model){
  const {state,raw}=model||{};if(!state?.drift||!state?.search||!raw?.calculated?.drift||!raw?.calculated?.search)throw Error('Calcule a deriva e a área de busca com os dados atuais antes de exportar.');
  if(!state.drift.datum)throw Error('Informe o LKP e recalcule a deriva para plotar DATUM 1 e DATUM 2.');
  const d=state.drift.datum,t=state.search;if(!d.lkp)throw Error('LKP ausente.');
  for(const v of [d.latitude,d.longitude,d.lkp.latitude,d.lkp.longitude,state.drift.speed,d.distance])finite(v,'Dado da deriva');
  if(!Array.isArray(t.units)||!t.units.length||t.units.length>30)throw Error('Informe entre 1 e 30 meios de busca.');
  for(const key of ['area','side','radius'])if(finite(t[key],'Área')<=0)throw Error('A área deve ser positiva.');
  for(const u of t.units)for(const key of ['wu','fw','wc','spacing','coverage','speed','time','area'])finite(u.result?.[key],'Dado do meio');
  return model;
 }
 const normalizeLon=x=>((x+180)%360+360)%360-180;
 const near=(lon,ref)=>lon+360*Math.round((ref-lon)/360);
 function coordinate(value,axis){return M.formatCoordinate(axis==='lon'?normalizeLon(value):value,axis,'dmm').replace(/′/g,"'");}
 function position(point){return coordinate(point.latitude,'lat')+'  /  '+coordinate(point.longitude,'lon');}
 function moment(value){return String(value||'').replace('T',' ');}
 function geometry(model){
  validate(model);if(!REF)throw Error('A folha de referência não carregou. Recarregue a página.');
  const r=model.state.drift,d=r.datum,R=model.state.search.radius,frame={...REF.frame},bounds={...REF.bounds};
  const path=[];let reference=near(d.lkp.longitude,(bounds.west+bounds.east)/2);
  for(let i=0;i<=64;i++){const pt=M.rhumbDestination(d.lkp.latitude,d.lkp.longitude,d.distance*i/64,d.direction);pt.longitude=near(pt.longitude,reference);reference=pt.longitude;path.push(pt);}
  const center={latitude:d.latitude,longitude:reference};
  // One Mercator scale for both axes. Coordinate limits never fit the mission.
  const merc=lat=>Math.log(Math.tan(Math.PI/4+lat*RAD/2)),northing=merc(bounds.north),unit=frame.w/((bounds.east-bounds.west)*RAD);
  const project=point=>[frame.x+(point.longitude-bounds.west)*RAD*unit,frame.y+(northing-merc(point.latitude))*unit];
  const unproject=([x,y])=>({latitude:(2*Math.atan(Math.exp(northing-(y-frame.y)/unit))-Math.PI/2)/RAD,longitude:bounds.west+(x-frame.x)/unit/RAD});
  const d2=project(center),radiusMM=R*unit/(EARTH*Math.cos(d.latitude*RAD));
  // Nominal planning shapes use the local distance scale at DATUM 2.
  const square=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([x,y])=>unproject([d2[0]+x*radiusMM,d2[1]+y*radiusMM]));
  const ring=Array.from({length:181},(_,i)=>{const a=i*2*RAD;return unproject([d2[0]+radiusMM*Math.sin(a),d2[1]-radiusMM*Math.cos(a)]);});
  const visible=point=>{const [x,y]=project(point);return x>=frame.x-1e-8&&x<=frame.x+frame.w+1e-8&&y>=frame.y-1e-8&&y<=frame.y+frame.h+1e-8;};
  return {frame,bounds,center,path,ring,square,project,unproject,visible,radiusMM,d1:project(path[0]),d2};
 }
 function header(page,model,number,label){
  page.text(12,11,'MISSÃO LSAR',10,true,C.teal);page.text(page.w-12,11,number+' / 2',8,false,C.muted,'right');page.text(12,20,label,17,true);
  page.text(12,27,ellipsis(model.title||'Missão sem título',page.w-24,10),10);page.line(12,31,page.w-12,31,C.line,.3);
 }
 function row(page,x,y,label,value,available=186){page.text(x,y,label,8,false,C.muted);page.text(x+34,y,ellipsis(value,available-34,9),9,true);}
 function summary(model){
  const page=new Page(210,297),r=model.state.drift,d=r.datum,t=model.state.search,raw=model.raw.drift;header(page,model,1,'Resumo da deriva e da área de busca');
  page.text(12,38,'DERIVA',9,true,C.teal);
  row(page,12,45,'Incidente',moment(raw.incident));row(page,12,51,'Chegada',moment(raw.arrival));row(page,12,57,'Tempo decorrido',num(r.time)+' h');row(page,12,63,'Corrente',num(r.currentSpeed)+' nós para '+num(r.currentDirection,2)+'°V');
  row(page,12,69,'Vento',num(r.windSpeed)+' nós / '+num(r.windDirection,2)+'°V ('+(raw.windConvention==='from'?'de onde sopra':'para onde sopra')+')');
  row(page,12,75,'Leeway',num(r.leeway)+' nós para '+num(r.leewayDirection,2)+'°V ('+(raw.leewayMode==='auto'?'automático':'manual')+')');row(page,12,81,'Objeto',(model.objectLabel||raw.leewayCondition||'Manual').replace(/\s*\(.*/,''));
  page.text(12,92,'POSIÇÕES E RESULTANTE',9,true,C.teal);
  page.text(12,99,'DATUM 1 - LKP',8,true,C.blue);page.text(12,105,position(d.lkp),8.5,true);page.text(12,111,moment(d.startTime),8,false,C.muted);
  page.text(108,99,'DATUM 2 - estimado na chegada',8,true,C.teal);page.text(108,105,position(d),8.5,true);page.text(108,111,moment(d.endTime),8,false,C.muted);
  page.text(12,119,ellipsis(num(r.speed)+' nós / '+(r.direction===null?'rumo indeterminado':num(r.direction,2)+'°V')+' / '+num(d.distance)+' MN em '+num(d.time)+' h desde o LKP',186,9,true),9,true);
  const metrics=[['At - soma nominal',num(t.area)+' MN²'],['Lado do quadrado',num(t.side)+' MN'],['Raio R = sqrt(At) / 2',num(t.radius)+' MN'],['Deriva desde o incidente',num(r.distance)+' MN']];
  metrics.forEach(([label,value],i)=>{const x=12+(i%2)*96,y=125+Math.floor(i/2)*19;page.rect(x,y,90,16,C.pale);page.text(x+3,y+5,label,7.5,false,C.muted);page.text(x+3,y+12,value,12,true);});
  page.text(12,169,'DADOS DA ÁREA DE BUSCA - MEIOS INDEPENDENTES',9,true,C.teal);
  const cols=[['Meio / fonte',54],['Wu (MN)',17],['fw',11],['Wc (MN)',18],['S (MN)',17],['C',12],['V (nós)',17],['T (h)',15],['A (MN²)',25]];
  let x=12;page.rect(12,173,186,6,C.navy);cols.forEach(([label,w],i)=>{page.text(i?x+w-1.5:x+1.5,177,label,6.5,true,'#ffffff',i?'right':'left');x+=w;});
  const height=Math.min(8.5,96/t.units.length),font=height<4?6.5:height<6?7.5:8.5;
  t.units.forEach((unit,i)=>{const y=179+i*height,a=unit.result,platform={merchant:'Navio mercante',helicopter:'Helicóptero',fixed:'Asa fixa',manual:'Manual'}[unit.platform]||'Tabela';if(i%2===0)page.rect(12,y,186,height,'#f3f7f8');page.line(12,y+height,198,y+height,'#dce5e9',.13);
   const values=[unit.name+' / '+platform,...['wu','fw','wc','spacing','coverage','speed','time','area'].map(k=>num(a[k]))];let x=12;
   cols.forEach(([,w],j)=>{page.text(j?x+w-1.5:x+1.5,y+height*.5+font/PT*.32,ellipsis(values[j],w-3,font,j===0),font,j===0,C.ink,j?'right':'left');x+=w;});
  });
  page.text(12,281,'Wc = Wu x fw | C = Wc / S | A = S x V x T | At = soma Ai | lado = 2R.',7,false,C.muted);
  page.text(12,285,'T: horas efetivas de busca. C e fw: sem unidade. Valores arredondados na exibição.',7,false,C.muted);
  page.line(12,288,198,288,C.line,.2);page.text(12,293,'Corrente e leeway constantes. Área nominal: não desconta sobreposições.',7,false,C.muted);return page;
 }
 function chart(model,g){
  const page=new Page(),d=model.state.drift.datum,f=g.frame;page.reference();
  page.text(12,7,ellipsis(model.title||'Missão sem título',158,8,true),8,true);
  page.text(285,7,'DATUM 1 = LKP | DATUM 2 = chegada',7,false,C.muted,'right');
  page.line(175,6.5,180,6.5,C.gold,.5);page.text(182,7.2,'Área',6.5,false,C.muted);page.line(197,6.5,202,6.5,C.purple,.4,[1,1]);page.text(204,7.2,'R',6.5,false,C.muted);
  page.clip(f);
  if(g.visible(g.path[0])){
   page.line(f.x+f.w,g.d1[1],g.d1[0],g.d1[1],C.blue,.22,[1.2,1.2]);
   page.line(g.d1[0],f.y+f.h,g.d1[0],g.d1[1],C.blue,.22,[1.2,1.2]);
  }
  const sq=g.square.map(g.project);page.path([...sq,sq[0]],C.gold,.5);
  page.path(g.ring.map(g.project),C.purple,.4,null,false,[1.4,1]);const route=g.path.map(g.project);page.path(route,C.teal,.55,null,false,[2,1]);
  if(d.distance>0){const mid=route[32],a=route[31],dx=mid[0]-a[0],dy=mid[1]-a[1],length=Math.hypot(dx,dy);if(length>1e-9){const ux=dx/length,uy=dy/length;page.path([[mid[0]+ux*1.8,mid[1]+uy*1.8],[mid[0]-ux*1.4-uy*.8,mid[1]-uy*1.4+ux*.8],[mid[0]-ux*1.4+uy*.8,mid[1]-uy*1.4-ux*.8]],C.teal,.2,C.teal,true);}}
  if(g.visible(g.path[0]))page.circle(...g.d1,1.8,C.blue,'#ffffff',.55);
  if(g.visible(g.center))page.circle(...g.d2,1.25,C.teal,C.teal,.25);
  const label=(point,text,down=false)=>{const x=point[0]+3,y=point[1]+(down?8:-3);page.rect(x-1,y-3.2,width(text,8,true)+2,4.5,'#ffffff');page.text(x,y,text,8,true);};
  if(d.distance===0&&g.visible(g.center))label(g.d2,'D1 / D2');
  else{if(g.visible(g.path[0]))label(g.d1,'DATUM 1');if(g.visible(g.center))label(g.d2,'DATUM 2',Math.abs(g.d1[1]-g.d2[1])<9);}
  page.unclip();
  page.line(12,201.5,285,201.5,C.line,.15);
  page.text(12,206,"Graduação: 24°00' a 24°46' S | 044°00' a 043°00' O. Mercator; recorte nos limites.",7,false,C.muted);
  const outside=[];if(!g.visible(g.path[0]))outside.push('D1');if(!g.visible(g.center))outside.push('D2');
  page.text(285,206,outside.length?'Fora da folha: '+outside.join(', ')+'.':'R = '+num(model.state.search.radius)+' MN | área no DATUM 2.',7,false,C.muted,'right');
  return page;
 }
 function build(model){validate(model);const g=geometry(model);return pdf([summary(model),chart(model,g)],model.title||'Resumo SAR');}
 const api=Object.freeze({build,geometry,validate,coordinate,width});root.SARPDF=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
