(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cefb2dc"],{1148:function(t,e,a){"use strict";var i=a("a691"),r=a("1d80");t.exports="".repeat||function(t){var e=String(r(this)),a="",n=i(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(a+=e);return a}},1276:function(t,e,a){"use strict";var i=a("d784"),r=a("44e7"),n=a("825a"),o=a("1d80"),s=a("4840"),l=a("8aa5"),c=a("50c4"),u=a("14c3"),d=a("9263"),f=a("d039"),v=[].push,p=Math.min,h=4294967295,m=!f((function(){return!RegExp(h,"y")}));i("split",2,(function(t,e,a){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var i=String(o(this)),n=void 0===a?h:a>>>0;if(0===n)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,n);var s,l,c,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,m=new RegExp(t.source,f+"g");while(s=d.call(m,i)){if(l=m.lastIndex,l>p&&(u.push(i.slice(p,s.index)),s.length>1&&s.index<i.length&&v.apply(u,s.slice(1)),c=s[0].length,p=l,u.length>=n))break;m.lastIndex===s.index&&m.lastIndex++}return p===i.length?!c&&m.test("")||u.push(""):u.push(i.slice(p)),u.length>n?u.slice(0,n):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var r=o(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r,a):i.call(String(r),e,a)},function(t,r){var o=a(i,t,this,r,i!==e);if(o.done)return o.value;var d=n(t),f=String(this),v=s(d,RegExp),g=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),_=new v(m?d:"^(?:"+d.source+")",b),y=void 0===r?h:r>>>0;if(0===y)return[];if(0===f.length)return null===u(_,f)?[f]:[];var w=0,x=0,C=[];while(x<f.length){_.lastIndex=m?x:0;var $,E=u(_,m?f:f.slice(x));if(null===E||($=p(c(_.lastIndex+(m?0:x)),f.length))===w)x=l(f,x,g);else{if(C.push(f.slice(w,x)),C.length===y)return C;for(var N=1;N<=E.length-1;N++)if(C.push(E[N]),C.length===y)return C;x=w=$}}return C.push(f.slice(w)),C}]}),!m)},"25f0":function(t,e,a){"use strict";var i=a("6eeb"),r=a("825a"),n=a("d039"),o=a("ad6d"),s="toString",l=RegExp.prototype,c=l[s],u=n((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),d=c.name!=s;(u||d)&&i(RegExp.prototype,s,(function(){var t=r(this),e=String(t.source),a=t.flags,i=String(void 0===a&&t instanceof RegExp&&!("flags"in l)?o.call(t):a);return"/"+e+"/"+i}),{unsafe:!0})},"408a":function(t,e,a){var i=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"44e7":function(t,e,a){var i=a("861d"),r=a("c6b6"),n=a("b622"),o=n("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}},9062:function(t,e,a){!function(e,a){t.exports=a()}("undefined"!=typeof self&&self,(function(){return function(t){var e={};function a(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(i,r,function(e){return t[e]}.bind(null,r));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}([function(t,e,a){},function(t,e,a){"use strict";a.r(e);var i="undefined"!=typeof window?window.HTMLElement:Object,r={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function n(t,e,a,i,r,n,o,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),i&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}var o=n({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,s=n({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=n({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,c=n({name:"vue-loading",mixins:[r],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,i],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:o,Dots:s,Bars:l},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transition}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[a("div",{staticClass:"vld-background",style:{background:t.backgroundColor,opacity:t.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),a("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[a(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n={programmatic:!0},o=Object.assign({},e,i,n),s=new(t.extend(c))({el:document.createElement("div"),propsData:o}),l=Object.assign({},a,r);return Object.keys(l).map((function(t){s.$slots[t]=l[t]})),s}}};a(0),c.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=u(t,e,a);t.$loading=i,t.prototype.$loading=i},e.default=c}]).default}))},a15b:function(t,e,a){"use strict";var i=a("23e7"),r=a("44ad"),n=a("fc6a"),o=a("a640"),s=[].join,l=r!=Object,c=o("join",",");i({target:"Array",proto:!0,forced:l||!c},{join:function(t){return s.call(n(this),void 0===t?",":t)}})},a434:function(t,e,a){"use strict";var i=a("23e7"),r=a("23cb"),n=a("a691"),o=a("50c4"),s=a("7b0b"),l=a("65f0"),c=a("8418"),u=a("1dde"),d=a("ae40"),f=u("splice"),v=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,h=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!v},{splice:function(t,e){var a,i,u,d,f,v,b=s(this),_=o(b.length),y=r(t,_),w=arguments.length;if(0===w?a=i=0:1===w?(a=0,i=_-y):(a=w-2,i=h(p(n(e),0),_-y)),_+a-i>m)throw TypeError(g);for(u=l(b,i),d=0;d<i;d++)f=y+d,f in b&&c(u,d,b[f]);if(u.length=i,a<i){for(d=y;d<_-i;d++)f=d+i,v=d+a,f in b?b[v]=b[f]:delete b[v];for(d=_;d>_-i+a;d--)delete b[d-1]}else if(a>i)for(d=_-i;d>y;d--)f=d+i-1,v=d+a-1,f in b?b[v]=b[f]:delete b[v];for(d=0;d<a;d++)b[d+y]=arguments[d+2];return b.length=_-i+a,u}})},b680:function(t,e,a){"use strict";var i=a("23e7"),r=a("a691"),n=a("408a"),o=a("1148"),s=a("d039"),l=1..toFixed,c=Math.floor,u=function(t,e,a){return 0===e?a:e%2===1?u(t,e-1,a*t):u(t*t,e/2,a)},d=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},f=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}));i({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,a,i,s,l=n(this),f=r(t),v=[0,0,0,0,0,0],p="",h="0",m=function(t,e){var a=-1,i=e;while(++a<6)i+=t*v[a],v[a]=i%1e7,i=c(i/1e7)},g=function(t){var e=6,a=0;while(--e>=0)a+=v[e],v[e]=c(a/t),a=a%t*1e7},b=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==v[t]){var a=String(v[t]);e=""===e?a:e+o.call("0",7-a.length)+a}return e};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(p="-",l=-l),l>1e-21)if(e=d(l*u(2,69,1))-69,a=e<0?l*u(2,-e,1):l/u(2,e,1),a*=4503599627370496,e=52-e,e>0){m(0,a),i=f;while(i>=7)m(1e7,0),i-=7;m(u(10,i,1),0),i=e-1;while(i>=23)g(1<<23),i-=23;g(1<<i),m(1,1),g(2),h=b()}else m(0,a),m(1<<-e,0),h=b()+o.call("0",f);return f>0?(s=h.length,h=p+(s<=f?"0."+o.call("0",f-s)+h:h.slice(0,s-f)+"."+h.slice(s-f))):h=p+h,h}})},c975:function(t,e,a){"use strict";var i=a("23e7"),r=a("4d64").indexOf,n=a("a640"),o=a("ae40"),s=[].indexOf,l=!!s&&1/[1].indexOf(1,-0)<0,c=n("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:l||!c||!u},{indexOf:function(t){return l?s.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},d0d8:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("c975"),a("a15b"),a("d81d"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("1276");var i=a("1157"),r=a.n(i);window.$=window.jQuery=r.a;var n=function(t){console.log(t);for(var e="",a=r.a.map(t,(function(t){var e="";return r.a.map(t,(function(t){e=t})),[e]})),i=0;i<a.length;i++)e+="<b>"+(i+1)+". "+a[i]+"</b><br/>";return e}},d81d:function(t,e,a){"use strict";var i=a("23e7"),r=a("b727").map,n=a("1dde"),o=a("ae40"),s=n("map"),l=o("map");i({target:"Array",proto:!0,forced:!s||!l},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},dc61:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[1==t.is_active?a("span",{staticClass:"badge badge-success badge-pill"},[t._v("ACTIVO")]):a("span",{staticClass:"badge badge-warning badge-pill"},[t._v("INACTIVO")])])},r=[],n={name:"StatusItem",props:["is_active"]},o=n,s=a("2877"),l=Object(s["a"])(o,i,r,!1,null,null,null);e["a"]=l.exports},e40d:function(t,e,a){},f9dd:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"content-header"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row mb-2"},[t._m(0),t._v(" "),a("div",{staticClass:"col-sm-8"},[a("ol",{staticClass:"breadcrumb float-sm-right"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:{name:"productos-caracteristicas"}}},[t._v("Productos")])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:{name:"productos-caracteristicas"}}},[t._v("Caracteristicas")])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.name))])])])])])]),t._v(" "),a("loading",{attrs:{active:t.processing,"can-cancel":!1,color:"#007bff"},on:{"update:active":function(e){t.processing=e}}}),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[t._v("Listados de Valores")]),t._v(" "),a("div",{staticClass:"card-tools"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-form-tag",modifiers:{"modal-form-tag":!0}}],ref:"botton-new",staticClass:"btn btn-primary mr-1 mb-1",attrs:{variant:"primary",size:"sm"},on:{click:function(e){return t.addNew()}}},[a("i",{staticClass:"fa fa-plus-square"}),t._v(" Agregar")])],1)]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-9"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"form-control",attrs:{type:"text",name:"filter",placeholder:"Escriba para buscar los resultados"},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}})])])])]),t._v(" "),a("b-table",{attrs:{items:t.tags,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,"empty-text":"No hay datos","empty-filtered-text":"No hay datos encontrados",stacked:"md","show-empty":"",small:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(value)",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(t._f("truncate")(e.item.value,30,"..."))+"\n\t\t\t\t\t")]}},{key:"cell(active)",fn:function(e){return[a("a",{attrs:{href:"#"},on:{click:function(a){return t.cambiarstatus(e.item)}}},[a("is-active",{attrs:{is_active:e.item.active}},[t._v(t._s(e.item.active))])],1)]}},{key:"cell(act)",fn:function(e){return[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-form-tag",modifiers:{"modal-form-tag":!0}}],ref:"botton-edit",staticClass:"mr-1 mb-1",attrs:{variant:"outline-warning",size:"sm"},on:{click:function(a){return t.loadItemsEdit(e.item.pev_prod_feat_val_id)}}},[a("i",{staticClass:"fa fa-edit"})]),t._v(" "),a("b-button",{ref:"botton-delete",staticClass:"mr-1 mb-1",attrs:{variant:"outline-danger",size:"sm"},on:{click:function(a){return t.deleteItem(e.item)}}},[a("i",{staticClass:"fa fa-trash"})])]}}])})],1),t._v(" "),a("div",{staticClass:"card-footer"},[a("b-row",[a("b-col",{attrs:{sm:"3",md:"3"}}),t._v(" "),a("b-col",{attrs:{sm:"6",md:"6","align-self":"center"}},[a("b-pagination",{staticClass:"my-0 text-center",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm","align-self":"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),a("b-col",{attrs:{sm:"3",md:"3"}})],1)],1)]),t._v(" "),a("modal-form-tag",{attrs:{tag:t.tag},on:{"save-success":t.loadItems,"edit-success":t.editItemSucces}})],1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-4"},[a("h1",[t._v("Valores")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12"},[t._v("\n\t\t\t\t\t\t\t\t\t\tBuscar: \n\t\t\t\t\t\t\t\t\t")])])}],n=(a("fb6a"),a("a434"),a("b0c0"),a("5530")),o=a("2f62"),s=a("dc61"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"modal-form-tag",attrs:{"no-close-on-backdrop":"",size:"md",id:"modal-form-tag",title:"update"!==t.tag.actionForm?"Nuevo Valor":"Editar Valor","modal-class":"modal-right","hide-footer":""}},[a("b-tabs",{attrs:{pills:"",card:"",align:"center"}},t._l(t.tag,(function(e,i){return a("b-tab",{key:i,attrs:{title:e.iso_code}},[a("div",{staticClass:"form-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Nombre (*)")]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"ta.value"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese el nombre del valor",name:"name"},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}})])])]),t._v(" "),a("b-col",{attrs:{sm:"12",md:"12",lg:"12",xl:"12"}},[a("b-form-group",[a("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:1==t.processing},on:{click:function(a){return t.traducir(e)}}},[t.processing?t._e():[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tTraducir\n\t\t\t\t\t\t\t\t\t\t\t\t")]],2)],1)],1),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[a("p",{staticClass:"mb-0"},[t._v("\n\t\t\t\t\t\t\t\t\tTodos los campos con (*) deben ser completados\n\t\t\t\t\t\t\t\t")])])])],1)]),t._v(" "),a("hr"),t._v(" "),"update"===t.tag.actionForm?a("div",{attrs:{align:"right"}},[a("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(e){return t.hideModal("modal-form-tag")}}},[t._v("Cancelar")]),t._v(" "),a("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:1==t.processing},on:{click:function(a){return t.cambiar_lang(e)}}},[t.processing?t._e():[t._v("\n\t\t\t\t\t\t\tActualizar\n\t\t\t\t\t\t")],t._v(" "),t.processing?[a("i",{staticClass:"fa fa-spinner fa-spin"})]:t._e()],2)],1):t._e(),t._v(" "),"update"!==t.tag.actionForm?a("div",{attrs:{align:"right"}},[a("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(e){return t.hideModal("modal-form-tag")}}},[t._v("Cancelar")]),t._v(" "),a("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:1==t.processing},on:{click:function(a){return t.saveItem(e)}}},[t.processing?t._e():[t._v("\n\t\t\t\t\t\t\tGuardar\n\t\t\t\t\t\t")],t._v(" "),t.processing?[a("i",{staticClass:"fa fa-spinner fa-spin"})]:t._e()],2)],1):t._e()])})),1)],1)},c=[],u=a("d0d8"),d={name:"ModalFormTag",props:["tag"],components:{},data:function(){return{formError:!1,configEditor:{minHeight:"230px",toolbarButtonSize:"small",language:"es",uploader:{insertImageAsBase64URI:!0}},trad:{},idiomas:["ES","EN","FR","DE","IT"],idiomas_id:[1,4,5,6,7],buttonsEditor:["source","|","bold","strikethrough","underline","italic","eraser","|","superscript","subscript","|","ul","ol","|","outdent","indent","|","font","fontsize","brush","paragraph","|","image","video","table","link","|","align","undo","redo","selectall","cut","copy","paste","copyformat","|","hr","print","preview","find","|","fullsize"],errors:[]}},methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])(["saveData","updateData","traducirTodo"])),{},{hideModal:function(t){this.$refs[t].hide()},validar:function(t){t.value||this.errors.push("El nombre es obligatorio.")},saveItem:function(t){var e=this;if(this.errors=[],this.validar(t),this.errors.length>0)this.$Toast.fire({icon:"error",html:this.errors});else{for(var a=this.tag[0],i={value:[],iso_code:"",pev_lang_id:""},r=0;r<this.tag.length;r++)this.tag[r].value&&(i.value.push(this.tag[r].value),i.pev_lang_id||(i.pev_lang_id=this.idiomas_id[r],i.iso_code=this.idiomas[r]));a.value=i.value,a.pev_lang_id=i.pev_lang_id,a.iso_code=i.iso_code,console.log(a),this.saveData({url:"/product_feature_value_lang",formData:a}).then((function(t){e.hideModal("modal-form-tag"),e.$Toast.fire({icon:"success",title:"¡Guardado con éxito!"}),e.$emit("save-success",t.data.item)})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(u["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))}},cambiarstatus_lang:function(t){var e=this,a={active_lang:""};t.reordenamiento=!1,console.log(t),1===t.active_lang?t.active_lang=0:t.active_lang=1,a.active_lang=t.active_lang,this.updateData({url:"/product_feature_value_lang/"+t.id,formData:a}).then((function(t){console.log(t),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(u["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},cambiar_lang:function(t){var e=this;if(this.errors=[],this.validar(t),this.errors.length>0)this.$Toast.fire({icon:"error",html:this.errors});else{for(var a=0;a<this.tag.length;a++)this.updateData({url:"/product_feature_value_lang/"+this.tag[a].id,formData:this.tag[a]}).then((function(t){e.hideModal("modal-form-tag"),console.log(t),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(u["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}));this.$emit("save-success",t)}},traducir:function(t){var e=this;this.trad={textos:[t.value],idioma_original:t.iso_code,idiomas_traducir:["ES","EN","FR","DE","IT"]},this.traducirTodo({url:"/traducir_multilang_multitext_google",formData:this.trad}).then((function(t){e.tag[0].value=t.data.resp.traducciones[0].traducciones[0],e.tag[1].value=t.data.resp.traducciones[1].traducciones[0],e.tag[2].value=t.data.resp.traducciones[2].traducciones[0],e.tag[3].value=t.data.resp.traducciones[3].traducciones[0],e.tag[4].value=t.data.resp.traducciones[4].traducciones[0],e.$Toast.fire({icon:"success",title:"¡Traducción lista!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(u["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))}}),computed:Object(n["a"])({},Object(o["c"])({processing:"processingData"}))},f=d,v=a("2877"),p=Object(v["a"])(f,l,c,!1,null,null,null),h=p.exports,m=a("9062"),g=a.n(m),b=(a("e40d"),{name:"TagsList",components:{"is-active":s["a"],"modal-form-tag":h,Loading:g.a},data:function(){return{loginError:!1,tags:[],tag:[],id:"",columns:[{label:"Nombre",field:"name"},{label:"Descripción",field:"question"},{label:"Status",field:"status"},{label:"",field:""}],offset:3,current_page:1,shortBy:"name",total:"",idiomas:["ES","EN","FR","DE","IT"],name:"",edit:"",fields:[{label:"Nombre",key:"value"},{label:"Status",key:"active"},{label:"Acciones   ",key:"act"}],totalRows:1,currentPage:1,perPage:30,sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:["value"]}},methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])(["getAllWithPagination","deleteData","updateData","getData_idioma"])),{},{onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},loadItems:function(){var t=this;this.tags=[];var e="/product_feature_value_lang",a={url:e};this.getData_idioma(a).then((function(e){for(var a=0;a<e.data.data.length;a++)0==e.data.data[a].deleted&&e.data.data[a].pev_product_feature_id==t.id&&t.tags.push(e.data.data[a]);t.totalRows=t.tags.length})).catch((function(t){console.log(t)}))},cambiarstatus:function(t){var e=this;t.reordenamiento=!1,console.log(t),console.log(t),1===t.active?t.active=0:t.active=1,this.updateData({url:"/product_feature_value/"+t.pev_prod_feat_val_id,formData:t}).then((function(t){console.log(t),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(u["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},loadItemsEdit:function(t){var e=this;this.edit;var a="/product_feature_value/"+t,i={url:a};this.getAllWithPagination(i).then((function(t){e.edit=t.data.data.feature_value_lang,e.viewItem(e.edit)})).catch((function(t){console.log(t)}))},addNew:function(){this.tag=[{iso_code:this.idiomas[0],value:"",active_lang:0,pev_lang_id:1,pev_product_feature_id:this.id},{iso_code:this.idiomas[1],value:"",active_lang:0,pev_lang_id:1,pev_product_feature_id:this.id},{iso_code:this.idiomas[2],value:"",active_lang:0,pev_lang_id:1,pev_product_feature_id:this.id},{iso_code:this.idiomas[3],value:"",active_lang:0,pev_lang_id:1,pev_product_feature_id:this.id},{iso_code:this.idiomas[4],value:"",active_lang:0,pev_lang_id:1,pev_product_feature_id:this.id}]},viewItem:function(t){this.tag=[];for(var e=0;e<t.length;e++)this.tag.push(t[e]);this.tag.actionForm="update"},deleteItem:function(t){var e=this,a=this;this.$swal.fire({title:"¿Está seguro de eliminar el valor "+t.value+" ?",text:"Se eliminará el valor seleccionado.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!",cancelButtonText:"Cancelar"}).then((function(i){i.value&&e.deleteData({url:"/product_feature_value/"+t.pev_prod_feat_val_id}).then((function(){a.$Toast.fire({icon:"success",title:"¡Eliminado con éxito!"}),a.loadItems()})).catch((function(t){a.processing=!1,console.log(t)}))}))},editItemSucces:function(t){this.addNew();for(var e=0;e<this.tags.length;e++)if(this.tags[e].id==t.id)return this.tags.splice(e,1),this.tags.push(t)},getParameterByName:function(){this.id=this.$route.query.id,this.name=this.$route.query.name},itemsForList:function(){return this.tags.slice((this.current_page-1)*this.perpage,this.current_page*this.perpage)}}),mounted:function(){this.loadItems(),this.getParameterByName()},computed:Object(n["a"])({},Object(o["c"])({processing:"processingData",pagination:"pagination"}))}),_=b,y=Object(v["a"])(_,i,r,!1,null,null,null);e["default"]=y.exports}}]);