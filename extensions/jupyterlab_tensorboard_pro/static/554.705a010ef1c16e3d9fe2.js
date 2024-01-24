"use strict";(self.webpackChunkjupyterlab_tensorboard_pro=self.webpackChunkjupyterlab_tensorboard_pro||[]).push([[554,38],{954:(e,t,n)=>{n.r(t),n.d(t,{addCommands:()=>z,default:()=>W,tensorboardIcon:()=>O});var r=n(7119),o=n(7534),a=n(3777),s=n(9853),i=n(6697),l=n(4901),d=n(7930),c=n(7065),m=n(4856);const u="api/tensorboard_pro",h="tensorboard_pro";var g,p;!function(e){e.startNew=function(e,t,n,r,o){return f.startNew(e,t,n,r,o)},e.getStaticConfig=function(e){return f.getStaticConfig(e)},e.listRunning=function(e){return f.listRunning(e)},e.shutdown=function(e,t){return f.shutdown(e,t)},e.shutdownAll=function(e){return f.shutdownAll(e)},e.getUrl=function(e,t){return f.getUrl(e,t)}}(g||(g={}));class f{constructor(e,t,n,r,o,a,s={}){this._isDisposed=!1,this._terminated=new l.Signal(this),this._name=e,this._logdir=t,this._lastReload=n,this._reloadInterval=r,this._enableMultiLog=Boolean(o),this._additionalArgs=a||"",this.serverSettings=s.serverSettings||m.ServerConnection.makeSettings(),this._url=p.getTensorboardInstanceUrl(this.serverSettings.baseUrl,this._name)}get name(){return this._name}get model(){return{name:this._name,logdir:this._logdir,reload_time:this._lastReload,reload_interval:this._reloadInterval||0,enable_multi_log:this._enableMultiLog||!1,additional_args:this._additionalArgs||""}}get terminated(){return this._terminated}get isDisposed(){return this._isDisposed}dispose(){this._isDisposed||(this.terminated.emit(void 0),this._isDisposed=!0,delete p.running[this._url],l.Signal.clearData(this))}shutdown(){const{name:e,serverSettings:t}=this;return f.shutdown(e,t)}}!function(e){function t(e){e=e||m.ServerConnection.makeSettings();const t=p.getServiceUrl(e.baseUrl),n=p.getTensorboardInstanceRootUrl(e.baseUrl);return m.ServerConnection.makeRequest(t,{},e).then((e=>{if(200!==e.status)throw new m.ServerConnection.ResponseError(e);return e.json()})).then((e=>{if(!Array.isArray(e))throw new Error("Invalid tensorboard data");const t=(0,i.toArray)((0,i.map)(e,(e=>c.URLExt.join(n,e.name))));return(0,i.each)(Object.keys(p.running),(e=>{-1===t.indexOf(e)&&p.running[e].dispose()})),e}))}function n(e,t){t=t||m.ServerConnection.makeSettings();const n=p.getTensorboardUrl(t.baseUrl,e);return m.ServerConnection.makeRequest(n,{method:"DELETE"},t).then((e=>{if(404===e.status)return e.json().then((e=>{p.killTensorboard(n)}));if(204!==e.status)throw new m.ServerConnection.ResponseError(e);p.killTensorboard(n)}))}e.startNew=function(t,n,r,o,a={}){const s=a.serverSettings||m.ServerConnection.makeSettings(),i=p.getServiceUrl(s.baseUrl),l={method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({logdir:t,reload_interval:n,enable_multi_log:r,additional_args:o})};return m.ServerConnection.makeRequest(i,l,s).then((e=>{if(200!==e.status)throw new m.ServerConnection.ResponseError(e);return e.json()})).then((t=>{const n=t.name,r=t.logdir,o=t.reload_time,i=t.reload_interval,l=t.enable_multi_log,d=t.additional_args;return new e(n,r,o,i,l,d,{...a,serverSettings:s})}))},e.getStaticConfig=function(e){const t=p.getTensorboardStaticConfigUrl(e.baseUrl);return m.ServerConnection.makeRequest(t,{},e).then((e=>{if(200!==e.status)throw new m.ServerConnection.ResponseError(e);return e.json()})).then((e=>e))},e.listRunning=t,e.shutdown=n,e.shutdownAll=function(e){return t(e=e||m.ServerConnection.makeSettings()).then((t=>{(0,i.each)(t,(t=>{n(t.name,e)}))}))},e.getUrl=function(e,t){return t=t||m.ServerConnection.makeSettings(),p.getTensorboardInstanceUrl(t.baseUrl,e)}}(f||(f={})),function(e){e.running=Object.create(null),e.getTensorboardUrl=function(e,t){return c.URLExt.join(e,u,t)},e.getTensorboardStaticConfigUrl=function(e){return c.URLExt.join(e,"api/tensorboard_pro_static_config")},e.getServiceUrl=function(e){return c.URLExt.join(e,u)},e.killTensorboard=function(t){e.running[t]&&e.running[t].dispose()},e.getTensorboardInstanceRootUrl=function(e){return c.URLExt.join(e,h)},e.getTensorboardInstanceUrl=function(e,t){return c.URLExt.join(e,h,t)}}(p||(p={}));class b{constructor(e={}){this._models=[],this._tensorboards=new Set,this._isDisposed=!1,this._isReady=!1,this._refreshTimer=-1,this._runningChanged=new l.Signal(this),this._statusConfig=null,this.serverSettings=e.serverSettings||m.ServerConnection.makeSettings(),this._readyPromise=this._refreshRunning(),this._refreshTimer=setInterval((()=>{"undefined"!=typeof document&&document.hidden||this._refreshRunning()}),1e4),this.getStaticConfigPromise=this._getStaticConfig()}get runningChanged(){return this._runningChanged}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,clearInterval(this._refreshTimer),l.Signal.clearData(this),this._models=[])}get isReady(){return this._isReady}get ready(){return this._readyPromise}running(){return this._models}formatDir(e){var t;const n=null===(t=this._statusConfig)||void 0===t?void 0:t.notebook_dir;if(e.includes(","))return e.split(",").map((e=>e.includes(":")?`${e.split(":")[0]}:${this.formatDir(e.split(":")[1])}`:this.formatDir(e))).join(",");if(n&&0===e.indexOf(n)){let t=e.replace(n,"");""===t&&(t="/");return`${t}`.replace(/^\//,"")||"<workspace_root>"}return e}async startNew(e,t=120,n=!1,r="",o){const a=await g.startNew(e,t,n,r,this._getOptions(o));return this._onStarted(a),a}async shutdown(e){const t=i.ArrayExt.findFirstIndex(this._models,(t=>t.name===e));if(-1!==t)return this._models.splice(t,1),this._runningChanged.emit(this._models.slice()),g.shutdown(e,this.serverSettings).then((()=>{const t=[];this._tensorboards.forEach((n=>{n.name===e&&(n.dispose(),t.push(n))})),t.forEach((e=>{this._tensorboards.delete(e)}))}))}shutdownAll(){const e=this._models;return e.length>0&&(this._models=[],this._runningChanged.emit([])),this._refreshRunning().then((()=>Promise.all(e.map((e=>g.shutdown(e.name,this.serverSettings).then((()=>{const e=[];this._tensorboards.forEach((t=>{t.dispose(),e.push(t)})),e.forEach((e=>{this._tensorboards.delete(e)}))}))))).then((()=>{}))))}refreshRunning(){return this._refreshRunning()}_onTerminated(e){const t=i.ArrayExt.findFirstIndex(this._models,(t=>t.name===e));-1!==t&&(this._models.splice(t,1),this._runningChanged.emit(this._models.slice()))}_onStarted(e){const t=e.name;this._tensorboards.add(e),-1===i.ArrayExt.findFirstIndex(this._models,(e=>e.name===t))&&(this._models.push(e.model),this._runningChanged.emit(this._models.slice())),e.terminated.connect((()=>{this._onTerminated(t)}))}_refreshRunning(){return g.listRunning(this.serverSettings).then((e=>{if(this._isReady=!0,!d.JSONExt.deepEqual(e,this._models)){const t=e.map((e=>e.name)),n=[];this._tensorboards.forEach((e=>{-1===t.indexOf(e.name)&&(e.dispose(),n.push(e))})),n.forEach((e=>{this._tensorboards.delete(e)})),this._models=e.slice(),this._runningChanged.emit(e)}}))}_getStaticConfig(){return g.getStaticConfig(this.serverSettings).then((e=>{this._statusConfig=e}))}_getOptions(e={}){return{...e,serverSettings:this.serverSettings}}}var v,w=n(587),_=n(5057),y=n(6029),E=n.n(y);!function(e){e.createNew="tensorboard:create-new",e.inputDirect="tensorboard:choose-direct",e.open="tensorboard:open",e.openDoc="tensorboard:openDoc",e.close="tensorboard:close"}(v||(v={}));var N=n(9341),C=n(4356),S=n(670),D=n(4503),T=n(8198),k=n(5950),R=n.n(k),x=n(2307);const B=e=>E().createElement("div",{className:"tensorboard-loading-container"},E().createElement("div",{className:"lds-ring"},E().createElement("div",null),E().createElement("div",null),E().createElement("div",null),E().createElement("div",null)),e.title&&E().createElement("p",{className:"title"},e.title),e.desc&&E().createElement("p",{className:"desc"},e.desc)),M=e=>{const[t,n]=(0,y.useState)(e.getCWD()),[r,o]=(0,y.useState)(120),[a,s]=(0,y.useState)(""),[i,l]=(0,y.useState)(!1),[d,c]=(0,y.useState)(!1);return E().createElement("div",{className:"tensorboard-ng-creator"},E().createElement("div",{className:"tensorboard-ng-config"},E().createElement("div",{className:"input-container tensorboard-ng-logdir"},E().createElement("label",{title:"Path relative to workspace, don\\'t start with `/`"},E().createElement("strong",null,"Log Dir")),E().createElement(S.B,{style:{width:160},small:!0,placeholder:"Enter your log dir...",value:t,onChange:e=>{n(e.target.value),e.target.value.includes(",")&&c(!0)}})),E().createElement("div",{className:"input-container tensorboard-ng-logdir"},E().createElement(D.rs,{className:"multi-log-switch",checked:d,onChange:()=>{c(!d)},labelElement:E().createElement("strong",{title:"Use `--logdir_spec` instead of `--logdir` to support multi log dirs, This flag is discouraged and can usually be avoided. for finer-grained control, prefer using a symlink tree. Some features may not work when using `--logdir_spec` instead of `--logdir`"},"Multi LogDir")}),E().createElement(D.rs,{className:"interval-switch",checked:i,onChange:()=>{l(!i)},labelElement:E().createElement("strong",{title:"Setting reload interval may cause additional burden on the jupyter backend"},"Reload Interval")}),i&&E().createElement(S.B,{style:{width:80},small:!0,placeholder:"Enter your reload_interval ...",value:i?`${r}`:"",onChange:e=>{o(Number(e.target.value))},rightElement:E().createElement(T.V,{minimal:!0},"s"),type:"number"}))),E().createElement(S.B,{className:R()("additional-config-input",{"with-content":!!a.length}),small:!0,placeholder:"Custom Args...",value:a,onChange:e=>{s(e.target.value)}}),E().createElement("div",{className:"tensorboard-ng-ops create"},E().createElement(N.z,{small:!0,intent:"warning",className:"tensorboard-ng-op-btn",onClick:()=>{e.startTensorBoard(t,i?r:0,d,a)},disabled:e.disable},"Create TensorBoard")),E().createElement("div",{className:"tensorboard-ng-expand"}),E().createElement(N.z,{small:!0,outlined:!0,icon:"help",onClick:()=>{e.openDoc()}},"Document"))},I=x.Select.ofType(),U=e=>{const[t,n]=(0,y.useState)(e),r=(0,y.useRef)(t);return[t,r,e=>{n(e),r.current=e}]},j=e=>{const[t,n,o]=U(!1),[a,s,i]=U(!1),[l,d,c]=U(!1),[m,u]=(0,y.useState)(!1),[h,p]=(0,y.useState)(!1),[f,b]=(0,y.useState)(null),v=(0,y.useRef)(f),w=t=>{e.updateCurrentModel(t),b(t),v.current=t},[_,S]=(0,y.useState)([]),[D,T]=(0,y.useState)(!1),k=l||a,x=()=>{s.current||d.current||e.tensorboardManager.refreshRunning().then((()=>{const t=[...e.tensorboardManager.running()],r=[];for(const e of t)r.push(e);if(S(r),n.current)return void(v.current&&(r.find((e=>e.name===v.current.name))||T(!0)));const a=e.createdModelName?r.find((t=>t.name===e.createdModelName)):null;a?(w(a),p(!0),e.setWidgetName&&e.setWidgetName(`${a.name}:`+e.tensorboardManager.formatDir(a.logdir))):(u(!0),p(!1)),o(!0)}))},j=t=>{const n=e.tensorboardManager.formatDir(t.logdir);return`${t.name} - ${n}`};return(0,y.useEffect)((()=>{x();const e=setInterval(x,3e4);return()=>{clearInterval(e)}}),[]),E().createElement("div",{className:"tensorboard-ng-main"},t&&E().createElement("div",{className:R()("tensorboard-ng-control-layout",{"hide-one":!(m&&h)})},E().createElement("div",{className:R()("tensorboard-ng-control-row",{hide:!h})},E().createElement("div",{className:"tensorboard-ng-config"},E().createElement("div",{className:"input-container tensorboard-ng-logdir"},E().createElement(N.z,{className:"refresh-dir-btn",small:!0,icon:"refresh",disabled:k,onClick:x}),E().createElement(I,{className:"tb-ng-model-selector",popoverProps:{minimal:!0},itemRenderer:(e,{handleClick:t})=>E().createElement(C.s,{key:e.name,onClick:t,text:j(e)}),items:_,onItemSelect:t=>(t=>{(null==f?void 0:f.name)!==t.name&&(e.setWidgetName&&e.setWidgetName(`${t.name}:`+e.tensorboardManager.formatDir(t.logdir)),b(t))})(t),filterable:!1,activeItem:f,disabled:k},E().createElement(N.z,{title:f?j(f):"NONE",className:"selector-active-btn",rightIcon:"caret-down",text:E().createElement("span",{className:"active-btn-text"},f?j(f):"NONE"),small:!0})),E().createElement(N.z,{className:"refresh-dir-btn",small:!0,icon:"document-open",disabled:k,onClick:()=>{f&&window.open(g.getUrl(f.name))}}),f&&f.enable_multi_log&&E().createElement("p",{className:"multi-log-tip"},"Multi LogDir"),f&&E().createElement("p",{className:"reload-tip"},"reload interval(s): ",(null==f?void 0:f.reload_interval)||"Never"),(null==f?void 0:f.additional_args)&&E().createElement(E().Fragment,null,E().createElement("p",{title:null==f?void 0:f.additional_args,className:"custom-args-tip"},null==f?void 0:f.additional_args),E().createElement(N.z,{small:!0,minimal:!0,icon:"duplicate",onClick:()=>{!function(e){const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select();document.execCommand("copy");document.body.removeChild(t)}(null==f?void 0:f.additional_args)}})))),E().createElement("div",{className:"tensorboard-ng-expand"}),E().createElement("div",{className:"tensorboard-ng-ops"},E().createElement(N.z,{small:!0,intent:"primary",className:"tensorboard-ng-op-btn",onClick:()=>{if(!f)return;c(!0),w(null);const t="number"==typeof f.reload_interval?f.reload_interval:120,n=f.logdir,o=f.enable_multi_log,a=f.additional_args,s=t=>{(0,r.showDialog)({title:"TensorBoard Reload Error",body:"The panel has been closed, you can reopen to create new",buttons:[r.Dialog.okButton()]}),e.closeWidget()};try{e.tensorboardManager.shutdown(f.name).then((r=>{e.tensorboardManager.startNew(n,t,o,a).then((e=>{x(),c(!1),w(f)})).catch((e=>{s()}))})).catch((e=>{s()}))}catch(e){s()}},disabled:k},"Reload"),E().createElement(N.z,{small:!0,intent:"danger",disabled:k,className:"tensorboard-ng-op-btn",onClick:()=>{f&&e.tensorboardManager.shutdown(f.name).then((t=>{e.closeWidget()}))},title:"Destroy current tensorboard, sidebar `running terminals and kernels` supports destroy all"},"Destroy"),E().createElement(N.z,{small:!0,intent:"none",disabled:k,className:"tensorboard-ng-op-btn",onClick:()=>{f&&e.openTensorBoard(f.name,!0)}},"Duplicate"),E().createElement(N.z,{small:!0,intent:"none",disabled:k,className:"tensorboard-ng-op-btn",onClick:()=>{u(!m)},active:m},"New.."))),E().createElement("div",{className:R()("tensorboard-ng-control-row creator",{hide:!m})},E().createElement(M,{disable:k,getCWD:e.getCWD,startTensorBoard:(t,n,o,a)=>{if(Number.isNaN(n)||n<0)return(0,r.showDialog)({title:"Param Check Failed",body:"reloadInterval should > 0 when enabled",buttons:[r.Dialog.okButton()]});i(!0);const s=null==f?void 0:f.name;e.startNew(t,n,o,a).then((t=>{s===t.model.name&&(0,r.showDialog)({body:"Existing tensorBoard for the logDir will be reused directly",buttons:[r.Dialog.okButton()]}),e.setWidgetName&&e.setWidgetName(`${t.model.name}:`+e.tensorboardManager.formatDir(t.model.logdir)),w(t.model),i(!1),x(),p(!0),u(!1)})).catch((e=>{i(!1);const t="Start TensorBoard internal error";e.response.json().then((e=>e.message)).then((e=>{(0,r.showDialog)({body:e||t,buttons:[r.Dialog.okButton()]})})).catch((()=>{(0,r.showDialog)({body:t,buttons:[r.Dialog.okButton()]})}))}))},openDoc:e.openDoc}),E().createElement("div",{className:"tensorboard-ng-expand"}))),E().createElement("div",{className:"tensorboard-ng-iframe-container"},f&&E().createElement("iframe",{sandbox:"allow-scripts allow-forms allow-same-origin",referrerPolicy:"no-referrer",className:"tensorboard-ng-iframe",src:g.getUrl(f.name)}),!f&&E().createElement("div",{className:"tensorboard-ng-iframe-tip"},t?a?E().createElement(B,{title:"TensorBoard is initializing",desc:"This stage may take a long time (the more content in the directory, the longer it will be)"}):l?E().createElement(B,{title:"TensorBoard is reloading",desc:"This stage may take a long time (the more content in the directory, the longer it will be)"}):E().createElement("div",{className:"common-tip"},E().createElement("p",{className:"title"},"No instance for current directory yet, please create a new TensorBoard"),E().createElement("p",{className:"desc"},E().createElement("i",null,"If the selected log directory has too much content, tensorboard initialization may take a long time, during which jupyter will get stuck"))):E().createElement(B,{title:"initializing"})),D&&E().createElement("div",{className:"tensorboard-ng-iframe-tip"},E().createElement("p",{className:"error"},"Current Tensorboard is not active. Please select others or create a new one."))))};class A extends r.ReactWidget{constructor(e){super(),this.currentTensorBoardModel=null,this.closeCurrent=()=>{this.dispose(),this.close()},this.updateCurrentModel=e=>{this.currentTensorBoardModel=e,this.currentLogDir=(null==e?void 0:e.logdir)||""},this.getCWD=()=>this.fileBrowser.model.path,this.openTensorBoard=(e,t)=>{this.app.commands.execute(v.open,{modelName:e,copy:t})},this.openDoc=()=>{this.app.commands.execute(v.openDoc)},this.startNew=(e,t,n,r,o)=>(this.currentLogDir=e,this.tensorboardManager.startNew(e,t,n,r,o)),this.setWidgetName=e=>{this.title.label=e||"Tensorboard",this.title.caption=`Name: ${this.title.label}`},this.fileBrowser=e.fileBrowser,this.tensorboardManager=e.tensorboardManager,this.createdModelName=e.createdModelName,this.app=e.app,this.createdModelName||(this.currentLogDir=this.getCWD()),this.addClass("tensorboard-ng-widget"),this.addClass("jp-Tensorboard"),this.title.iconClass="jp-Tensorboards-itemIcon",this.title.closable=!0,this.title.label="Tensorboard",this.title.caption=`Name: ${this.title.label}`}dispose(){super.dispose()}onCloseRequest(e){super.onCloseRequest(e),this.dispose()}render(){return E().createElement(j,{setWidgetName:this.setWidgetName,update:this.update.bind(this),updateCurrentModel:this.updateCurrentModel,tensorboardManager:this.tensorboardManager,startNew:this.startNew,getCWD:this.getCWD,openTensorBoard:this.openTensorBoard,closeWidget:this.closeCurrent,openDoc:this.openDoc,createdModelName:this.createdModelName})}}const O=new _.LabIcon({name:"jupyterlab-tensorboard-p:tensorboard",svgstr:'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\r\n<svg\r\n   xmlns:dc="http://purl.org/dc/elements/1.1/"\r\n   xmlns:cc="http://creativecommons.org/ns#"\r\n   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\r\n   xmlns:svg="http://www.w3.org/2000/svg"\r\n   xmlns="http://www.w3.org/2000/svg"\r\n   id="svg8"\r\n   version="1.1"\r\n   viewBox="0 0 30.31081 32.499828"\r\n   height="122.83399"\r\n   width="114.56054">\r\n  <defs\r\n     id="defs2" />\r\n  <metadata\r\n     id="metadata5">\r\n    <rdf:RDF>\r\n      <cc:Work\r\n         rdf:about="">\r\n        <dc:format>image/svg+xml</dc:format>\r\n        <dc:type\r\n           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\r\n        <dc:title></dc:title>\r\n      </cc:Work>\r\n    </rdf:RDF>\r\n  </metadata>\r\n  <g\r\n     transform="translate(-77.942529,-177.00005)"\r\n     id="layer1">\r\n    <g\r\n       id="g4550">\r\n      <path\r\n         style="fill:#e55b2d;fill-opacity:1"\r\n         d="m 360.04883,687.87305 v 18.89843 l 32.73047,18.89844 v -18.89844 z m -65.46289,18.89843 v 18.89844 l 16.36523,9.44727 V 716.2207 Z m 49.0957,9.44922 -16.36523,9.44922 v 56.69141 l 16.36523,9.44922 v -37.79493 l 16.36719,9.44922 v -18.89843 l -16.36719,-9.44922 z"\r\n         transform="scale(0.26458333)"\r\n         id="path4508" />\r\n      <path\r\n         style="fill:#ed8e24;fill-opacity:1"\r\n         d="m 360.04883,687.87305 -49.09766,28.34765 v 18.89649 l 32.73047,-18.89649 v 18.89649 l 16.36719,-9.44727 z m 49.09765,9.44922 -16.36718,9.44921 v 18.89844 l 16.36718,-9.44922 z m -32.73242,37.79492 -16.36523,9.44922 v 18.89843 l 16.36523,-9.44922 z m -16.36523,28.34765 -16.36719,-9.44922 v 37.79493 l 16.36719,-9.44922 z"\r\n         transform="scale(0.26458333)"\r\n         id="path4491" />\r\n      <path\r\n         style="fill:#f8bf3c;fill-opacity:1"\r\n         d="m 360.04883,668.97656 -65.46289,37.79492 16.36523,9.44922 49.09766,-28.34765 32.73047,18.89843 16.36718,-9.44921 z m 0,56.69336 -16.36719,9.44727 16.36719,9.44922 16.36523,-9.44922 z"\r\n         transform="scale(0.26458333)"\r\n         id="path4506" />\r\n    </g>\r\n  </g>\r\n</svg>\r\n'}),W={id:"tensorboard",requires:[r.ICommandPalette,s.IFileBrowserFactory],optional:[o.ILauncher,a.IMainMenu,w.IRunningSessionManagers],autoStart:!0,activate:async function(e,t,n,o,a,s){console.info("activate beign test!!");const i=new b,l=new r.WidgetTracker({namespace:"tensorboard"});return z(e,i,l,n.createFileBrowser("tensorboard_pro"),o,a),s&&await function(e,t,n){class r{constructor(e,t){this._model=e,this.manager=t}open(){t.commands.execute(v.open,{modelName:this._model.name})}icon(){return O}label(){return`${this._model.name}:${this.manager.formatDir(this._model.logdir)}`}shutdown(){return t.commands.execute(v.close,{tb:this._model}),n.shutdown(this._model.name)}}return n.getStaticConfigPromise.then((()=>{e.add({name:"Tensorboard",running:()=>n.running().map((e=>new r(e,n))),shutdownAll:()=>n.shutdownAll(),refreshRunning:()=>n.refreshRunning(),runningChanged:n.runningChanged})}))}(s,e,i),t.addItem({command:v.inputDirect,category:"Tensorboard"}),l}};function z(e,t,n,o,a,s){const{commands:i,serviceManager:l}=e;i.addCommand(v.open,{execute:a=>{let s=a.modelName;const i=a.copy;console.info("[DEBUG] browserFactory.defaultBrowser:",o,o.model.path);const l=o.model.path;let d=null;if(s?i||(d=n.find((e=>{var t;return(null===(t=e.content.currentTensorBoardModel)||void 0===t?void 0:t.name)===s}))):d=n.find((e=>t.formatDir(e.content.currentLogDir||"")===t.formatDir(l))),d)return e.shell.activateById(d.id),d;{if(!s){const e=[...t.running()];for(const n of e)t.formatDir(n.logdir)===t.formatDir(l)&&(s=n.name)}const a=new A({fileBrowser:o,tensorboardManager:t,app:e,createdModelName:s}),d=new r.MainAreaWidget({content:a});return n.add(d),e.shell.add(d,"main",{mode:i?"split-right":void 0}),e.shell.activateById(d.id),d}}}),i.addCommand(v.openDoc,{execute:e=>{window.open("https://github.com/HFAiLab/jupyterlab_tensorboard_pro")}}),i.addCommand(v.close,{execute:e=>{const t=e.tb;n.forEach((e=>{e.content.currentTensorBoardModel&&e.content.currentTensorBoardModel.name===t.name&&(e.dispose(),e.close())}))}}),i.addCommand(v.inputDirect,{label:()=>"Open TensorBoard",execute:t=>e.commands.execute(v.open)}),i.addCommand(v.createNew,{label:e=>e.isPalette?"New TensorBoard":"TensorBoard",caption:"Start a new tensorboard",icon:e=>e.isPalette?void 0:O,execute:t=>{const n=t.cwd||o.model.path,a=void 0===t.logdir?n:t.logdir;return l.contents.get(a,{type:"directory"}).then((t=>{try{e.shell.activateById("jp-running-sessions")}catch(e){}e.commands.execute(v.open)}),(()=>(0,r.showDialog)({title:"Cannot create tensorboard.",body:"Directory not found",buttons:[r.Dialog.okButton()]})))}}),a&&a.add({command:v.createNew,category:"Other",rank:2}),s&&s.fileMenu.newMenu.addGroup([{command:v.createNew}],30)}},545:(e,t,n)=>{var r;n.d(t,{J:()=>r}),function(e){e[e.STANDARD=16]="STANDARD",e[e.LARGE=20]="LARGE"}(r||(r={}))},1038:(e,t,n)=>{n.d(t,{l:()=>c});var r=n(2082),o=n(5950),a=n.n(o),s=n(6029),i="".concat("bp5","-icon"),l=n(545),d=new Map,c=s.forwardRef((function(e,t){var n=e.children,o=e.className,c=e.color,m=e.htmlTitle,u=e.iconName,h=e.size,g=void 0===h?l.J.STANDARD:h,p=e.svgProps,f=e.tagName,b=void 0===f?"span":f,v=e.title,w=(0,r._T)(e,["children","className","color","htmlTitle","iconName","size","svgProps","tagName","title"]),_=g>=l.J.LARGE?l.J.LARGE:l.J.STANDARD,y="0 0 ".concat(_," ").concat(_),E=function(e){var t,n=null!==(t=d.get(e))&&void 0!==t?t:0;return d.set(e,n+1),"".concat(e,"-").concat(n)}("iconTitle"),N=(0,r.pi)({"data-icon":u,fill:c,height:g,role:"img",viewBox:y,width:g},p);return null===b?s.createElement("svg",(0,r.pi)({"aria-labelledby":v?E:void 0,ref:t},N,w),v&&s.createElement("title",{id:E},v),n):s.createElement(b,(0,r.pi)((0,r.pi)({},w),{"aria-hidden":!v||void 0,className:a()(i,"".concat(i,"-").concat(u),o),ref:t,title:m}),s.createElement("svg",(0,r.pi)({},N),v&&s.createElement("title",null,v),n))}));c.displayName="Blueprint5.SVGIconContainer"},2082:(e,t,n)=>{n.d(t,{Jh:()=>s,_T:()=>o,mG:()=>a,pi:()=>r});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function a(e,t,n,r){return new(n||(n=Promise))((function(o,a){function s(e){try{l(r.next(e))}catch(e){a(e)}}function i(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}l((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}Object.create,Object.create}}]);