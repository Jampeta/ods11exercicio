"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[1308],{83606:(e,t,n)=>{n.r(t),n.d(t,{MessageStoreDebugPanel:()=>y});n(57658);var a=n(32594),i=n(30817),s=n(57814),o=n(98649),r=n(93382),l=n(17455),d=n(67294),u=n(24405),c=n(72126),h=n(63143),p=n(4827),g=n(75233),x=n(79420),m=n(88536),b=n(85893);const v=300,w=500,f=1*h.C0,M={...r.j,fontSize:"10px",background:"black",border:"1px solid white",color:"white"},S={fontSize:"10px"};function k(e,t,n){const a=e.slice();return a.push(t),a.length>n&&a.splice(0,a.length-n),a}function y(){window.__c={n:"MessageStoreDebugPanel"};const[e,t]=(0,d.useState)({subscriptions:[],queueSize:[],pendingUnsubscribes:[],pendingEvictions:[]}),n=(0,d.useMemo)((()=>[{pluralName:"subscriptions",stroke:"white",fill:"black",data:e.subscriptions},{pluralName:"queued requests",stroke:"yellow",fill:"transparent",data:e.queueSize},{pluralName:"pending unsubscribes",stroke:"springgreen",fill:"transparent",data:e.pendingUnsubscribes},{pluralName:"pending evictions",stroke:"lightgray",fill:"transparent",data:e.pendingEvictions}]),[e]);(0,d.useEffect)((()=>{const n=window.setTimeout((()=>{const n=(0,m.Tm)(),a=(0,m.EM)(),i=x.Z.getPendingUnsubscribeCount(),s=g.Z.getPendingEvictionCount();t({subscriptions:k(e.subscriptions,n._total,v),queueSize:k(e.queueSize,a.queue,v),pendingUnsubscribes:k(e.pendingUnsubscribes,i,v),pendingEvictions:k(e.pendingEvictions,s,v)})}),f);return()=>window.clearTimeout(n)}),[e]);const a=(0,u.yK)((()=>({panelStyle:{position:"fixed",right:"calc(50% - 160px)",bottom:0,width:"320px",color:"white",background:"rgba(0, 0, 0, 0.75)",padding:"8px"},headingStyle:{fontWeight:600,fontSize:"14px"}})),[]);return(0,b.jsx)(p.Z,{open:!0,children:(0,b.jsxs)("div",{style:a.panelStyle,children:[(0,b.jsx)("div",{style:a.headingStyle,children:"MessageStore metrics"}),(0,b.jsx)(C,{width:304,height:64,dataStreams:n,maxDataLength:v,baseMaxDataValue:w,dataPointIntervalMs:f})]})})}function j(e){const t=Date.now()-e;return t<h.C0?"just now":t<h.hM?`${Math.round(t/h.C0)} seconds ago`:`${(t/h.hM).toFixed(1)} minutes ago`}function C(e){window.__c={n:"RealtimeVisualization"};const{width:t,height:n,dataStreams:r,maxDataLength:u,baseMaxDataValue:h,dataPointIntervalMs:p}=e,[g,x]=(0,d.useState)(),m=(0,d.useMemo)((()=>Math.max(h,...c.xH(r.map((e=>e.data))))),[r,h]),v=(0,d.useMemo)((()=>(0,i.Z)({range:[n,0],domain:[0,m],nice:!0})),[n,m]),w=(0,d.useMemo)((()=>(0,i.Z)({range:[0,t],domain:[0,u-1],nice:!0})),[t,u]),f=(0,d.useCallback)((()=>x(void 0)),[]),k=(0,d.useCallback)((e=>{const{x:t}=(0,a.Z)(e)||{x:0},n=Math.round(w.invert(t)),i=r[0].data.length;if(n>=i)return void x(void 0);const s=r[0][n],o=v(s),l=Date.now()-(i-1-n)*p;x({x:t,y:o,dataStreamIndex:n,timestamp:l})}),[w,r,v,p]);return(0,b.jsxs)("div",{children:[(0,b.jsxs)("svg",{width:t,height:n,children:[r.map(((e,t)=>(0,b.jsx)(s.Z,{data:e.data,x:(e,t)=>w(t),y:e=>v(e),strokeWidth:1,stroke:e.stroke,fill:e.fill,yScale:v},t))),(0,b.jsx)(o.Z,{x:0,y:0,width:t,height:n,fill:"transparent",onMouseMove:k,onMouseLeave:f})]}),g&&(0,b.jsx)("div",{children:(0,b.jsxs)(l.Z,{top:g.y,left:g.x,style:M,children:[(0,b.jsx)("div",{style:{color:"darkgray"},children:j(g.timestamp)}),r.map(((e,t)=>(0,b.jsxs)("div",{style:{color:e.stroke},children:[e.data[g.dataStreamIndex]," ",e.pluralName]},t)))]},Math.random())}),(0,b.jsx)("div",{style:S,children:r.map(((e,t)=>(0,b.jsxs)("div",{style:{color:e.stroke},children:[0===e.data.length?"0":e.data[e.data.length-1]," ",e.pluralName]},t)))})]})}}}]);