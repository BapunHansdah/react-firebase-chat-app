(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{61:function(e,t,c){},63:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var a=c(2),n=(c(61),c(12));var s=function(e){var t=e.logout,c=e.user;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)("div",{children:"FIRE CHAT"})}),Object(n.jsx)("div",{className:"nav",children:Object(n.jsx)("div",{className:"nav1",onClick:t,children:null===c?"":"Log out"})})]})})},r=c(15),i=c(1),j=c(3),l=c(9),o=c(52),b=(c(63),c(53)),d=function(e){var t=e.login;return Object(n.jsx)("div",{className:"full-container",children:Object(n.jsxs)("div",{className:"auth-btn-container",children:[Object(n.jsxs)("div",{className:"welcome",children:["welcome to",Object(n.jsx)("span",{className:"title",children:"FIRE CHAT !!!!"})]}),Object(n.jsxs)("div",{className:"google-btn",onClick:t,children:[Object(n.jsx)("div",{className:"google-logo",children:Object(n.jsx)(b.a,{size:20})}),Object(n.jsx)("div",{className:"google-text",children:"Sign in with Google"})]})]})})},u=c(79),O=c(54),h=c(55),x=c(80),m=function(e){var t=e.messages,c=e.remove,s=e.textVal,r=e.handleChange,i=e.submitHandle,j=e.user,o=Object(a.useState)(""),b=Object(l.a)(o,2),d=(b[0],b[1],Object(a.useRef)(null));return Object(a.useEffect)((function(){d.current.scrollTo({top:d.current.scrollHeight})}),[t]),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(x.a,{style:{height:500},viewportRef:d,children:Object(n.jsx)("div",{className:"message-lists",children:t.map((function(e){return Object(n.jsxs)("div",{className:"".concat(j.uid===e.uid?"messages right":"messages"),children:[Object(n.jsx)("img",{src:e.photo}),Object(n.jsxs)("div",{className:"text-box",children:[Object(n.jsx)("div",{className:"remove-button",children:j.uid===e.uid?Object(n.jsx)(O.a,{className:"rem",onClick:function(){return c(e.id)}}):""}),Object(n.jsx)("div",{className:"text",children:e.text}),Object(n.jsx)("div",{className:"name",children:e.name})]})]},e.id)}))})}),Object(n.jsxs)("div",{className:"action-box",children:[Object(n.jsx)("div",{className:"textarea",children:Object(n.jsx)(u.a,{value:s,onChange:function(e){return r(e.target.value)},placeholder:"Type your message...",autosize:!0,minRows:1,maxRows:4})}),Object(n.jsx)("div",{className:"button",children:Object(n.jsx)("button",{onClick:i,children:Object(n.jsx)(h.a,{})})})]})]})})},v=c(81),f=c(34),g=c(26),p=Object(o.a)({apiKey:"AIzaSyDpOMh3GVDIrxkZAm3VBoiCb6k35Wcbq5U",authDomain:"react-chat-app-2efda.firebaseapp.com",projectId:"react-chat-app-2efda",storageBucket:"react-chat-app-2efda.appspot.com",messagingSenderId:"1004384494632",appId:"1:1004384494632:web:1163b0b1a79e8a9b96411d"}),N=Object(f.b)(p),w=Object(g.e)(p);var E=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),c=t[0],o=t[1],b=Object(a.useState)([]),u=Object(l.a)(b,2),O=u[0],h=u[1],x=Object(a.useState)(""),p=Object(l.a)(x,2),E=p[0],k=p[1];Object(a.useEffect)((function(){return Object(f.c)(N,(function(e){o(e)}))}),[]);var S=function(){var e=Object(j.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new f.a,e.prev=1,e.next=4,Object(f.d)(N,t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(j.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f.e)(N);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=Object(g.h)(Object(g.b)(w,"messages"),Object(g.g)("createdAt"));Object(g.f)(e,(function(e){var t=[];e.forEach((function(e){t.push(Object(r.a)(Object(r.a)({},e.data()),{},{id:e.id}))})),h(t)}))}),[w]),0===O.length?Object(n.jsx)("div",{className:"full-container",children:Object(n.jsx)(v.a,{})}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(s,{logout:_,user:c}),Object(n.jsx)("div",{className:"full-home-container",children:Object(n.jsx)("div",{className:"container",children:null===c?Object(n.jsx)(d,{login:S}):Object(n.jsx)(m,{messages:O,remove:function(e){var t=Object(g.d)(w,"messages",e);Object(g.c)(t)},textVal:E,handleChange:function(e){k(e)},submitHandle:function(){if(""!==E){var e=Object(g.b)(w,"messages");Object(g.a)(e,{uid:c.uid,name:c.displayName,text:E,createdAt:Object(g.i)(),photo:c.photoURL}),k("")}},user:c})})})]})};var k=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(E,{})})},S=c(56),_=c(13);c(73);c(69).config();var C=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(S.a,{children:Object(n.jsx)(_.c,{children:Object(n.jsx)(_.a,{path:"/",element:Object(n.jsx)(k,{})})})})})},I=c(43);var y=Object(I.a)({defaultList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e}}),R=y,T=Object(I.b)(R,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),D=c(57),F=c(28),A=c.n(F),V=document.getElementById("root");A.a.render(Object(n.jsx)(a.StrictMode,{children:Object(n.jsx)(D.a,{store:T,children:Object(n.jsx)(C,{})})}),V)}},[[74,1,2]]]);
//# sourceMappingURL=main.d9aa8aa5.chunk.js.map