"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[5203],{73657:(e,t,r)=>{r.d(t,{Z:()=>n});r(67294);var o=r(28992),i=r(85893);const n=function(e){return(0,i.jsx)(o.Z,{...e,style:{background:"none",borderBottom:"none",boxShadow:"",marginTop:2,marginBottom:6,paddingTop:4,paddingBottom:4,minHeight:"none",...e.style}})}},75203:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});r(67294);var o=r(83355),i=r(480),n=r(86628),s=r(24405),p=r(12396),l=r(56666),a=r(39132),d=r(61061),c=r(72126),h=r(82990),y=r(9291),u=r(36610),m=r(31869),g=r(96802),x=r(82530),S=r(87279),b=r(29376),f=r(4023),v=r(29798),P=r(73657),C=r(52275),j=r(31945),T=r(79131),_=r(73063),O=r(78140),w=r(32163),M=r(53437),k=r(72495),Z=r(26388),R=r(85893);class L extends o.Z{constructor(){super(...arguments),this.storeTypes={menuListStore:v.Z},this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_renderRelationPropertyMenuPopup=e=>(0,R.jsx)(z,{parent:e,collectionStore:this.props.collectionStore,property:this.props.property,disabled:this.props.disabled,targetCollectionStore:this.props.targetCollectionStore,menuListStore:this.stores.menuListStore,allRelatedTargetPropertiesStore:this.allRelatedTargetProperties}),this.allRelatedTargetProperties=this.createComputedStore((()=>{const{collectionStore:e,targetCollectionStore:t,property:r}=this.props,o=b.U1({collectionStore:e,property:r}),i=Object.keys(t.getSchema()).map((e=>o.find((t=>t.property===e))??{property:e,visible:!1})),n=o.map((e=>e.property)),s=e=>{const t=n.indexOf(e);return-1!==t?t:1/0};return i.sort(((e,t)=>s(e.property)-s(t.property))),i}),!0)}renderComponent(){const{device:e}=this.environment;if(!e.isPhone||"section"===this.props.rowType)return(0,R.jsx)(Z.ZP,{renderTooltip:()=>(0,R.jsx)(y.FormattedMessage,{id:"database.RelationCustomizeLayoutMenu.tooltip.button.message",defaultMessage:"Customize shown properties"}),placement:"section"===this.props.rowType?f.u.Top:f.u.Right,render:e=>(0,R.jsx)(j.ZP,{popupType:M.kQ.Popup,alignmentToOrigin:f.v.Start,...e,renderOrigin:t=>(0,R.jsx)(_.Z,{icon:l.o,iconStyle:{width:16,color:this.theme.mediumIconColor,fill:this.theme.mediumIconColor},...t,...e}),onClick:()=>{u.gP(this.environment,{from:"section"===this.props.rowType?"relation_section":"configure_relation_modal"})},originGap:16,render:this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_renderRelationPropertyMenuPopup})})}}L.displayName="RelationPropertyCustomizeLayoutMenu";const I=L;function N(e){const{props:t,children:r}=e;return(0,R.jsx)(k.Z,{...t,noTextOverflow:!0,isTitleUppercase:!1,title:(0,R.jsx)(y.FormattedMessage,{defaultMessage:"Hidden in relation",id:"database.relationMenu.hiddenInRelationTitle"}),desktopTitleStyle:{height:19},children:r,disableDesktopPadding:!0})}function F(e,t,r,o,i,n,s){const{properties:l,visibility:y}=e;return c.oA(l.map((e=>function(e,t,r,o,i,n,s){const{propertyFormat:l,visibility:c}=e,y=!c,u=i.getSchema();if(!u)return;const g=u[l.property];return g?{key:l.property,render:e=>(0,R.jsx)(C.Z,{...e,showDragHandle:!s,title:(0,R.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,R.jsx)(p.ZP,{icon:g.icon,type:g.type,size:16,theme:r,style:{fill:r.regularIconColor}}),(0,R.jsx)("span",{style:{marginLeft:8,...h.Z.textOverflowStyle},children:g.name})]}),right:(0,R.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,R.jsx)(_.Z,{icon:y?d.B:a.c,iconStyle:{width:16,height:16},isDarkIconColor:!y,onClick:()=>{m.qK({propertyFormat:l,visibility:c,collectionStore:o,property:n,environment:t})},disabled:s||"title"===l.property})})}),action:()=>{}}:void 0}({propertyFormat:e,visibility:y},t,r,o,i,n,s))))}function A(e){window.__c={n:"PropertyDraggableListComponent"};const t=(0,i.O7)(),{collectionStore:r,property:o,menuListStore:n,disabled:s,visibleProperties:p,hiddenProperties:l,children:a}=e,d=c.oA([...p.map((e=>e.property)),p.length>0&&l.length>0&&{key:"group-header-hidden-property",draggable:!1},...l.map((e=>e.property))]);return(0,R.jsx)(T.ZP,{direction:"vertical",keys:d,renderKey:(e,t)=>a[t],onDrop:e=>{!function(e,t,r,o,i){const{newPropertyKeys:n}=e,s=b.U1({collectionStore:r,property:o}),p=n.indexOf("group-header-hidden-property"),l=c.oA(n.filter((e=>!e.startsWith("group-header-"))).map(((e,t)=>{const r=s.find((t=>t.property===e));return r?p>0?"title"===e&&t>=p?r:{...r,visible:Boolean(t<p)}:r:{property:e,visible:!(p>0)||Boolean(t<p)}}))),a=s.filter((e=>!n.includes(e.property))),d={...b.ZI(r)};d[o]||(d[o]={}),d[o].related_properties=[...l,...a],x.createAndCommit({userAction:"RelationPropertyCustomizeLayoutMenu.handlePropertyReorder",environment:t,perform:e=>{g.FH({stores:[r],update:{collection_relation_options:d},transaction:e})}}),i.reset()}({newPropertyKeys:e},t,r,o,n)},disabled:s})}function z(e){let{parent:t,collectionStore:r,property:o,disabled:p,targetCollectionStore:l,menuListStore:a,allRelatedTargetPropertiesStore:d}=e;window.__c={n:"RelationPropertyMenuPopupComponent"};const h=(0,s.Fg)(),u=(0,i.O7)(),m=(0,n.VK)((()=>d.state),[d]);if(!m)return null;const g=m.filter((e=>e.visible)),x=m.filter((e=>!e.visible));return(0,R.jsxs)(O.Z,{menuType:S.og.Popup,maxWidth:240,maxHeight:500,children:[0===m.length&&(0,R.jsx)(k.Z,{children:(0,R.jsx)(P.Z,{caption:(0,R.jsx)(y.FormattedMessage,{defaultMessage:"No properties",id:"database.relationMenu.noProperties"})})}),m.length>0&&(0,R.jsx)(w.Z,{type:w.i.Vertical,store:a,initialFocus:void 0,sections:c.oA([g.length>0&&{key:"visible_and_hidden_properties",render:e=>(0,R.jsx)(k.Z,{...e,noTextOverflow:!0,isTitleUppercase:!1,title:(0,R.jsx)(y.FormattedMessage,{defaultMessage:"Shown in relation",id:"database.relationMenu.shownInRelationTitle"}),desktopTitleStyle:{height:18},children:(0,R.jsx)(A,{collectionStore:r,property:o,disabled:p,menuListStore:a,visibleProperties:g,hiddenProperties:x,children:e.children})}),items:c.oA([...F({properties:g,visibility:!0},u,h,r,l,o,p),x.length>0&&{key:"group-header-hidden-property",render:e=>(0,R.jsx)(N,{props:e,children:(0,R.jsx)(R.Fragment,{})}),action:()=>{}},...F({properties:x,visibility:!1},u,h,r,l,o,p)])},0===g.length&&x.length>0&&{key:"hidden_properties",render:e=>(0,R.jsx)(N,{props:e,children:(0,R.jsx)(A,{collectionStore:r,property:o,disabled:p,menuListStore:a,visibleProperties:g,hiddenProperties:x,children:e.children})}),items:F({properties:x,visibility:!1},u,h,r,l,o,p)}])})]})}},39132:(e,t,r)=>{r.d(t,{c:()=>n});r(67294);var o=r(45238),i=r(85893);const n=(0,o.I)("eye",{viewBox:"0 0 32 32",svg:(0,i.jsx)("path",{d:"M16.006 25.812c8.863 0 14.994-7.17 14.994-9.406C31 14.16 24.858 7 16.006 7 7.252 7 1 14.16 1 16.406c0 2.236 6.252 9.406 15.006 9.406zm0-3.242a6.194 6.194 0 01-6.197-6.164c-.012-3.452 2.744-6.164 6.197-6.164 3.419 0 6.185 2.711 6.185 6.164 0 3.364-2.766 6.164-6.185 6.164zm0-3.94c1.228 0 2.246-1.007 2.246-2.224 0-1.228-1.018-2.235-2.246-2.235-1.24 0-2.258 1.007-2.258 2.235 0 1.217 1.018 2.224 2.258 2.224z"})})}}]);