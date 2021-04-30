(this["webpackJsonprewards-app"]=this["webpackJsonprewards-app"]||[]).push([[0],{23:function(e,n,t){},24:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){},28:function(e,n,t){},33:function(e,n,t){},34:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(9),a=t.n(c),s=(t(23),t(24),t(12)),i=(t(25),t(26),t(1)),o=function(e){var n=e.title;return Object(i.jsx)("div",{className:"Header",children:Object(i.jsx)("h1",{className:"font-weight-bold text-center text-primary",children:n})})},l=t(39),u=t(40),d=t(41),j=t(42),f=t(45),h=(t(28),{DATE_FORMAT:"DD/MM/YYYY",EXPIRY_LIMIT:10,BODY_LIMIT:200}),b={REWARDS_TITLE:"MY REWARDS & OFFERS",DETAILS:"VIEW DETAILS",EXPIRES_IN:"EXPIRES IN",EXPIRES_ON:"EXPIRES ON",DAYS:"DAYS",SEARCH:"Search",SEARCH_REWARDS:"Search Rewards"},O={SPACE:/\s+/g,TAGS:/<[^>]*>/g,ASCII:/(&#(\d+);)/g},x={getRewards:function(){return S.get("rewards.json")}},E=(t(29),new Headers({Accept:"application/json","Content-Type":"application/json"})),p=function(e){if(e.ok)return e;throw e},S={get:function(e){return function(e,n){return fetch(e,n).then(p).then((function(e){return e.json()})).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.resolve(e)}))}(e,function(e,n,t){return{method:e,headers:n,body:t}}("GET",E))}},g=t(11),I=t.n(g),m={parseDateString:function(e){return e?I()(e).format(h.DATE_FORMAT):""},parseHtml:function(e){return e?e.replace(O.TAGS,"").replace(O.ASCII,(function(e,n,t){return String.fromCharCode(t)})):""},daysDiff:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I()();return e?I()(e).diff(n,"days"):0}},R=function(e){var n=e.rewards,t=e.onClick,c=n.image_url,a=n.heading,s=n.body,o=Object(r.useRef)(null);Object(r.useEffect)((function(){var e=o.current.innerText;e.length>h.BODY_LIMIT&&(o.current.innerText=e.substring(0,h.BODY_LIMIT)+"...")}));var O=function(e){var n=m.daysDiff(e);if(n>=0&&n<=h.EXPIRY_LIMIT)return Object(i.jsx)("div",{children:Object(i.jsx)("b",{children:b.EXPIRES_IN+" "+n+" "+b.DAYS})})},x=function(e){return Object(i.jsxs)(i.Fragment,{children:[O(e),Object(i.jsx)("span",{children:b.EXPIRES_ON+" "+m.parseDateString(e)})]})};return Object(i.jsx)(l.a,{fluid:!0,className:"RewardsCard",children:Object(i.jsxs)(u.a,{className:"flex-row",children:[Object(i.jsx)(d.a,{xs:12,sm:3,className:"align-self-center",children:Object(i.jsx)(j.a,{src:c,alt:c,className:"logo"})}),Object(i.jsxs)(d.a,{className:"pt-5 pb-2",children:[Object(i.jsx)("h4",{children:a}),Object(i.jsx)("div",{className:"expiry-tag",children:x(n.usage_end_date)}),Object(i.jsx)("p",{className:"details",ref:o,dangerouslySetInnerHTML:{__html:s}}),Object(i.jsx)("div",{className:"expiry-tag-inline",children:x(n.usage_end_date)}),Object(i.jsx)(f.a,{block:!0,className:"view-button",onClick:function(){return t(n)},children:b.DETAILS})]})]})})},_=t(44),v=(t(33),function(e){var n=e.rewards,t=e.onClose;return Object(i.jsx)(i.Fragment,{children:n&&Object(i.jsxs)(_.a,{show:!!n,onHide:function(){return t()},centered:!0,dialogClassName:"RewardsModal",children:[Object(i.jsx)(_.a.Header,{closeButton:!0,children:Object(i.jsx)(_.a.Title,{children:n.heading})}),Object(i.jsxs)(_.a.Body,{children:[Object(i.jsx)(j.a,{src:n.image_url,alt:n.image_url,className:"logo"}),Object(i.jsx)("h4",{className:"text-secondary pt-3 pb-1",children:n.heading}),function(e){var n=m.daysDiff(e);if(n>0&&n<=h.EXPIRY_LIMIT)return Object(i.jsx)("p",{children:Object(i.jsx)("b",{children:b.EXPIRES_IN+" "+n+" "+b.DAYS})})}(n.usage_end_date),Object(i.jsx)("p",{children:b.EXPIRES_ON+" "+m.parseDateString(n.usage_end_date)}),Object(i.jsx)("p",{dangerouslySetInnerHTML:{__html:n.body}})]})]})})}),A=t(43),T=t(46),D=t(17),N=(t(34),function(e){var n=e.placeholder,t=void 0===n?b.SEARCH:n,c=e.onSearch,a=Object(r.useRef)(null);return Object(i.jsxs)(A.a,{className:"SearchInput",children:[Object(i.jsx)(T.a,{ref:a,placeholder:t,onKeyPress:function(e){"Enter"===e.key&&c(a.current.value)}}),Object(i.jsx)(A.a.Append,{children:Object(i.jsx)(f.a,{onClick:function(){return c(a.current.value)},children:Object(i.jsx)(D.a,{})})})]})}),C=function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(""),l=Object(s.a)(a,2),u=l[0],d=l[1],j=Object(r.useState)(),f=Object(s.a)(j,2),h=f[0],E=f[1];Object(r.useEffect)((function(){x.getRewards().then((function(e){var n=e.data;if(u.length>0){var t=[],r=u.split(O.SPACE);n.forEach((function(e){var n=!0;r.forEach((function(t){t=t.toLowerCase(),n=n&&(m.parseHtml(e.heading).toLowerCase().includes(t)||m.parseHtml(e.body).toLowerCase().includes(t))})),n&&t.push(e)})),c(t)}else c(n)})).catch((function(e){console.error(e)}))}),[u]);return Object(i.jsxs)("div",{className:"Rewards",children:[Object(i.jsx)(o,{title:b.REWARDS_TITLE}),Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)(N,{placeholder:b.SEARCH_REWARDS,onSearch:d}),function(){var e=[];return t.forEach((function(n,t){e.push(Object(i.jsx)(R,{rewards:n,onClick:E},t))})),e}()]}),Object(i.jsx)(v,{rewards:h,onClose:function(){return E(void 0)}})]})},w=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(C,{})})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),r(e),c(e),a(e),s(e)}))};a.a.render(Object(i.jsx)(w,{}),document.getElementById("root")),y()}},[[37,1,2]]]);
//# sourceMappingURL=main.b699bd50.chunk.js.map