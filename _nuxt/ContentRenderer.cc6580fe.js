import d from"./ContentRendererMarkdown.f70e4470.js";import{z as m,q as s,A as l,C as f}from"./entry.0d2d09b1.js";import"./index.a6ef77ff.js";import"./preview.fdc2adca.js";const h=m({name:"ContentRenderer",props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(t){s(()=>t.excerpt,n=>{var e,r,a;n&&!((e=t.value)!=null&&e.excerpt)&&(console.warn(`No excerpt found for document content/${(r=t==null?void 0:t.value)==null?void 0:r._path}.${(a=t==null?void 0:t.value)==null?void 0:a._extension}!`),console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature."))},{immediate:!0})},render(t){var o,i,u,c;const n=l(),{value:e,excerpt:r,tag:a}=t;return!((i=(o=e==null?void 0:e.body)==null?void 0:o.children)!=null&&i.length)&&(n!=null&&n.empty)?n.empty({value:e,excerpt:r,tag:a,...this.$attrs}):n!=null&&n.default?n.default({value:e,excerpt:r,tag:a,...this.$attrs}):(e==null?void 0:e._type)==="markdown"&&((c=(u=e==null?void 0:e.body)==null?void 0:u.children)!=null&&c.length)?f(d,{value:e,excerpt:r,tag:a,...this.$attrs}):f("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:r,tag:a},null,2))}}),w=h;export{w as default};
