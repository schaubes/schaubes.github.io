import{_ as u}from"./nuxt-link.eb7cba15.js";import m from"./ContentRenderer.4610034d.js";import h from"./ContentDoc.133ae20e.js";import{_ as f,c as a,b as _,w as c,o as n,a as t,d as r,t as o,F as v,r as b,p as k,e as x}from"./entry.2388b715.js";import"./ContentRendererMarkdown.c039dd79.js";import"./index.a6ef77ff.js";import"./preview.6227371a.js";import"./ContentQuery.3b8c8beb.js";import"./query.1b5da60c.js";import"./utils.06f837ae.js";const g=s=>(k("data-v-af7bc105"),s=s(),x(),s),w={class:"container"},y={"aria-label":"breadcrumb"},S={class:"breadcrumb"},j={class:"breadcrumb-item"},I={class:"project"},N={class:"project-header"},B={class:"stack-wrapper"},C=g(()=>t("span",null,"Stack: ",-1)),L={class:"stack-badge"},V={class:"year-wrapper"},D={class:"link-wrapper"},F=["href"],E={__name:"[slug]",setup(s){return(P,R)=>{const l=u,i=m,p=h;return n(),a("div",w,[_(p,null,{default:c(({doc:e})=>[t("nav",y,[t("ol",S,[t("li",j,[_(l,{to:"/projects"},{default:c(()=>[r("< Projects")]),_:1})])])]),t("div",I,[t("div",N,[t("h1",null,o(e.title),1),t("div",B,[C,(n(!0),a(v,null,b(e.stack.split(", "),(d,T)=>(n(),a("div",L,[t("span",null,o(d),1)]))),256))]),t("div",V,[t("span",null,"Year: "+o(e.year),1)]),t("div",D,[t("span",null,[r("Link: "),t("a",{href:e.link,target:"_blank",rel:"external"},o(e.link),9,F)])])]),_(i,{value:e},null,8,["value"])])]),_:1})])}}},Q=f(E,[["__scopeId","data-v-af7bc105"]]);export{Q as default};