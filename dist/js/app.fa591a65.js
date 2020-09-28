(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],m=0,d=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("4de4"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("8c4f"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("app-header"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("transition",{attrs:{name:"slide",mode:"out-in"}},[a("router-view")],1)],1)])],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark mb-4"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("The Vue Store!")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("router-link",{staticClass:"navItem",attrs:{to:"/",activeClass:"active",tag:"li"}},[a("a",{staticClass:"nav-link"},[t._v("Items")])]),a("router-link",{staticClass:"navItem",attrs:{to:"/max",activeClass:"active",tag:"li"}},[a("a",{staticClass:"nav-link"},[t._v("Max Items")])])],1)])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c=a("2877"),u={},m=Object(c["a"])(u,o,l,!1,null,null,null),d=m.exports,f={components:{appHeader:d}},p=f,v=(a("034f"),Object(c["a"])(p,i,s,!1,null,null,null)),h=v.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-12"},[a("h1",[t._v("Items")]),a("p",[a("span",{},[t._v("Don't see the item you're looking for? ")]),a("router-link",{attrs:{to:"create",activeClass:"active"}},[a("a",[t._v("Create one!")])])],1),a("table",{staticClass:"table table-hover"},[t._m(0),a("tbody",{staticClass:"table-hover"},t._l(t.items,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.itemName))]),a("td",[t._v(t._s(e.cost))]),a("td",{staticClass:"ml-auto"},[a("router-link",{attrs:{to:"edit/"+e.id,"item.id":""}},[a("button",{staticClass:"btn btn-primary"},[t._v("Edit")])]),t._v(" "),a("button",{staticClass:"btn btn-danger",on:{click:function(a){return a.preventDefault(),t.myDelete(e.id)}}},[t._v("Delete")])],1)])})),0)])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-light"},[a("th",{attrs:{scope:"col"}},[t._v("Id")]),a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col"}},[t._v("Cost")]),a("th")])}],g=a("bc3a"),C=a.n(g),y={data:function(){return{items:null}},methods:{getAPIData:function(){var t=this;C.a.get("https://pocstoreapi.azurewebsites.net/api/items").then((function(e){return t.items=e.data}))},myDelete:function(t){C.a.delete("https://pocstoreapi.azurewebsites.net/api/Items/"+t).then((function(t){return 200===t.status?alert("Record deleted :("):alert("Something went wrong with deleting")})),this.getAPIData(),this.$forceUpdate()}},mounted:function(){this.getAPIData()}},w=y,x=Object(c["a"])(w,b,_,!1,null,null,null),N=x.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-md-6 offset-md-3"},[a("h1",[t._v("Create a new Item")]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"itemName"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:t.item.itemName,expression:"item.itemName",modifiers:{trim:!0,lazy:!0}}],staticClass:"form-control",attrs:{type:"text",id:"itemName"},domProps:{value:t.item.itemName},on:{change:function(e){t.$set(t.item,"itemName",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"cost"}},[t._v("Cost")]),a("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:t.item.cost,expression:"item.cost",modifiers:{number:!0,lazy:!0}}],staticClass:"form-control",attrs:{type:"number",id:"cost"},domProps:{value:t.item.cost},on:{change:function(e){t.$set(t.item,"cost",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-sm-offset-2 col-md-6 offset-md-3"},[a("button",{staticClass:"btn btn-primary w-100",on:{click:function(e){return e.preventDefault(),t.mySubmit(e)}}},[t._v("Submit ")])])])])])},I=[],k={methods:{mySubmit:function(){C.a.post("https://pocstoreapi.azurewebsites.net/api/Items?itemName="+this.item.itemName+"&cost="+this.item.cost).then((function(t){200!==t.status?alert("Something went wrong with your record creation"):(alert("Record created!"),window.location.href="/")}))}},data:function(){return{item:{}}}},O=k,P=Object(c["a"])(O,$,I,!1,null,null,null),z=P.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-md-6 offset-md-3"},[a("h1",[t._v("Edit Item")]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"id"}},[t._v("Id")]),a("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:t.item.id,expression:"item.id",modifiers:{number:!0,lazy:!0}}],staticClass:"form-control",attrs:{type:"text",id:"id"},domProps:{value:t.item.id},on:{change:function(e){t.$set(t.item,"id",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"itemName"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:t.item.itemName,expression:"item.itemName",modifiers:{trim:!0,lazy:!0}}],staticClass:"form-control",attrs:{type:"text",id:"itemName"},domProps:{value:t.item.itemName},on:{change:function(e){t.$set(t.item,"itemName",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"cost"}},[t._v("Cost")]),a("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:t.item.cost,expression:"item.cost",modifiers:{number:!0,lazy:!0}}],staticClass:"form-control",attrs:{type:"number",id:"cost"},domProps:{value:t.item.cost},on:{change:function(e){t.$set(t.item,"cost",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-sm-offset-2 col-md-6 offset-md-3"},[a("button",{staticClass:"btn btn-primary w-100",on:{click:function(e){return e.preventDefault(),t.myEdit(e)}}},[t._v("Confirm ")])])])])])},j=[],E={methods:{myEdit:function(){C.a.patch("https://pocstoreapi.azurewebsites.net/api/Items",{id:this.item.id,itemName:this.item.itemName,cost:this.item.cost}).then((function(t){200!==t.status?alert("Something went wrong with your record creation"):(alert("Record created!"),window.location.href="/")}))},getItem:function(){var t=this;C.a.get("https://pocstoreapi.azurewebsites.net/api/Items/"+this.id).then((function(e){console.log(e.data),t.item=e.data}))}},data:function(){return{id:this.$route.params.id,item:{id:"",itemName:"",cost:""}}},watch:{$route:function(t,e){this.id=t.params.id}},mounted:function(){this.getItem()}},D=E,M=Object(c["a"])(D,S,j,!1,null,null,null),U=M.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-12"},[a("h1",[t._v("Max Item Values")]),a("table",{staticClass:"table table-hover"},[t._m(0),a("tbody",{staticClass:"table-hover"},t._l(t.items,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.itemName))]),a("td",[t._v(t._s(e.cost))])])})),0)])])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-light"},[a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col"}},[t._v("Cost")])])}],R={data:function(){return{items:null}},methods:{getAPIData:function(){var t=this;C.a.get("https://pocstoreapi.azurewebsites.net/api/maxitems").then((function(e){return t.items=e.data}))}},mounted:function(){this.getAPIData()}},J=R,V=Object(c["a"])(J,A,T,!1,null,null,null),H=V.exports,L=[{path:"/",component:N,children:[]},{path:"/max",component:H},{path:"/create",component:z},{path:"/edit/:id",component:U}];n["a"].use(r["a"]),n["a"].filter("currency",(function(t){return"$"+t.toLocaleString()}));var q=new r["a"]({routes:L});window.axios=a("bc3a"),new n["a"]({router:q,mounted:function(){},render:function(t){return t(h)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.fa591a65.js.map