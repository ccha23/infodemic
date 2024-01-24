"use strict";(self.webpackChunk_jupyter_ai_core=self.webpackChunk_jupyter_ai_core||[]).push([[136],{29136:(e,t,n)=>{n.r(t),n.d(t,{CollaboratorsBody:()=>h,CollaboratorsPanel:()=>u,IGlobalAwareness:()=>o,IUserMenu:()=>s,RendererUserMenu:()=>I,UserInfoBody:()=>U,UserInfoPanel:()=>S,UserMenu:()=>P,remoteUserCursors:()=>x,showSharedLinkDialog:()=>L});var r=n(97930);const s=new r.Token("@jupyter/collaboration:IUserMenu"),o=new r.Token("@jupyter/collaboration:IGlobalAwareness");var a=n(66029),i=n(18778),l=n(26178),c=n(53483);const d="jp-Collaborator";class u extends i.Panel{constructor(e,t,n){super({}),this._onAwarenessChanged=()=>{const e=this._awareness.getStates(),t=[];e.forEach(((e,n)=>{this._currentUser.isReady&&e.user.name!==this._currentUser.identity.name&&t.push(e)})),this._body.collaborators=t},this._awareness=t,this._currentUser=e,this.addClass("jp-CollaboratorsPanel"),this._body=new h(n),this.addWidget(this._body),this.update(),this._awareness.on("change",this._onAwarenessChanged)}}class h extends l.ReactWidget{constructor(e){super(),this._collaborators=[],this._fileopener=e,this.addClass("jp-CollaboratorsList")}get collaborators(){return this._collaborators}set collaborators(e){this._collaborators=e,this.update()}render(){return this._collaborators.map(((e,t)=>{let n=!1,r="",s="",o="";if(e.current){n=!0;const t=e.current.split(":");o=`${t[1]}:${t[2]}`,r=c.PathExt.basename(t[2]),r=r.length>25?r.slice(0,12).concat("…"):r,s="•"}const i=`${e.user.display_name} ${s} ${r}`;return a.createElement("div",{className:n?`jp-ClickableCollaborator ${d}`:d,key:t,onClick:()=>{n&&this._fileopener(o)}},a.createElement("div",{className:"jp-CollaboratorIcon",style:{backgroundColor:e.user.color}},a.createElement("span",null,e.user.initials)),a.createElement("span",null,i))}))}}var p=n(98204),_=n(66211),f=n(90981);const m=p.Facet.define({combine:e=>e[e.length-1]}),b=_.EditorView.baseTheme({".jp-remote-cursor":{borderLeft:"1px solid black",marginLeft:"-1px"},".jp-remote-cursor.jp-mod-primary":{borderLeftWidth:"2px"},".jp-remote-selection":{opacity:.5},".cm-tooltip":{border:"none"},".cm-tooltip .jp-remote-userInfo":{color:"var(--jp-ui-inverse-font-color0)",padding:"0px 2px"}}),y=p.Annotation.define();class v{constructor(e,t){this.style=e,this.marker=t}draw(){const e=this.marker.draw();for(const[t,n]of Object.entries(this.style))e.style[t]=n;return e}eq(e){return this.marker.eq(e.marker)&&r.JSONExt.deepEqual(this.style,e.style)}update(e,t){for(const[t,n]of Object.entries(this.style))e.style[t]=n;return this.marker.update(e,t.marker)}}const g=(0,_.layer)({above:!0,markers(e){const{awareness:t,ytext:n}=e.state.facet(m),r=n.doc,s=[];return t.getStates().forEach(((o,a)=>{var i,l,c;if(a===t.doc.clientID)return;const d=o.cursors;for(const t of null!=d?d:[]){if(!(null==t?void 0:t.anchor)||!(null==t?void 0:t.head))return;const a=(0,f.createAbsolutePositionFromRelativePosition)(t.anchor,r),d=(0,f.createAbsolutePositionFromRelativePosition)(t.head,r);if((null==a?void 0:a.type)!==n||(null==d?void 0:d.type)!==n)return;const u=null===(i=t.primary)||void 0===i||i?"jp-remote-cursor jp-mod-primary":"jp-remote-cursor",h=p.EditorSelection.cursor(d.index,d.index>a.index?-1:1);for(const t of _.RectangleMarker.forRange(e,u,h))s.push(new v({borderLeftColor:null!==(c=null===(l=o.user)||void 0===l?void 0:l.color)&&void 0!==c?c:"black"},t))}})),s},update:(e,t)=>!!e.transactions.find((e=>e.annotation(y))),class:"jp-remote-cursors"}),w=(0,_.hoverTooltip)(((e,t)=>{var n;const{awareness:r,ytext:s}=e.state.facet(m),o=s.doc;for(const[e,a]of r.getStates())if(e!==r.doc.clientID)for(const e of null!==(n=a.cursors)&&void 0!==n?n:[]){if(!(null==e?void 0:e.head))continue;const n=(0,f.createAbsolutePositionFromRelativePosition)(e.head,o);if((null==n?void 0:n.type)===s&&n.index-1<=t&&t<=n.index+1)return{pos:n.index,above:!0,create:()=>{var e,t,n,r;const s=document.createElement("div");return s.classList.add("jp-remote-userInfo"),s.style.backgroundColor=null!==(t=null===(e=a.user)||void 0===e?void 0:e.color)&&void 0!==t?t:"darkgrey",s.textContent=null!==(r=null===(n=a.user)||void 0===n?void 0:n.display_name)&&void 0!==r?r:"Anonymous",{dom:s}}}}return null}),{hideOn:(e,t)=>!!e.annotation(y)}),k=(0,_.layer)({above:!1,markers(e){const{awareness:t,ytext:n}=e.state.facet(m),r=n.doc,s=[];return t.getStates().forEach(((o,a)=>{var i,l,c;if(a===t.doc.clientID)return;const d=o.cursors;for(const t of null!=d?d:[]){if(null===(i=t.empty)||void 0===i||i||!(null==t?void 0:t.anchor)||!(null==t?void 0:t.head))return;const a=(0,f.createAbsolutePositionFromRelativePosition)(t.anchor,r),d=(0,f.createAbsolutePositionFromRelativePosition)(t.head,r);if((null==a?void 0:a.type)!==n||(null==d?void 0:d.type)!==n)return;const u="jp-remote-selection";for(const t of _.RectangleMarker.forRange(e,u,p.EditorSelection.range(a.index,d.index)))s.push(new v({backgroundColor:null!==(c=null===(l=o.user)||void 0===l?void 0:l.color)&&void 0!==c?c:"black"},t))}})),s},update:(e,t)=>!!e.transactions.find((e=>e.annotation(y))),class:"jp-remote-selections"}),C=_.ViewPlugin.fromClass(class{constructor(e){this.editorAwareness=e.state.facet(m),this._listener=({added:t,updated:n,removed:r})=>{t.concat(n).concat(r).findIndex((e=>e!==this.editorAwareness.awareness.doc.clientID))>=0&&e.dispatch({annotations:[y.of([])]})},this.editorAwareness.awareness.on("change",this._listener)}destroy(){this.editorAwareness.awareness.off("change",this._listener)}update(e){var t;if(!e.docChanged&&!e.selectionSet)return;const{awareness:n,ytext:s}=this.editorAwareness,o=n.getLocalState();if(o){const a=e.view.hasFocus&&e.view.dom.ownerDocument.hasFocus(),i=e.state.selection,l=new Array;if(a&&i){for(const e of i.ranges){const t=e===i.main,n=(0,f.createRelativePositionFromTypeIndex)(s,e.anchor),r=(0,f.createRelativePositionFromTypeIndex)(s,e.head);l.push({anchor:n,head:r,primary:t,empty:e.empty})}if(!o.cursors||l.length>0){const e=null===(t=o.cursors)||void 0===t?void 0:t.map((e=>({...e,anchor:(null==e?void 0:e.anchor)?(0,f.createRelativePositionFromJSON)(e.anchor):null,head:(null==e?void 0:e.head)?(0,f.createRelativePositionFromJSON)(e.head):null})));r.JSONExt.deepEqual(l,e)||n.setLocalStateField("cursors",l)}}}}},{provide:()=>[b,g,k,w,(0,_.tooltips)({position:"absolute",parent:document.body})]});function x(e){return[m.of(e),C]}var j=n(32083),A=n(84059);class I extends i.MenuBar.Renderer{constructor(e){super(),this._user=e}renderItem(e){const t=this.createItemClass(e),n=this.createItemDataset(e),r=this.createItemARIA(e);return A.h.li({className:t,dataset:n,tabindex:"0",onfocus:e.onfocus,...r},this._createUserIcon(),this.renderLabel(e),this.renderIcon(e))}renderLabel(e){const t=this.formatLabel(e);return A.h.div({className:"lm-MenuBar-itemLabel jp-MenuBar-label"},t)}_createUserIcon(){return this._user.isReady&&this._user.identity.avatar_url?A.h.div({className:"lm-MenuBar-itemIcon jp-MenuBar-imageIcon"},A.h.img({src:this._user.identity.avatar_url})):this._user.isReady?A.h.div({className:"lm-MenuBar-itemIcon jp-MenuBar-anonymousIcon",style:{backgroundColor:this._user.identity.color}},A.h.span({},this._user.identity.initials)):A.h.div({className:"lm-MenuBar-itemIcon jp-MenuBar-anonymousIcon"},j.userIcon)}}class P extends i.Menu{constructor(e){super(e)}}var E=n(48033);async function L({translator:e}){const t=(null!=e?e:E.nullTranslator).load("collaboration"),n=c.PageConfig.getToken(),r=new URL(c.URLExt.normalize(c.PageConfig.getUrl({workspace:c.PageConfig.defaultWorkspace})));return(0,l.showDialog)({title:t.__("Share Jupyter Server Link"),body:new R(r.toString(),n,""!==c.PageConfig.getOption("hubUser"),t),buttons:[l.Dialog.cancelButton(),l.Dialog.okButton({label:t.__("Copy Link"),caption:t.__("Copy the link to the Jupyter Server")})]})}class R extends i.Widget{constructor(e,t,n,r){super(),this._url=e,this._token=t,this._behindHub=n,this._trans=r,this._tokenCheckbox=null,this.onTokenChange=e=>{const t=e.target;this.updateContent(null==t?void 0:t.checked)},this._warning=document.createElement("div"),this.populateBody(this.node),this.addClass("jp-shared-link-body")}getValue(){var e;if(!0===(null===(e=this._tokenCheckbox)||void 0===e?void 0:e.checked)){const e=new URL(this._url);return e.searchParams.set("token",this._token),e.toString()}return this._url}onAfterAttach(e){var t;super.onAfterAttach(e),null===(t=this._tokenCheckbox)||void 0===t||t.addEventListener("change",this.onTokenChange)}onBeforeDetach(e){var t;null===(t=this._tokenCheckbox)||void 0===t||t.removeEventListener("change",this.onTokenChange),super.onBeforeDetach(e)}updateContent(e){this._warning.innerHTML="";const t=this.node.querySelector("input[readonly]");if(e){if(t){const e=new URL(this._url);e.searchParams.set("token",this._token.slice(0,5)),t.value=e.toString()+"…"}this._warning.appendChild(document.createElement("h3")).textContent=this._trans.__("Security warning!"),this._warning.insertAdjacentText("beforeend",this._trans.__("Anyone with this link has full access to your notebook server, including all your files!")),this._warning.insertAdjacentHTML("beforeend","<br>"),this._warning.insertAdjacentText("beforeend",this._trans.__("Please be careful who you share it with.")),this._warning.insertAdjacentHTML("beforeend","<br>"),this._behindHub?(this._warning.insertAdjacentText("beforeend",this._trans.__("They will be able to access this server AS YOU.")),this._warning.insertAdjacentHTML("beforeend","<br>"),this._warning.insertAdjacentText("beforeend",this._trans.__("To revoke access, go to File -> Hub Control Panel, and restart your server."))):this._warning.insertAdjacentText("beforeend",this._trans.__("Currently, there is no way to revoke access other than shutting down your server."))}else t&&(t.value=this._url),this._behindHub?this._warning.insertAdjacentText("beforeend",this._trans.__("Only users with `access:servers` permissions for this server will be able to use this link.")):this._warning.insertAdjacentText("beforeend",this._trans.__("Only authenticated users will be able to use this link."))}populateBody(e){if(e.insertAdjacentHTML("afterbegin",`<input readonly value="${this._url}">`),this._token){const t=e.appendChild(document.createElement("label"));t.insertAdjacentHTML("beforeend",'<input type="checkbox">'),this._tokenCheckbox=t.firstChild,t.insertAdjacentText("beforeend",this._trans.__("Include token in URL")),e.insertAdjacentElement("beforeend",this._warning),this.updateContent(!1)}}}const T=e=>{const{user:t}=e;return a.createElement("div",{className:"jp-UserInfo-Container"},a.createElement("div",{title:t.display_name,className:"jp-UserInfo-Icon",style:{backgroundColor:t.color}},a.createElement("span",null,t.initials)),a.createElement("h3",null,t.display_name))};class S extends i.Panel{constructor(e){super({}),this.addClass("jp-UserInfoPanel"),this._profile=e,this._body=null,this._profile.isReady?(this._body=new U(this._profile.identity),this.addWidget(this._body),this.update()):this._profile.ready.then((()=>{this._body=new U(this._profile.identity),this.addWidget(this._body),this.update()})).catch((e=>console.error(e)))}}class U extends l.ReactWidget{constructor(e){super(),this._user=e}get user(){return this._user}set user(e){this._user=e,this.update()}render(){return a.createElement(T,{user:this._user})}}}}]);