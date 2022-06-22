"use strict";
(self.webpackChunkHitMakerApp = self.webpackChunkHitMakerApp || []).push([
    [317], {
        8317: (Xt, O, r) => {
            r.r(O), r.d(O, { HomeModule: () => Vt });
            var c = r(9808),
                p = r(1083),
                e = r(5e3),
                f = r(5944),
                k = r(3398),
                x = r(4181),
                b = r(5215),
                g = r(7093),
                v = r(9506),
                y = r(7423),
                u = r(3075),
                F = r(8675),
                Q = r(4004),
                C = r(2853),
                U = r(3028),
                M = r(3092),
                B = r(508);

            function Y(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "mat-option", 12), e.NdJ("click", function() { const a = e.CHM(t).$implicit; return e.oxw().viewProfile(a) }), e._UZ(1, "img", 13), e.TgZ(2, "span"), e._uU(3), e.qZA()()
                }
                if (2 & n) {
                    const t = o.$implicit;
                    e.Q6J("value", t.FirstName), e.xp6(1), e.Q6J("src", t.ProfileImageUri, e.LSH), e.xp6(2), e.Oqu(t.FirstName + " " + t.LastName)
                }
            }

            function D(n, o) { 1 & n && (e.TgZ(0, "div")(1, "div", 14), e._UZ(2, "ngx-shimmer-loading", 15)(3, "ngx-shimmer-loading", 16)(4, "ngx-shimmer-loading", 16), e.qZA(), e.TgZ(5, "div", 14), e._UZ(6, "ngx-shimmer-loading", 15)(7, "ngx-shimmer-loading", 16)(8, "ngx-shimmer-loading", 16), e.qZA(), e.TgZ(9, "div", 14), e._UZ(10, "ngx-shimmer-loading", 15)(11, "ngx-shimmer-loading", 16)(12, "ngx-shimmer-loading", 16), e.qZA()()), 2 & n && (e.xp6(2), e.Q6J("shape", "circle")("width", "60px"), e.xp6(1), e.Q6J("shape", "rect")("width", "120px")("height", "20px"), e.xp6(1), e.Q6J("shape", "rect")("width", "80px")("height", "30px"), e.xp6(2), e.Q6J("shape", "circle")("width", "60px"), e.xp6(1), e.Q6J("shape", "rect")("width", "120px")("height", "20px"), e.xp6(1), e.Q6J("shape", "rect")("width", "80px")("height", "30px"), e.xp6(2), e.Q6J("shape", "circle")("width", "60px"), e.xp6(1), e.Q6J("shape", "rect")("width", "120px")("height", "20px"), e.xp6(1), e.Q6J("shape", "rect")("width", "80px")("height", "30px")) }

            function E(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 19)(1, "img", 20), e.NdJ("click", function() { const a = e.CHM(t).$implicit; return e.oxw(2).viewProfile(a) }), e.qZA(), e.TgZ(2, "h3", 21), e.NdJ("click", function() { const a = e.CHM(t).$implicit; return e.oxw(2).viewProfile(a) }), e._uU(3), e._UZ(4, "br"), e.TgZ(5, "span", 22), e._uU(6), e.ALo(7, "slice"), e.qZA()()()
                }
                if (2 & n) {
                    const t = o.$implicit;
                    e.xp6(1), e.MGl("src", "", null == (null == t ? null : t.ProfileImageUri) || "string" == (null == t ? null : t.ProfileImageUri) ? "assets/images/profile.png" : null == t ? null : t.ProfileImageUri, " ", e.LSH), e.xp6(2), e.hij("", null != t ? t.FirstName + " " + t.LastName : "N/A", " "), e.xp6(3), e.Oqu(null != t ? e.Dn7(7, 3, t.Username + " " + t.Username, 0, 9) : "N/A")
                }
            }

            function H(n, o) {
                if (1 & n && (e.TgZ(0, "section", 17), e.YNc(1, E, 8, 7, "div", 18), e.qZA()), 2 & n) {
                    const t = e.oxw();
                    e.xp6(1), e.Q6J("ngForOf", t.allArtistPublcProfiles)
                }
            }
            let R = (() => {
                class n {
                    constructor(t, i, s, a, l, d, P) { this.router = t, this.appSetttingsService = i, this.userService = s, this.demoTracksService = a, this.snackBarOpenerService = l, this.voteService = d, this.publicProfileService = P, this.isPageLoading = !0, this.subscription = [], this.appSettings = null, this.allArtistPublcProfiles = null, this.searchInput = new u.NI("") }
                    _filterStates(t) { const i = t.toLowerCase(); return this.publicProfilesStates.filter(s => (s.FirstName + " " + s.LastName).toLowerCase().includes(i)) }
                    ngOnInit() { this.subscribeToAppSettings(), this.subscrbToPPShttpstatus(), this.subscribeToAllArtstPublcProfl(), this.appSetttingsService.getAppSettings(), setTimeout(() => { null != this.appSettings && 1 == this.appSettings.ShowPublicArtisteProfiles && 0 == this.appSettings.ShowContestants && this.publicProfileService.getArtistPublcProfls() }, 1e3), setTimeout(() => { this.filterProfiles = this.searchInput.valueChanges.pipe((0, F.O)(""), (0, Q.U)(t => t ? this._filterStates(t) : this.publicProfilesStates.slice())) }, 5e3) }
                    ngOnDestroy() { this.subscription.length > 0 && this.subscription.forEach(t => { t.unsubscribe() }) }
                    subscribeToAppSettings() { this.subscription.push(this.appSetttingsService.appSettings.subscribe({ next: t => { null != t && (this.appSettings = t) }, error: t => { console.error(`inside <LandingPageComponent.ngOnInit()> ${"statuscode:"+t.status}  ${"message:"+t.message}`), "request_time_out" == t.message && this.snackBarOpenerService.openToastSnackBar("Request time out", !0, 4), 0 == t.status && this.snackBarOpenerService.openToastSnackBar("Internet connection error", !0, 4) }, complete: () => { console.log("landingPage_subject complete") } })) }

                    subscrbToPPShttpstatus() {
                        this.publicProfileService.isHttpLoading.subscribe({
                            next: t => { console.log(`http Loading status is: ${t}`), this.isPageLoading = t }
                        })
                    }
                    subscribeToAllArtstPublcProfl() { this.subscription.push(this.publicProfileService.artstPublcProfl.subscribe({ next: t => { null != t && (this.allArtistPublcProfiles = t, console.log(this.allArtistPublcProfiles), this.publicProfilesStates = t) }, error: t => { console.error(`inside <SearchPublicProfilesComponent.subscribeToArtstPublcProfl()> ${"statuscode:"+t.status}  ${"message:"+t.message}`), "request_time_out" == t.message && this.snackBarOpenerService.openToastSnackBar("Request time out", !0, 4), 0 == t.status && this.snackBarOpenerService.openToastSnackBar("Internet connection error", !0, 4) }, complete: () => {} })) }
                    setVoteForCntstntDetails(t) { null != t && null != t.ThirdPartySystemId ? (this.voteService.setVoteForCntstntDetails(t), this.router.navigate(["/vote/votenow/", "1"])) : console.log("this, contestant and his ThirdPartySystemId is null") }
                    viewProfile(t) { null != t && null != t.ThirdPartySystemId ? (this.userService.getUserByByThirdPartyId(t.ThirdPartySystemId), this.router.navigate(["/vote/vote_for_artist"])) : console.log("this, contestant and his ThirdPartySystemId is null") }
                    goToDemoPlayer(t) { if (null != t && null != t.ThirdPartySystemId) try { this.demoTracksService.setArtstProflDetails(t), this.router.navigate(["/public_profile/demoplayer"]) } catch (i) { console.log(i) } else console.log("this, Artist and his ThirdPartySystemId is null") }
                }
                return n.\u0275fac = function(t) { return new(t || n)(e.Y36(p.F0), e.Y36(x.C), e.Y36(f.K), e.Y36(C.X), e.Y36(b.N), e.Y36(k.U), e.Y36(U._)) }, n.\u0275cmp = e.Xpm({
                    type: n,
                    selectors: [
                        ["app-search-public-profiles"]
                    ],
                    decls: 17,
                    vars: 7,
                    consts: [
                        ["fxLayout", "column", 2, "margin-top", "90px"],
                        ["fxLayout", "column", "fxLayoutALign", "start", 2, "margin-left", "30px", "margin-right", "30px", "margin-bottom", "60px"],
                        [2, "font-weight", "700"],
                        [1, "search-form"],
                        ["type", "search", "value", "", "placeholder", "Search for an artist", 1, "search-input", 3, "matAutocomplete", "formControl"],
                        ["panelWidth", "80%"],
                        ["auto", "matAutocomplete"],
                        [3, "value", "click", 4, "ngFor", "ngForOf"],
                        ["type", "submit ", 1, "search-button"],
                        [1, "material-icons", "md-36", "searchicon"],
                        [4, "ngIf"],
                        ["fxLayout", "column", "fxLayoutAlign", "flex-start none", "fxLayoutGap", "10px", "style", "margin-top: -45px;", 4, "ngIf"],
                        [3, "value", "click"],
                        ["aria-hidden", "", "height", "25", 1, "example-option-img", 2, "border-radius", "40%", "margin-right", "5px", 3, "src"],
                        ["fxLayout", "row", "fxLayoutAlign", "space-evenly center"],
                        [3, "shape", "width"],
                        ["borderRadius", "15", 2, "margin-left", "10px", 3, "shape", "width", "height"],
                        ["fxLayout", "column", "fxLayoutAlign", "flex-start none", "fxLayoutGap", "10px", 2, "margin-top", "-45px"],
                        ["fxLayout", "row", "class", "single_prof", "fxLayoutAlign", "flex-start center", 4, "ngFor", "ngForOf"],
                        ["fxLayout", "row", "fxLayoutAlign", "flex-start center", 1, "single_prof"],
                        [1, "profileimage", 3, "src", "click"],
                        [2, "margin-top", "20px", "font-weight", "600", 3, "click"],
                        [1, "username", 2, "font-size", "12px", "color", "gray"]
                    ],
                    template: function(t, i) {
                        if (1 & t && (e.TgZ(0, "section", 0)(1, "div", 1)(2, "h3", 2), e._uU(3, "Public Artiste Profiles"), e.qZA(), e.TgZ(4, "h4"), e._uU(5, " Connect with the MTN HitMaker Artistes through their art. Search and view demo tracks and profile details of your favourite Artiste. "), e.qZA(), e.TgZ(6, "form", 3), e._UZ(7, "input", 4), e.TgZ(8, "mat-autocomplete", 5, 6), e.YNc(10, Y, 4, 3, "mat-option", 7), e.ALo(11, "async"), e.qZA(), e.TgZ(12, "button", 8)(13, "p", 9), e._uU(14, "search"), e.qZA()()()(), e.YNc(15, D, 13, 24, "div", 10), e.YNc(16, H, 2, 1, "section", 11), e.qZA()), 2 & t) {
                            const s = e.MAs(9);
                            e.xp6(7), e.Q6J("matAutocomplete", s)("formControl", i.searchInput), e.xp6(3), e.Q6J("ngForOf", e.lcZ(11, 5, i.filterProfiles)), e.xp6(5), e.Q6J("ngIf", i.isPageLoading), e.xp6(1), e.Q6J("ngIf", !i.isPageLoading)
                        }
                    },
                    directives: [g.xw, u._Y, u.JL, u.F, M.ZL, u.Fj, u.JJ, u.oH, M.XC, c.sg, B.ey, c.O5, g.Wh, v.w, g.SQ],
                    pipes: [c.Ov, c.OU],
                    styles: [".single_prof[_ngcontent-%COMP%]{margin-left:28px;margin-bottom:0!important}.profileimage[_ngcontent-%COMP%]{height:60px;width:60px;border:3px solid #FFC624;border-radius:50%;object-fit:cover;margin-right:20px}.search-form[_ngcontent-%COMP%]{top:-5px;position:-webkit-sticky;display:flex;position:sticky;width:100%;height:45px;border-radius:10px;box-shadow:0 6px 8px #00000026;background:#fff;transition:all .3s ease;margin:10px auto 17px}.search-form.focus[_ngcontent-%COMP%]{box-shadow:0 3px 4px #00000026}.search-form[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{position:absolute;top:13px;left:38px;font-size:14px;background:none;width:75%;height:20px;border:none;-webkit-appearance:none;appearance:none;outline:none;background-color:none;color:var(--lightdark_text_color)}.search-form[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%]{position:absolute;top:8px;right:16px;height:30px;width:30px;padding:0;margin:0;border:none;background:none;outline:none!important;cursor:pointer}.search-form[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%]   .searchicon[_ngcontent-%COMP%]{font-size:30px}  .mat-autocomplete-panel{top:9px!important;width:84%!important;right:0px!important;position:relative}"]
                }), n
            })();

            function j(n, o) { 1 & n && (e.TgZ(0, "h4"), e._uU(1, " No contestants availble\n"), e.qZA()) }

            function $(n, o) { 1 & n && (e.TgZ(0, "div")(1, "div", 7), e._UZ(2, "ngx-shimmer-loading", 8)(3, "ngx-shimmer-loading", 9)(4, "ngx-shimmer-loading", 9), e.qZA(), e.TgZ(5, "div", 7), e._UZ(6, "ngx-shimmer-loading", 8)(7, "ngx-shimmer-loading", 9)(8, "ngx-shimmer-loading", 9), e.qZA(), e.TgZ(9, "div", 7), e._UZ(10, "ngx-shimmer-loading", 8)(11, "ngx-shimmer-loading", 9)(12, "ngx-shimmer-loading", 9), e.qZA()()), 2 & n && (e.xp6(2), e.Q6J("shape", "circle")("width", "60px"), e.xp6(1), e.Q6J("shape", "rect")("width", "120px")("height", "20px"), e.xp6(1), e.Q6J("shape", "rect")("width", "80px")("height", "30px"), e.xp6(2), e.Q6J("shape", "circle")("width", "60px"), e.xp6(1), e.Q6J("shape", "rect")("width", "120px")("height", "20px"), e.xp6(1), e.Q6J("shape", "rect")("width", "80px")("height", "30px"), e.xp6(2), e.Q6J("shape", "circle")("width", "60px"), e.xp6(1), e.Q6J("shape", "rect")("width", "120px")("height", "20px"), e.xp6(1), e.Q6J("shape", "rect")("width", "80px")("height", "30px")) }

            function z(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 7)(1, "img", 10), e.NdJ("click", function() { const a = e.CHM(t).$implicit; return e.oxw(2).viewProfile(a) }), e.qZA(), e.TgZ(2, "h3", 11), e.NdJ("click", function() { const a = e.CHM(t).$implicit; return e.oxw(2).viewProfile(a) }), e._uU(3), e.ALo(4, "slice"), e.qZA(), e.TgZ(5, "button", 12), e.NdJ("click", function() { const a = e.CHM(t).$implicit; return e.oxw(2).setVoteForCntstntDetails(a) }), e._uU(6, "Vote Now"), e.qZA()()
                }
                if (2 & n) {
                    const t = o.$implicit,
                        i = e.oxw(2);
                    e.xp6(1), e.s9C("src", null == (null == t ? null : t.ProfileImageUri) || "string" == (null == t ? null : t.ProfileImageUri) ? "assets/images/profile.png" : null == t ? null : t.ProfileImageUri, e.LSH), e.xp6(2), e.Oqu(null != t ? e.Dn7(4, 3, t.FirstName + " " + t.LastName, 0, 9) + "..." : "N/A"), e.xp6(2), e.Q6J("disabled", null != i.appSettings && !i.appSettings.AcceptVotes)
                }
            }

            function W(n, o) {
                if (1 & n && (e.TgZ(0, "section", 2)(1, "div", 3)(2, "h3", 4), e._uU(3, "Contestants"), e.qZA(), e.TgZ(4, "h4"), e._uU(5, " Vote for your favorite Contestant by selecting \u201cVote now\u201d by the name of the Contestant you would like to vote for "), e.qZA()(), e.TgZ(6, "section", 5), e.YNc(7, $, 13, 24, "div", 0), e.YNc(8, z, 7, 7, "div", 6), e.qZA()()), 2 & n) {
                    const t = e.oxw();
                    e.xp6(7), e.Q6J("ngIf", t.isPageLoading), e.xp6(1), e.Q6J("ngForOf", t.allNotEvictedArtst)
                }
            }

            function G(n, o) { 1 & n && e._UZ(0, "app-search-public-profiles") }
            let V = (() => {
                class n {
                    constructor(t, i, s, a, l) { this.router = t, this.userService = i, this.voteService = s, this.appSetttingsService = a, this.snackBarOpenerService = l, this.isPageLoading = !0, this.subscription = [], this.allNotEvictedArtst = null, this.appSettings = null }
                    ngOnInit() {
                        this.subscription.push(this.appSetttingsService.appSettings.subscribe({ next: t => { null != t && (this.appSettings = t) }, error: t => { console.error(`inside <ContestantsPageComponent.ngOnInit()> ${"statuscode:"+t.status}  ${"message:"+t.message}`), "request_time_out" == t.message && this.snackBarOpenerService.openToastSnackBar("Request time out", !0, 4), 0 == t.status && this.snackBarOpenerService.openToastSnackBar("Internet connection error", !0, 4) }, complete: () => {} })), this.appSetttingsService.getAppSettings(), setTimeout(() => {
                            var t;
                            console.log(this.appSettings), null != this.appSettings && 1 == (null === (t = this.appSettings) || void 0 === t ? void 0 : t.ShowContestants) ? (console.log("Showing Contestants"), this.userService.getAllNotEvictedArtist()) : (this.isPageLoading = !1, console.log("appSettings is null and Contestants aren't allowed to be shown"))
                        }, 2e3), this.subscribeToNoTAllEvictedArtist()
                    }
                    ngOnDestroy() { this.subscription.length > 0 && this.subscription.forEach(t => { t.unsubscribe() }) }
                    subscribeToNoTAllEvictedArtist() { this.subscription.push(this.userService.allNotEvictedArtist.subscribe({ next: t => { null != t && (this.allNotEvictedArtst = t, console.log(this.allNotEvictedArtst), console.log("emited"), this.isPageLoading = !1) }, error: t => { console.log(`inside <EvictionPageComponent.subscribeToAllEvictedArtist()> ${"statuscode:"+t.status}  ${"message:"+t.message}`), "request_time_out" == t.message && this.snackBarOpenerService.openToastSnackBar("Request time out", !0, 4), 0 == t.status && this.snackBarOpenerService.openToastSnackBar("Internet connection error", !0, 4) }, complete: () => { this.isPageLoading = !1 } })) }
                    setVoteForCntstntDetails(t) { null != t && null != t.ThirdPartySystemId ? (this.voteService.setVoteForCntstntDetails(t), this.router.navigate(["/vote/votenow/", "1"])) : console.log("this, contestant and his ThirdPartySystemId is null") }
                    viewProfile(t) { null != t && null != t.ThirdPartySystemId ? (this.userService.getUserByByThirdPartyId(t.ThirdPartySystemId), this.router.navigate(["/vote/vote_for_artist"])) : console.log("this, contestant and his ThirdPartySystemId is null") }
                }
                return n.\u0275fac = function(t) { return new(t || n)(e.Y36(p.F0), e.Y36(f.K), e.Y36(k.U), e.Y36(x.C), e.Y36(b.N)) }, n.\u0275cmp = e.Xpm({
                    type: n,
                    selectors: [
                        ["app-contestants-page"]
                    ],
                    decls: 3,
                    vars: 3,
                    consts: [
                        [4, "ngIf"],
                        ["fxLayout", "column", "style", "margin-top: 60px;", 4, "ngIf"],
                        ["fxLayout", "column", 2, "margin-top", "60px"],
                        ["fxLayout", "column", "fxLayoutALign", "start", 2, "margin", "30px"],
                        [2, "font-weight", "700"],
                        ["fxLayout", "column", "fxLayoutAlign", "space-evenly none", "fxLayoutGap", "10px", 2, "margin-top", "-30px"],
                        ["fxLayout", "row", "fxLayoutAlign", "space-evenly center", 4, "ngFor", "ngForOf"],
                        ["fxLayout", "row", "fxLayoutAlign", "space-evenly center"],
                        [3, "shape", "width"],
                        ["borderRadius", "15", 2, "margin-left", "10px", 3, "shape", "width", "height"],
                        [1, "image", 3, "src", "click"],
                        [2, "margin-top", "20px", "font-weight", "600", "width", "28%", 3, "click"],
                        ["mat-flat-button", "", "color", "primary", 1, "vote-btn", 3, "disabled", "click"]
                    ],
                    template: function(t, i) { 1 & t && (e.YNc(0, j, 2, 0, "h4", 0), e.YNc(1, W, 9, 2, "section", 1), e.YNc(2, G, 1, 0, "app-search-public-profiles", 0)), 2 & t && (e.Q6J("ngIf", null != i.appSettings && 1 == i.appSettings.ShowContestants && (null == i.allNotEvictedArtst || 0 == i.allNotEvictedArtst.length)), e.xp6(1), e.Q6J("ngIf", null != i.appSettings && 1 == i.appSettings.ShowContestants), e.xp6(1), e.Q6J("ngIf", null != i.appSettings && 0 == i.appSettings.ShowContestants && null != i.appSettings && 1 == i.appSettings.ShowPublicArtisteProfiles)) },
                    directives: [c.O5, g.xw, g.Wh, g.SQ, v.w, c.sg, y.lW, R],
                    pipes: [c.OU],
                    styles: [".votebtn[_ngcontent-%COMP%]{background-color:#ffc624;color:#000}.vote-btn[_ngcontent-%COMP%]{height:27px;width:105px;justify-content:center;display:flex;align-items:center}.image[_ngcontent-%COMP%]{height:60px;width:60px;border:3px solid #FFC624;border-radius:50%;object-fit:cover}"]
                }), n
            })();
            var X = r(5113),
                K = r(1135);
            let S = (() => {
                class n {
                    constructor(t) { this.router = t, this.showNav$ = new K.X(!1), t.events.subscribe(() => { this.setShowNav(!1) }) }
                    getShowNav() { return this.showNav$.asObservable() }
                    setShowNav(t) { this.showNav$.next(t) }
                    toggleNavState() { this.showNav$.next(!this.showNav$.value) }
                    isNavOpen() { return this.showNav$.value }
                }
                return n.\u0275fac = function(t) { return new(t || n)(e.LFG(p.F0)) }, n.\u0275prov = e.Yz7({ token: n, factory: n.\u0275fac, providedIn: "root" }), n
            })();
            var T = (() => { return (n = T || (T = {})).Left = "left", n.Right = "right", T; var n })(),
                N = r(3322);

            function ee(n, o) { 1 & n && e.GkF(0) }
            const te = function(n) { return { "side-nav-bar-collapsed": n } },
                ne = function(n) { return { transition: n } },
                ie = function(n) { return { "side-nav-bar-overlay-collapsed": n } };
            let oe = (() => {
                class n {
                    constructor(t) { this.navService = t, this.duration = .25, this.navWidth = window.innerWidth, this.direction = T.Left }
                    ngOnInit() { this.showSideNav = this.navService.getShowNav() }
                    onSidebarClose() { this.navService.setShowNav(!1) }
                    getSideNavBarStyle(t) { let i = {}; return i.transition = this.direction + " " + this.duration + "s, visibility " + this.duration + "s", i.width = this.navWidth + "px", i[this.direction] = (t ? 0 : -1 * this.navWidth) + "px", i }
                }
                return n.\u0275fac = function(t) { return new(t || n)(e.Y36(S)) }, n.\u0275cmp = e.Xpm({
                    type: n,
                    selectors: [
                        ["app-side-nav"]
                    ],
                    inputs: { sidenavTemplateRef: "sidenavTemplateRef", duration: "duration", navWidth: "navWidth", direction: "direction" },
                    decls: 16,
                    vars: 17,
                    consts: [
                        [1, "side-nav-bar", 3, "ngClass"],
                        [1, "side-nav-bar-overlay", 3, "ngStyle", "ngClass", "click"],
                        [1, "side-nav-bar-menu-container", 3, "ngStyle"],
                        ["fxLayout", "row", "fxLayoutAlign", "space-around center", 2, "margin-top", "20px"],
                        ["src", "assets/images/hit.png"],
                        [1, "icon-back-design"],
                        ["mat-flat-button", "", "id", "backbtn", 3, "click"],
                        [1, "material-icons", "md-36", "backicon"],
                        [2, "height", "-10px", "width", "210px", "padding", "-10px", "margin", "30px"],
                        [1, "side-nav-bar-content-container"],
                        [4, "ngTemplateOutlet"]
                    ],
                    template: function(t, i) { 1 & t && (e.TgZ(0, "div")(1, "div", 0), e.ALo(2, "async"), e.TgZ(3, "div", 1), e.NdJ("click", function() { return i.onSidebarClose() }), e.ALo(4, "async"), e.qZA(), e.TgZ(5, "div", 2), e.ALo(6, "async"), e.TgZ(7, "div", 3), e._UZ(8, "img", 4), e.TgZ(9, "div", 5)(10, "button", 6), e.NdJ("click", function() { return i.onSidebarClose() }), e.TgZ(11, "span", 7), e._uU(12, "arrow_back_ios"), e.qZA()()()(), e._UZ(13, "hr", 8), e.TgZ(14, "div", 9), e.YNc(15, ee, 1, 0, "ng-container", 10), e.qZA()()()()), 2 & t && (e.xp6(1), e.Q6J("ngClass", e.VKq(11, te, !e.lcZ(2, 5, i.showSideNav))), e.xp6(2), e.Q6J("ngStyle", e.VKq(13, ne, "background-color " + i.duration + "s, visibility " + i.duration + "s"))("ngClass", e.VKq(15, ie, !e.lcZ(4, 7, i.showSideNav))), e.xp6(2), e.Q6J("ngStyle", i.getSideNavBarStyle(e.lcZ(6, 9, i.showSideNav))), e.xp6(10), e.Q6J("ngTemplateOutlet", i.sidenavTemplateRef)) },
                    directives: [c.mk, N.oO, c.PC, N.Zl, g.xw, g.Wh, y.lW, c.tP],
                    pipes: [c.Ov],
                    styles: [".side-nav-bar[_ngcontent-%COMP%]{position:fixed;z-index:1001;top:0;bottom:0;left:0;right:0}.side-nav-bar[_ngcontent-%COMP%]   .side-nav-bar-overlay[_ngcontent-%COMP%]{background:rgba(0,0,0,.5);width:100%;height:100%}.side-nav-bar[_ngcontent-%COMP%]   .side-nav-bar-menu-container[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;display:flex;flex-direction:column;border-top-right-radius:20px;border-bottom-right-radius:20px}.side-nav-bar[_ngcontent-%COMP%]   .side-nav-bar-menu-container[_ngcontent-%COMP%]   .side-nav-bar-close[_ngcontent-%COMP%]{display:inline-block;font-size:2.5em;margin:24px 0 0 24px;cursor:pointer}.side-nav-bar[_ngcontent-%COMP%]   .side-nav-bar-content-container[_ngcontent-%COMP%]{padding:32px}.side-nav-bar-overlay-collapsed[_ngcontent-%COMP%]{background:transparent!important}.side-nav-bar-collapsed[_ngcontent-%COMP%]{visibility:collapse!important}.icon-back-design[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:30px;width:30px;background-color:#fff;border-radius:12px;box-shadow:#0006 0 2px 4px,#0000004d 0 7px 13px -3px,#0003 0 -3px inset}#backbtn[_ngcontent-%COMP%]{border-radius:15px;height:40px;width:38px;display:flex;justify-content:center;align-items:center;min-width:45px;padding:0 0 0 7px;background-color:var(--backiconback_g)}.backicon[_ngcontent-%COMP%]{margin-bottom:0;display:flex;justify-content:center;align-items:center;font-size:17px;cursor:pointer}"]
                }), n
            })();
            var w = r(5245);
            let se = (() => {
                    class n {
                        constructor(t, i) { this.navService = t, this.router = i, this.iconColorChanger() }
                        ngOnInit() {}
                        gotohelp() { this.router.navigateByUrl("/staticpages/help") }
                        toggleSideNav() { this.navService.setShowNav(!0) }
                        iconColorChanger() {
                            var t = "";
                            this.router.events.subscribe(i => {
                                if (i instanceof p.m2) {
                                    t = i.url;
                                    var s = document.getElementById("headermenu"),
                                        a = document.getElementById("menu"),
                                        l = document.getElementById("bell"),
                                        d = document.getElementById("help");
                                    "/home/home/landingpage" == t || "/" == t ? (console.log("adding active..."), a.classList.add("active"), l.classList.add("active"), d.classList.add("active"), s.classList.remove("activescroll"), window.onscroll = function() {
                                        ("/home/home/landingpage" == t || "/" == t) && (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ? s.classList.add("activehomescroll") : s.classList.remove("activehomescroll"))
                                    }) : a.classList.contains("active") && l.classList.contains("active") && d.classList.contains("active") && (console.log("removing active..."), a.classList.remove("active"), l.classList.remove("active"), d.classList.remove("active"), s.classList.remove("activehomescroll"), this.scrollFunction())
                                }
                            })
                        }
                        scrollFunction() {
                            setTimeout(() => {
                                window.onscroll = function() {
                                    var t = document.getElementById("headermenu");
                                    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ? t.classList.add("activescroll") : t.classList.remove("activescroll")
                                }
                            }, 200)
                        }
                    }
                    return n.\u0275fac = function(t) { return new(t || n)(e.Y36(S), e.Y36(p.F0)) }, n.\u0275cmp = e.Xpm({
                        type: n,
                        selectors: [
                            ["app-header"]
                        ],
                        decls: 10,
                        vars: 0,
                        consts: [
                            ["id", "headermenu", 1, "header-menu"],
                            ["fxLayout", "row", "fxLayoutAlign", "space-between end"],
                            ["id", "menu", 1, "menu-icon", 3, "click"],
                            ["id", "helpbell_cnt"],
                            ["id", "help", 1, "notification-icon", 3, "click"],
                            ["id", "bell", 1, "notification-icon"],
                            [1, "app-header"]
                        ],
                        template: function(t, i) { 1 & t && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "mat-icon", 2), e.NdJ("click", function() { return i.toggleSideNav() }), e._uU(3, "short_text"), e.qZA(), e.TgZ(4, "div", 3)(5, "mat-icon", 4), e.NdJ("click", function() { return i.gotohelp() }), e._uU(6, "help_outline"), e.qZA(), e.TgZ(7, "mat-icon", 5), e._uU(8, "notifications_none"), e.qZA()()()(), e._UZ(9, "header", 6)) },
                        directives: [g.xw, g.Wh, w.Hw],
                        styles: [".menu-icon[_ngcontent-%COMP%]{font-size:2.5em;margin-left:15px;cursor:pointer;width:auto!important;height:auto!important}#helpbell_cnt[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}#helpbell_cnt[_ngcontent-%COMP%]   #help-icon[_ngcontent-%COMP%]{height:25.25px;width:25.25px}#helpbell_cnt[_ngcontent-%COMP%]   #help[_ngcontent-%COMP%]{height:21.25px;width:21.25px}#helpbell_cnt[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%]{font-size:2.2em;margin-right:15px;cursor:pointer;width:auto!important;height:auto!important;margin-left:3px}.header-menu[_ngcontent-%COMP%]{margin-top:19px;width:100%;position:fixed;z-index:40;transition:all .3s ease;padding:9px}.activescroll[_ngcontent-%COMP%]{background-color:var(--appbarScrollback_g);margin-top:-2px;padding:9px;border-bottom-left-radius:20px;border-bottom-right-radius:20px}.activehomescroll[_ngcontent-%COMP%]{background-color:#000;margin-top:0;padding:9px}.header-button[_ngcontent-%COMP%]{margin-top:90px}.carousel[_ngcontent-%COMP%]{width:100%;height:900px;position:relative;z-index:1}.active[_ngcontent-%COMP%]{color:#fff!important}"]
                    }), n
                })(),
                ae = (() => {
                    class n {
                        constructor(t) { this.router = t }
                        ngOnInit() {}
                    }
                    return n.\u0275fac = function(t) { return new(t || n)(e.Y36(p.F0)) }, n.\u0275cmp = e.Xpm({
                        type: n,
                        selectors: [
                            ["app-footer"]
                        ],
                        decls: 23,
                        vars: 0,
                        consts: [
                            [1, "push"],
                            [1, "app-footer"],
                            ["fxLayout", "row", "fxLayoutAlign", "space-around center"],
                            ["type", "button", "routerLink", "landingpage", 1, "but"],
                            [1, "material-icons", 2, "font-size", "38px"],
                            [2, "margin-top", "-5px"],
                            ["type", "button", "routerLink", "contestants", 1, "but"],
                            [1, "singer-icon", "icon-singer-svgrepo-com"],
                            ["type", "button", "routerLink", "user-profile", 1, "but"],
                            [1, "fas", "fa-user", 2, "font-size", "30px", "margin-top", "5px"],
                            [2, "margin-top", "5px"]
                        ],
                        template: function(t, i) { 1 & t && (e._UZ(0, "div", 0), e.TgZ(1, "footer", 1)(2, "div", 2)(3, "div")(4, "button", 3)(5, "div")(6, "i", 4), e._uU(7, "home_filled"), e.qZA(), e.TgZ(8, "p", 5), e._uU(9, "Home"), e.qZA()()()(), e.TgZ(10, "div")(11, "button", 6)(12, "div")(13, "i", 7), e._uU(14, "\ue800"), e.qZA(), e.TgZ(15, "p", 5), e._uU(16, "Contestants"), e.qZA()()()(), e.TgZ(17, "div")(18, "button", 8)(19, "div"), e._UZ(20, "i", 9), e.TgZ(21, "p", 10), e._uU(22, "Profile"), e.qZA()()()()()()) },
                        directives: [g.xw, g.Wh, p.rH],
                        styles: ['@font-face{font-family:fontello;src:url(fontello.262ebdcb85927bb4.eot?85668125);src:url(fontello.262ebdcb85927bb4.eot?85668125#iefix) format("embedded-opentype"),url(fontello.5144d57416ca9895.woff?85668125) format("woff"),url(fontello.04e9610ad3ea2ed3.ttf?85668125) format("truetype"),url(fontello.e1d874fba74c7340.svg?85668125#fontello) format("svg");font-weight:400;font-style:normal}.singer-icon[_ngcontent-%COMP%]{font-family:fontello;font-style:normal;display:inline-block;text-decoration:inherit;width:1em;font-size:37px;margin-top:5px;font-weight:100;line-height:1;margin-bottom:6px}.push[_ngcontent-%COMP%]{height:82px}.app-footer[_ngcontent-%COMP%]{height:72px;border-radius:20px 20px 0 0;box-shadow:0 -7px 9px #00000048;position:fixed;width:100%;bottom:0px;background-color:var(--bottomnav_backcolor);z-index:100;box-sizing:border-box;padding-top:2px}.fas[_ngcontent-%COMP%]   .fa-user[_ngcontent-%COMP%]{font-size:100rem}mat-icon[_ngcontent-%COMP%]{font-size:30px}']
                    }), n
                })();

            function re(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "h3", 3)(1, "a", 4), e._uU(2, "Help"), e.qZA()(), e.TgZ(3, "h3", 5), e._uU(4, "About this app"), e.qZA(), e.TgZ(5, "h3", 3)(6, "a", 6), e._uU(7, "Live performances"), e.qZA()(), e._UZ(8, "br"), e.TgZ(9, "div", 7)(10, "h3", 8), e._uU(11, "Appearance"), e.qZA(), e.TgZ(12, "div", 9), e.NdJ("click", function() { return e.CHM(t), e.oxw().themeToggler() }), e.TgZ(13, "p", 10)(14, "mat-icon", 11), e._uU(15, "light_mode"), e.qZA(), e._uU(16, " DAY MODE"), e.qZA(), e.TgZ(17, "p", 12)(18, "mat-icon", 11), e._uU(19, "dark_mode"), e.qZA(), e._uU(20, " NIGHT MODE"), e.qZA()()()
                }
            }
            let le = (() => {
                class n {
                    constructor(t, i, s, a) { this.headerService = s, this.router = a, this.className = "", this.toggleControl = new u.NI(!1), this.mobileQuery = i.matchMedia("(max-width: 600px)"), this._mobileQueryListener = () => t.detectChanges(), this.mobileQuery.addListener(this._mobileQueryListener) }
                    ngOnDestroy() { this.mobileQuery.removeListener(this._mobileQueryListener) }
                    ngOnInit() {}
                    themeToggler() {
                        document.body.classList.toggle("darkMode");
                        var t = document.getElementById("dark_mode"),
                            i = document.getElementById("day_mode");
                        t.classList.toggle("activemode"), i.classList.toggle("activemode")
                    }
                }
                return n.\u0275fac = function(t) { return new(t || n)(e.Y36(e.sBO), e.Y36(X.vx), e.Y36(S), e.Y36(p.F0)) }, n.\u0275cmp = e.Xpm({
                    type: n,
                    selectors: [
                        ["app-home-page"]
                    ],
                    hostVars: 2,
                    hostBindings: function(t, i) { 2 & t && e.Tol(i.className) },
                    decls: 8,
                    vars: 3,
                    consts: [
                        [3, "sidenavTemplateRef", "direction", "navWidth", "duration"],
                        [1, "main-container"],
                        ["navContent", ""],
                        ["id", "fw"],
                        ["routerLink", "/staticpages/help", 1, "nav_link"],
                        ["id", "fw", "routerLink", "/home/home/about-page", 1, "nav_link"],
                        ["routerLink", "/liveperformance", 1, "nav_link"],
                        ["fxLayout", "row", "fxLayoutAlign", "space-between center"],
                        ["id", "fw", 2, "margin-bottom", "0px", "margin-top", "-4px"],
                        ["id", "toggler_cnt", 3, "click"],
                        ["id", "day_mode", 1, "activemode"],
                        [1, "notification-icon"],
                        ["id", "dark_mode"]
                    ],
                    template: function(t, i) {
                        if (1 & t && (e._UZ(0, "app-side-nav", 0), e.TgZ(1, "div", 1), e._UZ(2, "app-header"), e.TgZ(3, "section"), e._UZ(4, "router-outlet"), e.qZA(), e._UZ(5, "app-footer"), e.qZA(), e.YNc(6, re, 21, 0, "ng-template", null, 2, e.W1O)), 2 & t) {
                            const s = e.MAs(7);
                            e.Q6J("sidenavTemplateRef", s)("navWidth", 280)("duration", .5)
                        }
                    },
                    directives: [oe, se, p.lC, ae, p.yS, p.rH, g.xw, g.Wh, w.Hw],
                    styles: [".app-header[_ngcontent-%COMP%]{background-image:url(img1.5482354319678c48.jpg);height:300px;width:100%;background-position:center;background-repeat:no-repeat;background-size:cover}.main-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.main-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{flex:1}.header-button[_ngcontent-%COMP%]{margin-top:180px}#fw[_ngcontent-%COMP%]{font-size:18px}.nav_link[_ngcontent-%COMP%]{color:var(--lightdark_text_color);transition:all .5ms ease}.nav_link[_ngcontent-%COMP%]:hover{margin-left:5px}#toggler_cnt[_ngcontent-%COMP%]{display:flex;justify-content:start;align-items:center;border-radius:13px;background:#eee;padding:4px 8px 4px 2px;width:93px;height:26px;cursor:pointer}#toggler_cnt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:none!important;justify-content:space-between;font-family:Raleway;font-weight:600;font-size:9px;align-items:center;margin-bottom:0;color:#000!important}#toggler_cnt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{background-color:#fff;border-radius:50%;display:flex;justify-content:center;align-items:center;box-sizing:border-box;font-size:16px;margin-right:4px;width:22px;height:22px}#toggler_cnt[_ngcontent-%COMP%]   .activemode[_ngcontent-%COMP%]{display:flex!important;justify-content:space-between;font-family:Raleway;font-weight:600;font-size:9px;align-items:center;margin-bottom:0;color:#000!important;animation:showmenu .3s forwards;position:relative;top:-10%}@keyframes showmenu{to{top:0}}"]
                }), n
            })();
            var m = r(9313),
                ce = r(4978),
                h = r(5910),
                Z = r(7399),
                I = r(2979),
                ge = r(8966),
                pe = r(3216),
                A = r(6278),
                ue = r(773),
                _ = r(6162),
                de = r(4834);

            function me(n, o) { 1 & n && (e.TgZ(0, "div", 5), e._UZ(1, "ngx-shimmer-loading", 6)(2, "ngx-shimmer-loading", 6)(3, "ngx-shimmer-loading", 6), e.qZA()), 2 & n && (e.xp6(1), e.Q6J("shape", "rect")("width", "130px")("height", "170px"), e.xp6(1), e.Q6J("shape", "rect")("width", "130px")("height", "170px"), e.xp6(1), e.Q6J("shape", "rect")("width", "130px")("height", "170px")) }

            function he(n, o) { 1 & n && (e.TgZ(0, "p", 7), e._uU(1, "No Public Demo Available Now."), e.qZA()) }

            function _e(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 10), e._UZ(1, "mat-divider", 11), e.TgZ(2, "div", 12), e.NdJ("click", function() { const a = e.CHM(t).$implicit; return e.oxw(2).goToDemoPlayer(null == a ? null : a.UploadedByUser, a) }), e._UZ(3, "img", 13)(4, "img", 14), e.TgZ(5, "div", 15)(6, "p", 16), e._uU(7), e.ALo(8, "slice"), e.qZA(), e.TgZ(9, "p", 17), e._uU(10, "BY: "), e.TgZ(11, "b"), e._uU(12), e.ALo(13, "slice"), e.qZA()()()()()
                }
                if (2 & n) {
                    const t = o.$implicit;
                    e.xp6(3), e.s9C("src", null == (null == t ? null : t.ThumbnailUri) || "string" == (null == t ? null : t.ThumbnailUri) ? "assets/images/video_thumbnail.png" : null == t ? null : t.ThumbnailUri, e.LSH), e.xp6(4), e.Oqu(null != t ? e.Dn7(8, 3, null == t ? null : t.Title, 0, 15) + "..." : "N/A"), e.xp6(5), e.Oqu(null != t ? e.Dn7(13, 7, (null == t.UploadedByUser ? null : t.UploadedByUser.FirstName) + " " + (null == t.UploadedByUser ? null : t.UploadedByUser.LastName), 0, 20) : "N/A")
                }
            }

            function fe(n, o) {
                if (1 & n && (e.TgZ(0, "drag-scroll", 8), e._UZ(1, "div"), e.YNc(2, _e, 14, 11, "div", 9), e.qZA()), 2 & n) {
                    const t = e.oxw();
                    e.Q6J("drag-scroll-y-disabled", !0), e.xp6(2), e.Q6J("ngForOf", t.allPublcDemos)
                }
            }
            let xe = (() => {
                class n {
                    constructor(t, i, s, a, l) { this.router = t, this.appSetttingsService = i, this.userService = s, this.snackBarOpenerService = a, this.demoTracksService = l, this.isPageLoading = !0, this.subscription = [], this.appSettings = null, this.allPublcDemos = null, this.allArtist = null }
                    ngOnInit() { this.subscription.push(this.appSetttingsService.appSettings.subscribe({ next: t => { null != t && (this.appSettings = t) }, error: t => { console.error(`inside <HomePublicDemoComponent.ngOnInit()> ${"statuscode:"+t.status}  ${"message:"+t.message}`), "request_time_out" == t.message && this.snackBarOpenerService.openToastSnackBar("Request time out", !0, 4), 0 == t.status && this.snackBarOpenerService.openToastSnackBar("Internet connection error", !0, 4) }, complete: () => { console.log("landingPage_subject complete") } })), this.subscrbToAllPublcDemos(), this.subscrbToAllContestants(), setTimeout(() => { null != this.appSettings && this.appSettings.ShowPublicArtisteProfiles && !this.appSettings.ShowContestants && this.demoTracksService.getAllPublicDemos(m.x.searchDemo) }, 5e3) }
                    ngOnDestroy() { this.subscription.length > 0 && (console.log("unsubscribing"), this.subscription.forEach(t => { t.unsubscribe() })) }
                    subscrbToAllContestants() { this.subscription.push(this.userService.allallCntsnt.subscribe({ next: t => { null != t && 0 != t.length ? (this.allArtist = t, console.log("All Artist..."), console.log(this.allArtist)) : console.log("all Artist is null") }, error: t => { console.log(`inside <HomePublicDemoComponent.subscrbToAllContestants()> ${"statuscode:"+t.status}  ${"message:"+t.message}`), "request_time_out" == t.message && this.snackBarOpenerService.openToastSnackBar("Request time out", !0, 4), 0 == t.status && this.snackBarOpenerService.openToastSnackBar("Internet connection error", !0, 4) }, complete: () => {} })) }
                    subscrbToAllPublcDemos() { this.subscription.push(this.demoTracksService.allArtstPublcDemos.subscribe({ next: t => { null != t && null != this.allArtist ? (console.log("alll. artist"), console.log(this.allArtist), t.forEach(i => { this.allArtist.forEach(s => { i.LiveShowArtisteUserId == s.Id ? (i.UploadedByUser = s, console.log(`matched id is: ${i.LiveShowArtisteUserId}`)) : console.log(`Not mached id is: ${i.LiveShowArtisteUserId}`) }) }), console.log("all Public Demos...."), this.allPublcDemos = t, this.isPageLoading = !1) : console.log("all Public Demos-are-null"), console.log(this.allPublcDemos) }, error: t => { console.log(`inside <ProfilePageComponent.subscrbToLvPfmceBy()> ${"statuscode:"+t.status}  ${"message:"+t.message}`), "request_time_out" == t.message && this.snackBarOpenerService.openToastSnackBar("Request time out", !0, 4), 0 == t.status && this.snackBarOpenerService.openToastSnackBar("Internet connection error", !0, 4) }, complete: () => {} })) }
                    goToDemoPlayer(t, i) { if (null != t && null != t.ThirdPartySystemId) try { this.demoTracksService.setArtstProflDetails(t), this.demoTracksService.setPlayingDemoTrack(i), setTimeout(() => { this.router.navigate(["/public_profile/demoplayer"]) }, 100) } catch (s) { console.log(s) } else console.log("this, Artist and his ThirdPartySystemId is null") }
                }
                return n.\u0275fac = function(t) { return new(t || n)(e.Y36(p.F0), e.Y36(x.C), e.Y36(f.K), e.Y36(b.N), e.Y36(C.X)) }, n.\u0275cmp = e.Xpm({
                    type: n,
                    selectors: [
                        ["app-home-public-demo"]
                    ],
                    decls: 6,
                    vars: 3,
                    consts: [
                        ["id", "demos_cnt"],
                        ["id", "demo-tracks"],
                        ["fxLayout", "row", "fxLayoutAlign", "space-evenly center", 4, "ngIf"],
                        ["style", "margin-left: 19px;", 4, "ngIf"],
                        [3, "drag-scroll-y-disabled", 4, "ngIf"],
                        ["fxLayout", "row", "fxLayoutAlign", "space-evenly center"],
                        ["borderRadius", "10", 3, "shape", "width", "height"],
                        [2, "margin-left", "19px"],
                        [3, "drag-scroll-y-disabled"],
                        ["class", "single_demo", "drag-scroll-item", "", 4, "ngFor", "ngForOf"],
                        ["drag-scroll-item", "", 1, "single_demo"],
                        [2, "border-top-width", "1.6px", "height", "7px"],
                        [1, "demo", 3, "click"],
                        ["alt", "", 1, "demo_thumnaail", 3, "src"],
                        ["src", "assets/images/play.png", "alt", "", 1, "play_demo"],
                        [1, "demo_text"],
                        [1, "demo_title"],
                        [1, "demo_by"]
                    ],
                    template: function(t, i) { 1 & t && (e.TgZ(0, "div", 0)(1, "h3", 1), e._uU(2, "Public Demo-Tracks"), e.qZA(), e.YNc(3, me, 4, 9, "div", 2), e.YNc(4, he, 2, 0, "p", 3), e.YNc(5, fe, 3, 2, "drag-scroll", 4), e.qZA()), 2 & t && (e.xp6(3), e.Q6J("ngIf", i.isPageLoading), e.xp6(1), e.Q6J("ngIf", !i.isPageLoading && 0 == i.allPublcDemos.length), e.xp6(1), e.Q6J("ngIf", !i.isPageLoading && 0 != i.allPublcDemos.length)) },
                    directives: [c.O5, g.xw, g.Wh, v.w, _.HU, c.sg, _.$Z, de.d],
                    pipes: [c.OU],
                    styles: ["#demos_cnt[_ngcontent-%COMP%]{margin-bottom:3px}#demos_cnt[_ngcontent-%COMP%]   #demo-tracks[_ngcontent-%COMP%]{font-weight:700;margin-left:20px;margin-bottom:7px}#demos_cnt[_ngcontent-%COMP%]   .title_cnt[_ngcontent-%COMP%]{width:27%;box-sizing:border-box;padding-left:17px}#demos_cnt[_ngcontent-%COMP%]   .title_cnt[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:left;font-weight:700;font-size:16px;margin:0;line-height:113%;color:var(--lightdark_text_color)}#demos_cnt[_ngcontent-%COMP%]   .single_demo[_ngcontent-%COMP%]{width:130px;margin:0 0 0 18px}#demos_cnt[_ngcontent-%COMP%]   .single_demo[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]{position:relative;margin-top:3px}#demos_cnt[_ngcontent-%COMP%]   .single_demo[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   .demo_thumnaail[_ngcontent-%COMP%]{width:130px;height:170px;border-radius:8px;object-fit:cover}#demos_cnt[_ngcontent-%COMP%]   .single_demo[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   .play_demo[_ngcontent-%COMP%]{height:35px;width:35px;position:absolute;margin:auto;left:0;right:0;top:0;bottom:0}#demos_cnt[_ngcontent-%COMP%]   .single_demo[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   .demo_text[_ngcontent-%COMP%]{position:absolute;background:var(--yellowbtnback_g);bottom:0px;left:0px;right:0px}#demos_cnt[_ngcontent-%COMP%]   .single_demo[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   .demo_text[_ngcontent-%COMP%]   .demo_title[_ngcontent-%COMP%]{color:#000;font-size:16px;margin:0 0 0 2px}#demos_cnt[_ngcontent-%COMP%]   .single_demo[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   .demo_text[_ngcontent-%COMP%]   .demo_by[_ngcontent-%COMP%]{color:#000;font-size:12px;margin:0 0 0 2px}"]
                }), n
            })();
            const ve = ["myDialog"];

            function Pe(n, o) { 1 & n && (e.TgZ(0, "div", 44)(1, "div", 45), e._UZ(2, "img", 46), e.qZA(), e.TgZ(3, "div", 47)(4, "h3", 48), e._uU(5, "CONGRATULATIONS"), e.qZA(), e.TgZ(6, "h5", 49), e._uU(7, "You have been invited to the audition"), e.qZA()()()) }

            function be(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 50)(1, "h3", 51), e._uU(2, "AUDITION DETAILS"), e.qZA(), e.TgZ(3, "p", 52), e._uU(4, " Congrats "), e.TgZ(5, "span", 53), e._uU(6), e.qZA(), e._uU(7, "You have qualified for the auditions. Read carefully the deatils of the audition..."), e.TgZ(8, "span", 54), e.NdJ("click", function() {
                        e.CHM(t);
                        const s = e.oxw(2),
                            a = e.MAs(61);
                        return s.auditionDetails(a)
                    }), e._uU(9, "readmore"), e.qZA()()()
                }
                if (2 & n) {
                    const t = e.oxw(2);
                    e.xp6(6), e.Oqu(t.mUser.FirstName)
                }
            }

            function Ce(n, o) { 1 & n && (e.TgZ(0, "div", 55)(1, "div", 45), e._UZ(2, "img", 56), e.qZA(), e.TgZ(3, "div", 47)(4, "h3", 48), e._uU(5, "SORRY"), e.qZA(), e.TgZ(6, "h5", 57), e._uU(7, "Sorry, you couldn't make it to the audition"), e.qZA()()()) }

            function Te(n, o) { 1 & n && e._UZ(0, "mat-spinner", 58), 2 & n && e.Q6J("diameter", 30) }

            function Ze(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "button", 59), e.NdJ("click", function() { return e.CHM(t), e.oxw(2).showRegistration() }), e._uU(1, "Register for Contest"), e.qZA()
                }
            }

            function ye(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "button", 59), e.NdJ("click", function() { return e.CHM(t), e.oxw(2).showTrackUploadPage() }), e._uU(1, "Upload Demo"), e.qZA()
                }
            }

            function Se(n, o) { 1 & n && (e.TgZ(0, "div", 60), e._UZ(1, "div", 61), e.TgZ(2, "span", 62), e._uU(3, "Your registration is under review"), e.qZA()()) }

            function we(n, o) {
                if (1 & n && (e.TgZ(0, "div", 36), e.YNc(1, Pe, 8, 0, "div", 37), e.YNc(2, be, 10, 1, "div", 38), e.YNc(3, Ce, 8, 0, "div", 39), e.TgZ(4, "div", 40), e.YNc(5, Te, 1, 1, "mat-spinner", 41), e.qZA(), e.YNc(6, Ze, 2, 0, "button", 42), e.YNc(7, ye, 2, 0, "button", 42), e.YNc(8, Se, 4, 0, "div", 43), e.qZA()), 2 & n) {
                    const t = e.oxw();
                    e.xp6(1), e.Q6J("ngIf", !0 === t.passedReview), e.xp6(1), e.Q6J("ngIf", !0 === t.passedReview), e.xp6(1), e.Q6J("ngIf", !0 === t.failedReview), e.xp6(2), e.Q6J("ngIf", 1 == t.displaySpinner), e.xp6(1), e.Q6J("ngIf", !1 === t.userCheck), e.xp6(1), e.Q6J("ngIf", !0 === t.mediaCheck), e.xp6(1), e.Q6J("ngIf", !0 === t.mediaFull)
                }
            }

            function Ae(n, o) { 1 & n && (e.TgZ(0, "div", 44)(1, "div", 45), e._UZ(2, "img", 46), e.qZA(), e.TgZ(3, "div", 47)(4, "h3", 48), e._uU(5, "CONGRATULATIONS"), e.qZA(), e.TgZ(6, "h5", 49), e._uU(7, "You have been invited to the audition"), e.qZA()()()) }

            function Le(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 50)(1, "h3", 51), e._uU(2, "AUDITION DETAILS"), e.qZA(), e.TgZ(3, "p", 52), e._uU(4, " Congrats "), e.TgZ(5, "span", 53), e._uU(6), e.qZA(), e._uU(7, "You have qualified for the auditions. Read carefully the deatils of the audition..."), e.TgZ(8, "span", 54), e.NdJ("click", function() {
                        e.CHM(t);
                        const s = e.oxw(2),
                            a = e.MAs(61);
                        return s.auditionDetails(a)
                    }), e._uU(9, "readmore"), e.qZA()()()
                }
                if (2 & n) {
                    const t = e.oxw(2);
                    e.xp6(6), e.Oqu(t.mUser.FirstName)
                }
            }

            function Oe(n, o) { 1 & n && (e.TgZ(0, "div", 55)(1, "div", 45), e._UZ(2, "img", 56), e.qZA(), e.TgZ(3, "div", 47)(4, "h3", 48), e._uU(5, "SORRY"), e.qZA(), e.TgZ(6, "h5", 57), e._uU(7, "Sorry, you couldn't make it to the audition"), e.qZA()()()) }

            function ke(n, o) { 1 & n && e._UZ(0, "mat-spinner", 58), 2 & n && e.Q6J("diameter", 30) }

            function Ue(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "button", 59), e.NdJ("click", function() { return e.CHM(t), e.oxw(2).showRegistration() }), e._uU(1, "Register for Contest"), e.qZA()
                }
            }

            function Me(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "button", 59), e.NdJ("click", function() { return e.CHM(t), e.oxw(2).showTrackUploadPage() }), e._uU(1, "Upload Demo"), e.qZA()
                }
            }

            function Ne(n, o) { 1 & n && (e.TgZ(0, "div", 60), e._UZ(1, "div", 61), e.TgZ(2, "span", 62), e._uU(3, "Your registration is under review"), e.qZA()()) }

            function Ie(n, o) {
                if (1 & n && (e.TgZ(0, "div", 36), e.YNc(1, Ae, 8, 0, "div", 37), e.YNc(2, Le, 10, 1, "div", 38), e.YNc(3, Oe, 8, 0, "div", 39), e.TgZ(4, "div", 40), e.YNc(5, ke, 1, 1, "mat-spinner", 41), e.qZA(), e.YNc(6, Ue, 2, 0, "button", 42), e.YNc(7, Me, 2, 0, "button", 42), e.YNc(8, Ne, 4, 0, "div", 43), e.qZA()), 2 & n) {
                    const t = e.oxw();
                    e.xp6(1), e.Q6J("ngIf", !0 === t.passedReview), e.xp6(1), e.Q6J("ngIf", !0 === t.passedReview), e.xp6(1), e.Q6J("ngIf", !0 === t.failedReview), e.xp6(2), e.Q6J("ngIf", 1 == t.displaySpinner), e.xp6(1), e.Q6J("ngIf", !1 === t.userCheck), e.xp6(1), e.Q6J("ngIf", !0 === t.mediaCheck), e.xp6(1), e.Q6J("ngIf", !0 === t.mediaFull)
                }
            }

            function Je(n, o) { 1 & n && (e.TgZ(0, "div", 44)(1, "div", 45), e._UZ(2, "img", 46), e.qZA(), e.TgZ(3, "div", 47)(4, "h3", 48), e._uU(5, "CONGRATULATIONS"), e.qZA(), e.TgZ(6, "h5", 49), e._uU(7, "You have been invited to the audition"), e.qZA()()()) }

            function qe(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 50)(1, "h3", 51), e._uU(2, "AUDITION DETAILS"), e.qZA(), e.TgZ(3, "p", 52), e._uU(4, " Congrats "), e.TgZ(5, "span", 53), e._uU(6), e.qZA(), e._uU(7, "You have qualified for the auditions. Read carefully the deatils of the audition..."), e.TgZ(8, "span", 54), e.NdJ("click", function() {
                        e.CHM(t);
                        const s = e.oxw(2),
                            a = e.MAs(61);
                        return s.auditionDetails(a)
                    }), e._uU(9, "readmore"), e.qZA()()()
                }
                if (2 & n) {
                    const t = e.oxw(2);
                    e.xp6(6), e.Oqu(t.mUser.FirstName)
                }
            }

            function Fe(n, o) { 1 & n && (e.TgZ(0, "div", 55)(1, "div", 45), e._UZ(2, "img", 56), e.qZA(), e.TgZ(3, "div", 47)(4, "h3", 48), e._uU(5, "SORRY"), e.qZA(), e.TgZ(6, "h5", 57), e._uU(7, "Sorry, you couldn't make it to the audition"), e.qZA()()()) }

            function Qe(n, o) { 1 & n && e._UZ(0, "mat-spinner", 58), 2 & n && e.Q6J("diameter", 30) }

            function Be(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "button", 59), e.NdJ("click", function() { return e.CHM(t), e.oxw(2).showRegistration() }), e._uU(1, "Register for Contest"), e.qZA()
                }
            }

            function Ye(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "button", 59), e.NdJ("click", function() { return e.CHM(t), e.oxw(2).showTrackUploadPage() }), e._uU(1, "Upload Demo"), e.qZA()
                }
            }

            function De(n, o) { 1 & n && (e.TgZ(0, "div", 60), e._UZ(1, "div", 61), e.TgZ(2, "span", 62), e._uU(3, "Your registration is under review"), e.qZA()()) }

            function Ee(n, o) {
                if (1 & n && (e.TgZ(0, "div", 36), e.YNc(1, Je, 8, 0, "div", 37), e.YNc(2, qe, 10, 1, "div", 38), e.YNc(3, Fe, 8, 0, "div", 39), e.TgZ(4, "div", 40), e.YNc(5, Qe, 1, 1, "mat-spinner", 41), e.qZA(), e.YNc(6, Be, 2, 0, "button", 42), e.YNc(7, Ye, 2, 0, "button", 42), e.YNc(8, De, 4, 0, "div", 43), e.qZA()), 2 & n) {
                    const t = e.oxw();
                    e.xp6(1), e.Q6J("ngIf", !0 === t.passedReview), e.xp6(1), e.Q6J("ngIf", !0 === t.passedReview), e.xp6(1), e.Q6J("ngIf", !0 === t.failedReview), e.xp6(2), e.Q6J("ngIf", 1 == t.displaySpinner), e.xp6(1), e.Q6J("ngIf", !1 === t.userCheck), e.xp6(1), e.Q6J("ngIf", !0 === t.mediaCheck), e.xp6(1), e.Q6J("ngIf", !0 === t.mediaFull)
                }
            }

            function He(n, o) { 1 & n && e._UZ(0, "ngx-shimmer-loading", 63), 2 & n && e.Q6J("shape", "rect")("width", "10px")("height", "30px") }

            function Re(n, o) {
                if (1 & n && (e.TgZ(0, "h1", 64), e._uU(1), e.qZA()), 2 & n) {
                    const t = e.oxw();
                    e.xp6(1), e.Oqu(null != t.appSettings && t.appSettings.CurrentSeasonStageId ? null == t.appSettings ? null : t.appSettings.CurrentSeasonStageId : "N/A")
                }
            }

            function je(n, o) { 1 & n && e._UZ(0, "ngx-shimmer-loading", 63), 2 & n && e.Q6J("shape", "rect")("width", "10px")("height", "30px") }

            function $e(n, o) {
                if (1 & n && (e.TgZ(0, "a", 65)(1, "div", 11), e.YNc(2, je, 1, 3, "ngx-shimmer-loading", 12), e.TgZ(3, "h1", 64), e._uU(4), e.qZA(), e.TgZ(5, "p", 14), e._uU(6, "Contestant"), e.qZA()()()), 2 & n) {
                    const t = e.oxw();
                    e.xp6(2), e.Q6J("ngIf", t.isPageLoading), e.xp6(2), e.Oqu(null != t.appSettings ? null == t.appSettings ? null : t.appSettings.LiveShowArtistesNotEvictedCount : "N/A")
                }
            }

            function ze(n, o) { 1 & n && e._UZ(0, "ngx-shimmer-loading", 63), 2 & n && e.Q6J("shape", "rect")("width", "10px")("height", "30px") }

            function We(n, o) { 1 & n && (e.TgZ(0, "h1", 64), e._uU(1, "0"), e.qZA()) }

            function Ge(n, o) {
                if (1 & n && (e.TgZ(0, "a", 66)(1, "div", 11), e.YNc(2, ze, 1, 3, "ngx-shimmer-loading", 12), e.YNc(3, We, 2, 0, "h1", 13), e.TgZ(4, "p", 14), e._uU(5, "Contestant"), e.qZA()()()), 2 & n) {
                    const t = e.oxw();
                    e.xp6(2), e.Q6J("ngIf", t.isPageLoading), e.xp6(1), e.Q6J("ngIf", !t.isPageLoading && 0 == (null == t.appSettings ? null : t.appSettings.ShowContestants))
                }
            }

            function Ve(n, o) { 1 & n && e._UZ(0, "ngx-shimmer-loading", 63), 2 & n && e.Q6J("shape", "rect")("width", "10px")("height", "30px") }

            function Xe(n, o) {
                if (1 & n && (e.TgZ(0, "h1", 64), e._uU(1), e.qZA()), 2 & n) {
                    const t = e.oxw(2);
                    e.xp6(1), e.Oqu(null != t.appSettings ? null == t.appSettings ? null : t.appSettings.LiveShowArtistesEvictedCount : "N/A")
                }
            }

            function Ke(n, o) {
                if (1 & n && (e.TgZ(0, "a", 67)(1, "div", 11), e.YNc(2, Ve, 1, 3, "ngx-shimmer-loading", 12), e.YNc(3, Xe, 2, 1, "h1", 13), e.TgZ(4, "p", 14), e._uU(5, "Evicted"), e.qZA()()()), 2 & n) {
                    const t = e.oxw();
                    e.xp6(2), e.Q6J("ngIf", t.isPageLoading), e.xp6(1), e.Q6J("ngIf", !t.isPageLoading)
                }
            }

            function et(n, o) { 1 & n && e._UZ(0, "ngx-shimmer-loading", 63), 2 & n && e.Q6J("shape", "rect")("width", "10px")("height", "30px") }

            function tt(n, o) { 1 & n && (e.TgZ(0, "h1", 64), e._uU(1, "0"), e.qZA()) }

            function nt(n, o) {
                if (1 & n && (e.TgZ(0, "a", 66)(1, "div", 11), e.YNc(2, et, 1, 3, "ngx-shimmer-loading", 12), e.YNc(3, tt, 2, 0, "h1", 13), e.TgZ(4, "p", 14), e._uU(5, "Evicted"), e.qZA()()()), 2 & n) {
                    const t = e.oxw();
                    e.xp6(2), e.Q6J("ngIf", t.isPageLoading), e.xp6(1), e.Q6J("ngIf", !t.isPageLoading)
                }
            }

            function it(n, o) { 1 & n && (e.TgZ(0, "span"), e._uU(1, "..."), e.qZA()) }

            function ot(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "a", 68), e.NdJ("click", function() { return e.CHM(t), e.oxw().readMore = !0 }), e._uU(1, "Read More"), e.qZA()
                }
            }

            function st(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "a", 68), e.NdJ("click", function() { return e.CHM(t), e.oxw().readMore = !1 }), e._uU(1, "Read Less"), e.qZA()
                }
            }

            function at(n, o) { 1 & n && (e.TgZ(0, "p"), e._uU(1, " live performances will be available when the live shows start. Stay tuned!"), e.qZA()) }

            function rt(n, o) { 1 & n && (e.TgZ(0, "p"), e._uU(1, "No live performance available."), e.qZA()) }

            function lt(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 69)(1, "a", 70), e.NdJ("click", function() { const a = e.CHM(t).$implicit; return e.oxw().setPlayingLvPfmce(a) }), e.TgZ(2, "div", 71), e._UZ(3, "img", 72)(4, "img", 73), e.qZA()(), e.TgZ(5, "p", 74), e._uU(6), e.ALo(7, "slice"), e.qZA(), e.TgZ(8, "p", 75), e._uU(9), e.ALo(10, "slice"), e.qZA()()
                }
                if (2 & n) {
                    const t = o.$implicit;
                    e.xp6(3), e.s9C("src", null == (null == t ? null : t.ThumbnailUri) || "string" == (null == t ? null : t.ThumbnailUri) ? "assets/images/video_thumbnail.png" : null == t ? null : t.ThumbnailUri, e.LSH), e.xp6(3), e.Oqu(null != t ? e.Dn7(7, 3, null == t ? null : t.Title, 0, 20) + "..." : "N/A"), e.xp6(3), e.Oqu(null != t ? e.Dn7(10, 7, (null == t.UploadedByUser ? null : t.UploadedByUser.FirstName) + " " + (null == t.UploadedByUser ? null : t.UploadedByUser.LastName), 0, 20) : "N/A")
                }
            }

            function ct(n, o) { 1 & n && (e.TgZ(0, "p"), e._uU(1, "Information about the Judges is currently unavailable."), e.qZA()) }

            function gt(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 78)(1, "div", 79), e.NdJ("click", function() { const a = e.CHM(t).$implicit; return e.oxw(2).setSingleJudgeDetails(a) }), e._UZ(2, "img", 80), e.TgZ(3, "h4", 81), e._uU(4), e.qZA()()()
                }
                if (2 & n) {
                    const t = o.$implicit;
                    e.xp6(2), e.s9C("src", null == (null == t ? null : t.ProfileImageUri) || "string" == (null == t ? null : t.ProfileImageUri) ? "assets/images/profile.png" : null == t ? null : t.ProfileImageUri, e.LSH), e.xp6(2), e.Oqu((null == t ? null : t.FirstName) + " " + (null == t ? null : t.LastName))
                }
            }

            function pt(n, o) {
                if (1 & n && (e.TgZ(0, "div", 76), e.YNc(1, gt, 5, 2, "div", 77), e.qZA()), 2 & n) {
                    const t = e.oxw();
                    e.xp6(1), e.Q6J("ngForOf", t.allJudges)
                }
            }

            function ut(n, o) { 1 & n && e._UZ(0, "app-home-public-demo") }

            function dt(n, o) {
                if (1 & n && (e.TgZ(0, "h3", 82), e._uU(1, "AUDITION DETAILS"), e.qZA(), e.TgZ(2, "h4", 83), e._uU(3, " Congrats "), e.TgZ(4, "span", 82), e._uU(5), e.qZA(), e._uU(6, " You have qualified for audiitons.Carefully read the details of the auditions "), e.qZA(), e.TgZ(7, "h3", 82), e._uU(8, "DATE AND VENUE"), e.qZA(), e.TgZ(9, "div")(10, "div", 84)(11, "mat-icon"), e._uU(12, "date_range"), e.qZA(), e.TgZ(13, "h4"), e._uU(14, "Monday 29th July 2022 @ 10:00am"), e.qZA()(), e.TgZ(15, "div", 84)(16, "mat-icon"), e._uU(17, "location_on"), e.qZA(), e.TgZ(18, "h4"), e._uU(19, "Accra Digital Center @ Greater Accra Region"), e.qZA()()(), e.TgZ(20, "h3", 82), e._uU(21, "REQUIREMENT"), e.qZA(), e.TgZ(22, "ol")(23, "li"), e._uU(24, "Lorem ipsum dolor sit amet consectetur adipisicing elit."), e.qZA(), e.TgZ(25, "li"), e._uU(26, "Lorem ipsum dolor sit amet consectetur adipisicing elit."), e.qZA(), e.TgZ(27, "li"), e._uU(28, "Lorem ipsum dolor sit amet consectetur adipisicing elit."), e.qZA(), e.TgZ(29, "li"), e._uU(30, "Lorem ipsum dolor sit amet consectetur adipisicing elit."), e.qZA(), e.TgZ(31, "li"), e._uU(32, "Lorem ipsum dolor sit amet consectetur adipisicing elit."), e.qZA()()), 2 & n) {
                    const t = e.oxw();
                    e.xp6(5), e.Oqu(t.mUser.FirstName)
                }
            }
            let mt = (() => {
                class n {
                    constructor(t, i, s, a, l, d, P, L) { this._bottomSheet = t, this.snackBarOpenerService = i, this.router = s, this.appSetttingsService = a, this.userService = l, this.livePerFrmcService = d, this.dialog = P, this.userRegistrationService = L, this.readMore = !1, this.longText = "Y'ello! Welcome to the entry stage of this year's season. We are excited to receive your entries. Select \u201cRegister for the contest\u201d to be part of the MTN Hitmaker Season 10 competition. Kindly note that only the shortlisted applicants will qualify for the audition stage.", this.isPageLoading = !0, this.subscription = [], this.appSettings = null, this.allJudges = null, this.alLlivePerFrmces = null, this.allConstestants = null, this._value = 0, this.mUser = new ce.T }
                    auditionDetails(t) { this.dialog.open(t) }
                    ngOnInit() {
                        this.getUserByPhoneNumber(), this.backgroundToggler(), this.appSetttingsService.getAppSettings(), this.subscrbToAllContestants(), this.subscription.push(this.appSetttingsService.appSettings.subscribe({ next: t => { null != t && (console.log(t), this.appSettings = t, this.isPageLoading = !1) }, error: t => { console.error(`inside <LandingPageComponent.ngOnInit()> ${"statuscode:"+t.status}  ${"message:"+t.message}`), "request_time_out" == t.message && this.snackBarOpenerService.openToastSnackBar("Request time out", !0, 4), 0 == t.status && this.snackBarOpenerService.openToastSnackBar("Internet connection error", !0, 4) }, complete: () => { console.log("landingPage_subject complete") } })), this.subscribeTogetAllTheJudges(), setTimeout(() => {
                            var t;
                            null != this.appSettings && 1 == (null === (t = this.appSettings) || void 0 === t ? void 0 : t.ShowJudges) && this.userService.getAllJudges("5")
                        }, 2e3), setTimeout(() => { this.userService.getAllContestants() }, 3e3), this.subscrbToAllLvPerfmc(), setTimeout(() => {
                            var t;
                            null != this.appSettings && 1 == (null === (t = this.appSettings) || void 0 === t ? void 0 : t.ShowLivePerformances) && this.livePerFrmcService.getAllLivePerfmnc(m.x.searchLivePFrmance)
                        }, 4e3)
                    }
                    showRegistration() { this.router.navigate(["register"]) }
                    showTrackUploadPage() { this.router.navigateByUrl("register/registration/track-upload") }
                    subscribeTogetAllTheJudges() { this.subscription.push(this.userService.theJudges.subscribe({ next: t => { null != t && (this.allJudges = t) }, error: t => { console.error(`inside <LandingPageComponent.getAllJudges()> ${"statuscode:"+t.status}  ${"message:"+t.message}`), "request_time_out" == t.message && this.snackBarOpenerService.openToastSnackBar("Request time out", !0, 4), 0 == t.status && this.snackBarOpenerService.openToastSnackBar("Internet connection error", !0, 4) }, complete: () => { this.isPageLoading = !1 } })) }
                    subscrbToAllContestants() { this.subscription.push(this.userService.allallCntsnt.subscribe({ next: t => { null != t ? (this.allConstestants = t, this.isPageLoading = !1, console.log("All Contestants..."), console.log(this.allConstestants)) : console.log("all Contestants is null") }, error: t => { console.log(`inside <AllLiveperformanceComponent.subscrbToAllContestants()> ${"statuscode:"+t.status}  ${"message:"+t.message}`), "request_time_out" == t.message && this.snackBarOpenerService.openToastSnackBar("Request time out", !0, 4), 0 == t.status && this.snackBarOpenerService.openToastSnackBar("Internet connection error", !0, 4) }, complete: () => { this.isPageLoading = !1 } })) }
                    subscrbToAllLvPerfmc() {
                        this.subscription.push(this.livePerFrmcService.allLivePrfmnc.subscribe({
                            next: t => {
                                if (null != t) {
                                    let i = [];
                                    t.forEach(s => { s.UseCase == m.x.searchLivePFrmance && i.push(s) }), 0 != i.length && null != this.allConstestants ? i.forEach(s => { this.allConstestants.forEach(a => { s.LiveShowArtisteUserId == a.Id && (s.UploadedByUser = a) }) }) : console.log("no Live Performances available"), this.alLlivePerFrmces = i, console.log("Live Performances..."), console.log(this.alLlivePerFrmces)
                                } else console.log("all Live Performances is null")
                            },
                            error: t => { console.log(`inside <AllLiveperformanceComponent.subscrbToAllLvPerfmc()> ${"statuscode:"+t.status}  ${"message:"+t.message}`), "request_time_out" == t.message && this.snackBarOpenerService.openToastSnackBar("Request time out", !0, 4), 0 == t.status && this.snackBarOpenerService.openToastSnackBar("Internet connection error", !0, 4) },
                            complete: () => { this.isPageLoading = !1 }
                        }))
                    }
                    setSingleJudgeDetails(t) { null != t ? (this.userService.setSingleJudgeDetails(t), this.router.navigate(["/staticpages/judgeprofile"])) : console.log("judge details is null") }
                    setPlayingLvPfmce(t) { null != t ? (this.livePerFrmcService.setPlayingLvPfmce(t), this.router.navigate(["/liveperformance/", "3"])) : console.log("playing live performance is null") }
                    showpage() { this.router.navigate(["register"]) }
                    backgroundToggler() {
                        var t = document.getElementById("judges"),
                            i = document.getElementById("liveperformance");
                        i.addEventListener("click", () => { t.classList.contains("toggled") && t.classList.remove("toggled"), i.classList.contains("toggled") || i.classList.add("toggled") }), t.addEventListener("click", () => { i.classList.contains("toggled") && i.classList.remove("toggled"), t.classList.contains("toggled") || t.classList.add("toggled") })
                    }
                    ngOnDestroy() { this.subscription.length > 0 && this.subscription.forEach(t => { t.unsubscribe() }) }
                    getUserByPhoneNumber() { this.displaySpinner = !0, this.userRegistrationService.fetchUserByPhoneNumber(h.v.thirdParthId).subscribe(t => { this.displaySpinner = !1, t ? (console.log("user exist"), this.mUser = t, console.log(this.mUser), 7 === this.mUser.UserGroupId ? (this.failedReview = !0, document.getElementById("register-btn").style.display = "none") : 8 === this.mUser.UserGroupId && (this.passedReview = !0, document.getElementById("register-btn").style.display = "none"), console.log("The user", this.mUser), this.userCheck = !0, this.getUserMediaFiles()) : (console.log("user doesn't exist"), this.userCheck = !1) }, t => {}) }
                    getUserMediaFiles() { this.displaySpinner = !0, this.userRegistrationService.fetchUserMediaFiles(this.mUser.Id).subscribe(t => { this.displaySpinner = !1, this.mediaFiles = t, console.log("myMedia", this.mediaFiles), this.mediaFiles.length < 3 ? (console.log("the files are less than three"), this.mediaCheck = !0) : 3 === this.mediaFiles.length && (console.log("the files are more than three"), this.mediaFull = !0) }, t => {}) }
                    get value() { return this._value }
                    set value(t) {!isNaN(t) && t <= 100 && (this._value = t, this._value > 0 && (this.radar = !0)) }
                }
                return n.\u0275fac = function(t) { return new(t || n)(e.Y36(Z.ch), e.Y36(b.N), e.Y36(p.F0), e.Y36(x.C), e.Y36(f.K), e.Y36(I.Q), e.Y36(ge.uw), e.Y36(pe.c)) }, n.\u0275cmp = e.Xpm({
                    type: n,
                    selectors: [
                        ["app-landing-page"]
                    ],
                    viewQuery: function(t, i) {
                        if (1 & t && e.Gf(ve, 7), 2 & t) {
                            let s;
                            e.iGM(s = e.CRH()) && (i.myDialog = s.first)
                        }
                    },
                    decls: 62,
                    vars: 25,
                    consts: [
                        [1, "carousel", "slide", "carousel-fade", 3, "isControls", "animation"],
                        [1, "view", "w-100"],
                        ["src", "../../../../../assets/images/mic.jpg", "alt", "First slide", 1, "d-block", "w-100"],
                        ["mdbWavesEffect", "", 1, "mask", "rgba-black-light", "waves-light"],
                        ["class", "carousel-caption", 4, "ngIf"],
                        ["src", "../../../../../assets/images/headphone2.jpg", "alt", "Second slide", 1, "d-block", "w-100"],
                        ["src", "../../../../../assets/images/cd.jpg", "alt", "Third slide", 1, "d-block", "w-100"],
                        ["fxLayout", "column", 1, "app-content"],
                        ["fxLayout", "row", "fxLayoutAlign", "center", 2, "font-weight", "bold", "margin-top", "20px"],
                        ["fxLayout", "row", "fxLayoutAlign", "space-around center", 2, "margin-left", "40px", "margin-right", "40px"],
                        ["routerLink", "/insight/stagepage", 1, "nav_link"],
                        ["fxLayout", "column", "fxLayoutAlign", "center center"],
                        ["style", "margin-bottom: 10px;", 3, "shape", "width", "height", 4, "ngIf"],
                        ["class", "number", 4, "ngIf"],
                        [1, "title"],
                        [1, "vertical"],
                        ["routerLink", "/home/home/contestants", "class", "nav_link", 4, "ngIf"],
                        ["class", "nav_link", 4, "ngIf"],
                        ["routerLink", "/insight/eviction", "class", "nav_link", 4, "ngIf"],
                        ["fxLayout", "row", "fxLayoutAlign", "center", 1, "shortnote"],
                        [2, "padding", "20px"],
                        [4, "ngIf"],
                        ["href", "javascript:;", 3, "click", 4, "ngIf"],
                        ["id", "abt-season"],
                        ["id", "pills-tab", "role", "tablist", "fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "nav", "nav-pills", "mb-3", 2, "margin-left", "-40px", "margin-top", "-10px"],
                        ["role", "presentation", 1, "nav-item"],
                        ["data-bs-toggle", "pill", "data-bs-target", "#pills-home", "type", "button", "id", "liveperformance", 1, "btn", "active", "toggled"],
                        ["data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "type", "button", "id", "judges", 1, "btn"],
                        ["id", "pills-tabContent", 1, "tab-content", 2, "margin-left", "20px", "margin-right", "20px"],
                        ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"],
                        ["drag-scroll", "", 1, "lp_video_cnt"],
                        ["class", "single_lp", "drag-scroll-item", "", 4, "ngFor", "ngForOf"],
                        ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"],
                        ["id", "judge_cnt", "drag-scroll", "", 4, "ngIf"],
                        ["style", "background-color: none;display: contents;z-index: 1000;"],
                        ["myDialog", ""],
                        [1, "carousel-caption"],
                        ["fxLayout", "row", "class", "staticUserMessage", "style", "margin-top: 200px !important;", 4, "ngIf"],
                        ["fxLayout", "column", "class", "auditionDetails", "fxLayoutAlign", "center start", 4, "ngIf"],
                        ["fxLayout", "row", "class", "staticUserMessage", 4, "ngIf"],
                        [1, "mySpinner"],
                        ["style", "margin-left: 110px;", 3, "diameter", 4, "ngIf"],
                        ["id", "register-btn", "routerLink", "terms-and-condition", "mat-flat-button", "", 3, "click", 4, "ngIf"],
                        ["class", "staticBtn", 4, "ngIf"],
                        ["fxLayout", "row", 1, "staticUserMessage", 2, "margin-top", "200px !important"],
                        [2, "display", "flex", "justify-content", "center", "align-items", "center"],
                        ["src", "assets/images/check.png", 2, "height", "30px", "width", "30px", "margin", "10px"],
                        ["fxLayout", "column", "fxLayoutAlign", "center start"],
                        [2, "color", "black", "font-weight", "bold"],
                        [2, "margin-top", "-20px", "color", "black"],
                        ["fxLayout", "column", "fxLayoutAlign", "center start", 1, "auditionDetails"],
                        [2, "color", "black", "font-weight", "bold", "margin-bottom", "-2px", "margin-top", "10px"],
                        [2, "margin-top", "0px", "text-align", "left"],
                        [2, "font-weight", "bold"],
                        [2, "color", "blue", 3, "click"],
                        ["fxLayout", "row", 1, "staticUserMessage"],
                        ["src", "assets/images/close.png", 2, "height", "30px", "width", "30px", "margin", "10px"],
                        [2, "margin-top", "-20px", "color", "black", "margin-left", "-3px"],
                        [2, "margin-left", "110px", 3, "diameter"],
                        ["id", "register-btn", "routerLink", "terms-and-condition", "mat-flat-button", "", 3, "click"],
                        [1, "staticBtn"],
                        [1, "mVertical"],
                        [1, "staticMsg"],
                        [2, "margin-bottom", "10px", 3, "shape", "width", "height"],
                        [1, "number"],
                        ["routerLink", "/home/home/contestants", 1, "nav_link"],
                        [1, "nav_link"],
                        ["routerLink", "/insight/eviction", 1, "nav_link"],
                        ["href", "javascript:;", 3, "click"],
                        ["drag-scroll-item", "", 1, "single_lp"],
                        [1, "video_link", 3, "click"],
                        [1, "lp"],
                        ["alt", "", 1, "video_thumnaail", 3, "src"],
                        ["src", "assets/images/play.png", "alt", "", 1, "play_img"],
                        [1, "video_name"],
                        [1, "artist_name"],
                        ["id", "judge_cnt", "drag-scroll", ""],
                        ["class", "single_judge", "drag-scroll-item", "", 4, "ngFor", "ngForOf"],
                        ["drag-scroll-item", "", 1, "single_judge"],
                        [3, "click"],
                        [1, "judge_image", 3, "src"],
                        [1, "judge_name"],
                        [1, "mFw"],
                        [2, "margin-top", "-15px"],
                        ["fxLayout", "row"]
                    ],
                    template: function(t, i) { 1 & t && (e.TgZ(0, "mdb-carousel", 0)(1, "mdb-carousel-item")(2, "div", 1), e._UZ(3, "img", 2)(4, "div", 3), e.qZA(), e.YNc(5, we, 9, 7, "div", 4), e.qZA(), e.TgZ(6, "mdb-carousel-item")(7, "div", 1), e._UZ(8, "img", 5)(9, "div", 3), e.qZA(), e.YNc(10, Ie, 9, 7, "div", 4), e.qZA(), e.TgZ(11, "mdb-carousel-item")(12, "div", 1), e._UZ(13, "img", 6)(14, "div", 3), e.qZA(), e.YNc(15, Ee, 9, 7, "div", 4), e.qZA()(), e.TgZ(16, "section", 7)(17, "h1", 8), e._uU(18, "HITMAKER SEASON 10"), e.qZA(), e.TgZ(19, "div", 9)(20, "a", 10)(21, "div", 11), e.YNc(22, He, 1, 3, "ngx-shimmer-loading", 12), e.YNc(23, Re, 2, 1, "h1", 13), e.TgZ(24, "p", 14), e._uU(25, "Stage"), e.qZA()()(), e._UZ(26, "div", 15), e.YNc(27, $e, 7, 2, "a", 16), e.YNc(28, Ge, 6, 2, "a", 17), e._UZ(29, "div", 15), e.YNc(30, Ke, 6, 2, "a", 18), e.YNc(31, nt, 6, 2, "a", 17), e.qZA(), e.TgZ(32, "div", 19)(33, "p", 20), e._uU(34), e.ALo(35, "slice"), e.YNc(36, it, 2, 0, "span", 21), e.YNc(37, ot, 2, 0, "a", 22), e.YNc(38, st, 2, 0, "a", 22), e.qZA()(), e.TgZ(39, "h3", 23), e._uU(40, "About this season"), e.qZA(), e.TgZ(41, "ul", 24)(42, "li", 25)(43, "button", 26), e._uU(44, "Live Performance"), e.qZA()(), e.TgZ(45, "li", 25)(46, "button", 27), e._uU(47, "Our Judges"), e.qZA()()(), e.TgZ(48, "div", 28)(49, "div", 29), e.YNc(50, at, 2, 0, "p", 21), e.YNc(51, rt, 2, 0, "p", 21), e.TgZ(52, "drag-scroll")(53, "div", 30), e.YNc(54, lt, 11, 11, "div", 31), e.qZA()()(), e.TgZ(55, "div", 32), e.YNc(56, ct, 2, 0, "p", 21), e.TgZ(57, "drag-scroll"), e.YNc(58, pt, 2, 1, "div", 33), e.qZA()()(), e.YNc(59, ut, 1, 0, "app-home-public-demo", 21), e.qZA(), e.YNc(60, dt, 33, 1, "ng-template", 34, 35, e.W1O)), 2 & t && (e.Q6J("isControls", !0)("animation", "fade"), e.xp6(5), e.Q6J("ngIf", null != i.appSettings && 0 == (null == i.appSettings ? null : i.appSettings.ShowContestants) && !(null != i.appSettings && i.appSettings.ShowPublicArtisteProfiles)), e.xp6(5), e.Q6J("ngIf", null != i.appSettings && 0 == (null == i.appSettings ? null : i.appSettings.ShowContestants) && !(null != i.appSettings && i.appSettings.ShowPublicArtisteProfiles)), e.xp6(5), e.Q6J("ngIf", null != i.appSettings && 0 == (null == i.appSettings ? null : i.appSettings.ShowContestants) && !(null != i.appSettings && i.appSettings.ShowPublicArtisteProfiles)), e.xp6(7), e.Q6J("ngIf", i.isPageLoading), e.xp6(1), e.Q6J("ngIf", !i.isPageLoading), e.xp6(4), e.Q6J("ngIf", !i.isPageLoading && 1 == (null == i.appSettings ? null : i.appSettings.ShowContestants)), e.xp6(1), e.Q6J("ngIf", !i.isPageLoading && 0 == (null == i.appSettings ? null : i.appSettings.ShowContestants)), e.xp6(2), e.Q6J("ngIf", !i.isPageLoading && 1 == (null == i.appSettings ? null : i.appSettings.ShowContestants)), e.xp6(1), e.Q6J("ngIf", !i.isPageLoading && 0 == (null == i.appSettings ? null : i.appSettings.ShowContestants)), e.xp6(3), e.hij(" ", i.readMore ? i.longText : e.Dn7(35, 21, i.longText, 0, 130), " "), e.xp6(2), e.Q6J("ngIf", !i.readMore), e.xp6(1), e.Q6J("ngIf", !i.readMore), e.xp6(1), e.Q6J("ngIf", i.readMore), e.xp6(12), e.Q6J("ngIf", null != i.appSettings && 0 == (null == i.appSettings ? null : i.appSettings.ShowLivePerformances)), e.xp6(1), e.Q6J("ngIf", null != i.appSettings && 1 == (null == i.appSettings ? null : i.appSettings.ShowLivePerformances) && (null == i.alLlivePerFrmces || 0 == i.alLlivePerFrmces.length)), e.xp6(3), e.Q6J("ngForOf", i.alLlivePerFrmces), e.xp6(2), e.Q6J("ngIf", null == i.allJudges), e.xp6(2), e.Q6J("ngIf", null != i.allJudges), e.xp6(1), e.Q6J("ngIf", null != i.appSettings && 1 == (null == i.appSettings ? null : i.appSettings.ShowPublicArtisteProfiles))) },
                    directives: [A.Fy, A.o6, A.b6, c.O5, g.xw, g.Wh, ue.Ou, y.lW, p.rH, p.yS, v.w, _.HU, c.sg, _.$Z, xe, w.Hw],
                    pipes: [c.OU],
                    styles: ['@import"https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;600&display=swap";.number[_ngcontent-%COMP%]{font-weight:700;font-size:18px}.show-less[_ngcontent-%COMP%]{height:4rem;overflow:hidden;padding:1rem}.vertical[_ngcontent-%COMP%]{border-left:1px solid #b1b1b1;height:50px}.mFw[_ngcontent-%COMP%]{font-weight:700}.auditionDetails[_ngcontent-%COMP%]{height:95px;width:275px;background-color:#fff;border-radius:7px;display:flex;position:relative;margin-bottom:10px;margin-left:2px;padding:10px}.staticUserMessage[_ngcontent-%COMP%]{height:60px;width:275px;background-color:#fff;border-radius:7px;display:flex;position:relative;margin-bottom:30px;margin-left:2px}.mMVertical[_ngcontent-%COMP%]{border-left:5px solid #c01010;height:25px;margin-left:3px;display:flex;position:absolute;margin-top:4px}.staticMsg[_ngcontent-%COMP%]{margin-top:8px;margin-left:40px;color:#000}.mVertical[_ngcontent-%COMP%]{border-left:5px solid #EFA82E;height:25px;margin-left:3px;display:flex;position:absolute;margin-top:4px}.title[_ngcontent-%COMP%]{font-size:14px;margin-top:-15px;color:#888}.nav-link[_ngcontent-%COMP%]{color:#888;background-color:transparent}.nav-link[_ngcontent-%COMP%]:active{color:#888!important;background-color:#212121!important}.toggled[_ngcontent-%COMP%]{color:#fff!important;background-color:#212121!important}.my-button[_ngcontent-%COMP%]{background-color:transparent;color:red}.my-button[_ngcontent-%COMP%]:active{color:green!important;background-color:indigo!important}.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:visited{background-color:#000!important;color:#fff!important;border:0px}.btn[_ngcontent-%COMP%]{background-color:transparent;color:#888;border:0px;box-shadow:none!important}.nav_link[_ngcontent-%COMP%]{color:var(--lightdark_text_color);transition:all .5ms ease}.nav_link[_ngcontent-%COMP%]:hover{border-bottom:2px solid var(--lightdark_text_color)}#register-btn[_ngcontent-%COMP%]{background-color:#ffc624;color:#000;font-family:Raleway,sans-serif;font-weight:600;font-size:16px}#judges[_ngcontent-%COMP%]{margin-left:-70px}#abt-season[_ngcontent-%COMP%]{font-weight:700;margin-left:20px;margin-top:-20px}#judge_cnt[_ngcontent-%COMP%]   .single_judge[_ngcontent-%COMP%]{margin:12px;text-align:center;width:30%}#judge_cnt[_ngcontent-%COMP%]   .single_judge[_ngcontent-%COMP%]   .judge_image[_ngcontent-%COMP%]{border-radius:50%;width:67px;height:67px;margin-bottom:5px}#judge_cnt[_ngcontent-%COMP%]   .single_judge[_ngcontent-%COMP%]   .judge_name[_ngcontent-%COMP%]{font-family:Raleway,sans-serif;font-weight:400;font-size:14px}.lp_video_cnt[_ngcontent-%COMP%]   .single_lp[_ngcontent-%COMP%]{margin-right:15px}.lp_video_cnt[_ngcontent-%COMP%]   .single_lp[_ngcontent-%COMP%]   .video_link[_ngcontent-%COMP%]   .lp[_ngcontent-%COMP%]{position:relative}.lp_video_cnt[_ngcontent-%COMP%]   .single_lp[_ngcontent-%COMP%]   .video_link[_ngcontent-%COMP%]   .lp[_ngcontent-%COMP%]   .video_thumnaail[_ngcontent-%COMP%]{width:207px;height:120px;border-radius:10px}.lp_video_cnt[_ngcontent-%COMP%]   .single_lp[_ngcontent-%COMP%]   .video_link[_ngcontent-%COMP%]   .lp[_ngcontent-%COMP%]   .play_img[_ngcontent-%COMP%]{height:35px;width:35px;position:absolute;margin:auto;left:0;right:0;top:0;bottom:0}.lp_video_cnt[_ngcontent-%COMP%]   .single_lp[_ngcontent-%COMP%]   .video_name[_ngcontent-%COMP%]{margin-top:2px;margin-bottom:0;font-weight:500;font-size:16px}.lp_video_cnt[_ngcontent-%COMP%]   .single_lp[_ngcontent-%COMP%]   .artist_name[_ngcontent-%COMP%]{margin-bottom:0;font-weight:400;font-size:14px}.mySpinner[_ngcontent-%COMP%]  .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#acacac;margin-left:600px!important}.staticBtn[_ngcontent-%COMP%]{height:33px;width:275px;background-color:#fff;border-radius:7px;display:flex;position:relative}']
                }), n
            })();
            var J = r(2434),
                q = r(7261);

            function ht(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "p", 4), e.NdJ("click", function() { return e.CHM(t), e.oxw().makeDemoPblicOrPrivat() }), e._uU(1, "Make Private"), e.qZA()
                }
            }

            function _t(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "p", 4), e.NdJ("click", function() { return e.CHM(t), e.oxw().makeDemoPblicOrPrivat() }), e._uU(1, "Make Public"), e.qZA()
                }
            }
            let ft = (() => {
                class n {
                    constructor(t, i, s, a) { this.data = t, this._bottomSheetRef = i, this.demoTracksService = s, this._snackBar = a, this.snackBarkDuration = 4, this.subscription = [], console.log(t), this.demoId = t.demoId, this.artstId = t.artstId, this.ispublic = t.ispublic }
                    ngOnInit() {}
                    openLink(t) { this._bottomSheetRef.dismiss(), t.preventDefault() }
                    makeDemoPblicOrPrivat() { this.subscription.push(this.demoTracksService.makeDemoPblicOrPrivat(this.data.demoId, this.data.artstId, this.data.ispublic).subscribe({ next: t => { console.log(t), 1 == t.success ? (this.data.ispublic ? (this._bottomSheetRef.dismiss(), this.openToastSnackBar("Made Private, Will be reviewed shortly", !1)) : this.data.ispublic || (this._bottomSheetRef.dismiss(), this.openToastSnackBar("Made Public, Will be reviewed shortly", !1)), null != this.data.artstId ? (console.log("true"), this.demoTracksService.getArtistDemos(this.data.artstId, m.x.searchDemo)) : console.log("false")) : (this._bottomSheetRef.dismiss(), this.openToastSnackBar("Something went wrong", !0)) } })) }
                    openToastSnackBar(t, i) { this._snackBar.openFromComponent(J.q, { duration: 1e3 * this.snackBarkDuration, data: { msg: t, isError: i } }) }
                    ngOnDestroy() { this.subscription.length > 0 && (console.log("unsubscribing"), this.subscription.forEach(t => { t.unsubscribe() })) }
                }
                return n.\u0275fac = function(t) { return new(t || n)(e.Y36(Z.OG), e.Y36(Z.oL), e.Y36(C.X), e.Y36(q.ux)) }, n.\u0275cmp = e.Xpm({
                    type: n,
                    selectors: [
                        ["app-demotrack-sheet"]
                    ],
                    decls: 8,
                    vars: 2,
                    consts: [
                        ["id", "videosheet"],
                        ["id", "topbar", 1, ".dark"],
                        [1, "material-icons", "md-36", "action_icon"],
                        ["class", "action_text", 3, "click", 4, "ngIf"],
                        [1, "action_text", 3, "click"]
                    ],
                    template: function(t, i) { 1 & t && (e.TgZ(0, "div", 0), e._UZ(1, "div", 1), e.TgZ(2, "ul")(3, "li")(4, "p", 2), e._uU(5, "redo"), e.qZA(), e.YNc(6, ht, 2, 0, "p", 3), e.YNc(7, _t, 2, 0, "p", 3), e.qZA()()()), 2 & t && (e.xp6(6), e.Q6J("ngIf", i.ispublic), e.xp6(1), e.Q6J("ngIf", !i.ispublic)) },
                    directives: [c.O5],
                    styles: ["#videosheet[_ngcontent-%COMP%]   #topbar[_ngcontent-%COMP%]{border-radius:30px;width:40%;height:5px;background-color:#eef0f5;margin:1px auto 28px}#videosheet[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;justify-content:start;align-items:center;margin-bottom:20px;transition:all .5ms ease;cursor:pointer}#videosheet[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{margin-left:3px}#videosheet[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .action_icon[_ngcontent-%COMP%]{margin-right:11px;margin-bottom:0;margin-top:0;font-size:18px;font-weight:400}#videosheet[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .action_text[_ngcontent-%COMP%]{margin-bottom:0;font-size:18px;font-weight:400}@media (min-width: 1040px){#topbar[_ngcontent-%COMP%]{width:20%!important}}@media (min-width: 600px) and (max-width: 1040px){#topbar[_ngcontent-%COMP%]{width:20%!important}}"]
                }), n
            })();
            var xt = r(7446);

            function vt(n, o) { 1 & n && (e.TgZ(0, "span"), e._uU(1, "..."), e.qZA()) }

            function Pt(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "a", 6), e.NdJ("click", function() { return e.CHM(t), e.oxw().readMore = !0 }), e._uU(1, "Read More"), e.qZA()
                }
            }

            function bt(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "a", 6), e.NdJ("click", function() { return e.CHM(t), e.oxw().readMore = !1 }), e._uU(1, "Read Less"), e.qZA()
                }
            }
            let Ct = (() => {
                class n {
                    constructor() { this.readMore = !1, this.userProfileImgUrl = h.v.userProfileImgUrl, this.userFirstName = h.v.userFirstName, this.userLastName = h.v.userLastName, this.userBio = h.v.userBio }
                    ngOnInit() {}
                }
                return n.\u0275fac = function(t) { return new(t || n) }, n.\u0275cmp = e.Xpm({
                    type: n,
                    selectors: [
                        ["app-normal-user-profile"]
                    ],
                    decls: 11,
                    vars: 11,
                    consts: [
                        ["fxLayout", "column", "fxLayoutAlign", "center center", 2, "margin-top", "115px", "position", "relative"],
                        ["onload", "", 1, "profile-image-container", 3, "src"],
                        [2, "margin-top", "15px", "font-weight", "700"],
                        [2, "margin-bottom", "10px"],
                        [4, "ngIf"],
                        ["href", "javascript:;", 3, "click", 4, "ngIf"],
                        ["href", "javascript:;", 3, "click"]
                    ],
                    template: function(t, i) { 1 & t && (e.TgZ(0, "section")(1, "div", 0), e._UZ(2, "img", 1), e.TgZ(3, "h2", 2), e._uU(4), e.qZA(), e.TgZ(5, "div", 3), e._uU(6), e.ALo(7, "slice"), e.YNc(8, vt, 2, 0, "span", 4), e.YNc(9, Pt, 2, 0, "a", 5), e.YNc(10, bt, 2, 0, "a", 5), e.qZA()()()), 2 & t && (e.xp6(2), e.s9C("src", null == i.userProfileImgUrl ? "assets/images/profile.png" : i.userProfileImgUrl, e.LSH), e.xp6(2), e.AsE("", i.userFirstName ? i.userFirstName : "..", " ", i.userLastName ? i.userLastName : "..", ""), e.xp6(2), e.hij(" ", i.readMore ? i.userBio ? i.userBio : ".." : i.userBio ? i.userBio : e.Dn7(7, 7, "N/A", 0, 100), " "), e.xp6(2), e.Q6J("ngIf", !i.readMore), e.xp6(1), e.Q6J("ngIf", !i.readMore), e.xp6(1), e.Q6J("ngIf", i.readMore)) },
                    directives: [g.xw, g.Wh, c.O5],
                    pipes: [c.OU],
                    styles: [".profile-image-container[_ngcontent-%COMP%]{height:100px;width:100px;border-radius:50%}img[_ngcontent-%COMP%]{max-height:100%;max-width:100%;object-fit:cover}.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:visited{background-color:#000!important;color:#fff!important;border:0px}.btn[_ngcontent-%COMP%]{background-color:transparent;color:#888;border:0px;box-shadow:none!important}.limitTextHeight[_ngcontent-%COMP%]{height:165px;overflow:hidden}.toggled[_ngcontent-%COMP%]{color:#fff!important;background-color:#212121!important}.example-margin[_ngcontent-%COMP%]{margin:0 10px}"]
                }), n
            })();

            function Tt(n, o) { 1 & n && e._UZ(0, "ngx-shimmer-loading", 23), 2 & n && e.Q6J("shape", "circle")("width", "100px") }

            function Zt(n, o) {
                if (1 & n && e._UZ(0, "img", 24), 2 & n) {
                    const t = e.oxw(2);
                    e.s9C("src", null == (null == t.user ? null : t.user.ProfileImageUri) || "string" == (null == t.user ? null : t.user.ProfileImageUri) ? "assets/images/profile.png" : null == t.user ? null : t.user.ProfileImageUri, e.LSH)
                }
            }

            function yt(n, o) { 1 & n && e._UZ(0, "ngx-shimmer-loading", 25), 2 & n && e.Q6J("shape", "rect")("width", "100px")("height", "16px") }

            function St(n, o) {
                if (1 & n && (e.TgZ(0, "h2", 26), e._uU(1), e.qZA()), 2 & n) {
                    const t = e.oxw(2);
                    e.xp6(1), e.AsE("", null != t.user && t.user.FirstName ? null == t.user ? null : t.user.FirstName : "..", " ", null != t.user && t.user.LastName ? null == t.user ? null : t.user.LastName : "..", "")
                }
            }

            function wt(n, o) { 1 & n && e._UZ(0, "ngx-shimmer-loading", 25), 2 & n && e.Q6J("shape", "rect")("width", "80px")("height", "12px") }

            function At(n, o) {
                if (1 & n && (e.TgZ(0, "h4", 27), e._uU(1), e.qZA()), 2 & n) {
                    const t = e.oxw(2);
                    e.xp6(1), e.AsE("", null != t.user && t.user.CurrentStageId ? null == t.user ? null : t.user.CurrentStageId : "..", "", null != t.nth ? t.nth : "..", " Stage ")
                }
            }

            function Lt(n, o) { 1 & n && e._UZ(0, "ngx-shimmer-loading", 28), 2 & n && e.Q6J("shape", "rect")("width", "200px")("height", "60px") }

            function Ot(n, o) { 1 & n && (e.TgZ(0, "span"), e._uU(1, "..."), e.qZA()) }

            function kt(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "a", 31), e.NdJ("click", function() { return e.CHM(t), e.oxw(3).readMore = !0 }), e._uU(1, "Read More"), e.qZA()
                }
            }

            function Ut(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "a", 31), e.NdJ("click", function() { return e.CHM(t), e.oxw(3).readMore = !1 }), e._uU(1, "Read Less"), e.qZA()
                }
            }

            function Mt(n, o) {
                if (1 & n && (e.TgZ(0, "div", 29), e._uU(1), e.ALo(2, "slice"), e.YNc(3, Ot, 2, 0, "span", 0), e.YNc(4, kt, 2, 0, "a", 30), e.YNc(5, Ut, 2, 0, "a", 30), e.qZA()), 2 & n) {
                    const t = e.oxw(2);
                    e.xp6(1), e.hij(" ", t.readMore ? null != t.user && t.user.About ? null == t.user ? null : t.user.About : ".." : null != t.user && t.user.About ? null == t.user ? null : t.user.About : e.Dn7(2, 4, "..", 0, 100), " "), e.xp6(2), e.Q6J("ngIf", !t.readMore), e.xp6(1), e.Q6J("ngIf", !t.readMore), e.xp6(1), e.Q6J("ngIf", t.readMore)
                }
            }

            function Nt(n, o) { 1 & n && (e.TgZ(0, "div", 32), e._UZ(1, "ngx-shimmer-loading", 33)(2, "ngx-shimmer-loading", 34)(3, "ngx-shimmer-loading", 34), e.qZA()), 2 & n && (e.xp6(1), e.Q6J("shape", "rect")("width", "80px")("height", "80px"), e.xp6(1), e.Q6J("shape", "rect")("width", "190px")("height", "70px"), e.xp6(1), e.Q6J("shape", "rect")("width", "30px")("height", "70px")) }

            function It(n, o) { 1 & n && (e.TgZ(0, "div", 32), e._UZ(1, "ngx-shimmer-loading", 33)(2, "ngx-shimmer-loading", 34)(3, "ngx-shimmer-loading", 34), e.qZA()), 2 & n && (e.xp6(1), e.Q6J("shape", "rect")("width", "80px")("height", "80px"), e.xp6(1), e.Q6J("shape", "rect")("width", "190px")("height", "70px"), e.xp6(1), e.Q6J("shape", "rect")("width", "30px")("height", "70px")) }

            function Jt(n, o) { 1 & n && (e.TgZ(0, "div", 32), e._UZ(1, "ngx-shimmer-loading", 33)(2, "ngx-shimmer-loading", 34)(3, "ngx-shimmer-loading", 34), e.qZA()), 2 & n && (e.xp6(1), e.Q6J("shape", "rect")("width", "80px")("height", "80px"), e.xp6(1), e.Q6J("shape", "rect")("width", "190px")("height", "70px"), e.xp6(1), e.Q6J("shape", "rect")("width", "30px")("height", "70px")) }

            function qt(n, o) { 1 & n && (e.TgZ(0, "p", 43), e._uU(1, "Public"), e.TgZ(2, "span", 44), e._uU(3, "check_circle_outline"), e.qZA()()) }

            function Ft(n, o) { 1 & n && (e.TgZ(0, "p", 43), e._uU(1, "Public"), e.TgZ(2, "span", 45), e._uU(3, "cancel"), e.qZA()()) }

            function Qt(n, o) { 1 & n && (e.TgZ(0, "p", 43), e._uU(1, "Public"), e.qZA()) }

            function Bt(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 35), e._UZ(1, "img", 36), e.TgZ(2, "div", 37)(3, "div", 38)(4, "h3", 39), e._uU(5), e.ALo(6, "slice"), e.qZA(), e.TgZ(7, "h3", 40), e._uU(8), e.qZA()(), e.TgZ(9, "div", 38)(10, "p", 41), e.NdJ("click", function() {
                        const a = e.CHM(t).$implicit,
                            l = e.oxw(2);
                        return l.openVideoBottomSheet(a.Id, l.user.Id, a.IsPrivate)
                    }), e._uU(11, "more_vert"), e.qZA(), e.YNc(12, qt, 4, 0, "p", 42), e.YNc(13, Ft, 4, 0, "p", 42), e.YNc(14, Qt, 2, 0, "p", 42), e.qZA()()()
                }
                if (2 & n) {
                    const t = o.$implicit;
                    e.xp6(1), e.s9C("src", null == (null == t ? null : t.ThumbnailUri) || "string" == (null == t ? null : t.ThumbnailUri) ? "assets/images/video_thumbnail.png" : null == t ? null : t.ThumbnailUri, e.LSH), e.xp6(4), e.Oqu(null != t ? e.Dn7(6, 6, t.Title, 0, 20) + "..." : "N/A"), e.xp6(3), e.Oqu(null != t ? t.Duration.toString() : "N/A"), e.xp6(4), e.Q6J("ngIf", null != t && "PASSED" == t.ReviewStatus), e.xp6(1), e.Q6J("ngIf", null != t && "FAILED" == t.ReviewStatus), e.xp6(1), e.Q6J("ngIf", null != t && "PENDING" == t.ReviewStatus)
                }
            }

            function Yt(n, o) { 1 & n && (e.TgZ(0, "p"), e._uU(1, "live performances will be available when the live shows start. Stay tuned!"), e.qZA()) }

            function Dt(n, o) { 1 & n && (e.TgZ(0, "p"), e._uU(1, "No live performance available."), e.qZA()) }

            function Et(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "div", 46)(1, "a", 47), e.NdJ("click", function() { const a = e.CHM(t).$implicit; return e.oxw(2).setPlayingLvPfmce(a) }), e.TgZ(2, "div", 48), e._UZ(3, "img", 49)(4, "img", 50), e.qZA()(), e.TgZ(5, "p", 51), e._uU(6), e.ALo(7, "slice"), e.qZA(), e.TgZ(8, "p", 52), e._uU(9), e.qZA()()
                }
                if (2 & n) {
                    const t = o.$implicit,
                        i = e.oxw(2);
                    e.xp6(3), e.s9C("src", null == (null == t ? null : t.ThumbnailUri) || "string" == (null == t ? null : t.ThumbnailUri) ? "assets/images/video_thumbnail.png" : null == t ? null : t.ThumbnailUri, e.LSH), e.xp6(3), e.Oqu(null != t ? e.Dn7(7, 4, t.Title, 0, 20) + "..." : "N/A"), e.xp6(3), e.AsE("", null != i.user && i.user.FirstName ? null == i.user ? null : i.user.FirstName : "..", " ", null != i.user && i.user.LastName ? null == i.user ? null : i.user.LastName : "..", "")
                }
            }

            function Ht(n, o) {
                if (1 & n) {
                    const t = e.EpF();
                    e.TgZ(0, "section")(1, "div", 1), e.YNc(2, Tt, 1, 2, "ngx-shimmer-loading", 2), e.YNc(3, Zt, 1, 1, "img", 3), e.TgZ(4, "p", 4), e._uU(5, "edit"), e.qZA(), e.YNc(6, yt, 1, 3, "ngx-shimmer-loading", 5), e.YNc(7, St, 2, 2, "h2", 6), e.YNc(8, wt, 1, 3, "ngx-shimmer-loading", 5), e.YNc(9, At, 2, 2, "h4", 7), e.TgZ(10, "mat-checkbox", 8), e.NdJ("change", function() { return e.CHM(t), e.oxw().makeProfilePblicOrPrivat() })("ngModelChange", function(s) { return e.CHM(t), e.oxw().isProfilePrivate = s }), e._uU(11, "Private Profile"), e.qZA(), e.YNc(12, Lt, 1, 3, "ngx-shimmer-loading", 9), e.YNc(13, Mt, 6, 8, "div", 10), e.TgZ(14, "div", 11)(15, "ul", 12)(16, "li", 13)(17, "button", 14), e._uU(18, "Tracks"), e.qZA()(), e.TgZ(19, "li", 13)(20, "button", 15), e._uU(21, "Live Performance"), e.qZA()()(), e.TgZ(22, "div", 16)(23, "div", 17), e.YNc(24, Nt, 4, 9, "div", 18), e.YNc(25, It, 4, 9, "div", 18), e.YNc(26, Jt, 4, 9, "div", 18), e.YNc(27, Bt, 15, 10, "div", 19), e.qZA(), e.TgZ(28, "div", 20), e.YNc(29, Yt, 2, 0, "p", 0), e.YNc(30, Dt, 2, 0, "p", 0), e.TgZ(31, "drag-scroll")(32, "div", 21), e.YNc(33, Et, 10, 8, "div", 22), e.qZA()()()()()()()
                }
                if (2 & n) {
                    const t = e.oxw();
                    e.xp6(2), e.Q6J("ngIf", t.isPageLoading), e.xp6(1), e.Q6J("ngIf", !t.isPageLoading), e.xp6(3), e.Q6J("ngIf", t.isPageLoading), e.xp6(1), e.Q6J("ngIf", !t.isPageLoading), e.xp6(1), e.Q6J("ngIf", t.isPageLoading), e.xp6(1), e.Q6J("ngIf", !t.isPageLoading), e.xp6(1), e.Q6J("checked", t.isProfilePrivate)("ngModel", t.isProfilePrivate), e.xp6(2), e.Q6J("ngIf", t.isPageLoading), e.xp6(1), e.Q6J("ngIf", !t.isPageLoading), e.xp6(11), e.Q6J("ngIf", t.isPageLoading), e.xp6(1), e.Q6J("ngIf", t.isPageLoading), e.xp6(1), e.Q6J("ngIf", t.isPageLoading), e.xp6(1), e.Q6J("ngForOf", t.alLDemosTracksBy), e.xp6(2), e.Q6J("ngIf", null != t.appSettings && 0 == (null == t.appSettings ? null : t.appSettings.ShowLivePerformances)), e.xp6(1), e.Q6J("ngIf", null != t.appSettings && 1 == (null == t.appSettings ? null : t.appSettings.ShowLivePerformances) && (null == t.alLlivePerFrmcesBy || 0 == t.alLlivePerFrmcesBy.length)), e.xp6(3), e.Q6J("ngForOf", t.alLlivePerFrmcesBy)
                }
            }

            function Rt(n, o) { 1 & n && e._UZ(0, "app-normal-user-profile") }
            const jt = [{ path: "", pathMatch: "full", redirectTo: "home" }, {
                path: "home",
                component: le,
                children: [{ path: "", pathMatch: "full", redirectTo: "landingpage" }, { path: "landingpage", component: mt }, { path: "contestants", component: V }, {
                    path: "user-profile",
                    component: (() => {
                        class n {
                            constructor(t, i, s, a, l, d, P, L) { this.userservice = t, this._bottomSheet = i, this.appSetttingsService = s, this.demoTracksService = a, this.livePerFrmcService = l, this.publicProfilesService = d, this._snackBar = P, this.router = L, this.snackBarkDuration = 4, this.readMore = !1, this.appSettings = null, this.isPageLoading = !0, this.subscription = [], this.nth = null, this.alLlivePerFrmcesBy = null, this.isProfilePrivate = !1, this.alLDemosTracksBy = null }
                            ngOnInit() {
                                setTimeout(() => { this.backgroundToggler() }, 3e3), this.subscription.push(this.appSetttingsService.appSettings.subscribe({ next: t => { null != t && (this.appSettings = t) }, error: t => { console.error(`inside <LandingPageComponent.ngOnInit()> ${"statuscode:"+t.status}  ${"message:"+t.message}`), "request_time_out" == t.message && this.openToastSnackBar("Request time out", !0), 0 == t.status && this.openToastSnackBar("internet connection error", !0) }, complete: () => { console.log("landingPage_subject complete") } })), this.appSetttingsService.getAppSettings(), this.subscrbToUserProfile(), this.subscrbToLvPfmceBy(), this.subscrbToDemosBy(), this.userservice.getUserByByThirdPartyId(h.v.thirdParthId), setTimeout(() => {
                                    var t, i;
                                    null != this.appSettings && 1 == (null === (t = this.appSettings) || void 0 === t ? void 0 : t.ShowLivePerformances) && null != this.user && this.livePerFrmcService.getArtistLivePerfmnces(null === (i = this.user) || void 0 === i ? void 0 : i.Id.toString(), m.x.searchLivePFrmance)
                                }, 2e3), setTimeout(() => {
                                    var t;
                                    null != this.user && this.demoTracksService.getArtistDemos(null === (t = this.user) || void 0 === t ? void 0 : t.Id.toString(), m.x.searchDemo)
                                }, 3e3)
                            }
                            subscrbToUserProfile() { this.subscription.push(this.userservice.contstProile.subscribe({ next: t => { this.user = t, null != this.user && (this.nth = m.x.nthConverter(this.user.CurrentStageId), this.isProfilePrivate = this.user.IsPrivate), console.log(this.user) }, error: t => { console.log(`inside <ProfilePageComponent.subscrbToUserProfile()> ${"statuscode:"+t.status}  ${"message:"+t.message}`), "request_time_out" == t.message && this.openToastSnackBar("Request time out", !0), 0 == t.status && this.openToastSnackBar("internet connection error", !0) }, complete: () => {} })) }
                            subscrbToLvPfmceBy() {
                                this.subscription.push(this.livePerFrmcService.artistLvPrfmnces.subscribe({
                                    next: t => {
                                        if (null != t && null != this.user) {
                                            let i = [];
                                            t.forEach(s => { s.UploadedByUser = this.user, i.push(s) }), this.alLlivePerFrmcesBy = i, console.log(this.alLlivePerFrmcesBy)
                                        } else console.log("all live performances by this artist is null")
                                    },
                                    error: t => { console.log(`inside <ProfilePageComponent.subscrbToLvPfmceBy()> ${"statuscode:"+t.status}  ${"message:"+t.message}`), "request_time_out" == t.message && this.openToastSnackBar("Request time out", !0), 0 == t.status && this.openToastSnackBar("internet connection error", !0) },
                                    complete: () => {}
                                }))
                            }
                            subscrbToDemosBy() {
                                this.subscription.push(this.demoTracksService.artistDemos.subscribe({
                                    next: t => {
                                        if (null != t && null != this.user) {
                                            this.alLDemosTracksBy = t, console.log(this.alLDemosTracksBy);
                                            for (var i = 0; i < this.alLDemosTracksBy.length; i++)
                                                if (!isNaN(this.alLDemosTracksBy[i].Duration)) {
                                                    var s = new Date(null);
                                                    s.setSeconds(this.alLDemosTracksBy[i].Duration);
                                                    var a = s.toISOString().substr(11, 8);
                                                    this.alLDemosTracksBy[i].Duration = a
                                                }
                                            this.isPageLoading = !1
                                        } else console.log("all Demo-tracks by this artist is null")
                                    },
                                    error: t => { console.log(`inside <ProfilePageComponent.subscrbToDemosBy()> ${"statuscode:"+t.status}  ${"message:"+t.message}`), "request_time_out" == t.message && this.openToastSnackBar("Request time out", !0), 0 == t.status && this.openToastSnackBar("internet connection error", !0) },
                                    complete: () => {}
                                }))
                            }
                            setPlayingLvPfmce(t) { null != t ? (this.livePerFrmcService.setPlayingLvPfmce(t), this.router.navigate(["/liveperformance/", "3"])) : console.log("playing live performance is null") }
                            backgroundToggler() {
                                var t = document.getElementById("tracks"),
                                    i = document.getElementById("lpf");
                                i.addEventListener("click", () => { t.classList.contains("toggled") && t.classList.remove("toggled"), i.classList.contains("toggled") || i.classList.add("toggled") }), t.addEventListener("click", () => { i.classList.contains("toggled") && i.classList.remove("toggled"), t.classList.contains("toggled") || t.classList.add("toggled") })
                            }
                            openVideoBottomSheet(t, i, s) { console.log(s), this._bottomSheet.open(ft, { panelClass: "videobottomsheet", data: { demoId: t, artstId: i.toString(), ispublic: !s } }) }
                            makeProfilePblicOrPrivat() {
                                let t = this.user;
                                t.IsPrivate = this.isProfilePrivate, this.subscription.push(this.publicProfilesService.makeProfilePblicOrPrivat(t).subscribe({ next: i => { console.log(i), null != i ? (this.isProfilePrivate = i.IsPrivate, i.IsPrivate ? this.openToastSnackBar("Profile Made Private", !1) : i.IsPrivate || this.openToastSnackBar("Profile Made Public", !1)) : this.openToastSnackBar("Something went wrong", !0) } }))
                            }
                            openToastSnackBar(t, i) { this._snackBar.openFromComponent(J.q, { duration: 1e3 * this.snackBarkDuration, data: { msg: t, isError: i } }) }
                            ngOnDestroy() { this.subscription.length > 0 && (console.log("unsubscribing"), this.subscription.forEach(t => { t.unsubscribe() })) }
                            show() { console.log(this.isProfilePrivate) }
                            onAdd() { this.router.navigateByUrl("/register/registration/track-upload") }
                        }
                        return n.\u0275fac = function(t) { return new(t || n)(e.Y36(f.K), e.Y36(Z.ch), e.Y36(x.C), e.Y36(C.X), e.Y36(I.Q), e.Y36(U._), e.Y36(q.ux), e.Y36(p.F0)) }, n.\u0275cmp = e.Xpm({
                            type: n,
                            selectors: [
                                ["app-profile-page"]
                            ],
                            decls: 2,
                            vars: 2,
                            consts: [
                                [4, "ngIf"],
                                ["fxLayout", "column", "fxLayoutAlign", "center center", 2, "margin-top", "115px", "position", "relative"],
                                [3, "shape", "width", 4, "ngIf"],
                                ["class", "profile-image-container", "onload", "", 3, "src", 4, "ngIf"],
                                ["routerLink", "/staticpages/edit-user-profile", 1, "material-icons", "md-36", "edit_icon"],
                                [3, "shape", "width", "height", 4, "ngIf"],
                                ["style", "margin-top: 15px; font-weight: 700;", 4, "ngIf"],
                                ["style", "margin-top: -20px; opacity: 0.5;", 4, "ngIf"],
                                ["color", "primary", 1, "example-margin", 3, "checked", "ngModel", "change", "ngModelChange"],
                                ["style", "margin-bottom: 30px;", 3, "shape", "width", "height", 4, "ngIf"],
                                ["style", "margin-bottom: 10px;", 4, "ngIf"],
                                [2, "margin-top", "10px", "margin", "20px"],
                                ["id", "pills-tab", "role", "tablist", "fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "40px", 1, "nav", "nav-pills", "mb-3"],
                                ["role", "presentation", 1, "nav-item"],
                                ["data-bs-toggle", "pill", "data-bs-target", "#pills-home", "type", "button", "id", "tracks", 1, "btn", "active", "toggled"],
                                ["data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "type", "button", "id", "lpf", 1, "btn"],
                                ["id", "pills-tabContent", 1, "tab-content"],
                                ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"],
                                ["fxLayout", "row", "fxLayoutAlign", "space-evenly center", 4, "ngIf"],
                                ["fxLayout", "row", "fxLayoutGap", "20px", "style", "margin-top: 10px;", 4, "ngFor", "ngForOf"],
                                ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"],
                                ["drag-scroll", "", 1, "lp_video_cnt"],
                                ["class", "single_lp", "drag-scroll-item", "", 4, "ngFor", "ngForOf"],
                                [3, "shape", "width"],
                                ["onload", "", 1, "profile-image-container", 3, "src"],
                                [3, "shape", "width", "height"],
                                [2, "margin-top", "15px", "font-weight", "700"],
                                [2, "margin-top", "-20px", "opacity", "0.5"],
                                [2, "margin-bottom", "30px", 3, "shape", "width", "height"],
                                [2, "margin-bottom", "10px"],
                                ["href", "javascript:;", 3, "click", 4, "ngIf"],
                                ["href", "javascript:;", 3, "click"],
                                ["fxLayout", "row", "fxLayoutAlign", "space-evenly center"],
                                ["borderRadius", "15", 3, "shape", "width", "height"],
                                ["borderRadius", "15", 2, "margin-left", "20px", 3, "shape", "width", "height"],
                                ["fxLayout", "row", "fxLayoutGap", "20px", 2, "margin-top", "10px"],
                                [2, "height", "70px", "width", "70px", 3, "src"],
                                [2, "display", "flex", "justify-content", "space-between", "width", "100%"],
                                ["fxLayout", "column", "fxLayoutAlign", "start"],
                                [2, "font-weight", "bold", "margin-bottom", "0px", "line-height", "97%"],
                                [2, "margin-top", "10px"],
                                [1, "material-icons", "md-36", "morevert_icon", 2, "text-align", "right", 3, "click"],
                                ["class", "status_value", 4, "ngIf"],
                                [1, "status_value"],
                                [1, "material-icons", "md-36", "morevert_icon", 2, "color", "green"],
                                [1, "material-icons", "md-36", "morevert_icon", 2, "color", "red"],
                                ["drag-scroll-item", "", 1, "single_lp"],
                                [1, "video_link", 3, "click"],
                                [1, "lp"],
                                ["alt", "", 1, "video_thumnaail", 3, "src"],
                                ["src", "assets/images/play.png", "alt", "", 1, "play_img"],
                                [1, "video_name"],
                                [1, "artist_name"]
                            ],
                            template: function(t, i) { 1 & t && (e.YNc(0, Ht, 34, 17, "section", 0), e.YNc(1, Rt, 1, 0, "app-normal-user-profile", 0)), 2 & t && (e.Q6J("ngIf", null != i.user || null != i.user), e.xp6(1), e.Q6J("ngIf", null == i.user || null == i.user)) },
                            directives: [c.O5, g.xw, g.Wh, v.w, p.rH, xt.oG, u.JJ, u.On, g.SQ, c.sg, _.HU, _.$Z, Ct],
                            pipes: [c.OU],
                            styles: [".profile-image-container[_ngcontent-%COMP%]{height:100px;width:100px;border-radius:50%}img[_ngcontent-%COMP%]{max-height:100%;max-width:100%;object-fit:cover}.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:visited{background-color:#000!important;color:#fff!important;border:0px}.btn[_ngcontent-%COMP%]{background-color:transparent;color:#888;border:0px;box-shadow:none!important}.limitTextHeight[_ngcontent-%COMP%]{height:165px;overflow:hidden}.toggled[_ngcontent-%COMP%]{color:#fff!important;background-color:#212121!important}.example-margin[_ngcontent-%COMP%]{margin:0 10px}.edit_icon[_ngcontent-%COMP%]{background-color:var(--themcolor);cursor:pointer;padding:9px;border-radius:50%;font-size:19px;position:absolute;top:76px}.edit_icon[_ngcontent-%COMP%]:hover{opacity:.8}.lp_video_cnt[_ngcontent-%COMP%]   .single_lp[_ngcontent-%COMP%]{margin-right:15px}.lp_video_cnt[_ngcontent-%COMP%]   .single_lp[_ngcontent-%COMP%]   .video_link[_ngcontent-%COMP%]   .lp[_ngcontent-%COMP%]{position:relative}.lp_video_cnt[_ngcontent-%COMP%]   .single_lp[_ngcontent-%COMP%]   .video_link[_ngcontent-%COMP%]   .lp[_ngcontent-%COMP%]   .video_thumnaail[_ngcontent-%COMP%]{width:207px;height:120px;border-radius:10px}.lp_video_cnt[_ngcontent-%COMP%]   .single_lp[_ngcontent-%COMP%]   .video_link[_ngcontent-%COMP%]   .lp[_ngcontent-%COMP%]   .play_img[_ngcontent-%COMP%]{height:35px;width:35px;position:absolute;margin:auto;left:0;right:0;top:0;bottom:0}.lp_video_cnt[_ngcontent-%COMP%]   .single_lp[_ngcontent-%COMP%]   .video_name[_ngcontent-%COMP%]{margin-top:2px;margin-bottom:0;font-weight:500;font-size:16px}.lp_video_cnt[_ngcontent-%COMP%]   .single_lp[_ngcontent-%COMP%]   .artist_name[_ngcontent-%COMP%]{margin-bottom:0;font-weight:400;font-size:14px}.status_value[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:10px}.status_value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:10px;margin-left:3px;font-size:20px}"]
                        }), n
                    })()
                }, {
                    path: "about-page",
                    component: (() => {
                        class n {
                            constructor() {}
                            ngOnInit() {}
                        }
                        return n.\u0275fac = function(t) { return new(t || n) }, n.\u0275cmp = e.Xpm({
                            type: n,
                            selectors: [
                                ["app-about-page"]
                            ],
                            decls: 5,
                            vars: 0,
                            consts: [
                                [2, "margin-top", "100px", "margin-left", "20px", "margin-right", "20px", "display", "flex", "justify-content", "center", "align-items", "center"],
                                ["fxLayout", "column", 2, "display", "flex", "justify-content", "center", "align-items", "center"],
                                ["src", "assets/images/hit.png", 2, "height", "100px", "width", "100px"]
                            ],
                            template: function(t, i) { 1 & t && (e.TgZ(0, "section", 0)(1, "div", 1), e._UZ(2, "img", 2), e.TgZ(3, "h3"), e._uU(4, " For many upcoming artistes , the path to stardom is often fraught with many challenges . Over the years ,MTN has tried with it's HitMaker reality contest to give such artistes a head start. The MTN Hitmaker App is a digital solution that will enable artistes register for the contest as well as enable viewers to follow and cast votes for their favorite contestants. "), e.qZA()()()) },
                            directives: [g.xw],
                            styles: [""]
                        }), n
                    })()
                }]
            }];
            let $t = (() => {
                class n {}
                return n.\u0275fac = function(t) { return new(t || n) }, n.\u0275mod = e.oAB({ type: n }), n.\u0275inj = e.cJS({
                    imports: [
                        [p.Bz.forChild(jt)], p.Bz
                    ]
                }), n
            })();
            var zt = r(421),
                Wt = r(5090),
                Gt = r(1314);
            let Vt = (() => {
                class n {}
                return n.\u0275fac = function(t) { return new(t || n) }, n.\u0275mod = e.oAB({ type: n }), n.\u0275inj = e.cJS({
                    imports: [
                        [c.ez, $t, zt.m, Wt.q, Gt.U8]
                    ]
                }), n
            })()
        }
    }
]);