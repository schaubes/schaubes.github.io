import{_ as f}from"./DU4KdHwO.js";import{d as h,u as v,b as x,c as g,w as y,e as C,o as l,f as r,g as s,h as n,t as k,i as w,k as B,_ as N}from"./D2ak7Q2V.js";import{q as V}from"./D7BBGUDP.js";import"./B4khwoHl.js";import"./D49EVtuJ.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";import"./runALB-H.js";const b={class:"container"},q={key:0,class:"content"},I={class:"content-header"},R="legal-notice",A=h({__name:"index",async setup(D){let e,a;const{locales:i,defaultLocale:_}=v(),d=x(),u=g(()=>{var o;const c=d.path.split("/")[1];return((o=i.value.find(m=>m.code===c))==null?void 0:o.code)||_}),t=([e,a]=y(()=>V(R).where({_locale:u.value}).findOne()),e=await e,a(),e);return C({title:t.title}),(c,p)=>{const o=f;return l(),r("section",null,[s("div",b,[n(t)?(l(),r("div",q,[s("div",I,[s("h1",null,k(n(t).title),1)]),w(o,{value:n(t)},null,8,["value"])])):B("",!0)])])}}}),G=N(A,[["__scopeId","data-v-de734e05"]]);export{G as default};