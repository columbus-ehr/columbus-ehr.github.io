(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const ko=!1;var ps=Array.isArray,eh=Array.prototype.indexOf,_s=Array.from,th=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,Za=Object.getOwnPropertyDescriptors,nh=Object.prototype,ih=Array.prototype,ms=Object.getPrototypeOf;function rh(n){return n()}function Lr(n){for(var e=0;e<n.length;e++)n[e]()}const Re=2,el=4,zi=8,gs=16,Ke=32,Zt=64,_i=128,we=256,mi=512,ye=1024,Ye=2048,en=4096,Be=8192,Ki=16384,sh=32768,Yi=65536,oh=1<<19,tl=1<<20,ot=Symbol("$state"),ah=Symbol("legacy props"),lh=Symbol("");function nl(n){return n===this.v}function ch(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function il(n){return!ch(n,this.v)}function uh(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function hh(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function dh(n){throw new Error("https://svelte.dev/e/effect_orphan")}function fh(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ph(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function _h(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function mh(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function gh(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Qi=!1,vh=!1;function yh(){Qi=!0}const vs=1,ys=2,rl=4,Eh=8,Ih=16,wh=1,bh=2,le=Symbol(),Ch="http://www.w3.org/1999/xhtml";let $=null;function Ro(n){$=n}function oe(n,e=!1,t){var i=$={p:$,c:null,d:!1,e:null,m:!1,s:n,x:null,l:null};Qi&&!e&&($.l={s:null,u:null,r1:[],r2:me(!1)}),pl(()=>{i.d=!0})}function ae(n){const e=$;if(e!==null){const o=e.e;if(o!==null){var t=F,i=L;e.e=null;try{for(var r=0;r<o.length;r++){var s=o[r];ft(s.effect),dt(s.reaction),Zi(s.fn)}}finally{ft(t),dt(i)}}$=e.p,e.m=!0}return{}}function $n(){return!Qi||$!==null&&$.l===null}const kn=new Map;function me(n,e){var t={f:0,v:n,reactions:null,equals:nl,rv:0,wv:0};return t}function J(n){return sl(me(n))}function Es(n,e=!1){var i;const t=me(n);return e||(t.equals=il),Qi&&$!==null&&$.l!==null&&((i=$.l).s??(i.s=[])).push(t),t}function Th(n,e=!1){return sl(Es(n,e))}function sl(n){return L!==null&&!be&&(L.f&Re)!==0&&(Pe===null?Fh([n]):Pe.push(n)),n}function M(n,e){return L!==null&&!be&&$n()&&(L.f&(Re|gs))!==0&&(Pe===null||!Pe.includes(n))&&gh(),Fr(n,e)}function Fr(n,e){if(!n.equals(e)){var t=n.v;jn?kn.set(n,e):kn.set(n,t),n.v=e,n.wv=bl(),ol(n,Ye),$n()&&F!==null&&(F.f&ye)!==0&&(F.f&(Ke|Zt))===0&&(Le===null?Uh([n]):Le.push(n))}return e}function ol(n,e){var t=n.reactions;if(t!==null)for(var i=$n(),r=t.length,s=0;s<r;s++){var o=t[s],a=o.f;(a&Ye)===0&&(!i&&o===F||(xe(o,e),(a&(ye|we))!==0&&((a&Re)!==0?ol(o,en):nr(o))))}}let Sh=!1;function B(n,e=null,t){if(typeof n!="object"||n===null||ot in n)return n;const i=ms(n);if(i!==nh&&i!==ih)return n;var r=new Map,s=ps(n),o=me(0);s&&r.set("length",me(n.length));var a;return new Proxy(n,{defineProperty(l,c,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&ph();var d=r.get(c);return d===void 0?(d=me(u.value),r.set(c,d)):M(d,B(u.value,a)),!0},deleteProperty(l,c){var u=r.get(c);if(u===void 0)c in l&&r.set(c,me(le));else{if(s&&typeof c=="string"){var d=r.get("length"),h=Number(c);Number.isInteger(h)&&h<d.v&&M(d,h)}M(u,le),No(o)}return!0},get(l,c,u){var p;if(c===ot)return n;var d=r.get(c),h=c in l;if(d===void 0&&(!h||(p=Wt(l,c))!=null&&p.writable)&&(d=me(B(h?l[c]:le,a)),r.set(c,d)),d!==void 0){var f=m(d);return f===le?void 0:f}return Reflect.get(l,c,u)},getOwnPropertyDescriptor(l,c){var u=Reflect.getOwnPropertyDescriptor(l,c);if(u&&"value"in u){var d=r.get(c);d&&(u.value=m(d))}else if(u===void 0){var h=r.get(c),f=h==null?void 0:h.v;if(h!==void 0&&f!==le)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return u},has(l,c){var f;if(c===ot)return!0;var u=r.get(c),d=u!==void 0&&u.v!==le||Reflect.has(l,c);if(u!==void 0||F!==null&&(!d||(f=Wt(l,c))!=null&&f.writable)){u===void 0&&(u=me(d?B(l[c],a):le),r.set(c,u));var h=m(u);if(h===le)return!1}return d},set(l,c,u,d){var T;var h=r.get(c),f=c in l;if(s&&c==="length")for(var p=u;p<h.v;p+=1){var g=r.get(p+"");g!==void 0?M(g,le):p in l&&(g=me(le),r.set(p+"",g))}h===void 0?(!f||(T=Wt(l,c))!=null&&T.writable)&&(h=me(void 0),M(h,B(u,a)),r.set(c,h)):(f=h.v!==le,M(h,B(u,a)));var v=Reflect.getOwnPropertyDescriptor(l,c);if(v!=null&&v.set&&v.set.call(d,u),!f){if(s&&typeof c=="string"){var b=r.get("length"),E=Number(c);Number.isInteger(E)&&E>=b.v&&M(b,E+1)}No(o)}return!0},ownKeys(l){m(o);var c=Reflect.ownKeys(l).filter(h=>{var f=r.get(h);return f===void 0||f.v!==le});for(var[u,d]of r)d.v!==le&&!(u in l)&&c.push(u);return c},setPrototypeOf(){_h()}})}function No(n,e=1){M(n,n.v+e)}function Ao(n){return n!==null&&typeof n=="object"&&ot in n?n[ot]:n}function kh(n,e){return Object.is(Ao(n),Ao(e))}var Po,al,ll,cl;function Rh(){if(Po===void 0){Po=window,al=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype;ll=Wt(e,"firstChild").get,cl=Wt(e,"nextSibling").get,n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0,Text.prototype.__t=void 0}}function Is(n=""){return document.createTextNode(n)}function gi(n){return ll.call(n)}function Ji(n){return cl.call(n)}function P(n,e){return gi(n)}function ge(n,e){{var t=gi(n);return t instanceof Comment&&t.data===""?Ji(t):t}}function w(n,e=1,t=!1){let i=n;for(;e--;)i=Ji(i);return i}function Nh(n){n.textContent=""}function Xi(n){var e=Re|Ye,t=L!==null&&(L.f&Re)!==0?L:null;return F===null||t!==null&&(t.f&we)!==0?e|=we:F.f|=tl,{ctx:$,deps:null,effects:null,equals:nl,f:e,fn:n,reactions:null,rv:0,v:null,wv:0,parent:t??F}}function ul(n){const e=Xi(n);return e.equals=il,e}function hl(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)ht(e[t])}}function Ah(n){for(var e=n.parent;e!==null;){if((e.f&Re)===0)return e;e=e.parent}return null}function Ph(n){var e,t=F;ft(Ah(n));try{hl(n),e=Tl(n)}finally{ft(t)}return e}function dl(n){var e=Ph(n),t=(st||(n.f&we)!==0)&&n.deps!==null?en:ye;xe(n,t),n.equals(e)||(n.v=e,n.wv=bl())}function fl(n){F===null&&L===null&&dh(),L!==null&&(L.f&we)!==0&&F===null&&hh(),jn&&uh()}function Oh(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function tn(n,e,t,i=!0){var r=F,s={ctx:$,deps:null,nodes_start:null,nodes_end:null,f:n|Ye,first:null,fn:e,last:null,next:null,parent:r,prev:null,teardown:null,transitions:null,wv:0};if(t)try{bs(s),s.f|=sh}catch(l){throw ht(s),l}else e!==null&&nr(s);var o=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(tl|_i))===0;if(!o&&i&&(r!==null&&Oh(s,r),L!==null&&(L.f&Re)!==0)){var a=L;(a.effects??(a.effects=[])).push(s)}return s}function pl(n){const e=tn(zi,null,!1);return xe(e,ye),e.teardown=n,e}function Oo(n){fl();var e=F!==null&&(F.f&Ke)!==0&&$!==null&&!$.m;if(e){var t=$;(t.e??(t.e=[])).push({fn:n,effect:F,reaction:L})}else{var i=Zi(n);return i}}function Dh(n){return fl(),_l(n)}function xh(n){const e=tn(Zt,n,!0);return(t={})=>new Promise(i=>{t.outro?Rn(e,()=>{ht(e),i(void 0)}):(ht(e),i(void 0))})}function Zi(n){return tn(el,n,!1)}function _l(n){return tn(zi,n,!0)}function Ee(n,e=[],t=Xi){const i=e.map(t);return er(()=>n(...i.map(m)))}function er(n,e=0){return tn(zi|gs|e,n,!0)}function Gt(n,e=!0){return tn(zi|Ke,n,!0,e)}function ml(n){var e=n.teardown;if(e!==null){const t=jn,i=L;Do(!0),dt(null);try{e.call(null)}finally{Do(t),dt(i)}}}function gl(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){var i=t.next;(t.f&Zt)!==0?t.parent=null:ht(t,e),t=i}}function Mh(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&Ke)===0&&ht(e),e=t}}function ht(n,e=!0){var t=!1;if((e||(n.f&oh)!==0)&&n.nodes_start!==null){for(var i=n.nodes_start,r=n.nodes_end;i!==null;){var s=i===r?null:Ji(i);i.remove(),i=s}t=!0}gl(n,e&&!t),wi(n,0),xe(n,Ki);var o=n.transitions;if(o!==null)for(const l of o)l.stop();ml(n);var a=n.parent;a!==null&&a.first!==null&&vl(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function vl(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function Rn(n,e){var t=[];ws(n,t,!0),yl(t,()=>{ht(n),e&&e()})}function yl(n,e){var t=n.length;if(t>0){var i=()=>--t||e();for(var r of n)r.out(i)}else e()}function ws(n,e,t){if((n.f&Be)===0){if(n.f^=Be,n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&e.push(o);for(var i=n.first;i!==null;){var r=i.next,s=(i.f&Yi)!==0||(i.f&Ke)!==0;ws(i,e,s?t:!1),i=r}}}function vi(n){El(n,!0)}function El(n,e){if((n.f&Be)!==0){n.f^=Be,(n.f&ye)===0&&(n.f^=ye),qn(n)&&(xe(n,Ye),nr(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&Yi)!==0||(t.f&Ke)!==0;El(t,r?e:!1),t=i}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||e)&&s.in()}}let yi=[];function Lh(){var n=yi;yi=[],Lr(n)}function Il(n){yi.length===0&&queueMicrotask(Lh),yi.push(n)}let ai=!1,Ur=!1,Ei=null,wt=!1,jn=!1;function Do(n){jn=n}let li=[];let L=null,be=!1;function dt(n){L=n}let F=null;function ft(n){F=n}let Pe=null;function Fh(n){Pe=n}let re=null,_e=0,Le=null;function Uh(n){Le=n}let wl=1,Ii=0,st=!1;function bl(){return++wl}function qn(n){var d;var e=n.f;if((e&Ye)!==0)return!0;if((e&en)!==0){var t=n.deps,i=(e&we)!==0;if(t!==null){var r,s,o=(e&mi)!==0,a=i&&F!==null&&!st,l=t.length;if(o||a){var c=n,u=c.parent;for(r=0;r<l;r++)s=t[r],(o||!((d=s==null?void 0:s.reactions)!=null&&d.includes(c)))&&(s.reactions??(s.reactions=[])).push(c);o&&(c.f^=mi),a&&u!==null&&(u.f&we)===0&&(c.f^=we)}for(r=0;r<l;r++)if(s=t[r],qn(s)&&dl(s),s.wv>n.wv)return!0}(!i||F!==null&&!st)&&xe(n,ye)}return!1}function Wh(n,e){for(var t=e;t!==null;){if((t.f&_i)!==0)try{t.fn(n);return}catch{t.f^=_i}t=t.parent}throw ai=!1,n}function Vh(n){return(n.f&Ki)===0&&(n.parent===null||(n.parent.f&_i)===0)}function tr(n,e,t,i){if(ai){if(t===null&&(ai=!1),Vh(e))throw n;return}t!==null&&(ai=!0);{Wh(n,e);return}}function Cl(n,e,t=!0){var i=n.reactions;if(i!==null)for(var r=0;r<i.length;r++){var s=i[r];(s.f&Re)!==0?Cl(s,e,!1):e===s&&(t?xe(s,Ye):(s.f&ye)!==0&&xe(s,en),nr(s))}}function Tl(n){var f;var e=re,t=_e,i=Le,r=L,s=st,o=Pe,a=$,l=be,c=n.f;re=null,_e=0,Le=null,st=(c&we)!==0&&(be||!wt||L===null),L=(c&(Ke|Zt))===0?n:null,Pe=null,Ro(n.ctx),be=!1,Ii++;try{var u=(0,n.fn)(),d=n.deps;if(re!==null){var h;if(wi(n,_e),d!==null&&_e>0)for(d.length=_e+re.length,h=0;h<re.length;h++)d[_e+h]=re[h];else n.deps=d=re;if(!st)for(h=_e;h<d.length;h++)((f=d[h]).reactions??(f.reactions=[])).push(n)}else d!==null&&_e<d.length&&(wi(n,_e),d.length=_e);if($n()&&Le!==null&&!be&&d!==null&&(n.f&(Re|en|Ye))===0)for(h=0;h<Le.length;h++)Cl(Le[h],n);return r!==null&&Ii++,u}finally{re=e,_e=t,Le=i,L=r,st=s,Pe=o,Ro(a),be=l}}function Bh(n,e){let t=e.reactions;if(t!==null){var i=eh.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}t===null&&(e.f&Re)!==0&&(re===null||!re.includes(e))&&(xe(e,en),(e.f&(we|mi))===0&&(e.f^=mi),hl(e),wi(e,0))}function wi(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)Bh(n,t[i])}function bs(n){var e=n.f;if((e&Ki)===0){xe(n,ye);var t=F,i=$,r=wt;F=n,wt=!0;try{(e&gs)!==0?Mh(n):gl(n),ml(n);var s=Tl(n);n.teardown=typeof s=="function"?s:null,n.wv=wl;var o=n.deps,a;ko&&vh&&n.f&Ye}catch(l){tr(l,n,t,i||n.ctx)}finally{wt=r,F=t}}}function Hh(){try{fh()}catch(n){if(Ei!==null)tr(n,Ei,null);else throw n}}function $h(){var n=wt;try{var e=0;for(wt=!0;li.length>0;){e++>1e3&&Hh();var t=li,i=t.length;li=[];for(var r=0;r<i;r++){var s=qh(t[r]);jh(s)}}}finally{Ur=!1,wt=n,Ei=null,kn.clear()}}function jh(n){var e=n.length;if(e!==0)for(var t=0;t<e;t++){var i=n[t];if((i.f&(Ki|Be))===0)try{qn(i)&&(bs(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null?vl(i):i.fn=null))}catch(r){tr(r,i,null,i.ctx)}}}function nr(n){Ur||(Ur=!0,queueMicrotask($h));for(var e=Ei=n;e.parent!==null;){e=e.parent;var t=e.f;if((t&(Zt|Ke))!==0){if((t&ye)===0)return;e.f^=ye}}li.push(e)}function qh(n){for(var e=[],t=n;t!==null;){var i=t.f,r=(i&(Ke|Zt))!==0,s=r&&(i&ye)!==0;if(!s&&(i&Be)===0){if((i&el)!==0)e.push(t);else if(r)t.f^=ye;else{var o=L;try{L=t,qn(t)&&bs(t)}catch(c){tr(c,t,null,t.ctx)}finally{L=o}}var a=t.first;if(a!==null){t=a;continue}}var l=t.parent;for(t=t.next;t===null&&l!==null;)t=l.next,l=l.parent}return e}function m(n){var e=n.f,t=(e&Re)!==0;if(L!==null&&!be){Pe!==null&&Pe.includes(n)&&mh();var i=L.deps;n.rv<Ii&&(n.rv=Ii,re===null&&i!==null&&i[_e]===n?_e++:re===null?re=[n]:(!st||!re.includes(n))&&re.push(n))}else if(t&&n.deps===null&&n.effects===null){var r=n,s=r.parent;s!==null&&(s.f&we)===0&&(r.f^=we)}return t&&(r=n,qn(r)&&dl(r)),jn&&kn.has(n)?kn.get(n):n.v}function Cs(n){var e=be;try{return be=!0,n()}finally{be=e}}const Gh=-7169;function xe(n,e){n.f=n.f&Gh|e}function zh(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(ot in n)Wr(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&ot in t&&Wr(t)}}}function Wr(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let i in n)try{Wr(n[i],e)}catch{}const t=ms(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const i=Za(t);for(let r in i){const s=i[r].get;if(s)try{s.call(n)}catch{}}}}}const Kh=["touchstart","touchmove"];function Yh(n){return Kh.includes(n)}let xo=!1;function Qh(){xo||(xo=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var e;if(!n.defaultPrevented)for(const t of n.target.elements)(e=t.__on_r)==null||e.call(t)})},{capture:!0}))}function Sl(n){var e=L,t=F;dt(null),ft(null);try{return n()}finally{dt(e),ft(t)}}function kl(n,e,t,i=t){n.addEventListener(e,()=>Sl(t));const r=n.__on_r;r?n.__on_r=()=>{r(),i(!0)}:n.__on_r=()=>i(!0),Qh()}const Rl=new Set,Vr=new Set;function Jh(n,e,t,i={}){function r(s){if(i.capture||gn.call(e,s),!s.cancelBubble)return Sl(()=>t==null?void 0:t.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?Il(()=>{e.addEventListener(n,r,i)}):e.addEventListener(n,r,i),r}function nn(n,e,t,i,r){var s={capture:i,passive:r},o=Jh(n,e,t,s);(e===document.body||e===window||e===document)&&pl(()=>{e.removeEventListener(n,o,s)})}function Ot(n){for(var e=0;e<n.length;e++)Rl.add(n[e]);for(var t of Vr)t(n)}function gn(n){var E;var e=this,t=e.ownerDocument,i=n.type,r=((E=n.composedPath)==null?void 0:E.call(n))||[],s=r[0]||n.target,o=0,a=n.__root;if(a){var l=r.indexOf(a);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(s=r[o]||n.target,s!==e){th(n,"currentTarget",{configurable:!0,get(){return s||t}});var u=L,d=F;dt(null),ft(null);try{for(var h,f=[];s!==null;){var p=s.assignedSlot||s.parentNode||s.host||null;try{var g=s["__"+i];if(g!=null&&(!s.disabled||n.target===s))if(ps(g)){var[v,...b]=g;v.apply(s,[n,...b])}else g.call(s,n)}catch(T){h?f.push(T):h=T}if(n.cancelBubble||p===e||p===null)break;s=p}if(h){for(let T of f)queueMicrotask(()=>{throw T});throw h}}finally{n.__root=e,delete n.currentTarget,dt(u),ft(d)}}}function Xh(n){var e=document.createElement("template");return e.innerHTML=n,e.content}function Br(n,e){var t=F;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function A(n,e){var t=(e&wh)!==0,i=(e&bh)!==0,r,s=!n.startsWith("<!>");return()=>{r===void 0&&(r=Xh(s?n:"<!>"+n),t||(r=gi(r)));var o=i||al?document.importNode(r,!0):r.cloneNode(!0);if(t){var a=gi(o),l=o.lastChild;Br(a,l)}else Br(o,o);return o}}function Nl(){var n=document.createDocumentFragment(),e=document.createComment(""),t=Is();return n.append(e,t),Br(e,t),n}function S(n,e){n!==null&&n.before(e)}function de(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=t,n.nodeValue=t+"")}function Zh(n,e){return ed(n,e)}const Mt=new Map;function ed(n,{target:e,anchor:t,props:i={},events:r,context:s,intro:o=!0}){Rh();var a=new Set,l=d=>{for(var h=0;h<d.length;h++){var f=d[h];if(!a.has(f)){a.add(f);var p=Yh(f);e.addEventListener(f,gn,{passive:p});var g=Mt.get(f);g===void 0?(document.addEventListener(f,gn,{passive:p}),Mt.set(f,1)):Mt.set(f,g+1)}}};l(_s(Rl)),Vr.add(l);var c=void 0,u=xh(()=>{var d=t??e.appendChild(Is());return Gt(()=>{if(s){oe({});var h=$;h.c=s}r&&(i.$$events=r),c=n(d,i)||{},s&&ae()}),()=>{var p;for(var h of a){e.removeEventListener(h,gn);var f=Mt.get(h);--f===0?(document.removeEventListener(h,gn),Mt.delete(h)):Mt.set(h,f)}Vr.delete(l),d!==t&&((p=d.parentNode)==null||p.removeChild(d))}});return td.set(c,u),c}let td=new WeakMap;function bt(n,e,[t,i]=[0,0]){var r=n,s=null,o=null,a=le,l=t>0?Yi:0,c=!1;const u=(h,f=!0)=>{c=!0,d(f,h)},d=(h,f)=>{a!==(a=h)&&(a?(s?vi(s):f&&(s=Gt(()=>f(r))),o&&Rn(o,()=>{o=null})):(o?vi(o):f&&(o=Gt(()=>f(r,[t+1,i]))),s&&Rn(s,()=>{s=null})))};er(()=>{c=!1,e(u),c||d(null,null)},l)}function ee(n,e){return e}function nd(n,e,t,i){for(var r=[],s=e.length,o=0;o<s;o++)ws(e[o].e,r,!0);var a=s>0&&r.length===0&&t!==null;if(a){var l=t.parentNode;Nh(l),l.append(t),i.clear(),et(n,e[0].prev,e[s-1].next)}yl(r,()=>{for(var c=0;c<s;c++){var u=e[c];a||(i.delete(u.k),et(n,u.prev,u.next)),ht(u.e,!a)}})}function te(n,e,t,i,r,s=null){var o=n,a={flags:e,items:new Map,first:null},l=(e&rl)!==0;if(l){var c=n;o=c.appendChild(Is())}var u=null,d=!1,h=ul(()=>{var f=t();return ps(f)?f:f==null?[]:_s(f)});er(()=>{var f=m(h),p=f.length;d&&p===0||(d=p===0,id(f,a,o,r,e,i,t),s!==null&&(p===0?u?vi(u):u=Gt(()=>s(o)):u!==null&&Rn(u,()=>{u=null})),m(h))})}function id(n,e,t,i,r,s,o){var wo,bo,Co,To;var a=(r&Eh)!==0,l=(r&(vs|ys))!==0,c=n.length,u=e.items,d=e.first,h=d,f,p=null,g,v=[],b=[],E,T,C,O;if(a)for(O=0;O<c;O+=1)E=n[O],T=s(E,O),C=u.get(T),C!==void 0&&((wo=C.a)==null||wo.measure(),(g??(g=new Set)).add(C));for(O=0;O<c;O+=1){if(E=n[O],T=s(E,O),C=u.get(T),C===void 0){var pe=h?h.e.nodes_start:t;p=sd(pe,e,p,p===null?e.first:p.next,E,T,O,i,r,o),u.set(T,p),v=[],b=[],h=p.next;continue}if(l&&rd(C,E,O,r),(C.e.f&Be)!==0&&(vi(C.e),a&&((bo=C.a)==null||bo.unfix(),(g??(g=new Set)).delete(C))),C!==h){if(f!==void 0&&f.has(C)){if(v.length<b.length){var ie=b[0],X;p=ie.prev;var Ae=v[0],hn=v[v.length-1];for(X=0;X<v.length;X+=1)Mo(v[X],ie,t);for(X=0;X<b.length;X+=1)f.delete(b[X]);et(e,Ae.prev,hn.next),et(e,p,Ae),et(e,hn,ie),h=ie,p=hn,O-=1,v=[],b=[]}else f.delete(C),Mo(C,h,t),et(e,C.prev,C.next),et(e,C,p===null?e.first:p.next),et(e,p,C),p=C;continue}for(v=[],b=[];h!==null&&h.k!==T;)(h.e.f&Be)===0&&(f??(f=new Set)).add(h),b.push(h),h=h.next;if(h===null)continue;C=h}v.push(C),p=C,h=C.next}if(h!==null||f!==void 0){for(var dn=f===void 0?[]:_s(f);h!==null;)(h.e.f&Be)===0&&dn.push(h),h=h.next;var yr=dn.length;if(yr>0){var Zu=(r&rl)!==0&&c===0?t:null;if(a){for(O=0;O<yr;O+=1)(Co=dn[O].a)==null||Co.measure();for(O=0;O<yr;O+=1)(To=dn[O].a)==null||To.fix()}nd(e,dn,Zu,u)}}a&&Il(()=>{var So;if(g!==void 0)for(C of g)(So=C.a)==null||So.apply()}),F.first=e.first&&e.first.e,F.last=p&&p.e}function rd(n,e,t,i){(i&vs)!==0&&Fr(n.v,e),(i&ys)!==0?Fr(n.i,t):n.i=t}function sd(n,e,t,i,r,s,o,a,l,c){var u=(l&vs)!==0,d=(l&Ih)===0,h=u?d?Es(r):me(r):r,f=(l&ys)===0?o:me(o),p={i:f,v:h,k:s,a:null,e:null,prev:t,next:i};try{return p.e=Gt(()=>a(n,h,f,c),Sh),p.e.prev=t&&t.e,p.e.next=i&&i.e,t===null?e.first=p:(t.next=p,t.e.next=p.e),i!==null&&(i.prev=p,i.e.prev=p.e),p}finally{}}function Mo(n,e,t){for(var i=n.next?n.next.e.nodes_start:t,r=e?e.e.nodes_start:t,s=n.e.nodes_start;s!==i;){var o=Ji(s);r.before(s),s=o}}function et(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function od(n,e,t){var i=n,r,s;er(()=>{r!==(r=e())&&(s&&(Rn(s),s=null),r&&(s=Gt(()=>t(i,r))))},Yi)}function Al(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(t=Al(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function ad(){for(var n,e,t=0,i="",r=arguments.length;t<r;t++)(n=arguments[t])&&(e=Al(n))&&(i&&(i+=" "),i+=e);return i}function ld(n){return typeof n=="object"?ad(n):n??""}function cd(n,e,t){var i=n==null?"":""+n;return i=i?i+" "+e:e,i===""?null:i}function ud(n,e,t,i,r,s){var o=n.__className;if(o!==t){var a=cd(t,i);a==null?n.removeAttribute("class"):n.className=a,n.__className=t}return s}const hd=Symbol("is custom element"),dd=Symbol("is html");function gt(n,e,t,i){var r=fd(n);r[e]!==(r[e]=t)&&(e==="loading"&&(n[lh]=t),t==null?n.removeAttribute(e):typeof t!="string"&&pd(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function fd(n){return n.__attributes??(n.__attributes={[hd]:n.nodeName.includes("-"),[dd]:n.namespaceURI===Ch})}var Lo=new Map;function pd(n){var e=Lo.get(n.nodeName);if(e)return e;Lo.set(n.nodeName,e=[]);for(var t,i=n,r=Element.prototype;r!==i;){t=Za(i);for(var s in t)t[s].set&&e.push(s);i=ms(i)}return e}function ve(n,e,t=e){var i=$n();kl(n,"input",r=>{var s=r?n.defaultValue:n.value;if(s=Er(n)?Ir(s):s,t(s),i&&s!==(s=e())){var o=n.selectionStart,a=n.selectionEnd;n.value=s??"",a!==null&&(n.selectionStart=o,n.selectionEnd=Math.min(a,n.value.length))}}),Cs(e)==null&&n.value&&t(Er(n)?Ir(n.value):n.value),_l(()=>{var r=e();Er(n)&&r===Ir(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function Er(n){var e=n.type;return e==="number"||e==="range"}function Ir(n){return n===""?null:+n}function Pl(n,e,t){if(n.multiple)return md(n,e);for(var i of n.options){var r=En(i);if(kh(r,e)){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function _d(n,e){Zi(()=>{var t=new MutationObserver(()=>{var i=n.__value;Pl(n,i)});return t.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{t.disconnect()}})}function Nn(n,e,t=e){var i=!0;kl(n,"change",r=>{var s=r?"[selected]":":checked",o;if(n.multiple)o=[].map.call(n.querySelectorAll(s),En);else{var a=n.querySelector(s)??n.querySelector("option:not([disabled])");o=a&&En(a)}t(o)}),Zi(()=>{var r=e();if(Pl(n,r,i),i&&r===void 0){var s=n.querySelector(":checked");s!==null&&(r=En(s),t(r))}n.__value=r,i=!1}),_d(n)}function md(n,e){for(var t of n.options)t.selected=~e.indexOf(En(t))}function En(n){return"__value"in n?n.__value:n.value}function Ts(n=!1){const e=$,t=e.l.u;if(!t)return;let i=()=>zh(e.s);if(n){let r=0,s={};const o=Xi(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],a=!0);return a&&r++,r});i=()=>m(o)}t.b.length&&Dh(()=>{Fo(e,i),Lr(t.b)}),Oo(()=>{const r=Cs(()=>t.m.map(rh));return()=>{for(const s of r)typeof s=="function"&&s()}}),t.a.length&&Oo(()=>{Fo(e,i),Lr(t.a)})}function Fo(n,e){if(n.l.s)for(const t of n.l.s)m(t);e()}let ii=!1;function gd(n){var e=ii;try{return ii=!1,[n(),ii]}finally{ii=e}}function Uo(n){var e;return((e=n.ctx)==null?void 0:e.d)??!1}function ir(n,e,t,i){var b;var r=!1,s;[s,r]=gd(()=>n[e]);var o=ot in n||ah in n,a=(((b=Wt(n,e))==null?void 0:b.set)??(o&&e in n&&(E=>n[e]=E)))||void 0,l=i,c=!0,u=!1,d=()=>(u=!0,c&&(c=!1,l=i),l),h;if(h=()=>{var E=n[e];return E===void 0?d():(c=!0,u=!1,E)},a){var f=n.$$legacy;return function(E,T){return arguments.length>0?((!T||f||r)&&a(T?h():E),E):h()}}var p=!1,g=Es(s),v=Xi(()=>{var E=h(),T=m(g);return p?(p=!1,T):g.v=E});return m(v),function(E,T){if(arguments.length>0){const C=T?m(v):B(E);if(!v.equals(C)){if(p=!0,M(g,C),u&&l!==void 0&&(l=C),Uo(v))return E;Cs(()=>m(v))}return E}return Uo(v)?v.v:m(v)}}const vd="5";var Xa;typeof window<"u"&&((Xa=window.__svelte??(window.__svelte={})).v??(Xa.v=new Set)).add(vd);yh();const yd=()=>{};var Wo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=function(n,e){if(!n)throw rn(e)},rn=function(n){return new Error("Firebase Database ("+Ol.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Ed=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],a=n[t++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ss={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,a=o?n[r+1]:0,l=r+2<n.length,c=l?n[r+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),i.push(t[u],t[d],t[h],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Dl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ed(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const c=r<n.length?t[n.charAt(r)]:64;++r;const d=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||c==null||d==null)throw new Id;const h=s<<2|a>>4;if(i.push(h),c!==64){const f=a<<4&240|c>>2;if(i.push(f),d!==64){const p=c<<6&192|d;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Id extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xl=function(n){const e=Dl(n);return Ss.encodeByteArray(e,!0)},bi=function(n){return xl(n).replace(/\./g,"")},Ci=function(n){try{return Ss.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(n){return Ml(void 0,n)}function Ml(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!bd(t)||(n[t]=Ml(n[t],e[t]));return n}function bd(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=()=>Cd().__FIREBASE_DEFAULTS__,Sd=()=>{if(typeof process>"u"||typeof Wo>"u")return;const n=Wo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ci(n[1]);return e&&JSON.parse(e)},ks=()=>{try{return yd()||Td()||Sd()||kd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ll=n=>{var e,t;return(t=(e=ks())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Rd=n=>{const e=Ll(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Fl=()=>{var n;return(n=ks())===null||n===void 0?void 0:n.config},Ul=n=>{var e;return(e=ks())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[bi(JSON.stringify(t)),bi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function Ad(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Pd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Wl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Od(){const n=se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Dd(){return Ol.NODE_ADMIN===!0}function xd(){try{return typeof indexedDB=="object"}catch{return!1}}function Md(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="FirebaseError";class Me extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Ld,Object.setPrototypeOf(this,Me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gn.prototype.create)}}class Gn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Fd(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Me(r,a,i)}}function Fd(n,e){return n.replace(Ud,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Ud=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(n){return JSON.parse(n)}function Y(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=function(n){let e={},t={},i={},r="";try{const s=n.split(".");e=An(Ci(s[0])||""),t=An(Ci(s[1])||""),r=s[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:r}},Wd=function(n){const e=Vl(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Vd=function(n){const e=Vl(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function zt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Hr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ti(n,e,t){const i={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=e.call(t,n[r],r,n));return i}function Ct(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(Vo(s)&&Vo(o)){if(!Ct(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Vo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function vn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function yn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(r<<5|r>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<t;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function Hd(n,e){const t=new $d(n,e);return t.subscribe.bind(t)}class $d{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");jd(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=wr),r.error===void 0&&(r.error=wr),r.complete===void 0&&(r.complete=wr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function wr(){}function Ns(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,_(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},sr=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n){return n&&n._delegate?n._delegate:n}class Tt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new rr;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kd(e))try{this.getOrInitializeService({instanceIdentifier:vt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vt){return this.instances.has(e)}getOptions(e=vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:zd(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=vt){return this.component?this.component.multipleInstances?e:vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zd(n){return n===vt?void 0:n}function Kd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Gd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(x||(x={}));const Qd={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Jd=x.INFO,Xd={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},Zd=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=Xd[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class As{constructor(e){this.name=e,this._logLevel=Jd,this._logHandler=Zd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}const ef=(n,e)=>e.some(t=>n instanceof t);let Bo,Ho;function tf(){return Bo||(Bo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nf(){return Ho||(Ho=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bl=new WeakMap,$r=new WeakMap,Hl=new WeakMap,br=new WeakMap,Ps=new WeakMap;function rf(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(at(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Bl.set(t,n)}).catch(()=>{}),Ps.set(e,n),e}function sf(n){if($r.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});$r.set(n,e)}let jr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return $r.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Hl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return at(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function of(n){jr=n(jr)}function af(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Cr(this),e,...t);return Hl.set(i,e.sort?e.sort():[e]),at(i)}:nf().includes(n)?function(...e){return n.apply(Cr(this),e),at(Bl.get(this))}:function(...e){return at(n.apply(Cr(this),e))}}function lf(n){return typeof n=="function"?af(n):(n instanceof IDBTransaction&&sf(n),ef(n,tf())?new Proxy(n,jr):n)}function at(n){if(n instanceof IDBRequest)return rf(n);if(br.has(n))return br.get(n);const e=lf(n);return e!==n&&(br.set(n,e),Ps.set(e,n)),e}const Cr=n=>Ps.get(n);function cf(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=at(o);return i&&o.addEventListener("upgradeneeded",l=>{i(at(o.result),l.oldVersion,l.newVersion,at(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const uf=["get","getKey","getAll","getAllKeys","count"],hf=["put","add","delete","clear"],Tr=new Map;function $o(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Tr.get(e))return Tr.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=hf.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||uf.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),r&&l.done]))[0]};return Tr.set(e,s),s}of(n=>({...n,get:(e,t,i)=>$o(e,t)||n.get(e,t,i),has:(e,t)=>!!$o(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ff(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function ff(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qr="@firebase/app",jo="0.11.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new As("@firebase/app"),pf="@firebase/app-compat",_f="@firebase/analytics-compat",mf="@firebase/analytics",gf="@firebase/app-check-compat",vf="@firebase/app-check",yf="@firebase/auth",Ef="@firebase/auth-compat",If="@firebase/database",wf="@firebase/data-connect",bf="@firebase/database-compat",Cf="@firebase/functions",Tf="@firebase/functions-compat",Sf="@firebase/installations",kf="@firebase/installations-compat",Rf="@firebase/messaging",Nf="@firebase/messaging-compat",Af="@firebase/performance",Pf="@firebase/performance-compat",Of="@firebase/remote-config",Df="@firebase/remote-config-compat",xf="@firebase/storage",Mf="@firebase/storage-compat",Lf="@firebase/firestore",Ff="@firebase/vertexai",Uf="@firebase/firestore-compat",Wf="firebase",Vf="11.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="[DEFAULT]",Bf={[qr]:"fire-core",[pf]:"fire-core-compat",[mf]:"fire-analytics",[_f]:"fire-analytics-compat",[vf]:"fire-app-check",[gf]:"fire-app-check-compat",[yf]:"fire-auth",[Ef]:"fire-auth-compat",[If]:"fire-rtdb",[wf]:"fire-data-connect",[bf]:"fire-rtdb-compat",[Cf]:"fire-fn",[Tf]:"fire-fn-compat",[Sf]:"fire-iid",[kf]:"fire-iid-compat",[Rf]:"fire-fcm",[Nf]:"fire-fcm-compat",[Af]:"fire-perf",[Pf]:"fire-perf-compat",[Of]:"fire-rc",[Df]:"fire-rc-compat",[xf]:"fire-gcs",[Mf]:"fire-gcs-compat",[Lf]:"fire-fst",[Uf]:"fire-fst-compat",[Ff]:"fire-vertex","fire-js":"fire-js",[Wf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new Map,Hf=new Map,zr=new Map;function qo(n,e){try{n.container.addComponent(e)}catch(t){je.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kt(n){const e=n.name;if(zr.has(e))return je.debug(`There were multiple attempts to register component ${e}.`),!1;zr.set(e,n);for(const t of Si.values())qo(t,n);for(const t of Hf.values())qo(t,n);return!0}function Os(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ie(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lt=new Gn("app","Firebase",$f);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=Vf;function $l(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Gr,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw lt.create("bad-app-name",{appName:String(r)});if(t||(t=Fl()),!t)throw lt.create("no-options");const s=Si.get(r);if(s){if(Ct(t,s.options)&&Ct(i,s.config))return s;throw lt.create("duplicate-app",{appName:r})}const o=new Yd(r);for(const l of zr.values())o.addComponent(l);const a=new jf(t,i,o);return Si.set(r,a),a}function jl(n=Gr){const e=Si.get(n);if(!e&&n===Gr&&Fl())return $l();if(!e)throw lt.create("no-app",{appName:n});return e}function ct(n,e,t){var i;let r=(i=Bf[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),je.warn(a.join(" "));return}Kt(new Tt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="firebase-heartbeat-database",Gf=1,Pn="firebase-heartbeat-store";let Sr=null;function ql(){return Sr||(Sr=cf(qf,Gf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Pn)}catch(t){console.warn(t)}}}}).catch(n=>{throw lt.create("idb-open",{originalErrorMessage:n.message})})),Sr}async function zf(n){try{const t=(await ql()).transaction(Pn),i=await t.objectStore(Pn).get(Gl(n));return await t.done,i}catch(e){if(e instanceof Me)je.warn(e.message);else{const t=lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});je.warn(t.message)}}}async function Go(n,e){try{const i=(await ql()).transaction(Pn,"readwrite");await i.objectStore(Pn).put(e,Gl(n)),await i.done}catch(t){if(t instanceof Me)je.warn(t.message);else{const i=lt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});je.warn(i.message)}}}function Gl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=1024,Yf=30;class Qf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Xf(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zo();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>Yf){const o=Zf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){je.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zo(),{heartbeatsToSend:i,unsentEntries:r}=Jf(this._heartbeatsCache.heartbeats),s=bi(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return je.warn(t),""}}}function zo(){return new Date().toISOString().substring(0,10)}function Jf(n,e=Kf){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Ko(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Ko(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Xf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xd()?Md().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Go(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Go(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ko(n){return bi(JSON.stringify({version:2,heartbeats:n})).length}function Zf(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(n){Kt(new Tt("platform-logger",e=>new df(e),"PRIVATE")),Kt(new Tt("heartbeat",e=>new Qf(e),"PRIVATE")),ct(qr,jo,n),ct(qr,jo,"esm2017"),ct("fire-js","")}ep("");function Ds(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function zl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tp=zl,Kl=new Gn("auth","Firebase",zl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new As("@firebase/auth");function np(n,...e){ki.logLevel<=x.WARN&&ki.warn(`Auth (${on}): ${n}`,...e)}function ci(n,...e){ki.logLevel<=x.ERROR&&ki.error(`Auth (${on}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(n,...e){throw xs(n,...e)}function Oe(n,...e){return xs(n,...e)}function Yl(n,e,t){const i=Object.assign(Object.assign({},tp()),{[e]:t});return new Gn("auth","Firebase",i).create(e,{appName:n.name})}function He(n){return Yl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xs(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Kl.create(n,...e)}function y(n,e,...t){if(!n)throw xs(e,...t)}function Fe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ci(e),new Error(e)}function qe(n,e){n||Fe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ip(){return Yo()==="http:"||Yo()==="https:"}function Yo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ip()||Pd()||"connection"in navigator)?navigator.onLine:!0}function sp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t){this.shortDelay=e,this.longDelay=t,qe(t>e,"Short delay should be less than long delay!"),this.isMobile=Rs()||Wl()}get(){return rp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(n,e){qe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=new zn(3e4,6e4);function Je(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Xe(n,e,t,i,r={}){return Jl(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=sn(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:l},s);return Ad()||(c.referrerPolicy="no-referrer"),Ql.fetch()(Xl(n,n.config.apiHost,t,a),c)})}async function Jl(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},op),e);try{const r=new cp(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ri(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ri(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ri(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw ri(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Yl(n,u,c);Ne(n,u)}}catch(r){if(r instanceof Me)throw r;Ne(n,"network-request-failed",{message:String(r)})}}async function Kn(n,e,t,i,r={}){const s=await Xe(n,e,t,i,r);return"mfaPendingCredential"in s&&Ne(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Xl(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?Ms(n.config,r):`${n.config.apiScheme}://${r}`}function lp(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Oe(this.auth,"network-request-failed")),ap.get())})}}function ri(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=Oe(n,e,i);return r.customData._tokenResponse=t,r}function Qo(n){return n!==void 0&&n.enterprise!==void 0}class up{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return lp(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function hp(n,e){return Xe(n,"GET","/v2/recaptchaConfig",Je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dp(n,e){return Xe(n,"POST","/v1/accounts:delete",e)}async function Zl(n,e){return Xe(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fp(n,e=!1){const t=ne(n),i=await t.getIdToken(e),r=Ls(i);y(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:In(kr(r.auth_time)),issuedAtTime:In(kr(r.iat)),expirationTime:In(kr(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kr(n){return Number(n)*1e3}function Ls(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ci("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ci(t);return r?JSON.parse(r):(ci("Failed to decode base64 JWT payload"),null)}catch(r){return ci("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Jo(n){const e=Ls(n);return y(e,"internal-error"),y(typeof e.exp<"u","internal-error"),y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Me&&pp(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function pp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=In(this.lastLoginAt),this.creationTime=In(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(n){var e;const t=n.auth,i=await n.getIdToken(),r=await On(n,Zl(t,{idToken:i}));y(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ec(s.providerUserInfo):[],a=gp(n.providerData,o),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Yr(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function mp(n){const e=ne(n);await Ri(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gp(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function ec(n){return n.map(e=>{var{providerId:t}=e,i=Ds(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(n,e){const t=await Jl(n,{},async()=>{const i=sn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=Xl(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ql.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function yp(n,e){return Xe(n,"POST","/v2/accounts:revokeToken",Je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken<"u","internal-error"),y(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){y(e.length!==0,"internal-error");const t=Jo(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await vp(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new Vt;return i&&(y(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(y(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vt,this.toJSON())}_performRefresh(){return Fe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n,e){y(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ue{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=Ds(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _p(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await On(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fp(this,e)}reload(){return mp(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ri(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ie(this.auth.app))return Promise.reject(He(this.auth));const e=await this.getIdToken();return await On(this,dp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,l,c,u;const d=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(r=t.email)!==null&&r!==void 0?r:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,v=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=t.createdAt)!==null&&c!==void 0?c:void 0,E=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:C,isAnonymous:O,providerData:pe,stsTokenManager:ie}=t;y(T&&ie,e,"internal-error");const X=Vt.fromJSON(this.name,ie);y(typeof T=="string",e,"internal-error"),Ze(d,e.name),Ze(h,e.name),y(typeof C=="boolean",e,"internal-error"),y(typeof O=="boolean",e,"internal-error"),Ze(f,e.name),Ze(p,e.name),Ze(g,e.name),Ze(v,e.name),Ze(b,e.name),Ze(E,e.name);const Ae=new Ue({uid:T,auth:e,email:h,emailVerified:C,displayName:d,isAnonymous:O,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:X,createdAt:b,lastLoginAt:E});return pe&&Array.isArray(pe)&&(Ae.providerData=pe.map(hn=>Object.assign({},hn))),v&&(Ae._redirectEventId=v),Ae}static async _fromIdTokenResponse(e,t,i=!1){const r=new Vt;r.updateFromServerResponse(t);const s=new Ue({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ri(s),s}static async _fromGetAccountInfoResponse(e,t,i){const r=t.users[0];y(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?ec(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new Vt;a.updateFromIdToken(i);const l=new Ue({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Yr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Map;function We(n){qe(n instanceof Function,"Expected a class definition");let e=Xo.get(n);return e?(qe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Xo.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}tc.type="NONE";const Zo=tc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n,e,t){return`firebase:${n}:${e}:${t}`}class Bt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=ui(this.userKey,r.apiKey,s),this.fullPersistenceKey=ui("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ue._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Bt(We(Zo),e,i);const r=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||We(Zo);const o=ui(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const d=Ue._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Bt(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Bt(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ac(e))return"Blackberry";if(lc(e))return"Webos";if(ic(e))return"Safari";if((e.includes("chrome/")||rc(e))&&!e.includes("edge/"))return"Chrome";if(oc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function nc(n=se()){return/firefox\//i.test(n)}function ic(n=se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rc(n=se()){return/crios\//i.test(n)}function sc(n=se()){return/iemobile/i.test(n)}function oc(n=se()){return/android/i.test(n)}function ac(n=se()){return/blackberry/i.test(n)}function lc(n=se()){return/webos/i.test(n)}function Fs(n=se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ep(n=se()){var e;return Fs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ip(){return Od()&&document.documentMode===10}function cc(n=se()){return Fs(n)||oc(n)||lc(n)||ac(n)||/windows phone/i.test(n)||sc(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(n,e=[]){let t;switch(n){case"Browser":t=ea(se());break;case"Worker":t=`${ea(se())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${on}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bp(n,e={}){return Xe(n,"GET","/v2/passwordPolicy",Je(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp=6;class Tp{constructor(e){var t,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Cp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ta(this),this.idTokenSubscription=new ta(this),this.beforeStateQueue=new wp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=We(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Bt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Zl(this,{idToken:e}),i=await Ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ie(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ri(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ie(this.app))return Promise.reject(He(this));const t=e?ne(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ie(this.app)?Promise.reject(He(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ie(this.app)?Promise.reject(He(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(We(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bp(this),t=new Tp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await yp(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&We(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await Bt.create(this,[We(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,r);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Ie(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&np(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Dt(n){return ne(n)}class ta{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hd(t=>this.observer=t)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let or={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kp(n){or=n}function hc(n){return or.loadJS(n)}function Rp(){return or.recaptchaEnterpriseScript}function Np(){return or.gapiScript}function Ap(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Pp{constructor(){this.enterprise=new Op}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Op{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Dp="recaptcha-enterprise",dc="NO_RECAPTCHA";class xp{constructor(e){this.type=Dp,this.auth=Dt(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{hp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new up(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;Qo(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(dc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Pp().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{i(this.auth).then(a=>{if(!t&&Qo(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Rp();l.length!==0&&(l+=a),hc(l).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function na(n,e,t,i=!1,r=!1){const s=new xp(n);let o;if(r)o=dc;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Qr(n,e,t,i,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await na(n,e,t,t==="getOobCode");return i(n,o)}else return i(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await na(n,e,t,t==="getOobCode");return i(n,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(n,e){const t=Os(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(Ct(s,e??{}))return r;Ne(r,"already-initialized")}return t.initialize({options:e})}function Lp(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(We);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Fp(n,e,t){const i=Dt(n);y(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=fc(e),{host:o,port:a}=Up(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){y(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),y(Ct(c,i.config.emulator)&&Ct(u,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=c,i.emulatorConfig=u,i.settings.appVerificationDisabledForTesting=!0,Wp()}function fc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Up(n){const e=fc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:ia(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:ia(o)}}}function ia(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Wp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Fe("not implemented")}_getIdTokenResponse(e){return Fe("not implemented")}_linkToIdToken(e,t){return Fe("not implemented")}_getReauthenticationResolver(e){return Fe("not implemented")}}async function Vp(n,e){return Xe(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bp(n,e){return Kn(n,"POST","/v1/accounts:signInWithPassword",Je(n,e))}async function Hp(n,e){return Xe(n,"POST","/v1/accounts:sendOobCode",Je(n,e))}async function $p(n,e){return Hp(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jp(n,e){return Kn(n,"POST","/v1/accounts:signInWithEmailLink",Je(n,e))}async function qp(n,e){return Kn(n,"POST","/v1/accounts:signInWithEmailLink",Je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Us{constructor(e,t,i,r=null){super("password",i),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Dn(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Dn(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qr(e,t,"signInWithPassword",Bp);case"emailLink":return jp(e,{email:this._email,oobCode:this._password});default:Ne(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qr(e,i,"signUpPassword",Vp);case"emailLink":return qp(e,{idToken:t,email:this._email,oobCode:this._password});default:Ne(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ht(n,e){return Kn(n,"POST","/v1/accounts:signInWithIdp",Je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="http://localhost";class St extends Us{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new St(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ne("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=Ds(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new St(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ht(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ht(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ht(e,t)}buildRequest(){const e={requestUri:Gp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Kp(n){const e=vn(yn(n)).link,t=e?vn(yn(e)).deep_link_id:null,i=vn(yn(n)).deep_link_id;return(i?vn(yn(i)).link:null)||i||t||e||n}class Ws{constructor(e){var t,i,r,s,o,a;const l=vn(yn(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=zp((r=l.mode)!==null&&r!==void 0?r:null);y(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Kp(e);try{return new Ws(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.providerId=an.PROVIDER_ID}static credential(e,t){return Dn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Ws.parseLink(t);return y(i,"argument-error"),Dn._fromEmailAndCode(e,i.code,i.tenantId)}}an.PROVIDER_ID="password";an.EMAIL_PASSWORD_SIGN_IN_METHOD="password";an.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends pc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Yn{constructor(){super("facebook.com")}static credential(e){return St._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch{return null}}}tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";tt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Yn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return St._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return nt.credential(t,i)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Yn{constructor(){super("github.com")}static credential(e){return St._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.GITHUB_SIGN_IN_METHOD="github.com";it.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Yn{constructor(){super("twitter.com")}static credential(e,t){return St._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return rt.credential(t,i)}catch{return null}}}rt.TWITTER_SIGN_IN_METHOD="twitter.com";rt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yp(n,e){return Kn(n,"POST","/v1/accounts:signUp",Je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await Ue._fromIdTokenResponse(e,i,r),o=ra(i);return new kt({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=ra(i);return new kt({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function ra(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Me{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Ni.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Ni(e,t,i,r)}}function _c(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ni._fromErrorAndOperation(n,s,e,i):s})}async function Qp(n,e,t=!1){const i=await On(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return kt._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jp(n,e,t=!1){const{auth:i}=n;if(Ie(i.app))return Promise.reject(He(i));const r="reauthenticate";try{const s=await On(n,_c(i,r,e,n),t);y(s.idToken,i,"internal-error");const o=Ls(s.idToken);y(o,i,"internal-error");const{sub:a}=o;return y(n.uid===a,i,"user-mismatch"),kt._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ne(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mc(n,e,t=!1){if(Ie(n.app))return Promise.reject(He(n));const i="signIn",r=await _c(n,i,e),s=await kt._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}async function Xp(n,e){return mc(Dt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(n,e,t){var i;y(((i=t.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),y(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),y(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(y(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(y(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gc(n){const e=Dt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function e_(n,e,t){if(Ie(n.app))return Promise.reject(He(n));const i=Dt(n),o=await Qr(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Yp).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&gc(n),l}),a=await kt._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function t_(n,e,t){return Ie(n.app)?Promise.reject(He(n)):Xp(ne(n),an.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&gc(n),i})}async function n_(n,e){const t=ne(n),r={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Zp(t.auth,r,e);const{email:s}=await $p(t.auth,r);s!==n.email&&await n.reload()}function i_(n,e,t,i){return ne(n).onIdTokenChanged(e,t,i)}function r_(n,e,t){return ne(n).beforeAuthStateChanged(e,t)}function s_(n,e,t,i){return ne(n).onAuthStateChanged(e,t,i)}function vc(n){return ne(n).signOut()}const Ai="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ai,"1"),this.storage.removeItem(Ai),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=1e3,a_=10;class Ec extends yc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Ip()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,a_):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},o_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ec.type="LOCAL";const l_=Ec;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends yc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ic.type="SESSION";const wc=Ic;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new ar(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await c_(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ar.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Vs("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return window}function h_(n){De().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(){return typeof De().WorkerGlobalScope<"u"&&typeof De().importScripts=="function"}async function d_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function f_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function p_(){return bc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="firebaseLocalStorageDb",__=1,Pi="firebaseLocalStorage",Tc="fbase_key";class Qn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function lr(n,e){return n.transaction([Pi],e?"readwrite":"readonly").objectStore(Pi)}function m_(){const n=indexedDB.deleteDatabase(Cc);return new Qn(n).toPromise()}function Jr(){const n=indexedDB.open(Cc,__);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Pi,{keyPath:Tc})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Pi)?e(i):(i.close(),await m_(),e(await Jr()))})})}async function sa(n,e,t){const i=lr(n,!0).put({[Tc]:e,value:t});return new Qn(i).toPromise()}async function g_(n,e){const t=lr(n,!1).get(e),i=await new Qn(t).toPromise();return i===void 0?null:i.value}function oa(n,e){const t=lr(n,!0).delete(e);return new Qn(t).toPromise()}const v_=800,y_=3;class Sc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>y_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ar._getInstance(p_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await d_(),!this.activeServiceWorker)return;this.sender=new u_(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||f_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jr();return await sa(e,Ai,"1"),await oa(e,Ai),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>sa(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>g_(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>oa(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=lr(r,!1).getAll();return new Qn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),v_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sc.type="LOCAL";const E_=Sc;new zn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(n,e){return e?We(e):(y(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends Us{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ht(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ht(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ht(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function w_(n){return mc(n.auth,new Bs(n),n.bypassAuthState)}function b_(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),Jp(t,new Bs(n),n.bypassAuthState)}async function C_(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),Qp(t,new Bs(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return w_;case"linkViaPopup":case"linkViaRedirect":return C_;case"reauthViaPopup":case"reauthViaRedirect":return b_;default:Ne(this.auth,"internal-error")}}resolve(e){qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=new zn(2e3,1e4);class Ft extends kc{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Ft.currentPopupAction&&Ft.currentPopupAction.cancel(),Ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){qe(this.filter.length===1,"Popup operations only handle one event");const e=Vs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Oe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Oe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Oe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,T_.get())};e()}}Ft.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="pendingRedirect",hi=new Map;class k_ extends kc{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=hi.get(this.auth._key());if(!e){try{const i=await R_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}hi.set(this.auth._key(),e)}return this.bypassAuthState||hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function R_(n,e){const t=P_(e),i=A_(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function N_(n,e){hi.set(n._key(),e)}function A_(n){return We(n._redirectPersistence)}function P_(n){return ui(S_,n.config.apiKey,n.name)}async function O_(n,e,t=!1){if(Ie(n.app))return Promise.reject(He(n));const i=Dt(n),r=I_(i,e),o=await new k_(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=10*60*1e3;class x_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!M_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Rc(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Oe(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=D_&&this.cachedEventUids.clear(),this.cachedEventUids.has(aa(e))}saveEventToCache(e){this.cachedEventUids.add(aa(e)),this.lastProcessedEventTime=Date.now()}}function aa(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Rc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function M_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(n,e={}){return Xe(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,U_=/^https?/;async function W_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await L_(n);for(const t of e)try{if(V_(t))return}catch{}Ne(n,"unauthorized-domain")}function V_(n){const e=Kr(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!U_.test(t))return!1;if(F_.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=new zn(3e4,6e4);function la(){const n=De().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function H_(n){return new Promise((e,t)=>{var i,r,s;function o(){la(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{la(),t(Oe(n,"network-request-failed"))},timeout:B_.get()})}if(!((r=(i=De().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=De().gapi)===null||s===void 0)&&s.load)o();else{const a=Ap("iframefcb");return De()[a]=()=>{gapi.load?o():t(Oe(n,"network-request-failed"))},hc(`${Np()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw di=null,e})}let di=null;function $_(n){return di=di||H_(n),di}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=new zn(5e3,15e3),q_="__/auth/iframe",G_="emulator/auth/iframe",z_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},K_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Y_(n){const e=n.config;y(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ms(e,G_):`https://${n.config.authDomain}/${q_}`,i={apiKey:e.apiKey,appName:n.name,v:on},r=K_.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${sn(i).slice(1)}`}async function Q_(n){const e=await $_(n),t=De().gapi;return y(t,n,"internal-error"),e.open({where:document.body,url:Y_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:z_,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Oe(n,"network-request-failed"),a=De().setTimeout(()=>{s(o)},j_.get());function l(){De().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},X_=500,Z_=600,em="_blank",tm="http://localhost";class ca{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nm(n,e,t,i=X_,r=Z_){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},J_),{width:i.toString(),height:r.toString(),top:s,left:o}),c=se().toLowerCase();t&&(a=rc(c)?em:t),nc(c)&&(e=e||tm,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if(Ep(c)&&a!=="_self")return im(e||"",a),new ca(null);const d=window.open(e||"",a,u);y(d,n,"popup-blocked");try{d.focus()}catch{}return new ca(d)}function im(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="__/auth/handler",sm="emulator/auth/handler",om=encodeURIComponent("fac");async function ua(n,e,t,i,r,s){y(n.config.authDomain,n,"auth-domain-config-required"),y(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:on,eventId:r};if(e instanceof pc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Hr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Yn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${om}=${encodeURIComponent(l)}`:"";return`${am(n)}?${sn(a).slice(1)}${c}`}function am({config:n}){return n.emulator?Ms(n,sm):`https://${n.authDomain}/${rm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="webStorageSupport";class lm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wc,this._completeRedirectFn=O_,this._overrideRedirectResult=N_}async _openPopup(e,t,i,r){var s;qe((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ua(e,t,i,Kr(),r);return nm(e,o,Vs())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await ua(e,t,i,Kr(),r);return h_(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(qe(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Q_(e),i=new x_(e);return t.register("authEvent",r=>(y(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Rr,{type:Rr},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Rr];o!==void 0&&t(!!o),Ne(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=W_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cc()||ic()||Fs()}}const cm=lm;var ha="@firebase/auth",da="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dm(n){Kt(new Tt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uc(n)},c=new Sp(i,r,s,l);return Lp(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Kt(new Tt("auth-internal",e=>{const t=Dt(e.getProvider("auth").getImmediate());return(i=>new um(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ct(ha,da,hm(n)),ct(ha,da,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=5*60,pm=Ul("authIdTokenMaxAge")||fm;let fa=null;const _m=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>pm)return;const r=t==null?void 0:t.token;fa!==r&&(fa=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function mm(n=jl()){const e=Os(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Mp(n,{popupRedirectResolver:cm,persistence:[E_,l_,wc]}),i=Ul("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=_m(s.toString());r_(t,o,()=>o(t.currentUser)),i_(t,a=>o(a))}}const r=Ll("auth");return r&&Fp(t,`http://${r}`),t}function gm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}kp({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=Oe("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",gm().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dm("Browser");var vm="firebase",ym="11.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct(vm,ym,"app");var pa={};const _a="@firebase/database",ma="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc="";function Em(n){Nc=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Y(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:An(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Qe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Im(e)}}catch{}return new wm},Et=Ac("localStorage"),bm=Ac("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new As("@firebase/database"),Cm=function(){let n=1;return function(){return n++}}(),Pc=function(n){const e=qd(n),t=new Bd;t.update(e);const i=t.digest();return Ss.encodeByteArray(i)},Jn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Jn.apply(null,i):typeof i=="object"?e+=Y(i):e+=i,e+=" "}return e};let wn=null,ga=!0;const Tm=function(n,e){_(!0,"Can't turn on custom loggers persistently."),$t.logLevel=x.VERBOSE,wn=$t.log.bind($t)},Z=function(...n){if(ga===!0&&(ga=!1,wn===null&&bm.get("logging_enabled")===!0&&Tm()),wn){const e=Jn.apply(null,n);wn(e)}},Xn=function(n){return function(...e){Z(n,...e)}},Xr=function(...n){const e="FIREBASE INTERNAL ERROR: "+Jn(...n);$t.error(e)},Ge=function(...n){const e=`FIREBASE FATAL ERROR: ${Jn(...n)}`;throw $t.error(e),new Error(e)},he=function(...n){const e="FIREBASE WARNING: "+Jn(...n);$t.warn(e)},Sm=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&he("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Oc=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},km=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Yt="[MIN_NAME]",Rt="[MAX_NAME]",ln=function(n,e){if(n===e)return 0;if(n===Yt||e===Rt)return-1;if(e===Yt||n===Rt)return 1;{const t=va(n),i=va(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Rm=function(n,e){return n===e?0:n<e?-1:1},fn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Y(e))},Hs=function(n){if(typeof n!="object"||n===null)return Y(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Y(e[i]),t+=":",t+=Hs(n[e[i]]);return t+="}",t},Dc=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let r=0;r<t;r+=e)r+e>t?i.push(n.substring(r,t)):i.push(n.substring(r,r+e));return i};function fe(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const xc=function(n){_(!Oc(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let r,s,o,a,l;n===0?(s=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),s=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Nm=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Am=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Pm(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Om=new RegExp("^-?(0*)\\d{1,10}$"),Dm=-2147483648,xm=2147483647,va=function(n){if(Om.test(n)){const e=Number(n);if(e>=Dm&&e<=xm)return e}return null},cn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw he("Exception was thrown by user callback.",t),e},Math.floor(0))}},Mm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},bn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Ie(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){he(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Z("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',he(e)}}class fi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="5",Mc="v",Lc="s",Fc="r",Uc="f",Wc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Vc="ls",Bc="p",Zr="ac",Hc="websocket",$c="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t,i,r,s=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Et.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Et.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Um(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function qc(n,e,t){_(typeof e=="string","typeof type must == string"),_(typeof t=="object","typeof params must == object");let i;if(e===Hc)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===$c)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Um(n)&&(t.ns=n.namespace);const r=[];return fe(t,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(){this.counters_={}}incrementCounter(e,t=1){Qe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return wd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr={},Ar={};function js(n){const e=n.toString();return Nr[e]||(Nr[e]=new Wm),Nr[e]}function Vm(n,e){const t=n.toString();return Ar[t]||(Ar[t]=e()),Ar[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&cn(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="start",Hm="close",$m="pLPCommand",jm="pRTLPCB",Gc="id",zc="pw",Kc="ser",qm="cb",Gm="seg",zm="ts",Km="d",Ym="dframe",Yc=1870,Qc=30,Qm=Yc-Qc,Jm=25e3,Xm=3e4;class Ut{constructor(e,t,i,r,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xn(e),this.stats_=js(t),this.urlFn=l=>(this.appCheckToken&&(l[Zr]=this.appCheckToken),qc(t,$c,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Bm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Xm)),km(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qs((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ya)this.id=a,this.password=l;else if(o===Hm)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[ya]="t",i[Kc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[qm]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Mc]=$s,this.transportSessionId&&(i[Lc]=this.transportSessionId),this.lastSessionId&&(i[Vc]=this.lastSessionId),this.applicationId&&(i[Bc]=this.applicationId),this.appCheckToken&&(i[Zr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Wc.test(location.hostname)&&(i[Fc]=Uc);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ut.forceAllow_=!0}static forceDisallow(){Ut.forceDisallow_=!0}static isAvailable(){return Ut.forceAllow_?!0:!Ut.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Nm()&&!Am()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Y(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=xl(t),r=Dc(i,Qm);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Ym]="t",i[Gc]=e,i[zc]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Y(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class qs{constructor(e,t,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Cm(),window[$m+this.uniqueCallbackIdentifier]=e,window[jm+this.uniqueCallbackIdentifier]=t,this.myIFrame=qs.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Z("frame writing exception"),a.stack&&Z(a.stack),Z(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Z("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Gc]=this.myID,e[zc]=this.myPW,e[Kc]=this.currentSerial;let t=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Qc+i.length<=Yc;){const o=this.pendingSegs.shift();i=i+"&"+Gm+r+"="+o.seg+"&"+zm+r+"="+o.ts+"&"+Km+r+"="+o.d,r++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(i,Math.floor(Jm)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Z("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=16384,eg=45e3;let Oi=null;typeof MozWebSocket<"u"?Oi=MozWebSocket:typeof WebSocket<"u"&&(Oi=WebSocket);class Ce{constructor(e,t,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xn(this.connId),this.stats_=js(t),this.connURL=Ce.connectionURL_(t,o,a,r,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,r,s){const o={};return o[Mc]=$s,typeof location<"u"&&location.hostname&&Wc.test(location.hostname)&&(o[Fc]=Uc),t&&(o[Lc]=t),i&&(o[Vc]=i),r&&(o[Zr]=r),s&&(o[Bc]=s),qc(e,Hc,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Et.set("previous_websocket_failure",!0);try{let i;Dd(),this.mySock=new Oi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Ce.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Oi!==null&&!Ce.forceDisallow_}static previouslyFailed(){return Et.isInMemoryStorage||Et.get("previous_websocket_failure")===!0}markConnectionHealthy(){Et.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=An(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Y(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Dc(t,Zm);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(eg))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ce.responsesRequiredToBeHealthy=2;Ce.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{static get ALL_TRANSPORTS(){return[Ut,Ce]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ce&&Ce.isAvailable();let i=t&&!Ce.previouslyFailed();if(e.webSocketOnly&&(t||he("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ce];else{const r=this.transports_=[];for(const s of xn.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);xn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=6e4,ng=5e3,ig=10*1024,rg=100*1024,Pr="t",Ea="d",sg="s",Ia="r",og="e",wa="o",ba="a",Ca="n",Ta="p",ag="h";class lg{constructor(e,t,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xn("c:"+this.id+":"),this.transportManager_=new xn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=bn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ig?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pr in e){const t=e[Pr];t===ba?this.upgradeIfSecondaryHealthy_():t===Ia?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===wa&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=fn("t",e),i=fn("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ta,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ba,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ca,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=fn("t",e),i=fn("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=fn(Pr,e);if(Ea in e){const i=e[Ea];if(t===ag){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===Ca){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===sg?this.onConnectionShutdown_(i):t===Ia?this.onReset_(i):t===og?Xr("Server Error: "+i):t===wa?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xr("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),$s!==i&&he("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),bn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):bn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ng))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ta,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Et.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{put(e,t,i,r){}merge(e,t,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const r=this.getInitialEvent(e);r&&t.apply(i,r)}off(e,t,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===t&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){_(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends Xc{static getInstance(){return new Di}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Rs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=32,ka=768;class U{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function D(){return new U("")}function k(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function pt(n){return n.pieces_.length-n.pieceNum_}function W(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new U(n.pieces_,e)}function Zc(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function cg(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function eu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function tu(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new U(e,0)}function j(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof U)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&t.push(i[r])}return new U(t,0)}function N(n){return n.pieceNum_>=n.pieces_.length}function ce(n,e){const t=k(n),i=k(e);if(t===null)return e;if(t===i)return ce(W(n),W(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Gs(n,e){if(pt(n)!==pt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Te(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(pt(n)>pt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class ug{constructor(e,t){this.errorPrefix_=t,this.parts_=eu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=sr(this.parts_[i]);nu(this)}}function hg(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=sr(e),nu(n)}function dg(n){const e=n.parts_.pop();n.byteLength_-=sr(e),n.parts_.length>0&&(n.byteLength_-=1)}function nu(n){if(n.byteLength_>ka)throw new Error(n.errorPrefix_+"has a key path longer than "+ka+" bytes ("+n.byteLength_+").");if(n.parts_.length>Sa)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sa+") or object contains a cycle "+yt(n))}function yt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends Xc{static getInstance(){return new zs}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=1e3,fg=60*5*1e3,Ra=30*1e3,pg=1.3,_g=3e4,mg="server_kill",Na=3;class $e extends Jc{constructor(e,t,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$e.nextPersistentConnectionId_++,this.log_=Xn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=pn,this.maxReconnectDelay_=fg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Di.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const r=++this.requestNumber_,s={r,a:e,b:t};this.log_(Y(s)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const t=new rr,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;$e.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Qe(e,"w")){const i=zt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();he(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Vd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ra)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Wd(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,t)}sendUnlisten_(e,t,i,r){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,r){const s={p:t,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,i,r){this.putInternal("p",e,t,i,r)}merge(e,t,i,r){this.putInternal("m",e,t,i,r)}putInternal(e,t,i,r,s){this.initConnection_();const o={p:t,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Y(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Xr("Unrecognized action received from server: "+Y(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=pn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=pn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_g&&(this.reconnectDelay_=pn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*pg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+$e.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Z("getToken() completed but was canceled"):(Z("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new lg(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{he(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(mg)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&he(d),l())}}}interrupt(e){Z("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Z("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hr(this.interruptReasons_)&&(this.reconnectDelay_=pn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(s=>Hs(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const i=new U(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(t),s.delete(t),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,t){Z("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Na&&(this.reconnectDelay_=Ra,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Z("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Na&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Nc.replace(/\./g,"-")]=1,Rs()?e["framework.cordova"]=1:Wl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Di.getInstance().currentlyOnline();return Hr(this.interruptReasons_)&&e}}$e.nextPersistentConnectionId_=0;$e.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new R(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new R(Yt,e),r=new R(Yt,t);return this.compare(i,r)!==0}minPost(){return R.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si;class iu extends cr{static get __EMPTY_NODE(){return si}static set __EMPTY_NODE(e){si=e}compare(e,t){return ln(e.name,t.name)}isDefinedOn(e){throw rn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return R.MIN}maxPost(){return new R(Rt,si)}makePost(e,t){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new R(e,si)}toString(){return".key"}}const jt=new iu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class G{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i??G.RED,this.left=r??ue.EMPTY_NODE,this.right=s??ue.EMPTY_NODE}copy(e,t,i,r,s){return new G(e??this.key,t??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,r;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ue.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}G.RED=!0;G.BLACK=!1;class gg{copy(e,t,i,r,s){return this}insert(e,t,i){return new G(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ue{constructor(e,t=ue.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ue(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,G.BLACK,null,null))}remove(e){return new ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,G.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,r=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new oi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new oi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new oi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new oi(this.root_,null,this.comparator_,!0,e)}}ue.EMPTY_NODE=new gg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(n,e){return ln(n.name,e.name)}function Ks(n,e){return ln(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es;function yg(n){es=n}const ru=function(n){return typeof n=="number"?"number:"+xc(n):"string:"+n},su=function(n){if(n.isLeafNode()){const e=n.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qe(e,".sv"),"Priority must be a string or number.")}else _(n===es||n.isEmpty(),"priority of unexpected type.");_(n===es||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Aa;class q{static set __childrenNodeConstructor(e){Aa=e}static get __childrenNodeConstructor(){return Aa}constructor(e,t=q.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),su(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new q(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:q.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return N(e)?this:k(e)===".priority"?this.priorityNode_:q.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:q.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=k(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(_(i!==".priority"||pt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,q.__childrenNodeConstructor.EMPTY_NODE.updateChild(W(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ru(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=xc(this.value_):e+=this.value_,this.lazyHash_=Pc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===q.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof q.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,r=q.VALUE_TYPE_ORDER.indexOf(t),s=q.VALUE_TYPE_ORDER.indexOf(i);return _(r>=0,"Unknown leaf type: "+t),_(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}q.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou,au;function Eg(n){ou=n}function Ig(n){au=n}class wg extends cr{compare(e,t){const i=e.node.getPriority(),r=t.node.getPriority(),s=i.compareTo(r);return s===0?ln(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return R.MIN}maxPost(){return new R(Rt,new q("[PRIORITY-POST]",au))}makePost(e,t){const i=ou(e);return new R(t,new q("[PRIORITY-POST]",i))}toString(){return".priority"}}const H=new wg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=Math.log(2);class Cg{constructor(e){const t=s=>parseInt(Math.log(s)/bg,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const xi=function(n,e,t,i){n.sort(e);const r=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=n[l],h=t?t(d):d,new G(h,d.node,G.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=r(l,f),g=r(f+1,c);return d=n[f],h=t?t(d):d,new G(h,d.node,G.BLACK,p,g)}},s=function(l){let c=null,u=null,d=n.length;const h=function(p,g){const v=d-p,b=d;d-=p;const E=r(v+1,b),T=n[v],C=t?t(T):T;f(new G(C,T.node,g,null,E))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),v=Math.pow(2,l.count-(p+1));g?h(v,G.BLACK):(h(v,G.BLACK),h(v,G.RED))}return u},o=new Cg(n.length),a=s(o);return new ue(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or;const Lt={};class Ve{static get Default(){return _(Lt&&H,"ChildrenNode.ts has not been loaded"),Or=Or||new Ve({".priority":Lt},{".priority":H}),Or}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=zt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ue?t:null}hasIndex(e){return Qe(this.indexSet_,e.toString())}addIndex(e,t){_(e!==jt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=t.getIterator(R.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=xi(i,e.getCompare()):a=Lt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ve(u,c)}addToIndexes(e,t){const i=Ti(this.indexes_,(r,s)=>{const o=zt(this.indexSet_,s);if(_(o,"Missing index implementation for "+s),r===Lt)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(R.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),xi(a,o.getCompare())}else return Lt;else{const a=t.get(e.name);let l=r;return a&&(l=l.remove(new R(e.name,a))),l.insert(e,e.node)}});return new Ve(i,this.indexSet_)}removeFromIndexes(e,t){const i=Ti(this.indexes_,r=>{if(r===Lt)return r;{const s=t.get(e.name);return s?r.remove(new R(e.name,s)):r}});return new Ve(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _n;class I{static get EMPTY_NODE(){return _n||(_n=new I(new ue(Ks),null,Ve.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&su(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_n}updatePriority(e){return this.children_.isEmpty()?this:new I(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?_n:t}}getChild(e){const t=k(e);return t===null?this:this.getImmediateChild(t).getChild(W(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new R(e,t);let r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?_n:this.priorityNode_;return new I(r,o,s)}}updateChild(e,t){const i=k(e);if(i===null)return t;{_(k(e)!==".priority"||pt(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(W(e),t);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,r=0,s=!0;if(this.forEachChild(H,(o,a)=>{t[o]=a.val(e),i++,s&&I.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ru(this.getPriority().val())+":"),this.forEachChild(H,(t,i)=>{const r=i.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":Pc(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new R(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new R(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new R(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,R.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,R.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zn?-1:0}withIndex(e){if(e===jt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new I(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===jt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(H),r=t.getIterator(H);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===jt?null:this.indexMap_.get(e.toString())}}I.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Tg extends I{constructor(){super(new ue(Ks),I.EMPTY_NODE,Ve.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return I.EMPTY_NODE}isEmpty(){return!1}}const Zn=new Tg;Object.defineProperties(R,{MIN:{value:new R(Yt,I.EMPTY_NODE)},MAX:{value:new R(Rt,Zn)}});iu.__EMPTY_NODE=I.EMPTY_NODE;q.__childrenNodeConstructor=I;yg(Zn);Ig(Zn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=!0;function Q(n,e=null){if(n===null)return I.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new q(t,Q(e))}if(!(n instanceof Array)&&Sg){const t=[];let i=!1;if(fe(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Q(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new R(o,l)))}}),t.length===0)return I.EMPTY_NODE;const s=xi(t,vg,o=>o.name,Ks);if(i){const o=xi(t,H.getCompare());return new I(s,Q(e),new Ve({".priority":o},{".priority":H}))}else return new I(s,Q(e),Ve.Default)}else{let t=I.EMPTY_NODE;return fe(n,(i,r)=>{if(Qe(n,i)&&i.substring(0,1)!=="."){const s=Q(r);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(i,s))}}),t.updatePriority(Q(e))}}Eg(Q);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg extends cr{constructor(e){super(),this.indexPath_=e,_(!N(e)&&k(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),r=this.extractChild(t.node),s=i.compareTo(r);return s===0?ln(e.name,t.name):s}makePost(e,t){const i=Q(e),r=I.EMPTY_NODE.updateChild(this.indexPath_,i);return new R(t,r)}maxPost(){const e=I.EMPTY_NODE.updateChild(this.indexPath_,Zn);return new R(Rt,e)}toString(){return eu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg extends cr{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ln(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return R.MIN}maxPost(){return R.MAX}makePost(e,t){const i=Q(e);return new R(t,i)}toString(){return".value"}}const Ng=new Rg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(n){return{type:"value",snapshotNode:n}}function Qt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Mn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ln(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Ag(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.index_=e}updateChild(e,t,i,r,s,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Mn(t,a)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Qt(t,i)):o.trackChildChange(Ln(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(H,(r,s)=>{t.hasChild(r)||i.trackChildChange(Mn(r,s))}),t.isLeafNode()||t.forEachChild(H,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(Ln(r,s,o))}else i.trackChildChange(Qt(r,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?I.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.indexedFilter_=new Ys(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fn.getStartPost_(e),this.endPost_=Fn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,r,s,o){return this.matches(new R(t,i))||(i=I.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,r,s,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=I.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(I.EMPTY_NODE);const s=this;return t.forEachChild(H,(o,a)=>{s.matches(new R(o,a))||(r=r.updateImmediateChild(o,I.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Fn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,r,s,o){return this.rangedFilter_.matches(new R(t,i))||(i=I.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,r,s,o):this.fullLimitUpdateChild_(e,t,i,s,o)}updateFullNode(e,t,i){let r;if(t.isLeafNode()||t.isEmpty())r=I.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=I.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(I.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,I.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,r,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;_(a.numChildren()===this.limit_,"");const l=new R(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let h=r.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!i.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(Ln(t,i,d)),a.updateImmediateChild(t,i);{s!=null&&s.trackChildChange(Mn(t,d));const g=a.updateImmediateChild(t,I.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Qt(h.name,h.node)),g.updateImmediateChild(h.name,h.node)):g}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Mn(c.name,c.node)),s.trackChildChange(Qt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,I.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=H}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yt}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Rt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===H}copy(){const e=new Qs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Og(n){return n.loadsAllData()?new Ys(n.getIndex()):n.hasLimit()?new Pg(n):new Fn(n)}function Pa(n){const e={};if(n.isDefault())return e;let t;if(n.index_===H?t="$priority":n.index_===Ng?t="$value":n.index_===jt?t="$key":(_(n.index_ instanceof kg,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Y(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Y(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Y(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Y(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Y(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Oa(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==H&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends Jc{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Xn("p:rest:"),this.listens_={}}listen(e,t,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Mi.getListenId_(e,i),a={};this.listens_[o]=a;const l=Pa(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,i),zt(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",r(h,null)}})}unlisten(e,t){const i=Mi.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Pa(e._queryParams),i=e._path.toString(),r=new rr;return this.restRequest_(i+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+sn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=An(a.responseText)}catch{he("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&he("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.rootNode_=I.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(){return{value:null,children:new Map}}function cu(n,e,t){if(N(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=k(e);n.children.has(i)||n.children.set(i,Li());const r=n.children.get(i);e=W(e),cu(r,e,t)}}function ts(n,e,t){n.value!==null?t(e,n.value):xg(n,(i,r)=>{const s=new U(e.toString()+"/"+i);ts(r,s,t)})}function xg(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&fe(this.last_,(i,r)=>{t[i]=t[i]-r}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=10*1e3,Lg=30*1e3,Fg=5*60*1e3;class Ug{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Mg(e);const i=Da+(Lg-Da)*Math.random();bn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;fe(e,(r,s)=>{s>0&&Qe(this.statsToReport_,r)&&(t[r]=s,i=!0)}),i&&this.server_.reportStats(t),bn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Fg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Se||(Se={}));function uu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Js(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xs(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Se.ACK_USER_WRITE,this.source=uu()}operationForChild(e){if(N(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new U(e));return new Fi(D(),t,this.revert)}}else return _(k(this.path)===e,"operationForChild called for unrelated child."),new Fi(W(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t){this.source=e,this.path=t,this.type=Se.LISTEN_COMPLETE}operationForChild(e){return N(this.path)?new Un(this.source,D()):new Un(this.source,W(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Se.OVERWRITE}operationForChild(e){return N(this.path)?new Nt(this.source,D(),this.snap.getImmediateChild(e)):new Nt(this.source,W(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Se.MERGE}operationForChild(e){if(N(this.path)){const t=this.children.subtree(new U(e));return t.isEmpty()?null:t.value?new Nt(this.source,D(),t.value):new Wn(this.source,D(),t)}else return _(k(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wn(this.source,W(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(N(e))return this.isFullyInitialized()&&!this.filtered_;const t=k(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Vg(n,e,t,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Ag(o.childName,o.snapshotNode))}),mn(n,r,"child_removed",e,i,t),mn(n,r,"child_added",e,i,t),mn(n,r,"child_moved",s,i,t),mn(n,r,"child_changed",e,i,t),mn(n,r,"value",e,i,t),r}function mn(n,e,t,i,r,s){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Hg(n,a,l)),o.forEach(a=>{const l=Bg(n,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Bg(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Hg(n,e,t){if(e.childName==null||t.childName==null)throw rn("Should only compare child_ events.");const i=new R(e.childName,e.snapshotNode),r=new R(t.childName,t.snapshotNode);return n.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(n,e){return{eventCache:n,serverCache:e}}function Cn(n,e,t,i){return ur(new At(e,t,i),n.serverCache)}function hu(n,e,t,i){return ur(n.eventCache,new At(e,t,i))}function ns(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Pt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dr;const $g=()=>(Dr||(Dr=new ue(Rm)),Dr);class V{static fromObject(e){let t=new V(null);return fe(e,(i,r)=>{t=t.set(new U(i),r)}),t}constructor(e,t=$g()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:D(),value:this.value};if(N(e))return null;{const i=k(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(W(e),t);return s!=null?{path:j(new U(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(N(e))return this;{const t=k(e),i=this.children.get(t);return i!==null?i.subtree(W(e)):new V(null)}}set(e,t){if(N(e))return new V(t,this.children);{const i=k(e),s=(this.children.get(i)||new V(null)).set(W(e),t),o=this.children.insert(i,s);return new V(this.value,o)}}remove(e){if(N(e))return this.children.isEmpty()?new V(null):new V(null,this.children);{const t=k(e),i=this.children.get(t);if(i){const r=i.remove(W(e));let s;return r.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,r),this.value===null&&s.isEmpty()?new V(null):new V(this.value,s)}else return this}}get(e){if(N(e))return this.value;{const t=k(e),i=this.children.get(t);return i?i.get(W(e)):null}}setTree(e,t){if(N(e))return t;{const i=k(e),s=(this.children.get(i)||new V(null)).setTree(W(e),t);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new V(this.value,o)}}fold(e){return this.fold_(D(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(j(e,r),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,D(),t)}findOnPath_(e,t,i){const r=this.value?i(t,this.value):!1;if(r)return r;if(N(e))return null;{const s=k(e),o=this.children.get(s);return o?o.findOnPath_(W(e),j(t,s),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,D(),t)}foreachOnPath_(e,t,i){if(N(e))return this;{this.value&&i(t,this.value);const r=k(e),s=this.children.get(r);return s?s.foreachOnPath_(W(e),j(t,r),i):new V(null)}}foreach(e){this.foreach_(D(),e)}foreach_(e,t){this.children.inorderTraversal((i,r)=>{r.foreach_(j(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.writeTree_=e}static empty(){return new ke(new V(null))}}function Tn(n,e,t){if(N(e))return new ke(new V(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=ce(r,e);return s=s.updateChild(o,t),new ke(n.writeTree_.set(r,s))}else{const r=new V(t),s=n.writeTree_.setTree(e,r);return new ke(s)}}}function xa(n,e,t){let i=n;return fe(t,(r,s)=>{i=Tn(i,j(e,r),s)}),i}function Ma(n,e){if(N(e))return ke.empty();{const t=n.writeTree_.setTree(e,new V(null));return new ke(t)}}function is(n,e){return xt(n,e)!=null}function xt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ce(t.path,e)):null}function La(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(H,(i,r)=>{e.push(new R(i,r))}):n.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new R(i,r.value))}),e}function ut(n,e){if(N(e))return n;{const t=xt(n,e);return t!=null?new ke(new V(t)):new ke(n.writeTree_.subtree(e))}}function rs(n){return n.writeTree_.isEmpty()}function Jt(n,e){return du(D(),n.writeTree_,e)}function du(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(_(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):t=du(j(n,r),s,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(j(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(n,e){return mu(e,n)}function jg(n,e,t,i,r){_(i>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:r}),r&&(n.visibleWrites=Tn(n.visibleWrites,e,t)),n.lastWriteId=i}function qg(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Gg(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);_(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let r=i.visible,s=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&zg(a,i.path)?r=!1:Te(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return Kg(n),!0;if(i.snap)n.visibleWrites=Ma(n.visibleWrites,i.path);else{const a=i.children;fe(a,l=>{n.visibleWrites=Ma(n.visibleWrites,j(i.path,l))})}return!0}else return!1}function zg(n,e){if(n.snap)return Te(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Te(j(n.path,t),e))return!0;return!1}function Kg(n){n.visibleWrites=fu(n.allWrites,Yg,D()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Yg(n){return n.visible}function fu(n,e,t){let i=ke.empty();for(let r=0;r<n.length;++r){const s=n[r];if(e(s)){const o=s.path;let a;if(s.snap)Te(t,o)?(a=ce(t,o),i=Tn(i,a,s.snap)):Te(o,t)&&(a=ce(o,t),i=Tn(i,D(),s.snap.getChild(a)));else if(s.children){if(Te(t,o))a=ce(t,o),i=xa(i,a,s.children);else if(Te(o,t))if(a=ce(o,t),N(a))i=xa(i,D(),s.children);else{const l=zt(s.children,k(a));if(l){const c=l.getChild(W(a));i=Tn(i,D(),c)}}}else throw rn("WriteRecord should have .snap or .children")}}return i}function pu(n,e,t,i,r){if(!i&&!r){const s=xt(n.visibleWrites,e);if(s!=null)return s;{const o=ut(n.visibleWrites,e);if(rs(o))return t;if(t==null&&!is(o,D()))return null;{const a=t||I.EMPTY_NODE;return Jt(o,a)}}}else{const s=ut(n.visibleWrites,e);if(!r&&rs(s))return t;if(!r&&t==null&&!is(s,D()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(Te(c.path,e)||Te(e,c.path))},a=fu(n.allWrites,o,e),l=t||I.EMPTY_NODE;return Jt(a,l)}}}function Qg(n,e,t){let i=I.EMPTY_NODE;const r=xt(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(H,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(t){const s=ut(n.visibleWrites,e);return t.forEachChild(H,(o,a)=>{const l=Jt(ut(s,new U(o)),a);i=i.updateImmediateChild(o,l)}),La(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=ut(n.visibleWrites,e);return La(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Jg(n,e,t,i,r){_(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=j(e,t);if(is(n.visibleWrites,s))return null;{const o=ut(n.visibleWrites,s);return rs(o)?r.getChild(t):Jt(o,r.getChild(t))}}function Xg(n,e,t,i){const r=j(e,t),s=xt(n.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(t)){const o=ut(n.visibleWrites,r);return Jt(o,i.getNode().getImmediateChild(t))}else return null}function Zg(n,e){return xt(n.visibleWrites,e)}function ev(n,e,t,i,r,s,o){let a;const l=ut(n.visibleWrites,e),c=xt(l,D());if(c!=null)a=c;else if(t!=null)a=Jt(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&u.length<r;)d(f,i)!==0&&u.push(f),f=h.getNext();return u}else return[]}function tv(){return{visibleWrites:ke.empty(),allWrites:[],lastWriteId:-1}}function Ui(n,e,t,i){return pu(n.writeTree,n.treePath,e,t,i)}function eo(n,e){return Qg(n.writeTree,n.treePath,e)}function Fa(n,e,t,i){return Jg(n.writeTree,n.treePath,e,t,i)}function Wi(n,e){return Zg(n.writeTree,j(n.treePath,e))}function nv(n,e,t,i,r,s){return ev(n.writeTree,n.treePath,e,t,i,r,s)}function to(n,e,t){return Xg(n.writeTree,n.treePath,e,t)}function _u(n,e){return mu(j(n.treePath,e),n.writeTree)}function mu(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;_(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(i,Ln(i,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(i,Mn(i,r.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(i,Qt(i,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(i,Ln(i,e.snapshotNode,r.oldSnap));else throw rn("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const gu=new rv;class no{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new At(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return to(this.writes_,e,i)}}getChildAfterChild(e,t,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pt(this.viewCache_),s=nv(this.writes_,r,t,1,i,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(n){return{filter:n}}function ov(n,e){_(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function av(n,e,t,i,r){const s=new iv;let o,a;if(t.type===Se.OVERWRITE){const c=t;c.source.fromUser?o=ss(n,e,c.path,c.snap,i,r,s):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!N(c.path),o=Vi(n,e,c.path,c.snap,i,r,a,s))}else if(t.type===Se.MERGE){const c=t;c.source.fromUser?o=cv(n,e,c.path,c.children,i,r,s):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=os(n,e,c.path,c.children,i,r,a,s))}else if(t.type===Se.ACK_USER_WRITE){const c=t;c.revert?o=dv(n,e,c.path,i,r,s):o=uv(n,e,c.path,c.affectedTree,i,r,s)}else if(t.type===Se.LISTEN_COMPLETE)o=hv(n,e,t.path,i,s);else throw rn("Unknown operation type: "+t.type);const l=s.getChanges();return lv(e,o,l),{viewCache:o,changes:l}}function lv(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=ns(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&t.push(lu(ns(e)))}}function vu(n,e,t,i,r,s){const o=e.eventCache;if(Wi(i,t)!=null)return e;{let a,l;if(N(t))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Pt(e),u=c instanceof I?c:I.EMPTY_NODE,d=eo(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Ui(i,Pt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=k(t);if(c===".priority"){_(pt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Fa(i,t,u,l);d!=null?a=n.filter.updatePriority(u,d):a=o.getNode()}else{const u=W(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Fa(i,t,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=to(i,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,u,r,s):a=o.getNode()}}return Cn(e,a,o.isFullyInitialized()||N(t),n.filter.filtersNodes())}}function Vi(n,e,t,i,r,s,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(N(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=k(t);if(!l.isCompleteForPath(t)&&pt(t)>1)return e;const p=W(t),v=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,p,gu,null)}const d=hu(e,c,l.isFullyInitialized()||N(t),u.filtersNodes()),h=new no(r,d,s);return vu(n,d,t,r,h,a)}function ss(n,e,t,i,r,s,o){const a=e.eventCache;let l,c;const u=new no(r,e,s);if(N(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Cn(e,c,!0,n.filter.filtersNodes());else{const d=k(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Cn(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=W(t),f=a.getNode().getImmediateChild(d);let p;if(N(h))p=i;else{const g=u.getCompleteChild(d);g!=null?Zc(h)===".priority"&&g.getChild(tu(h)).isEmpty()?p=g:p=g.updateChild(h,i):p=I.EMPTY_NODE}if(f.equals(p))l=e;else{const g=n.filter.updateChild(a.getNode(),d,p,h,u,o);l=Cn(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Ua(n,e){return n.eventCache.isCompleteForChild(e)}function cv(n,e,t,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=j(t,l);Ua(e,k(u))&&(a=ss(n,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=j(t,l);Ua(e,k(u))||(a=ss(n,a,u,c,r,s,o))}),a}function Wa(n,e,t){return t.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function os(n,e,t,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;N(t)?c=i:c=new V(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=Wa(n,f,h);l=Vi(n,l,new U(d),p,r,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),g=Wa(n,p,h);l=Vi(n,l,new U(d),g,r,s,o,a)}}),l}function uv(n,e,t,i,r,s,o){if(Wi(r,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(N(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Vi(n,e,t,l.getNode().getChild(t),r,s,a,o);if(N(t)){let c=new V(null);return l.getNode().forEachChild(jt,(u,d)=>{c=c.set(new U(u),d)}),os(n,e,t,c,r,s,a,o)}else return e}else{let c=new V(null);return i.foreach((u,d)=>{const h=j(t,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),os(n,e,t,c,r,s,a,o)}}function hv(n,e,t,i,r){const s=e.serverCache,o=hu(e,s.getNode(),s.isFullyInitialized()||N(t),s.isFiltered());return vu(n,o,t,i,gu,r)}function dv(n,e,t,i,r,s){let o;if(Wi(i,t)!=null)return e;{const a=new no(i,e,r),l=e.eventCache.getNode();let c;if(N(t)||k(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ui(i,Pt(e));else{const d=e.serverCache.getNode();_(d instanceof I,"serverChildren would be complete if leaf node"),u=eo(i,d)}u=u,c=n.filter.updateFullNode(l,u,s)}else{const u=k(t);let d=to(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=n.filter.updateChild(l,u,d,W(t),a,s):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,I.EMPTY_NODE,W(t),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ui(i,Pt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Wi(i,D())!=null,Cn(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new Ys(i.getIndex()),s=Og(i);this.processor_=sv(s);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(I.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(I.EMPTY_NODE,a.getNode(),null),u=new At(l,o.isFullyInitialized(),r.filtersNodes()),d=new At(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ur(d,u),this.eventGenerator_=new Wg(this.query_)}get query(){return this.query_}}function pv(n){return n.viewCache_.serverCache.getNode()}function _v(n,e){const t=Pt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!N(e)&&!t.getImmediateChild(k(e)).isEmpty())?t.getChild(e):null}function Va(n){return n.eventRegistrations_.length===0}function mv(n,e){n.eventRegistrations_.push(e)}function Ba(n,e,t){const i=[];if(t){_(e==null,"A cancel should cancel all event registrations.");const r=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=r}else n.eventRegistrations_=[];return i}function Ha(n,e,t,i){e.type===Se.MERGE&&e.source.queryId!==null&&(_(Pt(n.viewCache_),"We should always have a full cache before handling merges"),_(ns(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,s=av(n.processor_,r,e,t,i);return ov(n.processor_,s.viewCache),_(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,yu(n,s.changes,s.viewCache.eventCache.getNode(),null)}function gv(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(H,(s,o)=>{i.push(Qt(s,o))}),t.isFullyInitialized()&&i.push(lu(t.getNode())),yu(n,i,t.getNode(),e)}function yu(n,e,t,i){const r=i?[i]:n.eventRegistrations_;return Vg(n.eventGenerator_,e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi;class vv{constructor(){this.views=new Map}}function yv(n){_(!Bi,"__referenceConstructor has already been defined"),Bi=n}function Ev(){return _(Bi,"Reference.ts has not been loaded"),Bi}function Iv(n){return n.views.size===0}function io(n,e,t,i){const r=e.source.queryId;if(r!==null){const s=n.views.get(r);return _(s!=null,"SyncTree gave us an op for an invalid query."),Ha(s,e,t,i)}else{let s=[];for(const o of n.views.values())s=s.concat(Ha(o,e,t,i));return s}}function wv(n,e,t,i,r){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let a=Ui(t,r?i:null),l=!1;a?l=!0:i instanceof I?(a=eo(t,i),l=!1):(a=I.EMPTY_NODE,l=!1);const c=ur(new At(a,l,!1),new At(i,r,!1));return new fv(e,c)}return o}function bv(n,e,t,i,r,s){const o=wv(n,e,i,r,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),mv(o,t),gv(o,t)}function Cv(n,e,t,i){const r=e._queryIdentifier,s=[];let o=[];const a=_t(n);if(r==="default")for(const[l,c]of n.views.entries())o=o.concat(Ba(c,t,i)),Va(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=n.views.get(r);l&&(o=o.concat(Ba(l,t,i)),Va(l)&&(n.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!_t(n)&&s.push(new(Ev())(e._repo,e._path)),{removed:s,events:o}}function Eu(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function qt(n,e){let t=null;for(const i of n.views.values())t=t||_v(i,e);return t}function Iu(n,e){if(e._queryParams.loadsAllData())return hr(n);{const i=e._queryIdentifier;return n.views.get(i)}}function wu(n,e){return Iu(n,e)!=null}function _t(n){return hr(n)!=null}function hr(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hi;function Tv(n){_(!Hi,"__referenceConstructor has already been defined"),Hi=n}function Sv(){return _(Hi,"Reference.ts has not been loaded"),Hi}let kv=1;class $a{constructor(e){this.listenProvider_=e,this.syncPointTree_=new V(null),this.pendingWriteTree_=tv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function bu(n,e,t,i,r){return jg(n.pendingWriteTree_,e,t,i,r),r?ei(n,new Nt(uu(),e,t)):[]}function It(n,e,t=!1){const i=qg(n.pendingWriteTree_,e);if(Gg(n.pendingWriteTree_,e)){let s=new V(null);return i.snap!=null?s=s.set(D(),!0):fe(i.children,o=>{s=s.set(new U(o),!0)}),ei(n,new Fi(i.path,s,t))}else return[]}function dr(n,e,t){return ei(n,new Nt(Js(),e,t))}function Rv(n,e,t){const i=V.fromObject(t);return ei(n,new Wn(Js(),e,i))}function Nv(n,e){return ei(n,new Un(Js(),e))}function Av(n,e,t){const i=so(n,t);if(i){const r=oo(i),s=r.path,o=r.queryId,a=ce(s,e),l=new Un(Xs(o),a);return ao(n,s,l)}else return[]}function as(n,e,t,i,r=!1){const s=e._path,o=n.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||wu(o,e))){const l=Cv(o,e,t,i);Iv(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(s,(h,f)=>_t(f));if(u&&!d){const h=n.syncPointTree_.subtree(s);if(!h.isEmpty()){const f=Dv(h);for(let p=0;p<f.length;++p){const g=f[p],v=g.query,b=Su(n,g);n.listenProvider_.startListening(Sn(v),$i(n,v),b.hashFn,b.onComplete)}}}!d&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(Sn(e),null):c.forEach(h=>{const f=n.queryToTagMap.get(fr(h));n.listenProvider_.stopListening(Sn(h),f)}))}xv(n,c)}return a}function Pv(n,e,t,i){const r=so(n,i);if(r!=null){const s=oo(r),o=s.path,a=s.queryId,l=ce(o,e),c=new Nt(Xs(a),l,t);return ao(n,o,c)}else return[]}function Ov(n,e,t,i){const r=so(n,i);if(r){const s=oo(r),o=s.path,a=s.queryId,l=ce(o,e),c=V.fromObject(t),u=new Wn(Xs(a),l,c);return ao(n,o,u)}else return[]}function ja(n,e,t,i=!1){const r=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(r,(h,f)=>{const p=ce(h,r);s=s||qt(f,p),o=o||_t(f)});let a=n.syncPointTree_.get(r);a?(o=o||_t(a),s=s||qt(a,D())):(a=new vv,n.syncPointTree_=n.syncPointTree_.set(r,a));let l;s!=null?l=!0:(l=!1,s=I.EMPTY_NODE,n.syncPointTree_.subtree(r).foreachChild((f,p)=>{const g=qt(p,D());g&&(s=s.updateImmediateChild(f,g))}));const c=wu(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=fr(e);_(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=Mv();n.queryToTagMap.set(h,f),n.tagToQueryMap.set(f,h)}const u=Zs(n.pendingWriteTree_,r);let d=bv(a,e,t,u,s,l);if(!c&&!o&&!i){const h=Iu(a,e);d=d.concat(Lv(n,e,h))}return d}function ro(n,e,t){const r=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=ce(o,e),c=qt(a,l);if(c)return c});return pu(r,e,s,t,!0)}function ei(n,e){return Cu(e,n.syncPointTree_,null,Zs(n.pendingWriteTree_,D()))}function Cu(n,e,t,i){if(N(n.path))return Tu(n,e,t,i);{const r=e.get(D());t==null&&r!=null&&(t=qt(r,D()));let s=[];const o=k(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=_u(i,o);s=s.concat(Cu(a,l,c,u))}return r&&(s=s.concat(io(r,n,i,t))),s}}function Tu(n,e,t,i){const r=e.get(D());t==null&&r!=null&&(t=qt(r,D()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=_u(i,o),u=n.operationForChild(o);u&&(s=s.concat(Tu(u,a,l,c)))}),r&&(s=s.concat(io(r,n,i,t))),s}function Su(n,e){const t=e.query,i=$i(n,t);return{hashFn:()=>(pv(e)||I.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?Av(n,t._path,i):Nv(n,t._path);{const s=Pm(r,t);return as(n,t,null,s)}}}}function $i(n,e){const t=fr(e);return n.queryToTagMap.get(t)}function fr(n){return n._path.toString()+"$"+n._queryIdentifier}function so(n,e){return n.tagToQueryMap.get(e)}function oo(n){const e=n.indexOf("$");return _(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new U(n.substr(0,e))}}function ao(n,e,t){const i=n.syncPointTree_.get(e);_(i,"Missing sync point for query tag that we're tracking");const r=Zs(n.pendingWriteTree_,e);return io(i,t,r,null)}function Dv(n){return n.fold((e,t,i)=>{if(t&&_t(t))return[hr(t)];{let r=[];return t&&(r=Eu(t)),fe(i,(s,o)=>{r=r.concat(o)}),r}})}function Sn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Sv())(n._repo,n._path):n}function xv(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const r=fr(i),s=n.queryToTagMap.get(r);n.queryToTagMap.delete(r),n.tagToQueryMap.delete(s)}}}function Mv(){return kv++}function Lv(n,e,t){const i=e._path,r=$i(n,e),s=Su(n,t),o=n.listenProvider_.startListening(Sn(e),r,s.hashFn,s.onComplete),a=n.syncPointTree_.subtree(i);if(r)_(!_t(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!N(c)&&u&&_t(u))return[hr(u).query];{let h=[];return u&&(h=h.concat(Eu(u).map(f=>f.query))),fe(d,(f,p)=>{h=h.concat(p)}),h}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Sn(u),$i(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new lo(t)}node(){return this.node_}}class co{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=j(this.path_,e);return new co(this.syncTree_,t)}node(){return ro(this.syncTree_,this.path_)}}const Fv=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},qa=function(n,e,t){if(!n||typeof n!="object")return n;if(_(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Uv(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Wv(n[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Uv=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_(!1,"Unexpected server value: "+n)}},Wv=function(n,e,t){n.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&_(!1,"Unexpected increment value: "+i);const r=e.node();if(_(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},Vv=function(n,e,t,i){return uo(e,new co(t,n),i)},ku=function(n,e,t){return uo(n,new lo(e),t)};function uo(n,e,t){const i=n.getPriority().val(),r=qa(i,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,a=qa(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new q(a,Q(r)):n}else{const o=n;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new q(r))),o.forEachChild(H,(a,l)=>{const c=uo(l,e.getImmediateChild(a),t);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function fo(n,e){let t=e instanceof U?e:new U(e),i=n,r=k(t);for(;r!==null;){const s=zt(i.node.children,r)||{children:{},childCount:0};i=new ho(r,i,s),t=W(t),r=k(t)}return i}function un(n){return n.node.value}function Ru(n,e){n.node.value=e,ls(n)}function Nu(n){return n.node.childCount>0}function Bv(n){return un(n)===void 0&&!Nu(n)}function pr(n,e){fe(n.node.children,(t,i)=>{e(new ho(t,n,i))})}function Au(n,e,t,i){t&&e(n),pr(n,r=>{Au(r,e,!0)})}function Hv(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ti(n){return new U(n.parent===null?n.name:ti(n.parent)+"/"+n.name)}function ls(n){n.parent!==null&&$v(n.parent,n.name,n)}function $v(n,e,t){const i=Bv(t),r=Qe(n.node.children,e);i&&r?(delete n.node.children[e],n.node.childCount--,ls(n)):!i&&!r&&(n.node.children[e]=t.node,n.node.childCount++,ls(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=/[\[\].#$\/\u0000-\u001F\u007F]/,qv=/[\[\].#$\u0000-\u001F\u007F]/,xr=10*1024*1024,Pu=function(n){return typeof n=="string"&&n.length!==0&&!jv.test(n)},Ou=function(n){return typeof n=="string"&&n.length!==0&&!qv.test(n)},Gv=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ou(n)},Du=function(n,e,t,i){i&&e===void 0||po(Ns(n,"value"),e,t)},po=function(n,e,t){const i=t instanceof U?new ug(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+yt(i));if(typeof e=="function")throw new Error(n+"contains a function "+yt(i)+" with contents = "+e.toString());if(Oc(e))throw new Error(n+"contains "+e.toString()+" "+yt(i));if(typeof e=="string"&&e.length>xr/3&&sr(e)>xr)throw new Error(n+"contains a string greater than "+xr+" utf8 bytes "+yt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(fe(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Pu(o)))throw new Error(n+" contains an invalid key ("+o+") "+yt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hg(i,o),po(n,a,i),dg(i)}),r&&s)throw new Error(n+' contains ".value" child '+yt(i)+" in addition to actual children.")}},xu=function(n,e,t,i){if(!Ou(t))throw new Error(Ns(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zv=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),xu(n,e,t)},Mu=function(n,e){if(k(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Kv=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Pu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Gv(t))throw new Error(Ns(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _o(n,e){let t=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();t!==null&&!Gs(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(r)}t&&n.eventLists_.push(t)}function Lu(n,e,t){_o(n,t),Fu(n,i=>Gs(i,e))}function ze(n,e,t){_o(n,t),Fu(n,i=>Te(i,e)||Te(e,i))}function Fu(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const r=n.eventLists_[i];if(r){const s=r.path;e(s)?(Qv(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Qv(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();wn&&Z("event: "+t.toString()),cn(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="repo_interrupt",Xv=25;class Zv{constructor(e,t,i,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Yv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Li(),this.transactionQueueTree_=new ho,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ey(n,e,t){if(n.stats_=js(n.repoInfo_),n.forceRestClient_||Mm())n.server_=new Mi(n.repoInfo_,(i,r,s,o)=>{Ga(n,i,r,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>za(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Y(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new $e(n.repoInfo_,e,(i,r,s,o)=>{Ga(n,i,r,s,o)},i=>{za(n,i)},i=>{ty(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Vm(n.repoInfo_,()=>new Ug(n.stats_,n.server_)),n.infoData_=new Dg,n.infoSyncTree_=new $a({startListening:(i,r,s,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=dr(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),go(n,"connected",!1),n.serverSyncTree_=new $a({startListening:(i,r,s,o)=>(n.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);ze(n.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{n.server_.unlisten(i,r)}})}function Uu(n){const t=n.infoData_.getNode(new U(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function mo(n){return Fv({timestamp:Uu(n)})}function Ga(n,e,t,i,r){n.dataUpdateCount++;const s=new U(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(i){const l=Ti(t,c=>Q(c));o=Ov(n.serverSyncTree_,s,l,r)}else{const l=Q(t);o=Pv(n.serverSyncTree_,s,l,r)}else if(i){const l=Ti(t,c=>Q(c));o=Rv(n.serverSyncTree_,s,l)}else{const l=Q(t);o=dr(n.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=_r(n,s)),ze(n.eventQueue_,a,o)}function za(n,e){go(n,"connected",e),e===!1&&iy(n)}function ty(n,e){fe(e,(t,i)=>{go(n,t,i)})}function go(n,e,t){const i=new U("/.info/"+e),r=Q(t);n.infoData_.updateSnapshot(i,r);const s=dr(n.infoSyncTree_,i,r);ze(n.eventQueue_,i,s)}function Wu(n){return n.nextWriteId_++}function ny(n,e,t,i,r){vo(n,"set",{path:e.toString(),value:t,priority:i});const s=mo(n),o=Q(t,i),a=ro(n.serverSyncTree_,e),l=ku(o,a,s),c=Wu(n),u=bu(n.serverSyncTree_,e,l,c,!0);_o(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(h,f)=>{const p=h==="ok";p||he("set at "+e+" failed: "+h);const g=It(n.serverSyncTree_,c,!p);ze(n.eventQueue_,e,g),oy(n,r,h,f)});const d=qu(n,e);_r(n,d),ze(n.eventQueue_,d,[])}function iy(n){vo(n,"onDisconnectEvents");const e=mo(n),t=Li();ts(n.onDisconnect_,D(),(r,s)=>{const o=Vv(r,s,n.serverSyncTree_,e);cu(t,r,o)});let i=[];ts(t,D(),(r,s)=>{i=i.concat(dr(n.serverSyncTree_,r,s));const o=qu(n,r);_r(n,o)}),n.onDisconnect_=Li(),ze(n.eventQueue_,D(),i)}function ry(n,e,t){let i;k(e._path)===".info"?i=ja(n.infoSyncTree_,e,t):i=ja(n.serverSyncTree_,e,t),Lu(n.eventQueue_,e._path,i)}function Vu(n,e,t){let i;k(e._path)===".info"?i=as(n.infoSyncTree_,e,t):i=as(n.serverSyncTree_,e,t),Lu(n.eventQueue_,e._path,i)}function sy(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Jv)}function vo(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Z(t,...e)}function oy(n,e,t,i){e&&cn(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function Bu(n,e,t){return ro(n.serverSyncTree_,e,t)||I.EMPTY_NODE}function yo(n,e=n.transactionQueueTree_){if(e||mr(n,e),un(e)){const t=$u(n,e);_(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&ay(n,ti(e),t)}else Nu(e)&&pr(e,t=>{yo(n,t)})}function ay(n,e,t){const i=t.map(c=>c.currentWriteId),r=Bu(n,e,i);let s=r;const o=r.hash();for(let c=0;c<t.length;c++){const u=t[c];_(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=ce(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;n.server_.put(l.toString(),a,c=>{vo(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<t.length;h++)t[h].status=2,u=u.concat(It(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&d.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();mr(n,fo(n.transactionQueueTree_,e)),yo(n,n.transactionQueueTree_),ze(n.eventQueue_,e,u);for(let h=0;h<d.length;h++)cn(d[h])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{he("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}_r(n,e)}},o)}function _r(n,e){const t=Hu(n,e),i=ti(t),r=$u(n,t);return ly(n,r,i),i}function ly(n,e,t){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ce(t,l.path);let u=!1,d;if(_(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,r=r.concat(It(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Xv)u=!0,d="maxretry",r=r.concat(It(n.serverSyncTree_,l.currentWriteId,!0));else{const h=Bu(n,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){po("transaction failed: Data returned ",f,l.path);let p=Q(f);typeof f=="object"&&f!=null&&Qe(f,".priority")||(p=p.updatePriority(h.getPriority()));const v=l.currentWriteId,b=mo(n),E=ku(p,h,b);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=E,l.currentWriteId=Wu(n),o.splice(o.indexOf(v),1),r=r.concat(bu(n.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),r=r.concat(It(n.serverSyncTree_,v,!0))}else u=!0,d="nodata",r=r.concat(It(n.serverSyncTree_,l.currentWriteId,!0))}ze(n.eventQueue_,t,r),r=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}mr(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)cn(i[a]);yo(n,n.transactionQueueTree_)}function Hu(n,e){let t,i=n.transactionQueueTree_;for(t=k(e);t!==null&&un(i)===void 0;)i=fo(i,t),e=W(e),t=k(e);return i}function $u(n,e){const t=[];return ju(n,e,t),t.sort((i,r)=>i.order-r.order),t}function ju(n,e,t){const i=un(e);if(i)for(let r=0;r<i.length;r++)t.push(i[r]);pr(e,r=>{ju(n,r,t)})}function mr(n,e){const t=un(e);if(t){let i=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[i]=t[r],i++);t.length=i,Ru(e,t.length>0?t:void 0)}pr(e,i=>{mr(n,i)})}function qu(n,e){const t=ti(Hu(n,e)),i=fo(n.transactionQueueTree_,e);return Hv(i,r=>{Mr(n,r)}),Mr(n,i),Au(i,r=>{Mr(n,r)}),t}function Mr(n,e){const t=un(e);if(t){const i=[];let r=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(_(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(_(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(It(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ru(e,void 0):t.length=s+1,ze(n.eventQueue_,ti(e),r);for(let o=0;o<i.length;o++)cn(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let r=t[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function uy(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):he(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ka=function(n,e){const t=hy(n),i=t.namespace;t.domain==="firebase.com"&&Ge(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Ge("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Sm();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new jc(t.host,t.secure,i,r,e,"",i!==t.subdomain),path:new U(t.pathString)}},hy=function(n){let e="",t="",i="",r="",s="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(r=cy(n.substring(u,d)));const h=uy(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),s=i}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",dy=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let r;const s=new Array(8);for(r=7;r>=0;r--)s[r]=Ya.charAt(t%64),t=Math.floor(t/64);_(t===0,"Cannot push at time == 0");let o=s.join("");if(i){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=Ya.charAt(e[r]);return _(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,t,i,r){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Y(this.snapshot.exportVal())}}class py{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t,i,r){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=r}get key(){return N(this._path)?null:Zc(this._path)}get ref(){return new mt(this._repo,this._path)}get _queryIdentifier(){const e=Oa(this._queryParams),t=Hs(e);return t==="{}"?"default":t}get _queryObject(){return Oa(this._queryParams)}isEqual(e){if(e=ne(e),!(e instanceof Eo))return!1;const t=this._repo===e._repo,i=Gs(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+cg(this._path)}}class mt extends Eo{constructor(e,t){super(e,t,new Qs,!1)}get parent(){const e=tu(this._path);return e===null?null:new mt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ji{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new U(e),i=Vn(this.ref,e);return new ji(this._node.getChild(t),i,H)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new ji(r,Vn(this.ref,i),H)))}hasChild(e){const t=new U(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function z(n,e){return n=ne(n),n._checkNotDeleted("ref"),e!==void 0?Vn(n._root,e):n._root}function Vn(n,e){return n=ne(n),k(n._path)===null?zv("child","path",e):xu("child","path",e),new mt(n._repo,j(n._path,e))}function Io(n,e){n=ne(n),Mu("push",n._path),Du("push",e,n._path,!0);const t=Uu(n._repo),i=dy(t),r=Vn(n,i),s=Vn(n,i);let o;return o=Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function gr(n,e){n=ne(n),Mu("set",n._path),Du("set",e,n._path,!1);const t=new rr;return ny(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class vr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new fy("value",this,new ji(e.snapshotNode,new mt(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new py(this,e,t):null}matches(e){return e instanceof vr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function _y(n,e,t,i,r){const s=new Gu(t,void 0),o=new vr(s);return ry(n._repo,n,o),()=>Vu(n._repo,n,o)}function Xt(n,e,t,i){return _y(n,"value",e)}function Bn(n,e,t){let i=null;const r=t?new Gu(t):null;i=new vr(r),Vu(n._repo,n,i)}yv(mt);Tv(mt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="FIREBASE_DATABASE_EMULATOR_HOST",cs={};let gy=!1;function vy(n,e,t,i){n.repoInfo_=new jc(e,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function yy(n,e,t,i,r){let s=i||n.options.databaseURL;s===void 0&&(n.options.projectId||Ge("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Z("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ka(s,r),a=o.repoInfo,l;typeof process<"u"&&pa&&(l=pa[my]),l?(s=`http://${l}?ns=${a.namespace}`,o=Ka(s,r),a=o.repoInfo):o.repoInfo.secure;const c=new Fm(n.name,n.options,e);Kv("Invalid Firebase Database URL",o),N(o.path)||Ge("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Iy(a,n,c,new Lm(n,t));return new wy(u,n)}function Ey(n,e){const t=cs[e];(!t||t[n.key]!==n)&&Ge(`Database ${e}(${n.repoInfo_}) has already been deleted.`),sy(n),delete t[n.key]}function Iy(n,e,t,i){let r=cs[e.name];r||(r={},cs[e.name]=r);let s=r[n.toURLString()];return s&&Ge("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Zv(n,gy,t,i),r[n.toURLString()]=s,s}class wy{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ey(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new mt(this._repo,D())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ey(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ge("Cannot call "+e+" on a deleted database.")}}function by(n=jl(),e){const t=Os(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Rd("database");i&&Cy(t,...i)}return t}function Cy(n,e,t,i={}){n=ne(n),n._checkNotDeleted("useEmulator");const r=`${e}:${t}`,s=n._repoInternal;if(n._instanceStarted){if(r===n._repoInternal.repoInfo_.host&&Ct(i,s.repoInfo_.emulatorOptions))return;Ge("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ge('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new fi(fi.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:Nd(i.mockUserToken,n.app.options.projectId);o=new fi(a)}vy(s,r,i,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(n){Em(on),Kt(new Tt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return yy(i,r,s,t)},"PUBLIC").setMultipleInstances(!0)),ct(_a,ma,n),ct(_a,ma,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy={".sv":"timestamp"};function zu(){return Sy}$e.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};$e.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Ty();const ky={apiKey:"AIzaSyD85p4w02tZ4MGOJuj-DWc0DY_Igau0LNU",authDomain:"project-4209476263125400271.firebaseapp.com",projectId:"project-4209476263125400271",storageBucket:"project-4209476263125400271.firebasestorage.app",messagingSenderId:"845208103451",appId:"1:845208103451:web:260334c73d093994af66be",databaseURL:"https://project-4209476263125400271-default-rtdb.firebaseio.com"},Ku=$l(ky),ni=mm(Ku),K=by(Ku);let qi=J(null),us=J(!1);function Gi(){return m(qi)}function Ry(){return m(qi)!==null}function Ny(){return m(us)}s_(ni,async n=>{n===null?M(qi,null):(M(us,B(n.emailVerified)),M(qi,B(n.uid)),m(us)||await n_(n,{url:window.location.href}))});let Hn=B([]),Yu=J(-1);function Ay(n){Hn.splice(0,0,n)}function Qu(n){Hn.splice(n,1)}function pi(){return m(Yu)}function hs(n){M(Yu,B(n))}var Py=A('<div class="popup"><!></div>');function Oy(n,e){oe(e,!1);let t=Th(()=>{});function i(){Qu(pi()),m(t)()}Ts();var r=Py(),s=P(r);{var o=a=>{var l=Nl(),c=ge(l);od(c,()=>Hn[pi()].component,(u,d)=>{d(u,{removeThis:i,get onRemove(){return m(t)},set onRemove(h){M(t,h)},$$legacy:!0})}),S(a,l)};bt(s,a=>{Hn.length!=0&&pi()!=-1&&a(o)})}S(n,r),ae()}var Dy=A('<h1>Log In</h1> <form id="login"><input name="email" placeholder="E-Mail Address"> <br> <input name="pass" type="password" placeholder="Password"> <br> <input type="submit" value="Log In"> <br> <br> Need a new account? <button>Sign Up</button></form>',1);function xy(n,e){oe(e,!0);let t=J(""),i=J("");async function r(d){d.preventDefault();try{await t_(ni,m(t),m(i))}catch(h){h instanceof Me&&h.code=="auth/invalid-credential"&&console.log("error message needs to be added...")}}var s=Dy(),o=w(ge(s),2),a=P(o),l=w(a,4),c=w(l,4),u=w(c,6);u.__click=function(...d){var h;(h=e.toggleShowLogIn)==null||h.apply(this,d)},nn("submit",o,r),ve(a,()=>m(t),d=>M(t,d)),ve(l,()=>m(i),d=>M(i,d)),S(n,s),ae()}Ot(["click"]);var My=A('<li><div role="link"> <button id="close" class="svelte-1gwd2m3">✕</button></div></li>'),Ly=A('<ul class="svelte-1gwd2m3"></ul>');function Fy(n,e){oe(e,!1),Ts();var t=Ly();te(t,5,()=>Hn,ee,(i,r,s)=>{var o=My(),a=P(o);a.__click=()=>hs(s),a.__keydown=()=>hs(s),gt(a,"tabindex",s);var l=P(a),c=w(l);c.__click=()=>Qu(s),Ee(u=>{ud(a,1,u,"svelte-1gwd2m3"),de(l,`${m(r).title??""} `)},[()=>ld(s==pi()?"active":"")],ul),S(i,o)}),S(n,t),ae()}Ot(["click","keydown"]);var Uy=A('<h1>Sign Up</h1> <form id="signup"><input name="displayName" placeholder="Your Name"> <br> <br> <label for="studentOrTeacher">Are you a student or a teacher?</label> <br> <label for="student">Student</label> <input name="studentOrTeacher" type="radio" id="student"> <label for="teacher">Teacher</label> <input name="studentOrTeacher" type="radio" id="teacher"> <br> <br> <input name="email" placeholder="E-Mail Address"> <br> <input name="pass" type="password" placeholder="Password"> <br> <input type="submit" value="Sign Up"> <br> <br> Already have an account? <button>Log In</button></form>',1);function Wy(n,e){oe(e,!0);let t=J(""),i=J(""),r=J("");async function s(f){f.preventDefault();try{await e_(ni,m(i),m(r))}catch(p){p instanceof Me&&p.code=="auth/invalid-credential"&&console.log("error message needs to be added...")}}var o=Uy(),a=w(ge(o),2),l=P(a),c=w(l,22),u=w(c,4),d=w(u,4),h=w(d,6);h.__click=function(...f){var p;(p=e.toggleShowLogIn)==null||p.apply(this,f)},nn("submit",a,s),ve(l,()=>m(t),f=>M(t,f)),ve(c,()=>m(i),f=>M(i,f)),ve(u,()=>m(r),f=>M(r,f)),S(n,o),ae()}Ot(["click"]);var Vy=(n,e,t,i)=>e(t(),i()),By=A('<li class="svelte-1kwrvaj"><button class="svelte-1kwrvaj"> </button></li>'),Hy=A('<ul class="svelte-1kwrvaj"></ul>');function $y(n,e){oe(e,!0);function t(r,s){Ay({title:r,component:s}),hs(0)}var i=Hy();te(i,21,()=>e.launchers,ee,(r,s)=>{let o=()=>m(s).name,a=()=>m(s).opens;var l=By(),c=P(l);c.__click=[Vy,t,o,a];var u=P(c);Ee(()=>de(u,o())),S(r,l)}),S(n,i),ae()}Ot(["click"]);var ds=(n=>(n.primaryCare="Primary care",n.urgentCare="Urgent care",n.emergencyCare="Emergency department",n))(ds||{});const Qa={name:"Name",checkInLocation:"Check-In Location",dateOfBirth:"Date of Birth",checkInTime:"Check-In Time",chiefComplaint:"Chief Complaint"};var jy=A("<option> </option>"),qy=A('<h1>Add Patient</h1> <form><label for="name">Patient Name</label> <input type="text" name="name"> <br> <label for="dateOfBirth">Patient Date of Birth</label> <input type="date" name="dateOfBirth"> <br> <label for="checkInLocation">Check-in Place</label> <select name="checkInLocation"></select> <br> <label for="chiefComplaint">Chief Complaint</label> <textarea name="chiefComplaint" rows="3" cols="40"></textarea> <br> <input type="submit" value="Add Patient"></form>',1);function Gy(n,e){oe(e,!0);const t={name:"",checkInLocation:ds.primaryCare,dateOfBirth:"",checkInTime:zu(),chiefComplaint:""};async function i(u){u.preventDefault(),e.removeThis();const d=Io(z(K,"/patients")).key;await gr(z(K,`/patients/${d}`),t)}var r=qy(),s=w(ge(r),2),o=w(P(s),2),a=w(o,6),l=w(a,6);te(l,21,()=>Object.values(ds),ee,(u,d)=>{var h=jy(),f={},p=P(h);Ee(()=>{f!==(f=m(d))&&(h.value=(h.__value=m(d))==null?"":m(d)),de(p,m(d))}),S(u,h)});var c=w(l,6);w(c,4),nn("submit",s,i),ve(o,()=>t.name,u=>t.name=u),ve(a,()=>t.dateOfBirth,u=>t.dateOfBirth=u),Nn(l,()=>t.checkInLocation,u=>t.checkInLocation=u),ve(c,()=>t.chiefComplaint,u=>t.chiefComplaint=u),S(n,r),ae()}var zy=A("<th> </th>"),Ky=A("<td> </td>"),Yy=A("<tr></tr>"),Qy=A("<h1>View Patients</h1> <table><thead><tr></tr></thead><tbody></tbody></table>",1);function Jy(n,e){oe(e,!0);let t=ir(e,"onRemove"),i=J(B([]));function r(u){M(i,B(Object.values(u.val())))}Xt(z(K,"/patients"),r),t(()=>Bn(z(K,"/patients"),"value",r));var s=Qy(),o=w(ge(s),2),a=P(o),l=P(a);te(l,21,()=>Object.values(Qa),ee,(u,d)=>{var h=zy(),f=P(h);Ee(()=>de(f,m(d))),S(u,h)});var c=w(a);te(c,21,()=>m(i),ee,(u,d)=>{var h=Yy();te(h,21,()=>Object.keys(Qa),ee,(f,p)=>{var g=Ky(),v=P(g);Ee(()=>de(v,m(d)[m(p)])),S(f,g)}),S(u,h)}),S(n,s),ae()}var Ju=(n=>(n.Information="Information",n.Warning="Warning",n.Critical="Critical",n))(Ju||{}),Xy=A("<option> </option>"),Zy=A('<h1>Send Notification</h1> <form><label for="to">Recipient</label> <select name="to"></select> <label for="message">Message</label> <textarea name="message"></textarea> <input type="submit" value="Send Notification"></form>',1);function eE(n,e){oe(e,!0);let t=ir(e,"onRemove"),i=J(B({}));function r(h){M(i,B(h.val()))}Xt(z(K,"/users"),r),t(()=>Bn(z(K,"/users"),"value",r));let s=J("");const o=B({date:zu(),message:"",priority:Ju.Information,read:!1,sender:Gi()});async function a(h){h.preventDefault();const f=Io(z(K,`/notifications/${m(s)}`)).key;await gr(z(K,`/notifications/${m(s)}/${f}`),o)}var l=Zy(),c=w(ge(l),2),u=w(P(c),2);te(u,21,()=>Object.entries(m(i)),ee,(h,f)=>{let p=()=>m(f)[0],g=()=>m(f)[1];var v=Xy(),b={},E=P(v);Ee(()=>{b!==(b=p())&&(v.value=(v.__value=p())==null?"":p()),de(E,g().displayName)}),S(h,v)});var d=w(u,4);w(d,2),nn("submit",c,a),Nn(u,()=>m(s),h=>M(s,h)),ve(d,()=>o.message,h=>o.message=h),S(n,l),ae()}var tE=A("<p>No notifications!</p>"),nE=A("<details><summary> </summary> </details>"),iE=A("<!> <!>",1);function rE(n,e){oe(e,!0);let t=ir(e,"onRemove"),i=J(B([]));function r(c){M(i,B(Object.values(c.val())))}Xt(z(K,`/notifications/${Gi()}`),r),t(()=>Bn(z(K,`/notifications/${Gi()}`),"value",r));var s=iE(),o=ge(s);{var a=c=>{var u=tE();S(c,u)};bt(o,c=>{m(i).length==0&&c(a)})}var l=w(o,2);te(l,17,()=>m(i),ee,(c,u)=>{var d=nE(),h=P(d),f=P(h),p=w(h);Ee(()=>{de(f,`From UID ${m(u).sender??""}`),de(p,` ${m(u).message??""}`)}),S(c,d)}),S(n,s),ae()}var fs=(n=>(n.None="none",n.Number="number",n.String="text",n.Boolean="checkbox",n))(fs||{});const sE={None:"Select Option",Number:"Quantitative (number)",String:"Qualitative (string",Boolean:"True or False"},Xu=()=>({name:"",type:"none",units:""});var oE=A("<option> </option>"),aE=A('<label>Units</label> <input type="text">',1),lE=A('<label>Name</label> <input type="text"> <label>Type</label> <select></select> <!> <button>Delete</button> <br>',1),cE=(n,e)=>e.push(Xu()),uE=A('<h1>Create Exam</h1> <form><label for="exam-name">Name of Exam</label> <input name="exam-name"> <br> <br> <!> <button>Add new field</button></form>',1);function hE(n,e){oe(e,!0);let t=J("");const i=B([Xu()]);async function r(u){u.preventDefault(),gr(z(K,`/exams/${m(t).replace("/","")}`),i),e.removeThis()}var s=uE(),o=w(ge(s),2),a=w(P(o),2),l=w(a,6);te(l,17,()=>i,ee,(u,d,h)=>{var f=lE(),p=ge(f);gt(p,"for",`exam-field-name-${h??""}`);var g=w(p,2);gt(g,"name",`exam-field-name-${h??""}`);var v=w(g,2);gt(v,"for",`exam-field-type-${h??""}`);var b=w(v,2);gt(b,"name",`exam-field-type-${h??""}`),te(b,21,()=>Object.keys(fs),ee,(O,pe)=>{var ie=oE(),X={},Ae=P(ie);Ee(()=>{X!==(X=m(pe))&&(ie.value=(ie.__value=m(pe))==null?"":m(pe)),de(Ae,sE[m(pe)])}),S(O,ie)});var E=w(b,2);{var T=O=>{var pe=aE(),ie=ge(pe);gt(ie,"for",`exam-field-units-${h??""}`);var X=w(ie,2);gt(X,"name",`exam-field-units-${h??""}`),ve(X,()=>m(d).units,Ae=>m(d).units=Ae),S(O,pe)};bt(E,O=>{m(d).type==fs.Number&&O(T)})}var C=w(E,2);C.__click=()=>i.splice(h,1),ve(g,()=>m(d).name,O=>m(d).name=O),Nn(b,()=>m(d).type,O=>m(d).type=O),S(u,f)});var c=w(l,2);c.__click=[cE,i],nn("submit",o,r),ve(a,()=>m(t),u=>M(t,u)),S(n,s),ae()}Ot(["click"]);var dE=A("<option> </option>"),fE=A("<option> </option>"),pE=A('<h1>Send Notification</h1> <form><label for="to">Recipient</label> <select name="to"></select> <br> <label for="patient">Patient</label> <select name="patient"></select> <br> <label for="message">Message</label> <textarea name="message"></textarea> <input type="submit" value="Send Notification"></form>',1);function _E(n,e){oe(e,!0);let t=ir(e,"onRemove"),i=J(B({}));function r(p){M(i,B(p.val()))}let s=J(B({}));function o(p){M(s,B(p.val()))}Xt(z(K,"/users"),r),Xt(z(K,"/patients"),o),t(()=>{Bn(z(K,"/users"),"value",r),Bn(z(K,"/patients"),"value",o)});const a=B({recipient:"",patient:"",message:""});async function l(p){p.preventDefault();const g=Io(z(K,`/orders/${a.recipient}`)).key;await gr(z(K,`/orders/${a.recipient}/${g}`),a),e.removeThis()}var c=pE(),u=w(ge(c),2),d=w(P(u),2);te(d,21,()=>Object.entries(m(i)),ee,(p,g)=>{let v=()=>m(g)[0],b=()=>m(g)[1];var E=dE(),T={},C=P(E);Ee(()=>{T!==(T=v())&&(E.value=(E.__value=v())==null?"":v()),de(C,b().displayName)}),S(p,E)});var h=w(d,6);te(h,21,()=>Object.entries(m(s)),ee,(p,g)=>{let v=()=>m(g)[0],b=()=>m(g)[1];var E=fE(),T={},C=P(E);Ee(()=>{T!==(T=v())&&(E.value=(E.__value=v())==null?"":v()),de(C,b().name)}),S(p,E)});var f=w(h,6);w(f,2),nn("submit",u,l),Nn(d,()=>a.recipient,p=>a.recipient=p),Nn(h,()=>a.patient,p=>a.patient=p),ve(f,()=>a.message,p=>a.message=p),S(n,c),ae()}const Ja={recipient:"Recipient",patient:"Patient",message:"Message"};var mE=A("<p>There are currently no orders.</p>"),gE=A("<th> </th>"),vE=A("<td> </td>"),yE=A("<tr></tr>"),EE=A("<table><thead><tr></tr></thead><tbody></tbody></table>"),IE=A("<h1>Received Orders</h1> <!>",1);function wE(n,e){oe(e,!0);let t=J(B({}));function i(l){console.log("ON>>>>>>"),M(t,B(l.val())),console.log(m(t))}Xt(z(K,`/orders/${Gi()}`),i);var r=IE(),s=w(ge(r),2);{var o=l=>{var c=mE();S(l,c)},a=l=>{var c=EE(),u=P(c),d=P(u);te(d,21,()=>Object.values(Ja),ee,(f,p)=>{var g=gE(),v=P(g);Ee(()=>de(v,m(p))),S(f,g)});var h=w(u);te(h,21,()=>Object.values(m(t)),ee,(f,p)=>{var g=yE();te(g,21,()=>Object.keys(Ja),ee,(v,b)=>{var E=vE(),T=P(E);Ee(()=>de(T,m(p)[m(b)])),S(v,E)}),S(f,g)}),S(l,c)};bt(s,l=>{Object.keys(m(t)).length==0?l(o):l(a,!1)})}S(n,r),ae()}var bE=A('<div id="launcher" class="svelte-rdm737"><div id="name" class="svelte-rdm737"> </div> <div id="menu-list" class="svelte-rdm737"><!></div></div>'),CE=()=>vc(ni),TE=A('<div id="root" class="svelte-rdm737"><!> <button id="log-out" class="svelte-rdm737">Log Out</button></div>');function SE(n,e){oe(e,!1);const t={Patient:[{name:"Add Patient",opens:Gy},{name:"View Patients",opens:Jy}],Notifications:[{name:"Send Notification",opens:eE},{name:"View Notifications",opens:rE}],Exams:[{name:"Create Exam",opens:hE}],Orders:[{name:"Send Order",opens:_E},{name:"View Orders",opens:wE}]};Ts();var i=TE(),r=P(i);te(r,1,()=>Object.entries(t),ee,(o,a)=>{let l=()=>m(a)[0],c=()=>m(a)[1];var u=bE(),d=P(u),h=P(d),f=w(d,2),p=P(f);$y(p,{get launchers(){return c()}}),Ee(()=>de(h,l())),S(o,u)});var s=w(r,2);s.__click=[CE],S(n,i),ae()}Ot(["click"]);var kE=A('<div class="popup"><!></div>'),RE=()=>vc(ni),NE=A(`<div class="popup"><h1>Email not verified...</h1> <p>Your email has not be verified. We sent an email to you.
            Click the link, then reload this page.</p> <button>Log Out</button></div>`),AE=A('<div id="start" class="svelte-fzkffm"><!> <div id="bottom-main" class="svelte-fzkffm"><!> <!></div></div>');function PE(n,e){oe(e,!0);let t=J(!0);const i=()=>M(t,!m(t));var r=Nl(),s=ge(r);{var o=l=>{var c=kE(),u=P(c);{var d=f=>{xy(f,{toggleShowLogIn:i})},h=f=>{Wy(f,{toggleShowLogIn:i})};bt(u,f=>{m(t)?f(d):f(h,!1)})}S(l,c)},a=(l,c)=>{{var u=h=>{var f=NE(),p=w(P(f),4);p.__click=[RE],S(h,f)},d=h=>{var f=AE(),p=P(f);SE(p,{});var g=w(p,2),v=P(g);Fy(v,{});var b=w(v,2);Oy(b,{}),S(h,f)};bt(l,h=>{Ny()?h(d,!1):h(u)},c)}};bt(s,l=>{Ry()?l(a,!1):l(o)})}S(n,r),ae()}Ot(["click"]);var OE=A('<div style="display: flex; width: 100%; height: 100%;"><!></div>');function DE(n){var e=OE(),t=P(e);PE(t,{}),S(n,e)}Zh(DE,{target:document.getElementById("app")});
