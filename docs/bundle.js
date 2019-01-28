var SvelteCalendar=function(){"use strict";function t(t,e){var n=arguments;if(null==t)throw new TypeError("Cannot convert first argument to object");for(var r=Object(t),o=1;o<arguments.length;o++){var i=n[o];if(null!=i)for(var s=Object.keys(Object(i)),a=0,c=s.length;a<c;a++){var h=s[a],l=Object.getOwnPropertyDescriptor(i,h);void 0!==l&&l.enumerable&&(r[h]=i[h])}}return r}var e=function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:t})};function n(){}function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){for(var n in e)t[n]=1;return t}function i(t,e){return 0===e&&t(),function(){--e||t()}}function s(t){t()}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n)}function h(t){t.parentNode.removeChild(t)}function l(t,e){for(;t.firstChild;)e.appendChild(t.firstChild)}function d(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(){return document.createDocumentFragment()}function f(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(t,e,n,r){t.addEventListener(e,n,r)}function v(t,e,n,r){t.removeEventListener(e,n,r)}function p(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){t.data=""+e}function b(t,e,n){t.style.setProperty(e,n)}function _(t,e,n){t.classList[n?"add":"remove"](e)}function M(){return Object.create(null)}function k(t){t._lock=!0,w(t._beforecreate),w(t._oncreate),w(t._aftercreate),t._lock=!1}function D(t,e){t._handlers=M(),t._slots=M(),t._bind=e._bind,t._staged={},t.options=e,t.root=e.root||t,t.store=e.store||t.root.store,e.root||(t._beforecreate=[],t._oncreate=[],t._aftercreate=[])}function w(t){for(;t&&t.length;)t.shift()()}var O={destroy:function(t){this.destroy=n,this.fire("destroy"),this.set=n,this._fragment.d(!1!==t),this._fragment=null,this._state={}},get:function(){return this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var r=0;r<n.length;r+=1){var o=n[r];if(!o.__calling)try{o.__calling=!0,o.call(this,e)}finally{o.__calling=!1}}},on:function(t,e){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){this._set(r({},t)),this.root._lock||k(this.root)},_recompute:n,_set:function(t){var e=this._state,n={},o=!1;for(var i in t=r(this._staged,t),this._staged={},t)this._differs(t[i],e[i])&&(n[i]=o=!0);o&&(this._state=r(r({},e),t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(this.fire("state",{changed:n,current:this._state,previous:e}),this._fragment.p(n,this._state),this.fire("update",{changed:n,current:this._state,previous:e})))},_stage:function(t){r(this._staged,t)},_mount:function(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)},_differs:function(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}},S=[{name:"January",abbrev:"Jan"},{name:"February",abbrev:"Feb"},{name:"March",abbrev:"Mar"},{name:"April",abbrev:"Apr"},{name:"May",abbrev:"May"},{name:"June",abbrev:"Jun"},{name:"July",abbrev:"Jul"},{name:"August",abbrev:"Aug"},{name:"September",abbrev:"Sep"},{name:"October",abbrev:"Oct"},{name:"November",abbrev:"Nov"},{name:"December",abbrev:"Dec"}],C=[{name:"Sunday",abbrev:"Sun"},{name:"Monday",abbrev:"Mon"},{name:"Tuesday",abbrev:"Tue"},{name:"Wednesday",abbrev:"Wed"},{name:"Thursday",abbrev:"Thu"},{name:"Friday",abbrev:"Fri"},{name:"Saturday",abbrev:"Sat"}],N=function(t,e,n){var r=new Date(e,t,1);r.setDate(r.getDate()-r.getDay());for(var o=11==t?0:t+1,i=[];r.getMonth()!=o||0!=r.getDay()||6!=i.length;)0==r.getDay()&&i.unshift({days:[]}),i[0].days.push(Object.assign({},{partOfMonth:r.getMonth()==t,date:new Date(r)},n(r))),r.setDate(r.getDate()+1);return i.reverse(),{month:t,year:e,weeks:i}},x=function(t,e,n){var r=new Date;return r.setHours(0,0,0,0),function(o){return{selectable:o>=t&&o<=e&&(!n||n(o)),isToday:o.getTime()==r.getTime()}}};var T=function(t,e,n){return t.replace(new RegExp("#{"+e+"}","g"),n)},Y=function(t,e,n){if(t=t.toString(),void 0===e)return t;if(t.length==e)return t;if(n=void 0!==n&&n,t.length<e)for(;e-t.length>0;)t="0"+t;else t.length>e&&(t=n?t.substring(t.length-e):t.substring(0,e));return t},z={daysOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthsOfYear:["January","February","March","April","May","June","July","August","September","October","November","December"]},I=[{key:"d",method:function(t){return Y(t.getDate(),2)}},{key:"D",method:function(t){return Y(z.daysOfWeek[t.getDay()],3)}},{key:"j",method:function(t){return t.getDate()}},{key:"l",method:function(t){return z.daysOfWeek[t.getDay()]}},{key:"F",method:function(t){return z.monthsOfYear[t.getMonth()]}},{key:"m",method:function(t){return Y(t.getMonth()+1,2)}},{key:"M",method:function(t){return Y(z.monthsOfYear[t.getMonth()],3)}},{key:"n",method:function(t){return t.getMonth()+1}},{key:"Y",method:function(t){return t.getFullYear()}},{key:"y",method:function(t){return Y(t.getFullYear(),2,!0)}}],j=[{key:"a",method:function(t){return t.getHours()>11?"pm":"am"}},{key:"A",method:function(t){return t.getHours()>11?"PM":"AM"}},{key:"g",method:function(t){return t.getHours()%12||12}},{key:"G",method:function(t){return t.getHours()}},{key:"h",method:function(t){return Y(t.getHours()%12||12,2)}},{key:"H",method:function(t){return Y(t.getHours(),2)}},{key:"i",method:function(t){return Y(t.getMinutes(),2)}},{key:"s",method:function(t){return Y(t.getSeconds(),2)}}],F=function(t,e){return void 0===e&&(e="#{m}/#{d}/#{Y}"),I.forEach(function(n){-1!=e.indexOf("#{"+n.key+"}")&&(e=T(e,n.key,n.method(t)))}),j.forEach(function(n){-1!=e.indexOf("#{"+n.key+"}")&&(e=T(e,n.key,n.method(t)))}),e},H={left:37,up:38,right:39,down:40,pgup:33,pgdown:34,enter:13,escape:27,tab:9},E=Object.keys(H).map(function(t){return H[t]});function L(t,e){return t.getDate()==e.getDate()&&t.getMonth()==e.getMonth()&&t.getFullYear()==e.getFullYear()}function A(t){var e=this._svelte,n=e.component,r=e.ctx;n.fire("dateSelected",r.day.date)}function W(t,e,n){var r=Object.create(t);return r.day=e[n],r}function V(t,e){var n,r,o,i,s,l=e.day.date.getDate();return{c:function(){n=f("div"),r=f("button"),o=m(l),s=m("\r\n    "),r._svelte={component:t,ctx:e},g(r,"click",A),r.className="day--label svelte-2l8tkz",r.disabled=i=!e.day.selectable,_(r,"selected",L(e.day.date,e.selected)),n.className="day svelte-2l8tkz",_(n,"outside-month",!e.day.partOfMonth),_(n,"is-today",e.day.isToday),_(n,"is-disabled",!e.day.selectable)},m:function(t,e){c(t,n,e),a(n,r),a(r,o),a(n,s)},p:function(t,s){e=s,t.days&&l!==(l=e.day.date.getDate())&&y(o,l),r._svelte.ctx=e,t.days&&i!==(i=!e.day.selectable)&&(r.disabled=i),(t.days||t.selected)&&_(r,"selected",L(e.day.date,e.selected)),t.days&&(_(n,"outside-month",!e.day.partOfMonth),_(n,"is-today",e.day.isToday),_(n,"is-disabled",!e.day.selectable))},d:function(t){t&&h(n),v(r,"click",A)}}}function J(t){D(this,t),this._state=r({},t.data),this._intro=!!t.intro,this._fragment=function(t,e){for(var n,r,o=e.days,i=[],a=0;a<o.length;a+=1)i[a]=V(t,W(e,o,a));return{c:function(){n=f("div");for(var t=0;t<i.length;t+=1)i[t].c();n.className="week svelte-2l8tkz"},m:function(t,e){c(t,n,e);for(var o=0;o<i.length;o+=1)i[o].m(n,null);r=!0},p:function(e,r){if(e.days||e.selected){o=r.days;for(var s=0;s<o.length;s+=1){var a=W(r,o,s);i[s]?i[s].p(e,a):(i[s]=V(t,a),i[s].c(),i[s].m(n,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=o.length}},i:function(t,e){r||this.m(t,e)},o:s,d:function(t){t&&h(n),d(i,t)}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor)),this._intro=!0}function P(t,e,n){var r=Object.create(t);return r.week=e[n],r}function X(t,e){var n,r={days:e.week.days,selected:e.selected,start:e.start,end:e.end},o=new J({root:t.root,store:t.store,data:r});return o.on("dateSelected",function(e){t.fire("dateSelected",e)}),{c:function(){o._fragment.c()},m:function(t,e){o._mount(t,e),n=!0},p:function(t,e){var n={};t.visibleMonth&&(n.days=e.week.days),t.selected&&(n.selected=e.selected),t.start&&(n.start=e.start),t.end&&(n.end=e.end),o._set(n)},i:function(t,e){n||this.m(t,e)},o:function(t){n&&(o&&o._fragment.o(t),n=!1)},d:function(t){o.destroy(t)}}}function q(t){D(this,t),this._state=r({monthDict:S},t.data),this._intro=!!t.intro,this._fragment=function(t,e){for(var n,r,o=e.visibleMonth.weeks,s=[],a=0;a<o.length;a+=1)s[a]=X(t,P(e,o,a));function l(t,e,n){s[t]&&s[t].o(function(){e&&(s[t].d(e),s[t]=null),n&&n()})}return{c:function(){n=f("div");for(var t=0;t<s.length;t+=1)s[t].c();n.className="month-container svelte-m2exrs"},m:function(t,e){c(t,n,e);for(var o=0;o<s.length;o+=1)s[o].i(n,null);r=!0},p:function(e,r){if(e.visibleMonth||e.selected||e.start||e.end){o=r.visibleMonth.weeks;for(var i=0;i<o.length;i+=1){var a=P(r,o,i);s[i]?s[i].p(e,a):(s[i]=X(t,a),s[i].c()),s[i].i(n,null)}for(;i<s.length;i+=1)l(i,1)}},i:function(t,e){r||this.m(t,e)},o:function(t){if(r){for(var e=i(t,(s=s.filter(Boolean)).length),n=0;n<s.length;n+=1)l(n,0,e);r=!1}},d:function(t){t&&h(n),d(s,t)}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),k(this)),this._intro=!0}r(J.prototype,O),r(q.prototype,O);function B(t){var e=this._svelte,n=e.component,r=e.ctx;n.monthSelected(t,r.index)}function K(t,e,n){var r=Object.create(t);return r.monthDefinition=e[n],r.index=n,r}function R(t,e){var n,r,o,i,s=e.monthDefinition.abbrev;return{c:function(){n=f("div"),r=f("span"),o=m(s),i=m("\r\n      "),r.className="svelte-1yho41z",n._svelte={component:t,ctx:e},g(n,"click",B),n.className="month-selector--month svelte-1yho41z",_(n,"selected",e.index==e.month),_(n,"selectable",e.monthDefinition.selectable)},m:function(t,e){c(t,n,e),a(n,r),a(r,o),a(n,i)},p:function(t,r){e=r,t.availableMonths&&s!==(s=e.monthDefinition.abbrev)&&y(o,s),n._svelte.ctx=e,t.month&&_(n,"selected",e.index==e.month),t.availableMonths&&_(n,"selectable",e.monthDefinition.selectable)},d:function(t){t&&h(n),v(n,"click",B)}}}function G(t){D(this,t),this._state=r({monthDict:S,monthSelectorOpen:!1},t.data),this._recompute({monthDict:1,start:1,end:1,year:1},this._state),this._intro=!!t.intro,this._fragment=function(t,e){var n,r,o,i,l,u,p,b,M,k,D,w,O,S=e.monthDict[e.month].name;function C(e){t.fire("incrementMonth",-1)}function N(e){t.toggleMonthSelectorOpen()}function x(e){t.fire("incrementMonth",1)}for(var T=e.availableMonths,Y=[],z=0;z<T.length;z+=1)Y[z]=R(t,K(e,T,z));return{c:function(){n=f("div"),r=f("div"),(o=f("div")).innerHTML='<i class="arrow left svelte-1yho41z"></i>',i=m("\r\n    "),l=f("div"),u=m(S),p=m(" "),b=m(e.year),M=m(" \r\n    "),(k=f("div")).innerHTML='<i class="arrow right svelte-1yho41z"></i>',D=m("\r\n  "),w=f("div");for(var t=0;t<Y.length;t+=1)Y[t].c();g(o,"click",C),o.className="control svelte-1yho41z",_(o,"enabled",e.canDecrementMonth),g(l,"click",N),l.className="label svelte-1yho41z",g(k,"click",x),k.className="control svelte-1yho41z",_(k,"enabled",e.canIncrementMonth),r.className="heading-section svelte-1yho41z",w.className="month-selector svelte-1yho41z",_(w,"open",e.monthSelectorOpen),n.className="title"},m:function(t,e){c(t,n,e),a(n,r),a(r,o),a(r,i),a(r,l),a(l,u),a(l,p),a(l,b),a(r,M),a(r,k),a(n,D),a(n,w);for(var s=0;s<Y.length;s+=1)Y[s].m(w,null);O=!0},p:function(e,n){if(e.canDecrementMonth&&_(o,"enabled",n.canDecrementMonth),(e.monthDict||e.month)&&S!==(S=n.monthDict[n.month].name)&&y(u,S),e.year&&y(b,n.year),e.canIncrementMonth&&_(k,"enabled",n.canIncrementMonth),e.month||e.availableMonths){T=n.availableMonths;for(var r=0;r<T.length;r+=1){var i=K(n,T,r);Y[r]?Y[r].p(e,i):(Y[r]=R(t,i),Y[r].c(),Y[r].m(w,null))}for(;r<Y.length;r+=1)Y[r].d(1);Y.length=T.length}e.monthSelectorOpen&&_(w,"open",n.monthSelectorOpen)},i:function(t,e){O||this.m(t,e)},o:s,d:function(t){t&&h(n),v(o,"click",C),v(l,"click",N),v(k,"click",x),d(Y,t)}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor)),this._intro=!0}function Q(t){if(this.get().open){var e=t.target;do{if(e==this.refs.popover)return}while(e=e.parentNode);this.close()}}r(G.prototype,O),r(G.prototype,{toggleMonthSelectorOpen:function(){var t=this.get().monthSelectorOpen;t=!t,this.set({monthSelectorOpen:t})},monthSelected:function(t,e){t.stopPropagation(),this.fire("monthSelected",e),this.toggleMonthSelectorOpen()}}),G.prototype._recompute=function(t,e){var n,r,o,i;(t.monthDict||t.start||t.end||t.year)&&this._differs(e.availableMonths,e.availableMonths=(r=(n=e).monthDict,o=n.start,i=n.end,n.year,r.map(function(t,e){return Object.assign({},t,{selectable:e>=o.getMonth()&&e<=i.getMonth()})})))&&(t.availableMonths=!0)};var U={getDistanceToEdges:function(){var t=this.get().open;t||this.set({open:!0});var e=this.get(),n=e.translateX,r=e.translateY,o=this.refs.contentsWrapper,i=(o.offsetWidth,o.offsetHeight,o.getBoundingClientRect());return t||this.set({open:!1}),{top:i.top+-1*r,bottom:window.innerHeight-i.bottom+r,left:i.left+-1*n,right:document.body.clientWidth-i.right+n}},getTranslate:function(){var t,e=this.get().w,n=this.getDistanceToEdges();return t=e<480?n.bottom:n.top<0?Math.abs(n.top):n.bottom<0?n.bottom:0,{translateX:n.left<0?Math.abs(n.left):n.right<0?n.right:0,translateY:t}},open:function(){this.set(Object.assign({},{open:!0},this.getTranslate())),this.fire("opened")},close:function(){var t=this;this.set({shrink:!0}),function(t,e,n){t.addEventListener(e,function r(){n.apply(this,arguments),t.removeEventListener(e,r)})}(this.refs.contentsAnimated,"animationend",function(){t.set({shrink:!1,open:!1}),t.fire("closed")})}};function Z(){document.removeEventListener("click",Q)}function $(t){var e=this;D(this,t),this.refs={},this._state=r({open:!1,shrink:!1,translateY:0,translateX:0},t.data),this._state.w=window.innerWidth,this._intro=!!t.intro,this._handlers.destroy=[Z],this._slotted=t.slots||{},this._fragment=function(t,e){var n,r,o,i,d,u,p,y=t._slotted.trigger,M=t._slotted.contents;function k(e){t.set({w:this.innerWidth})}function D(e){t.open()}return window.addEventListener("resize",k),{c:function(){n=f("div"),r=f("div"),o=m("\r\n  "),i=f("div"),d=f("div"),u=f("div"),g(r,"click",D),r.className="trigger",u.className="contents-inner svelte-1qphhwy",d.className="contents svelte-1qphhwy",i.className="contents-wrapper svelte-1qphhwy",b(i,"transform","translate(-50%,-50%) translate("+e.translateX+"px, "+e.translateY+"px)"),_(i,"visible",e.open),_(i,"shrink",e.shrink),n.className="popover svelte-1qphhwy"},m:function(e,s){c(e,n,s),a(n,r),y&&a(r,y),t.refs.triggerContainer=r,a(n,o),a(n,i),a(i,d),a(d,u),M&&a(u,M),t.refs.contentsAnimated=d,t.refs.contentsWrapper=i,t.refs.popover=n,p=!0},p:function(t,e){(t.translateX||t.translateY)&&b(i,"transform","translate(-50%,-50%) translate("+e.translateX+"px, "+e.translateY+"px)"),t.open&&_(i,"visible",e.open),t.shrink&&_(i,"shrink",e.shrink)},i:function(t,e){p||this.m(t,e)},o:s,d:function(e){window.removeEventListener("resize",k),e&&h(n),y&&l(r,y),v(r,"click",D),t.refs.triggerContainer===r&&(t.refs.triggerContainer=null),M&&l(u,M),t.refs.contentsAnimated===d&&(t.refs.contentsAnimated=null),t.refs.contentsWrapper===i&&(t.refs.contentsWrapper=null),t.refs.popover===n&&(t.refs.popover=null)}}}(this,this._state),this.root._oncreate.push(function(){(function(){document.addEventListener("click",Q.bind(this));var t=this.get().trigger;t&&this.refs.triggerContainer.appendChild(t.parentNode.removeChild(t))}).call(e),e.fire("update",{changed:o({},e._state),current:e._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),k(this)),this._intro=!0}function tt(t){return function(t,e,n){void 0===n&&(n=null),t.setHours(0,0,0,0),e.setHours(0,0,0,0);for(var r=new Date(e.getFullYear(),e.getMonth()+1,1),o=[],i=new Date(t.getFullYear(),t.getMonth(),1),s=x(t,e,n);i<r;)o.push(N(i.getMonth(),i.getFullYear(),s)),i.setMonth(i.getMonth()+1);return o}(t.start,t.end,t.selectableCallback)}r($.prototype,O),r($.prototype,U),(new Date).setHours(0,0,0,0);var et={changeMonth:function(t){this.set({month:t})},incrementMonth:function(t,e){var n=this.get(),r=n.canIncrementMonth,o=n.canDecrementMonth,i=n.month,s=n.year;if((1!=t||r)&&(-1!=t||o)){var a=new Date(s,i,1);a.setMonth(a.getMonth()+t),i=a.getMonth(),s=a.getFullYear();var c=new Date(s,i,e||1);this.set({selected:c,month:i,year:s})}},incrementDay:function(t){var e=this.get(),n=e.selected,r=(e.visibleMonth,e.firstVisibleDate),o=e.lastVisibleDate;return(n=new Date(n)).setDate(n.getDate()+t),t>0&&n>o?this.incrementMonth(1,n.getDate()):t<0&&n<r?this.incrementMonth(-1,n.getDate()):void this.set({selected:n})},handleKeyPress:function(t){if(-1!=E.indexOf(t.keyCode))switch(t.preventDefault(),t.keyCode){case H.left:this.incrementDay(-1);break;case H.up:this.incrementDay(-7);break;case H.right:this.incrementDay(1);break;case H.down:this.incrementDay(7);break;case H.pgup:this.incrementMonth(-1);break;case H.pgdown:this.incrementMonth(1);break;case H.escape:case H.enter:var e=this.get().selected;this.registerSelection(e)}},registerSelection:function(t){this.refs.popover.close(),this.set({selected:t,dateChosen:!0});var e=this.get(),n=e.trigger,r=e.formattedSelected;this.assignValueToTrigger(n,r)},assignValueToTrigger:function(t,e){t&&this.get().assignmentHandler(t,e)},registerOpen:function(){var t=this.get().selected,e=this.handleKeyPress.bind(this);this.set({keydownListener:e,month:t.getMonth(),year:t.getFullYear()}),document.addEventListener("keydown",e)},registerClose:function(){var t=this.get().keydownListener;document.removeEventListener("keydown",t)}};function nt(t,e,n){var r=Object.create(t);return r.day=e[n],r}function rt(t,e){var n,r;return{c:function(){n=f("button"),r=m(e.formattedSelected),n.className="calendar-button svelte-5nhzsm"},m:function(t,e){c(t,n,e),a(n,r)},p:function(t,e){t.formattedSelected&&y(r,e.formattedSelected)},d:function(t){t&&h(n)}}}function ot(t,e){var n,r,o=e.day.abbrev;return{c:function(){n=f("span"),r=m(o),n.className="svelte-5nhzsm"},m:function(t,e){c(t,n,e),a(n,r)},p:function(t,e){t.dayDict&&o!==(o=e.day.abbrev)&&y(r,o)},d:function(t){t&&h(n)}}}function it(t){var e,n=this;D(this,t),this.refs={},this._state=r({today:e=new Date,dayDict:C,format:"#{m}/#{d}/#{Y}",start:new Date(1987,9,29),end:new Date(2020,9,29),selected:e,dateChosen:!1,month:e.getMonth(),year:e.getFullYear(),trigger:null,selectableCallback:null,assignmentHandler:function(t,e){console.log("formatted"),t.innerHTML=e}},t.data),this._recompute({start:1,end:1,selectableCallback:1,month:1,year:1,months:1,monthIndex:1,visibleMonth:1,selected:1,format:1},this._state),this._intro=!!t.intro,this._slotted=t.slots||{},this._fragment=function(t,e){var n,r,o,s,g,v,y,b,M,k=t._slotted.default,D={},w=!e.trigger&&rt(0,e),O={month:e.month,year:e.year,start:e.start,end:e.end,canIncrementMonth:e.canIncrementMonth,canDecrementMonth:e.canDecrementMonth},S=new G({root:t.root,store:t.store,data:O});S.on("monthSelected",function(e){t.changeMonth(e)}),S.on("incrementMonth",function(e){t.incrementMonth(e)});for(var C=e.dayDict,N=[],x=0;x<C.length;x+=1)N[x]=ot(0,nt(e,C,x));var T={visibleMonth:e.visibleMonth,selected:e.selected,start:e.start,end:e.end},Y=new q({root:t.root,store:t.store,data:T});Y.on("dateSelected",function(e){t.registerSelection(e)});var z={trigger:e.trigger};void 0!==e.isOpen&&(z.open=e.isOpen,D.open=!0),void 0!==e.isClosing&&(z.shrink=e.isClosing,D.shrink=!0);var I=new $({root:t.root,store:t.store,slots:{default:u(),contents:u(),trigger:u()},data:z,_bind:function(e,n){var r={};!D.open&&e.open&&(r.isOpen=n.open),!D.shrink&&e.shrink&&(r.isClosing=n.shrink),t._set(r),D={}}});return t.root._beforecreate.push(function(){I._bind({open:1,shrink:1},I.get())}),I.on("opened",function(e){t.registerOpen(e)}),I.on("closed",function(e){t.registerClose(e)}),t.refs.popover=I,{c:function(){n=f("div"),r=f("div"),k||w&&w.c(),o=m("\r\n    "),s=f("div"),g=f("div"),S._fragment.c(),v=m("\r\n        "),y=f("div");for(var t=0;t<N.length;t+=1)N[t].c();b=m("\r\n        "),Y._fragment.c(),I._fragment.c(),p(r,"slot","trigger"),r.className="svelte-5nhzsm",y.className="legend svelte-5nhzsm",g.className="calendar svelte-5nhzsm",p(s,"slot","contents"),s.className="svelte-5nhzsm",n.className="datepicker svelte-5nhzsm",_(n,"open",e.isOpen),_(n,"closing",e.isClosing)},m:function(t,e){c(t,n,e),a(I._slotted.trigger,r),k?a(r,k):w&&w.m(r,null),a(I._slotted.default,o),a(I._slotted.contents,s),a(s,g),S._mount(g,null),a(g,v),a(g,y);for(var i=0;i<N.length;i+=1)N[i].m(y,null);a(g,b),Y._mount(g,null),I._mount(n,null),M=!0},p:function(t,o){e=o,k||(e.trigger?w&&(w.d(1),w=null):w?w.p(t,e):((w=rt(0,e)).c(),w.m(r,null)));var i={};if(t.month&&(i.month=e.month),t.year&&(i.year=e.year),t.start&&(i.start=e.start),t.end&&(i.end=e.end),t.canIncrementMonth&&(i.canIncrementMonth=e.canIncrementMonth),t.canDecrementMonth&&(i.canDecrementMonth=e.canDecrementMonth),S._set(i),t.dayDict){C=e.dayDict;for(var s=0;s<C.length;s+=1){var a=nt(e,C,s);N[s]?N[s].p(t,a):(N[s]=ot(0,a),N[s].c(),N[s].m(y,null))}for(;s<N.length;s+=1)N[s].d(1);N.length=C.length}var c={};t.visibleMonth&&(c.visibleMonth=e.visibleMonth),t.selected&&(c.selected=e.selected),t.start&&(c.start=e.start),t.end&&(c.end=e.end),Y._set(c);var h={};t.trigger&&(h.trigger=e.trigger),!D.open&&t.isOpen&&(h.open=e.isOpen,D.open=void 0!==e.isOpen),!D.shrink&&t.isClosing&&(h.shrink=e.isClosing,D.shrink=void 0!==e.isClosing),I._set(h),D={},t.isOpen&&_(n,"open",e.isOpen),t.isClosing&&_(n,"closing",e.isClosing)},i:function(t,e){M||this.m(t,e)},o:function(t){M&&(t=i(t,3),S&&S._fragment.o(t),Y&&Y._fragment.o(t),I&&I._fragment.o(t),M=!1)},d:function(e){e?(h(n),w&&w.d()):l(r,k),S.destroy(),d(N,e),Y.destroy(),I.destroy(),t.refs.popover===I&&(t.refs.popover=null)}}}(this,this._state),this.root._oncreate.push(function(){(function(){var t=this.get().selected;this.set({month:t.getMonth(),year:t.getFullYear()})}).call(n),n.fire("update",{changed:o({},n._state),current:n._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),k(this)),this._intro=!0}return r(it.prototype,O),r(it.prototype,et),it.prototype._recompute=function(t,e){(t.start||t.end||t.selectableCallback)&&this._differs(e.months,e.months=tt(e))&&(t.months=!0),(t.month||t.year||t.months)&&this._differs(e.monthIndex,e.monthIndex=function(t){for(var e=t.month,n=t.year,r=t.months,o=0;o<r.length;++o)if(r[o].month==e&&r[o].year==n)return o;return 0}(e))&&(t.monthIndex=!0),(t.monthIndex||t.months)&&this._differs(e.visibleMonth,e.visibleMonth=function(t){var e=t.monthIndex;return t.months[e]}(e))&&(t.visibleMonth=!0),t.visibleMonth&&(this._differs(e.lastVisibleDate,e.lastVisibleDate=function(t){var e=t.visibleMonth;return e.weeks[e.weeks.length-1].days[6].date}(e))&&(t.lastVisibleDate=!0),this._differs(e.firstVisibleDate,e.firstVisibleDate=e.visibleMonth.weeks[0].days[0].date)&&(t.firstVisibleDate=!0)),(t.monthIndex||t.months)&&(this._differs(e.canIncrementMonth,e.canIncrementMonth=function(t){return t.monthIndex<t.months.length-1}(e))&&(t.canIncrementMonth=!0),this._differs(e.canDecrementMonth,e.canDecrementMonth=function(t){var e=t.monthIndex;return t.months,e>0}(e))&&(t.canDecrementMonth=!0)),(t.selected||t.format)&&this._differs(e.formattedSelected,e.formattedSelected=function(t){var e=t.selected,n=t.format;return F(e,n)}(e))&&(t.formattedSelected=!0)},e(),it}();
//# sourceMappingURL=bundle.js.map
