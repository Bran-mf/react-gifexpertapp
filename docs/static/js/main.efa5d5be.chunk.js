(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),r=n.n(c),i=(n(15),n(2)),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(a.useState)("Hola mundo"),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length,e((function(t){return[r].concat(Object(s.a)(t))})),o("")},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(t){o(t.target.value)}})})},j=n(10),d=function(t){var e=t.id,n=t.title,a=t.url;return console.log({id:e,title:n,url:a}),Object(u.jsxs)("div",{className:"card animate__animated  animate__flipInX",children:[Object(u.jsx)("img",{alt:"title",src:a}),Object(u.jsx)("p",{children:n})]},e)},l=n(6),f=n.n(l),p=n(8),b=function(){var t=Object(p.a)(f.a.mark((function t(e){var n,a,c,r,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(e,"&limit=5&api_key=hdC0uwYn3YKEf7ZHUxwbsWvJqmwEXiis"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){b(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,r=n.loading;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"card-grid",children:[Object(u.jsx)("h2",{children:e}),r&&Object(u.jsx)("p",{className:" animate__animated  animate__lightSpeedInRight",children:"Loading..."}),c.map((function(t){return Object(u.jsx)(d,Object(j.a)({},t),t.id)}))]})})},h=function(){var t=Object(a.useState)(["categoria1"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),n.map((function(t){return Object(u.jsx)(g,{category:t},t)}))]})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};r.a.render(Object(u.jsx)(h,{}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.efa5d5be.chunk.js.map