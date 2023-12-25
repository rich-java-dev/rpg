(this["webpackJsonpgaming.richwhite.net"]=this["webpackJsonpgaming.richwhite.net"]||[]).push([[0],{69:function(e,t,n){},70:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var o,c=n(0),i=n.n(c),r=n(9),a=n.n(r),s=(n(69),n(70),n(11)),l=n(13),u=n(25),h=n(83),d=n(49),j="MV",p={38:j,40:j,37:j,39:j,87:j,83:j,65:j,68:j},f={38:"U",40:"D",37:"L",39:"R",87:"U",83:"D",65:"L",68:"R"},b={},O=function(e){var t=e.ctx,n=e.posX,o=e.posY,c=e.radius,i=e.color;t.beginPath(),t.arc(n,o,c,0,2*Math.PI),t.fillStyle=i,t.fill(),t.strokeStyle=i,t.stroke()},g=n(4),x=Object(h.a)({root:{display:"flex",justifyContent:"space-between"},paintBar:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"10px"},cursorSize:{width:"60px"}}),v=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_ADDR||"gaming.richwhite.net",m=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).WEBSOCKET_ENDPOINT||"websocketgame",w=window.innerWidth-15,y=window.innerHeight-200,S=null,C=function(){E();var e="wss://".concat(v,"/").concat(m);console.log("Attempting to connect to websocket on: ".concat(e)),(S=new WebSocket(e)).onopen=function(){console.log("WebSocket Client Connected")},S.onmessage=function(e){console.log("RECVD:"),console.log(e);var t=JSON.parse(e).data;b[t.id]=t}},k=function(){var e=Object(u.a)(Object(l.a)().mark((function e(t,n){var o;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o={action:t,actionInput:n},console.log("POSTING ACTION:"),console.log(o),S.send(JSON.stringify(o));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(e){for(var t in N(e),b)if(b.hasOwnProperty(t)){var n=b[t],o={ctx:e,posX:n.posX,posY:n.posY,radius:5,color:"green"};O(o)}},N=function(e){e.fillStyle="white",e.fillRect(0,0,o.width,o.height)},E=function(){},_=function(e,t,n){e.width=t,e.height=n,w=t,y=n},R=function(){x();var e=Object(c.useRef)();Object(d.a)(e),window.addEventListener("resize",_,!1);var t=function(e,t){var n=function(e){return e.keyCode in p?p[e.keyCode]:""}(t);if(n.length>0){var o=function(e){return e.keyCode in f?f[e.keyCode]:""}(t);k(n,o)}};return Object(c.useEffect)(Object(u.a)(Object(l.a)().mark((function t(){var n,c;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C(),o=e.current,c=function(){var e=Object(u.a)(Object(l.a)().mark((function e(){var t;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.innerWidth-15,window.innerHeight-160,t=o.getContext("2d"),T(t),n=requestAnimationFrame(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t.next=5,c();case 5:return t.abrupt("return",(function(){cancelAnimationFrame(n)}));case 6:case"end":return t.stop()}}),t)})))),Object(g.jsx)("div",{children:Object(g.jsx)("canvas",{tabindex:"1",ref:e,width:w,height:y,onKeyDown:function(e){return t(0,e)},onMouseDown:function(e){return function(e,t){console.log(t);var n=void 0;n.length>0&&k(n,void 0)}(0,e)}})})},D=n(117),P=n(119),W=n(125),I=n(120),A=n(124),F=n(116),H=Object(F.a)({toolBar:{display:"flex",justifyContent:"space-between"},selectedItem:{color:"blue",backgroundColor:"gray"},modal:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4}}),L=function(e){var t=H(),n=Object(s.e)(),o=function(e){return n.push(e)};return Object(g.jsx)("div",{children:Object(g.jsx)(D.a,{position:"static",color:"inherit",children:Object(g.jsxs)(P.a,{className:t.toolBar,children:[Object(g.jsx)(I.a,{children:Object(g.jsx)(A.a,{fontWeight:"600",fontSize:24,children:"RPG!"})}),Object(g.jsx)(W.a,{color:"inherit",onClick:function(){return o("")},children:"Home"}),Object(g.jsx)(W.a,{color:"inherit",onClick:function(){return o("/about")},children:"About"}),Object(g.jsx)(W.a,{color:"inherit",onClick:function(){return o("/profile")},children:"Profile"}),Object(g.jsx)(W.a,{color:"inherit",onClick:function(){return o("/login")},children:"Login"})]})})})},B=n(127),K=Object(h.a)({root:{display:"flex",justifyContent:"space-between"},avatar:{width:"20vw",height:"20vw",maxWidth:"200px",maxHeight:"200px"},typography:{width:"70vw"},gap:{width:"5vw"},static_gaps:{width:"50px"}}),U=function(){var e=K();return Object(g.jsxs)("div",{className:e.root,children:[Object(g.jsx)("div",{className:e.gap}),Object(g.jsx)(B.a,{className:e.avatar,alt:"RW",src:"aboutme.png"}),Object(g.jsx)("div",{className:e.gap}),Object(g.jsxs)(I.a,{className:e.typography,align:"justify",children:["Hello! My name is Richard White. I am a software and data engineer based out of NJ. Computer science, education, and art are a few of my passions I wanted to to bring together in this fun project. While this site is still in very early development, I plan to incorporate more interaction, support and new features/variants. If you have any questions or comments you can reach me at: ",Object(g.jsx)("br",{}),Object(g.jsx)("a",{href:"mailto:therichphysicist@gmail.com",children:"therichphysicist@gmail.com"}),Object(g.jsx)("br",{}),"Thanks and enjoy!"]}),Object(g.jsx)("div",{className:e.gap})]})},J=n(20),M=n(121),V=n(122),q=n(123),z=Object(h.a)({root:{display:"flex",top:"33%",left:"33%",position:"absolute"}}),X=function(){var e=z(),t=Object(s.e)(),n=Object(c.useState)(""),o=Object(J.a)(n,2),i=o[0],r=o[1],a=Object(c.useState)(""),h=Object(J.a)(a,2),d=h[0],j=h[1],p=function(){var e=Object(u.a)(Object(l.a)().mark((function e(){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(i),console.log(d),fetch("https://gaming.richwhite.net/auth/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({userName:i,pw:d})}).then((function(e){return e.text()})).then((function(e){var n;alert(e),n="/profile",t.push(n)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(Object(l.a)().mark((function e(){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(i),console.log(d),fetch("https://gaming.richwhite.net/auth/sign-up",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({userName:i,pw:d})}).then((function(e){return e.text()})).then((function(e){alert(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:e.root,children:Object(g.jsx)(M.a,{sx:{minWidth:275},children:Object(g.jsx)(V.a,{children:Object(g.jsxs)(A.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[Object(g.jsx)("div",{children:Object(g.jsx)(q.a,{required:!0,id:"filled-required",label:"User",value:i,onChange:function(e){var t=e.target.value;r(t)}})}),Object(g.jsx)("div",{children:Object(g.jsx)(q.a,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",value:d,onChange:function(e){var t=e.target.value;j(t)}})}),Object(g.jsx)("div",{children:Object(g.jsx)(W.a,{onClick:function(){return p()},children:"Log In"})}),Object(g.jsx)("div",{children:Object(g.jsx)(W.a,{onClick:function(){return f()},children:"Sign Up"})})]})})})})},Y=Object(h.a)({root:{}}),G=function(){var e=Y(),t=Object(c.useState)(""),n=Object(J.a)(t,2),o=n[0],i=n[1];return Object(c.useEffect)((function(){fetch("https://gaming.richwhite.net/player/").then((function(e){return e.text()})).then((function(e){return i(e)})).catch((function(e){return console.log(e)}))})),Object(g.jsx)("div",{className:e.root,children:o})},Q=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(L,{}),Object(g.jsx)(s.a,{path:"/about",component:U}),Object(g.jsx)(s.a,{path:"/login",component:X}),Object(g.jsx)(s.a,{path:"/profile",component:G}),Object(g.jsx)(s.a,{exact:!0,path:"/",component:R})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,130)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),i(e),r(e)}))},$=n(34),ee=n(126);a.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)($.a,{children:Object(g.jsx)(ee.a,{children:Object(g.jsx)(Q,{})})})}),document.getElementById("root")),Z()}},[[81,1,2]]]);
//# sourceMappingURL=main.5e6a3a87.chunk.js.map