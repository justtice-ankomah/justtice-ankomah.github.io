"use strict";(self.webpackChunkHitMakerApp=self.webpackChunkHitMakerApp||[]).push([[858],{2858:(B,d,r)=>{r.r(d),r.d(d,{StaticPagesModule:()=>q});var m=r(9808),l=r(1083),i=r(3075),b=r(2434),f=r(5910),e=r(5e3),h=r(5944),C=r(4181),v=r(7261),_=r(5823),u=r(7322),M=r(7531),c=r(6856),P=r(9814),x=r(7423);function O(o,s){1&o&&(e.TgZ(0,"p",29)(1,"span",30),e._uU(2,"error"),e.qZA(),e._uU(3," Invalid Email Address "),e.qZA())}function Z(o,s){1&o&&(e.TgZ(0,"p",29)(1,"span",31),e._uU(2,"error"),e.qZA(),e._uU(3," Dont include the + "),e.qZA())}function y(o,s){1&o&&(e.TgZ(0,"p",29)(1,"span",31),e._uU(2,"error"),e.qZA(),e._uU(3,"Must start from 233 "),e.qZA())}function A(o,s){1&o&&(e.TgZ(0,"p",29)(1,"span",31),e._uU(2,"error"),e.qZA(),e._uU(3,"Must be 12 digit "),e.qZA())}function k(o,s){1&o&&(e.TgZ(0,"p",29)(1,"span",31),e._uU(2,"error"),e.qZA(),e._uU(3,"Invalid "),e.qZA())}let U=(()=>{class o{constructor(t,n,a,g,D){this.userservice=t,this.appSetttingsService=n,this._snackBar=a,this.router=g,this.fb=D,this.snackBarkDuration=4,this.subscription=[],this.appSettings=null,this.profile_file=null}onChange(t){this.profile_file=t.target.files[0],console.log("logging file details below"),console.log(this.profile_file),document.getElementById("profile_image").src=URL.createObjectURL(t.target.files[0]),this.userservice.updateProfileImage(this.user.Id,this.profile_file).subscribe({next:a=>{1==a.Success?(console.log("refreshing"),this.userservice.getUserByByThirdPartyId(f.v.thirdParthId),this.openToastSnackBar("Profile changed",!1)):this.openToastSnackBar("Something went wrong",!0),console.log(a)}})}ngOnInit(){this.subscrbToAppSetting(),this.subscrbToUserProfile(),this.updateForm=this.fb.group({FirstName:[null!==this.user?this.user.FirstName:"",i.kI.compose([i.kI.required])],LastName:[null!==this.user?this.user.LastName:"",i.kI.compose([i.kI.required])],Email:[null!==this.user?this.user.Email:"",i.kI.compose([i.kI.required,i.kI.email])],Address:[null!==this.user?this.user.Address:"",i.kI.compose([i.kI.required])],About:[null!==this.user?this.user.About:"",i.kI.compose([i.kI.required])],DateOfBirth:[null!==this.user?this.user.DateOfBirth:"",i.kI.compose([i.kI.required])],Sex:[null!==this.user?this.user.Sex:"",i.kI.compose([i.kI.required])],PhoneNumber:[null!==this.user?this.user.PhoneNumber:"",i.kI.compose([i.kI.required,this.valideteNumb])]})}valideteNumb(t){let n=t.value;if(null===n||""===n)return null;if(n.toString().includes("+"))return{noContryCode:!0};{let a=n.toString();if(!a.startsWith("233"))return{must_start_233:!0};if(a.startsWith("233")&&(a.length<12||a.length>12))return{must_be_12:!0}}return null}subscrbToAppSetting(){this.subscription.push(this.appSetttingsService.appSettings.subscribe({next:t=>{null!=t&&(this.appSettings=t)},error:t=>{console.error(`inside <EditProfileComponent.subscrbToAppSetting()> ${"statuscode:"+t.status}  ${"message:"+t.message}`),"request_time_out"==t.message&&alert(t.message+" try again"),0==t.status&&alert("internet connection error")},complete:()=>{console.log("appSettings_subject complete")}}))}subscrbToUserProfile(){this.subscription.push(this.userservice.contstProile.subscribe({next:t=>{this.user=t,console.log(this.user)},error:t=>{console.log(`inside <ProfilePageComponent.subscrbToUserProfile()> ${"statuscode:"+t.status}  ${"message:"+t.message}`),"request_time_out"==t.message&&this.openToastSnackBar("Request time out",!0),0==t.status&&this.openToastSnackBar("Internet connection error",!0)},complete:()=>{}}))}updateProfile(){console.log(this.updateForm.value);var t=this.user;t.FirstName=this.updateForm.get("FirstName").value,t.LastName=this.updateForm.get("LastName").value,t.Email=this.updateForm.get("Email").value,t.About=this.updateForm.get("About").value,t.Address=this.updateForm.get("Address").value,t.PhoneNumber=this.updateForm.get("PhoneNumber").value,t.DateOfBirth=this.updateForm.get("DateOfBirth").value,t.Sex=this.updateForm.get("Sex").value,this.subscription.push(this.userservice.updateProfile(t).subscribe({next:n=>{console.log(n),null!=n?(this.userservice.getUserByByThirdPartyId(f.v.thirdParthId),this.openToastSnackBar("Profile update successful",!1)):this.openToastSnackBar("Something went wrong",!0)}}))}openToastSnackBar(t,n){this._snackBar.openFromComponent(b.q,{duration:1e3*this.snackBarkDuration,data:{msg:t,isError:n}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.K),e.Y36(C.C),e.Y36(v.ux),e.Y36(l.F0),e.Y36(i.qu))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-edit-profile"]],decls:51,vars:12,consts:[["id","edit_profile_cnt"],["title","Edit Profile"],["id","contents_cnt"],["id","img_cnt"],["id","profile_image",1,"profile-image",3,"src"],[1,"custom-file-upload"],["type","file",3,"change"],[1,"material-icons","md-36","edit_icon"],["id","form_cnt"],["action","",3,"formGroup"],[1,"title"],["required","","type","text","formControlName","FirstName"],["required","","type","text","formControlName","LastName"],["required","","type","email","formControlName","Email"],["class","validate",4,"ngIf"],["required","","type","text","formControlName","PhoneNumber","oninput","this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');"],["appearance","fill",1,"datepicker",2,"display","block","border-radius","10px"],[2,"color","black"],["matInput","","formControlName","DateOfBirth",2,"padding","0px",3,"matDatepicker"],["matSuffix","",3,"for"],["startView","month"],["picker",""],["required","","type","text","name","username","formControlName","Address"],["id","gender"],["formControlName","Sex",2,"display","flex","justify-content","space-between","width","60%"],["value","M","color","primary",1,"back_circle",3,"checked"],["value","F","color","primary",1,"back_circle",3,"checked"],["required","","type","text","formControlName","About",1,"about_yourself",2,"height","200px","border-radius","10px"],["id","continue-btn","mat-flat-button","",3,"disabled","click"],[1,"validate"],[1,"material-icons","md-36","backicon"],[1,"material-icons","md-36",2,"font-size","10px"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-backtitlenav",1),e.TgZ(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.TgZ(5,"label",5)(6,"input",6),e.NdJ("change",function(g){return n.onChange(g)}),e.qZA(),e.TgZ(7,"p",7),e._uU(8,"edit"),e.qZA()()(),e.TgZ(9,"div",8)(10,"form",9)(11,"p",10),e._uU(12,"First Name"),e.qZA(),e._UZ(13,"input",11),e.TgZ(14,"p",10),e._uU(15,"Last Name"),e.qZA(),e._UZ(16,"input",12),e.TgZ(17,"p",10),e._uU(18,"Email Address"),e.qZA(),e._UZ(19,"input",13),e.YNc(20,O,4,0,"p",14),e.TgZ(21,"p",10),e._uU(22,"Phone Number"),e.qZA(),e._UZ(23,"input",15),e.YNc(24,Z,4,0,"p",14),e.YNc(25,y,4,0,"p",14),e.YNc(26,A,4,0,"p",14),e.YNc(27,k,4,0,"p",14),e.TgZ(28,"mat-form-field",16)(29,"mat-label",17),e._uU(30,"Date of Birth"),e.qZA(),e._UZ(31,"input",18)(32,"mat-datepicker-toggle",19)(33,"mat-datepicker",20,21),e.qZA(),e.TgZ(35,"p",10),e._uU(36,"Address"),e.qZA(),e._UZ(37,"input",22),e.TgZ(38,"div",23)(39,"p",10),e._uU(40,"Gender"),e.qZA(),e.TgZ(41,"mat-radio-group",24)(42,"mat-radio-button",25),e._uU(43,"Male"),e.qZA(),e.TgZ(44,"mat-radio-button",26),e._uU(45,"Female"),e.qZA()()(),e.TgZ(46,"p",10),e._uU(47,"About Yourself"),e.qZA(),e._UZ(48,"textarea",27),e.TgZ(49,"button",28),e.NdJ("click",function(){return n.updateProfile()}),e._uU(50,"SAVE"),e.qZA()()()()()),2&t){const a=e.MAs(34);e.xp6(4),e.s9C("src",null==(null==n.user?null:n.user.ProfileImageUri)||"string"==(null==n.user?null:n.user.ProfileImageUri)?"assets/images/profile.png":null==n.user?null:n.user.ProfileImageUri,e.LSH),e.xp6(6),e.Q6J("formGroup",n.updateForm),e.xp6(10),e.Q6J("ngIf",null==n.updateForm.get("Email").errors?null:n.updateForm.get("Email").errors.email),e.xp6(4),e.Q6J("ngIf",null==n.updateForm.get("PhoneNumber").errors?null:n.updateForm.get("PhoneNumber").errors.noContryCode),e.xp6(1),e.Q6J("ngIf",null==n.updateForm.get("PhoneNumber").errors?null:n.updateForm.get("PhoneNumber").errors.must_start_233),e.xp6(1),e.Q6J("ngIf",null==n.updateForm.get("PhoneNumber").errors?null:n.updateForm.get("PhoneNumber").errors.must_be_12),e.xp6(1),e.Q6J("ngIf",null==n.updateForm.get("PhoneNumber").errors?null:n.updateForm.get("PhoneNumber").errors.notValid),e.xp6(4),e.Q6J("matDatepicker",a),e.xp6(1),e.Q6J("for",a),e.xp6(10),e.Q6J("checked",null!=n.user&&"M"==n.user.Sex),e.xp6(2),e.Q6J("checked",null!=n.user&&"F"==n.user.Sex),e.xp6(5),e.Q6J("disabled",n.updateForm.invalid)}},directives:[_.e,i._Y,i.JL,i.sg,i.Fj,i.Q7,i.JJ,i.u,m.O5,u.KE,u.hX,M.Nt,c.hl,c.nW,u.R9,c.Mq,P.VQ,P.U0,x.lW],styles:['@import"https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;600&display=swap";#edit_profile_cnt[_ngcontent-%COMP%]{padding:20px 10px 10px;margin:auto}#edit_profile_cnt[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]{padding-top:35px}#edit_profile_cnt[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #img_cnt[_ngcontent-%COMP%]{border:3px solid var(--themcolor_reverse);padding:22px;border-radius:50%;background-color:#fff;width:90px;height:90px;margin:auto auto 25px;text-align:center;justify-content:center;align-items:center;display:flex;box-sizing:border-box;position:relative}#edit_profile_cnt[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #img_cnt[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%]{height:80px;width:80px;border-radius:50%}#edit_profile_cnt[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #img_cnt[_ngcontent-%COMP%]   .edit_icon[_ngcontent-%COMP%]{background-color:var(--themcolor_reverse);color:var(--themcolor);cursor:pointer;padding:6px;border-radius:50%;font-size:19px;position:absolute;bottom:-13px;right:-3px}#edit_profile_cnt[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #form_cnt[_ngcontent-%COMP%]{width:95%;text-align:center;margin:auto}#edit_profile_cnt[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #form_cnt[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-left:5px;font-family:Montserrat,sans-serif;font-size:15px;text-align:left;margin-bottom:5px;font-weight:700}#edit_profile_cnt[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #form_cnt[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;outline:0;width:100%;border:0;border-radius:10px;margin:0 0 20px;padding:12px;box-sizing:border-box;font-size:14px;color:var(--lightdark_text_color)}#edit_profile_cnt[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #form_cnt[_ngcontent-%COMP%]   #gender[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:20px}#edit_profile_cnt[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #form_cnt[_ngcontent-%COMP%]   #gender[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:0}#edit_profile_cnt[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #form_cnt[_ngcontent-%COMP%]   .about_yourself[_ngcontent-%COMP%]{border-radius:10px;background:var(--input_color);width:100%;border:none!important;color:var(--lightdark_text_color)}#edit_profile_cnt[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #form_cnt[_ngcontent-%COMP%]   #continue-btn[_ngcontent-%COMP%]{width:100%;margin-top:30px;border-radius:7px;height:52px;background-color:#ffc624;color:#000;font-family:Raleway,sans-serif;font-weight:700;font-size:16px}#edit_profile_cnt[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #form_cnt[_ngcontent-%COMP%]   .validate[_ngcontent-%COMP%]{color:red;display:flex;justify-content:start;align-items:center}#edit_profile_cnt[_ngcontent-%COMP%]   #contents_cnt[_ngcontent-%COMP%]   #form_cnt[_ngcontent-%COMP%]   .validate[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-right:3px}input[type=file][_ngcontent-%COMP%]{display:none}.custom-file-upload[_ngcontent-%COMP%]{display:inline-block;cursor:pointer}  .mat-form-field-underline{display:none;border-radius:10px}']}),o})();var S=r(220),T=r(5215),p=r(7093);const I=[{path:"help",component:S.Z},{path:"judgeprofile",component:(()=>{class o{constructor(t,n){this.snackBarOpenerService=t,this.userService=n,this.subscription=[],this.judgeDetails=null}ngOnInit(){null==this.judgeDetails&&this.subscription.push(this.userService.singleJudge.subscribe({next:t=>{null!=t&&(this.judgeDetails=t,console.log(this.judgeDetails))},error:t=>{console.error(`inside <LandingPageComponent.getAllJudges()> ${"statuscode:"+t.status}  ${"message:"+t.message}`),"request_time_out"==t.message&&this.snackBarOpenerService.openToastSnackBar("Request time out",!0,4),0==t.status&&this.snackBarOpenerService.openToastSnackBar("Internet connection error",!0,4)},complete:()=>{}}))}ngOnDestroy(){this.subscription.length>0&&this.subscription.forEach(t=>{t.unsubscribe()})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(T.N),e.Y36(h.K))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-judge-profile"]],decls:22,vars:6,consts:[["id","judge"],["title","Judge's profile"],["fxLayout","column","fxLayoutAlign","space-around center",1,"all-items"],[1,"profile-image-container",3,"src"],[2,"font-weight","bold"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","20px"],[1,"single","twitter"],[3,"href"],["src","assets/images/twitter.svg",1,"social-media-img"],["id","instagram",1,"single"],["src","assets/images/insta.svg",1,"social-media-img"],["src","assets/images/linkedin.svg",1,"social-media-img"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-backtitlenav",1)(2,"br")(3,"br"),e.TgZ(4,"section")(5,"div",2),e._UZ(6,"img",3),e.TgZ(7,"h1",4),e._uU(8),e.qZA(),e.TgZ(9,"div",5)(10,"div",6)(11,"a",7),e._UZ(12,"img",8),e.qZA()(),e.TgZ(13,"div",9)(14,"a",7),e._UZ(15,"img",10),e.qZA()(),e.TgZ(16,"div",6)(17,"a",7),e._UZ(18,"img",11),e.qZA()()(),e._UZ(19,"br"),e.TgZ(20,"h3"),e._uU(21),e.qZA()()()()),2&t&&(e.xp6(6),e.s9C("src",null==(null==n.judgeDetails?null:n.judgeDetails.ProfileImageUri)||"string"==(null==n.judgeDetails?null:n.judgeDetails.ProfileImageUri)?"assets/images/profile.png":null==n.judgeDetails?null:n.judgeDetails.ProfileImageUri,e.LSH),e.xp6(2),e.Oqu(null!=n.judgeDetails?n.judgeDetails.FirstName+" "+n.judgeDetails.LastName:"N/A"),e.xp6(3),e.s9C("href",null!=n.judgeDetails?n.judgeDetails.TwitterHandleUri:"#",e.LSH),e.xp6(3),e.s9C("href",null!=n.judgeDetails?n.judgeDetails.InstagramPageUri:"#",e.LSH),e.xp6(3),e.s9C("href",null!=n.judgeDetails?n.judgeDetails.LinkedInUri:"#",e.LSH),e.xp6(4),e.Oqu(null!=n.judgeDetails?n.judgeDetails.About:"N/A"))},directives:[_.e,p.xw,p.Wh,p.SQ],styles:["#judge[_ngcontent-%COMP%]{padding:20px 10px 10px;margin:auto}.profile-image-container[_ngcontent-%COMP%]{height:101px;width:101px;border-radius:50%;max-height:100%;max-width:100%;object-fit:cover}.single[_ngcontent-%COMP%]{background-color:#03a9f429;box-sizing:border-box;border-radius:4px;padding:5px}.single[_ngcontent-%COMP%]   .social-media-img[_ngcontent-%COMP%]{height:27px;width:27px}#instagram[_ngcontent-%COMP%]{background-color:#03a9f429!important}.all-items[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px}"]}),o})()},{path:"edit-user-profile",component:U}];let F=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.Bz.forChild(I)],l.Bz]}),o})();var j=r(755);let q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.ez,F,j.m]]}),o})()}}]);