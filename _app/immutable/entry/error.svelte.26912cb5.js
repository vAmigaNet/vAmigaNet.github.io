import{S,i as x,s as k,k as f,r as _,a as q,l as d,m as g,u as v,h as u,c as y,b as m,F as h,v as $,n as E,D as C}from"../chunks/index.5b7df20d.js";import{s as D}from"../chunks/singletons.8cdc700e.js";const F=()=>{const s=D;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},H={subscribe(s){return F().page.subscribe(s)}};function P(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=f("h1"),o=_(r),n=q(),i=f("p"),l=_(c)},l(e){t=d(e,"H1",{});var a=g(t);o=v(a,r),a.forEach(u),n=y(e),i=d(e,"P",{});var p=g(i);l=v(p,c),p.forEach(u)},m(e,a){m(e,t,a),h(t,o),m(e,n,a),m(e,i,a),h(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(l,c)},i:E,o:E,d(e){e&&u(t),e&&u(n),e&&u(i)}}}function j(s,t,r){let o;return C(s,H,n=>r(0,o=n)),[o]}let A=class extends S{constructor(t){super(),x(this,t,j,P,k,{})}};export{A as default};
