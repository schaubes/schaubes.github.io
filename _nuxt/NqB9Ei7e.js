import{_ as p}from"./6EllGiwP.js";import{d as c,E as f,I as l,K as i}from"./jNav3ita.js";import"./CxYJgpPD.js";import"./Dsp0_8on.js";const x=c({name:"ContentRenderer",props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(o){f(()=>o.excerpt,t=>{var e;t&&((e=o.value)!=null&&e.excerpt)},{immediate:!0})},render(o){var a,u;const t=l(),{value:e,excerpt:n,tag:s}=o,r=n?e==null?void 0:e.excerpt:e==null?void 0:e.body;return!((a=r==null?void 0:r.children)!=null&&a.length)&&(t!=null&&t.empty)?t.empty({value:e,excerpt:n,tag:s,...this.$attrs}):t!=null&&t.default?t.default({value:e,excerpt:n,tag:s,...this.$attrs}):(r==null?void 0:r.type)==="root"&&((u=r==null?void 0:r.children)!=null&&u.length)?i(p,{value:e,excerpt:n,tag:s,...this.$attrs}):i("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:n,tag:s},null,2))}});export{x as default};
