(this.webpackJsonpdailyroutine=this.webpackJsonpdailyroutine||[]).push([[0],{48:function(n,t,o){},56:function(n,t,o){"use strict";o.r(t);var e=o(5),r=o(0),c=o.n(r),i=o(3),a=o.n(i),u=(o(48),o(29)),d=o(6),s=o(7),h=o(11),p=o.n(h),f=o(4),l=o(85),b=o(25);function j(){var n=Object(d.a)(["\n  margin: 0px 10px;\n  background-color: transparent;\n  border: 1px solid;\n  border-color: transparent;\n  border-bottom-color: #949494;\n  height: 28px;\n  &:hover {\n    border: 1px solid;\n    border-color: transparent;\n    border-bottom-color: #3a3a3a;\n  }\n"]);return j=function(){return n},n}function x(){var n=Object(d.a)(["\n  margin: 10px;\n  align-items: center;\n  display: flex;\n  /* padding-bottom: 5px;\n  border: 1px solid;\n  border-color: transparent;\n  border-bottom-color: #303030; */\n"]);return x=function(){return n},n}function m(){var n=Object(d.a)(["\n  font-size: 20px;\n"]);return m=function(){return n},n}function g(){var n=Object(d.a)(["\n  background-color: #c05805;\n  color: #f1ece1;\n  padding: 10px 40px;\n  border-color: transparent;\n  border-radius: 5px;\n  &:Hover {\n    background-color: #505668;\n  }\n  /* box-shadow: 1px 3px 8px 5px #888888; */\n"]);return g=function(){return n},n}function y(){var n=Object(d.a)(["\n  margin-top: 50px;\n  padding: 10px 20px;\n  background-color: #ecd596;\n  height: 100vh;\n  width: 382px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 1px 2px 8px 2px #2c2c2c;\n  overflow: scroll;\n"]);return y=function(){return n},n}function v(){var n=Object(d.a)(["\n  background-color: whitesmoke;\n  background-image: url('https://get.pxhere.com/photo/desk-notebook-writing-table-book-pen-diary-journal-writer-paper-education-brand-document-knowledge-pen-and-paper-611823.jpg');\n  background-size: cover;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return v=function(){return n},n}function O(){var n=Object(d.a)(["\n  margin-top: 10px;\n  font-size: 24px;\n  color: #f1ece1;\n"]);return O=function(){return n},n}function k(){var n=Object(d.a)(["\n  background-color: #505668;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n"]);return k=function(){return n},n}var w=s.a.div(k()),E=s.a.div(O()),T=s.a.div(v()),C=s.a.div(y()),S=s.a.button(g()),D=s.a.div(m()),A=s.a.div(x()),G=s.a.input(j());var J=function(){var n="http://52.221.201.253:8000/",t=Object(r.useState)([]),o=Object(u.a)(t,2),c=o[0],i=o[1];return Object(r.useEffect)((function(){fetch("".concat(n,"history/"),{method:"GET",mode:"no-cors"}).then((function(n){return n.json()})).then((function(n){return i(n)}))}),[]),Object(e.jsxs)("div",{children:[Object(e.jsx)(w,{children:Object(e.jsx)(E,{children:"Daily Routine"})}),Object(e.jsx)(T,{children:Object(e.jsxs)(C,{children:[Object(e.jsx)(S,{onClick:function(){var t={description:"",date:"".concat(p()().format("M-D")),time:"".concat(p()().format("H:m")),pub_date:"".concat(p()().format())};fetch("".concat(n,"history/historyCreate/"),{method:"POST",mode:"no-cors",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)}).then((function(n){return n.json()})).then((function(t){fetch("".concat(n,"history/"),{method:"GET",mode:"no-cors"}).then((function(n){return n.json()})).then((function(n){return i(n)}))})).catch((function(n){return console.log(n)}))},children:Object(e.jsx)(D,{children:"Add list"})}),Object(e.jsx)("div",{children:c.map((function(t,o){return Object(e.jsxs)(A,{children:[Object(e.jsx)(f.a,{utils:b.a,children:Object(e.jsx)(l.a,{value:t.pub_date,onChange:function(o){return function(t,o){var e={pub_date:"".concat(t.format())};fetch("".concat(n,"history/historyUpdate/").concat(o.id,"/"),{method:"POST",mode:"no-cors",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(e)}).then((function(n){return n.json()})).then((function(t){fetch("".concat(n,"history/"),{method:"GET",mode:"no-cors"}).then((function(n){return n.json()})).then((function(n){return i(n)}))})).catch((function(n){return console.log(n)}))}(o,t)},format:"YYYY-MM-DD HH:mm"})}),Object(e.jsx)(G,{value:t.description,onChange:function(o){return function(t,o){var e={description:"".concat(t.target.value)};fetch("".concat(n,"history/historyUpdate/").concat(o.id,"/"),{method:"POST",mode:"no-cors",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(e)}).then((function(n){return n.json()})).then((function(t){fetch("".concat(n,"history/"),{method:"GET",mode:"no-cors"}).then((function(n){return n.json()})).then((function(n){return i(n)}))})).catch((function(n){return console.log(n)}))}(o,t)}}),Object(e.jsx)("button",{onClick:function(){return function(t){fetch("".concat(n,"history/historyDelete/").concat(t.id,"/"),{method:"DELETE",mode:"no-cors",headers:{Accept:"application/json","Content-type":"application/json"}}).then((function(n){return n.json()})).then((function(t){fetch("".concat(n,"history/"),{method:"GET",mode:"no-cors"}).then((function(n){return n.json()})).then((function(n){return i(n)}))})).catch((function(n){return console.log(n)}))}(t)},children:"X"})]},o)}))})]})})]})};a.a.render(Object(e.jsx)(c.a.StrictMode,{children:Object(e.jsx)(J,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.6d9f9f12.chunk.js.map