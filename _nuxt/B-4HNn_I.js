import{_ as S}from"./BC_AhnhS.js";import{d as x,u as N,V as T,ar as O,h as o,o as s,f as e,g as t,t as _,i as a,k as P,_ as y,as as U,c as f,at as X,F as k,m as w,j as m,l as C,B as q,v as z,au as E,s as L,av as B,p as Z,q as G,aj as H,Z as J,I as K,aw as Y,ax as Q,A as R}from"./fbLa4jCL.js";import{a as A,_ as W}from"./BO6k44vD.js";const tt={key:0,id:"banner"},ot={class:"container-fluid"},st={class:"banner"},et={class:"banner-content"},nt={class:"m-0"},at={class:"m-0"},ct={class:"banner-button"},rt={class:"icon-wrapper"},lt=x({__name:"Banner",setup(i){const{t:n,locale:l}=N(),c=T(O.active);return(h,d)=>{const r=S;return o(c)?(s(),e("div",tt,[t("div",ot,[t("div",st,[t("div",et,[t("h5",nt,_(o(n)("app.banner.title")),1),t("p",at,_(o(n)("app.banner.text")),1)]),t("div",ct,[t("button",{class:"btn",onClick:d[0]||(d[0]=u=>c.value=!1)},[t("div",rt,[a(r,{name:"bi:x"})])])])])])])):P("",!0)}}}),it=y(lt,[["__scopeId","data-v-7d47e8de"]]),dt={class:"color-mode-switch"},_t={key:0,class:"icon-wrapper"},ut={key:1,class:"icon-wrapper"},pt={key:2,class:"icon-wrapper"},vt=x({__name:"ColorModeSwitch",setup(i){const n=U(),l=f(()=>n.value==="light"?"light":"dark"),c=()=>{n.preference=n.value!=="dark"?"dark":"light"};return(h,d)=>{const r=S;return s(),e("div",dt,[t("button",{class:"btn",onClick:d[0]||(d[0]=u=>c())},[o(l)==="dark"?(s(),e("div",_t,[a(r,{name:"bi:moon-fill"})])):o(l)==="light"?(s(),e("div",ut,[a(r,{name:"bi:sun-fill"})])):(s(),e("div",pt,[a(r,{name:"bi:moon-stars-fill"})]))])])}}}),ht=y(vt,[["__scopeId","data-v-df728294"]]),ft={class:"btn dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},mt={class:"dropdown-menu dropdown-menu-end"},bt=x({__name:"LocaleSwitch",props:["drop"],setup(i){const{locale:n,locales:l,t:c}=N(),h=X(),d=i,r=f(()=>{switch(d.drop){case"up":return"dropup";default:return"dropdown"}}),u=f(()=>l.value.filter(p=>p.code!==n.value));return(p,b)=>{const V=A;return s(),e("div",{class:q(["locale-switch btn-group",[o(r)]])},[t("button",ft,_(o(c)("app.language")),1),t("ul",mt,[(s(!0),e(k,null,w(o(u),I=>(s(),e("li",{key:I.code},[a(V,{class:"dropdown-item",to:o(h)(I.code)||""},{default:m(()=>[C(_(I.name),1)]),_:2},1032,["to"])]))),128))])],2)}}}),gt=y(bt,[["__scopeId","data-v-60d8ff69"]]),F=i=>(Z("data-v-5231c967"),i=i(),G(),i),kt=["data-bs-theme"],wt={key:0,class:"container-fluid"},xt=["alt"],yt=F(()=>t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1)),$t={class:"collapse navbar-collapse",id:"navbarSupportedContent"},Ct={class:"navbar-nav"},St={class:"nav-item isMobile"},It={class:"navbar-end"},Lt={class:"social-media"},Tt=["href"],Bt={class:"icon-wrapper"},Nt={key:1,class:"container-fluid"},Mt=["alt"],Pt=F(()=>t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1)),Ft={class:"offcanvas offcanvas-end",id:"offcanvasNavbar",tabindex:"-1","aria-labelledby":"offcanvasNavbarLabel"},Vt={class:"offcanvas-header"},jt={class:"offcanvas-title",id:"offcanvasNavbarLabel"},Dt=F(()=>t("button",{class:"btn-close",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"},null,-1)),Et={class:"offcanvas-body"},Yt={class:"navbar-nav"},qt={class:"nav-item isMobile","data-bs-dismiss":"offcanvas"},zt={class:"navbar-end"},At={class:"social-media"},Ot=["href"],Ut={class:"icon-wrapper"},Xt={class:"isMobile"},Zt={class:"isDesktop"},Gt=x({__name:"Navbar",props:["color","position","expand","offcanvas"],setup(i){const n=z(),{t:l}=N(),c=i,h=f(()=>{switch(c.color){case"primary":return"bg-primary";case"secondary":return"bg-body-secondary";case"tertiary":return"bg-body-tertiary";case"light":return"bg-light";case"dark":return"bg-dark";default:return""}}),d=f(()=>{switch(c.color){case"primary":return"light";case"secondary":return"";case"tertiary":return"";case"light":return"light";case"dark":return"dark";default:return""}}),r=f(()=>{switch(c.position){case"fixed":return"fixed-top";case"sticky":return"sticky-top";default:return""}}),u=f(()=>{switch(c.expand){case"sm":return"navbar-expand-sm";case"md":return"navbar-expand-md";case"lg":return"navbar-expand-lg";case"xl":return"navbar-expand-xl";case"xxl":return"navbar-expand-xxl";default:return"navbar-expand-lg"}}),p=f(()=>!!c.offcanvas),b=f(()=>[{link:n("blog"),title:l("pages.blog.title")},{link:n("projects"),title:l("pages.projects.title")}]);return(V,I)=>{const $=W,j=S,D=ht,M=gt;return s(),e("nav",{class:q(["navbar",[o(h),o(r),o(u)]]),"data-bs-theme":o(d)},[o(p)?(s(),e("div",Nt,[a($,{class:"navbar-brand",to:o(n)("index")},{default:m(()=>[t("img",{src:E,alt:o(L),width:"30",height:"24"},null,8,Mt),t("span",null,_(o(L)),1)]),_:1},8,["to"]),Pt,t("div",Ft,[t("div",Vt,[t("h5",jt,_(o(l)("app.menu")),1),Dt]),t("div",Et,[t("ul",Yt,[t("li",qt,[a($,{class:"nav-link",to:o(n)("index")},{default:m(()=>[C(_(o(l)("pages.home.title")),1)]),_:1},8,["to"])]),(s(!0),e(k,null,w(o(b),(v,g)=>(s(),e("li",{class:"nav-item",key:g,"data-bs-dismiss":"offcanvas"},[a($,{class:"nav-link",to:v.link},{default:m(()=>[C(_(v.title),1)]),_:2},1032,["to"])]))),128))]),t("div",zt,[t("div",At,[(s(!0),e(k,null,w(o(B),(v,g)=>(s(),e("a",{key:g,href:v.link,target:"_blank"},[t("div",Ut,[a(j,{name:v.icon},null,8,["name"])])],8,Ot))),128))]),a(D),t("div",Xt,[a(M,{drop:"up"})]),t("div",Zt,[a(M)])])])])])):(s(),e("div",wt,[a($,{class:"navbar-brand",to:o(n)("index")},{default:m(()=>[t("img",{src:E,alt:o(L),width:"30",height:"24"},null,8,xt),t("span",null,_(o(L)),1)]),_:1},8,["to"]),yt,t("div",$t,[t("ul",Ct,[t("li",St,[a($,{class:"nav-link",to:o(n)("index")},{default:m(()=>[C(_(o(l)("pages.home.title")),1)]),_:1},8,["to"])]),(s(!0),e(k,null,w(o(b),(v,g)=>(s(),e("li",{class:"nav-item",key:g},[a($,{class:"nav-link",to:v.link},{default:m(()=>[C(_(v.title),1)]),_:2},1032,["to"])]))),128))]),t("div",It,[t("div",Lt,[(s(!0),e(k,null,w(o(B),(v,g)=>(s(),e("a",{key:g,href:v.link,target:"_blank"},[t("div",Bt,[a(j,{name:v.icon},null,8,["name"])])],8,Tt))),128))]),a(D),a(M)])])]))],10,kt)}}}),Ht=y(Gt,[["__scopeId","data-v-5231c967"]]);function Jt(){const i=T(0),n=T(0);function l(c){i.value=window.scrollX,n.value=window.scrollY}return H(()=>window.addEventListener("scroll",l)),J(()=>window.removeEventListener("scroll",l)),{x:i,y:n}}const Kt={class:"icon-wrapper"},Qt=x({__name:"ScrollToTopButton",setup(i){const n=T(null),{x:l,y:c}=Jt();K(()=>c.value,d=>{var r,u;d>128?(r=n.value)==null||r.classList.remove("hidden"):(u=n.value)==null||u.classList.add("hidden")});const h=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(d,r)=>{const u=S;return s(),e("div",{class:"scroll-to-top-button hidden",id:"scrollToTopBtn",ref_key:"scrollToTopBtn",ref:n},[t("button",{class:"btn",onClick:r[0]||(r[0]=p=>h())},[t("div",Kt,[a(u,{class:"icon",name:"bi:arrow-up"})])])],512)}}}),Rt=y(Qt,[["__scopeId","data-v-647f1975"]]),Wt={class:"container-fluid"},to={key:0,class:"footer-container"},oo={class:"social-media"},so=["href"],eo={class:"icon-wrapper"},no={key:1,class:"footer-container"},ao={class:"footer-menu"},co={class:"nav"},ro={class:"footer-container"},lo={class:"copyright"},io=x({__name:"Footer",setup(i){const{t:n}=N(),l=z(),c=new Date().getFullYear();return(h,d)=>{const r=S,u=A;return s(),e("footer",null,[t("div",Wt,[o(B).length?(s(),e("div",to,[t("div",oo,[(s(!0),e(k,null,w(o(B),(p,b)=>(s(),e("a",{key:b,href:p.link,target:"_blank"},[t("div",eo,[a(r,{name:p.icon},null,8,["name"])])],8,so))),128))])])):P("",!0),o(Y).footer.length?(s(),e("div",no,[t("div",ao,[t("ul",co,[(s(!0),e(k,null,w(o(Y).footer,(p,b)=>(s(),e("li",{class:"nav-item",key:b},[a(u,{class:"nav-link",to:o(l)(p.link)},{default:m(()=>[C(_(o(n)(p.prop)),1)]),_:2},1032,["to"])]))),128))])])])):P("",!0),t("div",ro,[t("div",lo,[t("span",null,"© "+_(o(c))+" "+_(o(Q))+". "+_(o(n)("app.rights"))+".",1)])])])])}}}),_o=y(io,[["__scopeId","data-v-69e65c7c"]]),uo={class:"layout layout-default",id:"layout"},po=x({__name:"default",setup(i){return(n,l)=>{const c=it,h=Ht,d=Rt,r=_o;return s(),e("div",uo,[a(c),a(h,{offcanvas:"true"}),t("main",null,[R(n.$slots,"default",{},void 0,!0)]),a(d),a(r)])}}}),mo=y(po,[["__scopeId","data-v-149b728c"]]);export{mo as default};
