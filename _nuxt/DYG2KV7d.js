import{d as b,o as e,f as s,g as i,F as o,m as l,z as d,t as r}from"./D2ak7Q2V.js";const p=["id"],_={class:"nav-item",role:"presentation"},u=["id","data-bs-target","aria-controls","aria-selected"],m=["id"],v=["id","aria-labelledby"],y=b({__name:"CTabs",props:["id","tabs"],setup(c){const n=c;return(g,h)=>(e(),s(o,null,[i("ul",{class:"nav nav-tabs",id:n.id,role:"tablist"},[i("li",_,[(e(!0),s(o,null,l(n.tabs,(a,t)=>(e(),s("button",{class:d(["nav-link active",{active:t==0}]),id:a.id+"-tab","data-bs-toggle":"tab","data-bs-target":"#"+a.id+"-tab-pane",type:"button",role:"tab","aria-controls":a.id+"-tab-pane","aria-selected":t==0},r(a.title),11,u))),256))])],8,p),i("div",{class:"tab-content",id:n.id+"Content"},[(e(!0),s(o,null,l(n.tabs,(a,t)=>(e(),s("div",{class:d(["tab-pane fade",{show:t==0,active:t==0}]),id:a.id+"-tab-pane",role:"tabpanel","aria-labelledby":a.id+"-tab",tabindex:"0"},r(a.content),11,v))),256))],8,m)],64))}});export{y as default};