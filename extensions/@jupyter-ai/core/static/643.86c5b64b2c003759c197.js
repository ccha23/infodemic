"use strict";(self.webpackChunk_jupyter_ai_core=self.webpackChunk_jupyter_ai_core||[]).push([[643],{61246:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(39601),o=t.n(r),a=t(82609),i=t.n(a),s=t(83055),c=t(98814),l=t(22299),p=i()(o());p.i(s.Z),p.i(c.Z),p.i(l.Z),p.push([e.id,"/*\n    See the JupyterLab Developer Guide for useful CSS Patterns:\n\n    https://jupyterlab.readthedocs.io/en/stable/developer/css.html\n*/\n",""]);const d=p},22299:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(39601),o=t.n(r),a=t(82609),i=t.n(a)()(o());i.push([e.id,".jp-ai-ChatSettings-header {\n  font-size: var(--jp-ui-font-size3);\n  font-weight: 400;\n  color: var(--jp-ui-font-color1);\n}\n\n.jp-ai-ChatSettings-welcome {\n  color: var(--jp-ui-font-color1);\n}\n\n/* Defer to browser defaults for links in model help */\n.jp-ai-ChatSettings-model-help a {\n  text-decoration: revert;\n  color: revert;\n}\n\n.jp-ai-ChatSettings-model-help a:hover {\n  text-decoration: revert;\n  color: revert;\n}\n",""]);const s=i},83055:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(39601),o=t.n(r),a=t(82609),i=t.n(a)()(o());i.push([e.id,".jp-ai-ExpandableTextField-label {\n  font-size: var(--jp-ui-font-size0);\n}\n\n.jp-ai-ExpandableTextField-value {\n  font-size: var(--jp-ui-font-size1);\n}\n\n.jp-ai-ExpandableTextField-value-collapsed {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  display: block;\n  overflow: hidden;\n}\n\n.jp-ai-ExpandableTextField-value-expanded {\n  text-overflow: none;\n  overflow: visible;\n  height: auto;\n}\n",""]);const s=i},98814:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(39601),o=t.n(r),a=t(82609),i=t.n(a)()(o());i.push([e.id,".jp-RenderedHTMLCommon.jp-ai-react-markdown > pre {\n  margin: 0;\n}\n\n.jp-RenderedHTMLCommon.jp-ai-react-markdown {\n  padding: 0;\n}\n\n.jp-RenderedHTMLCommon.jp-ai-react-markdown ul:not(.list-inline) {\n  padding-left: 1em;\n}\n\n/* !important specifier required to override inline styles from Prism */\n.jp-ai-code {\n  font-family: var(--jp-code-font-family) !important;\n  font-size: var(--jp-code-font-size) !important;\n  line-height: var(--jp-code-line-height) !important;\n}\n",""]);const s=i},82609:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},39601:e=>{e.exports=function(e){return e[1]}},46062:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],p=a[l]||0,d="".concat(l," ").concat(p);a[l]=p+1;var u=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var v=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var p=t(a[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=c}}},96793:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},11173:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},17892:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},44036:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},42464:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},76643:(e,n,t)=>{t.r(n);var r=t(46062),o=t.n(r),a=t(44036),i=t.n(a),s=t(96793),c=t.n(s),l=t(17892),p=t.n(l),d=t(11173),u=t.n(d),f=t(42464),v=t.n(f),h=t(61246),m={};m.styleTagTransform=v(),m.setAttributes=p(),m.insert=c().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=u(),o()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals}}]);