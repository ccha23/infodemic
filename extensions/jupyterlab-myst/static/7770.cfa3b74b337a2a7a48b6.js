/*! For license information please see 7770.cfa3b74b337a2a7a48b6.js.LICENSE.txt */
(self.webpackChunkjupyterlab_myst=self.webpackChunkjupyterlab_myst||[]).push([[7770],{22122:(e,t,n)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:()=>r})},68435:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(66029);const o=r.forwardRef((function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"}))}))},29542:(e,t,n)=>{"use strict";function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}n.d(t,{M:()=>r})},14340:(e,t,n)=>{"use strict";n.d(t,{F:()=>o,e:()=>i});var r=n(66029);function o(...e){return t=>e.forEach((e=>function(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}(e,t)))}function i(...e){return(0,r.useCallback)(o(...e),e)}},67138:(e,t,n)=>{"use strict";n.d(t,{b:()=>o});var r=n(66029);function o(e,t=[]){let n=[];const o=()=>{const t=n.map((e=>(0,r.createContext)(e)));return function(n){const o=(null==n?void 0:n[e])||t;return(0,r.useMemo)((()=>({[`__scope${e}`]:{...n,[e]:o}})),[n,o])}};return o.scopeName=e,[function(t,o){const i=(0,r.createContext)(o),s=n.length;function l(t){const{scope:n,children:o,...l}=t,a=(null==n?void 0:n[e][s])||i,c=(0,r.useMemo)((()=>l),Object.values(l));return(0,r.createElement)(a.Provider,{value:c},o)}return n=[...n,o],l.displayName=t+"Provider",[l,function(n,l){const a=(null==l?void 0:l[e][s])||i,c=(0,r.useContext)(a);if(c)return c;if(void 0!==o)return o;throw new Error(`\`${n}\` must be used within \`${t}\``)}]},i(o,...t)]}function i(...e){const t=e[0];if(1===e.length)return t;const n=()=>{const n=e.map((e=>({useScope:e(),scopeName:e.scopeName})));return function(e){const o=n.reduce(((t,{useScope:n,scopeName:r})=>({...t,...n(e)[`__scope${r}`]})),{});return(0,r.useMemo)((()=>({[`__scope${t.scopeName}`]:o})),[o])}};return n.scopeName=t.scopeName,n}},76393:(e,t,n)=>{"use strict";n.d(t,{XB:()=>d});var r=n(22122),o=n(66029),i=n(29542),s=n(96497),l=n(14340),a=n(57544);const c="dismissableLayer.update";let u;const f=(0,o.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),d=(0,o.forwardRef)(((e,t)=>{var n;const{disableOutsidePointerEvents:d=!1,onEscapeKeyDown:h,onPointerDownOutside:g,onFocusOutside:y,onInteractOutside:v,onDismiss:w,...b}=e,x=(0,o.useContext)(f),[E,O]=(0,o.useState)(null),P=null!==(n=null==E?void 0:E.ownerDocument)&&void 0!==n?n:null===globalThis||void 0===globalThis?void 0:globalThis.document,[,R]=(0,o.useState)({}),T=(0,l.e)(t,(e=>O(e))),A=Array.from(x.layers),[S]=[...x.layersWithOutsidePointerEventsDisabled].slice(-1),C=A.indexOf(S),L=E?A.indexOf(E):-1,D=x.layersWithOutsidePointerEventsDisabled.size>0,N=L>=C,k=function(e,t=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const n=(0,a.W)(e),r=(0,o.useRef)(!1),i=(0,o.useRef)((()=>{}));return(0,o.useEffect)((()=>{const e=e=>{if(e.target&&!r.current){const o={originalEvent:e};function s(){m("dismissableLayer.pointerDownOutside",n,o,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",i.current),i.current=s,t.addEventListener("click",i.current,{once:!0})):s()}else t.removeEventListener("click",i.current);r.current=!1},o=window.setTimeout((()=>{t.addEventListener("pointerdown",e)}),0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",e),t.removeEventListener("click",i.current)}}),[t,n]),{onPointerDownCapture:()=>r.current=!0}}((e=>{const t=e.target,n=[...x.branches].some((e=>e.contains(t)));N&&!n&&(null==g||g(e),null==v||v(e),e.defaultPrevented||null==w||w())}),P),W=function(e,t=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const n=(0,a.W)(e),r=(0,o.useRef)(!1);return(0,o.useEffect)((()=>{const e=e=>{e.target&&!r.current&&m("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)}),[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}((e=>{const t=e.target;[...x.branches].some((e=>e.contains(t)))||(null==y||y(e),null==v||v(e),e.defaultPrevented||null==w||w())}),P);return function(e,t=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const n=(0,a.W)(e);(0,o.useEffect)((()=>{const e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)}),[n,t])}((e=>{L===x.layers.size-1&&(null==h||h(e),!e.defaultPrevented&&w&&(e.preventDefault(),w()))}),P),(0,o.useEffect)((()=>{if(E)return d&&(0===x.layersWithOutsidePointerEventsDisabled.size&&(u=P.body.style.pointerEvents,P.body.style.pointerEvents="none"),x.layersWithOutsidePointerEventsDisabled.add(E)),x.layers.add(E),p(),()=>{d&&1===x.layersWithOutsidePointerEventsDisabled.size&&(P.body.style.pointerEvents=u)}}),[E,P,d,x]),(0,o.useEffect)((()=>()=>{E&&(x.layers.delete(E),x.layersWithOutsidePointerEventsDisabled.delete(E),p())}),[E,x]),(0,o.useEffect)((()=>{const e=()=>R({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)}),[]),(0,o.createElement)(s.WV.div,(0,r.Z)({},b,{ref:T,style:{pointerEvents:D?N?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.M)(e.onFocusCapture,W.onFocusCapture),onBlurCapture:(0,i.M)(e.onBlurCapture,W.onBlurCapture),onPointerDownCapture:(0,i.M)(e.onPointerDownCapture,k.onPointerDownCapture)}))}));function p(){const e=new CustomEvent(c);document.dispatchEvent(e)}function m(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,s.jH)(o,i):o.dispatchEvent(i)}},97469:(e,t,n)=>{"use strict";n.d(t,{ee:()=>je,Eh:()=>$e,VY:()=>Ve,fC:()=>Be,D7:()=>Ae});var r=n(22122),o=n(66029);const i=["top","right","bottom","left"],s=Math.min,l=Math.max,a=Math.round,c=Math.floor,u=e=>({x:e,y:e}),f={left:"right",right:"left",bottom:"top",top:"bottom"},d={start:"end",end:"start"};function p(e,t,n){return l(e,s(t,n))}function m(e,t){return"function"==typeof e?e(t):e}function h(e){return e.split("-")[0]}function g(e){return e.split("-")[1]}function y(e){return"x"===e?"y":"x"}function v(e){return"y"===e?"height":"width"}function w(e){return["top","bottom"].includes(h(e))?"y":"x"}function b(e){return y(w(e))}function x(e){return e.replace(/start|end/g,(e=>d[e]))}function E(e){return e.replace(/left|right|bottom|top/g,(e=>f[e]))}function O(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function P(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function R(e,t,n){let{reference:r,floating:o}=e;const i=w(t),s=b(t),l=v(s),a=h(t),c="y"===i,u=r.x+r.width/2-o.width/2,f=r.y+r.height/2-o.height/2,d=r[l]/2-o[l]/2;let p;switch(a){case"top":p={x:u,y:r.y-o.height};break;case"bottom":p={x:u,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:f};break;case"left":p={x:r.x-o.width,y:f};break;default:p={x:r.x,y:r.y}}switch(g(t)){case"start":p[s]-=d*(n&&c?-1:1);break;case"end":p[s]+=d*(n&&c?-1:1)}return p}async function T(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:s,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:d=!1,padding:p=0}=m(t,e),h=O(p),g=l[d?"floating"===f?"reference":"floating":f],y=P(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(g)))||n?g:g.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:a})),v="floating"===f?{...s.floating,x:r,y:o}:s.reference,w=await(null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),b=await(null==i.isElement?void 0:i.isElement(w))&&await(null==i.getScale?void 0:i.getScale(w))||{x:1,y:1},x=P(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:w,strategy:a}):v);return{top:(y.top-x.top+h.top)/b.y,bottom:(x.bottom-y.bottom+h.bottom)/b.y,left:(y.left-x.left+h.left)/b.x,right:(x.right-y.right+h.right)/b.x}}const A=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:l,elements:a,middlewareData:c}=t,{element:u,padding:f=0}=m(e,t)||{};if(null==u)return{};const d=O(f),h={x:n,y:r},y=b(o),w=v(y),x=await l.getDimensions(u),E="y"===y,P=E?"top":"left",R=E?"bottom":"right",T=E?"clientHeight":"clientWidth",A=i.reference[w]+i.reference[y]-h[y]-i.floating[w],S=h[y]-i.reference[y],C=await(null==l.getOffsetParent?void 0:l.getOffsetParent(u));let L=C?C[T]:0;L&&await(null==l.isElement?void 0:l.isElement(C))||(L=a.floating[T]||i.floating[w]);const D=A/2-S/2,N=L/2-x[w]/2-1,k=s(d[P],N),W=s(d[R],N),_=k,M=L-x[w]-W,F=L/2-x[w]/2+D,H=p(_,F,M),B=!c.arrow&&null!=g(o)&&F!=H&&i.reference[w]/2-(F<_?k:W)-x[w]/2<0,j=B?F<_?F-_:F-M:0;return{[y]:h[y]+j,data:{[y]:H,centerOffset:F-H-j,...B&&{alignmentOffset:j}},reset:B}}}),S=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:s,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:w=!0,...O}=m(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const P=h(o),R=h(l)===l,A=await(null==a.isRTL?void 0:a.isRTL(c.floating)),S=d||(R||!w?[E(l)]:function(e){const t=E(e);return[x(e),t,x(t)]}(l));d||"none"===y||S.push(...function(e,t,n,r){const o=g(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:s;default:return[]}}(h(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(x)))),i}(l,w,y,A));const C=[l,...S],L=await T(t,O),D=[];let N=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&D.push(L[P]),f){const e=function(e,t,n){void 0===n&&(n=!1);const r=g(e),o=b(e),i=v(o);let s="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=E(s)),[s,E(s)]}(o,s,A);D.push(L[e[0]],L[e[1]])}if(N=[...N,{placement:o,overflows:D}],!D.every((e=>e<=0))){var k,W;const e=((null==(k=i.flip)?void 0:k.index)||0)+1,t=C[e];if(t)return{data:{index:e,overflows:N},reset:{placement:t}};let n=null==(W=N.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:W.placement;if(!n)switch(p){case"bestFit":{var _;const e=null==(_=N.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:_[0];e&&(n=e);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}};function C(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function L(e){return i.some((t=>e[t]>=0))}const D=function(e){return void 0===e&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=m(e,t);switch(r){case"referenceHidden":{const e=C(await T(t,{...o,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:L(e)}}}case"escaped":{const e=C(await T(t,{...o,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:L(e)}}}default:return{}}}}},N=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),s=h(n),l=g(n),a="y"===w(n),c=["left","top"].includes(s)?-1:1,u=i&&a?-1:1,f=m(t,e);let{mainAxis:d,crossAxis:p,alignmentAxis:y}="number"==typeof f?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&"number"==typeof y&&(p="end"===l?-1*y:y),a?{x:p*u,y:d*c}:{x:d*c,y:p*u}}(t,e);return{x:n+o.x,y:r+o.y,data:o}}}},k=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:l={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...a}=m(e,t),c={x:n,y:r},u=await T(t,a),f=w(h(o)),d=y(f);let g=c[d],v=c[f];if(i){const e="y"===d?"bottom":"right";g=p(g+u["y"===d?"top":"left"],g,g-u[e])}if(s){const e="y"===f?"bottom":"right";v=p(v+u["y"===f?"top":"left"],v,v-u[e])}const b=l.fn({...t,[d]:g,[f]:v});return{...b,data:{x:b.x-n,y:b.y-r}}}}},W=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:a=(()=>{}),...c}=m(e,t),u=await T(t,c),f=h(n),d=g(n),p="y"===w(n),{width:y,height:v}=r.floating;let b,x;"top"===f||"bottom"===f?(b=f,x=d===(await(null==o.isRTL?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(x=f,b="end"===d?"top":"bottom");const E=v-u[b],O=y-u[x],P=!t.middlewareData.shift;let R=E,A=O;if(p){const e=y-u.left-u.right;A=d||P?s(O,e):e}else{const e=v-u.top-u.bottom;R=d||P?s(E,e):e}if(P&&!d){const e=l(u.left,0),t=l(u.right,0),n=l(u.top,0),r=l(u.bottom,0);p?A=y-2*(0!==e||0!==t?e+t:l(u.left,u.right)):R=v-2*(0!==n||0!==r?n+r:l(u.top,u.bottom))}await a({...t,availableWidth:A,availableHeight:R});const S=await o.getDimensions(i.floating);return y!==S.width||v!==S.height?{reset:{rects:!0}}:{}}}};function _(e){return H(e)?(e.nodeName||"").toLowerCase():"#document"}function M(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function F(e){var t;return null==(t=(H(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function H(e){return e instanceof Node||e instanceof M(e).Node}function B(e){return e instanceof Element||e instanceof M(e).Element}function j(e){return e instanceof HTMLElement||e instanceof M(e).HTMLElement}function V(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof M(e).ShadowRoot)}function $(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Y(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function z(e){return["table","td","th"].includes(_(e))}function I(e){const t=U(),n=Y(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function U(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Z(e){return["html","body","#document"].includes(_(e))}function Y(e){return M(e).getComputedStyle(e)}function X(e){return B(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function q(e){if("html"===_(e))return e;const t=e.assignedSlot||e.parentNode||V(e)&&e.host||F(e);return V(t)?t.host:t}function K(e){const t=q(e);return Z(t)?e.ownerDocument?e.ownerDocument.body:e.body:j(t)&&$(t)?t:K(t)}function G(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=K(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),s=M(o);return i?t.concat(s,s.visualViewport||[],$(o)?o:[],s.frameElement&&n?G(s.frameElement):[]):t.concat(o,G(o,[],n))}function J(e){const t=Y(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=j(e),i=o?e.offsetWidth:n,s=o?e.offsetHeight:r,l=a(n)!==i||a(r)!==s;return l&&(n=i,r=s),{width:n,height:r,$:l}}function Q(e){return B(e)?e:e.contextElement}function ee(e){const t=Q(e);if(!j(t))return u(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=J(t);let s=(i?a(n.width):n.width)/r,l=(i?a(n.height):n.height)/o;return s&&Number.isFinite(s)||(s=1),l&&Number.isFinite(l)||(l=1),{x:s,y:l}}const te=u(0);function ne(e){const t=M(e);return U()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:te}function re(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=Q(e);let s=u(1);t&&(r?B(r)&&(s=ee(r)):s=ee(e));const l=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==M(e))&&t}(i,n,r)?ne(i):u(0);let a=(o.left+l.x)/s.x,c=(o.top+l.y)/s.y,f=o.width/s.x,d=o.height/s.y;if(i){const e=M(i),t=r&&B(r)?M(r):r;let n=e.frameElement;for(;n&&r&&t!==e;){const e=ee(n),t=n.getBoundingClientRect(),r=Y(n),o=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,i=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;a*=e.x,c*=e.y,f*=e.x,d*=e.y,a+=o,c+=i,n=M(n).frameElement}}return P({width:f,height:d,x:a,y:c})}function oe(e){return re(F(e)).left+X(e).scrollLeft}function ie(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=M(e),r=F(e),o=n.visualViewport;let i=r.clientWidth,s=r.clientHeight,l=0,a=0;if(o){i=o.width,s=o.height;const e=U();(!e||e&&"fixed"===t)&&(l=o.offsetLeft,a=o.offsetTop)}return{width:i,height:s,x:l,y:a}}(e,n);else if("document"===t)r=function(e){const t=F(e),n=X(e),r=e.ownerDocument.body,o=l(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=l(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+oe(e);const a=-n.scrollTop;return"rtl"===Y(r).direction&&(s+=l(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:s,y:a}}(F(e));else if(B(t))r=function(e,t){const n=re(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=j(e)?ee(e):u(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=ne(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return P(r)}function se(e,t){const n=q(e);return!(n===t||!B(n)||Z(n))&&("fixed"===Y(n).position||se(n,t))}function le(e,t,n){const r=j(t),o=F(t),i="fixed"===n,s=re(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const a=u(0);if(r||!r&&!i)if(("body"!==_(t)||$(o))&&(l=X(t)),r){const e=re(t,!0,i,t);a.x=e.x+t.clientLeft,a.y=e.y+t.clientTop}else o&&(a.x=oe(o));return{x:s.left+l.scrollLeft-a.x,y:s.top+l.scrollTop-a.y,width:s.width,height:s.height}}function ae(e,t){return j(e)&&"fixed"!==Y(e).position?t?t(e):e.offsetParent:null}function ce(e,t){const n=M(e);if(!j(e))return n;let r=ae(e,t);for(;r&&z(r)&&"static"===Y(r).position;)r=ae(r,t);return r&&("html"===_(r)||"body"===_(r)&&"static"===Y(r).position&&!I(r))?n:r||function(e){let t=q(e);for(;j(t)&&!Z(t);){if(I(t))return t;t=q(t)}return null}(e)||n}const ue={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=j(n),i=F(n);if(n===i)return t;let s={scrollLeft:0,scrollTop:0},l=u(1);const a=u(0);if((o||!o&&"fixed"!==r)&&(("body"!==_(n)||$(i))&&(s=X(n)),j(n))){const e=re(n);l=ee(n),a.x=e.x+n.clientLeft,a.y=e.y+n.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-s.scrollLeft*l.x+a.x,y:t.y*l.y-s.scrollTop*l.y+a.y}},getDocumentElement:F,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?function(e,t){const n=t.get(e);if(n)return n;let r=G(e,[],!1).filter((e=>B(e)&&"body"!==_(e))),o=null;const i="fixed"===Y(e).position;let s=i?q(e):e;for(;B(s)&&!Z(s);){const t=Y(s),n=I(s);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||$(s)&&!n&&se(e,s))?r=r.filter((e=>e!==s)):o=t,s=q(s)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],c=i.reduce(((e,n)=>{const r=ie(t,n,o);return e.top=l(r.top,e.top),e.right=s(r.right,e.right),e.bottom=s(r.bottom,e.bottom),e.left=l(r.left,e.left),e}),ie(t,a,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:ce,getElementRects:async function(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||ce,i=this.getDimensions;return{reference:le(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return J(e)},getScale:ee,isElement:B,isRTL:function(e){return"rtl"===Y(e).direction}};const fe=(e,t,n)=>{const r=new Map,o={platform:ue,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:s}=n,l=i.filter(Boolean),a=await(null==s.isRTL?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:f}=R(c,r,a),d=r,p={},m=0;for(let n=0;n<l.length;n++){const{name:i,fn:h}=l[n],{x:g,y,data:v,reset:w}=await h({x:u,y:f,initialPlacement:r,placement:d,strategy:o,middlewareData:p,rects:c,platform:s,elements:{reference:e,floating:t}});u=null!=g?g:u,f=null!=y?y:f,p={...p,[i]:{...p[i],...v}},w&&m<=50&&(m++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(c=!0===w.rects?await s.getElementRects({reference:e,floating:t,strategy:o}):w.rects),({x:u,y:f}=R(c,d,a))),n=-1)}return{x:u,y:f,placement:d,strategy:o,middlewareData:p}})(e,t,{...o,platform:i})};var de=n(37704);const pe=e=>({name:"arrow",options:e,fn(t){const{element:n,padding:r}="function"==typeof e?e(t):e;return n&&(o=n,{}.hasOwnProperty.call(o,"current"))?null!=n.current?A({element:n.current,padding:r}).fn(t):{}:n?A({element:n,padding:r}).fn(t):{};var o}});var me="undefined"!=typeof document?o.useLayoutEffect:o.useEffect;function he(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;0!=r--;)if(!he(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(!("_owner"===n&&e.$$typeof||he(e[n],t[n])))return!1}return!0}return e!=e&&t!=t}function ge(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ye(e,t){const n=ge(e);return Math.round(t*n)/n}function ve(e){const t=o.useRef(e);return me((()=>{t.current=e})),t}var we=n(96497);const be=(0,o.forwardRef)(((e,t)=>{const{children:n,width:i=10,height:s=5,...l}=e;return(0,o.createElement)(we.WV.svg,(0,r.Z)({},l,{ref:t,width:i,height:s,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:(0,o.createElement)("polygon",{points:"0,0 30,0 15,10"}))}));var xe=n(14340),Ee=n(67138),Oe=n(57544),Pe=n(72008);const Re="Popper",[Te,Ae]=(0,Ee.b)(Re),[Se,Ce]=Te(Re),Le=(0,o.forwardRef)(((e,t)=>{const{__scopePopper:n,virtualRef:i,...s}=e,l=Ce("PopperAnchor",n),a=(0,o.useRef)(null),c=(0,xe.e)(t,a);return(0,o.useEffect)((()=>{l.onAnchorChange((null==i?void 0:i.current)||a.current)})),i?null:(0,o.createElement)(we.WV.div,(0,r.Z)({},s,{ref:c}))})),De="PopperContent",[Ne,ke]=Te(De),We=(0,o.forwardRef)(((e,t)=>{var n,i,a,u,f,d,p,g;const{__scopePopper:v,side:b="bottom",sideOffset:x=0,align:E="center",alignOffset:O=0,arrowPadding:P=0,avoidCollisions:R=!0,collisionBoundary:T=[],collisionPadding:A=0,sticky:C="partial",hideWhenDetached:L=!1,updatePositionStrategy:_="optimized",onPlaced:M,...H}=e,B=Ce(De,v),[j,V]=(0,o.useState)(null),$=(0,xe.e)(t,(e=>V(e))),[z,I]=(0,o.useState)(null),U=function(e){const[t,n]=(0,o.useState)(void 0);return(0,Pe.b)((()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const t=new ResizeObserver((t=>{if(!Array.isArray(t))return;if(!t.length)return;const r=t[0];let o,i;if("borderBoxSize"in r){const e=r.borderBoxSize,t=Array.isArray(e)?e[0]:e;o=t.inlineSize,i=t.blockSize}else o=e.offsetWidth,i=e.offsetHeight;n({width:o,height:i})}));return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)}),[e]),t}(z),Z=null!==(n=null==U?void 0:U.width)&&void 0!==n?n:0,Y=null!==(i=null==U?void 0:U.height)&&void 0!==i?i:0,X=b+("center"!==E?"-"+E:""),q="number"==typeof A?A:{top:0,right:0,bottom:0,left:0,...A},K=Array.isArray(T)?T:[T],J=K.length>0,ee={padding:q,boundary:K.filter(Me),altBoundary:J},{refs:te,floatingStyles:ne,placement:oe,isPositioned:ie,middlewareData:se}=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:s,floating:l}={},transform:a=!0,whileElementsMounted:c,open:u}=e,[f,d]=o.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,m]=o.useState(r);he(p,r)||m(r);const[h,g]=o.useState(null),[y,v]=o.useState(null),w=o.useCallback((e=>{e!=O.current&&(O.current=e,g(e))}),[g]),b=o.useCallback((e=>{e!==P.current&&(P.current=e,v(e))}),[v]),x=s||h,E=l||y,O=o.useRef(null),P=o.useRef(null),R=o.useRef(f),T=ve(c),A=ve(i),S=o.useCallback((()=>{if(!O.current||!P.current)return;const e={placement:t,strategy:n,middleware:p};A.current&&(e.platform=A.current),fe(O.current,P.current,e).then((e=>{const t={...e,isPositioned:!0};C.current&&!he(R.current,t)&&(R.current=t,de.flushSync((()=>{d(t)})))}))}),[p,t,n,A]);me((()=>{!1===u&&R.current.isPositioned&&(R.current.isPositioned=!1,d((e=>({...e,isPositioned:!1}))))}),[u]);const C=o.useRef(!1);me((()=>(C.current=!0,()=>{C.current=!1})),[]),me((()=>{if(x&&(O.current=x),E&&(P.current=E),x&&E){if(T.current)return T.current(x,E,S);S()}}),[x,E,S,T]);const L=o.useMemo((()=>({reference:O,floating:P,setReference:w,setFloating:b})),[w,b]),D=o.useMemo((()=>({reference:x,floating:E})),[x,E]),N=o.useMemo((()=>{const e={position:n,left:0,top:0};if(!D.floating)return e;const t=ye(D.floating,f.x),r=ye(D.floating,f.y);return a?{...e,transform:"translate("+t+"px, "+r+"px)",...ge(D.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,a,D.floating,f.x,f.y]);return o.useMemo((()=>({...f,update:S,refs:L,elements:D,floatingStyles:N})),[f,S,L,D,N])}({strategy:"fixed",placement:X,whileElementsMounted:(...e)=>function(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:u="function"==typeof IntersectionObserver,animationFrame:f=!1}=r,d=Q(e),p=o||i?[...d?G(d):[],...G(t)]:[];p.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const m=d&&u?function(e,t){let n,r=null;const o=F(e);function i(){clearTimeout(n),r&&r.disconnect(),r=null}return function a(u,f){void 0===u&&(u=!1),void 0===f&&(f=1),i();const{left:d,top:p,width:m,height:h}=e.getBoundingClientRect();if(u||t(),!m||!h)return;const g={rootMargin:-c(p)+"px "+-c(o.clientWidth-(d+m))+"px "+-c(o.clientHeight-(p+h))+"px "+-c(d)+"px",threshold:l(0,s(1,f))||1};let y=!0;function v(e){const t=e[0].intersectionRatio;if(t!==f){if(!y)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),100)}y=!1}try{r=new IntersectionObserver(v,{...g,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(v,g)}r.observe(e)}(!0),i}(d,n):null;let h,g=-1,y=null;a&&(y=new ResizeObserver((e=>{let[r]=e;r&&r.target===d&&y&&(y.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{y&&y.observe(t)}))),n()})),d&&!f&&y.observe(d),y.observe(t));let v=f?re(e):null;return f&&function t(){const r=re(e);!v||r.x===v.x&&r.y===v.y&&r.width===v.width&&r.height===v.height||n(),v=r,h=requestAnimationFrame(t)}(),n(),()=>{p.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),m&&m(),y&&y.disconnect(),y=null,f&&cancelAnimationFrame(h)}}(...e,{animationFrame:"always"===_}),elements:{reference:B.anchor},middleware:[N({mainAxis:x+Y,alignmentAxis:O}),R&&k({mainAxis:!0,crossAxis:!1,limiter:"partial"===C?(void 0===le&&(le={}),{options:le,fn(e){const{x:t,y:n,placement:r,rects:o,middlewareData:i}=e,{offset:s=0,mainAxis:l=!0,crossAxis:a=!0}=m(le,e),c={x:t,y:n},u=w(r),f=y(u);let d=c[f],p=c[u];const g=m(s,e),v="number"==typeof g?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(l){const e="y"===f?"height":"width",t=o.reference[f]-o.floating[e]+v.mainAxis,n=o.reference[f]+o.reference[e]-v.mainAxis;d<t?d=t:d>n&&(d=n)}if(a){var b,x;const e="y"===f?"width":"height",t=["top","left"].includes(h(r)),n=o.reference[u]-o.floating[e]+(t&&(null==(b=i.offset)?void 0:b[u])||0)+(t?0:v.crossAxis),s=o.reference[u]+o.reference[e]+(t?0:(null==(x=i.offset)?void 0:x[u])||0)-(t?v.crossAxis:0);p<n?p=n:p>s&&(p=s)}return{[f]:d,[u]:p}}}):void 0,...ee}),R&&S({...ee}),W({...ee,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{const{width:o,height:i}=t.reference,s=e.floating.style;s.setProperty("--radix-popper-available-width",`${n}px`),s.setProperty("--radix-popper-available-height",`${r}px`),s.setProperty("--radix-popper-anchor-width",`${o}px`),s.setProperty("--radix-popper-anchor-height",`${i}px`)}}),z&&pe({element:z,padding:P}),Fe({arrowWidth:Z,arrowHeight:Y}),L&&D({strategy:"referenceHidden",...ee})]});var le;const[ae,ce]=He(oe),ue=(0,Oe.W)(M);(0,Pe.b)((()=>{ie&&(null==ue||ue())}),[ie,ue]);const be=null===(a=se.arrow)||void 0===a?void 0:a.x,Ee=null===(u=se.arrow)||void 0===u?void 0:u.y,Re=0!==(null===(f=se.arrow)||void 0===f?void 0:f.centerOffset),[Te,Ae]=(0,o.useState)();return(0,Pe.b)((()=>{j&&Ae(window.getComputedStyle(j).zIndex)}),[j]),(0,o.createElement)("div",{ref:te.setFloating,"data-radix-popper-content-wrapper":"",style:{...ne,transform:ie?ne.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Te,"--radix-popper-transform-origin":[null===(d=se.transformOrigin)||void 0===d?void 0:d.x,null===(p=se.transformOrigin)||void 0===p?void 0:p.y].join(" ")},dir:e.dir},(0,o.createElement)(Ne,{scope:v,placedSide:ae,onArrowChange:I,arrowX:be,arrowY:Ee,shouldHideArrow:Re},(0,o.createElement)(we.WV.div,(0,r.Z)({"data-side":ae,"data-align":ce},H,{ref:$,style:{...H.style,animation:ie?void 0:"none",opacity:null!==(g=se.hide)&&void 0!==g&&g.referenceHidden?0:void 0}}))))})),_e={top:"bottom",right:"left",bottom:"top",left:"right"};function Me(e){return null!==e}const Fe=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,s;const{placement:l,rects:a,middlewareData:c}=t,u=0!==(null===(n=c.arrow)||void 0===n?void 0:n.centerOffset),f=u?0:e.arrowWidth,d=u?0:e.arrowHeight,[p,m]=He(l),h={start:"0%",center:"50%",end:"100%"}[m],g=(null!==(r=null===(o=c.arrow)||void 0===o?void 0:o.x)&&void 0!==r?r:0)+f/2,y=(null!==(i=null===(s=c.arrow)||void 0===s?void 0:s.y)&&void 0!==i?i:0)+d/2;let v="",w="";return"bottom"===p?(v=u?h:`${g}px`,w=-d+"px"):"top"===p?(v=u?h:`${g}px`,w=`${a.floating.height+d}px`):"right"===p?(v=-d+"px",w=u?h:`${y}px`):"left"===p&&(v=`${a.floating.width+d}px`,w=u?h:`${y}px`),{data:{x:v,y:w}}}});function He(e){const[t,n="center"]=e.split("-");return[t,n]}const Be=e=>{const{__scopePopper:t,children:n}=e,[r,i]=(0,o.useState)(null);return(0,o.createElement)(Se,{scope:t,anchor:r,onAnchorChange:i},n)},je=Le,Ve=We,$e=(0,o.forwardRef)((function(e,t){const{__scopePopper:n,...i}=e,s=ke("PopperArrow",n),l=_e[s.placedSide];return(0,o.createElement)("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[l]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0}},(0,o.createElement)(be,(0,r.Z)({},i,{ref:t,style:{...i.style,display:"block"}})))}))},7191:(e,t,n)=>{"use strict";n.d(t,{h:()=>a});var r=n(22122),o=n(66029),i=n(37704),s=n.n(i),l=n(96497);const a=(0,o.forwardRef)(((e,t)=>{var n;const{container:i=(null===globalThis||void 0===globalThis||null===(n=globalThis.document)||void 0===n?void 0:n.body),...a}=e;return i?s().createPortal((0,o.createElement)(l.WV.div,(0,r.Z)({},a,{ref:t})),i):null}))},21617:(e,t,n)=>{"use strict";n.d(t,{z:()=>l});var r=n(66029),o=n(37704),i=n(14340),s=n(72008);const l=e=>{const{present:t,children:n}=e,l=function(e){const[t,n]=(0,r.useState)(),i=(0,r.useRef)({}),l=(0,r.useRef)(e),c=(0,r.useRef)("none"),u=e?"mounted":"unmounted",[f,d]=function(e,t){return(0,r.useReducer)(((e,n)=>{const r=t[e][n];return null!=r?r:e}),e)}(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,r.useEffect)((()=>{const e=a(i.current);c.current="mounted"===f?e:"none"}),[f]),(0,s.b)((()=>{const t=i.current,n=l.current;if(n!==e){const r=c.current,o=a(t);e?d("MOUNT"):"none"===o||"none"===(null==t?void 0:t.display)?d("UNMOUNT"):d(n&&r!==o?"ANIMATION_OUT":"UNMOUNT"),l.current=e}}),[e,d]),(0,s.b)((()=>{if(t){const e=e=>{const n=a(i.current).includes(e.animationName);e.target===t&&n&&(0,o.flushSync)((()=>d("ANIMATION_END")))},n=e=>{e.target===t&&(c.current=a(i.current))};return t.addEventListener("animationstart",n),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",n),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}d("ANIMATION_END")}),[t,d]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,r.useCallback)((e=>{e&&(i.current=getComputedStyle(e)),n(e)}),[])}}(t),c="function"==typeof n?n({present:l.isPresent}):r.Children.only(n),u=(0,i.e)(l.ref,c.ref);return"function"==typeof n||l.isPresent?(0,r.cloneElement)(c,{ref:u}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}l.displayName="Presence"},96497:(e,t,n)=>{"use strict";n.d(t,{WV:()=>l,jH:()=>a});var r=n(22122),o=n(66029),i=n(37704),s=n(4560);const l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((e,t)=>{const n=(0,o.forwardRef)(((e,n)=>{const{asChild:i,...l}=e,a=i?s.g7:t;return(0,o.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,o.createElement)(a,(0,r.Z)({},l,{ref:n}))}));return n.displayName=`Primitive.${t}`,{...e,[t]:n}}),{});function a(e,t){e&&(0,i.flushSync)((()=>e.dispatchEvent(t)))}},4560:(e,t,n)=>{"use strict";n.d(t,{g7:()=>s});var r=n(22122),o=n(66029),i=n(14340);const s=(0,o.forwardRef)(((e,t)=>{const{children:n,...i}=e,s=o.Children.toArray(n),a=s.find(c);if(a){const e=a.props.children,n=s.map((t=>t===a?o.Children.count(e)>1?o.Children.only(null):(0,o.isValidElement)(e)?e.props.children:null:t));return(0,o.createElement)(l,(0,r.Z)({},i,{ref:t}),(0,o.isValidElement)(e)?(0,o.cloneElement)(e,void 0,n):null)}return(0,o.createElement)(l,(0,r.Z)({},i,{ref:t}),n)}));s.displayName="Slot";const l=(0,o.forwardRef)(((e,t)=>{const{children:n,...r}=e;return(0,o.isValidElement)(n)?(0,o.cloneElement)(n,{...u(r,n.props),ref:t?(0,i.F)(t,n.ref):n.ref}):o.Children.count(n)>1?o.Children.only(null):null}));l.displayName="SlotClone";const a=({children:e})=>(0,o.createElement)(o.Fragment,null,e);function c(e){return(0,o.isValidElement)(e)&&e.type===a}function u(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}},57544:(e,t,n)=>{"use strict";n.d(t,{W:()=>o});var r=n(66029);function o(e){const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e})),(0,r.useMemo)((()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)}),[])}},86945:(e,t,n)=>{"use strict";n.d(t,{T:()=>i});var r=n(66029),o=n(57544);function i({prop:e,defaultProp:t,onChange:n=(()=>{})}){const[i,s]=function({defaultProp:e,onChange:t}){const n=(0,r.useState)(e),[i]=n,s=(0,r.useRef)(i),l=(0,o.W)(t);return(0,r.useEffect)((()=>{s.current!==i&&(l(i),s.current=i)}),[i,s,l]),n}({defaultProp:t,onChange:n}),l=void 0!==e,a=l?e:i,c=(0,o.W)(n);return[a,(0,r.useCallback)((t=>{if(l){const n="function"==typeof t?t(e):t;n!==e&&c(n)}else s(t)}),[l,e,s,c])]}},72008:(e,t,n)=>{"use strict";n.d(t,{b:()=>o});var r=n(66029);const o=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}},94184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var s=o.apply(null,n);s&&e.push(s)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},75251:(e,t,n)=>{"use strict";var r=n(66029),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{"use strict";e.exports=n(75251)}}]);