"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[6309],{5334:(e,t,a)=>{a.d(t,{n:()=>R});var r=a(59496),s=a(84875),n=a.n(s),i=a(89605),l=a(56162),o=a(16004),c=a(77675),u=a(3802),d=a(85830),m=a(21524),g=a(22345);var p=a(59200),A=a(1996),h=a(99308);const f="main-topBar-contentArea",x="queue-tabBar-headerIsCentered",E="queue-tabBar-headerItem",C="queue-tabBar-moreButton",y="queue-tabBar-moreButtonActive",b="yxf_6IsQEmHjijEBUMTP",L="queue-tabBar-active",j="queue-tabBar-headerItemLink",T="queue-tabBar-header",S="queue-tabBar-chevron";var D=a(4637);const I=({items:e,activeItemId:t})=>(0,D.jsx)(A.v,{children:e.map((e=>e.disabled?(0,D.jsx)(h.s,{disabled:!0,role:"menuitemradio",className:b,onClick:e.handleClick,children:e.title},e.uri):(0,D.jsx)(h.s,{role:"menuitemradio",to:e.to,end:!0,"aria-checked":e.itemId===t,className:({isActive:e})=>n()(b,{[L]:e}),onClick:e.handleClick,children:e.title},e.uri)))});var _=a(40495);const R=(0,r.memo)((function({isCentered:e,links:t,landmarkLabel:a,className:s}){const A=(0,r.useRef)(null),[h,b]=(0,r.useState)([]),[R,k]=(0,r.useState)(0),[v,O]=(0,r.useState)([]),P=function(){const[e,t]=(0,r.useState)(window.innerWidth),{scrollNodeChildRef:a}=(0,r.useContext)(m.VX),s=(0,d.y1)((e=>{e?.width&&t(e.width)}),250);return(0,g.y)({refOrElement:a,observeOnly:"width",onResize:s}),e}()??1/0,{pathname:B}=(0,i.TH)(),N=t.find((e=>e.to===B));return(0,r.useEffect)((()=>{A.current&&k(A.current.clientWidth)}),[P]),(0,r.useEffect)((()=>{if(!A.current)return;const e=Array.from(A.current.children).map((e=>e.clientWidth));b(e)}),[t]),(0,r.useEffect)((()=>{if(!A.current)return;if(h.slice(0,-1).reduce(((e,t)=>e+t),0)<=R)return void O([]);const e=h.reduce(((e,t)=>e>t?e:t),0),t=[];let a=e;h.forEach(((e,r)=>{R>=a+e?a+=e:t.push(r)})),O(t)}),[R,h]),(0,D.jsx)("nav",{className:n()(s,f),"aria-label":a,children:(0,D.jsxs)("ul",{className:e?x:T,ref:A,children:[t.filter(((e,t)=>!v.includes(t))).map((e=>{const t=e?.render??(e=>e);return(0,D.jsx)(r.Fragment,{children:t((0,D.jsx)("li",{className:E,children:e.disabled?(0,D.jsx)("div",{className:j,children:(0,D.jsx)(l.D,{variant:"mestoBold",children:e.title})}):(0,D.jsx)(_.O,{end:!0,className:({isActive:e})=>n()(j,{[L]:e}),to:e.to,onClick:e.handleClick,children:(0,D.jsx)(l.D,{variant:"mestoBold",children:e.title})})}))},e.to)})),v.length||0===h.length?(0,D.jsx)("li",{className:E,children:(0,D.jsx)(p.xV,{renderInline:!0,menu:(0,D.jsx)(I,{items:t.filter(((e,t)=>v.includes(t))),activeItemId:N?.itemId}),children:(e,t,a)=>(0,D.jsxs)("button",{className:n()(C,{[y]:N}),type:"button",onClick:t,ref:a,children:[(0,D.jsx)(l.D,{variant:"mestoBold",children:N?N.title:u.ag.get("more")}),e?(0,D.jsx)(o.U,{iconSize:16,className:S,"aria-hidden":"true"}):(0,D.jsx)(c.i,{iconSize:16,className:S,"aria-hidden":"true"})]})})}):null]})})}))},19541:(e,t,a)=>{a.d(t,{$:()=>o,Q:()=>l});var r=a(59496),s=a(92141),n=a(4332),i=a(4637);const l=(0,r.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:n.oT.ADDED_AT}),o=r.memo((function({uri:e,children:t,defaultSortOption:a}){return(0,i.jsx)(s.r,{uri:e,defaultState:a,sortContext:l,children:t})}))},4332:(e,t,a)=>{a.d(t,{Aq:()=>d,Bf:()=>D,EY:()=>f,G5:()=>C,JV:()=>I,MY:()=>o,Ru:()=>c,ZP:()=>x,a6:()=>A,aY:()=>j,e3:()=>p,ei:()=>l,o$:()=>m,oT:()=>i,pT:()=>L,rJ:()=>S,u3:()=>T,w0:()=>y});var r=a(3802),s=a(87843),n=a(54455);let i=function(e){return e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER",e}({});const l={"show-alphabetical":i.SHOW_ALPHABETICAL,"book-alphabetical":i.BOOK_ALPHABETICAL,"episode-alphabetical":i.EPISODE_ALPHABETICAL,"playlist-alphabetical":i.PLAYLIST_ALPHABETICAL,"album-alphabetical":i.ALBUM_ALPHABETICAL,"recently-added":i.ADDED_AT,"creator-name":i.CREATOR_NAME,"creator-name-alphabetical":i.CREATOR_NAME_ALPHABETICAL,"album-creator-name":i.ALBUM_CREATOR_NAME,"recently-played":i.RECENTLY_PLAYED,"playlist-most-relevant":i.MOST_RELEVANT,"playlist-custom-order":i.CUSTOM_ORDER},o={[i.RECENTLY_PLAYED]:{key:"recently-played",get value(){return r.ag.get("collection.sort.recently-played")}},[i.ADDED_AT]:{key:"recently-added",get value(){return r.ag.get("collection.sort.recently-added")}},[i.SHOW_ALPHABETICAL]:{key:"show-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[i.BOOK_ALPHABETICAL]:{key:"book-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[i.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[i.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[i.ALBUM_CREATOR_NAME]:{key:"album-creator-name",get value(){return r.ag.get("collection.sort.creator")}},[i.CREATOR_NAME]:{key:"creator-name",get value(){return r.ag.get("collection.sort.creator")}},[i.CREATOR_NAME_ALPHABETICAL]:{key:"creator-name-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[i.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[i.MOST_RELEVANT]:{key:"playlist-most-relevant",get value(){return r.ag.get("collection.sort.most-relevant")}},[i.CUSTOM_ORDER]:{key:"playlist-custom-order",get value(){return r.ag.get("collection.sort.custom-order")}}},c=[i.ADDED_AT,i.ALBUM_ALPHABETICAL,i.CREATOR_NAME],u={[i.ADDED_AT]:{field:s.lY.ADDED_AT,order:s.As.DESC},[i.ALBUM_ALPHABETICAL]:{field:s.lY.NAME,order:s.As.ASC},[i.CREATOR_NAME]:{field:s.lY.ARTIST_NAME,order:s.As.ASC}};const d=e=>{if(function(e){return c.includes(e)}(e))return u[e]},m=[i.ADDED_AT,i.CREATOR_NAME_ALPHABETICAL],g={[i.ADDED_AT]:{field:s.hx.ADDED_AT,order:s.As.DESC},[i.CREATOR_NAME_ALPHABETICAL]:{field:s.hx.NAME,order:s.As.ASC}};const p=e=>{if(function(e){return m.includes(e)}(e))return g[e]},A=[i.ADDED_AT,i.SHOW_ALPHABETICAL],h={[i.ADDED_AT]:{field:s.aW.ADDED_AT,order:s.As.DESC},[i.SHOW_ALPHABETICAL]:{field:s.aW.NAME,order:s.As.ASC}};const f=e=>{if(function(e){return A.includes(e)}(e))return h[e]},x=[i.ADDED_AT,i.BOOK_ALPHABETICAL],E={[i.ADDED_AT]:s.VN.ADDED_AT,[i.BOOK_ALPHABETICAL]:s.VN.NAME};const C=e=>{if(function(e){return x.includes(e)}(e))return E[e]},y=[i.MOST_RELEVANT,i.RECENTLY_PLAYED,i.ADDED_AT,i.PLAYLIST_ALPHABETICAL,i.CUSTOM_ORDER],b={[i.ADDED_AT]:{field:n.bD.ADDED_AT,order:n.As.DESC},[i.RECENTLY_PLAYED]:{field:n.bD.RECENTLY_PLAYED,order:n.As.ASC},[i.PLAYLIST_ALPHABETICAL]:{field:n.bD.NAME,order:n.As.ASC},[i.MOST_RELEVANT]:{field:n.bD.RELEVANCE,order:n.As.DESC},[i.CUSTOM_ORDER]:void 0};const L=e=>{if(function(e){return y.includes(e)}(e))return b[e]},j=i.ADDED_AT,T=i.ADDED_AT,S=i.ADDED_AT,D=i.MOST_RELEVANT,I=i.ADDED_AT},76398:(e,t,a)=>{a.d(t,{h:()=>g});var r=a(59496),s=a(8930),n=a(94254),i=a(96170),l=a(29753),o=a(19541),c=a(4332),u=a(4637);const d=r.memo((function({sortOptions:e,onSort:t}){const{sortState:a,setSortState:s}=(0,r.useContext)(o.Q),n=(0,r.useCallback)((e=>{const a=c.ei[e];t?.(a),s(a)}),[t,s]),i=e.map((e=>c.MY[e])),d=c.MY[a];return(0,u.jsx)(l.A,{options:i,onSelect:n,selected:d})})),m="collection-searchBar-searchBar",g=r.memo((function({canSort:e,canFilter:t,filterPlaceholder:a,sortOptions:l}){const{spec:o,logger:c}=(0,i.fU)(s.createDesktopSearchBarEventFactory,{}),g=(0,r.useCallback)((()=>{c.logInteraction(o.filterFieldFactory().keyStrokeFilter())}),[c,o]),p=(0,r.useCallback)((()=>{c.logInteraction(o.filterFieldFactory().hitClearFilter())}),[c,o]),A=(0,r.useCallback)((()=>{c.logInteraction(o.sortButtonFactory().hitSort())}),[c,o]);return(0,u.jsxs)("div",{className:m,children:[t?(0,u.jsx)(r.Suspense,{fallback:null,children:(0,u.jsx)(n.K,{placeholder:a,onFilter:g,onClear:p})}):null,e?(0,u.jsx)(d,{sortOptions:l,onSort:A}):null]})}))},56924:(e,t,a)=>{a.d(t,{$:()=>r.$,Q:()=>r.Q});var r=a(19541)},2748:(e,t,a)=>{a.d(t,{Aq:()=>r.Aq,Bf:()=>r.Bf,EY:()=>r.EY,G5:()=>r.G5,JV:()=>r.JV,Ru:()=>r.Ru,ZP:()=>r.ZP,a6:()=>r.a6,aY:()=>r.aY,e3:()=>r.e3,o$:()=>r.o$,oT:()=>r.oT,pT:()=>r.pT,rJ:()=>r.rJ,u3:()=>r.u3,w0:()=>r.w0});var r=a(4332)},3465:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ve});var r=a(59496),s=a(61740),n=a(89605),i=a(36844),l=a(47792),o=a(3802),c=a(91703),u=a(28133),d=a(41836),m=a(30985),g=a(56162),p=a(72568),A=a(28604),h=a(84875),f=a.n(h),x=a(98040),E=a(21524),C=a(40115),y=a(24952),b=a(96768),L=a(4637);const j=(0,r.memo)((function({index:e}){return(0,L.jsx)(y.C,{index:e,headerText:"",uri:"",renderCardImage:()=>(0,L.jsx)(b.x,{images:[]}),featureIdentifier:"unknown"})})),T={delayedVisibility:"lA3jnNwnLc3CoYKT06Vz"};function S({renderCard:e,nrCards:t,fetchData:a,limit:s=50,cardGridApiRef:n}){const{scrollNodeRef:i}=(0,r.useContext)(E.VX),{getItems:l,nrValidItems:o,invalidateCache:c,hasItems:u}=(0,C.Q)({nrItems:t,fetch:a,limit:s});(0,r.useImperativeHandle)(n,(()=>({update:()=>c()})));return(0,L.jsx)("div",{className:f()({[T.delayedVisibility]:!u}),children:(0,L.jsx)(x.u,{renderItems:(t,a,r)=>l(t,a).map(((a,s)=>(a?e(a,t+s,r):null)??(0,L.jsx)(j,{index:s},t+s))),scrollNodeRef:i,nrItems:o,estimatedItemMaxHeight:250})})}var D=a(96652),I=a(33209),_=a(66806),R=a(4183),k=a(98340),v=a(46164),O=a(96170),P=a(36472),B=a(79041);const N={offset:0,limit:1},w=()=>{const e=(0,r.useContext)(v.H);return(e=>{const[t,a]=(0,r.useState)(null),s=(0,r.useCallback)((async()=>{if(!e)return;const t=await e();a(t?.totalLength||0)}),[e]);return(0,r.useEffect)((()=>{null===t&&s()}),[t,s]),{total:t}})((0,r.useCallback)((()=>e?e?.getShows(N):Promise.resolve({totalLength:0})),[e]))},M=()=>{const e=(0,r.useContext)(v.H),[t,a]=(0,r.useState)(null),s=(0,r.useCallback)((async()=>{if(!e)return;const t=await(e?.getBooks(N));a(t?.totalLength||0)}),[e]);return(0,r.useEffect)((()=>{null===t&&s()}),[t,s]),(0,B.b)(P.EW.UPDATE,s),{total:t}};var Y=a(76398),H=a(56924),U=a(2748),F=a(92880);const W=r.memo((function({nrAlbums:e}){const t=(0,r.useContext)(v.H),{filter:a}=(0,r.useContext)(_.fo),{sortState:s}=(0,r.useContext)(H.Q),n=(0,r.useRef)(null),{spec:i,UBIFragment:c}=(0,O.fU)(p.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:albums",identifier:l.Wg.YOURLIBRARY_ALBUMS}}),u=(0,r.useMemo)((()=>i.headerFactory()),[i]),d=(0,r.useCallback)((async(e,r)=>{const n=await t.getAlbums({offset:e,limit:r,filter:a,sort:(0,U.Aq)(s)});return{items:n.items,totalLength:n.totalLength}}),[t,a,s]),m=(0,r.useCallback)(((e,t)=>(0,L.jsx)(k.ZP,{value:"card",index:t,children:(0,L.jsx)(A.r,{index:t,uri:e.uri,name:e.name,images:e.images,artists:e.artists,sharingInfo:e.sharingInfo})},e.uri)),[]);return(0,L.jsxs)(c,{spec:i,children:[(0,L.jsx)(c,{spec:u,children:(0,L.jsxs)("div",{className:F.Z.header,children:[(0,L.jsx)(g.D,{as:"h1",variant:"canon",children:o.ag.get("albums")}),(0,L.jsx)(r.Suspense,{fallback:null,children:(0,L.jsx)(Y.h,{canSort:t.getCapabilities().canSort,canFilter:t.getCapabilities().canFilter,filterPlaceholder:o.ag.get("collection.filter.albums"),sortOptions:U.Ru})})]})}),(0,L.jsx)(S,{nrCards:e,renderCard:m,fetchData:d,cardGridApiRef:n})]})})),V=r.memo((function(){const{total:e}=(()=>{const e=(0,r.useContext)(v.H),[t,a]=(0,r.useState)(null),s=(0,r.useCallback)((async()=>{if(!e)return;const t=await(e?.getAlbums(N));a(t?.totalLength||0)}),[e]);return(0,r.useEffect)((()=>{null===t&&s()}),[t,s]),(0,B.b)(P.EW.UPDATE,s),{total:t}})();return null===e?(0,L.jsx)(I.h,{hasError:!1,errorMessage:o.ag.get("error.request-collection-albums-failure")}):e?(0,L.jsx)(W,{nrAlbums:e}):(0,L.jsx)(D.u,{linkTo:"/search",linkTitle:o.ag.get("collection.empty-page.albums-cta"),message:o.ag.get("collection.empty-page.albums-subtitle"),title:o.ag.get("collection.empty-page.albums-title"),children:(0,L.jsx)(R.t,{type:"album"})})})),Z=r.memo((function(){return(0,L.jsx)(H.$,{uri:"collection/albums",defaultSortOption:U.aY,children:(0,L.jsx)(_.hz,{uri:"collection/albums",children:(0,L.jsx)(V,{})})})}));var G=a(79823);const K=r.memo((function({nrArtists:e}){const t=(0,r.useContext)(v.H),{filter:a}=(0,r.useContext)(_.fo),{sortState:s}=(0,r.useContext)(H.Q),n=(0,r.useRef)(null),{spec:i,UBIFragment:c}=(0,O.fU)(p.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:artists",identifier:l.Wg.YOURLIBRARY_ARTISTS}}),u=(0,r.useMemo)((()=>i.headerFactory()),[i]),d=(0,r.useCallback)((async(e,r)=>{const n=await t.getArtists({offset:e,limit:r,filter:a,sort:(0,U.e3)(s)});return{items:n.items,totalLength:n.totalLength}}),[t,a,s]),m=(0,r.useCallback)(((e,t)=>(0,L.jsx)(k.ZP,{value:"card",index:t,children:(0,L.jsx)(G.I,{index:t,name:e.name,uri:e.uri,images:e.images})},e.uri)),[]);return(0,r.useEffect)((()=>{n.current&&n.current.update()}),[s,a,e]),(0,L.jsxs)(c,{spec:i,children:[(0,L.jsx)(c,{spec:u,children:(0,L.jsxs)("div",{className:F.Z.header,children:[(0,L.jsx)(g.D,{as:"h1",variant:"canon",children:o.ag.get("artists")}),(0,L.jsx)(r.Suspense,{fallback:null,children:(0,L.jsx)(Y.h,{canSort:t.getCapabilities().canSort,canFilter:t.getCapabilities().canFilter,filterPlaceholder:o.ag.get("collection.filter.artists"),sortOptions:U.o$})})]})}),(0,L.jsx)(S,{nrCards:e,renderCard:m,fetchData:d,cardGridApiRef:n})]})})),Q=r.memo((function(){const{total:e}=(()=>{const e=(0,r.useContext)(v.H),[t,a]=(0,r.useState)(null),s=(0,r.useCallback)((async()=>{if(!e)return;const t=await(e?.getArtists(N));a(t?.totalLength||0)}),[e]);return(0,r.useEffect)((()=>{null===t&&s()}),[t,s]),(0,B.b)(P.EW.UPDATE,s),{total:t}})();return null===e?(0,L.jsx)(I.h,{hasError:!1,errorMessage:o.ag.get("error.request-collection-artists-failure")}):e>0?(0,L.jsx)(K,{nrArtists:e}):(0,L.jsx)(D.u,{message:o.ag.get("collection.empty-page.artists-subtitle"),title:o.ag.get("collection.empty-page.artists-title"),linkTo:"/search",linkTitle:o.ag.get("collection.empty-page.artists-cta"),children:(0,L.jsx)(R.t,{type:"artist"})})})),J=r.memo((function(){return(0,L.jsx)(H.$,{uri:"collection/artists",defaultSortOption:U.u3,children:(0,L.jsx)(_.hz,{uri:"collection/artists",children:(0,L.jsx)(Q,{})})})}));var q=a(54521);const z=r.memo((function({nrBooks:e}){const t=(0,r.useContext)(v.H),{filter:a}=(0,r.useContext)(_.fo),{sortState:s}=(0,r.useContext)(H.Q),{spec:n,UBIFragment:i}=(0,O.fU)(p.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:audiobooks",identifier:l.Wg.YOURLIBRARY_AUDIOBOOKS}}),c=(0,r.useMemo)((()=>n.headerFactory()),[n]),u=(0,r.useRef)(null),d=(0,r.useCallback)((async(e,r)=>{const n=await t.getBooks({offset:e,limit:r,filter:a,sort:(0,U.G5)(s)});return{items:n.items.map((e=>(e=>""===e.authorName&&""===e.name)(e)?null:e)),totalLength:n.totalLength}}),[t,a,s]),m=(0,r.useCallback)(((e,t)=>(0,L.jsx)(k.ZP,{value:"card",index:t,children:(0,L.jsx)(q.c,{index:t,uri:e.uri,name:e.name,images:e.images,authorName:e.authorName,isLocked:e.isLocked})},e.uri)),[]);return(0,L.jsxs)(i,{spec:n,children:[(0,L.jsx)(i,{spec:c,children:(0,L.jsxs)("div",{className:F.Z.header,children:[(0,L.jsx)(g.D,{as:"h1",variant:"canon",children:o.ag.get("search.title.audiobooks")}),(0,L.jsx)(Y.h,{canSort:t.getCapabilities().canSort,canFilter:t.getCapabilities().canFilter,filterPlaceholder:"Search in Audiobooks",sortOptions:U.ZP})]})}),(0,L.jsx)(S,{nrCards:e,renderCard:m,fetchData:d,cardGridApiRef:u})]})})),$=r.memo((function(){const{total:e}=M();return null===e?(0,L.jsx)(I.h,{hasError:!1,errorMessage:o.ag.get("error.request-collection-albums-failure")}):e>0?(0,L.jsx)(z,{nrBooks:e}):(0,L.jsx)(D.u,{linkTo:"/search",linkTitle:o.ag.get("collection.empty-page.books-cta"),message:o.ag.get("collection.empty-page.books-subtitle"),title:o.ag.get("collection.empty-page.books-title"),children:(0,L.jsx)(R.t,{type:"book"})})})),X=r.memo((function(){return(0,L.jsx)(H.$,{uri:"collection/books",defaultSortOption:U.JV,children:(0,L.jsx)(_.hz,{uri:"collection/books",children:(0,L.jsx)($,{})})})}));var ee=a(75523),te=a(40408),ae=a(35638),re=a(13973),se=a(22981),ne=a(28170),ie=a(79923),le=a(82108),oe=a(11685),ce=a(39097),ue=a(85839),de=a(9374),me=a(29251),ge=a(81736),pe=a(74150),Ae=a(60941);const he={container:"collection-collectionEntityHeroCard-likedSongs",likedSongs:"collection-collectionEntityHeroCard-container",yourEpisodes:"collection-collectionEntityHeroCard-yourEpisodes",headerContainer:"collection-collectionEntityHeroCard-headerContainer",tracksContainer:"collection-collectionEntityHeroCard-tracksContainer",skeletonRow:"collection-collectionEntityHeroCard-skeletonRow",descriptionContainer:"collection-collectionEntityHeroCard-descriptionContainer",opacityText:"collection-collectionEntityHeroCard-opacityText",moreText:"collection-collectionEntityHeroCard-moreText"};function fe(e,t){return Array.from(new Array(e).keys()).map((e=>(0,L.jsx)(Ae.C,{as:"div",className:he.skeletonRow,charCount:t,isLoading:!0},e)))}const xe=({index:e,onClick:t})=>{const a=(0,pe.MY)({limit:7}),{user:r}=(0,s.v9)(le.Gg),n=(0,ie.I2)(r?.id);return n?(0,L.jsx)(ge.Z,{index:e,className:f()(he.container,he.likedSongs),onClick:t,headerText:n.name,featureIdentifier:"your_library",uri:n.uri,ariaPlayLabel:o.ag.get("playlist.a11y.play",n.name),ariaPauseLabel:o.ag.get("playlist.a11y.pause",n.name),renderCardImage:()=>{return(0,L.jsx)("div",{className:he.headerContainer,children:(0,L.jsx)("div",{className:he.tracksContainer,children:a?(e=a,e.items.map((({uri:e,name:t,artists:[a]},r)=>(0,L.jsxs)("span",{children:[(0,L.jsx)("span",{className:he.opacityText,children:r?" • ":""}),(0,L.jsx)("span",{dir:"auto",children:a.name}),(0,L.jsx)("span",{dir:"auto",className:he.opacityText,children:t})]},e)))):fe(3)})});var e},renderSubHeaderContent:()=>(0,L.jsx)("div",{className:he.descriptionContainer,children:a?`${a.totalLength} ${n.name}`:fe(1,n.name.length)})}):null},Ee=(e,t,a)=>(0,L.jsx)(k.ZP,{value:"card",index:t,children:a},`${e.uri}`??0),Ce=(e,t,a)=>{switch(e.type){case de.p.LIKED_SONGS:return Ee(e,t,a>1?(0,L.jsx)(xe,{index:t},e.uri):(0,L.jsx)(te.p,{index:t},e.uri));case de.p.YOUR_EPISODES:return Ee(e,t,(0,L.jsx)(se.T,{index:t},e.uri));case de.p.LOCAL_FILES:return Ee(e,t,(0,L.jsx)(ae.P,{index:t},e.uri));case de.p.PLAYLIST:return Ee(e,t,(0,L.jsx)(ee.Z,{index:t,name:e.name,uri:e.uri,images:e.images,description:e.description,authorName:e.owner?.displayName,isPlayable:e.totalLength>0},e.uri));case"placeholder":return Ee(e,t,(0,L.jsx)(ee.Z,{index:t,uri:e.uri,name:"",images:[],description:"",authorName:""},e.uri));case"empty":return(0,L.jsx)(r.Fragment,{},t);case"folder":return null;default:return(0,me._)(e),null}},ye=r.memo((function({nrPlaylists:e,showYourEpisodesCard:t,showLocalFilesCard:a}){const{filter:n}=(0,r.useContext)(_.fo),{sortState:i}=(0,r.useContext)(H.Q),c=(0,r.useContext)(ue.BS),u=(0,r.useRef)(null),d=(0,s.v9)(le.Gg).user,{spec:m,UBIFragment:A}=(0,O.fU)(p.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:playlists",identifier:l.Wg.YOURLIBRARY_PLAYLISTS}}),h=(0,r.useMemo)((()=>m.headerFactory()),[m]),f=(0,r.useMemo)((()=>{const e=[];if(n)return e;const r=(0,ie.I2)(d?.id);r&&(e.push(r),e.push({uri:"",type:"empty"}));const s=t?(0,ie.bl)(d?.id):null;s&&e.push(s);const i=a?(0,ie.gB)():null;return i&&e.push(i),e}),[n,a,t,d]),x=(0,r.useCallback)((()=>{u?.current&&u.current.update()}),[u]);(0,ue.iu)(x);const E=(0,r.useCallback)((async(e,t)=>{const a=f.slice(e),r=e-(f.length-a.length),s=await c.getContents({offset:r,limit:t,filter:n,sort:(0,U.pT)(i),flatten:!0,decorateImagesAndOwner:!0}),l=s.items.map((e=>"placeholder"===e.type?null:e));return{items:[...a,...l],totalLength:s.totalItemCount+f.length}}),[f,c,n,i]);return(0,L.jsxs)(A,{spec:m,children:[(0,L.jsx)(A,{spec:h,children:(0,L.jsxs)("div",{className:F.Z.header,children:[(0,L.jsx)(g.D,{as:"h1",variant:"canon",children:o.ag.get("playlists")}),(0,L.jsx)(r.Suspense,{fallback:null,children:(0,L.jsx)(Y.h,{canSort:c.getCapabilities().canSort,canFilter:c.getCapabilities().canFilter,filterPlaceholder:o.ag.get("collection.filter.playlists"),sortOptions:U.w0})})]})}),(0,L.jsx)(S,{nrCards:e+f.length,renderCard:Ce,fetchData:E,cardGridApiRef:u})]})})),be=r.memo((function(){const e=(0,ue.Rt)(),t=(0,re.x)(),a=(0,oe.u)(),{createPlaylist:s}=(0,ne.K)(),n=(0,ce.I)(),i=(0,r.useCallback)((()=>{s()}),[s]);return null===e||null===t?(0,L.jsx)(I.h,{hasError:!1,errorMessage:o.ag.get("error.request-collection-albums-failure")}):e?.playlistCount?(0,L.jsx)(ye,{nrPlaylists:e.playlistCount,showYourEpisodesCard:t.totalLength>0,showLocalFilesCard:a.canFetchAllTracks&&n}):(0,L.jsx)(D.u,{linkTitle:o.ag.get("collection.empty-page.playlists-cta"),onClick:i,title:o.ag.get("collection.empty-page.playlists-title"),message:o.ag.get("collection.empty-page.playlists-subtitle"),children:(0,L.jsx)(R.t,{type:"playlist"})})})),Le=r.memo((function(){return(0,L.jsx)(H.$,{uri:"collection/playlists",defaultSortOption:U.Bf,children:(0,L.jsx)(_.hz,{uri:"collection/playlists",children:(0,L.jsx)(be,{})})})}));var je=a(58089),Te=a(86643),Se=a(26849),De=a(12741),Ie=a(48203);const _e=()=>{const e="ginger-audio-shows-top-20-web",{view:t}=(0,Te.P)(e);if(!t)return null;const{content:a,name:r}=t,{total:s=0,items:n}=a;return(0,L.jsx)(Ie.P,{title:r,total:s,seeAllUri:(0,Se.p)(e),children:n.filter((e=>"show"===e.type)).map(((e,t)=>(0,L.jsx)(je._,{name:e.name,uri:e.uri,images:e.images,publisher:e.publisher,mediaType:{audio:De.E.AUDIO,video:De.E.VIDEO,mixed:De.E.MIXED}[e.media_type]??De.E.AUDIO,sharingInfo:null,index:t},e.uri)))})};var Re=a(19995),ke=a(59447),ve=a(63787);function Oe(e,t){return Array.from(new Array(e).keys()).map((e=>(0,L.jsx)(Ae.C,{as:"div",className:he.skeletonRow,charCount:t,isLoading:!0},e)))}const Pe=({index:e})=>{const t=(0,pe.j$)({limit:7}),{user:a}=(0,s.v9)(le.Gg),r=(0,ie.bl)(a?.id);return r?(0,L.jsx)(ge.Z,{index:e,className:f()(he.container,he.yourEpisodes),headerText:r.name,featureIdentifier:"your_library",uri:r.uri,ariaPlayLabel:o.ag.get("playlist.a11y.play",r.name),ariaPauseLabel:o.ag.get("playlist.a11y.pause",r.name),renderCardImage:()=>{return(0,L.jsx)("div",{className:he.headerContainer,children:(0,L.jsx)("div",{className:he.tracksContainer,children:t?(e=t,e.items.map((({uri:e,name:t,show:a},r)=>(0,L.jsxs)("span",{children:[(0,L.jsx)("span",{className:he.opacityText,children:r?" • ":""}),(0,L.jsx)("span",{dir:"auto",children:t}),a&&(0,L.jsx)("span",{dir:"auto",className:he.opacityText,children:a.name})]},e)))):Oe(3)})});var e},renderSubHeaderContent:()=>(0,L.jsx)("div",{className:he.descriptionContainer,children:t?o.ag.get("tracklist-header.episodes-counter",t.totalLength):Oe(1,r.name.length)})}):null},Be=r.memo((function({nrShows:e}){const t=(0,r.useContext)(v.H),{filter:a}=(0,r.useContext)(_.fo),{sortState:n}=(0,r.useContext)(H.Q),i=(0,r.useRef)(!1),c=(0,r.useRef)({entities:[],total:e}),[u,d]=(0,r.useState)(0),{user:m}=(0,s.v9)(le.Gg),{spec:A,UBIFragment:h}=(0,O.fU)(p.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:podcasts",identifier:l.Wg.YOURLIBRARY_SHOWS}}),f=(0,r.useMemo)((()=>A.headerFactory()),[A]),x=(0,r.useCallback)((async(e,r,s=!1)=>{if(!i.current){i.current=!s;const l=await t.getShows({offset:e,limit:r,filter:a,sort:(0,U.EY)(n)});c.current=function(e,t,a){const r={...a};return r.entities=t?e.items||[]:r.entities.concat(e.items||[]),r.total=e.totalLength,r}(l,s,c.current),i.current=!1,d((e=>e+1))}}),[t,a,n,c]),E=(0,r.useCallback)((e=>{c.current=function(e,t){const a={...t},r=t.entities.filter((t=>t.uri!==e));return a.total=(t.total||0)-(t.entities.length-r.length),a.entities=r,a}(e,c.current),d((e=>e+1))}),[]);(0,r.useEffect)((()=>{x(0,50,!!u)}),[a,n]);const C=(0,r.useCallback)((()=>{c.current.entities.length!==c.current.total&&x(c.current.entities.length,50)}),[x,c]);return(0,L.jsx)(h,{spec:A,children:(0,L.jsxs)(ke.C,{onReachBottom:C,children:[(0,L.jsx)(h,{spec:f,children:(0,L.jsxs)("div",{className:F.Z.header,children:[(0,L.jsx)(g.D,{as:"h1",variant:"canon",children:o.ag.get("podcasts")}),(0,L.jsx)(r.Suspense,{fallback:null,children:(0,L.jsx)(Y.h,{canSort:t.getCapabilities().canSort,canFilter:t.getCapabilities().canFilter,filterPlaceholder:o.ag.get("collection.filter.podcasts"),sortOptions:U.a6})})]})}),(0,L.jsx)(ve.r,{onLibraryItemRemove:E,children:(0,L.jsx)(k.ZP,{value:"EntitiesGrid",children:(0,L.jsx)(Re.T,{render:()=>{const e=(0,ie.bl)(m?.id),t=a||!e||0===c.current.entities.length?[]:[(0,L.jsx)(r.Suspense,{fallback:null,children:(0,L.jsx)(Pe,{index:0})},"your-episodes-card")],s=t.length>0;return t.concat(c.current.entities.map(((e,t)=>{const a=s?t+1:t;return(0,L.jsx)(k.ZP,{value:"card",index:a,children:(0,L.jsx)(je._,{index:a,name:e.name,uri:e.uri,images:e.images,publisher:e.publisher,sharingInfo:null})},e.uri)})))}})})})]})})})),Ne=r.memo((function(){const{total:e}=w(),{productState:t}=(0,s.v9)(le.Gg),a=!!t&&parseInt(t.ads,10)>0;return null===e?(0,L.jsx)(I.h,{hasError:!1,errorMessage:o.ag.get("error.request-collection-shows-failure")}):e?(0,L.jsx)(Be,{nrShows:e}):(0,L.jsxs)("div",{className:f()(F.Z.emptyStateContainer,{[F.Z.adBarEnabled]:a}),children:[(0,L.jsx)(D.u,{linkTo:"/genre/podcasts-web",linkTitle:o.ag.get("collection.empty-page.shows-cta"),message:o.ag.get("collection.empty-page.shows-subtitle"),title:o.ag.get("collection.empty-page.shows-title"),renderInline:!0,children:(0,L.jsx)(R.t,{type:"show"})}),(0,L.jsx)(_e,{})]})})),we=r.memo((function(){return(0,L.jsx)(H.$,{uri:"collection/podcasts",defaultSortOption:U.rJ,children:(0,L.jsx)(_.hz,{uri:"collection/podcasts",children:(0,L.jsx)(Ne,{})})})}));var Me=a(55122),Ye=a(5334),He=a(91577);const Ue=({isAudiobooksEnabled:e})=>{const t=(0,s.v9)(m.rH),{spec:a,logger:n}=(0,O.fU)(Me.createDesktopLibraryTopbarEventFactory,{}),i=(0,r.useMemo)((()=>[{title:o.ag.get("playlists"),itemId:"collection.tab-playlists",to:"/collection/playlists",uri:"spotify:app:collection:playlists"},...t?[{title:o.ag.get("podcasts"),itemId:"collection.tab-podcasts",to:"/collection/podcasts",uri:"spotify:app:collection:podcasts"}]:[],...e?[{title:o.ag.get("search.title.audiobooks"),itemId:"collection.tab-audiobooks",to:"/collection/audiobooks",uri:"spotify:app:collection:audiobooks"}]:[],{title:o.ag.get("artists"),itemId:"collection.tab-artists",to:"/collection/artists",uri:"spotify:app:collection:artists"},{title:o.ag.get("albums"),itemId:"collection.tab-albums",to:"/collection/albums",uri:"spotify:app:collection:albums"}].map(((e,t)=>{const r=e.uri;return{...e,handleClick:()=>{const e=a.linkFactory({position:t,uri:r}).hitUiNavigate({destination:r});n.logInteraction(e)}}}))),[t,e,n,a]);return(0,L.jsx)(He.w,{children:(0,L.jsx)(Ye.n,{className:F.Z.tabBar,links:i})})};var Fe=a(2106);const We=r.lazy((async()=>await a.e(4246).then(a.bind(a,22908)))),Ve=()=>{const e=(0,s.v9)(m.rH),t=(0,i.W6)(d.uB);(0,u.z)("your_library");const{total:a}=M(),r=!!(a&&a>0);return(0,L.jsxs)("section",{className:"contentSpacing",children:[(0,L.jsx)(c.$,{children:o.ag.get("collection.page-title")}),(0,L.jsxs)(n.Z5,{children:[(0,L.jsx)(n.AW,{path:"artists",element:(0,L.jsx)(Fe.K,{pageId:l.Wg.YOURLIBRARY_ARTISTS,children:(0,L.jsx)(J,{})})}),(0,L.jsx)(n.AW,{path:"albums",element:(0,L.jsx)(Fe.K,{pageId:l.Wg.YOURLIBRARY_ALBUMS,children:(0,L.jsx)(Z,{})})}),(0,L.jsx)(n.AW,{path:"playlists",element:(0,L.jsx)(Fe.K,{pageId:l.Wg.YOURLIBRARY_PLAYLISTS,children:(0,L.jsx)(Le,{})})}),e&&(0,L.jsx)(n.AW,{path:"podcasts",element:(0,L.jsx)(Fe.K,{pageId:l.Wg.YOURLIBRARY_SHOWS,children:(0,L.jsx)(we,{})})}),(t||r)&&(0,L.jsx)(n.AW,{path:"audiobooks",element:(0,L.jsx)(Fe.K,{pageId:l.Wg.YOURLIBRARY_AUDIOBOOKS,children:(0,L.jsx)(X,{})})}),(0,L.jsx)(n.AW,{path:"music-downloads",element:(0,L.jsx)(Fe.K,{pageId:l.Wg.YOURLIBRARY_DOWNLOADS,children:(0,L.jsx)(We,{})})})]}),(0,L.jsx)(Ue,{isAudiobooksEnabled:t||r})]})}},35638:(e,t,a)=>{a.d(t,{P:()=>E});var r=a(59496),s=a(85830),n=a(3802),i=a(24952),l=a(96768),o=a(79923),c=a(39669),u=a(13791),d=a(11685),m=a(89039),g=a(39097),p=a(48607),A=a(30301),h=a(80704),f=a(4637);const x=function({uri:e,name:t,images:a,index:o}){const x=(0,d.u)(),E=(0,r.useRef)(null),C=(0,r.useRef)(!0),y=(0,r.useContext)(m.t),{isPlaying:b}=(0,A.cR)(u.b),{togglePlay:L}=(0,p.n)({uri:u.b,pages:[{items:E.current?.map((e=>({...e,provider:null})))||[]}]},{featureIdentifier:"local_files"});(0,r.useEffect)((()=>(C.current=!0,()=>{C.current=!1})),[]);const j=(0,g.I)(),T=(0,s.y1)((async(e,t)=>{if(!E.current){const e=await y.getTracks();E.current=e}C&&L({loggingParams:t},{uri:u.b,pages:[{items:E.current?.map((e=>({...e,provider:null})))||[]}]})}),c.s_,{leading:!0,trailing:!1});return x.canFetchAllTracks&&j?(0,f.jsx)(i.Z,{index:o,delegatePlayback:!0,delegateLogging:!0,isPlaying:b,onPlay:T,headerText:t,featureIdentifier:"local_files",uri:e,renderCardImage:()=>(0,f.jsx)(l.x,{images:a,FallbackComponent:h.S}),renderSubHeaderContent:()=>(0,f.jsx)("span",{children:n.ag.get("local-files.description")})}):null},E=({index:e})=>{const t=(0,o.gB)();return(0,f.jsx)(r.Suspense,{fallback:null,children:(0,f.jsx)(x,{index:e,name:t.name,uri:t.uri,images:t.images})})}},86643:(e,t,a)=>{a.d(t,{P:()=>g});var r=a(59496),s=a(9102),n=a(25899),i=a(71311),l=a(61740),o=a(36844),c=a(3802),u=a(47146),d=a(82108),m=a(42495);const g=(e,t)=>{const a=(()=>{const e=(0,o.W6)(m.Xf),t=(0,l.v9)(u.rZ),{overrides:a}=(0,l.v9)(d.Gg),s=c.ag.getLocale(),n=a?.country||t,i=a?.locale||s;return(0,r.useMemo)((()=>{const t=["album","playlist","artist","show","station","episode","merch","artist_concerts"];return e&&t.push("uri_link"),{country:n,locale:i,types:t.join(",")}}),[n,e,i])})(),{data:g,fetchNextPage:p}=(0,s.useInfiniteQuery)(["useView",e,a],(async({pageParam:t})=>void 0===t?async function(e,t){const{body:a}=await i.kO.getView(n.b.getInstance(),e,t);return a}(e,a):async function(e){const t=new URL(e),a=t.origin,r=t.pathname,s=Object.fromEntries(t.searchParams.entries()),{body:l}=await i.TV.getGeneric(n.b.getInstance(),a,r,s,"/useView/fetchNext/{next}");return l}(t)),{cacheTime:t?.cacheTime??18e5,staleTime:t?.staleTime??3e5,getNextPageParam:e=>e.content.next??void 0,getPreviousPageParam:e=>e.content.previous??void 0});return{view:(0,r.useMemo)((()=>g?.pages.reduce(((e,t)=>({...e,content:{...e.content,href:t.content.href,next:t.content.next,offset:t.content.offset,previous:t.content.previous,total:t.content.total,items:e.content.items.concat(t.content.items)}})))),[g?.pages]),getNextPage:p}}},92880:(e,t,a)=>{a.d(t,{Z:()=>r});const r={header:"collection-collection-header",tabBar:"collection-collection-tabBar",AddToPlaylistIcon:"collection-collection-AddToPlaylistIcon",emptyStateContainer:"collection-collection-emptyStateContainer",adBarEnabled:"collection-collection-adBarEnabled"}}}]);
//# sourceMappingURL=xpui-routes-collection.js.map