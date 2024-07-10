import{am as m,c as d,an as b,ao as k,d as h,a8 as p,I as x,N as S,ap as v,aq as N}from"./DUiCuUqr.js";const C=Object.freeze({left:0,top:0,width:16,height:16}),I=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),y=Object.freeze({...C,...I});Object.freeze({...y,body:"",hidden:!1});function $(e,t){let s=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const n in t)s+=" "+n+'="'+t[n]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+s+">"+e+"</svg>"}const z=/(-?[0-9.]*[0-9]+[0-9.]*)/g,R=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function q(e,t,s){if(t===1)return e;s=s||100;const n=e.split(z);if(n===null||!n.length)return e;const a=[];let r=n.shift(),o=R.test(r);for(;;){if(o){const c=parseFloat(r);isNaN(c)?a.push(r):a.push(Math.ceil(c*t*s)/s)}else a.push(r);if(r=n.shift(),r===void 0)return a.join("");o=!o}}function P(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function T(e){return"data:image/svg+xml,"+P(e)}function j(e){return'url("'+T(e)+'")'}function A(e){if(e.width!==e.height){const t=Math.max(e.width,e.height);return{...e,width:t,height:t,left:e.left-(t-e.width)/2,top:e.top-(t-e.height)/2}}return e}function L(e){const t={display:"inline-block",width:"1em",height:"1em"},s=e.varName;switch(e.pseudoSelector&&(t.content="''"),e.mode){case"background":s&&(t["background-image"]="var(--"+s+")"),t["background-repeat"]="no-repeat",t["background-size"]="100% 100%";break;case"mask":t["background-color"]="currentColor",s&&(t["mask-image"]=t["-webkit-mask-image"]="var(--"+s+")"),t["mask-repeat"]=t["-webkit-mask-repeat"]="no-repeat",t["mask-size"]=t["-webkit-mask-size"]="100% 100%";break}return t}function O(e,t){const s={},n=t.varName;e.width!==e.height&&(t.forceSquare?e=A(e):s.width=q("1em",e.width/e.height));const a=$(e.body.replace(/currentColor/g,t.color||"black"),{viewBox:`${e.left} ${e.top} ${e.width} ${e.height}`,width:e.width.toString(),height:e.height.toString()}),r=j(a);if(n)s["--"+n]=r;else switch(t.mode){case"background":s["background-image"]=r;break;case"mask":s["mask-image"]=s["-webkit-mask-image"]=r;break}return s}const g={selectorStart:{compressed:"{",compact:" {",expanded:" {"},selectorEnd:{compressed:"}",compact:`; }
`,expanded:`;
}
`},rule:{compressed:"{key}:",compact:" {key}: ",expanded:`
  {key}: `}};function E(e,t="expanded"){const s=[];for(let n=0;n<e.length;n++){const{selector:a,rules:r}=e[n];let c=(a instanceof Array?a.join(t==="compressed"?",":", "):a)+g.selectorStart[t],u=!0;for(const l in r)u||(c+=";"),c+=g.rule[t].replace("{key}",l)+r[l],u=!1;c+=g.selectorEnd[t],s.push(c)}return s.join(t==="compressed"?"":`
`)}function M(e,t={}){const s=t.customise?t.customise(e.body):e.body,n=t.mode||(t.color||!s.includes("currentColor")?"background":"mask");let a=t.varName;a===void 0&&n==="mask"&&(a="svg");const r={...t,mode:n,varName:a};n==="background"&&delete r.varName;const o={...t.rules,...L(r),...O({...y,...e,body:s},r)},c=t.iconSelector||".icon";return E([{selector:c,rules:o}],r.format)}async function W(e){return await new Promise(t=>b([e],()=>t(!0))).catch(()=>null),k(e)}function w(e){const t=m().icon,s=(t.collections||[]).sort((n,a)=>a.length-n.length);return d(()=>{var o;const n=e(),a=n.startsWith(t.cssSelectorPrefix)?n.slice(t.cssSelectorPrefix.length):n,r=((o=t.aliases)==null?void 0:o[a])||a;if(!r.includes(":")){const c=s.find(u=>r.startsWith(u+"-"));return c?c+":"+r.slice(c.length+1):r}return r})}let f;function _(e){return e.replace(/([^\w-])/g,"\\$1")}function F(){if(f)return f;f=new Set;const e=s=>{if(s=s.replace(/^:where\((.*)\)$/,"$1").trim(),s.startsWith("."))return s},t=s=>{if(s!=null&&s.length)for(const n of s){n!=null&&n.cssRules&&t(n.cssRules);const a=n==null?void 0:n.selectorText;if(typeof a=="string"){const r=e(a);r&&f.add(r)}}};for(let s=0;s<document.styleSheets.length;s++){const n=document.styleSheets[s].cssRules||document.styleSheets[s].rules;t(n)}return f}const D=h({name:"NuxtIconCss",props:{name:{type:String,required:!0}},async setup(e){const t=p(),s=m().icon,n=d(()=>s.cssSelectorPrefix+e.name);function a(c){const u=k(c);if(u)return u;const l=t.payload.data[c];if(l)return v(c,l),l}const r=d(()=>"."+_(n.value));function o(c,u=!0){let l=r.value;s.cssWherePseudo&&(l=`:where(${l})`);const i=M(c,{iconSelector:l,format:"compressed"});return s.cssLayer&&u?`@layer ${s.cssLayer} { ${i} }`:i}{const c=F();async function u(l){if(c.has(r.value))return;const i=document.createElement("style");i.textContent=o(l),document.head.prepend(i),c.add(r.value)}x(()=>e.name,()=>{if(c.has(r.value))return;const l=a(e.name);l?u(l):W(e.name).then(i=>{i&&u(i)})},{immediate:!0})}return()=>S("span",{class:["iconify",n.value,s.class]})}}),H=h({name:"NuxtIconSvg",props:{name:{type:String,required:!0}},async setup(e,{slots:t}){const s=p(),n=m().icon,a=w(()=>e.name),r="i-"+a.value;{const o=s.payload.data[r];o&&v(a.value,o)}return()=>S(N,{icon:a.value,ssr:!0,class:n.class},t)}}),B=h({name:"NuxtIcon",props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null}},async setup(e,{slots:t}){const s=p(),n=m().icon,a=w(()=>e.name),r=d(()=>{var c;return((c=s.vueApp)==null?void 0:c.component(a.value))||((e.mode||n.mode)==="svg"?H:D)}),o=d(()=>{const c=e.size||n.size;return c?{fontSize:Number.isNaN(+c)?c:c+"px"}:null});return()=>S(r.value,{...n.attrs,name:a.value,class:n.class,style:o.value},t)}});export{B as default};