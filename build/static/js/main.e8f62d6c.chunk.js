(this.webpackJsonpspotify=this.webpackJsonpspotify||[]).push([[0],{199:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){},213:function(e,t,n){},214:function(e,t,n){},521:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),i=n(26),a=n.n(i),r=(n(199),n(14)),o=(n(200),n(201),"".concat("https://accounts.spotify.com/authorize/","?client_id=").concat("377e5bf3054249ffb055e7a63ff091c8","&redirect_uri=").concat("http://localhost:3000/","&scope=\n").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true")),l=n(3);var j=function(){return Object(l.jsxs)("div",{className:"login",children:[Object(l.jsx)("img",{src:"https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png",alt:""}),Object(l.jsx)("a",{href:o,children:"LOGIN WITH SPOTIFY"})]})},d=n(171),u=n.n(d);n(203),n(204),n(205);var b=function(e){var t=e.title,n=e.Icon;return Object(l.jsxs)("div",{className:"sidebarOption",children:[n&&Object(l.jsx)(n,{className:"sidebarOption__icon"}),n?Object(l.jsx)("h4",{children:t}):Object(l.jsx)("p",{children:t})]})},O=n(172),p=n.n(O),f=n(89),h=n.n(f),m=n(177),x=n.n(m),y=Object(s.createContext)(),v=function(e){var t=e.initialState,n=e.reducer,c=e.children;return Object(l.jsx)(y.Provider,{value:Object(s.useReducer)(n,t),children:c})},g=function(){return Object(s.useContext)(y)};var S=function(){var e,t=g(),n=Object(r.a)(t,2),s=n[0].playlists;return n[1],Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)("img",{className:"sidebar__logo",src:"data:image/png;base64,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",alt:""}),Object(l.jsx)(b,{Icon:p.a,title:"Home"}),Object(l.jsx)(b,{Icon:h.a,title:"Search"}),Object(l.jsx)(b,{Icon:x.a,title:"Your Library"}),Object(l.jsx)("br",{}),Object(l.jsx)("strong",{className:"sidebar__title",children:"PLAYLISTS"}),Object(l.jsx)("hr",{}),null===s||void 0===s||null===(e=s.items)||void 0===e?void 0:e.map((function(e){return Object(l.jsx)(b,{title:e.name})}))]})};n(211),n(212);var T=function(e){var t=e.track,n=e.playSong;return Object(l.jsxs)("div",{className:"songRow",onClick:function(){return n(t.id)},children:[Object(l.jsx)("img",{className:"songRow__album",src:t.album.images[0].url,alt:""}),Object(l.jsxs)("div",{className:"songRow__info",children:[Object(l.jsx)("h1",{children:t.name}),Object(l.jsxs)("p",{children:[t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name]})]})]})},I=(n(213),n(542));var E=function(){var e,t=g(),n=Object(r.a)(t,2),s=n[0].user;return n[1],Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"header__left",children:[Object(l.jsx)(h.a,{}),Object(l.jsx)("input",{placeholder:"Search for Artists, Songs, or Podcasts",type:"text"})]}),Object(l.jsxs)("div",{className:"header__right",children:[Object(l.jsx)(I.a,{src:null===s||void 0===s||null===(e=s.images[0])||void 0===e?void 0:e.url,alt:null===s||void 0===s?void 0:s.display_name}),Object(l.jsx)("h4",{children:null===s||void 0===s?void 0:s.display_name})]})]})},A=n(178),w=n.n(A),P=n(179),C=n.n(P),L=n(180),N=n.n(L);var W=function(e){var t=e.spotify,n=g(),s=Object(r.a)(n,2),c=s[0].discover_weekly,i=s[1],a=function(e){t.play({uris:["spotify:track:".concat(e)]}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){i({type:"SET_ITEM",item:e.item}),i({type:"SET_PLAYING",playing:!0})}))}))};return Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)(E,{spotify:t}),Object(l.jsxs)("div",{className:"body__info",children:[Object(l.jsx)("img",{src:null===c||void 0===c?void 0:c.images[0].url,alt:"Discover Weekly"}),Object(l.jsxs)("div",{className:"body__infoText",children:[Object(l.jsx)("strong",{children:"PLAYLIST"}),Object(l.jsx)("h2",{children:"Discover Weekly"}),Object(l.jsx)("p",{children:null===c||void 0===c?void 0:c.description})]})]}),Object(l.jsxs)("div",{className:"body__songs",children:[Object(l.jsxs)("div",{className:"body__icons",children:[Object(l.jsx)(w.a,{className:"body__shuffle",onClick:function(e){t.play({context_uri:"spotify:playlist:37i9dQZEVXcDKwfS1dfIel"}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){i({type:"SET_ITEM",item:e.item}),i({type:"SET_PLAYING",playing:!0})}))}))}}),Object(l.jsx)(C.a,{fontSize:"large"}),Object(l.jsx)(N.a,{})]}),null===c||void 0===c?void 0:c.tracks.items.map((function(e){return Object(l.jsx)(T,{playSong:a,track:e.track})}))]})]})},Y=(n(214),n(184)),k=n.n(Y),z=n(182),_=n.n(z),q=n(185),B=n.n(q),R=n(181),M=n.n(R),F=n(186),G=n.n(F),V=n(540),J=n(541),U=n(187),D=n.n(U),K=n(188),Z=n.n(K),H=n(183),Q=n.n(H);var X=function(e){var t=e.spotify,n=g(),c=Object(r.a)(n,2),i=c[0],a=(i.token,i.item),o=i.playing,j=c[1];Object(s.useEffect)((function(){t.getMyCurrentPlaybackState().then((function(e){console.log(e),j({type:"SET_PLAYING",playing:e.is_playing}),j({type:"SET_ITEM",item:e.item})}))}),[t]);var d=function(){o?(t.pause(),j({type:"SET_PLAYING",playing:!1})):(t.play(),j({type:"SET_PLAYING",playing:!0}))};return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsxs)("div",{className:"footer__left",children:[Object(l.jsx)("img",{className:"footer__albumLogo",src:null===a||void 0===a?void 0:a.album.images[0].url,alt:null===a||void 0===a?void 0:a.name}),a?Object(l.jsxs)("div",{className:"footer__songInfo",children:[Object(l.jsx)("h4",{children:a.name}),Object(l.jsx)("p",{children:a.artists.map((function(e){return e.name})).join(", ")})]}):Object(l.jsxs)("div",{className:"footer__songInfo",children:[Object(l.jsx)("h4",{children:"No song is playing"}),Object(l.jsx)("p",{children:"..."})]})]}),Object(l.jsxs)("div",{className:"footer__center",children:[Object(l.jsx)(M.a,{className:"footer__green"}),Object(l.jsx)(_.a,{onClick:function(){t.skipToNext(),t.getMyCurrentPlayingTrack().then((function(e){j({type:"SET_ITEM",item:e.item}),j({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"}),o?Object(l.jsx)(Q.a,{onClick:d,fontSize:"large",className:"footer__icon"}):Object(l.jsx)(k.a,{onClick:d,fontSize:"large",className:"footer__icon"}),Object(l.jsx)(B.a,{onClick:function(){t.skipToPrevious(),t.getMyCurrentPlayingTrack().then((function(e){j({type:"SET_ITEM",item:e.item}),j({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"}),Object(l.jsx)(G.a,{className:"footer__green"})]}),Object(l.jsx)("div",{className:"footer__right",children:Object(l.jsxs)(V.a,{container:!0,spacing:2,children:[Object(l.jsx)(V.a,{item:!0,children:Object(l.jsx)(D.a,{})}),Object(l.jsx)(V.a,{item:!0,children:Object(l.jsx)(Z.a,{})}),Object(l.jsx)(V.a,{item:!0,xs:!0,children:Object(l.jsx)(J.a,{"aria-labelledby":"continuous-slider"})})]})})]})};var $=function(e){var t=e.spotify;return Object(l.jsxs)("div",{className:"player",children:[Object(l.jsxs)("div",{className:"player__body",children:[Object(l.jsx)(S,{}),Object(l.jsx)(W,{spotify:t})]}),Object(l.jsx)(X,{spotify:t})]})},ee=new u.a;var te=function(){var e=g(),t=Object(r.a)(e,2),n=t[0].token,c=t[1];return Object(s.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(ee.setAccessToken(t),c({type:"SET_TOKEN",token:t}),ee.getMe().then((function(e){c({type:"SET_USER",user:e})})),ee.getUserPlaylists().then((function(e){c({type:"SET_PLAYLISTS",playlists:e})})),ee.getPlaylist("37i9dQZEVXcDKwfS1dfIel?gtm=1").then((function(e){return c({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})),ee.getMyTopArtists().then((function(e){return c({type:"SET_TOP_ARTISTS",top_artists:e})})),c({type:"SET_SPOTIFY",spotify:ee}))}),[n,c]),Object(l.jsx)("div",{className:"App",children:n?Object(l.jsx)($,{spotify:ee}):Object(l.jsx)(j,{})})},ne=n(13),se=(n(217),function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(ne.a)(Object(ne.a)({},e),{},{user:t.user});case"SET_PLAYING":return Object(ne.a)(Object(ne.a)({},e),{},{playing:t.playing});case"SET_ITEM":return Object(ne.a)(Object(ne.a)({},e),{},{item:t.item});case"SET_TOP_ARTISTS":return Object(ne.a)(Object(ne.a)({},e),{},{top_artists:t.top_artists});case"SET_SPOTIFY":return Object(ne.a)(Object(ne.a)({},e),{},{spotify:t.spotify});case"SET_TOKEN":return Object(ne.a)(Object(ne.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(ne.a)(Object(ne.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(ne.a)(Object(ne.a)({},e),{},{discover_weekly:t.discover_weekly});default:return e}}),ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,544)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(v,{initialState:{user:null,playlists:[],spotify:null,discover_weekly:null,top_artists:null,playing:!1,item:null,token:null},reducer:se,children:Object(l.jsx)(te,{})})}),document.getElementById("root")),ce()}},[[521,1,2]]]);
//# sourceMappingURL=main.e8f62d6c.chunk.js.map