"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[2001],{89845:(e,t,r)=>{r.d(t,{Z:()=>f});r(67294);var n=r(83355),i=r(13991),o=r(8848),l=r(7057),s=r(53877),a=r(42875),c=r(36700),d=r(63143),u=r(9291),m=r(26388),h=r(85893);class p extends n.Z{constructor(){super(...arguments),this.reminderTimer=void 0}UNSAFE_willMountOrUpdate(){this.createReminderTimer()}willUnmount(){this.clearReminderTimer()}createReminderTimer(){const e=this.props.value;if(!e)return;const t=s.KR(e,(0,a.r)());if(!t)return;const r=t.valueOf(),n=r-Date.now();n<0||n>d.A0||this.reminderTimer&&this.reminderTimer.timestamp===r||(this.reminderTimer&&clearTimeout(this.reminderTimer.timer),this.reminderTimer={timestamp:r,timer:setTimeout(this.enqueueForceUpdate,n)})}clearReminderTimer(){this.reminderTimer&&(clearTimeout(this.reminderTimer.timer),this.reminderTimer=void 0)}renderComponent(){const{value:e,withComma:t}=this.props;if(!e)return;const r=s.NK(e,(0,a.r)(),i.SP);let n;if(e.reminder){const t=s.Nm(e,(0,a.r)());n=t?{color:this.theme.errorText}:{color:o.ZP.blue}}const d=(0,h.jsxs)(h.Fragment,{children:[(0,l.ZV)({value:e,date_format:this.props.dateFormat,time_format:this.props.timeFormat,userTimeZone:(0,a.r)(),allowRelativeDates:!0,intl:this.props.intl,shortenDateAndRange:this.props.shortenDateAndRange,displayInUserTimezone:this.props.displayInUserTimezone}),e.reminder&&(0,c.m)({display:"inline-block",width:"1em",marginLeft:6,marginRight:2,paddingBottom:4,verticalAlign:"middle"}),t?", ":null]});return this.props.disableTooltip?(0,h.jsx)("div",{style:{...this.props.style,...n},children:d}):(0,h.jsx)(m.ZP,{renderTooltip:()=>(0,h.jsxs)(h.Fragment,{children:[this.props.tooltipHeader,(0,h.jsxs)("div",{style:x(this.theme,this.props.tooltipHeader),children:[v(r.start),r.end?` → ${v(r.end)}`:""]})]}),render:e=>(0,h.jsx)("div",{style:{...this.props.style,...n},...e,children:d}),placement:this.props.tooltipPlacement})}}p.displayName="DateBox";const f=(0,u.injectIntl)(p);function v(e){return(0,l.ZW)(e,"medium_with_time")}function x(e,t){return t?{color:e.mediumInvertedTextColor}:{}}},69872:(e,t,r)=>{r.d(t,{L:()=>d,Z:()=>u});r(67294);var n=r(480),i=r(24405),o=r(12396),l=r(65183),s=r(52275),a=r(28992),c=r(85893);let d=function(e){return e[e.Name=0]="Name",e[e.Type=1]="Type",e}({});const u=function(e){window.__c={n:"PropertyMenuItem"};const{propertySchema:t,format:r,locked:u}=e,m=(0,i.Fg)(),h=(0,n.O7)(),{name:p,type:f,icon:v}=t,x=r===d.Name?p:l.SO[f];return u?(0,c.jsx)(a.Z,{title:x,icon:(0,c.jsx)(o.ZP,{icon:v,type:f,size:h.device.isMobile?18:16,theme:m,style:{fill:m.regularIconColor}}),...e}):(0,c.jsx)(s.Z,{title:x,icon:(0,c.jsx)(o.ZP,{icon:v,type:f,size:h.device.isMobile?18:16,theme:m,style:{fill:m.regularIconColor,marginLeft:6,marginRight:2}}),...e})}},97680:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(67294),i=r(480),o=r(66897),l=r(97880),s=r(9291),a=r(98742),c=r(4023),d=r(52275),u=r(26388),m=r(70301),h=r(45653),p=r(85893);const f=n.forwardRef(((e,t)=>{window.__c={n:"UserMenuItem"};const{actor:r,userTitle:n,useEmailAsTooltip:f,tooltip:v,tooltipPlacement:x}=e,y=(0,i.O7)(),b=(0,s.useIntl)(),g=r.asActor&&r.isUser()?r.email:void 0,C=f&&g?g:v,w=y.device.isMobile?24:20;let k;return(0,o.YU)(r)?k=(0,p.jsx)(m.Z,{botValue:null==r?void 0:r.asActor,size:w}):(0,o.$S)(r)?k=(0,p.jsx)(h.Z,{userValue:null==r?void 0:r.asActor,size:w}):(0,o.Iq)(r)?k=(0,p.jsx)(h.Z,{userValue:void 0,size:w}):(0,l.t1)(r),(0,p.jsx)(u.ZP,{ref:t,placement:x??c.u.Bottom,alignment:c.v.Start,textWrap:!0,render:t=>(0,p.jsx)(d.Z,{...(0,a.Z)(t,e),icon:k,title:n??(0,o.$4)(b,r),className:"notranslate"}),disableTooltip:!C,renderTooltip:()=>C})}))},61679:(e,t,r)=>{r.d(t,{$K:()=>N,Ar:()=>w,Cq:()=>E,bU:()=>I,cx:()=>K,hy:()=>R,i2:()=>M,kg:()=>_,mZ:()=>V,rO:()=>A,us:()=>P});var n=r(94184),i=r.n(n),o=r(67294),l=r(60177),s=r(64338),a=r(24405),c=r(73420),d=r(97053),u=r(85893);const m="layout-wide",h="layout-wide-right-margin-expanded",p="layout-side-peek",f="layout-center-peek",v="layout-home",x="layout-home-phone",y="layout-phone",b="layout-tablet",g="layout-template-preview",C="layout-chat";function w(e){let{children:t,type:r,gap:n,withBottomPadding:o,style:l}=e;window.__c={n:"Layout"};const s=(0,d.Bt)(r);return(0,u.jsx)("div",{className:i()("layout",{[m]:"wide"===r,[h]:"wide-right-margin-expanded"===r,[p]:"side-peek"===r,[f]:"center-peek"===r,[v]:"home"===r,[x]:"home-phone"===r,[y]:"phone"===r,[b]:"tablet"===r,[g]:"template-preview"===r,[C]:"chat"===r}),style:{paddingBottom:o?s:void 0,gap:n,...l},children:t})}const k="layout-content",j="layout-full",L="layout-margin-left",T="layout-margin-right",Z="layout-nested-grid",S="layout-margin-scrollable",P="hide-scrollbar",B="layout-column";function I(e){return(0,u.jsx)("div",{className:i()(k,e.className),style:e.style,children:e.children})}function R(e){return(0,u.jsx)("div",{className:j,style:e.style,children:e.children})}function V(e){return(0,u.jsx)("div",{className:L,children:e.children})}function N(e){return(0,u.jsx)("div",{className:T,children:e.children})}const K=(0,o.forwardRef)((function(e,t){return(0,u.jsx)("div",{className:i()(Z,e.className),onClick:e.onClick,style:e.style,role:e.role,id:e.id,"aria-labelledby":e["aria-labelledby"],ref:t,children:e.children})}));function M(e){return(0,u.jsx)("div",{className:i()(Z,S,{[P]:e.hideScrollbar}),style:e.style,children:(0,u.jsx)(I,{children:e.children})})}function _(e){let{items:t,style:r}=e;window.__c={n:"LayoutTabs"};const[n,i]=o.useState(0),d=(0,o.useRef)([]),m=(0,l.Dl)();(0,s.q7)(null==m?void 0:m.domLock);const h=(0,a.yK)((e=>({icon:{width:16,height:16,fill:"currentColor"},label:{fontSize:14,fontWeight:600},tab:"centered"===r?{cursor:"pointer",border:"none",padding:"6px 12px",borderRadius:20,color:e.text.secondary,background:"none"}:{cursor:"pointer",border:"none",borderBottom:"2px solid",borderColor:"transparent",padding:"6px 8px 12px",color:e.text.secondary,background:"none"},tabSelected:"centered"===r?{color:e.text.primary,background:e.tint.regular}:{color:e.text.primary,borderColor:e.regularTextColor}})),[r]),p=(0,o.useId)(),f=(0,o.useCallback)((e=>`${p}-tab-${e}`),[p]),v=(0,o.useCallback)((e=>`${p}-tabpanel-${e}`),[p]),x=(0,o.useCallback)((e=>{let r;var o;("ArrowLeft"===e.key?(e.preventDefault(),r=(n+t.length-1)%t.length):"ArrowRight"===e.key&&(e.preventDefault(),r=(n+1)%t.length),void 0!==r)&&(i(r),null===(o=d.current[r])||void 0===o||o.focus())}),[n,t.length]);return(0,u.jsxs)(K,{children:[(0,u.jsx)(I,{children:(0,u.jsx)("div",{role:"tablist",children:(0,u.jsx)(c.X2,{justifyContent:"centered"===r?"center":"flex-start",children:t.map(((e,t)=>{var r;return(0,u.jsx)("button",{ref:e=>{e&&(d.current[t]=e)},id:f(t),role:"tab","aria-controls":v(t),"aria-selected":t===n,tabIndex:t===n?void 0:-1,onKeyDown:x,style:{...h.tab,...t===n&&h.tabSelected},onClick:e=>{e.stopPropagation(),i(t)},children:(0,u.jsxs)(c.X2,{gap:4,alignItems:"center",children:[null===(r=e.icon)||void 0===r?void 0:r.call(e,h.icon),e.label&&(0,u.jsx)("div",{style:h.label,children:e.label})]})},e.key)}))})})}),(0,u.jsx)(K,{id:v(n),role:"tabpanel","aria-labelledby":f(n),children:t[n]?t[n].children:null})]})}function A(e){return(0,u.jsx)("div",{className:B,style:{"--min-column-width":`${e.minWidth}px`,...e.style},children:e.children})}function E(e){return(0,u.jsxs)(A,{minWidth:e.minWidth,children:[e.left,e.right]})}},97053:(e,t,r)=>{r.d(t,{Bt:()=>T,Nr:()=>k,Qg:()=>L,WJ:()=>Z,h9:()=>w,m4:()=>C,xC:()=>j});var n=r(480),i=r(97511),o=r(86628),l=r(41432),s=r(61045),a=r(57819),c=r(10906),d=r(92650),u=r(19124),m=r(12534),h=r(61931),p=r(80444),f=r(16772),v=r(19111),x=r(94896),y=r(82136),b=r(88923),g=r(17963);function C(e){(0,m.ZP)({event:e,context:m.Af.EditorMouseDown,callback:()=>{}})}function w(e){(0,m.ZP)({event:e,context:m.Af.EditorClick,callback:()=>{}})}function k(e){return(0,o.VK)((()=>Boolean(g.Z.state.pageMap[e.id])||x.Z.state.pages.has(e.id)),[e.id])}function j(e,t){const r=(0,n.O7)(),l=(0,i.l)(),s=k(e),a=(0,o.VK)((()=>t===y.S.Frame?p.default.state.currentLoadingContainerStore:t===y.S.PeekView&&b.default.state.open?b.default.state.loadingContainerStore:void 0),[t]),c=L(e);return(0,o.VK)((()=>{const t=r.currentUser.isLoggedIn(),n=l&&l.publicEditModeStore.state;return Boolean(e&&a&&e.isDefined()&&!e.isLocked()&&e.canEdit()&&!e.hasContent()&&t&&(!(null!=n&&n.hasPublicPermission)||"edit"===(null==n?void 0:n.permission))&&!s&&a.state.ready&&!c&&(!(0,u.GD)(n)||"completionPopup"!==f.default.state.type))}),[r,c,a,l,s,e])}function L(e){return(0,o.VK)((()=>{if(e.isCollectionView()){const t=e.getCollectionViewSourceCollectionStore();return!!t&&t.isSyncedCollection()}return e.isType(l.Ti.externalObjectInstancePage)}),[e])}function T(e){const{device:t,WindowSizeStore:r}=(0,n.O7)(),i=(0,o.VK)((()=>{const e=r.state.height,n=t.isMobile&&v.Z.state.open?e:0;return s._4()+n}),[r,t.isMobile]);return(0,o.VK)((()=>Boolean((0,a.RR)(f.default.state))?600:"home-phone"===e?h.jq:t.isTablet?380:t.isIOS?Math.max(350,i):t.isMobile?400:"side-peek"===e||"center-peek"===e?80:"home"===e?h.XX:"30vh"),[t,i,e])}function Z(e){const t=(0,n.O7)(),r=(0,o.VK)((()=>(0,d.fg)(t,e)),[t,e]);return(0,o.VK)((()=>r&&!e.isFullWidth()?(0,d.gC)(t,(0,c.en)(e),(0,c.Ks)(e)):0),[t,r,e])}},35314:(e,t,r)=>{r.d(t,{e:()=>l});var n=r(67294),i=r(86628),o=r(77794);function l(){const[e,t]=(0,n.useState)(0),[r]=(0,n.useState)((()=>new o.E)),l=(0,n.createRef)();return(0,n.useEffect)((()=>{if(l.current)return r.observe(l.current),()=>{r.destroy()}}),[l,r]),(0,i.VK)((()=>{e!==r.rect.state.width&&t(r.rect.state.width)}),[e,r.rect]),[l,e]}},35948:(e,t,r)=>{r.d(t,{C:()=>i});var n=r(67294);function i(){const e=(0,n.useRef)(null),[t,r]=(0,n.useState)(!1),i=(0,n.useCallback)((()=>{const t=e.current;t&&r(t.matches(":hover"))}),[]),o=(0,n.useCallback)((t=>{e.current=t,i()}),[i]);return(0,n.useEffect)((()=>{const t=e.current;if(t)return t.addEventListener("mouseenter",i),t.addEventListener("mouseleave",i),()=>{t.removeEventListener("mouseenter",i),t.removeEventListener("mouseleave",i)}}),[i]),[o,t]}},61931:(e,t,r)=>{r.d(t,{$1:()=>y,A5:()=>u,Cm:()=>c,EP:()=>s,Er:()=>b,FK:()=>h,MI:()=>v,QF:()=>d,Uf:()=>a,Wx:()=>f,XX:()=>i,_U:()=>w,iO:()=>l,jO:()=>x,jX:()=>m,jq:()=>o,yc:()=>p});var n=r(97880);const i=80,o=40,l=24,s=20,a=270,c=405,d=480,u=16,m=44,h=144,p=144,f="linear-gradient(transparent 0%, black 10px)",v={backdropFilter:"blur(48px)",WebkitBackdropFilter:"blur(48px)"};function x(e){return{width:48,height:48,fill:e.lightIconColor}}function y(e){let{theme:t,isPhone:r}=e;return r?t.personalHomeBackgroundPhone:t.personalHomeBackgroundDesktop}function b(e){let{theme:t,isPhone:r,buttonState:n,hasCover:i}=e,o=t.whiteButtonBackground;switch(n){case"hovered":o=t.whiteButtonHoveredBackground;break;case"pressed":o=t.whiteButtonPressedBackground}return r&&(o=void 0),{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",background:o,...v,boxShadow:i?w({isPhone:r,theme:t}):void 0,width:28,height:28,borderRadius:4}}const g=1,C=.5;function w(e){let{isPhone:t,theme:r}=e;if("dark"===r.mode)return"unset";r.mode;const i=t?C:g,o=r.home.tile.border&&`0 0 0 ${i}px ${r.home.tile.border}`;return t?o:[o,"0 12px 40px rgba(0, 0, 0, 0.025)"].filter(n.$K).join(", ")}},13148:(e,t,r)=>{r.d(t,{U:()=>o});r(67294);var n=r(45238),i=r(85893);const o=(0,n.I)("close",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M2.89795 13.3428C3.18799 13.6262 3.6626 13.6262 3.93945 13.3494L7.99341 9.29541L12.0474 13.3494C12.3308 13.6262 12.8054 13.6328 13.0889 13.3428C13.3723 13.0593 13.3723 12.5847 13.0955 12.3079L9.0415 8.24731L13.0955 4.19336C13.3723 3.9165 13.3789 3.4353 13.0889 3.15845C12.7988 2.875 12.3308 2.875 12.0474 3.15186L7.99341 7.20581L3.93945 3.15186C3.6626 2.875 3.1814 2.86841 2.89795 3.15186C2.6145 3.44189 2.62109 3.9231 2.89795 4.19336L6.9519 8.24731L2.89795 12.3079C2.62109 12.5781 2.6145 13.0659 2.89795 13.3428Z"})})},62208:(e,t,r)=>{r.d(t,{z:()=>o});r(67294);var n=r(45238),i=r(85893);const o=(0,n.I)("loop",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M5.80371 3.12305C5.81006 3.50391 6.05762 3.74512 6.47656 3.74512H11.3643C11.9546 3.74512 12.2783 4.0498 12.2783 4.66553V11.2925L11.377 10.3149L10.8628 9.80078C10.5962 9.54688 10.2344 9.52783 9.96777 9.78809C9.71387 10.0483 9.72021 10.4229 9.98047 10.6831L12.145 12.8413C12.6211 13.311 13.167 13.311 13.6431 12.8413L15.8076 10.6831C16.0679 10.4229 16.0742 10.0483 15.8203 9.78809C15.5537 9.52783 15.1919 9.54688 14.9253 9.80078L14.4111 10.3149L13.5161 11.2861V4.56396C13.5161 3.20557 12.8052 2.50098 11.4341 2.50098H6.47656C6.05762 2.50098 5.79736 2.74219 5.80371 3.12305ZM0.186035 7.05859C0.446289 7.3252 0.808105 7.30615 1.07471 7.0459L1.59521 6.53809L2.48389 5.56689V12.2891C2.48389 13.6475 3.19482 14.3521 4.56592 14.3521H9.52344C9.94238 14.3521 10.2026 14.1108 10.1963 13.73C10.1899 13.3428 9.94238 13.1079 9.52344 13.1079H4.64209C4.05176 13.1079 3.72803 12.7969 3.72803 12.1812V5.5542L4.62305 6.53809L5.14355 7.0459C5.40381 7.30615 5.77197 7.3252 6.03223 7.05859C6.29248 6.79834 6.28613 6.43018 6.01953 6.16992L3.85498 4.01172C3.37891 3.53564 2.83936 3.53564 2.36328 4.01172L0.19873 6.16992C-0.0678711 6.43018 -0.0742188 6.79834 0.186035 7.05859Z"})})}}]);