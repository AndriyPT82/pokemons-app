(this["webpackJsonppokemons-app"]=this["webpackJsonppokemons-app"]||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),r=n(17),a=n.n(r),i=(n(26),n(6)),o=n(4),l=n(5),j=n(10),u=n.n(j),b=function(t){return fetch("".concat("https://pokeapi.co/api/v2/").concat(t)).then((function(t){return t.json()}))},d=(n(27),n(28),n(0));function O(t){var e=t.type,n=Object(c.useContext)(N).setFilterBy,s=e.name;return Object(d.jsx)("li",{className:"tag",onClick:function(t){t.stopPropagation(),n(s)},children:s})}function p(t){var e=t.tags;return Object(d.jsx)("ul",{className:"Tags",children:e.map((function(t){return Object(d.jsx)(s.a.Fragment,{children:Object(d.jsx)(O,Object(i.a)({},t))},t.slot)}))})}n(30);function h(t){var e=t.name,n=t.url,s=Object(c.useState)([]),r=Object(l.a)(s,2),a=r[0],i=r[1],o=Object(c.useContext)(N),j=o.setEndPoint,O=o.activeCardId,h=n.split("/").at(-2);return Object(c.useEffect)((function(){b("pokemon/".concat(h)).then((function(t){return i(t.types)}))}),[]),Object(d.jsxs)("li",{className:u()("card",{"card--active":O===+h}),onClick:function(){return j(h)},children:[Object(d.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(h,".png"),onError:function(t){t.target.onError=null,t.target.src="https://www.pngplay.com/wp-content/uploads/11/Pokemon-GO-Logo-Free-PNG.png"},alt:e}),Object(d.jsx)("h2",{className:"card__title",children:e}),!!a.length&&Object(d.jsx)(p,{tags:a})]})}n(31);function f(t){var e=t.cards;return Object(d.jsx)("ul",{className:"cards",children:e.map((function(t){return Object(d.jsx)(s.a.Fragment,{children:Object(d.jsx)(h,Object(i.a)({},t))},t.name)}))})}n(32);function x(t){var e=t.id,n=t.types,c=t.stats,s=t.moves,r=t.weight,a=t.onSetDetails,i=c.map((function(t){return{value:t.base_stat,name:t.stat.name}})),o=n.reduce((function(t,e){return"".concat(t).concat(e.type.name," ")}),"");return Object(d.jsxs)("div",{className:"details",children:[Object(d.jsx)("span",{className:"details__closer",onClick:function(){return a(null)},children:"\u292b"}),Object(d.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(e,".png"),onError:function(t){t.target.onError=null,t.target.src="https://www.pngplay.com/wp-content/uploads/11/Pokemon-GO-Logo-Free-PNG.png"},alt:e}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Attribute"}),Object(d.jsx)("th",{children:"Value"})]})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Type"}),Object(d.jsx)("td",{children:o})]}),i.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.name}),Object(d.jsx)("td",{children:t.value})]})})),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Weight"}),Object(d.jsx)("td",{children:r})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Total moves"}),Object(d.jsx)("td",{children:s.length})]})]})]})]})}n(33);function m(){var t=Object(c.useContext)(N),e=t.filterBy,n=t.setEndPoint,s=t.setFilterBy;return Object(d.jsxs)("div",{className:"tabs",children:[Object(d.jsx)("hr",{className:"tabs__line tabs__line--left"}),Object(d.jsx)("button",{className:"tabs__tab tabs__tab--all",disabled:!e,onClick:function(){s(""),n("?limit=12&offset=0")},children:"All"}),Object(d.jsx)("button",{className:"tabs__tab tabs__tab--filterBy",disabled:e,hidden:!e,children:e}),Object(d.jsx)("hr",{className:"tabs__line"})]})}n(34);function v(){return Object(d.jsx)("div",{className:"header",children:Object(d.jsx)(m,{})})}n(35);function _(){return Object(d.jsx)("div",{className:"footer"})}n(36);var g=n(48),k=function(t){var e=t.split("/");return e[e.length-1]},N=s.a.createContext();var y=function(){var t=Object(c.useState)(null),e=Object(l.a)(t,2),n=e[0],s=e[1],r=Object(c.useState)(null),a=Object(l.a)(r,2),j=a[0],O=a[1],p=Object(c.useState)(null),h=Object(l.a)(p,2),m=h[0],y=h[1],P=Object(c.useState)(null),w=Object(l.a)(P,2),A=w[0],C=w[1];Object(c.useEffect)((function(){b("pokemon/?limit=12&offset=0").then(s)}),[]),Object(c.useEffect)((function(){m&&b("type/".concat(m)).then((function(t){var e=t.pokemon.reduce((function(t,e){return[].concat(Object(o.a)(t),[e.pokemon])}),[]);s({results:e})}))}),[m]),Object(c.useEffect)((function(){if(A){var t=+A?O:s;b("pokemon/".concat(A)).then(t)}}),[A]);var E=j&&j.id;return Object(d.jsx)(N.Provider,{value:{setEndPoint:C,setFilterBy:y,activeCardId:E,filterBy:m},children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(v,{}),Object(d.jsxs)("div",{className:"App__main",children:[n?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"App__content-block",children:[Object(d.jsx)(f,{cards:n.results}),Object(d.jsxs)("div",{className:"App__buttons",children:[Object(d.jsx)("button",{className:"App__button",hidden:!n.previous,onClick:function(){return C(k(n.previous))},children:"Previous Page"}),Object(d.jsx)("button",{className:"App__button",hidden:!n.next,onClick:function(){return C(k(n.next))},children:"Next Page"})]})]})}):Object(d.jsx)(g.a,{}),Object(d.jsx)("div",{className:u()("App__details-block",{"App__details-block--is-open":!!j}),children:!!j&&Object(d.jsx)(x,Object(i.a)(Object(i.a)({},j),{},{onSetDetails:O}))})]}),Object(d.jsx)(_,{})]})})};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.caf1f5c8.chunk.js.map