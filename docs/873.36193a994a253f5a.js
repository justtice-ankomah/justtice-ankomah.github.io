"use strict";(self.webpackChunkHitMakerApp=self.webpackChunkHitMakerApp||[]).push([[873],{2873:(ft,b,s)=>{s.r(b),s.d(b,{VoteModule:()=>dt});var p=s(9808),h=s(1083),a=s(3075),t=s(5e3),x=s(7399),v=s(3398),f=s(7423);function S(o,i){1&o&&(t.TgZ(0,"p",10),t._uU(1," Invalid Vote Number "),t.qZA())}function A(o,i){if(1&o&&(t.TgZ(0,"p",11),t._uU(1,"You will be charged "),t.TgZ(2,"b"),t._uU(3),t.qZA(),t._uU(4," for "),t.TgZ(5,"b"),t._uU(6),t.qZA(),t._uU(7," votes for "),t.TgZ(8,"span",12),t._uU(9),t.qZA()()),2&o){const e=t.oxw();t.xp6(3),t.hij("GHS ",null!=e.enteredVoteAmout?e.enteredVoteAmout:"0",""),t.xp6(3),t.Oqu(null!=e.enteredVoteNumber?e.enteredVoteNumber:"0"),t.xp6(3),t.Oqu(e.contestantToVoteFor.FirstName+" "+e.contestantToVoteFor.LastName)}}let Z=(()=>{class o{constructor(e,n,r){this._bottomSheetRef=e,this.voteService=n,this.fb=r,this.isPageLoading=!0,this.subscription=[],this.allVoteBundles=null,this.enteredVoteNumber=null,this.enteredVoteAmout=null,this.contestantToVoteFor=null}ngOnInit(){this.bundleform=this.fb.group({bundlenumber:[,a.kI.compose([a.kI.required,a.kI.pattern("^[0-9]*$"),this.numeric])]}),this.subscription.push(this.voteService.voteForContestant.subscribe({next:e=>{this.contestantToVoteFor=e,console.log(this.contestantToVoteFor)},error:e=>{console.log(e)}}))}ngOnDestroy(){this.subscription.length>0&&this.subscription.forEach(e=>{e.unsubscribe()})}colseBottomSheet(){this._bottomSheetRef.dismiss()}numeric(e){let n=e.value;return null===n||""===n?null:"0"==n.toString()?{invalidNumber:!0}:null}voteAmountCalculator(e){console.log(e);var n=e;console.log(n),n>0&&!n.toString().includes(".")?(this.enteredVoteAmout=Math.round(.8*n),this.enteredVoteNumber=n,this.voteService.setSelectedVoteBundleDetails({Id:null,Name:"isEnteredVote",VoteCount:this.enteredVoteNumber,VoteCurrencyAmount:this.enteredVoteAmout})):(this.enteredVoteAmout=null,this.enteredVoteNumber=null,console.log(n),this.bundleform.controls.bundlenumber.setErrors({invalidNumber:!0}),this.voteService.setSelectedVoteBundleDetails(null))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(x.oL),t.Y36(v.U),t.Y36(a.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-selectown-vote"]],decls:12,vars:4,consts:[["id","sheet"],["id","topbar",1,".dark"],[3,"formGroup"],["id","voteform"],[1,"votingfor"],["required","","type","number","name","amount","placeholder","ex: 100","formControlName","bundlenumber",3,"input"],["number",""],["style","color:red;",4,"ngIf"],["class","willcost",4,"ngIf"],["id","done_btn","mat-flat-button","","color","primary",3,"disabled","click"],[2,"color","red"],[1,"willcost"],[1,"artist_name"]],template:function(e,n){if(1&e){const r=t.EpF();t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"form",2)(3,"div",3)(4,"p",4),t._uU(5,"Enter the number of votes you would like to purchase"),t.qZA(),t.TgZ(6,"input",5,6),t.NdJ("input",function(){t.CHM(r);const c=t.MAs(7);return n.voteAmountCalculator(c.value)}),t.qZA(),t.YNc(8,S,2,0,"p",7),t.qZA(),t.YNc(9,A,10,3,"p",8),t.TgZ(10,"button",9),t.NdJ("click",function(){return n.colseBottomSheet()}),t._uU(11,"Done"),t.qZA()()()}2&e&&(t.xp6(2),t.Q6J("formGroup",n.bundleform),t.xp6(6),t.Q6J("ngIf",(null==n.bundleform.get("bundlenumber").errors?null:n.bundleform.get("bundlenumber").errors.pattern)||(null==n.bundleform.get("bundlenumber").errors?null:n.bundleform.get("bundlenumber").errors.invalidNumber)),t.xp6(1),t.Q6J("ngIf",null!=n.enteredVoteAmout),t.xp6(1),t.Q6J("disabled",n.bundleform.invalid))},directives:[a._Y,a.JL,a.sg,a.wV,a.Fj,a.Q7,a.JJ,a.u,p.O5,f.lW],styles:['@import"https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;600&display=swap";#sheet[_ngcontent-%COMP%]   #topbar[_ngcontent-%COMP%]{border-radius:30px;width:40vw;height:5px;background-color:#eef0f5;margin:1px auto 28px}#sheet[_ngcontent-%COMP%]   .votingfor[_ngcontent-%COMP%]{margin:34px 0 24px;font-size:19px;font-family:var(--opensans_font);font-weight:600}#sheet[_ngcontent-%COMP%]   #voteform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;outline:0;width:100%;border:0;border-radius:10px;margin:0 0 24px;padding:15px;box-sizing:border-box;font-size:14px}#sheet[_ngcontent-%COMP%]   #voteform[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, #sheet[_ngcontent-%COMP%]   #voteform[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}#sheet[_ngcontent-%COMP%]   #voteform[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}#sheet[_ngcontent-%COMP%]   .willcost[_ngcontent-%COMP%]{margin:0;font-size:16px;font-weight:400}#sheet[_ngcontent-%COMP%]   .artist_name[_ngcontent-%COMP%]{font-weight:500}#sheet[_ngcontent-%COMP%]   #done_btn[_ngcontent-%COMP%]{width:100%;font-size:18px;font-family:Raleway,sans-serif;font-weight:700;padding:4px;margin-top:105px;margin-bottom:10px}[_ngcontent-%COMP%]::placeholder{color:var(--lightdark_text_color);opacity:.7}@media (min-width: 1040px){#topbar[_ngcontent-%COMP%]{width:20%!important}}@media (min-width: 600px) and (max-width: 1040px){#topbar[_ngcontent-%COMP%]{width:20%!important}}']}),o})();var V=s(1042),m=s(8966);let k=(()=>{class o{constructor(e){this.data=e,this.result=null}ngOnInit(){console.log(this.data),this.result=this.data}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-vote-dialog"]],decls:8,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["align","end"],["mat-button","","mat-dialog-close",""]],template:function(e,n){1&e&&(t.TgZ(0,"h3",0)(1,"b"),t._uU(2),t.qZA()(),t.TgZ(3,"div",1),t._uU(4),t.qZA(),t.TgZ(5,"mat-dialog-actions",2)(6,"button",3),t._uU(7),t.qZA()()),2&e&&(t.xp6(2),t.Oqu(n.result.title),t.xp6(2),t.hij(" ",n.result.description,"\n"),t.xp6(3),t.Oqu(n.result.btnText))},directives:[m.uh,m.xY,m.H8,f.lW,m.ZT],styles:[""]}),o})();var P=s(4181),C=s(5944),T=s(5215),w=s(5823),d=s(7093),O=s(9506),y=s(9814),_=s(6162);function N(o,i){1&o&&(t.TgZ(0,"div",25),t._UZ(1,"ngx-shimmer-loading",26)(2,"ngx-shimmer-loading",26)(3,"ngx-shimmer-loading",26),t.qZA()),2&o&&(t.xp6(1),t.Q6J("shape","rect")("width","140px")("height","65px"),t.xp6(1),t.Q6J("shape","rect")("width","140px")("height","65px"),t.xp6(1),t.Q6J("shape","rect")("width","140px")("height","65px"))}function L(o,i){if(1&o&&(t.TgZ(0,"div",27),t._UZ(1,"mat-radio-button",28),t.TgZ(2,"div",29)(3,"h4",30),t._uU(4),t.qZA(),t.TgZ(5,"h6",31),t._uU(6),t.qZA()()()),2&o){const e=i.$implicit;t.xp6(1),t.s9C("value",e.Id),t.xp6(3),t.hij("",e.VoteCount," vote"),t.xp6(2),t.hij("GHC ",e.VoteCurrencyAmount," ")}}function B(o,i){1&o&&(t.TgZ(0,"p",32)(1,"span",33),t._uU(2,"error"),t.qZA(),t._uU(3," Invalid "),t.qZA())}function U(o,i){1&o&&(t.TgZ(0,"p",32)(1,"span",33),t._uU(2,"error"),t.qZA(),t._uU(3," Invalid (must begin from 0) "),t.qZA())}function I(o,i){1&o&&(t.TgZ(0,"p",32)(1,"span",33),t._uU(2,"error"),t.qZA(),t._uU(3,' don\'t include the "+" or the country-code '),t.qZA())}function F(o,i){1&o&&(t.TgZ(0,"p",32)(1,"span",33),t._uU(2,"error"),t.qZA(),t._uU(3," phone number must be 10 digit beginning from 0 "),t.qZA())}function q(o,i){1&o&&(t.TgZ(0,"p",32)(1,"span",33),t._uU(2,"error"),t.qZA(),t._uU(3," phone number must be 10 digit beginning from 0 "),t.qZA())}let J=(()=>{class o{constructor(e,n,r,l,c,u,g,ht){this.dialog=e,this._bottomSheet=n,this.router=r,this.voteService=l,this.appSetttingsService=c,this.userservice=u,this.snackBarOpenerService=g,this.fb=ht,this.isPageLoading=!0,this.subscription=[],this.allVoteBundles=null,this.appSettings=null,this.userSelectedVoteBundle=null,this.contestantToVoteFor=null}ngOnInit(){this.voteForm=this.fb.group({phnNumber:[,a.kI.compose([a.kI.required,a.kI.pattern("^[0-9]*$"),this.numeric])]}),this.subscription.push(this.appSetttingsService.appSettings.subscribe({next:e=>{null!=e&&(this.appSettings=e)},error:e=>{console.error(`inside <ContestantsPageComponent.ngOnInit()> ${"statuscode:"+e.status}  ${"message:"+e.message}`),"request_time_out"==e.message&&this.snackBarOpenerService.openToastSnackBar("Request time out",!0,4),0==e.status&&this.snackBarOpenerService.openToastSnackBar("Internet connection error",!0,4)},complete:()=>{console.log("landingPage_subject complete")}})),setTimeout(()=>{var e;console.log(this.appSettings),null!=this.appSettings&&1==(null===(e=this.appSettings)||void 0===e?void 0:e.AcceptVotes)?(console.log("Showing  Vote Bundles"),this.voteService.getAllVoteBundles()):(this.isPageLoading=!1,console.log("appSettings is null and voting is not being accepted"))},2e3),this.subscribeToAllVoteBundles(),this.subscription.push(this.voteService.selectedVoteBundleDetails.subscribe({next:e=>{this.userSelectedVoteBundle=e,console.log(this.userSelectedVoteBundle)},error:e=>{console.log(e)}})),this.subscription.push(this.voteService.voteForContestant.subscribe({next:e=>{this.contestantToVoteFor=e,console.log(this.contestantToVoteFor)},error:e=>{console.log(e)}}))}ngAfterViewInit(){}subscribeToAllVoteBundles(){this.subscription.push(this.voteService.allvoteBundles.subscribe({next:e=>{null!=e&&(this.allVoteBundles=e,console.log(this.allVoteBundles),console.log("emited"),this.isPageLoading=!1)},error:e=>{console.error(`inside <VotnowComponent.subscribeToAllVoteBundles()> ${"statuscode:"+e.status}  ${"message:"+e.message}`),"request_time_out"==e.message&&this.snackBarOpenerService.openToastSnackBar("Request time out",!0,4),0==e.status&&this.snackBarOpenerService.openToastSnackBar("Internet connection error",!0,4)},complete:()=>{this.isPageLoading=!1}}))}onNewBundleSelected(e){var n=e.value;console.log(n),this.allVoteBundles.forEach(r=>{r.Id==n?this.voteService.setSelectedVoteBundleDetails(r):console.log("bundle id not found")})}viewProfile(){null!=this.contestantToVoteFor&&(this.userservice.getUserByByThirdPartyId(this.contestantToVoteFor.ThirdPartySystemId),this.router.navigate(["/vote/vote_for_artist"]))}openBottomSheet(){this._bottomSheet.open(Z,{panelClass:"bottonsheet"})}numeric(e){let n=e.value;if(null===n||""===n)return null;if(n.toString().includes("+"))return{noContryCode:!0};{let r=n.toString();if(r.length<10)return{lessthan:!0};if(r.length>10)return{greaterthan:!0};if(!r.startsWith("0"))return{invalidNumber:!0};if(r.startsWith("233"))return{noCountryCodeAllowed:!0}}return null}openDialog(e,n,r){this.dialog.open(k,{data:{title:e,description:n,btnText:r}})}voteForArtist(){var e=(0,V.Z)();let n=this.formatPhoneNumber(this.voteForm.get("phnNumber").value),r={AmountPaid:this.userSelectedVoteBundle.VoteCurrencyAmount,VoteCount:this.userSelectedVoteBundle.VoteCount,FromUserId:null,PaymentTransactionId:e,PhoneNumber:n,ToLiveShowArtisteId:this.contestantToVoteFor.Id};console.log(r),this.voteService.voteForArtist(r).subscribe({next:l=>{if(1==l.success&&"ACCEPTED"==l.message){console.log(l),this.openDialog("Message","Your vote is being processed. A confirmation pop-up will be sent to you by MTN for your transaction to be confirmed.","Finish");let u="";var c=setInterval(()=>{this.voteService.checkPaymentStatus(e).subscribe({next:g=>{console.log(g),3==g.success?(u="INTERNAL PROCESSING ERROR,TRY AGAIN",this.snackBarOpenerService.openToastSnackBar(u,!0,4),clearInterval(c)):2==g.success?u="Vote is pending":1==g.success&&(u="Vote cast successful",this.snackBarOpenerService.openToastSnackBar(u,!0,4),clearInterval(c))}})},3e3);setTimeout(()=>{clearInterval(c),this.dialog.closeAll(),this.router.navigate(["/"])},3e5)}else 4==l.success&&this.openDialog("Something Went Wrong","Your vote couldn't be fulfilled, make sure there is enough funds in your account and try again","Ok")},error:l=>{console.error(`inside <VotnowComponent.subscribeToAllEvictedArtist()> ${"statuscode:"+l.status}  ${"message:"+l.message}`),"request_time_out"==l.message&&this.snackBarOpenerService.openToastSnackBar("request time out",!0,4),0==l.status&&this.snackBarOpenerService.openToastSnackBar("internet connection error",!0,4)},complete:()=>{this.isPageLoading=!1}})}ngOnDestroy(){this.voteService.setSelectedVoteBundleDetails(null),this.subscription.length>0&&(console.log("unsubscribing"),this.subscription.forEach(e=>{e.unsubscribe()}))}formatPhoneNumber(e){let n;return"0"==e.charAt(0)?n=e.replace("0","233"):console.log("Phone number does not begin from 0"),n}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.uw),t.Y36(x.ch),t.Y36(h.F0),t.Y36(v.U),t.Y36(P.C),t.Y36(C.K),t.Y36(T.N),t.Y36(a.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-votnow"]],decls:42,vars:13,consts:[["id","votenow_container"],["title","Vote now"],[1,"votingfor"],["id","artist_container"],["id","artist"],[1,"artistimage",3,"src"],[1,"artistname"],["mat-flat-button","",1,"viewprofile",3,"click"],["fxLayout","row","fxLayoutAlign","space-evenly center",4,"ngIf"],["aria-label","Select an option","id","readioGroup","required","true",3,"change"],["id","vote_bundle_container"],["class","single_vote_bundle","drag-scroll-item","",4,"ngFor","ngForOf"],["id","selectown_vote"],[1,"select_text"],[2,"margin","2px"],[1,"material-icons","md-36","forwardicon",3,"click"],[3,"formGroup"],["id","voteform"],["required","","type","text","placeholder","Phone number","formControlName","phnNumber","oninput","this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');"],["class","validate",4,"ngIf"],["type","text","disabled","","placeholder","Amount",3,"value"],["id","poweredby_cnt"],[1,"powered_by"],["src","assets/images/mtn_momo.png",1,"mtn_momo"],["id","paynow_btn","mat-flat-button","","color","primary",3,"disabled","click"],["fxLayout","row","fxLayoutAlign","space-evenly center"],["borderRadius","15",2,"margin-left","10px",3,"shape","width","height"],["drag-scroll-item","",1,"single_vote_bundle"],["color","primary",1,"back_circle",3,"value"],[1,"bundle_text"],[1,"vote_number"],[1,"vote_amount"],[1,"validate"],[1,"material-icons","md-36","backicon"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-backtitlenav",1),t.TgZ(2,"h3",2),t._uU(3,"You are voting for"),t.qZA(),t.TgZ(4,"div",3)(5,"div",4),t._UZ(6,"img",5),t.TgZ(7,"h4",6),t._uU(8),t.qZA()(),t.TgZ(9,"button",7),t.NdJ("click",function(){return n.viewProfile()}),t._uU(10,"View Profile"),t.qZA()(),t.TgZ(11,"h3",2),t._uU(12,"Select your vote bundle"),t.qZA(),t.YNc(13,N,4,9,"div",8),t.TgZ(14,"mat-radio-group",9),t.NdJ("change",function(l){return n.onNewBundleSelected(l)}),t.TgZ(15,"div",10)(16,"drag-scroll"),t.YNc(17,L,7,3,"div",11),t.qZA()()(),t.TgZ(18,"div",12)(19,"h3",13),t._uU(20,"Enter your own vote number"),t.qZA(),t.TgZ(21,"span",14),t._uU(22),t.qZA(),t.TgZ(23,"p",15),t.NdJ("click",function(){return n.openBottomSheet()}),t._uU(24,"arrow_forward_ios"),t.qZA()(),t.TgZ(25,"form",16)(26,"div",17)(27,"h3",2),t._uU(28,"Please provide the details below"),t.qZA(),t._UZ(29,"input",18),t.YNc(30,B,4,0,"p",19),t.YNc(31,U,4,0,"p",19),t.YNc(32,I,4,0,"p",19),t.YNc(33,F,4,0,"p",19),t.YNc(34,q,4,0,"p",19),t._UZ(35,"input",20),t.qZA()(),t.TgZ(36,"div",21)(37,"p",22),t._uU(38,"Powered by"),t.qZA(),t._UZ(39,"img",23),t.qZA(),t.TgZ(40,"button",24),t.NdJ("click",function(){return n.voteForArtist()}),t._uU(41,"Pay now"),t.qZA()()),2&e&&(t.xp6(6),t.s9C("src",null==(null==n.contestantToVoteFor?null:n.contestantToVoteFor.ProfileImageUri)||"string"==(null==n.contestantToVoteFor?null:n.contestantToVoteFor.ProfileImageUri)?"assets/images/profile.png":null==n.contestantToVoteFor?null:n.contestantToVoteFor.ProfileImageUri,t.LSH),t.xp6(2),t.Oqu(null!=n.contestantToVoteFor?n.contestantToVoteFor.FirstName+" "+n.contestantToVoteFor.LastName:"N/A"),t.xp6(5),t.Q6J("ngIf",n.isPageLoading),t.xp6(4),t.Q6J("ngForOf",n.allVoteBundles),t.xp6(5),t.Oqu(null!=n.userSelectedVoteBundle&&"isEnteredVote"==n.userSelectedVoteBundle.Name?n.userSelectedVoteBundle.VoteCount:""),t.xp6(3),t.Q6J("formGroup",n.voteForm),t.xp6(5),t.Q6J("ngIf",null==n.voteForm.get("phnNumber").errors?null:n.voteForm.get("phnNumber").errors.pattern),t.xp6(1),t.Q6J("ngIf",null==n.voteForm.get("phnNumber").errors?null:n.voteForm.get("phnNumber").errors.invalidNumber),t.xp6(1),t.Q6J("ngIf",(null==n.voteForm.get("phnNumber").errors?null:n.voteForm.get("phnNumber").errors.noContryCode)||(null==n.voteForm.get("phnNumber").errors?null:n.voteForm.get("phnNumber").errors.noCountryCodeAllowed)),t.xp6(1),t.Q6J("ngIf",null==n.voteForm.get("phnNumber").errors?null:n.voteForm.get("phnNumber").errors.lessthan),t.xp6(1),t.Q6J("ngIf",null==n.voteForm.get("phnNumber").errors?null:n.voteForm.get("phnNumber").errors.greaterthan),t.xp6(1),t.s9C("value",null!=n.userSelectedVoteBundle?"GHC "+n.userSelectedVoteBundle.VoteCurrencyAmount:""),t.xp6(5),t.Q6J("disabled",n.voteForm.invalid))},directives:[w.e,f.lW,p.O5,d.xw,d.Wh,O.w,y.VQ,_.HU,p.sg,_.$Z,y.U0,a._Y,a.JL,a.sg,a.Fj,a.Q7,a.JJ,a.u],styles:['@import"https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;600&display=swap";#votenow_container[_ngcontent-%COMP%]{padding:20px 10px 10px}#votenow_container[_ngcontent-%COMP%]   .votingfor[_ngcontent-%COMP%]{margin:34px 0 24px;font-family:var(--opensans_font);font-weight:700}#votenow_container[_ngcontent-%COMP%]   #artist_container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}#votenow_container[_ngcontent-%COMP%]   #artist_container[_ngcontent-%COMP%]   #artist[_ngcontent-%COMP%]{display:flex;align-items:center}#votenow_container[_ngcontent-%COMP%]   #artist_container[_ngcontent-%COMP%]   #artist[_ngcontent-%COMP%]   .artistimage[_ngcontent-%COMP%]{height:50px;width:50px;border:3px solid #FFC624;border-radius:50%;object-fit:cover;margin:0 10px 0 0}#votenow_container[_ngcontent-%COMP%]   #artist_container[_ngcontent-%COMP%]   #artist[_ngcontent-%COMP%]   .artistname[_ngcontent-%COMP%]{margin:0;font-family:var(--opensans_font);font-weight:700}#votenow_container[_ngcontent-%COMP%]   #artist_container[_ngcontent-%COMP%]   .viewprofile[_ngcontent-%COMP%]{margin-right:10px;border-radius:10px;background-color:#000;color:#fff;font-family:var(--opensans_font);font-weight:700;font-size:14px;padding-left:9px;padding-right:7.2px}#votenow_container[_ngcontent-%COMP%]   #vote_bundle_container[_ngcontent-%COMP%]{display:flex;justify-content:start;max-width:100vw;overflow:hidden;cursor:pointer}#votenow_container[_ngcontent-%COMP%]   #vote_bundle_container[_ngcontent-%COMP%]   .single_vote_bundle[_ngcontent-%COMP%]{border-radius:5px;min-width:155px;height:67px;background:var(--votebundle_back_g);border:2px solid #ffc624;text-align:center;padding:10px;position:relative;margin-right:8px;transition:all .5ms ease}#votenow_container[_ngcontent-%COMP%]   #vote_bundle_container[_ngcontent-%COMP%]   .single_vote_bundle[_ngcontent-%COMP%]:hover{margin-right:10px}#votenow_container[_ngcontent-%COMP%]   #vote_bundle_container[_ngcontent-%COMP%]   .back_circle[_ngcontent-%COMP%]{height:20px;width:20px;border-radius:50%;background-color:var(--votebundle_checkbox_back_g);position:absolute;left:7px;margin-top:auto;margin-bottom:auto;top:0;bottom:0;outline-color:red!important}#votenow_container[_ngcontent-%COMP%]   #vote_bundle_container[_ngcontent-%COMP%]   .bundle_text[_ngcontent-%COMP%]{text-align:center}#votenow_container[_ngcontent-%COMP%]   #vote_bundle_container[_ngcontent-%COMP%]   .bundle_text[_ngcontent-%COMP%]   .vote_number[_ngcontent-%COMP%]{margin:0;font-size:19px;font-weight:400;color:var(--votenumber_color)}#votenow_container[_ngcontent-%COMP%]   #vote_bundle_container[_ngcontent-%COMP%]   .bundle_text[_ngcontent-%COMP%]   .vote_amount[_ngcontent-%COMP%]{margin:0;font-size:17px;font-weight:200}#votenow_container[_ngcontent-%COMP%]   #selectown_vote[_ngcontent-%COMP%]{margin-top:30px;display:flex;justify-content:space-between;align-items:center}#votenow_container[_ngcontent-%COMP%]   #selectown_vote[_ngcontent-%COMP%]   .select_text[_ngcontent-%COMP%]{font-weight:700;margin-bottom:0}#votenow_container[_ngcontent-%COMP%]   #selectown_vote[_ngcontent-%COMP%]   .forwardicon[_ngcontent-%COMP%]{font-size:17px;cursor:pointer;margin-bottom:0;margin-right:10px}#votenow_container[_ngcontent-%COMP%]   #voteform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;outline:0;width:100%;border:0;border-radius:10px;margin:0 0 24px;padding:15px;box-sizing:border-box;font-size:14px}#votenow_container[_ngcontent-%COMP%]   #poweredby_cnt[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-top:23px;margin-bottom:39px}#votenow_container[_ngcontent-%COMP%]   #poweredby_cnt[_ngcontent-%COMP%]   .powered_by[_ngcontent-%COMP%]{font-size:17px;margin-right:17px;font-weight:400;margin-bottom:0;color:#888;font-family:var(--opensans_font)}#votenow_container[_ngcontent-%COMP%]   #poweredby_cnt[_ngcontent-%COMP%]   .mtn_momo[_ngcontent-%COMP%]{width:48px}#votenow_container[_ngcontent-%COMP%]   #paynow_btn[_ngcontent-%COMP%]{width:100%;font-size:18px;font-weight:500;padding:8px;margin-bottom:5px;font-family:Raleway,sans-serif;font-weight:700}[_ngcontent-%COMP%]::placeholder{color:var(--lightdark_text_color);opacity:.7}.validate[_ngcontent-%COMP%]{color:red;display:flex;justify-content:start;align-items:flex-start}.validate[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-right:3px}@media (min-width: 1040px){#votenow_container[_ngcontent-%COMP%]{margin:auto!important;width:60vw!important}}@media (min-width: 700px) and (max-width: 1040px){#votenow_container[_ngcontent-%COMP%]{margin:auto!important;width:90vw!important}}']}),o})();var M=s(9313),Y=s(2853),Q=s(2979),D=s(8140);function E(o,i){1&o&&t._UZ(0,"ngx-shimmer-loading",26),2&o&&t.Q6J("shape","circle")("width","100px")}function R(o,i){if(1&o&&t._UZ(0,"img",27),2&o){const e=t.oxw();t.s9C("src",null==(null==e.user?null:e.user.ProfileImageUri)||"string"==(null==e.user?null:e.user.ProfileImageUri)?"assets/images/profile.png":null==e.user?null:e.user.ProfileImageUri,t.LSH)}}function $(o,i){1&o&&t._UZ(0,"ngx-shimmer-loading",28),2&o&&t.Q6J("shape","rect")("width","100px")("height","16px")}function j(o,i){if(1&o&&(t.TgZ(0,"h2",29),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.AsE("",null!=e.user&&e.user.FirstName?null==e.user?null:e.user.FirstName:".."," ",null!=e.user&&e.user.LastName?null==e.user?null:e.user.LastName:"..","")}}function z(o,i){1&o&&t._UZ(0,"ngx-shimmer-loading",28),2&o&&t.Q6J("shape","rect")("width","80px")("height","12px")}function H(o,i){if(1&o&&(t.TgZ(0,"h4",30),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.AsE("",null!=e.user&&e.user.CurrentStageId?null==e.user?null:e.user.CurrentStageId:"..","",null!=e.nth?e.nth:".."," Stage ")}}function G(o,i){1&o&&t._UZ(0,"ngx-shimmer-loading",31),2&o&&t.Q6J("shape","rect")("width","200px")("height","60px")}function W(o,i){1&o&&(t.TgZ(0,"span"),t._uU(1,"..."),t.qZA())}function X(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"a",34),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).readMore=!0}),t._uU(1,"Read More"),t.qZA()}}function K(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"a",34),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).readMore=!1}),t._uU(1,"Read Less"),t.qZA()}}function tt(o,i){if(1&o&&(t.TgZ(0,"div",32),t._uU(1),t.ALo(2,"slice"),t.YNc(3,W,2,0,"span",18),t.YNc(4,X,2,0,"a",33),t.YNc(5,K,2,0,"a",33),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" ",e.readMore?e.longText:t.Dn7(2,4,e.longText,0,70)," "),t.xp6(2),t.Q6J("ngIf",!e.readMore),t.xp6(1),t.Q6J("ngIf",!e.readMore),t.xp6(1),t.Q6J("ngIf",e.readMore)}}function et(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"Demo-tracks will be available soon. Stay tuned!"),t.qZA())}function nt(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"This Artiste has not shared any of his works"),t.qZA())}function ot(o,i){1&o&&(t.TgZ(0,"div",35),t._UZ(1,"ngx-shimmer-loading",36)(2,"ngx-shimmer-loading",37),t.qZA()),2&o&&(t.xp6(1),t.Q6J("shape","rect")("width","80px")("height","80px"),t.xp6(1),t.Q6J("shape","rect")("width","190px")("height","70px"))}function it(o,i){1&o&&(t.TgZ(0,"div",35),t._UZ(1,"ngx-shimmer-loading",36)(2,"ngx-shimmer-loading",37),t.qZA()),2&o&&(t.xp6(1),t.Q6J("shape","rect")("width","80px")("height","80px"),t.xp6(1),t.Q6J("shape","rect")("width","190px")("height","70px"))}function rt(o,i){1&o&&(t.TgZ(0,"div",35),t._UZ(1,"ngx-shimmer-loading",36)(2,"ngx-shimmer-loading",37),t.qZA()),2&o&&(t.xp6(1),t.Q6J("shape","rect")("width","80px")("height","80px"),t.xp6(1),t.Q6J("shape","rect")("width","190px")("height","70px"))}function st(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",39)(1,"div",40),t.NdJ("click",function(){const l=t.CHM(e).$implicit,c=t.oxw(2);return c.goToDemoPlayer(c.user,l)}),t._UZ(2,"img",41)(3,"img",42),t.qZA(),t.TgZ(4,"div",43)(5,"h3",44),t._uU(6),t.ALo(7,"truncate"),t.qZA(),t.TgZ(8,"h3",45),t._uU(9),t.qZA()(),t._UZ(10,"div",43),t.qZA()}if(2&o){const e=i.$implicit;t.xp6(2),t.s9C("src",null==(null==e?null:e.ThumbnailUri)||"string"==(null==e?null:e.ThumbnailUri)?"assets/images/video_thumbnail.png":null==e?null:e.ThumbnailUri,t.LSH),t.xp6(4),t.Oqu(null!=e?t.Dn7(7,3,e.Title,20,"..."):"N/A"),t.xp6(3),t.Oqu(null!=e?e.Duration.toString():"N/A")}}function at(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,st,11,7,"div",38),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.alLDemoTracksBy)}}function lt(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"Live performances will be available when the live shows start. Stay tuned!"),t.qZA())}function ct(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"This Artiste has no live performances yet."),t.qZA())}function ut(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",46)(1,"a",47),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw().setPlayingLvPfmce(l)}),t.TgZ(2,"div",48),t._UZ(3,"img",49)(4,"img",50),t.qZA()(),t.TgZ(5,"p",51),t._uU(6),t.ALo(7,"truncate"),t.qZA(),t.TgZ(8,"p",52),t._uU(9),t.qZA()()}if(2&o){const e=i.$implicit,n=t.oxw();t.xp6(3),t.s9C("src",null==(null==e?null:e.ThumbnailUri)||"string"==(null==e?null:e.ThumbnailUri)?"assets/images/video_thumbnail.png":null==e?null:e.ThumbnailUri,t.LSH),t.xp6(3),t.Oqu(null!=e?t.Dn7(7,4,e.Title,20,"..."):"N/A"),t.xp6(3),t.AsE("",null!=n.user&&n.user.FirstName?null==n.user?null:n.user.FirstName:".."," ",null!=n.user&&n.user.LastName?null==n.user?null:n.user.LastName:"..","")}}const gt=[{path:"votenow/:contestantid",component:J},{path:"vote_for_artist",component:(()=>{class o{constructor(e,n,r,l,c,u,g){this.userservice=e,this.voteService=n,this.demoTracksService=r,this.livePerFrmcService=l,this.appSetttingsService=c,this.snackBarOpenerService=u,this.router=g,this.readMore=!1,this.isPageLoading=!0,this.subscription=[],this.nth=null,this.appSettings=null,this.alLlivePerFrmcesBy=null,this.alLDemoTracksBy=null}ngOnInit(){this.backgroundToggler(),this.subscription.push(this.appSetttingsService.appSettings.subscribe({next:e=>{null!=e&&(this.appSettings=e)},error:e=>{console.error(`inside <ContestantsPageComponent.ngOnInit()> ${"statuscode:"+e.status}  ${"message:"+e.message}`),"request_time_out"==e.message&&this.snackBarOpenerService.openToastSnackBar("Request time out",!0,4),0==e.status&&this.snackBarOpenerService.openToastSnackBar("Internet connection error",!0,4)},complete:()=>{console.log("landingPage_subject complete")}})),this.subscrbToUserProfile(),this.subscrbToLvPfmceBy(),setTimeout(()=>{var e,n;null!=this.appSettings&&1==(null===(e=this.appSettings)||void 0===e?void 0:e.ShowLivePerformances)&&null!=this.user&&this.livePerFrmcService.getArtistLivePerfmnces(null===(n=this.user)||void 0===n?void 0:n.Id.toString(),M.x.searchLivePFrmance)},2e3),this.subscrbToallDemosTracksBy(),setTimeout(()=>{null!=this.user&&this.demoTracksService.getArtstPublcDemos(this.user.Id.toString())},3e3)}subscrbToallDemosTracksBy(){this.subscription.push(this.demoTracksService.artstDmoTracks.subscribe({next:e=>{if(null!=e){this.alLDemoTracksBy=e,console.log(this.alLDemoTracksBy);for(var n=0;n<this.alLDemoTracksBy.length;n++)if(!isNaN(this.alLDemoTracksBy[n].Duration)){var r=new Date(null);r.setSeconds(this.alLDemoTracksBy[n].Duration);var l=r.toISOString().substr(11,8);this.alLDemoTracksBy[n].Duration=l}this.isPageLoading=!1}else console.log("all public demo-tracKs by this artist is null")},error:e=>{console.log(`inside <PublicDemoPlayerComponent.subscrbToallDemosTracksBy()> ${"statuscode:"+e.status}  ${"message:"+e.message}`),"request_time_out"==e.message&&this.snackBarOpenerService.openToastSnackBar("Request time out",!0,4),0==e.status&&this.snackBarOpenerService.openToastSnackBar("Internet connection error",!0,4)},complete:()=>{}}))}subscrbToUserProfile(){this.subscription.push(this.userservice.contstProile.subscribe({next:e=>{this.user=e,this.longText=this.user.About,null!=this.user&&(this.nth=M.x.nthConverter(this.user.CurrentStageId)),console.log(this.user)},error:e=>{console.log(`inside <ProfilePageComponent.subscrbToUserProfile()> ${"statuscode:"+e.status}  ${"message:"+e.message}`),"request_time_out"==e.message&&this.snackBarOpenerService.openToastSnackBar("Request time out",!0,4),0==e.status&&this.snackBarOpenerService.openToastSnackBar("Internet connection error",!0,4)},complete:()=>{}}))}subscrbToLvPfmceBy(){this.subscription.push(this.livePerFrmcService.artistLvPrfmnces.subscribe({next:e=>{if(null!=e&&null!=this.user){let n=[];e.forEach(r=>{r.UploadedByUser=this.user,n.push(r)}),this.alLlivePerFrmcesBy=n,console.log(this.alLlivePerFrmcesBy)}else console.log("all live performances by this artist is null")},error:e=>{console.log(`inside <ProfilePageComponent.subscrbToLvPfmceBy()> ${"statuscode:"+e.status}  ${"message:"+e.message}`),"request_time_out"==e.message&&this.snackBarOpenerService.openToastSnackBar("Request time out",!0,4),0==e.status&&this.snackBarOpenerService.openToastSnackBar("Internet connection error",!0,4)},complete:()=>{}}))}setVoteForCntstntDetails(){null!=this.user?(this.voteService.setVoteForCntstntDetails(this.user),this.router.navigate(["/vote/votenow/","1"])):console.log("user details is null")}setPlayingLvPfmce(e){null!=e?(this.livePerFrmcService.setPlayingLvPfmce(e),this.router.navigate(["/liveperformance/","3"])):console.log("playing live performance is null")}backgroundToggler(){var e=document.getElementById("tracks"),n=document.getElementById("lpf");n.addEventListener("click",()=>{e.classList.contains("toggled")&&e.classList.remove("toggled"),n.classList.contains("toggled")||n.classList.add("toggled")}),e.addEventListener("click",()=>{n.classList.contains("toggled")&&n.classList.remove("toggled"),e.classList.contains("toggled")||e.classList.add("toggled")})}ngOnDestroy(){this.subscription.length>0&&(console.log("unsubscribing"),this.subscription.forEach(e=>{e.unsubscribe()}))}goToDemoPlayer(e,n){if(null!=e&&null!=e.ThirdPartySystemId)try{this.demoTracksService.setArtstProflDetails(e),this.demoTracksService.setPlayingDemoTrack(n),setTimeout(()=>{this.router.navigate(["/public_profile/demoplayer"])},100)}catch(r){console.log(r)}else console.log("this, Artist and his ThirdPartySystemId is null")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(C.K),t.Y36(v.U),t.Y36(Y.X),t.Y36(Q.Q),t.Y36(P.C),t.Y36(T.N),t.Y36(h.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-votefor-artist-profile"]],decls:39,vars:18,consts:[["id","artist_container"],["title","Artiste's profile"],["fxLayout","column","fxLayoutAlign","center center",2,"margin-top","30px"],[3,"shape","width",4,"ngIf"],["class","profile-image-container",3,"src",4,"ngIf"],[3,"shape","width","height",4,"ngIf"],["style","margin-top: 15px; font-weight: 700;",4,"ngIf"],["style","margin-top: -20px; opacity: 0.5;",4,"ngIf"],["id","votenow_btn","mat-flat-button","","color","primary",3,"disabled","click"],["style","margin: 30px;",3,"shape","width","height",4,"ngIf"],["style","margin: 30px;padding: 30px;",4,"ngIf"],[2,"margin-top","10px","margin","20px"],["id","pills-tab","role","tablist","fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","40px",1,"nav","nav-pills","mb-3"],["role","presentation",1,"nav-item"],["data-bs-toggle","pill","data-bs-target","#pills-home","type","button","id","tracks",1,"btn","active","toggled"],["data-bs-toggle","pill","data-bs-target","#pills-profile","type","button","id","lpf",1,"btn"],["id","pills-tabContent",1,"tab-content"],["id","pills-home","role","tabpanel","aria-labelledby","pills-home-tab",1,"tab-pane","fade","show","active"],[4,"ngIf"],["fxLayout","row","fxLayoutAlign","space-evenly center",4,"ngIf"],["id","pills-profile","role","tabpanel","aria-labelledby","pills-profile-tab",1,"tab-pane","fade"],["drag-scroll","",1,"lp_video_cnt"],["class","single_lp","drag-scroll-item","",4,"ngFor","ngForOf"],["id","menu",1,"menu-icon"],["id","help",1,"notification-icon"],["id","bell",1,"notification-icon"],[3,"shape","width"],[1,"profile-image-container",3,"src"],[3,"shape","width","height"],[2,"margin-top","15px","font-weight","700"],[2,"margin-top","-20px","opacity","0.5"],[2,"margin","30px",3,"shape","width","height"],[2,"margin","30px","padding","30px"],["href","javascript:;",3,"click",4,"ngIf"],["href","javascript:;",3,"click"],["fxLayout","row","fxLayoutAlign","space-evenly center"],["borderRadius","15",3,"shape","width","height"],["borderRadius","15",2,"margin-left","20px",3,"shape","width","height"],["fxLayout","row","fxLayoutGap","20px","style","margin-top: 10px;",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutGap","20px",2,"margin-top","10px"],[1,"thumb_cnt",3,"click"],[2,"height","70px","width","70px",3,"src"],["src","assets/images/play.png","alt","",1,"play_track_img"],["fxLayout","column","fxLayoutAlign","start"],[2,"font-weight","bold","margin-bottom","0px","line-height","97%"],[2,"margin-top","10px"],["drag-scroll-item","",1,"single_lp"],[1,"video_link",3,"click"],[1,"lp"],["alt","",1,"video_thumnaail",3,"src"],["src","assets/images/play.png","alt","",1,"play_img"],[1,"video_name"],[1,"artist_name"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-backtitlenav",1),t.TgZ(2,"section")(3,"div",2),t.YNc(4,E,1,2,"ngx-shimmer-loading",3),t.YNc(5,R,1,1,"img",4),t.YNc(6,$,1,3,"ngx-shimmer-loading",5),t.YNc(7,j,2,2,"h2",6),t.YNc(8,z,1,3,"ngx-shimmer-loading",5),t.YNc(9,H,2,2,"h4",7),t.TgZ(10,"button",8),t.NdJ("click",function(){return n.setVoteForCntstntDetails()}),t._uU(11,"Vote now"),t.qZA(),t.YNc(12,G,1,3,"ngx-shimmer-loading",9),t.YNc(13,tt,6,8,"div",10),t.TgZ(14,"div",11)(15,"ul",12)(16,"li",13)(17,"button",14),t._uU(18,"Tracks"),t.qZA()(),t.TgZ(19,"li",13)(20,"button",15),t._uU(21,"Live Performances"),t.qZA()()(),t.TgZ(22,"div",16)(23,"div",17),t.YNc(24,et,2,0,"p",18),t.YNc(25,nt,2,0,"p",18),t.YNc(26,ot,3,6,"div",19),t.YNc(27,it,3,6,"div",19),t.YNc(28,rt,3,6,"div",19),t.YNc(29,at,2,1,"div",18),t.qZA(),t.TgZ(30,"div",20),t.YNc(31,lt,2,0,"p",18),t.YNc(32,ct,2,0,"p",18),t.TgZ(33,"drag-scroll")(34,"div",21),t.YNc(35,ut,10,8,"div",22),t.qZA()()()()()()()(),t._UZ(36,"span",23)(37,"span",24)(38,"span",25)),2&e&&(t.xp6(4),t.Q6J("ngIf",n.isPageLoading),t.xp6(1),t.Q6J("ngIf",!n.isPageLoading),t.xp6(1),t.Q6J("ngIf",n.isPageLoading),t.xp6(1),t.Q6J("ngIf",!n.isPageLoading),t.xp6(1),t.Q6J("ngIf",n.isPageLoading),t.xp6(1),t.Q6J("ngIf",!n.isPageLoading),t.xp6(1),t.Q6J("disabled",!(null!=n.appSettings&&n.appSettings.AcceptVotes||3==(null==n.user?null:n.user.UserGroupId)||null!=n.user&&n.user.LiveShowArtisteEvicted)),t.xp6(2),t.Q6J("ngIf",n.isPageLoading),t.xp6(1),t.Q6J("ngIf",!n.isPageLoading),t.xp6(11),t.Q6J("ngIf",null!=n.appSettings&&0==(null==n.appSettings?null:n.appSettings.ShowPublicArtisteProfiles)),t.xp6(1),t.Q6J("ngIf",(null==n.alLDemoTracksBy||0==n.alLDemoTracksBy.length)&&(null==n.appSettings?null:n.appSettings.ShowPublicArtisteProfiles)),t.xp6(1),t.Q6J("ngIf",n.isPageLoading),t.xp6(1),t.Q6J("ngIf",n.isPageLoading),t.xp6(1),t.Q6J("ngIf",n.isPageLoading),t.xp6(1),t.Q6J("ngIf",null!=n.appSettings&&(null==n.appSettings?null:n.appSettings.ShowPublicArtisteProfiles)),t.xp6(2),t.Q6J("ngIf",null!=n.appSettings&&0==(null==n.appSettings?null:n.appSettings.ShowLivePerformances)),t.xp6(1),t.Q6J("ngIf",(null==n.alLlivePerFrmcesBy||0==n.alLlivePerFrmcesBy.length)&&(null==n.appSettings?null:n.appSettings.ShowLivePerformances)),t.xp6(3),t.Q6J("ngForOf",n.alLlivePerFrmcesBy))},directives:[w.e,d.xw,d.Wh,p.O5,O.w,f.lW,d.SQ,p.sg,_.HU,_.$Z],pipes:[p.OU,D.Bo],styles:["#artist_container[_ngcontent-%COMP%]{padding:20px 10px 10px}#artist_container[_ngcontent-%COMP%]   .profile-image-container[_ngcontent-%COMP%]{height:100px;width:100px;border-radius:50%}#artist_container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%;max-width:100%;object-fit:cover}#artist_container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, #artist_container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active, #artist_container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:visited{background-color:#000!important;color:#fff!important;border:0px}#artist_container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:transparent;color:#888;border:0px;box-shadow:none!important}#artist_container[_ngcontent-%COMP%]   .limitTextHeight[_ngcontent-%COMP%]{height:165px;overflow:hidden}#artist_container[_ngcontent-%COMP%]   .toggled[_ngcontent-%COMP%]{color:#fff!important;background-color:#212121!important}#artist_container[_ngcontent-%COMP%]   #votenow_btn[_ngcontent-%COMP%]{width:40%;font-size:18px;font-weight:500;padding:8px;margin-top:2px;margin-bottom:-8px;font-family:Raleway,sans-serif;font-weight:700}#artist_container[_ngcontent-%COMP%]   .lp_video_cnt[_ngcontent-%COMP%]   .single_lp[_ngcontent-%COMP%]{margin-right:15px}#artist_container[_ngcontent-%COMP%]   .lp_video_cnt[_ngcontent-%COMP%]   .single_lp[_ngcontent-%COMP%]   .video_link[_ngcontent-%COMP%]   .lp[_ngcontent-%COMP%]{position:relative}#artist_container[_ngcontent-%COMP%]   .lp_video_cnt[_ngcontent-%COMP%]   .single_lp[_ngcontent-%COMP%]   .video_link[_ngcontent-%COMP%]   .lp[_ngcontent-%COMP%]   .video_thumnaail[_ngcontent-%COMP%]{width:207px;height:120px;border-radius:10px}#artist_container[_ngcontent-%COMP%]   .lp_video_cnt[_ngcontent-%COMP%]   .single_lp[_ngcontent-%COMP%]   .video_link[_ngcontent-%COMP%]   .lp[_ngcontent-%COMP%]   .play_img[_ngcontent-%COMP%]{height:35px;width:35px;position:absolute;margin:auto;left:0;right:0;top:0;bottom:0}#artist_container[_ngcontent-%COMP%]   .lp_video_cnt[_ngcontent-%COMP%]   .single_lp[_ngcontent-%COMP%]   .video_name[_ngcontent-%COMP%]{margin-top:2px;margin-bottom:0;font-weight:500;font-size:16px}#artist_container[_ngcontent-%COMP%]   .lp_video_cnt[_ngcontent-%COMP%]   .single_lp[_ngcontent-%COMP%]   .artist_name[_ngcontent-%COMP%]{margin-bottom:0;font-weight:400;font-size:14px}.thumb_cnt[_ngcontent-%COMP%]{position:relative}.thumb_cnt[_ngcontent-%COMP%]   .play_track_img[_ngcontent-%COMP%]{height:35px;width:35px;position:absolute;margin:auto;left:0;right:0;top:0;bottom:0}"]}),o})()}];let pt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[h.Bz.forChild(gt)],h.Bz]}),o})();var mt=s(755);let dt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.ez,pt,mt.m]]}),o})()}}]);