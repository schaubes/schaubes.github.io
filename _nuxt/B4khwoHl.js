import{_ as p}from"./D49EVtuJ.js";import{d as c,E as f,I as l,K as u}from"./D2ak7Q2V.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";import"./runALB-H.js";const g=c({name:"ContentRenderer",props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(o){f(()=>o.excerpt,t=>{var e;t&&((e=o.value)!=null&&e.excerpt)},{immediate:!0})},render(o){var a,i;const t=l(),{value:e,excerpt:n,tag:s}=o,r=n?e==null?void 0:e.excerpt:e==null?void 0:e.body;return!((a=r==null?void 0:r.children)!=null&&a.length)&&(t!=null&&t.empty)?t.empty({value:e,excerpt:n,tag:s,...this.$attrs}):t!=null&&t.default?t.default({value:e,excerpt:n,tag:s,...this.$attrs}):(r==null?void 0:r.type)==="root"&&((i=r==null?void 0:r.children)!=null&&i.length)?u(p,{value:e,excerpt:n,tag:s,...this.$attrs}):u("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:n,tag:s},null,2))}});export{g as default};
