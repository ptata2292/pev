(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07f6c9f7"],{1148:function(t,e,a){"use strict";var i=a("a691"),r=a("1d80");t.exports="".repeat||function(t){var e=String(r(this)),a="",n=i(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(a+=e);return a}},1276:function(t,e,a){"use strict";var i=a("d784"),r=a("44e7"),n=a("825a"),o=a("1d80"),s=a("4840"),c=a("8aa5"),l=a("50c4"),d=a("14c3"),u=a("9263"),f=a("d039"),v=[].push,m=Math.min,g=4294967295,p=!f((function(){return!RegExp(g,"y")}));i("split",2,(function(t,e,a){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var i=String(o(this)),n=void 0===a?g:a>>>0;if(0===n)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,n);var s,c,l,d=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,p=new RegExp(t.source,f+"g");while(s=u.call(p,i)){if(c=p.lastIndex,c>m&&(d.push(i.slice(m,s.index)),s.length>1&&s.index<i.length&&v.apply(d,s.slice(1)),l=s[0].length,m=c,d.length>=n))break;p.lastIndex===s.index&&p.lastIndex++}return m===i.length?!l&&p.test("")||d.push(""):d.push(i.slice(m)),d.length>n?d.slice(0,n):d}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var r=o(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r,a):i.call(String(r),e,a)},function(t,r){var o=a(i,t,this,r,i!==e);if(o.done)return o.value;var u=n(t),f=String(this),v=s(u,RegExp),h=u.unicode,_=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(p?"y":"g"),b=new v(p?u:"^(?:"+u.source+")",_),y=void 0===r?g:r>>>0;if(0===y)return[];if(0===f.length)return null===d(b,f)?[f]:[];var C=0,x=0,w=[];while(x<f.length){b.lastIndex=p?x:0;var $,E=d(b,p?f:f.slice(x));if(null===E||($=m(l(b.lastIndex+(p?0:x)),f.length))===C)x=c(f,x,h);else{if(w.push(f.slice(C,x)),w.length===y)return w;for(var O=1;O<=E.length-1;O++)if(w.push(E[O]),w.length===y)return w;x=C=$}}return w.push(f.slice(C)),w}]}),!p)},"25f0":function(t,e,a){"use strict";var i=a("6eeb"),r=a("825a"),n=a("d039"),o=a("ad6d"),s="toString",c=RegExp.prototype,l=c[s],d=n((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u=l.name!=s;(d||u)&&i(RegExp.prototype,s,(function(){var t=r(this),e=String(t.source),a=t.flags,i=String(void 0===a&&t instanceof RegExp&&!("flags"in c)?o.call(t):a);return"/"+e+"/"+i}),{unsafe:!0})},"2cc4":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"content-header"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row mb-2"},[t._m(0),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("ol",{staticClass:"breadcrumb float-sm-right"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item active"},[t._v("FAQs")])])])])])]),t._v(" "),a("loading",{attrs:{active:t.processing,"can-cancel":!1,color:"#007bff"},on:{"update:active":function(e){t.processing=e}}}),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[t._v("Listados de Categorias")]),t._v(" "),a("div",{staticClass:"card-tools"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-form-category",modifiers:{"modal-form-category":!0}}],ref:"botton-new",staticClass:"btn btn-primary mr-1 mb-1",attrs:{variant:"primary",size:"sm"},on:{click:function(e){return t.addNew()}}},[a("i",{staticClass:"fa fa-plus-square"}),t._v(" Agregar")])],1)]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-9"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"form-control",attrs:{type:"text",name:"filter",placeholder:"Escriba para buscar los resultados"},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"row table-responsive mt-1"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("datatable",{ref:"datatable_list",staticClass:"table table-hover table-hover-animation mb-0",attrs:{columns:t.columns,data:t.itemsForList(),filter:t.filter,"current-page":t.current_page,"per-page":t.perpage},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[0===i.deleted?a("tr",[a("td",{staticClass:"text-center"},[a("router-link",{attrs:{to:{name:"faqs-tags",query:{id:i.pev_faq_category_id,name:i.name}}}},[t._v(t._s(i.name))])],1),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(i.text))]),t._v(" "),a("td",{staticClass:"text-center"},[a("a",{attrs:{href:"#"},on:{click:function(e){return t.cambiarstatus(i)}}},[a("is-active",{attrs:{is_active:i.active}})],1)]),t._v(" "),a("td",{staticClass:"text-right",staticStyle:{width:"10%","white-space":"nowrap"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-form-category",modifiers:{"modal-form-category":!0}}],ref:"botton-edit",staticClass:"mr-1 mb-1",attrs:{variant:"outline-warning",size:"sm"},on:{click:function(e){return t.loadItemsEdit(i.pev_faq_category_id)}}},[a("i",{staticClass:"fa fa-edit"})]),t._v(" "),a("b-button",{ref:"botton-delete",staticClass:"mr-1 mb-1",attrs:{variant:"outline-danger",size:"sm"},on:{click:function(e){return t.deleteItem(i)}}},[a("i",{staticClass:"fa fa-trash"})])],1)]):a("tr",{staticStyle:{"background-color":"#dbdbdb"}},[a("td",{staticClass:"text-center"},[t._v(t._s(i.name))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(i.text))]),t._v(" "),a("td",{staticClass:"text-center"}),t._v(" "),a("td",{staticClass:"text-right",staticStyle:{width:"10%","white-space":"nowrap"}})])]}}])})],1)])]),t._v(" "),a("div",{staticClass:"card-footer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("span",{staticClass:"text-muted text-small mr-1 mb-2"},[t._v("Mostrando "+t._s(t.pagination.from)+" a "+t._s(t.pagination.to)+" de "+t._s(t.total)+" registros")])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("b-pagination",{attrs:{"total-rows":t.total,"per-page":t.perpage,size:"sm",align:"right"},on:{input:function(e){return t.loadItems()}},model:{value:t.current_page,callback:function(e){t.current_page=e},expression:"current_page"}},[a("template",{slot:"page"})],2)],1)])])]),t._v(" "),a("modal-form-category",{attrs:{category:t.category},on:{"save-success":t.loadItems,"edit-success":t.editCategorySucces}})],1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-6"},[a("h1",[t._v("Categorías")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12"},[t._v("\n\t\t\t\t\t\t\t\t\t\tBuscar: \n\t\t\t\t\t\t\t\t\t")])])}],n=(a("fb6a"),a("a434"),a("5530")),o=a("2f62"),s=a("dc61"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"modal-form-category",attrs:{"no-close-on-backdrop":"",id:"modal-form-category",title:"Nuevo/Editar Categoría","modal-class":"modal-right","hide-footer":""}},[a("b-tabs",{attrs:{pills:"",card:"",align:"center"}},[t._l(t.category,(function(e,i){return a("b-tab",{key:i,attrs:{title:e.iso_code}},[a("div",{staticClass:"form-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Nombre (*)")]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"cat.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese el nombre de la categoría",name:"name",state:!0},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fa fa-tags"})])])])])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Descripción (*)")]),t._v(" "),a("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:1==t.processing},on:{click:function(a){return t.traducir(e)}}},[t.processing?t._e():[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tTraducir\n\t\t\t\t\t\t\t\t\t\t\t\t")]],2),t._v(" "),a("div",{staticClass:"input-group mb-3"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"cat.text"}],staticClass:"form-control",attrs:{name:"text"},domProps:{value:e.text},on:{input:[function(a){a.target.composing||t.$set(e,"text",a.target.value)},function(e){t.formError=!1}]}})])],1)]),t._v(" "),"update"!==t.category.actionForm?a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Status FAQ(*)")]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.active,expression:"cat.active"}],staticClass:"form-check-input",attrs:{id:"is_active_1"+e.iso_code,type:"radio",name:"is_active"+e.iso_code},domProps:{value:1,checked:t._q(e.active,1)},on:{change:function(a){return t.$set(e,"active",1)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_1"}},[t._v("Activo")])]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.active,expression:"cat.active"}],staticClass:"form-check-input",attrs:{id:"is_active_2"+e.iso_code,type:"radio",name:"is_active"+e.iso_code},domProps:{value:0,checked:t._q(e.active,0)},on:{change:function(a){return t.$set(e,"active",0)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_2"}},[t._v("Inactivo")])])])]):t._e(),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Status idioma(*)")]),t._v(" "),[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.active_lang,expression:"cat.active_lang"}],staticClass:"form-check-input",attrs:{id:"is_active_lang_1"+e.iso_code,type:"radio",name:"is_active_lang"+e.iso_code},domProps:{value:1,checked:t._q(e.active_lang,1)},on:{change:function(a){return t.$set(e,"active_lang",1)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_lang_1"}},[t._v("Activo")])]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.active_lang,expression:"cat.active_lang"}],staticClass:"form-check-input",attrs:{id:"is_active_lang_2"+e.iso_code,type:"radio",name:"is_active_lang"+e.iso_code},domProps:{value:0,checked:t._q(e.active_lang,0)},on:{change:function(a){return t.$set(e,"active_lang",0)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_lang_2"}},[t._v("Inactivo")])])]],2)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[a("p",{staticClass:"mb-0"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tTodos los campos con (*) deben ser completados\n\t\t\t\t\t\t\t\t\t\t\t")])])])])]),t._v(" "),a("hr"),t._v(" "),"update"===t.category.actionForm?a("div",{attrs:{align:"right"}},[a("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(e){return t.hideModal("modal-form-category")}}},[t._v("Cancelar")]),t._v(" "),a("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:1==t.processing},on:{click:function(a){return t.cambiar_lang(e)}}},[t.processing?t._e():[t._v("\n\t\t\t\t\t\t\t\t\t\tEditar\n\t\t\t\t\t\t\t\t\t")],t._v(" "),t.processing?[a("i",{staticClass:"fa fa-spinner fa-spin"})]:t._e()],2)],1):t._e(),t._v(" "),"update"!==t.category.actionForm?a("div",{attrs:{align:"right"}},[a("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(e){return t.hideModal("modal-form-category")}}},[t._v("Cancelar")]),t._v(" "),a("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:1==t.processing},on:{click:function(e){return t.saveItem()}}},[t.processing?t._e():[t._v("\n\t\t\t\t\t\t\t\t\t\tGuardar\n\t\t\t\t\t\t\t\t\t")],t._v(" "),t.processing?[a("i",{staticClass:"fa fa-spinner fa-spin"})]:t._e()],2)],1):t._e()])}))],2)],1)},l=[],d=(a("b0c0"),a("d0d8")),u={name:"ModalFormCategory",props:["category"],components:{},data:function(){return{formError:!1,trad:{},idiomas:["ES","EN","FR","DE","IT"],idiomas_id:[1,4,5,6,7]}},methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])(["saveData","updateData","traducirTodo"])),{},{hideModal:function(t){this.$refs[t].hide()},saveItem:function(){var t=this;if(this.category[0].pev_lang_id="1","update"==this.category.actionForm)this.updateData({url:"/faq_category_lang/"+this.category[0].id,formData:this.category[0]}).then((function(e){t.hideModal("modal-form-category"),t.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"}),t.$emit("edit-success",e.data.item)})).catch((function(e){if(console.log(e),"undefined"!=typeof e.response){var a=Object(d["a"])(e.response.data.errors);t.$Toast.fire({icon:"error",html:a})}else t.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}));else{for(var e=this.category[0],a={text:[],name:[],iso_code:"",pev_lang_id:""},i=0;i<this.category.length;i++)this.category[i].text&&this.category[i].name&&(a.text.push(this.category[i].text),a.name.push(this.category[i].name),a.pev_lang_id||(a.pev_lang_id=this.idiomas_id[i],a.iso_code=this.idiomas[i]));e.text=a.text,e.name=a.name,e.pev_lang_id=a.pev_lang_id,e.iso_code=a.iso_code,console.log(e),this.saveData({url:"/faq_category_lang",formData:e}).then((function(e){t.hideModal("modal-form-category"),t.$Toast.fire({icon:"success",title:"¡Guardado con éxito!"}),t.$emit("save-success",e.data.item)})).catch((function(e){if(console.log(e),"undefined"!=typeof e.response){var a=Object(d["a"])(e.response.data.errors);t.$Toast.fire({icon:"error",html:a})}else t.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))}},cambiarstatus_lang:function(t){var e=this,a={active_lang:""};t.reordenamiento=!1,console.log(t),1===t.active_lang?t.active_lang=0:t.active_lang=1,a.active_lang=t.active_lang,this.updateData({url:"/faq_category_lang/"+t.id,formData:a}).then((function(t){console.log(t),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(d["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},cambiar_lang:function(t){var e=this;console.log(t.id);for(var a=0;a<this.category.length;a++)this.updateData({url:"/faq_category_lang/"+this.category[a].id,formData:this.category[a]}).then((function(t){console.log(t),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(d["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},traducir:function(t){var e=this;this.trad={textos:[t.name,t.text],idioma_original:t.iso_code,idiomas_traducir:["ES","EN","FR","DE","IT"]},this.traducirTodo({url:"/traducir_multilang_multitext_google",formData:this.trad}).then((function(t){e.category[0].name=t.data.resp.traducciones[0].traducciones[0],e.category[0].text=t.data.resp.traducciones[0].traducciones[1],e.category[1].name=t.data.resp.traducciones[1].traducciones[0],e.category[1].text=t.data.resp.traducciones[1].traducciones[1],e.category[2].name=t.data.resp.traducciones[2].traducciones[0],e.category[2].text=t.data.resp.traducciones[2].traducciones[1],e.category[3].name=t.data.resp.traducciones[3].traducciones[0],e.category[3].text=t.data.resp.traducciones[3].traducciones[1],e.category[4].name=t.data.resp.traducciones[4].traducciones[0],e.category[4].text=t.data.resp.traducciones[4].traducciones[1],e.$Toast.fire({icon:"success",title:"¡Traducción lista!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(d["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))}}),computed:Object(n["a"])({},Object(o["c"])({processing:"processingData"}))},f=u,v=a("2877"),m=Object(v["a"])(f,c,l,!1,null,null,null),g=m.exports,p=a("9062"),h=a.n(p),_=(a("e40d"),{name:"CategoriesList",components:{"is-active":s["a"],"modal-form-category":g,Loading:h.a},data:function(){return{loginError:!1,categories:[],category:{},columns:[{label:"Nombre",field:"name"},{label:"Descripción",field:"text"},{label:"Status",field:"active"},{label:"",field:""}],offset:3,filter:"",current_page:1,shortBy:"name",total:"",perpage:10,idiomas:["ES","EN","FR","DE","IT"],edit:""}},methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])(["getAllWithPagination","deleteData","getData_idioma","updateData"])),{},{loadItems:function(){var t=this;this.categories=[];var e="/faq_category_lang",a={url:e};this.getData_idioma(a).then((function(e){for(var a=0;a<e.data.data.length;a++)1==e.data.data[a].pev_lang_id&&t.categories.push(e.data.data[a]);t.total=t.categories.length})).catch((function(t){console.log(t)}))},cambiarstatus:function(t){var e=this;t.reordenamiento=!1,console.log(t),console.log(t),1===t.active?t.active=0:t.active=1,this.updateData({url:"/faq_category/"+t.pev_faq_category_id,formData:t}).then((function(t){console.log(t),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(d["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},cambiarstatus_lang:function(t){var e,a=this;t.reordenamiento=!1,1===t.active?e.active=0:e.active=1,this.updateData({url:"/faq_category/"+t.id,formData:e}).then((function(t){console.log(t),a.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var e=Object(d["a"])(t.response.data.errors);a.$Toast.fire({icon:"error",html:e})}else a.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},loadItemsEdit:function(t){var e=this;this.edit;var a="/faq_category/"+t,i={url:a};this.getAllWithPagination(i).then((function(t){e.edit=t.data.data.faq_category_lang,e.load(e.edit)})).catch((function(t){console.log(t)}))},addNew:function(){this.category=[{iso_code:this.idiomas[0],name:"",active:1,active_lang:0,actionForm:"save"},{iso_code:this.idiomas[1],name:"",active:1,active_lang:0,actionForm:"save"},{iso_code:this.idiomas[2],name:"",active:1,active_lang:0,actionForm:"save"},{iso_code:this.idiomas[3],name:"",active:1,active_lang:0,actionForm:"save"},{iso_code:this.idiomas[4],name:"",active:1,active_lang:0,actionForm:"save"}]},load:function(t){this.category=[t[0],t[1],t[2],t[3],t[4]],this.category.actionForm="update"},deleteItem:function(t){var e=this,a=this;this.$swal.fire({title:"¿Está seguro de eliminar la categoría?",text:"Se eliminará la categoría seleccionada.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!"}).then((function(i){i.value&&e.deleteData({url:"/faq_category/"+t.pev_faq_category_id}).then((function(){a.$Toast.fire({icon:"success",title:"¡Eliminado con éxito!"}),a.loadItems()})).catch((function(t){a.processing=!1,console.log(t)}))}))},editCategorySucces:function(t){this.addNew();for(var e=0;e<this.categories.length;e++)if(this.categories[e].id==t.id)return this.categories.splice(e,1),this.categories.push(t)},itemsForList:function(){return this.categories.slice((this.current_page-1)*this.perpage,this.current_page*this.perpage)}}),mounted:function(){this.loadItems()},computed:Object(n["a"])({},Object(o["c"])({processing:"processingData",pagination:"pagination"}))}),b=_,y=Object(v["a"])(b,i,r,!1,null,null,null);e["default"]=y.exports},"408a":function(t,e,a){var i=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"44e7":function(t,e,a){var i=a("861d"),r=a("c6b6"),n=a("b622"),o=n("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}},9062:function(t,e,a){!function(e,a){t.exports=a()}("undefined"!=typeof self&&self,(function(){return function(t){var e={};function a(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(i,r,function(e){return t[e]}.bind(null,r));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}([function(t,e,a){},function(t,e,a){"use strict";a.r(e);var i="undefined"!=typeof window?window.HTMLElement:Object,r={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function n(t,e,a,i,r,n,o,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=a,l._compiled=!0),i&&(l.functional=!0),n&&(l._scopeId="data-v-"+n),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}var o=n({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,s=n({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,c=n({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=n({name:"vue-loading",mixins:[r],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,i],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:o,Dots:s,Bars:c},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transition}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[a("div",{staticClass:"vld-background",style:{background:t.backgroundColor,opacity:t.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),a("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[a(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n={programmatic:!0},o=Object.assign({},e,i,n),s=new(t.extend(l))({el:document.createElement("div"),propsData:o}),c=Object.assign({},a,r);return Object.keys(c).map((function(t){s.$slots[t]=c[t]})),s}}};a(0),l.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=d(t,e,a);t.$loading=i,t.prototype.$loading=i},e.default=l}]).default}))},a15b:function(t,e,a){"use strict";var i=a("23e7"),r=a("44ad"),n=a("fc6a"),o=a("a640"),s=[].join,c=r!=Object,l=o("join",",");i({target:"Array",proto:!0,forced:c||!l},{join:function(t){return s.call(n(this),void 0===t?",":t)}})},a434:function(t,e,a){"use strict";var i=a("23e7"),r=a("23cb"),n=a("a691"),o=a("50c4"),s=a("7b0b"),c=a("65f0"),l=a("8418"),d=a("1dde"),u=a("ae40"),f=d("splice"),v=u("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,g=Math.min,p=9007199254740991,h="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!v},{splice:function(t,e){var a,i,d,u,f,v,_=s(this),b=o(_.length),y=r(t,b),C=arguments.length;if(0===C?a=i=0:1===C?(a=0,i=b-y):(a=C-2,i=g(m(n(e),0),b-y)),b+a-i>p)throw TypeError(h);for(d=c(_,i),u=0;u<i;u++)f=y+u,f in _&&l(d,u,_[f]);if(d.length=i,a<i){for(u=y;u<b-i;u++)f=u+i,v=u+a,f in _?_[v]=_[f]:delete _[v];for(u=b;u>b-i+a;u--)delete _[u-1]}else if(a>i)for(u=b-i;u>y;u--)f=u+i-1,v=u+a-1,f in _?_[v]=_[f]:delete _[v];for(u=0;u<a;u++)_[u+y]=arguments[u+2];return _.length=b-i+a,d}})},b680:function(t,e,a){"use strict";var i=a("23e7"),r=a("a691"),n=a("408a"),o=a("1148"),s=a("d039"),c=1..toFixed,l=Math.floor,d=function(t,e,a){return 0===e?a:e%2===1?d(t,e-1,a*t):d(t*t,e/2,a)},u=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},f=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));i({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,a,i,s,c=n(this),f=r(t),v=[0,0,0,0,0,0],m="",g="0",p=function(t,e){var a=-1,i=e;while(++a<6)i+=t*v[a],v[a]=i%1e7,i=l(i/1e7)},h=function(t){var e=6,a=0;while(--e>=0)a+=v[e],v[e]=l(a/t),a=a%t*1e7},_=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==v[t]){var a=String(v[t]);e=""===e?a:e+o.call("0",7-a.length)+a}return e};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(m="-",c=-c),c>1e-21)if(e=u(c*d(2,69,1))-69,a=e<0?c*d(2,-e,1):c/d(2,e,1),a*=4503599627370496,e=52-e,e>0){p(0,a),i=f;while(i>=7)p(1e7,0),i-=7;p(d(10,i,1),0),i=e-1;while(i>=23)h(1<<23),i-=23;h(1<<i),p(1,1),h(2),g=_()}else p(0,a),p(1<<-e,0),g=_()+o.call("0",f);return f>0?(s=g.length,g=m+(s<=f?"0."+o.call("0",f-s)+g:g.slice(0,s-f)+"."+g.slice(s-f))):g=m+g,g}})},c975:function(t,e,a){"use strict";var i=a("23e7"),r=a("4d64").indexOf,n=a("a640"),o=a("ae40"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,l=n("indexOf"),d=o("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!l||!d},{indexOf:function(t){return c?s.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},d0d8:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("c975"),a("a15b"),a("d81d"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("1276");var i=a("1157"),r=a.n(i);window.$=window.jQuery=r.a;var n=function(t){console.log(t);for(var e="",a=r.a.map(t,(function(t){var e="";return r.a.map(t,(function(t){e=t})),[e]})),i=0;i<a.length;i++)e+="<b>"+(i+1)+". "+a[i]+"</b><br/>";return e}},d81d:function(t,e,a){"use strict";var i=a("23e7"),r=a("b727").map,n=a("1dde"),o=a("ae40"),s=n("map"),c=o("map");i({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},dc61:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[1==t.is_active?a("span",{staticClass:"badge badge-success badge-pill"},[t._v("ACTIVO")]):a("span",{staticClass:"badge badge-warning badge-pill"},[t._v("INACTIVO")])])},r=[],n={name:"StatusItem",props:["is_active"]},o=n,s=a("2877"),c=Object(s["a"])(o,i,r,!1,null,null,null);e["a"]=c.exports},e40d:function(t,e,a){},fb6a:function(t,e,a){"use strict";var i=a("23e7"),r=a("861d"),n=a("e8b5"),o=a("23cb"),s=a("50c4"),c=a("fc6a"),l=a("8418"),d=a("b622"),u=a("1dde"),f=a("ae40"),v=u("slice"),m=f("slice",{ACCESSORS:!0,0:0,1:2}),g=d("species"),p=[].slice,h=Math.max;i({target:"Array",proto:!0,forced:!v||!m},{slice:function(t,e){var a,i,d,u=c(this),f=s(u.length),v=o(t,f),m=o(void 0===e?f:e,f);if(n(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?r(a)&&(a=a[g],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return p.call(u,v,m);for(i=new(void 0===a?Array:a)(h(m-v,0)),d=0;v<m;v++,d++)v in u&&l(i,d,u[v]);return i.length=d,i}})}}]);