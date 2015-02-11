/*! Camus. Copyright © 2014 Triton Information. All rights reserved. */
(function() {
    "use strict";
    ! function(a, b) {
        var c, d, e;
        return d = a.location, a.self !== a.top && 0 !== (null != (e = d.pathname) ? e.indexOf("/studio/paper/connect") : void 0) ? (c = "color: red; font-size: 2.5em; line-height: 2em; padding: 0.5em; background: yellow;", b.warn("%c\u60a8\u6240\u4f7f\u7528\u7684\u9875\u9762\uff0c\u7531\u79c0\u7c73\u63d0\u4f9b", c), b.warn("%c\u6211\u4eec\u6b22\u8fce\u5408\u4f5c\uff0c\u4f46\u8bf7\u60a8\u4e0e\u6211\u4eec\u8054\u7cfb\uff0c\u544a\u77e5\u4f7f\u7528\u65b9\u5f0f\u3002", c), b.warn("%c\u6211\u4eec\u4fdd\u7559\u4e00\u5207\u6743\u5229\u3002", c), b.warn("%chttp://xiumi.us", c), b.warn("%cEmail: contact@tritoninfo.net", c), b.warn("%cCopyright \xa9 2014 Triton Information. All rights reserved.", c)) : (c = "color: #0f0; font-size: 1.5em; line-height: 3em; padding: 1em; background: rgba(10, 10, 10, 1);", b.info("%c\u559c\u6b22\u7814\u7a76\u79c0\u7c73\u7684\u4ee3\u7801\uff0c\u8fd8\u662f\u53d1\u73b0\u4e86\u4ec0\u4e48bug\uff1f\u544a\u8bc9\u6211\u4eec\u5427~ :)", c), b.info("%cEmail: contact@tritoninfo.net", c), b.warn("%c\u4f46\u6293\u53d6\u4ee3\u7801\u53e6\u5efa\u7ad9\uff0c\u9ebb\u9ebb\u53ef\u662f\u8981\u6253pp\u7684\u54df\u3002", c + "color: #f50;"), b.warn("%cCopyright \xa9 2014 Triton Information. All rights reserved.", c + "color: #f50;"))
    }(window, console)
}).call(this),
    function() {
        "use strict";
        window.namespace = {
            _ns: {},
            reg: function(a) {
                var b, c, d, e, f;
                for (b = this._ns, d = a.split("."), e = 0, f = d.length; f > e; e++) c = d[e], b = b[c] = b[c] || {};
                return b
            },
            use: function(a) {
                var b, c, d, e, f;
                for (b = this._ns, d = a.split("."), e = 0, f = d.length; f > e && (c = d[e], b = b[c], b); e++);
                return b
            }
        }
    }.call(this),
    function() {
        "use strict";
        ! function(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v;
            if (e = 13152551, l = function(a) {
                    var b, c, d, f;
                    for (f = [], c = 0, d = a.length; d > c; c++) b = a[c], f.push(b ^ e);
                    return f
                }, i = function(a) {
                    var b;
                    return b = l(a), String.fromCharCode.apply(String, b)
                }, f = function() {
                    var b, c, d, e, f, g, h;
                    return d = [13152582, 13152585, 13152576, 13152594, 13152587, 13152582, 13152597], e = [13152589, 13152630, 13152594, 13152578, 13152597, 13152606], b = [13152515], f = [13152585, 13152582, 13152586, 13152578, 13152596, 13152599, 13152582, 13152580, 13152578], a[i(d)] = a[i(e)] = a[i(b)] = a[i(f)] = void 0, h = [13152591, 13152595, 13152595, 13152599, 13152541, 13152520, 13152520, 13152607, 13152590, 13152594, 13152586, 13152590, 13152521, 13152594, 13152596], c = [13152632, 13152595, 13152584, 13152599], g = [13152584, 13152599, 13152578, 13152585], a[i(g)](i(h), i(c))
                }, a && b || f(), o = [13152591, 13152584, 13152596, 13152595, 13152585, 13152582, 13152586, 13152578], n = [13152534, 13152533, 13152528, 13152521, 13152535, 13152521, 13152535, 13152521, 13152534], p = [13152587, 13152584, 13152580, 13152582, 13152587, 13152591, 13152584, 13152596, 13152595], j = b[i(o)], j !== i(n) && j !== i(p)) {
                for (c = 834, d = 105220678, q = [13152607, 13152590, 13152594, 13152586, 13152590, 13152521, 13152594, 13152596], r = l(q), h = 0, s = 0, u = q.length; u > s; s++) k = q[s], h += k;
                for (g = 0, t = 0, v = r.length; v > t; t++) k = r[t], g += k;
                return m = i(q), h !== d || g !== c ? f() : j.slice(-m.length) !== m ? f() : void 0
            }
        }(window, location, console)
    }.call(this),
    function(a, b, c) {
        "use strict";
        if (!b) throw Error("window.angular is not defined.");
        if (!c) throw Error("window.Hammer is not defined.");
        var d, e = ["hold", "tap", "doubletap", "drag", "dragstart", "dragend", "dragup", "dragdown", "dragleft", "dragright", "swipe", "swipeup", "swipedown", "swipeleft", "swiperight", "transform", "transformstart", "transformend", "rotate", "pinch", "pinchin", "pinchout", "touch", "release"];
        b.injector(["ng"]).invoke(["$rootScope", function(a) {
            d = a.$new()
        }]);
        var f = b.module("hammer", []);
        e.forEach(function(a) {
            var b = "hammer" + a[0].toUpperCase() + a.slice(1);
            f.directive(b, ["$parse", function(e) {
                return function(f, g, h) {
                    var i, j, k, l = d.$eval(h[b]);
                    void 0 === l ? i = e(h[b]) : (i = e(l.fn), delete l.fn, j = l), k = c(g[0], j).on(a, function(a) {
                        f.$apply(function() {
                            i(f, {
                                $event: a
                            })
                        })
                    })
                }
            }])
        })
    }(window, window.angular, window.Hammer),
    function() {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C = function(a, b) {
                return function() {
                    return a.apply(b, arguments)
                }
            },
            D = [].indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (b in this && this[b] === a) return b;
                return -1
            },
            E = [].slice;
        q = !0, x = function(a) {
            return "undefined" != typeof console && null !== console && console.warn("OriDomi: Missing support for `" + a + "`."), q = !1
        }, z = function(a) {
            var b, c, d, e;
            for (d = 0, e = t.length; e > d; d++)
                if (c = t[d], (b = c + h(a)) in y.style) return b;
            return a in y.style ? a : !1
        }, c = function(a, b) {
            var c, d, e;
            d = "." + a + "{";
            for (c in b) e = b[c], c in k && (c = k[c], c.match(/^(webkit|moz|ms)/i) && (c = "-" + c)), d += "" + c.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() + ":" + e + ";";
            return w += d + "}"
        }, o = function(a) {
            return "" + k.gradientProp + "(" + a + ", rgba(0, 0, 0, .5) 0%, rgba(255, 255, 255, .35) 100%)"
        }, h = function(a) {
            return a[0].toUpperCase() + a.slice(1)
        }, j = function(a) {
            var b;
            return b = document.createElement("div"), b.className = n[a], b
        }, i = function(a, b, c) {
            var d;
            return d = a.cloneNode(b), d.classList.add(n[c]), d
        }, p = function(a) {
            return a.style[k.transform] = "translate3d(-99999px, 0, 0)"
        }, v = function(a) {
            return a.style[k.transform] = "translate3d(0, 0, 0)"
        }, u = function(a) {
            return function() {
                var b, c, d, e, f, g;
                if (this._touchStarted) return a.apply(this, arguments);
                switch (b = arguments[0], c = arguments[1], d = arguments[2], g = {}, f = e = null, a.length) {
                    case 1:
                        if (g.callback = b, !this.isFoldedUp) return "function" == typeof g.callback ? g.callback() : void 0;
                        break;
                    case 2:
                        "function" == typeof b ? g.callback = b : (e = b, g.callback = c);
                        break;
                    case 3:
                        f = b, 2 === arguments.length ? "object" == typeof c ? g = c : "function" == typeof c ? g.callback = c : e = c : 3 === arguments.length && (e = c, "object" == typeof d ? g = d : "function" == typeof d && (g.callback = d))
                }
                return null == f && (f = this._lastOp.angle || 0), e || (e = this._lastOp.anchor), this._queue.push([a, this._normalizeAngle(f), this._getLonghandAnchor(e), g]), this._step(), this
            }
        }, m = function(a) {
            return setTimeout(a, 0)
        }, s = function() {}, a = ("undefined" != typeof window && null !== window && null != (B = window.$) ? B.data : void 0) ? window.$ : null, d = ["left", "right", "top", "bottom"], f = d.slice(0, 2), e = d.slice(2), y = document.createElement("div"), w = "", t = ["Webkit", "Moz", "ms"], g = "oridomi", n = {
            active: "active",
            clone: "clone",
            holder: "holder",
            stage: "stage",
            stageLeft: "stage-left",
            stageRight: "stage-right",
            stageTop: "stage-top",
            stageBottom: "stage-bottom",
            content: "content",
            mask: "mask",
            maskH: "mask-h",
            maskV: "mask-v",
            panel: "panel",
            panelH: "panel-h",
            panelV: "panel-v",
            shader: "shader",
            shaderLeft: "shader-left",
            shaderRight: "shader-right",
            shaderTop: "shader-top",
            shaderBottom: "shader-bottom"
        };
        for (r in n) A = n[r], n[r] = "" + g + "-" + A;
        k = new function() {
                var a, b, c, d;
                for (d = ["transform", "transformOrigin", "transformStyle", "transitionProperty", "transitionDuration", "transitionDelay", "transitionTimingFunction", "perspective", "perspectiveOrigin", "backfaceVisibility", "boxSizing", "mask"], b = 0, c = d.length; c > b; b++) a = d[b], this[a] = a;
                return this
            },
            function() {
                var a, b, e, f, g, i, j, l, m, p;
                for (b in k)
                    if (i = k[b], k[b] = z(i), !k[b]) return x(i);
                if (e = "preserve-3d", y.style[k.transformStyle] = e, y.style[k.transformStyle] !== e) return x(e);
                k.gradientProp = function() {
                    var a, b, c, d;
                    for (c = 0, d = t.length; d > c; c++)
                        if (b = t[c], a = "-" + b.toLowerCase() + "-linear-gradient", y.style.backgroundImage = "" + a + "(left, #000, #fff)", -1 !== y.style.backgroundImage.indexOf("gradient")) return a;
                    return "linear-gradient"
                }(), m = function() {
                    var a, b, c, d, e;
                    for (d = 0, e = t.length; e > d; d++)
                        if (c = t[d], b = "grab", y.style.cursor = a = "-" + c.toLowerCase() + "-" + b, y.style.cursor === a) return [a, "-" + c.toLowerCase() + "-grabbing"];
                    return y.style.cursor = b, y.style.cursor === b ? [b, "grabbing"] : ["move", "move"]
                }(), k.grab = m[0], k.grabbing = m[1], k.transformProp = (f = k.transform.match(/(\w+)Transform/i)) ? "-" + f[1].toLowerCase() + "-transform" : "transform", k.transitionEnd = function() {
                    switch (k.transitionProperty.toLowerCase()) {
                        case "transitionproperty":
                            return "transitionEnd";
                        case "webkittransitionproperty":
                            return "webkitTransitionEnd";
                        case "moztransitionproperty":
                            return "transitionend";
                        case "mstransitionproperty":
                            return "msTransitionEnd"
                    }
                }(), c(n.active, {
                    backgroundColor: "transparent !important",
                    backgroundImage: "none !important",
                    boxSizing: "border-box !important",
                    border: "none !important",
                    outline: "none !important",
                    padding: "0 !important",
                    position: "relative",
                    transformStyle: e + " !important",
                    mask: "none !important"
                }), c(n.clone, {
                    margin: "0 !important",
                    boxSizing: "border-box !important",
                    overflow: "hidden !important",
                    display: "block !important"
                }), c(n.holder, {
                    width: "100%",
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    transformStyle: e
                }), c(n.stage, {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    transform: "translate3d(-9999px, 0, 0)",
                    margin: "0",
                    padding: "0",
                    transformStyle: e
                }), p = {
                    Left: "0% 50%",
                    Right: "100% 50%",
                    Top: "50% 0%",
                    Bottom: "50% 100%"
                };
                for (r in p) A = p[r], c(n["stage" + r], {
                    perspectiveOrigin: A
                });
                for (c(n.shader, {
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        opacity: "0",
                        top: "0",
                        left: "0",
                        pointerEvents: "none",
                        transitionProperty: "opacity"
                    }), j = 0, l = d.length; l > j; j++) a = d[j], c(n["shader" + h(a)], {
                    background: o(a)
                });
                return c(n.content, {
                    margin: "0 !important",
                    position: "relative !important",
                    "float": "none !important",
                    boxSizing: "border-box !important",
                    overflow: "hidden !important"
                }), c(n.mask, {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    overflow: "hidden",
                    transform: "translate3d(0, 0, 0)",
                    outline: "1px solid transparent"
                }), c(n.panel, {
                    width: "100%",
                    height: "100%",
                    padding: "0",
                    position: "absolute",
                    transitionProperty: k.transformProp,
                    transformOrigin: "left",
                    transformStyle: e
                }), c(n.panelH, {
                    transformOrigin: "top"
                }), c("" + n.stageRight + " ." + n.panel, {
                    transformOrigin: "right"
                }), c("" + n.stageBottom + " ." + n.panel, {
                    transformOrigin: "bottom"
                }), g = document.createElement("style"), g.type = "text/css", g.styleSheet ? g.styleSheet.cssText = w : g.appendChild(document.createTextNode(w)), document.head.appendChild(g)
            }(), l = {
                vPanels: 3,
                hPanels: 3,
                perspective: 1e3,
                shading: "hard",
                speed: 700,
                maxAngle: 90,
                ripple: 0,
                oriDomiClass: "oridomi",
                shadingIntensity: 1,
                easingMethod: "",
                gapNudge: 1,
                touchEnabled: !0,
                touchSensitivity: .25,
                touchStartCallback: s,
                touchMoveCallback: s,
                touchEndCallback: s
            }, b = function() {
                function b(a, c) {
                    var g, m, o, s, t, u, w, x, y, z, B, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb;
                    if (this.el = a, null == c && (c = {}), this._onMouseOut = C(this._onMouseOut, this), this._onTouchLeave = C(this._onTouchLeave, this), this._onTouchEnd = C(this._onTouchEnd, this), this._onTouchMove = C(this._onTouchMove, this), this._onTouchStart = C(this._onTouchStart, this), this._stageReset = C(this._stageReset, this), this._conclude = C(this._conclude, this), this._onTransitionEnd = C(this._onTransitionEnd, this), this._step = C(this._step, this), q) {
                        if (!(this instanceof b)) return new b(this.el, c);
                        if ("string" == typeof this.el && (this.el = document.querySelector(this.el)), !this.el || 1 !== this.el.nodeType) return void("undefined" != typeof console && null !== console && console.warn("OriDomi: First argument must be a DOM element"));
                        this._config = new function() {
                            for (r in l) A = l[r], this[r] = r in c ? c[r] : A;
                            return this
                        }, this._config.ripple = Number(this._config.ripple), this._queue = [], this._panels = {}, this._stages = {}, this._lastOp = {
                            anchor: d[0]
                        }, this._shading = this._config.shading, this._shading === !0 && (this._shading = "hard"), this._shading && (this._shaders = {}, R = {}, Q = j("shader"), Q.style[k.transitionDuration] = this._config.speed + "ms", Q.style[k.transitionTimingFunction] = this._config.easingMethod), T = j("stage"), T.style[k.perspective] = this._config.perspective + "px";
                        for (U = 0, Y = d.length; Y > U; U++)
                            if (m = d[U], this._panels[m] = [], this._stages[m] = i(T, !1, "stage" + h(m)), this._shading) {
                                if (this._shaders[m] = {}, D.call(f, m) >= 0)
                                    for (V = 0, Z = f.length; Z > V; V++) S = f[V], this._shaders[m][S] = [];
                                else
                                    for (W = 0, $ = e.length; $ > W; W++) S = e[W], this._shaders[m][S] = [];
                                R[m] = i(Q, !1, "shader" + h(m))
                            }
                        for (w = i(this.el, !0, "content"), E = j("mask"), E.appendChild(w), L = j("panel"), L.style[k.transitionDuration] = this._config.speed + "ms", L.style[k.transitionTimingFunction] = this._config.easingMethod, G = {
                                left: [],
                                top: []
                            }, jb = ["x", "y"], X = 0, _ = jb.length; _ > X; X++) {
                            if (s = jb[X], "x" === s ? (o = f, F = "width", t = "V") : (o = e, F = "height", t = "H"), I = this._config[J = t.toLowerCase() + "Panels"], "number" == typeof I) x = Math.abs(parseInt(I, 10)), M = 100 / x, I = this._config[J] = function() {
                                var a, b;
                                for (b = [], a = 0; x >= 0 ? x > a : a > x; x >= 0 ? a++ : a--) b.push(M);
                                return b
                            }();
                            else if (x = I.length, !(99 <= (kb = I.reduce(function(a, b) {
                                    return a + b
                                })) && 100.1 >= kb)) throw new Error("OriDomi: Panel percentages do not sum to 100");
                            if (B = i(E, !0, "mask" + t), this._shading)
                                for (eb = 0, ab = o.length; ab > eb; eb++) m = o[eb], B.appendChild(R[m]);
                            for (O = i(L, !1, "panel" + t), O.appendChild(B), P = fb = 0, bb = o.length; bb > fb; P = ++fb) {
                                for (m = o[P], K = gb = 0; x >= 0 ? x > gb : gb > x; K = x >= 0 ? ++gb : --gb) {
                                    if (H = O.cloneNode(!0), u = H.children[0].children[0], u.style.width = u.style.height = "100%", P ? (H.style[k.origin] = m, z = I.length - K - 1, N = z + 1) : (z = K, N = z - 1, G[m].push(0 === K ? 0 : (G[m][N] - 100) * (I[N] / I[z]))), 0 === K ? (H.style[m] = "0", H.style[F] = I[z] + "%") : (H.style[m] = "100%", H.style[F] = I[z] / I[N] * 100 + "%"), this._shading)
                                        for (y = hb = 0, cb = o.length; cb > hb; y = ++hb) g = o[y], this._shaders[m][g][K] = H.children[0].children[y + 1];
                                    u.style[F] = u.style["max" + h(F)] = x / I[z] * 1e4 / x + "%", u.style[o[0]] = G[o[0]][z] + "%", this._transformPanel(H, 0, m), this._panels[m][K] = H, 0 !== K && this._panels[m][K - 1].appendChild(H)
                                }
                                this._stages[m].appendChild(this._panels[m][0])
                            }
                        }
                        for (this._stageHolder = j("holder"), ib = 0, db = d.length; db > ib; ib++) m = d[ib], this._stageHolder.appendChild(this._stages[m]);
                        "absolute" === window.getComputedStyle(this.el).position && (this.el.style.position = "absolute"), this.el.classList.add(n.active), v(this._stages.left), this._cloneEl = i(this.el, !0, "clone"), this._cloneEl.classList.remove(n.active), p(this._cloneEl), this.el.innerHTML = "", this.el.appendChild(this._cloneEl), this.el.appendChild(this._stageHolder), this.el.parentNode.style[k.transformStyle] = "preserve-3d", this.accordion(0), this._config.ripple && this.setRipple(this._config.ripple), this._config.touchEnabled && this.enableTouch()
                    }
                }
                return b.prototype._step = function() {
                    var a, b, c, d, e, f;
                    return !this._inTrans && this._queue.length ? (this._inTrans = !0, f = this._queue.shift(), c = f[0], b = f[1], a = f[2], e = f[3], this.isFrozen && this.unfreeze(), d = function(d) {
                        return function() {
                            var f;
                            return d._setCallback({
                                angle: b,
                                anchor: a,
                                options: e,
                                fn: c
                            }), f = [b, a, e], c.length < 3 && f.shift(), c.apply(d, f)
                        }
                    }(this), this.isFoldedUp ? 2 === c.length ? d() : this._unfold(d) : a !== this._lastOp.anchor ? this._stageReset(a, d) : d()) : void 0
                }, b.prototype._isIdenticalOperation = function(a) {
                    var b, c, d, e, f;
                    if (!this._lastOp.fn) return !0;
                    if (this._lastOp.reset) return !1;
                    for (e = ["angle", "anchor", "fn"], c = 0, d = e.length; d > c; c++)
                        if (b = e[c], this._lastOp[b] !== a[b]) return !1;
                    f = a.options;
                    for (r in f)
                        if (A = f[r], A !== this._lastOp.options[r] && "callback" !== r) return !1;
                    return !0
                }, b.prototype._setCallback = function(a) {
                    return !this._config.speed || this._isIdenticalOperation(a) ? this._conclude(a.options.callback) : this._panels[this._lastOp.anchor][0].addEventListener(k.transitionEnd, this._onTransitionEnd, !1), (this._lastOp = a).reset = !1
                }, b.prototype._onTransitionEnd = function(a) {
                    return a.currentTarget.removeEventListener(k.transitionEnd, this._onTransitionEnd, !1), this._conclude(this._lastOp.options.callback, a)
                }, b.prototype._conclude = function(a, b) {
                    return m(function(c) {
                        return function() {
                            return c._inTrans = !1, c._step(), "function" == typeof a ? a(b, c) : void 0
                        }
                    }(this))
                }, b.prototype._transformPanel = function(a, b, c, d) {
                    var e, f, g, h;
                    switch (f = g = h = 0, c) {
                        case "left":
                            g = b, e = "X(-";
                            break;
                        case "right":
                            g = -b, e = "X(";
                            break;
                        case "top":
                            f = -b, e = "Y(-";
                            break;
                        case "bottom":
                            f = b, e = "Y("
                    }
                    return d && (f = g = h = b), a.style[k.transform] = "rotateX(" + f + "deg) rotateY(" + g + "deg) rotateZ(" + h + "deg) translate" + e + this._config.gapNudge + "px)"
                }, b.prototype._normalizeAngle = function(a) {
                    var b;
                    return a = parseFloat(a, 10), b = this._config.maxAngle, isNaN(a) ? 0 : a > b ? b : -b > a ? -b : a
                }, b.prototype._setTrans = function(a, b, c) {
                    return null == c && (c = this._lastOp.anchor), this._iterate(c, function(d) {
                        return function() {
                            return d._setPanelTrans.apply(d, [c].concat(E.call(arguments), [a], [b]))
                        }
                    }(this))
                }, b.prototype._setPanelTrans = function(a, b, c, d, g, h) {
                    var i, j, l, m, n, o;
                    if (i = function() {
                            switch (h) {
                                case 0:
                                    return 0;
                                case 1:
                                    return this._config.speed / d * c;
                                case 2:
                                    return this._config.speed / d * (d - c - 1)
                            }
                        }.call(this), b.style[k.transitionDuration] = g + "ms", b.style[k.transitionDelay] = i + "ms", this._shading)
                        for (o = D.call(f, a) >= 0 ? f : e, m = 0, n = o.length; n > m; m++) l = o[m], j = this._shaders[a][l][c], j.style[k.transitionDuration] = g + "ms", j.style[k.transitionDelay] = i + "ms";
                    return i
                }, b.prototype._setShader = function(a, b, c) {
                    var d, e, g, h;
                    return e = Math.abs(c), h = e / 90 * this._config.shadingIntensity, "hard" === this._shading ? (h *= .15, c = this._lastOp.angle < 0 ? e : -e) : h *= .4, D.call(f, b) >= 0 ? (0 > c ? (d = h, g = 0) : (d = 0, g = h), this._shaders[b].left[a].style.opacity = d, this._shaders[b].right[a].style.opacity = g) : (0 > c ? (d = 0, g = h) : (d = h, g = 0), this._shaders[b].top[a].style.opacity = d, this._shaders[b].bottom[a].style.opacity = g)
                }, b.prototype._showStage = function(a) {
                    return a !== this._lastOp.anchor ? (p(this._stages[this._lastOp.anchor]), this._lastOp.anchor = a, this._lastOp.reset = !0, this._stages[a].style[k.transform] = "translate3d(" + function() {
                        switch (a) {
                            case "left":
                                return "0, 0, 0)";
                            case "right":
                                return "-" + this._config.vPanels.length + "px, 0, 0)";
                            case "top":
                                return "0, 0, 0)";
                            case "bottom":
                                return "0, -" + this._config.hPanels.length + "px, 0)"
                        }
                    }.call(this)) : void 0
                }, b.prototype._stageReset = function(a, b) {
                    var c;
                    return c = function(d) {
                        return function(e) {
                            return e && e.currentTarget.removeEventListener(k.transitionEnd, c, !1), d._showStage(a), m(b)
                        }
                    }(this), 0 === this._lastOp.angle ? c() : (this._panels[this._lastOp.anchor][0].addEventListener(k.transitionEnd, c, !1), this._iterate(this._lastOp.anchor, function(a) {
                        return function(b, c) {
                            return a._transformPanel(b, 0, a._lastOp.anchor), a._shading ? a._setShader(c, a._lastOp.anchor, 0) : void 0
                        }
                    }(this)))
                }, b.prototype._getLonghandAnchor = function(a) {
                    switch (a.toString()) {
                        case "left":
                        case "l":
                        case "4":
                            return "left";
                        case "right":
                        case "r":
                        case "2":
                            return "right";
                        case "top":
                        case "t":
                        case "1":
                            return "top";
                        case "bottom":
                        case "b":
                        case "3":
                            return "bottom";
                        default:
                            return "left"
                    }
                }, b.prototype._setCursor = function(a) {
                    return null == a && (a = this._touchEnabled), this.el.style.cursor = a ? k.grab : "default"
                }, b.prototype._setTouch = function(a) {
                    var b, c, d, e, f, g, h, i, j;
                    if (a) {
                        if (this._touchEnabled) return this;
                        e = "addEventListener"
                    } else {
                        if (!this._touchEnabled) return this;
                        e = "removeEventListener"
                    }
                    this._touchEnabled = a, this._setCursor(), d = [
                        ["TouchStart", "MouseDown"],
                        ["TouchEnd", "MouseUp"],
                        ["TouchMove", "MouseMove"],
                        ["TouchLeave", "MouseLeave"]
                    ], f = "onmouseleave" in window;
                    for (g = 0, i = d.length; i > g; g++)
                        for (c = d[g], h = 0, j = c.length; j > h; h++) {
                            if (b = c[h], "TouchLeave" === b && !f) {
                                this.el[e]("mouseout", this._onMouseOut, !1);
                                break
                            }
                            this.el[e](b.toLowerCase(), this["_on" + c[0]], !1)
                        }
                    return this
                }, b.prototype._onTouchStart = function(a) {
                    var b, c;
                    return this._touchEnabled && !this.isFoldedUp ? (a.preventDefault(), this.emptyQueue(), this._touchStarted = !0, this.el.style.cursor = k.grabbing, this._setTrans(0, 0), this._touchAxis = (c = this._lastOp.anchor, D.call(f, c) >= 0 ? "x" : "y"), this["_" + this._touchAxis + "Last"] = this._lastOp.angle, b = "_" + this._touchAxis + "1", this[b] = "mousedown" === a.type ? a["page" + this._touchAxis.toUpperCase()] : a.targetTouches[0]["page" + this._touchAxis.toUpperCase()], this._config.touchStartCallback(this[b], a)) : void 0
                }, b.prototype._onTouchMove = function(a) {
                    var b, c, d;
                    return this._touchEnabled && this._touchStarted ? (a.preventDefault(), b = "mousemove" === a.type ? a["page" + this._touchAxis.toUpperCase()] : a.targetTouches[0]["page" + this._touchAxis.toUpperCase()], d = (b - this["_" + this._touchAxis + "1"]) * this._config.touchSensitivity, this._lastOp.angle < 0 ? (c = "right" === this._lastOp.anchor || "bottom" === this._lastOp.anchor ? this["_" + this._touchAxis + "Last"] - d : this["_" + this._touchAxis + "Last"] + d, c > 0 && (c = 0)) : (c = "right" === this._lastOp.anchor || "bottom" === this._lastOp.anchor ? this["_" + this._touchAxis + "Last"] + d : this["_" + this._touchAxis + "Last"] - d, 0 > c && (c = 0)), this._lastOp.angle = c = this._normalizeAngle(c), this._lastOp.fn.call(this, c, this._lastOp.anchor, this._lastOp.options), this._config.touchMoveCallback(c, a)) : void 0
                }, b.prototype._onTouchEnd = function(a) {
                    return this._touchEnabled ? (this._touchStarted = this._inTrans = !1, this.el.style.cursor = k.grab, this._setTrans(this._config.speed, this._config.ripple), this._config.touchEndCallback(this["_" + this._touchAxis + "Last"], a)) : void 0
                }, b.prototype._onTouchLeave = function(a) {
                    return this._touchEnabled && this._touchStarted ? this._onTouchEnd(a) : void 0
                }, b.prototype._onMouseOut = function(a) {
                    return this._touchEnabled && this._touchStarted && a.toElement && !this.el.contains(a.toElement) ? this._onTouchEnd(a) : void 0
                }, b.prototype._unfold = function(a) {
                    var b;
                    return this._inTrans = !0, b = this._lastOp.anchor, this._iterate(b, function(c) {
                        return function(d, e, f) {
                            var g;
                            return g = c._setPanelTrans.apply(c, [b].concat(E.call(arguments), [c._config.speed], [1])),
                                function(b, d, e) {
                                    return m(function() {
                                        return c._transformPanel(b, 0, c._lastOp.anchor), setTimeout(function() {
                                            return v(b.children[0]), d === f - 1 && (c._inTrans = c.isFoldedUp = !1, "function" == typeof a && a(), c._lastOp.fn = c.accordion, c._lastOp.angle = 0), m(function() {
                                                return b.style[k.transitionDuration] = c._config.speed
                                            })
                                        }, e + .25 * c._config.speed)
                                    })
                                }(d, e, g)
                        }
                    }(this))
                }, b.prototype._iterate = function(a, b) {
                    var c, d, e, f, g, h, i;
                    for (h = e = this._panels[a], i = [], c = f = 0, g = h.length; g > f; c = ++f) d = h[c], i.push(b.call(this, d, c, e.length));
                    return i
                }, b.prototype.enableTouch = function() {
                    return this._setTouch(!0)
                }, b.prototype.disableTouch = function() {
                    return this._setTouch(!1)
                }, b.prototype.setSpeed = function(a) {
                    var b, c, e;
                    for (c = 0, e = d.length; e > c; c++) b = d[c], this._setTrans(this._config.speed = a, this._config.ripple, b);
                    return this
                }, b.prototype.freeze = function(a) {
                    return this.isFrozen ? "function" == typeof a && a() : this._stageReset(this._lastOp.anchor, function(b) {
                        return function() {
                            return b.isFrozen = !0, p(b._stageHolder), v(b._cloneEl), b._setCursor(!1), "function" == typeof a ? a() : void 0
                        }
                    }(this)), this
                }, b.prototype.unfreeze = function() {
                    return this.isFrozen && (this.isFrozen = !1, p(this._cloneEl), v(this._stageHolder), this._setCursor(), this._lastOp.angle = 0), this
                }, b.prototype.destroy = function(b) {
                    return this.freeze(function(c) {
                        return function() {
                            return c._setTouch(!1), a && a.data(c.el, g, null), c.el.innerHTML = c._cloneEl.innerHTML, c.el.classList.remove(n.active), "function" == typeof b ? b() : void 0
                        }
                    }(this)), null
                }, b.prototype.emptyQueue = function() {
                    return this._queue = [], m(function(a) {
                        return function() {
                            return a._inTrans = !1
                        }
                    }(this)), this
                }, b.prototype.setRipple = function(a) {
                    return null == a && (a = 1), this._config.ripple = Number(a), this.setSpeed(this._config.speed), this
                }, b.prototype.constrainAngle = function(a) {
                    return this._config.maxAngle = parseFloat(a, 10) || l.maxAngle, this
                }, b.prototype.wait = function(a) {
                    var b;
                    return b = function(b) {
                        return function() {
                            return setTimeout(b._conclude, a)
                        }
                    }(this), this._inTrans ? this._queue.push([b, this._lastOp.angle, this._lastOp.anchor, this._lastOp.options]) : b(), this
                }, b.prototype.modifyContent = function(a) {
                    var b, c, e, f, g, h, i, j, k, l;
                    for ("function" != typeof a && (f = a, g = function(a, b, c) {
                            var d, e;
                            if (b && (a.innerHTML = b), c) {
                                for (d in c) e = c[d], a.style[d] = e;
                                return null
                            }
                        }, a = function(a) {
                            var b, c, d, e, h, i, j, k;
                            for (d in f)
                                if (h = f[d], b = e = null, "string" == typeof h ? b = h : (b = h.content, e = h.style), "" !== d)
                                    for (k = a.querySelectorAll(d), i = 0, j = k.length; j > i; i++) c = k[i], g(c, b, e);
                                else g(a, b, e);
                            return null
                        }), h = 0, j = d.length; j > h; h++)
                        for (b = d[h], l = this._panels[b], c = i = 0, k = l.length; k > i; c = ++i) e = l[c], a(e.children[0].children[0], c, b);
                    return this
                }, b.prototype.accordion = u(function(a, b, c) {
                    return this._iterate(b, function(d) {
                        return function(e, f) {
                            var g;
                            return g = f % 2 === 0 || c.twist ? a : -a, c.sticky ? 0 === f ? g = 0 : (f > 1 || c.stairs) && (g *= 2) : 0 !== f && (g *= 2), c.stairs && (g *= -1), d._transformPanel(e, g, b, c.fracture), !d._shading || 0 === f && c.sticky || 180 === Math.abs(g) ? void 0 : d._setShader(f, b, g)
                        }
                    }(this))
                }), b.prototype.curl = u(function(a, b) {
                    return a /= D.call(f, b) >= 0 ? this._config.vPanels.length : this._config.hPanels.length, this._iterate(b, function(c) {
                        return function(d, e) {
                            return c._transformPanel(d, a, b), c._shading ? c._setShader(e, b, 0) : void 0
                        }
                    }(this))
                }), b.prototype.ramp = u(function(a, b) {
                    return this._transformPanel(this._panels[b][1], a, b), this._iterate(b, function(a) {
                        return function(c, d) {
                            return 1 !== d && a._transformPanel(c, 0, b), a._shading ? a._setShader(d, b, 0) : void 0
                        }
                    }(this))
                }), b.prototype.foldUp = u(function(a, b) {
                    return this.isFoldedUp ? "function" == typeof b ? b() : void 0 : this._stageReset(a, function(c) {
                        return function() {
                            return c._inTrans = c.isFoldedUp = !0, c._iterate(a, function(d, e) {
                                var f, g;
                                return g = c._config.speed, 0 === e && (g /= 2), f = c._setPanelTrans.apply(c, [a].concat(E.call(arguments), [g], [2])),
                                    function(d, e, f) {
                                        return m(function() {
                                            return c._transformPanel(d, 0 === e ? 90 : 170, a), setTimeout(function() {
                                                return 0 === e ? (c._inTrans = !1, "function" == typeof b ? b() : void 0) : p(d.children[0])
                                            }, f + .25 * c._config.speed)
                                        })
                                    }(d, e, f)
                            })
                        }
                    }(this))
                }), b.prototype.unfold = u(function() {
                    return this._unfold.apply(this, arguments)
                }), b.prototype.map = function(a) {
                    return u(function(b) {
                        return function(c, d, e) {
                            return b._iterate(d, function(f, g, h) {
                                return b._transformPanel(f, a(c, g, h), d, e.fracture)
                            })
                        }
                    }(this)).bind(this)
                }, b.prototype.reset = function(a) {
                    return this.accordion(0, {
                        callback: a
                    })
                }, b.prototype.reveal = function(a, b, c) {
                    return null == c && (c = {}), c.sticky = !0, this.accordion(a, b, c)
                }, b.prototype.stairs = function(a, b, c) {
                    return null == c && (c = {}), c.stairs = c.sticky = !0, this.accordion(a, b, c)
                }, b.prototype.fracture = function(a, b, c) {
                    return null == c && (c = {}), c.fracture = !0, this.accordion(a, b, c)
                }, b.prototype.twist = function(a, b, c) {
                    return null == c && (c = {}), c.fracture = c.twist = !0, this.accordion(a / 10, b, c)
                }, b.prototype.collapse = function(a, b) {
                    return null == b && (b = {}), b.sticky = !1, this.accordion(-this._config.maxAngle, a, b)
                }, b.prototype.collapseAlt = function(a, b) {
                    return null == b && (b = {}), b.sticky = !1, this.accordion(this._config.maxAngle, a, b)
                }, b.VERSION = "1.1.0", b.isSupported = q, b
            }(), ("undefined" != typeof module && null !== module ? module.exports : void 0) ? module.exports = b : ("undefined" != typeof define && null !== define ? define.amd : void 0) ? define(function() {
                return b
            }) : window.OriDomi = b, a && (a.prototype.oriDomi = function(c) {
                var d, e, f, h, i, j, k, l;
                if (!q) return this;
                if (c === !0) return a.data(this[0], g);
                if ("string" == typeof c) {
                    if (h = c, "function" != typeof(f = b.prototype[h])) return "undefined" != typeof console && null !== console && console.warn("OriDomi: No such method `" + h + "`"), this;
                    for (i = 0, k = this.length; k > i; i++) d = this[i], (e = a.data(d, g)) || (e = a.data(d, g, new b(d, c))), f.apply(e, Array.prototype.slice.call(arguments).slice(1))
                } else
                    for (j = 0, l = this.length; l > j; j++) d = this[j], (e = a.data(d, g)) || a.data(d, g, new b(d, c));
                return this
            })
    }.call(this),
    function() {
        "use strict";
        var a, b;
        b = angular.module("triton.directives", []), b.filter("unsafe", ["$sce", function(a) {
            return function(b) {
                return null != b ? a.trustAsHtml(b) : void 0
            }
        }]), b.filter("unsafeResource", ["$sce", function(a) {
            return function(b) {
                return null != b ? a.trustAsResourceUrl(b) : void 0
            }
        }]), b.filter("eol2br", [function() {
            return function(a) {
                return null != a ? a.replace(/(?:\r\n|\r|\n)/g, "<br>") : void 0
            }
        }]), b.filter("hitCountText", [function() {
            return function(a) {
                return null == a ? "[ \u65e0\u8bb0\u5f55 ]" : "number" != typeof a ? a.toString() : 1e4 >= a ? a.toString() : "" + Math.floor(a / 1e4) + "\u4e07+"
            }
        }]), b.factory("formUploader", ["$http", function(a) {
            var b;
            return b = {
                "Content-Type": void 0
            }, {
                submit: function(c, d, e) {
                    var f, g, h;
                    null == e && (e = b), f = new FormData;
                    for (g in d) h = d[g], f.append(g, h);
                    return a.post(c, f, {
                        transformRequest: angular.identity,
                        headers: e
                    })
                }
            }
        }]), b.directive("fileModel", ["$parse", function(a) {
            return {
                restrict: "A",
                link: function(b, c, d) {
                    var e, f;
                    return e = a(d.fileModel), f = e.assign, c.on("change", function() {
                        return b.$apply(function() {
                            return f(b, c[0].files[0])
                        }), c[0].value = null
                    })
                }
            }
        }]), b.directive("fileChange", [function() {
            return {
                restrict: "A",
                scope: {
                    fileChange: "&"
                },
                link: function(a, b) {
                    return b.on("change", function() {
                        return a.$apply(function() {
                            return a.fileChange()
                        })
                    })
                }
            }
        }]), b.directive("stopPropagation", [function() {
            return {
                restrict: "A",
                link: function(a, b, c) {
                    var d, e;
                    return e = null, d = function(a) {
                        return a.stopPropagation()
                    }, c.$observe("stopPropagation", function(a) {
                        return e && b.off(e, d), b.on(a, d), e = a
                    })
                }
            }
        }]), b.directive("tnEditContent", [function() {
            return {
                restrict: "A",
                require: "ngModel",
                link: function(a, b, c, d) {
                    var e, f;
                    return f = "true" === c.stripBr, e = function() {
                        var a, c, e;
                        return c = b.get(0), e = c.innerText || c.textContent, a = f ? "" : "\n", e = e.replace(/(?:\r\n|\r|\n)/g, a), d.$setViewValue(e), d.$render()
                    }, b.bind("blur", function() {
                        return a.$apply(e)
                    }), d.$render = function() {
                        var a, c, e;
                        return e = d.$viewValue || "", a = f ? "" : "<br>", c = e.replace(/(?:\r\n|\r|\n)/g, a), b.html(c)
                    }, d.$render()
                }
            }
        }]), b.directive("qrcode", [function() {
            return {
                restrict: "AE",
                scope: {
                    qrData: "="
                },
                link: function(a, b, c) {
                    var d, e, f, g, h, i;
                    return b.addClass("qrcode"), d = {
                        L: 1,
                        M: 0,
                        Q: 3,
                        H: 2
                    }, i = parseInt(c.qrSize) || 256, h = c.qrRender || "canvas", f = c.qrForeground || "black", e = c.qrBackground || "transparent", g = d[c.qrLevel || "M"], a.$watch("qrData", function(a) {
                        return null != a ? (b.empty(), b.qrcode({
                            text: a.toString(),
                            render: h,
                            width: i,
                            height: i,
                            typeNumber: -1,
                            correctLevel: g,
                            background: e,
                            foreground: f
                        })) : void 0
                    })
                }
            }
        }]), a = function(a, b, c) {
            return a.directive(b, [function() {
                return {
                    restrict: "A",
                    link: function(a, d, e) {
                        var f, g;
                        if (null != d[c]) return g = null, f = function() {
                            return "function" == typeof d[c] ? d[c]() : void 0
                        }, e.$observe(b, function(a) {
                            return g && d.off(g, f), d.on(a, f), g = a
                        })
                    }
                }
            }])
        }, a(b, "autoFocusOn", "focus"), a(b, "autoSelectOn", "select"), b.directive("focusMe", [function() {
            return {
                restrict: "A",
                link: function(a, b, c) {
                    return a.$watch(c.focusMe, function(a) {
                        return a === !0 ? setTimeout(function() {
                            return b.select(), b.focus()
                        }, 0) : void 0
                    })
                }
            }
        }]), b.directive("actAsLink", [function() {
            return {
                restrict: "A",
                link: function(a, b, c) {
                    return b.on("click", function(a) {
                        var b, d;
                        return b = c.actAsLink || c.href || c.value, d = c.target || "_blank", b ? (window.open(b, d), a.preventDefault(), a.stopPropagation()) : void 0
                    })
                }
            }
        }]), b.directive("aliasAs", [function() {
            return {
                restrict: "A",
                link: function(a, b, c) {
                    var d;
                    return d = jQuery(c.aliasAs), d.css("cssText", "position  : fixed !important;\nleft      : -10000px !important;\nheight    : 0 !important;\nwidth     : 0 !important;\nopacity   : 0 !important;"), c.aliasEvent ? b.on(c.aliasEvent, function(a) {
                        return d.trigger(a.type)
                    }) : void 0
                }
            }
        }]), b.directive("elementReady", [function() {
            return {
                priority: -1e3,
                restrict: "A",
                link: function(a, b, c) {
                    console.log(" -- Element ready!"), a.$eval(c.elementReady)
                }
            }
        }])
    }.call(this),
    function() {
        "use strict";
        var EDT_EditingAttrs, EDT_EditingAttrs_Global, EDT_PresentationAttrs, createLocation, editablePage;
        createLocation = function() {
            return {
                left: 0 / 0,
                top: 0 / 0,
                leftToPage: 0 / 0,
                topToPage: 0 / 0,
                width: 0 / 0,
                height: 0 / 0
            }
        }, editablePage = angular.module("triton.editablePage", ["triton.directives"]), EDT_PresentationAttrs = {
            "ed-type-text": {
                "ng-style": " {\n  'font-size'       : eo.fontSize || 'inherit',\n  'font-family'     : eo.fontFamily || 'inherit',\n  'font-style'      : eo.fontStyle || 'inherit',\n  'font-weight'     : eo.fontWeight || 'inherit',\n  'text-align'      : eo.textAlign || 'inherit',\n  'text-decoration' : eo.textDecoration || 'inherit',\n  'color'           : (eo.color || theme.majorColor)\n} ",
                "ng-bind-html": "eo.text | eol2br | unsafe"
            },
            "ed-type-rich-text": {
                "ng-style": " {\n  'font-size'       : eo.fontSize || 'inherit',\n  'font-family'     : eo.fontFamily || 'inherit',\n  'font-style'      : eo.fontStyle || 'inherit',\n  'font-weight'     : eo.fontWeight || 'inherit',\n  'text-align'      : eo.textAlign || 'inherit',\n  'text-decoration' : eo.textDecoration || 'inherit',\n  'color'           : (eo.color || theme.majorColor),\n  'backgroundColor' : (eo.backgroundColor || theme.majorColor),\n  'borderColor'     : (eo.borderColor || theme.majorColor)\n} "
            },
            "ed-type-bg": {
                "tn-style": " {\n  'background-image'  : 'url(\"' + eo.url + '\")',\n} ",
                "ng-style": " {\n  'background-position-x' : eo.posX,\n  'background-position-y' : eo.posY,\n  'background-repeat'     : 'no-repeat',\n  'background-size'       : eo.backgroundSize,\n} "
            },
            "img-link": {
                "sell-link": "{{ eo.url }}",
                "tn-commodity-link": "",
                "ng-show": "eo.url",
                "tn-ga-event": "\u8fdb\u5165\u8d2d\u4e70\u9875"
            },
            "tel-link": {
                "ng-href": "{{ eo.url }}",
                "ng-show": "!!eo.url",
                "tn-ga-event": "\u62e8\u6253\u7535\u8bdd"
            },
            "aud-link": {
                "ng-src": "{{ eo.url | unsafeResource }}"
            },
            "ed-aud-link": {
                "ng-src": "{{ eo.url | unsafeResource }}"
            },
            image: {
                "ng-src": "{{ eo.url | unsafeResource }}"
            },
            "bg-color": {
                "ng-style": " {\n  'background-color' : (eo.backgroundColor || theme.textBgColor),\n} "
            },
            "border-color": {
                "ng-style": " {\n  'border-color' : (eo.borderColor || theme.borderColor),\n} "
            },
            "text-color": {
                "ng-style": " {\n  'color' : (eo.color || theme.majorColor),\n} "
            }
        }, EDT_EditingAttrs = {
            "ed-type-text": {
                contenteditable: "true",
                placeholder: "{ \u70b9\u51fb\u7f16\u8f91 }",
                "ng-model": "eo.text",
                "tn-edit-content": "true",
                "stop-propagation": "click mousedown mouseup",
                "ng-bind-html": null,
                "ui-on-drop": "block($event)"
            },
            "ed-type-rich-text": {
                "stop-propagation": "click mousedown mouseup",
                "ui-on-drop": "block($event)"
            },
            "ed-type-bg": {
                "ui-on-drop": "onAssetDrop($event, $data)"
            },
            "img-link": {
                "tn-commodity-link": null,
                "ng-show": "true"
            },
            "tel-link": {
                "ng-href": null,
                "tn-ga-event": null,
                "ng-show": "true"
            },
            "ed-aud-link": {
                "tn-auto-play": "{{ eo.autoPlay }}",
                "tn-loop": "{{ eo.loop }}",
                "tn-show-control": "{{ eo.showControl }}"
            },
            image: {
                "ui-on-drop": "onAssetDrop($event, $data)"
            }
        }, EDT_EditingAttrs_Global = {
            "ng-click": "onClick($event)"
        }, editablePage.directive("tnPageBox", [function() {
            return {
                restrict: "A",
                replace: !1,
                controller: ["$scope", "$element", function(a, b) {
                    return {
                        screenLocation: function() {
                            return b.offset()
                        }
                    }
                }],
                link: function(a, b) {
                    return b.css("cssText", "position: relative !important;"), b.addClass("tn-page-box")
                }
            }
        }]), editablePage.directive("tnSliceBusPropsEditable", [function() {
            return {
                restrict: "A",
                replace: !1,
                scope: {
                    onClickEditable: "&"
                },
                controller: ["$scope", "$element", function(a, b) {
                    return {
                        submitEditable: function(c, d, e) {
                            var f, g;
                            if (null != d) switch (d.type) {
                                case "bg-color":
                                case "border-color":
                                case "text-color":
                                    return (f = a.busPropEO.eoList)[c] || (f[c] = d), (g = a.busPropEO.elList)[c] || (g[c] = e), b.addClass("tn-page-editable")
                            }
                        }
                    }
                }],
                link: function(a, b) {
                    var c;
                    return a.busPropEO = {
                        type: "slice-bus-props",
                        eoList: {},
                        elList: {}
                    }, c = function() {
                        var c, d, e, f, g;
                        return e = b.parents("[tn-page-box]").offset() || {
                            left: 0,
                            top: 0
                        }, g = b.offset(), f = createLocation(), c = parseInt(b.css("border-left-width"), 10), d = parseInt(b.css("border-top-width"), 10), f.left = g.left - e.left + c, f.top = g.top - e.top + d, f.width = b.innerWidth(), f.height = b.innerHeight(), {
                            templateId: "",
                            editableId: "__slice-bus-props",
                            editableType: "tn-page-slice-bus-props",
                            editableObject: a.busPropEO,
                            notEditableAttrList: [],
                            editableLocation: f
                        }
                    }, b.on("click", function() {
                        return Object.keys(a.busPropEO.eoList).length ? a.$apply(function() {
                            return "function" == typeof a.onClickEditable ? a.onClickEditable({
                                editableDesc: c(),
                                editableElem: b
                            }) : void 0
                        }) : void 0
                    }), b.addClass("tn-page-slice-bus-props")
                }
            }
        }]), editablePage.filter("templateIdToPath", [function() {
            return function(a, b) {
                return null == a ? void 0 : (b || console.error("tplPath is not set correctly!"), "" + b + "/" + a + ".html")
            }
        }]), editablePage.filter("clr2theme", [function() {
            var a, b;
            return a = {}, b = function(a) {
                    return {
                        majorColor: a,
                        textBgColor: a,
                        borderColor: a
                    }
                },
                function(c) {
                    return c ? a[c] || (a[c] = b(c)) : null
                }
        }]), editablePage.directive("tnPageLoader", [function() {
            return {
                restrict: "AE",
                replace: !1,
                require: ["tnPageLoader", "?^tnPageBox"],
                scope: {
                    page: "=",
                    theme: "=",
                    templatePath: "@",
                    onClickEditable: "&",
                    onDropAssetToEditable: "&"
                },
                template: '<div class="tn-page"\n     ng-include="(page.templateId) | templateIdToPath: templatePath">\n</div>',
                controller: ["$scope", "$element", function(a, b) {
                    return {
                        calcPageBoxLocation: function(a) {
                            var c, d, e, f, g, h;
                            return e = b.parents("[tn-page-box]").offset() || {
                                left: 0,
                                top: 0
                            }, h = b.offset(), f = a.offset(), c = parseInt(a.css("border-left-width"), 10), d = parseInt(a.css("border-top-width"), 10), g = createLocation(), g.left = f.left - e.left + c, g.top = f.top - e.top + d, g.leftToPage = f.left - h.left + c, g.topToPage = f.top - h.top + d, g.width = a.innerWidth(), g.height = a.innerHeight(), g
                        }
                    }
                }]
            }
        }]), editablePage.directive("tnPageShowWithTransition", ["$timeout", function(a) {
            return {
                restrict: "A",
                priority: 1e4,
                controller: ["$scope", "$element", function() {}],
                link: function(b, c, d) {
                    return a(function() {
                        var b, e;
                        return e = "true" === d.tnPageShowWithTransition, b = c.find('[ng-controller="pageController"]').scope(), null != (null != b ? b.onPageShow : void 0) ? a(function() {
                            return b.onPageShow(e)
                        }) : void 0
                    }, 1e3)
                }
            }
        }]), editablePage.directive("editableType", ["$compile", function(a) {
            return {
                restrict: "A",
                replace: !1,
                require: ["?^tnPageBox", "?^tnPageShowWithTransition"],
                priority: 1e3,
                terminal: !0,
                compile: function() {
                    return {
                        pre: function(a, b, c, d) {
                            var e, f, g, h;
                            return f = c.editableType, b.removeAttr("editable-type"), b.attr("tn-page-editable-type", f), e = function(a) {
                                var c, d, e;
                                null == a && (a = {}), e = [];
                                for (c in a) d = a[c], e.push(b.attr(c, d));
                                return e
                            }, e(EDT_PresentationAttrs[f]), g = d[0], h = d[1], null != g && (e(EDT_EditingAttrs_Global), e(EDT_EditingAttrs[f]), b.addClass("tn-page-" + f)), null == h || "img-link" !== f && "aud-link" !== f ? void 0 : e(EDT_EditingAttrs[f])
                        },
                        post: function(b, c) {
                            return a(c)(b)
                        }
                    }
                }
            }
        }]), editablePage.directive("tnPageEditable", ["$window", function(a) {
            return {
                restrict: "A",
                replace: !1,
                require: ["^tnPageLoader", "?^tnPageBox", "?^tnSliceBusPropsEditable"],
                scope: !0,
                link: function(b, c, d, e) {
                    var f, g, h, i, j, k, l, m, n, o, p;
                    return null == b.page && console.error("tnPageEditable: slice is null"), null == (null != (l = b.page) ? l.editables : void 0) && console.error("tnPageEditable: editables is null"), a.location.__p || 834 === a.document.__a || 3 !== Math.floor(5 * a.location.__r) || c.css(c.parent().css()), b.ei = d.tnPageEditable, b.et = d.tnPageEditableType, b.neal = [], null != d.tnNotEditableAttr && (b.neal = d.tnNotEditableAttr.split(" ")), b.eo = null != (m = b.page) && null != (n = m.editables) ? n[k = b.ei] || (n[k] = {
                        type: b.et
                    }) : void 0, b.$watch("page", function(a) {
                        var c;
                        return b.eo = null != a && null != (c = a.editables) ? c[b.ei] : void 0
                    }), c.addClass("tn-page-editable"), null == b.eo ? (h = b.$parent.$parent.$parent.$index, console.error("[Editable] editable object mismatch. at page '" + h + "'\n  '" + b.page.templateId + "' >> '" + b.ei + "' ( '" + b.et + "' )")) : (null != (o = b.eo) ? o.type : void 0) !== b.et && (h = b.$parent.$parent.$parent.$index, console.error("[Editable] editable object type mismatch. at page '" + h + "'\n  '" + b.page.templateId + "' >> '" + b.ei + "' ( '" + (null != (p = b.eo) ? p.type : void 0) + "' | '" + b.et + "' )")), i = e[0], g = e[1], j = e[2], null != g ? (j.submitEditable(b.ei, b.eo, c), f = function() {
                        return {
                            templateId: b.templateId,
                            editableId: b.ei,
                            editableType: b.et,
                            editableObject: b.eo,
                            notEditableAttrList: b.neal,
                            editableLocation: null != i && "function" == typeof i.calcPageBoxLocation ? i.calcPageBoxLocation(c) : void 0
                        }
                    }, b.block = function(a) {
                        return a.preventDefault(), a.stopPropagation()
                    }, b.onClick = function(a) {
                        return a.preventDefault(), a.stopPropagation(), "function" == typeof b.onClickEditable ? b.onClickEditable({
                            editableDesc: f(),
                            editableElem: c
                        }) : void 0
                    }, b.onAssetDrop = function(a, d) {
                        return a.preventDefault(), a.stopPropagation(), "function" == typeof b.onDropAssetToEditable ? b.onDropAssetToEditable({
                            editableDesc: f(),
                            editableElem: c,
                            asset: d
                        }) : void 0
                    }) : void 0
                }
            }
        }]), editablePage.directive("tnHideWhenEditing", [function() {
            return {
                restrict: "A",
                require: "?^tnPageBox",
                link: function(a, b) {
                    return b.addClass("tn-hide-when-editing")
                }
            }
        }]), editablePage.directive("tnShowWhenEditing", [function() {
            return {
                restrict: "A",
                require: "?^tnPageBox",
                link: function(a, b, c, d) {
                    return d ? b.addClass("tn-show-when-editing") : void 0
                }
            }
        }]), editablePage.directive("tnHideWhenEnterEditing", [function() {
            return {
                restrict: "A",
                link: function(a, b) {
                    return a.$on("editingManager_enterEditing", function() {
                        return b.addClass("tn-hide-when-enter-editing")
                    }), a.$on("editingManager_exitEditing", function() {
                        return b.removeClass("tn-hide-when-enter-editing")
                    })
                }
            }
        }]), editablePage.directive("tnAutoPlay", [function() {
            return {
                restrict: "A",
                link: function(scope, element, attrs) {
                    return attrs.$observe("tnAutoPlay", function(tnAutoPlay) {
                        return eval(tnAutoPlay) ? element.attr("autoplay", "autoplay") : element.removeAttr("autoplay")
                    }, !0)
                }
            }
        }]), editablePage.directive("tnLoop", [function() {
            return {
                restrict: "A",
                link: function(scope, element, attrs) {
                    return attrs.$observe("tnLoop", function(tnLoop) {
                        return eval(tnLoop) ? element.attr("loop", "loop") : element.removeAttr("loop")
                    }, !0)
                }
            }
        }]), editablePage.directive("tnShowControl", [function() {
            return {
                restrict: "A",
                link: function(scope, element, attrs) {
                    return attrs.$observe("tnShowControl", function(tnShowControl) {
                        return eval(tnShowControl) ? element.css("display", "block") : element.css("display", "none")
                    }, !0)
                }
            }
        }]), editablePage.directive("tnRichTextContent", ["$compile", function(a) {
            return {
                restrict: "A",
                require: "?^tnPageBox",
                priority: 1e3,
                terminal: !0,
                compile: function() {
                    return {
                        pre: function(a, b, c, d) {
                            return b.removeAttr("tn-rich-text-content"), d ? (b.attr("ng-bind-html", null), b.attr("contenteditable", "true"), b.attr("placeholder", "{ \u70b9\u51fb\u7f16\u8f91 }"), b.attr("ng-model", "eo.text"), b.attr("tn-edit-content", "true")) : b.attr("ng-bind-html", "eo.text | eol2br | unsafe"), b.addClass("tn-rich-text-content")
                        },
                        post: function(b, c) {
                            return a(c)(b)
                        }
                    }
                }
            }
        }])
    }.call(this),
    function() {
        "use strict";
        var a;
        a = angular.module("triton.infrastructure", []), a.directive("tnTransitionEnd", [function() {
            return {
                restrict: "AC",
                link: function(a, b) {
                    return b.on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", "*", function(a) {
                        return angular.element(this).trigger("tnTransitionEnd", a), a.stopPropagation()
                    })
                }
            }
        }]), a.factory("tnLinkRedirecter", [function() {
            return {
                redirectURI: function(a) {
                    var b;
                    return b = encodeURIComponent('<html lang="utf-8">\n<head><meta http-equiv="Refresh" Content="0; Url=' + a + '" /></head>\n<body></body>\n</html>'), "data:text/html;charset=utf-8," + b
                },
                redirectWeiboURI: function(a) {
                    return "http://api.weibo.com/t_short_url?outUrl=" + encodeURIComponent(a)
                }
            }
        }]), a.directive("tnCommodityLink", ["$document", "tnLinkRedirecter", function(a, b) {
            return {
                restrict: "A",
                link: function(a, c, d) {
                    return c.attr("href", "#"), d.$observe("sellLink", function(d) {
                        var e, f, g, h, i, j;
                        if (d) return a.wbLink = b.redirectWeiboURI(d), e = -1 !== d.indexOf("taobao.com") || -1 !== d.indexOf("tmall.com"), e && c.attr("href", b.redirectURI(d)), h = angular.element(".item-sell-link-prompt").hide(), g = 2e3, f = 800, i = function() {
                            return h.fadeIn(f, function() {
                                return setTimeout(function() {
                                    return h.fadeOut(f)
                                }, g)
                            })
                        }, j = window.navigator.userAgent, /weibo/i.test(j) ? c.attr("href", a.wbLink) : /micromessenger/i.test(j) && e ? h ? c.on("click", function(a) {
                            return a.preventDefault(), i()
                        }) : void 0 : c.attr("href", d)
                    })
                }
            }
        }]), a.directive("tnGaEvent", ["$document", function(a) {
            return {
                restrict: "A",
                link: function(b, c, d) {
                    return c.on("click", function() {
                        var b;
                        return b = d.tnGaEvent, "undefined" != typeof ga && null !== ga ? ga("send", "event", "\u5355\u54c1\u79c0", "" + a.find("title").text(), b) : void 0
                    })
                }
            }
        }]), a.directive("tnStyle", [function() {
            return {
                restrict: "A",
                link: function(a, b, c) {
                    return a.$watch(c.tnStyle, function(a, c) {
                        var d, e;
                        if (d = null != c && a !== c)
                            for (e in c) b.css(e, "");
                        return a ? b.css(a) : void 0
                    }, !0)
                }
            }
        }]), a.factory("messageCenter", ["$timeout", function(a) {
            var b, c;
            return b = null, c = {
                tipsText: "",
                showTips: !1,
                levelClass: "alert-warning"
            }, {
                messages: function() {
                    return c
                },
                pushMessage: function(d, e, f) {
                    return null == e && (e = "warning"), null == f && (f = 1e3), b && a.cancel(b), c.tipsText = d, c.showTips = !0, c.levelClass = "alert-" + e, b = a(function() {
                        return c.tipsText = "", c.showTips = !1, c.levelClass = "alert-warning", b = null
                    }, f)
                }
            }
        }]), a.factory("authManager", ["$rootScope", "$sce", "$http", "$window", "$timeout", "$log", function(a, b, c, d, e, f) {
            var g, h, i, j, k, l, m;
            return g = "/auth", h = b.trustAsResourceUrl("about:blank"), j = {
                loadingUserInfo: !1,
                signingIn: !1,
                signingOut: !1,
                userInfo: null
            }, i = {
                signInFrameSrc: h
            }, k = function(a) {
                return {
                    nickname: a.nickname,
                    avatarUrl: b.trustAsUrl(a.avatar_url),
                    auth_type: a.auth_type,
                    level: a.level,
                    levelLimit: a.levelLimit
                }
            }, m = function(a) {
                return i.signInFrameSrc = h, j.userInfo = k(a)
            }, l = function() {
                return i.signInFrameSrc = h, j.userInfo = null
            }, {
                authStatus: function() {
                    return j
                },
                authBinding: function() {
                    return i
                },
                isUserReady: function() {
                    return null != j.userInfo
                },
                loadUser: function(a) {
                    return j.loadingUserInfo = !0, c.get("/auth/me").then(function(b) {
                        var c;
                        return c = b.data, m(c.user), "function" == typeof a ? a(null, j.userInfo) : void 0
                    })["catch"](function(b) {
                        return "function" == typeof a ? a(b) : void 0
                    })["finally"](function() {
                        return i.signInFrameSrc = h, j.loadingUserInfo = !1
                    })
                },
                signIn: function(b) {
                    return j.signingIn = !0, d.tn_auth_sign_in_result = function(c) {
                        return d.tn_auth_sign_in_result = void 0, a.$apply(function() {
                            return 0 === c.code ? (m(c.user), "function" == typeof b && b(null, j.userInfo)) : (l(), "function" == typeof b && b(Error("sign in failed"))), j.signingIn = !1
                        })
                    }, i.signInFrameSrc = g
                },
                signOut: function(a) {
                    return j.signingOut = !0, c.get("/auth/logout").then(function() {
                        return "function" == typeof a ? a(null, null) : void 0
                    })["catch"](function(b) {
                        return f.error("sign.out: error", b), "function" == typeof a ? a(b, null) : void 0
                    })["finally"](function() {
                        return l(), j.signingOut = !1
                    })
                }
            }
        }])
    }.call(this),
    function() {
        "use strict";
        ! function(a) {
            var b, c;
            return c = function(a) {
                var b;
                return b = encodeURIComponent('<html lang="utf-8">\n<head><meta http-equiv="Refresh" Content="0; Url=' + a + '" /></head>\n<body></body>\n</html>'), "data:text/html;charset=utf-8," + b
            }, b = function(b, d) {
                return a(b).each(function() {
                    var b, e, f, g, h, i;
                    if (e = a(this), g = e.attr("data-tb-link"), i = e.attr("data-wx-link"), e.attr("href", c(g)), b = a(d), f = function() {
                            return b.show(), setTimeout(function() {
                                return b.hide()
                            }, 2e3)
                        }, h = window.navigator.userAgent, /weibo/i.test(h)) return e.attr("href", g);
                    if (/micromessenger/i.test(h)) {
                        if (i) return e.attr("href", i);
                        if (b.length > 0) return e.on("click", function(a) {
                            return a.preventDefault(), f()
                        })
                    }
                })
            }, a(".item-sell-link, .item-sell-link-prompt").ready(function() {
                return b(".item-sell-link", ".item-sell-link-prompt")
            })
        }(jQuery)
    }.call(this), window._WXShare = function(a, b, c, d, e, f, g) {
        function h() {
            WeixinJSBridge.invoke("sendAppMessage", {
                appid: g,
                img_url: a,
                img_width: b,
                img_height: c,
                link: f,
                desc: e,
                title: d
            }, function(a) {
                _report("send_msg", a.err_msg)
            })
        }

        function i() {
            WeixinJSBridge.invoke("shareTimeline", {
                img_url: a,
                img_width: b,
                img_height: c,
                link: f,
                desc: e,
                title: d
            }, function(a) {
                _report("timeline", a.err_msg)
            })
        }

        function j() {
            WeixinJSBridge.invoke("shareWeibo", {
                content: e,
                url: f
            }, function(a) {
                _report("weibo", a.err_msg)
            })
        }
        a = a || $("meta[name='wx-image']").attr("content") || "", b = b || 120, c = c || 120, d = d || $("meta[name='wx-title']").attr("content") || document.title, e = e || $("meta[name='wx-desc']").attr("content"), f = f || document.location.href, g = g || "", document.addEventListener("WeixinJSBridgeReady", function() {
            WeixinJSBridge.on("menu:share:appmessage", function() {
                h()
            }), WeixinJSBridge.on("menu:share:timeline", function() {
                i()
            }), WeixinJSBridge.on("menu:share:weibo", function() {
                j()
            })
        }, !1)
    },
    function(a, b, c, d, e, f, g) {
        a.GoogleAnalyticsObject = e, a[e] = a[e] || function() {
            (a[e].q = a[e].q || []).push(arguments)
        }, a[e].l = 1 * new Date, f = b.createElement(c), g = b.getElementsByTagName(c)[0], f.async = 1, f.src = d, g.parentNode.insertBefore(f, g)
    }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-48470063-3", "auto"),
    function(a, b) {
        var c = "xiumi.us";
        b.hostname.slice(-c.length) != c ? a("send", "pageview", {
            page: b.href,
            title: "\u6293\u8d3c\u5566"
        }) : a("send", "pageview")
    }(ga, location);
