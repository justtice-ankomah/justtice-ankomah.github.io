"use strict";(self.webpackChunkHitMakerApp=self.webpackChunkHitMakerApp||[]).push([[592],{4717:(m,s,o)=>{o.d(s,{N:()=>_});var i=o(8966),t=o(5e3),g=o(4914),p=o(9808);function c(e,l){if(1&e&&(t.TgZ(0,"div")(1,"p",5),t._uU(2,"HOW TO REDEEM THE PRIZE:"),t.qZA(),t.TgZ(3,"P",6),t._uU(4),t.qZA()()),2&e){const a=t.oxw();t.xp6(4),t.Oqu(null==a.fixturePrize?null:a.fixturePrize.HowToRedeem)}}let _=(()=>{class e{constructor(a,n,r){this.data=a,this.fixtureService=n,this.dialog=r}ngOnInit(){this.fixturePrize=this.data.prize,this.isShowHowToRedeem=this.data.isShowHowToRedeem,console.log("fixture prize in FixturePrizeDialogComponent",this.fixturePrize)}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(i.WI),t.Y36(g.j),t.Y36(i.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-fixture-prize-dialog"]],decls:7,vars:3,consts:[["id","container"],["src","../../../../../assets/images/gift.png","alt","gift prize",1,"gift_img"],[1,"prize_name"],[1,"prize_desc"],[4,"ngIf"],[1,"how_to_redeem"],[1,"redeem_desc"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"p",2),t._uU(3),t.qZA(),t.TgZ(4,"p",3),t._uU(5),t.qZA(),t.YNc(6,c,5,1,"div",4),t.qZA()),2&a&&(t.xp6(3),t.hij(" ",null==n.fixturePrize?null:n.fixturePrize.Name," "),t.xp6(2),t.hij(" ",null==n.fixturePrize?null:n.fixturePrize.Description," "),t.xp6(1),t.Q6J("ngIf",n.isShowHowToRedeem))},directives:[p.O5],styles:["#container[_ngcontent-%COMP%]{text-align:center}#container[_ngcontent-%COMP%]   .gift_img[_ngcontent-%COMP%]{width:80px;height:auto}#container[_ngcontent-%COMP%]   .prize_name[_ngcontent-%COMP%]{font-family:var(--opensans_font);font-weight:700;font-size:16px;margin-top:8px}#container[_ngcontent-%COMP%]   .prize_desc[_ngcontent-%COMP%]{font-family:var(--opensans_font);font-weight:400;font-size:13px;margin-top:2px}#container[_ngcontent-%COMP%]   .how_to_redeem[_ngcontent-%COMP%]{font-family:var(--opensans_font);font-weight:700;font-size:13px;margin-top:8px}#container[_ngcontent-%COMP%]   .redeem_desc[_ngcontent-%COMP%]{font-family:var(--opensans_font);font-weight:400;font-size:11px;margin-top:2px}"]}),e})()},1493:(m,s,o)=>{o.d(s,{a:()=>_});var i=o(8966),t=o(5e3),g=o(4914),p=o(8140),c=o(9808);let _=(()=>{class e{constructor(a,n,r){this.data=a,this.fixtureService=n,this.dialog=r}ngOnInit(){this.matchDetails=this.data.matchDetails}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(i.WI),t.Y36(g.j),t.Y36(i.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-match-info-dialog"]],decls:44,vars:23,consts:[["id","container"],[1,"title"],["id","desc_container"],[1,"cup"],[1,"teams_cnt"],[1,"team"],[1,"flag_background"],["alt","Flag",1,"team_flag_img",3,"src"],[1,"team_name"],[1,"mid_content_cnt"],[1,"vs"],["id","match_info"],["id","down_cnt"],[1,"top"],["src","../../../../../assets/images/calender.svg","alt","prize",1,"calender_img"],[1,"right"],[1,"info_title"],[1,"info_date"],["src","../../../../../assets/images/stadium.svg","alt","prize",1,"calender_img"]],template:function(a,n){if(1&a&&(t.TgZ(0,"div",0)(1,"p",1),t._uU(2,"Match Details"),t.qZA(),t.TgZ(3,"div",2)(4,"p",3),t._uU(5),t.ALo(6,"truncate"),t.TgZ(7,"span"),t._uU(8),t.qZA()(),t.TgZ(9,"div",4)(10,"div",5)(11,"div",6),t._UZ(12,"img",7),t.qZA(),t.TgZ(13,"p",8),t._uU(14),t.ALo(15,"truncate"),t.qZA()(),t.TgZ(16,"div",9)(17,"p",10),t._uU(18,"Vs"),t.qZA()(),t.TgZ(19,"div",5)(20,"div",6),t._UZ(21,"img",7),t.qZA(),t.TgZ(22,"p",8),t._uU(23),t.ALo(24,"truncate"),t.qZA()()(),t.TgZ(25,"p",11),t._uU(26,"Match Info"),t.qZA(),t.TgZ(27,"div",12)(28,"div",13),t._UZ(29,"img",14),t.TgZ(30,"div",15)(31,"p",16),t._uU(32),t.ALo(33,"date"),t.qZA(),t.TgZ(34,"p",17),t._uU(35,"Date"),t.qZA()()(),t._UZ(36,"hr"),t.TgZ(37,"div",13),t._UZ(38,"img",18),t.TgZ(39,"div",15)(40,"p",16),t._uU(41),t.qZA(),t.TgZ(42,"p",17),t._uU(43,"Venue"),t.qZA()()()()()()),2&a){let r;t.xp6(5),t.hij("",t.Dn7(6,8,null!==(r=null==n.matchDetails?null:n.matchDetails.LeagueName)&&void 0!==r?r:"League",15,"..."),": "),t.xp6(3),t.Oqu(null==n.matchDetails?null:n.matchDetails.league_round),t.xp6(4),t.s9C("src",null==n.matchDetails?null:n.matchDetails.team_home_logo,t.LSH),t.xp6(2),t.Oqu(t.Dn7(15,12,null==n.matchDetails?null:n.matchDetails.team_home_name,8,"...")),t.xp6(7),t.s9C("src",null==n.matchDetails?null:n.matchDetails.team_away_logo,t.LSH),t.xp6(2),t.Oqu(t.Dn7(24,16,null==n.matchDetails?null:n.matchDetails.team_away_name,8,"...")),t.xp6(9),t.Oqu(t.xi3(33,20,null==n.matchDetails?null:n.matchDetails.fixture_date,"medium")),t.xp6(9),t.Oqu(null==n.matchDetails?null:n.matchDetails.fixture_venue)}},pipes:[p.Bo,c.uU],styles:["#container[_ngcontent-%COMP%]{width:100%}p[_ngcontent-%COMP%]{margin:0}.title[_ngcontent-%COMP%]{font-family:var(--opensans_font);font-weight:700;font-size:17px;margin:0 0 18px;text-align:center}#desc_container[_ngcontent-%COMP%]{background-color:#f2f2f2;border:1px solid #C5C5C5;padding:5px;border-radius:3px}.cup[_ngcontent-%COMP%]{font-family:var(--opensans_font);font-weight:4000;font-size:12px;margin:0 0 3px;text-align:left;color:#000}.cup[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:3px;color:#6c6969}.predict[_ngcontent-%COMP%]{margin:25px 0 10px;text-align:center;font-size:15px}.teams_cnt[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:8px;padding:5px}.teams_cnt[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]{text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;width:40%;height:108px;overflow:hidden}.teams_cnt[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .flag_background[_ngcontent-%COMP%]{width:65px;height:65px;padding:5px;background-color:#fff;border-radius:60%;display:flex;text-align:center;justify-content:center;align-items:center}.teams_cnt[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .flag_background[_ngcontent-%COMP%]   .team_flag_img[_ngcontent-%COMP%]{height:40px;margin:auto;max-width:90%}.teams_cnt[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .team_name[_ngcontent-%COMP%]{color:#000;font-family:Raleway,sans-serif;font-weight:700;font-size:15px;margin:8px 0 0}.teams_cnt[_ngcontent-%COMP%]   .mid_content_cnt[_ngcontent-%COMP%]{background-color:#000;text-align:center;border-radius:50%;height:35px;width:35px;margin-top:17px;display:flex;flex-direction:column;align-items:center;justify-content:center}.teams_cnt[_ngcontent-%COMP%]   .mid_content_cnt[_ngcontent-%COMP%]   .vs[_ngcontent-%COMP%]{color:#fff;font-family:Raleway,sans-serif;font-weight:600;font-size:15px;margin:0}.teams_cnt[_ngcontent-%COMP%]   .mid_content_cnt[_ngcontent-%COMP%]   .time_played[_ngcontent-%COMP%]{color:#d5d5d5;font-family:Raleway,sans-serif;font-weight:400;font-size:11px;margin:0}.teams_cnt[_ngcontent-%COMP%]   .mid_content_cnt[_ngcontent-%COMP%]   .scores[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-weight:600;font-size:19px;color:#fff;margin:1px 0 0}#match_info[_ngcontent-%COMP%]{font-family:var(--opensans_font);font-weight:700;font-size:13px;margin:18px 0 4px;color:#000}#down_cnt[_ngcontent-%COMP%]{border:1px solid #C5C5C5;background-color:#fff;padding:8px;border-radius:3px}#down_cnt[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{display:flex;justify-content:start;flex-direction:row;align-items:flex-start}#down_cnt[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .calender_img[_ngcontent-%COMP%]{width:22px;height:22px;margin-right:8px}#down_cnt[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info_title[_ngcontent-%COMP%]{font-family:var(--opensans_font);font-weight:6000;font-size:14px;color:#000}#down_cnt[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info_date[_ngcontent-%COMP%]{font-size:12px;font-weight:400;color:#323131}"]}),e})()},5823:(m,s,o)=>{o.d(s,{e:()=>p});var i=o(5e3),t=o(9808),g=o(7423);let p=(()=>{class c{constructor(e){this.location=e}back(){this.location.back()}ngOnInit(){}ngAfterViewInit(){this.scrollFunction()}scrollFunction(){window.onscroll=function(){const e=document.querySelector(".title");document.body.scrollTop>80||document.documentElement.scrollTop>80?e.classList.add("nav-active"):e.classList.length>0&&e.classList.remove("nav-active")}}}return c.\u0275fac=function(e){return new(e||c)(i.Y36(t.Ye))},c.\u0275cmp=i.Xpm({type:c,selectors:[["app-backtitlenav"]],inputs:{title:"title"},decls:6,vars:1,consts:[["id","backtitlenav"],["mat-flat-button","","id","backbtn",3,"click"],[1,"material-icons","md-36","backicon"],[1,"title"]],template:function(e,l){1&e&&(i.TgZ(0,"div",0)(1,"button",1),i.NdJ("click",function(){return l.back()}),i.TgZ(2,"span",2),i._uU(3,"arrow_back_ios"),i.qZA()(),i.TgZ(4,"p",3),i._uU(5),i.qZA()()),2&e&&(i.xp6(5),i.Oqu(l.title))},directives:[g.lW],styles:["#backtitlenav[_ngcontent-%COMP%]{display:flex;align-items:center;top:-5px;z-index:50;position:sticky;transition:all 1s ease;border-radius:10px}#backtitlenav[_ngcontent-%COMP%]   #backbtn[_ngcontent-%COMP%]{border-radius:15px;height:40px;width:38px;display:flex;justify-content:center;align-items:center;min-width:45px;padding:0 0 0 7px;background-color:var(--backiconback_g)}#backtitlenav[_ngcontent-%COMP%]   .backicon[_ngcontent-%COMP%]{margin-bottom:0;display:flex;justify-content:center;align-items:center;font-size:17px;cursor:pointer}#backtitlenav[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:20px;font-weight:600;margin:auto}.nav-active[_ngcontent-%COMP%]{background-color:var(--backiconback_g);border-bottom-left-radius:10px;border-bottom-right-radius:10px;padding:11px 10px;font-size:16px!important}"]}),c})()}}]);