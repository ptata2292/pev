(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9ce5064"],{"98cf":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"content-header"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row mb-2"},[t._m(0),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("ol",{staticClass:"breadcrumb float-sm-right"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item active"},[t._v("Blog")])])])])])]),t._v(" "),a("loading",{attrs:{active:t.processing,"can-cancel":!1,color:"#007bff"},on:{"update:active":function(e){t.processing=e}}}),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[t._v("Listados de Categorias")]),t._v(" "),a("div",{staticClass:"card-tools"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-form-category",modifiers:{"modal-form-category":!0}}],ref:"botton-new",staticClass:"btn btn-primary mr-1 mb-1",attrs:{variant:"primary",size:"sm"},on:{click:function(e){return t.addNew()}}},[a("i",{staticClass:"fa fa-plus-square"}),t._v(" Agregar")])],1)]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-9"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"form-control",attrs:{type:"text",name:"filter",placeholder:"Escriba para buscar los resultados"},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"row table-responsive mt-1"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("datatable",{ref:"datatable_list",staticClass:"table table-hover table-hover-animation mb-0",attrs:{columns:t.columns,data:t.categories,filter:t.filter},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[0===i.deleted?a("tr",[a("td",{staticClass:"text-center"},[t._v(t._s(i.name))]),t._v(" "),a("td",{staticClass:"text-center",domProps:{innerHTML:t._s(i.text)}}),t._v(" "),a("td",{staticClass:"text-center"},[a("a",{attrs:{href:"#"},on:{click:function(e){return t.cambiarstatus(i)}}},[a("is-active",{attrs:{is_active:i.active}})],1)]),t._v(" "),a("td",{staticClass:"text-right",staticStyle:{width:"10%","white-space":"nowrap"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-form-category",modifiers:{"modal-form-category":!0}}],ref:"botton-edit",staticClass:"mr-1 mb-1",attrs:{variant:"outline-warning",size:"sm"},on:{click:function(e){return t.loadItemsEdit(i.pev_blog_category_id)}}},[a("i",{staticClass:"fa fa-edit"})]),t._v(" "),a("b-button",{ref:"botton-delete",staticClass:"mr-1 mb-1",attrs:{variant:"outline-danger",size:"sm"},on:{click:function(e){return t.deleteItem(i)}}},[a("i",{staticClass:"fa fa-trash"})])],1)]):a("tr",{staticStyle:{"background-color":"#dbdbdb"}},[a("td",{staticClass:"text-center"},[t._v(t._s(i.name))]),t._v(" "),a("td",{staticClass:"text-center",domProps:{innerHTML:t._s(i.text)}}),t._v(" "),a("td",{staticClass:"text-center"}),t._v(" "),a("td",{staticClass:"text-right",staticStyle:{width:"10%","white-space":"nowrap"}})])]}}])})],1)])]),t._v(" "),a("div",{staticClass:"card-footer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("span",{staticClass:"text-muted text-small mr-1 mb-2"},[t._v("Mostrando "+t._s(t.pagination.from)+" a "+t._s(t.pagination.to)+" de "+t._s(t.pagination.total)+" registros")])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("b-pagination",{attrs:{"total-rows":t.total,"per-page":t.perpage,size:"sm",align:"right"},on:{input:function(e){return t.loadItems()}},model:{value:t.current_page,callback:function(e){t.current_page=e},expression:"current_page"}},[a("template",{slot:"page"})],2)],1)])])]),t._v(" "),a("modal-form-category",{attrs:{category:t.category},on:{"save-success":t.loadItems,"edit-success":t.editCategorySucces}})],1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-6"},[a("h1",[t._v("Categorías")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12"},[t._v("\n\t\t\t\t\t\t\t\t\t\tBuscar: \n\t\t\t\t\t\t\t\t\t")])])}],s=(a("fb6a"),a("a434"),a("5530")),r=a("2f62"),c=a("dc61"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"modal-form-category",attrs:{"no-close-on-backdrop":"",size:"xl",id:"modal-form-category",title:"Nuevo/Editar Categoria","modal-class":"modal-right"}},[a("b-tabs",{attrs:{pills:"",card:"",align:"center"}},[t._l(t.category,(function(e){return a("b-tab",{key:e.id,attrs:{title:e.iso_code}},[a("div",{staticClass:"form-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Nombre (*)")]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"cat.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese el nombre",name:"name"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fa fa-categorys"})])])])])]),t._v(" "),a("b-col",{attrs:{sm:"12",md:"12",lg:"12",xl:"12"}},[a("b-form-group",[a("label",[t._v("Texto (*)")]),t._v(" "),a("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:1==t.processing},on:{click:function(e){return t.traducir()}}},[t.processing?t._e():[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTraducir\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]],2)],1),t._v(" "),a("jodit-editor",{staticClass:"text-center",staticStyle:{height:"20px"},attrs:{config:t.configEditor,buttons:t.buttonsEditor},model:{value:e.text,callback:function(a){t.$set(e,"text",a)},expression:"cat.text"}})],1),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Url (*)")]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"cat.url"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Url",name:"name"},domProps:{value:e.url},on:{input:function(a){a.target.composing||t.$set(e,"url",a.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fa fa-categorys"})])])])])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Meta title (*)")]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.meta_title,expression:"cat.meta_title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Meta title ",name:"name"},domProps:{value:e.meta_title},on:{input:function(a){a.target.composing||t.$set(e,"meta_title",a.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fa fa-categorys"})])])])])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Meta Description (*)")]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.meta_description,expression:"cat.meta_description"}],staticClass:"form-control",attrs:{name:"text"},domProps:{value:e.meta_description},on:{input:function(a){a.target.composing||t.$set(e,"meta_description",a.target.value)}}})])])]),t._v(" "),"update"!==t.category.actionForm?a("div",{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Status Categoría(*)")]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.active,expression:"cat.active"}],staticClass:"form-check-input",attrs:{id:"is_active"+e.iso_code,type:"radio",name:"is_active"+e.iso_code},domProps:{value:1,checked:t._q(e.active,1)},on:{change:function(a){return t.$set(e,"active",1)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_1"}},[t._v("Activo")])]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.active,expression:"cat.active"}],staticClass:"form-check-input",attrs:{id:"is_active"+e.iso_code,type:"radio",name:"is_active"+e.iso_code},domProps:{value:0,checked:t._q(e.active,0)},on:{change:function(a){return t.$set(e,"active",0)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_2"}},[t._v("Inactivo")])])])]):t._e(),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Noindex(*)")]),t._v(" "),"update"!==t.category.actionForm?[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.noindex,expression:"cat.noindex"}],staticClass:"form-check-input",attrs:{id:"is_active_1"+e.iso_code,type:"radio",name:"is_active_Noindex"+e.iso_code},domProps:{value:1,checked:t._q(e.noindex,1)},on:{change:function(a){return t.$set(e,"noindex",1)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_1"}},[t._v("Activo")])]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.noindex,expression:"cat.noindex"}],staticClass:"form-check-input",attrs:{id:"is_active_2"+e.iso_code,type:"radio",name:"is_active_Noindex"+e.iso_code},domProps:{value:0,checked:t._q(e.noindex,0)},on:{change:function(a){return t.$set(e,"noindex",0)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_2"}},[t._v("Inactivo")])])]:a("a",{attrs:{href:"#"},on:{click:function(a){return t.cambiarstatus_index(e)}}},[a("is-active",{attrs:{is_active:e.noindex}})],1)],2)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Status idioma(*)")]),t._v(" "),"update"!==t.category.actionForm?[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.active_lang,expression:"cat.active_lang"}],staticClass:"form-check-input",attrs:{id:"is_active_lang_1"+e.iso_code,type:"radio",name:"is_active_lang"+e.iso_code},domProps:{value:1,checked:t._q(e.active_lang,1)},on:{change:function(a){return t.$set(e,"active_lang",1)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_lang_1"}},[t._v("Activo")])]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.active_lang,expression:"cat.active_lang"}],staticClass:"form-check-input",attrs:{id:"is_active_lang_2"+e.iso_code,type:"radio",name:"is_active_lang"+e.iso_code},domProps:{value:0,checked:t._q(e.active_lang,0)},on:{change:function(a){return t.$set(e,"active_lang",0)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_lang_2"}},[t._v("Inactivo")])])]:a("a",{attrs:{href:"#"},on:{click:function(a){return t.cambiarstatus_lang(e)}}},[a("is-active",{attrs:{is_active:e.active_lang}})],1)],2)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[a("h4",{staticClass:"alert-heading"},[t._v("IMPORTANTE: ")]),t._v(" "),a("p",{staticClass:"mb-0"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tTodos los campos con (*) deben ser completados\n\t\t\t\t\t\t\t\t\t\t")])])])],1)])])}))],2),t._v(" "),a("template",{slot:"modal-footer"},[a("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(e){return t.hideModal("modal-form-category")}}},[t._v("Cancelar")]),t._v(" "),a("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:1==t.processing},on:{click:function(e){return t.saveItem()}}},[t.processing?t._e():[t._v("\n\t\t\t\tGuardar\n\t\t\t")],t._v(" "),t.processing?[a("i",{staticClass:"fa fa-spinner fa-spin"})]:t._e()],2)],1)],2)},l=[],d=(a("b0c0"),a("425f"),a("69ae")),u=a("d0d8"),m={name:"ModalFormCategory",props:["category"],components:{JoditEditor:d["a"],"is-active":c["a"]},data:function(){return{formError:!1,configEditor:{minHeight:"230px",toolbarButtonSize:"small",language:"es",uploader:{insertImageAsBase64URI:!0}},trad:{},buttonsEditor:["source","|","bold","strikethrough","underline","italic","eraser","|","superscript","subscript","|","ul","ol","|","outdent","indent","|","font","fontsize","brush","paragraph","|","image","video","table","link","|","align","undo","redo","selectall","cut","copy","paste","copyformat","|","hr","print","preview","find","|","fullsize"]}},methods:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["saveData","updateData","traducirTodo"])),{},{hideModal:function(t){this.$refs[t].hide()},saveItem:function(){var t=this;this.formError=!1,"update"==this.category.actionForm?this.updateData({url:"/blog_category_lang/"+this.category[0].id,formData:this.category[0]}).then((function(e){t.hideModal("modal-form-category"),t.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"}),t.$emit("edit-success",e.data.item)})).catch((function(e){if(console.log(e),"undefined"!=typeof e.response){var a=Object(u["a"])(e.response.data.errors);t.$Toast.fire({icon:"error",html:a})}else t.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})})):(this.category[0].text=[this.category[0].text,this.category[1].text,this.category[2].text,this.category[3].text,this.category[4].text],this.category[0].name=[this.category[0].name,this.category[1].name,this.category[2].name,this.category[3].name,this.category[4].name],this.category[0].meta_title=[this.category[0].meta_title,this.category[1].meta_title,this.category[2].meta_title,this.category[3].meta_title,this.category[4].meta_title],this.category[0].meta_description=[this.category[0].meta_description,this.category[1].meta_description,this.category[2].meta_description,this.category[3].meta_description,this.category[4].meta_description],this.category[0].pev_lang_id=1,this.category[0].pev_blog_category_id=1,this.saveData({url:"/blog_category_lang",formData:this.category[0]}).then((function(e){t.hideModal("modal-form-category"),t.$Toast.fire({icon:"success",title:"¡Guardado con éxito!"}),t.$emit("save-success",e.data.item)})).catch((function(e){if(console.log(e),"undefined"!=typeof e.response){var a=Object(u["a"])(e.response.data.errors);t.$Toast.fire({icon:"error",html:a})}else t.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})})))},cambiarstatus_lang:function(t){var e=this,a={active_lang:""};t.reordenamiento=!1,console.log(t),1===t.active_lang?t.active_lang=0:t.active_lang=1,a.active_lang=t.active_lang,this.updateData({url:"/blog_category_lang/"+t.id,formData:a}).then((function(t){console.log(t),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(u["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},cambiarstatus_index:function(t){var e=this,a={noindex:""};t.reordenamiento=!1,console.log(t),1===t.noindex?t.noindex=0:t.noindex=1,a.noindex=t.noindex,this.updateData({url:"/blog_category_lang/"+t.id,formData:a}).then((function(t){console.log(t),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(u["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},traducir:function(){var t=this;this.trad={textos:[this.category[0].name,this.category[0].text,this.category[0].meta_title,this.category[0].meta_description],idioma_original:"ES",idiomas_traducir:["EN","FR","DE","IT"]},this.traducirTodo({url:"/traducir_multilang_multitext_google",formData:this.trad}).then((function(e){t.category[1].name=e.data.resp.traducciones[0].traducciones[0],t.category[1].text=e.data.resp.traducciones[0].traducciones[1],t.category[1].meta_title=e.data.resp.traducciones[0].traducciones[2],t.category[1].meta_description=e.data.resp.traducciones[0].traducciones[3],t.category[2].name=e.data.resp.traducciones[1].traducciones[0],t.category[2].text=e.data.resp.traducciones[1].traducciones[1],t.category[2].meta_title=e.data.resp.traducciones[1].traducciones[2],t.category[2].meta_description=e.data.resp.traducciones[1].traducciones[3],t.category[3].name=e.data.resp.traducciones[2].traducciones[0],t.category[3].text=e.data.resp.traducciones[2].traducciones[1],t.category[3].meta_title=e.data.resp.traducciones[2].traducciones[2],t.category[3].meta_description=e.data.resp.traducciones[2].traducciones[3],t.category[4].name=e.data.resp.traducciones[3].traducciones[0],t.category[4].text=e.data.resp.traducciones[3].traducciones[1],t.category[4].meta_title=e.data.resp.traducciones[3].traducciones[2],t.category[4].meta_description=e.data.resp.traducciones[3].traducciones[3],t.$Toast.fire({icon:"success",title:"¡Traducción lista!"})})).catch((function(e){if(console.log(e),"undefined"!=typeof e.response){var a=Object(u["a"])(e.response.data.errors);t.$Toast.fire({icon:"error",html:a})}else t.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))}}),computed:Object(s["a"])({},Object(r["c"])({processing:"processingData"}))},v=m,g=a("2877"),p=Object(g["a"])(v,n,l,!1,null,null,null),_=p.exports,f=a("9062"),h=a.n(f),b=(a("e40d"),{name:"CategoriesList",components:{"is-active":c["a"],"modal-form-category":_,Loading:h.a},data:function(){return{loginError:!1,categories:[],category:{},columns:[{label:"Nombre",field:"title"},{label:"Texto",field:"text"},{label:"Status",field:"active"},{label:"",field:""}],offset:3,filter:"",current_page:1,shortBy:"name",total:"",perpage:5,idiomas:["ES","EN","FR","DE","IT"],edit:""}},methods:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["getAllWithPagination","deleteData","getData_idioma","updateData"])),{},{loadItems:function(){var t=this;this.categories=[];var e="/blog_category_lang",a={url:e};this.getData_idioma(a).then((function(e){for(var a=0;a<e.data.data.length;a++)1==e.data.data[a].pev_lang_id&&t.categories.push(e.data.data[a]);t.total=t.categories.length})).catch((function(t){console.log(t)}))},cambiarstatus:function(t){var e=this;t.reordenamiento=!1,console.log(t),console.log(t),1===t.active?t.active=0:t.active=1,this.updateData({url:"/blog_category/"+t.pev_blog_category_id,formData:t}).then((function(t){console.log(t),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(u["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},cambiarstatus_lang:function(t){var e,a=this;t.reordenamiento=!1,1===t.active?e.active=0:e.active=1,this.updateData({url:"/blog_category/"+t.id,formData:e}).then((function(t){console.log(t),a.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var e=Object(u["a"])(t.response.data.errors);a.$Toast.fire({icon:"error",html:e})}else a.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},loadItemsEdit:function(t){var e=this;this.edit;var a="/blog_category/"+t,i={url:a};this.getAllWithPagination(i).then((function(t){e.edit=t.data.data.blog_category_lang,e.load(e.edit)})).catch((function(t){console.log(t)}))},addNew:function(){this.category[4]||(this.category=[{iso_code:this.idiomas[0],name:"",text:"",image:null,main_image:null,active:1,active_lang:0,noindex:0,actionForm:"save"},{iso_code:this.idiomas[1],name:"",text:"HOLAAAA",image:null,main_image:null,active:1,active_lang:0,noindex:0,actionForm:"save"},{iso_code:this.idiomas[2],name:"",text:"",image:null,main_image:null,active:1,active_lang:0,noindex:0,actionForm:"save"},{iso_code:this.idiomas[3],name:"",text:"",image:null,main_image:null,active:1,active_lang:0,noindex:0,actionForm:"save"},{iso_code:this.idiomas[4],name:"",text:"",image:null,main_image:null,active:1,active_lang:0,noindex:0,actionForm:"save"}])},load:function(t){this.category=[t[0],t[1],t[2],t[3],t[4]],console.log(this.category),this.category.actionForm="update"},deleteItem:function(t){var e=this,a=this;this.$swal.fire({title:"¿Está seguro de eliminar la categoría?",text:"Se eliminará la categoría seleccionada.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!"}).then((function(i){i.value&&e.deleteData({url:"/blog_category/"+t.pev_blog_category_id}).then((function(){a.$Toast.fire({icon:"success",title:"¡Eliminado con éxito!"}),a.loadItems()})).catch((function(t){a.processing=!1,console.log(t)}))}))},editCategorySucces:function(t){this.addNew();for(var e=0;e<this.categories.length;e++)if(this.categories[e].id==t.id)return this.categories.splice(e,1),this.categories.push(t)},itemsForList:function(){return this.categories.slice((this.current_page-1)*this.perpage,this.current_page*this.perpage)}}),mounted:function(){this.loadItems()},computed:Object(s["a"])({},Object(r["c"])({processing:"processingData",pagination:"pagination"}))}),y=b,C=Object(g["a"])(y,i,o,!1,null,null,null);e["default"]=C.exports},fb6a:function(t,e,a){"use strict";var i=a("23e7"),o=a("861d"),s=a("e8b5"),r=a("23cb"),c=a("50c4"),n=a("fc6a"),l=a("8418"),d=a("b622"),u=a("1dde"),m=a("ae40"),v=u("slice"),g=m("slice",{ACCESSORS:!0,0:0,1:2}),p=d("species"),_=[].slice,f=Math.max;i({target:"Array",proto:!0,forced:!v||!g},{slice:function(t,e){var a,i,d,u=n(this),m=c(u.length),v=r(t,m),g=r(void 0===e?m:e,m);if(s(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?o(a)&&(a=a[p],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return _.call(u,v,g);for(i=new(void 0===a?Array:a)(f(g-v,0)),d=0;v<g;v++,d++)v in u&&l(i,d,u[v]);return i.length=d,i}})}}]);