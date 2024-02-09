"use strict";(self.webpackChunkHitMakerApp=self.webpackChunkHitMakerApp||[]).push([[201],{9201:(L,m,i)=>{i.r(m),i.d(m,{HomeModule:()=>H});var s=i(9808),c=i(1083),u=i(3075),t=i(5e3),f=i(5113),g=i(5453),l=(()=>{return(n=l||(l={})).Left="left",n.Right="right",l;var n})(),h=i(3322),d=i(7093),x=i(7423);function C(n,a){1&n&&t.GkF(0)}const y=function(n){return{"side-nav-bar-collapsed":n}},b=function(n){return{transition:n}},_=function(n){return{"side-nav-bar-overlay-collapsed":n}};let M=(()=>{class n{constructor(e){this.navService=e,this.duration=.25,this.navWidth=window.innerWidth,this.direction=l.Left}ngOnInit(){this.showSideNav=this.navService.getShowNav()}onSidebarClose(){this.navService.setShowNav(!1)}getSideNavBarStyle(e){let o={};return o.transition=this.direction+" "+this.duration+"s, visibility "+this.duration+"s",o.width=this.navWidth+"px",o[this.direction]=(e?0:-1*this.navWidth)+"px",o}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.r))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-side-nav"]],inputs:{sidenavTemplateRef:"sidenavTemplateRef",duration:"duration",navWidth:"navWidth",direction:"direction"},decls:16,vars:17,consts:[[1,"side-nav-bar",3,"ngClass"],[1,"side-nav-bar-overlay",3,"ngStyle","ngClass","click"],[1,"side-nav-bar-menu-container",3,"ngStyle"],["fxLayout","row","fxLayoutAlign","space-around center",2,"margin-top","20px"],["src","assets/images/hit.png","id","logo_img"],[1,"icon-back-design"],["mat-flat-button","","id","backbtn",3,"click"],[1,"material-icons","md-36","backicon"],[2,"height","-10px","width","210px","padding","-10px","margin","30px"],[1,"side-nav-bar-content-container"],[4,"ngTemplateOutlet"]],template:function(e,o){1&e&&(t.TgZ(0,"div")(1,"div",0),t.ALo(2,"async"),t.TgZ(3,"div",1),t.NdJ("click",function(){return o.onSidebarClose()}),t.ALo(4,"async"),t.qZA(),t.TgZ(5,"div",2),t.ALo(6,"async"),t.TgZ(7,"div",3),t._UZ(8,"img",4),t.TgZ(9,"div",5)(10,"button",6),t.NdJ("click",function(){return o.onSidebarClose()}),t.TgZ(11,"span",7),t._uU(12,"arrow_back_ios"),t.qZA()()()(),t._UZ(13,"hr",8),t.TgZ(14,"div",9),t.YNc(15,C,1,0,"ng-container",10),t.qZA()()()()),2&e&&(t.xp6(1),t.Q6J("ngClass",t.VKq(11,y,!t.lcZ(2,5,o.showSideNav))),t.xp6(2),t.Q6J("ngStyle",t.VKq(13,b,"background-color "+o.duration+"s, visibility "+o.duration+"s"))("ngClass",t.VKq(15,_,!t.lcZ(4,7,o.showSideNav))),t.xp6(2),t.Q6J("ngStyle",o.getSideNavBarStyle(t.lcZ(6,9,o.showSideNav))),t.xp6(10),t.Q6J("ngTemplateOutlet",o.sidenavTemplateRef))},directives:[s.mk,h.oO,s.PC,h.Zl,d.xw,d.Wh,x.lW,s.tP],pipes:[s.Ov],styles:[".side-nav-bar[_ngcontent-%COMP%]{position:fixed;z-index:1001;top:0;bottom:0;left:0;right:0}.side-nav-bar[_ngcontent-%COMP%]   .side-nav-bar-overlay[_ngcontent-%COMP%]{background:rgba(0,0,0,.5);width:100%;height:100%}.side-nav-bar[_ngcontent-%COMP%]   .side-nav-bar-menu-container[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;display:flex;flex-direction:column;border-top-right-radius:20px;border-bottom-right-radius:20px}.side-nav-bar[_ngcontent-%COMP%]   .side-nav-bar-menu-container[_ngcontent-%COMP%]   .side-nav-bar-close[_ngcontent-%COMP%]{display:inline-block;font-size:2.5em;margin:24px 0 0 24px;cursor:pointer}.side-nav-bar[_ngcontent-%COMP%]   .side-nav-bar-content-container[_ngcontent-%COMP%]{padding:32px}.side-nav-bar[_ngcontent-%COMP%]   #logo_img[_ngcontent-%COMP%]{width:160px;height:120px}.side-nav-bar-overlay-collapsed[_ngcontent-%COMP%]{background:transparent!important}.side-nav-bar-collapsed[_ngcontent-%COMP%]{visibility:collapse!important}.icon-back-design[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:30px;width:30px;background-color:#fff;border-radius:12px;box-shadow:#0006 0 2px 4px,#0000004d 0 7px 13px -3px,#0003 0 -3px inset}#backbtn[_ngcontent-%COMP%]{border-radius:15px;height:40px;width:38px;display:flex;justify-content:center;align-items:center;min-width:45px;padding:0 0 0 7px;background-color:var(--backiconback_g)}.backicon[_ngcontent-%COMP%]{margin-bottom:0;display:flex;justify-content:center;align-items:center;font-size:17px;cursor:pointer}"]}),n})();var O=i(8966),v=i(5245);let P=(()=>{class n{constructor(e,o,r,p){this.dialog=e,this.location=o,this.navService=r,this.router=p}ngOnInit(){}ngAfterViewInit(){}toggleSideNav(){this.navService.setShowNav(!0)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(O.uw),t.Y36(s.Ye),t.Y36(g.r),t.Y36(c.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-header"]],decls:6,vars:0,consts:[["fxLayout","row","id","headermenu","fxLayoutAlign","space-between center",1,"header-menu"],["id","menu",1,"menu-icon",3,"click"],["id","home_feed"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"mat-icon",1),t.NdJ("click",function(){return o.toggleSideNav()}),t._uU(2,"short_text"),t.qZA(),t.TgZ(3,"span",2),t._uU(4,"New User"),t.qZA(),t._UZ(5,"p"),t.qZA())},directives:[d.xw,d.Wh,v.Hw],styles:['@import"https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;600&display=swap";#home_feed[_ngcontent-%COMP%]{font-family:var(--opensans_font);font-weight:600;font-size:15px;color:var(--lightdark_text_color)}.menu-icon[_ngcontent-%COMP%]{font-size:2.5em;margin-left:0;cursor:pointer;width:auto!important;height:auto!important;color:var(--lightdark_text_color)}.header-menu[_ngcontent-%COMP%]{width:100%;position:fixed;z-index:40;transition:all .3s ease;padding:6px;background-color:var(--backiconback_g)}.activescroll[_ngcontent-%COMP%]{background-color:var(--appbarScrollback_g);margin-top:-2px;padding:9px;border-bottom-left-radius:20px;border-bottom-right-radius:20px}.activehomescroll[_ngcontent-%COMP%]{background-color:#000!important;margin-top:0;padding:9px}.carousel[_ngcontent-%COMP%]{width:100%;height:900px;position:relative;z-index:1}p[_ngcontent-%COMP%]{margin:0}#spinner[_ngcontent-%COMP%]{margin:auto;text-align:center}@media (min-width: 1040px){.header-menu[_ngcontent-%COMP%]{width:60%!important}}@media (min-width: 600px) and (max-width: 1040px){.header-menu[_ngcontent-%COMP%]{width:80%!important}}']}),n})();const w=function(){return["/register/terms",!0,!1]};function Z(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"p",3),t._uU(1,"APP INFO"),t.qZA(),t.TgZ(2,"h3",4)(3,"mat-icon",5),t._uU(4,"help_outline"),t.qZA(),t.TgZ(5,"span"),t._uU(6,"Help"),t.qZA()(),t._UZ(7,"br"),t.TgZ(8,"h3",6)(9,"mat-icon",5),t._uU(10,"security"),t.qZA(),t.TgZ(11,"span"),t._uU(12,"Terms & Conditions"),t.qZA()(),t._UZ(13,"br"),t.TgZ(14,"div",7)(15,"h3",8),t._uU(16,"Appearance"),t.qZA(),t.TgZ(17,"div",9),t.NdJ("click",function(){return t.CHM(e),t.oxw().themeToggler()}),t.TgZ(18,"p",10)(19,"mat-icon",5),t._uU(20,"light_mode"),t.qZA(),t._uU(21," DAY MODE"),t.qZA(),t.TgZ(22,"p",11)(23,"mat-icon",5),t._uU(24,"dark_mode"),t.qZA(),t._uU(25," NIGHT MODE"),t.qZA()()()}2&n&&(t.xp6(8),t.Q6J("routerLink",t.DdM(1,w)))}const k=[{path:"",component:(()=>{class n{constructor(e,o,r,p){this.headerService=r,this.router=p,this.className="",this.toggleControl=new u.NI(!1),this.mobileQuery=o.matchMedia("(max-width: 600px)"),this._mobileQueryListener=()=>e.detectChanges(),this.mobileQuery.addListener(this._mobileQueryListener)}ngOnDestroy(){this.mobileQuery.removeListener(this._mobileQueryListener)}ngOnInit(){}themeToggler(){document.body.classList.toggle("darkMode");var e=document.getElementById("dark_mode"),o=document.getElementById("day_mode");e.classList.toggle("activemode"),o.classList.toggle("activemode")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(f.vx),t.Y36(g.r),t.Y36(c.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home-page"]],hostVars:2,hostBindings:function(e,o){2&e&&t.Tol(o.className)},decls:7,vars:3,consts:[[3,"sidenavTemplateRef","direction","navWidth","duration"],[1,"main-container"],["navContent",""],[1,"app_info"],["fxLayout","row","fxLayoutAlign","start center","id","fw","routerLink","/staticpages/help",1,"nav_link"],[1,"notification-icon"],["fxLayout","row","fxLayoutAlign","start center","id","fw",1,"nav_link",3,"routerLink"],["fxLayout","row","fxLayoutAlign","space-between center"],["id","fw",2,"margin-bottom","0px"],["id","toggler_cnt",3,"click"],["id","day_mode",1,"activemode"],["id","dark_mode"]],template:function(e,o){if(1&e&&(t._UZ(0,"app-side-nav",0),t.TgZ(1,"div",1),t._UZ(2,"app-header"),t.TgZ(3,"section"),t._UZ(4,"router-outlet"),t.qZA()(),t.YNc(5,Z,26,2,"ng-template",null,2,t.W1O)),2&e){const r=t.MAs(6);t.Q6J("sidenavTemplateRef",r)("navWidth",280)("duration",.5)}},directives:[M,P,c.lC,d.xw,d.Wh,c.rH,v.Hw],styles:[".app-header[_ngcontent-%COMP%]{height:300px;width:100%}.main-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.main-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{flex:1;background-color:var(--bottomnav_backcolor)}#view_profile_link[_ngcontent-%COMP%]{display:flex;justify-content:start;align-items:center}#view_profile_link[_ngcontent-%COMP%]   .profile_img[_ngcontent-%COMP%]{border-radius:60%;width:30px;height:30px}#view_profile_link[_ngcontent-%COMP%]   #view_profile_txt[_ngcontent-%COMP%]{font-size:18px;margin-left:15px}.app_info[_ngcontent-%COMP%]{font-size:13px;opacity:.7;margin:40px 0 8px}#fw[_ngcontent-%COMP%]{font-size:18px;margin-bottom:20px}#fw[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:15px}.nav_link[_ngcontent-%COMP%]{color:var(--lightdark_text_color);transition:all .5ms ease}.nav_link[_ngcontent-%COMP%]:hover{margin-left:5px;cursor:pointer}#toggler_cnt[_ngcontent-%COMP%]{display:flex;justify-content:start;align-items:center;border-radius:12px;background:#eee;padding:4px;width:100px;height:26px;cursor:pointer}#toggler_cnt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:none!important;justify-content:space-between;font-family:Raleway;font-weight:600;font-size:8px;align-items:center;margin-bottom:0;color:#000!important}#toggler_cnt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{background-color:#fff;border-radius:50%;display:flex;justify-content:center;align-items:center;box-sizing:border-box;font-size:14px;margin-right:4px;width:21px;height:21px}#toggler_cnt[_ngcontent-%COMP%]   .activemode[_ngcontent-%COMP%]{display:flex!important;justify-content:space-between;font-family:Raleway;font-weight:600;font-size:8px;align-items:center;margin-bottom:0;color:#000!important;animation:showmenu .3s forwards;position:relative;top:-10%}@keyframes showmenu{to{top:0}}"]}),n})(),children:[{path:"",loadChildren:()=>i.e(736).then(i.bind(i,6736)).then(n=>n.GlobalPagesModule)},{path:"find-creators",loadChildren:()=>i.e(252).then(i.bind(i,6252)).then(n=>n.SupportersModule)}]}];let T=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(k)],c.Bz]}),n})();var S=i(1526),A=i(8315),N=i(1314);let H=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.ez,T,S.m,A.q,N.U8,u.u5]]}),n})()}}]);