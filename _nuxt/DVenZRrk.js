import{d as _,p as d,c as f,h as e,o as r,q as l,j as c,y as p,L as h}from"./C0qQy3Vn.js";const m=_({__name:"CLink",props:{to:{type:String,default:""},target:{type:String,default:void 0,required:!1}},setup(u){const t=u,i=d(),o=t.to.startsWith("http")||t.to.startsWith("www.")||t.to.startsWith("//"),a=f(()=>o?t.to:i(t.to));return(s,g)=>{const n=h;return e(o)?(r(),l(n,{key:0,to:e(a),target:"_blank",external:""},{default:c(()=>[p(s.$slots,"default")]),_:3},8,["to"])):(r(),l(n,{key:1,to:e(a),target:t.target},{default:c(()=>[p(s.$slots,"default")]),_:3},8,["to","target"]))}}});export{m as _};