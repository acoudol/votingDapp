!function(){"use strict";var e,t,n,r,c,f,o,a,d,u={},i={};function b(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,loaded:!1,exports:{}},r=!0;try{u[e].call(n.exports,n,n.exports,b),r=!1}finally{r&&delete i[e]}return n.loaded=!0,n.exports}b.m=u,b.amdO={},e=[],b.O=function(t,n,r,c){if(n){c=c||0;for(var f=e.length;f>0&&e[f-1][2]>c;f--)e[f]=e[f-1];e[f]=[n,r,c];return}for(var o=1/0,f=0;f<e.length;f++){for(var n=e[f][0],r=e[f][1],c=e[f][2],a=!0,d=0;d<n.length;d++)o>=c&&Object.keys(b.O).every(function(e){return b.O[e](n[d])})?n.splice(d--,1):(a=!1,c<o&&(o=c));if(a){e.splice(f--,1);var u=r();void 0!==u&&(t=u)}}return t},b.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return b.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},b.t=function(e,r){if(1&r&&(e=this(e)),8&r||"object"==typeof e&&e&&(4&r&&e.__esModule||16&r&&"function"==typeof e.then))return e;var c=Object.create(null);b.r(c);var f={};t=t||[null,n({}),n([]),n(n)];for(var o=2&r&&e;"object"==typeof o&&!~t.indexOf(o);o=n(o))Object.getOwnPropertyNames(o).forEach(function(t){f[t]=function(){return e[t]}});return f.default=function(){return e},b.d(c,f),c},b.d=function(e,t){for(var n in t)b.o(t,n)&&!b.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},b.f={},b.e=function(e){return Promise.all(Object.keys(b.f).reduce(function(t,n){return b.f[n](e,t),t},[]))},b.u=function(e){return"static/chunks/"+e+"."+({223:"58b0604f647a7082",294:"399242c5ac54ea90",304:"aef225a8c6014664",896:"5d4c8bd267540cc9",929:"6d02ab7eb424c728",1057:"f2a3c44cce2002f2",1174:"ad42040df9eabab9",1395:"891f131b77594e09",1443:"61450fa9ae9ab342",1638:"8abc6d1c47589fc9",1799:"da8e61782b577082",1846:"54eb8d43066bbf76",1858:"b309c0d0a85f02d2",2224:"cbd9536cf92a09fa",2371:"3a7aa48d9b7b8437",2395:"c1c5b045064552be",2584:"38c38df996408d14",2849:"6e81196eaac8d101",2957:"0aa5e3dd3d01ddba",3342:"83722c5edcc46e73",3376:"17d27f64cb634326",3994:"4690fe34a3610721",4253:"7edf602b86cbf5f6",4263:"1b0073f7220fa2d6",4402:"cf2edbef641fde6a",4429:"ae58a586ce6e109e",4530:"24c8fa57f4e8f5cd",4543:"80eef19afe8aea4e",4696:"b4352c6297349a0f",4732:"30badd5181da4966",4797:"c36e035650d29891",4884:"49a069535af1ca63",5289:"315b5b162121b8ad",5317:"48f5aad66f9c9978",5453:"0682f8129985643c",5519:"596f8cb49ac9f455",5763:"2ccfdae75a6b7a9d",5796:"aa6dc967f4837652",5828:"ed87059eeb7f9e43",5859:"6d307acddcdb9333",5883:"e4477e9126daa625",6015:"5b5bedb14559561a",6395:"3935233d8917086c",6426:"add81985a1f1236e",6467:"4c8f72d11ab01185",6730:"002912241aef18a3",6878:"5657c32e06476a2e",7780:"b7f5b4c66a3e00d7",8157:"0507a6ddfa4a8885",8308:"42ada5d49a016ae6",8480:"83bdbfcde5d5d662",8661:"6617dd1d98f01285",9171:"d7497398707f502a",9261:"4104f75ec1fd8c27",9385:"b41212e367c29795",9752:"1f16643347978bad",9946:"0bc3485514f1adec"})[e]+".js"},b.miniCssF=function(e){return"static/css/"+({798:"2a5b1e1506338cd4",3185:"766cb4203c8d032f"})[e]+".css"},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},c="_N_E:",b.l=function(e,t,n,f){if(r[e]){r[e].push(t);return}if(void 0!==n)for(var o,a,d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var i=d[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==c+n){o=i;break}}o||(a=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,b.nc&&o.setAttribute("nonce",b.nc),o.setAttribute("data-webpack",c+n),o.src=b.tu(e)),r[e]=[t];var l=function(t,n){o.onerror=o.onload=null,clearTimeout(s);var c=r[e];if(delete r[e],o.parentNode&&o.parentNode.removeChild(o),c&&c.forEach(function(e){return e(n)}),t)return t(n)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),a&&document.head.appendChild(o)},b.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},b.tt=function(){return void 0===f&&(f={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(f=trustedTypes.createPolicy("nextjs#bundler",f))),f},b.tu=function(e){return b.tt().createScriptURL(e)},b.p="/votingDapp/_next/",o={2272:0},b.f.j=function(e,t){var n=b.o(o,e)?o[e]:void 0;if(0!==n){if(n)t.push(n[2]);else if(2272!=e){var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var c=b.p+b.u(e),f=Error();b.l(c,function(t){if(b.o(o,e)&&(0!==(n=o[e])&&(o[e]=void 0),n)){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,n[1](f)}},"chunk-"+e,e)}else o[e]=0}},b.O.j=function(e){return 0===o[e]},a=function(e,t){var n,r,c=t[0],f=t[1],a=t[2],d=0;if(c.some(function(e){return 0!==o[e]})){for(n in f)b.o(f,n)&&(b.m[n]=f[n]);if(a)var u=a(b)}for(e&&e(t);d<c.length;d++)r=c[d],b.o(o,r)&&o[r]&&o[r][0](),o[r]=0;return b.O(u)},(d=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d)),b.nc=void 0}();