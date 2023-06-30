"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[4179],{58447:(e,i,a)=>{a.r(i),a.d(i,{default:()=>va});var n=a(59496),t=a(84875),s=a.n(t),l=a(61740),r=a(89605),d=a(56162),o=a(36844),c=a(96435),m=a(50346),u=a(3802),k=a(75112),v=a(300),g=a(72686),N=a(66476),h=a(84229),p=a(69383),S=a(16743),x=a(73997),y=a(33209),j=a(77312),F=a(80964),b=a(59200),A=a(40018),T=a(19995),C=a(67565),f=a(66632),I=a(85213);let L=function(e){return e.LOADING="LOADING",e.LOADED="LOADED",e.UNAVAILABLE="UNAVAILABLE",e}({});const O=(0,I.Uy)(((e,i)=>{switch(i.type){case"LYRICS_LOADING":e[i.uri]={status:L.LOADING};break;case"LYRICS_LOADED":e[i.uri]={status:L.LOADED,data:{lyrics:{...i.response.lyrics}}};break;case"LYRICS_ERROR":e[i.uri]={status:L.UNAVAILABLE};break;default:throw new Error(`Unhandled lyrics action with type: ${i.type}`)}}));var P=a(25899),R=a(71311);var D=a(4637);const U={status:L.LOADING},w={status:L.UNAVAILABLE},_=n.createContext(void 0),E=({children:e,initialState:i={}})=>{const a=n.useReducer(O,i);return(0,D.jsx)(_.Provider,{value:a,children:e})},B=(e,i)=>{const a=n.useContext(_);if(void 0===a)throw new Error("useSEOLyrics must be used within a LyricsSEOProvider");if(!e||!(0,m.wj)(e)||i)return w;const[t,s]=a,l=t[e];return l||(s({type:"LYRICS_LOADING",uri:e}),(async e=>{const i=(0,m.EC)(e);return(await R.Zz.getSEOTrackLyrics(P.b.getInstance(),i.id)).body})(e).then((i=>{s({type:"LYRICS_LOADED",uri:e,response:i})})).catch((()=>{s({type:"LYRICS_ERROR",uri:e})})),U)};var M=a(48607),Z=a(71857),G=a(6444),$=a(73972),K=a(42495);const z=e=>e===K.Zn.CANONICAL_BOTTOM_POSITION,V=e=>e===K.Zn.ORGANIC_TOP_POSITION,W=e=>e===K.Zn.ORGANIC_BOTTOM_POSITION;K.Zn.DEFAULT,K.Zn.CONTROL,K.Zn.CANONICAL_TOP_POSITION,$.JI.ContentOnly,K.Zn.CANONICAL_BOTTOM_POSITION,$.JI.ContentOnly,K.Zn.ORGANIC_TOP_POSITION,$.JI.OrganicTraffic,K.Zn.ORGANIC_BOTTOM_POSITION,$.JI.OrganicTraffic;var Y=a(96170),Q=a(90350),J=a(47563);const q="UDuv2dzJuOEimwKzf_Ht",H="crU3_phk5OplHUp2b_iW",X=({padded:e})=>(0,D.jsx)(d.D,{as:"p",dir:"auto",variant:"finale",className:`${q} ${e?H:""}`,children:"Lyrics powered by Musixmatch."}),ee=({uri:e})=>{const{status:i}=B(e);return i!==L.LOADED?null:(0,D.jsx)(X,{})};var ie=a(30366),ae=a(63120),ne=a(98340),te=a(43438),se=a(57559);const le=({album:e,index:i,artistURI:a})=>(0,D.jsx)(ne.ZP,{value:"card",index:i,children:(0,D.jsx)(se.i,{index:i,latest:!1,showType:!0,...(0,te.B$)(e,a,e.name)})});var re=a(48203);const de=({albums:e,artistName:i,artistId:a,artistUri:n,className:t})=>e?(0,D.jsx)(ne.ZP,{value:"shelf/albums",children:(0,D.jsx)(re.P,{total:e.totalCount,title:u.ag.get("rich-page.popular-albums-by-artist",{artist:i}),seeAllUri:`${(0,te.GJ)(a)}:discography:${$.VZ.Album.toLowerCase()}`,seeAllLabel:u.ag.get("shelf.see-all"),alwaysShowSeeAll:!0,className:t,children:(0,te.Hr)(e.items).map(((e,i)=>(0,D.jsx)(le,{album:e,index:i,artistURI:n},e.uri)))})}):null;var oe=a(59498);const ce=({artistName:e,artistUri:i,headerClassName:a,rowClassName:t,topTracks:s,topTracksTransformer:l,uri:r})=>{const o=(0,n.useMemo)((()=>s?.items.map((e=>l(e,r)))),[s?.items,l,r]),{usePlayContextItem:c}=(0,M.n)({uri:i},{featureIdentifier:"artist"});return o&&o.length>0?(0,D.jsxs)("div",{className:t,children:[(0,D.jsxs)("div",{children:[(0,D.jsx)(d.D,{variant:"mesto",children:u.ag.get("rich-page.popular-tracks")}),(0,D.jsx)(d.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:a,children:e})]}),(0,D.jsx)(oe.k,{nrTracks:o.length,initialTracks:o,usePlayContextItem:c})]}):null};var me=a(27509);const ue=({artistName:e,artistId:i,artistUri:a,className:n,releases:t,artistImages:s})=>t?(0,D.jsx)(ne.ZP,{value:"shelf/releases",children:(0,D.jsx)(re.P,{total:10,title:u.ag.get("rich-page.popular-releases-by-artist",{artist:e}),seeAllUri:`${(0,te.GJ)(i)}:discography:${$.VZ.Album.toLowerCase()}`,seeAllLabel:u.ag.get("shelf.see-all"),alwaysShowSeeAll:!0,className:n,listRowHeaderProps:s?{title:e,pretitle:u.ag.get("artist-page.popular"),media:(0,me.o)(s,{desiredSize:48})||""}:null,children:t.items.map(((e,i)=>(0,D.jsx)(le,{album:e,index:i,artistURI:a},e.uri)))})}):null,ke=({artistId:e,artistName:i,artistUri:a,className:n,singles:t})=>t?(0,D.jsx)(ne.ZP,{value:"shelf/singles-and-eps",children:(0,D.jsx)(re.P,{total:t.totalCount,title:u.ag.get("rich-page.popular-singles-and-eps-by-artist",{artist:i}),seeAllUri:`${(0,te.GJ)(e)}:discography:${$.VZ.Single.toLowerCase()}`,seeAllLabel:u.ag.get("shelf.see-all"),alwaysShowSeeAll:!0,className:n,children:(0,te.Hr)(t.items).map(((e,i)=>(0,D.jsx)(le,{album:e,index:i,artistURI:a},e.uri)))})}):null;var ve=a(32812);const ge="o2TlnuNKxRO5RnB9BpHB",Ne="q0Ke_aAvTcc4dO4wCHQt",he="UlKUfS_GcROZmofuafOW",pe="I5LORTI1u3A6VoUvRCBf",Se="TS85Qkpioa31wR0p4kzT",xe="yL1DLXBc05CR_ACv_NhA",ye="k5kRkUyoz9znqg_SGOVQ";var je=a(28246),Fe=a(48811),be=a(853),Ae=a(9374),Te=a(42531);let Ce=function(e){return e.SMALL="small",e.LARGE="large",e}({});const fe=({art:e,disabled:i=!1,LinkComponent:a,name:n,size:t=Ce.SMALL,type:l,uri:o})=>{const c=e?[e]:[],k=t===Ce.SMALL?(0,Fe.R)(l):function(e){switch(e){case je.albumType.SINGLE:return u.ag.get("track-page.from-the-single");case je.albumType.EP:return u.ag.get("track-page.from-the-ep");case je.albumType.COMPILATION:return u.ag.get("track-page.from-the-compilation");case je.albumType.ALBUM:default:return u.ag.get("track-page.from-the-album")}}(l),v=(0,r.s0)();return(0,D.jsxs)("div",{className:s()(ge,{[he]:t===Ce.SMALL,[Ne]:i}),children:[(0,D.jsx)("div",{className:pe,children:(0,D.jsx)(be.O,{images:c,size:Te.m$.SIZE_80,title:n,type:Ae.p.ALBUM})}),(0,D.jsxs)("div",{className:Se,children:[(0,D.jsx)(d.D,{variant:t===Ce.SMALL?"mestoBold":"finale",children:k}),(0,D.jsx)(a,{to:o,children:(0,D.jsx)(d.D,{as:"div",className:xe,variant:"balladBold",dir:"auto",children:n})})]}),(0,D.jsx)("div",{onClick:()=>{v((0,m.EC)(o).toURLPath(!0))},className:ye})]})};var Ie=a(44103),Le=a(40066),Oe=a(98479);const Pe="oTRKhYD0MZlNPm66W3Tw",Re="sc95MwPalcHwYGZ7j3xN",De="zrCZCfYv4zZiB1HYv9i8",Ue="RnlxIDmWcYTbbwNSJNjA",we="SHkxfN1vy0wpRMP1hK7I",_e="COXBS6zLyyxKNYuEAzjZ",Ee="pynMsudlBeLA8TZkPvmK",Be="sR5IpdOUvoUGYKlC9Dk1",Me="FHMr3WxshoYjZ7jd3YwI",Ze="Evcwc4KM2tf9xrLbfB8B",Ge="x4_dsi31Cx2SO1L0uYIj",$e="euPDqfFEBILj9KHDNLC1",Ke="x6FPRUKK40oDCPP7g6Ls",ze="k3SPcfaKewjfdYumDcGw",Ve="t9C7vRiN1OSC9uWfJEr0",We="Onv6dO4lntCzKUqYa8PE",Ye=({richTrack:e})=>{const{search:i}=(0,r.TH)(),a=(0,n.useCallback)((()=>new URLSearchParams(i.slice(1)).get("highlight")||""),[i])(),{tracklistRef:t}=(0,Oe.W)(),s=e.albumOfTrack,l=(0,Le.Y)(s?.uri||""),{usePlayContextItem:d}=(0,M.n)({uri:l},{featureIdentifier:"album"}),o=(0,n.useMemo)((()=>({items:[],totalCount:0})),[]);return s?(0,D.jsx)("div",{ref:t,className:Be,children:(0,D.jsx)(Ie.L,{ariaLabel:s.name,nrTracks:s.tracks.totalCount,albumUri:s.uri,highlightUri:a,discs:o,usePlayContextItem:d,hasHeaderRow:!1})}):null};var Qe=a(58706),Je=a(54299),qe=a(20195),He=a(4882),Xe=a(90303),ei=a(43064),ii=a(94033),ai=a(78048),ni=a(11283),ti=a(61108),si=a(28106);const li="Z9Dr8PkXFtlO8KnnDcxp",ri="Bm0LUMlhVIcF5qusgdUP",di="whTIka0YYAkqhqrs26Wa",oi=n.memo((function({uri:e,name:i,imgUrl:a,artists:n,isExplicit:t,index:s,album:l,contextUri:r,isPlayable:d,usePlayContextItem:o,isMOGEFRestricted:c,totalMilliseconds:m}){const{isActive:k,isPlaying:v,triggerPlay:g,togglePlay:N}=o({uri:e,index:s}),p=(0,ei._)(e),S=(0,ai.k)(e,d),x=n.map((e=>e.name)).join(u.ag.getSeparator()),{badges:y,hasBadges:j}=(0,ii.r)({isMOGEFRestricted:c,downloadAvailability:p,isExplicit:t});return(0,D.jsx)(ne.ZP,{value:"row",index:s,children:(0,D.jsx)(Je._,{menu:(0,D.jsx)(h.$,{uri:e,albumUri:l?.uri,artists:n,contextUri:r}),children:(0,D.jsxs)(si.c,{uri:e,contextUri:r,isPlayable:S,onTriggerPlay:(e,i)=>{g({loggingParams:i})},isActive:k,index:s,ariaRowIndex:s,dragMetadata:{name:i,createdBy:x},children:[(0,D.jsxs)(ti.vZ,{ariaColIndex:0,children:[(0,D.jsx)(ti.VG,{uri:e,src:a,onClick:(e,i)=>{N({loggingParams:i})},isLocked:!1,isPlaying:v,isActive:k,playAriaLabel:u.ag.get("tracklist.a11y.play",i,x)}),(0,D.jsxs)(ti.vm,{children:[(0,D.jsx)(ni.G,{uri:e,enabled:!0,children:(0,D.jsx)(ti.Wh,{titleText:i,children:i})}),j&&(0,D.jsxs)(ti.g3,{children:[y.download&&(0,D.jsx)(qe.G,{size:16}),y.explicit&&(0,D.jsx)(He.N,{}),y.nineteen&&(0,D.jsx)(Xe.X,{className:di,size:16})]}),(0,D.jsx)(ti.K9,{children:(0,D.jsx)(ti.T6,{artists:n})})]})]}),l&&(0,D.jsx)(ti.UA,{ariaColIndex:1,children:(0,D.jsx)(ti.BM,{uri:l.uri,name:l.name,creatorUri:n?.[0]?.uri,children:l.name})}),(0,D.jsx)(ti.mU,{ariaColIndex:2,children:(0,D.jsx)(ti.A$,{duration:m})})]})})})}),((e,i)=>e.uri===i.uri&&e.index===i.index));var ci=a(72071);const mi={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"internalLinkRecommenderTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"strategy"}},type:{kind:"NamedType",name:{kind:"Name",value:"SEORankingStrategy"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"seoRecommended"},arguments:[{kind:"Argument",name:{kind:"Name",value:"seoRecommendedInput"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"strategy"},value:{kind:"Variable",name:{kind:"Name",value:"strategy"}}},{kind:"ObjectField",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"GenericError"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"message"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"message"}},{kind:"Field",name:{kind:"Name",value:"uri"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"ilrTrack"}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"ilrTrack"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"albumOfTrack"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}}]}}]}}]}}]};var ui=a(53417);const ki=e=>"Track"===e?.__typename,vi=n.memo((function({strategy:e,uri:i}){const{data:a}=(t={uri:i,strategy:e},(0,ci.a)(mi,t,s));var t,s;const l=a?.seoRecommended.items,r=(0,n.useMemo)((()=>l?.slice(0,Math.min(l.length,5))),[l]),o=(0,n.useCallback)((e=>e.uri),[]),c=(0,n.useMemo)((()=>[ui.QD.TITLE,ui.QD.ALBUM,ui.QD.DURATION]),[]),m=(l||[])?.map((e=>ki(e.data)?{...e.data,provider:null,type:Ae.p.TRACK,uid:null}:{type:Ae.p.TRACK,uri:"",uid:null,provider:null})),k=(0,Le.Y)(i),{usePlayContextItem:v}=(0,M.n)({uri:k,pages:[{items:m}]},{featureIdentifier:"track"}),g=(0,n.useCallback)(((e,a)=>{if(!ki(e.data))return(0,D.jsx)(n.Fragment,{});const t=e.data;return(0,D.jsx)(oi,{index:a,contextUri:i,uri:t.uri,name:t.name,totalMilliseconds:t.duration.totalMilliseconds,imgUrl:t.albumOfTrack?.coverArt?.sources[0].url,isPlayable:t.playability.playable,artists:t.artists.items.map((e=>({uri:e.uri,id:e.id,name:e.profile.name}))),album:{id:t.albumOfTrack?.id||"",uri:t.albumOfTrack?.uri||"",name:t.albumOfTrack?.name||"",imgUrl:t.albumOfTrack?.coverArt?.sources[0].url||""},isExplicit:t.contentRating?.label===$.KS.Explicit,isMOGEFRestricted:t.contentRating?.label===$.KS.NineteenPlus,usePlayContextItem:v},`${a}-${t.uri}`)}),[i,v]);return l?.length?(0,D.jsxs)("div",{className:li,children:[(0,D.jsxs)("div",{className:ri,children:[(0,D.jsx)(d.D,{variant:"canon",semanticColor:"textBase",children:u.ag.get("playlist.extender.recommended.title")}),(0,D.jsx)(d.D,{variant:"mesto",paddingBottom:Qe.o78,children:u.ag.get("internal-link-recommender.based-on-this-song")})]}),(0,D.jsx)(ui.Pv,{ariaLabel:u.ag.get("playlist.extender.recommended.title"),nrTracks:Math.min(l.length,5),rowPlaceholder:ui.hU,tracks:r,renderRow:g,resolveUri:o,columns:c},"internal-link-recommender-track-list")]}):null}));var gi=a(79823);const Ni=({artistId:e,className:i,fansAlsoLike:a,title:n})=>(0,D.jsx)(ne.ZP,{value:"shelf/fans-also-like",children:(0,D.jsx)(re.P,{total:a.length,title:n??u.ag.get("rich-page.fans-also-like"),seeAllUri:`${(0,te.GJ)(e)}:related`,className:i,children:a.map(((e,i)=>(0,D.jsx)(ne.ZP,{value:"card",index:i,children:(0,D.jsx)(gi.I,{index:i,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources||[]})},e.uri)))})});var hi=a(36016),pi=a(41836);const Si=(0,n.memo)((function({track:e,richTrackArtists:i}){const a=(0,o.W6)(pi.YS),t=(0,ve.k)(),l=e.albumOfTrack,r=l?.playability?.playable,c=e.artistsWithRoles.items[0]?.artist,m=c?.discography?.topTracks,k=c?.discography?.popularReleasesAlbums,v=c?.discography?.albums,g=c?.discography?.singles,N={artistId:c?.id,artistName:c?.profile?.name,artistUri:c?.uri},[h,p]=(0,n.useState)(!1),S=(0,n.useCallback)((()=>{p(!h)}),[h]),x=i?.otherArtists&&i?.otherArtists.items.length>5;return(0,D.jsxs)("div",{"data-testid":"rich-track",children:[(y=a,y===K.Zn.CANONICAL_TOP_POSITION&&(0,D.jsx)("div",{"data-testid":"canonical-pool-top",children:(0,D.jsx)(vi,{strategy:$.JI.ContentOnly,uri:e.uri})})),V(a)&&(0,D.jsx)("div",{"data-testid":"organic-pool-top",children:(0,D.jsx)(vi,{strategy:$.JI.OrganicTraffic,uri:e.uri})}),(0,D.jsx)(ce,{artistName:c?.profile?.name,artistUri:c?.uri,headerClassName:Ze,rowClassName:we,topTracks:m,topTracksTransformer:hi.X7,uri:e.uri}),(0,D.jsx)(ue,{className:Me,releases:k,...N}),(0,D.jsx)(de,{albums:v,className:Me,...N}),(0,D.jsx)(ke,{className:Me,singles:g,...N}),i&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("div",{className:$e,children:i.otherArtists.items.map(((e,i)=>(0,D.jsx)(ue,{className:s()(Ge,{[ze]:i>4,[Ve]:h&&i>4}),releases:e.artist.discography.popularReleasesAlbums,artistName:e.artist.profile.name,artistId:e.artist.id,artistUri:e.artist.uri,artistImages:e.artist.visuals.avatarImage?.sources},e.artist.id)))}),x&&(0,D.jsx)(ie.o,{onClick:S,className:We,children:(0,D.jsx)(d.D,{as:"h2",variant:"violaBold",children:h?u.ag.get("show_less"):u.ag.get("mwp.search.artists.all")})}),(0,D.jsx)(Ni,{artistId:c.id,className:s()(Me,{[Ke]:i.otherArtists.items.length>0}),fansAlsoLike:i.firstArtist.items[0].artist.relatedContent.relatedArtists.items,title:u.ag.get("artist-page.fansalsolike")})]}),l&&(0,D.jsx)(fe,{art:l.coverArt?.sources[0],disabled:!r||!t,LinkComponent:ae.default,name:l.name,type:l.type,size:Ce.LARGE,uri:l.uri}),(0,D.jsx)(Ye,{richTrack:e})]});var y})),xi=Si;var yi=a(79475);const ji="QhDsXG1Gmo7XmQWLggAO",Fi="bZgWQj7UxvK8GYKWDA7N",bi="AW61P3tnW5cKJCWtbhFh",Ai=({buttonText:e,onSecondaryButtonClick:i,onPrimaryButtonClick:a,secondaryButtonText:n,text:t})=>(0,D.jsxs)("div",{className:ji,"data-testid":"static-activation-trigger",children:[(0,D.jsx)(d.D,{className:Fi,variant:"cello",children:t}),(0,D.jsxs)("div",{className:bi,children:[(0,D.jsx)(ie.o,{onClick:i,semanticColor:"textBase",children:n}),(0,D.jsx)(yi.D,{onClick:a,colorSet:"invertedLight",children:e})]})]}),Ti="T1nqQ4HEh3heHy4RCCKa",Ci="L8zjshPVgUMXyZR4FtOk",fi="YMn1FWcFmOz9osBrNvhF",Ii="Inbyq3TnvKDOJtcKFTDQ",Li="lWk5se4WETUOJwaEb8D6",Oi="i8DyQbWCmDV_8N5XGJQT",Pi="t5WPFlGTY6GCd9UOFfLu",Ri="AGQ3wRyMVK1odq860qnT",Di="ZX_r7uZgPgssaUplfpxT",Ui="qrqctaPu2XBpxsw23nPX",wi="XnWidTagai3nQwMPxIMF";var _i=a(32422),Ei=a(39669);let Bi=function(e){return e.SMALL="small",e.LARGE="large",e}({});const Mi=e=>{const{disabled:i,images:a,LinkComponent:n,name:t,size:l,uri:o,enableI18nRoutes:c,enableI18nAdditionalPages:k}=e,v=l===Bi.SMALL,g=(0,r.s0)(),N=(0,m.EC)(o),h=N?.type,p=u.ag.getUrlLocale(),S=(0,_i.S9)({localeFeatureFlag:c,entityFeatureFlag:k,urlLocale:p,entity:h,type:"link"});return(0,D.jsxs)("div",{className:s()(Ci,{[fi]:i}),"data-testid":"track-artist-link-card",children:[(0,D.jsx)(be.O,{shape:be.K.CIRCLE,images:a,size:Te.m$.SIZE_80,title:t,type:Ae.p.ARTIST}),(0,D.jsxs)("div",{className:s()(Li,{[Oi]:v}),children:[(0,D.jsx)(d.D,{variant:"mestoBold",className:Ii,children:u.ag.get("card.tag.artist")}),(0,D.jsx)(n,{to:o,children:(0,D.jsx)(d.D,{as:"div",dir:"ltr",className:Pi,variant:"balladBold",children:t})})]}),(0,D.jsx)("div",{onClick:()=>{const e=N?.toURL(`/${Ei.F0}${p}/`);if(N){const i=S?e:N.toURLPath(!0);g(i)}},className:Ri})]})},Zi=({size:e=Bi.LARGE,disabled:i=!1,enableI18nRoutes:a,enableI18nAdditionalPages:t,...l})=>{const[r,o]=(0,n.useState)(!1),c=(0,n.useCallback)((()=>{o(!r)}),[r]),m=l.artists;return(0,D.jsxs)("div",{"data-testid":"track-artist-link-card-container",children:[(0,D.jsx)("div",{className:Ti,children:m.map(((n,d)=>(0,D.jsx)("div",{className:s()({[Ui]:r&&d>5,[Di]:d>5}),children:(0,D.jsx)(Mi,{name:n.name,uri:n.uri,images:n.images,size:e,LinkComponent:l.LinkComponent,disabled:i,enableI18nRoutes:a,enableI18nAdditionalPages:t},n.id)},`${n.uri}-${d}`)))}),m.length>6&&(0,D.jsx)(ie.o,{onClick:c,className:wi,children:(0,D.jsx)(d.D,{as:"p",variant:"violaBold",children:r?u.ag.get("show_less"):u.ag.get("mwp.search.artists.all")})})]})};var Gi=a(35526);const $i="Q3OKWaFrTVTIRZyG05Gh",Ki="cFQh4aLbQzp0aYzbWwjY",zi="NAaJboGa8qckhNNQTKTn",Vi=({lines:e=[]})=>0===e.length?null:(0,D.jsxs)("div",{className:$i,children:[(0,D.jsx)(d.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:Ki,children:u.ag.get("web-player.lyrics.title")}),e.map((({words:e},i)=>(0,D.jsx)(d.D,{as:"p",dir:"auto",variant:"ballad",className:zi,children:e},`lyrics-seo-line-${i}`)))]}),Wi=({uri:e})=>{const{status:i,data:a}=B(e);return i!==L.LOADED?null:(0,D.jsx)(Vi,{lines:a?.lyrics.lines})};var Yi=a(30985),Qi=a(82108);const Ji=e=>{const{albumArtists:i,columnCount:a,uri:t}=e,r=a-2,d={"--column-count":a,"--left-column-end":r-2,"--right-column-start":r},{isAnonymous:o}=(0,l.v9)(Qi.Gg),c=(0,ve.k)(),{data:m,status:k}=B(t,o),v=!!m&&k!==L.UNAVAILABLE||o,g=(0,l.v9)(Yi.br),N=(0,l.v9)(Yi.yE);return(0,D.jsxs)(n.Suspense,{fallback:null,children:[v&&(0,D.jsx)("div",{className:s()(De,{[Ue]:a>5}),style:{...d},children:o?(0,D.jsx)(Ai,{buttonText:u.ag.get("sign_up"),secondaryButtonText:u.ag.get("login"),text:u.ag.get("track-page.sign-in-to-view-lyrics"),onPrimaryButtonClick:Gi.L6,onSecondaryButtonClick:Gi.h$}):(0,D.jsx)(Wi,{uri:t})}),(0,D.jsx)("div",{className:s()(Pe,{[Re]:a>5&&v}),style:{...d},children:(0,D.jsx)(Zi,{artists:i,LinkComponent:ae.default,disabled:!c,enableI18nRoutes:g,enableI18nAdditionalPages:N})})]})};var qi=a(91703),Hi=a(47509),Xi=a(98440),ea=a(95357),ia=a(37180),aa=a(55760);const na=({category:e,action:i,remoteConfigProperty:a,defaultVariant:t,label:s,context:l,country:r,spt:d=!1,isAnonymous:c=!1})=>{const m=(0,o.W6)(a),u=(0,aa.s4)();(0,n.useEffect)((()=>{if(!m||!s)return;const a={category:e,action:i,variant:t??m,label:s,os:(0,ea.y)(),...l&&{context:l},...r&&{country:r},...d&&{sp_t:(0,ia.vQ)("sp_t")}};c?u.send((0,Xi.k)(a)):u.send((0,Hi.x)(a))}),[m,s,e,i,l,r,d,c,u,t])};var ta=a(59180),sa=a(95663),la=a(4055),ra=a(47146),da=a(31503),oa=a(88549);const ca={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getRichTrackArtists"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trackUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackArtistsFields"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"message"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackArtistsFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackArtists"}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackArtists"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"firstArtist"},name:{kind:"Name",value:"artistsWithRoles"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"1"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artist"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richRelatedArtistsFields"}}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"otherArtists"},name:{kind:"Name",value:"artistsWithRoles"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"1"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackArtistItem"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richRelatedArtistsFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Artist"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"relatedContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"relatedArtists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"20"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"visuals"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackArtistItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"TrackArtistPage"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artist"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richArtistFields"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richArtistFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Artist"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"visuals"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"discography"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"popularReleasesAlbums"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackArtistAlbums"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackArtistAlbums"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AlbumPage"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackArtistAlbumFields"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackArtistAlbumFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isoString"}},{kind:"Field",name:{kind:"Name",value:"precision"}},{kind:"Field",name:{kind:"Name",value:"year"}}]}},{kind:"Field",name:{kind:"Name",value:"tracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"trackNumber"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"extractedColors"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorRaw"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hex"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}}]},ma=e=>{const i=(a={uri:e},(0,ci.a)(ca,a,n));var a,n;if(!i.loading&&"Track"===i.data?.trackUnion?.__typename)return i.data.trackUnion},ua=e=>(e?.items||[]).map((e=>({name:e.artist.profile.name,images:(e.artist.visuals.avatarImage?.sources||[]).map((e=>({url:e.url,width:e.width,height:e.height}))),uri:e.artist.uri,id:e.artist.id}))),ka=({uri:e,track:i,richTrackArtists:a})=>{const t=(0,sa.o)(),m=(0,ve.k)(),y=(0,la.g)(),C=(0,r.TH)(),I=(0,ta.k)({type:"locale",uri:e}),{artistsWithRoles:L,albumOfTrack:O,duration:P,name:R}=i,U=O?.coverArt,w=O?.copyright.items,_=O?.courtesyLine,B=O?.date?.isoString,V=U?.extractedColors?.colorRaw.hex,q=(U?.sources||[]).map((e=>({url:e.url,width:e.width||void 0,height:e.height||void 0}))),H={uri:O?.uri||"",name:O?.name||""},X=(0,o.W6)(K.YS),ie=(0,Z.vI)(Q.k.RTPFeaturedArtists,C),ae=(0,l.v9)(da.$2),ne=(0,J.xU)(ae,i.id),te=ie||ne,se=te&&a,le=ua(L),re=se?le.concat(ua(a.otherArtists)):le,{spec:de,logger:oe}=(0,Y.fU)(c.createDesktopTrackEventFactory,{data:{uri:e}}),ce=(0,l.v9)(Qi.n5),me=(0,l.v9)(ra.rZ);na({category:"rtp-feat-artist-and-credits-test",action:"remote-config-response",remoteConfigProperty:K.es,label:"dwp",context:`${e}|${te}`,country:ce?me:"",spt:!0,isAnonymous:y}),na({category:"track_ilr_exposures",action:"track_page_visit",remoteConfigProperty:K.YS,label:"dwp",context:`${e}|[]`,country:ce?me:"",spt:!0,isAnonymous:y});const ue=i.playability.playable,ke=(0,Le.Y)(e),{togglePlay:ge,isPlaying:Ne,isActive:he}=(0,M.n)({uri:ke},{featureIdentifier:"track"}),[pe,Se]=(0,f.Z)(e),xe=(0,n.useCallback)((async()=>{t({targetUri:e,intent:pe?"unsave":"save",type:"click"});const i=de.actionBarFactory().saveButtonFactory();oe.logInteraction(pe?i.hitRemoveLike({itemNoLongerLiked:e}):i.hitLike({itemToBeLiked:e}));try{await Se(!pe)}catch{}}),[t,e,pe,de,oe,Se]),ye=(0,n.useCallback)((()=>(0,G.Zs)({i18n:u.ag,trackArtistsList:re.map((e=>e.name)).join(u.ag.getSeparator()),trackName:i.name,shouldLocalize:I})),[re,I,i.name]),je=(0,n.useCallback)(((e,i)=>{oe.logInteraction(de.headerFactory().artistLinkFactory({position:i.position,uri:i.creator.uri}).hitUiNavigate({destination:i.creator.uri}))}),[oe,de]),Fe=(0,n.useCallback)((()=>{const i=(0,F.aK)({isPlaying:Ne,isActive:he,spec:de.actionBarFactory().playButtonFactory(),logger:oe,uri:e});ge({loggingParams:i})}),[he,Ne,oe,de,ge,e]),be=(0,n.useCallback)((()=>{oe.logInteraction(de.actionBarFactory().contextButtonFactory().hitUiReveal())}),[oe,de]);return(0,D.jsxs)("section",{"data-testid":"track-page",children:[(0,D.jsx)(qi.$,{children:ye()}),(0,D.jsxs)(p.gF,{backgroundColor:V,children:[(0,D.jsxs)(S.W,{children:[(0,D.jsx)(j.$,{size:"md",onClick:Fe,disabled:!ue,isPlaying:Ne,uri:e}),(0,D.jsx)(x.i,{text:R,dragUri:e,dragLabel:R})]}),(0,D.jsx)(b._P,{menu:(0,D.jsx)(h.$,{uri:e}),children:(0,D.jsx)(p.Oz,{dragUri:e,images:q,name:R,placeholderType:"album"})}),(0,D.jsxs)(p.sP,{children:[(0,D.jsx)(d.D,{variant:"mestoBold",children:u.ag.get("song")}),(0,D.jsx)(b._P,{menu:(0,D.jsx)(h.$,{uri:e}),children:(0,D.jsx)(p.xd,{dragUri:e,dragLabel:R,children:R})}),te?(0,D.jsx)(p.QS,{creators:le,releaseDate:B,durationMilliseconds:P.totalMilliseconds,onCreatorClick:je,isTrack:!0,album:H}):(0,D.jsx)(p.QS,{creators:le,releaseDate:B,durationMilliseconds:P.totalMilliseconds,onCreatorClick:je,isTrack:!0})]})]}),(0,D.jsx)(k.o,{backgroundColor:V,children:(0,D.jsxs)(k.F,{children:[(0,D.jsx)(p.rn,{children:(0,D.jsx)(j.$,{onClick:Fe,isPlaying:Ne,disabled:!ue,size:"lg",uri:e})}),(0,D.jsx)(p.rn,{children:(0,D.jsx)(v.H,{isAdded:!!pe,onClick:xe,disabled:!m,size:v.q.md})}),(0,D.jsx)(g.o,{uri:e,isFollowing:!!pe,onFollow:xe,size:g.q.md}),(0,D.jsx)(b.yj,{menu:(0,D.jsx)(h.$,{uri:e}),onShow:be,children:(0,D.jsx)(N.z,{label:u.ag.get("more.label.context",R)})})]})}),(0,D.jsxs)(E,{children:[(0,D.jsxs)("div",{className:"contentSpacing",children:[(0,D.jsx)("div",{className:we,children:(0,D.jsx)(T.T,{render:({columnCount:i})=>(0,D.jsx)(Ji,{albumArtists:re,columnCount:i,uri:e})})}),se?(0,D.jsx)(xi,{track:i,richTrackArtists:a}):(0,D.jsx)(xi,{track:i})]}),(0,D.jsxs)("div",{className:"contentSpacing",children:[(0,D.jsxs)("div",{className:s()(_e,{[Ee]:(Ae=X,!(Ae===K.Zn.DEFAULT||Ae===K.Zn.CONTROL))}),children:[(0,D.jsx)(A.k,{copyrights:w||[],courtesyLine:_}),!y&&(0,D.jsx)(ee,{uri:e})]}),z(X)&&(0,D.jsx)("div",{"data-testid":"canonical-pool-bottom",children:(0,D.jsx)(vi,{strategy:$.JI.ContentOnly,uri:e})}),W(X)&&(0,D.jsx)("div",{"data-testid":"organic-pool-bottom",children:(0,D.jsx)(vi,{strategy:$.JI.OrganicTraffic,uri:e})})]})]})]});var Ae},va=(0,n.memo)((function(){const{trackId:e=""}=(0,r.UO)(),i=(0,m.tn)(e).toURI(),a=(0,oa.QN)({uri:i}),n=ma(i);return a.loading||"Track"!==a.data?.trackUnion?.__typename?(0,D.jsx)(y.h,{hasError:null!==a.error,errorMessage:u.ag.get("track-page.error")}):(0,D.jsx)(C.fd,{surface:C.Tg.TRACK,uris:[i,a.data.trackUnion.albumOfTrack?.uri??null],children:(0,D.jsx)(ka,{uri:i,track:a.data.trackUnion,richTrackArtists:n})})}))},40018:(e,i,a)=>{a.d(i,{k:()=>l});var n=a(56162);const t="rTMkDBDp47Eo12ZEQv4U";var s=a(4637);const l=({copyrights:e,courtesyLine:i})=>{const a=(e||[]).map(((e,i)=>{const a=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let t;return t="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,(0,s.jsx)(n.D,{as:"p",variant:"finale",dir:"auto",children:`${t} ${a}`},i)}));return i&&a.unshift((0,s.jsx)(n.D,{as:"p",variant:"finale",dir:"auto",children:i},a.length)),(0,s.jsx)("div",{className:t,children:a})}},71857:(e,i,a)=>{a.d(i,{vI:()=>n});const n=(e,i)=>{const a=i?new URLSearchParams(i.search):void 0;return"1"===a?.get(e)}},90350:(e,i,a)=>{a.d(i,{k:()=>n});let n=function(e){return e.I18nSEO="i18nSEO",e.RTPFeaturedArtists="rtpv2p1",e.RTPTrackCredits="rtpv2p2",e.BlendParty="bp",e.BlendPartyV2="bpv2",e.VideoPodcastShowTitleTag="vidpodshow",e.I18nAdditionalPages="i18nap",e}({})}}]);
//# sourceMappingURL=xpui-routes-track-v2.js.map