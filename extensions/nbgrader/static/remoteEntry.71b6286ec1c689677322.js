var _JUPYTERLAB;(()=>{"use strict";var e,r,t,a,n,o,i,l,u,d,f,s,c,p,h,v,b,m,g,y,j,w,k,P={299:(e,r,t)=>{var a={"./index":()=>Promise.all([t.e(778),t.e(753),t.e(545)]).then((()=>()=>t(545))),"./extension":()=>Promise.all([t.e(778),t.e(753),t.e(545)]).then((()=>()=>t(545))),"./style":()=>t.e(84).then((()=>()=>t(84)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a="default",n=t.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>n,init:()=>o})}},S={};function E(e){var r=S[e];if(void 0!==r)return r.exports;var t=S[e]={id:e,exports:{}};return P[e](t,t.exports,E),t.exports}E.m=P,E.c=S,E.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return E.d(r,{a:r}),r},E.d=(e,r)=>{for(var t in r)E.o(r,t)&&!E.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},E.f={},E.e=e=>Promise.all(Object.keys(E.f).reduce(((r,t)=>(E.f[t](e,r),r)),[])),E.u=e=>e+"."+{84:"6f2b5c0b96e785aa5c7a",208:"1711d9a4e026ce66c0fe",236:"64c98803b18a93c98c3d",376:"393aa11a3d0848119bb5",545:"58791f3a342f5db1f674",743:"17397925ac68f164ad01",753:"875e4caa337d37486d90",778:"9878f7ed2ca8988a9927",831:"f667f1fd819c3a40e1a3"}[e]+".js?v="+{84:"6f2b5c0b96e785aa5c7a",208:"1711d9a4e026ce66c0fe",236:"64c98803b18a93c98c3d",376:"393aa11a3d0848119bb5",545:"58791f3a342f5db1f674",743:"17397925ac68f164ad01",753:"875e4caa337d37486d90",778:"9878f7ed2ca8988a9927",831:"f667f1fd819c3a40e1a3"}[e],E.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),E.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="nbgrader:",E.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var i,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var f=u[d];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+n){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,E.nc&&i.setAttribute("nonce",E.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[a];var s=(r,a)=>{i.onerror=i.onload=null,clearTimeout(c);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),r)return r(a)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),l&&document.head.appendChild(i)}},E.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{E.S={};var e={},r={};E.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];E.o(E.S,t)||(E.S[t]={});var o=E.S[t],i="nbgrader",l=(e,r,t,a)=>{var n=o[e]=o[e]||{},l=n[r];(!l||!l.loaded&&(!a!=!l.eager?a:i>l.from))&&(n[r]={get:t,from:i,eager:!!a})},u=[];return"default"===t&&(l("@jupyter-notebook/application","7.0.2",(()=>Promise.all([E.e(831),E.e(743),E.e(778),E.e(208),E.e(753)]).then((()=>()=>E(831))))),l("@jupyter-notebook/tree","7.0.2",(()=>Promise.all([E.e(743),E.e(778),E.e(376)]).then((()=>()=>E(376))))),l("nbgrader","0.9.1",(()=>Promise.all([E.e(778),E.e(753),E.e(545)]).then((()=>()=>E(545)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;E.g.importScripts&&(e=E.g.location+"");var r=E.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&!e;)e=t[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),E.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var i=r[a],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(l=e[o]))[0]?"-":(a>0?".":"")+(a=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():n(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var i=0,l=1,u=!0;;l++,i++){var d,f,s=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(f=(typeof(d=r[i]))[0]))return!u||("u"==s?l>a&&!n:""==s!=n);if("u"==f){if(!u||"u"!=s)return!1}else if(u)if(s==f)if(l<=a){if(d!=e[l])return!1}else{if(n?d>e[l]:d<e[l])return!1;d!=e[l]&&(u=!1)}else if("s"!=s&&"n"!=s){if(n||l<=a)return!1;u=!1,l--}else{if(l<=a||f<s!=n)return!1;u=!1}else"s"!=s&&"n"!=s&&(u=!1,l--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},i=(e,r)=>{var t=E.S[e];if(!t||!E.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},l=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||a(e,r)?r:e),0))&&t[r]},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},d=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(a)+")",f=(e,r,t,a)=>{var n=u(e,t);return o(a,n)||p(d(e,t,n,a)),v(e[t][n])},s=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!o(t,r)||e&&!a(e,r)?e:r),0))&&n[r]},c=(e,r,t,a)=>{var o=e[t];return"No satisfying version ("+n(a)+") of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(o).map((e=>e+" from "+o[e].from)).join(", ")},p=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},h=(e,r,t,a)=>{p(c(e,r,t,a))},v=e=>(e.loaded=1,e.get()),m=(b=e=>function(r,t,a,n){var o=E.I(r);return o&&o.then?o.then(e.bind(e,r,E.S[r],t,a,n)):e(r,E.S[r],t,a,n)})(((e,r,t,a)=>(i(e,t),v(s(r,t,a)||h(r,e,t,a)||l(r,t))))),g=b(((e,r,t,a)=>(i(e,t),f(r,0,t,a)))),y=b(((e,r,t,a,n)=>{var o=r&&E.o(r,t)&&s(r,t,a);return o?v(o):n()})),j={},w={778:()=>g("default","@lumino/widgets",[1,2,0,1]),519:()=>g("default","@jupyterlab/coreutils",[1,6,0,5]),609:()=>g("default","@jupyterlab/apputils",[1,4,1,5]),717:()=>g("default","@lumino/disposable",[1,2,0,0]),901:()=>g("default","@lumino/signaling",[1,2,0,0]),965:()=>g("default","@jupyterlab/application",[1,4,0,5]),29:()=>g("default","react",[1,18,2,0]),212:()=>g("default","@jupyterlab/notebook",[1,4,0,5]),380:()=>g("default","@jupyterlab/services",[1,7,0,5]),450:()=>g("default","@jupyterlab/mainmenu",[1,4,0,5]),925:()=>y("default","@jupyter-notebook/application",[1,7,0,2],(()=>Promise.all([E.e(831),E.e(743),E.e(208)]).then((()=>()=>E(831))))),928:()=>y("default","@jupyter-notebook/tree",[1,7,0,2],(()=>Promise.all([E.e(743),E.e(236)]).then((()=>()=>E(376))))),888:()=>g("default","@jupyterlab/ui-components",[1,4,0,5]),930:()=>g("default","@lumino/coreutils",[1,2,0,0]),4:()=>g("default","@lumino/properties",[1,2,0,0]),452:()=>g("default","@jupyterlab/translation",[1,4,0,5]),463:()=>g("default","@jupyterlab/rendermime",[1,4,0,5]),633:()=>g("default","@lumino/messaging",[1,2,0,0]),697:()=>g("default","@lumino/algorithm",[1,2,0,0]),710:()=>m("default","@jupyterlab/docregistry",[1,4,0,5]),797:()=>g("default","@lumino/polling",[1,2,0,0])},k={208:[4,452,463,633,697,710,797],545:[29,212,380,450,925,928],743:[888,930],753:[519,609,717,901,965],778:[778]},E.f.consumes=(e,r)=>{E.o(k,e)&&k[e].forEach((e=>{if(E.o(j,e))return r.push(j[e]);var t=r=>{j[e]=0,E.m[e]=t=>{delete E.c[e],t.exports=r()}},a=r=>{delete j[e],E.m[e]=t=>{throw delete E.c[e],r}};try{var n=w[e]();n.then?r.push(j[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={907:0};E.f.j=(r,t)=>{var a=E.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(7(43|53|78)|208)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=E.p+E.u(r),i=new Error;E.l(o,(t=>{if(E.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,i,l]=t,u=0;if(o.some((r=>0!==e[r]))){for(a in i)E.o(i,a)&&(E.m[a]=i[a]);l&&l(E)}for(r&&r(t);u<o.length;u++)n=o[u],E.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunknbgrader=self.webpackChunknbgrader||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),E.nc=void 0;var T=E(299);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB).nbgrader=T})();