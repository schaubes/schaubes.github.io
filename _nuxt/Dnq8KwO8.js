import{d as u,u as f,c as m,a1 as y,o as _,f as d,t as k,h as v}from"./Cr4DHj-a.js";const h=u({__name:"CVar",props:["type","var"],setup(o){const e=o,{t:l}=f(),p=(s,a)=>{let t=s,n=a.split(".");for(let r=0;r<n.length;r++){let i=n[r];if(t=t[i],t===void 0)break}return t},c=m(()=>{if(e.type==="site")return p(y,e.var);if(e.type==="locale")return l(e.var)});return(s,a)=>(_(),d("span",null,k(v(c)),1))}});export{h as default};
