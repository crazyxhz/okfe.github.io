(window.webpackJsonp=window.webpackJsonp||[]).push([[5,10,11,13,19,20,26,28,29,30],{1188:function(e,t){function n(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function c(e){n(i,o,a,c,l,"next",e)}function l(e){n(i,o,a,c,l,"throw",e)}c(void 0)}))}}},1191:function(e,t,n){e.exports=n(1192)},1192:function(e,t,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(1193),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},1193:function(e,t){!function(t){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag",s="object"==typeof e,u=t.regeneratorRuntime;if(u)s&&(e.exports=u);else{(u=t.regeneratorRuntime=s?e.exports:{}).wrap=x;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",m={},v={};v[i]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(R([])));y&&y!==r&&o.call(y,i)&&(v=y);var w=C.prototype=E.prototype=Object.create(v);b.prototype=w.constructor=C,C.constructor=b,C[l]=b.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,C):(e.__proto__=C,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(w),e},u.awrap=function(e){return{__await:e}},N(L.prototype),L.prototype[c]=function(){return this},u.AsyncIterator=L,u.async=function(e,t,n,r){var o=new L(x(e,t,n,r));return u.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},N(w),w[l]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=R,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(T),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return c.type="throw",c.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:R(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),m}}}function x(e,t,n,r){var o=t&&t.prototype instanceof E?t:E,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(e,t,n){var r=f;return function(o,a){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return _()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=S(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var l=k(e,t,n);if("normal"===l.type){if(r=n.done?h:d,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=h,n.method="throw",n.arg=l.arg)}}}(e,n,i),a}function k(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function E(){}function b(){}function C(){}function N(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function L(e){var t;this._invoke=function(n,r){function a(){return new Promise((function(t,a){!function t(n,r,a,i){var c=k(e[n],e,r);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(e){t("next",e,a,i)}),(function(e){t("throw",e,a,i)})):Promise.resolve(s).then((function(e){l.value=e,a(l)}),i)}i(c.arg)}(n,r,t,a)}))}return t=t?t.then(a,a):a()}}function S(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,S(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=k(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,m;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,m):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function R(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},159:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(10),i=function(e){return!!/本周问题\/故障|本周问题|问题|故障|Online issue/.test(e)};t.default=function(e){var t=e.level,n=e.children,r=(n.length?n[0].props:{}).value,c=void 0===r?"":r,l=function(e){var t=/[:：]$/g,n=a.default.get("isEnglish");return t.test(e)?e.replace(t,n?":":"："):e.replace(/$/,n?":":"：")}(c),s=a.default.get("isEnglish");return 1===t?o.a.createElement("div",{className:i(c)?"template-alarm-title-level-1":"template-title-level-1"},l):2===t?o.a.createElement("div",{className:"template-title-level-2"},l):o.a.createElement("h3",null,n[0],s?":":"：")}},160:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(10);t.default=function(e){var t=e.children;return o.a.createElement("div",null,t.map((function(e,t,n){var r=(e.props.children.length>0?e.props.children[0].props:{}).value,i=function(e,t,n){var r=a.default.get("isEnglish"),o=e.replace(/^/,"".concat(t).concat(r?". ":"、")),i=/[;；.。]*$/,c=r?".":"；",l=r?".":"。";return e?o=i.test(e)?o.replace(i,t<n?c:l):o.replace(/$/,t<n?c:l):o}(void 0===r?"":r,t+1,n.length);return o.a.createElement(o.a.Fragment,{key:"".concat(e.key,"-frgm")},o.a.createElement("div",{key:e.key},i),t===n.length-1?o.a.createElement("br",null):null)})))}},265:function(e,t,n){var r=n(282);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(29)(r,o);r.locals&&(e.exports=r.locals)},267:function(e,t,n){var r=n(284);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(29)(r,o);r.locals&&(e.exports=r.locals)},268:function(e,t,n){var r=n(286);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(29)(r,o);r.locals&&(e.exports=r.locals)},272:function(e,t,n){var r=n(325);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(29)(r,o);r.locals&&(e.exports=r.locals)},282:function(e,t,n){(e.exports=n(28)(!1)).push([e.i,".react-markdown {\n  padding: 20px;\n  background-color: #FFF;\n  color: #000;\n  border: none;\n  overflow-y: scroll;\n  box-sizing: border-box;\n  height: 100%;\n}\n.react-markdown .template-title-level-1 {\n  font-size: 18px;\n  font-weight: bold;\n  color: #0070C0;\n}\n.react-markdown .template-title-level-2 {\n  font-size: 14px;\n  font-weight: bold;\n}\n.react-markdown .template-alarm-title-level-1 {\n  font-size: 18px !important;\n  font-weight: bold !important;\n  color: #FF0000 !important;\n}\n.react-markdown div {\n  line-height: 1.75;\n}\n.react-markdown h1,\n.react-markdown h2,\n.react-markdown ul,\n.react-markdown li {\n  margin: 0;\n  padding: 0;\n}\n.react-markdown h1 {\n  font-size: 18px;\n  color: #0070C0;\n  font-weight: bold;\n  white-space: pre-wrap;\n}\n.react-markdown h2 {\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n}\n.react-markdown ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.react-markdown code,\n.react-markdown li code {\n  background-color: #DCDCDC;\n  padding: 4px;\n}\n.react-markdown pre {\n  background: #1E1E1E;\n  padding: 10px;\n}\n.react-markdown pre code {\n  background-color: transparent;\n  color: #DCDCDC;\n}\n",""])},284:function(e,t,n){(e.exports=n(28)(!1)).push([e.i,".markdown-editor-wrap {\n  flex: 1;\n  max-width: 50%;\n}\n.markdown-editor-wrap .react-codemirror2 {\n  height: 100%;\n}\n.markdown-editor-wrap .react-codemirror2 .CodeMirror.cm-s-material {\n  height: 100%;\n}\n",""])},286:function(e,t,n){(e.exports=n(28)(!1)).push([e.i,".copy-weekly-preview {\n  position: relative;\n  flex: 1;\n}\n.copy-weekly-preview .copy-wrap {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #0070C0;\n}\n",""])},325:function(e,t,n){(e.exports=n(28)(!1)).push([e.i,".highlight-title {\n  background-color: cornflowerblue;\n}\n.markdown-weekly-wrap {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.markdown-weekly-wrap .tool-bar {\n  margin-bottom: 10px;\n}\n.markdown-weekly-wrap .tool-bar .tool-item:not(:first-child) {\n  margin-left: 10px;\n}\n.markdown-weekly-wrap .divider {\n  width: 10px;\n  background: #AAA;\n  cursor: pointer;\n}\n.markdown-weekly-wrap .weekly-flex-wrap {\n  flex: 1;\n  height: 100%;\n}\n",""])},54:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(293),i=n.n(a),c=n(159),l=n(160);n(265);t.default=function(e){var t=e.source,n=e.className,r=void 0===n?"":n;return o.a.createElement("div",{className:"react-markdown ".concat(r)},o.a.createElement(i.a,{source:t,renderers:{heading:c.default,list:l.default}}))}},56:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n(0),o=n.n(r),a=n(299);n(267);function i(e){var t=e.value,n=e.onBeforeChange,r=e.className,i=void 0===r?"":r;return o.a.createElement("div",{className:"markdown-editor-wrap ".concat(i)},o.a.createElement(a.Controlled,{value:t,options:{theme:"material",lineNumbers:!0},onBeforeChange:n}))}n(300),n(301),n(302),n(303),n(304)},57:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));n(126);var r=n(9),o=n(17),a=n.n(o),i=n(21),c=n.n(i),l=n(51),s=n.n(l),u=n(52),f=n.n(u),d=n(53),p=n.n(d),h=n(0),m=n.n(h),v=n(54),g=n(37),y=(n(268),function(e){function t(e){var n;return a()(this,t),(n=s()(this,f()(t).call(this,e))).copyRef=m.a.createRef(),n}return p()(t,e),c()(t,[{key:"copyText",value:function(){var e=document.querySelector(".weekly-preview-text"),t=document.createRange();t.selectNode(e);var n=window.getSelection();n.rangeCount>0&&n.removeAllRanges(),n.addRange(t),document.execCommand("copy"),Object(g.globalMessage)("success","复制成功！")}},{key:"render",value:function(){var e=this.props,t=e.source,n=e.className,o=void 0===n?"":n,a=e.copyTips,i=void 0===a?null:a,c=e.style,l=void 0===c?{}:c;return(m.a.createElement("div",{className:"copy-weekly-preview ".concat(o),style:l,ref:this.copyRef,onClick:this.copyText},null===i?m.a.createElement("div",{className:"copy-wrap"},"点击空白处复制 ",m.a.createElement(r.a,{type:"copy"})):i,m.a.createElement(v.default,{className:"weekly-preview-text",source:t})))}}]),t}(m.a.PureComponent))},61:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return B}));n(344);var r,o,a=n(352),i=(n(161),n(84)),c=(n(165),n(136)),l=n(120),s=n.n(l),u=(n(345),n(353)),f=n(1188),d=n.n(f),p=(n(346),n(354)),h=(n(291),n(290)),m=(n(158),n(98)),v=n(17),g=n.n(v),y=n(21),w=n.n(y),x=n(51),k=n.n(x),E=n(52),b=n.n(E),C=n(53),N=n.n(C),L=n(1191),S=n.n(L),O=n(0),T=n.n(O),j=n(31),R=n(127),_=n(57),F=n(56),I=n(26),P=(n(272),n(347)),G=n(278),V=n(10),A=I.default.MarkdownTypeEnum,B=(A.common,A.tl,A.demo,r=Object(R.b)("markdownStore"),Object(j.f)(o=r(o=Object(R.c)(o=function(e){function t(){var e,n;g()(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=k()(this,(e=b()(t)).call.apply(e,[this].concat(o)))).state={openEdit:!1,currentType:V.default.get("currentType")||"mdText",editValue:JSON.parse(localStorage.getItem("user")||"[]").join("\n"),previewVisible:!0,currentUser:0,users:JSON.parse(localStorage.getItem("user")||"[]"),usersClicked:JSON.parse(localStorage.getItem("user")||"[]").map((function(){return!1}))},n}return N()(t,e),w()(t,[{key:"render",value:function(){var e=this,t=this.state.previewVisible,n=this.props.markdownStore,r=n.markdownType,o=n[r];return T.a.createElement("div",{className:"markdown-weekly-wrap"},T.a.createElement("div",{className:"flex tool-bar"},T.a.createElement(h.a,{title:"当前操作将清除所有已写内容，确认继续？",onConfirm:n.clearWeekly,okText:"确认",cancelText:"取消"},T.a.createElement(m.a,{className:"tool-item clear-btn",type:"danger"},"初始化")),T.a.createElement(p.a,{defaultChecked:V.default.get("isEnglish"),style:{alignItems:"center",display:"flex",marginLeft:20},onChange:function(e){V.default.set("isEnglish",e.target.checked)}},"English Mode"),T.a.createElement(u.a.Group,{style:{marginLeft:20},value:this.state.currentUser,onChange:function(){var t=d()(S.a.mark((function t(r){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.clipboard.readText();case 2:a=t.sent,n.updateMdText(o+"\n".concat(M(r.target.value,a))),e.setState({currentUser:r.target.value});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T.a.createElement(u.a.Button,{value:0},"无"),this.state.users.map((function(t,n){return T.a.createElement(u.a.Button,{key:t,value:t,onClick:function(){e.state.usersClicked[n]=!e.state.usersClicked[n],e.setState({usersClicked:s()(e.state.usersClicked)})},style:{background:e.state.usersClicked[n]?"rgb(24, 144, 255)":"white"}},t)})))," ",T.a.createElement(m.a,{className:"tool-item clear-btn",type:"link",onClick:function(){e.setState({openEdit:!0})}},T.a.createElement(G.a,{type:P.a}),"编辑"),T.a.createElement(a.a,{title:"Basic Modal",visible:this.state.openEdit,onOk:function(){try{var t=e.state.editValue.split("\n").filter(Boolean);localStorage.setItem("user",JSON.stringify(t)),e.setState({openEdit:!1,users:t})}catch(e){console.log(e),c.a.error("错误的格式")}},onCancel:function(){return e.setState({openEdit:!1})}},T.a.createElement(i.a.TextArea,{placeholder:"输入组员姓名，每人一行",rows:4,value:this.state.editValue,onChange:function(t){e.setState({editValue:t.target.value})}}))),T.a.createElement("div",{className:"flex weekly-flex-wrap"},T.a.createElement(F.default,{className:"markdown-editor",value:o,onBeforeChange:function(t,r,o){console.log(r),"paste"===r.origin&&r.update(null,null,function(e,t){console.log(t),0!==e.from.ch||e.text[0].startsWith("#")||e.text[0].match(/^\d/)||e.text[0].startsWith("- ")||(e.text[0]="## ".concat(e.text[0]));return e.text.forEach((function(n,r){var o=!1;["，","。","；"].includes(e.text[r][e.text[r].length-1])&&(o=!0),n.match(/^\d\d?(、|. )/)&&(e.text[r]="".concat(o?n.replace(/^\d\d?(、|. )/,"- ").slice(0,-1):n.replace(/^\d\d?(、|. )/,"- ")).concat(t?" @".concat(t):"")),!e.text[r].includes(t)&&t&&e.text[r].length>3&&!e.text[r].startsWith("## ")&&(e.text[r]="".concat(o?e.text[r].slice(0,-1):e.text[r]).concat(t?" @".concat(t):""))})),e.text}(r,e.state.currentUser)),setTimeout((function(){n.updateMdText(t.getValue()),"paste"===r.origin&&t.setCursor({line:r.from.line+r.text.length-1,ch:11111})}),10),n.updateMdText(o)}}),T.a.createElement("div",{className:"divider",role:"button",title:t?"点击折叠预览面板":"点击展开预览面板",onClick:function(){e.setState((function(e){return{previewVisible:!e.previewVisible}}))}}),T.a.createElement(_.default,{className:"markdown-preview",source:o,style:{display:t?"block":"none"}})))}}]),t}(T.a.Component))||o)||o)||o);function M(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"").split("\n").filter(Boolean).map((function(t){return"- ".concat(t.replace(/^(\d、|\d\.|\d)/,"")," @").concat(e)})).join("\n")}}}]);