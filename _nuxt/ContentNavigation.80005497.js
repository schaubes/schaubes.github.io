import{l as R,_ as r,e as d,v,q as S,C as V,D as T,E as O,F as P,i as s,G as b,p as A,d as i,t as j,H as N,f as $,I as k}from"./entry.e1e58b2c.js";import{u as B}from"./asyncData.afb0daa6.js";import{h as c,e as x,j as C}from"./ContentQuery.1ddab6db.js";import{w as y,s as w,u as M,a as z}from"./utils.3dfb137c.js";import"./ContentDoc.fe853d69.js";import"./ContentList.1a828e1a.js";import"./ContentRenderer.7fb37a65.js";import"./ContentRendererMarkdown.60f1802a.js";import"./ContentSlot.65044852.js";import"./DocumentDrivenEmpty.24c2655e.js";import"./DocumentDrivenNotFound.303b7a25.js";import"./Markdown.28d23cc5.js";import"./ProseCode.d3a404ed.js";import{u as H}from"./composables.0af23cb0.js";const q=async t=>{var o,_;const{content:e}=R().public,n=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};e.locales.length&&((_=(o=n.where)==null?void 0:o.find(u=>u._locale))!=null&&_._locale||(n.where=n.where||[],n.where.push({_locale:e.defaultLocale})));const l=e.experimental.stripQueryParameters?y(`/navigation/${`${c(n)}.${e.integrity}`}/${x(n)}.json`):y(`/navigation/${c(n)}.${e.integrity}.json`);if(w())return(await r(()=>import("./client-db.0daf8925.js"),["./client-db.0daf8925.js","./entry.e1e58b2c.js","./entry.0257f7e2.css","./utils.3dfb137c.js","./ContentQuery.1ddab6db.js","./asyncData.afb0daa6.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(u=>u.generateNavigation))(n);const a=await $fetch(l,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:C(n),previewToken:M("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const F=d({emits:{error(t){return!0}},setup(t,{slots:e,emit:n}){const l=v(null),a=S();return V(o=>{if(!a.isHydrating)return n("error",o),l.value=o,!1}),()=>{var o,_;return l.value?(o=e.error)==null?void 0:o.call(e,{error:l}):(_=e.default)==null?void 0:_.call(e)}}}),U=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),G=d({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:n}){const l=v(!1);return T(()=>{l.value=!0}),a=>{var u;if(l.value)return(u=e.default)==null?void 0:u.call(e);const o=e.fallback||e.placeholder;if(o)return o();const _=a.fallback||a.placeholder||"",m=a.fallbackTag||a.placeholderTag||"span";return O(m,n,_)}}}),g=new WeakMap;function Q(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(n,...l)=>{var a;if(n.mounted$){const o=t.render(n,...l);return o.children===null||typeof o.children=="string"?P(o.type,o.props,o.children,o.patchFlag,o.dynamicProps,o.shapeFlag):s(o)}else return s("div",(a=n.$attrs)!=null?a:n._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(n,l)=>{var o;const a=v(!1);return T(()=>{a.value=!0}),Promise.resolve(((o=t.setup)==null?void 0:o.call(t,n,l))||{}).then(_=>typeof _!="function"?{..._,mounted$:a}:(...m)=>{if(a.value){const u=_(...m);return u.children===null||typeof u.children=="string"?P(u.type,u.props,u.children,u.patchFlag,u.dynamicProps,u.shapeFlag):s(u)}else return s("div",l.attrs)})},g.set(t,e),e}const W=Object.freeze(Object.defineProperty({__proto__:null,default:G,createClientOnly:Q},Symbol.toStringTag,{value:"Module"})),Y=d({name:"DevOnly",setup(t,e){return()=>null}}),Z=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"})),J=d({name:"ServerPlaceholder",render(){return O("div")}}),K=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),X=d({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const n=tt({duration:t.duration,throttle:t.throttle}),l=S();return l.hook("page:start",n.start),l.hook("page:finish",n.finish),b(()=>n.clear),()=>s("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${n.progress.value}%`,height:`${t.height}px`,opacity:n.isLoading.value?1:0,background:t.color,backgroundSize:`${100/n.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function tt(t){const e=v(0),n=v(!1),l=A(()=>1e4/t.duration);let a=null,o=null;function _(){u(),e.value=0,n.value=!0,t.throttle?o=setTimeout(E,t.throttle):E()}function m(){e.value=100,I()}function u(){clearInterval(a),clearTimeout(o),a=null,o=null}function L(D){e.value=Math.min(100,e.value+D)}function I(){u(),setTimeout(()=>{n.value=!1,setTimeout(()=>{e.value=0},400)},500)}function E(){a=setInterval(()=>{L(l.value)},100)}return{progress:e,isLoading:n,start:_,finish:m,clear:u}}const et=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),rt=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(n,l)=>(H(()=>t({...rt(n),...l.attrs},l)),()=>{var a,o;return e?(o=(a=l.slots).default)==null?void 0:o.call(a):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},it=d({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a;const n={...t},l=(((a=e.default)==null?void 0:a.call(e))||[]).filter(({children:o})=>o).map(({children:o})=>o).join("");return l&&(n.children=l),{noscript:[n]}})}),nt=d({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),ot=d({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),at=d({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var l,a,o;return{title:((o=(a=(l=e.default)==null?void 0:l.call(e))==null?void 0:a[0])==null?void 0:o.children)||null}})}),lt=d({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),ut=d({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a,o,_;const n={...t},l=(_=(o=(a=e.default)==null?void 0:a.call(e))==null?void 0:o[0])==null?void 0:_.children;return l&&(n.children=l),{style:[n]}})}),_t=d({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var n,l;return(l=(n=e.slots).default)==null?void 0:l.call(n)}}),dt=d({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),mt=d({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),p=Object.freeze(Object.defineProperty({__proto__:null,NoScript:it,Link:nt,Base:ot,Title:at,Meta:lt,Style:ut,Head:_t,Html:dt,Body:mt},Symbol.toStringTag,{value:"Module"}));i(()=>r(()=>import("./BG.4bdb6077.js"),["./BG.4bdb6077.js","./entry.e1e58b2c.js","./entry.0257f7e2.css","./asyncData.afb0daa6.js","./ContentQuery.1ddab6db.js","./utils.3dfb137c.js","./ContentDoc.fe853d69.js","./composables.0af23cb0.js","./ContentRenderer.7fb37a65.js","./ContentRendererMarkdown.60f1802a.js","./_commonjsHelpers.fed2a411.js","./ContentList.1a828e1a.js","./ContentSlot.65044852.js","./DocumentDrivenEmpty.24c2655e.js","./DocumentDrivenNotFound.303b7a25.js","./Markdown.28d23cc5.js","./ProseCode.d3a404ed.js","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentDoc.fe853d69.js"),["./ContentDoc.fe853d69.js","./entry.e1e58b2c.js","./entry.0257f7e2.css","./composables.0af23cb0.js","./ContentRenderer.7fb37a65.js","./ContentRendererMarkdown.60f1802a.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.1ddab6db.js","./asyncData.afb0daa6.js","./utils.3dfb137c.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentList.1a828e1a.js"),["./ContentList.1a828e1a.js","./ContentQuery.1ddab6db.js","./entry.e1e58b2c.js","./entry.0257f7e2.css","./asyncData.afb0daa6.js","./utils.3dfb137c.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>pt),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentQuery.1ddab6db.js").then(t=>t.C),["./ContentQuery.1ddab6db.js","./entry.e1e58b2c.js","./entry.0257f7e2.css","./asyncData.afb0daa6.js","./utils.3dfb137c.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRenderer.7fb37a65.js"),["./ContentRenderer.7fb37a65.js","./ContentRendererMarkdown.60f1802a.js","./entry.e1e58b2c.js","./entry.0257f7e2.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRendererMarkdown.60f1802a.js"),["./ContentRendererMarkdown.60f1802a.js","./entry.e1e58b2c.js","./entry.0257f7e2.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentSlot.65044852.js"),["./ContentSlot.65044852.js","./utils.3dfb137c.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenEmpty.24c2655e.js"),["./DocumentDrivenEmpty.24c2655e.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenNotFound.303b7a25.js"),["./DocumentDrivenNotFound.303b7a25.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Markdown.28d23cc5.js"),["./Markdown.28d23cc5.js","./ContentSlot.65044852.js","./utils.3dfb137c.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseA.fb789689.js"),["./ProseA.fb789689.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseBlockquote.0e39505e.js"),["./ProseBlockquote.0e39505e.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCode.d3a404ed.js"),["./ProseCode.d3a404ed.js","./entry.e1e58b2c.js","./entry.0257f7e2.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCodeInline.b1ec86c5.js"),["./ProseCodeInline.b1ec86c5.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseEm.a297d2c9.js"),["./ProseEm.a297d2c9.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH1.fe20637a.js"),["./ProseH1.fe20637a.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH2.e06730ae.js"),["./ProseH2.e06730ae.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH3.7b1c8fd7.js"),["./ProseH3.7b1c8fd7.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH4.13e9de32.js"),["./ProseH4.13e9de32.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH5.e22ef1c0.js"),["./ProseH5.e22ef1c0.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH6.87dc5d0a.js"),["./ProseH6.87dc5d0a.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseHr.7656a6cb.js"),["./ProseHr.7656a6cb.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseImg.5fe66f24.js"),["./ProseImg.5fe66f24.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseLi.e5dfb84f.js"),["./ProseLi.e5dfb84f.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseOl.9fa9e132.js"),["./ProseOl.9fa9e132.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseP.e3de9720.js"),["./ProseP.e3de9720.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseStrong.984b79ab.js"),["./ProseStrong.984b79ab.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTable.44e418ec.js"),["./ProseTable.44e418ec.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTbody.61392127.js"),["./ProseTbody.61392127.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTd.d12cd96c.js"),["./ProseTd.d12cd96c.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTh.7c9c2e54.js"),["./ProseTh.7c9c2e54.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseThead.bbe74a35.js"),["./ProseThead.bbe74a35.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTr.d6bde37d.js"),["./ProseTr.d6bde37d.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseUl.3308d161.js"),["./ProseUl.3308d161.js","./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./welcome.5cd099d5.js"),["./welcome.5cd099d5.js","./composables.0af23cb0.js","./entry.e1e58b2c.js","./entry.0257f7e2.css","./asyncData.afb0daa6.js","./ContentQuery.1ddab6db.js","./utils.3dfb137c.js","./ContentDoc.fe853d69.js","./ContentRenderer.7fb37a65.js","./ContentRendererMarkdown.60f1802a.js","./_commonjsHelpers.fed2a411.js","./ContentList.1a828e1a.js","./ContentSlot.65044852.js","./DocumentDrivenEmpty.24c2655e.js","./DocumentDrivenNotFound.303b7a25.js","./Markdown.28d23cc5.js","./ProseCode.d3a404ed.js","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.e1e58b2c.js").then(t=>t.a0),["./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>U),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>W),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>Z),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>K),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.e1e58b2c.js").then(t=>t.Z),["./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./component.vue3.071ea15e.js"),["./component.vue3.071ea15e.js","./entry.e1e58b2c.js","./entry.0257f7e2.css","./asyncData.afb0daa6.js","./ContentQuery.1ddab6db.js","./utils.3dfb137c.js","./ContentDoc.fe853d69.js","./composables.0af23cb0.js","./ContentRenderer.7fb37a65.js","./ContentRendererMarkdown.60f1802a.js","./_commonjsHelpers.fed2a411.js","./ContentList.1a828e1a.js","./ContentSlot.65044852.js","./DocumentDrivenEmpty.24c2655e.js","./DocumentDrivenNotFound.303b7a25.js","./Markdown.28d23cc5.js","./ProseCode.d3a404ed.js","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.e1e58b2c.js").then(t=>t.$),["./entry.e1e58b2c.js","./entry.0257f7e2.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.NoScript));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Link));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Base));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Title));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Meta));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Style));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Head));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Html));i(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Body));const st=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=j(t),n=A(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&N("dd-navigation").value){const{navigation:a}=z();return{navigation:a}}const{data:l}=await B(`content-navigation-${c(n.value)}`,()=>q(n.value));return{navigation:l}},render(t){const e=$(),{navigation:n}=t,l=_=>s(k,{to:_._path},()=>_.title),a=(_,m)=>s("ul",m?{"data-level":m}:null,_.map(u=>u.children?s("li",null,[l(u),a(u.children,m+1)]):s("li",null,l(u)))),o=_=>a(_,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):o(n)}}),pt=Object.freeze(Object.defineProperty({__proto__:null,default:st},Symbol.toStringTag,{value:"Module"}));export{pt as C,G as _};