"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[8123],{77468:(e,t,i)=>{i.d(t,{l:()=>h});var n=i(56162),l=i(79475),a=i(54186),o=i(14874),s=i(91e3),r=i(4637);const d={[a.Uo.MEDIUM]:"alto",[a.Uo.LARGE]:"alto",[a.Uo.XLARGE]:"forte"},c={[a.Uo.LARGE]:"ballad",[a.Uo.XLARGE]:"cello"},u={[a.Uo.LARGE]:"viola",[a.Uo.XLARGE]:"viola"},h=({title:e,subtitle:t,body:i,footnote:h,buttonText:b,callToActionClicked:m})=>{const x=(0,a.jh)(),v=x&&d[x]||"canon",g=x&&c[x]||"mesto",E=x&&u[x]||"finale";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.D,{as:"h1",variant:v,semanticColor:"textBase",className:s.Z.title,children:e}),(0,r.jsx)(n.D,{as:"h2",variant:g,semanticColor:"textSubdued",className:s.Z.subtitle,children:t}),i,m&&(0,r.jsx)(l.D,{className:s.Z.button,colorSet:"invertedLight",onClick:m,"data-testid":o.xd,children:b}),h&&(0,r.jsx)(n.D,{as:"p",variant:E,semanticColor:"textSubdued",className:s.Z.note,children:h})]})}},55915:(e,t,i)=>{i.d(t,{H:()=>p});var n=i(84875),l=i.n(n),a=i(3802),o=i(79410),s=i(91703),r=i(54186),d=i(77468),c=i(14874);const u="NTT5CathoDEMjrmgfv9y",h="WmmNhmwHDNvDxInfukYO";var b=i(4637);const m=e=>(0,b.jsx)("div",{className:u,children:(0,b.jsx)("div",{className:h,children:(0,b.jsx)("svg",{width:e.iconSize,height:e.iconSize,fill:"currentColor",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",children:(0,b.jsx)("path",{d:"M33 31.998v-23h-2v23H8v2h23v23h2v-23h23v-2z"})})})});var x=i(91e3);const v={name:"",username:"",image_url:null,hash:""},g={[r.Uo.MEDIUM]:164,[r.Uo.LARGE]:164,[r.Uo.XLARGE]:270},E=(e,t)=>(0,b.jsx)(o.q,{label:a.ag.get("web-player.blend.invite.button-title"),images:[],width:e,userIconSize:t,customPlaceholder:(0,b.jsx)(m,{iconSize:t}),piled:!0}),p=({invitation:e,callToActionClicked:t,breakpointEltRef:i})=>{const n=!!e.members?.length,u=n&&e.members?.[0]||e.recipient||v,h=n&&e.recipient||null,m=(0,r.jh)(),p=m&&g[m]||128,j=Math.round(.475*p);return(0,b.jsxs)("div",{className:l()(x.Z.container,x.Z.TwoUsers),"data-testid":c.xS,ref:i,children:[(0,b.jsx)(s.$,{children:a.ag.get("blend.invite.page-title")}),(0,b.jsxs)("div",{className:x.Z.facepile,children:[(0,b.jsx)(o.q,{label:u.name,images:[{url:u.image_url??"",width:p,height:p}],width:p,userIconSize:j}),h?(0,b.jsx)(o.q,{label:h.name,images:[{url:h.image_url??"",width:p,height:p}],width:p,userIconSize:j,piled:!0}):E(p,j)]}),(0,b.jsx)(d.l,{title:e.title,subtitle:e.subtitle,footnote:e.footnote,buttonText:e.button_text,callToActionClicked:t})]})}},14874:(e,t,i)=>{i.d(t,{Eh:()=>o,ab:()=>a,e0:()=>n,xS:()=>l,xd:()=>s});const n="blend-deleted-container",l="blend-two-user-container",a="blend-multi-user-container",o="blend-full-container",s="blend-cta-button"},83092:(e,t,i)=>{i.d(t,{Z:()=>n});const n=()=>{const e=window.location.href;return window.location.href=`https://accounts.spotify.com/login?continue=${encodeURIComponent(e)}`,null}},99891:(e,t,i)=>{i.d(t,{Ag:()=>s,V3:()=>l,nW:()=>o,oN:()=>a});var n=i(27555);let l=function(e){return e.PENDING_INVITATION="PENDING_INVITATION",e.READY_TO_JOIN_EMPTY_BLEND="READY_TO_JOIN_EMPTY_BLEND",e.READY_TO_JOIN_ALREADY_CREATED_BLEND="READY_TO_JOIN_ALREADY_CREATED_BLEND",e.MAX_MEMBERS="MAX_MEMBERS",e.ALREADY_JOINED="ALREADY_JOINED",e.DELETED="DELETED",e}({});const a=(e,t)=>e.build().withHost(n.cM).withPath(`/v3/view-invitation/${encodeURIComponent(t)}`).withEndpointIdentifier("v3/view-invitation/{invitationId}").withLocale(e.locale).send(),o=(e,t)=>e.build().withHost(n.cM).withMethod("PUT").withPath(`/v2/join/${encodeURIComponent(t)}`).withEndpointIdentifier("join/{invitationId}").send(),s=e=>e.build().withHost(n.cM).withMethod("POST").withPath("/v1/generate").withEndpointIdentifier("v1/generate").send()},6438:(e,t,i)=>{i.d(t,{j:()=>a});var n=i(41909),l=i(75890);const a=()=>(0,l.D)({[n.U.SMALL]:536,[n.U.MEDIUM]:792,[n.U.LARGE]:1048,[n.U.XLARGE]:1688})},82097:(e,t,i)=>{i.d(t,{i:()=>u});var n=i(59496),l=i(61740),a=i(3802),o=i(25899),s=i(30009),r=i(70175),d=i(82108),c=i(99891);function u(){const{user:e}=(0,l.v9)(d.Gg),t=(0,r.k)(),i=(0,n.useCallback)((async()=>{const t=await(0,c.Ag)(o.b.getInstance()),i=t.body?.invite;if(!i)throw new Error("unable to generate invite link");return e?.display_name?a.ag.get("blend.invite.body-with-name",e.display_name,t.body?.invite):a.ag.get("blend.invite.body-without-name",t.body?.invite)}),[e?.display_name]);return async()=>{try{await(0,s.v)(i()),t(a.ag.get("feedback.link-copied"))}catch{t(a.ag.get("error.generic"))}}}},90716:(e,t,i)=>{i.r(t),i.d(t,{default:()=>E});var n=i(59496),l=i(61740),a=i(3802),o=i(91703),s=i(82108),r=i(54186),d=i(4721),c=i(75207),u=i(99891),h=i(6438),b=i(82097),m=i(55915),x=i(83092),v=i(4637);const g={page_type:u.V3.PENDING_INVITATION,get title(){return a.ag.get("web-player.blend.group-invite.header")},get subtitle(){return a.ag.get("web-player.blend.duo-invite.description")},get button_text(){return a.ag.get("web-player.blend.invite.button-title")},footnote:null,members:[],recipient:null,members_title:null,playlist_uri:null},E=()=>{const e=(0,b.i)(),{ref:t,breakpoint:i}=(0,h.j)(),{user:u}=(0,l.v9)(s.Gg),E=u?.uri?(0,d.C)(u?.uri):"",p=(e=>({...g,members:[e],footnote:a.ag.get("web-player.blend.group-invite.warning")}))({name:u?.display_name||"",username:E,image_url:(0,c.X)(u?.images)?.url||null,hash:""});return u?(0,v.jsxs)(n.Suspense,{fallback:null,children:[(0,v.jsx)(o.$,{children:a.ag.get("web-player.blend.invite.page-title")}),(0,v.jsx)(r.ZU.Provider,{value:i,children:(0,v.jsx)(m.H,{invitation:p,callToActionClicked:e,breakpointEltRef:t})})]}):(0,v.jsx)(x.Z,{})}},4802:(e,t,i)=>{i.r(t),i.d(t,{default:()=>W});var n=i(59496),l=i(61740),a=i(89605),o=i(82108),s=i(36482),r=i(36844),d=i(50346),c=i(3802),u=i(17652),h=i(41836),b=i(54186),m=i(37912),x=i(77468),v=i(14874),g=i(91e3),E=i(4637);const p=({invitation:e,callToActionClicked:t,breakpointEltRef:i})=>(0,E.jsxs)("div",{className:g.Z.container,"data-testid":v.Eh,ref:i,children:[(0,E.jsx)(m.Z,{iconSize:64}),(0,E.jsx)(x.l,{title:e.title,subtitle:e.subtitle,buttonText:e.button_text,footnote:null,callToActionClicked:t})]});var j=i(91703),w=i(84875),_=i.n(w),f=i(56162),y=i(79410),A=i(54299),I=i(68776),N=i(63120);const T="HKAYWYmxd5Ie8WSi0a4y",D="i52u_T3b50wraodIaORk",k="xakiNVMlUf6geF67FEgy",R="IRhTesoeIiwswlly0Dvg",U="LNJzE17iskXWmfKAzY4U",L="qzBr7X7cdLUhWdk0r8lL",C=({uri:e,imageUrl:t,name:i})=>(0,E.jsx)("li",{children:(0,E.jsx)(A._,{menu:(0,E.jsx)(I.I,{uri:e}),children:(0,E.jsx)(N.Link,{to:e,children:(0,E.jsxs)("div",{className:R,children:[(0,E.jsx)(y.q,{images:[{url:t,width:null,height:null}],label:i,width:32,userIconSize:24,className:U}),(0,E.jsx)(f.D,{variant:"violaBold",className:"standalone-ellipsis-one-line",semanticColor:"textBase",children:i})]})})})}),M=({members:e,headingText:t,className:i})=>(0,E.jsxs)("div",{className:_()(T,i),children:[(0,E.jsx)("div",{children:(0,E.jsx)(f.D,{as:"h4",variant:"minuetBold",semanticColor:"textSubdued",className:D,children:t})}),(0,E.jsx)("ul",{className:k,children:e&&e.map((e=>(0,E.jsx)(C,{imageUrl:e.image_url||"",name:e.name,uri:(0,d.QK)(e.username).toURI()},e.username)))}),(0,E.jsx)("div",{className:L})]}),O=({invitation:e,callToActionClicked:t,breakpointEltRef:i})=>{const n=e.members||[],l=(0,E.jsx)("div",{className:g.Z.userListContainer,"data-testid":v.ab,children:(0,E.jsx)(M,{className:g.Z.userList,headingText:e.members_title,members:n})});return(0,E.jsxs)("div",{className:g.Z.container,ref:i,children:[(0,E.jsx)(j.$,{children:c.ag.get("blend.join.title")}),(0,E.jsx)(x.l,{title:e.title,subtitle:e.subtitle,footnote:e.footnote,body:l,buttonText:e.button_text,callToActionClicked:t})]})};var S=i(55915),Z=i(33209),P=i(99891),Y=i(6438),V=i(82097),B=i(25899),G=i(70175);const z=({invitationId:e})=>{const t=(0,a.s0)(),i=(0,r.W6)(h.c$),{data:l,error:o,loading:m}=(0,u.J)(P.oN,[e]),j=(0,V.i)(),w=function(e){const t=(0,G.k)(),i=(0,a.s0)();return async()=>{try{const t=await(0,P.nW)(B.b.getInstance(),e),n=(0,d.EC)(t?.body.playlist_uri).toURLPath(!0);if(!n)throw new Error("unable to join");i(n,{replace:!0})}catch{t(c.ag.get("error.request-playlist-failure"))}}}(e),{ref:_,breakpoint:f}=(0,Y.j)();(0,n.useEffect)((()=>{if(l?.body.page_type===P.V3.ALREADY_JOINED){const e=(0,d.EC)(l?.body.playlist_uri)?.toURLPath(!0);e&&t(e,{replace:!0})}}),[l?.body.page_type,l?.body.playlist_uri,t]);const y=null===l||!l.body;if(y||m||o)return(0,E.jsx)(Z.h,{timeoutInMs:1e3,hasError:!!o||!m&&y,errorMessage:c.ag.get("error.generic")});const A=l?.body.members?.length||0,I=i===h.rS.TWO_USER;switch(l?.body.page_type){case P.V3.DELETED:return(0,E.jsx)(b.ZU.Provider,{value:f,children:(0,E.jsxs)("div",{className:g.Z.container,ref:_,"data-testid":v.e0,children:[(0,E.jsx)(s.F,{iconSize:64}),(0,E.jsx)(x.l,{title:l.body.title,subtitle:l.body.subtitle,buttonText:l.body.button_text,footnote:l.body.footnote,callToActionClicked:j})]})});case P.V3.ALREADY_JOINED:return(0,E.jsx)(Z.h,{hasError:!1,errorMessage:c.ag.get("error.request-playlist-failure")});case P.V3.READY_TO_JOIN_EMPTY_BLEND:return(0,E.jsx)(b.ZU.Provider,{value:f,children:(0,E.jsx)(S.H,{invitation:l.body,breakpointEltRef:_,callToActionClicked:w})});case P.V3.READY_TO_JOIN_ALREADY_CREATED_BLEND:return I&&A>=2?(0,E.jsx)(b.ZU.Provider,{value:f,children:(0,E.jsx)(p,{invitation:{...l.body,title:c.ag.get("blend.link-invialid.header"),subtitle:c.ag.get("blend.link-invalid.subtitle"),button_text:c.ag.get("blend.invite.button-title")},callToActionClicked:j,breakpointEltRef:_})}):(0,E.jsx)(b.ZU.Provider,{value:f,children:(0,E.jsx)(O,{invitation:l.body,callToActionClicked:w,breakpointEltRef:_})});case P.V3.MAX_MEMBERS:return(0,E.jsx)(b.ZU.Provider,{value:f,children:(0,E.jsx)(p,{invitation:l.body,callToActionClicked:j,breakpointEltRef:_})});case P.V3.PENDING_INVITATION:return(0,E.jsx)(b.ZU.Provider,{value:f,children:(0,E.jsx)(S.H,{invitation:l.body,callToActionClicked:j,breakpointEltRef:_})});default:return(0,E.jsx)(Z.h,{timeoutInMs:1e3,hasError:!0,errorMessage:c.ag.get("error.generic")})}};var X=i(83092);const J=({invitationId:e})=>{const{user:t}=(0,l.v9)(o.Gg);return t?(0,E.jsx)(n.Suspense,{fallback:null,children:(0,E.jsx)(z,{invitationId:e})}):(0,E.jsx)(X.Z,{})},W=(0,n.memo)((()=>{const{invitationId:e=""}=(0,a.UO)();return(0,E.jsx)(J,{invitationId:e})}))},91e3:(e,t,i)=>{i.d(t,{Z:()=>n});const n={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",container:"yMoj4jXSudxZ6BkKxV2E",TwoUsers:"IDgUCqAbkRah6OFywv1q",subtitle:"qmKxO5qV4XmVYfpFpaDA",facepile:"nWMdWl40O8K7HQT8Tagc",title:"csRAeNipsu1camQTMiIU",button:"nxFBywAeAI8Zk2fav3Yj",userList:"lxPLQIPb1VSV3VL18Ke3",userListContainer:"BzMKhmywgyIt6IUjcTGW",note:"DSdKNusLgsMX_iicYCU2"}}}]);
//# sourceMappingURL=xpui-routes-blend.js.map