import N from"./OWJiM6sb.js";import{_ as R}from"./vMFiJ3LU.js";import{d as V,u as b,a as q,b as F,c as u,w as I,e as P,r as S,f as c,g as l,t as d,h as m,F as A,m as E,o as r,n as H,i as p,j as f,l as T,_ as $}from"./B-e8d1OE.js";import{q as z}from"./DQmQLwwk.js";import"./rPorcyic.js";const G={class:"container"},J={class:"row"},g="projects",K=V({__name:"index",async setup(M){let t,i;const{locales:v,defaultLocale:h,t:_}=b(),x=q(),w=F(),o=u(()=>{var s;const e=w.path.split("/")[1];return((s=v.value.find(a=>a.code===e))==null?void 0:s.code)||h}),C=u(()=>{const e=x(g,o.value);return e?e.path:""}),y=e=>(typeof e=="string"&&(e=e.split("/")),e[e.length-1]),k=e=>C.value+"/"+y(e),B=([t,i]=I(()=>z(g).where({_locale:o.value}).find()),t=await t,i(),t);return P({title:_("pages.projects.title",-1,{locale:o.value})}),(e,L)=>{const s=N,a=R,j=S("animate-on-scroll");return r(),c("section",null,[l("div",G,[l("h1",null,d(m(_)("pages.projects.title")),1),l("div",J,[(r(!0),c(A,null,E(m(B),(n,D)=>H((r(),c("div",{class:"col-12 col-md-4",key:D},[p(a,{to:k(n._path)},{default:f(()=>[p(s,{title:n.title,img:"/media/sample.jpg"},{default:f(()=>[T(d(n.short),1)]),_:2},1032,["title"])]),_:2},1032,["to"])])),[[j]])),128))])])])}}}),Y=$(K,[["__scopeId","data-v-6d7c36e6"]]);export{Y as default};