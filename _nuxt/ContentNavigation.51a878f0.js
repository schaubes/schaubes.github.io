import{w as A,h as E,j as D,a as R,b as s,r as p,e as T,f as V,i as P,k as c,l as d,F as h,m as y,p as O,d as r,_ as a,t as b,q as $,s as j,v as k,x as S,y as C}from"./entry.b3988e14.js";import"./ContentSlot.d0e30472.js";import"./DocumentDrivenEmpty.74eb4b4b.js";import"./DocumentDrivenNotFound.7ec9fe94.js";import"./Markdown.10814b17.js";import"./ProseCode.0ce6fd28.js";const x=t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const o=A(e?`/navigation/${E(e)}.json`:"/navigation");return $fetch(o,{method:"GET",responseType:"json",params:{_params:D(e||{}),previewToken:R("previewToken").value}})};const w=s({emits:{error(t){return!0}},setup(t,{slots:e,emit:o}){const i=p(null),u=T();return V(n=>{if(!u.isHydrating)return o("error",n),i.value=n,!1}),()=>{var n,_;return i.value?(n=e.error)==null?void 0:n.call(e,{error:i}):(_=e.default)==null?void 0:_.call(e)}}}),N=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),M=s({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e}){const o=p(!1);return P(()=>{o.value=!0}),i=>{var l;if(o.value)return(l=e.default)==null?void 0:l.call(e);const u=e.fallback||e.placeholder;if(u)return u();const n=i.fallback||i.placeholder||"",_=i.fallbackTag||i.placeholderTag||"span";return c(_,null,n)}}}),f=new WeakMap;function z(t){if(f.has(t))return f.get(t);const e={...t};return e.render?e.render=(o,...i)=>{var u,n;return o.mounted$?d(h,(u=o.$attrs)!=null?u:o._.attrs,t.render(o,...i)):d("div",(n=o.$attrs)!=null?n:o._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(o,i)=>{var n;const u=p(!1);return P(()=>{u.value=!0}),Promise.resolve(((n=t.setup)==null?void 0:n.call(t,o,i))||{}).then(_=>typeof _!="function"?{..._,mounted$:u}:(...l)=>u.value?d(h,i.attrs,_(...l)):d("div",i.attrs))},f.set(t,e),e}const B=Object.freeze(Object.defineProperty({__proto__:null,default:M,createClientOnly:z},Symbol.toStringTag,{value:"Module"})),q=s({name:"ServerPlaceholder",render(){return c("div")}}),F=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),G=s({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t){const e=W({duration:t.duration,throttle:t.throttle}),o=T();return o.hook("page:start",e.start),o.hook("page:finish",e.finish),y(()=>e.clear),()=>d("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${e.progress.value}%`,height:`${t.height}px`,opacity:e.isLoading.value?1:0,background:t.color,backgroundSize:`${100/e.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}})}});function W(t){const e=p(0),o=p(!1),i=O(()=>1e4/t.duration);let u=null,n=null;function _(){m(),e.value=0,o.value=!0,t.throttle?n=setTimeout(v,t.throttle):v()}function l(){e.value=100,L()}function m(){clearInterval(u),clearTimeout(n),u=null,n=null}function g(I){e.value=Math.min(100,e.value+I)}function L(){m(),setTimeout(()=>{o.value=!1,setTimeout(()=>{e.value=0},400)},500)}function v(){u=setInterval(()=>{g(i.value)},100)}return{progress:e,isLoading:o,start:_,finish:l,clear:m}}const H=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));r(()=>a(()=>import("./BG.56f76ada.js"),["BG.56f76ada.js","entry.b3988e14.js","entry.06fd7e38.css","ContentSlot.d0e30472.js","DocumentDrivenEmpty.74eb4b4b.js","DocumentDrivenNotFound.7ec9fe94.js","Markdown.10814b17.js","ProseCode.0ce6fd28.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.b3988e14.js").then(t=>t.$),["entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.b3988e14.js").then(t=>t.a0),["entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>X),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.b3988e14.js").then(t=>t.Z),["entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.b3988e14.js").then(t=>t.Y),["entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.b3988e14.js").then(t=>t.X),["entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ContentSlot.d0e30472.js"),["ContentSlot.d0e30472.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./DocumentDrivenEmpty.74eb4b4b.js"),["DocumentDrivenEmpty.74eb4b4b.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./DocumentDrivenNotFound.7ec9fe94.js"),["DocumentDrivenNotFound.7ec9fe94.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./Markdown.10814b17.js"),["Markdown.10814b17.js","ContentSlot.d0e30472.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseA.58579041.js"),["ProseA.58579041.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseBlockquote.bd19b43a.js"),["ProseBlockquote.bd19b43a.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseCode.0ce6fd28.js"),["ProseCode.0ce6fd28.js","ProseCode.e63e49c6.css","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseCodeInline.aaa15ba7.js"),["ProseCodeInline.aaa15ba7.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseEm.cf13dc38.js"),["ProseEm.cf13dc38.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH1.34be39de.js"),["ProseH1.34be39de.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH2.bb3651bf.js"),["ProseH2.bb3651bf.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH3.de9f50ce.js"),["ProseH3.de9f50ce.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH4.5f7d5f4d.js"),["ProseH4.5f7d5f4d.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH5.65d63a08.js"),["ProseH5.65d63a08.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH6.67b23a3c.js"),["ProseH6.67b23a3c.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseHr.80935846.js"),["ProseHr.80935846.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseImg.a23e7d99.js"),["ProseImg.a23e7d99.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseLi.ebf2f2a9.js"),["ProseLi.ebf2f2a9.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseOl.1deb221a.js"),["ProseOl.1deb221a.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseP.e48e4b7d.js"),["ProseP.e48e4b7d.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseStrong.2754553c.js"),["ProseStrong.2754553c.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTable.589a32ca.js"),["ProseTable.589a32ca.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTbody.f1df427b.js"),["ProseTbody.f1df427b.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTd.5cd6033b.js"),["ProseTd.5cd6033b.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTh.9db29b8c.js"),["ProseTh.9db29b8c.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseThead.5d2a693a.js"),["ProseThead.5d2a693a.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTr.378af453.js"),["ProseTr.378af453.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseUl.6d65d35c.js"),["ProseUl.6d65d35c.js","entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./welcome.d8e6686f.js"),["welcome.d8e6686f.js","entry.b3988e14.js","entry.06fd7e38.css","ContentSlot.d0e30472.js","DocumentDrivenEmpty.74eb4b4b.js","DocumentDrivenNotFound.7ec9fe94.js","Markdown.10814b17.js","ProseCode.0ce6fd28.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.b3988e14.js").then(t=>t.a1),["entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>N),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>B),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>F),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.b3988e14.js").then(t=>t.W),["entry.b3988e14.js","entry.06fd7e38.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>H),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./component.vue3.38bfa620.js"),["component.vue3.38bfa620.js","entry.b3988e14.js","entry.06fd7e38.css","ContentSlot.d0e30472.js","DocumentDrivenEmpty.74eb4b4b.js","DocumentDrivenNotFound.7ec9fe94.js","Markdown.10814b17.js","ProseCode.0ce6fd28.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));const U=s({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=b(t),o=O(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!o.value&&$("dd-navigation").value){const{navigation:u}=j();return{navigation:u}}const{data:i}=await k(`content-navigation-${E(o.value)}`,()=>x(o.value));return{navigation:i}},render(t){const e=S(),{navigation:o}=t,i=_=>d(C,{to:_._path},()=>_.title),u=(_,l)=>d("ul",l?{"data-level":l}:null,_.map(m=>m.children?d("li",null,[i(m),u(m.children,l+1)]):d("li",null,i(m)))),n=_=>u(_,0);return e!=null&&e.default?e.default({navigation:o,...this.$attrs}):n(o)}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{X as C,M as _};
