(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{1086:function(t,e,n){},1087:function(t,e,n){},1088:function(t,e,n){"use strict";n.r(e);var c,i=n(43),o=n(77),r=n(479),a=n.n(r),s=n(158),u=n(252),l=function(t){return new Promise((function(e,n){var c=t.status<400?e:n;t.text().then(c)}))},d=n.p+"static/media/logo.103b5fa1.svg",h=(n(1086),function(t){return"".concat(t,"px")}),j={width:h(200),height:(c=100,"".concat(c,"px")),margin:"0 auto"},f={border:"1px solid black",width:h(198),height:h(198),backgroundColor:"white"},b=function(){var t=Object(o.useRef)(null),e=Object(o.useState)(),n=Object(s.a)(e,2),c=n[0],r=n[1],a=Object(o.useState)(),h=Object(s.a)(a,2),b=h[0],p=h[1],O=Object(o.useState)(),g=Object(s.a)(O,2),m=g[0],x=g[1];return Object(i.jsx)("div",{className:"App",style:j,children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(i.jsx)("h1",{className:"App-title",children:"Draw a digit"})]}),Object(i.jsx)("div",{style:f,children:Object(i.jsx)(u.SketchField,{ref:t,onChange:function(t){p(t.target.value)},width:"100%",height:"100%",tool:u.Tools.Pencil,imageFormat:"jpg",lineColor:"#111",lineWidth:10,value:b})}),m&&Object(i.jsxs)("h3",{children:["Predicted value is: ",m]}),Object(i.jsx)("button",{onClick:function(e){return t.current.clear()},children:"Clear"}),Object(i.jsx)("button",{onClick:function(){var e=t.current.toDataURL();x(void 0),r(void 0),function(t){return fetch("/api/predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:t})}).then(l)}(e).then(x).catch(r)},children:"Guess the number"}),c&&Object(i.jsx)("p",{style:{color:"red"},children:"Something went wrong"})]})})};n(1087);a.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))},302:function(t,e){},534:function(t,e){},535:function(t,e){},839:function(t,e){},841:function(t,e){},850:function(t,e){},852:function(t,e){},884:function(t,e){},885:function(t,e){},890:function(t,e){},892:function(t,e){},899:function(t,e){},918:function(t,e){},953:function(t,e){}},[[1088,1,2]]]);
//# sourceMappingURL=main.6f708f09.chunk.js.map