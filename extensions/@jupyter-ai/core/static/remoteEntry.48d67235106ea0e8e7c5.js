var _JUPYTERLAB;(()=>{"use strict";var e,r,t,a,o,n,i,l,d,f,u,c,b,s,p,h,m,v,y,g,j,P,w,k,_,O,S={22399:(e,r,t)=>{var a={"./index":()=>Promise.all([t.e(620),t.e(341),t.e(380),t.e(29),t.e(963),t.e(132),t.e(864)]).then((()=>()=>t(30864))),"./extension":()=>Promise.all([t.e(620),t.e(341),t.e(380),t.e(29),t.e(963),t.e(132),t.e(864)]).then((()=>()=>t(30864))),"./style":()=>t.e(643).then((()=>()=>t(76643)))},o=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),n=(e,r)=>{if(t.S){var a="default",o=t.S[a];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>o,init:()=>n})}},E={};function x(e){var r=E[e];if(void 0!==r)return r.exports;var t=E[e]={id:e,exports:{}};return S[e](t,t.exports,x),t.exports}x.m=S,x.c=E,x.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return x.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,x.t=function(t,a){if(1&a&&(t=this(t)),8&a)return t;if("object"==typeof t&&t){if(4&a&&t.__esModule)return t;if(16&a&&"function"==typeof t.then)return t}var o=Object.create(null);x.r(o);var n={};e=e||[null,r({}),r([]),r(r)];for(var i=2&a&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>n[e]=()=>t[e]));return n.default=()=>t,x.d(o,n),o},x.d=(e,r)=>{for(var t in r)x.o(r,t)&&!x.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},x.f={},x.e=e=>Promise.all(Object.keys(x.f).reduce(((r,t)=>(x.f[t](e,r),r)),[])),x.u=e=>e+"."+{29:"80b9383ab8d29923abb7",132:"a5a92c71c28b2f78a426",136:"25db938f4dec1af075df",296:"c1fab29ee6698d164796",341:"bf295a98a382d909aca3",342:"133afdc0cac64ea6f3b3",380:"1d8633fd1460b6a300c6",397:"d17905aa3243f76edf83",407:"9450042a7a968f6bb1b2",527:"fbb5737cced749a84de3",560:"2fa7b4ae7a0d43e8eb1f",564:"33c26f2a6786700b29f6",598:"4f92e467887ba95a5a14",620:"cf49ee12c0ebc3f9bdbd",643:"86c5b64b2c003759c197",648:"7e9b72461f0bccdb604e",675:"756cf111884ba023580a",693:"2c3da85cc10c904e2289",703:"0ff36d6afd3dad9af47a",704:"ec24f0c6fea0adb81c6f",787:"e4b10d337857bc144420",819:"5cf2eced87f9df904298",861:"9c6afbfd5c181c7781b4",864:"76bba6e73ce66305b0b7",900:"e5afa91e5717cd8b1f97",928:"604addfd69ea7b34b76b",963:"05e514b82d50ff870683"}[e]+".js?v="+{29:"80b9383ab8d29923abb7",132:"a5a92c71c28b2f78a426",136:"25db938f4dec1af075df",296:"c1fab29ee6698d164796",341:"bf295a98a382d909aca3",342:"133afdc0cac64ea6f3b3",380:"1d8633fd1460b6a300c6",397:"d17905aa3243f76edf83",407:"9450042a7a968f6bb1b2",527:"fbb5737cced749a84de3",560:"2fa7b4ae7a0d43e8eb1f",564:"33c26f2a6786700b29f6",598:"4f92e467887ba95a5a14",620:"cf49ee12c0ebc3f9bdbd",643:"86c5b64b2c003759c197",648:"7e9b72461f0bccdb604e",675:"756cf111884ba023580a",693:"2c3da85cc10c904e2289",703:"0ff36d6afd3dad9af47a",704:"ec24f0c6fea0adb81c6f",787:"e4b10d337857bc144420",819:"5cf2eced87f9df904298",861:"9c6afbfd5c181c7781b4",864:"76bba6e73ce66305b0b7",900:"e5afa91e5717cd8b1f97",928:"604addfd69ea7b34b76b",963:"05e514b82d50ff870683"}[e],x.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),x.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},a="@jupyter-ai/core:",x.l=(e,r,o,n)=>{if(t[e])t[e].push(r);else{var i,l;if(void 0!==o)for(var d=document.getElementsByTagName("script"),f=0;f<d.length;f++){var u=d[f];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+o){i=u;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,x.nc&&i.setAttribute("nonce",x.nc),i.setAttribute("data-webpack",a+o),i.src=e),t[e]=[r];var c=(r,a)=>{i.onerror=i.onload=null,clearTimeout(b);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(a))),r)return r(a)},b=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),l&&document.head.appendChild(i)}},x.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{x.S={};var e={},r={};x.I=(t,a)=>{a||(a=[]);var o=r[t];if(o||(o=r[t]={}),!(a.indexOf(o)>=0)){if(a.push(o),e[t])return e[t];x.o(x.S,t)||(x.S[t]={});var n=x.S[t],i="@jupyter-ai/core",l=(e,r,t,a)=>{var o=n[e]=n[e]||{},l=o[r];(!l||!l.loaded&&(!a!=!l.eager?a:i>l.from))&&(o[r]={get:t,from:i,eager:!!a})},d=[];return"default"===t&&(l("@emotion/react","11.11.1",(()=>Promise.all([x.e(296),x.e(527),x.e(29),x.e(342)]).then((()=>()=>x(26527))))),l("@emotion/styled","11.11.0",(()=>Promise.all([x.e(675),x.e(29),x.e(564),x.e(407),x.e(560)]).then((()=>()=>x(52675))))),l("@jupyter-ai/core","2.9.0",(()=>Promise.all([x.e(620),x.e(341),x.e(380),x.e(29),x.e(963),x.e(132),x.e(864)]).then((()=>()=>x(30864))))),l("@jupyter/collaboration","1.0.1",(()=>Promise.all([x.e(136),x.e(29),x.e(648),x.e(132)]).then((()=>()=>x(29136))))),l("@mui/icons-material","5.14.1",(()=>Promise.all([x.e(620),x.e(928),x.e(29),x.e(963)]).then((()=>()=>x(13928))))),l("@mui/material","5.14.2",(()=>Promise.all([x.e(296),x.e(620),x.e(787),x.e(341),x.e(29),x.e(564),x.e(963),x.e(704)]).then((()=>()=>x(34787))))),l("react-markdown","8.0.7",(()=>Promise.all([x.e(693),x.e(861),x.e(29)]).then((()=>()=>x(81861))))),l("react-syntax-highlighter","15.5.0",(()=>Promise.all([x.e(598),x.e(29),x.e(397)]).then((()=>()=>x(95598))))),l("rehype-katex","6.0.3",(()=>Promise.all([x.e(693),x.e(900)]).then((()=>()=>x(94900))))),l("remark-math","5.1.1",(()=>x.e(703).then((()=>()=>x(7703)))))),e[t]=d.length?Promise.all(d).then((()=>e[t]=1)):1}}})(),(()=>{var e;x.g.importScripts&&(e=x.g.location+"");var r=x.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&!e;)e=t[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),x.p=e})(),o=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},n=(e,r)=>{e=o(e),r=o(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var a=e[t],n=(typeof a)[0];if(t>=r.length)return"u"==n;var i=r[t],l=(typeof i)[0];if(n!=l)return"o"==n&&"n"==l||"s"==l||"u"==n;if("o"!=n&&"u"!=n&&a!=i)return a<i;t++}},i=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(l=e[o]))[0]?"-":(a>0?".":"")+(a=2,l);return t}var n=[];for(o=1;o<e.length;o++){var l=e[o];n.push(0===l?"not("+d()+")":1===l?"("+d()+" || "+d()+")":2===l?n.pop()+" "+n.pop():i(l))}return d();function d(){return n.pop().replace(/^\((.+)\)$/,"$1")}},l=(e,r)=>{if(0 in e){r=o(r);var t=e[0],a=t<0;a&&(t=-t-1);for(var n=0,i=1,d=!0;;i++,n++){var f,u,c=i<e.length?(typeof e[i])[0]:"";if(n>=r.length||"o"==(u=(typeof(f=r[n]))[0]))return!d||("u"==c?i>t&&!a:""==c!=a);if("u"==u){if(!d||"u"!=c)return!1}else if(d)if(c==u)if(i<=t){if(f!=e[i])return!1}else{if(a?f>e[i]:f<e[i])return!1;f!=e[i]&&(d=!1)}else if("s"!=c&&"n"!=c){if(a||i<=t)return!1;d=!1,i--}else{if(i<=t||u<c!=a)return!1;d=!1}else"s"!=c&&"n"!=c&&(d=!1,i--)}}var b=[],s=b.pop.bind(b);for(n=1;n<e.length;n++){var p=e[n];b.push(1==p?s()|s():2==p?s()&s():p?l(p,r):!s())}return!!s()},d=(e,r)=>{var t=x.S[e];if(!t||!x.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},f=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||n(e,r)?r:e),0))&&t[r]},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},c=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+i(a)+")",b=(e,r,t,a)=>{var o=u(e,t);return l(a,o)||h(c(e,t,o,a)),v(e[t][o])},s=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!l(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},p=(e,r,t,a)=>{var o=e[t];return"No satisfying version ("+i(a)+") of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(o).map((e=>e+" from "+o[e].from)).join(", ")},h=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},m=(e,r,t,a)=>{h(p(e,r,t,a))},v=e=>(e.loaded=1,e.get()),g=(y=e=>function(r,t,a,o){var n=x.I(r);return n&&n.then?n.then(e.bind(e,r,x.S[r],t,a,o)):e(r,x.S[r],t,a,o)})(((e,r,t,a)=>r&&x.o(r,t)?v(f(r,t)):a())),j=y(((e,r,t,a)=>(d(e,t),v(s(r,t,a)||m(r,e,t,a)||f(r,t))))),P=y(((e,r,t,a)=>(d(e,t),b(r,0,t,a)))),w=y(((e,r,t,a,o)=>{var n=r&&x.o(r,t)&&s(r,t,a);return n?v(n):o()})),k={},_={66029:()=>P("default","react",[1,18,2,0]),79510:()=>w("default","@emotion/react",[1,11,4,1],(()=>Promise.all([x.e(296),x.e(527),x.e(819)]).then((()=>()=>x(26527))))),92764:()=>w("default","@emotion/styled",[1,11,3,0],(()=>Promise.all([x.e(675),x.e(564),x.e(407)]).then((()=>()=>x(52675))))),26178:()=>P("default","@jupyterlab/apputils",[1,4,1,10]),32083:()=>P("default","@jupyterlab/ui-components",[1,4,0,10]),53483:()=>P("default","@jupyterlab/coreutils",[1,6,0,10]),15139:()=>j("default","@jupyterlab/docregistry",[1,4,0,10]),20698:()=>P("default","@jupyterlab/application",[1,4,0,10]),30535:()=>w("default","react-markdown",[1,8,0,6],(()=>Promise.all([x.e(693),x.e(861)]).then((()=>()=>x(81861))))),35048:()=>w("default","@mui/material",[1,5,11,0],(()=>Promise.all([x.e(296),x.e(787),x.e(564),x.e(704)]).then((()=>()=>x(34787))))),40532:()=>w("default","rehype-katex",[1,6,0,2],(()=>Promise.all([x.e(693),x.e(900)]).then((()=>()=>x(94900))))),48204:()=>w("default","@jupyter/collaboration",[1,1],(()=>Promise.all([x.e(136),x.e(648)]).then((()=>()=>x(29136))))),55351:()=>w("default","react-syntax-highlighter",[1,15,5,0],(()=>x.e(598).then((()=>()=>x(95598))))),68913:()=>P("default","@jupyterlab/codemirror",[1,4,0,10]),74901:()=>P("default","@lumino/signaling",[1,2,0,0]),80429:()=>P("default","@jupyterlab/services",[1,7,0,10]),80576:()=>P("default","@jupyterlab/notebook",[1,4,0,10]),82659:()=>P("default","@jupyterlab/fileeditor",[1,4,0,10]),96697:()=>P("default","@lumino/algorithm",[1,2,0,0]),96707:()=>w("default","remark-math",[1,5,1,1],(()=>x.e(703).then((()=>()=>x(7703))))),97705:()=>w("default","@mui/icons-material",[1,5,11,0],(()=>x.e(928).then((()=>()=>x(13928))))),17564:()=>g("default","@emotion/react",(()=>Promise.all([x.e(296),x.e(527),x.e(819)]).then((()=>()=>x(26527))))),24407:()=>w("default","@emotion/react",[1,11,0,0,,"rc",0],(()=>Promise.all([x.e(296),x.e(527)]).then((()=>()=>x(26527))))),18778:()=>P("default","@lumino/widgets",[1,2,0,1]),48033:()=>P("default","@jupyterlab/translation",[1,4,0,10]),66211:()=>P("default","@codemirror/view",[1,6,9,6]),84059:()=>P("default","@lumino/virtualdom",[1,2,0,0]),90981:()=>P("default","yjs",[1,13,5,40]),97930:()=>P("default","@lumino/coreutils",[1,2,0,0]),98204:()=>P("default","@codemirror/state",[1,6,2,0]),37704:()=>P("default","react-dom",[1,18,2,0])},O={29:[66029],132:[26178,32083,53483],407:[24407],564:[17564],648:[18778,48033,66211,84059,90981,97930,98204],704:[37704],864:[15139,20698,30535,35048,40532,48204,55351,68913,74901,80429,80576,82659,96697,96707,97705],963:[79510,92764]},x.f.consumes=(e,r)=>{x.o(O,e)&&O[e].forEach((e=>{if(x.o(k,e))return r.push(k[e]);var t=r=>{k[e]=0,x.m[e]=t=>{delete x.c[e],t.exports=r()}},a=r=>{delete k[e],x.m[e]=t=>{throw delete x.c[e],r}};try{var o=_[e]();o.then?r.push(k[e]=o.then(t).catch(a)):t(o)}catch(e){a(e)}}))},(()=>{x.b=document.baseURI||self.location.href;var e={718:0};x.f.j=(r,t)=>{var a=x.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(132|29|407|564|648|704|963)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=x.p+x.u(r),i=new Error;x.l(n,(t=>{if(x.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,o,[n,i,l]=t,d=0;if(n.some((r=>0!==e[r]))){for(a in i)x.o(i,a)&&(x.m[a]=i[a]);l&&l(x)}for(r&&r(t);d<n.length;d++)o=n[d],x.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunk_jupyter_ai_core=self.webpackChunk_jupyter_ai_core||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),x.nc=void 0;var T=x(22399);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyter-ai/core"]=T})();