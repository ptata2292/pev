(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18b05e04"],{1148:function(t,e,a){"use strict";var i=a("a691"),o=a("1d80");t.exports="".repeat||function(t){var e=String(o(this)),a="",n=i(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(a+=e);return a}},1276:function(t,e,a){"use strict";var i=a("d784"),o=a("44e7"),n=a("825a"),r=a("1d80"),s=a("4840"),c=a("8aa5"),l=a("50c4"),d=a("14c3"),u=a("9263"),m=a("d039"),f=[].push,v=Math.min,g=4294967295,p=!m((function(){return!RegExp(g,"y")}));i("split",2,(function(t,e,a){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var i=String(r(this)),n=void 0===a?g:a>>>0;if(0===n)return[];if(void 0===t)return[i];if(!o(t))return e.call(i,t,n);var s,c,l,d=[],m=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,p=new RegExp(t.source,m+"g");while(s=u.call(p,i)){if(c=p.lastIndex,c>v&&(d.push(i.slice(v,s.index)),s.length>1&&s.index<i.length&&f.apply(d,s.slice(1)),l=s[0].length,v=c,d.length>=n))break;p.lastIndex===s.index&&p.lastIndex++}return v===i.length?!l&&p.test("")||d.push(""):d.push(i.slice(v)),d.length>n?d.slice(0,n):d}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var o=r(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,o,a):i.call(String(o),e,a)},function(t,o){var r=a(i,t,this,o,i!==e);if(r.done)return r.value;var u=n(t),m=String(this),f=s(u,RegExp),_=u.unicode,h=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(p?"y":"g"),b=new f(p?u:"^(?:"+u.source+")",h),y=void 0===o?g:o>>>0;if(0===y)return[];if(0===m.length)return null===d(b,m)?[m]:[];var C=0,x=0,w=[];while(x<m.length){b.lastIndex=p?x:0;var k,$=d(b,p?m:m.slice(x));if(null===$||(k=v(l(b.lastIndex+(p?0:x)),m.length))===C)x=c(m,x,_);else{if(w.push(m.slice(C,x)),w.length===y)return w;for(var N=1;N<=$.length-1;N++)if(w.push($[N]),w.length===y)return w;x=C=k}}return w.push(m.slice(C)),w}]}),!p)},"25f0":function(t,e,a){"use strict";var i=a("6eeb"),o=a("825a"),n=a("d039"),r=a("ad6d"),s="toString",c=RegExp.prototype,l=c[s],d=n((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u=l.name!=s;(d||u)&&i(RegExp.prototype,s,(function(){var t=o(this),e=String(t.source),a=t.flags,i=String(void 0===a&&t instanceof RegExp&&!("flags"in c)?r.call(t):a);return"/"+e+"/"+i}),{unsafe:!0})},"408a":function(t,e,a){var i=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"44e7":function(t,e,a){var i=a("861d"),o=a("c6b6"),n=a("b622"),r=n("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==o(t))}},9062:function(t,e,a){!function(e,a){t.exports=a()}("undefined"!=typeof self&&self,(function(){return function(t){var e={};function a(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(i,o,function(e){return t[e]}.bind(null,o));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}([function(t,e,a){},function(t,e,a){"use strict";a.r(e);var i="undefined"!=typeof window?window.HTMLElement:Object,o={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function n(t,e,a,i,o,n,r,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=a,l._compiled=!0),i&&(l.functional=!0),n&&(l._scopeId="data-v-"+n),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}var r=n({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,s=n({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,c=n({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=n({name:"vue-loading",mixins:[o],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,i],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:r,Dots:s,Bars:c},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transition}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[a("div",{staticClass:"vld-background",style:{background:t.backgroundColor,opacity:t.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),a("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[a(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n={programmatic:!0},r=Object.assign({},e,i,n),s=new(t.extend(l))({el:document.createElement("div"),propsData:r}),c=Object.assign({},a,o);return Object.keys(c).map((function(t){s.$slots[t]=c[t]})),s}}};a(0),l.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=d(t,e,a);t.$loading=i,t.prototype.$loading=i},e.default=l}]).default}))},a15b:function(t,e,a){"use strict";var i=a("23e7"),o=a("44ad"),n=a("fc6a"),r=a("a640"),s=[].join,c=o!=Object,l=r("join",",");i({target:"Array",proto:!0,forced:c||!l},{join:function(t){return s.call(n(this),void 0===t?",":t)}})},a434:function(t,e,a){"use strict";var i=a("23e7"),o=a("23cb"),n=a("a691"),r=a("50c4"),s=a("7b0b"),c=a("65f0"),l=a("8418"),d=a("1dde"),u=a("ae40"),m=d("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,g=Math.min,p=9007199254740991,_="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!m||!f},{splice:function(t,e){var a,i,d,u,m,f,h=s(this),b=r(h.length),y=o(t,b),C=arguments.length;if(0===C?a=i=0:1===C?(a=0,i=b-y):(a=C-2,i=g(v(n(e),0),b-y)),b+a-i>p)throw TypeError(_);for(d=c(h,i),u=0;u<i;u++)m=y+u,m in h&&l(d,u,h[m]);if(d.length=i,a<i){for(u=y;u<b-i;u++)m=u+i,f=u+a,m in h?h[f]=h[m]:delete h[f];for(u=b;u>b-i+a;u--)delete h[u-1]}else if(a>i)for(u=b-i;u>y;u--)m=u+i-1,f=u+a-1,m in h?h[f]=h[m]:delete h[f];for(u=0;u<a;u++)h[u+y]=arguments[u+2];return h.length=b-i+a,d}})},b680:function(t,e,a){"use strict";var i=a("23e7"),o=a("a691"),n=a("408a"),r=a("1148"),s=a("d039"),c=1..toFixed,l=Math.floor,d=function(t,e,a){return 0===e?a:e%2===1?d(t,e-1,a*t):d(t*t,e/2,a)},u=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},m=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));i({target:"Number",proto:!0,forced:m},{toFixed:function(t){var e,a,i,s,c=n(this),m=o(t),f=[0,0,0,0,0,0],v="",g="0",p=function(t,e){var a=-1,i=e;while(++a<6)i+=t*f[a],f[a]=i%1e7,i=l(i/1e7)},_=function(t){var e=6,a=0;while(--e>=0)a+=f[e],f[e]=l(a/t),a=a%t*1e7},h=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var a=String(f[t]);e=""===e?a:e+r.call("0",7-a.length)+a}return e};if(m<0||m>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(e=u(c*d(2,69,1))-69,a=e<0?c*d(2,-e,1):c/d(2,e,1),a*=4503599627370496,e=52-e,e>0){p(0,a),i=m;while(i>=7)p(1e7,0),i-=7;p(d(10,i,1),0),i=e-1;while(i>=23)_(1<<23),i-=23;_(1<<i),p(1,1),_(2),g=h()}else p(0,a),p(1<<-e,0),g=h()+r.call("0",m);return m>0?(s=g.length,g=v+(s<=m?"0."+r.call("0",m-s)+g:g.slice(0,s-m)+"."+g.slice(s-m))):g=v+g,g}})},c729:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"content-header"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row mb-2"},[t._m(0),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("ol",{staticClass:"breadcrumb float-sm-right"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item active"},[t._v("País")])])])])])]),t._v(" "),a("loading",{attrs:{active:t.processing,"can-cancel":!1,color:"#007bff"},on:{"update:active":function(e){t.processing=e}}}),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[t._v("País")]),t._v(" "),a("div",{staticClass:"card-tools"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-form-category",modifiers:{"modal-form-category":!0}}],ref:"botton-new",staticClass:"btn btn-primary mr-1 mb-1",attrs:{variant:"primary",size:"sm"},on:{click:function(e){return t.addNew()}}},[a("i",{staticClass:"fa fa-plus-square"}),t._v(" Agregar")])],1)]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-9"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"form-control",attrs:{type:"text",name:"filter",placeholder:"Escriba para buscar los resultados"},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}})])])])]),t._v(" "),a("b-table",{attrs:{items:t.categories,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,"empty-text":"No hay datos","empty-filtered-text":"No hay datos encontrados",stacked:"md","show-empty":"",small:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(title)",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(t._f("truncate")(e.item.title,30,"..."))+"\n\t\t\t\t\t")]}},{key:"cell(text)",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(t._f("truncate")(e.item.text,50,"..."))+"\n\t\t\t\t\t")]}},{key:"cell(active_lang)",fn:function(e){return[a("a",{attrs:{href:"#"},on:{click:function(a){return t.cambiarstatus(e.item)}}},[a("is-active",{attrs:{is_active:e.item.active}},[t._v(t._s(e.item.active))])],1)]}},{key:"cell(act)",fn:function(e){return[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-form-category",modifiers:{"modal-form-category":!0}}],ref:"botton-edit",staticClass:"mr-1 mb-1",attrs:{variant:"outline-warning",size:"sm"},on:{click:function(a){return t.loadItemsEdit(e.item.pev_country_id)}}},[a("i",{staticClass:"fa fa-edit"})]),t._v(" "),a("b-button",{ref:"botton-delete",staticClass:"mr-1 mb-1",attrs:{variant:"outline-danger",size:"sm"},on:{click:function(a){return t.deleteItem(e.item)}}},[a("i",{staticClass:"fa fa-trash"})])]}}])})],1),t._v(" "),a("div",{staticClass:"card-footer"},[a("b-row",[a("b-col",{attrs:{sm:"3",md:"3"}}),t._v(" "),a("b-col",{attrs:{sm:"6",md:"6","align-self":"center"}},[a("b-pagination",{staticClass:"my-0 text-center",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm","align-self":"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),a("b-col",{attrs:{sm:"3",md:"3"}})],1)],1)]),t._v(" "),a("modal-form-category",{attrs:{category:t.category},on:{"save-success":t.loadItems,"edit-success":t.editCategorySucces}})],1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-6"},[a("h1",[t._v("País")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12"},[t._v("\n\t\t\t\t\t\t\t\t\t\tBuscar: \n\t\t\t\t\t\t\t\t\t")])])}],n=(a("fb6a"),a("a434"),a("b0c0"),a("5530")),r=a("2f62"),s=a("dc61"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"modal-form-category",attrs:{"no-close-on-backdrop":"",size:"lg",id:"modal-form-category",title:"update"!==t.category.actionForm?"Nuevo País":"Editar País","modal-class":"modal-right","hide-footer":""}},[a("b-tabs",{attrs:{pills:"",card:"",align:"center"}},[t._l(t.category,(function(e,i){return a("b-tab",{key:i,attrs:{title:e.iso_code_lang}},[a("div",{staticClass:"form-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("País (*)")]),t._v(" "),a("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:1==t.processing},on:{click:function(a){return t.traducir(e)}}},[t.processing?t._e():[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tTraducir\n\t\t\t\t\t\t\t\t\t\t\t")]],2),t._v(" "),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"cat.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese el nombre",name:"name"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}})])],1)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Código ISO (*)")]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.iso_code,expression:"cat.iso_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese el código ISO",name:"name"},domProps:{value:e.iso_code},on:{input:function(a){a.target.composing||t.$set(e,"iso_code",a.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Prefijo telefónico (*)")]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.call_prefix,expression:"cat.call_prefix"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese el prefijo telefónico",name:"name"},domProps:{value:e.call_prefix},on:{input:function(a){a.target.composing||t.$set(e,"call_prefix",a.target.value)}}})])])]),t._v(" "),a("b-col",{attrs:{sm:"12",md:"12",lg:"12",xl:"12"}},[a("b-form-group",[a("label",[t._v("Moneda (*)")]),t._v(" "),a("b-form-select",{attrs:{options:t.monedas},model:{value:e.pev_currency_id,callback:function(a){t.$set(e,"pev_currency_id",a)},expression:"cat.pev_currency_id"}})],1)],1),t._v(" "),a("b-col",{attrs:{sm:"12",md:"12",lg:"12",xl:"12"}},[a("b-form-group",[a("label",[t._v("Zona (*)")]),t._v(" "),a("b-form-select",{attrs:{options:t.zonas},model:{value:e.pev_zone_id,callback:function(a){t.$set(e,"pev_zone_id",a)},expression:"cat.pev_zone_id"}})],1)],1),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("¿Necesita código postal/Zip? (*)")]),t._v(" "),[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.need_zip_code,expression:"cat.need_zip_code"}],staticClass:"form-check-input",attrs:{id:"is_active_1"+e.iso_code_lang,type:"radio",name:"is_active_iso_code_lang"+e.iso_code_lang},domProps:{value:1,checked:t._q(e.need_zip_code,1)},on:{change:function(a){return t.$set(e,"need_zip_code",1)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_1"+e.iso_code_lang}},[t._v("Si")])]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.need_zip_code,expression:"cat.need_zip_code"}],staticClass:"form-check-input",attrs:{id:"is_active_2"+e.iso_code_lang,type:"radio",name:"is_active_iso_code_lang"+e.iso_code_lang},domProps:{value:0,checked:t._q(e.need_zip_code,0)},on:{change:function(a){return t.$set(e,"need_zip_code",0)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_2"+e.iso_code_lang}},[t._v("No")])])]],2)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Formato del código postal/Zip (*)")]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.zip_code_format,expression:"cat.zip_code_format"}],staticClass:"form-control",attrs:{type:"text",placeholder:"formato",name:"name"},domProps:{value:e.zip_code_format},on:{input:function(a){a.target.composing||t.$set(e,"zip_code_format",a.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Contiene estados o provincias(*)")]),t._v(" "),[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.contains_states,expression:"cat.contains_states"}],staticClass:"form-check-input",attrs:{id:"is_active_12"+e.iso_code_lang,type:"radio",name:"contains_states"+e.iso_code_lang},domProps:{value:1,checked:t._q(e.contains_states,1)},on:{change:function(a){return t.$set(e,"contains_states",1)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_12"+e.iso_code_lang}},[t._v("Si")])]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.contains_states,expression:"cat.contains_states"}],staticClass:"form-check-input",attrs:{id:"is_active_21"+e.iso_code_lang,type:"radio",name:"contains_states"+e.iso_code_lang},domProps:{value:0,checked:t._q(e.contains_states,0)},on:{change:function(a){return t.$set(e,"contains_states",0)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_21"+e.iso_code_lang}},[t._v("No")])])]],2)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("¿Necesita un número de identificación fiscal? (*)")]),t._v(" "),[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.need_identification_number,expression:"cat.need_identification_number"}],staticClass:"form-check-input",attrs:{id:"is_active_lang_12"+e.iso_code_lang,type:"radio",name:"is_active_lang"+e.iso_code_lang},domProps:{value:1,checked:t._q(e.need_identification_number,1)},on:{change:function(a){return t.$set(e,"need_identification_number",1)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_lang_12"+e.iso_code_lang}},[t._v("Si")])]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.need_identification_number,expression:"cat.need_identification_number"}],staticClass:"form-check-input",attrs:{id:"is_active_lang_21"+e.iso_code_lang,type:"radio",name:"is_active_lang"+e.iso_code_lang},domProps:{value:0,checked:t._q(e.need_identification_number,0)},on:{change:function(a){return t.$set(e,"need_identification_number",0)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_lang_21"+e.iso_code_lang}},[t._v("No")])])]],2)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Mostrar la etiqueta de impuestos (*)")]),t._v(" "),[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.display_tax_label,expression:"cat.display_tax_label"}],staticClass:"form-check-input",attrs:{id:"is_active_lang_1"+e.iso_code_lang,type:"radio",name:"is_active_lang_21"+e.iso_code_lang},domProps:{value:1,checked:t._q(e.display_tax_label,1)},on:{change:function(a){return t.$set(e,"display_tax_label",1)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_lang_1"+e.iso_code_lang}},[t._v("Si")])]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.display_tax_label,expression:"cat.display_tax_label"}],staticClass:"form-check-input",attrs:{id:"is_active_lang_2"+e.iso_code_lang,type:"radio",name:"is_active_lang_21"+e.iso_code_lang},domProps:{value:0,checked:t._q(e.display_tax_label,0)},on:{change:function(a){return t.$set(e,"display_tax_label",0)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_lang_2"+e.iso_code_lang}},[t._v("No")])])]],2)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[a("p",{staticClass:"mb-0"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tTodos los campos con (*) deben ser completados\n\t\t\t\t\t\t\t\t\t\t")])])])],1)]),t._v(" "),a("hr"),t._v(" "),"update"===t.category.actionForm?a("div",{attrs:{align:"right"}},[a("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(e){return t.hideModal("modal-form-category")}}},[t._v("Cancelar")]),t._v(" "),a("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:1==t.processing},on:{click:function(a){return t.cambiar_lang(e)}}},[t.processing?t._e():[t._v("\n\t\t\t\t\t\t\t\t\tActualizar\n\t\t\t\t\t\t\t\t")],t._v(" "),t.processing?[a("i",{staticClass:"fa fa-spinner fa-spin"})]:t._e()],2)],1):t._e(),t._v(" "),"update"!==t.category.actionForm?a("div",{attrs:{align:"right"}},[a("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(e){return t.hideModal("modal-form-category")}}},[t._v("Cancelar")]),t._v(" "),a("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:1==t.processing},on:{click:function(a){return t.saveItem(e)}}},[t.processing?t._e():[t._v("\n\t\t\t\t\t\t\t\t\tGuardar\n\t\t\t\t\t\t\t\t")],t._v(" "),t.processing?[a("i",{staticClass:"fa fa-spinner fa-spin"})]:t._e()],2)],1):t._e()])}))],2)],1)},l=[],d=a("d0d8"),u={name:"ModalFormCategory",props:["category"],components:{},data:function(){return{formError:!1,configEditor:{minHeight:"230px",toolbarButtonSize:"small",language:"es",uploader:{insertImageAsBase64URI:!0}},trad:{},idiomas:["ES","EN","FR","DE","IT"],idiomas_id:[1,4,5,6,7],buttonsEditor:["source","|","bold","strikethrough","underline","italic","eraser","|","superscript","subscript","|","ul","ol","|","outdent","indent","|","font","fontsize","brush","paragraph","|","image","video","table","link","|","align","undo","redo","selectall","cut","copy","paste","copyformat","|","hr","print","preview","find","|","fullsize"],monedas:[],zonas:[],errors:[]}},mounted:function(){this.cargar_selet()},methods:Object(n["a"])(Object(n["a"])({},Object(r["b"])(["saveData","updateData","traducirTodo","getAllWithPagination"])),{},{hideModal:function(t){this.$refs[t].hide()},cargar_selet:function(){var t=this,e="/zone",a={url:e};this.getAllWithPagination(a).then((function(e){t.zonas=e.data.data;for(var a=0;a<t.zonas.length;a++)t.zonas[a].value=t.zonas[a].id,t.zonas[a].text=t.zonas[a].name;console.log(t.zonas)})).catch((function(t){console.log(t)}));var i="/currency",o={url:i};this.getAllWithPagination(o).then((function(e){t.monedas=e.data.data;for(var a=0;a<t.monedas.length;a++)t.monedas[a].value=t.monedas[a].id,t.monedas[a].text=t.monedas[a].name;console.log(t.monedas)})).catch((function(t){console.log(t)}))},validar:function(t){t.name||this.errors.push("El País es obligatorio."),t.iso_code||this.errors.push("El ISO code es obligatorio."),t.call_prefix||this.errors.push("El prefijo es obligatorio.")},saveItem:function(t){var e=this;if(this.formError=!1,this.errors=[],this.validar(t),this.errors.length>0)this.$Toast.fire({icon:"error",html:this.errors});else{for(var a=this.category[0],i={name:[],pev_lang_id:""},o=0;o<this.category.length;o++)this.category[o].name&&(i.name.push(this.category[o].name),i.pev_lang_id||(i.pev_lang_id=this.idiomas_id[o]));a.name=i.name,a.pev_lang_id=i.pev_lang_id,console.log(a),this.saveData({url:"/country_lang",formData:a}).then((function(t){e.hideModal("modal-form-category"),e.$Toast.fire({icon:"success",title:"¡Guardado con éxito!"}),e.$emit("save-success",t.data.item)})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(d["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))}},cambiar_lang:function(t){var e=this;if(this.errors=[],this.validar(t),this.errors.length>0)this.$Toast.fire({icon:"error",html:this.errors});else{for(var a=0;a<this.category.length;a++)this.updateData({url:"/country_lang/"+this.category[a].id_lang,formData:this.category[a]}).then((function(t){e.hideModal("modal-form-category"),console.log(t),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(d["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}));this.updateData({url:"/country/"+this.category[0].id,formData:this.category[0]}).then((function(t){e.hideModal("modal-form-category"),console.log(t),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(d["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})})),this.$emit("save-success",t)}},traducir:function(t){var e=this;this.trad={textos:[t.name],idioma_original:t.iso_code_lang,idiomas_traducir:["ES","EN","FR","DE","IT"]},this.traducirTodo({url:"/traducir_multilang_multitext_google",formData:this.trad}).then((function(t){e.category[0].name=t.data.resp.traducciones[0].traducciones[0],e.category[1].name=t.data.resp.traducciones[1].traducciones[0],e.category[2].name=t.data.resp.traducciones[2].traducciones[0],e.category[3].name=t.data.resp.traducciones[3].traducciones[0],e.category[4].name=t.data.resp.traducciones[4].traducciones[0],e.$Toast.fire({icon:"success",title:"¡Traducción lista!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(d["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))}}),computed:Object(n["a"])({},Object(r["c"])({processing:"processingData"}))},m=u,f=a("2877"),v=Object(f["a"])(m,c,l,!1,null,null,null),g=v.exports,p=a("9062"),_=a.n(p),h=(a("e40d"),{name:"CategoriesList",components:{"is-active":s["a"],"modal-form-category":g,Loading:_.a},data:function(){return{loginError:!1,categories:[],category:{},columns:[{label:"Nombre",field:"title"},{label:"Texto",field:"text"},{label:"Status",field:"active_lang"},{label:"",field:""}],offset:3,current_page:1,shortBy:"name",total:"",idiomas:["ES","EN","FR","DE","IT"],edit:"",fields:[{label:"Pais",key:"name"},{label:"Codigo ISO",key:"country.iso_code"},{label:"Prefijo Telefónico",key:"country.call_prefix"},{label:"Status",key:"active_lang"},{label:"Acciones   ",key:"act"}],totalRows:1,currentPage:1,perPage:30,sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:["name"]}},methods:Object(n["a"])(Object(n["a"])({},Object(r["b"])(["getAllWithPagination","deleteData","getData_idioma","updateData"])),{},{onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},loadItems:function(){var t=this;this.categories=[];var e="/country_lang",a={url:e};this.getData_idioma(a).then((function(e){for(var a=0;a<e.data.data.length;a++)t.categories.push(e.data.data[a]);t.totalRows=t.categories.length})).catch((function(t){console.log(t)}))},cambiarstatus:function(t){var e=this;t.reordenamiento=!1,console.log(t),console.log(t),1===t.active?t.active=0:t.active=1,this.updateData({url:"/country/"+t.pev_country_id,formData:t}).then((function(t){console.log(t),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(d["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},loadItemsEdit:function(t){var e=this;this.edit;var a="/country/"+t,i={url:a};this.getAllWithPagination(i).then((function(t){e.edit=t.data.data.country_lang,e.load(e.edit)})).catch((function(t){console.log(t)}))},addNew:function(){this.category=[{iso_code_lang:this.idiomas[0],name:"",active:1,active_lang:0,actionForm:"save"},{iso_code_lang:this.idiomas[1],name:"",active:1,active_lang:0,actionForm:"save"},{iso_code_lang:this.idiomas[2],name:"",active:1,active_lang:0,actionForm:"save"},{iso_code_lang:this.idiomas[3],name:"",active:1,active_lang:0,actionForm:"save"},{iso_code_lang:this.idiomas[4],name:"",active:1,active_lang:0,actionForm:"save"}]},load:function(t){t[0].country.iso_code_lang=t[0].iso_code,t[0].country.name=t[0].name,t[0].country.pev_lang_id=t[0].pev_lang_id,t[0].country.id_lang=t[0].id,t[1].country.iso_code_lang=t[1].iso_code,t[1].country.name=t[1].name,t[1].country.pev_lang_id=t[1].pev_lang_id,t[1].country.id_lang=t[1].id,t[2].country.iso_code_lang=t[2].iso_code,t[2].country.name=t[2].name,t[2].country.pev_lang_id=t[2].pev_lang_id,t[2].country.id_lang=t[2].id,t[3].country.iso_code_lang=t[3].iso_code,t[3].country.name=t[3].name,t[3].country.pev_lang_id=t[3].pev_lang_id,t[3].country.id_lang=t[3].id,t[4].country.iso_code_lang=t[4].iso_code,t[4].country.name=t[4].name,t[4].country.pev_lang_id=t[4].pev_lang_id,t[4].country.id_lang=t[4].id,this.category=[t[0].country,t[1].country,t[2].country,t[3].country,t[4].country],console.log(this.category),this.category.actionForm="update"},deleteItem:function(t){var e=this,a=this;this.$swal.fire({title:"¿Está seguro de eliminar el país "+t.name+" ?",text:"Se eliminará el país seleccionada.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!",cancelButtonText:"Cancelar"}).then((function(i){i.value&&e.deleteData({url:"/country/"+t.pev_country_id}).then((function(){a.$Toast.fire({icon:"success",title:"¡Eliminado con éxito!"}),a.loadItems()})).catch((function(t){a.processing=!1,console.log(t)}))}))},editCategorySucces:function(t){this.addNew();for(var e=0;e<this.categories.length;e++)if(this.categories[e].id==t.id)return this.categories.splice(e,1),this.categories.push(t)},itemsForList:function(){return this.categories.slice((this.current_page-1)*this.perpage,this.current_page*this.perpage)}}),mounted:function(){this.loadItems()},computed:Object(n["a"])({},Object(r["c"])({processing:"processingData",pagination:"pagination"}))}),b=h,y=Object(f["a"])(b,i,o,!1,null,null,null);e["default"]=y.exports},c975:function(t,e,a){"use strict";var i=a("23e7"),o=a("4d64").indexOf,n=a("a640"),r=a("ae40"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,l=n("indexOf"),d=r("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!l||!d},{indexOf:function(t){return c?s.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},d0d8:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("c975"),a("a15b"),a("d81d"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("1276");var i=a("1157"),o=a.n(i);window.$=window.jQuery=o.a;var n=function(t){console.log(t);for(var e="",a=o.a.map(t,(function(t){var e="";return o.a.map(t,(function(t){e=t})),[e]})),i=0;i<a.length;i++)e+="<b>"+(i+1)+". "+a[i]+"</b><br/>";return e}},d81d:function(t,e,a){"use strict";var i=a("23e7"),o=a("b727").map,n=a("1dde"),r=a("ae40"),s=n("map"),c=r("map");i({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},dc61:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[1==t.is_active?a("span",{staticClass:"badge badge-success badge-pill"},[t._v("ACTIVO")]):a("span",{staticClass:"badge badge-warning badge-pill"},[t._v("INACTIVO")])])},o=[],n={name:"StatusItem",props:["is_active"]},r=n,s=a("2877"),c=Object(s["a"])(r,i,o,!1,null,null,null);e["a"]=c.exports},e40d:function(t,e,a){}}]);