/*!
 * Keen UI v0.8.4 (https://github.com/JosephusPaye/keen-ui)
 * (c) 2016 Josephus Paye II
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.UiRippleInk=e():(t.Keen=t.Keen||{},t.Keen.UiRippleInk=e())}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(31)},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var u=e[i];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=l[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(s(r.parts[o],e))}else{for(var u=[],o=0;o<r.parts.length;o++)u.push(s(r.parts[o],e));l[r.id]={id:r.id,refs:1,parts:u}}}}function i(t){for(var e=[],n={},r=0;r<t.length;r++){var i=t[r],o=i[0],u=i[1],a=i[2],s=i[3],c={css:u,media:a,sourceMap:s};n[o]?n[o].parts.push(c):e.push(n[o]={id:o,parts:[c]})}return e}function o(t,e){var n=h(),r=y[y.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function u(t){t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function s(t,e){var n,r,i;if(e.singleton){var o=m++;n=v||(v=a(e)),r=c.bind(null,n,o,!1),i=c.bind(null,n,o,!0)}else n=a(e),r=f.bind(null,n),i=function(){u(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function c(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var o=document.createTextNode(i),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(o,u[e]):t.appendChild(o)}}function f(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},d=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=p(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,m=0,y=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=i(t);return r(n,e),function(t){for(var o=[],u=0;u<n.length;u++){var a=n[u],s=l[a.id];s.refs--,o.push(s)}if(t){var c=i(t);r(c,e)}for(var u=0;u<o.length;u++){var s=o[u];if(0===s.refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete l[s.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";var r=n(25),i=r.Array();t.exports=i},function(t,e){"use strict";function n(t){return u?t instanceof HTMLElement:r(t)}function r(t){return t&&"object"==typeof t&&"string"==typeof t.nodeName&&1===t.nodeType}function i(t){return"[object Array]"===Object.prototype.toString.call(t)}function o(t){return"checked"in t&&"radio"===t.type||"checkbox"===t.type}var u="object"==typeof HTMLElement;t.exports={isElement:n,isArray:i,isCheckable:o}},,function(t,e,n){"use strict";function r(t){return u.apply(this,t)}function i(t){return new r(t)}function o(t){var e=a[t];a[t]=function(){return i(e.apply(this,arguments))}}var u=n(3),a=u.prototype;r.prototype=a,["map","filter","concat","slice"].forEach(o),t.exports=i},function(t,e,n){(function(e){"use strict";function r(t){return t===e?new u(t):t instanceof u?t:t?i.isElement(t)?new u(t):i.isArray(t)?o(t).filter(function(t){return i.isElement(t)}):new u:new u}var i=n(4),o=n(6),u=n(3);t.exports=r}).call(e,function(){return this}())},function(t,e){"use strict";function n(t,e,n){function o(e){return r(t,e)}i[t]={event:e,filter:n,wrap:o}}function r(t,e){if(!e)return e;var n="__dce_"+t;return e[n]?e[n]:(e[n]=function(n){var r=i[t].filter(n);return r?e.apply(this,arguments):void 0},e[n])}var i={};n("left-click","click",function(t){return 1===t.which&&!t.metaKey&&!t.ctrlKey}),t.exports={register:n,wrapper:r,handlers:i}},function(t,e,n){(function(e){"use strict";function r(t){return"string"==typeof t?b.qs(null,t):g.isElement(t)?t:t instanceof h?t[0]:null}function i(t){return function(e,n){var r=e[t];return!r||n&&!b.matches(r,n)?new h:v(r)}}function o(t,e){return e?e instanceof h?-1!==e.indexOf(t):g.isElement(e)?t===e:b.matches(t,e):!0}function u(t,e,n){function r(r){for(var i=r.target;i&&i!==t;){if(b.matches(i,e))return void n.apply(this,arguments);i=i.parentElement}}return E[n._dd]?E[n._dd]:(n._dd=Date.now(),E[n._dd]=r,r)}function a(t,e,n,r,i){null===r?d[t](e,n,i):d[t](e,n,u(e,r,i))}function s(t,e,n,r){function i(){return b.off.apply(b,o),r.apply(this,arguments)}var o=[t,e,n,i];b.on.apply(b,o)}function c(t,e,n){function r(t,r){o?e.forEach(function(e,i){n(t,f(e,r&&0===i))}):n(t,f(e,r))}function i(t,e){r(t,0===e)}var o=e instanceof h,u=t instanceof h;return u?t.forEach(i):o&&r(t,!0),!t||!e||u||o}function f(t,e){return e?t:b.clone(t)}function l(t){var e=t.split(/[A-Z]/)[0];b[t]=function(t,n){b[e](n,t)}}var p=n(27),d=n(19),h=n(3),v=n(7),m=n(6),y=n(24),g=n(4),b=t.exports={},E={};b.qsa=function(t,e){var n=new h;return p(e,r(t),n)},b.qs=function(t,e){return b.qsa(t,e)[0]},b.matches=function(t,e){return g.isElement(t)&&p.matchesSelector(t,e)},b.prev=i("previousElementSibling"),b.next=i("nextElementSibling"),b.parent=i("parentElement"),b.parents=function(t,e){for(var n=[],r=t;r.parentElement;)o(r.parentElement,e)&&n.push(r.parentElement),r=r.parentElement;return m(n)},b.children=function(t,e){var n,r,i=[],u=t.children;for(r=0;u&&r<u.length;r++)n=u[r],o(n,e)&&i.push(n);return m(i)},b.once=s,b.on=a.bind(null,"add"),b.off=a.bind(null,"remove"),b.emit=a.bind(null,"fabricate"),b.html=function(t,e){var n=arguments.length<2;return n?t.innerHTML:void(t.innerHTML=e)},b.text=function(t,e){var n=g.isCheckable(t),r=arguments.length<2;return r?n?t.value:t.innerText||t.textContent:void(n?t.value=e:t.innerText=t.textContent=e)},b.value=function(t,e){var n=g.isCheckable(t),r=arguments.length<2;return r?n?t.checked:t.value:void(n?t.checked=e:t.value=e)},b.attr=function(t,e,n){if(g.isElement(t)){if(null===n||void 0===n)return void t.removeAttribute(e);var r=y.hyphenToCamel(e);r in t?t[r]=n:t.setAttribute(e,n)}},b.getAttr=function(t,e){var n=y.hyphenToCamel(e);return n in t?t[n]:t.getAttribute?t.getAttribute(e):null},b.manyAttr=function(t,e){Object.keys(e).forEach(function(n){b.attr(t,n,e[n])})},b.make=function(t){return new h(document.createElement(t))},b.clone=function(t){return t.cloneNode?t.cloneNode(!0):t},b.remove=function(t){t.parentElement&&t.parentElement.removeChild(t)},b.append=function(t,e){c(t,e,b.append)||t.appendChild&&t.appendChild(e)},b.prepend=function(t,e){c(t,e,b.prepend)||t.insertBefore&&t.insertBefore(e,t.firstChild)},b.before=function(t,e){c(t,e,b.before)||t.parentElement&&t.parentElement.insertBefore(e,t)},b.after=function(t,e){c(t,e,b.after)||t.parentElement&&t.parentElement.insertBefore(e,t.nextSibling)},["appendTo","prependTo","beforeOf","afterOf"].forEach(l);var x={"column-count":!0,"fill-opacity":!0,"flex-grow":!0,"flex-shrink":!0,"font-weight":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,widows:!0,"z-index":!0,zoom:!0},w=/^\d+$/;"float"in document.body.style;b.getCss=function(t,n){if(!g.isElement(t))return null;var r=y.hyphenate(n),i=e.getComputedStyle(t)[r];return"opacity"===n&&""===i?1:"px"===i.substr(-2)||w.test(i)?parseFloat(i,10):i},b.setCss=function(t){function e(e){var n=t[e];return null!==n&&n===n}function n(e){var n=y.hyphenate(e),r=t[e];return"number"!=typeof r||x[n]||(r+="px"),{name:n,value:r}}var r=Object.keys(t).filter(e).map(n);return function(t){g.isElement(t)&&r.forEach(function(e){t.style[e.name]=e.value})}}}).call(e,function(){return this}())},function(t,e,n){"use strict";function r(t,e){var n="string"!=typeof t;if(n&&arguments.length<2)return o(t);if(n)return new a;var u=t.match(s);return u?i.make(u[1]):r.find(t,e)}var i=n(9),o=n(7),u=n(8),a=n(3),s=/^\s*<([a-z]+(?:-[a-z]+)?)\s*\/?>\s*$/i;r.find=function(t,e){return i.qsa(e,t)},r.findOne=function(t,e){return i.qs(e,t)},r.custom=u.register,t.exports=r},function(t,e,n){"use strict";t.exports=n(21)},,,,,,,function(t,e){(function(e){function n(){try{var t=new r("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(e){}return!1}var r=e.CustomEvent;t.exports=n()?r:"function"==typeof document.createEvent?function(t,e){var n=document.createEvent("CustomEvent");return e?n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail):n.initCustomEvent(t,!1,!1,void 0),n}:function(t,e){var n=document.createEventObject();return n.type=t,e?(n.bubbles=Boolean(e.bubbles),n.cancelable=Boolean(e.cancelable),n.detail=e.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(e,function(){return this}())},function(t,e,n){(function(e){"use strict";function r(t,e,n,r){return t.addEventListener(e,n,r)}function i(t,e,n){return t.attachEvent("on"+e,c(t,e,n))}function o(t,e,n,r){return t.removeEventListener(e,n,r)}function u(t,e,n){var r=f(t,e,n);return r?t.detachEvent("on"+e,r):void 0}function a(t,e,n){function r(){var t;return h.createEvent?(t=h.createEvent("Event"),t.initEvent(e,!0,!0)):h.createEventObject&&(t=h.createEventObject()),t}function i(){return new p(e,{detail:n})}var o=-1===d.indexOf(e)?i():r();t.dispatchEvent?t.dispatchEvent(o):t.fireEvent("on"+e,o)}function s(t,n,r){return function(n){var i=n||e.event;i.target=i.target||i.srcElement,i.preventDefault=i.preventDefault||function(){i.returnValue=!1},i.stopPropagation=i.stopPropagation||function(){i.cancelBubble=!0},i.which=i.which||i.keyCode,r.call(t,i)}}function c(t,e,n){var r=f(t,e,n)||s(t,e,n);return y.push({wrapper:r,element:t,type:e,fn:n}),r}function f(t,e,n){var r=l(t,e,n);if(r){var i=y[r].wrapper;return y.splice(r,1),i}}function l(t,e,n){var r,i;for(r=0;r<y.length;r++)if(i=y[r],i.element===t&&i.type===e&&i.fn===n)return r}var p=n(18),d=n(20),h=e.document,v=r,m=o,y=[];e.addEventListener||(v=i,m=u),t.exports={add:v,remove:m,fabricate:a}}).call(e,function(){return this}())},function(t,e){(function(e){"use strict";var n=[],r="",i=/^on/;for(r in e)i.test(r)&&n.push(r.slice(2));t.exports=n}).call(e,function(){return this}())},function(t,e,n){"use strict";function r(t){return function(e){return d.matches(e,t)}}function i(t,e){return function(n){var r=this.map(function(e){return d[t](e,n)}),i=p(r);return e?i[0]:i}}function o(t){return function(){return l.apply(null,arguments).forEach(t,this),this}}function u(t){return function(e,n,r){var i=e.split(" ");return"function"!=typeof r&&(r=n,n=null),this.forEach(function(e){i.forEach(function(i){var o=h.handlers[i];o?d[t](e,o.event,n,o.wrap(r)):d[t](e,i,n,r)})}),this}}function a(t){m.prototype[t[0]]=function(e){return this.forEach(function(n){t[1](n,e)}),this}}function s(t){m.prototype[t]=function(e){return d[t](this,e),this}}function c(t,e){var n=arguments.length<2;return n?this.length?d[t](this[0]):"":(this.forEach(function(n){d[t](n,e)}),this)}function f(t){m.prototype[t]=function(e){var n=arguments.length<1;return n?c.call(this,t):c.call(this,t,e)}}var l=n(10),p=n(23),d=n(9),h=n(8),v=n(22),m=n(3);m.prototype.prev=i("prev"),m.prototype.next=i("next"),m.prototype.parent=i("parent"),m.prototype.parents=i("parents"),m.prototype.children=i("children"),m.prototype.find=i("qsa"),m.prototype.findOne=i("qs",!0),m.prototype.where=function(t){return this.filter(r(t))},m.prototype.is=function(t){return this.some(r(t))},m.prototype.i=function(t){return this[t]?new m(this[t]):new m},m.prototype.and=o(function(t){return-1===this.indexOf(t)&&this.push(t),this}),m.prototype.but=o(function(t){var e=this.indexOf(t);return-1!==e&&this.splice(e,1),this}),m.prototype.css=function(t,e){var n,r=t&&"object"==typeof t,i=!r&&!e;return i?this.length?d.getCss(this[0],t):null:(r?n=t:(n={},n[t]=e),this.forEach(d.setCss(n)),this)},m.prototype.once=u("once"),m.prototype.on=u("on"),m.prototype.off=u("off"),m.prototype.emit=u("emit"),[["addClass",v.add],["removeClass",v.remove],["setClass",v.set],["removeClass",v.remove],["remove",d.remove]].forEach(a),["append","appendTo","prepend","prependTo","before","beforeOf","after","afterOf"].forEach(s),m.prototype.hasClass=function(t){return this.some(function(e){return v.contains(e,t)})},m.prototype.attr=function(t,e){function n(e){d.manyAttr(e,t)}function r(n){d.attr(n,t,e)}var i=t&&"object"==typeof t,o=i?n:r,u=i||arguments.length>1;return u?(this.forEach(o),this):this.length?d.getAttr(this[0],t):null},["html","text","value"].forEach(f),m.prototype.clone=function(){return this.map(function(t){return d.clone(t)})},m.prototype.focus=function(){return this.length&&this[0].focus(),this},t.exports=n(10)},function(t,e,n){"use strict";function r(t){return"string"==typeof t?t.replace(c,"").split(f):t}function i(t){return l.isElement(t)?t.className.replace(c,"").split(f):[]}function o(t,e){l.isElement(t)&&(t.className=r(e).join(" "))}function u(t,e){var n=a(t,e),i=r(e);return n.push.apply(n,i),o(t,n),n}function a(t,e){var n=i(t),u=r(e);return u.forEach(function(t){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}),o(t,n),n}function s(t,e){var n=i(t),o=r(e);return o.every(function(t){return-1!==n.indexOf(t)})}var c=/^\s+|\s+$/g,f=/\s+/g,l=n(4);t.exports={add:u,remove:a,contains:s,set:o,get:i}},function(t,e,n){"use strict";function r(t,e){return t.reduce(function(t,e){return i.isArray(e)?r(e,t):-1===t.indexOf(e)?t.concat(e):t},e||new i)}var i=n(3);t.exports=r},function(t,e){"use strict";function n(t){var e=/-([a-z])/g;return t.replace(e,function(t,e){return e.toUpperCase()})}function r(t){var e=/([a-z])([A-Z])/g;return t.replace(e,"$1-$2").toLowerCase()}t.exports={hyphenToCamel:n,hyphenate:r}},function(t,e,n){function r(t){i[t]=function(){return i(t)}}var i=n(26);t.exports=i,["Array","Function","Object","Date","String"].forEach(r)},function(t,e){(function(e){"use strict";function n(t){var e=i.createElement("iframe");return e.style.display="none",i.body.appendChild(e),r(t,e.contentWindow)}function r(t,e){var n,r=window[t].prototype,i=e[t];for(n in r)i.prototype[n]=r[n];return i}var i=e.document;t.exports=n}).call(e,function(){return this}())},function(t,e){(function(e){"use strict";function n(t,e){var n,r,i,o,u,f=e!==c;f&&(n=e.getAttribute("id"),r=n||a,i="#"+r+" ",o=i+t.replace(/,/g,","+i),u=s.test(t)&&e.parentNode,n||e.setAttribute("id",r));try{return(u||e).querySelectorAll(o||t)}catch(l){return[]}finally{null===n&&e.removeAttribute("id")}}function r(t,e,r,i){var u,a=e||c,s=r||[],f=0;if("string"!=typeof t)return s;if(1!==a.nodeType&&9!==a.nodeType)return[];if(i)for(;u=i[f++];)o(u,t)&&s.push(u);else s.push.apply(s,n(t,a));return s}function i(t,e){return r(t,null,null,e)}function o(t,e){return l.call(t,e)}function u(){return!1}var a="sektor-"+Date.now(),s=/[+~]/,c=e.document,f=c.documentElement||{},l=f.matches||f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector||u;t.exports=r,r.matches=i,r.matchesSelector=o}).call(e,function(){return this}())},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),o=r(i),u=function(t,e){var n=e.currentTarget;if((0,o["default"])(n).hasClass("ui-ripple-ink")||(n=(0,o["default"])(n).findOne(".ui-ripple-ink"))){var r=n.getAttribute("data-ui-event");if(!r||r===t){n.setAttribute("data-ui-event",t);var i,u=n.getBoundingClientRect(),a=e.offsetX;void 0!==a?i=e.offsetY:(a=e.clientX-u.left,i=e.clientY-u.top);var s,c=document.createElement("div");s=u.width===u.height?1.412*u.width:Math.sqrt(u.width*u.width+u.height*u.height);var f=2*s+"px";c.style.width=f,c.style.height=f,c.style.marginLeft=-s+a+"px",c.style.marginTop=-s+i+"px",c.className="ripple",n.appendChild(c),setTimeout(function(){(0,o["default"])(c).addClass("held")},0);var l="mousedown"===t?"mouseup":"touchend",p=function d(){document.removeEventListener(l,d),(0,o["default"])(c).addClass("done"),setTimeout(function(){n.removeChild(c),n.children.length||(0,o["default"])(n).removeClass("active").attr("data-ui-event",null)},450)};document.addEventListener(l,p)}}},a=function(t){0===t.button&&u(t.type,t)},s=function(t){if(t.changedTouches)for(var e=0;e<t.changedTouches.length;++e)u(t.type,t.changedTouches[e])};e["default"]={name:"ui-ripple-ink",props:{trigger:{type:Element,required:!0}},watch:{trigger:function(){this.initialize()}},ready:function(){this.initialize()},beforeDestory:function(){this.trigger&&(this.trigger.removeEventListener("mousedown",a),this.trigger.removeEventListener("touchstart",s))},methods:{initialize:function(){this.trigger&&(this.trigger.addEventListener("touchstart",s),this.trigger.addEventListener("mousedown",a))}}}},function(t,e,n){e=t.exports=n(1)(),e.push([t.id,".ui-ripple-ink{display:block;overflow:hidden;border-radius:inherit;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.ui-ripple-ink .ripple{position:absolute;width:0;height:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:50%;background-color:currentColor;background-clip:padding-box;opacity:.2;-webkit-transform:scale(0);transform:scale(0);transition:opacity .4s ease-out,-webkit-transform .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out,-webkit-transform .4s ease-out}.ui-ripple-ink .ripple.held{opacity:.4;-webkit-transform:scale(1);transform:scale(1)}.ui-ripple-ink .ripple.done{opacity:0!important}",""])},function(t,e){t.exports="<div class=ui-ripple-ink></div>"},function(t,e,n){var r,i;n(32),r=n(28),i=n(30),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,n){var r=n(29);"string"==typeof r&&(r=[[t.id,r,""]]);n(2)(r,{});r.locals&&(t.exports=r.locals)}])});