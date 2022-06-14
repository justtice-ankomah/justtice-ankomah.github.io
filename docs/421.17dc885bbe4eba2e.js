"use strict";
(self.webpackChunkHitMakerApp = self.webpackChunkHitMakerApp || []).push([
    [421], { 421: (it, Me, _) => { _.d(Me, { m: () => oo }); var s = _(9808),
                n = _(5e3),
                c = _(3270),
                V = _(3322),
                be = _(7093);
            _(3191); let Ft = (() => { class l {} return l.\u0275fac = function(h) { return new(h || l) }, l.\u0275mod = n.oAB({ type: l }), l.\u0275inj = n.cJS({ imports: [
                            [c.IR]
                        ] }), l })(),
                Ot = (() => { class l { constructor(h, E) {
                            (0, s.PM)(E) && !h && console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule") }
                        static withConfig(h, E = []) { return { ngModule: l, providers: h.serverLoaded ? [{ provide: c.WU, useValue: Object.assign(Object.assign({}, c.g5), h) }, { provide: c.Bs, useValue: E, multi: !0 }, { provide: c.wY, useValue: !0 }] : [{ provide: c.WU, useValue: Object.assign(Object.assign({}, c.g5), h) }, { provide: c.Bs, useValue: E, multi: !0 }] } } } return l.\u0275fac = function(h) { return new(h || l)(n.LFG(c.wY), n.LFG(n.Lbi)) }, l.\u0275mod = n.oAB({ type: l }), l.\u0275inj = n.cJS({ imports: [
                            [be.ae, V.aT, Ft], be.ae, V.aT, Ft
                        ] }), l })(); var bt = _(6278),
                Lt = _(7423),
                St = _(7531),
                gt = _(3075),
                Mt = _(7399),
                Tt = _(9814),
                Pt = _(3092),
                Nt = _(9506),
                Gt = _(6162),
                Ht = _(773),
                jt = _(8966),
                Vt = _(7446),
                Wt = _(7261); let oo = (() => { class l {} return l.\u0275fac = function(h) { return new(h || l) }, l.\u0275mod = n.oAB({ type: l }), l.\u0275inj = n.cJS({ imports: [
                        [Ot, s.ez, bt.bB, bt.x3, Lt.ot, St.c, gt.u5, Mt._r, Tt.Fk, Pt.Bb, gt.UX, Nt.x, Gt.l1, Ht.Cq, jt.Is, Vt.p9, Wt.ZX], Ot, s.ez, bt.bB, bt.x3, Lt.ot, St.c, gt.u5, Mt._r, Tt.Fk, Pt.Bb, gt.UX, Nt.x, Gt.l1, Ht.Cq, jt.Is, Vt.p9, Wt.ZX, gt.UX
                    ] }), l })() }, 9506: (it, Me, _) => { _.d(Me, { w: () => be, x: () => ee }); var s = _(9808),
                n = _(5e3); const c = function($, re, K) { return { width: $, height: re, borderRadius: K } },
                V = function($) { return { rtl: $ } }; let be = (() => { class $ { constructor() { this.class = "shimmer-loading", this.width = "80%", this.height = "12px", this.shape = "rect", this.borderRadius = "5px", this.direction = "ltr" }
                        ngOnInit() {}
                        get shimmerHeight() { switch (this.shape) {
                                case "circle":
                                case "square":
                                    return this.width;
                                default:
                                    return this.height } }
                        get shimmerBorderRadius() { return "circle" === this.shape ? "50%" : this.borderRadius } } return $.\u0275fac = function(K) { return new(K || $) }, $.\u0275cmp = n.Xpm({ type: $, selectors: [
                            ["ngx-shimmer-loading"]
                        ], hostVars: 2, hostBindings: function(K, N) { 2 & K && n.Tol(N.class) }, inputs: { width: "width", height: "height", shape: "shape", borderRadius: "borderRadius", direction: "direction" }, decls: 1, vars: 8, consts: [
                            [1, "ngx-shimmer", 3, "ngStyle", "ngClass"]
                        ], template: function(K, N) { 1 & K && n._UZ(0, "div", 0), 2 & K && n.Q6J("ngStyle", n.kEZ(2, c, N.width, N.shimmerHeight, N.shimmerBorderRadius))("ngClass", n.VKq(6, V, "rtl" === N.direction)) }, directives: [s.PC, s.mk], styles: [":host{display:block;line-height:1.75}.ngx-shimmer{display:inline-block;width:100%;height:12px;background-color:#f6f7f8;background-image:linear-gradient(to right,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);background-position:0 0;background-repeat:no-repeat;background-size:1000px 1000px;-webkit-animation:1s linear infinite forwards shimmerEffect;animation:1s linear infinite forwards shimmerEffect}.ngx-shimmer.rtl{-webkit-animation:1s linear infinite forwards shimmerEffectRTL;animation:1s linear infinite forwards shimmerEffectRTL}@-webkit-keyframes shimmerEffect{0%{background-position:-1000px 0}100%{background-position:1000px 0}}@keyframes shimmerEffect{0%{background-position:-1000px 0}100%{background-position:1000px 0}}@-webkit-keyframes shimmerEffectRTL{0%{background-position:1000px 0}100%{background-position:-1000px 0}}@keyframes shimmerEffectRTL{0%{background-position:1000px 0}100%{background-position:-1000px 0}}"], encapsulation: 2 }), $ })(),
                ee = (() => { class $ {} return $.\u0275fac = function(K) { return new(K || $) }, $.\u0275mod = n.oAB({ type: $ }), $.\u0275inj = n.cJS({ imports: [
                            [s.ez]
                        ] }), $ })() }, 9042: (it, Me, _) => {
            function s(N) { for (let ne in N) { let Y = N[ne] || ""; switch (ne) {
                        case "display":
                            N.display = "flex" === Y ? ["-webkit-flex", "flex"] : "inline-flex" === Y ? ["-webkit-inline-flex", "inline-flex"] : Y; break;
                        case "align-items":
                        case "align-self":
                        case "align-content":
                        case "flex":
                        case "flex-basis":
                        case "flex-flow":
                        case "flex-grow":
                        case "flex-shrink":
                        case "flex-wrap":
                        case "justify-content":
                            N["-webkit-" + ne] = Y; break;
                        case "flex-direction":
                            Y = Y || "row", N["-webkit-flex-direction"] = Y, N["flex-direction"] = Y; break;
                        case "order":
                            N.order = N["-webkit-" + ne] = isNaN(+Y) ? "0" : Y } } return N }
            _.d(Me, { Ar: () => V, GK: () => s, iQ: () => c, kt: () => K, tj: () => ee }); const n = "inline",
                c = ["row", "column", "row-reverse", "column-reverse"];

            function V(N) { let [ne, Y, de] = be(N); return function re(N, ne = null, Y = !1) { return { display: Y ? "inline-flex" : "flex", "box-sizing": "border-box", "flex-direction": N, "flex-wrap": ne || null } }(ne, Y, de) }

            function be(N) { var ne;
                N = null !== (ne = null == N ? void 0 : N.toLowerCase()) && void 0 !== ne ? ne : ""; let [Y, de, ce] = N.split(" "); return c.find(se => se === Y) || (Y = c[0]), de === n && (de = ce !== n ? ce : "", ce = n), [Y, $(de), !!ce] }

            function ee(N) { let [ne] = be(N); return ne.indexOf("row") > -1 }

            function $(N) { if (N) switch (N.toLowerCase()) {
                    case "reverse":
                    case "wrap-reverse":
                    case "reverse-wrap":
                        N = "wrap-reverse"; break;
                    case "no":
                    case "none":
                    case "nowrap":
                        N = "nowrap"; break;
                    default:
                        N = "wrap" }
                return N }

            function K(N, ...ne) { if (null == N) throw TypeError("Cannot convert undefined or null to object"); for (let Y of ne)
                    if (null != Y)
                        for (let de in Y) Y.hasOwnProperty(de) && (N[de] = Y[de]);
                return N } }, 3270: (it, Me, _) => { _.d(Me, { Bs: () => Re, FL: () => et, IR: () => de, Ot: () => dt, QI: () => _e, RK: () => Ge, WU: () => we, g5: () => ke, iR: () => Ze, wY: () => Oe, yB: () => lt }); var s = _(5e3),
                n = _(9808),
                c = _(1135),
                V = _(8306),
                be = _(6451),
                ee = _(7579),
                $ = _(9042),
                re = _(9300),
                K = _(8505); const ne = { provide: s.tb, useFactory: function N(p, y) { return () => { if ((0, n.NF)(y)) { const a = Array.from(p.querySelectorAll(`[class*=${Y}]`)),
                                    d = /\bflex-layout-.+?\b/g;
                                a.forEach(u => { u.classList.contains(`${Y}ssr`) && u.parentNode ? u.parentNode.removeChild(u) : u.className.replace(d, "") }) } } }, deps: [n.K0, s.Lbi], multi: !0 },
                Y = "flex-layout-"; let de = (() => { class p {} return p.\u0275fac = function(a) { return new(a || p) }, p.\u0275mod = s.oAB({ type: p }), p.\u0275inj = s.cJS({ providers: [ne] }), p })();
            class ce { constructor(y = !1, a = "all", d = "", u = "", b = 0) { this.matches = y, this.mediaQuery = a, this.mqAlias = d, this.suffix = u, this.priority = b, this.property = "" }
                clone() { return new ce(this.matches, this.mediaQuery, this.mqAlias, this.suffix) } } let se = (() => { class p { constructor() { this.stylesheet = new Map }
                    addStyleToElement(a, d, u) { const b = this.stylesheet.get(a);
                        b ? b.set(d, u) : this.stylesheet.set(a, new Map([
                            [d, u]
                        ])) }
                    clearStyles() { this.stylesheet.clear() }
                    getStyleForElement(a, d) { const u = this.stylesheet.get(a); let b = ""; if (u) { const A = u.get(d);
                            ("number" == typeof A || "string" == typeof A) && (b = A + "") } return b } } return p.\u0275fac = function(a) { return new(a || p) }, p.\u0275prov = s.Yz7({ token: p, factory: p.\u0275fac, providedIn: "root" }), p })(); const ke = { addFlexToParent: !0, addOrientationBps: !1, disableDefaultBps: !1, disableVendorPrefixes: !1, serverLoaded: !1, useColumnBasisZero: !0, printWithBreakpoints: [], mediaTriggerAutoRestore: !0, ssrObserveBreakpoints: [], multiplier: void 0, defaultUnit: "px", detectLayoutDisplay: !1 },
                we = new s.OlP("Flex Layout token, config options for the library", { providedIn: "root", factory: () => ke }),
                Oe = new s.OlP("FlexLayoutServerLoaded", { providedIn: "root", factory: () => !1 }),
                Re = new s.OlP("Flex Layout token, collect all breakpoints into one provider", { providedIn: "root", factory: () => null });

            function Le(p, y) { return p = p ? p.clone() : new ce, y && (p.mqAlias = y.alias, p.mediaQuery = y.mediaQuery, p.suffix = y.suffix, p.priority = y.priority), p }
            class _e { constructor() { this.shouldCache = !0 }
                sideEffect(y, a, d) {} } let Ge = (() => { class p { constructor(a, d, u, b) { this._serverStylesheet = a, this._serverModuleLoaded = d, this._platformId = u, this.layoutConfig = b }
                    applyStyleToElement(a, d, u = null) { let b = {}; "string" == typeof d && (b[d] = u, d = b), b = this.layoutConfig.disableVendorPrefixes ? d : (0, $.GK)(d), this._applyMultiValueStyleToElement(b, a) }
                    applyStyleToElements(a, d = []) { const u = this.layoutConfig.disableVendorPrefixes ? a : (0, $.GK)(a);
                        d.forEach(b => { this._applyMultiValueStyleToElement(u, b) }) }
                    getFlowDirection(a) { const d = "flex-direction"; let u = this.lookupStyle(a, d); return [u || "row", this.lookupInlineStyle(a, d) || (0, n.PM)(this._platformId) && this._serverModuleLoaded ? u : ""] }
                    hasWrap(a) { return "wrap" === this.lookupStyle(a, "flex-wrap") }
                    lookupAttributeValue(a, d) { var u; return null !== (u = a.getAttribute(d)) && void 0 !== u ? u : "" }
                    lookupInlineStyle(a, d) { return (0, n.NF)(this._platformId) ? a.style.getPropertyValue(d) : function Ie(p, y) { var a; return null !== (a = Ae(p)[y]) && void 0 !== a ? a : "" }(a, d) }
                    lookupStyle(a, d, u = !1) { let b = ""; return a && ((b = this.lookupInlineStyle(a, d)) || ((0, n.NF)(this._platformId) ? u || (b = getComputedStyle(a).getPropertyValue(d)) : this._serverModuleLoaded && (b = this._serverStylesheet.getStyleForElement(a, d)))), b ? b.trim() : "" }
                    _applyMultiValueStyleToElement(a, d) { Object.keys(a).sort().forEach(u => { const b = a[u],
                                A = Array.isArray(b) ? b : [b];
                            A.sort(); for (let G of A) G = G ? G + "" : "", (0, n.NF)(this._platformId) || !this._serverModuleLoaded ? (0, n.NF)(this._platformId) ? d.style.setProperty(u, G) : Be(d, u, G) : this._serverStylesheet.addStyleToElement(d, u, G) }) } } return p.\u0275fac = function(a) { return new(a || p)(s.LFG(se), s.LFG(Oe), s.LFG(s.Lbi), s.LFG(we)) }, p.\u0275prov = s.Yz7({ token: p, factory: p.\u0275fac, providedIn: "root" }), p })();

            function Be(p, y, a) { y = y.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(); const d = Ae(p);
                d[y] = null != a ? a : "",
                    function Ve(p, y) { let a = ""; for (const d in y) y[d] && (a += `${d}:${y[d]};`);
                        p.setAttribute("style", a) }(p, d) }

            function Ae(p) { const y = {},
                    a = p.getAttribute("style"); if (a) { const d = a.split(/;+/g); for (let u = 0; u < d.length; u++) { const b = d[u].trim(); if (b.length > 0) { const A = b.indexOf(":"); if (-1 === A) throw new Error(`Invalid CSS style: ${b}`);
                            y[b.substr(0, A).trim()] = b.substr(A + 1).trim() } } } return y }

            function Ce(p, y) { return (y && y.priority || 0) - (p && p.priority || 0) }

            function q(p, y) { return (p.priority || 0) - (y.priority || 0) } let ie = (() => { class p { constructor(a, d, u) { this._zone = a, this._platformId = d, this._document = u, this.source = new c.X(new ce(!0)), this.registry = new Map, this.pendingRemoveListenerFns = [], this._observable$ = this.source.asObservable() }
                    get activations() { const a = []; return this.registry.forEach((d, u) => { d.matches && a.push(u) }), a }
                    isActive(a) { var d; const u = this.registry.get(a); return null !== (d = null == u ? void 0 : u.matches) && void 0 !== d ? d : this.registerQuery(a).some(b => b.matches) }
                    observe(a, d = !1) { if (a && a.length) { const u = this._observable$.pipe((0, re.h)(A => !d || a.indexOf(A.mediaQuery) > -1)),
                                b = new V.y(A => { const G = this.registerQuery(a); if (G.length) { const f = G.pop();
                                        G.forEach(R => { A.next(R) }), this.source.next(f) }
                                    A.complete() }); return (0, be.T)(b, u) } return this._observable$ }
                    registerQuery(a) { const d = Array.isArray(a) ? a : [a],
                            u = []; return function P(p, y) { const a = p.filter(d => !M[d]); if (a.length > 0) { const d = a.join(", "); try { const u = y.createElement("style");
                                    u.setAttribute("type", "text/css"), u.styleSheet || u.appendChild(y.createTextNode(`\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ${d} {.fx-query-test{ }}\n`)), y.head.appendChild(u), a.forEach(b => M[b] = u) } catch (u) { console.error(u) } } }(d, this._document), d.forEach(b => { const A = f => { this._zone.run(() => this.source.next(new ce(f.matches, b))) }; let G = this.registry.get(b);
                            G || (G = this.buildMQL(b), G.addListener(A), this.pendingRemoveListenerFns.push(() => G.removeListener(A)), this.registry.set(b, G)), G.matches && u.push(new ce(!0, b)) }), u }
                    ngOnDestroy() { let a; for (; a = this.pendingRemoveListenerFns.pop();) a() }
                    buildMQL(a) { return function U(p, y) { return y && window.matchMedia("all").addListener ? window.matchMedia(p) : { matches: "all" === p || "" === p, media: p, addListener: () => {}, removeListener: () => {}, onchange: null, addEventListener() {}, removeEventListener() {}, dispatchEvent: () => !1 } }(a, (0, n.NF)(this._platformId)) } } return p.\u0275fac = function(a) { return new(a || p)(s.LFG(s.R0b), s.LFG(s.Lbi), s.LFG(n.K0)) }, p.\u0275prov = s.Yz7({ token: p, factory: p.\u0275fac, providedIn: "root" }), p })(); const M = {},
                le = [{ alias: "xs", mediaQuery: "screen and (min-width: 0px) and (max-width: 599.98px)", priority: 1e3 }, { alias: "sm", mediaQuery: "screen and (min-width: 600px) and (max-width: 959.98px)", priority: 900 }, { alias: "md", mediaQuery: "screen and (min-width: 960px) and (max-width: 1279.98px)", priority: 800 }, { alias: "lg", mediaQuery: "screen and (min-width: 1280px) and (max-width: 1919.98px)", priority: 700 }, { alias: "xl", mediaQuery: "screen and (min-width: 1920px) and (max-width: 4999.98px)", priority: 600 }, { alias: "lt-sm", overlapping: !0, mediaQuery: "screen and (max-width: 599.98px)", priority: 950 }, { alias: "lt-md", overlapping: !0, mediaQuery: "screen and (max-width: 959.98px)", priority: 850 }, { alias: "lt-lg", overlapping: !0, mediaQuery: "screen and (max-width: 1279.98px)", priority: 750 }, { alias: "lt-xl", overlapping: !0, priority: 650, mediaQuery: "screen and (max-width: 1919.98px)" }, { alias: "gt-xs", overlapping: !0, mediaQuery: "screen and (min-width: 600px)", priority: -950 }, { alias: "gt-sm", overlapping: !0, mediaQuery: "screen and (min-width: 960px)", priority: -850 }, { alias: "gt-md", overlapping: !0, mediaQuery: "screen and (min-width: 1280px)", priority: -750 }, { alias: "gt-lg", overlapping: !0, mediaQuery: "screen and (min-width: 1920px)", priority: -650 }],
                fe = "(orientation: portrait) and (max-width: 599.98px)",
                ue = "(orientation: landscape) and (max-width: 959.98px)",
                Te = "(orientation: portrait) and (min-width: 600px) and (max-width: 839.98px)",
                D = "(orientation: landscape) and (min-width: 960px) and (max-width: 1279.98px)",
                O = "(orientation: portrait) and (min-width: 840px)",
                I = "(orientation: landscape) and (min-width: 1280px)",
                B = { HANDSET: `${fe}, ${ue}`, TABLET: `${Te} , ${D}`, WEB: `${O}, ${I} `, HANDSET_PORTRAIT: `${fe}`, TABLET_PORTRAIT: `${Te} `, WEB_PORTRAIT: `${O}`, HANDSET_LANDSCAPE: `${ue}`, TABLET_LANDSCAPE: `${D}`, WEB_LANDSCAPE: `${I}` },
                ge = [{ alias: "handset", priority: 2e3, mediaQuery: B.HANDSET }, { alias: "handset.landscape", priority: 2e3, mediaQuery: B.HANDSET_LANDSCAPE }, { alias: "handset.portrait", priority: 2e3, mediaQuery: B.HANDSET_PORTRAIT }, { alias: "tablet", priority: 2100, mediaQuery: B.TABLET }, { alias: "tablet.landscape", priority: 2100, mediaQuery: B.TABLET_LANDSCAPE }, { alias: "tablet.portrait", priority: 2100, mediaQuery: B.TABLET_PORTRAIT }, { alias: "web", priority: 2200, mediaQuery: B.WEB, overlapping: !0 }, { alias: "web.landscape", priority: 2200, mediaQuery: B.WEB_LANDSCAPE, overlapping: !0 }, { alias: "web.portrait", priority: 2200, mediaQuery: B.WEB_PORTRAIT, overlapping: !0 }],
                he = /(\.|-|_)/g;

            function ve(p) { let y = p.length > 0 ? p.charAt(0) : "",
                    a = p.length > 1 ? p.slice(1) : ""; return y.toUpperCase() + a } const Ue = new s.OlP("Token (@angular/flex-layout) Breakpoints", { providedIn: "root", factory: () => { const p = (0, s.f3M)(Re),
                        y = (0, s.f3M)(we),
                        a = [].concat.apply([], (p || []).map(u => Array.isArray(u) ? u : [u])); return function Ke(p, y = []) { const a = {}; return p.forEach(d => { a[d.alias] = d }), y.forEach(d => { a[d.alias] ? (0, $.kt)(a[d.alias], d) : a[d.alias] = d }),
                            function We(p) { return p.forEach(y => { y.suffix || (y.suffix = function xe(p) { return p.replace(he, "|").split("|").map(ve).join("") }(y.alias), y.overlapping = !!y.overlapping) }), p }(Object.keys(a).map(d => a[d])) }((y.disableDefaultBps ? [] : le).concat(y.addOrientationBps ? ge : []), a) } }); let He = (() => { class p { constructor(a) { this.findByMap = new Map, this.items = [...a].sort(q) }
                    findByAlias(a) { return a ? this.findWithPredicate(a, d => d.alias === a) : null }
                    findByQuery(a) { return this.findWithPredicate(a, d => d.mediaQuery === a) }
                    get overlappings() { return this.items.filter(a => a.overlapping) }
                    get aliases() { return this.items.map(a => a.alias) }
                    get suffixes() { return this.items.map(a => { var d; return null !== (d = null == a ? void 0 : a.suffix) && void 0 !== d ? d : "" }) }
                    findWithPredicate(a, d) { var u; let b = this.findByMap.get(a); return b || (b = null !== (u = this.items.find(d)) && void 0 !== u ? u : null, this.findByMap.set(a, b)), null != b ? b : null } } return p.\u0275fac = function(a) { return new(a || p)(s.LFG(Ue)) }, p.\u0275prov = s.Yz7({ token: p, factory: p.\u0275fac, providedIn: "root" }), p })(); const Pe = "print",
                rt = { alias: Pe, mediaQuery: Pe, priority: 1e3 }; let st = (() => { class p { constructor(a, d, u) { this.breakpoints = a, this.layoutConfig = d, this._document = u, this.registeredBeforeAfterPrintHooks = !1, this.isPrintingBeforeAfterEvent = !1, this.beforePrintEventListeners = [], this.afterPrintEventListeners = [], this.formerActivations = null, this.isPrinting = !1, this.queue = new nt, this.deactivations = [] }
                    withPrintQuery(a) { return [...a, Pe] }
                    isPrintEvent(a) { return a.mediaQuery.startsWith(Pe) }
                    get printAlias() { var a; return [...null !== (a = this.layoutConfig.printWithBreakpoints) && void 0 !== a ? a : []] }
                    get printBreakPoints() { return this.printAlias.map(a => this.breakpoints.findByAlias(a)).filter(a => null !== a) }
                    getEventBreakpoints({ mediaQuery: a }) { const d = this.breakpoints.findByQuery(a); return (d ? [...this.printBreakPoints, d] : this.printBreakPoints).sort(Ce) }
                    updateEvent(a) { var d; let u = this.breakpoints.findByQuery(a.mediaQuery); return this.isPrintEvent(a) && (u = this.getEventBreakpoints(a)[0], a.mediaQuery = null !== (d = null == u ? void 0 : u.mediaQuery) && void 0 !== d ? d : ""), Le(a, u) }
                    registerBeforeAfterPrintHooks(a) { if (!this._document.defaultView || this.registeredBeforeAfterPrintHooks) return;
                        this.registeredBeforeAfterPrintHooks = !0; const d = () => { this.isPrinting || (this.isPrintingBeforeAfterEvent = !0, this.startPrinting(a, this.getEventBreakpoints(new ce(!0, Pe))), a.updateStyles()) },
                            u = () => { this.isPrintingBeforeAfterEvent = !1, this.isPrinting && (this.stopPrinting(a), a.updateStyles()) };
                        this._document.defaultView.addEventListener("beforeprint", d), this._document.defaultView.addEventListener("afterprint", u), this.beforePrintEventListeners.push(d), this.afterPrintEventListeners.push(u) }
                    interceptEvents(a) { return d => { this.isPrintEvent(d) ? d.matches && !this.isPrinting ? (this.startPrinting(a, this.getEventBreakpoints(d)), a.updateStyles()) : !d.matches && this.isPrinting && !this.isPrintingBeforeAfterEvent && (this.stopPrinting(a), a.updateStyles()) : this.collectActivations(a, d) } }
                    blockPropagation() { return a => !(this.isPrinting || this.isPrintEvent(a)) }
                    startPrinting(a, d) { this.isPrinting = !0, this.formerActivations = a.activatedBreakpoints, a.activatedBreakpoints = this.queue.addPrintBreakpoints(d) }
                    stopPrinting(a) { a.activatedBreakpoints = this.deactivations, this.deactivations = [], this.formerActivations = null, this.queue.clear(), this.isPrinting = !1 }
                    collectActivations(a, d) { if (!this.isPrinting || this.isPrintingBeforeAfterEvent) { if (!this.isPrintingBeforeAfterEvent) return void(this.deactivations = []); if (!d.matches) { const u = this.breakpoints.findByQuery(d.mediaQuery); if (u) { const b = this.formerActivations && this.formerActivations.includes(u),
                                        A = !this.formerActivations && a.activatedBreakpoints.includes(u);
                                    (b || A) && (this.deactivations.push(u), this.deactivations.sort(Ce)) } } } }
                    ngOnDestroy() { this._document.defaultView && (this.beforePrintEventListeners.forEach(a => this._document.defaultView.removeEventListener("beforeprint", a)), this.afterPrintEventListeners.forEach(a => this._document.defaultView.removeEventListener("afterprint", a))) } } return p.\u0275fac = function(a) { return new(a || p)(s.LFG(He), s.LFG(we), s.LFG(n.K0)) }, p.\u0275prov = s.Yz7({ token: p, factory: p.\u0275fac, providedIn: "root" }), p })();
            class nt { constructor() { this.printBreakpoints = [] }
                addPrintBreakpoints(y) { return y.push(rt), y.sort(Ce), y.forEach(a => this.addBreakpoint(a)), this.printBreakpoints }
                addBreakpoint(y) { y && void 0 === this.printBreakpoints.find(d => d.mediaQuery === y.mediaQuery) && (this.printBreakpoints = function qe(p) { var y; return null !== (y = null == p ? void 0 : p.mediaQuery.startsWith(Pe)) && void 0 !== y && y }(y) ? [y, ...this.printBreakpoints] : [...this.printBreakpoints, y]) }
                clear() { this.printBreakpoints = [] } } let lt = (() => { class p { constructor(a, d, u) { this.matchMedia = a, this.breakpoints = d, this.hook = u, this._useFallbacks = !0, this._activatedBreakpoints = [], this.elementMap = new Map, this.elementKeyMap = new WeakMap, this.watcherMap = new WeakMap, this.updateMap = new WeakMap, this.clearMap = new WeakMap, this.subject = new ee.x, this.observeActivations() }
                    get activatedAlias() { var a, d; return null !== (d = null === (a = this.activatedBreakpoints[0]) || void 0 === a ? void 0 : a.alias) && void 0 !== d ? d : "" }
                    set activatedBreakpoints(a) { this._activatedBreakpoints = [...a] }
                    get activatedBreakpoints() { return [...this._activatedBreakpoints] }
                    set useFallbacks(a) { this._useFallbacks = a }
                    onMediaChange(a) { const d = this.findByQuery(a.mediaQuery); if (d) { a = Le(a, d); const u = this.activatedBreakpoints.indexOf(d);
                            a.matches && -1 === u ? (this._activatedBreakpoints.push(d), this._activatedBreakpoints.sort(Ce), this.updateStyles()) : !a.matches && -1 !== u && (this._activatedBreakpoints.splice(u, 1), this._activatedBreakpoints.sort(Ce), this.updateStyles()) } }
                    init(a, d, u, b, A = []) { at(this.updateMap, a, d, u), at(this.clearMap, a, d, b), this.buildElementKeyMap(a, d), this.watchExtraTriggers(a, d, A) }
                    getValue(a, d, u) { const b = this.elementMap.get(a); if (b) { const A = void 0 !== u ? b.get(u) : this.getActivatedValues(b, d); if (A) return A.get(d) } }
                    hasValue(a, d) { const u = this.elementMap.get(a); if (u) { const b = this.getActivatedValues(u, d); if (b) return void 0 !== b.get(d) || !1 } return !1 }
                    setValue(a, d, u, b) { var A; let G = this.elementMap.get(a); if (G) { const R = (null !== (A = G.get(b)) && void 0 !== A ? A : new Map).set(d, u);
                            G.set(b, R), this.elementMap.set(a, G) } else G = (new Map).set(b, (new Map).set(d, u)), this.elementMap.set(a, G); const f = this.getValue(a, d);
                        void 0 !== f && this.updateElement(a, d, f) }
                    trackValue(a, d) { return this.subject.asObservable().pipe((0, re.h)(u => u.element === a && u.key === d)) }
                    updateStyles() { this.elementMap.forEach((a, d) => { const u = new Set(this.elementKeyMap.get(d)); let b = this.getActivatedValues(a);
                            b && b.forEach((A, G) => { this.updateElement(d, G, A), u.delete(G) }), u.forEach(A => { if (b = this.getActivatedValues(a, A), b) { const G = b.get(A);
                                    this.updateElement(d, A, G) } else this.clearElement(d, A) }) }) }
                    clearElement(a, d) { const u = this.clearMap.get(a); if (u) { const b = u.get(d);
                            b && (b(), this.subject.next({ element: a, key: d, value: "" })) } }
                    updateElement(a, d, u) { const b = this.updateMap.get(a); if (b) { const A = b.get(d);
                            A && (A(u), this.subject.next({ element: a, key: d, value: u })) } }
                    releaseElement(a) { const d = this.watcherMap.get(a);
                        d && (d.forEach(b => b.unsubscribe()), this.watcherMap.delete(a)); const u = this.elementMap.get(a);
                        u && (u.forEach((b, A) => u.delete(A)), this.elementMap.delete(a)) }
                    triggerUpdate(a, d) { const u = this.elementMap.get(a); if (u) { const b = this.getActivatedValues(u, d);
                            b && (d ? this.updateElement(a, d, b.get(d)) : b.forEach((A, G) => this.updateElement(a, G, A))) } }
                    buildElementKeyMap(a, d) { let u = this.elementKeyMap.get(a);
                        u || (u = new Set, this.elementKeyMap.set(a, u)), u.add(d) }
                    watchExtraTriggers(a, d, u) { if (u && u.length) { let b = this.watcherMap.get(a); if (b || (b = new Map, this.watcherMap.set(a, b)), !b.get(d)) { const G = (0, be.T)(...u).subscribe(() => { const f = this.getValue(a, d);
                                    this.updateElement(a, d, f) });
                                b.set(d, G) } } }
                    findByQuery(a) { return this.breakpoints.findByQuery(a) }
                    getActivatedValues(a, d) { for (let b = 0; b < this.activatedBreakpoints.length; b++) { const G = a.get(this.activatedBreakpoints[b].alias); if (G && (void 0 === d || G.has(d) && null != G.get(d))) return G } if (!this._useFallbacks) return; const u = a.get(""); return void 0 === d || u && u.has(d) ? u : void 0 }
                    observeActivations() { const a = this.breakpoints.items.map(d => d.mediaQuery);
                        this.hook.registerBeforeAfterPrintHooks(this), this.matchMedia.observe(this.hook.withPrintQuery(a)).pipe((0, K.b)(this.hook.interceptEvents(this)), (0, re.h)(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this)) } } return p.\u0275fac = function(a) { return new(a || p)(s.LFG(ie), s.LFG(He), s.LFG(st)) }, p.\u0275prov = s.Yz7({ token: p, factory: p.\u0275fac, providedIn: "root" }), p })();

            function at(p, y, a, d) { var u; if (void 0 !== d) { const b = null !== (u = p.get(y)) && void 0 !== u ? u : new Map;
                    b.set(a, d), p.set(y, b) } } let Ze = (() => { class p { constructor(a, d, u, b) { this.elementRef = a, this.styleBuilder = d, this.styler = u, this.marshal = b, this.DIRECTIVE_KEY = "", this.inputs = [], this.mru = {}, this.destroySubject = new ee.x, this.styleCache = new Map }
                    get parentElement() { return this.elementRef.nativeElement.parentElement }
                    get nativeElement() { return this.elementRef.nativeElement }
                    get activatedValue() { return this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY) }
                    set activatedValue(a) { this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, a, this.marshal.activatedAlias) }
                    ngOnChanges(a) { Object.keys(a).forEach(d => { if (-1 !== this.inputs.indexOf(d)) { const u = d.split(".").slice(1).join(".");
                                this.setValue(a[d].currentValue, u) } }) }
                    ngOnDestroy() { this.destroySubject.next(), this.destroySubject.complete(), this.marshal.releaseElement(this.nativeElement) }
                    init(a = []) { this.marshal.init(this.elementRef.nativeElement, this.DIRECTIVE_KEY, this.updateWithValue.bind(this), this.clearStyles.bind(this), a) }
                    addStyles(a, d) { const u = this.styleBuilder,
                            b = u.shouldCache; let A = this.styleCache.get(a);
                        (!A || !b) && (A = u.buildStyles(a, d), b && this.styleCache.set(a, A)), this.mru = Object.assign({}, A), this.applyStyleToElement(A), u.sideEffect(a, A, d) }
                    clearStyles() { Object.keys(this.mru).forEach(a => { this.mru[a] = "" }), this.applyStyleToElement(this.mru), this.mru = {}, this.currentValue = void 0 }
                    triggerUpdate() { this.marshal.triggerUpdate(this.nativeElement, this.DIRECTIVE_KEY) }
                    getFlexFlowDirection(a, d = !1) { if (a) { const [u, b] = this.styler.getFlowDirection(a); if (!b && d) { const A = (0, $.Ar)(u);
                                this.styler.applyStyleToElements(A, [a]) } return u.trim() } return "row" }
                    hasWrap(a) { return this.styler.hasWrap(a) }
                    applyStyleToElement(a, d, u = this.nativeElement) { this.styler.applyStyleToElement(u, a, d) }
                    setValue(a, d) { this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, a, d) }
                    updateWithValue(a) { this.currentValue !== a && (this.addStyles(a), this.currentValue = a) } } return p.\u0275fac = function(a) { return new(a || p)(s.Y36(s.SBq), s.Y36(_e), s.Y36(Ge), s.Y36(lt)) }, p.\u0275dir = s.lG2({ type: p, features: [s.TTD] }), p })();

            function dt(p, y = "1", a = "1") { let d = [y, a, p],
                    u = p.indexOf("calc"); if (u > 0) { d[2] = ze(p.substring(u).trim()); let b = p.substr(0, u).trim().split(" ");
                    2 == b.length && (d[0] = b[0], d[1] = b[1]) } else if (0 == u) d[2] = ze(p.trim());
                else { let b = p.split(" ");
                    d = 3 === b.length ? b : [y, a, p] } return d }

            function ze(p) { return p.replace(/[\s]/g, "").replace(/[\/\*\+\-]/g, " $& ") }

            function et(p, y) { if (void 0 === y) return p; const a = d => { const u = +d.slice(0, -"x".length); return p.endsWith("x") && !isNaN(u) ? `${u*y.value}${y.unit}` : p }; return p.includes(" ") ? p.split(" ").map(a).join(" ") : a(p) } }, 3322: (it, Me, _) => { _.d(Me, { Zl: () => le, aT: () => Te, oO: () => ke }); var s = _(5e3),
                n = _(3270),
                c = _(9808),
                ee = (_(3191), _(2722), _(2313)); let de = (() => { class D extends n.iR { constructor(I, B, ge, he, ve, xe, We) { super(I, null, B, ge), this.ngClassInstance = We, this.DIRECTIVE_KEY = "ngClass", this.ngClassInstance || (this.ngClassInstance = new c.mk(he, ve, I, xe)), this.init(), this.setValue("", "") }
                    set klass(I) { this.ngClassInstance.klass = I, this.setValue(I, "") }
                    updateWithValue(I) { this.ngClassInstance.ngClass = I, this.ngClassInstance.ngDoCheck() }
                    ngDoCheck() { this.ngClassInstance.ngDoCheck() } }
                return D.\u0275fac = function(I) { return new(I || D)(s.Y36(s.SBq), s.Y36(n.RK), s.Y36(n.yB), s.Y36(s.ZZ4), s.Y36(s.aQg), s.Y36(s.Qsj), s.Y36(c.mk, 10)) }, D.\u0275dir = s.lG2({ type: D, inputs: { klass: ["class", "klass"] }, features: [s.qOj] }), D })(); const ce = ["ngClass", "ngClass.xs", "ngClass.sm", "ngClass.md", "ngClass.lg", "ngClass.xl", "ngClass.lt-sm", "ngClass.lt-md", "ngClass.lt-lg", "ngClass.lt-xl", "ngClass.gt-xs", "ngClass.gt-sm", "ngClass.gt-md", "ngClass.gt-lg"]; let ke = (() => { class D extends de { constructor() { super(...arguments), this.inputs = ce } } return D.\u0275fac = function() { let O; return function(B) { return (O || (O = s.n5z(D)))(B || D) } }(), D.\u0275dir = s.lG2({ type: D, selectors: [
                        ["", "ngClass", ""],
                        ["", "ngClass.xs", ""],
                        ["", "ngClass.sm", ""],
                        ["", "ngClass.md", ""],
                        ["", "ngClass.lg", ""],
                        ["", "ngClass.xl", ""],
                        ["", "ngClass.lt-sm", ""],
                        ["", "ngClass.lt-md", ""],
                        ["", "ngClass.lt-lg", ""],
                        ["", "ngClass.lt-xl", ""],
                        ["", "ngClass.gt-xs", ""],
                        ["", "ngClass.gt-sm", ""],
                        ["", "ngClass.gt-md", ""],
                        ["", "ngClass.gt-lg", ""]
                    ], inputs: { ngClass: "ngClass", "ngClass.xs": "ngClass.xs", "ngClass.sm": "ngClass.sm", "ngClass.md": "ngClass.md", "ngClass.lg": "ngClass.lg", "ngClass.xl": "ngClass.xl", "ngClass.lt-sm": "ngClass.lt-sm", "ngClass.lt-md": "ngClass.lt-md", "ngClass.lt-lg": "ngClass.lt-lg", "ngClass.lt-xl": "ngClass.lt-xl", "ngClass.gt-xs": "ngClass.gt-xs", "ngClass.gt-sm": "ngClass.gt-sm", "ngClass.gt-md": "ngClass.gt-md", "ngClass.gt-lg": "ngClass.gt-lg" }, features: [s.qOj] }), D })();
            class Ie { constructor(O, I, B = !0) { this.key = O, this.value = I, this.key = B ? O.replace(/['"]/g, "").trim() : O.trim(), this.value = B ? I.replace(/['"]/g, "").trim() : I.trim(), this.value = this.value.replace(/;/, "") } }

            function Be(D) { let O = typeof D; return "object" === O ? D.constructor === Array ? "array" : D.constructor === Set ? "set" : "object" : O }

            function q(D) { const [O, ...I] = D.split(":"); return new Ie(O, I.join(":")) }

            function ie(D, O) { return O.key && (D[O.key] = O.value), D } let M = (() => { class D extends n.iR { constructor(I, B, ge, he, ve, xe, We, Ke, Ue) { var He;
                        super(I, null, B, ge), this.sanitizer = he, this.ngStyleInstance = We, this.DIRECTIVE_KEY = "ngStyle", this.ngStyleInstance || (this.ngStyleInstance = new c.PC(I, ve, xe)), this.init(); const Pe = null !== (He = this.nativeElement.getAttribute("style")) && void 0 !== He ? He : "";
                        this.fallbackStyles = this.buildStyleMap(Pe), this.isServer = Ke && (0, c.PM)(Ue) }
                    updateWithValue(I) { const B = this.buildStyleMap(I);
                        this.ngStyleInstance.ngStyle = Object.assign(Object.assign({}, this.fallbackStyles), B), this.isServer && this.applyStyleToElement(B), this.ngStyleInstance.ngDoCheck() }
                    clearStyles() { this.ngStyleInstance.ngStyle = this.fallbackStyles, this.ngStyleInstance.ngDoCheck() }
                    buildStyleMap(I) { const B = ge => { var he; return null !== (he = this.sanitizer.sanitize(s.q3G.STYLE, ge)) && void 0 !== he ? he : "" }; if (I) switch (Be(I)) {
                            case "string":
                                return fe(function Ve(D, O = ";") { return String(D).trim().split(O).map(I => I.trim()).filter(I => "" !== I) }(I), B);
                            case "array":
                                return fe(I, B);
                            default:
                                return function Ce(D, O) { let I = []; return "set" === Be(D) ? D.forEach(B => I.push(B)) : Object.keys(D).forEach(B => { I.push(`${B}:${D[B]}`) }),
                                        function Ae(D, O) { return D.map(q).filter(B => !!B).map(B => (O && (B.value = O(B.value)), B)).reduce(ie, {}) }(I, O) }(I, B) }
                        return {} }
                    ngDoCheck() { this.ngStyleInstance.ngDoCheck() } }
                return D.\u0275fac = function(I) { return new(I || D)(s.Y36(s.SBq), s.Y36(n.RK), s.Y36(n.yB), s.Y36(ee.H7), s.Y36(s.aQg), s.Y36(s.Qsj), s.Y36(c.PC, 10), s.Y36(n.wY), s.Y36(s.Lbi)) }, D.\u0275dir = s.lG2({ type: D, features: [s.qOj] }), D })(); const P = ["ngStyle", "ngStyle.xs", "ngStyle.sm", "ngStyle.md", "ngStyle.lg", "ngStyle.xl", "ngStyle.lt-sm", "ngStyle.lt-md", "ngStyle.lt-lg", "ngStyle.lt-xl", "ngStyle.gt-xs", "ngStyle.gt-sm", "ngStyle.gt-md", "ngStyle.gt-lg"]; let le = (() => { class D extends M { constructor() { super(...arguments), this.inputs = P } } return D.\u0275fac = function() { let O; return function(B) { return (O || (O = s.n5z(D)))(B || D) } }(), D.\u0275dir = s.lG2({ type: D, selectors: [
                        ["", "ngStyle", ""],
                        ["", "ngStyle.xs", ""],
                        ["", "ngStyle.sm", ""],
                        ["", "ngStyle.md", ""],
                        ["", "ngStyle.lg", ""],
                        ["", "ngStyle.xl", ""],
                        ["", "ngStyle.lt-sm", ""],
                        ["", "ngStyle.lt-md", ""],
                        ["", "ngStyle.lt-lg", ""],
                        ["", "ngStyle.lt-xl", ""],
                        ["", "ngStyle.gt-xs", ""],
                        ["", "ngStyle.gt-sm", ""],
                        ["", "ngStyle.gt-md", ""],
                        ["", "ngStyle.gt-lg", ""]
                    ], inputs: { ngStyle: "ngStyle", "ngStyle.xs": "ngStyle.xs", "ngStyle.sm": "ngStyle.sm", "ngStyle.md": "ngStyle.md", "ngStyle.lg": "ngStyle.lg", "ngStyle.xl": "ngStyle.xl", "ngStyle.lt-sm": "ngStyle.lt-sm", "ngStyle.lt-md": "ngStyle.lt-md", "ngStyle.lt-lg": "ngStyle.lt-lg", "ngStyle.lt-xl": "ngStyle.lt-xl", "ngStyle.gt-xs": "ngStyle.gt-xs", "ngStyle.gt-sm": "ngStyle.gt-sm", "ngStyle.gt-md": "ngStyle.gt-md", "ngStyle.gt-lg": "ngStyle.gt-lg" }, features: [s.qOj] }), D })();

            function fe(D, O) { return D.map(q).filter(B => !!B).map(B => (O && (B.value = O(B.value)), B)).reduce(ie, {}) } let Te = (() => { class D {} return D.\u0275fac = function(I) { return new(I || D) }, D.\u0275mod = s.oAB({ type: D }), D.\u0275inj = s.cJS({ imports: [
                        [n.IR]
                    ] }), D })() }, 7093: (it, Me, _) => { _.d(Me, { SQ: () => Oe, Wh: () => ze, ae: () => G, xw: () => ne }); var s = _(5e3),
                n = _(226),
                c = _(3270),
                V = _(9042),
                be = _(7579),
                ee = _(2722); let $ = (() => { class f extends c.QI { buildStyles(m, { display: C }) { const k = (0, V.Ar)(m); return Object.assign(Object.assign({}, k), { display: "none" === C ? C : k.display }) } }
                return f.\u0275fac = function() { let R; return function(C) { return (R || (R = s.n5z(f)))(C || f) } }(), f.\u0275prov = s.Yz7({ token: f, factory: f.\u0275fac, providedIn: "root" }), f })(); const re = ["fxLayout", "fxLayout.xs", "fxLayout.sm", "fxLayout.md", "fxLayout.lg", "fxLayout.xl", "fxLayout.lt-sm", "fxLayout.lt-md", "fxLayout.lt-lg", "fxLayout.lt-xl", "fxLayout.gt-xs", "fxLayout.gt-sm", "fxLayout.gt-md", "fxLayout.gt-lg"]; let N = (() => { class f extends c.iR { constructor(m, C, k, T, X) { super(m, k, C, T), this._config = X, this.DIRECTIVE_KEY = "layout", this.init() }
                        updateWithValue(m) { var C; const T = this._config.detectLayoutDisplay ? this.styler.lookupStyle(this.nativeElement, "display") : "";
                            this.styleCache = null !== (C = Y.get(T)) && void 0 !== C ? C : new Map, Y.set(T, this.styleCache), this.currentValue !== m && (this.addStyles(m, { display: T }), this.currentValue = m) } }
                    return f.\u0275fac = function(m) { return new(m || f)(s.Y36(s.SBq), s.Y36(c.RK), s.Y36($), s.Y36(c.yB), s.Y36(c.WU)) }, f.\u0275dir = s.lG2({ type: f, features: [s.qOj] }), f })(),
                ne = (() => { class f extends N { constructor() { super(...arguments), this.inputs = re } } return f.\u0275fac = function() { let R; return function(C) { return (R || (R = s.n5z(f)))(C || f) } }(), f.\u0275dir = s.lG2({ type: f, selectors: [
                            ["", "fxLayout", ""],
                            ["", "fxLayout.xs", ""],
                            ["", "fxLayout.sm", ""],
                            ["", "fxLayout.md", ""],
                            ["", "fxLayout.lg", ""],
                            ["", "fxLayout.xl", ""],
                            ["", "fxLayout.lt-sm", ""],
                            ["", "fxLayout.lt-md", ""],
                            ["", "fxLayout.lt-lg", ""],
                            ["", "fxLayout.lt-xl", ""],
                            ["", "fxLayout.gt-xs", ""],
                            ["", "fxLayout.gt-sm", ""],
                            ["", "fxLayout.gt-md", ""],
                            ["", "fxLayout.gt-lg", ""]
                        ], inputs: { fxLayout: "fxLayout", "fxLayout.xs": "fxLayout.xs", "fxLayout.sm": "fxLayout.sm", "fxLayout.md": "fxLayout.md", "fxLayout.lg": "fxLayout.lg", "fxLayout.xl": "fxLayout.xl", "fxLayout.lt-sm": "fxLayout.lt-sm", "fxLayout.lt-md": "fxLayout.lt-md", "fxLayout.lt-lg": "fxLayout.lt-lg", "fxLayout.lt-xl": "fxLayout.lt-xl", "fxLayout.gt-xs": "fxLayout.gt-xs", "fxLayout.gt-sm": "fxLayout.gt-sm", "fxLayout.gt-md": "fxLayout.gt-md", "fxLayout.gt-lg": "fxLayout.gt-lg" }, features: [s.qOj] }), f })(); const Y = new Map,
                de = { "margin-left": null, "margin-right": null, "margin-top": null, "margin-bottom": null }; let ce = (() => { class f extends c.QI { constructor(m, C) { super(), this._styler = m, this._config = C }
                    buildStyles(m, C) { return m.endsWith(Ie) ? (m = m.slice(0, m.indexOf(Ie)), function Ve(f, R) { const [m, C] = f.split(" "), T = Qe => `-${Qe}`; let X = "0px",
                                W = T(null != C ? C : m),
                                $e = "0px"; return "rtl" === R ? $e = T(m) : X = T(m), { margin: `0px ${X} ${W} ${$e}` } }(m = (0, c.FL)(m, this._config.multiplier), C.directionality)) : {} }
                    sideEffect(m, C, k) { const T = k.items; if (m.endsWith(Ie)) { m = m.slice(0, m.indexOf(Ie)); const X = function Be(f, R) { const [m, C] = f.split(" "); let T = "0px",
                                    W = "0px"; return "rtl" === R ? W = m : T = m, { padding: `0px ${T} ${null!=C?C:m} ${W}` } }(m = (0, c.FL)(m, this._config.multiplier), k.directionality);
                            this._styler.applyStyleToElements(X, k.items) } else { m = (0, c.FL)(m, this._config.multiplier), m = this.addFallbackUnit(m); const X = T.pop(),
                                W = function Ce(f, R) { const m = Ae(R.directionality, R.layout),
                                        C = Object.assign({}, de); return C[m] = f, C }(m, k);
                            this._styler.applyStyleToElements(W, T), this._styler.applyStyleToElements(de, [X]) } }
                    addFallbackUnit(m) { return isNaN(+m) ? m : `${m}${this._config.defaultUnit}` } }
                return f.\u0275fac = function(m) { return new(m || f)(s.LFG(c.RK), s.LFG(c.WU)) }, f.\u0275prov = s.Yz7({ token: f, factory: f.\u0275fac, providedIn: "root" }), f })(); const se = ["fxLayoutGap", "fxLayoutGap.xs", "fxLayoutGap.sm", "fxLayoutGap.md", "fxLayoutGap.lg", "fxLayoutGap.xl", "fxLayoutGap.lt-sm", "fxLayoutGap.lt-md", "fxLayoutGap.lt-lg", "fxLayoutGap.lt-xl", "fxLayoutGap.gt-xs", "fxLayoutGap.gt-sm", "fxLayoutGap.gt-md", "fxLayoutGap.gt-lg"]; let we = (() => { class f extends c.iR { constructor(m, C, k, T, X, W) { super(m, X, T, W), this.zone = C, this.directionality = k, this.styleUtils = T, this.layout = "row", this.DIRECTIVE_KEY = "layout-gap", this.observerSubject = new be.x; const $e = [this.directionality.change, this.observerSubject.asObservable()];
                            this.init($e), this.marshal.trackValue(this.nativeElement, "layout").pipe((0, ee.R)(this.destroySubject)).subscribe(this.onLayoutChange.bind(this)) }
                        get childrenNodes() { const m = this.nativeElement.children,
                                C = []; for (let k = m.length; k--;) C[k] = m[k]; return C }
                        ngAfterContentInit() { this.buildChildObservable(), this.triggerUpdate() }
                        ngOnDestroy() { super.ngOnDestroy(), this.observer && this.observer.disconnect() }
                        onLayoutChange(m) { const k = m.value.split(" ");
                            this.layout = k[0], V.iQ.find(T => T === this.layout) || (this.layout = "row"), this.triggerUpdate() }
                        updateWithValue(m) { const C = this.childrenNodes.filter(k => 1 === k.nodeType && this.willDisplay(k)).sort((k, T) => { const X = +this.styler.lookupStyle(k, "order"),
                                    W = +this.styler.lookupStyle(T, "order"); return isNaN(X) || isNaN(W) || X === W ? 0 : X > W ? 1 : -1 }); if (C.length > 0) { const k = this.directionality.value,
                                    T = this.layout; "row" === T && "rtl" === k ? this.styleCache = Re : "row" === T && "rtl" !== k ? this.styleCache = _e : "column" === T && "rtl" === k ? this.styleCache = Le : "column" === T && "rtl" !== k && (this.styleCache = Ge), this.addStyles(m, { directionality: k, items: C, layout: T }) } }
                        clearStyles() { const m = Object.keys(this.mru).length > 0,
                                C = m ? "padding" : Ae(this.directionality.value, this.layout);
                            m && super.clearStyles(), this.styleUtils.applyStyleToElements({
                                [C]: "" }, this.childrenNodes) }
                        willDisplay(m) { const C = this.marshal.getValue(m, "show-hide"); return !0 === C || void 0 === C && "none" !== this.styleUtils.lookupStyle(m, "display") }
                        buildChildObservable() { this.zone.runOutsideAngular(() => { "undefined" != typeof MutationObserver && (this.observer = new MutationObserver(m => { m.some(k => k.addedNodes && k.addedNodes.length > 0 || k.removedNodes && k.removedNodes.length > 0) && this.observerSubject.next() }), this.observer.observe(this.nativeElement, { childList: !0 })) }) } }
                    return f.\u0275fac = function(m) { return new(m || f)(s.Y36(s.SBq), s.Y36(s.R0b), s.Y36(n.Is), s.Y36(c.RK), s.Y36(ce), s.Y36(c.yB)) }, f.\u0275dir = s.lG2({ type: f, features: [s.qOj] }), f })(),
                Oe = (() => { class f extends we { constructor() { super(...arguments), this.inputs = se } } return f.\u0275fac = function() { let R; return function(C) { return (R || (R = s.n5z(f)))(C || f) } }(), f.\u0275dir = s.lG2({ type: f, selectors: [
                            ["", "fxLayoutGap", ""],
                            ["", "fxLayoutGap.xs", ""],
                            ["", "fxLayoutGap.sm", ""],
                            ["", "fxLayoutGap.md", ""],
                            ["", "fxLayoutGap.lg", ""],
                            ["", "fxLayoutGap.xl", ""],
                            ["", "fxLayoutGap.lt-sm", ""],
                            ["", "fxLayoutGap.lt-md", ""],
                            ["", "fxLayoutGap.lt-lg", ""],
                            ["", "fxLayoutGap.lt-xl", ""],
                            ["", "fxLayoutGap.gt-xs", ""],
                            ["", "fxLayoutGap.gt-sm", ""],
                            ["", "fxLayoutGap.gt-md", ""],
                            ["", "fxLayoutGap.gt-lg", ""]
                        ], inputs: { fxLayoutGap: "fxLayoutGap", "fxLayoutGap.xs": "fxLayoutGap.xs", "fxLayoutGap.sm": "fxLayoutGap.sm", "fxLayoutGap.md": "fxLayoutGap.md", "fxLayoutGap.lg": "fxLayoutGap.lg", "fxLayoutGap.xl": "fxLayoutGap.xl", "fxLayoutGap.lt-sm": "fxLayoutGap.lt-sm", "fxLayoutGap.lt-md": "fxLayoutGap.lt-md", "fxLayoutGap.lt-lg": "fxLayoutGap.lt-lg", "fxLayoutGap.lt-xl": "fxLayoutGap.lt-xl", "fxLayoutGap.gt-xs": "fxLayoutGap.gt-xs", "fxLayoutGap.gt-sm": "fxLayoutGap.gt-sm", "fxLayoutGap.gt-md": "fxLayoutGap.gt-md", "fxLayoutGap.gt-lg": "fxLayoutGap.gt-lg" }, features: [s.qOj] }), f })(); const Re = new Map,
                Le = new Map,
                _e = new Map,
                Ge = new Map,
                Ie = " grid";

            function Ae(f, R) { switch (R) {
                    case "column":
                        return "margin-bottom";
                    case "column-reverse":
                        return "margin-top";
                    case "row":
                    default:
                        return "rtl" === f ? "margin-left" : "margin-right";
                    case "row-reverse":
                        return "rtl" === f ? "margin-right" : "margin-left" } } let Q = (() => { class f extends c.QI { buildStyles(m, C) { const k = {},
                            [T, X] = m.split(" "); switch (T) {
                            case "center":
                                k["justify-content"] = "center"; break;
                            case "space-around":
                                k["justify-content"] = "space-around"; break;
                            case "space-between":
                                k["justify-content"] = "space-between"; break;
                            case "space-evenly":
                                k["justify-content"] = "space-evenly"; break;
                            case "end":
                            case "flex-end":
                                k["justify-content"] = "flex-end"; break;
                            default:
                                k["justify-content"] = "flex-start" } switch (X) {
                            case "start":
                            case "flex-start":
                                k["align-items"] = k["align-content"] = "flex-start"; break;
                            case "center":
                                k["align-items"] = k["align-content"] = "center"; break;
                            case "end":
                            case "flex-end":
                                k["align-items"] = k["align-content"] = "flex-end"; break;
                            case "space-between":
                                k["align-content"] = "space-between", k["align-items"] = "stretch"; break;
                            case "space-around":
                                k["align-content"] = "space-around", k["align-items"] = "stretch"; break;
                            case "baseline":
                                k["align-content"] = "stretch", k["align-items"] = "baseline"; break;
                            default:
                                k["align-items"] = k["align-content"] = "stretch" } return (0, V.kt)(k, { display: C.inline ? "inline-flex" : "flex", "flex-direction": C.layout, "box-sizing": "border-box", "max-width": "stretch" === X ? (0, V.tj)(C.layout) ? null : "100%" : null, "max-height": "stretch" === X && (0, V.tj)(C.layout) ? "100%" : null }) } }
                return f.\u0275fac = function() { let R; return function(C) { return (R || (R = s.n5z(f)))(C || f) } }(), f.\u0275prov = s.Yz7({ token: f, factory: f.\u0275fac, providedIn: "root" }), f })(); const ye = ["fxLayoutAlign", "fxLayoutAlign.xs", "fxLayoutAlign.sm", "fxLayoutAlign.md", "fxLayoutAlign.lg", "fxLayoutAlign.xl", "fxLayoutAlign.lt-sm", "fxLayoutAlign.lt-md", "fxLayoutAlign.lt-lg", "fxLayoutAlign.lt-xl", "fxLayoutAlign.gt-xs", "fxLayoutAlign.gt-sm", "fxLayoutAlign.gt-md", "fxLayoutAlign.gt-lg"]; let dt = (() => { class f extends c.iR { constructor(m, C, k, T) { super(m, k, C, T), this.DIRECTIVE_KEY = "layout-align", this.layout = "row", this.inline = !1, this.init(), this.marshal.trackValue(this.nativeElement, "layout").pipe((0, ee.R)(this.destroySubject)).subscribe(this.onLayoutChange.bind(this)) }
                        updateWithValue(m) { const C = this.layout || "row",
                                k = this.inline; "row" === C && k ? this.styleCache = a : "row" !== C || k ? "row-reverse" === C && k ? this.styleCache = u : "row-reverse" !== C || k ? "column" === C && k ? this.styleCache = d : "column" !== C || k ? "column-reverse" === C && k ? this.styleCache = b : "column-reverse" === C && !k && (this.styleCache = y) : this.styleCache = et : this.styleCache = p : this.styleCache = Je, this.addStyles(m, { layout: C, inline: k }) }
                        onLayoutChange(m) { const C = m.value.split(" ");
                            this.layout = C[0], this.inline = m.value.includes("inline"), V.iQ.find(k => k === this.layout) || (this.layout = "row"), this.triggerUpdate() } }
                    return f.\u0275fac = function(m) { return new(m || f)(s.Y36(s.SBq), s.Y36(c.RK), s.Y36(Q), s.Y36(c.yB)) }, f.\u0275dir = s.lG2({ type: f, features: [s.qOj] }), f })(),
                ze = (() => { class f extends dt { constructor() { super(...arguments), this.inputs = ye } } return f.\u0275fac = function() { let R; return function(C) { return (R || (R = s.n5z(f)))(C || f) } }(), f.\u0275dir = s.lG2({ type: f, selectors: [
                            ["", "fxLayoutAlign", ""],
                            ["", "fxLayoutAlign.xs", ""],
                            ["", "fxLayoutAlign.sm", ""],
                            ["", "fxLayoutAlign.md", ""],
                            ["", "fxLayoutAlign.lg", ""],
                            ["", "fxLayoutAlign.xl", ""],
                            ["", "fxLayoutAlign.lt-sm", ""],
                            ["", "fxLayoutAlign.lt-md", ""],
                            ["", "fxLayoutAlign.lt-lg", ""],
                            ["", "fxLayoutAlign.lt-xl", ""],
                            ["", "fxLayoutAlign.gt-xs", ""],
                            ["", "fxLayoutAlign.gt-sm", ""],
                            ["", "fxLayoutAlign.gt-md", ""],
                            ["", "fxLayoutAlign.gt-lg", ""]
                        ], inputs: { fxLayoutAlign: "fxLayoutAlign", "fxLayoutAlign.xs": "fxLayoutAlign.xs", "fxLayoutAlign.sm": "fxLayoutAlign.sm", "fxLayoutAlign.md": "fxLayoutAlign.md", "fxLayoutAlign.lg": "fxLayoutAlign.lg", "fxLayoutAlign.xl": "fxLayoutAlign.xl", "fxLayoutAlign.lt-sm": "fxLayoutAlign.lt-sm", "fxLayoutAlign.lt-md": "fxLayoutAlign.lt-md", "fxLayoutAlign.lt-lg": "fxLayoutAlign.lt-lg", "fxLayoutAlign.lt-xl": "fxLayoutAlign.lt-xl", "fxLayoutAlign.gt-xs": "fxLayoutAlign.gt-xs", "fxLayoutAlign.gt-sm": "fxLayoutAlign.gt-sm", "fxLayoutAlign.gt-md": "fxLayoutAlign.gt-md", "fxLayoutAlign.gt-lg": "fxLayoutAlign.gt-lg" }, features: [s.qOj] }), f })(); const Je = new Map,
                et = new Map,
                p = new Map,
                y = new Map,
                a = new Map,
                d = new Map,
                u = new Map,
                b = new Map; let G = (() => { class f {} return f.\u0275fac = function(m) { return new(m || f) }, f.\u0275mod = s.oAB({ type: f }), f.\u0275inj = s.cJS({ imports: [
                        [c.IR, n.vT]
                    ] }), f })() }, 3092: (it, Me, _) => { _.d(Me, { XC: () => Ke, Bb: () => Ze, ZL: () => qe }); var s = _(3589),
                n = _(3191),
                c = _(5e3),
                V = _(508),
                be = _(727),
                ee = _(7579),
                $ = _(9770),
                re = _(6451),
                K = _(9646),
                N = _(4968),
                ne = _(925),
                Y = _(9808),
                de = _(1314),
                ce = _(6731),
                se = _(1159),
                ke = _(7429),
                we = _(3075),
                Oe = _(7322),
                Re = _(4986),
                Le = _(7272),
                _e = _(5698),
                Ge = _(4482),
                Ie = _(5403),
                Be = _(5032),
                Ae = _(4004),
                q = _(5577);

            function ie(H, Z) { return Z ? v => (0, Le.z)(Z.pipe((0, _e.q)(1), function Ve() { return (0, Ge.e)((H, Z) => { H.subscribe((0, Ie.x)(Z, Be.Z)) }) }()), v.pipe(ie(H))) : (0, q.z)((v, S) => H(v, S).pipe((0, _e.q)(1), function Ce(H) { return (0, Ae.U)(() => H) }(v))) } var M = _(2805),
                U = _(8675),
                le = _(3900),
                fe = _(9300),
                ue = _(8505),
                Te = _(226); const D = ["panel"];

            function O(H, Z) { if (1 & H && (c.TgZ(0, "div", 0, 1), c.Hsn(2), c.qZA()), 2 & H) { const v = Z.id,
                        S = c.oxw();
                    c.Q6J("id", S.id)("ngClass", S._classList), c.uIk("aria-label", S.ariaLabel || null)("aria-labelledby", S._getPanelAriaLabelledby(v)) } } const I = ["*"]; let B = 0;
            class ge { constructor(Z, v) { this.source = Z, this.option = v } } const he = (0, V.Kr)(class {}),
                ve = new c.OlP("mat-autocomplete-default-options", { providedIn: "root", factory: function xe() { return { autoActiveFirstOption: !1 } } }); let We = (() => { class H extends he { constructor(v, S, j, Q) { super(), this._changeDetectorRef = v, this._elementRef = S, this._activeOptionChanges = be.w0.EMPTY, this.showPanel = !1, this._isOpen = !1, this.displayWith = null, this.optionSelected = new c.vpe, this.opened = new c.vpe, this.closed = new c.vpe, this.optionActivated = new c.vpe, this._classList = {}, this.id = "mat-autocomplete-" + B++, this.inertGroups = (null == Q ? void 0 : Q.SAFARI) || !1, this._autoActiveFirstOption = !!j.autoActiveFirstOption }
                        get isOpen() { return this._isOpen && this.showPanel }
                        get autoActiveFirstOption() { return this._autoActiveFirstOption }
                        set autoActiveFirstOption(v) { this._autoActiveFirstOption = (0, n.Ig)(v) }
                        set classList(v) { this._classList = v && v.length ? (0, n.du)(v).reduce((S, j) => (S[j] = !0, S), {}) : {}, this._setVisibilityClasses(this._classList), this._elementRef.nativeElement.className = "" }
                        ngAfterContentInit() { this._keyManager = new s.s1(this.options).withWrap(), this._activeOptionChanges = this._keyManager.change.subscribe(v => { this.isOpen && this.optionActivated.emit({ source: this, option: this.options.toArray()[v] || null }) }), this._setVisibility() }
                        ngOnDestroy() { this._activeOptionChanges.unsubscribe() }
                        _setScrollTop(v) { this.panel && (this.panel.nativeElement.scrollTop = v) }
                        _getScrollTop() { return this.panel ? this.panel.nativeElement.scrollTop : 0 }
                        _setVisibility() { this.showPanel = !!this.options.length, this._setVisibilityClasses(this._classList), this._changeDetectorRef.markForCheck() }
                        _emitSelectEvent(v) { const S = new ge(this, v);
                            this.optionSelected.emit(S) }
                        _getPanelAriaLabelledby(v) { return this.ariaLabel ? null : this.ariaLabelledby ? (v ? v + " " : "") + this.ariaLabelledby : v }
                        _setVisibilityClasses(v) { v[this._visibleClass] = this.showPanel, v[this._hiddenClass] = !this.showPanel } } return H.\u0275fac = function(v) { return new(v || H)(c.Y36(c.sBO), c.Y36(c.SBq), c.Y36(ve), c.Y36(ne.t4)) }, H.\u0275dir = c.lG2({ type: H, viewQuery: function(v, S) { if (1 & v && (c.Gf(c.Rgc, 7), c.Gf(D, 5)), 2 & v) { let j;
                                c.iGM(j = c.CRH()) && (S.template = j.first), c.iGM(j = c.CRH()) && (S.panel = j.first) } }, inputs: { ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], displayWith: "displayWith", autoActiveFirstOption: "autoActiveFirstOption", panelWidth: "panelWidth", classList: ["class", "classList"] }, outputs: { optionSelected: "optionSelected", opened: "opened", closed: "closed", optionActivated: "optionActivated" }, features: [c.qOj] }), H })(),
                Ke = (() => { class H extends We { constructor() { super(...arguments), this._visibleClass = "mat-autocomplete-visible", this._hiddenClass = "mat-autocomplete-hidden" } } return H.\u0275fac = function() { let Z; return function(S) { return (Z || (Z = c.n5z(H)))(S || H) } }(), H.\u0275cmp = c.Xpm({ type: H, selectors: [
                            ["mat-autocomplete"]
                        ], contentQueries: function(v, S, j) { if (1 & v && (c.Suo(j, V.K7, 5), c.Suo(j, V.ey, 5)), 2 & v) { let Q;
                                c.iGM(Q = c.CRH()) && (S.optionGroups = Q), c.iGM(Q = c.CRH()) && (S.options = Q) } }, hostAttrs: [1, "mat-autocomplete"], inputs: { disableRipple: "disableRipple" }, exportAs: ["matAutocomplete"], features: [c._Bn([{ provide: V.HF, useExisting: H }]), c.qOj], ngContentSelectors: I, decls: 1, vars: 0, consts: [
                            ["role", "listbox", 1, "mat-autocomplete-panel", 3, "id", "ngClass"],
                            ["panel", ""]
                        ], template: function(v, S) { 1 & v && (c.F$t(), c.YNc(0, O, 3, 4, "ng-template")) }, directives: [Y.mk], styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}\n"], encapsulation: 2, changeDetection: 0 }), H })(); const Ue = new c.OlP("mat-autocomplete-scroll-strategy"),
                Pe = { provide: Ue, deps: [de.aV], useFactory: function He(H) { return () => H.scrollStrategies.reposition() } },
                rt = { provide: we.JU, useExisting: (0, c.Gpc)(() => qe), multi: !0 }; let nt = (() => { class H { constructor(v, S, j, Q, ye, Xe, dt, ze, Je, et, p) { this._element = v, this._overlay = S, this._viewContainerRef = j, this._zone = Q, this._changeDetectorRef = ye, this._dir = dt, this._formField = ze, this._document = Je, this._viewportRuler = et, this._defaults = p, this._componentDestroyed = !1, this._autocompleteDisabled = !1, this._manuallyFloatingLabel = !1, this._viewportSubscription = be.w0.EMPTY, this._canOpenOnNextFocus = !0, this._closeKeyEventStream = new ee.x, this._windowBlurHandler = () => { this._canOpenOnNextFocus = this._document.activeElement !== this._element.nativeElement || this.panelOpen }, this._onChange = () => {}, this._onTouched = () => {}, this.position = "auto", this.autocompleteAttribute = "off", this._overlayAttached = !1, this.optionSelections = (0, $.P)(() => { const y = this.autocomplete ? this.autocomplete.options : null; return y ? y.changes.pipe((0, U.O)(y), (0, le.w)(() => (0, re.T)(...y.map(a => a.onSelectionChange)))) : this._zone.onStable.pipe((0, _e.q)(1), (0, le.w)(() => this.optionSelections)) }), this._scrollStrategy = Xe }
                        get autocompleteDisabled() { return this._autocompleteDisabled }
                        set autocompleteDisabled(v) { this._autocompleteDisabled = (0, n.Ig)(v) }
                        ngAfterViewInit() { const v = this._getWindow();
                            void 0 !== v && this._zone.runOutsideAngular(() => v.addEventListener("blur", this._windowBlurHandler)) }
                        ngOnChanges(v) { v.position && this._positionStrategy && (this._setStrategyPositions(this._positionStrategy), this.panelOpen && this._overlayRef.updatePosition()) }
                        ngOnDestroy() { const v = this._getWindow();
                            void 0 !== v && v.removeEventListener("blur", this._windowBlurHandler), this._viewportSubscription.unsubscribe(), this._componentDestroyed = !0, this._destroyPanel(), this._closeKeyEventStream.complete() }
                        get panelOpen() { return this._overlayAttached && this.autocomplete.showPanel }
                        openPanel() { this._attachOverlay(), this._floatLabel() }
                        closePanel() { this._resetLabel(), this._overlayAttached && (this.panelOpen && this.autocomplete.closed.emit(), this.autocomplete._isOpen = this._overlayAttached = !1, this._overlayRef && this._overlayRef.hasAttached() && (this._overlayRef.detach(), this._closingActionsSubscription.unsubscribe()), this._componentDestroyed || this._changeDetectorRef.detectChanges()) }
                        updatePosition() { this._overlayAttached && this._overlayRef.updatePosition() }
                        get panelClosingActions() { return (0, re.T)(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe((0, fe.h)(() => this._overlayAttached)), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe((0, fe.h)(() => this._overlayAttached)) : (0, K.of)()).pipe((0, Ae.U)(v => v instanceof V.rN ? v : null)) }
                        get activeOption() { return this.autocomplete && this.autocomplete._keyManager ? this.autocomplete._keyManager.activeItem : null }
                        _getOutsideClickStream() { return (0, re.T)((0, N.R)(this._document, "click"), (0, N.R)(this._document, "auxclick"), (0, N.R)(this._document, "touchend")).pipe((0, fe.h)(v => { const S = (0, ne.sA)(v),
                                    j = this._formField ? this._formField._elementRef.nativeElement : null,
                                    Q = this.connectedTo ? this.connectedTo.elementRef.nativeElement : null; return this._overlayAttached && S !== this._element.nativeElement && this._document.activeElement !== this._element.nativeElement && (!j || !j.contains(S)) && (!Q || !Q.contains(S)) && !!this._overlayRef && !this._overlayRef.overlayElement.contains(S) })) }
                        writeValue(v) { Promise.resolve().then(() => this._setTriggerValue(v)) }
                        registerOnChange(v) { this._onChange = v }
                        registerOnTouched(v) { this._onTouched = v }
                        setDisabledState(v) { this._element.nativeElement.disabled = v }
                        _handleKeydown(v) { const S = v.keyCode,
                                j = (0, se.Vb)(v); if (S === se.hY && !j && v.preventDefault(), this.activeOption && S === se.K5 && this.panelOpen && !j) this.activeOption._selectViaInteraction(), this._resetActiveItem(), v.preventDefault();
                            else if (this.autocomplete) { const Q = this.autocomplete._keyManager.activeItem,
                                    ye = S === se.LH || S === se.JH;
                                S === se.Mf || ye && !j && this.panelOpen ? this.autocomplete._keyManager.onKeydown(v) : ye && this._canOpen() && this.openPanel(), (ye || this.autocomplete._keyManager.activeItem !== Q) && this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0) } }
                        _handleInput(v) { let S = v.target,
                                j = S.value; "number" === S.type && (j = "" == j ? null : parseFloat(j)), this._previousValue !== j && (this._previousValue = j, this._onChange(j), this._canOpen() && this._document.activeElement === v.target && this.openPanel()) }
                        _handleFocus() { this._canOpenOnNextFocus ? this._canOpen() && (this._previousValue = this._element.nativeElement.value, this._attachOverlay(), this._floatLabel(!0)) : this._canOpenOnNextFocus = !0 }
                        _handleClick() { this._canOpen() && !this.panelOpen && this.openPanel() }
                        _floatLabel(v = !1) { this._formField && "auto" === this._formField.floatLabel && (v ? this._formField._animateAndLockLabel() : this._formField.floatLabel = "always", this._manuallyFloatingLabel = !0) }
                        _resetLabel() { this._manuallyFloatingLabel && (this._formField.floatLabel = "auto", this._manuallyFloatingLabel = !1) }
                        _subscribeToClosingActions() { const v = this._zone.onStable.pipe((0, _e.q)(1)),
                                S = this.autocomplete.options.changes.pipe((0, ue.b)(() => this._positionStrategy.reapplyLastPosition()), function P(H, Z = Re.z) { const v = (0, M.H)(H, Z); return ie(() => v) }(0)); return (0, re.T)(v, S).pipe((0, le.w)(() => (this._zone.run(() => { const j = this.panelOpen;
                                this._resetActiveItem(), this.autocomplete._setVisibility(), this._changeDetectorRef.detectChanges(), this.panelOpen && (this._overlayRef.updatePosition(), j !== this.panelOpen && this.autocomplete.opened.emit()) }), this.panelClosingActions)), (0, _e.q)(1)).subscribe(j => this._setValueAndClose(j)) }
                        _destroyPanel() { this._overlayRef && (this.closePanel(), this._overlayRef.dispose(), this._overlayRef = null) }
                        _setTriggerValue(v) { const S = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(v) : v,
                                j = null != S ? S : "";
                            this._formField ? this._formField._control.value = j : this._element.nativeElement.value = j, this._previousValue = j }
                        _setValueAndClose(v) { const S = v && v.source;
                            S && (this._clearPreviousSelectedOption(S), this._setTriggerValue(S.value), this._onChange(S.value), this.autocomplete._emitSelectEvent(S), this._element.nativeElement.focus()), this.closePanel() }
                        _clearPreviousSelectedOption(v) { this.autocomplete.options.forEach(S => { S !== v && S.selected && S.deselect() }) }
                        _attachOverlay() { var v; let S = this._overlayRef;
                            S ? (this._positionStrategy.setOrigin(this._getConnectedElement()), S.updateSize({ width: this._getPanelWidth() })) : (this._portal = new ke.UE(this.autocomplete.template, this._viewContainerRef, { id: null === (v = this._formField) || void 0 === v ? void 0 : v.getLabelId() }), S = this._overlay.create(this._getOverlayConfig()), this._overlayRef = S, S.keydownEvents().subscribe(Q => {
                                (Q.keyCode === se.hY && !(0, se.Vb)(Q) || Q.keyCode === se.LH && (0, se.Vb)(Q, "altKey")) && (this._closeKeyEventStream.next(), this._resetActiveItem(), Q.stopPropagation(), Q.preventDefault()) }), this._viewportSubscription = this._viewportRuler.change().subscribe(() => { this.panelOpen && S && S.updateSize({ width: this._getPanelWidth() }) })), S && !S.hasAttached() && (S.attach(this._portal), this._closingActionsSubscription = this._subscribeToClosingActions()); const j = this.panelOpen;
                            this.autocomplete._setVisibility(), this.autocomplete._isOpen = this._overlayAttached = !0, this.panelOpen && j !== this.panelOpen && this.autocomplete.opened.emit() }
                        _getOverlayConfig() { var v; return new de.X_({ positionStrategy: this._getOverlayPosition(), scrollStrategy: this._scrollStrategy(), width: this._getPanelWidth(), direction: this._dir, panelClass: null === (v = this._defaults) || void 0 === v ? void 0 : v.overlayPanelClass }) }
                        _getOverlayPosition() { const v = this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1); return this._setStrategyPositions(v), this._positionStrategy = v, v }
                        _setStrategyPositions(v) { const S = [{ originX: "start", originY: "bottom", overlayX: "start", overlayY: "top" }, { originX: "end", originY: "bottom", overlayX: "end", overlayY: "top" }],
                                j = this._aboveClass,
                                Q = [{ originX: "start", originY: "top", overlayX: "start", overlayY: "bottom", panelClass: j }, { originX: "end", originY: "top", overlayX: "end", overlayY: "bottom", panelClass: j }]; let ye;
                            ye = "above" === this.position ? Q : "below" === this.position ? S : [...S, ...Q], v.withPositions(ye) }
                        _getConnectedElement() { return this.connectedTo ? this.connectedTo.elementRef : this._formField ? this._formField.getConnectedOverlayOrigin() : this._element }
                        _getPanelWidth() { return this.autocomplete.panelWidth || this._getHostWidth() }
                        _getHostWidth() { return this._getConnectedElement().nativeElement.getBoundingClientRect().width }
                        _resetActiveItem() { const v = this.autocomplete;
                            v.autoActiveFirstOption ? v._keyManager.setFirstItemActive() : v._keyManager.setActiveItem(-1) }
                        _canOpen() { const v = this._element.nativeElement; return !v.readOnly && !v.disabled && !this._autocompleteDisabled }
                        _getWindow() { var v; return (null === (v = this._document) || void 0 === v ? void 0 : v.defaultView) || window }
                        _scrollToOption(v) { const S = this.autocomplete,
                                j = (0, V.CB)(v, S.options, S.optionGroups); if (0 === v && 1 === j) S._setScrollTop(0);
                            else if (S.panel) { const Q = S.options.toArray()[v]; if (Q) { const ye = Q._getHostElement(),
                                        Xe = (0, V.jH)(ye.offsetTop, ye.offsetHeight, S._getScrollTop(), S.panel.nativeElement.offsetHeight);
                                    S._setScrollTop(Xe) } } } } return H.\u0275fac = function(v) { return new(v || H)(c.Y36(c.SBq), c.Y36(de.aV), c.Y36(c.s_b), c.Y36(c.R0b), c.Y36(c.sBO), c.Y36(Ue), c.Y36(Te.Is, 8), c.Y36(Oe.G_, 9), c.Y36(Y.K0, 8), c.Y36(ce.rL), c.Y36(ve, 8)) }, H.\u0275dir = c.lG2({ type: H, inputs: { autocomplete: ["matAutocomplete", "autocomplete"], position: ["matAutocompletePosition", "position"], connectedTo: ["matAutocompleteConnectedTo", "connectedTo"], autocompleteAttribute: ["autocomplete", "autocompleteAttribute"], autocompleteDisabled: ["matAutocompleteDisabled", "autocompleteDisabled"] }, features: [c.TTD] }), H })(),
                qe = (() => { class H extends nt { constructor() { super(...arguments), this._aboveClass = "mat-autocomplete-panel-above" } } return H.\u0275fac = function() { let Z; return function(S) { return (Z || (Z = c.n5z(H)))(S || H) } }(), H.\u0275dir = c.lG2({ type: H, selectors: [
                            ["input", "matAutocomplete", ""],
                            ["textarea", "matAutocomplete", ""]
                        ], hostAttrs: [1, "mat-autocomplete-trigger"], hostVars: 7, hostBindings: function(v, S) { 1 & v && c.NdJ("focusin", function() { return S._handleFocus() })("blur", function() { return S._onTouched() })("input", function(Q) { return S._handleInput(Q) })("keydown", function(Q) { return S._handleKeydown(Q) })("click", function() { return S._handleClick() }), 2 & v && c.uIk("autocomplete", S.autocompleteAttribute)("role", S.autocompleteDisabled ? null : "combobox")("aria-autocomplete", S.autocompleteDisabled ? null : "list")("aria-activedescendant", S.panelOpen && S.activeOption ? S.activeOption.id : null)("aria-expanded", S.autocompleteDisabled ? null : S.panelOpen.toString())("aria-owns", S.autocompleteDisabled || !S.panelOpen || null == S.autocomplete ? null : S.autocomplete.id)("aria-haspopup", S.autocompleteDisabled ? null : "listbox") }, exportAs: ["matAutocompleteTrigger"], features: [c._Bn([rt]), c.qOj] }), H })(),
                Ze = (() => { class H {} return H.\u0275fac = function(v) { return new(v || H) }, H.\u0275mod = c.oAB({ type: H }), H.\u0275inj = c.cJS({ providers: [Pe], imports: [
                            [de.U8, V.Ng, V.BQ, Y.ez], ce.ZD, V.Ng, V.BQ
                        ] }), H })() }, 7399: (it, Me, _) => { _.d(Me, { OG: () => Le, _r: () => Ie, ch: () => Ae, oL: () => Be }); var s = _(1314),
                n = _(7429),
                c = _(5e3),
                V = _(508),
                be = _(3191),
                ee = _(5113),
                $ = _(925),
                re = _(9808),
                K = _(1777),
                N = _(3589),
                ne = _(226),
                Y = _(7579),
                de = _(6451),
                ce = _(9646),
                se = _(1159),
                ke = _(9300),
                we = _(5698);

            function Oe(q, ie) {} const Re = { bottomSheetState: (0, K.X$)("state", [(0, K.SB)("void, hidden", (0, K.oB)({ transform: "translateY(100%)" })), (0, K.SB)("visible", (0, K.oB)({ transform: "translateY(0%)" })), (0, K.eR)("visible => void, visible => hidden", (0, K.ru)([(0, K.jt)(`${V.mZ.COMPLEX} ${V.yN.ACCELERATION_CURVE}`), (0, K.IO)("@*", (0, K.pV)(), { optional: !0 })])), (0, K.eR)("void => visible", (0, K.ru)([(0, K.jt)(`${V.mZ.EXITING} ${V.yN.DECELERATION_CURVE}`), (0, K.IO)("@*", (0, K.pV)(), { optional: !0 })]))]) },
                Le = new c.OlP("MatBottomSheetData");
            class _e { constructor() { this.data = null, this.hasBackdrop = !0, this.disableClose = !1, this.ariaLabel = null, this.closeOnNavigation = !0, this.autoFocus = "dialog", this.restoreFocus = !0 } } let Ge = (() => { class q extends n.en { constructor(M, P, U, le, fe, ue, Te, D) { super(), this._elementRef = M, this._changeDetectorRef = P, this._focusTrapFactory = U, this._interactivityChecker = le, this._ngZone = fe, this.bottomSheetConfig = D, this._animationState = "void", this._animationStateChanged = new c.vpe, this._elementFocusedBeforeOpened = null, this.attachDomPortal = O => (this._validatePortalAttached(), this._setPanelClass(), this._savePreviouslyFocusedElement(), this._portalOutlet.attachDomPortal(O)), this._document = Te, this._breakpointSubscription = ue.observe([ee.u3.Medium, ee.u3.Large, ee.u3.XLarge]).subscribe(() => { this._toggleClass("mat-bottom-sheet-container-medium", ue.isMatched(ee.u3.Medium)), this._toggleClass("mat-bottom-sheet-container-large", ue.isMatched(ee.u3.Large)), this._toggleClass("mat-bottom-sheet-container-xlarge", ue.isMatched(ee.u3.XLarge)) }) }
                        attachComponentPortal(M) { return this._validatePortalAttached(), this._setPanelClass(), this._savePreviouslyFocusedElement(), this._portalOutlet.attachComponentPortal(M) }
                        attachTemplatePortal(M) { return this._validatePortalAttached(), this._setPanelClass(), this._savePreviouslyFocusedElement(), this._portalOutlet.attachTemplatePortal(M) }
                        enter() { this._destroyed || (this._animationState = "visible", this._changeDetectorRef.detectChanges()) }
                        exit() { this._destroyed || (this._animationState = "hidden", this._changeDetectorRef.markForCheck()) }
                        ngOnDestroy() { this._breakpointSubscription.unsubscribe(), this._destroyed = !0 }
                        _onAnimationDone(M) { "hidden" === M.toState ? this._restoreFocus() : "visible" === M.toState && this._trapFocus(), this._animationStateChanged.emit(M) }
                        _onAnimationStart(M) { this._animationStateChanged.emit(M) }
                        _toggleClass(M, P) { this._elementRef.nativeElement.classList.toggle(M, P) }
                        _validatePortalAttached() { this._portalOutlet.hasAttached() }
                        _setPanelClass() { this._elementRef.nativeElement.classList.add(...(0, be.Eq)(this.bottomSheetConfig.panelClass || [])) }
                        _forceFocus(M, P) { this._interactivityChecker.isFocusable(M) || (M.tabIndex = -1, this._ngZone.runOutsideAngular(() => { const U = () => { M.removeEventListener("blur", U), M.removeEventListener("mousedown", U), M.removeAttribute("tabindex") };
                                M.addEventListener("blur", U), M.addEventListener("mousedown", U) })), M.focus(P) }
                        _focusByCssSelector(M, P) { let U = this._elementRef.nativeElement.querySelector(M);
                            U && this._forceFocus(U, P) }
                        _trapFocus() { const M = this._elementRef.nativeElement; switch (this._focusTrap || (this._focusTrap = this._focusTrapFactory.create(M)), this.bottomSheetConfig.autoFocus) {
                                case !1:
                                case "dialog":
                                    const P = (0, $.ht)();
                                    P !== M && !M.contains(P) && M.focus(); break;
                                case !0:
                                case "first-tabbable":
                                    this._focusTrap.focusInitialElementWhenReady(); break;
                                case "first-heading":
                                    this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]'); break;
                                default:
                                    this._focusByCssSelector(this.bottomSheetConfig.autoFocus) } }
                        _restoreFocus() { const M = this._elementFocusedBeforeOpened; if (this.bottomSheetConfig.restoreFocus && M && "function" == typeof M.focus) { const P = (0, $.ht)(),
                                    U = this._elementRef.nativeElement;
                                (!P || P === this._document.body || P === U || U.contains(P)) && M.focus() }
                            this._focusTrap && this._focusTrap.destroy() }
                        _savePreviouslyFocusedElement() { this._elementFocusedBeforeOpened = (0, $.ht)(), this._elementRef.nativeElement.focus && this._ngZone.runOutsideAngular(() => { Promise.resolve().then(() => this._elementRef.nativeElement.focus()) }) } }
                    return q.\u0275fac = function(M) { return new(M || q)(c.Y36(c.SBq), c.Y36(c.sBO), c.Y36(N.qV), c.Y36(N.ic), c.Y36(c.R0b), c.Y36(ee.Yg), c.Y36(re.K0, 8), c.Y36(_e)) }, q.\u0275cmp = c.Xpm({ type: q, selectors: [
                            ["mat-bottom-sheet-container"]
                        ], viewQuery: function(M, P) { if (1 & M && c.Gf(n.Pl, 7), 2 & M) { let U;
                                c.iGM(U = c.CRH()) && (P._portalOutlet = U.first) } }, hostAttrs: ["tabindex", "-1", "role", "dialog", "aria-modal", "true", 1, "mat-bottom-sheet-container"], hostVars: 2, hostBindings: function(M, P) { 1 & M && c.WFA("@state.start", function(le) { return P._onAnimationStart(le) })("@state.done", function(le) { return P._onAnimationDone(le) }), 2 & M && (c.uIk("aria-label", null == P.bottomSheetConfig ? null : P.bottomSheetConfig.ariaLabel), c.d8E("@state", P._animationState)) }, features: [c.qOj], decls: 1, vars: 0, consts: [
                            ["cdkPortalOutlet", ""]
                        ], template: function(M, P) { 1 & M && c.YNc(0, Oe, 0, 0, "ng-template", 0) }, directives: [n.Pl], styles: [".mat-bottom-sheet-container{padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto}.cdk-high-contrast-active .mat-bottom-sheet-container{outline:1px solid}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:4px;border-top-right-radius:4px}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}\n"], encapsulation: 2, data: { animation: [Re.bottomSheetState] } }), q })(),
                Ie = (() => { class q {} return q.\u0275fac = function(M) { return new(M || q) }, q.\u0275mod = c.oAB({ type: q }), q.\u0275inj = c.cJS({ imports: [
                            [s.U8, V.BQ, n.eL], V.BQ
                        ] }), q })();
            class Be { constructor(ie, M) { this._overlayRef = M, this._afterDismissed = new Y.x, this._afterOpened = new Y.x, this.containerInstance = ie, this.disableClose = ie.bottomSheetConfig.disableClose, ie._animationStateChanged.pipe((0, ke.h)(P => "done" === P.phaseName && "visible" === P.toState), (0, we.q)(1)).subscribe(() => { this._afterOpened.next(), this._afterOpened.complete() }), ie._animationStateChanged.pipe((0, ke.h)(P => "done" === P.phaseName && "hidden" === P.toState), (0, we.q)(1)).subscribe(() => { clearTimeout(this._closeFallbackTimeout), M.dispose() }), M.detachments().pipe((0, we.q)(1)).subscribe(() => { this._afterDismissed.next(this._result), this._afterDismissed.complete() }), (0, de.T)(M.backdropClick(), M.keydownEvents().pipe((0, ke.h)(P => P.keyCode === se.hY))).subscribe(P => {!this.disableClose && ("keydown" !== P.type || !(0, se.Vb)(P)) && (P.preventDefault(), this.dismiss()) }) }
                dismiss(ie) { this._afterDismissed.closed || (this.containerInstance._animationStateChanged.pipe((0, ke.h)(M => "start" === M.phaseName), (0, we.q)(1)).subscribe(M => { this._closeFallbackTimeout = setTimeout(() => { this._overlayRef.dispose() }, M.totalTime + 100), this._overlayRef.detachBackdrop() }), this._result = ie, this.containerInstance.exit()) }
                afterDismissed() { return this._afterDismissed }
                afterOpened() { return this._afterOpened }
                backdropClick() { return this._overlayRef.backdropClick() }
                keydownEvents() { return this._overlayRef.keydownEvents() } } const Ve = new c.OlP("mat-bottom-sheet-default-options"); let Ae = (() => { class q { constructor(M, P, U, le) { this._overlay = M, this._injector = P, this._parentBottomSheet = U, this._defaultOptions = le, this._bottomSheetRefAtThisLevel = null }
                    get _openedBottomSheetRef() { const M = this._parentBottomSheet; return M ? M._openedBottomSheetRef : this._bottomSheetRefAtThisLevel }
                    set _openedBottomSheetRef(M) { this._parentBottomSheet ? this._parentBottomSheet._openedBottomSheetRef = M : this._bottomSheetRefAtThisLevel = M }
                    open(M, P) { const U = function Ce(q, ie) { return Object.assign(Object.assign({}, q), ie) }(this._defaultOptions || new _e, P),
                            le = this._createOverlay(U),
                            fe = this._attachContainer(le, U),
                            ue = new Be(fe, le); if (M instanceof c.Rgc) fe.attachTemplatePortal(new n.UE(M, null, { $implicit: U.data, bottomSheetRef: ue }));
                        else { const Te = new n.C5(M, void 0, this._createInjector(U, ue)),
                                D = fe.attachComponentPortal(Te);
                            ue.instance = D.instance } return ue.afterDismissed().subscribe(() => { this._openedBottomSheetRef == ue && (this._openedBottomSheetRef = null) }), this._openedBottomSheetRef ? (this._openedBottomSheetRef.afterDismissed().subscribe(() => ue.containerInstance.enter()), this._openedBottomSheetRef.dismiss()) : ue.containerInstance.enter(), this._openedBottomSheetRef = ue, ue }
                    dismiss(M) { this._openedBottomSheetRef && this._openedBottomSheetRef.dismiss(M) }
                    ngOnDestroy() { this._bottomSheetRefAtThisLevel && this._bottomSheetRefAtThisLevel.dismiss() }
                    _attachContainer(M, P) { const le = c.zs3.create({ parent: P && P.viewContainerRef && P.viewContainerRef.injector || this._injector, providers: [{ provide: _e, useValue: P }] }),
                            fe = new n.C5(Ge, P.viewContainerRef, le); return M.attach(fe).instance }
                    _createOverlay(M) { const P = new s.X_({ direction: M.direction, hasBackdrop: M.hasBackdrop, disposeOnNavigation: M.closeOnNavigation, maxWidth: "100%", scrollStrategy: M.scrollStrategy || this._overlay.scrollStrategies.block(), positionStrategy: this._overlay.position().global().centerHorizontally().bottom("0") }); return M.backdropClass && (P.backdropClass = M.backdropClass), this._overlay.create(P) }
                    _createInjector(M, P) { const U = M && M.viewContainerRef && M.viewContainerRef.injector,
                            le = [{ provide: Be, useValue: P }, { provide: Le, useValue: M.data }]; return M.direction && (!U || !U.get(ne.Is, null, c.XFs.Optional)) && le.push({ provide: ne.Is, useValue: { value: M.direction, change: (0, ce.of)() } }), c.zs3.create({ parent: U || this._injector, providers: le }) } } return q.\u0275fac = function(M) { return new(M || q)(c.LFG(s.aV), c.LFG(c.zs3), c.LFG(q, 12), c.LFG(Ve, 8)) }, q.\u0275prov = c.Yz7({ token: q, factory: q.\u0275fac, providedIn: Ie }), q })() }, 6278: (it, Me, _) => { _.d(Me, { Fy: () => To, b6: () => Pi, bB: () => no, o6: () => mt, x3: () => Eo }); var s = _(3191),
                n = _(5e3),
                c = _(9808),
                V = _(3075),
                be = _(2722),
                ee = _(5698),
                $ = _(7579),
                re = _(2805);
            _(6451), _(4968), _(9646), _(6406), _(8306), _(3589); const se = ["*"],
                ke = ["mdbBtn", ""];

            function Oe(t, o) { if (1 & t) { const e = n.EpF();
                    n.TgZ(0, "div", 6)(1, "a", 7), n.NdJ("click", function() { return n.CHM(e), n.oxw().previousSlide() }), n._UZ(2, "i", 8), n.qZA(), n.TgZ(3, "a", 7), n.NdJ("click", function() { return n.CHM(e), n.oxw().nextSlide() }), n._UZ(4, "i", 9), n.qZA()() } if (2 & t) { const e = n.oxw();
                    n.xp6(1), n.ekj("disabled", 0 === e.activeSlide && e.noWrap), n.xp6(2), n.ekj("disabled", e.isLast(e.activeSlide) && e.noWrap) } }

            function Re(t, o) { if (1 & t) { const e = n.EpF();
                    n.TgZ(0, "li", 12), n.NdJ("click", function() { const g = n.CHM(e).index; return n.oxw(2).selectSlide(g) }), n.qZA() }
                2 & t && n.ekj("active", !0 === o.$implicit.active) }

            function Le(t, o) { if (1 & t && (n.TgZ(0, "ol", 10), n.YNc(1, Re, 1, 2, "li", 11), n.qZA()), 2 & t) { const e = n.oxw();
                    n.xp6(1), n.Q6J("ngForOf", e.slides) } }

            function _e(t, o) { if (1 & t) { const e = n.EpF();
                    n.TgZ(0, "li", 12), n.NdJ("click", function() { const g = n.CHM(e).index; return n.oxw(2).selectSlide(g) }), n._UZ(1, "img", 13), n.qZA() } if (2 & t) { const e = o.$implicit,
                        i = n.oxw(2);
                    n.ekj("active", !0 === e.active), n.xp6(1), n.s9C("src", i.getImg(e), n.LSH) } }

            function Ge(t, o) { if (1 & t && (n.TgZ(0, "ol", 10), n.YNc(1, _e, 2, 3, "li", 11), n.qZA()), 2 & t) { const e = n.oxw();
                    n.xp6(1), n.Q6J("ngForOf", e.slides) } }

            function Ie(t, o) { if (1 & t) { const e = n.EpF();
                    n.TgZ(0, "a", 14), n.NdJ("click", function() { return n.CHM(e), n.oxw().previousSlide() }), n._UZ(1, "span", 15), n.TgZ(2, "span", 16), n._uU(3, "Previous"), n.qZA()() } if (2 & t) { const e = n.oxw();
                    n.ekj("disabled", 0 === e.activeSlide && e.noWrap) } }

            function Be(t, o) { if (1 & t) { const e = n.EpF();
                    n.TgZ(0, "a", 17), n.NdJ("click", function() { return n.CHM(e), n.oxw().nextSlide() }), n._UZ(1, "span", 18), n.TgZ(2, "span", 16), n._uU(3, "Next"), n.qZA()() } if (2 & t) { const e = n.oxw();
                    n.ekj("disabled", e.isLast(e.activeSlide) && e.noWrap) } } const Ve = ["input"],
                Ae = function(t, o, e, i) { return { "custom-control custom-checkbox": t, "form-check": o, "custom-control-inline": e, "form-check-inline": i } },
                Ce = function(t, o, e) { return { "filled-in": t, "custom-control-input": o, "form-check-input": e } },
                q = function(t, o, e, i, r) { return { "custom-control-label": t, "form-check-label": o, "label-before": e, "checkbox-rounded": i, disabled: r } }; let S = (() => { class t { constructor(e, i) { this.el = e, this.renderer = i, this.color = "", this._rounded = !1, this.gradient = "", this._outline = !1, this._flat = !1, this.size = "", this._block = !1, this._floating = !1 }
                    get rounded() { return this._rounded }
                    set rounded(e) { this._rounded = (0, s.Ig)(e) }
                    get outline() { return this._outline }
                    set outline(e) { this._outline = (0, s.Ig)(e) }
                    get flat() { return this._flat }
                    set flat(e) { this._flat = (0, s.Ig)(e) }
                    get block() { return this._block }
                    set block(e) { this._block = (0, s.Ig)(e) }
                    get floating() { return this._floating }
                    set floating(e) { this._floating = (0, s.Ig)(e) }
                    ngOnInit() { this.colorClass = "btn-" + this.color, this.gradientClass = this.gradient + "-gradient", this.outlineClass = "btn-outline-" + this.color, this.flatClass = "btn-flat", this.roundedClass = "btn-rounded", this.sizeClass = "btn-" + this.size, this.blockClass = "btn-block", this.floatingClass = "btn-floating", this.renderer.addClass(this.el.nativeElement, "btn"), this.initClasses() }
                    ngOnChanges(e) { if (e.color && (this.renderer.removeClass(this.el.nativeElement, this.colorClass), this.color && "" !== this.color && (this.colorClass = "btn-" + this.color, this.renderer.addClass(this.el.nativeElement, this.colorClass)), this.outline)) { const i = this.outlineClass;
                            this.outlineClass = "btn-outline-" + this.color, this.renderer.removeClass(this.el.nativeElement, i), this.renderer.addClass(this.el.nativeElement, this.outlineClass) }
                        e.gradient && (this.renderer.removeClass(this.el.nativeElement, this.gradientClass), "" !== this.gradient && (this.gradientClass = this.gradient + "-gradient", this.renderer.addClass(this.el.nativeElement, this.gradientClass))), e.outline && (this.outline || this.renderer.removeClass(this.el.nativeElement, this.outlineClass), this.outline && (this.renderer.removeClass(this.el.nativeElement, this.colorClass), this.renderer.addClass(this.el.nativeElement, this.outlineClass)), this.outlineClass = "btn-outline-" + this.color), e.flat && (this.renderer.removeClass(this.el.nativeElement, this.flatClass), this.flat && (this.color && this.renderer.removeClass(this.el.nativeElement, this.colorClass), this.gradient && this.renderer.removeClass(this.el.nativeElement, this.gradientClass), this.outline && this.renderer.removeClass(this.el.nativeElement, this.outlineClass), this.rounded && this.renderer.removeClass(this.el.nativeElement, this.roundedClass), this.renderer.addClass(this.el.nativeElement, this.flatClass))), e.rounded && (this.renderer.removeClass(this.el.nativeElement, this.roundedClass), this.rounded && (this.roundedClass = "btn-rounded", this.renderer.addClass(this.el.nativeElement, this.roundedClass))), e.size && (this.renderer.removeClass(this.el.nativeElement, this.sizeClass), "" !== this.size && (this.sizeClass = "btn-" + this.size, this.renderer.addClass(this.el.nativeElement, this.sizeClass))), e.block && (this.renderer.removeClass(this.el.nativeElement, this.blockClass), this.block && (this.blockClass = "btn-block", this.renderer.addClass(this.el.nativeElement, this.blockClass))), e.floating && (this.floating || (this.renderer.removeClass(this.el.nativeElement, this.floatingClass), this.renderer.addClass(this.el.nativeElement, "btn")), this.floating && (this.floatingClass = "btn-floating", this.renderer.addClass(this.el.nativeElement, this.floatingClass), this.renderer.removeClass(this.el.nativeElement, "btn"))) }
                    initClasses() { "" !== this.color && this.renderer.addClass(this.el.nativeElement, this.colorClass), this.rounded && this.renderer.addClass(this.el.nativeElement, this.roundedClass), this.gradient && ("" !== this.color && this.renderer.removeClass(this.el.nativeElement, this.colorClass), this.renderer.addClass(this.el.nativeElement, this.gradientClass)), this.outline && (this.renderer.removeClass(this.el.nativeElement, this.colorClass), this.renderer.addClass(this.el.nativeElement, this.outlineClass)), this.flat && (this.color && this.renderer.removeClass(this.el.nativeElement, this.colorClass), this.gradient && this.renderer.removeClass(this.el.nativeElement, this.gradientClass), this.outline && this.renderer.removeClass(this.el.nativeElement, this.outlineClass), this.rounded && this.renderer.removeClass(this.el.nativeElement, this.roundedClass), this.renderer.addClass(this.el.nativeElement, this.flatClass)), this.size && this.renderer.addClass(this.el.nativeElement, this.sizeClass), this.block && this.renderer.addClass(this.el.nativeElement, this.blockClass), this.floating && (this.renderer.addClass(this.el.nativeElement, this.floatingClass), this.renderer.removeClass(this.el.nativeElement, "btn")) } } return t.\u0275fac = function(e) { return new(e || t)(n.Y36(n.SBq), n.Y36(n.Qsj)) }, t.\u0275cmp = n.Xpm({ type: t, selectors: [
                        ["", "mdbBtn", ""]
                    ], inputs: { color: "color", rounded: "rounded", gradient: "gradient", outline: "outline", flat: "flat", size: "size", block: "block", floating: "floating" }, features: [n.TTD], attrs: ke, ngContentSelectors: se, decls: 1, vars: 0, template: function(e, i) { 1 & e && (n.F$t(), n.Hsn(0)) }, styles: [".btn{box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f;padding:.84rem 2.14rem;font-size:.81rem;transition:all .2s ease-in-out;margin:.375rem;border:0;border-radius:.125rem;cursor:pointer;text-transform:uppercase;white-space:normal;word-wrap:break-word;color:inherit}.btn:hover,.btn:active,.btn:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;outline:0}.btn:not([disabled]):not(.disabled):active,.btn:not([disabled]):not(.disabled).active{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn .fas,.btn .fab,.btn .far{position:relative;font-size:.9rem}.btn .fas.right,.btn .fab.right,.btn .far.right{margin-left:.3rem}.btn .fas.left,.btn .fab.left,.btn .far.left{margin-right:.3rem}.btn.btn-lg .fas,.btn.btn-lg .fab,.btn.btn-lg .far{font-size:1rem}.btn.btn-md .fas,.btn.btn-md .fab,.btn.btn-md .far{font-size:.8rem}.btn.btn-sm .fas,.btn.btn-sm .fab,.btn.btn-sm .far{font-size:.7rem}.btn.btn-tb{padding:.3rem 1rem}.btn.disabled:active,.btn.disabled:focus,.btn.disabled:hover,.btn:disabled:active,.btn:disabled:focus,.btn:disabled:hover{box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f}.btn.btn-block{margin:inherit}.btn.btn-link{color:#000;box-shadow:none;background-color:transparent}.btn.btn-link:active,.btn.btn-link:focus,.btn.btn-link:hover{box-shadow:none!important;background-color:transparent}.btn[class*=btn-outline-]{padding-top:.7rem;padding-bottom:.7rem}.btn[class*=btn-outline-].btn-lg{padding-top:.88rem;padding-bottom:.88rem}.btn[class*=btn-outline-].btn-md{padding-top:.58rem;padding-bottom:.58rem}.btn[class*=btn-outline-].btn-sm{padding-top:.38rem;padding-bottom:.38rem}.btn-group .btn{margin:0}.btn .fa-lg,.btn-floating .fa-lg{font-size:1.33333em!important}.btn .fa-xs,.btn-floating .fa-xs{font-size:.75em!important}.btn .fa-sm,.btn-floating .fa-sm{font-size:.875em!important}.btn .fa-1x,.btn-floating .fa-1x{font-size:1em!important}.btn .fa-2x,.btn-floating .fa-2x{font-size:2em!important}.btn .fa-3x,.btn-floating .fa-3x{font-size:3em!important}.btn .fa-4x,.btn-floating .fa-4x{font-size:4em!important}.btn .fa-5x,.btn-floating .fa-5x{font-size:5em!important}.btn .fa-6x,.btn-floating .fa-6x{font-size:6em!important}.btn .fa-7x,.btn-floating .fa-7x{font-size:7em!important}.btn .fa-8x,.btn-floating .fa-8x{font-size:8em!important}.btn .fa-9x,.btn-floating .fa-9x{font-size:9em!important}.btn .fa-10x,.btn-floating .fa-10x{font-size:10em!important}.btn-primary{background-color:#4285f4!important;color:#fff}.btn-primary:hover{background-color:#5a95f5;color:#fff}.btn-primary:focus,.btn-primary.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-primary:focus,.btn-primary:active,.btn-primary.active{background-color:#0b51c5}.btn-primary.dropdown-toggle{background-color:#4285f4!important}.btn-primary.dropdown-toggle:hover,.btn-primary.dropdown-toggle:focus{background-color:#5a95f5!important}.btn-primary:not([disabled]):not(.disabled):active,.btn-primary:not([disabled]):not(.disabled).active,.show>.btn-primary.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#0b51c5!important}.btn-primary:not([disabled]):not(.disabled):active:focus,.btn-primary:not([disabled]):not(.disabled).active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.primary-ic{color:#4285f4!important}.primary-ic:hover,.primary-ic:focus{color:#4285f4}table.table a.btn.btn-primary{color:#fff}.btn-outline-primary{border:2px solid #4285f4!important;background-color:transparent!important;color:#4285f4!important}.btn-outline-primary:hover,.btn-outline-primary:focus,.btn-outline-primary:active,.btn-outline-primary:active:focus,.btn-outline-primary.active{border-color:#4285f4!important;background-color:transparent!important;color:#4285f4!important}.btn-outline-primary:not([disabled]):not(.disabled):active,.btn-outline-primary:not([disabled]):not(.disabled).active,.show>.btn-outline-primary.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#4285f4!important}.btn-outline-primary:not([disabled]):not(.disabled):active:focus,.btn-outline-primary:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-danger{background-color:#ff3547!important;color:#fff}.btn-danger:hover{background-color:#ff4f5e;color:#fff}.btn-danger:focus,.btn-danger.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-danger:focus,.btn-danger:active,.btn-danger.active{background-color:#ce0012}.btn-danger.dropdown-toggle{background-color:#ff3547!important}.btn-danger.dropdown-toggle:hover,.btn-danger.dropdown-toggle:focus{background-color:#ff4f5e!important}.btn-danger:not([disabled]):not(.disabled):active,.btn-danger:not([disabled]):not(.disabled).active,.show>.btn-danger.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#ce0012!important}.btn-danger:not([disabled]):not(.disabled):active:focus,.btn-danger:not([disabled]):not(.disabled).active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.danger-ic{color:#ff3547!important}.danger-ic:hover,.danger-ic:focus{color:#ff3547}table.table a.btn.btn-danger{color:#fff}.btn-outline-danger{border:2px solid #ff3547!important;background-color:transparent!important;color:#ff3547!important}.btn-outline-danger:hover,.btn-outline-danger:focus,.btn-outline-danger:active,.btn-outline-danger:active:focus,.btn-outline-danger.active{border-color:#ff3547!important;background-color:transparent!important;color:#ff3547!important}.btn-outline-danger:not([disabled]):not(.disabled):active,.btn-outline-danger:not([disabled]):not(.disabled).active,.show>.btn-outline-danger.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#ff3547!important}.btn-outline-danger:not([disabled]):not(.disabled):active:focus,.btn-outline-danger:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-warning{background-color:#fb3!important;color:#fff}.btn-warning:hover{background-color:#ffc44d;color:#fff}.btn-warning:focus,.btn-warning.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-warning:focus,.btn-warning:active,.btn-warning.active{background-color:#c80}.btn-warning.dropdown-toggle{background-color:#fb3!important}.btn-warning.dropdown-toggle:hover,.btn-warning.dropdown-toggle:focus{background-color:#ffc44d!important}.btn-warning:not([disabled]):not(.disabled):active,.btn-warning:not([disabled]):not(.disabled).active,.show>.btn-warning.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#c80!important}.btn-warning:not([disabled]):not(.disabled):active:focus,.btn-warning:not([disabled]):not(.disabled).active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.warning-ic{color:#fb3!important}.warning-ic:hover,.warning-ic:focus{color:#fb3}table.table a.btn.btn-warning{color:#fff}.btn-outline-warning{border:2px solid #ffbb33!important;background-color:transparent!important;color:#fb3!important}.btn-outline-warning:hover,.btn-outline-warning:focus,.btn-outline-warning:active,.btn-outline-warning:active:focus,.btn-outline-warning.active{border-color:#fb3!important;background-color:transparent!important;color:#fb3!important}.btn-outline-warning:not([disabled]):not(.disabled):active,.btn-outline-warning:not([disabled]):not(.disabled).active,.show>.btn-outline-warning.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#fb3!important}.btn-outline-warning:not([disabled]):not(.disabled):active:focus,.btn-outline-warning:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-success{background-color:#00c851!important;color:#fff}.btn-success:hover{background-color:#00e25b;color:#fff}.btn-success:focus,.btn-success.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-success:focus,.btn-success:active,.btn-success.active{background-color:#006228}.btn-success.dropdown-toggle{background-color:#00c851!important}.btn-success.dropdown-toggle:hover,.btn-success.dropdown-toggle:focus{background-color:#00e25b!important}.btn-success:not([disabled]):not(.disabled):active,.btn-success:not([disabled]):not(.disabled).active,.show>.btn-success.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#006228!important}.btn-success:not([disabled]):not(.disabled):active:focus,.btn-success:not([disabled]):not(.disabled).active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.success-ic{color:#00c851!important}.success-ic:hover,.success-ic:focus{color:#00c851}table.table a.btn.btn-success{color:#fff}.btn-outline-success{border:2px solid #00c851!important;background-color:transparent!important;color:#00c851!important}.btn-outline-success:hover,.btn-outline-success:focus,.btn-outline-success:active,.btn-outline-success:active:focus,.btn-outline-success.active{border-color:#00c851!important;background-color:transparent!important;color:#00c851!important}.btn-outline-success:not([disabled]):not(.disabled):active,.btn-outline-success:not([disabled]):not(.disabled).active,.show>.btn-outline-success.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#00c851!important}.btn-outline-success:not([disabled]):not(.disabled):active:focus,.btn-outline-success:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-info{background-color:#33b5e5!important;color:#fff}.btn-info:hover{background-color:#4abde8;color:#fff}.btn-info:focus,.btn-info.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-info:focus,.btn-info:active,.btn-info.active{background-color:#14799e}.btn-info.dropdown-toggle{background-color:#33b5e5!important}.btn-info.dropdown-toggle:hover,.btn-info.dropdown-toggle:focus{background-color:#4abde8!important}.btn-info:not([disabled]):not(.disabled):active,.btn-info:not([disabled]):not(.disabled).active,.show>.btn-info.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#14799e!important}.btn-info:not([disabled]):not(.disabled):active:focus,.btn-info:not([disabled]):not(.disabled).active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.info-ic{color:#33b5e5!important}.info-ic:hover,.info-ic:focus{color:#33b5e5}table.table a.btn.btn-info{color:#fff}.btn-outline-info{border:2px solid #33b5e5!important;background-color:transparent!important;color:#33b5e5!important}.btn-outline-info:hover,.btn-outline-info:focus,.btn-outline-info:active,.btn-outline-info:active:focus,.btn-outline-info.active{border-color:#33b5e5!important;background-color:transparent!important;color:#33b5e5!important}.btn-outline-info:not([disabled]):not(.disabled):active,.btn-outline-info:not([disabled]):not(.disabled).active,.show>.btn-outline-info.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#33b5e5!important}.btn-outline-info:not([disabled]):not(.disabled):active:focus,.btn-outline-info:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-default{background-color:#2bbbad!important;color:#fff}.btn-default:hover{background-color:#30cfc0;color:#fff}.btn-default:focus,.btn-default.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-default:focus,.btn-default:active,.btn-default.active{background-color:#186860}.btn-default.dropdown-toggle{background-color:#2bbbad!important}.btn-default.dropdown-toggle:hover,.btn-default.dropdown-toggle:focus{background-color:#30cfc0!important}.btn-default:not([disabled]):not(.disabled):active,.btn-default:not([disabled]):not(.disabled).active,.show>.btn-default.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#186860!important}.btn-default:not([disabled]):not(.disabled):active:focus,.btn-default:not([disabled]):not(.disabled).active:focus,.show>.btn-default.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.default-ic{color:#2bbbad!important}.default-ic:hover,.default-ic:focus{color:#2bbbad}table.table a.btn.btn-default{color:#fff}.btn-outline-default{border:2px solid #2bbbad!important;background-color:transparent!important;color:#2bbbad!important}.btn-outline-default:hover,.btn-outline-default:focus,.btn-outline-default:active,.btn-outline-default:active:focus,.btn-outline-default.active{border-color:#2bbbad!important;background-color:transparent!important;color:#2bbbad!important}.btn-outline-default:not([disabled]):not(.disabled):active,.btn-outline-default:not([disabled]):not(.disabled).active,.show>.btn-outline-default.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#2bbbad!important}.btn-outline-default:not([disabled]):not(.disabled):active:focus,.btn-outline-default:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-default.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-secondary{background-color:#a6c!important;color:#fff}.btn-secondary:hover{background-color:#b579d2;color:#fff}.btn-secondary:focus,.btn-secondary.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-secondary:focus,.btn-secondary:active,.btn-secondary.active{background-color:#739}.btn-secondary.dropdown-toggle{background-color:#a6c!important}.btn-secondary.dropdown-toggle:hover,.btn-secondary.dropdown-toggle:focus{background-color:#b579d2!important}.btn-secondary:not([disabled]):not(.disabled):active,.btn-secondary:not([disabled]):not(.disabled).active,.show>.btn-secondary.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#739!important}.btn-secondary:not([disabled]):not(.disabled):active:focus,.btn-secondary:not([disabled]):not(.disabled).active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.secondary-ic{color:#a6c!important}.secondary-ic:hover,.secondary-ic:focus{color:#a6c}table.table a.btn.btn-secondary{color:#fff}.btn-outline-secondary{border:2px solid #aa66cc!important;background-color:transparent!important;color:#a6c!important}.btn-outline-secondary:hover,.btn-outline-secondary:focus,.btn-outline-secondary:active,.btn-outline-secondary:active:focus,.btn-outline-secondary.active{border-color:#a6c!important;background-color:transparent!important;color:#a6c!important}.btn-outline-secondary:not([disabled]):not(.disabled):active,.btn-outline-secondary:not([disabled]):not(.disabled).active,.show>.btn-outline-secondary.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#a6c!important}.btn-outline-secondary:not([disabled]):not(.disabled):active:focus,.btn-outline-secondary:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-elegant{background-color:#2e2e2e!important;color:#fff}.btn-elegant:hover{background-color:#3b3b3b;color:#fff}.btn-elegant:focus,.btn-elegant.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-elegant:focus,.btn-elegant:active,.btn-elegant.active{background-color:#000}.btn-elegant.dropdown-toggle{background-color:#2e2e2e!important}.btn-elegant.dropdown-toggle:hover,.btn-elegant.dropdown-toggle:focus{background-color:#3b3b3b!important}.btn-elegant:not([disabled]):not(.disabled):active,.btn-elegant:not([disabled]):not(.disabled).active,.show>.btn-elegant.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#000!important}.btn-elegant:not([disabled]):not(.disabled):active:focus,.btn-elegant:not([disabled]):not(.disabled).active:focus,.show>.btn-elegant.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.elegant-ic{color:#2e2e2e!important}.elegant-ic:hover,.elegant-ic:focus{color:#2e2e2e}table.table a.btn.btn-elegant{color:#fff}.btn-outline-elegant{border:2px solid #2e2e2e!important;background-color:transparent!important;color:#2e2e2e!important}.btn-outline-elegant:hover,.btn-outline-elegant:focus,.btn-outline-elegant:active,.btn-outline-elegant:active:focus,.btn-outline-elegant.active{border-color:#2e2e2e!important;background-color:transparent!important;color:#2e2e2e!important}.btn-outline-elegant:not([disabled]):not(.disabled):active,.btn-outline-elegant:not([disabled]):not(.disabled).active,.show>.btn-outline-elegant.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#2e2e2e!important}.btn-outline-elegant:not([disabled]):not(.disabled):active:focus,.btn-outline-elegant:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-elegant.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-unique{background-color:#880e4f!important;color:#fff}.btn-unique:hover{background-color:#9f105c;color:#fff}.btn-unique:focus,.btn-unique.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-unique:focus,.btn-unique:active,.btn-unique.active{background-color:#2c0419}.btn-unique.dropdown-toggle{background-color:#880e4f!important}.btn-unique.dropdown-toggle:hover,.btn-unique.dropdown-toggle:focus{background-color:#9f105c!important}.btn-unique:not([disabled]):not(.disabled):active,.btn-unique:not([disabled]):not(.disabled).active,.show>.btn-unique.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#2c0419!important}.btn-unique:not([disabled]):not(.disabled):active:focus,.btn-unique:not([disabled]):not(.disabled).active:focus,.show>.btn-unique.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.unique-ic{color:#880e4f!important}.unique-ic:hover,.unique-ic:focus{color:#880e4f}table.table a.btn.btn-unique{color:#fff}.btn-outline-unique{border:2px solid #880e4f!important;background-color:transparent!important;color:#880e4f!important}.btn-outline-unique:hover,.btn-outline-unique:focus,.btn-outline-unique:active,.btn-outline-unique:active:focus,.btn-outline-unique.active{border-color:#880e4f!important;background-color:transparent!important;color:#880e4f!important}.btn-outline-unique:not([disabled]):not(.disabled):active,.btn-outline-unique:not([disabled]):not(.disabled).active,.show>.btn-outline-unique.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#880e4f!important}.btn-outline-unique:not([disabled]):not(.disabled):active:focus,.btn-outline-unique:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-unique.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-dark-green{background-color:#388e3c!important;color:#fff}.btn-dark-green:hover{background-color:#3fa044;color:#fff}.btn-dark-green:focus,.btn-dark-green.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-dark-green:focus,.btn-dark-green:active,.btn-dark-green.active{background-color:#1b451d}.btn-dark-green.dropdown-toggle{background-color:#388e3c!important}.btn-dark-green.dropdown-toggle:hover,.btn-dark-green.dropdown-toggle:focus{background-color:#3fa044!important}.btn-dark-green:not([disabled]):not(.disabled):active,.btn-dark-green:not([disabled]):not(.disabled).active,.show>.btn-dark-green.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#1b451d!important}.btn-dark-green:not([disabled]):not(.disabled):active:focus,.btn-dark-green:not([disabled]):not(.disabled).active:focus,.show>.btn-dark-green.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.dark-green-ic{color:#388e3c!important}.dark-green-ic:hover,.dark-green-ic:focus{color:#388e3c}table.table a.btn.btn-dark-green{color:#fff}.btn-outline-dark-green{border:2px solid #388e3c!important;background-color:transparent!important;color:#388e3c!important}.btn-outline-dark-green:hover,.btn-outline-dark-green:focus,.btn-outline-dark-green:active,.btn-outline-dark-green:active:focus,.btn-outline-dark-green.active{border-color:#388e3c!important;background-color:transparent!important;color:#388e3c!important}.btn-outline-dark-green:not([disabled]):not(.disabled):active,.btn-outline-dark-green:not([disabled]):not(.disabled).active,.show>.btn-outline-dark-green.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#388e3c!important}.btn-outline-dark-green:not([disabled]):not(.disabled):active:focus,.btn-outline-dark-green:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-dark-green.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-mdb-color{background-color:#59698d!important;color:#fff}.btn-mdb-color:hover{background-color:#63759d;color:#fff}.btn-mdb-color:focus,.btn-mdb-color.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-mdb-color:focus,.btn-mdb-color:active,.btn-mdb-color.active{background-color:#323a4e}.btn-mdb-color.dropdown-toggle{background-color:#59698d!important}.btn-mdb-color.dropdown-toggle:hover,.btn-mdb-color.dropdown-toggle:focus{background-color:#63759d!important}.btn-mdb-color:not([disabled]):not(.disabled):active,.btn-mdb-color:not([disabled]):not(.disabled).active,.show>.btn-mdb-color.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#323a4e!important}.btn-mdb-color:not([disabled]):not(.disabled):active:focus,.btn-mdb-color:not([disabled]):not(.disabled).active:focus,.show>.btn-mdb-color.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.mdb-color-ic{color:#59698d!important}.mdb-color-ic:hover,.mdb-color-ic:focus{color:#59698d}table.table a.btn.btn-mdb-color{color:#fff}.btn-outline-mdb-color{border:2px solid #59698d!important;background-color:transparent!important;color:#59698d!important}.btn-outline-mdb-color:hover,.btn-outline-mdb-color:focus,.btn-outline-mdb-color:active,.btn-outline-mdb-color:active:focus,.btn-outline-mdb-color.active{border-color:#59698d!important;background-color:transparent!important;color:#59698d!important}.btn-outline-mdb-color:not([disabled]):not(.disabled):active,.btn-outline-mdb-color:not([disabled]):not(.disabled).active,.show>.btn-outline-mdb-color.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#59698d!important}.btn-outline-mdb-color:not([disabled]):not(.disabled):active:focus,.btn-outline-mdb-color:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-mdb-color.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-red{background-color:#d32f2f!important;color:#fff}.btn-red:hover{background-color:#d74444;color:#fff}.btn-red:focus,.btn-red.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-red:focus,.btn-red:active,.btn-red.active{background-color:#811b1b}.btn-red.dropdown-toggle{background-color:#d32f2f!important}.btn-red.dropdown-toggle:hover,.btn-red.dropdown-toggle:focus{background-color:#d74444!important}.btn-red:not([disabled]):not(.disabled):active,.btn-red:not([disabled]):not(.disabled).active,.show>.btn-red.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#811b1b!important}.btn-red:not([disabled]):not(.disabled):active:focus,.btn-red:not([disabled]):not(.disabled).active:focus,.show>.btn-red.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.red-ic{color:#d32f2f!important}.red-ic:hover,.red-ic:focus{color:#d32f2f}table.table a.btn.btn-red{color:#fff}.btn-outline-red{border:2px solid #d32f2f!important;background-color:transparent!important;color:#d32f2f!important}.btn-outline-red:hover,.btn-outline-red:focus,.btn-outline-red:active,.btn-outline-red:active:focus,.btn-outline-red.active{border-color:#d32f2f!important;background-color:transparent!important;color:#d32f2f!important}.btn-outline-red:not([disabled]):not(.disabled):active,.btn-outline-red:not([disabled]):not(.disabled).active,.show>.btn-outline-red.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#d32f2f!important}.btn-outline-red:not([disabled]):not(.disabled):active:focus,.btn-outline-red:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-red.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-pink{background-color:#ec407a!important;color:#fff}.btn-pink:hover{background-color:#ee578a;color:#fff}.btn-pink:focus,.btn-pink.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-pink:focus,.btn-pink:active,.btn-pink.active{background-color:#b41249}.btn-pink.dropdown-toggle{background-color:#ec407a!important}.btn-pink.dropdown-toggle:hover,.btn-pink.dropdown-toggle:focus{background-color:#ee578a!important}.btn-pink:not([disabled]):not(.disabled):active,.btn-pink:not([disabled]):not(.disabled).active,.show>.btn-pink.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#b41249!important}.btn-pink:not([disabled]):not(.disabled):active:focus,.btn-pink:not([disabled]):not(.disabled).active:focus,.show>.btn-pink.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.pink-ic{color:#ec407a!important}.pink-ic:hover,.pink-ic:focus{color:#ec407a}table.table a.btn.btn-pink{color:#fff}.btn-outline-pink{border:2px solid #ec407a!important;background-color:transparent!important;color:#ec407a!important}.btn-outline-pink:hover,.btn-outline-pink:focus,.btn-outline-pink:active,.btn-outline-pink:active:focus,.btn-outline-pink.active{border-color:#ec407a!important;background-color:transparent!important;color:#ec407a!important}.btn-outline-pink:not([disabled]):not(.disabled):active,.btn-outline-pink:not([disabled]):not(.disabled).active,.show>.btn-outline-pink.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#ec407a!important}.btn-outline-pink:not([disabled]):not(.disabled):active:focus,.btn-outline-pink:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-pink.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-purple{background-color:#8e24aa!important;color:#fff}.btn-purple:hover{background-color:#a028bf;color:#fff}.btn-purple:focus,.btn-purple.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-purple:focus,.btn-purple:active,.btn-purple.active{background-color:#481256}.btn-purple.dropdown-toggle{background-color:#8e24aa!important}.btn-purple.dropdown-toggle:hover,.btn-purple.dropdown-toggle:focus{background-color:#a028bf!important}.btn-purple:not([disabled]):not(.disabled):active,.btn-purple:not([disabled]):not(.disabled).active,.show>.btn-purple.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#481256!important}.btn-purple:not([disabled]):not(.disabled):active:focus,.btn-purple:not([disabled]):not(.disabled).active:focus,.show>.btn-purple.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.purple-ic{color:#8e24aa!important}.purple-ic:hover,.purple-ic:focus{color:#8e24aa}table.table a.btn.btn-purple{color:#fff}.btn-outline-purple{border:2px solid #8e24aa!important;background-color:transparent!important;color:#8e24aa!important}.btn-outline-purple:hover,.btn-outline-purple:focus,.btn-outline-purple:active,.btn-outline-purple:active:focus,.btn-outline-purple.active{border-color:#8e24aa!important;background-color:transparent!important;color:#8e24aa!important}.btn-outline-purple:not([disabled]):not(.disabled):active,.btn-outline-purple:not([disabled]):not(.disabled).active,.show>.btn-outline-purple.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#8e24aa!important}.btn-outline-purple:not([disabled]):not(.disabled):active:focus,.btn-outline-purple:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-purple.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-deep-purple{background-color:#512da8!important;color:#fff}.btn-deep-purple:hover{background-color:#5b32bc;color:#fff}.btn-deep-purple:focus,.btn-deep-purple.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-deep-purple:focus,.btn-deep-purple:active,.btn-deep-purple.active{background-color:#2a1758}.btn-deep-purple.dropdown-toggle{background-color:#512da8!important}.btn-deep-purple.dropdown-toggle:hover,.btn-deep-purple.dropdown-toggle:focus{background-color:#5b32bc!important}.btn-deep-purple:not([disabled]):not(.disabled):active,.btn-deep-purple:not([disabled]):not(.disabled).active,.show>.btn-deep-purple.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#2a1758!important}.btn-deep-purple:not([disabled]):not(.disabled):active:focus,.btn-deep-purple:not([disabled]):not(.disabled).active:focus,.show>.btn-deep-purple.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.deep-purple-ic{color:#512da8!important}.deep-purple-ic:hover,.deep-purple-ic:focus{color:#512da8}table.table a.btn.btn-deep-purple{color:#fff}.btn-outline-deep-purple{border:2px solid #512da8!important;background-color:transparent!important;color:#512da8!important}.btn-outline-deep-purple:hover,.btn-outline-deep-purple:focus,.btn-outline-deep-purple:active,.btn-outline-deep-purple:active:focus,.btn-outline-deep-purple.active{border-color:#512da8!important;background-color:transparent!important;color:#512da8!important}.btn-outline-deep-purple:not([disabled]):not(.disabled):active,.btn-outline-deep-purple:not([disabled]):not(.disabled).active,.show>.btn-outline-deep-purple.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#512da8!important}.btn-outline-deep-purple:not([disabled]):not(.disabled):active:focus,.btn-outline-deep-purple:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-deep-purple.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-indigo{background-color:#3f51b5!important;color:#fff}.btn-indigo:hover{background-color:#4d5ec1;color:#fff}.btn-indigo:focus,.btn-indigo.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-indigo:focus,.btn-indigo:active,.btn-indigo.active{background-color:#252f69}.btn-indigo.dropdown-toggle{background-color:#3f51b5!important}.btn-indigo.dropdown-toggle:hover,.btn-indigo.dropdown-toggle:focus{background-color:#4d5ec1!important}.btn-indigo:not([disabled]):not(.disabled):active,.btn-indigo:not([disabled]):not(.disabled).active,.show>.btn-indigo.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#252f69!important}.btn-indigo:not([disabled]):not(.disabled):active:focus,.btn-indigo:not([disabled]):not(.disabled).active:focus,.show>.btn-indigo.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.indigo-ic{color:#3f51b5!important}.indigo-ic:hover,.indigo-ic:focus{color:#3f51b5}table.table a.btn.btn-indigo{color:#fff}.btn-outline-indigo{border:2px solid #3f51b5!important;background-color:transparent!important;color:#3f51b5!important}.btn-outline-indigo:hover,.btn-outline-indigo:focus,.btn-outline-indigo:active,.btn-outline-indigo:active:focus,.btn-outline-indigo.active{border-color:#3f51b5!important;background-color:transparent!important;color:#3f51b5!important}.btn-outline-indigo:not([disabled]):not(.disabled):active,.btn-outline-indigo:not([disabled]):not(.disabled).active,.show>.btn-outline-indigo.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#3f51b5!important}.btn-outline-indigo:not([disabled]):not(.disabled):active:focus,.btn-outline-indigo:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-indigo.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-blue{background-color:#1976d2!important;color:#fff}.btn-blue:hover{background-color:#2083e4;color:#fff}.btn-blue:focus,.btn-blue.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-blue:focus,.btn-blue:active,.btn-blue.active{background-color:#0e4377}.btn-blue.dropdown-toggle{background-color:#1976d2!important}.btn-blue.dropdown-toggle:hover,.btn-blue.dropdown-toggle:focus{background-color:#2083e4!important}.btn-blue:not([disabled]):not(.disabled):active,.btn-blue:not([disabled]):not(.disabled).active,.show>.btn-blue.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#0e4377!important}.btn-blue:not([disabled]):not(.disabled):active:focus,.btn-blue:not([disabled]):not(.disabled).active:focus,.show>.btn-blue.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.blue-ic{color:#1976d2!important}.blue-ic:hover,.blue-ic:focus{color:#1976d2}table.table a.btn.btn-blue{color:#fff}.btn-outline-blue{border:2px solid #1976d2!important;background-color:transparent!important;color:#1976d2!important}.btn-outline-blue:hover,.btn-outline-blue:focus,.btn-outline-blue:active,.btn-outline-blue:active:focus,.btn-outline-blue.active{border-color:#1976d2!important;background-color:transparent!important;color:#1976d2!important}.btn-outline-blue:not([disabled]):not(.disabled):active,.btn-outline-blue:not([disabled]):not(.disabled).active,.show>.btn-outline-blue.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#1976d2!important}.btn-outline-blue:not([disabled]):not(.disabled):active:focus,.btn-outline-blue:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-blue.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-light-blue{background-color:#82b1ff!important;color:#fff}.btn-light-blue:hover{background-color:#9cc1ff;color:#fff}.btn-light-blue:focus,.btn-light-blue.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-light-blue:focus,.btn-light-blue:active,.btn-light-blue.active{background-color:#1c71ff}.btn-light-blue.dropdown-toggle{background-color:#82b1ff!important}.btn-light-blue.dropdown-toggle:hover,.btn-light-blue.dropdown-toggle:focus{background-color:#9cc1ff!important}.btn-light-blue:not([disabled]):not(.disabled):active,.btn-light-blue:not([disabled]):not(.disabled).active,.show>.btn-light-blue.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#1c71ff!important}.btn-light-blue:not([disabled]):not(.disabled):active:focus,.btn-light-blue:not([disabled]):not(.disabled).active:focus,.show>.btn-light-blue.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.light-blue-ic{color:#82b1ff!important}.light-blue-ic:hover,.light-blue-ic:focus{color:#82b1ff}table.table a.btn.btn-light-blue{color:#fff}.btn-outline-light-blue{border:2px solid #82b1ff!important;background-color:transparent!important;color:#82b1ff!important}.btn-outline-light-blue:hover,.btn-outline-light-blue:focus,.btn-outline-light-blue:active,.btn-outline-light-blue:active:focus,.btn-outline-light-blue.active{border-color:#82b1ff!important;background-color:transparent!important;color:#82b1ff!important}.btn-outline-light-blue:not([disabled]):not(.disabled):active,.btn-outline-light-blue:not([disabled]):not(.disabled).active,.show>.btn-outline-light-blue.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#82b1ff!important}.btn-outline-light-blue:not([disabled]):not(.disabled):active:focus,.btn-outline-light-blue:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-light-blue.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-cyan{background-color:#00bcd4!important;color:#fff}.btn-cyan:hover{background-color:#00d3ee;color:#fff}.btn-cyan:focus,.btn-cyan.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-cyan:focus,.btn-cyan:active,.btn-cyan.active{background-color:#00626e}.btn-cyan.dropdown-toggle{background-color:#00bcd4!important}.btn-cyan.dropdown-toggle:hover,.btn-cyan.dropdown-toggle:focus{background-color:#00d3ee!important}.btn-cyan:not([disabled]):not(.disabled):active,.btn-cyan:not([disabled]):not(.disabled).active,.show>.btn-cyan.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#00626e!important}.btn-cyan:not([disabled]):not(.disabled):active:focus,.btn-cyan:not([disabled]):not(.disabled).active:focus,.show>.btn-cyan.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.cyan-ic{color:#00bcd4!important}.cyan-ic:hover,.cyan-ic:focus{color:#00bcd4}table.table a.btn.btn-cyan{color:#fff}.btn-outline-cyan{border:2px solid #00bcd4!important;background-color:transparent!important;color:#00bcd4!important}.btn-outline-cyan:hover,.btn-outline-cyan:focus,.btn-outline-cyan:active,.btn-outline-cyan:active:focus,.btn-outline-cyan.active{border-color:#00bcd4!important;background-color:transparent!important;color:#00bcd4!important}.btn-outline-cyan:not([disabled]):not(.disabled):active,.btn-outline-cyan:not([disabled]):not(.disabled).active,.show>.btn-outline-cyan.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#00bcd4!important}.btn-outline-cyan:not([disabled]):not(.disabled):active:focus,.btn-outline-cyan:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-cyan.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-teal{background-color:#00796b!important;color:#fff}.btn-teal:hover{background-color:#009382;color:#fff}.btn-teal:focus,.btn-teal.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-teal:focus,.btn-teal:active,.btn-teal.active{background-color:#001311}.btn-teal.dropdown-toggle{background-color:#00796b!important}.btn-teal.dropdown-toggle:hover,.btn-teal.dropdown-toggle:focus{background-color:#009382!important}.btn-teal:not([disabled]):not(.disabled):active,.btn-teal:not([disabled]):not(.disabled).active,.show>.btn-teal.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#001311!important}.btn-teal:not([disabled]):not(.disabled):active:focus,.btn-teal:not([disabled]):not(.disabled).active:focus,.show>.btn-teal.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.teal-ic{color:#00796b!important}.teal-ic:hover,.teal-ic:focus{color:#00796b}table.table a.btn.btn-teal{color:#fff}.btn-outline-teal{border:2px solid #00796b!important;background-color:transparent!important;color:#00796b!important}.btn-outline-teal:hover,.btn-outline-teal:focus,.btn-outline-teal:active,.btn-outline-teal:active:focus,.btn-outline-teal.active{border-color:#00796b!important;background-color:transparent!important;color:#00796b!important}.btn-outline-teal:not([disabled]):not(.disabled):active,.btn-outline-teal:not([disabled]):not(.disabled).active,.show>.btn-outline-teal.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#00796b!important}.btn-outline-teal:not([disabled]):not(.disabled):active:focus,.btn-outline-teal:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-teal.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-green{background-color:#388e3c!important;color:#fff}.btn-green:hover{background-color:#3fa044;color:#fff}.btn-green:focus,.btn-green.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-green:focus,.btn-green:active,.btn-green.active{background-color:#1b451d}.btn-green.dropdown-toggle{background-color:#388e3c!important}.btn-green.dropdown-toggle:hover,.btn-green.dropdown-toggle:focus{background-color:#3fa044!important}.btn-green:not([disabled]):not(.disabled):active,.btn-green:not([disabled]):not(.disabled).active,.show>.btn-green.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#1b451d!important}.btn-green:not([disabled]):not(.disabled):active:focus,.btn-green:not([disabled]):not(.disabled).active:focus,.show>.btn-green.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.green-ic{color:#388e3c!important}.green-ic:hover,.green-ic:focus{color:#388e3c}table.table a.btn.btn-green{color:#fff}.btn-outline-green{border:2px solid #388e3c!important;background-color:transparent!important;color:#388e3c!important}.btn-outline-green:hover,.btn-outline-green:focus,.btn-outline-green:active,.btn-outline-green:active:focus,.btn-outline-green.active{border-color:#388e3c!important;background-color:transparent!important;color:#388e3c!important}.btn-outline-green:not([disabled]):not(.disabled):active,.btn-outline-green:not([disabled]):not(.disabled).active,.show>.btn-outline-green.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#388e3c!important}.btn-outline-green:not([disabled]):not(.disabled):active:focus,.btn-outline-green:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-green.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-light-green{background-color:#8bc34a!important;color:#fff}.btn-light-green:hover{background-color:#97c95d;color:#fff}.btn-light-green:focus,.btn-light-green.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-light-green:focus,.btn-light-green:active,.btn-light-green.active{background-color:#577d2a}.btn-light-green.dropdown-toggle{background-color:#8bc34a!important}.btn-light-green.dropdown-toggle:hover,.btn-light-green.dropdown-toggle:focus{background-color:#97c95d!important}.btn-light-green:not([disabled]):not(.disabled):active,.btn-light-green:not([disabled]):not(.disabled).active,.show>.btn-light-green.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#577d2a!important}.btn-light-green:not([disabled]):not(.disabled):active:focus,.btn-light-green:not([disabled]):not(.disabled).active:focus,.show>.btn-light-green.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.light-green-ic{color:#8bc34a!important}.light-green-ic:hover,.light-green-ic:focus{color:#8bc34a}table.table a.btn.btn-light-green{color:#fff}.btn-outline-light-green{border:2px solid #8bc34a!important;background-color:transparent!important;color:#8bc34a!important}.btn-outline-light-green:hover,.btn-outline-light-green:focus,.btn-outline-light-green:active,.btn-outline-light-green:active:focus,.btn-outline-light-green.active{border-color:#8bc34a!important;background-color:transparent!important;color:#8bc34a!important}.btn-outline-light-green:not([disabled]):not(.disabled):active,.btn-outline-light-green:not([disabled]):not(.disabled).active,.show>.btn-outline-light-green.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#8bc34a!important}.btn-outline-light-green:not([disabled]):not(.disabled):active:focus,.btn-outline-light-green:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-light-green.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-lime{background-color:#afb42b!important;color:#fff}.btn-lime:hover{background-color:#c3c930;color:#fff}.btn-lime:focus,.btn-lime.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-lime:focus,.btn-lime:active,.btn-lime.active{background-color:#5f6217}.btn-lime.dropdown-toggle{background-color:#afb42b!important}.btn-lime.dropdown-toggle:hover,.btn-lime.dropdown-toggle:focus{background-color:#c3c930!important}.btn-lime:not([disabled]):not(.disabled):active,.btn-lime:not([disabled]):not(.disabled).active,.show>.btn-lime.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#5f6217!important}.btn-lime:not([disabled]):not(.disabled):active:focus,.btn-lime:not([disabled]):not(.disabled).active:focus,.show>.btn-lime.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.lime-ic{color:#afb42b!important}.lime-ic:hover,.lime-ic:focus{color:#afb42b}table.table a.btn.btn-lime{color:#fff}.btn-outline-lime{border:2px solid #afb42b!important;background-color:transparent!important;color:#afb42b!important}.btn-outline-lime:hover,.btn-outline-lime:focus,.btn-outline-lime:active,.btn-outline-lime:active:focus,.btn-outline-lime.active{border-color:#afb42b!important;background-color:transparent!important;color:#afb42b!important}.btn-outline-lime:not([disabled]):not(.disabled):active,.btn-outline-lime:not([disabled]):not(.disabled).active,.show>.btn-outline-lime.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#afb42b!important}.btn-outline-lime:not([disabled]):not(.disabled):active:focus,.btn-outline-lime:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-lime.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-yellow{background-color:#fbc02d!important;color:#fff}.btn-yellow:hover{background-color:#fbc846;color:#fff}.btn-yellow:focus,.btn-yellow.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-yellow:focus,.btn-yellow:active,.btn-yellow.active{background-color:#be8904}.btn-yellow.dropdown-toggle{background-color:#fbc02d!important}.btn-yellow.dropdown-toggle:hover,.btn-yellow.dropdown-toggle:focus{background-color:#fbc846!important}.btn-yellow:not([disabled]):not(.disabled):active,.btn-yellow:not([disabled]):not(.disabled).active,.show>.btn-yellow.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#be8904!important}.btn-yellow:not([disabled]):not(.disabled):active:focus,.btn-yellow:not([disabled]):not(.disabled).active:focus,.show>.btn-yellow.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.yellow-ic{color:#fbc02d!important}.yellow-ic:hover,.yellow-ic:focus{color:#fbc02d}table.table a.btn.btn-yellow{color:#fff}.btn-outline-yellow{border:2px solid #fbc02d!important;background-color:transparent!important;color:#fbc02d!important}.btn-outline-yellow:hover,.btn-outline-yellow:focus,.btn-outline-yellow:active,.btn-outline-yellow:active:focus,.btn-outline-yellow.active{border-color:#fbc02d!important;background-color:transparent!important;color:#fbc02d!important}.btn-outline-yellow:not([disabled]):not(.disabled):active,.btn-outline-yellow:not([disabled]):not(.disabled).active,.show>.btn-outline-yellow.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#fbc02d!important}.btn-outline-yellow:not([disabled]):not(.disabled):active:focus,.btn-outline-yellow:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-yellow.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-amber{background-color:#ffa000!important;color:#fff}.btn-amber:hover{background-color:#ffaa1a;color:#fff}.btn-amber:focus,.btn-amber.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-amber:focus,.btn-amber:active,.btn-amber.active{background-color:#996000}.btn-amber.dropdown-toggle{background-color:#ffa000!important}.btn-amber.dropdown-toggle:hover,.btn-amber.dropdown-toggle:focus{background-color:#ffaa1a!important}.btn-amber:not([disabled]):not(.disabled):active,.btn-amber:not([disabled]):not(.disabled).active,.show>.btn-amber.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#996000!important}.btn-amber:not([disabled]):not(.disabled):active:focus,.btn-amber:not([disabled]):not(.disabled).active:focus,.show>.btn-amber.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.amber-ic{color:#ffa000!important}.amber-ic:hover,.amber-ic:focus{color:#ffa000}table.table a.btn.btn-amber{color:#fff}.btn-outline-amber{border:2px solid #ffa000!important;background-color:transparent!important;color:#ffa000!important}.btn-outline-amber:hover,.btn-outline-amber:focus,.btn-outline-amber:active,.btn-outline-amber:active:focus,.btn-outline-amber.active{border-color:#ffa000!important;background-color:transparent!important;color:#ffa000!important}.btn-outline-amber:not([disabled]):not(.disabled):active,.btn-outline-amber:not([disabled]):not(.disabled).active,.show>.btn-outline-amber.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#ffa000!important}.btn-outline-amber:not([disabled]):not(.disabled):active:focus,.btn-outline-amber:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-amber.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-orange{background-color:#f57c00!important;color:#fff}.btn-orange:hover{background-color:#ff8910;color:#fff}.btn-orange:focus,.btn-orange.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-orange:focus,.btn-orange:active,.btn-orange.active{background-color:#8f4800}.btn-orange.dropdown-toggle{background-color:#f57c00!important}.btn-orange.dropdown-toggle:hover,.btn-orange.dropdown-toggle:focus{background-color:#ff8910!important}.btn-orange:not([disabled]):not(.disabled):active,.btn-orange:not([disabled]):not(.disabled).active,.show>.btn-orange.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#8f4800!important}.btn-orange:not([disabled]):not(.disabled):active:focus,.btn-orange:not([disabled]):not(.disabled).active:focus,.show>.btn-orange.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.orange-ic{color:#f57c00!important}.orange-ic:hover,.orange-ic:focus{color:#f57c00}table.table a.btn.btn-orange{color:#fff}.btn-outline-orange{border:2px solid #f57c00!important;background-color:transparent!important;color:#f57c00!important}.btn-outline-orange:hover,.btn-outline-orange:focus,.btn-outline-orange:active,.btn-outline-orange:active:focus,.btn-outline-orange.active{border-color:#f57c00!important;background-color:transparent!important;color:#f57c00!important}.btn-outline-orange:not([disabled]):not(.disabled):active,.btn-outline-orange:not([disabled]):not(.disabled).active,.show>.btn-outline-orange.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#f57c00!important}.btn-outline-orange:not([disabled]):not(.disabled):active:focus,.btn-outline-orange:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-orange.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-deep-orange{background-color:#ff7043!important;color:#fff}.btn-deep-orange:hover{background-color:#ff835d;color:#fff}.btn-deep-orange:focus,.btn-deep-orange.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-deep-orange:focus,.btn-deep-orange:active,.btn-deep-orange.active{background-color:#dc3500}.btn-deep-orange.dropdown-toggle{background-color:#ff7043!important}.btn-deep-orange.dropdown-toggle:hover,.btn-deep-orange.dropdown-toggle:focus{background-color:#ff835d!important}.btn-deep-orange:not([disabled]):not(.disabled):active,.btn-deep-orange:not([disabled]):not(.disabled).active,.show>.btn-deep-orange.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#dc3500!important}.btn-deep-orange:not([disabled]):not(.disabled):active:focus,.btn-deep-orange:not([disabled]):not(.disabled).active:focus,.show>.btn-deep-orange.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.deep-orange-ic{color:#ff7043!important}.deep-orange-ic:hover,.deep-orange-ic:focus{color:#ff7043}table.table a.btn.btn-deep-orange{color:#fff}.btn-outline-deep-orange{border:2px solid #ff7043!important;background-color:transparent!important;color:#ff7043!important}.btn-outline-deep-orange:hover,.btn-outline-deep-orange:focus,.btn-outline-deep-orange:active,.btn-outline-deep-orange:active:focus,.btn-outline-deep-orange.active{border-color:#ff7043!important;background-color:transparent!important;color:#ff7043!important}.btn-outline-deep-orange:not([disabled]):not(.disabled):active,.btn-outline-deep-orange:not([disabled]):not(.disabled).active,.show>.btn-outline-deep-orange.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#ff7043!important}.btn-outline-deep-orange:not([disabled]):not(.disabled):active:focus,.btn-outline-deep-orange:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-deep-orange.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-brown{background-color:#795548!important;color:#fff}.btn-brown:hover{background-color:#896052;color:#fff}.btn-brown:focus,.btn-brown.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-brown:focus,.btn-brown:active,.btn-brown.active{background-color:#392822}.btn-brown.dropdown-toggle{background-color:#795548!important}.btn-brown.dropdown-toggle:hover,.btn-brown.dropdown-toggle:focus{background-color:#896052!important}.btn-brown:not([disabled]):not(.disabled):active,.btn-brown:not([disabled]):not(.disabled).active,.show>.btn-brown.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#392822!important}.btn-brown:not([disabled]):not(.disabled):active:focus,.btn-brown:not([disabled]):not(.disabled).active:focus,.show>.btn-brown.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.brown-ic{color:#795548!important}.brown-ic:hover,.brown-ic:focus{color:#795548}table.table a.btn.btn-brown{color:#fff}.btn-outline-brown{border:2px solid #795548!important;background-color:transparent!important;color:#795548!important}.btn-outline-brown:hover,.btn-outline-brown:focus,.btn-outline-brown:active,.btn-outline-brown:active:focus,.btn-outline-brown.active{border-color:#795548!important;background-color:transparent!important;color:#795548!important}.btn-outline-brown:not([disabled]):not(.disabled):active,.btn-outline-brown:not([disabled]):not(.disabled).active,.show>.btn-outline-brown.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#795548!important}.btn-outline-brown:not([disabled]):not(.disabled):active:focus,.btn-outline-brown:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-brown.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-grey{background-color:#616161!important;color:#fff}.btn-grey:hover{background-color:#6e6e6e;color:#fff}.btn-grey:focus,.btn-grey.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-grey:focus,.btn-grey:active,.btn-grey.active{background-color:#2e2e2e}.btn-grey.dropdown-toggle{background-color:#616161!important}.btn-grey.dropdown-toggle:hover,.btn-grey.dropdown-toggle:focus{background-color:#6e6e6e!important}.btn-grey:not([disabled]):not(.disabled):active,.btn-grey:not([disabled]):not(.disabled).active,.show>.btn-grey.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#2e2e2e!important}.btn-grey:not([disabled]):not(.disabled):active:focus,.btn-grey:not([disabled]):not(.disabled).active:focus,.show>.btn-grey.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.grey-ic{color:#616161!important}.grey-ic:hover,.grey-ic:focus{color:#616161}table.table a.btn.btn-grey{color:#fff}.btn-outline-grey{border:2px solid #616161!important;background-color:transparent!important;color:#616161!important}.btn-outline-grey:hover,.btn-outline-grey:focus,.btn-outline-grey:active,.btn-outline-grey:active:focus,.btn-outline-grey.active{border-color:#616161!important;background-color:transparent!important;color:#616161!important}.btn-outline-grey:not([disabled]):not(.disabled):active,.btn-outline-grey:not([disabled]):not(.disabled).active,.show>.btn-outline-grey.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#616161!important}.btn-outline-grey:not([disabled]):not(.disabled):active:focus,.btn-outline-grey:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-grey.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-blue-grey{background-color:#78909c!important;color:#fff}.btn-blue-grey:hover{background-color:#879ca7;color:#fff}.btn-blue-grey:focus,.btn-blue-grey.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-blue-grey:focus,.btn-blue-grey:active,.btn-blue-grey.active{background-color:#4a5b64}.btn-blue-grey.dropdown-toggle{background-color:#78909c!important}.btn-blue-grey.dropdown-toggle:hover,.btn-blue-grey.dropdown-toggle:focus{background-color:#879ca7!important}.btn-blue-grey:not([disabled]):not(.disabled):active,.btn-blue-grey:not([disabled]):not(.disabled).active,.show>.btn-blue-grey.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#4a5b64!important}.btn-blue-grey:not([disabled]):not(.disabled):active:focus,.btn-blue-grey:not([disabled]):not(.disabled).active:focus,.show>.btn-blue-grey.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.blue-grey-ic{color:#78909c!important}.blue-grey-ic:hover,.blue-grey-ic:focus{color:#78909c}table.table a.btn.btn-blue-grey{color:#fff}.btn-outline-blue-grey{border:2px solid #78909c!important;background-color:transparent!important;color:#78909c!important}.btn-outline-blue-grey:hover,.btn-outline-blue-grey:focus,.btn-outline-blue-grey:active,.btn-outline-blue-grey:active:focus,.btn-outline-blue-grey.active{border-color:#78909c!important;background-color:transparent!important;color:#78909c!important}.btn-outline-blue-grey:not([disabled]):not(.disabled):active,.btn-outline-blue-grey:not([disabled]):not(.disabled).active,.show>.btn-outline-blue-grey.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#78909c!important}.btn-outline-blue-grey:not([disabled]):not(.disabled):active:focus,.btn-outline-blue-grey:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-blue-grey.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-dark{background-color:#212121!important;color:#fff}.btn-dark:hover{background-color:#2e2e2e;color:#fff}.btn-dark:focus,.btn-dark.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-dark:focus,.btn-dark:active,.btn-dark.active{background-color:#000}.btn-dark.dropdown-toggle{background-color:#212121!important}.btn-dark.dropdown-toggle:hover,.btn-dark.dropdown-toggle:focus{background-color:#2e2e2e!important}.btn-dark:not([disabled]):not(.disabled):active,.btn-dark:not([disabled]):not(.disabled).active,.show>.btn-dark.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#000!important}.btn-dark:not([disabled]):not(.disabled):active:focus,.btn-dark:not([disabled]):not(.disabled).active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.dark-ic{color:#212121!important}.dark-ic:hover,.dark-ic:focus{color:#212121}table.table a.btn.btn-dark{color:#fff}.btn-outline-dark{border:2px solid #212121!important;background-color:transparent!important;color:#212121!important}.btn-outline-dark:hover,.btn-outline-dark:focus,.btn-outline-dark:active,.btn-outline-dark:active:focus,.btn-outline-dark.active{border-color:#212121!important;background-color:transparent!important;color:#212121!important}.btn-outline-dark:not([disabled]):not(.disabled):active,.btn-outline-dark:not([disabled]):not(.disabled).active,.show>.btn-outline-dark.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#212121!important}.btn-outline-dark:not([disabled]):not(.disabled):active:focus,.btn-outline-dark:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-light{background-color:#e0e0e0!important;color:#000}.btn-light:hover{background-color:#ededed;color:#000}.btn-light:focus,.btn-light.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-light:focus,.btn-light:active,.btn-light.active{background-color:#adadad}.btn-light.dropdown-toggle{background-color:#e0e0e0!important}.btn-light.dropdown-toggle:hover,.btn-light.dropdown-toggle:focus{background-color:#ededed!important}.btn-light:not([disabled]):not(.disabled):active,.btn-light:not([disabled]):not(.disabled).active,.show>.btn-light.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#adadad!important}.btn-light:not([disabled]):not(.disabled):active:focus,.btn-light:not([disabled]):not(.disabled).active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.light-ic{color:#e0e0e0!important}.light-ic:hover,.light-ic:focus{color:#e0e0e0}table.table a.btn.btn-light{color:#000}.btn-outline-light{border:2px solid #e0e0e0!important;background-color:transparent!important;color:#e0e0e0!important}.btn-outline-light:hover,.btn-outline-light:focus,.btn-outline-light:active,.btn-outline-light:active:focus,.btn-outline-light.active{border-color:#e0e0e0!important;background-color:transparent!important;color:#e0e0e0!important}.btn-outline-light:not([disabled]):not(.disabled):active,.btn-outline-light:not([disabled]):not(.disabled).active,.show>.btn-outline-light.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#e0e0e0!important}.btn-outline-light:not([disabled]):not(.disabled):active:focus,.btn-outline-light:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-white{background-color:#fff!important;color:#000}.btn-white:hover{background-color:#fff;color:#000}.btn-white:focus,.btn-white.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-white:focus,.btn-white:active,.btn-white.active{background-color:#ccc}.btn-white.dropdown-toggle{background-color:#fff!important}.btn-white.dropdown-toggle:hover,.btn-white.dropdown-toggle:focus{background-color:#fff!important}.btn-white:not([disabled]):not(.disabled):active,.btn-white:not([disabled]):not(.disabled).active,.show>.btn-white.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#ccc!important}.btn-white:not([disabled]):not(.disabled):active:focus,.btn-white:not([disabled]):not(.disabled).active:focus,.show>.btn-white.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.white-ic{color:#fff!important}.white-ic:hover,.white-ic:focus{color:#fff}a.btn:not([href]):not([tabindex]),a.btn:not([href]):not([tabindex]):focus,a.btn:not([href]):not([tabindex]):hover{color:#000}table.table a.btn.btn-white{color:#000}.btn-outline-white{border:2px solid #fff!important;background-color:transparent!important;color:#fff!important}.btn-outline-white:hover,.btn-outline-white:focus,.btn-outline-white:active,.btn-outline-white:active:focus,.btn-outline-white.active{border-color:#fff!important;background-color:transparent!important;color:#fff!important}.btn-outline-white:not([disabled]):not(.disabled):active,.btn-outline-white:not([disabled]):not(.disabled).active,.show>.btn-outline-white.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#fff!important}.btn-outline-white:not([disabled]):not(.disabled):active:focus,.btn-outline-white:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-white.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-black{background-color:#000!important;color:#fff}.btn-black:hover{background-color:#0d0d0d;color:#fff}.btn-black:focus,.btn-black.focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-black:focus,.btn-black:active,.btn-black.active{background-color:#000}.btn-black.dropdown-toggle{background-color:#000!important}.btn-black.dropdown-toggle:hover,.btn-black.dropdown-toggle:focus{background-color:#0d0d0d!important}.btn-black:not([disabled]):not(.disabled):active,.btn-black:not([disabled]):not(.disabled).active,.show>.btn-black.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:#000!important}.btn-black:not([disabled]):not(.disabled):active:focus,.btn-black:not([disabled]):not(.disabled).active:focus,.show>.btn-black.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.black-ic{color:#000!important}.black-ic:hover,.black-ic:focus{color:#000}a.btn:not([href]):not([tabindex]),a.btn:not([href]):not([tabindex]):focus,a.btn:not([href]):not([tabindex]):hover{color:#fff}table.table a.btn.btn-black{color:#fff}.btn-outline-black{border:2px solid #000!important;background-color:transparent!important;color:#000!important}.btn-outline-black:hover,.btn-outline-black:focus,.btn-outline-black:active,.btn-outline-black:active:focus,.btn-outline-black.active{border-color:#000!important;background-color:transparent!important;color:#000!important}.btn-outline-black:not([disabled]):not(.disabled):active,.btn-outline-black:not([disabled]):not(.disabled).active,.show>.btn-outline-black.dropdown-toggle{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;background-color:transparent!important;border-color:#000!important}.btn-outline-black:not([disabled]):not(.disabled):active:focus,.btn-outline-black:not([disabled]):not(.disabled).active:focus,.show>.btn-outline-black.dropdown-toggle:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#fff}.btn.purple-gradient{transition:.5s ease;color:#fff}.btn.purple-gradient:hover,.btn.purple-gradient:focus,.btn.purple-gradient:active,.btn.purple-gradient:active:focus .btn.purple-gradient.active{background:linear-gradient(#ff88ce,#8f8bf7)}.btn.peach-gradient{transition:.5s ease;color:#fff}.btn.peach-gradient:hover,.btn.peach-gradient:focus,.btn.peach-gradient:active,.btn.peach-gradient:active:focus .btn.peach-gradient.active{background:linear-gradient(#ffdf89,#fc7b7b)}.btn.aqua-gradient{transition:.5s ease;color:#fff}.btn.aqua-gradient:hover,.btn.aqua-gradient:focus,.btn.aqua-gradient:active,.btn.aqua-gradient:active:focus .btn.aqua-gradient.active{background:linear-gradient(#3aa2ff,#1fffac)}.btn.blue-gradient{transition:.5s ease;color:#fff}.btn.blue-gradient:hover,.btn.blue-gradient:focus,.btn.blue-gradient:active,.btn.blue-gradient:active:focus .btn.blue-gradient.active{background:linear-gradient(#5ed1fc,#3647b3)}.btn mdb-icon{position:relative;font-size:.9rem}.btn mdb-icon.right{margin-left:.3rem}.btn mdb-icon.left{margin-right:.3rem}.btn.btn-lg{padding:1rem 2.4rem;font-size:.94rem}.btn.btn-lg mdb-icon{font-size:1rem}.btn.btn-md{padding:.7rem 1.6rem;font-size:.7rem}.btn.btn-md mdb-icon{font-size:.8rem}.btn.btn-sm{padding:.5rem 1.6rem;font-size:.64rem}.btn.btn-sm mdb-icon{font-size:.7rem}\n"], encapsulation: 2 }), t })(); const j = { provide: V.JU, useExisting: (0, n.Gpc)(() => Q), multi: !0 }; let Q = (() => { class t { constructor() { this.btnCheckboxTrue = !0, this.btnCheckboxFalse = !1, this.state = !1, this.onChange = Function.prototype, this.onTouched = Function.prototype }
                    onClick() { this.isDisabled || (this.toggle(!this.state), this.onChange(this.value)) }
                    ngOnInit() { this.toggle(this.trueValue === this.value) }
                    get trueValue() { return void 0 === this.btnCheckboxTrue || this.btnCheckboxTrue }
                    get falseValue() { return void 0 !== this.btnCheckboxFalse && this.btnCheckboxFalse }
                    toggle(e) { this.state = e, this.value = this.state ? this.trueValue : this.falseValue }
                    writeValue(e) { this.state = this.trueValue === e, this.value = e ? this.trueValue : this.falseValue }
                    setDisabledState(e) { this.isDisabled = e }
                    registerOnChange(e) { this.onChange = e }
                    registerOnTouched(e) { this.onTouched = e } } return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275dir = n.lG2({ type: t, selectors: [
                        ["", "mdbCheckbox", ""]
                    ], hostVars: 2, hostBindings: function(e, i) { 1 & e && n.NdJ("click", function() { return i.onClick() }), 2 & e && n.ekj("active", i.state) }, inputs: { btnCheckboxTrue: "btnCheckboxTrue", btnCheckboxFalse: "btnCheckboxFalse" }, features: [n._Bn([j])] }), t })(); const ye = { provide: V.JU, useExisting: (0, n.Gpc)(() => Xe), multi: !0 }; let Xe = (() => { class t { constructor(e, i) { this.el = e, this.renderer = i, this.onChange = Function.prototype, this.onTouched = Function.prototype, this.radioElementsArray = [], this._uncheckable = !1, this.disabled = !1 }
                        get uncheckable() { return this._uncheckable }
                        set uncheckable(e) { this._uncheckable = (0, s.Ig)(e) }
                        get isActive() { return this.mdbRadio === this.value }
                        onClick(e) { if (!this.disabled) { try { this.el.nativeElement.parentElement.childNodes.forEach(i => { this.radioElementsArray.push(i) }), this.radioElementsArray.forEach(i => { this.renderer.removeClass(i, "active") }), this.renderer.addClass(e.target, "active") } catch (i) {}
                                this.el.nativeElement.attributes.disabled || (this.value = this.uncheckable && this.mdbRadio === this.value ? void 0 : this.mdbRadio, this.onTouched(), this.onChange(this.value)) } }
                        ngOnInit() { this.uncheckable = void 0 !== this.uncheckable }
                        onBlur() { this.onTouched() }
                        writeValue(e) { this.value = e }
                        registerOnChange(e) { this.onChange = e }
                        registerOnTouched(e) { this.onTouched = e } } return t.\u0275fac = function(e) { return new(e || t)(n.Y36(n.SBq), n.Y36(n.Qsj)) }, t.\u0275dir = n.lG2({ type: t, selectors: [
                            ["", "mdbRadio", ""]
                        ], hostVars: 4, hostBindings: function(e, i) { 1 & e && n.NdJ("click", function(g) { return i.onClick(g) }), 2 & e && n.ekj("disabled", i.disabled)("active", i.isActive) }, inputs: { mdbRadio: "mdbRadio", uncheckable: "uncheckable", value: "value", disabled: "disabled" }, features: [n._Bn([ye])] }), t })(),
                ze = (() => { class t { static forRoot() { return { ngModule: t, providers: [] } } } return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275mod = n.oAB({ type: t }), t.\u0275inj = n.cJS({}), t })(); var A = "undefined" != typeof window && window || {}; let mt = (() => { class t { constructor(e) { this.animated = !1, this.directionNext = !1, this.directionLeft = !1, this.directionPrev = !1, this.directionRight = !1, this.el = null, this.el = e } } return t.\u0275fac = function(e) { return new(e || t)(n.Y36(n.SBq)) }, t.\u0275cmp = n.Xpm({ type: t, selectors: [
                            ["mdb-slide"],
                            ["mdb-carousel-item"]
                        ], hostVars: 14, hostBindings: function(e, i) { 2 & e && n.ekj("active", i.active)("animated", i.animated)("carousel-item-next", i.directionNext)("carousel-item-left", i.directionLeft)("carousel-item-prev", i.directionPrev)("carousel-item-right", i.directionRight)("carousel-item", i.el) }, inputs: { active: "active" }, ngContentSelectors: se, decls: 1, vars: 0, template: function(e, i) { 1 & e && (n.F$t(), n.Hsn(0)) }, encapsulation: 2 }), t })(),
                io = (() => { class t { constructor() { this.interval = 5e3, this.noPause = !1, this.noWrap = !1, this.keyboard = !1 } } return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = n.Yz7({ token: t, factory: t.\u0275fac }), t })(); var pe = (() => { return (t = pe || (pe = {}))[t.UNKNOWN = 0] = "UNKNOWN", t[t.NEXT = 1] = "NEXT", t[t.PREV = 2] = "PREV", pe; var t })(); let To = (() => { class t { constructor(e, i, r, g, w) { this.el = i, this.cdRef = g, this.renderer = w, this.SWIPE_ACTION = { LEFT: "swipeleft", RIGHT: "swiperight" }, this._destroy$ = new $.x, this.destroyed = !1, this.animationEnd = !0, this.isBrowser = !1, this._noWrap = !1, this._noPause = !1, this._isControls = !0, this._keyboard = !1, this.class = "", this.type = "", this.animation = "", this._allowSwipe = !0, this.activeSlideChange = new n.vpe(!1), this.isBrowser = (0, c.NF)(r), Object.assign(this, e) }
                        get slides() { return this._slidesList.toArray() }
                        get noWrap() { return this._noWrap }
                        set noWrap(e) { this._noWrap = (0, s.Ig)(e) }
                        get noPause() { return this._noPause }
                        set noPause(e) { this._noPause = (0, s.Ig)(e) }
                        get isControls() { return this._isControls }
                        set isControls(e) { this._isControls = (0, s.Ig)(e) }
                        get keyboard() { return this._keyboard }
                        set keyboard(e) { this._keyboard = (0, s.Ig)(e) }
                        get activeSlideIndex() { return this._activeSlideIndex }
                        set activeSlideIndex(e) { this._activeSlideIndex = (0, s.su)(e) }
                        get allowSwipe() { return this._allowSwipe }
                        set allowSwipe(e) { this._allowSwipe = (0, s.Ig)(e) }
                        set activeSlide(e) { const i = (0, s.su)(e);
                            this._slidesList && i !== this._currentActiveSlide && this._select(i) }
                        get activeSlide() { return this._currentActiveSlide }
                        checkNavigation() { return "carousel-multi-item" !== this.type }
                        checkDots() { return "carousel-thumbnails" !== this.type }
                        getImg(e) { return e.el.nativeElement.querySelector("img").src }
                        get interval() { return this._interval }
                        set interval(e) { this._interval = (0, s.su)(e), this.restartTimer() }
                        get isBs4() { return ! function De() { return "bs4" === A.__theme }() }
                        ngOnDestroy() { this.destroyed = !0, this._destroy$.next(), this._destroy$.complete() }
                        ngAfterViewInit() { this.play(), this._slidesList.changes.pipe((0, be.R)(this._destroy$)).subscribe(e => { this._slidesList = e, setTimeout(() => { this._select(0) }, 0) }), this.activeSlideIndex ? setTimeout(() => { this._select(this.activeSlideIndex), this.activeSlideChange.emit({ relatedTarget: this.activeSlide }) }, 0) : setTimeout(() => { this._select(0) }, 0), this.isControls && (this.carouselIndicators = this.el.nativeElement.querySelectorAll(".carousel-indicators > li"), this.carouselIndicators.length && this.activeSlideIndex ? this.renderer.addClass(this.carouselIndicators[this.activeSlideIndex], "active") : this.carouselIndicators.length && this.renderer.addClass(this.carouselIndicators[0], "active")) }
                        swipe(e = this.SWIPE_ACTION.RIGHT) { this.allowSwipe && (e === this.SWIPE_ACTION.RIGHT && (this.previousSlide(), this.cdRef.markForCheck()), e === this.SWIPE_ACTION.LEFT && (this.nextSlide(), this.cdRef.markForCheck())) }
                        nextSlide(e = !1) { this.restartTimer(); const i = this.el.nativeElement.getElementsByTagName("video"),
                                g = this.findNextSlideIndex(pe.NEXT, e); if (i.length > 0)
                                for (let w = 0; w < i.length; w++) w === g ? i[w].play() : i[w].pause(); "slide" === this.animation ? (this.pause(), this.slideAnimation(this.findNextSlideIndex(pe.NEXT, e), pe.NEXT), this.cdRef.markForCheck()) : "fade" === this.animation ? (this.pause(), this.fadeAnimation(this.findNextSlideIndex(pe.NEXT, e), pe.NEXT), this.cdRef.markForCheck()) : (this.activeSlide = this.findNextSlideIndex(pe.NEXT, e), this.cdRef.markForCheck()), this.animation || this.activeSlideChange.emit({ direction: "Next", relatedTarget: this.activeSlide }) }
                        previousSlide(e = !1) { this.restartTimer(); const i = this.el.nativeElement.getElementsByTagName("video"),
                                r = pe.PREV,
                                g = this.findNextSlideIndex(r, e); if (i.length > 0)
                                for (let w = 0; w < i.length; w++) w === g ? i[w].play() : i[w].pause(); "slide" === this.animation ? (this.pause(), this.slideAnimation(this.findNextSlideIndex(r, e), r), this.cdRef.markForCheck()) : "fade" === this.animation ? (this.pause(), this.fadeAnimation(this.findNextSlideIndex(pe.PREV, e), pe.PREV), this.cdRef.markForCheck()) : (this.activeSlide = this.findNextSlideIndex(pe.PREV, e), this.cdRef.markForCheck()), this.animation || this.activeSlideChange.emit({ direction: "Prev", relatedTarget: this.activeSlide }) }
                        fadeAnimation(e, i) { const r = this.slides[e];
                            this.animationEnd && (this.animationEnd = !1, r.directionNext = !0, this.isBrowser && setTimeout(() => { const g = this.slides[this._currentActiveSlide].el.nativeElement;
                                this.renderer.setStyle(g, "display", "none"), this.renderer.setStyle(g, "transition", "all 600ms"), this.renderer.setStyle(r.el.nativeElement, "display", "block"), this.renderer.setStyle(r.el.nativeElement, "transition", "all 600ms"), r.directionNext = !1, this.animationEnd = !0, this.activeSlide = e, this.activeSlideChange.emit(1 === i ? { direction: "Next", relatedTarget: this.activeSlide } : 2 === i ? { direction: "Prev", relatedTarget: this.activeSlide } : { direction: e < this.activeSlide ? "Prev" : "Next", relatedTarget: this.activeSlide }), this.play(), this.cdRef.markForCheck() }, 0)) }
                        slideAnimation(e, i) { const r = this.slides[this._currentActiveSlide],
                                g = this.slides[e];
                            this.animationEnd && (i === pe.NEXT && (this.animationEnd = !1, g.directionNext = !0, this.isBrowser && setTimeout(() => { g.directionLeft = !0, r.directionLeft = !0, this.cdRef.markForCheck() }, 100)), i === pe.PREV && (this.animationEnd = !1, g.directionPrev = !0, this.isBrowser && setTimeout(() => { g.directionRight = !0, r.directionRight = !0, this.cdRef.markForCheck() }, 100)), this.isBrowser && setTimeout(() => { let w;
                                g.directionLeft = !1, g.directionNext = !1, r.directionLeft = !1, r.directionNext = !1, g.directionRight = !1, g.directionPrev = !1, r.directionRight = !1, r.directionPrev = !1, this.animationEnd = !0, this.activeSlide = e, i === pe.NEXT ? w = "Next" : i === pe.PREV && (w = "Prev"), this.activeSlideChange.emit({ direction: w, relatedTarget: this.activeSlide }), this.play(), this.cdRef.markForCheck() }, 700)) }
                        selectSlide(e) { this.pause(), "slide" === this.animation ? this.activeSlide < e ? this.slideAnimation(e, pe.NEXT) : this.activeSlide > e && this.slideAnimation(e, pe.PREV) : "fade" === this.animation ? e !== this.activeSlide && this.fadeAnimation(e) : this.animation || setTimeout(() => { const i = e < this.activeSlide ? "Prev" : "Next";
                                this._select(e), this.activeSlideChange.emit({ direction: i, relatedTarget: this.activeSlide }) }, 0), this.play() }
                        play() { this.isPlaying || (this.isPlaying = !0, this.restartTimer(), this.cdRef.markForCheck()) }
                        pause() { this.noPause || (this.isPlaying = !1, this.resetTimer(), this.cdRef.markForCheck()) }
                        getCurrentSlideIndex() { return this.slides.findIndex(e => e.active) }
                        isLast(e) { return e + 1 >= this.slides.length }
                        findNextSlideIndex(e, i) { let r = 0; if (i || !this.isLast(this.activeSlide) || e === pe.PREV || !this.noWrap) { switch (e) {
                                    case pe.NEXT:
                                        r = this.isLast(this._currentActiveSlide) ? !i && this.noWrap ? this._currentActiveSlide : 0 : this._currentActiveSlide + 1; break;
                                    case pe.PREV:
                                        r = this._currentActiveSlide > 0 ? this._currentActiveSlide - 1 : !i && this.noWrap ? this._currentActiveSlide : this.slides.length - 1; break;
                                    default:
                                        throw new Error("Unknown direction") } return r } }
                        _select(e) { if (isNaN(e)) return void this.pause(); const i = this.slides[this._currentActiveSlide];
                            i && (i.active = !1); const r = this.slides[e];
                            r && (this._currentActiveSlide = e, r.active = !0, this.activeSlide = e), this.cdRef.markForCheck() }
                        restartTimer() { if (this.resetTimer(), this.isBrowser) { const e = +this.interval;!isNaN(e) && e > 0 && (this.currentInterval = setInterval(() => { const i = +this.interval;
                                    this.isPlaying && !isNaN(this.interval) && i > 0 && this.slides.length ? this.nextSlide() : this.pause() }, e)) } }
                        resetTimer() { this.isBrowser && this.currentInterval && (clearInterval(this.currentInterval), this.currentInterval = void 0) }
                        hasClass(e, i) { return e.classList ? e.classList.contains(i) : !!e.className.match(new RegExp("(\\s|^)" + i + "(\\s|$)")) }
                        classAdd(e, i) { e.classList ? e.classList.add(i) : this.hasClass(e, i) || (e.className += " " + i) }
                        removeClass(e, i) { if (e.classList) e.classList.remove(i);
                            else if (this.hasClass(e, i)) { const r = new RegExp("(\\s|^)" + i + "(\\s|$)");
                                e.className = e.className.replace(r, " ") } }
                        keyboardControl(e) { this.keyboard && (39 === e.keyCode && this.nextSlide(), 37 === e.keyCode && this.previousSlide()) }
                        focus() { this.el.nativeElement.focus() } } return t.\u0275fac = function(e) { return new(e || t)(n.Y36(io), n.Y36(n.SBq), n.Y36(n.Lbi), n.Y36(n.sBO), n.Y36(n.Qsj)) }, t.\u0275cmp = n.Xpm({ type: t, selectors: [
                            ["mdb-carousel"]
                        ], contentQueries: function(e, i, r) { if (1 & e && n.Suo(r, mt, 4), 2 & e) { let g;
                                n.iGM(g = n.CRH()) && (i._slidesList = g) } }, hostBindings: function(e, i) { 1 & e && n.NdJ("mouseleave", function() { return i.play() })("mouseenter", function() { return i.pause() })("keyup", function(g) { return i.keyboardControl(g) })("click", function() { return i.focus() }) }, inputs: { noWrap: "noWrap", noPause: "noPause", isControls: "isControls", keyboard: "keyboard", class: "class", type: "type", animation: "animation", activeSlideIndex: "activeSlideIndex", allowSwipe: "allowSwipe", activeSlide: "activeSlide", interval: "interval" }, outputs: { activeSlideChange: "activeSlideChange" }, ngContentSelectors: se, decls: 8, vars: 9, consts: [
                            ["tabindex", "0", 3, "swipeleft", "swiperight", "mouseenter", "mouseleave", "mouseup"],
                            ["class", "controls-top", 4, "ngIf"],
                            ["class", "carousel-indicators", 4, "ngIf"],
                            [1, "carousel-inner"],
                            ["class", "carousel-control-prev", 3, "disabled", "click", 4, "ngIf"],
                            ["class", "carousel-control-next", 3, "disabled", "click", 4, "ngIf"],
                            [1, "controls-top"],
                            ["mdbBtn", "", "floating", "true", 3, "click"],
                            [1, "fas", "fa-chevron-left"],
                            [1, "fas", "fa-chevron-right"],
                            [1, "carousel-indicators"],
                            [3, "active", "click", 4, "ngFor", "ngForOf"],
                            [3, "click"],
                            [1, "d-block", "w-100", "img-fluid", 3, "src"],
                            [1, "carousel-control-prev", 3, "click"],
                            ["aria-hidden", "true", 1, "carousel-control-prev-icon"],
                            [1, "sr-only"],
                            [1, "carousel-control-next", 3, "click"],
                            ["aria-hidden", "true", 1, "carousel-control-next-icon"]
                        ], template: function(e, i) { 1 & e && (n.F$t(), n.TgZ(0, "div", 0), n.NdJ("swipeleft", function(g) { return i.swipe(g.type) })("swiperight", function(g) { return i.swipe(g.type) })("mouseenter", function() { return i.pause() })("mouseleave", function() { return i.play() })("mouseup", function() { return i.play() }), n.YNc(1, Oe, 5, 4, "div", 1), n.YNc(2, Le, 2, 1, "ol", 2), n.TgZ(3, "div", 3), n.Hsn(4), n.qZA(), n.YNc(5, Ge, 2, 1, "ol", 2), n.YNc(6, Ie, 4, 2, "a", 4), n.YNc(7, Be, 4, 2, "a", 5), n.qZA()), 2 & e && (n.MT6("carousel ", i.class, " ", i.type, ""), n.xp6(1), n.Q6J("ngIf", i.slides.length > 1 && !i.checkNavigation() && i.isControls), n.xp6(1), n.Q6J("ngIf", i.slides.length > 1 && i.checkDots() && i.isControls), n.xp6(3), n.Q6J("ngIf", i.slides.length > 1 && !i.checkDots() && i.isControls), n.xp6(1), n.Q6J("ngIf", i.slides.length > 1 && i.checkNavigation() && i.isControls), n.xp6(1), n.Q6J("ngIf", i.slides.length > 1 && i.checkNavigation() && i.isControls)) }, directives: [S, c.O5, c.sg], styles: [".carousel .carousel-control-prev-icon,.carousel .carousel-control-next-icon{width:2.25rem;height:2.25rem}.carousel .carousel-indicators li{width:.625rem;height:.625rem;border-radius:50%;cursor:pointer}.carousel-fade .carousel-item{opacity:0;transition-duration:.6s;transition-property:opacity}.carousel-fade .carousel-item.active,.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right{opacity:1}.carousel-fade .carousel-item-left.active,.carousel-fade .carousel-item-right.active{opacity:0}.carousel-fade .carousel-item-next,.carousel-fade .carousel-item-prev,.carousel-fade .carousel-item.active,.carousel-fade .carousel-item-left.active,.carousel-fade .carousel-item-prev.active{transform:translate(0)}@supports (transform-style: preserve-3d){.carousel-fade .carousel-item-next,.carousel-fade .carousel-item-prev,.carousel-fade .carousel-item.active,.carousel-fade .carousel-item-left.active,.carousel-fade .carousel-item-prev.active{transform:translateZ(0)}}.carousel-item.active,.carousel-item-next,.carousel-item-prev,.carousel-control-prev,.carousel-control-next{display:flex;overflow:hidden}.carousel,.carousel-multi-item,.carousel-thumbnails{outline:none}.carousel-fade .carousel-inner .carousel-item{opacity:0;transition-property:opacity}.carousel-fade .carousel-inner .active{opacity:1;transition:all .6s}.carousel-fade .carousel-inner>.carousel-item.active,.carousel-fade .carousel-inner>.carousel-item.next.left,.carousel-fade .carousel-inner>.carousel-item.prev.right{opacity:1;transition:all .6s;transform:translateZ(0)}\n"], encapsulation: 2, changeDetection: 0 }), t })(),
                no = (() => { class t { static forRoot() { return { ngModule: t, providers: [] } } } return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275mod = n.oAB({ type: t }), t.\u0275inj = n.cJS({ providers: [io], imports: [
                            [c.ez, ze]
                        ] }), t })(); const Vo = { provide: V.JU, useExisting: (0, n.Gpc)(() => Yo), multi: !0 }; let Wo = 0;
            class $o {} let Yo = (() => { class t { constructor(e) { this._cdRef = e, this.defaultId = "mdb-checkbox-" + ++Wo, this.checkboxId = this.defaultId, this._required = !1, this._checked = !1, this._filledIn = !1, this._indeterminate = !1, this._disabled = !1, this._rounded = !1, this.checkboxPosition = "left", this._default = !1, this._inline = !1, this.change = new n.vpe, this.checkboxClicked = new $.x, this.onChange = i => {}, this.onTouched = () => {} }
                    get required() { return this._required }
                    set required(e) { this._required = (0, s.Ig)(e) }
                    get checked() { return this._checked }
                    set checked(e) { this._checked = (0, s.Ig)(e) }
                    get filledIn() { return this._filledIn }
                    set filledIn(e) { this._filledIn = (0, s.Ig)(e) }
                    get indeterminate() { return this._indeterminate }
                    set indeterminate(e) { this._indeterminate = (0, s.Ig)(e) }
                    get disabled() { return this._disabled }
                    set disabled(e) { this._disabled = (0, s.Ig)(e) }
                    get rounded() { return this._rounded }
                    set rounded(e) { this._rounded = (0, s.Ig)(e) }
                    get default() { return this._default }
                    set default(e) { this._default = (0, s.Ig)(e) }
                    get inline() { return this._inline }
                    set inline(e) { this._inline = (0, s.Ig)(e) }
                    get tabIndex() { return this._tabIndex }
                    set tabIndex(e) { this._tabIndex = (0, s.su)(e) }
                    onLabelClick(e) { e.stopPropagation(), this.checkboxClicked.next(!0) }
                    onDocumentClick() { this.checkboxClicked.next(!1) }
                    ngOnInit() { this.indeterminate && !this.filledIn && !this.rounded && (this.inputEl.indeterminate = !0) }
                    ngOnChanges(e) { e.hasOwnProperty("checked") && (this.checked = e.checked.currentValue) }
                    get changeEvent() { const e = new $o; return e.element = this, e.checked = this.checked, e }
                    toggle() { this.disabled || (this.checked = !this.checked, this.indeterminate = !1, this.onChange(this.checked), this._cdRef.markForCheck()) }
                    onCheckboxClick(e) { e.stopPropagation(), this.toggle() }
                    onCheckboxChange(e) { e.stopPropagation(), (0, re.H)(0).subscribe(() => this.change.emit(this.changeEvent)) }
                    onBlur() { this.checkboxClicked.pipe((0, ee.q)(1)).subscribe(e => { e || this.onTouched() }) }
                    writeValue(e) { this.value = e, this.checked = !!e, this._cdRef.markForCheck() }
                    registerOnChange(e) { this.onChange = e }
                    registerOnTouched(e) { this.onTouched = e }
                    setDisabledState(e) { this.disabled = e } } return t.\u0275fac = function(e) { return new(e || t)(n.Y36(n.sBO)) }, t.\u0275cmp = n.Xpm({ type: t, selectors: [
                        ["mdb-checkbox"]
                    ], viewQuery: function(e, i) { if (1 & e && n.Gf(Ve, 7), 2 & e) { let r;
                            n.iGM(r = n.CRH()) && (i.inputEl = r.first) } }, hostBindings: function(e, i) { 1 & e && n.NdJ("click", function(g) { return i.onLabelClick(g) })("click", function() { return i.onDocumentClick() }, !1, n.evT) }, inputs: { class: "class", checkboxId: "checkboxId", required: "required", name: "name", value: "value", checked: "checked", filledIn: "filledIn", indeterminate: "indeterminate", disabled: "disabled", rounded: "rounded", checkboxPosition: "checkboxPosition", default: "default", inline: "inline", tabIndex: "tabIndex" }, outputs: { change: "change" }, features: [n._Bn([Vo]), n.TTD], ngContentSelectors: se, decls: 5, vars: 27, consts: [
                        [3, "ngClass"],
                        ["type", "checkbox", 1, "custom-control-input", 3, "ngClass", "id", "checked", "disabled", "required", "indeterminate", "tabIndex", "blur", "click", "change"],
                        ["input", ""]
                    ], template: function(e, i) { 1 & e && (n.F$t(), n.TgZ(0, "div", 0)(1, "input", 1, 2), n.NdJ("blur", function() { return i.onBlur() })("click", function(g) { return i.onCheckboxClick(g) })("change", function(g) { return i.onCheckboxChange(g) }), n.qZA(), n.TgZ(3, "label", 0), n.Hsn(4), n.qZA()()), 2 & e && (n.Q6J("ngClass", n.l5B(12, Ae, i.default, !i.default, i.inline, i.inline && !i.default)), n.xp6(1), n.Q6J("ngClass", n.kEZ(17, Ce, i.filledIn || i.rounded, i.default, !i.default))("id", i.checkboxId)("checked", i.checked)("disabled", i.disabled)("required", i.required)("indeterminate", i.indeterminate)("tabIndex", i.tabIndex), n.uIk("name", i.name)("value", i.value), n.xp6(2), n.Q6J("ngClass", n.qbA(21, q, i.default, !i.default, "right" === i.checkboxPosition, i.rounded, i.disabled)), n.uIk("for", i.checkboxId)) }, directives: [c.mk], encapsulation: 2, changeDetection: 0 }), t })();

            function ut(t, o) { if (1 !== t.nodeType) return []; const i = t.ownerDocument.defaultView.getComputedStyle(t, null); return o ? i[o] : i }

            function zt(t) { return "HTML" === t.nodeName ? t : t.parentNode || t.host }

            function Ut(t) { if (!t) return document.body; switch (t.nodeName) {
                    case "HTML":
                    case "BODY":
                        return t.ownerDocument.body;
                    case "#document":
                        return t.body } const { overflow: o, overflowX: e, overflowY: i } = ut(t); return /(auto|scroll|overlay)/.test(String(o) + String(i) + String(e)) ? t : Ut(zt(t)) } "undefined" != typeof window && window, "undefined" == typeof console || console; const uo = "undefined" != typeof window && "undefined" != typeof document,
                go = uo && !(!window.MSInputMethodContext || !document.documentMode),
                fo = uo && !(!window.MSInputMethodContext || !/MSIE 10/.test(navigator.userAgent));

            function ft(t) { return 11 === t ? go : 10 === t ? fo : go || fo }

            function Kt(t) { if (!t) return document.documentElement; const o = ft(10) ? document.body : null; let i, e = t.offsetParent || null; for (; e === o && t.nextElementSibling && "BODY" !== t.nodeName;) i = t.nextElementSibling, e = i.offsetParent; const r = e && e.nodeName; return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(e.nodeName) && "static" === ut(e, "position") ? Kt(e) : e : i ? i.ownerDocument.documentElement : document.documentElement }

            function Qt(t) { return null !== t.parentNode ? Qt(t.parentNode) : t }

            function Et(t, o) { if (!(t && t.nodeType && o && o.nodeType)) return document.documentElement; const e = t.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING,
                    i = e ? t : o,
                    r = e ? o : t,
                    g = document.createRange();
                g.setStart(i, 0), g.setEnd(r, 0); const { commonAncestorContainer: w } = g; if (t !== w && o !== w || i.contains(r)) return function ii(t) { const { nodeName: o } = t; return "BODY" !== o && ("HTML" === o || Kt(t.firstElementChild) === t) }(w) ? w : Kt(w); const F = Qt(t); return F.host ? Et(F.host, o) : Et(t, Qt(o).host) }

            function ho(t, o) { const e = "x" === o ? "Left" : "Top",
                    i = "Left" === e ? "Right" : "Bottom"; return parseFloat(t[`border${e}Width`]) + parseFloat(t[`border${i}Width`]) }

            function mo(t, o, e, i) { return Math.max(o[`offset${t}`], o[`scroll${t}`], e[`client${t}`], e[`offset${t}`], e[`scroll${t}`], ft(10) ? parseInt(e[`offset${t}`], 10) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")], 10) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")], 10) : 0) }

            function po(t) { const o = t.body,
                    e = t.documentElement,
                    i = ft(10) && getComputedStyle(e); return { height: mo("Height", o, e, i), width: mo("Width", o, e, i) } }

            function ht(t, o = "top") { const e = "top" === o ? "scrollTop" : "scrollLeft",
                    i = t.nodeName; if ("BODY" === i || "HTML" === i) { const r = t.ownerDocument.documentElement; return (t.ownerDocument.scrollingElement || r)[e] } return t[e] }

            function yt(t) { return Object.assign(Object.assign({}, t), { right: t.left + t.width, bottom: t.top + t.height }) }

            function bo(t) { let o = {}; try { if (ft(10)) { o = t.getBoundingClientRect(); const L = ht(t, "top"),
                            oe = ht(t, "left");
                        o.top += L, o.left += oe, o.bottom += L, o.right += oe } else o = t.getBoundingClientRect() } catch (L) { return } const e = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top },
                    i = "HTML" === t.nodeName ? po(t.ownerDocument) : {}; let w = t.offsetWidth - (i.width || t.clientWidth || e.right - e.left),
                    F = t.offsetHeight - (i.height || t.clientHeight || e.bottom - e.top); if (w || F) { const L = ut(t);
                    w -= ho(L, "x"), F -= ho(L, "y"), e.width -= w, e.height -= F } return yt(e) }

            function qt(t, o, e = !1) { const i = ft(10),
                    r = "HTML" === o.nodeName,
                    g = bo(t),
                    w = bo(o),
                    F = Ut(t),
                    L = ut(o),
                    oe = parseFloat(L.borderTopWidth),
                    J = parseFloat(L.borderLeftWidth);
                e && r && (w.top = Math.max(w.top, 0), w.left = Math.max(w.left, 0)); let ae = yt({ top: g.top - w.top - oe, left: g.left - w.left - J, width: g.width, height: g.height }); if (ae.marginTop = 0, ae.marginLeft = 0, !i && r) { const je = parseFloat(L.marginTop),
                        Se = parseFloat(L.marginLeft);
                    ae.top -= oe - je, ae.bottom -= oe - je, ae.left -= J - Se, ae.right -= J - Se, ae.marginTop = je, ae.marginLeft = Se } return (i && !e ? o.contains(F) : o === F && "BODY" !== F.nodeName) && (ae = function ni(t, o, e = !1) { const i = ht(o, "top"),
                        r = ht(o, "left"),
                        g = e ? -1 : 1; return t.top += i * g, t.bottom += i * g, t.left += r * g, t.right += r * g, t }(ae, o)), ae }

            function vo(t) { const o = t.nodeName; return "BODY" !== o && "HTML" !== o && ("fixed" === ut(t, "position") || vo(zt(t))) }

            function xo(t) { if (!t || !t.parentElement || ft()) return document.documentElement; let o = t.parentElement; for (; o && "none" === ut(o, "transform");) o = o.parentElement; return o || document.documentElement }

            function Zt(t, o, e = 0, i, r = !1) { let g = { top: 0, left: 0 }; const w = r ? xo(t) : Et(t, o); if ("viewport" === i) g = function ai(t, o = !1) { const e = t.ownerDocument.documentElement,
                        i = qt(t, e),
                        r = Math.max(e.clientWidth, window.innerWidth || 0),
                        g = Math.max(e.clientHeight, window.innerHeight || 0),
                        w = o ? 0 : ht(e),
                        F = o ? 0 : ht(e, "left"); return yt({ top: w - Number(i.top) + Number(i.marginTop), left: F - Number(i.left) + Number(i.marginLeft), width: r, height: g }) }(w, r);
                else { let F; "scrollParent" === i ? (F = Ut(zt(o)), "BODY" === F.nodeName && (F = t.ownerDocument.documentElement)) : F = "window" === i ? t.ownerDocument.documentElement : i; const L = qt(F, w, r); if ("HTML" !== F.nodeName || vo(w)) g = L;
                    else { const { height: oe, width: J } = po(t.ownerDocument);
                        g.top += L.top - L.marginTop, g.bottom = Number(oe) + Number(L.top), g.left += L.left - L.marginLeft, g.right = Number(J) + Number(L.left) } } return g.left += e, g.top += e, g.right -= e, g.bottom -= e, g }

            function ri({ width: t, height: o }) { return t * o }

            function Xt(t, o, e, i, r = ["top", "left", "bottom", "right"], g = "viewport", w = 0) { if (-1 === t.indexOf("auto")) return t; const F = Zt(e, i, w, g),
                    L = { top: { width: F.width, height: o.top - F.top }, right: { width: F.right - o.right, height: F.height }, bottom: { width: F.width, height: F.bottom - o.bottom }, left: { width: o.left - F.left, height: F.height } },
                    oe = Object.keys(L).map(Se => Object.assign(Object.assign({ key: Se }, L[Se]), { area: ri(L[Se]) })).sort((Se, Ye) => Ye.area - Se.area); let J = oe.filter(({ width: Se, height: Ye }) => Se >= e.clientWidth && Ye >= e.clientHeight);
                J = r.reduce((Se, Ye) => Object.assign(Object.assign({}, Se), {
                    [Ye]: J[Ye] }), {}); const ae = J.length > 0 ? J[0].key : oe[0].key,
                    je = t.split(" ")[1]; return e.className = e.className.replace(/auto/g, ae), ae + (je ? `-${je}` : "") }

            function yo(t) { const e = t.ownerDocument.defaultView.getComputedStyle(t),
                    i = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
                    r = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0); return { width: Number(t.offsetWidth) + r, height: Number(t.offsetHeight) + i } }

            function wo(t, o, e = null) { return qt(o, e ? xo(t) : Et(t, o), e) }

            function Jt(t, o, e) { const i = e.split(" ")[0],
                    r = yo(t),
                    g = { width: r.width, height: r.height },
                    w = -1 !== ["right", "left"].indexOf(i),
                    F = w ? "top" : "left",
                    L = w ? "left" : "top",
                    oe = w ? "height" : "width",
                    J = w ? "width" : "height"; return g[F] = o[F] + o[oe] / 2 - r[oe] / 2, g[L] = i === L ? o[L] - r[J] : o[function li(t) { const o = { left: "right", right: "left", bottom: "top", top: "bottom" }; return t.replace(/left|right|bottom|top/g, e => o[e]) }(L)], g }

            function _o(t, o) { return t && t.modifiers && t.modifiers[o] && t.modifiers[o].enabled }

            function gi(t) { let o = t.offsets.target; const e = t.instance.target.querySelector(".arrow"); if (!e) return t; const i = -1 !== ["left", "right"].indexOf(t.placement),
                    r = i ? "height" : "width",
                    g = i ? "Top" : "Left",
                    w = g.toLowerCase(),
                    F = i ? "left" : "top",
                    L = i ? "bottom" : "right",
                    oe = yo(e)[r];
                t.offsets.host[L] - oe < o[w] && (o[w] -= o[w] - (t.offsets.host[L] - oe)), Number(t.offsets.host[w]) + Number(oe) > o[L] && (o[w] += Number(t.offsets.host[w]) + Number(oe) - Number(o[L])), o = yt(o); const J = Number(t.offsets.host[w]) + Number(t.offsets.host[r] / 2 - oe / 2),
                    ae = ut(t.instance.target),
                    je = parseFloat(ae[`margin${g}`]),
                    Se = parseFloat(ae[`border${g}Width`]); let Ye = J - o[w] - je - Se; return Ye = Math.max(Math.min(o[r] - oe, Ye), 0), t.offsets.arrow = {
                    [w]: Math.round(Ye), [F]: "" }, t.instance.arrow = e, t }

            function fi(t) { if (t.offsets.target = yt(t.offsets.target), !_o(t.options, "flip")) return t.offsets.target = Object.assign(Object.assign({}, t.offsets.target), Jt(t.instance.target, t.offsets.host, t.placement)), t; const o = Zt(t.instance.target, t.instance.host, 0, "viewport", !1); let e = t.placement.split(" ")[0],
                    i = t.placement.split(" ")[1] || ""; const r = t.offsets.host,
                    g = t.instance.target,
                    w = t.instance.host,
                    F = i ? Xt("auto", r, g, w, ["top", "bottom"]) : Xt("auto", r, g, w),
                    L = [e, F]; return L.forEach((oe, J) => { if (e !== oe || L.length === J + 1) return t;
                    e = t.placement.split(" ")[0]; const ae = "left" === e && Math.floor(t.offsets.target.right) > Math.floor(t.offsets.host.left) || "right" === e && Math.floor(t.offsets.target.left) < Math.floor(t.offsets.host.right) || "top" === e && Math.floor(t.offsets.target.bottom) > Math.floor(t.offsets.host.top) || "bottom" === e && Math.floor(t.offsets.target.top) < Math.floor(t.offsets.host.bottom),
                        je = Math.floor(t.offsets.target.left) < Math.floor(o.left),
                        Se = Math.floor(t.offsets.target.right) > Math.floor(o.right),
                        Ye = Math.floor(t.offsets.target.top) < Math.floor(o.top),
                        Ro = Math.floor(t.offsets.target.bottom) > Math.floor(o.bottom),
                        Io = "left" === e && je || "right" === e && Se || "top" === e && Ye || "bottom" === e && Ro,
                        Bt = -1 !== ["top", "bottom"].indexOf(e),
                        Bo = Bt && "left" === i && je || Bt && "right" === i && Se || !Bt && "left" === i && Ye || !Bt && "right" === i && Ro;
                    (ae || Io || Bo) && ((ae || Io) && (e = L[J + 1]), Bo && (i = function di(t) { return "right" === t ? "left" : "left" === t ? "right" : t }(i)), t.placement = e + (i ? ` ${i}` : ""), t.offsets.target = Object.assign(Object.assign({}, t.offsets.target), Jt(t.instance.target, t.offsets.host, t.placement))) }), t }

            function mi(t) { if (!_o(t.options, "preventOverflow")) return t; const o = "transform",
                    e = t.instance.target.style,
                    { top: i, left: r, [o]: g } = e;
                e.top = "", e.left = "", e[o] = ""; const w = Zt(t.instance.target, t.instance.host, 0, "scrollParent", !1);
                e.top = i, e.left = r, e[o] = g; const L = { primary(J) { let ae = t.offsets.target[J]; return t.offsets.target[J] < w[J] && (ae = Math.max(t.offsets.target[J], w[J])), {
                            [J]: ae } }, secondary(J) { const ae = "right" === J ? "left" : "top"; let je = t.offsets.target[ae]; return t.offsets.target[J] > w[J] && (je = Math.min(t.offsets.target[ae], w[J] - ("right" === J ? t.offsets.target.width : t.offsets.target.height))), {
                            [ae]: je } } }; let oe; return ["left", "right", "top", "bottom"].forEach(J => { oe = -1 !== ["left", "top"].indexOf(J) ? "primary" : "secondary", t.offsets.target = Object.assign(Object.assign({}, t.offsets.target), L[oe](J)) }), t }

            function pi(t) { const o = t.placement,
                    e = o.split(" ")[0],
                    i = o.split(" ")[1]; if (i) { const { host: r, target: g } = t.offsets, w = -1 !== ["bottom", "top"].indexOf(e), F = w ? "left" : "top", L = w ? "width" : "height", oe = { left: {
                            [F]: r[F] }, right: {
                            [F]: r[F] + r[L] - r[L] } };
                    t.offsets.target = Object.assign(Object.assign({}, g), oe[i]) } return t }
            new class bi { position(o, e) { return this.offset(o, e) }
                offset(o, e) { return wo(e, o) }
                positionElements(o, e, i, r, g) { return [fi, pi, mi, gi].reduce((F, L) => L(F), function hi(t, o, e, i) { const r = wo(t, o),
                            g = !!e.match(/auto/g); let w = e.match(/auto\s(left|right|top|bottom)/g) ? e.split(" ")[1] || "" : e; const F = Jt(t, r, w); return w = Xt(w, r, t, o), { options: i, instance: { target: t, host: o, arrow: null }, offsets: { target: F, host: r, arrow: null }, positionFixed: !1, placement: w, placementAuto: g } }(e, o, i, g)) } }; let Pi = (() => { class t { constructor(e) { this.el = e }
                        click(e) { if (!this.el.nativeElement.classList.contains("disabled")) { const i = this.el.nativeElement;
                                i.classList.contains("waves-effect") || (i.className += " waves-effect"); const r = e.clientX - i.getBoundingClientRect().left,
                                    g = e.clientY - i.getBoundingClientRect().top,
                                    w = document.createElement("div");
                                w.className += "waves-ripple waves-rippling"; const F = i.appendChild(w),
                                    oe = r + "px";
                                w.style.top = g + "px", w.style.left = oe; const J = "scale(" + i.clientWidth / 100 * 3 + ") translate(0,0)";
                                w.style.webkitTransform = J, w.style.transform = J, w.style.opacity = "1"; const ae = 750;
                                w.style.webkitTransitionDuration = ae + "ms", w.style.transitionDuration = ae + "ms", this.removeRipple(i, F) } }
                        removeRipple(e, i) { i.classList.remove("waves-rippling"), setTimeout(() => { i.style.opacity = "0", setTimeout(() => { e.removeChild(i) }, 750) }, 200) } } return t.\u0275fac = function(e) { return new(e || t)(n.Y36(n.SBq)) }, t.\u0275dir = n.lG2({ type: t, selectors: [
                            ["", "mdbWavesEffect", ""]
                        ], hostBindings: function(e, i) { 1 & e && n.NdJ("click", function(g) { return i.click(g) }) } }), t })(),
                Eo = (() => { class t { static forRoot() { return { ngModule: t, providers: [] } } } return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275mod = n.oAB({ type: t }), t.\u0275inj = n.cJS({}), t })() } }
]);