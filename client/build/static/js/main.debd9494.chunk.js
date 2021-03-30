(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/logo.7e7de3c4.png"},38:function(e,t,a){e.exports=a(72)},43:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),l=a.n(c),o=a(11),i=(a(43),a(35)),s=a.n(i),u=a(9),m=a.n(u),d=a(13),p=a(1),f=a(19),v=a(15),b=a(16),g=a(8),h=a.n(g),E=new(function(){function e(){Object(v.a)(this,e),this.axios=h.a.create()}return Object(b.a)(e,[{key:"setHeader",value:function(e,t){t?this.axios.defaults.headers.common[e]=t:delete this.axios.defaults.headers.common[e]}},{key:"register",value:function(e){return console.log("trying api.js, register..."),console.log("userData: ",e),this.axios.post("/api/register",e)}},{key:"login",value:function(e){return this.axios.post("/api/login",e)}},{key:"authenticated",value:function(){return this.axios.post("/api/authenticated")}}]),e}()),N=a(14),x=Object(n.createContext)({userAuth:{}}),y=x.Provider,w=function(e,t){var a=t.type,n=t.payload;switch(a){case"LOGIN_USER":return Object(N.a)({},e,{userAuth:n});case"LOGOUT_USER":return Object(N.a)({},e,{userAuth:{}});default:return e}},j=function(e){var t=e.children,a=Object(n.useReducer)(w,{userAuth:{}}),c=Object(p.a)(a,2),l=c[0],o=c[1];return r.a.createElement(y,{value:[l,o]},t)},O=function(){return Object(n.useContext)(x)},S=function(e){return k(e),A(e),e?Object(f.a)(e):void 0},k=function(e){e?localStorage.setItem("jwtToken",e):localStorage.removeItem("jwtToken")},A=function(e){e?E.setHeader("Authorization",e):E.setHeader("Authorization",!1)},L=function(){var e=O(),t=Object(p.a)(e,2)[1],a=Object(n.useState)(!1),r=Object(p.a)(a,2),c=r[0],l=r[1];return Object(n.useEffect)(function(){if(!c)if(localStorage.jwtToken){var e=localStorage.jwtToken,a=Object(f.a)(e),n=Date.now()/1e3,r=function(){S(!1),t({type:"LOGOUT_USER"})};if(a.exp<n)r();else A(e),function(){var e=Object(d.a)(m.a.mark(function e(){var n,c,o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.authenticated();case 3:c=e.sent,o=c.data,n=o,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r();case 11:n&&t({type:"LOGIN_USER",payload:{token:a,user:n}}),l(!0);case 13:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}()()}else l(!0)},[t,c]),c},D=function(){var e=O(),t=Object(p.a)(e,1)[0].userAuth.token;return console.log("useStoreContext: ",O()),t&&t.exp>Date.now()/1e3},T=function(){var e=O();return Object(p.a)(e,1)[0].userAuth.user},_=function(){var e=D();e=void 0!==e;var t=function(){var e=O(),t=Object(p.a)(e,2)[1];return function(){S(!1),t({type:"LOGOUT_USER"})}}();return console.log("header.js, IsAuth: ",e),r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark fixed-top",id:"header-nav"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{className:"navbar-brand d-flex align-items-center",href:"/"},r.a.createElement("img",{id:"logo",src:s.a,alt:"logo"}),r.a.createElement("span",{id:"nav-title",className:"ml-2"},"News Flow")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#header-nav-links","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"header-nav-links"},r.a.createElement("ul",{className:"navbar-nav"},!e&&r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link","aria-current":"page",href:"/signup"},"Sign up")),!e&&r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link","aria-current":"page",href:"/login"},"Login")),e&&r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/profile"},"profile")),e&&r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{onClick:t,className:"nav-link",href:"/"},"logout")))))))},C=function(e){var t=e.text;return r.a.createElement("footer",{className:"footer mt-auto text-center py-3 bg-dark text-light"},t)};C.defaultProps={text:"Pod 2 \xa9 2021"};var U=C,F=a(2);h.a.defaults.headers.common={"Content-Type":"application/json"};var I={getFavorites:function(e){return console.log("getFavorites, email: ",e),h.a.get("/api/savedArticles/"+e).then(function(e){return e.data}).catch(function(e){throw console.log("error: ",e.results),e})},saveArticle:function(e,t){return h.a.post("/api/savedArticles",{email:e,articleData:t})},deleteFavorite:function(e,t){return console.log("deleteFavorite called...","email: ",e,"url: ",t),h.a.delete("/api/savedArticles",{data:{email:e,url:t}},{headers:{"Content-Type":"text/plain"}})}},P=function(e){var t=e.savedArticle,a=t.title,n=t.description,c=t.url,l=t.publishedDate,o=t.thumbnail,i=t.provider,s=e.getSavedArticles,u=T();return r.a.createElement("div",{className:"card mb-3 news-card",style:{maxWidth:"600px",margin:"auto"}},r.a.createElement("div",{className:"card-body d-flex"},r.a.createElement("img",{className:"me-3 rounded article-thumbnail",src:o,alt:"..."}),r.a.createElement("div",{className:"d-flex flex-column flex-grow-1 align-items-stretch"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-start mb-2"},r.a.createElement("h5",{className:"card-title article-title mb-0 me-2"},a),r.a.createElement("button",{onClick:function(){console.log("handleDelete called..."),console.log("authData: ",u),I.deleteFavorite(u.email,c).then(s())},id:"saveBtn",className:"btn btn-danger save-button me-1"},"Delete"),r.a.createElement("a",{id:"saveBtn",className:"btn btn-primary save-button",href:c,target:"_blank",rel:"noopener noreferrer"},"View")),r.a.createElement("p",{className:"card-text article-description mb-1"},n),r.a.createElement("div",{className:"d-flex justify-content-between align-items-end mt-auto"},r.a.createElement("p",{className:"card-text article-publisher mb-0"},r.a.createElement("small",{className:"text-muted"},"by ",i)),r.a.createElement("p",{className:"card-text article-published-date mb-0"},r.a.createElement("small",{className:"text-muted"},l))))))};var R=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],l=function(e){var t=e.map(function(e){return r.a.createElement(P,{savedArticle:e,getSavedArticles:o})});c(t)},o=function(){var e=Object(d.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I.getFavorites("coolguy69@internet.net").then(function(e){console.log("savedArticles: ",e),l(e)}));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){console.log("SavedFeed.js useEffect() called"),o()},[]),r.a.createElement("div",{className:"card-container overflow-auto"},a.length>0?a:r.a.createElement("h2",{className:"text-center secondary-text"},"You have no saved posts."))},z=function(){return r.a.createElement("div",{className:"container-md pb-4"},r.a.createElement("h1",{className:"text-center section-header mb-3"},"Saved Posts"),r.a.createElement(R,null))},B=a(36),Y={getLocation:function(e,t){return h.a.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(e,",").concat(t,"&key=").concat("AIzaSyBZO9677DX6f_P-azngepYL5lT7NHKD7YY","&result_type=").concat("","&sortBy=").concat("relevance")).then(function(e){var t,a,n,r,c=e.data.results;return"OK"===e.data.status?(c[0].address_components.forEach(function(e){var t=e.types[0];switch(!0){case"locality"===t:a=e.long_name;break;case"administrative_area_level_1"===t:n=e.long_name;break;case"country"===t:r=e.long_name}}),t=[a,n,r].filter(function(e){return void 0!==e}).join(", ")):"ZERO_RESULTS"===e.data.status&&(t="No results."),t})},getNews:function(e){return h.a.get("https://api.bing.microsoft.com/v7.0/news/search?mkt=en-US&q="+e,{headers:{"Ocp-Apim-Subscription-Key":"069e5ebb8a3d4d92a7171d0e32b90c4b"}}).then(function(e){return e.data.value.map(function(e){var t,a=new Date(e.datePublished);a=a.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"});try{t=e.image.thumbnail.contentUrl}catch(n){try{t=e.provider[0].image.thumbnail.contentUrl}catch(r){t="https://www.pinclipart.com/picdir/big/534-5342402_brown-gorilla-stuffed-toy-svg-clip-arts-gorilla.png"}}return{url:e.url,title:e.name,description:e.description,publishedDate:a,thumbnail:t,category:e.category,provider:e.provider[0].name}})})}},G=(a(64),function(e){var t=e.initLat,a=e.initLng,c=e.zoom,l=e.setLocation,o=[],i=function(){var e=function(e,n,r){return new window.google.maps.Map(document.getElementById("map"),{center:{lat:t,lng:a},zoom:r})}(0,0,c);e.addListener("click",function(t){return s(t,e)})},s=function(e,t){var a=e.latLng.toJSON(),n=a.lat,r=a.lng;console.log(" ----- Google Maps API Call Results ----- "),console.log("You clicked these coordinates: ".concat(n,", ").concat(r));var c=function(e,t,a){var n=new window.google.maps.Marker({position:{lat:t,lng:a},map:e});return o.push(n),n}(t,n,r);o.length>1&&(o[0].setMap(null),o.shift()),Y.getLocation(n,r).then(function(e){return function(e,t,a){new window.google.maps.InfoWindow({content:"".concat(e)}).open(t,a)}(e,t,c),l(e),e})};return Object(n.useEffect)(function(){new B.a(Object(N.a)({apiKey:"AIzaSyBZO9677DX6f_P-azngepYL5lT7NHKD7YY",version:"weekly"},{})).load().then(function(){return i()})},[]),r.a.createElement("div",{id:"map"})}),H=function(e){var t=e.article,a=t.url,c=t.title,l=t.description,o=t.publishedDate,i=t.thumbnail,s=(t.category,t.provider),u=Object(n.useState)(!1),m=Object(p.a)(u,2),d=m[0],f=m[1],v=D(),b=T();return Object(n.useEffect)(function(){},[d]),r.a.createElement("div",{className:"card mb-3 news-card",style:{maxWidth:"600px",margin:"auto"}},r.a.createElement("div",{className:"card-body d-flex"},r.a.createElement("img",{className:"me-3 rounded article-thumbnail",src:i,alt:"..."}),r.a.createElement("div",{className:"d-flex flex-column flex-grow-1 align-items-stretch"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-start mb-2"},r.a.createElement("h5",{className:"card-title article-title mb-0 me-2"},c),r.a.createElement("a",{className:"btn btn-primary save-button me-1",href:a,target:"_blank",rel:"noopener noreferrer"},"View"),v&&r.a.createElement("a",{id:"saveBtn",className:"btn btn-primary save-button ".concat(d&&"disabled"),onClick:function(){console.log("url: ",a);var e={title:c,description:l,url:a,publishedDate:o,thumbnail:i,provider:s};b&&I.saveArticle(b.email,e).then(f(!0))}},"Save")),r.a.createElement("p",{className:"card-text article-description mb-1"},l),r.a.createElement("div",{className:"d-flex justify-content-between align-items-end mt-auto"},r.a.createElement("p",{className:"card-text article-publisher mb-0"},r.a.createElement("small",{className:"text-muted"},"by ",s)),r.a.createElement("p",{className:"card-text article-published-date mb-0"},r.a.createElement("small",{className:"text-muted"},o))))))};var K=function(e){var t=e.location,a=Object(n.useState)([]),c=Object(p.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)(function(){Y.getNews(t).then(function(e){return function(e){var t=e.map(function(e){return r.a.createElement(H,{article:e})});o(t)}(e)})},[t]),r.a.createElement("div",{className:"card-container overflow-auto",id:"scroll-bar"},l,l.length>0?l:r.a.createElement("h2",{className:"text-center secondary-text"},"No results for this location."))},M=(a(65),function(){var e=Object(n.useState)("Seatle, Washington, United States"),t=Object(p.a)(e,2),a=t[0],c=t[1];return r.a.createElement("main",{className:"pb-4"},r.a.createElement("div",{className:"container-md"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-6 pb-3"},r.a.createElement("h1",{id:"map-text",className:"text-center section-header mb-3"},"Explore"),r.a.createElement(G,{initLat:47.59764059923029,initLng:-122.32893838093258,zoom:12,setLocation:c})),r.a.createElement("div",{className:"col-xl-6 justify-content-center"},r.a.createElement("h1",{id:"news-text",className:"text-center section-header mb-3"},"News Feed"),r.a.createElement(K,{location:a})))))}),q=(a(31),a(32),function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(p.a)(l,2),i=o[0],s=o[1],u=Object(n.useState)(""),m=Object(p.a)(u,2),d=m[0],f=m[1];return r.a.createElement("div",{id:"root"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"form-div"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={fullName:a,password:i,email:d};E.register(t).catch(function(e){return console.log(e.response.data)})}},r.a.createElement("h1",{className:"title"},"Sign Up"),r.a.createElement("input",{type:"text",placeholder:"Email",onChange:function(e){f(e.target.value)},value:d,className:"form-control form-group",name:"email",required:!0}),r.a.createElement("input",{type:"text",placeholder:"Full Name",onChange:function(e){c(e.target.value)},value:a,className:"form-control form-group",name:"fullName",required:!0}),r.a.createElement("input",{type:"password",placeholder:"Password",onChange:function(e){s(e.target.value)},value:i,className:"form-control form-group",name:"password",required:!0}),r.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block",value:"Submit"})))))}),W=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(p.a)(l,2),i=o[0],s=o[1],u=Object(F.g)(),f=function(){var e=O(),t=Object(p.a)(e,2)[1];return function(){var e=Object(d.a)(m.a.mark(function e(a){var n,r,c,l,o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.login(a);case 2:return n=e.sent,r=n.data,c=r.token,l=r.user,o=S(c),t({type:"LOGIN_USER",payload:{token:o,user:l}}),console.log(o),e.abrupt("return",o);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}();return r.a.createElement("div",{id:"root"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"form-div"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f({email:i,password:a}).then(function(e){console.log(e),u.push("/")}).catch(function(e){alert(e)})}},r.a.createElement("h1",{className:"title"}," Login "),r.a.createElement("input",{type:"text",placeholder:"E-mail",onChange:function(e){s(e.target.value)},value:i,className:"form-control form-group"}),r.a.createElement("input",{type:"password",placeholder:"password",onChange:function(e){c(e.target.value)},value:a,className:"form-control form-group"}),r.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block",value:"Submit"})))))},J=a(17),Z=function(e){var t=e.component,a=e.children,n=e.redirectTo,c=void 0===n?"/":n,l=Object(J.a)(e,["component","children","redirectTo"]),o=D();o=void 0!==o;var i=T();console.log("isAuth? ",o),console.log("authUser: ",i);return r.a.createElement(F.b,Object.assign({},l,{render:function(e){var n=e.location;return o?r.a.createElement(F.a,{to:{pathname:c,state:{from:n}}}):t?r.a.createElement(t,null):a}}))};var V=function(){console.log("useAuthTokenStore()");var e=L();return console.log("App.js, isAuth: ",e),r.a.createElement("div",{className:"h-100 d-flex flex-column pt-5"},r.a.createElement(_,null),r.a.createElement(F.d,null,r.a.createElement(F.b,{exact:!0,path:"/",component:M}),r.a.createElement(Z,{exact:!0,path:"/signup",redirectTo:"/",component:q}),r.a.createElement(Z,{exact:!0,path:"/login",redirectTo:"/",component:W}),r.a.createElement(F.b,{exact:!0,path:"/profile",component:z})),r.a.createElement(U,null))},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,73)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)})};a(71);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(j,null,r.a.createElement(V,null)))),document.getElementById("root")),X()}},[[38,1,2]]]);
//# sourceMappingURL=main.debd9494.chunk.js.map