/*! Built with http://stenciljs.com */
DocsSite.loadBundle("chunk-bb73ff96.js",["exports"],function(e){var n=window.DocsSite.h,t="/",r="./",i=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function o(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function a(e){return e.replace(/([=!:$/()])/g,"\\$1")}function u(e){return e&&e.sensitive?"":"i"}function c(e,n,s){return e instanceof RegExp?function(e,n){if(!n)return e;var t=e.source.match(/\((?!\?)/g);if(t)for(var r=0;r<t.length;r++)n.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,n):Array.isArray(e)?function(e,n,t){for(var r=[],i=0;i<e.length;i++)r.push(c(e[i],n,t).source);return new RegExp("(?:"+r.join("|")+")",u(t))}(e,n,s):function(e,n,c){return function(e,n,i){for(var a=(i=i||{}).strict,c=!1!==i.end,s=o(i.delimiter||t),f=i.delimiters||r,d=[].concat(i.endsWith||[]).map(o).concat("$").join("|"),l="",p=!1,v=0;v<e.length;v++){var h=e[v];if("string"==typeof h)l+=o(h),p=v===e.length-1&&f.indexOf(h[h.length-1])>-1;else{var m=o(h.prefix),g=h.repeat?"(?:"+h.pattern+")(?:"+m+"(?:"+h.pattern+"))*":h.pattern;n&&n.push(h),h.optional?h.partial?l+=m+"("+g+")?":l+="(?:"+m+"("+g+"))?":l+=m+"("+g+")"}}return c?(a||(l+="(?:"+s+")?"),l+="$"===d?"$":"(?="+d+")"):(a||(l+="(?:"+s+"(?="+d+"))?"),p||(l+="(?="+s+"|"+d+")")),new RegExp("^"+l,u(i))}(function(e,n){for(var u,c=[],s=0,f=0,d="",l=n&&n.delimiter||t,p=n&&n.delimiters||r,v=!1;null!==(u=i.exec(e));){var h=u[0],m=u[1],g=u.index;if(d+=e.slice(f,g),f=g+h.length,m)d+=m[1],v=!0;else{var w="",y=e[f],x=u[2],O=u[3],E=u[4],b=u[5];if(!v&&d.length){var A=d.length-1;p.indexOf(d[A])>-1&&(w=d[A],d=d.slice(0,A))}d&&(c.push(d),d="",v=!1);var j=""!==w&&void 0!==y&&y!==w,R="+"===b||"*"===b,S="?"===b||"*"===b,P=w||l,_=O||E;c.push({name:x||s++,prefix:w,delimiter:P,optional:S,repeat:R,partial:j,pattern:_?a(_):"[^"+o(P)+"]+?"})}}return(d||f<e.length)&&c.push(d+e.substr(f)),c}(e,c),n,c)}(e,n,s)}var s={},f=0,d=function(e,t){void 0===t&&(t=function(e,t){return n("context-consumer",{subscribe:e,renderer:t})});var r=new Map,i={location:null,titleSuffix:"",root:"/",history:null};function o(e,n){Array.isArray(e)?e.slice().forEach(function(e){n[e]=i[e]}):n[e]=Object.assign({},i),n.forceUpdate()}function a(e){return function(n){r.has(n)||(r.set(n,e),o(e,n))}}function u(e,n){return a(n)(e),function(){r.delete(e)}}return{Provider:function(e){var n=e.state,t=e.children;return i=n,r.forEach(o),t},Consumer:function(e){var n=e.children;return t(u,n[0])},wrapConsumer:function(e,t){var r=e.is;return function(e){var i=e.children,o=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&(t[r[i]]=e[r[i]])}return t}(e,["children"]);return n(r,Object.assign({ref:a(t)},o),i)}},injectProps:function(e,n){var t=null,r=Object.keys(e.properties).find(function(n){return 1==e.properties[n].elementRef});if(void 0==r)throw new Error("Please ensure that your Component "+e.is+' has an attribtue with "@Element" decorator. This is required to be able to inject properties.');var i=e.prototype.componentWillLoad;e.prototype.componentWillLoad=function(){if(t=u(this[r],n),i)return i.bind(this)()};var o=e.prototype.componentDidUnload;e.prototype.componentDidUnload=function(){if(t(),o)return o.bind(this)()}}}}(),l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.matchPath=function(e,n){void 0===n&&(n={}),"string"==typeof n&&(n={path:n});var t=n.path,r=void 0===t?"/":t,i=n.exact,o=void 0!==i&&i,a=n.strict,u=function(e,n){var t=""+n.end+n.strict,r=s[t]||(s[t]={}),i=JSON.stringify(e);if(r[i])return r[i];var o=[],a={re:c(e,o,n),keys:o};return f<1e4&&(r[i]=a,f+=1),a}(r,{end:o,strict:void 0!==a&&a}),d=u.re,l=u.keys,p=d.exec(e);if(!p)return null;var v=p[0],h=p.slice(1),m=e===v;return o&&!m?null:{path:r,url:"/"===r&&""===v?"/":v,isExact:m,params:l.reduce(function(e,n,t){return e[n.name]=h[t],e},{})}},e.ActiveRouter=d,e.storageAvailable=function(e){try{var n=window[e],t="__storage_test__";return n.setItem(t,t),n.removeItem(t),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==n.length}},e.canUseDOM=l,e.addEventListener=function(e,n,t){return e.addEventListener?e.addEventListener(n,t,!1):e.attachEvent("on"+n,t)},e.removeEventListener=function(e,n,t){return e.removeEventListener?e.removeEventListener(n,t,!1):e.detachEvent("on"+n,t)},e.getConfirmation=function(e,n){return n(window.confirm(e))},e.supportsHistory=function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history},e.supportsPopStateOnHashChange=function(){return-1===window.navigator.userAgent.indexOf("Trident")},e.isExtraneousPopstateEvent=function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")},e.supportsGoWithoutReloadUsingHash=function(){return-1===window.navigator.userAgent.indexOf("Firefox")},e.isModifiedEvent=function(e){return e.metaKey||e.altKey||e.ctrlKey||e.shiftKey}});