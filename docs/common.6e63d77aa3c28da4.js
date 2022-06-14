"use strict";
(self.webpackChunkHitMakerApp = self.webpackChunkHitMakerApp || []).push([
    [592], {
        2075: (P, g, i) => {
            i.d(g, { p: () => d });
            var t = i(5e3),
                s = i(8966),
                m = i(5215),
                f = i(4377),
                v = i(7423);
            let u = (() => {
                class e {
                    constructor(a, c, o) { this.dialog = a, this.snackBarOpenerService = c, this.shareTrack = o, this.trackLink = null }
                    ngOnInit() { this.shareTrack.shareTrack.subscribe(a => { this.trackLink = a }) }
                    onClose() { this.dialog.closeAll() }
                    copyLink() { navigator.clipboard.writeText(this.trackLink), this.snackBarOpenerService.openToastSnackBar("Link copied", !1, 3) }
                }
                return e.\u0275fac = function(a) { return new(a || e)(t.Y36(s.uw), t.Y36(m.N), t.Y36(f.j)) }, e.\u0275cmp = t.Xpm({
                    type: e,
                    selectors: [
                        ["app-share-dialog"]
                    ],
                    decls: 9,
                    vars: 1,
                    consts: [
                        ["mat-dialog-title", ""],
                        ["mat-dialog-content", ""],
                        ["mat-dialog-actions", ""],
                        ["mat-button", "", "mat-dialog-close", "", 3, "click"],
                        [1, "material-icons", "md-36", "morevert_icon"]
                    ],
                    template: function(a, c) { 1 & a && (t.TgZ(0, "h1", 0), t._uU(1, "Share Track"), t.qZA(), t.TgZ(2, "div", 1), t._uU(3), t.qZA(), t.TgZ(4, "div", 2)(5, "button", 3), t.NdJ("click", function() { return c.copyLink() }), t.TgZ(6, "span", 4), t._uU(7, "link"), t.qZA(), t._uU(8, " Copy Link"), t.qZA()()), 2 & a && (t.xp6(3), t.Oqu(null != c.trackLink ? c.trackLink : "N/A")) },
                    directives: [s.uh, s.xY, s.H8, v.lW, s.ZT],
                    styles: [""]
                }), e
            })();
            var n = i(7399);
            let d = (() => {
                class e {
                    constructor(a, c) { this.dialog = a, this._bottomSheetRef = c }
                    ngOnInit() {}
                    openLink(a) { this._bottomSheetRef.dismiss(), a.preventDefault() }
                    openDialog() { this.dialog.open(u), this._bottomSheetRef.dismiss() }
                }
                return e.\u0275fac = function(a) { return new(a || e)(t.Y36(s.uw), t.Y36(n.oL)) }, e.\u0275cmp = t.Xpm({
                    type: e,
                    selectors: [
                        ["app-videobottomsheet"]
                    ],
                    decls: 8,
                    vars: 0,
                    consts: [
                        ["id", "videosheet"],
                        ["id", "topbar", 1, ".dark"],
                        [1, "material-icons", "md-36", "action_icon"],
                        [1, "action_text", 3, "click"]
                    ],
                    template: function(a, c) { 1 & a && (t.TgZ(0, "div", 0), t._UZ(1, "div", 1), t.TgZ(2, "ul")(3, "li")(4, "p", 2), t._uU(5, "share"), t.qZA(), t.TgZ(6, "p", 3), t.NdJ("click", function() { return c.openDialog() }), t._uU(7, "Share"), t.qZA()()()()) },
                    styles: ["#videosheet[_ngcontent-%COMP%]   #topbar[_ngcontent-%COMP%]{border-radius:30px;width:40%;height:5px;background-color:#eef0f5;margin:1px auto 28px}#videosheet[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;justify-content:start;align-items:center;margin-bottom:20px;transition:all .5ms ease;cursor:pointer}#videosheet[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{margin-left:3px}#videosheet[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .action_icon[_ngcontent-%COMP%]{margin-right:11px;margin-bottom:0;margin-top:0;font-size:18px;font-weight:400}#videosheet[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .action_text[_ngcontent-%COMP%]{margin-bottom:0;font-size:18px;font-weight:400}@media (min-width: 1040px){#topbar[_ngcontent-%COMP%]{width:20%!important}}@media (min-width: 600px) and (max-width: 1040px){#topbar[_ngcontent-%COMP%]{width:20%!important}}"]
                }), e
            })()
        },
        4978: (P, g, i) => {
            i.d(g, { T: () => t });
            class t {}
        },
        2979: (P, g, i) => {
            i.d(g, { Q: () => a });
            var t = i(1135),
                s = i(262),
                m = i(8505),
                f = i(4004),
                v = i(7414),
                u = i(2843),
                n = i(2912),
                d = i(5790),
                e = i(5e3),
                p = i(520);
            let a = (() => {
                class c {
                    constructor(r) { this.http = r, this.allLivePrfmncBSubject = new t.X(null), this.allLivePrfmnc = this.allLivePrfmncBSubject.asObservable(), this.artistLvPrfmncBSubject = new t.X(null), this.artistLvPrfmnces = this.artistLvPrfmncBSubject.asObservable(), this.playingLvPfmcBSubject = new t.X(null), this.playingLvPrfmnce = this.playingLvPfmcBSubject.asObservable() }
                    setPlayingLvPfmce(r) { try { console.log("new playing live performance has been set"), this.playingLvPfmcBSubject.next(r) } catch (l) { this.playingLvPfmcBSubject.error(l) } }
                    getAllLivePerfmnc(r) { console.log(r), this.http.get(n.l.getAllLivePrfmnc, { observe: "response" }).pipe((0, s.K)(d.L.handleHttpErrors), (0, m.b)(l => { console.log("all lp from server is"), console.log(l.body) }), (0, f.U)(l => { let _ = []; return l.body.forEach(b => { b.UseCase == r && _.push(b) }), console.log("All live performance from server is"), console.log(_), _ }), (0, v.V)({ each: 4e4, with: () => (0, u._)(() => new Error(d.L.timeoutMsg)) })).subscribe({ next: l => { this.allLivePrfmncBSubject.next(l), console.log(l) }, error: l => { console.log(l), this.allLivePrfmncBSubject.error(l) } }) }
                    getArtistLivePerfmnces(r, l) { this.http.get(n.l.getartistDemos + r, { observe: "response" }).pipe((0, s.K)(d.L.handleHttpErrors), (0, m.b)(h => {}), (0, f.U)(h => { let b = []; return h.body.forEach(y => { y.UseCase == l && b.push(y) }), b }), (0, v.V)({ each: 4e4, with: () => (0, u._)(() => new Error(d.L.timeoutMsg)) })).subscribe({ next: h => { this.artistLvPrfmncBSubject.next(h), console.log(h) }, error: h => { console.log(h), this.artistLvPrfmncBSubject.error(h) } }) }
                }
                return c.\u0275fac = function(r) { return new(r || c)(e.LFG(p.eN)) }, c.\u0275prov = e.Yz7({ token: c, factory: c.\u0275fac, providedIn: "root" }), c
            })()
        },
        3216: (P, g, i) => {
            i.d(g, { c: () => v });
            var t = i(520),
                s = i(2843),
                m = i(262),
                f = i(5e3);
            let v = (() => {
                class n {
                    constructor(e) { this.http = e }
                    upload(e) { let p = new FormData; return p.append("file", e), this.http.post("http://20.236.52.237:8090/api/User/SetUserProfileImage", p) }
                    createNewUser(e, p) {
                        let a = JSON.stringify(e),
                            o = { headers: new t.WM({ "Content-Type": "application/json" }) };
                        return this.http.post(`http://20.236.52.237:8090/api/User/RegisterArtiste/${p}`, a, o).pipe((0, m.K)(u))
                    }
                    fetchSettings() { return this.http.get("http://20.236.52.237:8090/api/Setting/GetAppSettings").pipe((0, m.K)(u)) }
                    fetchUserGroups() { return this.http.get("http://20.236.52.237:8090/api/UserGroup").pipe((0, m.K)(u)) }
                    fetchUserByThirdPartyId(e) { return this.http.get(`http://20.236.52.237:8090/api/User/FindUserByThirdPartyId/${e}`).pipe((0, m.K)(u)) }
                    fetchUserByPhoneNumber(e) { return this.http.get(`http://20.236.52.237:8090/api/User/FindUserByPhone/${e}`).pipe((0, m.K)(u)) }
                    fetchUserMediaFiles(e) { return this.http.get(`http://20.236.52.237:8090/api/User/GetUserMediaFiles/${e}`).pipe((0, m.K)(u)) }
                    deleteMediaFile(e) { return this.http.delete(`http://20.236.52.237:8090/api/MediaFile/${e}`).pipe((0, m.K)(u)) }
                }
                return n.\u0275fac = function(e) { return new(e || n)(f.LFG(t.eN)) }, n.\u0275prov = f.Yz7({ token: n, factory: n.\u0275fac, providedIn: "root" }), n
            })();

            function u(n) { return console.error(n), (0, s._)(n.error) }
        },
        5910: (P, g, i) => {
            i.d(g, { v: () => t });
            let t = (() => {
                class s {
                    constructor() {
                        // this.bb = document.getElementById("justilato")
                    }
                }
                return s.thirdParthId = Ayoba.getMsisdn(),
                    s.userProfileImgUrl = null,
                    s.userFirstName = Ayoba.getMsisdn(),
                    s.userLastName = null,
                    s.userBio = null,
                    s.userphoneNumber = null, s
            })()
        },
        1042: (P, g, i) => {
            i.d(g, { Z: () => c });
            var t, s = new Uint8Array(16);

            function m() { if (!t && !(t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"); return t(s) }
            const f = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
                u = function v(o) { return "string" == typeof o && f.test(o) };
            for (var n = [], d = 0; d < 256; ++d) n.push((d + 256).toString(16).substr(1));
            const c = function a(o, r, l) {
                var h = (o = o || {}).random || (o.rng || m)();
                if (h[6] = 15 & h[6] | 64, h[8] = 63 & h[8] | 128, r) { l = l || 0; for (var _ = 0; _ < 16; ++_) r[l + _] = h[_]; return r }
                return function e(o) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        l = (n[o[r + 0]] + n[o[r + 1]] + n[o[r + 2]] + n[o[r + 3]] + "-" + n[o[r + 4]] + n[o[r + 5]] + "-" + n[o[r + 6]] + n[o[r + 7]] + "-" + n[o[r + 8]] + n[o[r + 9]] + "-" + n[o[r + 10]] + n[o[r + 11]] + n[o[r + 12]] + n[o[r + 13]] + n[o[r + 14]] + n[o[r + 15]]).toLowerCase();
                    if (!u(l)) throw TypeError("Stringified UUID is invalid");
                    return l
                }(h)
            }
        }
    }
]);