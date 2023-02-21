"use strict";(self.webpackChunkHitMakerApp=self.webpackChunkHitMakerApp||[]).push([[943],{7943:(H,C,r)=>{r.r(C),r.d(C,{PredictionsModule:()=>J});var s=r(9808),v=r(7491),n=r(5e3),y=r(7423),O=r(3251),p=r(4717),l=r(1493),g=r(5790),w=r(5159),d=r(4914),m=r(8966),u=r(6429),P=r(5245),f=r(8140);function Z(e,i){1&e&&(n.TgZ(0,"div",3),n._UZ(1,"img",4),n.TgZ(2,"p",5),n._uU(3,"You have no pending Prediction"),n.qZA()())}function T(e,i){1&e&&(n.TgZ(0,"p",28),n._uU(1,"Vs"),n.qZA())}function z(e,i){if(1&e&&(n.TgZ(0,"p",29),n._uU(1),n.qZA()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.AsE("",t.Fixture.team_home_score," : ",t.Fixture.team_away_score,"")}}function k(e,i){if(1&e){const t=n.EpF();n.TgZ(0,"div",7)(1,"div",8)(2,"p",9),n._uU(3),n.ALo(4,"date"),n.qZA(),n.TgZ(5,"p",10),n._uU(6),n.qZA(),n.TgZ(7,"p",11)(8,"span"),n._uU(9,"ID:"),n.qZA(),n._uU(10),n.qZA()(),n.TgZ(11,"div",12)(12,"p",13),n._uU(13),n.qZA(),n.TgZ(14,"mat-icon",14),n.NdJ("click",function(){const c=n.CHM(t).$implicit;return n.oxw(2).showMatchInfo(c.Fixture)}),n._uU(15,"info"),n.qZA()(),n.TgZ(16,"div",15)(17,"div",16)(18,"div",17),n._UZ(19,"img",18),n.qZA(),n.TgZ(20,"p",19),n._uU(21),n.ALo(22,"truncate"),n.qZA()(),n.TgZ(23,"div",20),n.YNc(24,T,2,0,"p",21),n.YNc(25,z,2,2,"p",22),n.qZA(),n.TgZ(26,"div",16)(27,"div",17),n._UZ(28,"img",18),n.qZA(),n.TgZ(29,"p",19),n._uU(30),n.ALo(31,"truncate"),n.qZA()()(),n.TgZ(32,"p",23)(33,"span"),n._uU(34,"Your Prediction: "),n.qZA(),n._uU(35),n.qZA(),n.TgZ(36,"p",24),n._UZ(37,"img",25),n.TgZ(38,"span",26),n._uU(39,"Prize: "),n.qZA(),n.TgZ(40,"a",27),n.NdJ("click",function(){const c=n.CHM(t).$implicit;return n.oxw(2).getFixturePrice(null==c?null:c.FixtureId)}),n._uU(41,"Click here to see the prize"),n.qZA()()()}if(2&e){const t=i.$implicit;n.xp6(3),n.Oqu(n.xi3(4,12,t.CreatedAt,"dd/LLL/y h:mm a")),n.xp6(3),n.Oqu(t.PredictionStatus),n.xp6(4),n.Oqu(t.Id),n.xp6(3),n.Oqu(t.Fixture.league_round),n.xp6(6),n.s9C("src",null!=t.team_home_logo?t.team_home_logo:t.Fixture.team_home_logo,n.LSH),n.xp6(2),n.Oqu(n.Dn7(22,15,null==t?null:t.team_home_name,8,"...")),n.xp6(3),n.Q6J("ngIf","NS"==t.Fixture.fixture_status_short),n.xp6(1),n.Q6J("ngIf","NS"!=t.Fixture.fixture_status_short),n.xp6(3),n.s9C("src",null!=t.team_away_logo?t.team_away_logo:t.Fixture.team_away_logo,n.LSH),n.xp6(2),n.Oqu(n.Dn7(31,19,null==t?null:t.team_away_name,8,"...")),n.xp6(5),n.AsE("",t.team_home_score," : ",t.team_away_score,"")}}function A(e,i){if(1&e&&(n.TgZ(0,"div"),n.YNc(1,k,42,23,"div",6),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.pendindPrdtns)}}let x=(()=>{class e{constructor(t,o,a,c){this.authService=t,this.fixtureService=o,this.dialog=a,this.snackBarOpenerService=c,this.subscription=[],this.pendindPrdtns=[]}ngOnInit(){this.subscribeTogetUserDetails(),this.subscribeToPendingPredictions(),null!=this.loginUser&&this.fixtureService.fetchAllUserPredictions(this.loginUser.Id)}ngOnDestroy(){this.subscription.length>0&&(console.log("unsubscribing"),this.subscription.forEach(t=>{t.unsubscribe()}))}showMatchInfo(t){this.dialog.open(l.a,{disableClose:!1,width:"100px",minWidth:"90%",data:{matchDetails:t}})}subscribeToPendingPredictions(){this.subscription.push(this.fixtureService.pendingPrdctnsObservable.subscribe({next:t=>{this.pendindPrdtns=t,console.log("pending subscriptions",this.pendindPrdtns)},error:t=>{console.log(`inside <PendingPredictionsComponent.subscribeToPendingPredictions()> ${"statuscode:"+t.status}  ${"message:"+t.message}`),t.message==g.L.timeoutMsg&&this.snackBarOpenerService.openToastSnackBar("Request time out",!0,4),0==t.status&&this.snackBarOpenerService.openToastSnackBar("Internet connection error",!0,4)},complete:()=>{}}))}subscribeTogetUserDetails(){this.subscription.push(this.authService.userDetailsObservable.subscribe({next:t=>{this.loginUser=t},error:t=>{console.log(`inside <PendingPredictionsComponent.subscrbToUserProfile()> ${"statuscode:"+t.status}  ${"message:"+t.message}`),"request_time_out"==t.message&&this.snackBarOpenerService.openToastSnackBar("Request time out",!0,4),0==t.status&&this.snackBarOpenerService.openToastSnackBar("Internet connection error",!0,4)},complete:()=>{}}))}getFixturePrice(t){this.fixtureService.fetchFixturePrize(t).subscribe({next:o=>{console.log("fixture prize in UpcomingMatchesComponent",o),null!=o?this.dialog.open(p.N,{disableClose:!1,data:{prize:o,isShowHowToRedeem:!1}}):this.snackBarOpenerService.openToastSnackBar("Not available for preview",!0,4)},error:o=>{console.log(`inside <UpcomingMatchesComponent.getFixturePrice()> ${"statuscode:"+o.status}  ${"message:"+o.message}`),o.message==g.L.timeoutMsg&&this.snackBarOpenerService.openToastSnackBar("Request time out",!0,4),0==o.status&&this.snackBarOpenerService.openToastSnackBar("Internet connection error",!0,4)},complete:()=>{}})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(w.e),n.Y36(d.j),n.Y36(m.uw),n.Y36(u.N))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-pending-predictions"]],decls:3,vars:2,consts:[["id","container"],["id","empty_list_con",4,"ngIf"],[4,"ngIf"],["id","empty_list_con"],["src","assets/images/recycle-bin.png","alt","Flag",1,"empty_img"],[1,"empty_title"],["class","prediction_cnt",4,"ngFor","ngForOf"],[1,"prediction_cnt"],[1,"heading"],[1,"date_time"],[1,"bet_status"],[1,"bet_id"],[1,"top_cnt"],[1,"match_type"],[1,"info-icon",3,"click"],[1,"teams_cnt"],[1,"team"],[1,"flag_background"],["alt","Flag",1,"team_flag_img",3,"src"],[1,"team_name"],[1,"mid_content_cnt"],["class","vs",4,"ngIf"],["class","scores",4,"ngIf"],[1,"your_prediction"],[1,"prize"],["src","../../../../../assets/images/predictionprize.svg","alt","prize",1,"prize_img"],[1,"prize_gray"],[1,"view_prize",3,"click"],[1,"vs"],[1,"scores"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0),n.YNc(1,Z,4,0,"div",1),n.YNc(2,A,2,1,"div",2),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngIf",0==(null==o.pendindPrdtns?null:o.pendindPrdtns.length)),n.xp6(1),n.Q6J("ngIf",(null==o.pendindPrdtns?null:o.pendindPrdtns.length)>0))},directives:[s.O5,s.sg,P.Hw],pipes:[s.uU,f.Bo],styles:["#container[_ngcontent-%COMP%]{margin-top:30px}#container[_ngcontent-%COMP%]   #empty_list_con[_ngcontent-%COMP%]{margin:auto;text-align:center}#container[_ngcontent-%COMP%]   #empty_list_con[_ngcontent-%COMP%]   .empty_img[_ngcontent-%COMP%]{width:100px;height:auto}#container[_ngcontent-%COMP%]   #empty_list_con[_ngcontent-%COMP%]   .empty_title[_ngcontent-%COMP%]{color:var(--themcolor_reverse);font-weight:700;font-size:14px;margin-top:11px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]{background-color:#fff;width:100%;border-radius:5px;margin-bottom:13px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;text-align:center;align-content:center;background-color:#ddd;font-family:Raleway,sans-serif;border-top-left-radius:5px;border-top-right-radius:5px;padding:8px 8px 30px;position:relative}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .date_time[_ngcontent-%COMP%]{color:#525252;font-weight:400;font-size:13px;margin:0}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .bet_id[_ngcontent-%COMP%]{color:#000;font-weight:700;font-size:11px;position:absolute;left:0;right:0;bottom:-8px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .bet_id[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#5e5a5a;font-weight:400;font-size:13px;margin-right:3px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .bet_status[_ngcontent-%COMP%]{color:#000;font-weight:700;font-size:12px;margin:0}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .top_cnt[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;margin-top:8px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .top_cnt[_ngcontent-%COMP%]   .match_type[_ngcontent-%COMP%]{font-size:14px;font-family:var(--opensans_font);font-weight:400;color:#000;margin:0 20px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .top_cnt[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{font-size:14px;color:#000;display:flex;text-align:center;border-radius:3px;justify-content:center;margin:0;padding:0;line-height:100%;height:17px;width:17px;cursor:pointer}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:8px;padding:5px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]{text-align:center}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .flag_background[_ngcontent-%COMP%]{width:65px;height:65px;padding:5px;background-color:#f5f5f5;border-radius:50%;display:flex;text-align:center;justify-content:center;align-items:center}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .flag_background[_ngcontent-%COMP%]   .team_flag_img[_ngcontent-%COMP%]{width:50px;height:32px;margin:auto}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .team_name[_ngcontent-%COMP%]{color:#000;font-family:Raleway,sans-serif;font-weight:700;font-size:17px;margin:8px 0 0}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .mid_content_cnt[_ngcontent-%COMP%]{background-color:#000;text-align:center;border-radius:3px;height:50px;width:50px;margin-top:17px;display:flex;flex-direction:column;align-items:center;justify-content:center}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .mid_content_cnt[_ngcontent-%COMP%]   .vs[_ngcontent-%COMP%]{color:#fff;font-family:Raleway,sans-serif;font-weight:600;font-size:19px;margin:0}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .mid_content_cnt[_ngcontent-%COMP%]   .time_played[_ngcontent-%COMP%]{color:#d5d5d5;font-family:Raleway,sans-serif;font-weight:400;font-size:11px;margin:0}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .mid_content_cnt[_ngcontent-%COMP%]   .scores[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-weight:600;font-size:19px;color:#fff;margin:1px 0 0}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .your_prediction[_ngcontent-%COMP%]{color:#000;font-weight:700;font-size:13px;margin:23px 0 0;text-align:center}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .your_prediction[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#5e5a5a;font-weight:400}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .prize[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:row;align-items:center;align-content:center;align-self:center;margin:5px auto auto;padding-bottom:15px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .prize[_ngcontent-%COMP%]   .prize_img[_ngcontent-%COMP%]{width:18px;height:18px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .prize[_ngcontent-%COMP%]   .prize_gray[_ngcontent-%COMP%]{color:#5e5a5a;font-family:Raleway,sans-serif;font-weight:400;font-size:13px;margin-right:5px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .view_prize[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-weight:600;font-size:13px;color:#69b1ff}"]}),e})();function U(e,i){1&e&&(n.TgZ(0,"div",3),n._UZ(1,"img",4),n.TgZ(2,"p",5),n._uU(3,"You have not won any prize"),n.qZA()())}function q(e,i){1&e&&(n.TgZ(0,"p",31),n._uU(1,"Vs"),n.qZA())}function S(e,i){if(1&e&&(n.TgZ(0,"p",32),n._uU(1),n.qZA()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.AsE("",t.Fixture.team_home_score," : ",t.Fixture.team_away_score,"")}}function F(e,i){if(1&e){const t=n.EpF();n.TgZ(0,"div",7)(1,"div",8)(2,"p",9),n._uU(3),n.ALo(4,"date"),n.qZA(),n.TgZ(5,"p",10),n._uU(6),n.qZA(),n.TgZ(7,"p",11)(8,"span"),n._uU(9,"ID:"),n.qZA(),n._uU(10),n.qZA()(),n.TgZ(11,"div",12)(12,"p",13),n._uU(13),n.qZA(),n.TgZ(14,"mat-icon",14),n.NdJ("click",function(){const c=n.CHM(t).$implicit;return n.oxw(2).showMatchInfo(c.Fixture)}),n._uU(15,"info"),n.qZA()(),n.TgZ(16,"div",15)(17,"div",16)(18,"div",17),n._UZ(19,"img",18),n.qZA(),n.TgZ(20,"p",19),n._uU(21),n.ALo(22,"truncate"),n.qZA()(),n.TgZ(23,"div",20),n.YNc(24,q,2,0,"p",21),n.YNc(25,S,2,2,"p",22),n.qZA(),n.TgZ(26,"div",16)(27,"div",17),n._UZ(28,"img",18),n.qZA(),n.TgZ(29,"p",19),n._uU(30),n.ALo(31,"truncate"),n.qZA()()(),n.TgZ(32,"p",23)(33,"span"),n._uU(34,"Your Prediction: "),n.qZA(),n._uU(35),n.qZA(),n.TgZ(36,"p",24),n._UZ(37,"img",25),n.TgZ(38,"span",26),n._uU(39,"Prize: "),n.qZA(),n.TgZ(40,"a",27),n.NdJ("click",function(){const c=n.CHM(t).$implicit;return n.oxw(2).getFixturePrice(null==c?null:c.FixtureId)}),n._uU(41,"Click here to see the prize"),n.qZA()(),n.TgZ(42,"p",28)(43,"span",29),n._uU(44,"How to claim the prize? "),n.qZA(),n.TgZ(45,"a",30),n.NdJ("click",function(){const c=n.CHM(t).$implicit;return n.oxw(2).getFixturePrice(null==c?null:c.FixtureId)}),n._uU(46,"Click here"),n.qZA()()()}if(2&e){const t=i.$implicit;n.xp6(3),n.Oqu(n.xi3(4,12,t.CreatedAt,"dd/LLL/y h:mm a")),n.xp6(3),n.Oqu(t.PredictionStatus),n.xp6(4),n.Oqu(t.Id),n.xp6(3),n.Oqu(t.Fixture.league_round),n.xp6(6),n.s9C("src",null!=t.team_home_logo?t.team_home_logo:t.Fixture.team_home_logo,n.LSH),n.xp6(2),n.Oqu(n.Dn7(22,15,null==t?null:t.team_home_name,8,"...")),n.xp6(3),n.Q6J("ngIf","NS"==t.Fixture.fixture_status_short),n.xp6(1),n.Q6J("ngIf","NS"!=t.Fixture.fixture_status_short),n.xp6(3),n.s9C("src",null!=t.team_away_logo?t.team_away_logo:t.Fixture.team_away_logo,n.LSH),n.xp6(2),n.Oqu(n.Dn7(31,19,null==t?null:t.team_away_name,8,"...")),n.xp6(5),n.AsE("",t.team_home_score," : ",t.team_away_score,"")}}function L(e,i){if(1&e&&(n.TgZ(0,"div"),n.YNc(1,F,47,23,"div",6),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.winPrdtns)}}let M=(()=>{class e{constructor(t,o,a){this.fixtureService=t,this.dialog=o,this.snackBarOpenerService=a,this.subscription=[],this.winPrdtns=[]}ngOnInit(){this.subscribeToWinPredictions()}ngOnDestroy(){this.subscription.length>0&&(console.log("unsubscribing"),this.subscription.forEach(t=>{t.unsubscribe()}))}subscribeToWinPredictions(){this.subscription.push(this.fixtureService.winPrdctnsObservable.subscribe({next:t=>{this.winPrdtns=t,console.log("win subscriptions",this.winPrdtns)},error:t=>{console.log(`inside <WinPredictionsComponent.subscribeToWinPredictions()> ${"statuscode:"+t.status}  ${"message:"+t.message}`),t.message==g.L.timeoutMsg&&this.snackBarOpenerService.openToastSnackBar("Request time out",!0,4),0==t.status&&this.snackBarOpenerService.openToastSnackBar("Internet connection error",!0,4)},complete:()=>{}}))}showMatchInfo(t){this.dialog.open(l.a,{disableClose:!1,width:"100px",minWidth:"90%",data:{matchDetails:t}})}getFixturePrice(t){this.fixtureService.fetchFixturePrize(t).subscribe({next:o=>{console.log("fixture prize in UpcomingMatchesComponent",o),null!=o?this.dialog.open(p.N,{disableClose:!1,data:{prize:o,isShowHowToRedeem:!0}}):this.snackBarOpenerService.openToastSnackBar("Not available for preview",!0,4)},error:o=>{console.log(`inside <UpcomingMatchesComponent.getFixturePrice()> ${"statuscode:"+o.status}  ${"message:"+o.message}`),o.message==g.L.timeoutMsg&&this.snackBarOpenerService.openToastSnackBar("Request time out",!0,4),0==o.status&&this.snackBarOpenerService.openToastSnackBar("Internet connection error",!0,4)},complete:()=>{}})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(d.j),n.Y36(m.uw),n.Y36(u.N))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-win-predictions"]],decls:3,vars:2,consts:[["id","container"],["id","empty_list_con",4,"ngIf"],[4,"ngIf"],["id","empty_list_con"],["src","assets/images/recycle-bin.png","alt","Flag",1,"empty_img"],[1,"empty_title"],["class","prediction_cnt",4,"ngFor","ngForOf"],[1,"prediction_cnt"],[1,"heading"],[1,"date_time"],[1,"bet_status"],[1,"bet_id"],[1,"top_cnt"],[1,"match_type"],[1,"info-icon",3,"click"],[1,"teams_cnt"],[1,"team"],[1,"flag_background"],["alt","Flag",1,"team_flag_img",3,"src"],[1,"team_name"],[1,"mid_content_cnt"],["class","vs",4,"ngIf"],["class","scores",4,"ngIf"],[1,"your_prediction"],[1,"prize"],["src","../../../../../assets/images/predictionprize.svg","alt","prize",1,"prize_img"],[1,"prize_gray"],[1,"view_prize",3,"click"],[1,"claim_prize"],[1,"how"],[1,"click_here",3,"click"],[1,"vs"],[1,"scores"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0),n.YNc(1,U,4,0,"div",1),n.YNc(2,L,2,1,"div",2),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngIf",0==(null==o.winPrdtns?null:o.winPrdtns.length)),n.xp6(1),n.Q6J("ngIf",(null==o.winPrdtns?null:o.winPrdtns.length)>0))},directives:[s.O5,s.sg,P.Hw],pipes:[s.uU,f.Bo],styles:["#container[_ngcontent-%COMP%]{margin-top:30px}#container[_ngcontent-%COMP%]   #empty_list_con[_ngcontent-%COMP%]{margin:auto;text-align:center}#container[_ngcontent-%COMP%]   #empty_list_con[_ngcontent-%COMP%]   .empty_img[_ngcontent-%COMP%]{width:100px;height:auto}#container[_ngcontent-%COMP%]   #empty_list_con[_ngcontent-%COMP%]   .empty_title[_ngcontent-%COMP%]{color:var(--themcolor_reverse);font-weight:700;font-size:14px;margin-top:11px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]{background-color:#fff;width:100%;border-radius:5px;margin-bottom:13px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;text-align:center;align-content:center;background-color:#ddd;font-family:Raleway,sans-serif;border-top-left-radius:5px;border-top-right-radius:5px;padding:8px 8px 30px;position:relative}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .date_time[_ngcontent-%COMP%]{color:#525252;font-weight:400;font-size:13px;margin:0}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .bet_id[_ngcontent-%COMP%]{color:#000;font-weight:700;font-size:11px;position:absolute;left:0;right:0;bottom:-8px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .bet_id[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#5e5a5a;font-weight:400;font-size:13px;margin-right:3px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .bet_status[_ngcontent-%COMP%]{color:#03832e;font-weight:700;font-size:12px;margin:0}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .top_cnt[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;margin-top:8px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .top_cnt[_ngcontent-%COMP%]   .match_type[_ngcontent-%COMP%]{font-size:14px;font-family:var(--opensans_font);font-weight:400;color:#000;margin:0 20px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .top_cnt[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{font-size:14px;color:#000;display:flex;text-align:center;border-radius:3px;justify-content:center;margin:0;padding:0;line-height:100%;height:17px;width:17px;cursor:pointer}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:8px;padding:5px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]{text-align:center}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .flag_background[_ngcontent-%COMP%]{width:65px;height:65px;padding:5px;background-color:#f5f5f5;border-radius:50%;display:flex;text-align:center;justify-content:center;align-items:center}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .flag_background[_ngcontent-%COMP%]   .team_flag_img[_ngcontent-%COMP%]{width:50px;height:32px;margin:auto}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .team_name[_ngcontent-%COMP%]{color:#000;font-family:Raleway,sans-serif;font-weight:700;font-size:17px;margin:8px 0 0}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .mid_content_cnt[_ngcontent-%COMP%]{background-color:#000;text-align:center;border-radius:3px;height:50px;width:50px;margin-top:17px;display:flex;flex-direction:column;align-items:center;justify-content:center}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .mid_content_cnt[_ngcontent-%COMP%]   .vs[_ngcontent-%COMP%]{color:#fff;font-family:Raleway,sans-serif;font-weight:600;font-size:19px;margin:0}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .mid_content_cnt[_ngcontent-%COMP%]   .time_played[_ngcontent-%COMP%]{color:#d5d5d5;font-family:Raleway,sans-serif;font-weight:400;font-size:11px;margin:0}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .mid_content_cnt[_ngcontent-%COMP%]   .scores[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-weight:600;font-size:19px;color:#fff;margin:1px 0 0}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .your_prediction[_ngcontent-%COMP%]{color:#000;font-weight:700;font-size:13px;margin:23px 0 0;text-align:center}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .your_prediction[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#5e5a5a;font-weight:400}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .prize[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:row;align-items:center;align-content:center;align-self:center;margin:9px auto auto;padding-bottom:10px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .prize[_ngcontent-%COMP%]   .prize_img[_ngcontent-%COMP%]{width:18px;height:18px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .prize[_ngcontent-%COMP%]   .prize_gray[_ngcontent-%COMP%]{color:#5e5a5a;font-family:Raleway,sans-serif;font-weight:400;font-size:13px;margin-right:5px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .prize[_ngcontent-%COMP%]   .view_prize[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-weight:600;font-size:13px;color:#69b1ff}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .claim_prize[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:row;align-items:center;align-content:center;align-self:center;margin:auto;padding-bottom:15px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .claim_prize[_ngcontent-%COMP%]   .how[_ngcontent-%COMP%]{color:#000;font-family:Raleway,sans-serif;font-weight:700;font-size:13px;margin-right:5px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .claim_prize[_ngcontent-%COMP%]   .click_here[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-weight:600;color:#69b1ff}"]}),e})();function I(e,i){1&e&&(n.TgZ(0,"div",3),n._UZ(1,"img",4),n.TgZ(2,"p",5),n._uU(3,"You have not made a loss on any of your predictions"),n.qZA()())}function B(e,i){1&e&&(n.TgZ(0,"p",28),n._uU(1,"Vs"),n.qZA())}function N(e,i){if(1&e&&(n.TgZ(0,"p",29),n._uU(1),n.qZA()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.AsE("",t.Fixture.team_home_score," : ",t.Fixture.team_away_score,"")}}function R(e,i){if(1&e){const t=n.EpF();n.TgZ(0,"div",7)(1,"div",8)(2,"p",9),n._uU(3),n.ALo(4,"date"),n.qZA(),n.TgZ(5,"p",10),n._uU(6),n.qZA(),n.TgZ(7,"p",11)(8,"span"),n._uU(9,"ID:"),n.qZA(),n._uU(10),n.qZA()(),n.TgZ(11,"div",12)(12,"p",13),n._uU(13),n.qZA(),n.TgZ(14,"mat-icon",14),n.NdJ("click",function(){const c=n.CHM(t).$implicit;return n.oxw(2).showMatchInfo(c.Fixture)}),n._uU(15,"info"),n.qZA()(),n.TgZ(16,"div",15)(17,"div",16)(18,"div",17),n._UZ(19,"img",18),n.qZA(),n.TgZ(20,"p",19),n._uU(21),n.ALo(22,"truncate"),n.qZA()(),n.TgZ(23,"div",20),n.YNc(24,B,2,0,"p",21),n.YNc(25,N,2,2,"p",22),n.qZA(),n.TgZ(26,"div",16)(27,"div",17),n._UZ(28,"img",18),n.qZA(),n.TgZ(29,"p",19),n._uU(30),n.ALo(31,"truncate"),n.qZA()()(),n.TgZ(32,"p",23)(33,"span"),n._uU(34,"Your Prediction: "),n.qZA(),n._uU(35),n.qZA(),n.TgZ(36,"p",24),n._UZ(37,"img",25),n.TgZ(38,"span",26),n._uU(39,"Prize: "),n.qZA(),n.TgZ(40,"a",27),n.NdJ("click",function(){const c=n.CHM(t).$implicit;return n.oxw(2).getFixturePrice(null==c?null:c.FixtureId)}),n._uU(41,"Click here to see the prize"),n.qZA()()()}if(2&e){const t=i.$implicit;n.xp6(3),n.Oqu(n.xi3(4,12,t.CreatedAt,"dd/LLL/y h:mm a")),n.xp6(3),n.Oqu(t.PredictionStatus),n.xp6(4),n.Oqu(t.Id),n.xp6(3),n.Oqu(t.Fixture.league_round),n.xp6(6),n.s9C("src",null!=t.team_home_logo?t.team_home_logo:t.Fixture.team_home_logo,n.LSH),n.xp6(2),n.Oqu(n.Dn7(22,15,null==t?null:t.team_home_name,8,"...")),n.xp6(3),n.Q6J("ngIf","NS"==t.Fixture.fixture_status_short),n.xp6(1),n.Q6J("ngIf","NS"!=t.Fixture.fixture_status_short),n.xp6(3),n.s9C("src",null!=t.team_away_logo?t.team_away_logo:t.Fixture.team_away_logo,n.LSH),n.xp6(2),n.Oqu(n.Dn7(31,19,null==t?null:t.team_away_name,8,"...")),n.xp6(5),n.AsE("",t.team_home_score," : ",t.team_away_score,"")}}function Y(e,i){if(1&e&&(n.TgZ(0,"div"),n.YNc(1,R,42,23,"div",6),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.lossPrdtns)}}let h=(()=>{class e{constructor(t,o,a){this.fixtureService=t,this.snackBarOpenerService=o,this.dialog=a,this.subscription=[],this.lossPrdtns=[]}ngOnInit(){this.subscribeToLossPredictions()}ngOnDestroy(){this.subscription.length>0&&(console.log("unsubscribing"),this.subscription.forEach(t=>{t.unsubscribe()}))}subscribeToLossPredictions(){this.subscription.push(this.fixtureService.lossPrdctnsObservable.subscribe({next:t=>{this.lossPrdtns=t,console.log("win subscriptions",this.lossPrdtns)},error:t=>{console.log(`inside <LossPredictionsComponent.subscribeToLossPredictions()> ${"statuscode:"+t.status}  ${"message:"+t.message}`),t.message==g.L.timeoutMsg&&this.snackBarOpenerService.openToastSnackBar("Request time out",!0,4),0==t.status&&this.snackBarOpenerService.openToastSnackBar("Internet connection error",!0,4)},complete:()=>{}}))}showMatchInfo(t){this.dialog.open(l.a,{disableClose:!1,width:"100px",minWidth:"90%",data:{matchDetails:t}})}getFixturePrice(t){this.fixtureService.fetchFixturePrize(t).subscribe({next:o=>{console.log("fixture prize in UpcomingMatchesComponent",o),null!=o?this.dialog.open(p.N,{disableClose:!1,data:{prize:o,isShowHowToRedeem:!1}}):this.snackBarOpenerService.openToastSnackBar("Not available for preview",!0,4)},error:o=>{console.log(`inside <UpcomingMatchesComponent.getFixturePrice()> ${"statuscode:"+o.status}  ${"message:"+o.message}`),o.message==g.L.timeoutMsg&&this.snackBarOpenerService.openToastSnackBar("Request time out",!0,4),0==o.status&&this.snackBarOpenerService.openToastSnackBar("Internet connection error",!0,4)},complete:()=>{}})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(d.j),n.Y36(u.N),n.Y36(m.uw))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-loss-predictions"]],decls:3,vars:2,consts:[["id","container"],["id","empty_list_con",4,"ngIf"],[4,"ngIf"],["id","empty_list_con"],["src","assets/images/recycle-bin.png","alt","Flag",1,"empty_img"],[1,"empty_title"],["class","prediction_cnt",4,"ngFor","ngForOf"],[1,"prediction_cnt"],[1,"heading"],[1,"date_time"],[1,"bet_status"],[1,"bet_id"],[1,"top_cnt"],[1,"match_type"],[1,"info-icon",3,"click"],[1,"teams_cnt"],[1,"team"],[1,"flag_background"],["alt","Flag",1,"team_flag_img",3,"src"],[1,"team_name"],[1,"mid_content_cnt"],["class","vs",4,"ngIf"],["class","scores",4,"ngIf"],[1,"your_prediction"],[1,"prize"],["src","../../../../../assets/images/predictionprize.svg","alt","prize",1,"prize_img"],[1,"prize_gray"],[1,"view_prize",3,"click"],[1,"vs"],[1,"scores"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0),n.YNc(1,I,4,0,"div",1),n.YNc(2,Y,2,1,"div",2),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngIf",0==(null==o.lossPrdtns?null:o.lossPrdtns.length)),n.xp6(1),n.Q6J("ngIf",(null==o.lossPrdtns?null:o.lossPrdtns.length)>0))},directives:[s.O5,s.sg,P.Hw],pipes:[s.uU,f.Bo],styles:["#container[_ngcontent-%COMP%]{margin-top:30px}#container[_ngcontent-%COMP%]   #empty_list_con[_ngcontent-%COMP%]{margin:auto;text-align:center}#container[_ngcontent-%COMP%]   #empty_list_con[_ngcontent-%COMP%]   .empty_img[_ngcontent-%COMP%]{width:100px;height:auto}#container[_ngcontent-%COMP%]   #empty_list_con[_ngcontent-%COMP%]   .empty_title[_ngcontent-%COMP%]{color:var(--themcolor_reverse);font-weight:700;font-size:14px;margin-top:11px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]{background-color:#fff;width:100%;border-radius:5px;margin-bottom:13px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;text-align:center;align-content:center;background-color:#ddd;font-family:Raleway,sans-serif;border-top-left-radius:5px;border-top-right-radius:5px;padding:8px 8px 30px;position:relative}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .date_time[_ngcontent-%COMP%]{color:#525252;font-weight:400;font-size:13px;margin:0}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .bet_id[_ngcontent-%COMP%]{color:#000;font-weight:700;font-size:11px;position:absolute;left:0;right:0;bottom:-8px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .bet_id[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#5e5a5a;font-weight:400;font-size:13px;margin-right:3px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .bet_status[_ngcontent-%COMP%]{color:red;font-weight:700;font-size:12px;margin:0}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .top_cnt[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;margin-top:8px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .top_cnt[_ngcontent-%COMP%]   .match_type[_ngcontent-%COMP%]{font-size:14px;font-family:var(--opensans_font);font-weight:400;color:#000;margin:0 20px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .top_cnt[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{font-size:14px;color:#000;display:flex;text-align:center;border-radius:3px;justify-content:center;margin:0;padding:0;line-height:100%;height:17px;width:17px;cursor:pointer}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:8px;padding:5px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]{text-align:center}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .flag_background[_ngcontent-%COMP%]{width:65px;height:65px;padding:5px;background-color:#f5f5f5;border-radius:50%;display:flex;text-align:center;justify-content:center;align-items:center}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .flag_background[_ngcontent-%COMP%]   .team_flag_img[_ngcontent-%COMP%]{width:50px;height:32px;margin:auto}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .team_name[_ngcontent-%COMP%]{color:#000;font-family:Raleway,sans-serif;font-weight:700;font-size:17px;margin:8px 0 0}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .mid_content_cnt[_ngcontent-%COMP%]{background-color:#000;text-align:center;border-radius:3px;height:50px;width:50px;margin-top:17px;display:flex;flex-direction:column;align-items:center;justify-content:center}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .mid_content_cnt[_ngcontent-%COMP%]   .vs[_ngcontent-%COMP%]{color:#fff;font-family:Raleway,sans-serif;font-weight:600;font-size:19px;margin:0}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .mid_content_cnt[_ngcontent-%COMP%]   .time_played[_ngcontent-%COMP%]{color:#d5d5d5;font-family:Raleway,sans-serif;font-weight:400;font-size:11px;margin:0}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .teams_cnt[_ngcontent-%COMP%]   .mid_content_cnt[_ngcontent-%COMP%]   .scores[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-weight:600;font-size:19px;color:#fff;margin:1px 0 0}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .your_prediction[_ngcontent-%COMP%]{color:#000;font-weight:700;font-size:13px;margin:23px 0 0;text-align:center}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .your_prediction[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#5e5a5a;font-weight:400}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .prize[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:row;align-items:center;align-content:center;align-self:center;margin:5px auto auto;padding-bottom:15px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .prize[_ngcontent-%COMP%]   .prize_img[_ngcontent-%COMP%]{width:18px;height:18px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .prize[_ngcontent-%COMP%]   .prize_gray[_ngcontent-%COMP%]{color:#5e5a5a;font-family:Raleway,sans-serif;font-weight:400;font-size:13px;margin-right:5px}#container[_ngcontent-%COMP%]   .prediction_cnt[_ngcontent-%COMP%]   .view_prize[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-weight:600;font-size:13px;color:#69b1ff}"]}),e})(),j=(()=>{class e{constructor(t){this.location=t}ngOnInit(){}ngAfterViewInit(){this.scrollFunction()}back(){this.location.back()}scrollFunction(){window.onscroll=function(){const t=document.querySelector(".title");document.body.scrollTop>80||document.documentElement.scrollTop>80?t.classList.add("active"):t.classList.length>0&&t.classList.remove("active")}}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(s.Ye))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-predictions-layout"]],decls:17,vars:0,consts:[["id","predictions_cnt"],["id","prediction_backg_image"],["id","back_color_cover"],["id","contents_cnt"],["id","backtitlenav"],["mat-flat-button","","id","backbtn",3,"click"],[1,"material-icons","md-36","backicon"],[1,"title"],["mat-stretch-tabs","false","mat-align-tabs","center"],["label","Pending"],["label","Win"],["label","Loss"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"div",2),n.qZA(),n.TgZ(3,"div",3)(4,"div",4)(5,"button",5),n.NdJ("click",function(){return o.back()}),n.TgZ(6,"span",6),n._uU(7,"arrow_back_ios"),n.qZA()(),n.TgZ(8,"p",7),n._uU(9,"Your Predictions"),n.qZA()(),n.TgZ(10,"mat-tab-group",8)(11,"mat-tab",9),n._UZ(12,"app-pending-predictions"),n.qZA(),n.TgZ(13,"mat-tab",10),n._UZ(14,"app-win-predictions"),n.qZA(),n.TgZ(15,"mat-tab",11),n._UZ(16,"app-loss-predictions"),n.qZA()()()())},directives:[y.lW,O.SP,O.uX,x,M,h],styles:["#predictions_cnt[_ngcontent-%COMP%]{width:100%;background-color:var(--prediction_layout_back);height:100%}#predictions_cnt[_ngcontent-%COMP%]   #prediction_backg_image[_ngcontent-%COMP%]{background-image:url(predictionback.cbf825529b259d39.svg);width:100%;height:37vh;margin-top:-40px}#predictions_cnt[_ngcontent-%COMP%]   #prediction_backg_image[_ngcontent-%COMP%]   #back_color_cover[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#000000d4;opacity:.6}#predictions_cnt[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]{position:relative;width:90%;margin-top:-40;margin:auto;left:0px;right:0px;z-index:20;margin-top:-25vh}#predictions_cnt[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #backtitlenav[_ngcontent-%COMP%]{display:flex;align-items:center;top:-5px;z-index:50;position:sticky;transition:all 1s ease;border-radius:10px;margin-bottom:40px}#predictions_cnt[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #backtitlenav[_ngcontent-%COMP%]   #backbtn[_ngcontent-%COMP%]{border-radius:9px;height:30px;width:33px;display:flex;justify-content:center;align-items:center;min-width:30px;padding:0 0 0 7px;background-color:#fff}#predictions_cnt[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #backtitlenav[_ngcontent-%COMP%]   .backicon[_ngcontent-%COMP%]{margin-bottom:0;display:flex;justify-content:center;align-items:center;font-size:14px;cursor:pointer;color:#000}#predictions_cnt[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #backtitlenav[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff;font-size:20px;font-weight:500;margin:auto}  .mat-tab-labels{min-width:auto!important}  .mat-tab-labels div{border:none}  .mat-tab-labels div.mat-tab-label-active{border-bottom:2px solid white}  .mat-tab-labels div.mat-tab-label-active .mat-tab-label-content{border:none}  .mat-tab-labels div .mat-tab-label-content{color:#fff;border:none}  .mat-tab-group.mat-primary .mat-ink-bar{background-color:transparent}.active[_ngcontent-%COMP%]{background-color:#fff;color:#000!important;padding:10px 6px 6px;border-bottom-left-radius:10px;border-bottom-right-radius:10px}"]}),e})();var b=r(1083);const $=[{path:"",pathMatch:"full",redirectTo:"layout"},{path:"layout",component:j},{path:"pending",component:x},{path:"win",component:M},{path:"loss",component:h}];let W=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[b.Bz.forChild($)],b.Bz]}),e})(),J=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[s.ez,W,v.m]]}),e})()}}]);