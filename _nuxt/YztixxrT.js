import{_ as c}from"./Dtzf46Qc.js";import{d as h,K as i,c as u,T as m,M as l,U as d,o as g,x as p,h as r,al as f}from"./D9dpidkM.js";const _=h({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const n=i().public.mdc.useNuxtImage?c:"img",t=e,o=u(()=>{var a;if((a=t.src)!=null&&a.startsWith("/")&&!t.src.startsWith("//")){const s=m(l(i().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return d(s,t.src)}return t.src});return(a,s)=>(g(),p(f(r(n)),{src:r(o),alt:e.alt,width:e.width,height:e.height},null,8,["src","alt","width","height"]))}});export{_ as default};