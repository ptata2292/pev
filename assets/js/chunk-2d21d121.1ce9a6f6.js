(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d121"],{d076:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"content-header"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row mb-2"},[t._m(0),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("ol",{staticClass:"breadcrumb float-sm-right"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item active"},[a("router-link",{attrs:{to:{name:"productos-categorias"}}},[t._v("Productos")])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item active"},[t._v("Categorias")])])])])])]),t._v(" "),a("loading",{attrs:{active:t.processing,"can-cancel":!1,color:"#007bff"},on:{"update:active":function(e){t.processing=e}}}),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[t._v("Listados de Categorias")]),t._v(" "),a("div",{staticClass:"card-tools"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-form-tag",modifiers:{"modal-form-tag":!0}}],ref:"botton-new",staticClass:"btn btn-primary mr-1 mb-1",attrs:{variant:"primary",size:"sm"},on:{click:function(e){return t.addNew()}}},[a("i",{staticClass:"fa fa-plus-square"}),t._v(" Agregar")])],1)]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-9"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"form-control",attrs:{type:"text",name:"filter",placeholder:"Escriba para Buscar los resultados"},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}})])])])]),t._v(" "),a("b-table",{attrs:{items:t.tags,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,stacked:"md","show-empty":"",small:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(name)",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(t._f("truncate")(e.item.name,30,"..."))+"\n\t\t\t\t\t")]}},{key:"cell(text)",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(t._f("truncate")(e.item.text,50,"..."))+"\n\t\t\t\t\t")]}},{key:"cell(active)",fn:function(e){return[a("a",{attrs:{href:"#"},on:{click:function(a){return t.cambiarstatus(e.item)}}},[a("is-active",{attrs:{is_active:e.item.active}},[t._v(t._s(e.item.active))])],1)]}},{key:"cell(act)",fn:function(e){return[a("b-button",{ref:"botton-delete",staticClass:"mr-1 mb-1",attrs:{variant:"outline-danger",size:"sm"},on:{click:function(a){return t.deleteItem(e.item.pev_product_category_id)}}},[a("i",{staticClass:"fa fa-trash"})])]}}])})],1),t._v(" "),a("div",{staticClass:"card-footer"},[a("b-row",[a("b-col",{attrs:{sm:"3",md:"3"}}),t._v(" "),a("b-col",{attrs:{sm:"6",md:"6","align-self":"center"}},[a("b-pagination",{staticClass:"my-0 text-center",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm","align-self":"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),a("b-col",{attrs:{sm:"3",md:"3"}})],1)],1)]),t._v(" "),a("modal-form-tag",{attrs:{tag:t.tag},on:{"save-success":t.loadItems,"edit-success":t.editItemSucces}})],1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-6"},[a("h1",[t._v("Categorias")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12"},[t._v("\n\t\t\t\t\t\t\t\t\t\tBuscar: \n\t\t\t\t\t\t\t\t\t")])])}],s=(a("a434"),a("5530")),r=a("2f62"),n=a("dc61"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"modal-form-tag",attrs:{"no-close-on-backdrop":"",id:"modal-form-tag",size:"xl",title:"Nuevo/Editar Categoria","modal-class":"modal-right","hide-footer":""}},[a("b-tabs",{attrs:{pills:"",card:"",align:"center"}},[t._l(t.tag,(function(e,i){return a("b-tab",{key:i,attrs:{title:e.iso_code}},[a("div",{staticClass:"form-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Nombre (*)")]),t._v(" "),a("div",{staticClass:"input-group mb-3"},["update"!==t.tag.actionForm?a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"ta.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese el nombre",name:"name"},domProps:{value:e.name},on:{keypress:function(e){return t.armar_url(i,1)},input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"ta.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese el nombre",name:"name"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fa fa-tags"})])])])])]),t._v(" "),a("b-col",{attrs:{sm:"12",md:"12",lg:"12",xl:"12"}},[a("b-form-group",[a("label",[t._v("Texto (*)")]),t._v(" "),a("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:1==t.processing},on:{click:function(a){return t.traducir(e)}}},[t.processing?t._e():[t._v("\n\t\t\t\t\t\t\t\t\t\tTraducir\n\t\t\t\t\t\t\t\t\t")]],2)],1),t._v(" "),a("jodit-editor",{staticClass:"text-center",staticStyle:{height:"20px"},attrs:{config:t.configEditor,buttons:t.buttonsEditor},model:{value:e.text,callback:function(a){t.$set(e,"text",a)},expression:"ta.text"}})],1),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Url (*)")]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"ta.url"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Url",name:"name"},domProps:{value:e.url},on:{keypress:function(e){return t.armar_url(i,0)},input:function(a){a.target.composing||t.$set(e,"url",a.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fa fa-tags"})])])])])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Meta title (*)")]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.meta_title,expression:"ta.meta_title"}],staticClass:"form-control",attrs:{type:"text",name:"name"},domProps:{value:e.meta_title},on:{input:function(a){a.target.composing||t.$set(e,"meta_title",a.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"fa fa-tags"})])])])])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Meta Description (*)")]),t._v(" "),a("div",{staticClass:"input-group mb-3"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.meta_description,expression:"ta.meta_description"}],staticClass:"form-control",attrs:{name:"text"},domProps:{value:e.meta_description},on:{input:[function(a){a.target.composing||t.$set(e,"meta_description",a.target.value)},function(e){t.formError=!1}]}})])])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Noindex(*)")]),t._v(" "),[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.noindex,expression:"ta.noindex"}],staticClass:"form-check-input",attrs:{id:"is_active_1"+e.iso_code,type:"radio",name:"is_active_Noindex"+e.iso_code},domProps:{value:1,checked:t._q(e.noindex,1)},on:{change:function(a){return t.$set(e,"noindex",1)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_1"+e.iso_code}},[t._v("Activo")])]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.noindex,expression:"ta.noindex"}],staticClass:"form-check-input",attrs:{id:"is_active_2"+e.iso_code,type:"radio",name:"is_active_Noindex"+e.iso_code},domProps:{value:0,checked:t._q(e.noindex,0)},on:{change:function(a){return t.$set(e,"noindex",0)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_2"+e.iso_code}},[t._v("Inactivo")])])]],2)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Status idioma(*)")]),t._v(" "),[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.active_lang,expression:"ta.active_lang"}],staticClass:"form-check-input",attrs:{id:"is_active_lang_1"+e.iso_code,type:"radio",name:"is_active_lang"+e.iso_code},domProps:{value:1,checked:t._q(e.active_lang,1)},on:{change:function(a){return t.$set(e,"active_lang",1)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_lang_1"+e.iso_code}},[t._v("Activo")])]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.active_lang,expression:"ta.active_lang"}],staticClass:"form-check-input",attrs:{id:"is_active_lang_2"+e.iso_code,type:"radio",name:"is_active_lang"+e.iso_code},domProps:{value:0,checked:t._q(e.active_lang,0)},on:{change:function(a){return t.$set(e,"active_lang",0)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_active_lang_2"+e.iso_code}},[t._v("Inactivo")])])]],2)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-4 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Importante (*)")]),t._v(" "),[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.importan,expression:"ta.importan"}],staticClass:"form-check-input",attrs:{id:"is_importante_1"+e.iso_code,type:"radio",name:"is_importante"+e.iso_code},domProps:{value:1,checked:t._q(e.importan,1)},on:{change:function(a){return t.$set(e,"importan",1)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_importante_1"+e.iso_code}},[t._v("Activo")])]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.importan,expression:"ta.importan"}],staticClass:"form-check-input",attrs:{id:"is_importante_2"+e.iso_code,type:"radio",name:"is_importante"+e.iso_code},domProps:{value:0,checked:t._q(e.importan,0)},on:{change:function(a){return t.$set(e,"importan",0)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_importante_2"+e.iso_code}},[t._v("Inactivo")])])]],2)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12"},[a("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[a("p",{staticClass:"mb-0"},[t._v("\n\t\t\t\t\t\t\t\t\tTodos los campos con (*) deben ser completados\n\t\t\t\t\t\t\t\t")])])])],1)]),t._v(" "),a("hr"),t._v(" "),"update"===t.tag.actionForm?a("div",{attrs:{align:"right"}},[a("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(e){return t.hideModal("modal-form-tag")}}},[t._v("Cancelar")]),t._v(" "),a("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:1==t.processing},on:{click:function(a){return t.cambiar_lang(e)}}},[t.processing?t._e():[t._v("\n\t\t\t\t\t\t\tActualizar\n\t\t\t\t\t\t")],t._v(" "),t.processing?[a("i",{staticClass:"fa fa-spinner fa-spin"})]:t._e()],2)],1):t._e(),t._v(" "),"update"!==t.tag.actionForm?a("div",{attrs:{align:"right"}},[a("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(e){return t.hideModal("modal-form-tag")}}},[t._v("Cancelar")]),t._v(" "),a("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:1==t.processing},on:{click:function(e){return t.saveItem()}}},[t.processing?t._e():[t._v("\n\t\t\t\t\t\t\tGuardar\n\t\t\t\t\t\t")],t._v(" "),t.processing?[a("i",{staticClass:"fa fa-spinner fa-spin"})]:t._e()],2)],1):t._e()])}))],2)],1)},l=[],d=(a("b0c0"),a("ac1f"),a("5319"),a("425f"),a("69ae")),u=a("1dce"),m=a("d0d8"),p=a("b5ae"),g=p.required,v=p.maxLength,_={name:"ModalFormTag",props:["tag"],components:{JoditEditor:d["a"]},data:function(){return{formError:!1,dropzoneOptions:{url:"https://img.semillasdulces.com/api/v1/image_upload",thumbnailWidth:200,maxFilesize:2,acceptedFiles:"image/png, image/jpg, image/jpeg, image/svg, image/webp",dictDefaultMessage:"<i class='fas fa-upload'></i> Seleccionar Imagén principal",addRemoveLinks:!0,maxFiles:1,paramName:"upload",nombre_imagen:"prueba",path:"prueba/productos/tasu",width:800,height:800,dictFileTooBig:"La imagén seleccionada pesa ({{filesize}}MiB). el max. permitido es de: {{maxFilesize}}MiB.",dictInvalidFileType:"Solo se acepta imagenes PNG, JPEG, JPG, SVG",dictRemoveFile:"Eliminar Imagén"},configEditor:{minHeight:"250px",language:"es",uploader:{insertImageAsBase64URI:!0}},trad:{},idiomas:["ES","EN","FR","DE","IT"],idiomas_id:[1,4,5,6,7],buttonsEditor:["source","|","bold","strikethrough","underline","italic","eraser","|","superscript","subscript","|","ul","ol","|","outdent","indent","|","font","fontsize","brush","paragraph","|","image","video","table","link","|","align","undo","redo","selectall","cut","copy","paste","copyformat","|","hr","print","preview","find","|","fullsize"]}},mixins:[u["validationMixin"]],validations:{tag:{name:{required:g,maxLength:v(25)}}},methods:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["saveData","updateData","traducirTodo"])),{},{hideModal:function(t){this.$refs[t].hide()},mainImageAddSuccess:function(t,e){console.log(e.data);for(var a=0;a<this.tag.length;a++)this.tag[a].image=e.data.url},sendingEvent:function(t,e,a){a.append("path","prueba/productos/tasu"),a.append("width",50),a.append("height",50),a.append("nombre_imagen",this.tag[0].name)},mainImageError:function(){return this.$Toast.fire({icon:"error",html:"Error al subir imagén del producto."})},saveItem:function(){var t=this;if(this.formError=!1,"update"==this.tag.actionForm)this.updateData({url:"/product_category_lang/"+this.tag.id,formData:this.tag}).then((function(e){t.hideModal("modal-form-tag"),t.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"}),t.$emit("edit-success",e.data.item)})).catch((function(e){if(console.log(e),"undefined"!=typeof e.response){var a=Object(m["a"])(e.response.data.errors);t.$Toast.fire({icon:"error",html:a})}else t.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}));else{var e=this.tag[0];console.log(e),this.saveData({url:"/product_category_lang",formData:e}).then((function(e){t.hideModal("modal-form-tag"),t.$Toast.fire({icon:"success",title:"¡Guardado con éxito!"}),t.$emit("save-success",e.data.item)})).catch((function(e){if(console.log(e),"undefined"!=typeof e.response){var a=Object(m["a"])(e.response.data.errors);t.$Toast.fire({icon:"error",html:a})}else t.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))}},cambiarstatus_lang:function(t){var e=this,a={active_lang:""};t.reordenamiento=!1,console.log(t),1===t.active_lang?t.active_lang=0:t.active_lang=1,a.active_lang=t.active_lang,this.updateData({url:"/product_category_lang/"+t.id,formData:a}).then((function(t){console.log(t),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(m["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},cambiarstatus_index:function(t){var e=this,a={noindex:""};t.reordenamiento=!1,console.log(t),1===t.noindex?t.noindex=0:t.noindex=1,a.noindex=t.noindex,this.updateData({url:"/product_category_lang/"+t.id,formData:a}).then((function(t){console.log(t),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(m["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},cambiar_lang:function(t){var e=this;console.log(t.id);for(var a=0;a<this.tag.length;a++)this.updateData({url:"/product_category_lang/"+this.tag[a].id,formData:this.tag[a]}).then((function(t){e.hideModal("modal-form-tag"),console.log(t),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(m["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},traducir:function(t){var e=this;this.trad={textos:[t.name,t.text,t.meta_title,t.meta_description],idioma_original:t.iso_code,idiomas_traducir:["ES","EN","FR","DE","IT"]},this.traducirTodo({url:"/traducir_multilang_multitext_google",formData:this.trad}).then((function(t){e.tag[0].name=t.data.resp.traducciones[0].traducciones[0],e.tag[0].text=t.data.resp.traducciones[0].traducciones[1],e.tag[0].meta_title=t.data.resp.traducciones[0].traducciones[2],e.tag[0].meta_description=t.data.resp.traducciones[0].traducciones[3],e.tag[1].name=t.data.resp.traducciones[1].traducciones[0],e.tag[1].text=t.data.resp.traducciones[1].traducciones[1],e.tag[1].meta_title=t.data.resp.traducciones[1].traducciones[2],e.tag[1].meta_description=t.data.resp.traducciones[1].traducciones[3],e.tag[2].name=t.data.resp.traducciones[2].traducciones[0],e.tag[2].text=t.data.resp.traducciones[2].traducciones[1],e.tag[2].meta_title=t.data.resp.traducciones[2].traducciones[2],e.tag[2].meta_description=t.data.resp.traducciones[2].traducciones[3],e.tag[3].name=t.data.resp.traducciones[3].traducciones[0],e.tag[3].text=t.data.resp.traducciones[3].traducciones[1],e.tag[3].meta_title=t.data.resp.traducciones[3].traducciones[2],e.tag[3].meta_description=t.data.resp.traducciones[3].traducciones[3],e.tag[4].name=t.data.resp.traducciones[4].traducciones[0],e.tag[4].text=t.data.resp.traducciones[4].traducciones[1],e.tag[4].meta_title=t.data.resp.traducciones[4].traducciones[2],e.tag[4].meta_description=t.data.resp.traducciones[4].traducciones[3],e.$Toast.fire({icon:"success",title:"¡Traducción lista!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(m["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},armar_url:function(t,e){this.tag[t].url=1===e?this.tag[t].name.replace(/[^-A-Za-z0-9]+/g,"-").toLowerCase():this.tag[t].url.replace(/[^-A-Za-z0-9]+/g,"-").toLowerCase()}}),computed:Object(s["a"])({},Object(r["c"])({processing:"processingData"}))},f=_,h=a("2877"),b=Object(h["a"])(f,c,l,!1,null,null,null),x=b.exports,C=a("9062"),y=a.n(C),k=(a("e40d"),{name:"TagsList",components:{"is-active":n["a"],"modal-form-tag":x,Loading:y.a},data:function(){return{loginError:!1,tags:[],tag:{},columns:[{label:"Nombre",field:"name"},{label:"Descripción",field:"text"},{label:"Status",field:"active_lang"},{label:"",field:""}],offset:3,current_page:1,shortBy:"name",total:"",idiomas:["ES","EN","FR","DE","IT"],edit:"",fields:[{label:"Nombre",key:"name"},{label:"Status",key:"active"},{label:"Acciones   ",key:"act"}],totalRows:1,currentPage:1,perPage:30,sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[]}},methods:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["getAllWithPagination","deleteData","getData_idioma","updateData"])),{},{onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},loadItems:function(){var t=this;this.tags=[];var e="/product_category_lang",a={url:e};this.getData_idioma(a).then((function(e){for(var a=0;a<e.data.data.length;a++)1==e.data.data[a].pev_lang_id&&t.tags.push(e.data.data[a]);t.total=t.tags.length})).catch((function(t){console.log(t)}))},cambiarstatus:function(t){var e=this;t.reordenamiento=!1,console.log(t),console.log(t),1===t.active?t.active=0:t.active=1,this.updateData({url:"/product_category/"+t.pev_product_category_id,formData:t}).then((function(t){console.log(t.data.data),e.$Toast.fire({icon:"success",title:"¡Actualizado con éxito!"})})).catch((function(t){if(console.log(t),"undefined"!=typeof t.response){var a=Object(m["a"])(t.response.data.errors);e.$Toast.fire({icon:"error",html:a})}else e.$Toast.fire({icon:"error",title:"Ah Ocurrido un error inesperado, verifique su conexión a internet y vuelva a intentarlo."})}))},loadItemsEdit:function(t){var e=this;this.edit;var a="/product_category/"+t,i={url:a};this.getAllWithPagination(i).then((function(t){e.edit=t.data.data.blog_post_lang,e.load(e.edit)})).catch((function(t){console.log(t)}))},addNew:function(){this.tag=[{iso_code:this.idiomas[0],pev_blog_category_id:1,name:"",text:"",text_short:"prueba",active_lang:0,active:1,noindex:0,importan:1,actionForm:"save",pev_product_category_id:0,pev_lang_id:1,image:"img/poraqui/img.jp"},{iso_code:this.idiomas[1],pev_blog_category_id:1,name:"",text:"",text_short:"prueba",active_lang:0,active:1,noindex:0,importan:1,actionForm:"save",pev_product_category_id:0,pev_lang_id:1,image:"img/poraqui/img.jp"},{iso_code:this.idiomas[2],pev_blog_category_id:1,name:"",text:"",text_short:"prueba",active_lang:0,active:1,noindex:0,importan:1,actionForm:"save",pev_product_category_id:0,pev_lang_id:1,image:"img/poraqui/img.jp"},{iso_code:this.idiomas[3],pev_blog_category_id:1,name:"",text:"",text_short:"prueba",active_lang:0,active:1,noindex:0,importan:1,actionForm:"save",pev_product_category_id:0,pev_lang_id:1,image:"img/poraqui/img.jp"},{iso_code:this.idiomas[4],pev_blog_category_id:1,name:"",text:"",text_short:"prueba",active_lang:0,active:1,noindex:0,importan:1,actionForm:"save",pev_product_category_id:0,pev_lang_id:1,image:"img/poraqui/img.jp"}]},load:function(t){this.tag=[t[0],t[1],t[2],t[3],t[4]],console.log(this.tag),this.tag.actionForm="update"},deleteItem:function(t){var e=this,a=this;this.$swal.fire({title:"¿Está seguro de eliminar el post?",text:"Se eliminará el post seleccionada.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!"}).then((function(i){i.value&&e.deleteData({url:"/product_category/"+t}).then((function(){a.$Toast.fire({icon:"success",title:"¡Eliminado con éxito!"}),a.loadItems()})).catch((function(t){a.processing=!1,console.log(t)}))}))},editItemSucces:function(t){this.addNew();for(var e=0;e<this.tags.length;e++)if(this.tags[e].id==t.id)return this.tags.splice(e,1),this.tags.push(t)}}),mounted:function(){this.loadItems()},computed:Object(s["a"])({},Object(r["c"])({processing:"processingData",pagination:"pagination"}))}),w=k,$=Object(h["a"])(w,i,o,!1,null,null,null);e["default"]=$.exports}}]);