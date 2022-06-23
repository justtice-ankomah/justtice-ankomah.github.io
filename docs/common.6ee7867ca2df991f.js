"use strict";(self.webpackChunkHitMakerApp=self.webpackChunkHitMakerApp||[]).push([[592],{2075:(y,v,s)=>{s.d(v,{p:()=>l});var t=s(5e3),d=s(8966),p=s(5215),_=s(4377),h=s(7423);let g=(()=>{class r{constructor(e,a,o){this.dialog=e,this.snackBarOpenerService=a,this.shareTrack=o,this.trackLink=null}ngOnInit(){this.shareTrack.shareTrack.subscribe(e=>{this.trackLink=e})}onClose(){this.dialog.closeAll()}copyLink(){navigator.clipboard.writeText(this.trackLink),this.snackBarOpenerService.openToastSnackBar("Link copied",!1,3)}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(d.uw),t.Y36(p.N),t.Y36(_.j))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-share-dialog"]],decls:9,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","","mat-dialog-close","",3,"click"],[1,"material-icons","md-36","morevert_icon"]],template:function(e,a){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Share Track"),t.qZA(),t.TgZ(2,"div",1),t._uU(3),t.qZA(),t.TgZ(4,"div",2)(5,"button",3),t.NdJ("click",function(){return a.copyLink()}),t.TgZ(6,"span",4),t._uU(7,"link"),t.qZA(),t._uU(8," Copy Link"),t.qZA()()),2&e&&(t.xp6(3),t.Oqu(null!=a.trackLink?a.trackLink:"N/A"))},directives:[d.uh,d.xY,d.H8,h.lW,d.ZT],styles:[""]}),r})();var i=s(7399);let l=(()=>{class r{constructor(e,a){this.dialog=e,this._bottomSheetRef=a}ngOnInit(){}openLink(e){this._bottomSheetRef.dismiss(),e.preventDefault()}openDialog(){this.dialog.open(g),this._bottomSheetRef.dismiss()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(d.uw),t.Y36(i.oL))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-videobottomsheet"]],decls:8,vars:0,consts:[["id","videosheet"],["id","topbar",1,".dark"],[1,"material-icons","md-36","action_icon"],[1,"action_text",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"ul")(3,"li")(4,"p",2),t._uU(5,"share"),t.qZA(),t.TgZ(6,"p",3),t.NdJ("click",function(){return a.openDialog()}),t._uU(7,"Share"),t.qZA()()()())},styles:["#videosheet[_ngcontent-%COMP%]   #topbar[_ngcontent-%COMP%]{border-radius:30px;width:40%;height:5px;background-color:#eef0f5;margin:1px auto 28px}#videosheet[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;justify-content:start;align-items:center;margin-bottom:20px;transition:all .5ms ease;cursor:pointer}#videosheet[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{margin-left:3px}#videosheet[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .action_icon[_ngcontent-%COMP%]{margin-right:11px;margin-bottom:0;margin-top:0;font-size:18px;font-weight:400}#videosheet[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .action_text[_ngcontent-%COMP%]{margin-bottom:0;font-size:18px;font-weight:400}@media (min-width: 1040px){#topbar[_ngcontent-%COMP%]{width:20%!important}}@media (min-width: 600px) and (max-width: 1040px){#topbar[_ngcontent-%COMP%]{width:20%!important}}"]}),r})()},2979:(y,v,s)=>{s.d(v,{Q:()=>e});var t=s(1135),d=s(262),p=s(8505),_=s(4004),h=s(7414),g=s(2843),i=s(2912),l=s(5790),r=s(5e3),u=s(520);let e=(()=>{class a{constructor(n){this.http=n,this.allLivePrfmncBSubject=new t.X(null),this.allLivePrfmnc=this.allLivePrfmncBSubject.asObservable(),this.artistLvPrfmncBSubject=new t.X(null),this.artistLvPrfmnces=this.artistLvPrfmncBSubject.asObservable(),this.playingLvPfmcBSubject=new t.X(null),this.playingLvPrfmnce=this.playingLvPfmcBSubject.asObservable()}setPlayingLvPfmce(n){try{console.log("new playing live performance has been set"),this.playingLvPfmcBSubject.next(n)}catch(c){this.playingLvPfmcBSubject.error(c)}}getAllLivePerfmnc(n){console.log(n),this.http.get(i.l.getAllLivePrfmnc,{observe:"response"}).pipe((0,d.K)(l.L.handleHttpErrors),(0,p.b)(c=>{console.log("all lp from server is"),console.log(c.body)}),(0,_.U)(c=>{let f=[];return c.body.forEach(P=>{P.UseCase==n&&f.push(P)}),console.log("All live performance from server is"),console.log(f),f}),(0,h.V)({each:4e4,with:()=>(0,g._)(()=>new Error(l.L.timeoutMsg))})).subscribe({next:c=>{this.allLivePrfmncBSubject.next(c),console.log(c)},error:c=>{console.log(c),this.allLivePrfmncBSubject.error(c)}})}getArtistLivePerfmnces(n,c){this.http.get(i.l.getartistDemos+n,{observe:"response"}).pipe((0,d.K)(l.L.handleHttpErrors),(0,p.b)(m=>{}),(0,_.U)(m=>{let P=[];return m.body.forEach(O=>{O.UseCase==c&&P.push(O)}),P}),(0,h.V)({each:4e4,with:()=>(0,g._)(()=>new Error(l.L.timeoutMsg))})).subscribe({next:m=>{this.artistLvPrfmncBSubject.next(m),console.log(m)},error:m=>{console.log(m),this.artistLvPrfmncBSubject.error(m)}})}}return a.\u0275fac=function(n){return new(n||a)(r.LFG(u.eN))},a.\u0275prov=r.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},3216:(y,v,s)=>{s.d(v,{c:()=>i});var t=s(520),d=s(2843),p=s(262),_=s(4004),h=s(2912),g=s(5e3);let i=(()=>{class r{constructor(e){this.http=e}createNewUser(e,a){let o=JSON.stringify(e);console.log(o);let c={headers:new t.WM({"Content-Type":"application/json"})};return this.http.post(h.l.registerForContest+`/${a}`,o,c).pipe((0,p.K)(l))}fetchSettings(){return this.http.get(h.l.getAppSettings).pipe((0,p.K)(l))}fetchUserGroups(){return this.http.get(h.l.getALlUserGroups).pipe((0,p.K)(l))}fetchUserByThirdPartyId(e){return this.http.get(h.l.findUserByThirdPartyId+`${e}`).pipe((0,p.K)(l),(0,_.U)(o=>{let n=o;return this.thirdPartyUser=n,n&&localStorage.setItem("userModel",JSON.stringify(this.thirdPartyUser)),n}))}fetchUserByPhoneNumber(e){return this.http.get(h.l.findUserByPhone+`${e}`).pipe((0,p.K)(l))}fetchUserMediaFiles(e){return this.http.get(h.l.getartistDemos+`${e}`).pipe((0,p.K)(l))}deleteMediaFile(e){return this.http.delete(h.l.deleteUserMediaFiles+`/${e}`).pipe((0,p.K)(l))}}return r.\u0275fac=function(e){return new(e||r)(g.LFG(t.eN))},r.\u0275prov=g.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function l(r){return console.error(r),(0,d._)(r.error)}},1042:(y,v,s)=>{s.d(v,{Z:()=>a});var t,d=new Uint8Array(16);function p(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(d)}const _=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,g=function h(o){return"string"==typeof o&&_.test(o)};for(var i=[],l=0;l<256;++l)i.push((l+256).toString(16).substr(1));const a=function e(o,n,c){var m=(o=o||{}).random||(o.rng||p)();if(m[6]=15&m[6]|64,m[8]=63&m[8]|128,n){c=c||0;for(var f=0;f<16;++f)n[c+f]=m[f];return n}return function r(o){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=(i[o[n+0]]+i[o[n+1]]+i[o[n+2]]+i[o[n+3]]+"-"+i[o[n+4]]+i[o[n+5]]+"-"+i[o[n+6]]+i[o[n+7]]+"-"+i[o[n+8]]+i[o[n+9]]+"-"+i[o[n+10]]+i[o[n+11]]+i[o[n+12]]+i[o[n+13]]+i[o[n+14]]+i[o[n+15]]).toLowerCase();if(!g(c))throw TypeError("Stringified UUID is invalid");return c}(m)}},5861:(y,v,s)=>{function t(p,_,h,g,i,l,r){try{var u=p[l](r),e=u.value}catch(a){return void h(a)}u.done?_(e):Promise.resolve(e).then(g,i)}function d(p){return function(){var _=this,h=arguments;return new Promise(function(g,i){var l=p.apply(_,h);function r(e){t(l,g,i,r,u,"next",e)}function u(e){t(l,g,i,r,u,"throw",e)}r(void 0)})}}s.d(v,{Z:()=>d})}}]);