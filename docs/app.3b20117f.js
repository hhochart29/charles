(function(t){function e(e){for(var n,a,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)a=r[d],s[a]&&p.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},s={1:0},i=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([2,0]),o()})({2:function(t,e,o){t.exports=o("Vtdi")},"39RD":function(t,e,o){"use strict";var n=o("C284"),s=o.n(n);s.a},"8C/z":function(t,e,o){},"BO1/":function(t,e,o){"use strict";var n=o("8C/z"),s=o.n(n);s.a},C284:function(t,e,o){},Vtdi:function(t,e,o){"use strict";o.r(e);o("VRzm");var n=o("Kw5r"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Menu"),o("router-view",{staticClass:"ui container two column grid"})],1)},i=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui menu"},[o("router-link",{staticClass:"item header active",attrs:{to:{name:"Home"}}},[t._v("Charles")]),o("router-link",{staticClass:"item",attrs:{to:{name:"TodoListStore"}}},[t._v("Todolist - Store")]),o("router-link",{staticClass:"item",attrs:{to:{name:"Home"}}},[t._v("Animation")])],1)},r=[],c={name:"Menu"},l=c,u=o("KHd+"),d=Object(u["a"])(l,a,r,!1,null,null,null),p=d.exports,m={name:"App",components:{Menu:p}},f=m,v=Object(u["a"])(f,s,i,!1,null,null,null),C=v.exports,_=o("jE9Z"),h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("There is not much to do on this homepage for the moment")])])}],O={name:"Home"},b=O,g=(o("39RD"),Object(u["a"])(b,h,T,!1,null,null,null)),w=g.exports,j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("TodoList",{staticClass:"column"}),o("TodoCounter",{staticClass:"column"})],1)},E=[],y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui relaxed divided list"},t._l(t.todos,function(e,n){return o("div",{key:n,staticClass:"item",class:{completed:e.completed},on:{click:function(e){t.completeTodo(n)}}},[o("i",{staticClass:"large middle aligned icon",class:[e.completed?"paper plane outline":"paper plane"]}),o("div",{staticClass:"content"},[o("a",{staticClass:"header"},[t._v(t._s(e.name))]),o("div",{staticClass:"description"},[t._v("Updated 10 mins ago")])])])}))},S=[],x=o("yT7P"),D=o("L2JU"),k={name:"TodoList",computed:Object(x["a"])({},Object(D["c"])(["todos"])),methods:Object(x["a"])({},Object(D["b"])({completeTodoStore:"completeTodo"}),{completeTodo:function(t){this.completeTodoStore(t)}})},L=k,A=(o("BO1/"),Object(u["a"])(L,y,S,!1,null,"0b1c588c",null)),M=A.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[o("form",{staticClass:"ui fluid input",on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newtodo,expression:"newtodo"}],attrs:{type:"text",placeholder:"Add a task"},domProps:{value:t.newtodo},on:{input:function(e){e.target.composing||(t.newtodo=e.target.value)}}})])]),o("div",{staticClass:"ui vertical steps fluid"},[o("div",{staticClass:"step"},[o("i",{staticClass:"tasks icon"}),o("div",{staticClass:"content"},[o("span",{staticClass:"title"},[t._v(t._s(t.todosCount)+"  ")]),t._m(0)])]),o("div",{staticClass:"step"},[o("i",{staticClass:"bars icon"}),o("div",{staticClass:"content"},[o("span",{staticClass:"title"},[t._v(t._s(t.todosRemainingCount)+"  ")]),t._m(1)])]),o("div",{staticClass:"step"},[o("i",{staticClass:"check icon"}),o("div",{staticClass:"content"},[o("span",{staticClass:"title"},[t._v(t._s(t.todosCompletedCount)+"  ")]),t._m(2)])]),o("div",{staticClass:"step"},[o("div",{staticClass:"content"},[o("button",{staticClass:"ui google plus button",on:{click:function(e){return e.preventDefault(),t.removeAllTodos(e)}}},[o("i",{staticClass:"trash icon"}),t._v(" Delete All ")])])])])])},$=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"description"},[o("i",[t._v("Total tasks")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"description"},[o("i",[t._v("Remaining tasks")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"description"},[o("i",[t._v("Completed tasks")])])}],P={name:"TodoCounter",data:function(){return{newtodo:""}},computed:Object(x["a"])({},Object(D["c"])(["todosCount","todosRemainingCount","todosCompletedCount"])),methods:Object(x["a"])({},Object(D["b"])({addTodoToStore:"addTodo",removeAllTodos:"removeAllTodos"}),{addTodo:function(){""!==this.newtodo&&(this.addTodoToStore(this.newtodo),this.newtodo="")}})},H=P,V=Object(u["a"])(H,R,$,!1,null,null,null),z=V.exports,J={name:"TodoListStore",components:{TodoList:M,TodoCounter:z}},B=J,K=Object(u["a"])(B,j,E,!1,null,null,null),U=K.exports;n["a"].use(_["a"]);var N=new _["a"]({routes:[{path:"/",name:"Home",component:w},{path:"/todoliststore",name:"TodoListStore",component:U}]});n["a"].use(D["a"]);var Z=new D["a"].Store({strict:!0,state:{todos:[]},getters:{todos:function(t){return t.todos},todosCount:function(t,e){return e.todos.length},todosRemaining:function(t,e){return e.todos.filter(function(t){return!0!==t.completed})},todosRemainingCount:function(t,e){return e.todosRemaining.length},todosCompleted:function(t,e){return e.todos.filter(function(t){return!0===t.completed})},todosCompletedCount:function(t,e){return e.todosCompleted.length}},mutations:{ADD_TODO:function(t,e){t.todos.push({name:e,completed:!1})},REMOVE_ALL_TODOS:function(t){t.todos=[]},COMPLETE_TODO:function(t,e){console.log(e),t.todos[e].completed=!t.todos[e].completed}},actions:{addTodo:function(t,e){var o=t.commit;o("ADD_TODO",e)},removeAllTodos:function(t){var e=t.commit;e("REMOVE_ALL_TODOS")},completeTodo:function(t,e){var o=t.commit;o("COMPLETE_TODO",e)}}});n["a"].config.productionTip=!1,new n["a"]({router:N,store:Z,render:function(t){return t(C)}}).$mount("#app")}});