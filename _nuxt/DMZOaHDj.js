import{_ as T}from"./BOwuobvX.js";import{d as $,u as N,ad as I,as as X,h as o,o as s,f as a,g as t,t as d,i as e,k as F,_ as C,at as A,c as h,au as P,av as G,F as w,m as y,j as f,l as L,z as q,L as H,p as O,aw as D,s as S,q as E,ax as M,ae as J,al as K,E as Q,ay as Y,az as R,y as W}from"./jNav3ita.js";import{_ as U}from"./DY2HyQY_.js";import"./12w-Iirm.js";const Z={key:0,id:"banner"},tt={class:"container-fluid"},ot={class:"banner"},st={class:"banner-content"},nt={class:"m-0"},et={class:"m-0"},at={class:"banner-button"},ct={class:"icon-wrapper"},lt=$({__name:"Banner",setup(p){const{t:n,locale:l}=N(),c=I(X.active);return(v,_)=>{const r=T;return o(c)?(s(),a("div",Z,[t("div",tt,[t("div",ot,[t("div",st,[t("h5",nt,d(o(n)("app.banner.title")),1),t("p",et,d(o(n)("app.banner.text")),1)]),t("div",at,[t("button",{class:"btn",onClick:_[0]||(_[0]=i=>c.value=!1)},[t("div",ct,[e(r,{name:"bi:x"})])])])])])])):F("",!0)}}}),rt=C(lt,[["__scopeId","data-v-7d47e8de"]]),it={class:"color-mode-switch"},dt={key:0,class:"icon-wrapper"},_t={key:1,class:"icon-wrapper"},ut={key:2,class:"icon-wrapper"},pt=$({__name:"ColorModeSwitch",setup(p){const n=A(),l="light",c=h(()=>n.value===l?l:P),v=()=>{n.preference=n.preference!==P?P:l};return(_,r)=>{const i=T;return s(),a("div",it,[t("button",{class:"btn",onClick:r[0]||(r[0]=u=>v())},[o(c)==="dark"?(s(),a("div",dt,[e(i,{name:"bi:moon-fill"})])):o(c)==="light"?(s(),a("div",_t,[e(i,{name:"bi:sun-fill"})])):(s(),a("div",ut,[e(i,{name:"bi:moon-stars-fill"})]))])])}}}),vt=C(pt,[["__scopeId","data-v-7b7515a7"]]),mt={class:"btn dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},ft={class:"dropdown-menu dropdown-menu-end"},bt=$({__name:"LocaleSwitch",props:["drop"],setup(p){const{locale:n,locales:l,t:c}=N(),v=G(),_=p,r=h(()=>{switch(_.drop){case"up":return"dropup";default:return"dropdown"}}),i=h(()=>l.value.filter(u=>u.code!==n.value));return(u,k)=>{const V=H;return s(),a("div",{class:q(["locale-switch btn-group",[o(r)]])},[t("button",mt,d(o(c)("app.language")),1),t("ul",ft,[(s(!0),a(w,null,y(o(i),b=>(s(),a("li",{key:b.code},[e(V,{class:"dropdown-item",to:o(v)(b.code)||""},{default:f(()=>[L(d(b.name),1)]),_:2},1032,["to"])]))),128))])],2)}}}),ht=C(bt,[["__scopeId","data-v-8a7175b7"]]),gt=["data-bs-theme"],kt={key:0,class:"container-fluid"},xt=["alt"],wt={class:"collapse navbar-collapse",id:"navbarSupportedContent"},yt={class:"navbar-nav"},$t={class:"nav-item isMobile"},Ct={class:"navbar-end"},Lt={class:"social-media"},Tt={class:"icon-wrapper"},St={key:1,class:"container-fluid"},It=["alt"],Mt={class:"offcanvas offcanvas-end",id:"offcanvasNavbar",tabindex:"-1","aria-labelledby":"offcanvasNavbarLabel"},Nt={class:"offcanvas-header"},Bt={class:"offcanvas-title",id:"offcanvasNavbarLabel"},Pt={class:"offcanvas-body"},Ft={class:"navbar-nav"},Et={class:"nav-item isMobile","data-bs-dismiss":"offcanvas"},Vt={class:"navbar-end"},jt={class:"social-media"},zt={class:"icon-wrapper"},Dt={class:"isMobile"},Yt={class:"isDesktop"},qt=$({__name:"Navbar",props:["color","position","expand","offcanvas"],setup(p){const n=O(),{t:l}=N(),c=p,v=h(()=>{switch(c.color){case"primary":return"bg-primary";case"secondary":return"bg-body-secondary";case"tertiary":return"bg-body-tertiary";case"light":return"bg-light";case"dark":return"bg-dark";default:return""}}),_=h(()=>{switch(c.color){case"primary":return"light";case"secondary":return"";case"tertiary":return"";case"light":return"light";case"dark":return"dark";default:return""}}),r=h(()=>{switch(c.position){case"fixed":return"fixed-top";case"sticky":return"sticky-top";default:return""}}),i=h(()=>{switch(c.expand){case"sm":return"navbar-expand-sm";case"md":return"navbar-expand-md";case"lg":return"navbar-expand-lg";case"xl":return"navbar-expand-xl";case"xxl":return"navbar-expand-xxl";default:return"navbar-expand-lg"}}),u=h(()=>!!c.offcanvas),k=h(()=>[{link:n("blog"),title:l("pages.blog.title")},{link:n("projects"),title:l("pages.projects.title")}]);return(V,b)=>{const g=U,j=T,z=vt,B=ht;return s(),a("nav",{class:q(["navbar",[o(v),o(r),o(i)]]),"data-bs-theme":o(_)},[o(u)?(s(),a("div",St,[e(g,{class:"navbar-brand",to:o(n)("index")},{default:f(()=>[t("img",{src:D,alt:o(S),width:"30",height:"24"},null,8,It),t("span",null,d(o(S)),1)]),_:1},8,["to"]),b[2]||(b[2]=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1)),t("div",Mt,[t("div",Nt,[t("h5",Bt,d(o(l)("app.menu")),1),b[1]||(b[1]=t("button",{class:"btn-close",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"},null,-1))]),t("div",Pt,[t("ul",Ft,[t("li",Et,[e(g,{class:"nav-link",to:o(n)("index")},{default:f(()=>[L(d(o(l)("pages.home.title")),1)]),_:1},8,["to"])]),(s(!0),a(w,null,y(o(k),(m,x)=>(s(),a("li",{class:"nav-item",key:x,"data-bs-dismiss":"offcanvas"},[e(g,{class:"nav-link",to:m.link},{default:f(()=>[L(d(m.title),1)]),_:2},1032,["to"])]))),128))]),t("div",Vt,[t("div",jt,[(s(!0),a(w,null,y(o(M),(m,x)=>(s(),E(g,{key:x,to:m.link},{default:f(()=>[t("div",zt,[e(j,{name:m.icon},null,8,["name"])])]),_:2},1032,["to"]))),128))]),e(z),t("div",Dt,[e(B,{drop:"up"})]),t("div",Yt,[e(B)])])])])])):(s(),a("div",kt,[e(g,{class:"navbar-brand",to:o(n)("index")},{default:f(()=>[t("img",{src:D,alt:o(S),width:"30",height:"24"},null,8,xt),t("span",null,d(o(S)),1)]),_:1},8,["to"]),b[0]||(b[0]=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1)),t("div",wt,[t("ul",yt,[t("li",$t,[e(g,{class:"nav-link",to:o(n)("index")},{default:f(()=>[L(d(o(l)("pages.home.title")),1)]),_:1},8,["to"])]),(s(!0),a(w,null,y(o(k),(m,x)=>(s(),a("li",{class:"nav-item",key:x},[e(g,{class:"nav-link",to:m.link},{default:f(()=>[L(d(m.title),1)]),_:2},1032,["to"])]))),128))]),t("div",Ct,[t("div",Lt,[(s(!0),a(w,null,y(o(M),(m,x)=>(s(),E(g,{key:x,to:m.link},{default:f(()=>[t("div",Tt,[e(j,{name:m.icon},null,8,["name"])])]),_:2},1032,["to"]))),128))]),e(z),e(B)])])]))],10,gt)}}}),Ot=C(qt,[["__scopeId","data-v-288514f0"]]);function Ut(){const p=I(0),n=I(0);function l(c){p.value=window.scrollX,n.value=window.scrollY}return J(()=>window.addEventListener("scroll",l)),K(()=>window.removeEventListener("scroll",l)),{x:p,y:n}}const Xt={class:"icon-wrapper"},At=$({__name:"ScrollToTopButton",setup(p){const n=I(null),{x:l,y:c}=Ut();Q(()=>c.value,_=>{var r,i;_>128?(r=n.value)==null||r.classList.remove("hidden"):(i=n.value)==null||i.classList.add("hidden")});const v=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(_,r)=>{const i=T;return s(),a("div",{class:"scroll-to-top-button hidden",id:"scrollToTopBtn",ref_key:"scrollToTopBtn",ref:n},[t("button",{class:"btn",onClick:r[0]||(r[0]=u=>v())},[t("div",Xt,[e(i,{class:"icon",name:"bi:arrow-up"})])])],512)}}}),Gt=C(At,[["__scopeId","data-v-647f1975"]]),Ht={class:"container-fluid"},Jt={key:0,class:"footer-container"},Kt={class:"social-media"},Qt={class:"icon-wrapper"},Rt={key:1,class:"footer-container"},Wt={class:"footer-menu"},Zt={class:"nav"},to={class:"footer-container"},oo={class:"copyright"},so=$({__name:"Footer",setup(p){const{t:n}=N(),l=O(),c=new Date().getFullYear();return(v,_)=>{const r=T,i=U;return s(),a("footer",null,[t("div",Ht,[o(M).length?(s(),a("div",Jt,[t("div",Kt,[(s(!0),a(w,null,y(o(M),(u,k)=>(s(),E(i,{key:k,to:u.link},{default:f(()=>[t("div",Qt,[e(r,{name:u.icon},null,8,["name"])])]),_:2},1032,["to"]))),128))])])):F("",!0),o(Y).footer.length?(s(),a("div",Rt,[t("div",Wt,[t("ul",Zt,[(s(!0),a(w,null,y(o(Y).footer,(u,k)=>(s(),a("li",{class:"nav-item",key:k},[e(i,{class:"nav-link",to:o(l)(u.link)},{default:f(()=>[L(d(o(n)(u.prop)),1)]),_:2},1032,["to"])]))),128))])])])):F("",!0),t("div",to,[t("div",oo,[t("span",null,"© "+d(o(c))+" "+d(o(R))+". "+d(o(n)("app.rights"))+".",1)])])])])}}}),no=C(so,[["__scopeId","data-v-475c1ac9"]]),eo={class:"layout layout-default",id:"layout"},ao=$({__name:"default",setup(p){return(n,l)=>{const c=rt,v=Ot,_=Gt,r=no;return s(),a("div",eo,[e(c),e(v,{offcanvas:"true"}),t("main",null,[W(n.$slots,"default",{},void 0,!0)]),e(_),e(r)])}}}),_o=C(ao,[["__scopeId","data-v-149b728c"]]);export{_o as default};
