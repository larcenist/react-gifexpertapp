(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(7),i=n.n(r),s=n(2),u=n(9),o=function(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(s.a)(n,2),i=r[0],o=r[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),o(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}})})},j=n(10),d=n(6),l=n.n(d),m=n(8),p=function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=JdApRtncFHnDeIwqhIEwDN0JG3AmSzUl"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.title,n=e.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__shakeX",children:[Object(a.jsx)("img",{src:n,alt:t}),Object(a.jsxs)("p",{children:[" ",t," "]})]})},h=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){p(e).then((function(e){setTimeout((function(){r({data:e,loading:!1})}),3e3)}))}),[e]),a}(t),r=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h3",{className:"animate__animated animate__shakeY",children:[" ",t," "]}),i&&Object(a.jsx)("p",{className:"animate__animated animate__shakeX",children:"Loading"}),Object(a.jsx)("div",{className:"card-grid animate__animated animate__shakeX",children:r.map((function(e){return Object(a.jsx)(b,Object(j.a)({},e),e.id)}))})]})},f=function(){var e=Object(c.useState)(["One Punch"]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(o,{setCategories:r}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsx)(h,{category:e},e)}))})]})};n(17);i.a.render(Object(a.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a48bf05f.chunk.js.map