"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[8630],{83023:(e,t,i)=>{i(67294),i(480),i(24405);var r=i(45238),o=i(85893);(0,r.I)("gift",{viewBox:"0 0 14 14",svg:(0,o.jsx)("path",{d:"M7.95789 3.54464C8.00247 3.30845 8.16614 2.97748 8.48043 2.66319C8.84104 2.30258 9.38851 1.92751 9.87755 1.74943C10.1088 1.66523 10.237 1.65112 10.2972 1.65266C10.6256 1.99575 10.8618 2.39413 10.9488 2.70912C10.9917 2.86422 10.9849 2.94927 10.9797 2.97718L10.9792 2.98003C10.9777 2.9894 10.9767 2.99539 10.9553 3.01675C10.5461 3.42596 10.0755 3.57832 9.4321 3.60836C9.09223 3.62423 8.7328 3.60413 8.31688 3.57258C8.25969 3.56824 8.20022 3.56356 8.13892 3.55874L7.95789 3.54464ZM6.97082 2.14136C7.10128 1.95114 7.25234 1.76996 7.41977 1.60253C8.39608 0.626221 10.3325 -0.434439 11.3089 0.541871C12.2852 1.51818 12.9923 3.10109 12.016 4.07741C11.4993 4.59409 10.9264 4.86563 10.3362 4.99913H14V7.99913H13H8V5.05253C7.65076 5.02523 7.31443 4.99913 7.00006 4.99913C6.99017 4.98924 6.98043 4.9793 6.97082 4.96932C6.96122 4.9793 6.95148 4.98924 6.94159 4.99913C6.64476 4.99913 6.32836 5.0224 6 5.04797V7.99913H1H0V4.99913H3.60548C3.01529 4.86563 2.44237 4.59409 1.92569 4.07741C0.949377 3.10109 1.65648 1.51818 2.6328 0.541871C3.60911 -0.434439 5.54557 0.626221 6.52188 1.60253C6.68931 1.76996 6.84037 1.95114 6.97082 2.14136ZM10.3411 1.66021C10.3418 1.65908 10.3348 1.65588 10.3179 1.65399C10.3319 1.6604 10.3404 1.66134 10.3411 1.66021ZM1 8.99913V13.9991H6V8.99913H1ZM8 8.99913V13.9991H13V8.99913H8ZM5.46122 2.66319C5.77551 2.97748 5.93918 3.30845 5.98376 3.54464L5.80273 3.55874C5.74143 3.56356 5.68196 3.56824 5.62477 3.57258C5.20886 3.60413 4.84942 3.62423 4.50955 3.60836C3.86611 3.57832 3.39557 3.42596 2.98635 3.01675C2.965 2.99539 2.96399 2.9894 2.96241 2.98003L2.96191 2.97718C2.95674 2.94927 2.94998 2.86422 2.99284 2.70912C3.07987 2.39413 3.31602 1.99575 3.64441 1.65266C3.70469 1.65112 3.83287 1.66523 4.0641 1.74943C4.55314 1.92751 5.10061 2.30258 5.46122 2.66319ZM3.60056 1.66021C3.59983 1.65908 3.60685 1.65588 3.6238 1.65399C3.60977 1.6604 3.60129 1.66134 3.60056 1.66021Z"})});i(9291),i(95477),i(4023),i(84076),i(26388),i(14694)},66957:(e,t,i)=>{i.d(t,{Z:()=>p});var r=i(67294),o=i(480),n=i(86628),s=i(24405),a=i(87279),l=i(89728),d=i(85893);function c(e){let{tabs:t,selectedIndex:i,onChange:c,separatorIndexes:p,right:h,style:u,rightStyle:g,tabStyle:m,tabTitleStyle:S,tabBorderStyle:x,selectedTabStyle:b,readOnly:f,hideTabBorder:v}=e;window.__c={n:"TabBarMenuItem"};const y=(0,r.useContext)(a.Xp),{device:C,WindowSizeStore:w}=(0,o.O7)(),{safePaddingLeft:j,safePaddingRight:M}=(0,n.VK)((()=>({safePaddingLeft:w.getSafePaddingLeftCSS(16),safePaddingRight:w.getSafePaddingRightCSS(16)})),[w]),I=(0,s.yK)((e=>{const t={paddingTop:6,paddingBottom:6,whiteSpace:"nowrap",minWidth:0,flexShrink:0,color:e.mediumTextColor,...m},i=`inset 0 -1px 0 ${e.regularDividerColor}`,r=y.menuType===a.og.Popup,o={fontSize:16,paddingTop:2,paddingLeft:r?16:j,paddingRight:r?16:M,zIndex:2,height:44,background:e.popoverBackground};return{container:{overflowY:"visible",overflowX:"auto",display:"flex",width:"100%",position:"relative",boxShadow:v?void 0:i,...C.isMobile?o:{fontSize:14,paddingLeft:8,paddingRight:8,zIndex:1},...u},separator:{display:"inline-flex",alignItems:"center",margin:"0 4px",paddingBottom:4,whiteSpace:"nowrap",minWidth:0,flexShrink:0,color:e.regularDividerColor},mobile:{},tab:t,selectedTab:{...t,position:"relative",color:e.regularTextColor,...b},border:{borderBottom:`2px solid ${e.regularTextColor}`,position:"absolute",bottom:0,left:8,right:8,...x},rightContainer:{flexGrow:1,display:"flex",alignItems:"center",justifyContent:"flex-end",color:e.mediumTextColor,...g}}}),[y.menuType,C.isMobile,g,j,M,b,u,x,m,v]);return(0,d.jsxs)("div",{className:"hide-scrollbar",style:I.container,children:[t.map(((e,t)=>{const o=t===i;return(0,d.jsxs)(r.Fragment,{children:[(0,d.jsxs)("div",{style:o?I.selectedTab:I.tab,children:[(0,d.jsx)(l.Z,{style:S,onClick:()=>c(t),disabled:f,mobileFeedback:C.isMobile,children:e}),o&&(0,d.jsx)("div",{style:I.border})]},`tabButton-${t}`),p&&p.includes(t)&&(0,d.jsx)("div",{style:I.separator,className:"notranslate",children:"|"},`${t}-separator`)]},t)})),h&&(0,d.jsx)("div",{style:I.rightContainer,children:h})]})}const p=r.memo(c)},27556:(e,t,i)=>{i.d(t,{Ke:()=>r.LazyOutlinerViewAllButton,k4:()=>o,uO:()=>n,vJ:()=>r.LazyOutlinerViewAllPopup});var r=i(77907);const o=30,n=20},46770:(e,t,i)=>{i.d(t,{Z:()=>j});var r=i(67294),o=i(480),n=i(86628),s=i(24405),a=i(15145),l=i(56996),d=i(82990),c=i(9291),p=i(58261),h=i(84076),u=i(74420),g=i(26388),m=i(14694),S=i(50659),x=i(27068),b=i(30806),f=i(94841),v=i(4023),y=i(80444),C=i(85893);function w(e){let{}=e;window.__c={n:"SidebarPersonalHomeButton"};const t=(0,o.O7)(),{isMobile:i}=(0,o.Fy)(),w=(0,n.VK)((()=>{const{currentSpaceViewStore:e}=y.default.state;if(e)return f.Al(e)}),[]),j=(0,n.VK)((()=>{const e=y.default.state.mainEditorCurrentBlockStore;return!!e&&f.Kj(e.id)}),[]),M=(0,n.VK)((()=>f.pr(t)),[t]),I=(0,r.useCallback)((()=>{(0,x.nJ)(t),(0,b.$X)({environment:t,from:"sidebar"})}),[t]),Z=(0,s.yK)((e=>({tooltip:{width:200},shortcutLabel:{color:e.mediumInvertedTextColor},sidebarItem:{...(0,S.G$)({isMobile:i}),...j&&{fontWeight:d.Z.fontWeight.semibold,background:e.sidebarItemSelectedBackground,color:e.regularTextColor}},icon:{fill:j?e.regularTextColor:e.mediumIconColor,width:20,height:20}})),[i,j]),T=(0,n.VK)((()=>{var e;return null==w||null===(e=w.getModel())||void 0===e?void 0:e.getRenderUrl({getRecordModel:null==w?void 0:w.getRecordModel,pageVisitSource:a.tY.SidebarHome})}),[w]);return T?(0,C.jsx)(g.ZP,{renderTooltip:()=>(0,C.jsxs)("div",{style:Z.tooltip,children:[(0,C.jsx)("div",{children:(0,C.jsx)(c.FormattedMessage,{id:"sidebarPersonalHomeButton.tooltip",defaultMessage:"View recent pages and more"})}),(0,C.jsx)(p.Z,{style:Z.shortcutLabel,name:"openHome"})]}),originGap:6,textWrap:!0,placement:v.u.Right,render:e=>(0,C.jsx)(h.Z,{...e,style:Z.sidebarItem,href:T,onClick:I,children:(0,C.jsx)(m.Z,{left:(0,l.z)(Z.icon),right:M&&(0,C.jsx)(u.Z,{}),disableMobileBorder:!0,children:(0,C.jsx)(c.FormattedMessage,{id:"sidebarPersonalHomeButton.label",defaultMessage:"Home"})})})}):null}const j=r.memo(w)},52344:(e,t,i)=>{i.d(t,{u:()=>S});var r=i(67294),o=i(480),n=i(86628),s=i(72126),a=i(69246),l=i(150),d=i(79131),c=i(28020);var p=i(80444),h=i(73292),u=i(77999),g=i(29165),m=i(85893);function S(e){let{teams:t,reorderable:i,onNavigate:S,id:x}=e;window.__c={n:"TeamOutlinerList"};const b=(0,o.O7)(),f=function(){const e=(0,o.O7)();return(0,n.VK)((()=>(0,c.k_)(e).state),[e])}(),{currentSpaceViewStore:v,currentSpaceStore:y}=(0,n.VK)((()=>{const{currentSpaceViewStore:e,currentSpaceStore:t}=p.default.state;return{currentSpaceViewStore:e,currentSpaceStore:t}}),[]),C=(0,n.VK)((()=>t.map((e=>e.id))),[t]),w=(0,n.VK)((()=>s.KX(t,"id")),[t]),[j,M]=(0,r.useState)({});(0,r.useEffect)((()=>{(null==y?void 0:y.id)&&M((e=>h.oO({teamIds:C,oldState:e,spaceId:y.id,userId:b.currentUser.id})))}),[null==y?void 0:y.id,b.currentUser.id,C]);const I=(0,n.VK)((()=>{const e=u.default.state.initialTeamStoreId;return C.find((t=>t===e))??s.Ps(C)}),[C]);return v&&f?(0,m.jsx)(d.ZP,{id:x,direction:"vertical",keys:C,disabled:!i,renderKey:e=>j[e]&&(0,m.jsx)(g.O,{shouldPersistToggleState:!0,teamStore:w[e],sidebarState:f,isLastTeam:s.Z$(C)===e,teamOutlinerType:a.kg,customToggleStore:j[e],onNavigate:S,sidebarTourStep:I===e?"prebuilt_templates":void 0},e),onDrop:(e,t)=>{l.Ct({environment:b,currentSpaceViewStore:v,orderedTeamIds:e,userAction:"SidebarOutliner.SidebarOutliner",isExplicitUserAction:!0,dropArgs:t})}}):(0,m.jsx)(m.Fragment,{})}},22709:(e,t,i)=>{i.d(t,{_S:()=>E,ZP:()=>F});i(67294);var r=i(83355),o=i(49085),n=i(80503),s=i(9291),a=i(14720),l=i(66324),d=i(65452),c=i(64921),p=i(31945),h=i(39849),u=i(92955),g=i(480),m=i(86628),S=i(24405),x=i(37240),b=i(82990),f=i(48779),v=i(56496),y=i(31278),C=i(14694),w=i(46783),j=i(85893);const M=function(e){window.__c={n:"SidebarPlaceholderItem"};const{showIcon:t}=e,i=(0,S.Fg)(),r=(0,S.yK)((e=>{const i=Math.ceil(60),r=Math.floor(85),o=`${Math.floor(Math.random()*(r-i+1))+i}%`;return{placeholderPageStyle:{height:28,display:"flex",alignItems:"center",width:"100%",padding:t?"0 15px":"0 0px"},placeholderTextWrapStyle:{flexGrow:1,marginLeft:t?10:0,height:28,display:"flex",alignItems:"center"},placeholderTextStyle:{height:4,background:e.buttonHoveredBackground,width:o}}}),[t]);return(0,j.jsxs)("div",{style:r.placeholderPageStyle,children:[t&&(0,w.w)({width:16,height:16,fill:i.buttonHoveredBackground}),(0,j.jsx)("div",{style:r.placeholderTextWrapStyle,children:(0,j.jsx)("div",{style:r.placeholderTextStyle})})]})},I={whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"};class Z extends r.Z{UNSAFE_willMountOrUpdate(){"store"===this.props.type&&this.props.spaceStore.getValue()}renderComponent(){const{device:e}=this.environment,{props:t}=this,{activeUserEmailAddress:i,isMobile:r,style:o,showExpand:n}=t,s="store"===t.type?(0,f.rn)(this.environment,t.spaceStore):t.spaceName;return(0,j.jsxs)(C.Z,{style:{overflow:"hidden",...r&&{fontSize:14,padding:0,marginRight:12},...!r&&{paddingLeft:10,paddingRight:10},...o||{}},left:s?(0,j.jsx)(L,{title:s,icon:"store"===t.type?void 0:t.spaceIcon,isMobile:r,spaceStore:"store"===t.type?t.spaceStore:void 0}):(0,j.jsx)(V,{}),disableMobileBorder:!0,children:[!s&&(0,j.jsx)(k,{}),s&&(0,j.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:i?"space-between":"start"},className:"notranslate",children:[(0,j.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginRight:6,marginTop:e.isAndroid?3:0,...I},children:[(0,j.jsx)("div",{style:{color:this.theme.regularTextColor,fontWeight:b.Z.fontWeight.medium,...I},children:s}),(0,j.jsx)("div",{style:{color:this.theme.mediumTextColor,fontSize:11,lineHeight:"12px",fontWeight:b.Z.fontWeight.regular,...I},children:i})]}),n&&(0,j.jsx)("div",{style:{flexGrow:0,flexShrink:0,width:10,height:10,fill:this.theme.mediumIconColor},children:(0,x.s)()})]})]})}}Z.displayName="SidebarSpaceName";const T=Z;function V(){return(0,j.jsx)("div",{style:{opacity:.25},children:(0,j.jsx)(v.Z,{size:20,title:void 0})})}function k(){return(0,j.jsx)(M,{showIcon:!1})}function L(e){let{title:t,icon:i,isMobile:r,spaceStore:o}=e;window.__c={n:"RecordIconComponent"};const n=(0,S.Fg)(),s=(0,g.O7)(),a=(0,m.VK)((()=>o?(0,f.Wd)(s,o):i?{icon:i,pointer:{table:"space",id:"undefined"}}:void 0),[o,s,i]),l=(0,m.VK)((()=>o?(0,f.rn)(s,o):t),[o,s,t]);return(0,j.jsx)(y.Z,{disabled:!0,icon:a,isEmptyPage:!1,title:l,size:r?24:22,style:{marginTop:1,color:n.regularTextColor,fontWeight:b.Z.fontWeight.medium}})}var P=i(22165),H=i(43250),R=i(80444),B=i(30278),O=i(85974),K=i(28517),U=i(19034),W=i(97852),_=i(78861);let E=function(e){return e[e.Regular=0]="Regular",e[e.DesktopMac=1]="DesktopMac",e[e.Mobile=2]="Mobile",e}({});const N={[E.Regular]:n.Aj-8,[E.DesktopMac]:n.br,[E.Mobile]:"auto"},z={display:"flex",alignItems:"center",minWidth:0,height:"100%",width:"100%"};class A extends r.Z{constructor(){super(...arguments),this.sidebarSwitcherIsHovered=o.default.createValue(!1),this.storeTypes={loginStore:O.Z,loginPermissionsStore:B.Z}}renderComponent(){const{device:e}=this.environment,{shouldShowUnexpandButton:t}=this.props,{currentSpaceStore:i,currentUserStore:r}=R.default.state,o=this.environment.currentUser.loggedInUserIds;if(!i||!r)return;const n=o.length>1?r.getEmail():void 0,s=U.Z.getUnreadMentionsCountForOtherSpaces(),g=Boolean(this.props.disabled),m=this.stores;return(0,j.jsx)(p.ZP,{popupType:e.isMobile?p.Z4.SlideUp:p.Z4.Popup,buttonPopupStore:W.Z,renderOrigin:()=>{return(0,j.jsxs)(c.Z,{style:{...z,height:N[this.props.format],marginLeft:4,marginRight:4,marginTop:e.isMobile?0:4,width:"calc(100% - 8px)",borderRadius:4,marginBottom:n?e.isMobile?0:8:0,padding:0,...this.props.buttonStyle},mobileFeedback:e.isMobile,onClick:()=>{return e=this.environment,W.Z.setState({...W.Z.state,open:!0}),l.ai(e),void e.currentUser.loggedInUserIds.forEach((t=>{_.Z.getSpaceViewStores(e,t).forEach((i=>{const r=i.getSpaceId();r&&(d.h({environment:e,spaceId:r,userId:t}),K.I({environment:e,spaceId:r,userId:t}))}))}));var e},disabled:g,className:H.rli,hovered:this.sidebarSwitcherIsHovered.state,ignoreLocalHoverState:!0,onMouseEnter:()=>this.sidebarSwitcherIsHovered.setState(!0),onMouseLeave:()=>this.sidebarSwitcherIsHovered.setState(!1),children:[(0,j.jsx)(T,{isMobile:(r=this.props.format,r===E.Mobile),spaceStore:i,activeUserEmailAddress:n,showExpand:!g,type:"store",style:{marginLeft:0}}),(0,j.jsxs)("div",{className:H.JiD,style:{display:"flex",alignItems:"center",height:"100%",marginLeft:"auto",marginRight:s?0:12},children:[t&&(0,j.jsx)(P.V,{}),(0,j.jsx)(u.Z,{type:"otherSpaces",color:h.N.Red,style:{marginLeft:10,marginRight:10}})]})]});var r},originGap:0,disableMutationObserver:!0,forceInitialInbound:!0,style:e.isMobile?{}:{width:320,overflow:"hidden"},render:e=>(0,j.jsx)(a.Rv,{parent:e,redirectURL:this.props.redirectURL,disableLoginLink:this.props.disableLoginLink,onSpaceClick:this.props.onSpaceClick,loginStore:m.loginStore,loginPermissionsStore:m.loginPermissionsStore})})}}A.displayName="SidebarSwitcherMultiAccount";const F=(0,s.injectIntl)(A)},30278:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(49085);class o extends r.default{getInitialState(){return{contacts:!1}}}const n=o}}]);