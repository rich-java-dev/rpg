(this["webpackJsonpgaming.richwhite.net"]=this["webpackJsonpgaming.richwhite.net"]||[]).push([[0],{69:function(e,t,n){},70:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c,o=n(0),i=n.n(o),r=n(9),a=n.n(r),s=(n(69),n(70),n(11)),u=n(13),l=n(25),h=n(83),j=n(49),d=n(4),p=Object(h.a)({root:{display:"flex",justifyContent:"space-between"},paintBar:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"10px"},cursorSize:{width:"60px"}}),f=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_ADDR||"gaming.richwhite.net",b=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).WEBSOCKET_ENDPOINT||"websocketgame",O=window.innerWidth-15,g=window.innerHeight-200,x=null,m=(new Set,function(){S();var e="wss://".concat(f,"/").concat(b);console.log("Attempting to connect to websocket on: ".concat(e)),(x=new WebSocket(e)).onopen=function(){console.log("WebSocket Client Connected")},x.onmessage=function(e){console.log("RECVD: "+e);JSON.parse(e)}}),w=function(){var e=Object(l.a)(Object(u.a)().mark((function e(t,n){var c;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c={action:t,actionInput:n},console.log("POSTING ACTION:"),console.log(c),x.send(JSON.stringify(c));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(e){y(e)},y=function(e){e.fillStyle="green",e.fillRect(0,0,c.width,c.height)},S=function(){},C=function(e,t,n){e.width=t,e.height=n,O=t,g=n},T=function(){p();var e=Object(o.useRef)();Object(j.a)(e),window.addEventListener("resize",C,!1);var t=function(e,t){console.log(t);w("","")};return Object(o.useEffect)(Object(l.a)(Object(u.a)().mark((function t(){var n,o;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(),c=e.current,o=function(){var e=Object(l.a)(Object(u.a)().mark((function e(){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.innerWidth-15,window.innerHeight-160,t=c.getContext("2d"),v(t),n=requestAnimationFrame(o);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t.next=5,o();case 5:return t.abrupt("return",(function(){cancelAnimationFrame(n)}));case 6:case"end":return t.stop()}}),t)})))),Object(d.jsx)("div",{children:Object(d.jsx)("canvas",{tabindex:"1",ref:e,width:O,height:g,onKeyDown:function(e){return t(0,e)},onMouseDown:function(e){return t(0,e)}})})},N=n(117),E=n(119),_=n(125),k=n(120),R=n(124),W=n(116),D=Object(W.a)({toolBar:{display:"flex",justifyContent:"space-between"},selectedItem:{color:"blue",backgroundColor:"gray"},modal:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4}}),I=function(e){var t=D(),n=Object(s.e)(),c=function(e){return n.push(e)};return Object(d.jsx)("div",{children:Object(d.jsx)(N.a,{position:"static",color:"inherit",children:Object(d.jsxs)(E.a,{className:t.toolBar,children:[Object(d.jsx)(k.a,{children:Object(d.jsx)(R.a,{fontWeight:"600",fontSize:24,children:"RPG!"})}),Object(d.jsx)(_.a,{color:"inherit",onClick:function(){return c("")},children:"Home"}),Object(d.jsx)(_.a,{color:"inherit",onClick:function(){return c("/about")},children:"About"}),Object(d.jsx)(_.a,{color:"inherit",onClick:function(){return c("/profile")},children:"Profile"}),Object(d.jsx)(_.a,{color:"inherit",onClick:function(){return c("/login")},children:"Login"})]})})})},P=n(127),A=Object(h.a)({root:{display:"flex",justifyContent:"space-between"},avatar:{width:"20vw",height:"20vw",maxWidth:"200px",maxHeight:"200px"},typography:{width:"70vw"},gap:{width:"5vw"},static_gaps:{width:"50px"}}),F=function(){var e=A();return Object(d.jsxs)("div",{className:e.root,children:[Object(d.jsx)("div",{className:e.gap}),Object(d.jsx)(P.a,{className:e.avatar,alt:"RW",src:"aboutme.png"}),Object(d.jsx)("div",{className:e.gap}),Object(d.jsxs)(k.a,{className:e.typography,align:"justify",children:["Hello! My name is Richard White. I am a software and data engineer based out of NJ. Computer science, education, and art are a few of my passions I wanted to to bring together in this fun project. While this site is still in very early development, I plan to incorporate more interaction, support and new features/variants. If you have any questions or comments you can reach me at: ",Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"mailto:therichphysicist@gmail.com",children:"therichphysicist@gmail.com"}),Object(d.jsx)("br",{}),"Thanks and enjoy!"]}),Object(d.jsx)("div",{className:e.gap})]})},H=n(20),L=n(121),B=n(122),K=n(123),J=Object(h.a)({root:{display:"flex",top:"33%",left:"33%",position:"absolute"}}),U=function(){var e=J(),t=Object(s.e)(),n=Object(o.useState)(""),c=Object(H.a)(n,2),i=c[0],r=c[1],a=Object(o.useState)(""),h=Object(H.a)(a,2),j=h[0],p=h[1],f=function(){var e=Object(l.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(i),console.log(j),fetch("https://gaming.richwhite.net/auth/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({userName:i,pw:j})}).then((function(e){return e.text()})).then((function(e){var n;alert(e),n="/profile",t.push(n)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(i),console.log(j),fetch("https://gaming.richwhite.net/auth/sign-up",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({userName:i,pw:j})}).then((function(e){return e.text()})).then((function(e){alert(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:e.root,children:Object(d.jsx)(L.a,{sx:{minWidth:275},children:Object(d.jsx)(B.a,{children:Object(d.jsxs)(R.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[Object(d.jsx)("div",{children:Object(d.jsx)(K.a,{required:!0,id:"filled-required",label:"User",value:i,onChange:function(e){var t=e.target.value;r(t)}})}),Object(d.jsx)("div",{children:Object(d.jsx)(K.a,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",value:j,onChange:function(e){var t=e.target.value;p(t)}})}),Object(d.jsx)("div",{children:Object(d.jsx)(_.a,{onClick:function(){return f()},children:"Log In"})}),Object(d.jsx)("div",{children:Object(d.jsx)(_.a,{onClick:function(){return b()},children:"Sign Up"})})]})})})})},V=Object(h.a)({root:{}}),q=function(){var e=V(),t=Object(o.useState)(""),n=Object(H.a)(t,2),c=n[0],i=n[1];return Object(o.useEffect)((function(){fetch("https://gaming.richwhite.net/player/").then((function(e){return e.text()})).then((function(e){return i(e)})).catch((function(e){return console.log(e)}))})),Object(d.jsx)("div",{className:e.root,children:c})},M=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(I,{}),Object(d.jsx)(s.a,{path:"/about",component:F}),Object(d.jsx)(s.a,{path:"/login",component:U}),Object(d.jsx)(s.a,{path:"/profile",component:q}),Object(d.jsx)(s.a,{exact:!0,path:"/",component:T})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,130)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),i(e),r(e)}))},G=n(34),Q=n(126);a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(G.a,{children:Object(d.jsx)(Q.a,{children:Object(d.jsx)(M,{})})})}),document.getElementById("root")),z()}},[[81,1,2]]]);
//# sourceMappingURL=main.388e6fd3.chunk.js.map