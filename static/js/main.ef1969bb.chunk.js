(this["webpackJsonpfrontend-1"]=this["webpackJsonpfrontend-1"]||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c,i=n(0),o=n(1),r=n.n(o),a=n(7),s=n.n(a),l=(n(13),n(2)),d=n(4),h=function(e){return new Promise((function(t,n){var c=e.status<400?t:n;e.text().then(c)}))},u=n.p+"static/media/logo.103b5fa1.svg",j=(n(16),function(e){return"".concat(e,"px")}),b={width:j(200),height:(c=100,"".concat(c,"px")),margin:"0 auto"},g={border:"1px solid black",width:j(198),height:j(198),backgroundColor:"white"},p=function(){var e=Object(o.useRef)(null),t=Object(o.useState)(),n=Object(l.a)(t,2),c=n[0],r=n[1],a=Object(o.useState)(),s=Object(l.a)(a,2),j=s[0],p=s[1],O=Object(o.useState)(),f=Object(l.a)(O,2),x=f[0],m=f[1];return Object(i.jsx)("div",{className:"App",style:b,children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("img",{src:u,className:"App-logo",alt:"logo"}),Object(i.jsx)("h1",{className:"App-title",children:"Draw a digit"})]}),Object(i.jsx)("div",{style:g,children:Object(i.jsx)(d.SketchField,{ref:e,onChange:function(e){p(e.target.value)},width:"100%",height:"100%",tool:d.Tools.Pencil,imageFormat:"jpg",lineColor:"#111",lineWidth:10,value:j})}),x&&Object(i.jsxs)("h3",{children:["Predicted value is: ",x]}),Object(i.jsx)("button",{onClick:function(t){return e.current.clear()},children:"Clear"}),Object(i.jsx)("button",{onClick:function(){var t=e.current.toDataURL();m(void 0),r(void 0),function(e){return fetch("/api/predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:e})}).then(h)}(t).then(m).catch(r)},children:"Guess the number"}),c&&Object(i.jsx)("p",{style:{color:"red"},children:"Something went wrong"})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.ef1969bb.chunk.js.map