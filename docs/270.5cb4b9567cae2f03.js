"use strict";(self.webpackChunkHitMakerApp=self.webpackChunkHitMakerApp||[]).push([[270],{4270:(N,m,i)=>{i.r(m),i.d(m,{StaticPagesModule:()=>A});var l=i(9808),d=i(1083),n=i(5e3),u=i(5823);let h=(()=>{class e{constructor(){}ngOnInit(){}ngAfterViewInit(){for(var t=document.getElementsByClassName("question"),o=0;o<t.length;o++)t[o].addEventListener("click",c=>{var a=c.target;a.classList.toggle("active");var p=a.nextElementSibling;p.style.maxHeight=p.style.maxHeight?null:p.scrollHeight+"px"})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-help-page"]],decls:21,vars:0,consts:[["id","help_cnt"],["title","Help Center"],[1,"helps_cnt"],[1,"header"],[1,"question"],[1,"help_desc"],["id","last_question",1,"question"],["id","last_help_desc",1,"help_desc"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0),n._UZ(1,"app-backtitlenav",1),n.TgZ(2,"div",2)(3,"h4",3),n._uU(4,"FAQ's"),n.qZA(),n.TgZ(5,"h5",4),n._uU(6,"What are the registration requirements?"),n.qZA(),n.TgZ(7,"div",5)(8,"ol")(9,"li"),n._uU(10,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),n.qZA()()(),n.TgZ(11,"h5",4),n._uU(12,"How can I redeem a prize?"),n.qZA(),n.TgZ(13,"div",5)(14,"p"),n._uU(15,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),n.qZA()(),n.TgZ(16,"h5",6),n._uU(17,"Is multiple prediction on the same match allowed?"),n.qZA(),n.TgZ(18,"div",7)(19,"p"),n._uU(20,"No.You can predict once on the same match."),n.qZA()()()())},directives:[u.e],styles:['#help_cnt[_ngcontent-%COMP%]{padding:20px 10px 10px;margin:auto}#help_cnt[_ngcontent-%COMP%]   .helps_cnt[_ngcontent-%COMP%]{border:2px solid #EFEEEE;border-radius:10px;margin-top:30px;background-color:#fff}#help_cnt[_ngcontent-%COMP%]   .helps_cnt[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{text-align:center;background-color:#000;border-top-left-radius:10px;border-top-right-radius:10px;padding:10px;font-size:18px;font-weight:400;margin-bottom:19px;color:#fff}#help_cnt[_ngcontent-%COMP%]   .helps_cnt[_ngcontent-%COMP%]   #non_contestants[_ngcontent-%COMP%]{background-color:#ea4c62}#help_cnt[_ngcontent-%COMP%]   .helps_cnt[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]{outline:none;transition:.4s all ease;border-bottom:1px solid;font-size:16px;font-weight:300;margin:0 10px 15px;padding-bottom:15px;text-align:left;color:#000;cursor:pointer}#help_cnt[_ngcontent-%COMP%]   .helps_cnt[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]:hover, #help_cnt[_ngcontent-%COMP%]   .helps_cnt[_ngcontent-%COMP%]   .question.active[_ngcontent-%COMP%]{color:#ea4c62}#help_cnt[_ngcontent-%COMP%]   .helps_cnt[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]:before{color:#000;font-family:"Font Awesome 5 Free";content:"\\f055";display:inline-block;padding-right:3px;vertical-align:middle;font-weight:900;font-size:20px;margin-right:9px}#help_cnt[_ngcontent-%COMP%]   .helps_cnt[_ngcontent-%COMP%]   #last_question[_ngcontent-%COMP%]{border:none}#help_cnt[_ngcontent-%COMP%]   .helps_cnt[_ngcontent-%COMP%]   .question.active[_ngcontent-%COMP%]:before{font-family:"Font Awesome 5 Free";content:"\\f055";display:inline-block;padding-right:3px;vertical-align:middle;font-weight:900;color:#ea4c62;transform:rotate(20deg)}#help_cnt[_ngcontent-%COMP%]   .helps_cnt[_ngcontent-%COMP%]   .help_desc[_ngcontent-%COMP%]{padding:0 18px;max-height:0;overflow:hidden;transition:max-height .2s ease-out;color:#000}#help_cnt[_ngcontent-%COMP%]   .helps_cnt[_ngcontent-%COMP%]   .help_desc[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]{font-size:14px}#help_cnt[_ngcontent-%COMP%]   .helps_cnt[_ngcontent-%COMP%]   .help_desc[_ngcontent-%COMP%]   #last_answer[_ngcontent-%COMP%]{border-top:1px solid #EA4C62;padding-top:14px}#help_cnt[_ngcontent-%COMP%]   .helps_cnt[_ngcontent-%COMP%]   #last_help_desc[_ngcontent-%COMP%]{margin-top:-13px}.material-symbols-outlined[_ngcontent-%COMP%]{font-variation-settings:"FILL" 1,"wght" 400,"GRAD" 0,"opsz" 48}@media (min-width: 1040px){#help_cnt[_ngcontent-%COMP%]{width:60%!important}}@media (min-width: 600px) and (max-width: 1040px){#help_cnt[_ngcontent-%COMP%]{width:80%!important}}']}),e})();var r=i(5910),_=i(5159),g=i(7093);let f=(()=>{class e{constructor(t){this.authService=t,this.userProfileImgUrl=r.v.userProfileImgUrl,this.userName=r.v.userName,this.userFirstName=r.v.userFirstName,this.userLastName=r.v.userLastName,this.userphoneNumber=r.v.userphoneNumber,this.userBio=r.v.userBio}ngOnInit(){}ngAfterViewInit(){new r.v(this.authService)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(_.e))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-profile"]],decls:8,vars:2,consts:[["title","Profile"],["fxLayout","column","fxLayoutAlign","center center",2,"margin-top","70px","position","relative"],["id","profileimage","src","../../../../../assets/images/profile.png","onload","",1,"profile-image-container"]],template:function(t,o){if(1&t&&(n.TgZ(0,"section"),n._UZ(1,"app-backtitlenav",0),n.TgZ(2,"div",1),n._UZ(3,"img",2),n.TgZ(4,"h4"),n._uU(5),n.qZA(),n.TgZ(6,"h4"),n._uU(7),n.qZA()()()),2&t){let c,a;n.xp6(5),n.Oqu(null!==(c=o.userName)&&void 0!==c?c:""),n.xp6(2),n.Oqu(null!==(a=o.userphoneNumber)&&void 0!==a?a:"")}},directives:[u.e,g.xw,g.Wh],styles:[".profile-image-container[_ngcontent-%COMP%]{height:100px;width:100px;border-radius:50%;margin-bottom:15px}img[_ngcontent-%COMP%]{max-height:100%;max-width:100%;object-fit:cover}h4[_ngcontent-%COMP%]{margin:0 0 8px;font-weight:500}"]}),e})();var C=i(5790),x=i(2699),P=i(6429),O=i(7423),M=i(9506);function v(e,s){if(1&e&&n._UZ(0,"img",8),2&e){const t=n.oxw();let o;n.s9C("src",null!==(o=null==t.news?null:t.news.UrlToImage)&&void 0!==o?o:"../../../../../assets/images/sliderone.png",n.LSH)}}function w(e,s){1&e&&(n.TgZ(0,"div")(1,"div",9),n._UZ(2,"ngx-shimmer-loading",10),n.qZA(),n.TgZ(3,"div",9),n._UZ(4,"ngx-shimmer-loading",10),n.qZA(),n.TgZ(5,"div",9),n._UZ(6,"ngx-shimmer-loading",10),n.qZA()()),2&e&&(n.xp6(2),n.Q6J("height","120px")("width","100%"),n.xp6(2),n.Q6J("height","10")("width","90"),n.xp6(2),n.Q6J("height","10")("width","60"))}function b(e,s){if(1&e&&(n.TgZ(0,"div",11)(1,"p",12),n._uU(2),n.qZA(),n.TgZ(3,"p",13),n._uU(4,"Source: "),n.TgZ(5,"span",14),n._uU(6),n.qZA()(),n.TgZ(7,"p",15),n._uU(8),n.ALo(9,"date"),n.qZA(),n.TgZ(10,"p",16),n._uU(11),n.qZA()()),2&e){const t=n.oxw();let o,c,a;n.xp6(2),n.Oqu(null!==(o=null==t.news?null:t.news.Title)&&void 0!==o?o:""),n.xp6(4),n.Oqu(null!==(c=null==t.news?null:t.news.Source)&&void 0!==c?c:""),n.xp6(2),n.Oqu(n.xi3(9,4,null==t.news?null:t.news.PublishedAt,"medium")),n.xp6(3),n.Oqu(null!==(a=null==t.news?null:t.news.newsContent)&&void 0!==a?a:"")}}const y=[{path:"help",component:h},{path:"profile",component:f},{path:"displaynews",component:(()=>{class e{constructor(t,o,c,a){this.location=t,this.newsService=o,this.snackBarOpenerService=c,this.router=a,this.subscription=[],this.isHttpLoading=!1}ngOnInit(){this.subscribeToisHttpLoading(),this.subscribeToSelectedNews()}back(){this.newsService.clearSelectedNews(),this.location.back()}subscribeToSelectedNews(){this.subscription.push(this.newsService.selectedNewsObservable.subscribe({next:t=>{this.news=t},error:t=>{console.log(`inside <UpcomingMatchesComponent.subscribeTogetFixtureMatches()> ${"statuscode:"+t.status}  ${"message:"+t.message}`),t.message==C.L.timeoutMsg&&this.snackBarOpenerService.openToastSnackBar("Request time out",!0,4),0==t.status&&this.snackBarOpenerService.openToastSnackBar("Internet connection error",!0,4)},complete:()=>{}}))}subscribeToisHttpLoading(){this.subscription.push(this.newsService.isHttpLoadingObservable.subscribe({next:t=>{this.isHttpLoading=t}}))}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(l.Ye),n.Y36(x.Y),n.Y36(P.N),n.Y36(d.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-news-displayer"]],decls:9,vars:3,consts:[["id","container"],["id","news_image","alt","News image",3,"src",4,"ngIf"],["id","contents_cnt"],["id","backtitlenav"],["mat-flat-button","","id","backbtn",3,"click"],[1,"material-icons","md-36","backicon"],[4,"ngIf"],["id","news_content",4,"ngIf"],["id","news_image","alt","News image",3,"src"],["fxLayout","row","fxLayoutAlign","start center",2,"margin-bottom","9px"],["borderRadius","10px",3,"height","width"],["id","news_content"],[1,"heading"],[1,"source"],[1,"source_link"],[1,"date"],[1,"news_desc"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0),n.YNc(1,v,1,1,"img",1),n.TgZ(2,"div",2)(3,"div",3)(4,"button",4),n.NdJ("click",function(){return o.back()}),n.TgZ(5,"span",5),n._uU(6,"arrow_back_ios"),n.qZA()()(),n.YNc(7,w,7,6,"div",6),n.YNc(8,b,12,7,"div",7),n.qZA()()),2&t&&(n.xp6(1),n.Q6J("ngIf",!o.isHttpLoading),n.xp6(6),n.Q6J("ngIf",o.isHttpLoading),n.xp6(1),n.Q6J("ngIf",!o.isHttpLoading))},directives:[l.O5,O.lW,g.xw,g.Wh,M.w],pipes:[l.uU],styles:["#container[_ngcontent-%COMP%]{width:100%}#container[_ngcontent-%COMP%]   #news_image[_ngcontent-%COMP%]{width:100%;height:25vh;object-fit:cover}#container[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]{position:relative;width:95%;margin-top:-40;margin:auto;left:0px;right:0px;z-index:20;margin-top:-25vh}#container[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #backtitlenav[_ngcontent-%COMP%]{display:flex;align-items:center;top:-5px;z-index:50;position:sticky;transition:all 1s ease;border-radius:10px;margin-top:30px;margin-bottom:140px}#container[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #backtitlenav[_ngcontent-%COMP%]   #backbtn[_ngcontent-%COMP%]{border-radius:9px;height:30px;width:33px;display:flex;justify-content:center;align-items:center;min-width:30px;padding:0 0 0 7px;background-color:#fff}#container[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #backtitlenav[_ngcontent-%COMP%]   .backicon[_ngcontent-%COMP%]{margin-bottom:0;display:flex;justify-content:center;align-items:center;font-size:14px;cursor:pointer;color:#000}#container[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #news_content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-size:16px;font-family:var(--opensans_font);margin:0;font-weight:700;text-align:center}#container[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #news_content[_ngcontent-%COMP%]   .source[_ngcontent-%COMP%]{font-size:12px;font-weight:400;text-align:center;margin-top:5px;margin-bottom:3px}#container[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #news_content[_ngcontent-%COMP%]   .source[_ngcontent-%COMP%]   .source_link[_ngcontent-%COMP%]{font-weight:700;margin-left:3px}#container[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #news_content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{font-size:12px;font-family:var(--opensans_font);opacity:.8;margin:0;font-weight:400;text-align:center}#container[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #news_content[_ngcontent-%COMP%]   .news_desc[_ngcontent-%COMP%]{font-size:13px;font-family:var(--opensans_font);margin:10px 0 0;font-weight:400;text-align:justify;font-weight:500}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}ngx-shimmer-loading[_ngcontent-%COMP%]{width:100%!important}"]}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[d.Bz.forChild(y)],d.Bz]}),e})();var T=i(7491);let A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[l.ez,Z,T.m]]}),e})()}}]);