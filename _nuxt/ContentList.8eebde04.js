import d from"./ContentQuery.910ab2e7.js";import{z as c,A as l,C as p}from"./entry.bf75ee50.js";import"./query.95f41ed4.js";import"./preview.69f52d05.js";const r=(u,t)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:u,data:t},null,2)),y=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(u){const t=l(),{path:f,query:o}=u,n={...o||{},path:f||(o==null?void 0:o.path)||"/"};return p(d,n,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:m})=>t.default({list:e,refresh:a,isPartial:m,...this.$attrs}):e=>r("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):r("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):r("not-found",e==null?void 0:e.data)}})}}),h=y,S=h;export{S as default};
