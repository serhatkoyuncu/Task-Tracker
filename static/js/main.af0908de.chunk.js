(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),o=n.n(r),s=(n(14),n(9)),i=n(5),l=n(2),u=(n(15),n(0));var d=function(e){var t=e.text,n=e.color,a=e.toggleShow;return Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"btn",style:{backgroundColor:n},onClick:a,children:t})})};var j=function(e){var t=e.title,n=e.isTaskBarShowed,a=e.toggleShow;return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h1",{children:t}),Object(u.jsx)(d,{color:n?"steelblue":"purple",text:n?"Hide Create a Task Bar":"Show Create a Task Bar",toggleShow:a})]})},b=n(8),h=function(e){var t=e.task,n=e.onDelete,a=e.toggleDone;return Object(u.jsxs)("div",{className:"task ".concat(t.isDone?"done":""),onDoubleClick:function(){return a(t.id)},children:[Object(u.jsxs)("h3",{children:[t.text,Object(u.jsx)(b.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(u.jsx)("p",{children:t.day})]})};var O=function(e){var t=e.tasks,n=e.onDelete,a=e.toggleDone;return Object(u.jsx)("div",{children:t.map((function(e){return Object(u.jsx)(h,{task:e,onDelete:n,toggleDone:a},e.id)}))})},x=[{id:1,text:"Study React Pre-Class Notes",day:"Feb 5th at 2:30pm",isDone:!1},{id:2,text:"Feed the Dog",day:"Feb 6th at 1:30pm",isDone:!1},{id:3,text:"Attend in-Class",day:"Feb 7th at 20:00pm",isDone:!1}];var f=function(e){var t=e.onCreate,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),d=i[0],j=i[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),r&&d?(t({text:r,day:d,isDone:!1}),o(""),j("")):alert("Please fill both fields")},children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"task",children:"Task"}),Object(u.jsx)("input",{id:"task",name:"text",type:"text",placeholder:"Enter a task name",value:r,onChange:function(e){return o(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"day",children:"Day & Time"}),Object(u.jsx)("input",{id:"day",name:"day",type:"text",placeholder:"Enter a day and time",value:d,onChange:function(e){return j(e.target.value)}})]}),Object(u.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})})};var g=function(){var e=Object(a.useState)(x),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),o=Object(l.a)(r,2),d=o[0],b=o[1];return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(j,{title:"Task Tracker",isTaskBarShowed:d,toggleShow:function(e){return b((function(e){return!e}))}}),d&&Object(u.jsx)(f,{onCreate:function(e){var t=Date.now(),n=Object(i.a)({id:t},e);c((function(e){return[].concat(Object(s.a)(e),[n])}))}}),n.length>0?Object(u.jsx)(O,{tasks:n,onDelete:function(e){return c(n.filter((function(t){return t.id!==e})))},toggleDone:function(e){c(n.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{isDone:!t.isDone}):t})))}}):Object(u.jsx)("p",{children:"No Task To Show"})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),k()}},[[17,1,2]]]);
//# sourceMappingURL=main.af0908de.chunk.js.map