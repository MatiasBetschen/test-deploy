var U=Object.defineProperty;var z=(e,t,n)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var x=(e,t,n)=>(z(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function a(){}function B(e){return e()}function A(){return Object.create(null)}function v(e){e.forEach(B)}function M(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function D(e){return Object.keys(e).length===0}function _(e,t){e.appendChild(t)}function V(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function G(e){return document.createTextNode(e)}function C(){return G(" ")}function J(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Q(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function W(e){return Array.from(e.childNodes)}let O;function m(e){O=e}const h=[],P=[];let p=[];const I=[],X=Promise.resolve();let b=!1;function Y(){b||(b=!0,X.then(k))}function L(e){p.push(e)}const w=new Set;let d=0;function k(){if(d!==0)return;const e=O;do{try{for(;d<h.length;){const t=h[d];d++,m(t),Z(t.$$)}}catch(t){throw h.length=0,d=0,t}for(m(null),h.length=0,d=0;P.length;)P.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];w.has(n)||(w.add(n),n())}p.length=0}while(h.length);for(;I.length;)I.pop()();b=!1,w.clear(),m(e)}function Z(e){if(e.fragment!==null){e.update(),v(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}function ee(e){const t=[],n=[];p.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),p=t}const y=new Set;let te;function q(e,t){e&&e.i&&(y.delete(e),e.i(t))}function ne(e,t,n,r){if(e&&e.o){if(y.has(e))return;y.add(e),te.c.push(()=>{y.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function re(e){e&&e.c()}function F(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),L(()=>{const i=e.$$.on_mount.map(B).filter(M);e.$$.on_destroy?e.$$.on_destroy.push(...i):v(i),e.$$.on_mount=[]}),o.forEach(L)}function H(e,t){const n=e.$$;n.fragment!==null&&(ee(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(e,t){e.$$.dirty[0]===-1&&(h.push(e),Y(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(e,t,n,r,o,i,c,f=[-1]){const u=O;m(e);const s=e.$$={fragment:null,ctx:[],props:i,update:a,not_equal:o,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:A(),dirty:f,skip_bound:!1,root:t.target||u.$$.root};c&&c(s.root);let $=!1;if(s.ctx=n?n(e,t.props||{},(l,j,...S)=>{const N=S.length?S[0]:j;return s.ctx&&o(s.ctx[l],s.ctx[l]=N)&&(!s.skip_bound&&s.bound[l]&&s.bound[l](N),$&&oe(e,l)),j}):[],s.update(),$=!0,v(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const l=W(t.target);s.fragment&&s.fragment.l(l),l.forEach(E)}else s.fragment&&s.fragment.c();t.intro&&q(e.$$.fragment),F(e,t.target,t.anchor),k()}m(u)}class R{constructor(){x(this,"$$");x(this,"$$set")}$destroy(){H(this,1),this.$destroy=a}$on(t,n){if(!M(n))return a;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!D(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const se="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(se);const ie="/test-deploy/assets/svelte-a39f39b7.svg",ce="/test-deploy/vite.svg";function ue(e){let t,n,r;return{c(){t=g("button"),t.textContent=`count is ${fe}`},m(o,i){V(o,t,i),n||(r=J(t,"click",e[0]),n=!0)},p:a,i:a,o:a,d(o){o&&E(t),n=!1,r()}}}let fe=0;function le(e){return[()=>{}]}class ae extends R{constructor(t){super(),K(this,t,le,ue,T,{})}}function de(e){let t,n,r,o,i,c,f,u;return f=new ae({}),{c(){t=g("main"),n=g("div"),n.innerHTML=`<a href="https://vitejs.dev" target="_blank" rel="noreferrer"><img src="${ce}" class="logo svelte-au4jjd" alt="Vite Logo"/></a> <a href="https://svelte.dev" target="_blank" rel="noreferrer"><img src="${ie}" class="logo svelte svelte-au4jjd" alt="Svelte Logo"/></a>`,r=C(),o=g("h1"),o.textContent="ShiftSwitch",i=C(),c=g("div"),re(f.$$.fragment),Q(c,"class","card")},m(s,$){V(s,t,$),_(t,n),_(t,r),_(t,o),_(t,i),_(t,c),F(f,c,null),u=!0},p:a,i(s){u||(q(f.$$.fragment,s),u=!0)},o(s){ne(f.$$.fragment,s),u=!1},d(s){s&&E(t),H(f)}}}class he extends R{constructor(t){super(),K(this,t,null,de,T,{})}}new he({target:document.getElementById("app")});
