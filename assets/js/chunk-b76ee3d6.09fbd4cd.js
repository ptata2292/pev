(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b76ee3d6"],{1148:function(t,e,i){"use strict";var a=i("a691"),o=i("1d80");t.exports="".repeat||function(t){var e=String(o(this)),i="",r=a(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(i+=e);return i}},1276:function(t,e,i){"use strict";var a=i("d784"),o=i("44e7"),r=i("825a"),n=i("1d80"),s=i("4840"),c=i("8aa5"),l=i("50c4"),u=i("14c3"),d=i("9263"),m=i("d039"),f=[].push,p=Math.min,v=4294967295,g=!m((function(){return!RegExp(v,"y")}));a("split",2,(function(t,e,i){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var a=String(n(this)),r=void 0===i?v:i>>>0;if(0===r)return[];if(void 0===t)return[a];if(!o(t))return e.call(a,t,r);var s,c,l,u=[],m=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,m+"g");while(s=d.call(g,a)){if(c=g.lastIndex,c>p&&(u.push(a.slice(p,s.index)),s.length>1&&s.index<a.length&&f.apply(u,s.slice(1)),l=s[0].length,p=c,u.length>=r))break;g.lastIndex===s.index&&g.lastIndex++}return p===a.length?!l&&g.test("")||u.push(""):u.push(a.slice(p)),u.length>r?u.slice(0,r):u}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var o=n(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,o,i):a.call(String(o),e,i)},function(t,o){var n=i(a,t,this,o,a!==e);if(n.done)return n.value;var d=r(t),m=String(this),f=s(d,RegExp),h=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),_=new f(g?d:"^(?:"+d.source+")",b),y=void 0===o?v:o>>>0;if(0===y)return[];if(0===m.length)return null===u(_,m)?[m]:[];var C=0,x=0,w=[];while(x<m.length){_.lastIndex=g?x:0;var $,O=u(_,g?m:m.slice(x));if(null===O||($=p(l(_.lastIndex+(g?0:x)),m.length))===C)x=c(m,x,h);else{if(w.push(m.slice(C,x)),w.length===y)return w;for(var E=1;E<=O.length-1;E++)if(w.push(O[E]),w.length===y)return w;x=C=$}}return w.push(m.slice(C)),w}]}),!g)},"25f0":function(t,e,i){"use strict";var a=i("6eeb"),o=i("825a"),r=i("d039"),n=i("ad6d"),s="toString",c=RegExp.prototype,l=c[s],u=r((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=s;(u||d)&&a(RegExp.prototype,s,(function(){var t=o(this),e=String(t.source),i=t.flags,a=String(void 0===i&&t instanceof RegExp&&!("flags"in c)?n.call(t):i);return"/"+e+"/"+a}),{unsafe:!0})},"408a":function(t,e,i){var a=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},"44e7":function(t,e,i){var a=i("861d"),o=i("c6b6"),r=i("b622"),n=r("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==o(t))}},9062:function(t,e,i){!function(e,i){t.exports=i()}("undefined"!=typeof self&&self,(function(){return function(t){var e={};function i(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);var a="undefined"!=typeof window?window.HTMLElement:Object,o={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function r(t,e,i,a,o,r,n,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=i,l._compiled=!0),a&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),n?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},l._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}var n=r({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,s=r({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,c=r({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=r({name:"vue-loading",mixins:[o],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,a],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:n,Dots:s,Bars:c},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[i("div",{staticClass:"vld-background",style:{background:t.backgroundColor,opacity:t.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),i("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[i(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,r={programmatic:!0},n=Object.assign({},e,a,r),s=new(t.extend(l))({el:document.createElement("div"),propsData:n}),c=Object.assign({},i,o);return Object.keys(c).map((function(t){s.$slots[t]=c[t]})),s}}};i(0),l.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=u(t,e,i);t.$loading=a,t.prototype.$loading=a},e.default=l}]).default}))},a15b:function(t,e,i){"use strict";var a=i("23e7"),o=i("44ad"),r=i("fc6a"),n=i("a640"),s=[].join,c=o!=Object,l=n("join",",");a({target:"Array",proto:!0,forced:c||!l},{join:function(t){return s.call(r(this),void 0===t?",":t)}})},a434:function(t,e,i){"use strict";var a=i("23e7"),o=i("23cb"),r=i("a691"),n=i("50c4"),s=i("7b0b"),c=i("65f0"),l=i("8418"),u=i("1dde"),d=i("ae40"),m=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,g=9007199254740991,h="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!m||!f},{splice:function(t,e){var i,a,u,d,m,f,b=s(this),_=n(b.length),y=o(t,_),C=arguments.length;if(0===C?i=a=0:1===C?(i=0,a=_-y):(i=C-2,a=v(p(r(e),0),_-y)),_+i-a>g)throw TypeError(h);for(u=c(b,a),d=0;d<a;d++)m=y+d,m in b&&l(u,d,b[m]);if(u.length=a,i<a){for(d=y;d<_-a;d++)m=d+a,f=d+i,m in b?b[f]=b[m]:delete b[f];for(d=_;d>_-a+i;d--)delete b[d-1]}else if(i>a)for(d=_-a;d>y;d--)m=d+a-1,f=d+i-1,m in b?b[f]=b[m]:delete b[f];for(d=0;d<i;d++)b[d+y]=arguments[d+2];return b.length=_-a+i,u}})},b680:function(t,e,i){"use strict";var a=i("23e7"),o=i("a691"),r=i("408a"),n=i("1148"),s=i("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,i){return 0===e?i:e%2===1?u(t,e-1,i*t):u(t*t,e/2,i)},d=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},m=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));a({target:"Number",proto:!0,forced:m},{toFixed:function(t){var e,i,a,s,c=r(this),m=o(t),f=[0,0,0,0,0,0],p="",v="0",g=function(t,e){var i=-1,a=e;while(++i<6)a+=t*f[i],f[i]=a%1e7,a=l(a/1e7)},h=function(t){var e=6,i=0;while(--e>=0)i+=f[e],f[e]=l(i/t),i=i%t*1e7},b=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var i=String(f[t]);e=""===e?i:e+n.call("0",7-i.length)+i}return e};if(m<0||m>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(p="-",c=-c),c>1e-21)if(e=d(c*u(2,69,1))-69,i=e<0?c*u(2,-e,1):c/u(2,e,1),i*=4503599627370496,e=52-e,e>0){g(0,i),a=m;while(a>=7)g(1e7,0),a-=7;g(u(10,a,1),0),a=e-1;while(a>=23)h(1<<23),a-=23;h(1<<a),g(1,1),h(2),v=b()}else g(0,i),g(1<<-e,0),v=b()+n.call("0",m);return m>0?(s=v.length,v=p+(s<=m?"0."+n.call("0",m-s)+v:v.slice(0,s-m)+"."+v.slice(s-m))):v=p+v,v}})},c975:function(t,e,i){"use strict";var a=i("23e7"),o=i("4d64").indexOf,r=i("a640"),n=i("ae40"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,l=r("indexOf"),u=n("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:c||!l||!u},{indexOf:function(t){return c?s.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},d0d8:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("c975"),i("a15b"),i("d81d"),i("b680"),i("d3b7"),i("ac1f"),i("25f0"),i("5319"),i("1276");var a=i("1157"),o=i.n(a);window.$=window.jQuery=o.a;var r=function(t){console.log(t);for(var e="",i=o.a.map(t,(function(t){var e="";return o.a.map(t,(function(t){e=t})),[e]})),a=0;a<i.length;a++)e+="<b>"+(a+1)+". "+i[a]+"</b><br/>";return e}},d81d:function(t,e,i){"use strict";var a=i("23e7"),o=i("b727").map,r=i("1dde"),n=i("ae40"),s=r("map"),c=n("map");a({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},dc61:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[1==t.is_active?i("span",{staticClass:"badge badge-success badge-pill"},[t._v("ACTIVO")]):i("span",{staticClass:"badge badge-warning badge-pill"},[t._v("INACTIVO")])])},o=[],r={name:"StatusItem",props:["is_active"]},n=r,s=i("2877"),c=Object(s["a"])(n,a,o,!1,null,null,null);e["a"]=c.exports},e40d:function(t,e,i){},fcd3:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",{staticClass:"content-header"},[i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row mb-2"},[t._m(0),t._v(" "),i("div",{staticClass:"col-sm-6"},[i("ol",{staticClass:"breadcrumb float-sm-right"},[i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),i("li",{staticClass:"breadcrumb-item active"},[t._v("Productos")]),t._v(" "),i("li",{staticClass:"breadcrumb-item active"},[t._v("Comentarios")])])])])])]),t._v(" "),i("loading",{attrs:{active:t.processing,"can-cancel":!1,color:"#007bff"},on:{"update:active":function(e){t.processing=e}}}),t._v(" "),i("section",{staticClass:"content"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-header"},[i("h3",{staticClass:"card-title"},[t._v("Listados de Comentarios")]),t._v(" "),i("div",{staticClass:"card-tools"},[i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-form-category",modifiers:{"modal-form-category":!0}}],ref:"botton-new",staticClass:"btn btn-primary mr-1 mb-1",attrs:{variant:"primary",size:"sm"},on:{click:function(e){return t.addNew()}}},[i("i",{staticClass:"fa fa-plus-square"}),t._v(" Agregar")])],1)]),t._v(" "),i("div",{staticClass:"card-body"},[i("div",{staticClass:"row mb-3"},[i("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-9"},[t._m(1),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"form-control",attrs:{type:"text",name:"filter",placeholder:"Escriba para buscar los resultados"},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}})])])])]),t._v(" "),i("b-table",{attrs:{items:t.categories,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,"empty-text":"No hay datos","empty-filtered-text":"No hay datos encontrados",stacked:"md","show-empty":"",small:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(content)",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(t._f("truncate")(e.item.content,60,"..."))+"\n\t\t\t\t\t")]}},{key:"cell(active)",fn:function(e){return[i("a",{attrs:{href:"#"},on:{click:function(i){return t.cambiarstatus(e.item)}}},[i("is-active",{attrs:{is_active:e.item.active}},[t._v(t._s(e.item.active))])],1)]}},{key:"cell(act)",fn:function(e){return[i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-form-category",modifiers:{"modal-form-category":!0}}],ref:"botton-edit",staticClass:"mr-1 mb-1",attrs:{variant:"outline-warning",size:"sm"},on:{click:function(i){return t.loadItemsEdit(e.item.pev_prodcatcomment_id)}}},[i("i",{staticClass:"fa fa-edit"})]),t._v(" "),i("b-button",{ref:"botton-delete",staticClass:"mr-1 mb-1",attrs:{variant:"outline-danger",size:"sm"},on:{click:function(i){return t.deleteItem(e.item)}}},[i("i",{staticClass:"fa fa-trash"})])]}}])})],1),t._v(" "),i("div",{staticClass:"card-footer"},[i("b-row",[i("b-col",{attrs:{sm:"3",md:"3"}}),t._v(" "),i("b-col",{attrs:{sm:"6",md:"6","align-self":"center"}},[i("b-pagination",{staticClass:"my-0 text-center",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm","align-self":"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),i("b-col",{attrs:{sm:"3",md:"3"}})],1)],1)]),t._v(" "),i("modal-form-category",{attrs:{category:t.category},on:{"save-success":t.loadItems,"edit-success":t.editCategorySucces}})],1)],1)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-sm-6"},[i("h1",[t._v("Comentarios")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-12 col-md-12"},[t._v("\n\t\t\t\t\t\t\t\t\t\tBuscar: \n\t\t\t\t\t\t\t\t\t")])])}],r=(i("fb6a"),i("a434"),i("b0c0"),i("5530")),n=i("2f62"),s=i("dc61"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-modal",{ref:"modal-form-category",attrs:{"no-close-on-backdrop":"",size:"lg",id:"modal-form-category",title:"update"!==t.category.actionForm?"Nuevo Comentario":"Editar Comentario","modal-class":"modal-right","hide-footer":""}},[i("b-tabs",{attrs:{pills:"",card:"",align:"center"}},[t._l(t.category,(function(e,a){return i("b-tab",{key:a,attrs:{title:e.iso_code}},[i("div",{staticClass:"form-body"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Cliente (*)")]),t._v(" "),i("b-form-select",{attrs:{options:t.cliente},scopedSlots:t._u([{key:"first",fn:function(){return[i("b-form-select-option",{attrs:{value:null,disabled:"",selected:""}},[t._v("-- Seleccione una opcion --")])]},proxy:!0}],null,!0),model:{value:e.pev_country_id,callback:function(i){t.$set(e,"pev_country_id",i)},expression:"cat.pev_country_id"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Valoracion (*)")]),t._v(" "),i("div",{staticClass:"input-group mb-3"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.grade,expression:"cat.grade"}],staticClass:"form-control",attrs:{type:"number",name:"name",state:!0},domProps:{value:e.grade},on:{input:function(i){i.target.composing||t.$set(e,"grade",i.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Tipo (*)")]),t._v(" "),i("b-form-select",{attrs:{options:t.tipo},scopedSlots:t._u([{key:"first",fn:function(){return[i("b-form-select-option",{attrs:{value:null,disabled:"",selected:""}},[t._v("-- Seleccione una opcion --")])]},proxy:!0}],null,!0),model:{value:e.type,callback:function(i){t.$set(e,"type",i)},expression:"cat.type"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Nombre (*)")]),t._v(" "),i("div",{staticClass:"input-group mb-3"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"cat.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese el nombre",name:"name",state:!0},domProps:{value:e.name},on:{input:function(i){i.target.composing||t.$set(e,"name",i.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Email (*)")]),t._v(" "),i("div",{staticClass:"input-group mb-3"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"cat.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese el email",name:"name",state:!0},domProps:{value:e.email},on:{input:function(i){i.target.composing||t.$set(e,"email",i.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[i("div",{staticClass:"form-group"},[i("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:1==t.processing},on:{click:function(i){return t.traducir(e)}}},[t.processing?t._e():[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tTraducir\n\t\t\t\t\t\t\t\t\t\t\t\t")]],2)],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Titulo (*)")]),t._v(" "),i("div",{staticClass:"input-group mb-3"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"cat.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese el titulo",name:"name",state:!0},domProps:{value:e.title},on:{input:function(i){i.target.composing||t.$set(e,"title",i.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Comentario (*)")]),t._v(" "),i("div",{staticClass:"input-group mb-3"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"cat.content"}],staticClass:"form-control",attrs:{name:"text"},domProps:{value:e.content},on:{input:function(i){i.target.composing||t.$set(e,"content",i.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Respuesta (*)")]),t._v(" "),i("div",{staticClass:"input-group mb-3"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.respond,expression:"cat.respond"}],staticClass:"form-control",attrs:{name:"text"},domProps:{value:e.respond},on:{input:function(i){i.target.composing||t.$set(e,"respond",i.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[i("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[i("p",{staticClass:"mb-0"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tTodos los campos con (*) deben ser completados\n\t\t\t\t\t\t\t\t\t\t\t")])])])])]),t._v(" "),i("hr"),t._v(" "),"update"===t.category.actionForm?i("div",{attrs:{align:"right"}},[i("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(e){return t.hideModal("modal-form-category")}}},[t._v("Cancelar")]),t._v(" "),i("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:1==t.processing},on:{click:function(i){return t.cambiar_lang(e)}}},[t.processing?t._e():[t._v("\n\t\t\t\t\t\t\t\t\t\tActualizar\n\t\t\t\t\t\t\t\t\t")],t._v(" "),t.processing?[i("i",{staticClass:"fa fa-spinner fa-spin"})]:t._e()],2)],1):t._e(),t._v(" "),"update"!==t.category.actionForm?i("div",{attrs:{align:"right"}},[i("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(e){return t.hideModal("modal-form-category")}}},[t._v("Cancelar")]),t._v(" "),i("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:1==t.processing},on:{click:function(i){return t.saveItem(e)}}},[t.processing?t._e():[t._v("\n\t\t\t\t\t\t\t\t\t\tGuardar\n\t\t\t\t\t\t\t\t\t")],t._v(" "),t.processing?[i("i",{staticClass:"fa fa-spinner fa-spin"})]:t._e()],2)],1):t._e()])}))],2)],1)},l=[],u=i("d0d8"),d={name:"ModalFormCategory",props:["category"],components:{},data:function(){return{formError:!1,trad:{},idiomas:["ES","EN","FR","DE","IT"],idiomas_id:[1,4,5,6,7],errors:[],cliente:[{value:"cliente de prueba",text:"cliente de prueba"},{value:"Otro",text:"Otro"}],tipo:[{value:"comment",text:"comentario"},{value:"question",text:"respuesta"}]}},methods:Object(r["a"])(Object(r["a"])({},Object(n["b"])(["saveData","updateData","traducirTodo"])),{},{hideModal:function(t){this.$refs[t].hide()},validar:function(t){t.name||this.errors.push("El nombre es obligatorio.")},saveItem:function(t){var e=this;if(this.category[0].pev_lang_id="1",this.errors=[],this.validar(t),this.errors.length>0)this.$Toast.fire({icon:"error",html:this.errors});else{for(var i=this.category[0],a={title:[],content:[],respond:[],iso_code:"",pev_lang_id:""},o=0;o<this.category.length;o++)this.category[o].title&&(a.title.push(this.category[o].title),a.content.push(this.category[o].content),a.respond.push(this.category[o].respond),a.pev_lang_id||(a.pev_lang_id=this.idiomas_id[o],a.iso_code=this.idiomas[o]));i.title=a.title,i.content=a.content,i.respond=a.respond,i.pev_lang_id=a.pev_lang_id,i.iso_code=a.iso_code,console.log(i),this.saveData({url:"/product_comment_lang",formData:i}).then((function(t){e.hideModal("modal-form-category"),e.$Toast.fire({icon:"success",title:"¡Guardado con éxito!"}),e.$emit("save-success",t.data.item)})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var i=Object(u["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:i})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))}},cambiarstatus_lang:function(t){var e=this,i={active_lang:""};t.reordenamiento=!1,console.log(t),1===t.active_lang?t.active_lang=0:t.active_lang=1,i.active_lang=t.active_lang,this.updateData({url:"/product_comment_lang/"+t.id,formData:i}).then((function(t){console.log(t),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var i=Object(u["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:i})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},cambiar_lang:function(t){var e=this;if(this.errors=[],this.validar(t),this.errors.length>0)this.$Toast.fire({icon:"error",html:this.errors});else{for(var i=0;i<this.category.length;i++)this.updateData({url:"/product_comment_lang/"+this.category[i].id,formData:this.category[i]}).then((function(t){e.hideModal("modal-form-category"),console.log(t),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var i=Object(u["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:i})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}));this.$emit("save-success",t)}},traducir:function(t){var e=this;this.trad={textos:[t.name],idioma_original:t.iso_code,idiomas_traducir:["ES","EN","FR","DE","IT"]},this.traducirTodo({url:"/traducir_multilang_multitext_google",formData:this.trad}).then((function(t){e.category[0].name=t.data.resp.traducciones[0].traducciones[0],e.category[1].name=t.data.resp.traducciones[1].traducciones[0],e.category[2].name=t.data.resp.traducciones[2].traducciones[0],e.category[3].name=t.data.resp.traducciones[3].traducciones[0],e.category[4].name=t.data.resp.traducciones[4].traducciones[0],e.$Toast.fire({icon:"success",title:"¡Traducción lista!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var i=Object(u["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:i})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))}}),computed:Object(r["a"])({},Object(n["c"])({processing:"processingData"}))},m=d,f=i("2877"),p=Object(f["a"])(m,c,l,!1,null,null,null),v=p.exports,g=i("9062"),h=i.n(g),b=(i("e40d"),{name:"CategoriesList",components:{"is-active":s["a"],"modal-form-category":v,Loading:h.a},data:function(){return{loginError:!1,categories:[],category:[],offset:3,current_page:1,shortBy:"name",total:"",idiomas:["ES","EN","FR","DE","IT"],edit:"",fields:[{label:"Comentarios",key:"content"},{label:"Status",key:"active"},{label:"Acciones   ",key:"act"}],totalRows:1,currentPage:1,perPage:30,sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:["name"]}},methods:Object(r["a"])(Object(r["a"])({},Object(n["b"])(["getAllWithPagination","deleteData","getData_idioma","updateData"])),{},{onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},loadItems:function(){var t=this;this.categories=[];var e="/product_comment_lang",i={url:e};this.getData_idioma(i).then((function(e){for(var i=0;i<e.data.data.length;i++)1==e.data.data[i].pev_lang_id&&t.categories.push(e.data.data[i]);t.totalRows=t.categories.length})).catch((function(t){console.log(t)}))},cambiarstatus:function(t){var e=this;t.reordenamiento=!1,console.log(t),console.log(t),1===t.active?t.active=0:t.active=1,this.updateData({url:"/product_comment/"+t.pev_prodcatcomment_id,formData:t}).then((function(t){console.log(t),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var i=Object(u["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:i})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},cambiarstatus_lang:function(t){var e,i=this;t.reordenamiento=!1,1===t.active?e.active=0:e.active=1,this.updateData({url:"/product_comment/"+t.id,formData:e}).then((function(t){console.log(t),i.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var e=Object(u["a"])(t.response.data.errors);i.$Toast.fire({icon:"error",html:e})}else i.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},loadItemsEdit:function(t){var e=this;this.edit;var i="/product_comment/"+t,a={url:i};this.getAllWithPagination(a).then((function(t){e.edit=t.data.data.comment_lang,e.load(e.edit)})).catch((function(t){console.log(t)}))},addNew:function(){this.category=[{iso_code:this.idiomas[0],name:"",active:1,active_lang:0,actionForm:"save",pev_product_id:1,pev_customer_id:1,type:"comment",grade:12.9,ekomi:1,image:"img.jpg",ip:"192.168.0.1",pev_lang_id:1},{iso_code:this.idiomas[1],name:"",active:1,active_lang:0,actionForm:"save",pev_product_id:1,pev_customer_id:1,type:"comment",grade:12.9,ekomi:1,image:"img.jpg",ip:"192.168.0.1",pev_lang_id:1},{iso_code:this.idiomas[2],name:"",active:1,active_lang:0,actionForm:"save",pev_product_id:1,pev_customer_id:1,type:"comment",grade:12.9,ekomi:1,image:"img.jpg",ip:"192.168.0.1",pev_lang_id:1},{iso_code:this.idiomas[3],name:"",active:1,active_lang:0,actionForm:"save",pev_product_id:1,pev_customer_id:1,type:"comment",grade:12.9,ekomi:1,image:"img.jpg",ip:"192.168.0.1",pev_lang_id:1},{iso_code:this.idiomas[4],name:"",active:1,active_lang:0,actionForm:"save",pev_product_id:1,pev_customer_id:1,type:"comment",grade:12.9,ekomi:1,image:"img.jpg",ip:"192.168.0.1",pev_lang_id:1}]},load:function(t){this.category=[];for(var e=0;e<t.length;e++)t[e].iso_code=this.idiomas[e],this.category.push(t[e]);this.category.actionForm="update"},deleteItem:function(t){var e=this,i=this;this.$swal.fire({title:"¿Está seguro de eliminar el comentario "+t.name+" ?",text:"Se eliminará el comentario seleccionado.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!",cancelButtonText:"Cancelar"}).then((function(a){a.value&&e.deleteData({url:"/product_comment/"+t.pev_prodcatcomment_id}).then((function(){i.$Toast.fire({icon:"success",title:"¡Eliminado con éxito!"}),i.loadItems()})).catch((function(t){i.processing=!1,console.log(t)}))}))},editCategorySucces:function(t){this.addNew();for(var e=0;e<this.categories.length;e++)if(this.categories[e].id==t.id)return this.categories.splice(e,1),this.categories.push(t)},itemsForList:function(){return this.categories.slice((this.current_page-1)*this.perpage,this.current_page*this.perpage)}}),mounted:function(){this.loadItems()},computed:Object(r["a"])({},Object(n["c"])({processing:"processingData",pagination:"pagination"}))}),_=b,y=Object(f["a"])(_,a,o,!1,null,null,null);e["default"]=y.exports}}]);