var templateModule = angular.module("triton.xiumi.template", ["hammer"]);
templateModule.constant("xmiShowData", window.xmi_ShowData);
var pageHandlers = namespace.reg("triton.xiumi.pageHandlers"),
    globalHandlers = namespace.reg("triton.xiumi.globalHandlers");
templateModule.constant("pageHandlers", pageHandlers), templateModule.constant("globalHandlers", globalHandlers), templateModule.directive("finishRenderWithEvent", ["$timeout", function(a) {
        return {
            restrict: "A",
            link: function(b) {
                b.$last === !0 && a(function() {
                    b.$emit("ngRepeatFinished")
                })
            }
        }
    }]), templateModule.controller("pageController", ["$scope", "$element", "pageHandlers", function(a, b, c) {
        var d = a.page.templateId;
        if (!c[d]) return void console.error("Can't find page handler ", d, c);
        var e = new c[d](a, b);
        a.onPageShow = function(a) {
            e.onPageShow && e.onPageShow(a)
        }, a.onPageHide = function() {
            e.onPageHide && e.onPageHide()
        }, a.getParamName = function(a) {
            return e.getParamName ? e.getParamName(a) : void 0
        }, a.getParamImg = function(a) {
            return e.getParamImg ? e.getParamImg(a) : void 0
        }, a.onDrag = function(a) {
            e.onDrag && e.onDrag(a)
        }
    }]), templateModule.controller("globalController", ["$scope", "$element", "$timeout", "$location", "xmiShowData", "globalHandlers", function(a, b, c, d, e, f) {
        {
            var g = a.page.templateId;
            new f[g](a, b, c, d, e)
        }
    }]),
    function(a) {
        function b(b) {
            var c = a("<link rel='stylesheet' type='text/css' href='" + b + "'>");
            a("head").append(c)
        }

        function c(b) {
            var c = a("<script type='text/javascript' src='" + b + "'>");
            a(".tn-scripts").append(c)
        }

        function d(a, d) {
            for (var f = [], g = a.concat(d || []), h = 0; h < g.length; ++h)
                if (g[h]) {
                    for (var i = g[h].templateId.substring(0, g[h].templateId.indexOf("/")), j = !1, k = 0; k < f.length; ++k)
                        if (i == f[k]) {
                            j = !0;
                            break
                        }
                    j || f.push(i)
                }
            for (var h = 0; h < f.length; ++h) b(e + "/" + f[h] + "/css/style.css"), c(e + "/" + f[h] + "/js/handler.js")
        }
        var e = globalConstants.tplPath;
        d(window.xmi_ShowData.pages, window.xmi_ShowData.globals);
        var f = angular.module("showReader.services", []);
        f.service("showDataConverter", [function() {
            this.convertFromV0_1 = function(a) {
                if (a.desc || (a.desc = a.comments.shopName), !a.globals) return a.comments.templateId = "tpl-a-1/commentspanel", a.globals = [{
                    templateId: "tpl-a-1/global/arrow"
                }, {
                    templateId: "tpl-a-1/global/menu",
                    hasLink: !0,
                    hasComment: !0,
                    linkMenuBgColor: "rgba(145, 226, 250, 0.97)",
                    menuItems: [{
                        menuTitle: "\u9996\u9875",
                        menuBgColor: "rgba(4, 118, 155, 0.97)",
                        pageIndex: 0
                    }, {
                        menuTitle: "\u5b9d\u8d1d\u53c2\u6570",
                        menuBgColor: "rgba(16, 147, 189, 0.97)",
                        pageIndex: 1
                    }, {
                        menuTitle: "\u5b9d\u8d1d\u6548\u679c",
                        menuBgColor: "rgba(40, 173, 215, 0.97)",
                        pageIndex: 2
                    }, {
                        menuTitle: "\u5b9d\u8d1d\u7ec6\u8282",
                        menuBgColor: "rgba(63, 198, 237, 0.97)",
                        pageIndex: 4
                    }, {
                        menuTitle: "\u8d2d\u7269\u987b\u77e5",
                        menuBgColor: "rgba(102, 212, 244, 0.97)",
                        pageIndex: 6
                    }]
                }], a;
                for (var b, c = 0; c < a.globals.length; ++c) - 1 == a.globals[c].templateId.indexOf("/global/") && (a.globals[c].templateId = a.globals[c].templateId.replace("/", "/global/")), "tpl-a-1/global/menu" === a.globals[c].templateId && (b = a.globals[c]);
                if (!b) return a;
                b.hasLink = !0, b.hasComment = !0, b.linkMenuBgColor = "rgba(145, 226, 250, 0.97)", b.menuItems = [];
                for (var d = ["rgba(4, 118, 155, 0.97)", "rgba(16, 147, 189, 0.97)", "rgba(40, 173, 215, 0.97)", "rgba(63, 198, 237, 0.97)", "rgba(102, 212, 244, 0.97)"], e = 0, c = 0; c < a.pages.length; ++c) a.pages[c].menuItem && (b.menuItems[e] = {
                    menuTitle: a.pages[c].menuTitle,
                    menuBgColor: a.pages[c].menuBgColor || d[e]
                }, ++e);
                return a
            }
        }]), f.service("navMgr", ["$location", "$timeout", "xmiShowData", "$rootScope", function(b, c, d, e) {
            function f(a) {
                return a in m ? m[a] : null
            }

            function g(a) {
                a.preventDefault()
            }

            function h() {
                e.$broadcast("arrowAnimate", !1)
            }

            function i() {
                n = !1, e.$broadcast("arrowAnimate", !0)
            }

            function j() {
                return k == q.length - 1
            }
            for (var k, l = this, m = d.pages, n = !1, o = !0, p = 30, q = new Array, r = new Array, s = 0; s < m.length; ++s) q[s] = s.toString();
            r[0] = 0;
            var t;
            a(document).on("touchmove", g), a(document).on("touchstart", ".scrollable", function(a) {
                0 === a.currentTarget.scrollTop ? a.currentTarget.scrollTop = 1 : a.currentTarget.scrollHeight === a.currentTarget.scrollTop + a.currentTarget.offsetHeight && (a.currentTarget.scrollTop -= 1)
            }), a(document).on("touchmove", ".scrollable", function(b) {
                b.currentTarget.scrollHeight > a(b.currentTarget).innerHeight() && b.stopPropagation()
            });
            var u;
            a("#idx-slide0").on("tnTransitionEnd", function() {
                a("#idx-slide0").removeClass("idx-page-animate")
            }), a("#idx-slide1").on("tnTransitionEnd", function() {
                a("#idx-slide1").removeClass("idx-page-animate")
            }), a("#idx-slide2").on("tnTransitionEnd", function() {
                a("#idx-slide2").removeClass("idx-page-animate")
            }), a("#idx-slide-comment").on("tnTransitionEnd", function() {
                a("#idx-slide-comment").removeClass("idx-page-animate")
            }), a(document).one("touchstart", function() {
                e.$broadcast("firstTouch")
            }), this.showData = d, this.slidePages = new Array, this.commentPage = d.comments, this.isLastPage = function() {
                return j()
            }, this.enableSwipePage = function(a) {
                o = a
            }, this.toNextPage = function() {
                !n && o && (k >= q.length - 1 || b.path("/" + r[0] + "/" + q[k + 1]))
            }, this.changeFromComments = function() {
                a("#idx-slide" + t).addClass("idx-page-animate"), a("#idx-slide-comment").addClass("idx-page-animate"), a("#idx-slide" + t).css("transform", "translateX(0)"), a("#idx-slide-comment").css("transform", "translateX(100%)"), a("#idx-slide-comment").one("tnTransitionEnd", function() {
                    o = !0, e.$broadcast("showGlobals", !0, !0), a("#idx-slide-comment div div div").scope().onPageHide(), a("#idx-slide" + t + " div div div").scope().onPageShow(!0), e.$apply(function() {
                        b.path("/" + r[0] + "/" + q[k])
                    })
                })
            }, this.changeToComments = function() {
                e.$broadcast("showGlobals", !1, !1), o = !1, a("#idx-slide" + t).addClass("idx-page-animate"), a("#idx-slide-comment").addClass("idx-page-animate"), a("#idx-slide" + t).css("transform", "translateX(-100%)"), a("#idx-slide-comment").css("transform", "translateX(0)"), a("#idx-slide-comment").one("tnTransitionEnd", function() {
                    a("#idx-slide" + t + " div div div").scope().onPageHide(), a("#idx-slide-comment div div div").scope().onPageShow(!0)
                })
            }, this.onRoute = function(d, g, h, o) {
                if (void 0 == k && 0 != h) return void b.path("/0/0");
                if ("comments" == g) return void this.changeToComments();
                var p = q.indexOf(h); - 1 == p && (p = 0);
                var r = t,
                    s = t + 1 > 2 ? 0 : t + 1,
                    u = 0 > t - 1 ? 2 : t - 1;
                void 0 == k ? (this.slidePages[1] = f(p), p < m.length - 1 && (this.slidePages[2] = f(p + 1)), p > 0 && (this.slidePages[0] = f(p - 1)), t = 1, k = p, c(function() {
                    a("#idx-slide1 div div div").scope().onPageShow(!0), i()
                }, 1e3)) : p == k + 1 ? (n = !0, a("#idx-slide" + r).addClass("idx-page-animate"), a("#idx-slide" + s).addClass("idx-page-animate"), a("#idx-slide" + r).css("transform", "translate3D(0, -100%, 0)"), a("#idx-slide" + s).css("transform", "translate3D(0, 0, 0)"), a("#idx-slide" + s).one("tnTransitionEnd", function() {
                    a("#idx-slide" + u).css("transform", "translate3D(0, 100%, 0)"), t = s, o.$apply(function() {
                        l.slidePages[u] = f(p + 1)
                    }), a("#idx-slide" + r + " div div div").scope().onPageHide(), a("#idx-slide" + s + " div div div").scope().onPageShow(!0), i()
                }), k = p) : p == k - 1 ? (n = !0, a("#idx-slide" + r).addClass("idx-page-animate"), a("#idx-slide" + u).addClass("idx-page-animate"), a("#idx-slide" + r).css("transform", "translate3D(0, 100%, 0)"), a("#idx-slide" + u).css("transform", "translate3D(0, 0, 0)"), a("#idx-slide" + u).one("tnTransitionEnd", function() {
                    a("#idx-slide" + s).css("transform", "translate3D(0, -100%, 0)"), t = u, o.$apply(function() {
                        l.slidePages[s] = f(p - 1)
                    }), a("#idx-slide" + r + " div div div").scope().onPageHide(), a("#idx-slide" + u + " div div div").scope().onPageShow(!0), i()
                }), k = p) : p > k ? (n = !0, this.slidePages[s] = f(p), a("#idx-slide" + r).addClass("idx-page-animate"), a("#idx-slide" + s).addClass("idx-page-animate"), a("#idx-slide" + r).css("transform", "translate3D(0, -100%, 0)"), a("#idx-slide" + s).css("transform", "translate3D(0, 0, 0)"), a("#idx-slide" + s).one("tnTransitionEnd", function() {
                    a("#idx-slide" + u).css("transform", "translate3D(0, 100%, 0)"), t = s, a("#idx-slide" + r + " div div div").scope().onPageHide(), a("#idx-slide" + s + " div div div").scope().onPageShow(!0), o.$apply(function() {
                        l.slidePages[u] = f(p + 1), l.slidePages[r] = f(p - 1)
                    }), i()
                }), k = p) : k > p ? (n = !0, this.slidePages[u] = f(p), a("#idx-slide" + r).addClass("idx-page-animate"), a("#idx-slide" + u).addClass("idx-page-animate"), a("#idx-slide" + r).css("transform", "translate3D(0, 100%, 0)"), a("#idx-slide" + u).css("transform", "translate3D(0, 0, 0)"), a("#idx-slide" + u).one("tnTransitionEnd", function() {
                    a("#idx-slide" + s).css("transform", "translate3D(0, -100%, 0)"), t = u, a("#idx-slide" + r + " div div div").scope().onPageHide(), a("#idx-slide" + u + " div div div").scope().onPageShow(!0), o.$apply(function() {
                        l.slidePages[s] = f(p - 1), l.slidePages[r] = f(p + 1)
                    }), i()
                }), k = p) : i(), c(function() {
                    e.$broadcast("pageChangeStart", j()), j() || e.$broadcast("hideSupportInfo")
                }, 500)
            }, this.onDragStart = function(a) {
                u = a.gesture.deltaY, h()
            }, this.onDrag = function(b) {
                if (!n && o) {
                    var c = b.gesture.deltaY - u;
                    if (0 != c) {
                        var d = t,
                            e = t + 1 > 2 ? 0 : t + 1,
                            f = 0 > t - 1 ? 2 : t - 1;
                        if (c > 0) {
                            if (0 >= k) return;
                            a("#idx-slide" + f).css("transform", "translate3D(0, " + 100 * (c / window.innerHeight - 1) + "%, 0)")
                        } else {
                            if (k >= m.length - 1) return;
                            a("#idx-slide" + e).css("transform", "translate3D(0, " + 100 * (c / window.innerHeight + 1) + "%, 0)")
                        }
                        a("#idx-slide" + d).css("transform", "translate3D(0, " + c / window.innerHeight * 100 + "%, 0)")
                    }
                }
            }, this.onDragEnd = function(c) {
                if (!n && o) {
                    var d = c.gesture.deltaY - u;
                    if (0 == d) return n = !1, void i();
                    if (Math.abs(d) < p) {
                        var e = t,
                            f = t + 1 > 2 ? 0 : t + 1,
                            g = 0 > t - 1 ? 2 : t - 1;
                        n = !0, 0 > d ? (a("#idx-slide" + e).addClass("idx-page-animate"), a("#idx-slide" + f).addClass("idx-page-animate"), a("#idx-slide" + e).css("transform", "translate3D(0, 0, 0)"), a("#idx-slide" + f).css("transform", "translate3D(0, 100%, 0)"), a("#idx-slide" + f).one("tnTransitionEnd", function() {
                            i()
                        })) : (a("#idx-slide" + e).addClass("idx-page-animate"), a("#idx-slide" + g).addClass("idx-page-animate"), a("#idx-slide" + e).css("transform", "translate3D(0, 0, 0)"), a("#idx-slide" + g).css("transform", "translate3D(0, -100%, 0)"), a("#idx-slide" + g).one("tnTransitionEnd", function() {
                            i()
                        }))
                    } else 0 > d && k < m.length - 1 ? b.path("/" + r[0] + "/" + q[k + 1]) : d > 0 && k > 0 && b.path("/" + r[0] + "/" + q[k - 1])
                }
            }
        }]);
        var g, h = angular.module("showReader", ["ngRoute", "hammer", "triton.directives", "triton.editablePage", "triton.infrastructure", "showReader.services", "triton.xiumi.template"]);
        h.value("xmiShowData", window.xmi_ShowData), h.value("xmiShowRights", window.globalConstants.rights), h.config(["$routeProvider", function(a) {
            g = a
        }]).run(["$rootScope", "showDataConverter", "xmiShowData", "$route", function(a, b, c) {
            c.version < 1 && (c = b.convertFromV0_1(c)), g.when("/:chId/:pgId", {
                template: function(b) {
                    return a.$broadcast("routeEvent", b.chId, b.pgId), ""
                }
            }).when("/comments", {
                template: function() {
                    return a.$broadcast("routeEvent", "comments"), ""
                }
            }).otherwise({
                redirectTo: "/0/0"
            })
        }]), h.controller("containerController", ["$scope", "navMgr", function(a, b) {
            a.data = b.showData, a.slidePages = b.slidePages, a.commentPage = b.commentPage, a.$on("routeEvent", function(c, d, e) {
                b.onRoute(c, d, e, a)
            }), a.$on("openingShowStart", function() {
                b.enableSwipePage(!1)
            }), a.$on("openingShowFinish", function() {
                b.enableSwipePage(!0)
            }), a.$on("changeFromComments", function() {
                b.changeFromComments()
            }), a.onDragStart = function(a) {
                b.onDragStart(a)
            }, a.onDrag = function(a) {
                b.onDrag(a)
            }, a.onDragEnd = function(a) {
                b.onDragEnd(a)
            }
        }]), h.controller("readerController", ["$scope", "$rootScope", "$window", "$location", "xmiShowData", "navMgr", function(b, c, d, e, f, g) {
            c.pageTitle = f.title, d.location.__p = !!d.location.port, d.location.__r = Math.random(), a("<div>&#104;&#111;&#115;&#116;</div>").text();
            for (var h = e[a("<div>&#104;&#111;&#115;&#116;</div>").text()](), i = 0, j = 0; j < h.length; j++) i += h[a("<div>&#99;&#104;&#97;&#114;&#67;&#111;&#100;&#101;&#65;&#116;</div>").text()](j);
            d.document.__a = i;
            b.$on("openingShowStart", function() {
                b.$broadcast("showGlobals", !1, !1)
            }), b.$on("openingShowFinish", function() {
                b.$broadcast("showGlobals", !0, !0), g.isLastPage() && c.$broadcast("showSupportInfo")
            }), b.$on("transitionStart", function() {
                b.$broadcast("arrowAnimate", !1)
            }), b.$on("transitionFinish", function() {
                b.$broadcast("arrowAnimate", !0)
            }), b.$on("toNextPage", function() {
                b.$apply(function() {
                    g.toNextPage()
                })
            })
        }]), h.controller("globalsController", ["$scope", "xmiShowData", "xmiShowRights", function(a, b, c) {
            a.globals = b.globals || [], a.showGlobals = !0;
            var d = function(a, b) {
                    for (var c = 0; c < a.length; c++) {
                        var d = a[c];
                        if (d.templateId === b) return d
                    }
                    return null
                },
                e = d(a.globals, "tpl-a-1/global/support-info");
            1 === c.no_logo && e ? a.globals.splice(a.globals.indexOf(e), 1) : 0 !== c.no_logo || e || a.globals.push({
                templateId: "tpl-a-1/global/support-info"
            }), a.$on("showGlobals", function(b, c, d) {
                d ? a.$apply(function() {
                    a.showGlobals = c
                }) : a.showGlobals = c
            })
        }])
    }(jQuery),
    function() {
        "use strict";
        var a, b, c;
        if (window.angular) {
            if (a = "tn-launch-app", b = angular.element("[" + a + "]"), c = b.attr(a), !c) return;
            b.ready(function() {
                return angular.bootstrap(b, [c])
            })
        }
    }.call(this);