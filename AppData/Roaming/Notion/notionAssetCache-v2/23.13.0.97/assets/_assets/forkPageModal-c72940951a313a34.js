"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[8129],{39849:(e,t,i)=>{i.d(t,{N:()=>l,Z:()=>d});i(67294);var o=i(24405),n=i(8848),r=i(82990),a=i(85893);const s={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:16,height:16,fontSize:10,textAlign:"center",fontWeight:r.Z.fontWeight.semibold,borderRadius:4,color:n.ZP.white,position:"static",marginLeft:6,WebkitFontSmoothing:"auto"};let l=function(e){return e[e.Red=0]="Red",e[e.Gray=1]="Gray",e}({});const d=function(e){let{count:t,color:i,style:n,numberStyle:r}=e;window.__c={n:"MentionsBadge"};const d=(0,o.Fg)(),u=i===l.Red;return!t||t<=0?null:(0,a.jsx)("div",{style:{...s,...n,...t>99&&{width:void 0,padding:2},background:u?d.redBadgeBackground:d.lightIconColor},children:(0,a.jsx)(c,{count:t,numberStyle:r})})};function c(e){let{count:t,numberStyle:i}=e;return t?1===t?(0,a.jsx)("span",{style:{marginLeft:-.5,...i},children:"1"}):t>99?(0,a.jsx)("span",{style:{letterSpacing:-.5,...i},children:"99+"}):t>9?(0,a.jsx)("span",{style:{letterSpacing:-.5,marginLeft:-.5,...i},children:t}):(0,a.jsx)("span",{style:{...i},children:t}):null}},14694:(e,t,i)=>{i.d(t,{Z:()=>c});i(67294);var o=i(480),n=i(86628),r=i(24405),a=i(39567),s=i(50659),l=i(85893);function d(){window.__c={n:"AliasIcon"};const e=(0,r.yK)((e=>({icon:{position:"absolute",width:"50%",height:"50%",right:0,bottom:0,fill:"dark"===e.mode?e.regularTextColor:"#3E3C38",stroke:"dark"===e.mode?e.sidebarBackground:"white",strokeWidth:"dark"===e.mode?"1.85px":"1.5px"}})),[]);return(0,l.jsx)("div",{children:(0,a.Y)(e.icon)})}function c(e){var t;window.__c={n:"SidebarItem"};const i=(0,o.O7)(),a=i.device.isMobile,c=(0,n.VK)((()=>{var t,o;if(a)return i.WindowSizeStore.getSafePaddingLeftCSS("number"==typeof(null===(t=e.style)||void 0===t?void 0:t.paddingLeft)?null===(o=e.style)||void 0===o?void 0:o.paddingLeft:10)}),[i.WindowSizeStore,a,null===(t=e.style)||void 0===t?void 0:t.paddingLeft]),u=(0,r.yK)((t=>({wrapper:{...a?{display:"flex",alignItems:"center",width:"100%",minHeight:26,fontSize:16,paddingTop:8,paddingBottom:8,paddingLeft:c,paddingRight:10,userSelect:"none",WebkitUserSelect:"none",boxShadow:e.disableMobileBorder?void 0:`0 1px 0 ${t.regularDividerColor}`,marginBottom:e.shouldShowMobileMarginBottom?12:1}:{display:"flex",alignItems:"center",width:"100%",fontSize:14,minHeight:27,paddingTop:2,paddingBottom:2,marginTop:1,marginBottom:1,...(0,s.MF)()},...e.style},icon:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,width:a?28:22,height:a?24:18,marginLeft:-3,marginRight:4,position:"relative"},right:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,height:"100%",...e.rightStyle},left:{flexShrink:0,flexGrow:0,borderRadius:4,color:t.mediumTextColor,width:a?26:22,height:a?24:22,display:"flex",alignItems:"center",justifyContent:"center",marginRight:e.icon?0:8},children:{flexGrow:1,flexShrink:1,flexBasis:"auto",whiteSpace:"nowrap",minWidth:0,overflow:"hidden",textOverflow:e.right&&!a?"clip":"ellipsis",...e.childrenStyle}})),[a,c,e.disableMobileBorder,e.shouldShowMobileMarginBottom,e.style,e.rightStyle,e.icon,e.right,e.childrenStyle]);return(0,l.jsxs)("div",{role:e.role,"aria-current":e["aria-current"],"aria-expanded":e["aria-expanded"],"aria-owns":e["aria-owns"],"aria-labelledby":e["aria-labelledby"],style:u.wrapper,onFocus:e.onFocus,onBlur:e.onBlur,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,className:e.className,children:[e.left&&(0,l.jsx)("div",{style:u.left,children:e.left}),e.icon&&(0,l.jsxs)("div",{style:u.icon,children:[e.icon,e.isAlias&&(0,l.jsx)(d,{})]}),(0,l.jsx)("div",{style:u.children,children:e.children}),e.right&&(0,l.jsx)("div",{style:u.right,children:e.right})]})}},46457:(e,t,i)=>{i.d(t,{_:()=>g});var o=i(67294),n=i(480),r=i(86628),a=i(24405),s=i(9291),l=i(77907),d=i(34859),c=i(7184),u=i(53336),p=i(85893);function g(e){let{loginModalStore:t,loginStore:i,title:a,description:s,isSignup:d,disableLoginLink:u,redirectURL:g,className:C,onDismiss:v}=e;window.__c={n:"LoginModal"};const S=(0,n.O7)(),x=(0,r.VK)((()=>t.state.open),[t]),y=(0,o.useId)(),M=(0,o.useId)(),w={loginStore:i,title:a,description:s,isSignup:d,redirectURL:g,disableLoginLink:u,titleAriaId:y,descriptionAriaId:M};return(0,p.jsx)(c.c,{ariaLabelledBy:y,ariaDescribedBy:M,isOpen:x,onDismiss:()=>{h({loginModalStore:t,loginStore:i,onDismiss:v})},areaConstraint:{width:{min:480,max:480},height:{scroll:!0}},children:(0,p.jsx)(m,{children:(0,p.jsxs)("div",{className:C,children:[!S.device.isMobile&&(0,p.jsx)(f,{loginModalStore:t,loginStore:i,onDismiss:v}),(0,p.jsx)(l.LazyLoginModalContent,{...w})]})})})}function m(e){let{children:t}=e;window.__c={n:"MobileScroller"};return(0,n.O7)().device.isMobile?(0,p.jsx)(u.Z,{type:d.Z.Y,children:t}):t}function f(e){let{loginModalStore:t,loginStore:i,onDismiss:o}=e;window.__c={n:"CancelButton"};const n=(0,a.Fg)();return(0,p.jsx)("div",{style:{fontSize:14,color:n.mediumTextColor,position:"absolute",right:0,marginTop:16,marginRight:16,cursor:"pointer"},onClick:()=>{h({loginModalStore:t,loginStore:i,onDismiss:o})},children:(0,p.jsx)(s.FormattedMessage,{defaultMessage:"Cancel",id:"sidebarSwitcherMultiAccount.addAccountModal.cancelButton.label"})})}function h(e){const{loginModalStore:t,loginStore:i,onDismiss:o}=e;i.reset(),t.setState({open:!1}),o&&o()}},78839:(e,t,i)=>{i.r(t),i.d(t,{ForkPageModal:()=>Q,default:()=>q});var o=i(67294),n=i(480),r=i(86628),a=i(24405),s=i(42875),l=i(68965),d=i(82990),c=i(9291),u=i(81193),p=i(50506),g=i(80444),m=i(15145),f=i(29477),h=i(149),C=i(3297),v=i(29974),S=i(33929),x=i(30106);var y=i(16184),M=i(42922),w=i(52275),b=i(32163),V=i(72495),k=i(45653),j=i(43119),T=i(14034),Z=i(65435),Y=i(75071),I=i(85893);const B=(0,c.defineMessages)({addIconButton:{id:"forkPageDestinationSelect.add",defaultMessage:"Add"}});function H(){window.__c={n:"ForkPageAddToPill"};const e=(0,a.yK)((e=>({container:{display:"flex",alignItems:"center",justifyContent:"center",height:24,borderRadius:100,paddingLeft:8,paddingRight:8,gap:4,backgroundColor:e.outlineBlueButtonHoveredBackground,color:e.blueColor,fontWeight:d.Z.fontWeight.medium,letterSpacing:.5},icon:{width:14,height:14,fill:e.blueColor}})),[]);return(0,I.jsxs)("span",{style:e.container,children:[(0,Y.f)(e.icon),(0,I.jsx)(c.FormattedMessage,{...B.addIconButton})]})}function P(e){let{onSelect:t}=e;window.__c={n:"ForkPageDestinationSelect"};const i=(0,r.VK)((()=>g.default.state.currentUserStore),[]),{open:n,spaceStore:s}=(0,r.VK)((()=>x.Z.state),[]),l=(0,a.yK)((e=>({menuContainer:{minHeight:60,maxHeight:"30vh",overflowY:"auto"},menuItem:{height:45,paddingTop:6,paddingBottom:4},addToText:{fontSize:12,lineHeight:d.Z.lineHeight.UISmall.desktop,fontWeight:d.Z.fontWeight.medium,color:e.mediumTextColor,marginLeft:8},loadMoreText:{fontSize:d.Z.fontSize.UISmall.desktop,color:e.mediumTextColor},resetMenuItem:{marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,width:"100%"},privateMenuItem:{height:35},privateMenuTitle:{...d.Z.textOverflowStyle,color:e.darkTextColor,fontSize:d.Z.fontSize.UIRegular.desktop,fontWeight:d.Z.fontWeight.medium},privateMenuCaption:{color:e.lightTextColor},privateIconContainer:{position:"relative",width:20,height:20,padding:1},privateLockIcon:{position:"absolute",bottom:-2,right:-2,zIndex:1,width:10,height:10,fill:e.accentColors.red[500]}})),[]),u=(0,T.E)(),p=(0,r.VK)((()=>u.filter((e=>e.canAddOrRemoveTopLevelPages()&&!e.getArchivedBy()))),[u]),m=(0,o.useMemo)((()=>(0,I.jsx)(H,{})),[]),f=(0,o.useMemo)((()=>[{key:"private_or_teams",render:e=>(0,I.jsx)(V.Z,{...e}),items:[{key:"private",action:()=>{},render:e=>(0,I.jsx)(w.Z,{...e,style:l.menuItem,icon:(0,I.jsxs)("div",{style:l.privateIconContainer,children:[(0,I.jsx)(k.Z,{hasTooltip:!1,userStore:i}),(0,y.Q)(l.privateLockIcon)]}),title:(0,I.jsx)("div",{style:l.privateMenuTitle,children:(0,I.jsx)(c.FormattedMessage,{...Z.cY.addToPrivate})}),caption:(0,I.jsx)("div",{style:l.privateMenuCaption,children:(0,I.jsx)(c.FormattedMessage,{id:"forkPageDestinationSelect.privateTooltip",defaultMessage:"Visible only to you"})}),right:e.focused?m:null,buttonStyle:l.resetMenuItem,onClick:()=>{t({type:"private"})}})},...p.map((e=>({key:e.id,action:()=>{},render:i=>(0,I.jsx)(j.Z,{...i,style:l.menuItem,buttonStyle:l.resetMenuItem,showMemberCount:!0,right:i.focused?m:null,team:e,onAccept:()=>{t({type:"team",teamStore:e})}})})))]}]),[i,p,t,m,l.menuItem,l.resetMenuItem,l.privateIconContainer,l.privateLockIcon,l.privateMenuCaption,l.privateMenuTitle]);return n&&i&&s?p.length?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{style:l.addToText,children:(0,I.jsx)(c.FormattedMessage,{id:"forkPageDestinationSelect.addTo",defaultMessage:"Add to"})}),(0,I.jsx)(b.Z,{style:l.menuContainer,type:b.i.Vertical,initialFocus:void 0,sections:f})]}):(0,I.jsx)(L,{onClick:()=>{t({type:"private"})}}):(0,I.jsx)(I.Fragment,{})}function L(e){window.__c={n:"AddToPrivateBlueButton"};const t=(0,a.yK)((()=>({addToPrivateBlueButtonContainer:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingLeft:8,paddingRight:8},addToPrivateBlueButton:{width:"100%"}})),[]);return(0,I.jsx)("div",{style:t.addToPrivateBlueButtonContainer,children:(0,I.jsx)(M.Z,{...e,isLarge:!0,style:t.addToPrivateBlueButton,children:(0,I.jsx)(c.FormattedMessage,{id:"forkPageDestinationSelect.addToPrivate",defaultMessage:"Add to Private"})})})}i(57658);var _=i(25942),R=i(19889),A=i(66079),F=i(97880),W=i(31945),D=i(78140),O=i(1101),K=i(87279),z=i(48779),U=i(77062),N=i(58476),G=i(60709),E=i(79797);function J(e){let{templateBlockId:t}=e;window.__c={n:"ForkPageSwitcherMultiAccount"};const i=(0,n.O7)(),o=(0,c.useIntl)(),s=(0,a.yK)((e=>({selectedSpace:{display:"flex",alignItems:"center",justifyContent:"space-between",border:`1px solid ${e.regularDividerColor}`,borderRadius:6},expandIcon:{fill:e.mediumIconColor,width:12,marginLeft:"auto"}})),[]),l=(0,r.VK)((()=>i.currentUser.loggedInUserIds),[i]),d=(0,r.VK)((()=>g.default.state.currentUserStore),[]),p=(0,r.VK)((()=>x.Z.state.spaceStore),[]),f=(0,r.VK)((()=>d?l.map((e=>d.getRecordModel({table:R.KJ,id:e}))).filter(F.$K):[]),[d,l]),{spaceIcon:h,spaceName:C,title:S,subtitle:y}=(0,r.VK)((()=>p?{spaceIcon:(0,z.Wd)(i,p),spaceName:(0,z.rn)(i,p),title:(0,N.bM)(i,o,p),subtitle:(0,N.rR)(i,o,p)}:{spaceIcon:void 0,spaceName:"",title:"",subtitle:""}),[i,o,p]);return(0,I.jsx)(W.ZP,{popupType:W.Z4.Popup,renderOrigin:e=>(0,I.jsx)("div",{style:s.selectedSpace,children:(0,I.jsx)(U.Z,{id:null==p?void 0:p.id,icon:h,spaceName:C,title:S,caption:y,right:(0,_.P)(s.expandIcon),removeDefaultMargin:!0,focused:!1,showDragHandle:!1,disableTooltip:!0,...e})}),render:e=>(0,I.jsx)(D.Z,{menuType:K.og.Popup,children:f.map((o=>{const n=o.id;return(0,I.jsx)($,{userId:n,onSpaceClick:async o=>{let{spaceViewStore:n}=o;u.gI(i,{templateBlockId:t,templateDestinationSpaceId:n.getSpaceId(),numOfUsers:f.length}),e.close(),await async function(e){const{spaceViewStore:t}=e;await v.y3({...e,userSettingsStore:g.default.state.currentUserSettingsStore,userRootStore:g.default.state.currentUserRootStore,pageVisitSource:m.tY.DuplicateTemplateSwitchSpace,navigationType:"switchingToOrLoadingSpace"}),x.Z.setState({...x.Z.state,spaceStore:t.getSpaceStore(),spaceViewStore:t,teamStore:void 0})}({environment:i,spaceViewStore:n,switchCurrentSpace:!1})},selectedSpaceId:null==p?void 0:p.id},n)}))}),onClick:()=>{u.$6(i,{templateBlockId:t,numOfUsers:f.length})},placementToOrigin:G.Iw.Bottom,sameWidthAsOrigin:!0})}function $(e){window.__c={n:"UserSpaceViewList"};const{userId:t,onSpaceClick:i,selectedSpaceId:a}=e,s=(0,n.O7)(),l=(0,n.Fy)(),d=(0,r.VK)((()=>g.default.state.currentUserRootStore),[]),u=(0,r.VK)((()=>new E.r9(s,{table:A.dx,id:t},{userId:t}).getSpaceViewStores()),[s,t]),p=(0,r.VK)((()=>new E.U6(s,{table:R.KJ,id:t},{userId:t}).getEmail()),[s,t]),m=(0,c.useIntl)(),f=(0,r.VK)((()=>{if(!d)return[];const e=[];for(const o of u.values()){const n=o.getSpaceStore();if(null!=n&&n.isDefined()&&null!=n&&n.canEdit()){const r=t===d.id&&n.id===a,l=(0,z.rn)(s,n),c=(0,N.bM)(s,m,n),u=(0,N.rR)(s,m,n);e.push({key:o.id,render:e=>(0,I.jsx)(U.Z,{...e,id:n.id,icon:(0,z.Wd)(s,n),spaceName:l,title:c,caption:u,showDragHandle:!1,disableTooltip:!0,isCheck:r}),action:async e=>{let{event:t}=e;await i({event:t,spaceViewStore:o})}})}}return e}),[d,s,m,i,a,u,t]),h=0===f.length?[]:[{key:"spaces",render:e=>(0,I.jsx)(V.Z,{...e,disableMobilePadding:!0,topBorder:l.isMobile}),items:f}];return h.length>0?(0,I.jsxs)(o.Fragment,{children:[(0,I.jsx)(O.Z,{emailAddress:p??"",userId:t,disabled:!1,accountActions:[]}),(0,I.jsx)("div",{children:(0,I.jsx)(b.Z,{type:b.i.Vertical,sections:h,initialFocus:void 0})})]},t):null}function Q(){window.__c={n:"ForkPageModal"};const e=(0,n.O7)(),t=(0,c.useIntl)();(0,o.useEffect)((()=>{var e;x.Z.state.open&&!x.Z.state.spaceStore&&x.Z.setState({...x.Z.state,spaceStore:null===(e=g.default.state.currentSpaceViewStore)||void 0===e?void 0:e.getSpaceStore(),spaceViewStore:g.default.state.currentSpaceViewStore})}),[]);const{open:i,blockStore:y,spaceViewStore:M}=(0,r.VK)((()=>x.Z.state),[]),w=(0,r.VK)((()=>{var e;return null==y||null===(e=y.getModel())||void 0===e?void 0:e.getRenderTitle({getRecordModel:y.getRecordModel,userTimeZone:(0,s.r)(),intl:t})}),[y,t]),b=(0,a.yK)((e=>({container:{width:360,paddingTop:20,paddingBottom:16},topContainer:{paddingLeft:20,paddingRight:20},bottomContainer:{paddingLeft:12,paddingRight:12},modalTitle:{display:"flex",flexDirection:"column",alignItems:"center",gap:10},modalTitleIcon:{width:24,height:24,fill:e.mediumTextColor},modalTitleText:{fontSize:17,fontWeight:d.Z.fontWeight.semibold,textAlign:"center"},spaceSwitcher:{marginTop:16,marginBottom:16},spaceSwitcherText:{fontSize:d.Z.fontSize.UISmall.desktop,fontWeight:d.Z.fontWeight.medium,color:e.mediumTextColor,marginBottom:4}})),[]);return(0,I.jsx)(p.Z,{open:i,showCloseIcon:!0,onDismiss:()=>{x.Z.reset(),u.EZ(e,{templateBlockId:null==y?void 0:y.id})},render:()=>y?(0,I.jsxs)("div",{style:b.container,children:[(0,I.jsxs)("div",{style:b.topContainer,children:[(0,I.jsxs)("div",{style:b.modalTitle,children:[(0,l.t)(b.modalTitleIcon),(0,I.jsx)("div",{style:b.modalTitleText,children:(0,I.jsx)(c.FormattedMessage,{id:"forkPageModal.title",defaultMessage:"Where would you like to add {blockTitle}?",values:{blockTitle:w}})})]}),(0,I.jsxs)("div",{style:b.spaceSwitcher,children:[(0,I.jsx)("div",{style:b.spaceSwitcherText,children:(0,I.jsx)(c.FormattedMessage,{id:"forkPageModal.selectWorkspace",defaultMessage:"Select a workspace"})}),(0,I.jsx)(J,{templateBlockId:y.id})]})]}),M&&(0,I.jsx)("div",{style:b.bottomContainer,children:(0,I.jsx)(P,{onSelect:t=>{"team"===t.type&&x.Z.setState({...x.Z.state,teamStore:t.teamStore}),async function(e){const{open:t,blockStore:i,teamStore:o,spaceStore:n,spaceViewStore:r}=x.Z.state;t&&i&&n&&r&&(C.yR({store:i,spaceStore:n}),await Promise.all([v.y3({environment:e,spaceViewStore:r,userSettingsStore:g.default.state.currentUserSettingsStore,userRootStore:g.default.state.currentUserRootStore,pageVisitSource:m.tY.DuplicateTemplateSwitchSpace,navigationType:"switchingToOrLoadingSpace"}),(0,f.Vs)(0).then((()=>{x.Z.setState({...x.Z.state,open:!1})}))]),u.Hg(e,{templateBlockId:i.id,templateDestinationType:o?"team":"private",templateDestinationSpaceId:n.id,templateDestinationTeamId:null==o?void 0:o.id}),await C.DK({environment:e,store:i,spaceStore:n,spaceViewStore:r,isPrivate:!0,context:"public_page_duplicate_multiple_workspace",shouldLogToStatsig:!0,duplicateFunc:async()=>{const t=S.default.getIntl(),r=await C.fD({environment:e,store:i,newParent:o||n,addCopyName:!1,appendWithoutAfter:!0,unlockPage:!0});if(r){if(h.x.isFail(r))return r;{const e=h.x.unwrap(r);return null!=e&&e.length?{value:e[0]}:{error:t.formatMessage({id:"forkPageModalActions.duplicateToHelper.failed",defaultMessage:"Template duplication failed"})}}}return{error:t.formatMessage({id:"forkPageModalActions.duplicateToHelper.failed",defaultMessage:"Template duplication failed"})}}}))}(e)}})})]}):null})}const q=Q},30106:(e,t,i)=>{i.d(t,{Z:()=>r});var o=i(49085);class n extends o.default{getInitialState(){return{open:!1}}}const r=new n},50659:(e,t,i)=>{i.d(t,{G$:()=>r,MF:()=>a,Z3:()=>n});const o=4;function n(e){let{isMobile:t}=e;return{...!t&&{borderRadius:3}}}function r(e){let{isMobile:t}=e;return t?{}:{...n({isMobile:t}),marginLeft:o,marginRight:o,width:`calc(100% - ${2*o}px)`,transition:"background 100ms ease-out"}}function a(){return{paddingLeft:14-o,paddingRight:14-o}}},27249:(e,t,i)=>{i.d(t,{CN:()=>d,H_:()=>s,ay:()=>l});var o=i(11002),n=i(84465),r=i(94952),a=i(73314);function s(e){let{persona:t,defaultToLife:i}=e;if(!t)return;if(t in n._5)return t;const o={customer_support:"support",designer:"design",educator:"student",entrepreneur:"hr",freelancer:"design",hr_recruiting:"hr",it:"eng",marketing_sales:"marketing",media:"marketing",operations:"hr",operations_hr:"hr",personal:"life",product_manager:"product",programmer:"eng",other:i?"life":void 0,unfilled:i?"life":void 0,undefined:i?"life":void 0,creative:"design",founderCeo:"hr",internalCommunication:"hr",productDesign:"design",projectProgramMgmt:"product",finance:void 0,itAdmin:"eng",knowledgeManagement:"hr"};return(null==o?void 0:o[t])??void 0}function l(e,t){const i=s({persona:t,defaultToLife:!0});return(i?null==c?void 0:c[i]:[]).filter((t=>(0,r.G)(t,e)))}function d(e,t,i){return function(e,t){const i=s({persona:e,defaultToLife:!1});return(i?null===n.J9||void 0===n.J9?void 0:n.J9[i]:[]).filter((e=>(0,r.G)(e,t)))}(e,t).map((e=>(0,a.G)(e,i)))}const c={...n.J9,design:[o.Y.designSprint,o.Y.designPortfolio],product:[o.Y.productSpec,o.Y.productWiki,o.Y.visionAndStrategy],marketing:[o.Y.blogEditorialCalendar,o.Y.socialMediaCalendar,o.Y.presentation],hr:[o.Y.companyHome,o.Y.employeeBenefits,o.Y.peopleDirectory],sales:[o.Y.salesWiki,o.Y.presentation,o.Y.oneOnOneNotes],support:[],life:[o.Y.habitTrackerV2,o.Y.simpleBudgetV2,o.Y.weeklyTodoV2]}},75546:(e,t,i)=>{i.d(t,{o:()=>c});i(67294);var o=i(480),n=i(86628),r=i(24405),a=i(82990),s=i(95697),l=i(43488),d=i(85893);function c(e){let{teamStore:t,withSelectedStyle:i}=e;window.__c={n:"TeamHeaderLabel"};const c=(0,o.Fy)(),u=(0,n.VK)((()=>{var e;return{teamName:t.getName()??"",shouldShowLock:(0,s.C2)(null==t||null===(e=t.getSettingsStore())||void 0===e?void 0:e.getValue())}}),[t]),p=(0,r.yK)((e=>({container:{display:"flex",alignItems:"center",overflow:"hidden"},lockIcon:{width:15,marginLeft:6,marginBottom:1,fill:e.mediumIconColor},labelText:{...a.Z.textOverflowStyle,...i?{color:e.regularTextColor,fontWeight:a.Z.fontWeight.semibold}:{color:e.darkTextColor,fontWeight:a.Z.fontWeight.medium},fontSize:c.isMobile?a.Z.fontSize.UIRegular.mobile:a.Z.fontSize.UIRegular.desktop}})),[c.isMobile,i]);return u?(0,d.jsxs)("div",{style:p.container,children:[(0,d.jsx)("div",{style:p.labelText,children:u.teamName}),u.shouldShowLock&&(0,d.jsx)(l.Z,{iconStyle:p.lockIcon})]}):null}},96071:(e,t,i)=>{i.d(t,{Z:()=>r});var o=i(49085);class n extends o.default{getInitialState(){return{open:!1}}}const r=n},43488:(e,t,i)=>{i.d(t,{Z:()=>s});i(67294);var o=i(16184),n=i(9291),r=i(26388),a=i(85893);function s(e){let{iconStyle:t}=e;return(0,a.jsx)(r.ZP,{textWrap:!0,style:{width:210},placement:r.ug.Bottom,renderTooltip:()=>(0,a.jsx)(n.FormattedMessage,{id:"teamLockIcon.tooltip",defaultMessage:"Private teamspaces can only be accessed or joined by invitation"}),render:e=>(0,a.jsx)("div",{...e,children:(0,o.Q)(t)})})}},43119:(e,t,i)=>{i.d(t,{C:()=>y,Z:()=>M});i(57658);var o=i(67294),n=i(480),r=i(86628),a=i(24405),s=i(16184),l=i(9291),d=i(52275),c=i(31945),u=i(78140),p=i(32163),g=i(72495),m=i(45653),f=i(87279),h=i(75546),C=i(80444),v=i(14034),S=i(74016),x=i(85893);function y(e){window.__c={n:"TeamPickerButton"};const{renderOrigin:t,onTeamAccept:i,sectionTitle:o,showMemberCount:a,right:h,showPrivate:S,onPrivateAccept:y,captionItem:b}=e,V=(0,n.Fy)().isMobile,k=w(),j=(0,v.E)(),T=(0,r.VK)((()=>j.filter((e=>e.canAddOrRemoveTopLevelPages()))),[j]),Z=(0,r.VK)((()=>C.default.state.currentUserStore),[]),Y=[];if(b){const e={key:"caption",render:e=>(0,x.jsx)(g.Z,{...e,topBorder:!0}),items:[b]};Y.push(e)}const I=T.map((e=>({key:e.id,action:()=>{i(e)},render:t=>(0,x.jsx)(M,{...t,team:e,onAccept:i,showMemberCount:a,right:h})}))),B={key:"teams",render:e=>(0,x.jsx)(g.Z,{...e,title:o}),items:I};if(Y.push(B),S){const e={key:"private",render:e=>(0,x.jsx)(g.Z,{...e,topBorder:I.length>0}),items:[{key:"private",action:()=>{},render:e=>(0,x.jsx)(d.Z,{...e,icon:(0,x.jsxs)("div",{style:{position:"relative"},children:[(0,x.jsx)(m.Z,{hasTooltip:!1,userStore:Z}),(0,s.Q)(k.privateItemLockIcon)]}),title:(0,x.jsx)(l.FormattedMessage,{id:"teamPickerButton.addToPrivate",defaultMessage:"Add to Private"}),onClick:()=>{null==y||y()}})}]};Y.push(e)}return(0,x.jsx)(c.ZP,{...e,popupType:V?c.Z4.SlideUp:c.Z4.Popup,renderOrigin:t,render:e=>{let t;return t=V?{menuType:f.og.ActionSheet}:{menuType:f.og.Popup,width:"100%"},(0,x.jsx)(u.Z,{...t,children:(0,x.jsx)(p.Z,{style:{width:V?void 0:256},type:p.i.Vertical,initialFocus:void 0,sections:Y})})}})}const M=o.forwardRef(((e,t)=>{window.__c={n:"TeamItem"};const{team:i,onAccept:o,showMemberCount:n,right:a,...s}=e,c=w(),u=(0,r.VK)((()=>i.getUserIdsInTeam().length),[i]);return(0,x.jsx)(d.Z,{...s,ref:t,onClick:e=>o(i),icon:(0,x.jsx)(S.p,{store:i,size:20,disabled:!0}),title:(0,x.jsx)(h.o,{teamStore:i}),right:s.focused?a:null,caption:n?(0,x.jsx)("div",{style:c.caption,children:(0,x.jsx)(l.FormattedMessage,{defaultMessage:"{numberOfMembers, plural, one {{numberOfMembers} member} other {{numberOfMembers} members}}",id:"teamPickerButton.teamItem.teamMemberCount",values:{numberOfMembers:u}})}):null})}));function w(){return(0,a.yK)((e=>({privateItemLockIcon:{position:"absolute",bottom:-2,right:-2,zIndex:1,width:10,height:10,fill:e.accentColors.red[500]},caption:{color:e.lightTextColor}})),[])}},14034:(e,t,i)=>{i.d(t,{E:()=>a});var o=i(480),n=i(86628),r=i(28020);function a(){var e;const t=(0,o.O7)();return(null===(e=(0,n.Kw)((0,r.k_)(t)))||void 0===e?void 0:e.userJoinedTeamsStores)??[]}},65435:(e,t,i)=>{i.d(t,{D2:()=>x,Io:()=>h,JL:()=>v,cY:()=>g,it:()=>C,oO:()=>m,vY:()=>S});var o=i(84465),n=i(94952),r=i(73314),a=i(97880),s=i(9291),l=i(95477),d=i(33929),c=i(27249),u=i(77080),p=i(59307);const g=(0,s.defineMessages)({addToTeamspace:{id:"templateGalleryHelpers.addToTeamspace",defaultMessage:"Add to a teamspace"},addToPrivate:{id:"teamPickerButton.addToPrivate",defaultMessage:"Add to Private"}});function m(e){var t;const{data:i}=p.Z.state;if(i&&null!==(t=i.topCategories)&&void 0!==t&&t.length)return i.topCategories.find((t=>t.id===e))}const f=Object.keys(o.J9);function h(e){let{userPersona:t,subscriptionTier:i}=e;return[...f].sort(((e,o)=>function(e,t,i,o){const n=void 0!==o&&["free","personal_free","student","personal"].includes(o),r=(0,c.H_)({persona:i,defaultToLife:n});if("suggested"===e||"suggested"===t)return"suggested"===e?-1:1;if(r===e||r===t)return r===e?-1:1;if(("life"===e||"life"===t)&&n)return"life"===e?-1:1;if(("student"===e||"student"===t)&&function(e){let{persona:t,isPersonalishPlan:i}=e;const o=i?["other","unfilled","personal","undefined"]:["personal"];return o.includes(t??"undefined")}({persona:i,isPersonalishPlan:n}))return"student"===e?-1:1;return 0}(e,o,t,i)))}function C(e){let{userPersona:t,subscriptionTier:i}=e;const a=d.default.getIntl();return Object.fromEntries(h({userPersona:t,subscriptionTier:i}).map((e=>[e,[...o.J9[e].filter((e=>(0,n.G)(e,u.default))).map((e=>(0,r.G)(e,a)))]])).filter((e=>{let[t,i]=e;return(null==i?void 0:i.length)>0})))}function v(e){const t=(0,a.Yd)(e).map((e=>[e,!0]));return Object.fromEntries(t)}function S(e){var t;const{data:i}=p.Z.state;if(!i||null===(t=i.topCategories)||void 0===t||!t.length)return;const o=i.topCategories.find((t=>{var i;return null===(i=t.subcategories)||void 0===i?void 0:i.find((t=>{var i;return null===(i=t.templates)||void 0===i?void 0:i.find((t=>"pageTemplate"===t.type&&t.template.rootId===e||"preset"===t.type&&t.uri===e))}))}));return null==o?void 0:o.id}function x(e){return`${l.default.domainBaseUrl}/@${e}`}},59307:(e,t,i)=>{i.d(t,{Z:()=>r});var o=i(49085);class n extends o.default{getInitialState(){return{}}getTopTemplateCategories(){var e;const{data:t}=this.state;return t&&null!==(e=t.topCategories)&&void 0!==e&&e.length?Array.from(t.topCategories).filter((e=>{const t=e.subcategories||[];for(const o of t){var i;if(null!==(i=o.templates)&&void 0!==i&&i.length)return!0}return!1})):[]}}const r=new n},68965:(e,t,i)=>{i.d(t,{t:()=>r});i(67294);var o=i(45238),n=i(85893);const r=(0,o.I)("addFilterGroup",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M2.374 12.42h1.293v1.157c0 1.557.787 2.344 2.375 2.344h7.591c1.573 0 2.367-.787 2.367-2.344V5.924c0-1.557-.794-2.344-2.367-2.344h-1.3V2.423C12.333.866 11.539.08 9.966.08H2.374C.786.08 0 .866 0 2.423v7.653c0 1.557.786 2.344 2.374 2.344zm.015-1.218c-.756 0-1.172-.408-1.172-1.194V2.49c0-.786.416-1.194 1.172-1.194h7.554c.749 0 1.172.408 1.172 1.194v1.09H6.042c-1.588 0-2.375.778-2.375 2.343v5.278H2.39zm3.668 3.501c-.749 0-1.172-.408-1.172-1.194V5.991c0-.786.423-1.194 1.172-1.194h7.554c.748 0 1.172.408 1.172 1.194v7.516c0 .787-.424 1.195-1.172 1.195H6.057zm3.773-1.565c.4 0 .643-.272.643-.71v-2.042h2.17c.423 0 .718-.227.718-.628 0-.408-.272-.643-.718-.643h-2.17V6.938c0-.447-.242-.719-.643-.719-.4 0-.628.288-.628.719v2.177h-2.17c-.438 0-.718.235-.718.643 0 .4.295.628.718.628h2.17v2.041c0 .424.227.711.628.711z"})})},25942:(e,t,i)=>{i.d(t,{P:()=>r});i(67294);var o=i(45238),n=i(85893);const r=(0,o.I)("expandThin",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M7.992.61c.156 0 .3.033.43.1.13.069.27.16.422.274l5.265 4.25a.948.948 0 01.368.774 1 1 0 01-.149.547c-.099.156-.229.28-.39.375a1.013 1.013 0 01-.508.133 1.07 1.07 0 01-.399-.079 1.6 1.6 0 01-.375-.226L7.992 3.016 3.336 6.758a1.74 1.74 0 01-.383.226 1.056 1.056 0 01-.906-.055 1.145 1.145 0 01-.383-.374 1 1 0 01-.148-.547c0-.318.122-.576.367-.774L7.148.984C7.3.87 7.44.78 7.57.711a.9.9 0 01.422-.102zm0 14.85a.901.901 0 01-.422-.1 2.288 2.288 0 01-.422-.274l-5.265-4.25a.962.962 0 01-.367-.774 1.055 1.055 0 01.531-.914 1.01 1.01 0 01.906-.062c.125.052.253.128.383.226l4.656 3.743 4.664-3.742a1.6 1.6 0 01.375-.227c.13-.052.263-.078.399-.078a.97.97 0 01.508.14 1.036 1.036 0 01.539.915c0 .312-.123.57-.368.773l-5.265 4.258a2.512 2.512 0 01-.422.265.917.917 0 01-.43.102z"})})},40462:(e,t,i)=>{i.d(t,{o:()=>r});i(67294);var o=i(45238),n=i(85893);const r=(0,o.I)("globe2",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM3.88477 3.76465C4.56836 3.11523 5.39551 2.61621 6.31836 2.34277C5.83301 2.82812 5.42285 3.51172 5.11523 4.3457C4.63672 4.19531 4.22656 3.99707 3.88477 3.76465ZM9.68848 2.34961C10.6045 2.62305 11.4316 3.11523 12.1084 3.76465C11.7734 4.00391 11.3633 4.19531 10.8848 4.35254C10.5771 3.51172 10.167 2.82812 9.68848 2.34961ZM8.47852 2.56836C9.0459 2.8418 9.56543 3.58008 9.93457 4.58496C9.4834 4.66699 8.99805 4.71484 8.47852 4.73535V2.56836ZM6.06543 4.58496C6.44141 3.58008 6.9541 2.8418 7.52148 2.56836V4.73535C7.00195 4.71484 6.5166 4.66699 6.06543 4.58496ZM2.05273 7.58594C2.14844 6.42383 2.58594 5.35059 3.25586 4.46875C3.67285 4.77637 4.21289 5.04297 4.8418 5.24121C4.66406 5.95215 4.54785 6.74512 4.51367 7.58594H2.05273ZM11.4863 7.58594C11.4521 6.74512 11.3359 5.95215 11.1582 5.24121C11.7871 5.04297 12.3271 4.7832 12.7373 4.46875C13.4141 5.35059 13.8516 6.42383 13.9473 7.58594H11.4863ZM5.49121 7.58594C5.52539 6.84082 5.62793 6.12988 5.78516 5.4873C6.33203 5.59668 6.91309 5.66504 7.52148 5.69238V7.58594H5.49121ZM8.47852 7.58594V5.69238C9.08691 5.66504 9.66797 5.59668 10.2148 5.4873C10.3721 6.12988 10.4746 6.84082 10.5088 7.58594H8.47852ZM2.05273 8.54297H4.51367C4.54785 9.39746 4.66406 10.1973 4.8418 10.915C4.21973 11.1133 3.68652 11.373 3.27637 11.6807C2.59277 10.792 2.14844 9.71191 2.05273 8.54297ZM5.49121 8.54297H7.52148V10.4707C6.91992 10.498 6.33203 10.5664 5.79199 10.6689C5.62793 10.0195 5.51855 9.29492 5.49121 8.54297ZM8.47852 10.4707V8.54297H10.5088C10.4814 9.29492 10.3721 10.0195 10.208 10.6689C9.66797 10.5664 9.08691 10.498 8.47852 10.4707ZM11.1582 10.915C11.3428 10.1973 11.4521 9.39746 11.4863 8.54297H13.9473C13.8516 9.71191 13.4072 10.792 12.7236 11.6807C12.3135 11.373 11.7803 11.1133 11.1582 10.915ZM8.47852 11.4277C8.99121 11.4482 9.47656 11.4961 9.9209 11.5781C9.55176 12.5625 9.03906 13.2939 8.47852 13.5605V11.4277ZM6.0791 11.5781C6.52344 11.4961 7.00879 11.4482 7.52148 11.4277V13.5605C6.96094 13.2939 6.44824 12.5625 6.0791 11.5781ZM3.90527 12.3848C4.24023 12.1523 4.65039 11.9609 5.12207 11.8105C5.42969 12.6309 5.83301 13.3008 6.30469 13.7793C5.40234 13.5059 4.58203 13.0205 3.90527 12.3848ZM10.8779 11.8105C11.3496 11.9609 11.7598 12.1523 12.0947 12.3848C11.418 13.0205 10.5977 13.5059 9.69531 13.7793C10.167 13.3008 10.5703 12.6309 10.8779 11.8105Z"})})},16184:(e,t,i)=>{i.d(t,{Q:()=>r});i(67294);var o=i(45238),n=i(85893);const r=(0,o.I)("lockedFilled",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M4.69141 14.6338H11.3018C12.2178 14.6338 12.6689 14.1826 12.6689 13.1914V8.08496C12.6689 7.18945 12.293 6.72461 11.541 6.64941V4.96094C11.541 2.36328 9.81152 1.1123 7.99316 1.1123C6.18164 1.1123 4.45215 2.36328 4.45215 4.96094V6.67676C3.74805 6.78613 3.32422 7.2373 3.32422 8.08496V13.1914C3.32422 14.1826 3.77539 14.6338 4.69141 14.6338ZM5.75098 4.83105C5.75098 3.22461 6.76953 2.35645 7.99316 2.35645C9.2168 2.35645 10.2422 3.22461 10.2422 4.83105V6.64258L5.75098 6.64941V4.83105Z"})})},49364:(e,t,i)=>{i.d(t,{R:()=>r});i(67294);var o=i(45238),n=i(85893);const r=(0,o.I)("openTeam",{viewBox:"0 0 28 28",svg:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("path",{d:"M3.24121 21.4326C3.24121 22.4082 3.80371 23.0322 4.7002 23.0322H22.4629C23.3506 23.0322 23.9131 22.4082 23.9131 21.4326V10.2178C23.9131 9.24219 23.3506 8.61816 22.4629 8.61816H17.2334V5.89355C17.2334 4.91797 16.6709 4.29395 15.7832 4.29395H4.7002C3.80371 4.29395 3.24121 4.91797 3.24121 5.89355V21.4326ZM4.65625 21.1074V6.21875C4.65625 5.86719 4.81445 5.70898 5.16602 5.70898H15.3174C15.6602 5.70898 15.8184 5.86719 15.8184 6.21875V21.1074C15.8184 21.4502 15.6602 21.6172 15.3174 21.6172H13.2959V19.0244C13.2959 18.2686 12.9619 17.917 12.2412 17.917H8.2334C7.5127 17.917 7.17871 18.2686 7.17871 19.0244V21.6172H5.16602C4.81445 21.6172 4.65625 21.4502 4.65625 21.1074ZM7.31934 9.5498H9.0332C9.24414 9.5498 9.39355 9.40918 9.39355 9.18945V7.52832C9.39355 7.31738 9.24414 7.16797 9.0332 7.16797H7.31934C7.1084 7.16797 6.97656 7.31738 6.97656 7.52832V9.18945C6.97656 9.40918 7.1084 9.5498 7.31934 9.5498ZM11.4414 9.5498H13.1465C13.3574 9.5498 13.5068 9.40918 13.5068 9.18945V7.52832C13.5068 7.31738 13.3574 7.16797 13.1465 7.16797H11.4414C11.2217 7.16797 11.0898 7.31738 11.0898 7.52832V9.18945C11.0898 9.40918 11.2217 9.5498 11.4414 9.5498ZM17.2334 21.4326V10.0332H21.9971C22.3398 10.0332 22.498 10.2002 22.498 10.543V21.1074C22.498 21.4502 22.3398 21.6172 21.9971 21.6172H17.2246C17.2334 21.5557 17.2334 21.4941 17.2334 21.4326ZM7.31934 13.0303H9.0332C9.24414 13.0303 9.39355 12.8896 9.39355 12.6699V11.0088C9.39355 10.7979 9.24414 10.6484 9.0332 10.6484H7.31934C7.1084 10.6484 6.97656 10.7979 6.97656 11.0088V12.6699C6.97656 12.8896 7.1084 13.0303 7.31934 13.0303ZM11.4414 13.0303H13.1465C13.3574 13.0303 13.5068 12.8896 13.5068 12.6699V11.0088C13.5068 10.7979 13.3574 10.6484 13.1465 10.6484H11.4414C11.2217 10.6484 11.0898 10.7979 11.0898 11.0088V12.6699C11.0898 12.8896 11.2217 13.0303 11.4414 13.0303ZM19.1582 13.4521H20.5732C20.749 13.4521 20.8721 13.3291 20.8721 13.1533V11.7822C20.8721 11.6064 20.749 11.4834 20.5732 11.4834H19.1582C18.9736 11.4834 18.8682 11.6064 18.8682 11.7822V13.1533C18.8682 13.3291 18.9736 13.4521 19.1582 13.4521ZM7.31934 16.5107H9.0332C9.24414 16.5107 9.39355 16.3613 9.39355 16.1504V14.4893C9.39355 14.2695 9.24414 14.1289 9.0332 14.1289H7.31934C7.1084 14.1289 6.97656 14.2695 6.97656 14.4893V16.1504C6.97656 16.3613 7.1084 16.5107 7.31934 16.5107ZM11.4414 16.5107H13.1465C13.3574 16.5107 13.5068 16.3613 13.5068 16.1504V14.4893C13.5068 14.2695 13.3574 14.1289 13.1465 14.1289H11.4414C11.2217 14.1289 11.0898 14.2695 11.0898 14.4893V16.1504C11.0898 16.3613 11.2217 16.5107 11.4414 16.5107ZM19.1582 16.8096H20.5732C20.749 16.8096 20.8721 16.6865 20.8721 16.5107V15.1396C20.8721 14.9639 20.749 14.8408 20.5732 14.8408H19.1582C18.9736 14.8408 18.8682 14.9639 18.8682 15.1396V16.5107C18.8682 16.6865 18.9736 16.8096 19.1582 16.8096ZM19.1582 20.167H20.5732C20.749 20.167 20.8721 20.0439 20.8721 19.8682V18.4971C20.8721 18.3213 20.749 18.1982 20.5732 18.1982H19.1582C18.9736 18.1982 18.8682 18.3213 18.8682 18.4971V19.8682C18.8682 20.0439 18.9736 20.167 19.1582 20.167ZM8.33008 19.3496C8.33008 19.165 8.42676 19.0684 8.61133 19.0684H11.8633C12.0566 19.0684 12.1445 19.165 12.1445 19.3496V21.6172H8.33008V19.3496Z"})})})},22686:(e,t,i)=>{i.d(t,{f:()=>r});i(67294);var o=i(45238),n=i(85893);const r=(0,o.I)("person",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M7.7832 8.00195C9.27344 8.00195 10.5381 6.67578 10.5381 4.95996C10.5381 3.28516 9.2666 2 7.7832 2C6.29297 2 5.01465 3.30566 5.02148 4.97363C5.02148 6.67578 6.28613 8.00195 7.7832 8.00195ZM3.51758 14.3594H12.0352C13.1631 14.3594 13.5527 14.0176 13.5527 13.3887C13.5527 11.6318 11.3242 9.21191 7.77637 9.21191C4.23535 9.21191 2 11.6318 2 13.3887C2 14.0176 2.38965 14.3594 3.51758 14.3594Z"})})},14734:(e,t,i)=>{i.d(t,{X:()=>r});i(67294);var o=i(45238),n=i(85893);const r=(0,o.I)("personCrossedOut",{viewBox:"0 0 44 44",svg:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{d:"M5.4857 44H0L44 8.56549V13.0061L5.4857 44Z"}),(0,n.jsx)("path",{d:"M39.8048 44H8.66491L25.6448 30.4378C26.9394 30.6489 28.1581 30.9719 29.3009 31.4067C31.5362 32.2374 33.4346 33.326 34.9964 34.6723C36.5725 36.0044 37.7761 37.4367 38.6071 38.9692C39.4525 40.5018 39.8752 41.9555 39.8752 43.3305C39.8752 43.5675 39.8517 43.7906 39.8048 44Z"}),(0,n.jsx)("path",{d:"M30.3971 16.7973C30.3971 16.8668 30.3965 16.9359 30.3952 17.0048L19.3828 25.9192C18.7467 25.7134 18.1339 25.4228 17.5446 25.0473C16.2408 24.2023 15.1876 23.0708 14.3853 21.6528C13.5972 20.2205 13.2032 18.6163 13.2032 16.8403C13.2032 15.0929 13.5972 13.5174 14.3853 12.1137C15.1876 10.7101 16.2408 9.60007 17.5446 8.78366C18.8485 7.96725 20.267 7.55905 21.8001 7.55905C23.3332 7.55905 24.7517 7.96009 26.0556 8.76218C27.3595 9.56426 28.4054 10.6671 29.1935 12.0708C29.9959 13.4601 30.3971 15.0356 30.3971 16.7973Z"})]})})},75071:(e,t,i)=>{i.d(t,{f:()=>r});i(67294);var o=i(45238),n=i(85893);const r=(0,o.I)("plusThick",{viewBox:"0 0 14 14",svg:(0,n.jsx)("path",{d:"M2 7.16357C2 7.59692 2.36011 7.95093 2.78735 7.95093H6.37622V11.5398C6.37622 11.9731 6.73022 12.3271 7.16357 12.3271C7.59692 12.3271 7.95093 11.9731 7.95093 11.5398V7.95093H11.5398C11.9731 7.95093 12.3271 7.59692 12.3271 7.16357C12.3271 6.73022 11.9731 6.37622 11.5398 6.37622H7.95093V2.78735C7.95093 2.36011 7.59692 2 7.16357 2C6.73022 2 6.37622 2.36011 6.37622 2.78735V6.37622H2.78735C2.36011 6.37622 2 6.73022 2 7.16357Z"})})},84465:(e,t,i)=>{i.d(t,{J9:()=>l,_5:()=>a,gh:()=>s});var o=i(92996),n=i(11002),r=i(98251);const a={suggested:r.sY.suggestedCategory,design:r.sY.designer,eng:r.sY.engineering,product:r.sY.productManagement,marketing:r.sY.marketing,sales:r.sY.sales,support:r.sY.support,hr:r.sY.hr,life:r.sY.life,student:r.sY.student},s={suggested:[o.Ll,o.Yb,o.tt,o.KW,o.r],product:[o.tt],design:[o.Yb],eng:[o.tt],marketing:[o.Yb],hr:[o.Yb],sales:[o.Yb],support:[o.Yb],life:[],student:[]},l={suggested:[n.Y.defaultWiki],product:[n.Y.oneOnOneNotes,n.Y.productWiki,n.Y.productSpec,n.Y.visionAndStrategy,n.Y.presentation,n.Y.investorUpdate,n.Y.userResearch,n.Y.experimentResults,n.Y.brainstorm,n.Y.productLaunchBrief],design:[n.Y.designSprint,n.Y.designSystem,n.Y.designPortfolio,n.Y.userResearch,n.Y.brainstorm],eng:[n.Y.engineeringWiki,n.Y.engineeringTechSpec,n.Y.experimentResults,n.Y.brainstorm],marketing:[n.Y.presentation,n.Y.brandAssets,n.Y.brainstorm,n.Y.contentCalendar,n.Y.blogEditorialCalendar,n.Y.socialMediaCalendar,n.Y.campaignBrief,n.Y.moodBoard,n.Y.mediaList],hr:[n.Y.companyHome,n.Y.newHireOnboarding,n.Y.employeeBenefits,n.Y.interviewGuide,n.Y.recruitingTracker,n.Y.jobBoard,n.Y.applicantTracker,n.Y.peopleDirectory],sales:[n.Y.salesWiki,n.Y.salesCRM,n.Y.salesAssets,n.Y.competitiveAnalysis],support:[n.Y.productFAQs,n.Y.helpCenter],life:[n.Y.readingListV2,n.Y.habitTrackerV2,n.Y.simpleBudgetV2,n.Y.weeklyTodoV2,n.Y.travelPlannerV2,n.Y.journalV2,n.Y.resumeV2,n.Y.personalHomeV3,n.Y.quickNoteV2,n.Y.jobApplicationsV2,n.Y.lifeWikiV2,n.Y.moodBoardV2,n.Y.blogPostV2,n.Y.personalCRMV2],student:[n.Y.studentDashboardV2,n.Y.classNotesV2,n.Y.courseScheduleV2,n.Y.gradeCalculatorV2,n.Y.cornellNotesSystemV2,n.Y.syllabusV2,n.Y.lessonPlansV2,n.Y.classDirectoryV2,n.Y.classroomHomeV2,n.Y.clubHomepageV2]}}}]);