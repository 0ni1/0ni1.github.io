import{o as Ne,t as se}from"../chunks/index.7b971333.js";import{S as Je,a as Ve,I as q,g as qe,f as Fe,b as ge,c as le,s as H,i as we,d as Z,e as J,P as He,h as Ye}from"../chunks/singletons.02416843.js";import{R as Ke,H as ee}from"../chunks/control.e7f5239e.js";import{u as Xe}from"../chunks/parse.d12b0d5b.js";function Qe(n,s){return n==="/"||s==="ignore"?n:s==="never"?n.endsWith("/")?n.slice(0,-1):n:s==="always"&&!n.endsWith("/")?n+"/":n}function Ze(n){return n.split("%25").map(decodeURI).join("%25")}function et(n){for(const s in n)n[s]=decodeURIComponent(n[s]);return n}const tt=["href","pathname","search","searchParams","toString","toJSON"];function nt(n,s){const u=new URL(n);for(const c of tt){let h=u[c];Object.defineProperty(u,c,{get(){return s(),h},enumerable:!0,configurable:!0})}return at(u),u}function at(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const rt="/__data.json";function ot(n){return n.replace(/\/$/,"")+rt}function Be(n){try{return JSON.parse(sessionStorage[n])}catch{}}function Me(n,s){const u=JSON.stringify(s);try{sessionStorage[n]=u}catch{}}function it(...n){let s=5381;for(const u of n)if(typeof u=="string"){let c=u.length;for(;c;)s=s*33^u.charCodeAt(--c)}else if(ArrayBuffer.isView(u)){const c=new Uint8Array(u.buffer,u.byteOffset,u.byteLength);let h=c.length;for(;h;)s=s*33^c[--h]}else throw new TypeError("value must be a string or TypedArray");return(s>>>0).toString(36)}const ce=window.fetch;window.fetch=(n,s)=>((n instanceof Request?n.method:(s==null?void 0:s.method)||"GET")!=="GET"&&te.delete(be(n)),ce(n,s));const te=new Map;function st(n,s){const u=be(n,s),c=document.querySelector(u);if(c!=null&&c.textContent){const{body:h,...E}=JSON.parse(c.textContent),R=c.getAttribute("data-ttl");return R&&te.set(u,{body:h,init:E,ttl:1e3*Number(R)}),Promise.resolve(new Response(h,E))}return ce(n,s)}function lt(n,s,u){if(te.size>0){const c=be(n,u),h=te.get(c);if(h){if(performance.now()<h.ttl&&["default","force-cache","only-if-cached",void 0].includes(u==null?void 0:u.cache))return new Response(h.body,h.init);te.delete(c)}}return ce(s,u)}function be(n,s){let c=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(s!=null&&s.headers||s!=null&&s.body){const h=[];s.headers&&h.push([...new Headers(s.headers)].join(",")),s.body&&(typeof s.body=="string"||ArrayBuffer.isView(s.body))&&h.push(s.body),c+=`[data-hash="${it(...h)}"]`}return c}const ct=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ft(n){const s=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${dt(n).map(c=>{const h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(h)return s.push({name:h[1],matcher:h[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const E=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(E)return s.push({name:E[1],matcher:E[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const R=c.split(/\[(.+?)\](?!\])/);return"/"+R.map((_,v)=>{if(v%2){if(_.startsWith("x+"))return ye(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return ye(String.fromCharCode(..._.slice(2).split("-").map(L=>parseInt(L,16))));const g=ct.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,j,$,P]=g;return s.push({name:$,matcher:P,optional:!!D,rest:!!j,chained:j?v===1&&R[0]==="":!1}),j?"(.*?)":D?"([^/]*)?":"([^/]+?)"}return ye(_)}).join("")}).join("")}/?$`),params:s}}function ut(n){return!/^\([^)]+\)$/.test(n)}function dt(n){return n.slice(1).split("/").filter(ut)}function pt(n,s,u){const c={},h=n.slice(1);let E=0;for(let R=0;R<s.length;R+=1){const y=s[R],_=h[R-E];if(y.chained&&y.rest&&E){c[y.name]=h.slice(R-E,R+1).filter(v=>v).join("/"),E=0;continue}if(_===void 0){y.rest&&(c[y.name]="");continue}if(!y.matcher||u[y.matcher](_)){c[y.name]=_;const v=s[R+1],g=h[R+1];v&&!v.rest&&v.optional&&g&&(E=0);continue}if(y.optional&&y.chained){E++;continue}return}if(!E)return c}function ye(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ht({nodes:n,server_loads:s,dictionary:u,matchers:c}){const h=new Set(s);return Object.entries(u).map(([y,[_,v,g]])=>{const{pattern:D,params:j}=ft(y),$={id:y,exec:P=>{const L=D.exec(P);if(L)return pt(L,j,c)},errors:[1,...g||[]].map(P=>n[P]),layouts:[0,...v||[]].map(R),leaf:E(_)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function E(y){const _=y<0;return _&&(y=~y),[_,n[y]]}function R(y){return y===void 0?y:[h.has(y),n[y]]}}async function mt(n){var s;for(const u in n)if(typeof((s=n[u])==null?void 0:s.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([c,h])=>[c,await h])));return n}function gt(n){return n.filter(s=>s!=null)}const V=Be(Je)??{},Q=Be(Ve)??{};function _e(n){V[n]=Z()}function wt(n,s){var Te;const u=ht(n),c=n.nodes[0],h=n.nodes[1];c(),h();const E=document.documentElement,R=[],y=[];let _=null;const v={before_navigate:[],after_navigate:[]};let g={branch:[],error:null,url:null},D=!1,j=!1,$=!0,P=!1,L=!1,G=!1,K=!1,F,O=(Te=history.state)==null?void 0:Te[q];O||(O=Date.now(),history.replaceState({...history.state,[q]:O},"",location.href));const fe=V[O];fe&&(history.scrollRestoration="manual",scrollTo(fe.x,fe.y));let M,Ee,ne;async function Se(){ne=ne||Promise.resolve(),await ne,ne=null;const t=new URL(location.href),e=Y(t,!0);_=null,await Pe(e,t,[])}function ke(t){y.some(e=>e==null?void 0:e.snapshot)&&(Q[t]=y.map(e=>{var r;return(r=e==null?void 0:e.snapshot)==null?void 0:r.capture()}))}function Re(t){var e;(e=Q[t])==null||e.forEach((r,a)=>{var i,o;(o=(i=y[a])==null?void 0:i.snapshot)==null||o.restore(r)})}function xe(){_e(O),Me(Je,V),ke(O),Me(Ve,Q)}async function ue(t,{noScroll:e=!1,replaceState:r=!1,keepFocus:a=!1,state:i={},invalidateAll:o=!1},f,l){return typeof t=="string"&&(t=new URL(t,qe(document))),ie({url:t,scroll:e?Z():null,keepfocus:a,redirect_chain:f,details:{state:i,replaceState:r},nav_token:l,accepted:()=>{o&&(K=!0)},blocked:()=>{},type:"goto"})}async function Le(t){return _={id:t.id,promise:Oe(t).then(e=>(e.type==="loaded"&&e.state.error&&(_=null),e))},_.promise}async function ae(...t){const r=u.filter(a=>t.some(i=>a.exec(i))).map(a=>Promise.all([...a.layouts,a.leaf].map(i=>i==null?void 0:i[1]())));await Promise.all(r)}async function Pe(t,e,r,a,i,o={},f){var d,p,k;Ee=o;let l=t&&await Oe(t);if(!l){if(we(e,J))return await B(e);l=await je(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(t==null?void 0:t.url)||e,Ee!==o)return!1;if(l.type==="redirect")if(r.length>10||r.includes(e.pathname))l=await re({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return ue(new URL(l.location,e).href,{},[...r,e.pathname],o),!1;else((d=l.props.page)==null?void 0:d.status)>=400&&await H.updated.check()&&await B(e);if(R.length=0,K=!1,P=!0,a&&(_e(a),ke(a)),(p=l.props.page)!=null&&p.url&&l.props.page.url.pathname!==e.pathname&&(e.pathname=(k=l.props.page)==null?void 0:k.url.pathname),i&&i.details){const{details:w}=i,x=w.replaceState?0:1;if(w.state[q]=O+=x,history[w.replaceState?"replaceState":"pushState"](w.state,"",e),!w.replaceState){let S=O+1;for(;Q[S]||V[S];)delete Q[S],delete V[S],S+=1}}if(_=null,j?(g=l.state,l.props.page&&(l.props.page.url=e),F.$set(l.props)):Ue(l),i){const{scroll:w,keepfocus:x}=i,{activeElement:S}=document;if(await se(),$){const U=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));w?scrollTo(w.x,w.y):U?U.scrollIntoView():scrollTo(0,0)}const m=document.activeElement!==S&&document.activeElement!==document.body;!x&&!m&&await ve()}else await se();$=!0,l.props.page&&(M=l.props.page),f&&f(),P=!1}function Ue(t){var a;g=t.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),M=t.props.page,F=new n.root({target:s,props:{...t.props,stores:H,components:y},hydrate:!0}),Re(O);const r={from:null,to:{params:g.params,route:{id:((a=g.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};v.after_navigate.forEach(i=>i(r)),j=!0}async function W({url:t,params:e,branch:r,status:a,error:i,route:o,form:f}){let l="never";for(const S of r)(S==null?void 0:S.slash)!==void 0&&(l=S.slash);t.pathname=Qe(t.pathname,l),t.search=t.search;const d={type:"loaded",state:{url:t,params:e,branch:r,error:i,route:o},props:{constructors:gt(r).map(S=>S.node.component)}};f!==void 0&&(d.props.form=f);let p={},k=!M,w=0;for(let S=0;S<Math.max(r.length,g.branch.length);S+=1){const m=r[S],U=g.branch[S];(m==null?void 0:m.data)!==(U==null?void 0:U.data)&&(k=!0),m&&(p={...p,...m.data},k&&(d.props[`data_${w}`]=p),w+=1)}return(!g.url||t.href!==g.url.href||g.error!==i||f!==void 0&&f!==M.form||k)&&(d.props.page={error:i,params:e,route:{id:(o==null?void 0:o.id)??null},status:a,url:new URL(t),form:f??null,data:k?p:M.data}),d}async function de({loader:t,parent:e,url:r,params:a,route:i,server_data_node:o}){var p,k,w;let f=null;const l={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},d=await t();if((p=d.universal)!=null&&p.load){let x=function(...m){for(const U of m){const{href:C}=new URL(U,r);l.dependencies.add(C)}};const S={route:{get id(){return l.route=!0,i.id}},params:new Proxy(a,{get:(m,U)=>(l.params.add(U),m[U])}),data:(o==null?void 0:o.data)??null,url:nt(r,()=>{l.url=!0}),async fetch(m,U){let C;m instanceof Request?(C=m.url,U={body:m.method==="GET"||m.method==="HEAD"?void 0:await m.blob(),cache:m.cache,credentials:m.credentials,headers:m.headers,integrity:m.integrity,keepalive:m.keepalive,method:m.method,mode:m.mode,redirect:m.redirect,referrer:m.referrer,referrerPolicy:m.referrerPolicy,signal:m.signal,...U}):C=m;const N=new URL(C,r);return x(N.href),N.origin===r.origin&&(C=N.href.slice(r.origin.length)),j?lt(C,N.href,U):st(C,U)},setHeaders:()=>{},depends:x,parent(){return l.parent=!0,e()}};f=await d.universal.load.call(null,S)??null,f=f?await mt(f):null}return{node:d,loader:t,server:o,universal:(k=d.universal)!=null&&k.load?{type:"data",data:f,uses:l}:null,data:f??(o==null?void 0:o.data)??null,slash:((w=d.universal)==null?void 0:w.trailingSlash)??(o==null?void 0:o.slash)}}function Ae(t,e,r,a,i){if(K)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&r)return!0;for(const o of a.params)if(i[o]!==g.params[o])return!0;for(const o of a.dependencies)if(R.some(f=>f(new URL(o))))return!0;return!1}function pe(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}async function Oe({id:t,invalidating:e,url:r,params:a,route:i}){if((_==null?void 0:_.id)===t)return _.promise;const{errors:o,layouts:f,leaf:l}=i,d=[...f,l];o.forEach(b=>b==null?void 0:b().catch(()=>{})),d.forEach(b=>b==null?void 0:b[1]().catch(()=>{}));let p=null;const k=g.url?t!==g.url.pathname+g.url.search:!1,w=g.route?i.id!==g.route.id:!1;let x=!1;const S=d.map((b,T)=>{var z;const A=g.branch[T],I=!!(b!=null&&b[0])&&((A==null?void 0:A.loader)!==b[1]||Ae(x,w,k,(z=A.server)==null?void 0:z.uses,a));return I&&(x=!0),I});if(S.some(Boolean)){try{p=await ze(r,S)}catch(b){return re({status:b instanceof ee?b.status:500,error:await X(b,{url:r,params:a,route:{id:i.id}}),url:r,route:i})}if(p.type==="redirect")return p}const m=p==null?void 0:p.nodes;let U=!1;const C=d.map(async(b,T)=>{var he;if(!b)return;const A=g.branch[T],I=m==null?void 0:m[T];if((!I||I.type==="skip")&&b[1]===(A==null?void 0:A.loader)&&!Ae(U,w,k,(he=A.universal)==null?void 0:he.uses,a))return A;if(U=!0,(I==null?void 0:I.type)==="error")throw I;return de({loader:b[1],url:r,params:a,route:i,parent:async()=>{var Ce;const De={};for(let me=0;me<T;me+=1)Object.assign(De,(Ce=await C[me])==null?void 0:Ce.data);return De},server_data_node:pe(I===void 0&&b[0]?{type:"skip"}:I??null,b[0]?A==null?void 0:A.server:void 0)})});for(const b of C)b.catch(()=>{});const N=[];for(let b=0;b<d.length;b+=1)if(d[b])try{N.push(await C[b])}catch(T){if(T instanceof Ke)return{type:"redirect",location:T.location};let A=500,I;if(m!=null&&m.includes(T))A=T.status??A,I=T.error;else if(T instanceof ee)A=T.status,I=T.body;else{if(await H.updated.check())return await B(r);I=await X(T,{params:a,url:r,route:{id:i.id}})}const z=await $e(b,N,o);return z?await W({url:r,params:a,branch:N.slice(0,z.idx).concat(z.node),status:A,error:I,route:i}):await je(r,{id:i.id},I,A)}else N.push(void 0);return await W({url:r,params:a,branch:N,status:200,error:null,route:i,form:e?void 0:null})}async function $e(t,e,r){for(;t--;)if(r[t]){let a=t;for(;!e[a];)a-=1;try{return{idx:a+1,node:{node:await r[t](),loader:r[t],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:t,error:e,url:r,route:a}){const i={};let o=null;if(n.server_loads[0]===0)try{const p=await ze(r,[!0]);if(p.type!=="data"||p.nodes[0]&&p.nodes[0].type!=="data")throw 0;o=p.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||D)&&await B(r)}const l=await de({loader:c,url:r,params:i,route:a,parent:()=>Promise.resolve({}),server_data_node:pe(o)}),d={node:await h(),loader:h,universal:null,server:null,data:null};return await W({url:r,params:i,branch:[l,d],status:t,error:e,route:null})}function Y(t,e){if(we(t,J))return;const r=oe(t);for(const a of u){const i=a.exec(r);if(i)return{id:t.pathname+t.search,invalidating:e,route:a,params:et(i),url:t}}}function oe(t){return Ze(t.pathname.slice(J.length)||"/")}function Ie({url:t,type:e,intent:r,delta:a}){var l,d;let i=!1;const o={from:{params:g.params,route:{id:((l=g.route)==null?void 0:l.id)??null},url:g.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((d=r==null?void 0:r.route)==null?void 0:d.id)??null},url:t},willUnload:!r,type:e};a!==void 0&&(o.delta=a);const f={...o,cancel:()=>{i=!0}};return L||v.before_navigate.forEach(p=>p(f)),i?null:o}async function ie({url:t,scroll:e,keepfocus:r,redirect_chain:a,details:i,type:o,delta:f,nav_token:l,accepted:d,blocked:p}){const k=Y(t,!1),w=Ie({url:t,type:o,delta:f,intent:k});if(!w){p();return}const x=O;d(),L=!0,j&&H.navigating.set(w),await Pe(k,t,a,x,{scroll:e,keepfocus:r,details:i},l,()=>{L=!1,v.after_navigate.forEach(S=>S(w)),H.navigating.set(null)})}async function je(t,e,r,a){return t.origin===location.origin&&t.pathname===location.pathname&&!D?await re({status:a,error:r,url:t,route:e}):await B(t)}function B(t){return location.href=t.href,new Promise(()=>{})}function We(){let t;E.addEventListener("mousemove",o=>{const f=o.target;clearTimeout(t),t=setTimeout(()=>{a(f,2)},20)});function e(o){a(o.composedPath()[0],1)}E.addEventListener("mousedown",e),E.addEventListener("touchstart",e,{passive:!0});const r=new IntersectionObserver(o=>{for(const f of o)f.isIntersecting&&(ae(oe(new URL(f.target.href))),r.unobserve(f.target))},{threshold:0});function a(o,f){const l=Fe(o,E);if(!l)return;const{url:d,external:p}=ge(l,J);if(p)return;const k=le(l);if(!k.reload)if(f<=k.preload_data){const w=Y(d,!1);w&&Le(w)}else f<=k.preload_code&&ae(oe(d))}function i(){r.disconnect();for(const o of E.querySelectorAll("a")){const{url:f,external:l}=ge(o,J);if(l)continue;const d=le(o);d.reload||(d.preload_code===He.viewport&&r.observe(o),d.preload_code===He.eager&&ae(oe(f)))}}v.after_navigate.push(i),i()}function X(t,e){return t instanceof ee?t.body:n.hooks.handleError({error:t,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{Ne(()=>(v.after_navigate.push(t),()=>{const e=v.after_navigate.indexOf(t);v.after_navigate.splice(e,1)}))},before_navigate:t=>{Ne(()=>(v.before_navigate.push(t),()=>{const e=v.before_navigate.indexOf(t);v.before_navigate.splice(e,1)}))},disable_scroll_handling:()=>{(P||!j)&&($=!1)},goto:(t,e={})=>ue(t,e,[]),invalidate:t=>{if(typeof t=="function")R.push(t);else{const{href:e}=new URL(t,location.href);R.push(r=>r.href===e)}return Se()},invalidateAll:()=>(K=!0,Se()),preload_data:async t=>{const e=new URL(t,qe(document)),r=Y(e,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${e}`);await Le(r)},preload_code:ae,apply_action:async t=>{if(t.type==="error"){const e=new URL(location.href),{branch:r,route:a}=g;if(!a)return;const i=await $e(g.branch.length,r,a.errors);if(i){const o=await W({url:e,params:g.params,branch:r.slice(0,i.idx).concat(i.node),status:t.status??500,error:t.error,route:a});g=o.state,F.$set(o.props),se().then(ve)}}else t.type==="redirect"?ue(t.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...M,form:t.data,status:t.status}}),await se(),F.$set({form:t.data}),t.type==="success"&&ve())},_start_router:()=>{var t;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{var a;let r=!1;if(xe(),!L){const i={from:{params:g.params,route:{id:((a=g.route)==null?void 0:a.id)??null},url:g.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};v.before_navigate.forEach(o=>o(i))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&xe()}),(t=navigator.connection)!=null&&t.saveData||We(),E.addEventListener("click",e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Fe(e.composedPath()[0],E);if(!r)return;const{url:a,external:i,target:o}=ge(r,J);if(!a)return;if(o==="_parent"||o==="_top"){if(window.parent!==window)return}else if(o&&o!=="_self")return;const f=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:"))return;if(i||f.reload){Ie({url:a,type:"link"})?L=!0:e.preventDefault();return}const[d,p]=a.href.split("#");if(p!==void 0&&d===location.href.split("#")[0]){G=!0,_e(O),g.url=a,H.page.set({...M,url:a}),H.page.notify();return}ie({url:a,scroll:f.noscroll?Z():null,keepfocus:f.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:f.replace_state??a.href===location.href},accepted:()=>e.preventDefault(),blocked:()=>e.preventDefault(),type:"link"})}),E.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(we(o,J))return;const f=e.target,{keep_focus:l,noscroll:d,reload:p,replace_state:k}=le(f);if(p)return;e.preventDefault(),e.stopPropagation();const w=new FormData(f),x=a==null?void 0:a.getAttribute("name");x&&w.append(x,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(w).toString(),ie({url:o,scroll:d?Z():null,keepfocus:l??!1,redirect_chain:[],details:{state:{},replaceState:k??o.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[q]){if(e.state[q]===O)return;const a=V[e.state[q]];if(g.url.href.split("#")[0]===location.href.split("#")[0]){V[O]=Z(),O=e.state[q],scrollTo(a.x,a.y);return}const i=e.state[q]-O;let o=!1;await ie({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=e.state[q]},blocked:()=>{history.go(-i),o=!0},type:"popstate",delta:i}),o||Re(O)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[q]:++O},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&H.navigating.set(null)})},_hydrate:async({status:t=200,error:e,node_ids:r,params:a,route:i,data:o,form:f})=>{D=!0;const l=new URL(location.href);({params:a={},route:i={id:null}}=Y(l,!1)||{});let d;try{const p=r.map(async(k,w)=>{const x=o[w];return x!=null&&x.uses&&(x.uses=Ge(x.uses)),de({loader:n.nodes[k],url:l,params:a,route:i,parent:async()=>{const S={};for(let m=0;m<w;m+=1)Object.assign(S,(await p[m]).data);return S},server_data_node:pe(x)})});d=await W({url:l,params:a,branch:await Promise.all(p),status:t,error:e,form:f,route:u.find(({id:k})=>k===i.id)??null})}catch(p){if(p instanceof Ke){await B(new URL(p.location,location.href));return}d=await re({status:p instanceof ee?p.status:500,error:await X(p,{url:l,params:a,route:i}),url:l,route:i})}Ue(d)}}}async function ze(n,s){const u=new URL(n);u.pathname=ot(n.pathname),u.searchParams.append("x-sveltekit-invalidated",s.map(h=>h?"1":"").join("_"));const c=await ce(u.href);if(!c.ok)throw new ee(c.status,await c.json());return new Promise(async h=>{var g;const E=new Map,R=c.body.getReader(),y=new TextDecoder;function _(D){return Xe(D,{Promise:j=>new Promise(($,P)=>{E.set(j,{fulfil:$,reject:P})})})}let v="";for(;;){const{done:D,value:j}=await R.read();if(D&&!v)break;for(v+=!j&&v?`
`:y.decode(j);;){const $=v.indexOf(`
`);if($===-1)break;const P=JSON.parse(v.slice(0,$));if(v=v.slice($+1),P.type==="redirect")return h(P);if(P.type==="data")(g=P.nodes)==null||g.forEach(L=>{(L==null?void 0:L.type)==="data"&&(L.uses=Ge(L.uses),L.data=_(L.data))}),h(P);else if(P.type==="chunk"){const{id:L,data:G,error:K}=P,F=E.get(L);E.delete(L),K?F.reject(_(K)):F.fulfil(_(G))}}}})}function Ge(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function ve(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const s=document.body,u=s.getAttribute("tabindex");return s.tabIndex=-1,s.focus({preventScroll:!0}),u!==null?s.setAttribute("tabindex",u):s.removeAttribute("tabindex"),new Promise(c=>{setTimeout(()=>{var h;c((h=getSelection())==null?void 0:h.removeAllRanges())})})}}async function Et(n,s,u){const c=wt(n,s);Ye({client:c}),u?await c._hydrate(u):c.goto(location.href,{replaceState:!0}),c._start_router()}export{Et as start};
