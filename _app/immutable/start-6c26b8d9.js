import{S as at,i as rt,s as ot,a as it,e as V,c as st,b as H,g as Y,t as j,d as Q,f as N,h as q,j as lt,o as Pe,k as ct,l as ft,m as ut,n as Ee,p as M,q as dt,r as pt,u as _t,v as K,w as z,x as oe,y as G,z as J,A as de}from"./chunks/index-bb2635c3.js";import{S as tt,I as x,g as Me,f as xe,a as ke,b as pe,s as X,i as We,c as _e,P as Xe,d as ht,e as mt,h as gt}from"./chunks/singletons-420b2117.js";import{_ as D}from"./chunks/preload-helper-41c905a7.js";import{R as Ye,H as Ae}from"./chunks/control-f5b05b5f.js";import{u as wt}from"./chunks/parse-d12b0d5b.js";function yt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function vt(a){return a.split("%25").map(decodeURI).join("%25")}function bt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Et=["href","pathname","search","searchParams","toString","toJSON"];function kt(a,e){const n=new URL(a);for(const o of Et){let s=n[o];Object.defineProperty(n,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return $t(n),n}function $t(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function Lt(a){return a.replace(/\/$/,"")+Rt}function St(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ae.delete(Te(a)),he(a,e));const ae=new Map;function Pt(a,e){const n=Te(a,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:s,...d}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&ae.set(n,{body:s,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(s,d))}return he(a,e)}function At(a,e,n){if(ae.size>0){const o=Te(a,n),s=ae.get(o);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(s.body,s.init);ae.delete(o)}}return he(e,n)}function Te(a,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${St(e.body)}"]`),o}const Ot=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function It(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Dt(a).map(o=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const t=o.split(/\[(.+?)\](?!\])/);return"/"+t.map((u,m)=>{if(m%2){if(u.startsWith("x+"))return $e(String.fromCharCode(parseInt(u.slice(2),16)));if(u.startsWith("u+"))return $e(String.fromCharCode(...u.slice(2).split("-").map(O=>parseInt(O,16))));const g=Ot.exec(u);if(!g)throw new Error(`Invalid param: ${u}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,R,I,E,F]=g;return e.push({name:E,matcher:F,optional:!!R,rest:!!I,chained:I?m===1&&t[0]==="":!1}),I?"(.*?)":R?"([^/]*)?":"([^/]+?)"}return $e(u)}).join("")}).join("")}/?$`),params:e}}function Tt(a){return!/^\([^)]+\)$/.test(a)}function Dt(a){return a.slice(1).split("/").filter(Tt)}function Ut(a,e,n){const o={},s=a.slice(1);let d="";for(let t=0;t<e.length;t+=1){const f=e[t];let u=s[t];if(f.chained&&f.rest&&d&&(u=u?d+"/"+u:d),d="",u===void 0)f.rest&&(o[f.name]="");else{if(f.matcher&&!n[f.matcher](u)){if(f.optional&&f.chained){let m=s.indexOf(void 0,t);if(m===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)d=u;else return}for(;m>=t;)s[m]=s[m-1],m-=1;continue}return}o[f.name]=u}}if(!d)return o}function $e(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Vt(a,e,n,o){const s=new Set(e);return Object.entries(n).map(([f,[u,m,g]])=>{const{pattern:R,params:I}=It(f),E={id:f,exec:F=>{const O=R.exec(F);if(O)return Ut(O,I,o)},errors:[1,...g||[]].map(F=>a[F]),layouts:[0,...m||[]].map(t),leaf:d(u)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function d(f){const u=f<0;return u&&(f=~f),[u,a[f]]}function t(f){return f===void 0?f:[s.has(f),a[f]]}}function jt(a){let e,n,o;var s=a[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=K(s,d(a))),{c(){e&&z(e.$$.fragment),n=V()},l(t){e&&oe(e.$$.fragment,t),n=V()},m(t,f){e&&G(e,t,f),H(t,n,f),o=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&2&&(u.form=t[1]),f&1&&s!==(s=t[0][0])){if(e){Y();const m=e;j(m.$$.fragment,1,0,()=>{J(m,1)}),Q()}s?(e=K(s,d(t)),z(e.$$.fragment),N(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(t){o||(e&&N(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&q(n),e&&J(e,t)}}}function Nt(a){let e,n,o;var s=a[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Bt]},$$scope:{ctx:t}}}}return s&&(e=K(s,d(a))),{c(){e&&z(e.$$.fragment),n=V()},l(t){e&&oe(e.$$.fragment,t),n=V()},m(t,f){e&&G(e,t,f),H(t,n,f),o=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&1051&&(u.$$scope={dirty:f,ctx:t}),f&1&&s!==(s=t[0][0])){if(e){Y();const m=e;j(m.$$.fragment,1,0,()=>{J(m,1)}),Q()}s?(e=K(s,d(t)),z(e.$$.fragment),N(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(t){o||(e&&N(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&q(n),e&&J(e,t)}}}function Ct(a){let e,n,o;var s=a[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=K(s,d(a))),{c(){e&&z(e.$$.fragment),n=V()},l(t){e&&oe(e.$$.fragment,t),n=V()},m(t,f){e&&G(e,t,f),H(t,n,f),o=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&2&&(u.form=t[1]),f&1&&s!==(s=t[0][1])){if(e){Y();const m=e;j(m.$$.fragment,1,0,()=>{J(m,1)}),Q()}s?(e=K(s,d(t)),z(e.$$.fragment),N(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(t){o||(e&&N(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&q(n),e&&J(e,t)}}}function qt(a){let e,n,o;var s=a[0][1];function d(t){return{props:{data:t[3],$$slots:{default:[Ft]},$$scope:{ctx:t}}}}return s&&(e=K(s,d(a))),{c(){e&&z(e.$$.fragment),n=V()},l(t){e&&oe(e.$$.fragment,t),n=V()},m(t,f){e&&G(e,t,f),H(t,n,f),o=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&1043&&(u.$$scope={dirty:f,ctx:t}),f&1&&s!==(s=t[0][1])){if(e){Y();const m=e;j(m.$$.fragment,1,0,()=>{J(m,1)}),Q()}s?(e=K(s,d(t)),z(e.$$.fragment),N(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(t){o||(e&&N(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&q(n),e&&J(e,t)}}}function Ft(a){let e,n,o;var s=a[0][2];function d(t){return{props:{data:t[4],form:t[1]}}}return s&&(e=K(s,d(a))),{c(){e&&z(e.$$.fragment),n=V()},l(t){e&&oe(e.$$.fragment,t),n=V()},m(t,f){e&&G(e,t,f),H(t,n,f),o=!0},p(t,f){const u={};if(f&16&&(u.data=t[4]),f&2&&(u.form=t[1]),f&1&&s!==(s=t[0][2])){if(e){Y();const m=e;j(m.$$.fragment,1,0,()=>{J(m,1)}),Q()}s?(e=K(s,d(t)),z(e.$$.fragment),N(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(t){o||(e&&N(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&q(n),e&&J(e,t)}}}function Bt(a){let e,n,o,s;const d=[qt,Ct],t=[];function f(u,m){return u[0][2]?0:1}return e=f(a),n=t[e]=d[e](a),{c(){n.c(),o=V()},l(u){n.l(u),o=V()},m(u,m){t[e].m(u,m),H(u,o,m),s=!0},p(u,m){let g=e;e=f(u),e===g?t[e].p(u,m):(Y(),j(t[g],1,1,()=>{t[g]=null}),Q(),n=t[e],n?n.p(u,m):(n=t[e]=d[e](u),n.c()),N(n,1),n.m(o.parentNode,o))},i(u){s||(N(n),s=!0)},o(u){j(n),s=!1},d(u){t[e].d(u),u&&q(o)}}}function Qe(a){let e,n=a[6]&&Ze(a);return{c(){e=ct("div"),n&&n.c(),this.h()},l(o){e=ft(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=ut(e);n&&n.l(s),s.forEach(q),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),M(e,"position","absolute"),M(e,"left","0"),M(e,"top","0"),M(e,"clip","rect(0 0 0 0)"),M(e,"clip-path","inset(50%)"),M(e,"overflow","hidden"),M(e,"white-space","nowrap"),M(e,"width","1px"),M(e,"height","1px")},m(o,s){H(o,e,s),n&&n.m(e,null)},p(o,s){o[6]?n?n.p(o,s):(n=Ze(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&q(e),n&&n.d()}}}function Ze(a){let e;return{c(){e=dt(a[7])},l(n){e=pt(n,a[7])},m(n,o){H(n,e,o)},p(n,o){o&128&&_t(e,n[7])},d(n){n&&q(e)}}}function Ht(a){let e,n,o,s,d;const t=[Nt,jt],f=[];function u(g,R){return g[0][1]?0:1}e=u(a),n=f[e]=t[e](a);let m=a[5]&&Qe(a);return{c(){n.c(),o=it(),m&&m.c(),s=V()},l(g){n.l(g),o=st(g),m&&m.l(g),s=V()},m(g,R){f[e].m(g,R),H(g,o,R),m&&m.m(g,R),H(g,s,R),d=!0},p(g,[R]){let I=e;e=u(g),e===I?f[e].p(g,R):(Y(),j(f[I],1,1,()=>{f[I]=null}),Q(),n=f[e],n?n.p(g,R):(n=f[e]=t[e](g),n.c()),N(n,1),n.m(o.parentNode,o)),g[5]?m?m.p(g,R):(m=Qe(g),m.c(),m.m(s.parentNode,s)):m&&(m.d(1),m=null)},i(g){d||(N(n),d=!0)},o(g){j(n),d=!1},d(g){f[e].d(g),g&&q(o),m&&m.d(g),g&&q(s)}}}function Kt(a,e,n){let{stores:o}=e,{page:s}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:u=null}=e,{data_2:m=null}=e;lt(o.page.notify);let g=!1,R=!1,I=null;return Pe(()=>{const E=o.page.subscribe(()=>{g&&(n(6,R=!0),n(7,I=document.title||"untitled page"))});return n(5,g=!0),E}),a.$$set=E=>{"stores"in E&&n(8,o=E.stores),"page"in E&&n(9,s=E.page),"components"in E&&n(0,d=E.components),"form"in E&&n(1,t=E.form),"data_0"in E&&n(2,f=E.data_0),"data_1"in E&&n(3,u=E.data_1),"data_2"in E&&n(4,m=E.data_2)},a.$$.update=()=>{a.$$.dirty&768&&o.page.set(s)},[d,t,f,u,m,g,R,I,o,s]}class zt extends at{constructor(e){super(),rt(this,e,Kt,Ht,ot,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Gt={},me=[()=>D(()=>import("./chunks/0-68d4bd86.js"),["./chunks/0-68d4bd86.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-b8648205.js","./chunks/index-bb2635c3.js","./assets/_layout-0ac9f3e4.css"],import.meta.url),()=>D(()=>import("./chunks/1-911e5c16.js"),["./chunks/1-911e5c16.js","./components/error.svelte-cd779839.js","./chunks/index-bb2635c3.js","./chunks/stores-1683413b.js","./chunks/singletons-420b2117.js","./chunks/index-b6c5d38e.js"],import.meta.url),()=>D(()=>import("./chunks/2-91f2982a.js"),["./chunks/2-91f2982a.js","./components/pages/blog/_layout.svelte-8c396bd8.js","./chunks/index-bb2635c3.js","./assets/_layout-5c045b07.css"],import.meta.url),()=>D(()=>import("./chunks/3-3eb6bd2e.js"),["./chunks/3-3eb6bd2e.js","./components/pages/search/_layout.svelte-4cd6d273.js","./chunks/index-bb2635c3.js"],import.meta.url),()=>D(()=>import("./chunks/4-c1ce7139.js"),["./chunks/4-c1ce7139.js","./components/pages/search/_category_/_error.svelte-620b5467.js","./chunks/index-bb2635c3.js","./chunks/stores-1683413b.js","./chunks/singletons-420b2117.js","./chunks/index-b6c5d38e.js"],import.meta.url),()=>D(()=>import("./chunks/5-b58003bf.js"),["./chunks/5-b58003bf.js","./components/pages/_page.svelte-59167a45.js","./chunks/index-bb2635c3.js","./assets/_page-c34c8f15.css"],import.meta.url),()=>D(()=>import("./chunks/6-2a75894d.js"),["./chunks/6-2a75894d.js","./components/pages/about/_page.svelte-69ad381a.js","./chunks/index-bb2635c3.js","./assets/_page-70e8cb95.css"],import.meta.url),()=>D(()=>import("./chunks/7-aac79cdc.js"),["./chunks/7-aac79cdc.js","./chunks/_page-80848ead.js","./components/pages/blog/_page.svelte-3fd36a90.js","./chunks/index-bb2635c3.js"],import.meta.url),()=>D(()=>import("./chunks/8-93f8d78d.js"),["./chunks/8-93f8d78d.js","./chunks/_page-ee5c7aab.js","./chunks/preload-helper-41c905a7.js","./components/pages/blog/_path_/_page.svelte-4046a32e.js","./chunks/index-bb2635c3.js"],import.meta.url),()=>D(()=>import("./chunks/9-065cb119.js"),["./chunks/9-065cb119.js","./components/pages/chat/_page.svelte-20095273.js","./chunks/index-bb2635c3.js","./chunks/parse-d12b0d5b.js","./chunks/singletons-420b2117.js","./chunks/index-b6c5d38e.js"],import.meta.url),()=>D(()=>import("./chunks/10-1c62f02d.js"),["./chunks/10-1c62f02d.js","./components/pages/clicker/_page.svelte-a14089b5.js","./chunks/index-bb2635c3.js","./assets/_page-d8c15578.css"],import.meta.url),()=>D(()=>import("./chunks/11-43eab1f4.js"),["./chunks/11-43eab1f4.js","./components/pages/memory/_page.svelte-a4f3d652.js","./chunks/index-bb2635c3.js","./assets/_page-2b25582d.css"],import.meta.url),()=>D(()=>import("./chunks/12-bc76e266.js"),["./chunks/12-bc76e266.js","./components/pages/search/_page.svelte-3aecc503.js","./chunks/index-bb2635c3.js"],import.meta.url),()=>D(()=>import("./chunks/13-b11f0b2b.js"),["./chunks/13-b11f0b2b.js","./chunks/_page-8515917e.js","./chunks/control-f5b05b5f.js","./components/pages/search/_category_/_page.svelte-ba9496c0.js","./chunks/index-bb2635c3.js"],import.meta.url),()=>D(()=>import("./chunks/14-afe74189.js"),["./chunks/14-afe74189.js","./components/pages/telltale/_page.svelte-c41467c3.js","./chunks/index-bb2635c3.js","./chunks/index-b6c5d38e.js","./chunks/index-ed7d77d9.js","./assets/_page-e52d8411.css"],import.meta.url),()=>D(()=>import("./chunks/15-9207d039.js"),["./chunks/15-9207d039.js","./components/pages/todo/_page.svelte-d045d89d.js","./chunks/index-bb2635c3.js","./assets/_page-412d2fd4.css"],import.meta.url)],Jt=[],Mt={"/":[5],"/about":[6],"/blog":[7,[2]],"/blog/[path]":[8,[2]],"/chat":[9],"/clicker":[10],"/memory":[11],"/search":[12,[3]],"/search/[category]":[13,[3],[,4]],"/telltale":[14],"/todo":[15]},xt={handleError:({error:a})=>{console.error(a)}};async function Wt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([o,s])=>[o,await s])));return a}function De(a){const e=new Set(a);function n(o,s){if(o){for(const d in o)if(d[0]!=="_"&&!e.has(d)){const t=a.join(", ");throw new Error(`Invalid export '${d}'${s?` in ${s}`:""} (valid exports are ${t}, or anything with a '_' prefix)`)}}}return n}De(["load","prerender","csr","ssr","trailingSlash"]);De(["load","prerender","csr","ssr","actions","trailingSlash"]);De(["GET","POST","PATCH","PUT","DELETE","prerender","trailingSlash"]);const Re=Vt(me,Jt,Mt,Gt),Oe=me[0],Ie=me[1];Oe();Ie();let re={};try{re=JSON.parse(sessionStorage[tt])}catch{}function Le(a){re[a]=_e()}function Xt({target:a,base:e}){var ze;const n=document.documentElement,o=[];let s=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,u=!1,m=!0,g=!1,R=!1,I=!1,E=!1,F,O=(ze=history.state)==null?void 0:ze[x];O||(O=Date.now(),history.replaceState({...history.state,[x]:O},"",location.href));const ge=re[O];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let W,Ue,ie;async function Ve(){ie=ie||Promise.resolve(),await ie,ie=null;const r=new URL(location.href),i=ce(r,!0);s=null,await Ne(i,r,[])}async function we(r,{noScroll:i=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:_=!1},h,v){return typeof r=="string"&&(r=new URL(r,Me(document))),fe({url:r,scroll:i?_e():null,keepfocus:l,redirect_chain:h,details:{state:p,replaceState:c},nav_token:v,accepted:()=>{_&&(E=!0)},blocked:()=>{},type:"goto"})}async function je(r){const i=ce(r,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return s={id:i.id,promise:Fe(i).then(c=>(c.type==="loaded"&&c.state.error&&(s=null),c))},s.promise}async function se(...r){const c=Re.filter(l=>r.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function Ne(r,i,c,l,p={},_){var v,y;Ue=p;let h=r&&await Fe(r);if(h||(h=await Ke(i,{id:null},await ne(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(r==null?void 0:r.url)||i,Ue!==p)return!1;if(h.type==="redirect")if(c.length>10||c.includes(i.pathname))h=await le({status:500,error:await ne(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return we(new URL(h.location,i).href,{},[...c,i.pathname],p),!1;else((y=(v=h.props)==null?void 0:v.page)==null?void 0:y.status)>=400&&await X.updated.check()&&await ue(i);if(o.length=0,E=!1,g=!0,l&&l.details){const{details:w}=l,$=w.replaceState?0:1;w.state[x]=O+=$,history[w.replaceState?"replaceState":"pushState"](w.state,"",i)}if(s=null,u?(t=h.state,h.props.page&&(h.props.page.url=i),F.$set(h.props)):Ce(h),l){const{scroll:w,keepfocus:$}=l;if($||Se(),await de(),m){const L=i.hash&&document.getElementById(i.hash.slice(1));w?scrollTo(w.x,w.y):L?L.scrollIntoView():scrollTo(0,0)}}else await de();m=!0,h.props.page&&(W=h.props.page),_&&_(),g=!1}function Ce(r){var l;t=r.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),W=r.props.page,F=new zt({target:a,props:{...r.props,stores:X},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(p=>p(c)),u=!0}async function ee({url:r,params:i,branch:c,status:l,error:p,route:_,form:h}){const v=c.filter(Boolean);let y="never";for(const S of c)(S==null?void 0:S.slash)!==void 0&&(y=S.slash);r.pathname=yt(r.pathname,y),r.search=r.search;const w={type:"loaded",state:{url:r,params:i,branch:c,error:p,route:_},props:{components:v.map(S=>S.node.component)}};h!==void 0&&(w.props.form=h);let $={},L=!W;for(let S=0;S<v.length;S+=1){const b=v[S];$={...$,...b.data},(L||!t.branch.some(U=>U===b))&&(w.props[`data_${S}`]=$,L=L||Object.keys(b.data??{}).length>0)}return L||(L=Object.keys(W.data).length!==Object.keys($).length),(!t.url||r.href!==t.url.href||t.error!==p||h!==void 0||L)&&(w.props.page={error:p,params:i,route:_,status:l,url:new URL(r),form:h??null,data:L?$:W.data}),w}async function ye({loader:r,parent:i,url:c,params:l,route:p,server_data_node:_}){var w,$,L;let h=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await r();if((w=y.universal)!=null&&w.load){let B=function(...b){for(const U of b){const{href:C}=new URL(U,c);v.dependencies.add(C)}};const S={route:{get id(){return v.route=!0,p.id}},params:new Proxy(l,{get:(b,U)=>(v.params.add(U),b[U])}),data:(_==null?void 0:_.data)??null,url:kt(c,()=>{v.url=!0}),async fetch(b,U){let C;b instanceof Request?(C=b.url,U={body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal,...U}):C=b;const k=new URL(C,c).href;return B(k),u?At(C,k,U):Pt(C,U)},setHeaders:()=>{},depends:B,parent(){return v.parent=!0,i()}};h=await y.universal.load.call(null,S)??null,h=h?await Wt(h):null}return{node:y,loader:r,server:_,universal:($=y.universal)!=null&&$.load?{type:"data",data:h,uses:v}:null,data:h??(_==null?void 0:_.data)??null,slash:((L=y.universal)==null?void 0:L.trailingSlash)??(_==null?void 0:_.slash)}}function qe(r,i,c,l,p){if(E)return!0;if(!l)return!1;if(l.parent&&r||l.route&&i||l.url&&c)return!0;for(const _ of l.params)if(p[_]!==t.params[_])return!0;for(const _ of l.dependencies)if(o.some(h=>h(new URL(_))))return!0;return!1}function ve(r,i){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?i??null:null}async function Fe({id:r,invalidating:i,url:c,params:l,route:p}){if((s==null?void 0:s.id)===r)return s.promise;const{errors:_,layouts:h,leaf:v}=p,y=[...h,v];_.forEach(k=>k==null?void 0:k().catch(()=>{})),y.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let w=null;const $=t.url?r!==t.url.pathname+t.url.search:!1,L=t.route?r!==t.route.id:!1,B=y.reduce((k,A,T)=>{var te;const P=t.branch[T],Z=!!(A!=null&&A[0])&&((P==null?void 0:P.loader)!==A[1]||qe(k.some(Boolean),L,$,(te=P.server)==null?void 0:te.uses,l));return k.push(Z),k},[]);if(B.some(Boolean)){try{w=await et(c,B)}catch(k){return le({status:500,error:await ne(k,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(w.type==="redirect")return w}const S=w==null?void 0:w.nodes;let b=!1;const U=y.map(async(k,A)=>{var te;if(!k)return;const T=t.branch[A],P=S==null?void 0:S[A];if((!P||P.type==="skip")&&k[1]===(T==null?void 0:T.loader)&&!qe(b,L,$,(te=T.universal)==null?void 0:te.uses,l))return T;if(b=!0,(P==null?void 0:P.type)==="error")throw P;return ye({loader:k[1],url:c,params:l,route:p,parent:async()=>{var Je;const Ge={};for(let be=0;be<A;be+=1)Object.assign(Ge,(Je=await U[be])==null?void 0:Je.data);return Ge},server_data_node:ve(P===void 0&&k[0]?{type:"skip"}:P??null,T==null?void 0:T.server)})});for(const k of U)k.catch(()=>{});const C=[];for(let k=0;k<y.length;k+=1)if(y[k])try{C.push(await U[k])}catch(A){if(A instanceof Ye)return{type:"redirect",location:A.location};let T=500,P;S!=null&&S.includes(A)?(T=A.status??T,P=A.error):A instanceof Ae?(T=A.status,P=A.body):P=await ne(A,{params:l,url:c,route:{id:p.id}});const Z=await Be(k,C,_);return Z?await ee({url:c,params:l,branch:C.slice(0,Z.idx).concat(Z.node),status:T,error:P,route:p}):await Ke(c,{id:p.id},P,T)}else C.push(void 0);return await ee({url:c,params:l,branch:C,status:200,error:null,route:p,form:i?void 0:null})}async function Be(r,i,c){for(;r--;)if(c[r]){let l=r;for(;!i[l];)l-=1;try{return{idx:l+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:r,error:i,url:c,route:l}){const p={},_=await Oe();let h=null;if(_.server)try{const w=await et(c,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;h=w.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ue(c)}const v=await ye({loader:Oe,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:ve(h)}),y={node:await Ie(),loader:Ie,universal:null,server:null,data:null};return await ee({url:c,params:p,branch:[v,y],status:r,error:i,route:null})}function ce(r,i){if(We(r,e))return;const c=vt(r.pathname.slice(e.length)||"/");for(const l of Re){const p=l.exec(c);if(p)return{id:r.pathname+r.search,invalidating:i,route:l,params:bt(p),url:r}}}function He({url:r,type:i,intent:c,delta:l}){var v,y;let p=!1;const _={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((y=c==null?void 0:c.route)==null?void 0:y.id)??null},url:r},willUnload:!c,type:i};l!==void 0&&(_.delta=l);const h={..._,cancel:()=>{p=!0}};return R||d.before_navigate.forEach(w=>w(h)),p?null:_}async function fe({url:r,scroll:i,keepfocus:c,redirect_chain:l,details:p,type:_,delta:h,nav_token:v,accepted:y,blocked:w}){const $=ce(r,!1),L=He({url:r,type:_,delta:h,intent:$});if(!L){w();return}Le(O),y(),R=!0,u&&X.navigating.set(L),await Ne($,r,l,{scroll:i,keepfocus:c,details:p},v,()=>{R=!1,d.after_navigate.forEach(B=>B(L)),X.navigating.set(null)})}async function Ke(r,i,c,l){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await le({status:l,error:c,url:r,route:i}):await ue(r)}function ue(r){return location.href=r.href,new Promise(()=>{})}function nt(){let r;n.addEventListener("mousemove",_=>{const h=_.target;clearTimeout(r),r=setTimeout(()=>{l(h,2)},20)});function i(_){l(_.composedPath()[0],1)}n.addEventListener("mousedown",i),n.addEventListener("touchstart",i,{passive:!0});const c=new IntersectionObserver(_=>{for(const h of _)h.isIntersecting&&(se(new URL(h.target.href).pathname),c.unobserve(h.target))},{threshold:0});function l(_,h){const v=xe(_,n);if(!v)return;const{url:y,external:w}=ke(v,e);if(w)return;const $=pe(v);$.reload||(h<=$.preload_data?je(y):h<=$.preload_code&&se(y.pathname))}function p(){c.disconnect();for(const _ of n.querySelectorAll("a")){const{url:h,external:v}=ke(_,e);if(v)continue;const y=pe(_);y.reload||(y.preload_code===Xe.viewport&&c.observe(_),y.preload_code===Xe.eager&&se(h.pathname))}}d.after_navigate.push(p),p()}return{after_navigate:r=>{Pe(()=>(d.after_navigate.push(r),()=>{const i=d.after_navigate.indexOf(r);d.after_navigate.splice(i,1)}))},before_navigate:r=>{Pe(()=>(d.before_navigate.push(r),()=>{const i=d.before_navigate.indexOf(r);d.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(g||!u)&&(m=!1)},goto:(r,i={})=>we(r,i,[]),invalidate:r=>{if(typeof r=="function")o.push(r);else{const{href:i}=new URL(r,location.href);o.push(c=>c.href===i)}return Ve()},invalidateAll:()=>(E=!0,Ve()),preload_data:async r=>{const i=new URL(r,Me(document));await je(i)},preload_code:se,apply_action:async r=>{if(r.type==="error"){const i=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await Be(t.branch.length,c,l.errors);if(p){const _=await ee({url:i,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:r.status??500,error:r.error,route:l});t=_.state,F.$set(_.props),de().then(Se)}}else if(r.type==="redirect")we(r.location,{invalidateAll:!0},[]);else{const i={form:r.data,page:{...W,form:r.data,status:r.status}};F.$set(i),r.type==="success"&&de().then(Se)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var l;let c=!1;if(!R){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(_=>_(p))}c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(O);try{sessionStorage[tt]=JSON.stringify(re)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||nt(),n.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const c=xe(i.composedPath()[0],n);if(!c)return;const{url:l,external:p,has:_}=ke(c,e),h=pe(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||_.download)return;if(p||h.reload){He({url:l,type:"link"})||i.preventDefault(),R=!0;return}const[y,w]=l.href.split("#");if(w!==void 0&&y===location.href.split("#")[0]){I=!0,Le(O),t.url=l,X.page.set({...W,url:l}),X.page.notify();return}fe({url:l,scroll:h.noscroll?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),n.addEventListener("submit",i=>{var y;if(i.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(i.target),l=i.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const _=new URL(((y=i.submitter)==null?void 0:y.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(_,e))return;const{noscroll:h,reload:v}=pe(i.target);v||(i.preventDefault(),i.stopPropagation(),_.search=new URLSearchParams(new FormData(i.target)).toString(),fe({url:_,scroll:h?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",i=>{var c;if((c=i.state)!=null&&c[x]){if(i.state[x]===O)return;const l=i.state[x]-O;fe({url:new URL(location.href),scroll:re[i.state[x]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=i.state[x]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{I&&(I=!1,history.replaceState({...history.state,[x]:++O},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&X.navigating.set(null)})},_hydrate:async({status:r=200,error:i,node_ids:c,params:l,route:p,data:_,form:h})=>{f=!0;const v=new URL(location.href);({params:l={},route:p={id:null}}=ce(v,!1)||{});let y;try{const w=c.map(async($,L)=>{const B=_[L];return ye({loader:me[$],url:v,params:l,route:p,parent:async()=>{const S={};for(let b=0;b<L;b+=1)Object.assign(S,(await w[b]).data);return S},server_data_node:ve(B)})});y=await ee({url:v,params:l,branch:await Promise.all(w),status:r,error:i,form:h,route:Re.find(({id:$})=>$===p.id)??null})}catch(w){if(w instanceof Ye){await ue(new URL(w.location,location.href));return}y=await le({status:w instanceof Ae?w.status:500,error:await ne(w,{url:v,params:l,route:p}),url:v,route:p})}Ce(y)}}}async function et(a,e){var d;const n=new URL(a);n.pathname=Lt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const o=await he(n.href),s=await o.json();if(!o.ok)throw new Error(s);return(d=s.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=wt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function ne(a,e){return a instanceof Ae?a.body:xt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Se(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function nn({env:a,hydrate:e,paths:n,target:o,version:s}){ht(n),gt(s);const d=Xt({target:o,base:n.base});mt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{nn as start};
