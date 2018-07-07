(function(t){function e(e){for(var n,a,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)a=r[d],s[a]&&p.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},s={1:0},i=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,0]),o()})({0:function(t,e,o){t.exports=o("Vtdi")},Vtdi:function(t,e,o){"use strict";o.r(e);o("VRzm");var n=o("Kw5r"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],a={name:"App"},r=a,c=o("KHd+"),l=Object(c["a"])(r,s,i,!1,null,null,null),u=l.exports,d=o("jE9Z"),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),o("div",{staticClass:"ui container two column grid"},[o("TodoList",{staticClass:"column"}),o("TodoCounter",{staticClass:"column"})],1)])},m=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui menu"},[o("a",{staticClass:"item header",attrs:{href:"#"}},[t._v("Charles")]),o("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Game")]),o("a",{staticClass:"item active",attrs:{href:"#"}},[t._v("Store example")]),o("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Animation")])])}],f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui relaxed divided list"},t._l(t.todos,function(e,n){return o("div",{key:n,staticClass:"item",on:{click:function(e){t.completeTodo(n)}}},[o("i",{staticClass:"large middle aligned icon",class:[e.completed?"paper plane outline":"paper plane"]}),o("div",{staticClass:"content"},[o("a",{staticClass:"header"},[t._v(t._s(e.name))]),o("a",{staticClass:"header"},[t._v(t._s(n))]),o("div",{staticClass:"description"},[t._v("Updated 10 mins ago")])])])}))},v=[],C=o("yT7P"),_=o("L2JU"),h={name:"TodoList",computed:Object(C["a"])({},Object(_["c"])(["todos"]),Object(_["b"])({completeTodoStore:"completeTodo"})),methods:{completeTodo:function(t){this.completeTodoStore(t)}}},O=h,T=Object(c["a"])(O,f,v,!1,null,null,null),b=T.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[o("form",{staticClass:"ui fluid input",on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newtodo,expression:"newtodo"}],attrs:{type:"text",placeholder:"Add a task"},domProps:{value:t.newtodo},on:{input:function(e){e.target.composing||(t.newtodo=e.target.value)}}})])]),o("div",{staticClass:"ui vertical steps fluid"},[o("div",{staticClass:"step"},[o("i",{staticClass:"tasks icon"}),o("div",{staticClass:"content"},[o("span",{staticClass:"title"},[t._v(t._s(t.todosCount)+"  ")]),t._m(0)])]),o("div",{staticClass:"step"},[o("i",{staticClass:"bars icon"}),o("div",{staticClass:"content"},[o("span",{staticClass:"title"},[t._v(t._s(t.todosRemainingCount)+"  ")]),t._m(1)])]),o("div",{staticClass:"step"},[o("i",{staticClass:"check icon"}),o("div",{staticClass:"content"},[o("span",{staticClass:"title"},[t._v(t._s(t.todosCompletedCount)+"  ")]),t._m(2)])])])])},w=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"description"},[o("i",[t._v("Total tasks")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"description"},[o("i",[t._v("Remaining tasks")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"description"},[o("i",[t._v("Completed tasks")])])}],j={name:"TodoCounter",data:function(){return{newtodo:""}},computed:Object(C["a"])({},Object(_["c"])(["todosCount","todosRemainingCount","todosCompletedCount"])),methods:Object(C["a"])({},Object(_["b"])({addTodoToStore:"addTodo"}),{addTodo:function(){this.addTodoToStore(this.newtodo),this.newtodo=""}})},y=j,E=Object(c["a"])(y,g,w,!1,null,null,null),x=E.exports,S={name:"home",components:{TodoList:b,TodoCounter:x}},D=S,k=Object(c["a"])(D,p,m,!1,null,null,null),L=k.exports;n["a"].use(d["a"]);var P=new d["a"]({mode:"history",routes:[{path:"/",name:"home",component:L}]});n["a"].use(_["a"]);var R=new _["a"].Store({strict:!0,state:{todos:[]},getters:{todos:function(t){return t.todos},todosCount:function(t,e){return e.todos.length},todosRemaining:function(t,e){return e.todos.filter(function(t){return!0!==t.completed})},todosRemainingCount:function(t,e){return e.todosRemaining.length},todosCompleted:function(t,e){return e.todos.filter(function(t){return!0===t.completed})},todosCompletedCount:function(t,e){return e.todosCompleted.length}},mutations:{ADD_TODO:function(t,e){t.todos.push({name:e,completed:!1})},REMOVE_ALL_TODOS:function(t){t.todos=[]},COMPLETE_TODO:function(t,e){console.log(e),t.todos[e].completed=!t.todos[e].completed}},actions:{addTodo:function(t,e){var o=t.commit;o("ADD_TODO",e)},removeAllTodos:function(t){var e=t.commit;e("REMOVE_ALL_TODOS")},completeTodo:function(t,e){var o=t.commit;o("COMPLETE_TODO",e)}}});n["a"].config.productionTip=!1,new n["a"]({router:P,store:R,render:function(t){return t(u)}}).$mount("#app")}});