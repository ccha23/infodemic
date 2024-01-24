"use strict";(self.webpackChunkjupyterlab_myst=self.webpackChunkjupyterlab_myst||[]).push([[7489],{56851:(n,e,l)=>{function o(n){const e=[],l=String(n||"");let o=l.indexOf(","),t=0,r=!1;for(;!r;){-1===o&&(o=l.length,r=!0);const n=l.slice(t,o).trim();!n&&r||e.push(n),t=o+1,o=l.indexOf(",",t)}return e}function t(n,e){const l=e||{};return(""===n[n.length-1]?[...n,""]:n).join((l.padRight?" ":"")+","+(!1===l.padLeft?"":" ")).trim()}l.d(e,{P:()=>t,Q:()=>o})},38634:(n,e,l)=>{l.d(e,{R:()=>o});const o=(0,l(78909).Y)(["audio","canvas","embed","iframe","img","math","object","picture","svg","video"])},84193:(n,e,l)=>{l.d(e,{l:()=>t});const o={}.hasOwnProperty;function t(n,e){const l="string"==typeof e&&function(n){return Boolean(n&&"object"==typeof n&&"type"in n)}(n)&&"element"===n.type&&n.properties&&o.call(n.properties,e)&&n.properties[e];return null!=l&&!1!==l}},78909:(n,e,l)=>{l.d(e,{Y:()=>t,k:()=>o});const o=function(n,e,l,o,r){const a=t(e);if(null!=l&&("number"!=typeof l||l<0||l===Number.POSITIVE_INFINITY))throw new Error("Expected positive finite index for child node");if(!(null==o||o.type&&o.children))throw new Error("Expected parent node");if(!n||!n.type||"string"!=typeof n.type)return!1;if(null==o!=(null==l))throw new Error("Expected both parent and index");return a.call(r,n,l,o)},t=function(n){if(null==n)return a;if("string"==typeof n)return e=n,function(n){return a(n)&&n.tagName===e};var e;if("object"==typeof n)return function(n){const e=[];let l=-1;for(;++l<n.length;)e[l]=t(n[l]);return r((function(...n){let l=-1;for(;++l<e.length;)if(e[l].call(this,...n))return!0;return!1}))}(n);if("function"==typeof n)return r(n);throw new Error("Expected function, string, or array as test")};function r(n){return function(e,...l){return a(e)&&Boolean(n.call(this,e,...l))}}function a(n){return Boolean(n&&"object"==typeof n&&"element"===n.type&&"string"==typeof n.tagName)}},42532:(n,e,l)=>{l.d(e,{w:()=>s});var o=l(78909),t=l(84193),r=l(38634);const a=new Set(["pingback","prefetch","stylesheet"]),u=(0,o.Y)(["a","abbr","area","b","bdi","bdo","br","button","cite","code","data","datalist","del","dfn","em","i","input","ins","kbd","keygen","label","map","mark","meter","noscript","output","progress","q","ruby","s","samp","script","select","small","span","strong","sub","sup","template","textarea","time","u","var","wbr"]),i=(0,o.Y)("meta");function s(n){return Boolean(function(n){return n&&"object"==typeof n&&"type"in n}(n)&&("text"===n.type||u(n)||(0,r.R)(n)||function(n){if(!(0,o.k)(n,"link"))return!1;if((0,t.l)(n,"itemProp"))return!0;const e=(n.properties||{}).rel||[];let l=-1;if(!Array.isArray(e)||0===e.length)return!1;for(;++l<e.length;)if(!a.has(String(e[l])))return!1;return!0}(n)||i(n)&&(0,t.l)(n,"itemProp")))}},60051:(n,e,l)=>{l.d(e,{$:()=>t});var o=l(80497);function t(n,e){const l=e.children||[],t=[];let r=-1;for(;++r<l.length;){const a=(0,o.J)(n,l[r],e);Array.isArray(a)?t.push(...a):a&&t.push(a)}let a=0,u=t.length;for(;a<u&&"break"===t[a].type;)a++;for(;u>a&&"break"===t[u-1].type;)u--;return 0===a&&u===t.length?t:t.slice(a,u)}},80497:(n,e,l)=>{l.d(e,{J:()=>a});var o=l(60051),t=l(44343),r=l(57757);function a(n,e,l){let a;if("element"===e.type){if(e.properties&&"ignore"===e.properties.dataMdast)return;t.f.call(n.handlers,e.tagName)&&(a=n.handlers[e.tagName])}else t.f.call(n.handlers,e.type)&&(a=n.handlers[e.type]);return"function"==typeof a?a(n,e,l):function(n,e){return"string"==typeof e.value?n(e,"text",(0,r.l)(n,e.value)):(0,o.$)(n,e)}(n,e)}},44343:(n,e,l)=>{l.d(e,{f:()=>o});const o={}.hasOwnProperty},57757:(n,e,l)=>{function o(n,e){return n.wrapText?e:e.replace(/\r?\n|\r/g," ")}l.d(e,{l:()=>o})},53560:(n,e,l)=>{function o(n){const e=n&&"object"==typeof n&&"text"===n.type?n.value||"":n;return"string"==typeof e&&""===e.replace(/[ \t\n\f\r]/g,"")}l.d(e,{Q:()=>o})},78312:(n,e,l)=>{l.d(e,{n:()=>a});var o=l(75999),t=l(64996);const r={}.hasOwnProperty,a=function(n,e,l,a){let s,c;"string"==typeof e||e instanceof RegExp?(c=[[e,l]],s=a):(c=e,s=l),s||(s={});const p=(0,t.O)(s.ignore||[]),d=function(n){const e=[];if("object"!=typeof n)throw new TypeError("Expected array or object as schema");if(Array.isArray(n)){let l=-1;for(;++l<n.length;)e.push([u(n[l][0]),i(n[l][1])])}else{let l;for(l in n)r.call(n,l)&&e.push([u(l),i(n[l])])}return e}(c);let m=-1;for(;++m<d.length;)(0,o.S4)(n,"text",h);return n;function h(n,e){let l,o=-1;for(;++o<e.length;){const n=e[o];if(p(n,l?l.children.indexOf(n):void 0,l))return;l=n}if(l)return function(n,e){const l=e[e.length-1],o=d[m][0],t=d[m][1];let r=0;const a=l.children.indexOf(n);let u=!1,i=[];o.lastIndex=0;let s=o.exec(n.value);for(;s;){const l=s.index,a={index:s.index,input:s.input,stack:[...e,n]};let c=t(...s,a);if("string"==typeof c&&(c=c.length>0?{type:"text",value:c}:void 0),!1!==c&&(r!==l&&i.push({type:"text",value:n.value.slice(r,l)}),Array.isArray(c)?i.push(...c):c&&i.push(c),r=l+s[0].length,u=!0),!o.global)break;s=o.exec(n.value)}return u?(r<n.value.length&&i.push({type:"text",value:n.value.slice(r)}),l.children.splice(a,1,...i)):i=[n],a+i.length}(n,e)}};function u(n){return"string"==typeof n?new RegExp(function(n){if("string"!=typeof n)throw new TypeError("Expected a string");return n.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(n),"g"):n}function i(n){return"function"==typeof n?n:()=>n}},32219:(n,e,l)=>{l.d(e,{dy:()=>y,YP:()=>v});class o{constructor(n,e,l){this.property=n,this.normal=e,l&&(this.space=l)}}function t(n,e){const l={},t={};let r=-1;for(;++r<n.length;)Object.assign(l,n[r].property),Object.assign(t,n[r].normal);return new o(l,t,e)}o.prototype.property={},o.prototype.normal={},o.prototype.space=null;var r=l(68031),a=l(98805);const u={}.hasOwnProperty;function i(n){const e={},l={};let t;for(t in n.properties)if(u.call(n.properties,t)){const o=n.properties[t],u=new a.I(t,n.transform(n.attributes||{},t),o,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(u.mustUseProperty=!0),e[t]=u,l[(0,r.F)(t)]=t,l[(0,r.F)(u.attribute)]=t}return new o(e,l,n.space)}const s=i({space:"xlink",transform:(n,e)=>"xlink:"+e.slice(5).toLowerCase(),properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),c=i({space:"xml",transform:(n,e)=>"xml:"+e.slice(3).toLowerCase(),properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function p(n,e){return e in n?n[e]:e}function d(n,e){return p(n,e.toLowerCase())}const m=i({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:d,properties:{xmlns:null,xmlnsXLink:null}});var h=l(17e3);const g=i({transform:(n,e)=>"role"===e?e:"aria-"+e.slice(4).toLowerCase(),properties:{ariaActiveDescendant:null,ariaAtomic:h.booleanish,ariaAutoComplete:null,ariaBusy:h.booleanish,ariaChecked:h.booleanish,ariaColCount:h.number,ariaColIndex:h.number,ariaColSpan:h.number,ariaControls:h.spaceSeparated,ariaCurrent:null,ariaDescribedBy:h.spaceSeparated,ariaDetails:null,ariaDisabled:h.booleanish,ariaDropEffect:h.spaceSeparated,ariaErrorMessage:null,ariaExpanded:h.booleanish,ariaFlowTo:h.spaceSeparated,ariaGrabbed:h.booleanish,ariaHasPopup:null,ariaHidden:h.booleanish,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:h.spaceSeparated,ariaLevel:h.number,ariaLive:null,ariaModal:h.booleanish,ariaMultiLine:h.booleanish,ariaMultiSelectable:h.booleanish,ariaOrientation:null,ariaOwns:h.spaceSeparated,ariaPlaceholder:null,ariaPosInSet:h.number,ariaPressed:h.booleanish,ariaReadOnly:h.booleanish,ariaRelevant:null,ariaRequired:h.booleanish,ariaRoleDescription:h.spaceSeparated,ariaRowCount:h.number,ariaRowIndex:h.number,ariaRowSpan:h.number,ariaSelected:h.booleanish,ariaSetSize:h.number,ariaSort:null,ariaValueMax:h.number,ariaValueMin:h.number,ariaValueNow:h.number,ariaValueText:null,role:null}}),f=i({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:d,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:h.commaSeparated,acceptCharset:h.spaceSeparated,accessKey:h.spaceSeparated,action:null,allow:null,allowFullScreen:h.boolean,allowPaymentRequest:h.boolean,allowUserMedia:h.boolean,alt:null,as:null,async:h.boolean,autoCapitalize:null,autoComplete:h.spaceSeparated,autoFocus:h.boolean,autoPlay:h.boolean,blocking:h.spaceSeparated,capture:h.boolean,charSet:null,checked:h.boolean,cite:null,className:h.spaceSeparated,cols:h.number,colSpan:null,content:null,contentEditable:h.booleanish,controls:h.boolean,controlsList:h.spaceSeparated,coords:h.number|h.commaSeparated,crossOrigin:null,data:null,dateTime:null,decoding:null,default:h.boolean,defer:h.boolean,dir:null,dirName:null,disabled:h.boolean,download:h.overloadedBoolean,draggable:h.booleanish,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:h.boolean,formTarget:null,headers:h.spaceSeparated,height:h.number,hidden:h.boolean,high:h.number,href:null,hrefLang:null,htmlFor:h.spaceSeparated,httpEquiv:h.spaceSeparated,id:null,imageSizes:null,imageSrcSet:null,inert:h.boolean,inputMode:null,integrity:null,is:null,isMap:h.boolean,itemId:null,itemProp:h.spaceSeparated,itemRef:h.spaceSeparated,itemScope:h.boolean,itemType:h.spaceSeparated,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:h.boolean,low:h.number,manifest:null,max:null,maxLength:h.number,media:null,method:null,min:null,minLength:h.number,multiple:h.boolean,muted:h.boolean,name:null,nonce:null,noModule:h.boolean,noValidate:h.boolean,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:h.boolean,optimum:h.number,pattern:null,ping:h.spaceSeparated,placeholder:null,playsInline:h.boolean,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:h.boolean,referrerPolicy:null,rel:h.spaceSeparated,required:h.boolean,reversed:h.boolean,rows:h.number,rowSpan:h.number,sandbox:h.spaceSeparated,scope:null,scoped:h.boolean,seamless:h.boolean,selected:h.boolean,shape:null,size:h.number,sizes:null,slot:null,span:h.number,spellCheck:h.booleanish,src:null,srcDoc:null,srcLang:null,srcSet:null,start:h.number,step:null,style:null,tabIndex:h.number,target:null,title:null,translate:null,type:null,typeMustMatch:h.boolean,useMap:null,value:h.booleanish,width:h.number,wrap:null,align:null,aLink:null,archive:h.spaceSeparated,axis:null,background:null,bgColor:null,border:h.number,borderColor:null,bottomMargin:h.number,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:h.boolean,declare:h.boolean,event:null,face:null,frame:null,frameBorder:null,hSpace:h.number,leftMargin:h.number,link:null,longDesc:null,lowSrc:null,marginHeight:h.number,marginWidth:h.number,noResize:h.boolean,noHref:h.boolean,noShade:h.boolean,noWrap:h.boolean,object:null,profile:null,prompt:null,rev:null,rightMargin:h.number,rules:null,scheme:null,scrolling:h.booleanish,standby:null,summary:null,text:null,topMargin:h.number,valueType:null,version:null,vAlign:null,vLink:null,vSpace:h.number,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:h.boolean,disableRemotePlayback:h.boolean,prefix:null,property:null,results:h.number,security:null,unselectable:null}}),b=i({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:p,properties:{about:h.commaOrSpaceSeparated,accentHeight:h.number,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:h.number,amplitude:h.number,arabicForm:null,ascent:h.number,attributeName:null,attributeType:null,azimuth:h.number,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:h.number,by:null,calcMode:null,capHeight:h.number,className:h.spaceSeparated,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:h.number,diffuseConstant:h.number,direction:null,display:null,dur:null,divisor:h.number,dominantBaseline:null,download:h.boolean,dx:null,dy:null,edgeMode:null,editable:null,elevation:h.number,enableBackground:null,end:null,event:null,exponent:h.number,externalResourcesRequired:null,fill:null,fillOpacity:h.number,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:h.commaSeparated,g2:h.commaSeparated,glyphName:h.commaSeparated,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:h.number,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:h.number,horizOriginX:h.number,horizOriginY:h.number,id:null,ideographic:h.number,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:h.number,k:h.number,k1:h.number,k2:h.number,k3:h.number,k4:h.number,kernelMatrix:h.commaOrSpaceSeparated,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:h.number,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:h.number,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:h.number,overlineThickness:h.number,paintOrder:null,panose1:null,path:null,pathLength:h.number,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:h.spaceSeparated,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:h.number,pointsAtY:h.number,pointsAtZ:h.number,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:h.commaOrSpaceSeparated,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:h.commaOrSpaceSeparated,rev:h.commaOrSpaceSeparated,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:h.commaOrSpaceSeparated,requiredFeatures:h.commaOrSpaceSeparated,requiredFonts:h.commaOrSpaceSeparated,requiredFormats:h.commaOrSpaceSeparated,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:h.number,specularExponent:h.number,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:h.number,strikethroughThickness:h.number,string:null,stroke:null,strokeDashArray:h.commaOrSpaceSeparated,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:h.number,strokeOpacity:h.number,strokeWidth:null,style:null,surfaceScale:h.number,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:h.commaOrSpaceSeparated,tabIndex:h.number,tableValues:null,target:null,targetX:h.number,targetY:h.number,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:h.commaOrSpaceSeparated,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:h.number,underlineThickness:h.number,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:h.number,values:null,vAlphabetic:h.number,vMathematical:h.number,vectorEffect:null,vHanging:h.number,vIdeographic:h.number,version:null,vertAdvY:h.number,vertOriginX:h.number,vertOriginY:h.number,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:h.number,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),y=t([c,s,m,g,f],"html"),v=t([c,s,m,g,b],"svg")},17920:(n,e,l)=>{l.d(e,{s:()=>s});var o=l(68031),t=l(98805),r=l(57643);const a=/^data[-\w.:]+$/i,u=/-[a-z]/g,i=/[A-Z]/g;function s(n,e){const l=(0,o.F)(e);let s=e,d=r.k;if(l in n.normal)return n.property[n.normal[l]];if(l.length>4&&"data"===l.slice(0,4)&&a.test(e)){if("-"===e.charAt(4)){const n=e.slice(5).replace(u,p);s="data"+n.charAt(0).toUpperCase()+n.slice(1)}else{const n=e.slice(4);if(!u.test(n)){let l=n.replace(i,c);"-"!==l.charAt(0)&&(l="-"+l),e="data"+l}}d=t.I}return new d(s,e)}function c(n){return"-"+n.toLowerCase()}function p(n){return n.charAt(1).toUpperCase()}},68031:(n,e,l)=>{function o(n){return n.toLowerCase()}l.d(e,{F:()=>o})},98805:(n,e,l)=>{l.d(e,{I:()=>a});var o=l(57643),t=l(17e3);const r=Object.keys(t);class a extends o.k{constructor(n,e,l,o){let a=-1;if(super(n,e),u(this,"space",o),"number"==typeof l)for(;++a<r.length;){const n=r[a];u(this,r[a],(l&t[n])===t[n])}}}function u(n,e,l){l&&(n[e]=l)}a.prototype.defined=!0},57643:(n,e,l)=>{l.d(e,{k:()=>o});class o{constructor(n,e){this.property=n,this.attribute=e}}o.prototype.space=null,o.prototype.boolean=!1,o.prototype.booleanish=!1,o.prototype.overloadedBoolean=!1,o.prototype.number=!1,o.prototype.commaSeparated=!1,o.prototype.spaceSeparated=!1,o.prototype.commaOrSpaceSeparated=!1,o.prototype.mustUseProperty=!1,o.prototype.defined=!1},17e3:(n,e,l)=>{l.r(e),l.d(e,{boolean:()=>t,booleanish:()=>r,commaOrSpaceSeparated:()=>c,commaSeparated:()=>s,number:()=>u,overloadedBoolean:()=>a,spaceSeparated:()=>i});let o=0;const t=p(),r=p(),a=p(),u=p(),i=p(),s=p(),c=p();function p(){return 2**++o}},52174:(n,e,l)=>{l.d(e,{Z:()=>p});var o=l(78909),t=l(38634),r=l(64996),a=l(53560);const u=["address","article","aside","blockquote","body","br","caption","center","col","colgroup","dd","dialog","dir","div","dl","dt","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","legend","li","li","listing","main","menu","nav","ol","optgroup","option","p","plaintext","pre","section","summary","table","tbody","td","td","tfoot","th","th","thead","tr","ul","wbr","xmp"],i=["button","input","select","textarea"],s=["area","base","basefont","dialog","datalist","head","link","meta","noembed","noframes","param","rp","script","source","style","template","track","title"],c=(0,r.O)(["doctype","comment"]);function p(n={}){const e=(l=n.newlines?v:S,function(n){return String(n).replace(/[\t\n\v\f\r ]+/g,l)});var l;return n=>{d(n,{collapse:e,whitespace:"normal"})}}function d(n,e){if("children"in n){const l=Object.assign({},e);return("root"===n.type||f(n))&&(l.before=!0,l.after=!0),l.whitespace=function(n,e){if("tagName"in n&&n.properties)switch(n.tagName){case"listing":case"plaintext":case"script":case"style":case"xmp":return"pre";case"nobr":return"nowrap";case"pre":return n.properties.wrap?"pre-wrap":"pre";case"td":case"th":return n.properties.noWrap?"nowrap":e.whitespace;case"textarea":return"pre-wrap"}return e.whitespace}(n,e),function(n,e){let l=e.before;const o=e.after,t=n.children;let r=t.length,a=-1;for(;++a<r;){const n=d(t[a],Object.assign({},e,{before:l,after:m(t,a,o)}));n.remove?(t.splice(a,1),a--,r--):n.ignore||(l=n.stripAtStart),g(t[a])&&(l=!1)}return{remove:!1,ignore:!1,stripAtStart:Boolean(l||o)}}(n,l)}if("text"===n.type){if("normal"===e.whitespace)return function(n,e){const l=e.collapse(n.value),o={remove:!1,ignore:!1,stripAtStart:!1};let t=0,r=l.length;return e.before&&y(l.charAt(0))&&t++,t!==r&&y(l.charAt(r-1))&&(e.after?r--:o.stripAtStart=!0),t===r?o.remove=!0:n.value=l.slice(t,r),o}(n,e);"nowrap"===e.whitespace&&(n.value=e.collapse(n.value))}return{remove:!1,ignore:c(n),stripAtStart:!1}}function m(n,e,l){for(;++e<n.length;){const l=n[e];let o=h(l);if(void 0===o&&"children"in l&&!b(l)&&(o=m(l.children,-1)),"boolean"==typeof o)return o}return l}function h(n){if("element"===n.type){if(g(n))return!1;if(f(n))return!0}else if("text"===n.type){if(!(0,a.Q)(n))return!1}else if(!c(n))return!1}function g(n){return(0,t.R)(n)||(0,o.k)(n,i)}function f(n){return(0,o.k)(n,u)}function b(n){return Boolean("properties"in n&&n.properties&&n.properties.hidden)||c(n)||(0,o.k)(n,s)}function y(n){return" "===n||"\n"===n}function v(n){const e=/\r?\n|\r/.exec(n);return e?e[0]:" "}function S(){return" "}},36582:(n,e,l)=>{function o(n){const e=String(n||"").trim();return e?e.split(/[ \t\n\r\f]+/g):[]}function t(n){return n.join(" ").trim()}l.d(e,{P:()=>t,Q:()=>o})},29422:(n,e,l)=>{l.d(e,{U:()=>t});var o=l(64996);const t=function(n,e,l){const t=(0,o.O)(l);if(!n||!n.type||!n.children)throw new Error("Expected parent node");if("number"==typeof e){if(e<0||e===Number.POSITIVE_INFINITY)throw new Error("Expected positive finite number as index")}else if((e=n.children.indexOf(e))<0)throw new Error("Expected child node or index");for(;++e<n.children.length;)if(t(n.children[e],e,n))return n.children[e];return null}}}]);