var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,o,i,a,l,u,f,d,s,p,c,h,v,b,y,m,g,j,w={405:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(877),t.e(348)]).then((()=>()=>t(43))),"./extension":()=>Promise.all([t.e(877),t.e(348)]).then((()=>()=>t(43)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),i=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>i})}},k={};function P(e){var r=k[e];if(void 0!==r)return r.exports;var t=k[e]={exports:{}};return w[e](t,t.exports,P),t.exports}P.m=w,P.c=k,P.amdO={},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,P.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);P.r(o);var i={};e=e||[null,r({}),r([]),r(r)];for(var a=2&n&&t;"object"==typeof a&&!~e.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((e=>i[e]=()=>t[e]));return i.default=()=>t,P.d(o,i),o},P.d=(e,r)=>{for(var t in r)P.o(r,t)&&!P.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},P.f={},P.e=e=>Promise.all(Object.keys(P.f).reduce(((r,t)=>(P.f[t](e,r),r)),[])),P.u=e=>e+"."+{333:"907518d324c45486f166",348:"5e4f546586275598a178",568:"e71771a8e7c1b0cabb19",877:"702d934b6799f8687182",951:"b304946e1f7bba04f378",985:"29b3134659fa0d3245fd"}[e]+".js?v="+{333:"907518d324c45486f166",348:"5e4f546586275598a178",568:"e71771a8e7c1b0cabb19",877:"702d934b6799f8687182",951:"b304946e1f7bba04f378",985:"29b3134659fa0d3245fd"}[e],P.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),P.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="@jupyterlite/pyodide-kernel-extension:",P.l=(e,r,o,i)=>{if(t[e])t[e].push(r);else{var a,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var d=u[f];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){a=d;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,P.nc&&a.setAttribute("nonce",P.nc),a.setAttribute("data-webpack",n+o),a.src=e),t[e]=[r];var s=(r,n)=>{a.onerror=a.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),l&&document.head.appendChild(a)}},P.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{P.S={};var e={},r={};P.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];P.o(P.S,t)||(P.S[t]={});var i=P.S[t],a="@jupyterlite/pyodide-kernel-extension",l=(e,r,t,n)=>{var o=i[e]=i[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:a>l.from))&&(o[r]={get:t,from:a,eager:!!n})},u=[];return"default"===t&&(l("@jupyterlite/pyodide-kernel-extension","0.2.1",(()=>Promise.all([P.e(877),P.e(348)]).then((()=>()=>P(43))))),l("@jupyterlite/pyodide-kernel","0.2.1",(()=>Promise.all([P.e(951),P.e(985),P.e(877)]).then((()=>()=>P(706)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;P.g.importScripts&&(e=P.g.location+"");var r=P.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),P.p=e})(),o=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},i=(e,r)=>{e=o(e),r=o(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var n=e[t],i=(typeof n)[0];if(t>=r.length)return"u"==i;var a=r[t],l=(typeof a)[0];if(i!=l)return"o"==i&&"n"==l||"s"==l||"u"==i;if("o"!=i&&"u"!=i&&n!=a)return n<a;t++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():a(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},l=(e,r)=>{if(0 in e){r=o(r);var t=e[0],n=t<0;n&&(t=-t-1);for(var i=0,a=1,u=!0;;a++,i++){var f,d,s=a<e.length?(typeof e[a])[0]:"";if(i>=r.length||"o"==(d=(typeof(f=r[i]))[0]))return!u||("u"==s?a>t&&!n:""==s!=n);if("u"==d){if(!u||"u"!=s)return!1}else if(u)if(s==d)if(a<=t){if(f!=e[a])return!1}else{if(n?f>e[a]:f<e[a])return!1;f!=e[a]&&(u=!1)}else if("s"!=s&&"n"!=s){if(n||a<=t)return!1;u=!1,a--}else{if(a<=t||d<s!=n)return!1;u=!1}else"s"!=s&&"n"!=s&&(u=!1,a--)}}var p=[],c=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?c()|c():2==h?c()&c():h?l(h,r):!c())}return!!c()},u=(e,r)=>{var t=P.S[e];if(!t||!P.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},f=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&i(e,r)?r:e),0)},d=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",s=(e,r,t,n)=>{var o=f(e,t);return l(n,o)||c(d(e,t,o,n)),h(e[t][o])},p=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!l(t,r)||e&&!i(e,r)?e:r),0))&&n[r]},c=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},h=e=>(e.loaded=1,e.get()),b=(v=e=>function(r,t,n,o){var i=P.I(r);return i&&i.then?i.then(e.bind(e,r,P.S[r],t,n,o)):e(r,P.S[r],t,n,o)})(((e,r,t,n)=>(u(e,t),s(r,0,t,n)))),y=v(((e,r,t,n,o)=>{var i=r&&P.o(r,t)&&p(r,t,n);return i?h(i):o()})),m={},g={430:()=>b("default","@jupyterlite/kernel",[2,0,2,0]),483:()=>b("default","@jupyterlab/coreutils",[1,6,0,10]),144:()=>b("default","@jupyterlite/server",[2,0,2,0]),417:()=>b("default","@jupyterlite/contents",[2,0,2,0]),930:()=>b("default","@lumino/coreutils",[1,2,0,0]),333:()=>y("default","@jupyterlite/pyodide-kernel",[2,0,2,1],(()=>Promise.all([P.e(951),P.e(985)]).then((()=>()=>P(706)))))},j={333:[333],348:[144,417],877:[430,483],985:[930]},P.f.consumes=(e,r)=>{P.o(j,e)&&j[e].forEach((e=>{if(P.o(m,e))return r.push(m[e]);var t=r=>{m[e]=0,P.m[e]=t=>{delete P.c[e],t.exports=r()}},n=r=>{delete m[e],P.m[e]=t=>{throw delete P.c[e],r}};try{var o=g[e]();o.then?r.push(m[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{P.b=document.baseURI||self.location.href;var e={335:0};P.f.j=(r,t)=>{var n=P.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(333|877)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var i=P.p+P.u(r),a=new Error;P.l(i,(t=>{if(P.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[i,a,l]=t,u=0;if(i.some((r=>0!==e[r]))){for(n in a)P.o(a,n)&&(P.m[n]=a[n]);l&&l(P)}for(r&&r(t);u<i.length;u++)o=i[u],P.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunk_jupyterlite_pyodide_kernel_extension=self.webpackChunk_jupyterlite_pyodide_kernel_extension||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var _=P(405);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyterlite/pyodide-kernel-extension"]=_})();
//# sourceMappingURL=remoteEntry.56b1d891a24a2cc674e1.js.map