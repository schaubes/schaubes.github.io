import{_ as S}from"./Cy_jWYZz.js";import{d as y,u as N,ad as I,aq as O,h as o,o as s,f as n,g as t,t as d,i as a,k as F,_ as $,ar as U,c as h,as as P,at as X,F as w,m as x,j as b,l as L,z as Y,p as q,au as E,s as T,av as M,ae as A,aj as H,G as J,aw as z,ax as K,y as Q}from"./B-e8d1OE.js";import{a as G,_ as R}from"./vMFiJ3LU.js";import"./DfsdUQmN.js";const W={key:0,id:"banner"},Z={class:"container-fluid"},tt={class:"banner"},ot={class:"banner-content"},st={class:"m-0"},nt={class:"m-0"},et={class:"banner-button"},at={class:"icon-wrapper"},ct=y({__name:"Banner",setup(p){const{t:e,locale:r}=N(),c=I(O.active);return(v,_)=>{const l=S;return o(c)?(s(),n("div",W,[t("div",Z,[t("div",tt,[t("div",ot,[t("h5",st,d(o(e)("app.banner.title")),1),t("p",nt,d(o(e)("app.banner.text")),1)]),t("div",et,[t("button",{class:"btn",onClick:_[0]||(_[0]=i=>c.value=!1)},[t("div",at,[a(l,{name:"bi:x"})])])])])])])):F("",!0)}}}),rt=$(ct,[["__scopeId","data-v-7d47e8de"]]),lt={class:"color-mode-switch"},it={key:0,class:"icon-wrapper"},dt={key:1,class:"icon-wrapper"},_t={key:2,class:"icon-wrapper"},ut=y({__name:"ColorModeSwitch",setup(p){const e=U(),r="light",c=h(()=>e.value===r?r:P),v=()=>{e.preference=e.preference!==P?P:r};return(_,l)=>{const i=S;return s(),n("div",lt,[t("button",{class:"btn",onClick:l[0]||(l[0]=u=>v())},[o(c)==="dark"?(s(),n("div",it,[a(i,{name:"bi:moon-fill"})])):o(c)==="light"?(s(),n("div",dt,[a(i,{name:"bi:sun-fill"})])):(s(),n("div",_t,[a(i,{name:"bi:moon-stars-fill"})]))])])}}}),pt=$(ut,[["__scopeId","data-v-7b7515a7"]]),vt={class:"btn dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},ft={class:"dropdown-menu dropdown-menu-end"},mt=y({__name:"LocaleSwitch",props:["drop"],setup(p){const{locale:e,locales:r,t:c}=N(),v=X(),_=p,l=h(()=>{switch(_.drop){case"up":return"dropup";default:return"dropdown"}}),i=h(()=>r.value.filter(u=>u.code!==e.value));return(u,g)=>{const j=G;return s(),n("div",{class:Y(["locale-switch btn-group",[o(l)]])},[t("button",vt,d(o(c)("app.language")),1),t("ul",ft,[(s(!0),n(w,null,x(o(i),m=>(s(),n("li",{key:m.code},[a(j,{class:"dropdown-item",to:o(v)(m.code)||""},{default:b(()=>[L(d(m.name),1)]),_:2},1032,["to"])]))),128))])],2)}}}),ht=$(mt,[["__scopeId","data-v-60d8ff69"]]),bt=["data-bs-theme"],gt={key:0,class:"container-fluid"},kt=["alt"],wt={class:"collapse navbar-collapse",id:"navbarSupportedContent"},xt={class:"navbar-nav"},yt={class:"nav-item isMobile"},$t={class:"navbar-end"},Ct={class:"social-media"},Lt=["href"],St={class:"icon-wrapper"},Tt={key:1,class:"container-fluid"},It=["alt"],Mt={class:"offcanvas offcanvas-end",id:"offcanvasNavbar",tabindex:"-1","aria-labelledby":"offcanvasNavbarLabel"},Nt={class:"offcanvas-header"},Bt={class:"offcanvas-title",id:"offcanvasNavbarLabel"},Pt={class:"offcanvas-body"},Ft={class:"navbar-nav"},jt={class:"nav-item isMobile","data-bs-dismiss":"offcanvas"},Vt={class:"navbar-end"},Dt={class:"social-media"},Et=["href"],zt={class:"icon-wrapper"},Yt={class:"isMobile"},qt={class:"isDesktop"},Gt=y({__name:"Navbar",props:["color","position","expand","offcanvas"],setup(p){const e=q(),{t:r}=N(),c=p,v=h(()=>{switch(c.color){case"primary":return"bg-primary";case"secondary":return"bg-body-secondary";case"tertiary":return"bg-body-tertiary";case"light":return"bg-light";case"dark":return"bg-dark";default:return""}}),_=h(()=>{switch(c.color){case"primary":return"light";case"secondary":return"";case"tertiary":return"";case"light":return"light";case"dark":return"dark";default:return""}}),l=h(()=>{switch(c.position){case"fixed":return"fixed-top";case"sticky":return"sticky-top";default:return""}}),i=h(()=>{switch(c.expand){case"sm":return"navbar-expand-sm";case"md":return"navbar-expand-md";case"lg":return"navbar-expand-lg";case"xl":return"navbar-expand-xl";case"xxl":return"navbar-expand-xxl";default:return"navbar-expand-lg"}}),u=h(()=>!!c.offcanvas),g=h(()=>[{link:e("blog"),title:r("pages.blog.title")},{link:e("projects"),title:r("pages.projects.title")}]);return(j,m)=>{const C=R,V=S,D=pt,B=ht;return s(),n("nav",{class:Y(["navbar",[o(v),o(l),o(i)]]),"data-bs-theme":o(_)},[o(u)?(s(),n("div",Tt,[a(C,{class:"navbar-brand",to:o(e)("index")},{default:b(()=>[t("img",{src:E,alt:o(T),width:"30",height:"24"},null,8,It),t("span",null,d(o(T)),1)]),_:1},8,["to"]),m[2]||(m[2]=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1)),t("div",Mt,[t("div",Nt,[t("h5",Bt,d(o(r)("app.menu")),1),m[1]||(m[1]=t("button",{class:"btn-close",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"},null,-1))]),t("div",Pt,[t("ul",Ft,[t("li",jt,[a(C,{class:"nav-link",to:o(e)("index")},{default:b(()=>[L(d(o(r)("pages.home.title")),1)]),_:1},8,["to"])]),(s(!0),n(w,null,x(o(g),(f,k)=>(s(),n("li",{class:"nav-item",key:k,"data-bs-dismiss":"offcanvas"},[a(C,{class:"nav-link",to:f.link},{default:b(()=>[L(d(f.title),1)]),_:2},1032,["to"])]))),128))]),t("div",Vt,[t("div",Dt,[(s(!0),n(w,null,x(o(M),(f,k)=>(s(),n("a",{key:k,href:f.link,target:"_blank"},[t("div",zt,[a(V,{name:f.icon},null,8,["name"])])],8,Et))),128))]),a(D),t("div",Yt,[a(B,{drop:"up"})]),t("div",qt,[a(B)])])])])])):(s(),n("div",gt,[a(C,{class:"navbar-brand",to:o(e)("index")},{default:b(()=>[t("img",{src:E,alt:o(T),width:"30",height:"24"},null,8,kt),t("span",null,d(o(T)),1)]),_:1},8,["to"]),m[0]||(m[0]=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1)),t("div",wt,[t("ul",xt,[t("li",yt,[a(C,{class:"nav-link",to:o(e)("index")},{default:b(()=>[L(d(o(r)("pages.home.title")),1)]),_:1},8,["to"])]),(s(!0),n(w,null,x(o(g),(f,k)=>(s(),n("li",{class:"nav-item",key:k},[a(C,{class:"nav-link",to:f.link},{default:b(()=>[L(d(f.title),1)]),_:2},1032,["to"])]))),128))]),t("div",$t,[t("div",Ct,[(s(!0),n(w,null,x(o(M),(f,k)=>(s(),n("a",{key:k,href:f.link,target:"_blank"},[t("div",St,[a(V,{name:f.icon},null,8,["name"])])],8,Lt))),128))]),a(D),a(B)])])]))],10,bt)}}}),Ot=$(Gt,[["__scopeId","data-v-5231c967"]]);function Ut(){const p=I(0),e=I(0);function r(c){p.value=window.scrollX,e.value=window.scrollY}return A(()=>window.addEventListener("scroll",r)),H(()=>window.removeEventListener("scroll",r)),{x:p,y:e}}const Xt={class:"icon-wrapper"},At=y({__name:"ScrollToTopButton",setup(p){const e=I(null),{x:r,y:c}=Ut();J(()=>c.value,_=>{var l,i;_>128?(l=e.value)==null||l.classList.remove("hidden"):(i=e.value)==null||i.classList.add("hidden")});const v=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(_,l)=>{const i=S;return s(),n("div",{class:"scroll-to-top-button hidden",id:"scrollToTopBtn",ref_key:"scrollToTopBtn",ref:e},[t("button",{class:"btn",onClick:l[0]||(l[0]=u=>v())},[t("div",Xt,[a(i,{class:"icon",name:"bi:arrow-up"})])])],512)}}}),Ht=$(At,[["__scopeId","data-v-647f1975"]]),Jt={class:"container-fluid"},Kt={key:0,class:"footer-container"},Qt={class:"social-media"},Rt=["href"],Wt={class:"icon-wrapper"},Zt={key:1,class:"footer-container"},to={class:"footer-menu"},oo={class:"nav"},so={class:"footer-container"},no={class:"copyright"},eo=y({__name:"Footer",setup(p){const{t:e}=N(),r=q(),c=new Date().getFullYear();return(v,_)=>{const l=S,i=G;return s(),n("footer",null,[t("div",Jt,[o(M).length?(s(),n("div",Kt,[t("div",Qt,[(s(!0),n(w,null,x(o(M),(u,g)=>(s(),n("a",{key:g,href:u.link,target:"_blank"},[t("div",Wt,[a(l,{name:u.icon},null,8,["name"])])],8,Rt))),128))])])):F("",!0),o(z).footer.length?(s(),n("div",Zt,[t("div",to,[t("ul",oo,[(s(!0),n(w,null,x(o(z).footer,(u,g)=>(s(),n("li",{class:"nav-item",key:g},[a(i,{class:"nav-link",to:o(r)(u.link)},{default:b(()=>[L(d(o(e)(u.prop)),1)]),_:2},1032,["to"])]))),128))])])])):F("",!0),t("div",so,[t("div",no,[t("span",null,"© "+d(o(c))+" "+d(o(K))+". "+d(o(e)("app.rights"))+".",1)])])])])}}}),ao=$(eo,[["__scopeId","data-v-69e65c7c"]]),co={class:"layout layout-default",id:"layout"},ro=y({__name:"default",setup(p){return(e,r)=>{const c=rt,v=Ot,_=Ht,l=ao;return s(),n("div",co,[a(c),a(v,{offcanvas:"true"}),t("main",null,[Q(e.$slots,"default",{},void 0,!0)]),a(_),a(l)])}}}),po=$(ro,[["__scopeId","data-v-149b728c"]]);export{po as default};