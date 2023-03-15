import{W as O,X as C}from"./index-829657cb.js";function m(n){const r=n-1;return r*r*r+1}function S(n,r){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(n);s<t.length;s++)r.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(n,t[s])&&(a[t[s]]=n[t[s]]);return a}function M(n,{delay:r=0,duration:a=400,easing:t=m,x:s=0,y:d=0,opacity:i=0}={}){const o=getComputedStyle(n),c=+o.opacity,y=o.transform==="none"?"":o.transform,f=c*(1-i);return{delay:r,duration:a,easing:t,css:(e,l)=>`
			transform: ${y} translate(${(1-e)*s}px, ${(1-e)*d}px);
			opacity: ${c-f*l}`}}function P(n,{delay:r=0,duration:a=400,easing:t=m,start:s=0,opacity:d=0}={}){const i=getComputedStyle(n),o=+i.opacity,c=i.transform==="none"?"":i.transform,y=1-s,f=o*(1-d);return{delay:r,duration:a,easing:t,css:(e,l)=>`
			transform: ${c} scale(${1-y*l});
			opacity: ${o-f*l}
		`}}function q(n){var{fallback:r}=n,a=S(n,["fallback"]);const t=new Map,s=new Map;function d(o,c,y){const{delay:f=0,duration:e=u=>Math.sqrt(u)*30,easing:l=m}=O(O({},a),y),p=c.getBoundingClientRect(),g=o.left-p.left,$=o.top-p.top,w=o.width/p.width,x=o.height/p.height,k=Math.sqrt(g*g+$*$),h=getComputedStyle(c),_=h.transform==="none"?"":h.transform,v=+h.opacity;return{delay:f,duration:C(e)?e(k):e,easing:l,css:(u,b)=>`
				opacity: ${u*v};
				transform-origin: top left;
				transform: ${_} translate(${b*g}px,${b*$}px) scale(${u+(1-u)*w}, ${u+(1-u)*x});
			`}}function i(o,c,y){return(f,e)=>(o.set(e.key,{rect:f.getBoundingClientRect()}),()=>{if(c.has(e.key)){const{rect:l}=c.get(e.key);return c.delete(e.key),d(l,f,e)}return o.delete(e.key),r&&r(f,e,y)})}return[i(s,t,!1),i(t,s,!0)]}export{q as a,m as c,M as f,P as s};
