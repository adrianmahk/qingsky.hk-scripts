function loadIndie(){
(function() {
    var g,
        aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ca = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        da;
    if ("function" == typeof Object.setPrototypeOf)
        da = Object.setPrototypeOf;
    else {
        var ea;
        a:
        {
            var fa = {
                    rf: !0
                },
                ha = {};
            try {
                ha.__proto__ = fa;
                ea = ha.rf;
                break a
            } catch (a) {}
            ea = !1
        }da = ea ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ia = da,
        ja = function(a, b) {
            a.prototype = ca(b.prototype);
            a.prototype.constructor = a;
            if (ia)
                ia(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else
                            a[c] = b[c];
            a.m = b.prototype
        },
        ka = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        la = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global :
        this,
        ma = function(a) {
            if (a) {
                for (var b = la, c = ["String", "prototype", "startsWith"], d = 0; d < c.length - 1; d++) {
                    var e = c[d];
                    e in b || (b[e] = {});
                    b = b[e]
                }
                c = c[c.length - 1];
                d = b[c];
                a = a(d);
                a != d && null != a && ka(b, c, {
                    configurable: !0,
                    writable: !0,
                    value: a
                })
            }
        };
    ma(function(a) {
        return a ? a : function(a, c) {
            if (null == this)
                throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
            if (a instanceof RegExp)
                throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
            var b = this + "";
            a += "";
            for (var e = b.length, f = a.length, h = Math.max(0, Math.min(c | 0, b.length)), k = 0; k < f && h < e;)
                if (b[h++] != a[k++])
                    return !1;
            return k >= f
        }
    });
    var na = na || {},
        l = this,
        n = function(a) {
            return void 0 !== a
        },
        p = function(a) {
            return "string" == typeof a
        },
        oa = function(a) {
            return "number" == typeof a
        },
        pa = function() {},
        qa = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array)
                        return "array";
                    if (a instanceof Object)
                        return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c)
                        return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                        return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                        return "function"
                } else
                    return "null";
            else if ("function" == b && "undefined" == typeof a.call)
                return "object";
            return b
        },
        ra = function(a) {
            return "array" == qa(a)
        },
        sa = function(a) {
            var b = qa(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        ta = function(a) {
            return "function" == qa(a)
        },
        ua = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        ya = function(a) {
            return a[va] ||
                (a[va] = ++xa)
        },
        va = "closure_uid_" + (1E9 * Math.random() >>> 0),
        xa = 0,
        Aa = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        Ba = function(a, b, c) {
            if (!a)
                throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        q = function(a, b, c) {
            q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Aa :
            Ba;
            return q.apply(null, arguments)
        },
        Ca = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        Da = Date.now || function() {
            return +new Date
        },
        t = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.m = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Ni = function(a, c, f) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)
                    d[e - 2] = arguments[e];
                return b.prototype[c].apply(a, d)
            }
        };
    var Ea = function() {
        var a = void 0 === a ? window : a;
        this.mg = 200;
        this.Rf = 300;
        this.Cg = ".centered-bottom";
        this.yg = a
    };
    var Fa = function() {
        this.Ef = new Ea
    };
    var Ga;
    var Ha = function(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, Ha);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    t(Ha, Error);
    Ha.prototype.name = "CustomError";
    var Ia = function(a, b) {
        for (var c = a.split("%s"), d = "", e = c.length - 1, f = 0; f < e; f++)
            d += c[f] + (f < b.length ? b[f] : "%s");
        Ha.call(this, d + c[e])
    };
    t(Ia, Ha);
    Ia.prototype.name = "AssertionError";
    var Ja = function(a, b, c, d) {
            var e = "Assertion failed";
            if (c) {
                e += ": " + c;
                var f = d
            } else
                a && (e += ": " + a, f = b);
            throw new Ia("" + e, f || []);
        },
        u = function(a, b, c) {
            a || Ja("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Ka = function(a, b) {
            throw new Ia("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        La = function(a, b, c) {
            oa(a) || Ja("Expected number but got %s: %s.", [qa(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Ma = function(a, b, c) {
            p(a) || Ja("Expected string but got %s: %s.", [qa(a),
            a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Na = function(a, b, c) {
            ta(a) || Ja("Expected function but got %s: %s.", [qa(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Pa = function(a, b, c) {
            ua(a) || Ja("Expected object but got %s: %s.", [qa(a), a], b, Array.prototype.slice.call(arguments, 2))
        };
    var Qa = Array.prototype.indexOf ? function(a, b) {
            u(null != a.length);
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if (p(a))
                return p(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b)
                    return c;
            return -1
        },
        Ra = Array.prototype.forEach ? function(a, b, c) {
            u(null != a.length);
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)
                f in e && b.call(c, e[f], f, a)
        },
        Sa = Array.prototype.filter ? function(a, b) {
            u(null != a.length);
            return Array.prototype.filter.call(a,
            b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = [], e = 0, f = p(a) ? a.split("") : a, h = 0; h < c; h++)
                if (h in f) {
                    var k = f[h];
                    b.call(void 0, k, h, a) && (d[e++] = k)
                }
            return d
        },
        Ta = Array.prototype.map ? function(a, b) {
            u(null != a.length);
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = p(a) ? a.split("") : a, f = 0; f < c; f++)
                f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        Ua = Array.prototype.some ? function(a, b) {
            u(null != a.length);
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c =
                a.length, d = p(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a))
                    return !0;
            return !1
        },
        Va = function(a, b) {
            var c = 0;
            Ra(a, function(a, e, f) {
                b.call(void 0, a, e, f) && ++c
            }, void 0);
            return c
        },
        Ya = function(a) {
            var b = Wa(a, Xa, void 0);
            return 0 > b ? null : p(a) ? a.charAt(b) : a[b]
        },
        Wa = function(a, b, c) {
            for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a))
                    return f;
            return -1
        },
        Za = function(a, b) {
            for (var c = p(a) ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a))
                    return d;
            return -1
        },
        $a = function(a, b) {
            return 0 <= Qa(a, b)
        },
        ab = function(a, b) {
            var c = Qa(a, b),
                d;
            if (d = 0 <= c)
                u(null != a.length), Array.prototype.splice.call(a, c, 1);
            return d
        },
        bb = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++)
                    c[d] = a[d];
                return c
            }
            return []
        },
        cb = function(a, b, c) {
            u(null != a.length);
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        };
    var db = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        lb = function(a) {
            if (!eb.test(a))
                return a;
            -1 != a.indexOf("&") && (a = a.replace(fb, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(gb, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(hb, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(ib, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(jb, "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(kb, "&#0;"));
            return a
        },
        fb = /&/g,
        gb = /</g,
        hb = />/g,
        ib = /"/g,
        jb = /'/g,
        kb = /\x00/g,
        eb =
        /[\x00&<>"']/,
        mb = function(a) {
            return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        ob = function(a, b) {
            for (var c = 0, d = db(String(a)).split("."), e = db(String(b)).split("."), f = Math.max(d.length, e.length), h = 0; 0 == c && h < f; h++) {
                var k = d[h] || "",
                    m = e[h] || "";
                do {
                    k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                    m = /(\d*)(\D*)(.*)/.exec(m) || ["", "", "", ""];
                    if (0 == k[0].length && 0 == m[0].length)
                        break;
                    c = nb(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == m[1].length ? 0 : parseInt(m[1], 10)) || nb(0 == k[2].length, 0 ==
                    m[2].length) || nb(k[2], m[2]);
                    k = k[3];
                    m = m[3]
                } while (0 == c)
            }
            return c
        },
        nb = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        pb = function(a) {
            return String(a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            })
        },
        qb = function(a) {
            var b = p(void 0) ? mb(void 0) : "\\s";
            return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
                return b + e.toUpperCase()
            })
        };
    var rb;
    a:
    {
        var sb = l.navigator;
        if (sb) {
            var tb = sb.userAgent;
            if (tb) {
                rb = tb;
                break a
            }
        }
        rb = ""
    }var v = function(a) {
        return -1 != rb.indexOf(a)
    };
    var ub = function(a, b, c) {
            for (var d in a)
                b.call(c, a[d], d, a)
        },
        vb = function(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a))
                    return !0;
            return !1
        },
        wb = function(a, b) {
            for (var c in a)
                if (a[c] == b)
                    return !0;
            return !1
        },
        xb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        yb = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d)
                    a[c] = d[c];
                for (var f = 0; f < xb.length; f++)
                    c = xb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        },
        zb = function(a) {
            var b =
            arguments.length;
            if (1 == b && ra(arguments[0]))
                return zb.apply(null, arguments[0]);
            for (var c = {}, d = 0; d < b; d++)
                c[arguments[d]] = !0;
            return c
        };
    var Ab = function() {
            return v("Trident") || v("MSIE")
        },
        Bb = function() {
            return v("Firefox") || v("FxiOS")
        },
        Db = function() {
            return v("Safari") && !(Cb() || v("Coast") || v("Opera") || v("Edge") || Bb() || v("Silk") || v("Android"))
        },
        Cb = function() {
            return (v("Chrome") || v("CriOS")) && !v("Edge")
        };
    var Eb = function() {
            return v("iPhone") && !v("iPod") && !v("iPad")
        },
        Fb = function() {
            return Eb() || v("iPad") || v("iPod")
        };
    var Gb = function(a) {
        Gb[" "](a);
        return a
    };
    Gb[" "] = pa;
    var Hb = function(a, b) {
            try {
                return Gb(a[b]), !0
            } catch (c) {}
            return !1
        },
        Jb = function(a, b) {
            var c = Ib;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
    var Kb = v("Opera"),
        w = Ab(),
        Lb = v("Edge"),
        Mb = Lb || w,
        z = v("Gecko") && !(-1 != rb.toLowerCase().indexOf("webkit") && !v("Edge")) && !(v("Trident") || v("MSIE")) && !v("Edge"),
        A = -1 != rb.toLowerCase().indexOf("webkit") && !v("Edge"),
        Nb = v("Macintosh"),
        Ob = v("Windows"),
        Pb = v("Android"),
        Qb = Eb(),
        Rb = v("iPad"),
        Sb = v("iPod"),
        Tb = Fb(),
        Ub = function() {
            var a = l.document;
            return a ? a.documentMode : void 0
        },
        Vb;
    a:
    {
        var Wb = "",
            Xb = function() {
                var a = rb;
                if (z)
                    return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Lb)
                    return /Edge\/([\d\.]+)/.exec(a);
                if (w)
                    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (A)
                    return /WebKit\/(\S+)/.exec(a);
                if (Kb)
                    return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        Xb && (Wb = Xb ? Xb[1] : "");
        if (w) {
            var Yb = Ub();
            if (null != Yb && Yb > parseFloat(Wb)) {
                Vb = String(Yb);
                break a
            }
        }
        Vb = Wb
    }var Zb = Vb,
        Ib = {},
        $b = function(a) {
            return Jb(a, function() {
                return 0 <= ob(Zb, a)
            })
        },
        bc = function(a) {
            return Number(ac) >= a
        },
        cc;
    var dc = l.document;
    cc = dc && w ? Ub() || ("CSS1Compat" == dc.compatMode ? parseInt(Zb, 10) : 5) : void 0;
    var ac = cc;
    var ec = !w || bc(9),
        fc = !z && !w || w && bc(9) || z && $b("1.9.1");
    var gc = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        },
        hc = function(a, b, c) {
            var d = 0,
                e = !1,
                f = [],
                h = function() {
                    d = 0;
                    e && (e = !1, k())
                },
                k = function() {
                    d = l.setTimeout(h, b);
                    a.apply(c, f)
                };
            return function(a) {
                f = arguments;
                d ? e = !0 : k()
            }
        };
    var kc = function(a, b) {
        this.Md = a === ic && b || "";
        this.mf = jc
    };
    kc.prototype.Na = !0;
    kc.prototype.Ma = function() {
        return this.Md
    };
    kc.prototype.toString = function() {
        return "Const{" + this.Md + "}"
    };
    var lc = function(a) {
            if (a instanceof kc && a.constructor === kc && a.mf === jc)
                return a.Md;
            Ka("expected object of type Const, got '" + a + "'");
            return "type_error:Const"
        },
        jc = {},
        ic = {};
    var nc = function() {
        this.Hc = "";
        this.nf = mc
    };
    g = nc.prototype;
    g.Na = !0;
    g.Ma = function() {
        return this.Hc
    };
    g.qd = !0;
    g.oc = function() {
        return 1
    };
    g.toString = function() {
        return "TrustedResourceUrl{" + this.Hc + "}"
    };
    var oc = function(a) {
            if (a instanceof nc && a.constructor === nc && a.nf === mc)
                return a.Hc;
            Ka("expected object of type TrustedResourceUrl, got '" + a + "' of type " + qa(a));
            return "type_error:TrustedResourceUrl"
        },
        mc = {},
        pc = function(a) {
            var b = new nc;
            b.Hc = a;
            return b
        };
    var rc = function() {
        this.ta = "";
        this.lf = qc
    };
    g = rc.prototype;
    g.Na = !0;
    g.Ma = function() {
        return this.ta
    };
    g.qd = !0;
    g.oc = function() {
        return 1
    };
    g.toString = function() {
        return "SafeUrl{" + this.ta + "}"
    };
    var sc = function(a) {
            if (a instanceof rc && a.constructor === rc && a.lf === qc)
                return a.ta;
            Ka("expected object of type SafeUrl, got '" + a + "' of type " + qa(a));
            return "type_error:SafeUrl"
        },
        tc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        qc = {},
        uc = function(a) {
            var b = new rc;
            b.ta = a;
            return b
        };
    uc("about:blank");
    var wc = function() {
        this.ta = "";
        this.kf = vc;
        this.ee = null
    };
    g = wc.prototype;
    g.qd = !0;
    g.oc = function() {
        return this.ee
    };
    g.Na = !0;
    g.Ma = function() {
        return this.ta
    };
    g.toString = function() {
        return "SafeHtml{" + this.ta + "}"
    };
    var xc = function(a) {
            if (a instanceof wc && a.constructor === wc && a.kf === vc)
                return a.ta;
            Ka("expected object of type SafeHtml, got '" + a + "' of type " + qa(a));
            return "type_error:SafeHtml"
        },
        vc = {},
        yc = function(a, b) {
            return (new wc).Uf(a, b)
        };
    wc.prototype.Uf = function(a, b) {
        this.ta = a;
        this.ee = b;
        return this
    };
    yc("<!DOCTYPE html>", 0);
    var zc = yc("", 0);
    yc("<br>", 0);
    var Ac = {
            MATH: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        Bc = gc(function() {
            if ("undefined" === typeof document)
                return !1;
            var a = document.createElement("div");
            a.innerHTML = "<div><div></div></div>";
            if (!a.firstChild)
                return !1;
            var b = a.firstChild.firstChild;
            a.innerHTML = "";
            return !b.parentElement
        }),
        Cc = function(a, b) {
            if (Ac[a.tagName.toUpperCase()])
                throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + ".");
            var c = xc(b);
            if (Bc())
                for (; a.lastChild;)
                    a.removeChild(a.lastChild);
            a.innerHTML = c
        };
    var B = function(a, b) {
        this.x = n(a) ? a : 0;
        this.y = n(b) ? b : 0
    };
    B.prototype.clone = function() {
        return new B(this.x, this.y)
    };
    B.prototype.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };
    var Dc = function(a, b) {
        return new B(a.x - b.x, a.y - b.y)
    };
    g = B.prototype;
    g.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    g.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    g.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    g.translate = function(a, b) {
        a instanceof B ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), oa(b) && (this.y += b));
        return this
    };
    g.scale = function(a, b) {
        var c = oa(b) ? b : a;
        this.x *= a;
        this.y *= c;
        return this
    };
    var Ec = function(a, b) {
        this.width = a;
        this.height = b
    };
    g = Ec.prototype;
    g.clone = function() {
        return new Ec(this.width, this.height)
    };
    g.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    g.aspectRatio = function() {
        return this.width / this.height
    };
    g.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    g.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    g.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    g.scale = function(a, b) {
        var c = oa(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    };
    var D = function(a) {
            return a ? new Fc(C(a)) : Ga || (Ga = new Fc)
        },
        Hc = function(a, b) {
            var c = b || document;
            return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Gc(document, "*", a, b)
        },
        F = function(a, b) {
            var c = b || document;
            if (c.getElementsByClassName)
                c = c.getElementsByClassName(a)[0];
            else {
                c = document;
                var d = b || c;
                c = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : Gc(c, "*", a, b)[0] || null
            }
            return c || null
        },
        Gc = function(a, b, c, d) {
            a = d || a;
            b = b && "*" != b ? String(b).toUpperCase() : "";
            if (a.querySelectorAll &&
            a.querySelector && (b || c))
                return a.querySelectorAll(b + (c ? "." + c : ""));
            if (c && a.getElementsByClassName) {
                a = a.getElementsByClassName(c);
                if (b) {
                    d = {};
                    for (var e = 0, f = 0, h; h = a[f]; f++)
                        b == h.nodeName && (d[e++] = h);
                    d.length = e;
                    return d
                }
                return a
            }
            a = a.getElementsByTagName(b || "*");
            if (c) {
                d = {};
                for (f = e = 0; h = a[f]; f++)
                    b = h.className, "function" == typeof b.split && $a(b.split(/\s+/), c) && (d[e++] = h);
                d.length = e;
                return d
            }
            return a
        },
        Jc = function(a, b) {
            ub(b, function(b, d) {
                b && "object" == typeof b && b.Na && (b = b.Ma());
                "style" == d ? a.style.cssText = b : "class" ==
                d ? a.className = b : "for" == d ? a.htmlFor = b : Ic.hasOwnProperty(d) ? a.setAttribute(Ic[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        },
        Ic = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        Lc = function(a) {
            a = a.document;
            a = Kc(a) ? a.documentElement : a.body;
            return new Ec(a.clientWidth, a.clientHeight)
        },
        Nc = function(a) {
            var b = Mc(a);
            a = a.parentWindow || a.defaultView;
            return w && $b("10") && a.pageYOffset != b.scrollTop ? new B(b.scrollLeft, b.scrollTop) : new B(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        Mc = function(a) {
            return a.scrollingElement ? a.scrollingElement : !A && Kc(a) ? a.documentElement : a.body || a.documentElement
        },
        Oc = function(a) {
            return a ? a.parentWindow || a.defaultView : window
        },
        Qc = function(a, b, c) {
            return Pc(document, arguments)
        },
        Pc = function(a, b) {
            var c = String(b[0]),
                d = b[1];
            if (!ec && d && (d.name || d.type)) {
                c =
                ["<", c];
                d.name && c.push(' name="', lb(d.name), '"');
                if (d.type) {
                    c.push(' type="', lb(d.type), '"');
                    var e = {};
                    yb(e, d);
                    delete e.type;
                    d = e
                }
                c.push(">");
                c = c.join("")
            }
            c = a.createElement(c);
            d && (p(d) ? c.className = d : ra(d) ? c.className = d.join(" ") : Jc(c, d));
            2 < b.length && Rc(a, c, b, 2);
            return c
        },
        Rc = function(a, b, c, d) {
            function e(c) {
                c && b.appendChild(p(c) ? a.createTextNode(c) : c)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                !sa(f) || ua(f) && 0 < f.nodeType ? e(f) : Ra(Sc(f) ? bb(f) : f, e)
            }
        },
        Kc = function(a) {
            return "CSS1Compat" == a.compatMode
        },
        Tc = function(a, b) {
            u(null !=
            a && null != b, "goog.dom.appendChild expects non-null arguments");
            a.appendChild(b)
        },
        Uc = function(a, b) {
            Rc(C(a), a, arguments, 1)
        },
        Vc = function(a, b) {
            u(null != a && null != b, "goog.dom.insertSiblingBefore expects non-null arguments");
            b.parentNode && b.parentNode.insertBefore(a, b)
        },
        Wc = function(a, b) {
            u(null != a && null != b, "goog.dom.insertSiblingAfter expects non-null arguments");
            b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
        },
        Xc = function(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        },
        Yc = function(a, b) {
            if (!a ||
            !b)
                return !1;
            if (a.contains && 1 == b.nodeType)
                return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition)
                return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;)
                b = b.parentNode;
            return b == a
        },
        C = function(a) {
            u(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        Sc = function(a) {
            if (a && "number" == typeof a.length) {
                if (ua(a))
                    return "function" == typeof a.item || "string" == typeof a.item;
                if (ta(a))
                    return "function" == typeof a.item
            }
            return !1
        },
        $c = function(a, b) {
            return b ?
            Zc(a, function(a) {
                return !b || p(a.className) && $a(a.className.split(/\s+/), b)
            }) : null
        },
        Zc = function(a, b) {
            for (var c = 0; a;) {
                u("parentNode" != a.name);
                if (b(a))
                    return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        Fc = function(a) {
            this.f = a || l.document || document
        };
    g = Fc.prototype;
    g.B = D;
    g.h = function() {
        return p(void 0) ? this.f.getElementById(void 0) : void 0
    };
    g.getElementsByTagName = function(a, b) {
        return (b || this.f).getElementsByTagName(String(a))
    };
    g.N = function(a, b, c) {
        return Pc(this.f, arguments)
    };
    g.createElement = function(a) {
        return this.f.createElement(String(a))
    };
    g.createTextNode = function(a) {
        return this.f.createTextNode(String(a))
    };
    var ad = function(a) {
        a = a.f;
        return a.parentWindow || a.defaultView
    };
    g = Fc.prototype;
    g.appendChild = Tc;
    g.append = Uc;
    g.canHaveChildren = function(a) {
        if (1 != a.nodeType)
            return !1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    };
    g.we = Vc;
    g.removeNode = Xc;
    g.nd = function(a) {
        return fc && void 0 != a.children ? a.children : Sa(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    };
    g.contains = Yc;
    g.Te = function(a) {
        u(null != a, "goog.dom.setTextContent expects a non-null value for node");
        if ("textContent" in a)
            a.textContent = void 0;
        else if (3 == a.nodeType)
            a.data = "undefined";
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;)
                a.removeChild(u(a.lastChild));
            a.firstChild.data = "undefined"
        } else {
            for (var b; b = a.firstChild;)
                a.removeChild(b);
            b = C(a);
            a.appendChild(b.createTextNode("undefined"))
        }
    };
    var bd = !w || bc(9),
        cd = !w || bc(9),
        dd = w && !$b("9"),
        ed = function() {
            if (!l.addEventListener || !Object.defineProperty)
                return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            try {
                l.addEventListener("test", pa, b), l.removeEventListener("test", pa, b)
            } catch (c) {}
            return a
        }();
    var fd = function(a) {
            return A ? "webkit" + a : Kb ? "o" + a.toLowerCase() : a.toLowerCase()
        },
        gd = fd("AnimationEnd"),
        hd = fd("TransitionEnd");
    var id = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    g = id.prototype;
    g.le = function() {
        return this.bottom - this.top
    };
    g.clone = function() {
        return new id(this.top, this.right, this.bottom, this.left)
    };
    g.toString = function() {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    };
    g.contains = function(a) {
        return this && a ? a instanceof id ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    g.expand = function(a, b, c, d) {
        ua(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    g.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    g.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    g.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    g.translate = function(a, b) {
        a instanceof B ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (La(a), this.left += a, this.right += a, oa(b) && (this.top += b, this.bottom += b));
        return this
    };
    g.scale = function(a, b) {
        var c = oa(b) ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= c;
        this.bottom *= c;
        return this
    };
    var jd = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    g = jd.prototype;
    g.clone = function() {
        return new jd(this.left, this.top, this.width, this.height)
    };
    g.toString = function() {
        return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
    };
    g.contains = function(a) {
        return a instanceof B ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    g.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    g.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    g.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    g.translate = function(a, b) {
        a instanceof B ? (this.left += a.x, this.top += a.y) : (this.left += La(a), oa(b) && (this.top += b));
        return this
    };
    g.scale = function(a, b) {
        var c = oa(b) ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= c;
        this.height *= c;
        return this
    };
    var ld = function(a, b, c) {
            if (p(b))
                (b = kd(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d],
                        f = kd(c, d);
                    f && (c.style[f] = e)
                }
        },
        md = {},
        kd = function(a, b) {
            var c = md[b];
            if (!c) {
                var d = pb(b);
                c = d;
                void 0 === a.style[d] && (d = (A ? "Webkit" : z ? "Moz" : w ? "ms" : Kb ? "O" : null) + qb(d), void 0 !== a.style[d] && (c = d));
                md[b] = c
            }
            return c
        },
        G = function(a, b) {
            var c = C(a);
            return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
        },
        nd = function(a, b) {
            return G(a, b) || (a.currentStyle ?
                a.currentStyle[b] : null) || a.style && a.style[b]
        },
        od = function(a) {
            return nd(a, "position")
        },
        qd = function(a, b, c) {
            if (b instanceof B) {
                var d = b.x;
                b = b.y
            } else
                d = b, b = c;
            a.style.left = pd(d, !1);
            a.style.top = pd(b, !1)
        },
        rd = function(a) {
            try {
                var b = a.getBoundingClientRect()
            } catch (c) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
            w && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        },
        sd = function(a) {
            if (w && !bc(8))
                return u(a && "offsetParent" in
                a), a.offsetParent;
            var b = C(a),
                c = nd(a, "position"),
                d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (11 == a.nodeType && a.host && (a = a.host), c = nd(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
                    return a;
            return null
        },
        ud = function(a) {
            for (var b = new id(0, Infinity, Infinity, 0), c = D(a), d = c.f.body, e = c.f.documentElement, f = Mc(c.f); a = sd(a);)
                if (!(w && 0 == a.clientWidth || A && 0 == a.clientHeight &&
                a == d) && a != d && a != e && "visible" != nd(a, "overflow")) {
                    var h = td(a),
                        k = new B(a.clientLeft, a.clientTop);
                    h.x += k.x;
                    h.y += k.y;
                    b.top = Math.max(b.top, h.y);
                    b.right = Math.min(b.right, h.x + a.clientWidth);
                    b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
                    b.left = Math.max(b.left, h.x)
                }
            d = f.scrollLeft;
            f = f.scrollTop;
            b.left = Math.max(b.left, d);
            b.top = Math.max(b.top, f);
            c = Lc(ad(c) || window);
            b.right = Math.min(b.right, d + c.width);
            b.bottom = Math.min(b.bottom, f + c.height);
            return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
        },
        td =
        function(a) {
            var b = C(a);
            Pa(a, "Parameter is required");
            var c = new B(0, 0);
            var d = b ? C(b) : document;
            d = !w || bc(9) || Kc(D(d).f) ? d.documentElement : d.body;
            if (a == d)
                return c;
            a = rd(a);
            b = Nc(D(b).f);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        vd = function(a, b, c) {
            if (b instanceof Ec)
                c = b.height, b = b.width;
            else if (void 0 == c)
                throw Error("missing height argument");
            a.style.width = pd(b, !0);
            H(a, c)
        },
        pd = function(a, b) {
            "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
            return a
        },
        H = function(a, b) {
            a.style.height = pd(b, !0)
        },
        xd = function(a) {
            var b =
            wd;
            if ("none" != nd(a, "display"))
                return b(a);
            var c = a.style,
                d = c.display,
                e = c.visibility,
                f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = f;
            c.visibility = e;
            return a
        },
        wd = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = A && !b && !c;
            return n(b) && !d || !a.getBoundingClientRect ? new Ec(b, c) : (a = rd(a), new Ec(a.right - a.left, a.bottom - a.top))
        },
        yd = function(a, b) {
            u(a);
            var c = a.style;
            "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter =
            "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")")
        },
        I = function(a, b) {
            a.style.display = b ? "" : "none"
        },
        zd = function(a) {
            return "rtl" == nd(a, "direction")
        },
        Ad = function(a, b) {
            if (/^\d+px?$/.test(b))
                return parseInt(b, 10);
            var c = a.style.left,
                d = a.runtimeStyle.left;
            a.runtimeStyle.left = a.currentStyle.left;
            a.style.left = b;
            var e = a.style.pixelLeft;
            a.style.left = c;
            a.runtimeStyle.left = d;
            return +e
        },
        Bd = function(a, b) {
            var c = a.currentStyle ? a.currentStyle[b] : null;
            return c ? Ad(a, c) : 0
        },
        Dd = {
            thin: 2,
            medium: 4,
            thick: 6
        },
        Ed = function(a, b) {
            if ("none" ==
            (a.currentStyle ? a.currentStyle[b + "Style"] : null))
                return 0;
            var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
            return c in Dd ? Dd[c] : Ad(a, c)
        },
        Fd = function(a) {
            if (w && !bc(9)) {
                var b = Ed(a, "borderLeft"),
                    c = Ed(a, "borderRight"),
                    d = Ed(a, "borderTop");
                a = Ed(a, "borderBottom");
                return new id(d, c, a, b)
            }
            b = G(a, "borderLeftWidth");
            c = G(a, "borderRightWidth");
            d = G(a, "borderTopWidth");
            a = G(a, "borderBottomWidth");
            return new id(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
        };
    var Gd = !1,
        Hd = !1,
        Id = function(a) {
            var b = document.createElement("div");
            a = ba(a);
            for (var c = a.next(); !c.done; c = a.next())
                if (null != b.style[c.value])
                    return !0;
            return !1
        },
        Jd = Id(["WebkitAnimation", "MozAnimation", "OAnimation", "animation"]) ? gd : null,
        J = Id(["WebkitTransition", "MozTransition", "OTransition", "transition"]) ? hd : null,
        Kd = function() {
            if (Hd)
                return Gd;
            var a = document.createElement("DETAILS");
            if (!("open" in a))
                return !1;
            Uc(a, Qc("SUMMARY", null, "a"), "b");
            ld(a, "display", "block");
            document.body.appendChild(a);
            var b = a.offsetHeight;
            a.setAttribute("open", !0);
            b = a.offsetHeight != b;
            Xc(a);
            Gd = b;
            Hd = !0;
            return b
        };
    var Ld = Object.freeze || function(a) {
        return a
    };
    var Md = function(a, b, c) {
        this.reset(a, b, c, void 0, void 0)
    };
    Md.prototype.kd = null;
    var Nd = 0;
    Md.prototype.reset = function(a, b, c, d, e) {
        "number" == typeof e || Nd++;
        this.ef = d || Da();
        this.Ra = a;
        this.cg = b;
        this.Be = c;
        delete this.kd
    };
    Md.prototype.Se = function(a) {
        this.Ra = a
    };
    var Od = function(a) {
            this.Bc = a;
            this.Kb = this.ya = this.Ra = this.A = null
        },
        Pd = function(a, b) {
            this.name = a;
            this.value = b
        };
    Pd.prototype.toString = function() {
        return this.name
    };
    var Qd = new Pd("SEVERE", 1E3),
        Rd = new Pd("WARNING", 900),
        Sd = new Pd("INFO", 800),
        Td = new Pd("CONFIG", 700),
        Ud = new Pd("FINE", 500);
    Od.prototype.getName = function() {
        return this.Bc
    };
    Od.prototype.getParent = function() {
        return this.A
    };
    Od.prototype.nd = function() {
        this.ya || (this.ya = {});
        return this.ya
    };
    Od.prototype.Se = function(a) {
        this.Ra = a
    };
    var Vd = function(a) {
        if (a.Ra)
            return a.Ra;
        if (a.A)
            return Vd(a.A);
        Ka("Root logger has no level set.");
        return null
    };
    Od.prototype.log = function(a, b, c) {
        if (a.value >= Vd(this).value)
            for (ta(b) && (b = b()), a = new Md(a, String(b), this.Bc), c && (a.kd = c), c = this; c;) {
                var d = c,
                    e = a;
                if (d.Kb)
                    for (var f = 0; b = d.Kb[f]; f++)
                        b(e);
                c = c.getParent()
            }
    };
    Od.prototype.info = function(a, b) {
        this.log(Sd, a, b)
    };
    var Wd = {},
        Xd = null,
        Yd = function() {
            Xd || (Xd = new Od(""), Wd[""] = Xd, Xd.Se(Td))
        },
        K = function(a) {
            Yd();
            var b;
            if (!(b = Wd[a])) {
                b = new Od(a);
                var c = a.lastIndexOf("."),
                    d = a.substr(c + 1);
                c = K(a.substr(0, c));
                c.nd()[d] = b;
                b.A = c;
                Wd[a] = b
            }
            return b
        };
    var L = {
        bb: !1,
        get: function(a) {
            if (L.bb || a.classList)
                return a.classList;
            a = a.className;
            return p(a) && a.match(/\S+/g) || []
        },
        set: function(a, b) {
            a.className = b
        },
        contains: function(a, b) {
            return L.bb || a.classList ? a.classList.contains(b) : $a(L.get(a), b)
        },
        add: function(a, b) {
            L.bb || a.classList ? a.classList.add(b) : L.contains(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
        },
        addAll: function(a, b) {
            if (L.bb || a.classList)
                Ra(b, function(b) {
                    L.add(a, b)
                });
            else {
                var c = {};
                Ra(L.get(a), function(a) {
                    c[a] = !0
                });
                Ra(b, function(a) {
                    c[a] = !0
                });
                a.className = "";
                for (var d in c)
                    a.className += 0 < a.className.length ? " " + d : d
            }
        },
        remove: function(a, b) {
            L.bb || a.classList ? a.classList.remove(b) : L.contains(a, b) && (a.className = Sa(L.get(a), function(a) {
                return a != b
            }).join(" "))
        },
        ba: function(a, b) {
            L.bb || a.classList ? Ra(b, function(b) {
                L.remove(a, b)
            }) : a.className = Sa(L.get(a), function(a) {
                return !$a(b, a)
            }).join(" ")
        },
        enable: function(a, b, c) {
            c ? L.add(a, b) : L.remove(a, b)
        },
        Oi: function(a, b, c) {
            (c ? L.addAll : L.ba)(a, b)
        },
        Ti: function(a, b, c) {
            return L.contains(a, b) ? (L.remove(a, b), L.add(a,
            c), !0) : !1
        },
        toggle: function(a, b) {
            var c = !L.contains(a, b);
            L.enable(a, b, c);
            return c
        },
        Mi: function(a, b, c) {
            L.remove(a, b);
            L.add(a, c)
        }
    };
    var Zd = function() {
        this.Ja = this.Ja;
        this.Ta = this.Ta
    };
    Zd.prototype.Ja = !1;
    Zd.prototype.pa = function() {
        this.Ja || (this.Ja = !0, this.u())
    };
    Zd.prototype.u = function() {
        if (this.Ta)
            for (; this.Ta.length;)
                this.Ta.shift()()
    };
    var $d = function(a) {
            a && "function" == typeof a.pa && a.pa()
        },
        ae = function(a) {
            for (var b = 0, c = arguments.length; b < c; ++b) {
                var d = arguments[b];
                sa(d) ? ae.apply(null, d) : $d(d)
            }
        };
    var N = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.Ya = !1;
        this.Pe = !0
    };
    N.prototype.stopPropagation = function() {
        this.Ya = !0
    };
    N.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Pe = !1
    };
    var be = function(a) {
        a.preventDefault()
    };
    var ce = function(a, b) {
        N.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.ja = null;
        a && this.aa(a, b)
    };
    t(ce, N);
    var de = Ld([1, 4, 2]),
        ee = Ld({
            2: "touch",
            3: "pen",
            4: "mouse"
        });
    ce.prototype.aa = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var e = a.relatedTarget;
        e ? z && (Hb(e, "nodeName") || (e = null)) : "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
        this.relatedTarget = e;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.offsetX = A || void 0 !== a.offsetX ?
        a.offsetX : a.layerX, this.offsetY = A || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = p(a.pointerType) ?
        a.pointerType : ee[a.pointerType] || "";
        this.state = a.state;
        this.ja = a;
        a.defaultPrevented && this.preventDefault()
    };
    ce.prototype.stopPropagation = function() {
        ce.m.stopPropagation.call(this);
        this.ja.stopPropagation ? this.ja.stopPropagation() : this.ja.cancelBubble = !0
    };
    ce.prototype.preventDefault = function() {
        ce.m.preventDefault.call(this);
        var a = this.ja;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1, dd)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    };
    var fe = "closure_listenable_" + (1E6 * Math.random() | 0),
        ge = function(a) {
            return !(!a || !a[fe])
        },
        he = 0;
    var ie = function(a, b, c, d, e) {
            this.listener = a;
            this.Ic = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.rc = e;
            this.key = ++he;
            this.vb = this.dc = !1
        },
        je = function(a) {
            a.vb = !0;
            a.listener = null;
            a.Ic = null;
            a.src = null;
            a.rc = null
        };
    var ke = function(a) {
        this.src = a;
        this.C = {};
        this.Yb = 0
    };
    ke.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.C[f];
        a || (a = this.C[f] = [], this.Yb++);
        var h = le(a, b, d, e);
        -1 < h ? (b = a[h], c || (b.dc = !1)) : (b = new ie(b, this.src, f, !!d, e), b.dc = c, a.push(b));
        return b
    };
    ke.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.C))
            return !1;
        var e = this.C[a];
        b = le(e, b, c, d);
        return -1 < b ? (je(e[b]), u(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.C[a], this.Yb--), !0) : !1
    };
    var me = function(a, b) {
        var c = b.type;
        if (!(c in a.C))
            return !1;
        var d = ab(a.C[c], b);
        d && (je(b), 0 == a.C[c].length && (delete a.C[c], a.Yb--));
        return d
    };
    ke.prototype.ba = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.C)
            if (!a || c == a) {
                for (var d = this.C[c], e = 0; e < d.length; e++)
                    ++b, je(d[e]);
                delete this.C[c];
                this.Yb--
            }
        return b
    };
    ke.prototype.Hb = function(a, b, c, d) {
        a = this.C[a.toString()];
        var e = -1;
        a && (e = le(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    ke.prototype.hasListener = function(a, b) {
        var c = n(a),
            d = c ? a.toString() : "",
            e = n(b);
        return vb(this.C, function(a) {
            for (var f = 0; f < a.length; ++f)
                if (!(c && a[f].type != d || e && a[f].capture != b))
                    return !0;
            return !1
        })
    };
    var le = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.vb && f.listener == b && f.capture == !!c && f.rc == d)
                return e
        }
        return -1
    };
    var ne = "closure_lm_" + (1E6 * Math.random() | 0),
        oe = {},
        pe = 0,
        P = function(a, b, c, d, e) {
            if (d && d.once)
                return qe(a, b, c, d, e);
            if (ra(b)) {
                for (var f = 0; f < b.length; f++)
                    P(a, b[f], c, d, e);
                return null
            }
            c = re(c);
            return ge(a) ? a.w(b, c, ua(d) ? !!d.capture : !!d, e) : se(a, b, c, !1, d, e)
        },
        se = function(a, b, c, d, e, f) {
            if (!b)
                throw Error("Invalid event type");
            var h = ua(e) ? !!e.capture : !!e,
                k = te(a);
            k || (a[ne] = k = new ke(a));
            c = k.add(b, c, d, h, f);
            if (c.Ic)
                return c;
            d = ue();
            c.Ic = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener)
                ed || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(),
                d, e);
            else if (a.attachEvent)
                a.attachEvent(ve(b.toString()), d);
            else if (a.addListener && a.removeListener)
                u("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
            else
                throw Error("addEventListener and attachEvent are unavailable.");
            pe++;
            return c
        },
        ue = function() {
            var a = we,
                b = cd ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c)
                        return c
                };
            return b
        },
        qe = function(a, b, c, d, e) {
            if (ra(b)) {
                for (var f = 0; f < b.length; f++)
                    qe(a, b[f], c, d, e);
                return null
            }
            c = re(c);
            return ge(a) ?
            a.xd(b, c, ua(d) ? !!d.capture : !!d, e) : se(a, b, c, !0, d, e)
        },
        xe = function(a, b, c, d, e) {
            if (ra(b))
                for (var f = 0; f < b.length; f++)
                    xe(a, b[f], c, d, e);
            else
                d = ua(d) ? !!d.capture : !!d, c = re(c), ge(a) ? a.Zb(b, c, d, e) : a && (a = te(a)) && (b = a.Hb(b, c, d, e)) && Q(b)
        },
        Q = function(a) {
            if (oa(a) || !a || a.vb)
                return !1;
            var b = a.src;
            if (ge(b))
                return me(b.U, a);
            var c = a.type,
                d = a.Ic;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(ve(c), d) : b.addListener && b.removeListener && b.removeListener(d);
            pe--;
            (c = te(b)) ? (me(c, a), 0 == c.Yb &&
            (c.src = null, b[ne] = null)) : je(a);
            return !0
        },
        R = function(a, b) {
            if (a)
                if (ge(a))
                    a.U && a.U.ba(b);
                else {
                    var c = te(a);
                    if (c) {
                        var d = 0,
                            e = b && b.toString(),
                            f;
                        for (f in c.C)
                            if (!e || f == e)
                                for (var h = c.C[f].concat(), k = 0; k < h.length; ++k)
                                    Q(h[k]) && ++d
                    }
                }
        },
        ve = function(a) {
            return a in oe ? oe[a] : oe[a] = "on" + a
        },
        Ae = function(a, b) {
            var c = window;
            ge(c) ? ye(c, a, !1, b) : ze(c, a, !1, b)
        },
        ze = function(a, b, c, d) {
            var e = !0;
            if (a = te(a))
                if (b = a.C[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.vb && (f = Be(f, d), e = e && !1 !== f)
                    }
            return e
        },
        Be = function(a, b) {
            var c = a.listener,
                d = a.rc || a.src;
            a.dc && Q(a);
            return c.call(d, b)
        },
        we = function(a, b) {
            if (a.vb)
                return !0;
            if (!cd) {
                var c;
                if (!(c = b))
                    a:
                    {
                        c = ["window", "event"];
                        for (var d = l, e = 0; e < c.length; e++)
                            if (d = d[c[e]], null == d) {
                                c = null;
                                break a
                            }
                        c = d
                    }e = c;
                c = new ce(e, this);
                d = !0;
                if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                    a:
                    {
                        var f = !1;
                        if (0 == e.keyCode)
                            try {
                                e.keyCode = -1;
                                break a
                            } catch (m) {
                                f = !0
                            }
                        if (f || void 0 == e.returnValue)
                            e.returnValue = !0
                    }e = [];
                    for (f = c.currentTarget; f; f = f.parentNode)
                        e.push(f);
                    f = a.type;
                    for (var h = e.length - 1; !c.Ya &&
                    0 <= h; h--) {
                        c.currentTarget = e[h];
                        var k = ze(e[h], f, !0, c);
                        d = d && k
                    }
                    for (h = 0; !c.Ya && h < e.length; h++)
                        c.currentTarget = e[h], k = ze(e[h], f, !1, c), d = d && k
                }
                return d
            }
            return Be(a, new ce(b, this))
        },
        te = function(a) {
            a = a[ne];
            return a instanceof ke ? a : null
        },
        Ce = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        re = function(a) {
            u(a, "Listener can not be null.");
            if (ta(a))
                return a;
            u(a.handleEvent, "An object listener must have handleEvent method.");
            a[Ce] || (a[Ce] = function(b) {
                return a.handleEvent(b)
            });
            return a[Ce]
        };
    var De = function(a) {
        Zd.call(this);
        this.O = a;
        this.s = {}
    };
    t(De, Zd);
    var Ee = [];
    De.prototype.w = function(a, b, c, d) {
        ra(b) || (b && (Ee[0] = b.toString()), b = Ee);
        for (var e = 0; e < b.length; e++) {
            var f = P(a, b[e], c || this.handleEvent, d || !1, this.O || this);
            if (!f)
                break;
            this.s[f.key] = f
        }
        return this
    };
    De.prototype.xd = function(a, b, c, d) {
        return Fe(this, a, b, c, d)
    };
    var Fe = function(a, b, c, d, e, f) {
        if (ra(c))
            for (var h = 0; h < c.length; h++)
                Fe(a, b, c[h], d, e, f);
        else {
            b = qe(b, c, d || a.handleEvent, e, f || a.O || a);
            if (!b)
                return a;
            a.s[b.key] = b
        }
        return a
    };
    De.prototype.Zb = function(a, b, c, d, e) {
        if (ra(b))
            for (var f = 0; f < b.length; f++)
                this.Zb(a, b[f], c, d, e);
        else
            c = c || this.handleEvent, d = ua(d) ? !!d.capture : !!d, e = e || this.O || this, c = re(c), d = !!d, b = ge(a) ? a.Hb(b, c, d, e) : a ? (a = te(a)) ? a.Hb(b, c, d, e) : null : null, b && (Q(b), delete this.s[b.key]);
        return this
    };
    De.prototype.ba = function() {
        ub(this.s, function(a, b) {
            this.s.hasOwnProperty(b) && Q(a)
        }, this);
        this.s = {}
    };
    De.prototype.u = function() {
        De.m.u.call(this);
        this.ba()
    };
    De.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var S = function() {
        Zd.call(this);
        this.U = new ke(this);
        this.tf = this;
        this.Gc = null
    };
    t(S, Zd);
    S.prototype[fe] = !0;
    g = S.prototype;
    g.Ed = function(a) {
        this.Gc = a
    };
    g.addEventListener = function(a, b, c, d) {
        P(this, a, b, c, d)
    };
    g.removeEventListener = function(a, b, c, d) {
        xe(this, a, b, c, d)
    };
    g.dispatchEvent = function(a) {
        Ge(this);
        var b = this.Gc;
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.Gc)
                c.push(b), u(1E3 > ++d, "infinite loop")
        }
        b = this.tf;
        d = a.type || a;
        if (p(a))
            a = new N(a, b);
        else if (a instanceof N)
            a.target = a.target || b;
        else {
            var e = a;
            a = new N(d, b);
            yb(a, e)
        }
        e = !0;
        if (c)
            for (var f = c.length - 1; !a.Ya && 0 <= f; f--) {
                var h = a.currentTarget = c[f];
                e = ye(h, d, !0, a) && e
            }
        a.Ya || (h = a.currentTarget = b, e = ye(h, d, !0, a) && e, a.Ya || (e = ye(h, d, !1, a) && e));
        if (c)
            for (f = 0; !a.Ya && f < c.length; f++)
                h = a.currentTarget = c[f], e = ye(h, d, !1, a) && e;
        return e
    };
    g.u = function() {
        S.m.u.call(this);
        this.U && this.U.ba(void 0);
        this.Gc = null
    };
    g.w = function(a, b, c, d) {
        Ge(this);
        return this.U.add(String(a), b, !1, c, d)
    };
    g.xd = function(a, b, c, d) {
        return this.U.add(String(a), b, !0, c, d)
    };
    g.Zb = function(a, b, c, d) {
        return this.U.remove(String(a), b, c, d)
    };
    var ye = function(a, b, c, d) {
        b = a.U.C[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.vb && h.capture == c) {
                var k = h.listener,
                    m = h.rc || h.src;
                h.dc && me(a.U, h);
                e = !1 !== k.call(m, d) && e
            }
        }
        return e && 0 != d.Pe
    };
    S.prototype.Hb = function(a, b, c, d) {
        return this.U.Hb(String(a), b, c, d)
    };
    S.prototype.hasListener = function(a, b) {
        return this.U.hasListener(n(a) ? String(a) : void 0, b)
    };
    var Ge = function(a) {
        u(a.U, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var He = function(a, b) {
        for (var c = [a], d = b.length - 1; 0 <= d; --d)
            c.push(typeof b[d], b[d]);
        return c.join("\x0B")
    };
    var Ie = function(a, b) {
        this.Wf = 100;
        this.Hf = a;
        this.wg = b;
        this.Cc = 0;
        this.sc = null
    };
    Ie.prototype.get = function() {
        if (0 < this.Cc) {
            this.Cc--;
            var a = this.sc;
            this.sc = a.next;
            a.next = null
        } else
            a = this.Hf();
        return a
    };
    Ie.prototype.put = function(a) {
        this.wg(a);
        this.Cc < this.Wf && (this.Cc++, a.next = this.sc, this.sc = a)
    };
    var Je = function(a) {
            l.setTimeout(function() {
                throw a;
            }, 0)
        },
        Ke,
        Le = function() {
            var a = l.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !v("Presto") && (a = function() {
                var a = document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                document.documentElement.appendChild(a);
                var b = a.contentWindow;
                a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
                a = q(function(a) {
                    if (("*" == d || a.origin == d) && a.data == c)
                        this.port1.onmessage()
                }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !Ab()) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (n(c.next)) {
                        c = c.next;
                        var a = c.ae;
                        c.ae = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        ae: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
                var b = document.createElement("SCRIPT");
                b.onreadystatechange = function() {
                    b.onreadystatechange = null;
                    b.parentNode.removeChild(b);
                    b = null;
                    a();
                    a = null
                };
                document.documentElement.appendChild(b)
            } : function(a) {
                l.setTimeout(a, 0)
            }
        };
    var Me = function() {
            this.Uc = this.ab = null
        },
        Oe = new Ie(function() {
            return new Ne
        }, function(a) {
            a.reset()
        });
    Me.prototype.add = function(a, b) {
        var c = Oe.get();
        c.set(a, b);
        this.Uc ? this.Uc.next = c : (u(!this.ab), this.ab = c);
        this.Uc = c
    };
    Me.prototype.remove = function() {
        var a = null;
        this.ab && (a = this.ab, this.ab = this.ab.next, this.ab || (this.Uc = null), a.next = null);
        return a
    };
    var Ne = function() {
        this.next = this.scope = this.ra = null
    };
    Ne.prototype.set = function(a, b) {
        this.ra = a;
        this.scope = b;
        this.next = null
    };
    Ne.prototype.reset = function() {
        this.next = this.scope = this.ra = null
    };
    var Te = function(a, b) {
            Pe || Qe();
            Re || (Pe(), Re = !0);
            Se.add(a, b)
        },
        Pe,
        Qe = function() {
            if (l.Promise && l.Promise.resolve) {
                var a = l.Promise.resolve(void 0);
                Pe = function() {
                    a.then(Ue)
                }
            } else
                Pe = function() {
                    var a = Ue;
                    !ta(l.setImmediate) || l.Window && l.Window.prototype && !v("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (Ke || (Ke = Le()), Ke(a)) : l.setImmediate(a)
                }
        },
        Re = !1,
        Se = new Me,
        Ue = function() {
            for (var a; a = Se.remove();) {
                try {
                    a.ra.call(a.scope)
                } catch (b) {
                    Je(b)
                }
                Oe.put(a)
            }
            Re = !1
        };
    var T = function(a) {
            this.X = 0;
            this.Oe = void 0;
            this.gb = this.na = this.A = null;
            this.pc = this.ld = !1;
            if (a != pa)
                try {
                    var b = this;
                    a.call(void 0, function(a) {
                        Ve(b, 2, a)
                    }, function(a) {
                        if (!(a instanceof We))
                            try {
                                if (a instanceof Error)
                                    throw a;
                                throw Error("Promise rejected.");
                            } catch (d) {}
                        Ve(b, 3, a)
                    })
                } catch (c) {
                    Ve(this, 3, c)
                }
        },
        Xe = function() {
            this.next = this.context = this.tb = this.Ua = this.Ha = null;
            this.bc = !1
        };
    Xe.prototype.reset = function() {
        this.context = this.tb = this.Ua = this.Ha = null;
        this.bc = !1
    };
    var Ye = new Ie(function() {
            return new Xe
        }, function(a) {
            a.reset()
        }),
        Ze = function(a, b, c) {
            var d = Ye.get();
            d.Ua = a;
            d.tb = b;
            d.context = c;
            return d
        },
        $e = function(a) {
            if (a instanceof T)
                return a;
            var b = new T(pa);
            Ve(b, 2, a);
            return b
        },
        af = function(a) {
            return new T(function(b, c) {
                c(a)
            })
        },
        cf = function(a, b, c) {
            bf(a, b, c, null) || Te(Ca(b, a))
        },
        df = function(a) {
            return new T(function(b, c) {
                var d = a.length,
                    e = [];
                if (d)
                    for (var f = function(a, c) {
                            d--;
                            e[a] = c;
                            0 == d && b(e)
                        }, h = function(a) {
                            c(a)
                        }, k = 0, m; k < a.length; k++)
                        m = a[k], cf(m, Ca(f, k), h);
                else
                    b(e)
            })
        };
    T.prototype.then = function(a, b, c) {
        null != a && Na(a, "opt_onFulfilled should be a function.");
        null != b && Na(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return ef(this, ta(a) ? a : null, ta(b) ? b : null, c)
    };
    T.prototype.$goog_Thenable = !0;
    var ff = function(a, b) {
        return ef(a, null, b, void 0)
    };
    T.prototype.cancel = function(a) {
        0 == this.X && Te(function() {
            var b = new We(a);
            gf(this, b)
        }, this)
    };
    var gf = function(a, b) {
            if (0 == a.X)
                if (a.A) {
                    var c = a.A;
                    if (c.na) {
                        for (var d = 0, e = null, f = null, h = c.na; h && (h.bc || (d++, h.Ha == a && (e = h), !(e && 1 < d))); h = h.next)
                            e || (f = h);
                        e && (0 == c.X && 1 == d ? gf(c, b) : (f ? (d = f, u(c.na), u(null != d), d.next == c.gb && (c.gb = d), d.next = d.next.next) : hf(c), jf(c, e, 3, b)))
                    }
                    a.A = null
                } else
                    Ve(a, 3, b)
        },
        lf = function(a, b) {
            a.na || 2 != a.X && 3 != a.X || kf(a);
            u(null != b.Ua);
            a.gb ? a.gb.next = b : a.na = b;
            a.gb = b
        },
        ef = function(a, b, c, d) {
            var e = Ze(null, null, null);
            e.Ha = new T(function(a, h) {
                e.Ua = b ? function(c) {
                    try {
                        var e = b.call(d, c);
                        a(e)
                    } catch (r) {
                        h(r)
                    }
                } :
                a;
                e.tb = c ? function(b) {
                    try {
                        var e = c.call(d, b);
                        !n(e) && b instanceof We ? h(b) : a(e)
                    } catch (r) {
                        h(r)
                    }
                } : h
            });
            e.Ha.A = a;
            lf(a, e);
            return e.Ha
        };
    T.prototype.Kg = function(a) {
        u(1 == this.X);
        this.X = 0;
        Ve(this, 2, a)
    };
    T.prototype.Lg = function(a) {
        u(1 == this.X);
        this.X = 0;
        Ve(this, 3, a)
    };
    var Ve = function(a, b, c) {
            0 == a.X && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.X = 1, bf(c, a.Kg, a.Lg, a) || (a.Oe = c, a.X = b, a.A = null, kf(a), 3 != b || c instanceof We || mf(a, c)))
        },
        bf = function(a, b, c, d) {
            if (a instanceof T)
                return null != b && Na(b, "opt_onFulfilled should be a function."), null != c && Na(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), lf(a, Ze(b || pa, c || null, d)), !0;
            if (a)
                try {
                    var e = !!a.$goog_Thenable
                } catch (h) {
                    e = !1
                }
            else
                e = !1;
            if (e)
                return a.then(b,
                c, d), !0;
            if (ua(a))
                try {
                    var f = a.then;
                    if (ta(f))
                        return nf(a, f, b, c, d), !0
                } catch (h) {
                    return c.call(d, h), !0
                }
            return !1
        },
        nf = function(a, b, c, d, e) {
            var f = !1,
                h = function(a) {
                    f || (f = !0, c.call(e, a))
                },
                k = function(a) {
                    f || (f = !0, d.call(e, a))
                };
            try {
                b.call(a, h, k)
            } catch (m) {
                k(m)
            }
        },
        kf = function(a) {
            a.ld || (a.ld = !0, Te(a.Kf, a))
        },
        hf = function(a) {
            var b = null;
            a.na && (b = a.na, a.na = b.next, b.next = null);
            a.na || (a.gb = null);
            null != b && u(null != b.Ua);
            return b
        };
    T.prototype.Kf = function() {
        for (var a; a = hf(this);)
            jf(this, a, this.X, this.Oe);
        this.ld = !1
    };
    var jf = function(a, b, c, d) {
            if (3 == c && b.tb && !b.bc)
                for (; a && a.pc; a = a.A)
                    a.pc = !1;
            if (b.Ha)
                b.Ha.A = null, of(b, c, d);
            else
                try {
                    b.bc ? b.Ua.call(b.context) : of(b, c, d)
                } catch (e) {
                    pf.call(null, e)
                }
            Ye.put(b)
        },
        of = function(a, b, c) {
            2 == b ? a.Ua.call(a.context, c) : a.tb && a.tb.call(a.context, c)
        },
        mf = function(a, b) {
            a.pc = !0;
            Te(function() {
                a.pc && pf.call(null, b)
            })
        },
        pf = Je,
        We = function(a) {
            Ha.call(this, a)
        };
    t(We, Ha);
    We.prototype.name = "cancel";
    var qf = function(a, b, c) {
        if (ta(a))
            c && (a = q(a, c));
        else if (a && "function" == typeof a.handleEvent)
            a = q(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0)
    };
    var rf = function(a, b) {
        var c = b || He;
        return function() {
            var b = this || l;
            b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {});
            var e = c(ya(a), arguments);
            return b.hasOwnProperty(e) ? b[e] : b[e] = a.apply(this, arguments)
        }
    }(function() {
        return w ? bc(8) : "onhashchange" in l
    });
    var U = function(a, b, c) {
            a && a.log(Qd, b, c)
        },
        sf = function(a, b) {
            a && a.log(Rd, b, void 0)
        },
        V = function(a, b) {
            a && a.info(b, void 0)
        },
        tf = function(a, b) {
            a && a.log(Ud, b, void 0)
        };
    var uf = Bb(),
        vf = Eb() || v("iPod"),
        wf = v("iPad"),
        xf = v("Android") && !(Cb() || Bb() || v("Opera") || v("Silk")),
        yf = Cb(),
        zf = Db() && !Fb();
    var Af = function(a) {
            return (a = a.exec(rb)) ? a[1] : ""
        },
        Bf = function() {
            if (uf)
                return Af(/Firefox\/([0-9.]+)/);
            if (w || Lb || Kb)
                return Zb;
            if (yf)
                return Fb() ? Af(/CriOS\/([0-9.]+)/) : Af(/Chrome\/([0-9.]+)/);
            if (zf && !Fb())
                return Af(/Version\/([0-9.]+)/);
            if (vf || wf) {
                var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(rb);
                if (a)
                    return a[1] + "." + a[2]
            } else if (xf)
                return (a = Af(/Android\s+([0-9.]+)/)) ? a : Af(/Version\/([0-9.]+)/);
            return ""
        }();
    var Cf = gc(function() {
            return !w || 0 <= ob(Bf, 9)
        }),
        Df = gc(function() {
            return A || Lb || z && 0 <= ob(Bf, 10) || w && 0 <= ob(Bf, 10)
        }),
        Ff = function(a, b) {
            //if (Cf()) {
            //    var c = Df() ? "translate3d(0px," + b + "px,0px)" : "translate(0px," + b + "px)";
            //    ld(a, Ef(), c)
            //}
        },
        Ef = gc(function() {
            return w && 9 == ac ? "-ms-transform" : "transform";
        });
    var Hf = function(a) {
        this.a = K("blogger.templates.responsive.CollapsedHeader");
        V(this.a, "Initializing collapsed header.");
        try {
            if (this.hc = a || new Ea, this.Vb = null, this.o = document.querySelector(".centered-top-container"))
                if (this.Z = document.querySelector(".centered-top-placeholder"))
                    if (this.Ye = document.querySelector(this.hc.Cg)) {
                        var b = this.o.querySelector(".centered-top");
                        if (b) {
                            this.Cf = b.cloneNode(!0);
                            this.Id = this.Mb = !1;
                            this.vd = Nc(document).y;
                            var c = hc(this.Zf, this.hc.mg, this);
                            this.Vb = c;
                            c();
                            P(this.hc.yg, "scroll",
                            this.Vb);
                            Gf(this);
                            V(this.a, "Finished initializing collapsed header.")
                        } else
                            U(this.a, "There was an error initializing the collapsed header. centered-top not found.")
                    } else
                        U(this.a, "There was an error initializing the collapsed header. centered-bottom not found.");
                else
                    U(this.a, "There was an error initializing the collapsed header. centered-top-placeholder not found.");
            else
                U(this.a, "There was an error initializing the collapsed header. centered-top-container not found.")
        } catch (d) {
            U(this.a, "There was an error initializing the collapsed header. Uncaught exception.",
            d), this.b()
        }
    };
    Hf.prototype.Zf = function() {
        var a = this,
            b = this.vd;
        this.vd = Nc(document).y;
        //b = this.vd < b;
        b = true;
        0 > this.Ye.getBoundingClientRect().top && 
        b ? this.Id || (this.Mb && (J in this.o && R(this.o, J), this.Mb = !1), this.Id = !0, L.add(document.body, "collapsed-header"), L.contains(this.Z, "cloned") || (L.add(this.Z, "cloned"), this.Z.appendChild(this.Cf)), L.add(this.o, "sticky"), L.remove(this.o, "animating"), If(this), setTimeout(function() {
            L.add(a.o, "animating");
            Ff(a.o, 0);
            a.o.style.opacity = "1";
            Ae("collapsed-header-show", new Jf("collapsed-header-show"))
        }, 0),
        document.body.appendChild(this.o)) : (this.Id = !1, L.contains(this.Z, "cloned") && (If(this), J ? P(this.o, J, this.se, !1, this) : setTimeout(function() {
            return a.se()
        }, this.hc.Rf), this.Mb = !0))
    };
    var If = function(a) {
        var b = a.o.getBoundingClientRect().height;
        Ff(a.o, -b);
        a.o.style.opacity = "0"
    };
    Hf.prototype.se = function() {
        this.Mb && (this.o.style.transform = "", this.o.style.opacity = "", J && R(this.o, J), this.Mb = !1, this.Z.parentNode.insertBefore(this.o, this.Z), L.remove(document.body, "collapsed-header"), L.contains(this.Z, "cloned") && (L.remove(this.Z, "cloned"), this.Z.removeChild(this.Z.lastChild)), L.remove(this.o, "sticky"), Ae("collapsed-header-hide", new Jf("collapsed-header-hide")))
    };
    Hf.prototype.I = function() {
        return L.contains(document.body, "collapsed-header")
    };
    Hf.prototype.le = function() {
        return this.I() && this.o.offsetHeight || 0
    };
    var Gf = function(a) {
            Kf(a, window.location.hash, !0);
            P(window, "hashchange", function() {
                return Kf(a, window.location.hash)
            });
            P(document.body, "click", function(b) {
                b = b.target;
                "A" == b.nodeName && Kf(a, b.getAttribute("href"), !1, !0)
            })
        },
        Kf = function(a, b, c, d) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? !1 : d;
            if (!/^#[^ ]+$/.test(b))
                return !1;
            var e = document.getElementById(b.slice(1));
            if (e) {
                var f = qe(window, "collapsed-header-show", Lf(a, e));
                setTimeout(function() {
                    Q(f)
                }, c ? 3E3 : 100);
                rf && d && window.history.pushState({}, document.title, window.location.pathname +
                b)
            }
            return !!e
        },
        Lf = function(a, b) {
            return function() {
                if (!a.I())
                    return !1;
                var c = a.le() + 20,
                    d = b.getBoundingClientRect().top;
                return 0 <= d && d < c && window.pageYOffset > c ? (window.scrollTo(window.pageXOffset, window.pageYOffset - c), !0) : !1
            }
        };
    Hf.prototype.b = function() {
        this.Vb && (xe(window, "scroll", this.Vb), this.Vb = null)
    };
    var Jf = function(a, b) {
        N.call(this, a, b)
    };
    ja(Jf, N);
    var Mf = function(a) {
        this.G = a
    };
    Mf.prototype.show = function() {
        this.G && L.remove(this.G, "hidden")
    };
    Mf.prototype.Lb = function() {
        this.G && L.add(this.G, "hidden")
    };
    Mf.prototype.V = function() {
        this.G && this.G.parentNode && (this.G.parentNode.removeChild(this.G), this.G = null)
    };
    var Nf = function(a, b, c) {
        var d = document.createElement("div");
        L.add(d, "dim-overlay");
        L.add(d, "hidden");
        c && (d.id = c);
        a.appendChild(d);
        var e = new Mf(d);
        P(d, "click", function(a) {
            b && b(a);
            e.Lb()
        });
        return e
    };
    var Qf = function(a, b, c, d, e, f) {
            if (A && !$b("525"))
                return !0;
            if (Nb && e)
                return Of(a);
            if (e && !d)
                return !1;
            if (!z) {
                oa(b) && (b = Pf(b));
                var h = 17 == b || 18 == b || Nb && 91 == b;
                if ((!c || Nb) && h || Nb && 16 == b && (d || f))
                    return !1
            }
            if ((A || Lb) && d && c)
                switch (a) {
                case 220:
                case 219:
                case 221:
                case 192:
                case 186:
                case 189:
                case 187:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                    return !1
                }
            if (w && d && b == a)
                return !1;
            switch (a) {
            case 13:
                return z ? f || e ? !1 : !(c && d) : !0;
            case 27:
                return !(A || Lb || z)
            }
            return z && (d || e || f) ? !1 : Of(a)
        },
        Of = function(a) {
            if (48 <= a && 57 >= a || 96 <= a && 106 >=
            a || 65 <= a && 90 >= a || (A || Lb) && 0 == a)
                return !0;
            switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
            case 163:
                return !0;
            default:
                return !1
            }
        },
        Pf = function(a) {
            if (z)
                a = Rf(a);
            else if (Nb && A)
                switch (a) {
                case 93:
                    a = 91
                }
            return a
        },
        Rf = function(a) {
            switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
            }
        };
    var Sf = {
        8: "backspace",
        9: "tab",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        19: "pause",
        20: "caps-lock",
        27: "esc",
        32: "space",
        33: "pg-up",
        34: "pg-down",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "insert",
        46: "delete",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        59: "semicolon",
        61: "equals",
        65: "a",
        66: "b",
        67: "c",
        68: "d",
        69: "e",
        70: "f",
        71: "g",
        72: "h",
        73: "i",
        74: "j",
        75: "k",
        76: "l",
        77: "m",
        78: "n",
        79: "o",
        80: "p",
        81: "q",
        82: "r",
        83: "s",
        84: "t",
        85: "u",
        86: "v",
        87: "w",
        88: "x",
        89: "y",
        90: "z",
        93: "context",
        96: "num-0",
        97: "num-1",
        98: "num-2",
        99: "num-3",
        100: "num-4",
        101: "num-5",
        102: "num-6",
        103: "num-7",
        104: "num-8",
        105: "num-9",
        106: "num-multiply",
        107: "num-plus",
        109: "num-minus",
        110: "num-period",
        111: "num-division",
        112: "f1",
        113: "f2",
        114: "f3",
        115: "f4",
        116: "f5",
        117: "f6",
        118: "f7",
        119: "f8",
        120: "f9",
        121: "f10",
        122: "f11",
        123: "f12",
        186: "semicolon",
        187: "equals",
        189: "dash",
        188: ",",
        190: ".",
        191: "/",
        192: "`",
        219: "open-square-bracket",
        220: "\\",
        221: "close-square-bracket",
        222: "single-quote",
        224: "win"
    };
    var Vf = function(a) {
            S.call(this);
            this.Fb = this.Tb = {};
            this.zc = 0;
            this.Of = zb.apply(null, Tf);
            this.Ig = zb.apply(null, Uf);
            this.xf = !0;
            this.vf = this.yf = !1;
            this.ag = !0;
            this.wf = !1;
            this.Yc = null;
            this.Qa = a;
            P(this.Qa, "keydown", this.Jb, void 0, this);
            Ob && P(this.Qa, "keypress", this.ne, void 0, this);
            P(this.Qa, "keyup", this.me, void 0, this)
        },
        Wf;
    t(Vf, S);
    var Xf = function(a) {
            this.We = a || null;
            this.next = a ? null : {}
        },
        Tf = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
        Uf = "color date datetime datetime-local email month number password search tel text time url week".split(" ");
    Vf.prototype.ug = function(a, b) {
        Yf(this.Tb, Zf(arguments), a)
    };
    var Zf = function(a) {
        if (p(a[1]))
            a = Ta($f(a[1]), function(a) {
                La(a.keyCode, "A non-modifier key is needed in each stroke.");
                return ag(a.key || "", a.keyCode, a.bg)
            });
        else {
            var b = a,
                c = 1;
            ra(a[1]) && (b = a[1], c = 0);
            for (a = []; c < b.length; c += 2)
                a.push(ag("", b[c], b[c + 1]))
        }
        return a
    };
    Vf.prototype.u = function() {
        Vf.m.u.call(this);
        this.Tb = {};
        xe(this.Qa, "keydown", this.Jb, !1, this);
        Ob && xe(this.Qa, "keypress", this.ne, !1, this);
        xe(this.Qa, "keyup", this.me, !1, this);
        this.Qa = null
    };
    var $f = function(a) {
        a = a.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase();
        a = a.split(" ");
        for (var b = [], c, d = 0; c = a[d]; d++) {
            var e = c.split("+"),
                f = null,
                h = null;
            c = 0;
            for (var k, m = 0; k = e[m]; m++) {
                switch (k) {
                case "shift":
                    c |= 1;
                    continue;
                case "ctrl":
                    c |= 2;
                    continue;
                case "alt":
                    c |= 4;
                    continue;
                case "meta":
                    c |= 8;
                    continue
                }
                null === h || Ka("At most one non-modifier key can be in a stroke.");
                e = void 0;
                f = k;
                if (!Wf) {
                    h = {};
                    for (e in Sf)
                        h[Sf[e]] = Pf(parseInt(e, 10));
                    Wf = h
                }
                h = Wf[f];
                La(h, "Key name not found in goog.events.KeyNames: " +
                k);
                f = k;
                break
            }
            b.push({
                key: f,
                keyCode: h,
                bg: c
            })
        }
        return b
    };
    Vf.prototype.me = function(a) {
        z && (32 == this.Yc && 32 == a.keyCode && a.preventDefault(), this.Yc = null);
        Ob && !this.ye && Ob && a.ctrlKey && a.altKey && this.Jb(a)
    };
    Vf.prototype.ne = function(a) {
        32 < a.keyCode && Ob && a.ctrlKey && a.altKey && (this.ye = !0)
    };
    var Yf = function(a, b, c) {
            var d = b.shift();
            Ra(d, function(c) {
                if ((c = a[c]) && (0 == b.length || c.We))
                    throw Error("Keyboard shortcut conflicts with existing shortcut");
            });
            b.length ? Ra(d, function(d) {
                d = d.toString();
                var e = new Xf;
                d = d in a ? a[d] : a[d] = e;
                e = b.slice(0);
                Yf(u(d.next, "An internal node must have a next map"), e, c)
            }) : Ra(d, function(b) {
                a[b] = new Xf(c)
            })
        },
        bg = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a[b[c]];
                if (d)
                    return d
            }
        },
        ag = function(a, b, c) {
            c = c || 0;
            b = ["c_" + b + "_" + c];
            "" != a && b.push("n_" + a + "_" + c);
            return b
        };
    Vf.prototype.Jb = function(a) {
        a:
        {
            var b = a.keyCode;
            if ("" != a.key) {
                var c = a.key;
                if ("Control" == c || "Shift" == c || "Meta" == c || "AltGraph" == c) {
                    b = !1;
                    break a
                }
            } else if (16 == b || 17 == b || 18 == b) {
                b = !1;
                break a
            }
            c = a.target;
            var d = "TEXTAREA" == c.tagName || "INPUT" == c.tagName || "BUTTON" == c.tagName || "SELECT" == c.tagName,
                e = !d && (c.isContentEditable || c.ownerDocument && "on" == c.ownerDocument.designMode);
            b = !d && !e || this.Of[b] || this.vf ? !0 : e ? !1 : this.ag && (a.altKey || a.ctrlKey || a.metaKey) ? !0 : "INPUT" == c.tagName && this.Ig[c.type] ? 13 == b : "INPUT" == c.tagName ||
            "BUTTON" == c.tagName ? this.wf ? !0 : 32 != b : !1
        }if (b)
            if ("keydown" == a.type && Ob && a.ctrlKey && a.altKey)
                this.ye = !1;
            else {
                b = Pf(a.keyCode);
                c = ag(a.key, b, (a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.altKey ? 4 : 0) | (a.metaKey ? 8 : 0));
                d = bg(this.Fb, c);
                if (!d || 1500 <= Da() - this.zc)
                    this.Fb = this.Tb, this.zc = Da();
                (d = bg(this.Fb, c)) && d.next && (this.Fb = d.next, this.zc = Da());
                d && (d.next ? a.preventDefault() : (this.Fb = this.Tb, this.zc = Da(), this.xf && a.preventDefault(), this.yf && a.stopPropagation(), c = Ma(d.We, "A terminal node must have a string shortcut identifier."),
                d = a.target, e = this.dispatchEvent(new cg("shortcut", c, d)), (e &= this.dispatchEvent(new cg("shortcut_" + c, c, d))) || a.preventDefault(), z && (this.Yc = b)))
            }
    };
    var cg = function(a, b, c) {
        N.call(this, a, c);
        this.identifier = b
    };
    t(cg, N);
    var eg = function() {
            var a = this;
            var b = void 0 === b ? !0 : b;
            this.a = K("blogger.templates.responsive.Search");
            V(this.a, "Initializing Search.");
            try {
                if (this.Eb = document.querySelector(".centered-top-container")) {
                    var c = this.Eb.querySelector(".search");
                    if (c) {
                        this.Ea = c;
                        var d = this.Eb.querySelectorAll(".search-expand");
                        (this.Za = d && Array.prototype.slice.call(d, 0)) && 0 != this.Za.length ? (this.Sb = this.Eb.querySelector(".search-close"), this.G = b && Nf(this.Ea, function() {
                            return a.Pd()
                        }) || null, (this.dd = this.Eb.querySelector(".centered-top")) ?
                        (this.Qe = this.Ea.querySelector(".search-action"), (this.$a = this.Ea.querySelector(".search-input input")) ? (this.ze = new Vf(document), dg(this), V(this.a, "Finished initializing search section.")) : U(this.a, "There was an error initializing the search section. search input not found.")) : U(this.a, "There was an error initializing the search section. centered-top not found.")) : sf(this.a, "There was an error initializing the search section. No search buttons found.")
                    } else
                        U(this.a, "There was an error initializing the search section. search section not found.")
                } else
                    U(this.a,
                    "There was an error initializing the search section. container not found.")
            } catch (e) {
                U(this.a, "Error initializing section. Uncaught exception.", e), this.b()
            }
        },
        dg = function(a) {
            if (a.Za)
                for (var b = ba(a.Za), c = b.next(); !c.done; c = b.next())
                    P(c.value, "click", a.Pd, !1, a);
            a.Sb && P(a.Sb, "click", a.Pd, !1, a);
            b = function() {
                a.Qe && (a.Qe.disabled = "" == a.$a.value)
            };
            P(a.$a, "input", b);
            b();
            a.ze.ug("showSearch", 191, 0);
            P(a.ze, "shortcut", a.ke, !1, a)
        };
    eg.prototype.Pd = function() {
        L.contains(this.Ea, "focused") ? L.contains(this.Ea, "focused") && (L.remove(this.Ea, "focused"), L.remove(this.dd, "search-focused"), this.G && this.G.Lb()) : this.ke()
    };
    eg.prototype.ke = function() {
        L.contains(this.Ea, "focused") || (L.add(this.dd, "search-focused"), L.add(this.Ea, "focused"), this.G && this.G.show());
        this.$a.focus()
    };
    eg.prototype.b = function() {
        this.G && (this.G.V(), this.G = null);
        if (this.Za) {
            for (var a = ba(this.Za), b = a.next(); !b.done; b = a.next())
                R(b.value, "click");
            this.Za = null
        }
        this.Sb && (R(this.Sb, "click"), this.Sb = null);
        this.$a && (R(this.$a, "input"), this.$a = null)
    };
    var fg = function() {};
    fg.prototype.L = function() {};
    var gg = function() {
        if (Ob) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(rb)) ? a[1] : "0"
        }
        return Nb ? (a = /10[_.][0-9_.]+/, (a = a.exec(rb)) ? a[0].replace(/_/g, ".") : "10") : Pb ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(rb)) ? a[1] : "") : Qb || Rb || Sb ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(rb)) ? a[1].replace(/_/g, ".") : "") : ""
    }();
    var jg = function(a, b, c, d, e, f, h, k, m) {
            u(c);
            var r;
            if (r = c.offsetParent) {
                var x = "HTML" == r.tagName || "BODY" == r.tagName;
                if (!x || "static" != od(r)) {
                    var y = td(r);
                    if (!x) {
                        x = zd(r);
                        var E;
                        if (E = x) {
                            E = zf && 0 <= ob(Bf, 10);
                            var M;
                            if (M = Tb)
                                M = 0 <= ob(gg, 10);
                            E = z || E || M
                        }
                        x = E ? -r.scrollLeft : !x || Mb && $b("8") || "visible" == nd(r, "overflowX") ? r.scrollLeft : r.scrollWidth - r.clientWidth - r.scrollLeft;
                        y = Dc(y, new B(x, r.scrollTop))
                    }
                }
            }
            r = y || new B;
            y = td(a);
            x = xd(a);
            y = new jd(y.x, y.y, x.width, x.height);
            if (x = ud(a)) {
                var O = new jd(x.left, x.top, x.right - x.left, x.bottom -
                x.top);
                x = Math.max(y.left, O.left);
                E = Math.min(y.left + y.width, O.left + O.width);
                x <= E && (M = Math.max(y.top, O.top), O = Math.min(y.top + y.height, O.top + O.height), M <= O && (y.left = x, y.top = M, y.width = E - x, y.height = O - M))
            }
            x = D(a);
            M = D(c);
            if (x.f != M.f) {
                E = x.f.body;
                M = ad(M);
                O = new B(0, 0);
                var za = Oc(C(E));
                if (Hb(za, "parent")) {
                    var Cd = E;
                    do {
                        if (za == M)
                            var Oa = td(Cd);
                        else
                            Oa = u(Cd), Oa = rd(Oa), Oa = new B(Oa.left, Oa.top);
                        O.x += Oa.x;
                        O.y += Oa.y
                    } while (za && za != M && za != za.parent && (Cd = za.frameElement) && (za = za.parent))
                }
                E = Dc(O, td(E));
                !w || bc(9) || Kc(x.f) ||
                (E = Dc(E, Nc(x.f)));
                y.left += E.x;
                y.top += E.y
            }
            a = hg(a, b);
            b = y.left;
            a & 4 ? b += y.width : a & 2 && (b += y.width / 2);
            b = new B(b, y.top + (a & 1 ? y.height : 0));
            b = Dc(b, r);
            e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
            if (h)
                if (m)
                    var wa = m;
                else if (wa = ud(c))
                    wa.top -= r.y, wa.right -= r.x, wa.bottom -= r.y, wa.left -= r.x;
            return ig(b, c, d, f, wa, h, k)
        },
        ig = function(a, b, c, d, e, f, h) {
            a = a.clone();
            var k = hg(b, c);
            c = xd(b);
            h = h ? h.clone() : c.clone();
            a = a.clone();
            h = h.clone();
            var m = 0;
            if (d || 0 != k)
                k & 4 ? a.x -= h.width + (d ? d.right : 0) : k & 2 ? a.x -= h.width / 2 : d && (a.x += d.left), k & 1 ? a.y -=
                h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
            if (f) {
                if (e) {
                    d = a;
                    k = h;
                    m = 0;
                    65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
                    132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
                    d.x < e.left && f & 1 && (d.x = e.left, m |= 1);
                    if (f & 16) {
                        var r = d.x;
                        d.x < e.left && (d.x = e.left, m |= 4);
                        d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, r + k.width - e.left), k.width = Math.max(k.width, 0), m |= 4)
                    }
                    d.x + k.width > e.right && f & 1 && (d.x = Math.max(e.right - k.width, e.left), m |= 1);
                    f & 2 && (m |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                    d.y < e.top && f & 4 && (d.y = e.top,
                    m |= 2);
                    f & 32 && (r = d.y, d.y < e.top && (d.y = e.top, m |= 8), d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, r + k.height - e.top), k.height = Math.max(k.height, 0), m |= 8));
                    d.y + k.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - k.height, e.top), m |= 2);
                    f & 8 && (m |= (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
                    e = m
                } else
                    e = 256;
                m = e
            }
            f = new jd(0, 0, 0, 0);
            f.left = a.x;
            f.top = a.y;
            f.width = h.width;
            f.height = h.height;
            e = m;
            if (e & 496)
                return e;
            qd(b, new B(f.left, f.top));
            h = new Ec(f.width, f.height);
            c == h || c && h && c.width == h.width && c.height == h.height ||
            (c = h, h = C(b), a = Kc(D(h).f), !w || $b("10") || a && $b("8") ? (b = b.style, z ? b.MozBoxSizing = "border-box" : A ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(c.width, 0) + "px", b.height = Math.max(c.height, 0) + "px") : (h = b.style, a ? (w ? (a = Bd(b, "paddingLeft"), f = Bd(b, "paddingRight"), d = Bd(b, "paddingTop"), k = Bd(b, "paddingBottom"), a = new id(d, f, k, a)) : (a = G(b, "paddingLeft"), f = G(b, "paddingRight"), d = G(b, "paddingTop"), k = G(b, "paddingBottom"), a = new id(parseFloat(d), parseFloat(f), parseFloat(k), parseFloat(a))), b = Fd(b),
            h.pixelWidth = c.width - b.left - a.left - a.right - b.right, h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth = c.width, h.pixelHeight = c.height)));
            return e
        },
        hg = function(a, b) {
            return (b & 8 && zd(a) ? b ^ 4 : b) & -9
        };
    var kg = function(a, b) {
        this.Ff = a instanceof B ? a : new B(a, b)
    };
    t(kg, fg);
    kg.prototype.L = function(a, b, c, d) {
        ig(this.Ff, a, b, c, null, null, d)
    };
    var lg,
        mg = {
            Rg: "activedescendant",
            Wg: "atomic",
            Xg: "autocomplete",
            Zg: "busy",
            bh: "checked",
            dh: "colindex",
            ih: "controls",
            kh: "describedby",
            nh: "disabled",
            ph: "dropeffect",
            qh: "expanded",
            rh: "flowto",
            th: "grabbed",
            xh: "haspopup",
            zh: "hidden",
            Bh: "invalid",
            Ch: "label",
            Dh: "labelledby",
            Eh: "level",
            Jh: "live",
            Th: "multiline",
            Uh: "multiselectable",
            Yh: "orientation",
            Zh: "owns",
            $h: "posinset",
            bi: "pressed",
            fi: "readonly",
            hi: "relevant",
            ii: "required",
            mi: "rowindex",
            pi: "selected",
            si: "setsize",
            ui: "sort",
            Ii: "valuemax",
            Ji: "valuemin",
            Ki: "valuenow",
            Li: "valuetext"
        };
    var ng = {
        Sg: "alert",
        Tg: "alertdialog",
        Ug: "application",
        Vg: "article",
        Yg: "banner",
        $g: "button",
        ah: "checkbox",
        eh: "columnheader",
        fh: "combobox",
        gh: "complementary",
        hh: "contentinfo",
        jh: "definition",
        lh: "dialog",
        mh: "directory",
        oh: "document",
        sh: "form",
        uh: "grid",
        vh: "gridcell",
        wh: "group",
        yh: "heading",
        Ah: "img",
        Fh: "link",
        Gh: "list",
        Hh: "listbox",
        Ih: "listitem",
        Kh: "log",
        Lh: "main",
        Mh: "marquee",
        Nh: "math",
        Oh: "menu",
        Ph: "menubar",
        Qh: "menuitem",
        Rh: "menuitemcheckbox",
        Sh: "menuitemradio",
        Vh: "navigation",
        Wh: "note",
        Xh: "option",
        ai: "presentation",
        ci: "progressbar",
        di: "radio",
        ei: "radiogroup",
        gi: "region",
        ji: "row",
        ki: "rowgroup",
        li: "rowheader",
        ni: "scrollbar",
        oi: "search",
        ri: "separator",
        ti: "slider",
        vi: "spinbutton",
        wi: "status",
        xi: "tab",
        yi: "tablist",
        zi: "tabpanel",
        Ai: "textbox",
        Bi: "textinfo",
        Ci: "timer",
        Di: "toolbar",
        Ei: "tooltip",
        Fi: "tree",
        Gi: "treegrid",
        Hi: "treeitem"
    };
    zb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
    var og = function(a, b) {
            b ? (u(wb(ng, b), "No such ARIA role " + b), a.setAttribute("role", b)) : a.removeAttribute("role")
        },
        W = function(a, b, c) {
            ra(c) && (c = c.join(" "));
            var d = pg(b);
            "" === c || void 0 == c ? (lg || (lg = {
                atomic: !1,
                autocomplete: "none",
                dropeffect: "none",
                haspopup: !1,
                live: "off",
                multiline: !1,
                multiselectable: !1,
                orientation: "vertical",
                readonly: !1,
                relevant: "additions text",
                required: !1,
                sort: "none",
                busy: !1,
                disabled: !1,
                hidden: !1,
                invalid: "false"
            }), c = lg, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d,
            c)
        },
        rg = function(a, b) {
            var c = qg(a, b);
            /^[\s\xa0]*$/.test(null == c ? "" : String(c)) || "true" == c || "false" == c ? W(a, b, "true" == c ? "false" : "true") : a.removeAttribute(pg(b))
        },
        qg = function(a, b) {
            var c = a.getAttribute(pg(b));
            return null == c || void 0 == c ? "" : String(c)
        },
        pg = function(a) {
            u(a, "ARIA attribute cannot be empty.");
            u(wb(mg, a), "No such ARIA attribute " + a);
            return "aria-" + a
        };
    var sg = "StopIteration" in l ? l.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        tg = function() {};
    tg.prototype.next = function() {
        throw sg;
    };
    tg.prototype.pf = function() {
        return this
    };
    var ug = function(a, b) {
        this.la = {};
        this.s = [];
        this.$b = this.ib = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else
            a && this.addAll(a)
    };
    ug.prototype.Ib = function() {
        vg(this);
        for (var a = [], b = 0; b < this.s.length; b++)
            a.push(this.la[this.s[b]]);
        return a
    };
    ug.prototype.lb = function() {
        vg(this);
        return this.s.concat()
    };
    ug.prototype.clear = function() {
        this.la = {};
        this.$b = this.ib = this.s.length = 0
    };
    ug.prototype.remove = function(a) {
        return Object.prototype.hasOwnProperty.call(this.la, a) ? (delete this.la[a], this.ib--, this.$b++, this.s.length > 2 * this.ib && vg(this), !0) : !1
    };
    var vg = function(a) {
        if (a.ib != a.s.length) {
            for (var b = 0, c = 0; b < a.s.length;) {
                var d = a.s[b];
                Object.prototype.hasOwnProperty.call(a.la, d) && (a.s[c++] = d);
                b++
            }
            a.s.length = c
        }
        if (a.ib != a.s.length) {
            var e = {};
            for (c = b = 0; b < a.s.length;)
                d = a.s[b], Object.prototype.hasOwnProperty.call(e, d) || (a.s[c++] = d, e[d] = 1), b++;
            a.s.length = c
        }
    };
    g = ug.prototype;
    g.get = function(a, b) {
        return Object.prototype.hasOwnProperty.call(this.la, a) ? this.la[a] : b
    };
    g.set = function(a, b) {
        Object.prototype.hasOwnProperty.call(this.la, a) || (this.ib++, this.s.push(a), this.$b++);
        this.la[a] = b
    };
    g.addAll = function(a) {
        if (a instanceof ug)
            for (var b = a.lb(), c = 0; c < b.length; c++)
                this.set(b[c], a.get(b[c]));
        else
            for (b in a)
                this.set(b, a[b])
    };
    g.forEach = function(a, b) {
        for (var c = this.lb(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    g.clone = function() {
        return new ug(this)
    };
    g.pf = function(a) {
        vg(this);
        var b = 0,
            c = this.$b,
            d = this,
            e = new tg;
        e.next = function() {
            if (c != d.$b)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.s.length)
                throw sg;
            var e = d.s[b++];
            return a ? e : d.la[e]
        };
        return e
    };
    var wg = function(a, b) {
        if ("FORM" == a.tagName)
            for (var c = a.elements, d = 0; a = c[d]; d++)
                wg(a, b);
        else
            1 == b && a.blur(), a.disabled = b
    };
    var xg = function() {
            this.Cb = this.Bc = ""
        },
        yg = /"/g,
        zg = /\\/g,
        Ag = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;
    xg.prototype.getName = function() {
        return this.Bc
    };
    xg.prototype.toString = function() {
        var a = this.getName();
        a = a.replace(yg, "");
        var b;
        a:
        {
            for (b = 0; 13 > b; b++)
                if (-1 != a.indexOf('()<>@:\\".[],;'[b])) {
                    b = !0;
                    break a
                }
            b = !1
        }b && (a = '"' + a.replace(zg, "\\\\") + '"');
        return "" == a ? this.Cb : "" == this.Cb ? a : a + " <" + this.Cb + ">"
    };
    var Cg = function(a, b) {
        S.call(this);
        this.O = new De(this);
        var c = a || null;
        Bg(this);
        this.c = c;
        b && (this.Ab = b)
    };
    t(Cg, S);
    g = Cg.prototype;
    g.c = null;
    g.Yd = !0;
    g.Wd = null;
    g.Xd = null;
    g.qb = !1;
    g.Bg = !1;
    g.wd = -1;
    g.pe = !1;
    g.If = !0;
    g.Ab = "toggle_display";
    g.h = function() {
        return this.c
    };
    var Dg = function(a) {
            Bg(a);
            a.Yd = !0
        },
        Eg = function(a) {
            Bg(a);
            a.pe = !0
        };
    Cg.prototype.Ue = function(a, b) {
        this.yb = a;
        this.ob = b
    };
    Cg.prototype.Ba = function() {
        return this.O
    };
    var Bg = function(a) {
        if (a.qb)
            throw Error("Can not change this state of the popup while showing.");
    };
    g = Cg.prototype;
    g.I = function() {
        return this.qb
    };
    g.D = function(a) {
        this.yb && this.yb.stop();
        this.ob && this.ob.stop();
        a ? this.Hd() : this.pb()
    };
    g.L = pa;
    g.Hd = function() {
        if (!this.qb && this.dispatchEvent("beforeshow")) {
            if (!this.c)
                throw Error("Caller must call setElement before trying to show the popup");
            this.L();
            var a = C(this.c);
            this.pe && this.O.w(a, "keydown", this.hg, !0);
            if (this.Yd)
                if (this.O.w(a, "mousedown", this.Ee, !0), w) {
                    try {
                        var b = a.activeElement
                    } catch (d) {}
                    for (; b && "IFRAME" == b.nodeName;) {
                        try {
                            var c = b.contentDocument || b.contentWindow.document
                        } catch (d) {
                            break
                        }
                        a = c;
                        b = a.activeElement
                    }
                    this.O.w(a, "mousedown", this.Ee, !0);
                    this.O.w(a, "deactivate", this.De)
                } else
                    this.O.w(a,
                    "blur", this.De);
            "toggle_display" == this.Ab ? (this.c.style.visibility = "visible", I(this.c, !0)) : "move_offscreen" == this.Ab && this.L();
            this.qb = !0;
            this.wd = Da();
            this.yb ? (qe(this.yb, "end", this.Va, !1, this), this.yb.play()) : this.Va()
        }
    };
    g.pb = function(a) {
        if (!this.qb || !this.dispatchEvent({
            type: "beforehide",
            target: a
        }))
            return !1;
        this.O && this.O.ba();
        this.qb = !1;
        Da();
        this.ob ? (qe(this.ob, "end", Ca(this.de, a), !1, this), this.ob.play()) : this.de(a);
        return !0
    };
    g.de = function(a) {
        "toggle_display" == this.Ab ? this.Bg ? qf(this.qe, 0, this) : this.qe() : "move_offscreen" == this.Ab && (this.c.style.top = "-10000px");
        this.sb(a)
    };
    g.qe = function() {
        this.c.style.visibility = "hidden";
        I(this.c, !1)
    };
    g.Va = function() {
        this.dispatchEvent("show")
    };
    g.sb = function(a) {
        this.dispatchEvent({
            type: "hide",
            target: a
        })
    };
    g.Ee = function(a) {
        a = a.target;
        Yc(this.c, a) || Fg(this, a) || this.Xd && !Yc(this.Xd, a) || 150 > Da() - this.wd || this.pb(a)
    };
    g.hg = function(a) {
        27 == a.keyCode && this.pb(a.target) && (a.preventDefault(), a.stopPropagation())
    };
    g.De = function(a) {
        if (this.If) {
            var b = C(this.c);
            if ("undefined" != typeof document.activeElement) {
                if (a = b.activeElement, !a || Yc(this.c, a) || "BODY" == a.tagName)
                    return
            } else if (a.target != b)
                return;
            150 > Da() - this.wd || this.pb()
        }
    };
    var Fg = function(a, b) {
        return Ua(a.Wd || [], function(a) {
            return b === a || Yc(a, b)
        })
    };
    Cg.prototype.u = function() {
        Cg.m.u.call(this);
        this.O.pa();
        $d(this.yb);
        $d(this.ob);
        delete this.c;
        delete this.O;
        delete this.Wd
    };
    var Gg = function(a, b) {
        this.Bd = 8;
        this.Cd = b || void 0;
        Cg.call(this, a)
    };
    t(Gg, Cg);
    Gg.prototype.setPosition = function(a) {
        this.Cd = a || void 0;
        this.I() && this.L()
    };
    Gg.prototype.L = function() {
        if (this.Cd) {
            var a = !this.I() && "move_offscreen" != this.Ab,
                b = this.h();
            a && (b.style.visibility = "hidden", I(b, !0));
            this.Cd.L(b, this.Bd, this.Qi);
            a && I(b, !1)
        }
    };
    var Ig = function() {
        this.a = K("blogger.templates.responsive.Subscribe");
        V(this.a, "Initializing Subscribe.");
        try {
            if (this.Bf = void 0, this.j = document.body && Nf(document.body, null, "subscribe-dim-overlay"), this.o = document.querySelector(".centered-top-container"))
                if (this.J = this.o.querySelector(".subscribe-popup"))
                    if (this.l = new Gg(this.J), this.Nd = this.o.querySelector(".subscribe-popup-container"))
                        if (this.Ub = this.o.querySelector(".subscribe-button"))
                            if (this.sa = this.J.querySelector(".follow-by-email-address")) {
                                if (this.kb =
                                this.J.querySelector(".follow-by-email-submit"))
                                    P(this.sa, "input", this.hf, !1, this), Hg(this, !0), this.hf(), this.Fd(), V(this.a, "Finished initializing Subscribe.")
                            } else
                                U(this.a, 'There was an error initializing the subscribe section. ".follow-by-email-address" not found.');
                        else
                            U(this.a, 'There was an error initializing the subscribe section. ".subscribe-button" not found.');
                    else
                        U(this.a, 'There was an error initializing the subscribe section. ."subscribe-popup-container" not found.');
                else
                    U(this.a, 'There was an error initializing the subscribe section. ".subscribe-popup" not found.');
            else
                U(this.a, 'There was an error initializing the subscribe section. ".centered-top-container" not found.')
        } catch (a) {
            U(this.a, "Error initializing Subscribe. Uncaught exception.", a), this.b()
        }
    };
    Ig.prototype.hf = function() {
        var a = "function" == typeof document.createElement("input").checkValidity,
            b;
        if (b = "" != this.sa.value)
            (a = a && this.sa.validity.valid) || (a = new xg, a.Cb = this.sa.value.trim(), a = Ag.test(a.Cb)), b = a;
        Hg(this, !b)
    };
    var Hg = function(a, b) {
        a.kb && (wg(a.kb, b), W(a.kb, "disabled", b))
    };
    Ig.prototype.Fd = function() {
        var a = this;
        Eg(this.l);
        Dg(this.l);
        P(window, "resize", this.Ke, !1, this);
        P(this.Ub, "click", this.xb, !1, this);
        P(this.l, "hide", this.nb, !1, this);
        P(this.kb, "click", function() {
            !a.kb.disabled && a.nb()
        }, !1, this)
    };
    Ig.prototype.nb = function() {
        this.sa && this.sa.blur();
        L.add(this.J, "hidden");
        document.body.removeChild(this.J);
        this.Nd.appendChild(this.J);
        this.j.Lb();
        this.Ub.focus()
    };
    Ig.prototype.Ke = function() {
        this.l && this.l.I() && (Jg(this), this.l.L())
    };
    var Jg = function(a) {
        a.J.style.visibility = "hidden";
        var b = L.contains(a.J, "hidden");
        L.remove(a.J, "hidden");
        var c = a.J.clientWidth;
        var d = a.J.clientHeight;
        b && L.add(a.J, "hidden");
        a.J.style.visibility = "visible";
        c = new Ec(c, d);
        b = c.width;
        c = c.height;
        d = a.Bf;
        var e = document.querySelector(void 0 === d ? ".centered" : d).getBoundingClientRect();
        d = e.left;
        e = e.width;
        var f = window.innerHeight;
        b = ("ltr" == document.documentElement.getAttribute("dir") ? -1 : 1) * b / 2;
        a.l.setPosition(new kg(d + e / 2 + b, f / 2 - c / 2))
    };
    Ig.prototype.xb = function() {
        this.Nd.removeChild(this.J);
        document.body.appendChild(this.J);
        this.l.D(!1);
        L.remove(this.J, "hidden");
        this.l.D(!0);
        Jg(this);
        this.j.show();
        (this.l.h().querySelector("input:not([type=hidden])") || this.l.h()).focus()
    };
    Ig.prototype.b = function() {
        this.j && (this.j.V(), this.j = null);
        xe(window, "resize", this.Ke, !1, this);
        this.l && (this.l.pa(), this.l = null);
        this.sa && R(this.sa, "input");
        this.Ub && R(this.Ub, "click")
    };
    var Kg = function(a) {
        a = a || new Fa;
        this.ce = new Hf(a.Ef);
        this.df = new Ig;
        this.Re = new eg
    };
    Kg.prototype.b = function() {
        this.ce.b();
        this.df.b();
        this.Re.b();
        this.Re = this.df = this.ce = null
    };
    var Lg = function() {
        this.sf = new Fa
    };
    var Mg = function() {};
    Mg.prototype.aa = function() {
        throw Error('Component "init" method must be implemented.');
    };
    Mg.prototype.b = function() {
        throw Error('Component "teardown" method must be implemented.');
    };
    var Ng = function(a, b, c, d) {
        d = void 0 === d ? [] : d;
        this.Db = a;
        this.hb = b;
        this.Mg = c;
        this.cb = d
    };
    var Og = function(a) {
            this.a = K("blogger.templates.responsive.OverflowDetector");
            V(this.a, "Initializing overflow detector.");
            try {
                this.i = a;
                this.i.cb.push("load");
                this.i.cb.push("resize");
                for (var b = ba(this.i.cb), c = b.next(); !c.done; c = b.next())
                    P(window, c.value, this.Lc, !1, this);
                this.Lc();
                V(this.a, "Finished initializing overflow detector.")
            } catch (d) {
                U(this.a, "Error initializing overflow detector. Uncaught exception.", d), this.b()
            }
        },
        Pg = function(a, b) {
            var c = F(a.i.hb, b);
            return c ? c.offsetHeight > b.offsetHeight : !1
        };
    Og.prototype.Lc = function() {
        for (var a = ba(Array.prototype.slice.call(document.querySelectorAll("." + this.i.Db), 0)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = F(this.i.hb, b);
            c && this.i.Mg(b, c.offsetHeight > b.offsetHeight)
        }
    };
    Og.prototype.b = function() {
        xe(window, "resize", this.Lc);
        xe(window, "load", this.Lc)
    };
    var Qg = function() {
        this.Db = "overflowable-container";
        this.hb = "overflowable-contents";
        this.wc = "overflowable-item";
        this.Zd = "overflow-button";
        this.Gf = "overflow-count";
        this.tg = 50;
        this.cb = []
    };
    var Rg = function(a, b, c) {
        this.element = a;
        this.gd = b;
        this.pg = c
    };
    t(Rg, fg);
    Rg.prototype.L = function(a, b, c) {
        jg(this.element, this.gd, a, b, void 0, c, this.pg)
    };
    var Sg = function(a, b, c, d) {
        Rg.call(this, a, b);
        this.Vf = c ? 5 : 0;
        this.zd = d || void 0
    };
    t(Sg, Rg);
    Sg.prototype.L = function(a, b, c, d) {
        var e = jg(this.element, this.gd, a, b, null, c, 10, d, this.zd);
        if (e & 496) {
            var f = Tg(e, this.gd);
            b = Tg(e, b);
            e = jg(this.element, f, a, b, null, c, 10, d, this.zd);
            e & 496 && (f = Tg(e, f), b = Tg(e, b), jg(this.element, f, a, b, null, c, this.Vf, d, this.zd))
        }
    };
    var Tg = function(a, b) {
        a & 48 && (b ^= 4);
        a & 192 && (b ^= 1);
        return b
    };
    var Ug = function(a, b) {
        this.a = K("blogger.templates.responsive.Overflowable");
        this.i = b || new Qg;
        this.ha = a;
        this.j = this.cc = this.Kc = this.l = this.Y = this.Pa = this.xa = this.bd = this.Ia = null;
        this.Af = this.i.Zd + "-container";
        this.ma = null
    };
    ja(Ug, Mg);
    Ug.prototype.aa = function() {
        var a = this;
        V(this.a, "Initializing overflowable.");
        try {
            this.Ia = F(this.i.hb, this.ha);
            if (!this.Ia)
                return U(this.a, "There was an error initializing an overflowable. content element not found."), af();
            this.xa = F(this.i.Zd, this.ha);
            this.bd = Vg(this);
            Wc(this.bd, this.Ia);
            L.contains(this.ha, "overflowable-no-popup") || (this.Y = document.createElement("DIV"), L.add(this.Y, "overflow-popup"), I(this.Y, !1), Wc(this.Y, this.ha));
            this.Kc = P(window, "resize", this.lg);
            this.Fd();
            Wg(this);
            var b = "overflowable-" +
            ya(this);
            L.add(this.ha, b);
            this.ma = new Og(new Ng(b, "overflowable-backup-content", hc(function(b, d) {
                return a.Ec(b, d)
            }, this.i.tg, this), this.i.cb));
            this.Ec(this.ha, Pg(this.ma, this.ha));
            V(this.a, "Finished initializing overflowable.");
            return $e()
        } catch (c) {
            return U(this.a, "Error initializing overflowable. Uncaught exception.", c), af(c)
        }
    };
    var Vg = function(a) {
        var b = document.createElement("DIV");
        L.add(b, "overflowable-backup");
        W(b, "hidden", !0);
        b.style.position = "absolute";
        b.style.visibility = "hidden";
        b.style.bottom = "0";
        b.style.left = "0";
        b.style.right = "0";
        b.style.top = "0";
        a = a.Ia.cloneNode(!0);
        L.add(a, "overflowable-backup-content");
        b.appendChild(a);
        return b
    };
    Ug.prototype.Fd = function() {
        var a = this;
        this.xa && this.Y && (this.Y.innerHTML = this.Ia.innerHTML, this.l = new Gg(this.Y), Eg(this.l), Dg(this.l), this.cc = P(this.xa, "click", function(b) {
            a.xb();
            b.preventDefault()
        }), P(this.l, "hide", this.jg, !1, this))
    };
    var Wg = function(a) {
        var b = Hc(a.i.wc, a.Ia);
        if (a.xa && 0 < b.length) {
            b = b[b.length - 1];
            var c = document.createElement(String(b.tagName));
            L.add(c, a.Af);
            I(c, !1);
            L.remove(a.xa, "hidden");
            Tc(c, a.xa);
            Vc(c, b);
            a.Pa = c
        }
    };
    g = Ug.prototype;
    g.Ec = function(a, b) {
        var c = this;
        if (this.ma) {
            var d = Hc(this.i.wc, this.Ia);
            this.Pa && (I(this.Pa, b), W(this.Pa, "hidden", !b));
            var e = 0;
            if (b) {
                var f = Hc(this.i.wc, this.bd),
                    h = this.Y ? Hc(this.i.wc, this.Y) : [],
                    k = function(b) {
                        return b.offsetTop >= a.offsetHeight
                    };
                e = Va(f, k);
                k = Wa(f, k);
                f = Za(cb(f, 0, k + 1), function(a) {
                    Vc(c.Pa, a);
                    return 0 == c.Pa.offsetTop
                });
                Vc(this.Pa, d[f]);
                for (k = 0; k < d.length; k++) {
                    var m = k >= f;
                    k < h.length && (I(h[k], m), W(h[k], "hidden", !m));
                    I(d[k], !m);
                    W(d[k], "hidden", m)
                }
            } else
                Ra(d, function(a) {
                    I(a, !0);
                    W(a, "hidden", !1)
                });
            if (d = F(this.i.Gf, a))
                d.innerText = e.toString()
        }
    };
    g.xb = function() {
        this.l.D(!1);
        var a = this.l;
        a.Bd = 4;
        a.I() && a.L();
        this.xa && this.l.setPosition(new Sg(this.xa, 4));
        this.l.D(!0);
        this.j = Nf(this.ha, null, "overflowable-dim-overlay");
        this.j.show()
    };
    g.lg = function() {
        this.l && this.l.I() && this.l.L()
    };
    g.jg = function() {
        this.Y && this.Y.style.left && (this.Y.style.left = "0");
        this.j && (this.j.V(), this.j = null)
    };
    g.b = function() {
        this.j && (this.j.V(), this.j = null);
        $d(this.l);
        this.l = null;
        this.Kc && (Q(this.Kc), this.Kc = null);
        this.cc && (Q(this.cc), this.cc = null);
        this.ma && (this.ma.b(), this.ma = null);
        return $e()
    };
    var Xg = function(a) {
        return Ta(Hc(a.Db), function(b) {
            return new Ug(b, a)
        })
    };
    var Yg = function() {
        var a = void 0 === a ? "ripple" : a;
        this.a = K("blogger.templates.responsive.Ripples");
        V(this.a, "Initializing ripple effects.");
        this.gc = a;
        try {
            this.bind(), V(this.a, "Finished initializing ripple effects.")
        } catch (b) {
            U(this.a, "Error initializing section. Uncaught exception.", b)
        }
    };
    Yg.prototype.bind = function() {
        V(this.a, "Binding ripple effects for ." + this.gc);
        for (var a = document.querySelectorAll("." + this.gc), b = 0; b < a.length; b++)
            P(a[b], "mousedown", this.xg.bind(this))
    };
    Yg.prototype.xg = function(a) {
        a = a || window.event;
        var b = a.currentTarget || a.srcElement;
        if (b = L.contains(b, this.gc) ? b : $c(b, this.gc)) {
            var c = F("splash", b);
            if (!c) {
                c = document.createElement("span");
                L.add(c, "splash");
                var d = document.createElement("div");
                L.add(d, "splash-wrapper");
                d.appendChild(c);
                b.insertBefore(d, b.firstChild);
                Jd && P(c, Jd, function() {
                    return L.remove(c, "animate")
                }, !1, this)
            }
            L.remove(c, "animate");
            d = b.getBoundingClientRect();
            b = Math.max(d.width, d.height);
            if (0 === a.clientX && 0 === a.clientY)
                a = Math.round(d.width /
                2), d = Math.round(d.height / 2);
            else {
                var e = a.clientY ? a.clientY : a.touches[0].clientY;
                a = Math.round((a.clientX ? a.clientX : a.touches[0].clientX) - d.left);
                d = Math.round(e - d.top)
            }
            Jc(c, {
                style: "height: " + b + "px; width: " + b + "px; left: " + (a - b / 2) + "px; top: " + (d - b / 2) + "px;"
            });
            L.add(c, "animate")
        }
    };
    var Zg = function(a, b, c, d) {
            b = void 0 === b ? 10 : b;
            c = void 0 === c ? 1E3 : c;
            d = void 0 === d ? null : d;
            var e = 0,
                f = function() {
                    e++ < c ? a() || setTimeout(f, b) : d && d()
                };
            f()
        },
        ah = function() {
            var a = $g();
            var b = void 0 === b ? 10 : b;
            var c = void 0 === c ? 1E3 : c;
            return new T(function(d, e) {
                var f = !1;
                Zg(a, b, c, function() {
                    f = !0;
                    e()
                });
                f || d()
            })
        };
    var bh = null,
        dh = function() {
            return ch("blog").then(function(a) {
                return a.bloggerUrl
            })
        },
        eh = function(a) {
            return ch("features").then(function(b) {
                return b[a] && "TRUE" == b[a].toUpperCase()
            })
        };
    function ch(a) {
        return bh ? $e(bh[a]) : ah().then(function() {
            var b = _WidgetManager._GetAllData(),
                c = {},
                d;
            for (d in b)
                c[d] = b[d];
            bh = c;
            return bh[a]
        })
    }
    function $g() {
        return function() {
            return "undefined" !== typeof _WidgetManager && _WidgetManager ? !0 : !1
        }
    }
    ;
    var fh = function(a) {
        if ("undefined" !== typeof _WidgetManager && _WidgetManager) {
            var b = _WidgetManager._GetAllData();
            if (b && b.messages && b.messages[a])
                return b.messages[a]
        }
        return null
    };
    var gh = function() {
        this.he = !0;
        this.re = this.$e = null;
        this.Ve = "sharing-platform-button";
        this.zf = !0
    };
    var hh = function(a) {
        this.a = K("blogger.templates.responsive.Collapsible");
        this.ha = a;
        this.Rd = this.Od = this.Gb = this.Fa = this.v = null
    };
    ja(hh, Mg);
    hh.prototype.aa = function() {
        V(this.a, "Initializing collapsible.");
        try {
            var a = (this.ha || document).getElementsByTagName("DETAILS");
            if (1 != a.length)
                return U(this.a, "Collapsible did not contain exactly one details element."), $e();
            this.v = a[0];
            var b = (this.v || document).getElementsByTagName("SUMMARY");
            if (1 != b.length)
                return U(this.a, "Collapsible did not contain exactly one summary element."), $e();
            this.Fa = b[0];
            this.Gb = "b-details-" + ya(this.v);
            Kd() || (this.v.id = this.Gb, og(this.Fa, "button"), W(this.Fa, "controls", this.Gb),
            W(this.v, "expanded", !1), W(this.Fa, "expanded", !1), bb(document.querySelectorAll("#" + this.Gb + " > :not(summary)")).forEach(function(a) {
                return W(a, "hidden", !0)
            }));
            this.Od = P(this.Fa, "click", this.Pc, !1, this)
        } catch (c) {
            return U(this.a, "Error initializing collapsible. Uncaught exception.", c), this.b().then(function() {
                return af()
            })
        }
        V(this.a, "Finished initializing collapsible.");
        return $e()
    };
    hh.prototype.Pc = function(a) {
        var b = this;
        a.preventDefault();
        var c = G(this.Fa, "height");
        if (this.v.hasAttribute("open"))
            J ? (R(this.v, J), H(this.v, G(this.v, "height")), this.v.removeAttribute("open"), setTimeout(function() {
                H(b.v, c)
            }, 0)) : this.v.removeAttribute("open");
        else if (H(this.v, "auto"), this.v.setAttribute("open", "open"), J) {
            var d = G(this.v, "height");
            H(this.v, c);
            setTimeout(function() {
                H(b.v, d);
                b.Rd = P(b.v, J, function() {
                    H(b.v, "auto");
                    R(b.v, J)
                })
            }, 0)
        }
        Kd() || (this.v && rg(this.v, "expanded"), this.Fa && rg(this.Fa, "expanded"),
        bb(document.querySelectorAll("#" + this.Gb + " > :not(summary)")).forEach(function(a) {
            return rg(a, "hidden")
        }))
    };
    hh.prototype.b = function() {
        this.Od && Q(this.Od);
        this.Rd && Q(this.Rd);
        return $e()
    };
    var ih = function(a) {
        a = document.querySelectorAll(a);
        for (var b = [], c = 0; a && c < a.length; c++)
            b.push(new hh(a[c]));
        return b
    };
    var jh = function(a, b, c) {
        this.a = K("blogger.templates.responsive.Extendable");
        V(this.a, "Initializing extendable.");
        try {
            this.H = a, this.Mc = b, this.wb = c ? c : null, P(b, "click", this.Pc, !1, this), c && P(c, "click", this.Pc, !1, this)
        } catch (d) {
            U(this.a, "Error initializing extendable. Uncaught exception.", d), this.b()
        }
        V(this.a, "Finished initializing extendable.")
    };
    jh.prototype.Pc = function() {
        var a = this;
        if (L.contains(this.H, "expanded"))
            J && (R(this.H, J), H(this.H, G(this.H, "height")), setTimeout(function() {
                H(a.H, 0)
            }, 0)), L.remove(this.H, "expanded"), L.remove(this.Mc, "hidden"), this.wb && L.add(this.wb, "hidden");
        else {
            H(this.H, "auto");
            if (J) {
                var b = G(this.H, "height");
                H(this.H, 0);
                setTimeout(function() {
                    H(a.H, b);
                    P(a.H, J, function() {
                        H(a.H, "auto");
                        R(a.H, J)
                    })
                }, 0)
            }
            L.add(this.H, "expanded");
            L.add(this.Mc, "hidden");
            this.wb && L.remove(this.wb, "hidden")
        }
    };
    jh.prototype.b = function() {
        this.Mc && R(this.Mc, "click");
        this.wb && R(this.wb, "click");
        this.H && (R(this.H, J), R(this.H, "click"))
    };
    var kh = function(a) {
        a = document.querySelectorAll(".widget." + a);
        for (var b = [], c = 0; a && c < a.length; c++) {
            var d = a[c],
                e = F("show-more", d),
                f = F("show-less", d);
            d = F("remaining-items", d);
            e && d && b.push(new jh(d, e, f))
        }
        return b
    };
    var lh = function() {
        this.a = K("blogger.templates.responsive.Archive");
        this.Aa = this.T = null;
        V(this.a, "Initializing archive.")
    };
    ja(lh, Mg);
    lh.prototype.aa = function() {
        var a = this;
        this.T = ih(".widget.BlogArchive");
        return ff(df(this.T.map(function(a) {
            return a.aa()
        })).then(function() {
            a.Aa = kh("BlogArchive");
            V(a.a, "Finished initializing archive.");
            return $e()
        }), function(b) {
            U(a.a, "Error initializing archive. Uncaught exception.", b instanceof Error ? b : null);
            return a.b().then(function() {
                return af()
            })
        })
    };
    lh.prototype.b = function() {
        var a = this;
        return (this.T && df(this.T.map(function(a) {
            return a.b()
        })) || $e()).then(function() {
            a.Aa && a.Aa.forEach(function(a) {
                return a.b()
            });
            a.T = null;
            a.Aa = null
        })
    };
    var mh = function() {
        this.a = K("blogger.templates.responsive.AsyncCss");
        "loading" != document.readyState ? this.sd() : P(window, "load", this.sd)
    };
    mh.prototype.sd = function() {
        this.a && V(this.a, "Initializing async CSS.");
        for (var a = ba(Array.prototype.slice.call(document.getElementsByTagName("link"), 0)), b = a.next(); !b.done; b = a.next())
            b = b.value, "true" == b.getAttribute("data-async-css") && "none" == b.getAttribute("media") && b.setAttribute("media", "all");
        this.a && V(this.a, "Finished initializing async CSS.")
    };
    mh.prototype.b = function() {
        xe(window, "load", this.sd)
    };
    var nh = function(a, b) {
        this.a = K("blogger.templates.responsive.AvatarReplacer");
        V(this.a, "Initializing avatar replacer.");
        this.hd = D();
        var c;
        if (!(c = a)) {
            c = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            L.add(c, "svg-icon-24");
            L.add(c, "avatar-icon");
            var d = document.createElementNS("http://www.w3.org/2000/svg", "use");
            d.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "/responsive/sprite_v1_6.css.svg#ic_person_black_24dp");
            c.appendChild(d)
        }
        this.vg = c;
        this.Ng = b || /(?:https?:)?\/\/img[12]\.blogblog\.com\/img\/blank\.gif/;
        V(this.a, "Finished initializing avatar replacer.")
    };
    nh.prototype.replace = function() {
        for (var a = document.querySelectorAll("#comments .comment .avatar-image-container"), b = 0; a && b < a.length; b++) {
            var c = Gc(this.hd.f, "img", null, a[b]);
            for (var d = 0; c && d < c.length; d++)
                if (c[d].src && this.Ng.test(c[d].src)) {
                    this.hd.removeNode(c[d]);
                    var e = this.vg.cloneNode(!0);
                    this.hd.appendChild(a[b], e)
                }
        }
    };
    var oh = function() {
        var a = document.createElement("img");
        // a.src = "https://lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=w35";
        a.src = "";
        L.add(a, "blogger-icon");
        return new nh(a, /(?:https?:)?\/\/img[12]\.blogblog\.com\/img\/b16-rounded\.gif/)
    };
    var ph = function(a) {
        this.Da = a
    };
    ph.prototype.show = function() {
        this.Da && L.remove(this.Da, "hidden")
    };
    ph.prototype.Lb = function() {
        this.Da && L.add(this.Da, "hidden")
    };
    ph.prototype.V = function() {
        this.Da && (this.Da.parentNode.removeChild(this.Da), this.Da = null)
    };
    var qh = function(a, b, c) {
        c = Qc("DIV", ["loading-spinner-large", "mspin-" + c + "-large", "hidden"], Qc("DIV", "", Qc("DIV")));
        Tc(document.body, c);
        c.style.left = a - 24 + "px";
        c.style.top = b - 24 + "px";
        return new ph(c)
    };
    var rh = !w && !Db(),
        sh = function(a) {
            return /-[a-z]/.test("resized") ? !1 : rh && a.dataset ? "resized" in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + "resized".replace(/([A-Z])/g, "-$1").toLowerCase()) : !!a.getAttribute("data-" + "resized".replace(/([A-Z])/g, "-$1").toLowerCase())
        };
    var uh = function() {
            var a = this;
            this.pd = this.od = this.W = null;
            var b = document.getElementById("comment-editor"),
                c = document.querySelector(".page_body .centered-bottom");
            b && c && window.addEventListener && (sh(b) || this.W || (this.W = th(), this.W.show()), this.od = P(b, "iframeMoved", function() {
                a.W && a.W.V();
                a.W = th();
                a.W.show();
                for (var c = document.querySelectorAll(".comment-actions"), e = 0; e < c.length; e++)
                    L.remove(c[e], "invisible");
                (c = (c = $c(b, "comment")) && c.querySelector(".comment-actions")) && L.add(c, "invisible")
            }), this.pd =
            P(window, "message", function(b) {
                b = b.ja.data;
                p(b) && 0 == b.indexOf("set-comment-editor-height") && a.W && (a.W.V(), a.W = null)
            }))
        },
        th = function() {
            var a = document.getElementById("comment-editor"),
                b = document.querySelector(".page_body .centered-bottom");
            if (a && b) {
                b = a.getBoundingClientRect();
                a = b.left + window.pageXOffset + b.width / 2;
                b = b.top + window.pageYOffset + b.height / 2;
                var c = document.querySelector(".centered-bottom .sharing-button");
                c = "rgb(255,255,255)" == (c && window.getComputedStyle(c).getPropertyValue("fill")) ? "white" :
                "grey_54";
                var d = qh(a, b, c);
                setTimeout(function() {
                    d && d.V()
                }, 1E4);
                return d
            }
            return null
        };
    uh.prototype.b = function() {
        this.W && (this.W.V(), this.W = null);
        this.od && Q(this.od);
        this.pd && Q(this.pd)
    };
    var vh = function() {
        this.a = K("blogger.templates.responsive.Labels");
        V(this.a, "Initializing labels.");
        try {
            this.T = ih(".widget.Label"), this.T.map(function(a) {
                return a.aa()
            }), this.Aa = kh("Label"), V(this.a, "Finished initializing labels.")
        } catch (a) {
            U(this.a, "Error initializing labels. Uncaught exception.", a), this.b()
        }
    };
    vh.prototype.b = function() {
        this.T && this.T.forEach(function(a) {
            return a.b()
        });
        this.Aa && this.Aa.forEach(function(a) {
            return a.b()
        });
        this.Aa = this.T = null
    };
    var wh = function() {};
    wh.prototype.$d = null;
    var yh = function(a) {
        var b;
        (b = a.$d) || (b = {}, xh(a) && (b[0] = !0, b[1] = !0), b = a.$d = b);
        return b
    };
    var zh,
        Ah = function() {};
    t(Ah, wh);
    var Bh = function(a) {
            return (a = xh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        xh = function(a) {
            if (!a.ve && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.ve = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.ve
        };
    zh = new Ah;
    var Ch = function(a) {
            if (a.Ib && "function" == typeof a.Ib)
                return a.Ib();
            if (p(a))
                return a.split("");
            if (sa(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++)
                    b.push(a[d]);
                return b
            }
            b = [];
            c = 0;
            for (d in a)
                b[c++] = a[d];
            return b
        },
        Dh = function(a, b) {
            if (a.forEach && "function" == typeof a.forEach)
                a.forEach(b, void 0);
            else if (sa(a) || p(a))
                Ra(a, b, void 0);
            else {
                if (a.lb && "function" == typeof a.lb)
                    var c = a.lb();
                else if (a.Ib && "function" == typeof a.Ib)
                    c = void 0;
                else if (sa(a) || p(a)) {
                    c = [];
                    for (var d = a.length, e = 0; e < d; e++)
                        c.push(e)
                } else
                    for (e in c = [],
                    d = 0, a)
                        c[d++] = e;
                d = Ch(a);
                e = d.length;
                for (var f = 0; f < e; f++)
                    b.call(void 0, d[f], c && c[f], a)
            }
        };
    var Eh = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    var X = function(a) {
        S.call(this);
        this.headers = new ug;
        this.Wc = a || null;
        this.wa = !1;
        this.Vc = this.g = null;
        this.Nb = this.Ae = this.Ob = "";
        this.Oa = this.rd = this.uc = this.jd = !1;
        this.Wb = 0;
        this.Oc = null;
        this.Ne = "";
        this.Rc = this.rg = this.jf = !1
    };
    t(X, S);
    X.prototype.a = K("goog.net.XhrIo");
    var Fh = /^https?$/i,
        Gh = ["POST", "PUT"],
        Hh = [],
        Ih = function(a, b) {
            var c = new X;
            Hh.push(c);
            b && c.w("complete", b);
            c.xd("ready", c.Df);
            c.send(a, "HEAD", void 0, void 0)
        };
    X.prototype.Df = function() {
        this.pa();
        ab(Hh, this)
    };
    X.prototype.send = function(a, b, c, d) {
        if (this.g)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Ob + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.Ob = a;
        this.Nb = "";
        this.Ae = b;
        this.jd = !1;
        this.wa = !0;
        this.g = this.Wc ? Bh(this.Wc) : Bh(zh);
        this.Vc = this.Wc ? yh(this.Wc) : yh(zh);
        this.g.onreadystatechange = q(this.Ge, this);
        this.rg && "onprogress" in this.g && (this.g.onprogress = q(function(a) {
            this.Fe(a, !0)
        }, this), this.g.upload && (this.g.upload.onprogress = q(this.Fe, this)));
        try {
            tf(this.a, Jh(this, "Opening Xhr")),
            this.rd = !0, this.g.open(b, String(a), !0), this.rd = !1
        } catch (f) {
            tf(this.a, Jh(this, "Error opening Xhr: " + f.message));
            Kh(this, f);
            return
        }
        a = c || "";
        var e = this.headers.clone();
        d && Dh(d, function(a, b) {
            e.set(b, a)
        });
        d = Ya(e.lb());
        c = l.FormData && a instanceof l.FormData;
        !$a(Gh, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(a, b) {
            this.g.setRequestHeader(b, a)
        }, this);
        this.Ne && (this.g.responseType = this.Ne);
        "withCredentials" in this.g && this.g.withCredentials !== this.jf && (this.g.withCredentials =
        this.jf);
        try {
            Lh(this), 0 < this.Wb && (this.Rc = Mh(this.g), tf(this.a, Jh(this, "Will abort after " + this.Wb + "ms if incomplete, xhr2 " + this.Rc)), this.Rc ? (this.g.timeout = this.Wb, this.g.ontimeout = q(this.ff, this)) : this.Oc = qf(this.ff, this.Wb, this)), tf(this.a, Jh(this, "Sending request")), this.uc = !0, this.g.send(a), this.uc = !1
        } catch (f) {
            tf(this.a, Jh(this, "Send error: " + f.message)), Kh(this, f)
        }
    };
    var Mh = function(a) {
            return w && $b(9) && oa(a.timeout) && n(a.ontimeout)
        },
        Xa = function(a) {
            return "content-type" == a.toLowerCase()
        };
    X.prototype.ff = function() {
        "undefined" != typeof na && this.g && (this.Nb = "Timed out after " + this.Wb + "ms, aborting", tf(this.a, Jh(this, this.Nb)), this.dispatchEvent("timeout"), this.abort(8))
    };
    var Kh = function(a, b) {
            a.wa = !1;
            a.g && (a.Oa = !0, a.g.abort(), a.Oa = !1);
            a.Nb = b;
            Nh(a);
            Oh(a)
        },
        Nh = function(a) {
            a.jd || (a.jd = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    X.prototype.abort = function() {
        this.g && this.wa && (tf(this.a, Jh(this, "Aborting")), this.wa = !1, this.Oa = !0, this.g.abort(), this.Oa = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Oh(this))
    };
    X.prototype.u = function() {
        this.g && (this.wa && (this.wa = !1, this.Oa = !0, this.g.abort(), this.Oa = !1), Oh(this, !0));
        X.m.u.call(this)
    };
    X.prototype.Ge = function() {
        this.Ja || (this.rd || this.uc || this.Oa ? Ph(this) : this.kg())
    };
    X.prototype.kg = function() {
        Ph(this)
    };
    var Ph = function(a) {
        if (a.wa && "undefined" != typeof na)
            if (a.Vc[1] && 4 == Qh(a) && 2 == Rh(a))
                tf(a.a, Jh(a, "Local request error detected and ignored"));
            else if (a.uc && 4 == Qh(a))
                qf(a.Ge, 0, a);
            else if (a.dispatchEvent("readystatechange"), 4 == Qh(a)) {
                tf(a.a, Jh(a, "Request complete"));
                a.wa = !1;
                try {
                    if (Sh(a))
                        a.dispatchEvent("complete"), a.dispatchEvent("success");
                    else {
                        try {
                            var b = 2 < Qh(a) ? a.g.statusText : ""
                        } catch (c) {
                            tf(a.a, "Can not get status: " + c.message), b = ""
                        }
                        a.Nb = b + " [" + Rh(a) + "]";
                        Nh(a)
                    }
                } finally {
                    Oh(a)
                }
            }
    };
    X.prototype.Fe = function(a, b) {
        u("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
        this.dispatchEvent(Th(a, "progress"));
        this.dispatchEvent(Th(a, b ? "downloadprogress" : "uploadprogress"))
    };
    var Th = function(a, b) {
            return {
                type: b,
                lengthComputable: a.lengthComputable,
                loaded: a.loaded,
                total: a.total
            }
        },
        Oh = function(a, b) {
            if (a.g) {
                Lh(a);
                var c = a.g,
                    d = a.Vc[0] ? pa : null;
                a.g = null;
                a.Vc = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {
                    U(a.a, "Problem encountered resetting onreadystatechange: " + e.message)
                }
            }
        },
        Lh = function(a) {
            a.g && a.Rc && (a.g.ontimeout = null);
            a.Oc && (l.clearTimeout(a.Oc), a.Oc = null)
        },
        Sh = function(a) {
            var b = Rh(a);
            a:
            switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c =
                !0;
                break a;
            default:
                c = !1
            }
            if (!c) {
                if (b = 0 === b)
                    a = String(a.Ob).match(Eh)[1] || null, !a && l.self && l.self.location && (a = l.self.location.protocol, a = a.substr(0, a.length - 1)), b = !Fh.test(a ? a.toLowerCase() : "");
                c = b
            }
            return c
        },
        Qh = function(a) {
            return a.g ? a.g.readyState : 0
        },
        Rh = function(a) {
            try {
                return 2 < Qh(a) ? a.g.status : -1
            } catch (b) {
                return -1
            }
        };
    X.prototype.getResponseHeader = function(a) {
        if (this.g && 4 == Qh(this))
            return a = this.g.getResponseHeader(a), null === a ? void 0 : a
    };
    X.prototype.getAllResponseHeaders = function() {
        return this.g && 4 == Qh(this) ? this.g.getAllResponseHeaders() || "" : ""
    };
    var Jh = function(a, b) {
        return b + " [" + a.Ae + " " + a.Ob + " " + Rh(a) + "]"
    };
    var Uh = function() {
            this.a = K("blogger.templates.responsive.SourcesetEnhancer")
        },
        Wh = function() {
            var a = new Uh;
            V(a.a, "Initializing sourceset enhancer.");
            try {
                for (var b = ba(document.querySelectorAll("img[data-ess]")), c = b.next(); !c.done; c = b.next()) {
                    var d = c.value;
                    if (d.srcset) {
                        for (var e = /.*(\d+)w$/, f = 0, h = !1, k = ba(d.srcset.trim().split(",")), m = k.next(); !m.done; m = k.next()) {
                            var r = m.value;
                            if (e.test(r)) {
                                var x = parseInt(e.exec(r)[1], 10);
                                f = Math.max(f, x)
                            } else
                                /\s+/.test(r) || (h = !0)
                        }
                        if (!h && f > d.clientWidth) {
                            V(a.a, "Not fetching enchanced sourceset for image " +
                            d.id + " which has a srcset width " + f + ", which is bigger than its size of " + d.clientWidth);
                            return
                        }
                    }
                    Vh(a, d)
                }
                V(a.a, "Finished initializing sourceset enhancer.")
            } catch (y) {
                U(a.a, "Error enhancing sourcesets.", y)
            }
        },
        Vh = function(a, b) {
            var c = b.getAttribute("data-ess");
            Ih(c, function(c) {
                c = c.target;
                if (Sh(c)) {
                    c = String(c.Ob);
                    var d = b.srcset || "";
                    d.trim() && (d += ", ");
                    b.setAttribute("srcset", d + c);
                    V(a.a, "Successfully loaded image " + c + " for image " + b.id)
                }
            });
            V(a.a, "Fetching higher-res image " + c + " for image " + b.id)
        };
    var Xh = function() {
        this.a = K("blogger.templates.responsive.Video")
    };
    ja(Xh, Mg);
    Xh.prototype.aa = function() {
        V(this.a, "Initializing video support.");
        window.addEventListener ? window.addEventListener("message", this.Dc, !1) : window.attachEvent("onmessage", this.Dc);
        return $e()
    };
    Xh.prototype.Dc = function(a) {
        var b = a.data;
        b && "video_resize" === b.name && b.iframe_id && dh().then(function(c) {
            if (a.origin === c && (c = document.getElementById(b.iframe_id)))
                if (b.widescreen) {
                    var d = c.width || 320,
                        e = c.height || 266;
                    c.setAttribute("data-original-width", d);
                    c.setAttribute("data-original-height", e);
                    var f = c.parentElement.offsetWidth;
                    c.height = e * f / d;
                    c.width = f
                } else
                    c.width = c.getAttribute("data-original-width"), c.height = c.getAttribute("data-original-height")
        })
    };
    Xh.prototype.b = function() {
        window.removeEventListener ? window.removeEventListener("message", this.Dc) : window.detachEvent("onmessage", this.Dc);
        return $e()
    };
    var Yh = function() {
            this.Je = Da()
        },
        Zh = null;
    Yh.prototype.set = function(a) {
        this.Je = a
    };
    Yh.prototype.reset = function() {
        this.set(Da())
    };
    Yh.prototype.get = function() {
        return this.Je
    };
    var $h = function(a) {
        this.qg = a || "";
        Zh || (Zh = new Yh);
        this.Gg = Zh
    };
    g = $h.prototype;
    g.Vd = !0;
    g.Xe = !0;
    g.Eg = !0;
    g.Dg = !0;
    g.Ze = !1;
    g.Fg = !1;
    var ai = function(a) {
            return 10 > a ? "0" + a : String(a)
        },
        bi = function(a, b) {
            var c = (a.ef - b) / 1E3,
                d = c.toFixed(3),
                e = 0;
            if (1 > c)
                e = 2;
            else
                for (; 100 > c;)
                    e++, c *= 10;
            for (; 0 < e--;)
                d = " " + d;
            return d
        },
        ci = function(a) {
            $h.call(this, a)
        };
    t(ci, $h);
    var di = function(a, b) {
        var c = [];
        c.push(a.qg, " ");
        if (a.Xe) {
            var d = new Date(b.ef);
            c.push("[", ai(d.getFullYear() - 2E3) + ai(d.getMonth() + 1) + ai(d.getDate()) + " " + ai(d.getHours()) + ":" + ai(d.getMinutes()) + ":" + ai(d.getSeconds()) + "." + ai(Math.floor(d.getMilliseconds() / 10)), "] ")
        }
        a.Eg && c.push("[", bi(b, a.Gg.get()), "s] ");
        a.Dg && c.push("[", b.Be, "] ");
        a.Fg && c.push("[", b.Ra.name, "] ");
        c.push(b.cg);
        a.Ze && (d = b.kd) && c.push("\n", d instanceof Error ? d.message : d.toString());
        a.Vd && c.push("\n");
        return c.join("")
    };
    var ei = function() {
            this.sg = q(this.uf, this);
            this.lc = new ci;
            this.lc.Xe = !1;
            this.lc.Ze = !1;
            this.xe = this.lc.Vd = !1;
            this.Mf = {}
        },
        gi = function() {
            var a = fi;
            if (1 != a.xe) {
                Yd();
                var b = Xd;
                var c = a.sg;
                b.Kb || (b.Kb = []);
                b.Kb.push(c);
                a.xe = !0
            }
        };
    ei.prototype.uf = function(a) {
        function b(a) {
            if (a) {
                if (a.value >= Qd.value)
                    return "error";
                if (a.value >= Rd.value)
                    return "warn";
                if (a.value >= Td.value)
                    return "log"
            }
            return "debug"
        }
        if (!this.Mf[a.Be]) {
            var c = di(this.lc, a),
                d = hi;
            d && ii(d, b(a.Ra), c)
        }
    };
    var fi = null,
        hi = l.console,
        ii = function(a, b, c) {
            if (a[b])
                a[b](c);
            else
                a.log(c)
        }; /*

 CC0 1.0 Universal License
 Public Domain Dedication

 The person(s) who associated a work with this deed has dedicated the work to
 the public domain by waiving all of his or her rights to the work worldwide
 under copyright law, including all related and neighboring rights, to the
 extent allowed by law.

 You can copy, modify, distribute and perform the work, even for commercial
 purposes, all without asking permission.

 In no way are the patent or trademark rights of any person affected by CC0,
 nor are the rights that other persons may have in the work or in how the work
 is used, such as publicity or privacy rights.

 Unless expressly stated otherwise, the person(s) who associated a work with
 this deed makes no warranties about the work, and disclaims liability for all
 uses of the work, to the fullest extent permitted by applicable law.

 When using or citing the work, you should not imply endorsement by the author
 or the affirmer.

 This is a human-readable summary of the Legal Code (read the full text).
 svg4everybody v2.1.8 | github.com/jonathantneal/svg4everybody */

























    function ji(a, b, c) {
        if (c) {
            var d = document.createDocumentFragment(),
                e = !b.hasAttribute("viewBox") && c.getAttribute("viewBox");
            e && b.setAttribute("viewBox", e);
            for (b = c.cloneNode(!0); b.childNodes.length;)
                d.appendChild(b.firstChild);
            a.appendChild(d)
        }
    }
    function ki(a) {
        a.onreadystatechange = function() {
            if (4 === a.readyState) {
                var b = a.qf;
                b || (b = a.qf = document.implementation.createHTMLDocument(""), b.body.innerHTML = a.responseText, a.Td = {});
                a.Ud.splice(0).map(function(c) {
                    var d = a.Td[c.id];
                    d || (d = a.Td[c.id] = b.getElementById(c.id));
                    ji(c.parent, c.Hg, d)
                })
            }
        };
        a.onreadystatechange()
    }
    function li() {
        return "undefined" != typeof LEGACY_SUPPORT && LEGACY_SUPPORT
    }
    var mi = function() {
        function a() {
            for (var e = 0; e < E.length;) {
                var f = E[e],
                    h = f.parentNode,
                    k;
                for (k = h; "svg" !== k.nodeName.toLowerCase() && (k = k.parentNode, k);)
                    ;
                if (k) {
                    var m = f.getAttribute("xlink:href") || f.getAttribute("href");
                    !m && b.attributeName && (m = f.getAttribute(b.attributeName));
                    if (li() && d) {
                        var r = document.createElement("img");
                        r.style.cssText = "display:inline-block;height:100%;width:100%";
                        r.setAttribute("width", k.getAttribute("width") || k.clientWidth);
                        r.setAttribute("height", k.getAttribute("height") || k.clientHeight);
                        r.src = c(m, k, f);
                        h.replaceChild(r, f)
                    } else
                        x && (!b.Pg || b.Pg(m, k, f) ? (h.removeChild(f), m = m.split("#"), f = m.shift(), m = m.join("#"), f.length ? (r = y[f], r || (r = y[f] = new XMLHttpRequest, r.open("GET", f), r.send(), r.Ud = []), r.Ud.push({
                            parent: h,
                            Hg: k,
                            id: m
                        }), ki(r)) : ji(h, k, document.getElementById(m))) : (++e, ++M))
                } else
                    ++e
            }
            if (!E.length || 0 < E.length - M)
                window.requestAnimationFrame ? window.requestAnimationFrame(a) : setTimeout(a, 67)
        }
        var b = Object(void 0);
        if (li()) {
            var c = b.Pi || function(a) {
                return a.replace(/\?[^#]+/, "").replace("#", ".").replace(/^\./,
                "") + ".png" + (/\?[^#]+/.exec(a) || [""])[0]
            };
            var d = "nosvg" in b ? b.Ri : /\bMSIE [1-8]\b/.test(navigator.userAgent)
        }
        var e = /\bMSIE [1-8]\.0\b/,
            f = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
            h = /\bAppleWebKit\/(\d+)\b/,
            k = /\bEdge\/12\.(\d+)\b/,
            m = /\bEdge\/.(\d+)\b/,
            r = window.top !== window.self;
        var x = "polyfill" in b ? b.Si : li() ? e.test(navigator.userAgent) || f.test(navigator.userAgent) || 10547 > (navigator.userAgent.match(k) || [])[1] || 537 > (navigator.userAgent.match(h) || [])[1] || m.test(navigator.userAgent) && r : f.test(navigator.userAgent) ||
        10547 > (navigator.userAgent.match(k) || [])[1] || 537 > (navigator.userAgent.match(h) || [])[1] || m.test(navigator.userAgent) && r;
        var y = {},
            E = document.getElementsByTagName("use"),
            M = 0;
        x && a()
    };
    var pi = function() {
            var a = this;
            l.console && (fi || (fi = new ei), l.location && -1 != l.location.href.indexOf("Debug=true") && gi());
            this.Sa = K("blogger.templates.responsive.Template");
            try {
                V(this.Sa, "Initializing responsive template."), this.ed = new uh, this.archive = new lh, ff(this.archive.aa(), function(b) {
                    return ni(a, b)
                }), this.T = ih(".widget.collapsible"), this.labels = new vh, Wh(), (new nh).replace(), oh().replace(), mi(), this.$c = new mh, oi(), this.Sc = new Xh, ff(this.Sc.aa(), function(b) {
                    return ni(a, b)
                }), V(this.Sa, "Finished initializing responsive template.")
            } catch (b) {
                ni(this,
                b), this.b()
            }
        },
        ni = function(a, b) {
            a.Sa && U(a.Sa, "Error initializing responsive template. Uncaught exception.", b)
        },
        oi = function() {
            if (Ab() && "rtl" == document.documentElement.getAttribute("dir"))
                for (var a = 0; a < document.styleSheets.length; a++) {
                    var b = document.styleSheets[a];
                    if (b.cssRules)
                        for (var c = 0; c < b.cssRules.length; c++) {
                            var d = b.cssRules[c];
                            if (d.style && (d.style.font && -1 != d.style.font.indexOf("Montserrat") || d.style["font-family"] && -1 != d.style["font-family"].indexOf("Montserrat"))) {
                                var e = d.style.cssText.replace("Montserrat",
                                "sans-serif");
                                d.style.cssText = e
                            }
                        }
                }
        };
    pi.prototype.b = function() {
        var a = this;
        return (this.T && df(this.T.map(function(a) {
            return a.b()
        })) || $e()).then(function() {
            a.archive && a.archive.b();
            a.labels && a.labels.b();
            a.ed && a.ed.b();
            a.$c && a.$c.b();
            a.Sc && a.Sc.b();
            a.archive = null;
            a.labels = null;
            a.ed = null;
            a.$c = null;
            a.Sc = null
        })
    };
    var qi = function() {
        a:
        {
            var a = L.get(document.body);
            a = ba(Array.prototype.slice.call(a, 0));
            for (var b = a.next(); !b.done; b = a.next())
                if (b = b.value, b.startsWith("version-")) {
                    a = b.substring(8);
                    b = new RegExp(mb("-"), "g");
                    a = a.replace(b, ".".replace(/\$/g, "$$$$"));
                    break a
                }
            a = null
        }a = a || "LATEST";
        b = "1.2.0";
        return a == b ? 0 : "LATEST" == a || "LATEST" == b ? "LATEST" == a ? 1 : -1 : ob(a, b)
    };
    var ri = function(a) {
        return function() {
            L.toggle(a, "sidebar-invisible")
        }
    };
    function si(a, b) {
        var c = function(a) {
            var b = 0;
            do b += a.offsetTop;
            while (a = a.offsetParent);
            return b
        };
        Math.abs(c(a) - c(b)) >= window.innerHeight ? L.remove(a, "invisible") : L.add(a, "invisible")
    }
    ;
    var ti = function(a, b) {
        S.call(this);
        a && (this.yc && this.detach(), this.c = a, this.xc = P(this.c, "keypress", this, b), this.ud = P(this.c, "keydown", this.Jb, b, this), this.yc = P(this.c, "keyup", this.Pf, b, this))
    };
    t(ti, S);
    g = ti.prototype;
    g.c = null;
    g.xc = null;
    g.ud = null;
    g.yc = null;
    g.P = -1;
    g.ka = -1;
    g.Zc = !1;
    var ui = {
            3: 13,
            12: 144,
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63236: 112,
            63237: 113,
            63238: 114,
            63239: 115,
            63240: 116,
            63241: 117,
            63242: 118,
            63243: 119,
            63244: 120,
            63245: 121,
            63246: 122,
            63247: 123,
            63248: 44,
            63272: 46,
            63273: 36,
            63275: 35,
            63276: 33,
            63277: 34,
            63289: 144,
            63302: 45
        },
        vi = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        },
        wi = !A || $b("525"),
        xi = Nb && z;
    g = ti.prototype;
    g.Jb = function(a) {
        if (A || Lb)
            if (17 == this.P && !a.ctrlKey || 18 == this.P && !a.altKey || Nb && 91 == this.P && !a.metaKey)
                this.ka = this.P = -1;
        -1 == this.P && (a.ctrlKey && 17 != a.keyCode ? this.P = 17 : a.altKey && 18 != a.keyCode ? this.P = 18 : a.metaKey && 91 != a.keyCode && (this.P = 91));
        wi && !Qf(a.keyCode, this.P, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.ka = Pf(a.keyCode), xi && (this.Zc = a.altKey))
    };
    g.Pf = function(a) {
        this.ka = this.P = -1;
        this.Zc = a.altKey
    };
    g.handleEvent = function(a) {
        var b = a.ja,
            c = b.altKey;
        if (w && "keypress" == a.type) {
            var d = this.ka;
            var e = 13 != d && 27 != d ? b.keyCode : 0
        } else
            (A || Lb) && "keypress" == a.type ? (d = this.ka, e = 0 <= b.charCode && 63232 > b.charCode && Of(d) ? b.charCode : 0) : Kb && !A ? (d = this.ka, e = Of(d) ? b.keyCode : 0) : ("keypress" == a.type ? (xi && (c = this.Zc), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.ka, e = b.charCode) : (d = b.keyCode || this.ka, e = b.charCode || 0)) : (d = b.keyCode || this.ka, e = b.charCode || 0), Nb && 63 == e && 224 == d && (d = 191));
        var f = d = Pf(d);
        d ? 63232 <=
        d && d in ui ? f = ui[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in vi && (f = vi[b.keyIdentifier]);
        z && wi && "keypress" == a.type && !Qf(f, this.P, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.P, this.P = f, b = new yi(f, e, a, b), b.altKey = c, this.dispatchEvent(b))
    };
    g.h = function() {
        return this.c
    };
    g.detach = function() {
        this.xc && (Q(this.xc), Q(this.ud), Q(this.yc), this.yc = this.ud = this.xc = null);
        this.c = null;
        this.ka = this.P = -1
    };
    g.u = function() {
        ti.m.u.call(this);
        this.detach()
    };
    var yi = function(a, b, c, d) {
        ce.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    };
    t(yi, ce);
    var Ai = function(a, b, c) {
        S.call(this);
        this.target = a;
        this.handle = b || a;
        this.Ac = c || new jd(NaN, NaN, NaN, NaN);
        this.f = C(a);
        this.ia = new De(this);
        a = Ca($d, this.ia);
        this.Ja ? n(void 0) ? a.call(void 0) : a() : (this.Ta || (this.Ta = []), this.Ta.push(n(void 0) ? q(a, void 0) : a));
        this.deltaY = this.deltaX = this.cf = this.bf = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.ie = !0;
        this.Ka = !1;
        this.Ie = !0;
        this.te = 0;
        this.Sd = this.Tf = !1;
        P(this.handle, ["touchstart", "mousedown"], this.af, !1, this);
        this.Qc = zi
    };
    t(Ai, S);
    var zi = l.document && l.document.documentElement && !!l.document.documentElement.setCapture && !!l.document.releaseCapture;
    Ai.prototype.Ba = function() {
        return this.ia
    };
    Ai.prototype.u = function() {
        Ai.m.u.call(this);
        xe(this.handle, ["touchstart", "mousedown"], this.af, !1, this);
        this.ia.ba();
        this.Qc && this.f.releaseCapture();
        this.handle = this.target = null
    };
    var Bi = function(a) {
        n(a.Dd) || (a.Dd = zd(a.target));
        return a.Dd
    };
    Ai.prototype.af = function(a) {
        var b = "mousedown" == a.type;
        if (!this.ie || this.Ka || b && (!(bd ? 0 == a.ja.button : "click" == a.type || a.ja.button & de[0]) || A && Nb && a.ctrlKey))
            this.dispatchEvent("earlycancel");
        else {
            if (0 == this.te)
                if (this.dispatchEvent(new Ci("start", this, a.clientX, a.clientY, a)))
                    this.Ka = !0, this.Ie && b && a.preventDefault();
                else
                    return;
            else
                this.Ie && b && a.preventDefault();
            b = this.f;
            var c = b.documentElement,
                d = !this.Qc;
            this.ia.w(b, ["touchmove", "mousemove"], this.Qf, {
                capture: d,
                passive: !1
            });
            this.ia.w(b, ["touchend",
            "mouseup"], this.kc, d);
            this.Qc ? (c.setCapture(!1), this.ia.w(c, "losecapture", this.kc)) : this.ia.w(Oc(b), "blur", this.kc);
            w && this.Tf && this.ia.w(b, "dragstart", be);
            this.zg && this.ia.w(this.zg, "scroll", this.ng, d);
            this.clientX = this.bf = a.clientX;
            this.clientY = this.cf = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            this.Sd ? (a = this.target, b = a.offsetLeft, c = a.offsetParent, c || "fixed" != od(a) || (c = C(a).documentElement), c ? (z && !$b(58) ? (d = Fd(c), b += d.left) : bc(8) && !bc(9) && (d = Fd(c), b -= d.left), a = zd(c) ? c.clientWidth -
            (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
            this.deltaX = a;
            this.deltaY = this.target.offsetTop;
            this.Ad = Nc(D(this.f).f)
        }
    };
    Ai.prototype.kc = function(a, b) {
        this.ia.ba();
        this.Qc && this.f.releaseCapture();
        this.Ka ? (this.Ka = !1, this.dispatchEvent(new Ci("end", this, a.clientX, a.clientY, a, Di(this, this.deltaX), Ei(this, this.deltaY), b || "touchcancel" == a.type))) : this.dispatchEvent("earlycancel")
    };
    Ai.prototype.Qf = function(a) {
        if (this.ie) {
            var b = (this.Sd && Bi(this) ? -1 : 1) * (a.clientX - this.clientX),
                c = a.clientY - this.clientY;
            this.clientX = a.clientX;
            this.clientY = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            if (!this.Ka) {
                var d = this.bf - this.clientX,
                    e = this.cf - this.clientY;
                if (d * d + e * e > this.te)
                    if (this.dispatchEvent(new Ci("start", this, a.clientX, a.clientY, a)))
                        this.Ka = !0;
                    else {
                        this.Ja || this.kc(a);
                        return
                    }
            }
            c = Fi(this, b, c);
            b = c.x;
            c = c.y;
            this.Ka && this.dispatchEvent(new Ci("beforedrag", this, a.clientX, a.clientY,
            a, b, c)) && (Gi(this, a, b, c), a.preventDefault())
        }
    };
    var Fi = function(a, b, c) {
        var d = Nc(D(a.f).f);
        b += d.x - a.Ad.x;
        c += d.y - a.Ad.y;
        a.Ad = d;
        a.deltaX += b;
        a.deltaY += c;
        return new B(Di(a, a.deltaX), Ei(a, a.deltaY))
    };
    Ai.prototype.ng = function(a) {
        var b = Fi(this, 0, 0);
        a.clientX = this.clientX;
        a.clientY = this.clientY;
        Gi(this, a, b.x, b.y)
    };
    var Gi = function(a, b, c, d) {
            a.Sd && Bi(a) ? a.target.style.right = c + "px" : a.target.style.left = c + "px";
            a.target.style.top = d + "px";
            a.dispatchEvent(new Ci("drag", a, b.clientX, b.clientY, b, c, d))
        },
        Di = function(a, b) {
            var c = a.Ac,
                d = isNaN(c.left) ? null : c.left;
            c = isNaN(c.width) ? 0 : c.width;
            return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
        },
        Ei = function(a, b) {
            var c = a.Ac,
                d = isNaN(c.top) ? null : c.top;
            c = isNaN(c.height) ? 0 : c.height;
            return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
        },
        Ci = function(a,
        b, c, d, e, f, h) {
            N.call(this, a);
            this.clientX = c;
            this.clientY = d;
            this.left = n(f) ? f : b.deltaX;
            this.top = n(h) ? h : b.deltaY
        };
    t(Ci, N);
    (function() {
        for (var a = ["ms", "moz", "webkit", "o"], b = 0, c; c = a[b] && !l.requestAnimationFrame; ++b)
            l.requestAnimationFrame = l[c + "RequestAnimationFrame"], l.cancelAnimationFrame = l[c + "CancelAnimationFrame"] || l[c + "CancelRequestAnimationFrame"];
        if (!l.requestAnimationFrame) {
            var d = 0;
            l.requestAnimationFrame = function(a) {
                var b = (new Date).getTime(),
                    c = Math.max(0, 16 - (b - d));
                d = b + c;
                return l.setTimeout(function() {
                    a(b + c)
                }, c)
            };
            l.cancelAnimationFrame || (l.cancelAnimationFrame = function(a) {
                clearTimeout(a)
            })
        }
    })();
    var Hi = [[], []],
        Ii = 0,
        Ji = !1,
        Ki = 0,
        Mi = function(a, b) {
            var c = Ki++,
                d = {
                    $f: {
                        id: c,
                        ra: a.measure,
                        context: b
                    },
                    eg: {
                        id: c,
                        ra: a.dg,
                        context: b
                    },
                    state: {},
                    S: void 0,
                    vc: !1
                };
            return function() {
                0 < arguments.length ? (d.S || (d.S = []), d.S.length = 0, d.S.push.apply(d.S, arguments), d.S.push(d.state)) : d.S && 0 != d.S.length ? (d.S[0] = d.state, d.S.length = 1) : d.S = [d.state];
                d.vc || (d.vc = !0, Hi[Ii].push(d));
                Ji || (Ji = !0, window.requestAnimationFrame(Li))
            }
        },
        Li = function() {
            Ji = !1;
            var a = Hi[Ii],
                b = a.length;
            Ii = (Ii + 1) % 2;
            for (var c, d = 0; d < b; ++d) {
                c = a[d];
                var e = c.$f;
                c.vc =
                !1;
                e.ra && e.ra.apply(e.context, c.S)
            }
            for (d = 0; d < b; ++d)
                c = a[d], e = c.eg, c.vc = !1, e.ra && e.ra.apply(e.context, c.S), c.state = {};
            a.length = 0
        };
    var Ni = w ? pc(lc(new kc(ic, 'javascript:""'))) : pc(lc(new kc(ic, "about:blank"))),
        Oi = oc(Ni),
        Pi = w ? pc(lc(new kc(ic, 'javascript:""'))) : pc(lc(new kc(ic, "javascript:undefined")));
    oc(Pi);
    var Qi = function(a) {
        S.call(this);
        this.c = a;
        a = w ? "focusout" : "blur";
        this.Xf = P(this.c, w ? "focusin" : "focus", this, !w);
        this.Yf = P(this.c, a, this, !w)
    };
    t(Qi, S);
    Qi.prototype.handleEvent = function(a) {
        var b = new ce(a.ja);
        b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
        this.dispatchEvent(b)
    };
    Qi.prototype.u = function() {
        Qi.m.u.call(this);
        Q(this.Xf);
        Q(this.Yf);
        delete this.c
    };
    var Ri = function() {};
    Ri.td = void 0;
    Ri.Nf = function() {
        return Ri.td ? Ri.td : Ri.td = new Ri
    };
    Ri.prototype.fg = 0;
    Ri.prototype.Sf = "";
    var Si = function(a) {
        return a.Sf + ":" + (a.fg++).toString(36)
    };
    var Ui = function(a) {
        S.call(this);
        this.qa = a || D();
        this.Dd = Ti;
        this.tc = null;
        this.$ = !1;
        this.c = null;
        this.Ca = void 0;
        this.fc = this.ya = this.A = null;
        this.Qg = !1
    };
    t(Ui, S);
    Ui.prototype.ue = Ri.Nf();
    var Ti = null;
    g = Ui.prototype;
    g.h = function() {
        return this.c
    };
    g.Ba = function() {
        this.Ca || (this.Ca = new De(this));
        return u(this.Ca)
    };
    g.getParent = function() {
        return this.A
    };
    g.Ed = function(a) {
        if (this.A && this.A != a)
            throw Error("Method not supported");
        Ui.m.Ed.call(this, a)
    };
    g.B = function() {
        return this.qa
    };
    g.N = function() {
        this.c = this.qa.createElement("DIV")
    };
    g.Qb = function() {
        if (this.$)
            throw Error("Component already rendered");
        this.c || this.N();
        this.qa.f.body.appendChild(this.c);
        this.A && !this.A.$ || this.jb()
    };
    g.jb = function() {
        this.$ = !0;
        Vi(this, function(a) {
            !a.$ && a.h() && a.jb()
        })
    };
    g.La = function() {
        Vi(this, function(a) {
            a.$ && a.La()
        });
        this.Ca && this.Ca.ba();
        this.$ = !1
    };
    g.u = function() {
        this.$ && this.La();
        this.Ca && (this.Ca.pa(), delete this.Ca);
        Vi(this, function(a) {
            a.pa()
        });
        !this.Qg && this.c && Xc(this.c);
        this.A = this.c = this.fc = this.ya = null;
        Ui.m.u.call(this)
    };
    var Vi = function(a, b) {
        a.ya && Ra(a.ya, b, void 0)
    };
    Ui.prototype.removeChild = function(a, b) {
        if (a) {
            var c = p(a) ? a : a.tc || (a.tc = Si(a.ue));
            if (this.fc && c) {
                var d = this.fc;
                d = (null !== d && c in d ? d[c] : void 0) || null
            } else
                d = null;
            a = d;
            if (c && a) {
                d = this.fc;
                c in d && delete d[c];
                ab(this.ya, a);
                b && (a.La(), a.c && Xc(a.c));
                c = a;
                if (null == c)
                    throw Error("Unable to set parent component");
                c.A = null;
                Ui.m.Ed.call(c, null)
            }
        }
        if (!a)
            throw Error("Child is not in parent component");
        return a
    };
    var Wi = function(a, b) {
        this.c = a;
        this.qa = b
    };
    var Xi = function(a, b) {
        Ui.call(this, b);
        this.Og = !!a;
        this.rb = null;
        this.Me = Mi({
            dg: this.Jc
        }, this)
    };
    t(Xi, Ui);
    g = Xi.prototype;
    g.md = null;
    g.Tc = !1;
    g.M = null;
    g.K = null;
    g.ca = null;
    g.cd = !1;
    g.nc = function() {
        return "goog-modalpopup"
    };
    g.mc = function() {
        return this.M
    };
    g.N = function() {
        Xi.m.N.call(this);
        var a = this.h();
        u(a);
        L.addAll(a, db(this.nc()).split(" "));
        a.tabIndex = 0;
        I(a, !1);
        this.Og && !this.K && (this.K = this.B().N("IFRAME", {
            frameborder: 0,
            style: "border:0;vertical-align:bottom;",
            src: Oi
        }), this.K.className = this.nc() + "-bg", I(this.K, !1), yd(this.K, 0));
        this.M || (this.M = this.B().N("DIV", this.nc() + "-bg"), I(this.M, !1));
        this.ca || (this.ca = this.B().createElement("SPAN"), I(this.ca, !1), this.ca.tabIndex = 0, this.ca.style.position = "absolute")
    };
    g.Le = function() {
        this.cd = !1
    };
    g.jb = function() {
        u(!!this.M, "Background element must not be null.");
        this.K && Vc(this.K, this.h());
        Vc(this.M, this.h());
        Xi.m.jb.call(this);
        Wc(this.ca, this.h());
        this.md = new Qi(this.B().f);
        this.Ba().w(this.md, "focusin", this.ig);
        Yi(this, !1)
    };
    g.La = function() {
        this.I() && this.D(!1);
        $d(this.md);
        Xi.m.La.call(this);
        Xc(this.K);
        Xc(this.M);
        Xc(this.ca)
    };
    g.D = function(a) {
        u(this.$, "ModalPopup must be rendered first.");
        a != this.Tc && (this.Xa && this.Xa.stop(), this.fb && this.fb.stop(), this.Wa && this.Wa.stop(), this.eb && this.eb.stop(), this.$ && Yi(this, a), a ? this.Hd() : this.pb())
    };
    var Yi = function(a, b) {
        if (!a.Ce) {
            var c = a.c;
            u(c, "Can not call getElementStrict before rendering/decorating.");
            a.Ce = new Wi(c, a.qa)
        }
        c = a.Ce;
        if (b) {
            c.mb || (c.mb = []);
            for (var d = c.qa.nd(c.qa.f.body), e = 0; e < d.length; e++) {
                var f = d[e];
                f == c.c || qg(f, "hidden") || (W(f, "hidden", !0), c.mb.push(f))
            }
        } else if (c.mb) {
            for (e = 0; e < c.mb.length; e++)
                c.mb[e].removeAttribute(pg("hidden"));
            c.mb = null
        }
    };
    Xi.prototype.Ue = function(a, b) {
        this.Xa = a;
        this.Wa = b;
        this.eb = this.fb = void 0
    };
    Xi.prototype.Hd = function() {
        if (this.dispatchEvent("beforeshow")) {
            try {
                this.rb = this.B().f.activeElement
            } catch (a) {}
            this.Jc();
            this.L();
            this.Ba().w(ad(this.B()), "resize", this.Jc).w(ad(this.B()), "orientationchange", this.Me);
            Zi(this, !0);
            this.focus();
            this.Tc = !0;
            this.Xa && this.fb ? (qe(this.Xa, "end", this.Va, !1, this), this.fb.play(), this.Xa.play()) : this.Va()
        }
    };
    Xi.prototype.pb = function() {
        if (this.dispatchEvent("beforehide")) {
            this.Ba().Zb(ad(this.B()), "resize", this.Jc).Zb(ad(this.B()), "orientationchange", this.Me);
            this.Tc = !1;
            this.Wa && this.eb ? (qe(this.Wa, "end", this.sb, !1, this), this.eb.play(), this.Wa.play()) : this.sb();
            a:
            {
                try {
                    var a = this.B(),
                        b = a.f.body,
                        c = a.f.activeElement || b;
                    if (!this.rb || this.rb == b) {
                        this.rb = null;
                        break a
                    }
                    (c == b || a.contains(this.h(), c)) && this.rb.focus()
                } catch (d) {}
                this.rb = null
            }
        }
    };
    var Zi = function(a, b) {
        a.K && I(a.K, b);
        a.M && I(a.M, b);
        I(a.h(), b);
        I(a.ca, b)
    };
    g = Xi.prototype;
    g.Va = function() {
        this.dispatchEvent("show")
    };
    g.sb = function() {
        Zi(this, !1);
        this.dispatchEvent("hide")
    };
    g.I = function() {
        return this.Tc
    };
    g.focus = function() {
        this.je()
    };
    g.Jc = function() {
        this.K && I(this.K, !1);
        this.M && I(this.M, !1);
        var a = this.B().f,
            b = Lc(Oc(a) || window || window),
            c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth));
        a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
        this.K && (I(this.K, !0), vd(this.K, c, a));
        this.M && (I(this.M, !0), vd(this.M, c, a))
    };
    g.L = function() {
        var a = this.B().f,
            b = Oc(a) || window;
        if ("fixed" == od(this.h()))
            var c = a = 0;
        else
            c = Nc(this.B().f), a = c.x, c = c.y;
        var d = xd(this.h());
        b = Lc(b || window);
        a = Math.max(a + b.width / 2 - d.width / 2, 0);
        c = Math.max(c + b.height / 2 - d.height / 2, 0);
        qd(this.h(), a, c);
        qd(this.ca, a, c)
    };
    g.ig = function(a) {
        this.cd ? this.Le() : a.target == this.ca && qf(this.je, 0, this)
    };
    g.je = function() {
        try {
            w && this.B().f.body.focus(), this.h().focus()
        } catch (a) {}
    };
    g.u = function() {
        $d(this.Xa);
        this.Xa = null;
        $d(this.Wa);
        this.Wa = null;
        $d(this.fb);
        this.fb = null;
        $d(this.eb);
        this.eb = null;
        Xi.m.u.call(this)
    };
    var Z = function(a, b, c) {
        Xi.call(this, b, c);
        this.oa = a || "modal-dialog";
        this.fa = Y(Y(new $i, aj, !0), bj, !1, !0)
    };
    t(Z, Xi);
    g = Z.prototype;
    g.Jf = !0;
    g.oe = !0;
    g.yd = !0;
    g.ge = !0;
    g.ad = .5;
    g.Jg = "";
    g.fd = null;
    g.za = null;
    g.fe = !1;
    g.zb = null;
    g.Xb = null;
    g.gf = null;
    g.ua = null;
    g.ic = null;
    g.ea = null;
    g.He = "dialog";
    g.nc = function() {
        return this.oa
    };
    g.Te = function(a) {
        if (!(a instanceof wc)) {
            if (!(a instanceof wc)) {
                var b = "object" == typeof a,
                    c = null;
                b && a.qd && (c = a.oc());
                a = yc(lb(b && a.Na ? a.Ma() : String(a)), c)
            }
            a = yc(xc(a).replace(/(\r\n|\r|\n)/g, "<br>"), a.oc())
        }
        this.fd = a;
        this.ic && Cc(this.ic, a)
    };
    g.mc = function() {
        this.h() || this.Qb();
        return Z.m.mc.call(this)
    };
    var cj = function(a, b) {
            a.yd = b;
            if (a.$) {
                var c = a.B(),
                    d = a.mc(),
                    e = a.K;
                b ? (e && c.we(e, a.h()), c.we(d, a.h())) : (c.removeNode(e), c.removeNode(d))
            }
            a.I() && Yi(a, b)
        },
        dj = function(a, b) {
            var c = db(a.oa + "-title-draggable").split(" ");
            a.h() && (b ? L.addAll(u(a.zb), c) : L.ba(u(a.zb), c));
            b && !a.za ? (a.za = new Ai(a.h(), a.zb), L.addAll(u(a.zb), c), P(a.za, "start", a.Ag, !1, a)) : !b && a.za && (a.za.pa(), a.za = null)
        };
    g = Z.prototype;
    g.N = function() {
        Z.m.N.call(this);
        var a = this.h();
        u(a, "getElement() returns null");
        var b = this.B();
        this.zb = b.N("DIV", this.oa + "-title", this.Xb = b.N("SPAN", {
            className: this.oa + "-title-text",
            id: this.tc || (this.tc = Si(this.ue))
        }, this.Jg), this.ua = b.N("SPAN", this.oa + "-title-close"));
        Uc(a, this.zb, this.ic = b.N("DIV", this.oa + "-content"), this.ea = b.N("DIV", this.oa + "-buttons"));
        og(this.Xb, "heading");
        og(this.ua, "button");
        this.ua.tabIndex = 0;
        W(this.ua, "label", "Close");
        this.gf = this.Xb.id;
        og(a, this.He);
        W(a, "labelledby", this.gf ||
        "");
        this.fd && Cc(this.ic, this.fd);
        I(this.ua, this.oe);
        this.fa && ej(this.fa, this.ea);
        I(this.ea, !!this.fa);
        this.ad = this.ad;
        this.h() && (a = this.mc()) && yd(a, this.ad)
    };
    g.jb = function() {
        Z.m.jb.call(this);
        this.Ba().w(this.h(), "keydown", this.Pb).w(this.h(), "keypress", this.Pb);
        this.Ba().w(this.ea, "click", this.gg);
        dj(this, this.ge);
        this.Ba().w(this.ua, "click", this.og);
        var a = this.h();
        u(a, "The DOM element for dialog cannot be null");
        og(a, this.He);
        "" !== this.Xb.id && W(a, "labelledby", this.Xb.id);
        this.yd || cj(this, !1)
    };
    g.La = function() {
        this.I() && this.D(!1);
        dj(this, !1);
        Z.m.La.call(this)
    };
    g.D = function(a) {
        a != this.I() && (this.$ || this.Qb(), Z.m.D.call(this, a))
    };
    g.Va = function() {
        Z.m.Va.call(this);
        this.dispatchEvent("aftershow")
    };
    g.sb = function() {
        Z.m.sb.call(this);
        this.dispatchEvent("afterhide");
        this.fe && this.pa()
    };
    g.Ag = function() {
        var a = this.B().f,
            b = Lc(Oc(a) || window || window),
            c = Math.max(a.body.scrollWidth, b.width);
        a = Math.max(a.body.scrollHeight, b.height);
        var d = xd(this.h());
        "fixed" == od(this.h()) ? this.za.Ac = new jd(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)) : this.za.Ac = new jd(0, 0, c - d.width, a - d.height)
    };
    g.og = function() {
        fj(this)
    };
    var fj = function(a) {
        if (a.oe) {
            var b = a.fa,
                c = b && b.ec;
            c ? (b = b.get(c), a.dispatchEvent(new gj(c, b)) && a.D(!1)) : a.D(!1)
        }
    };
    Z.prototype.u = function() {
        this.ea = this.ua = null;
        Z.m.u.call(this)
    };
    Z.prototype.gg = function(a) {
        a:
        {
            for (a = a.target; null != a && a != this.ea;) {
                if ("BUTTON" == a.tagName)
                    break a;
                a = a.parentNode
            }
            a = null
        }if (a && !a.disabled) {
            a = a.name;
            var b = this.fa.get(a);
            this.dispatchEvent(new gj(a, b)) && this.D(!1)
        }
    };
    Z.prototype.Pb = function(a) {
        var b = !1,
            c = !1,
            d = this.fa,
            e = a.target;
        if ("keydown" == a.type)
            if (this.Jf && 27 == a.keyCode) {
                var f = d && d.ec;
                e = "SELECT" == e.tagName && !e.disabled;
                f && !e ? (c = !0, b = d.get(f), b = this.dispatchEvent(new gj(f, b))) : e || (b = !0)
            } else {
                if (9 == a.keyCode && a.shiftKey && e == this.h()) {
                    this.cd = !0;
                    try {
                        this.ca.focus()
                    } catch (m) {}
                    qf(this.Le, 0, this)
                }
            }
        else if (13 == a.keyCode) {
            if ("BUTTON" == e.tagName && !e.disabled)
                f = e.name;
            else if (e == this.ua)
                fj(this);
            else if (d) {
                var h = d.jc,
                    k = h && hj(d, h);
                e = ("TEXTAREA" == e.tagName || "SELECT" ==
                e.tagName || "A" == e.tagName) && !e.disabled;
                !k || k.disabled || e || (f = h)
            }
            f && d && (c = !0, b = this.dispatchEvent(new gj(f, String(d.get(f)))))
        } else
            e != this.ua || 32 != a.keyCode && " " != a.key || fj(this);
        if (b || c)
            a.stopPropagation(), a.preventDefault();
        b && this.D(!1)
    };
    var gj = function(a, b) {
        this.type = "dialogselect";
        this.key = a;
        this.caption = b
    };
    t(gj, N);
    var $i = function(a) {
        this.qa = a || D();
        ug.call(this)
    };
    t($i, ug);
    g = $i.prototype;
    g.oa = "goog-buttonset";
    g.jc = null;
    g.c = null;
    g.ec = null;
    g.clear = function() {
        ug.prototype.clear.call(this);
        this.jc = this.ec = null
    };
    g.set = function(a, b, c, d) {
        ug.prototype.set.call(this, a, b);
        c && (this.jc = a);
        d && (this.ec = a);
        return this
    };
    var Y = function(a, b, c, d) {
            return a.set(b.key, b.caption, c, d)
        },
        ej = function(a, b) {
            a.c = b;
            a.Qb()
        };
    $i.prototype.Qb = function() {
        if (this.c) {
            Cc(this.c, zc);
            var a = D(this.c);
            this.forEach(function(b, c) {
                var d = a.N("BUTTON", {
                    name: c
                }, b);
                c == this.jc && (d.className = this.oa + "-default");
                this.c.appendChild(d)
            }, this)
        }
    };
    $i.prototype.h = function() {
        return this.c
    };
    $i.prototype.B = function() {
        return this.qa
    };
    var hj = function(a, b) {
            var c = (u(a.c) || document).getElementsByTagName("BUTTON");
            for (var d = 0, e; e = c[d]; d++)
                if (e.name == b || e.id == b)
                    return e;
            return null
        },
        aj = {
            key: "ok",
            caption: "OK"
        },
        bj = {
            key: "cancel",
            caption: "Cancel"
        },
        ij = {
            key: "yes",
            caption: "Yes"
        },
        jj = {
            key: "no",
            caption: "No"
        },
        kj = {
            key: "save",
            caption: "Save"
        },
        lj = {
            key: "continue",
            caption: "Continue"
        };
    "undefined" != typeof document && (Y(new $i, aj, !0, !0), Y(Y(new $i, aj, !0), bj, !1, !0), Y(Y(new $i, ij, !0), jj, !1, !0), Y(Y(Y(new $i, ij), jj, !0), bj, !1, !0), Y(Y(Y(new $i, lj), kj), bj, !0, !0));
    var nj = function() {
            this.a = K("blogger.templates.responsive.Sharing");
            V(this.a, "Initializing Sharing.");
            try {
                this.i = new gh;
                this.ub = [];
                this.j = null;
                this.Rb = [];
                mj(this);
                if (this.i.zf) {
                    var a = document.querySelector(".post-share-buttons-top"),
                        b = document.querySelector(".post-share-buttons-bottom");
                    a && b && si(b, a)
                }
                V(this.a, "Finished initializing sharing.")
            } catch (c) {
                U(this.a, "Error initializing sharing. Uncaught exception.", c), this.b()
            }
        },
        mj = function(a) {
            eh("sharing_native").then(function(b) {
                for (var c = {}, d = ba(Array.prototype.slice.call(document.querySelectorAll(".sharing"),
                    0)), e = d.next(); !e.done; c = {
                    F: c.F,
                    Ga: c.Ga,
                    da: c.da,
                    va: c.va,
                    R: c.R,
                    Bb: c.Bb
                }, e = d.next())
                    if (c.Ga = e.value, c.R = F("sharing-button", c.Ga), c.va = F("share-buttons-container", c.Ga), c.da = F("share-buttons", c.Ga), c.va && c.da && c.R) {
                        c.F = new Gg(c.da);
                        e = function(a) {
                            return function() {
                                a.F && a.F.I() && a.F.L()
                            }
                        }(c);
                        var f = function(b) {
                            return function() {
                                var c = b.F,
                                    d = b.da,
                                    e = b.va,
                                    f = b.R;
                                c && !c.I() ? a.xb(c, d, e, f) : a.nb(c, d, e, f)
                            }
                        }(c);
                        Eg(c.F);
                        Dg(c.F);
                        var h = a.i.$e && a.i.$e(c.F.h()),
                            k = a.i.re && a.i.re(c.F.h());
                        c.F.Ue(h, k);
                        P(window, "resize", e);
                        P(c.R, "click", f);
                        P(c.F, "hide", function(b) {
                            return function() {
                                return a.nb(b.F, b.da, b.va, b.R)
                            }
                        }(c));
                        f = new ti(c.R);
                        P(f, "key", function(b) {
                            return function(c) {
                                return a.Pb(b.F, b.da, b.va, b.R, c)
                            }
                        }(c));
                        f = new ti(c.da);
                        P(f, "key", function(b) {
                            return function(c) {
                                return a.Pb(b.F, b.da, b.va, b.R, c)
                            }
                        }(c));
                        og(c.R, "button");
                        W(c.R, "expanded", !1);
                        W(c.R, "haspopup", !0);
                        b && void 0 !== navigator.share && (c.Bb = F("sharing-element-other", c.Ga), f = c.Bb.parentElement, L.remove(f, "hidden"), f.removeAttribute("aria-hidden"), P(c.Bb, "click",
                        function(b) {
                            return function() {
                                var c = b.Ga.getAttribute("data-title"),
                                    d = b.Bb.getAttribute("data-url");
                                null != c && d && (navigator.share({
                                    title: c,
                                    url: d
                                }), a.nb(b.F, b.da, b.va, b.R))
                            }
                        }(c)));
                        a.ub.push(c.F);
                        a.Rb.push(e)
                    }
            })
        };
    nj.prototype.be = function() {
        if (this.ub)
            for (var a = ba(this.ub), b = a.next(); !b.done; b = a.next())
                (b = b.value) && b.D(!1)
    };
    nj.prototype.xb = function(a, b, c, d) {
        b && c && (c.removeChild(b), document.body.appendChild(b), a.D(!1), L.add(d, "sharing-open"), L.remove(b, "hidden"), W(b, "expanded", !0), W(b, "hidden", !1), c = "ltr" == l.document.documentElement.getAttribute("dir") ? 4 : 0, a.Bd = c, a.I() && a.L(), d && (W(d, "expanded", !0), a.setPosition(new Sg(d, c))), a.D(!0), this.i.he && (this.j = Nf(document.body, null, "sharing-dim-overlay"), this.j.show()), oj(this, b))
    };
    nj.prototype.nb = function(a, b, c, d) {
        b && c && (L.remove(d, "sharing-open"), L.add(b, "hidden"), W(b, "expanded", !1), W(b, "hidden", !0), document.body.removeChild(b), c.appendChild(b), d && W(d, "expanded", !1), this.i.he && (this.j.V(), this.j = null))
    };
    nj.prototype.Pb = function(a, b, c, d, e) {
        b && c && (38 == e.keyCode || 40 == e.keyCode) && (a.I() || this.xb(a, b, c, d), a = Array.prototype.slice.call(b.querySelectorAll("." + this.i.Ve)), b = a.indexOf(document.activeElement), b += 40 == e.keyCode ? 1 : -1, b = (b + a.length) % a.length, a[b].focus(), e.preventDefault())
    };
    var oj = function(a, b) {
            if (!L.contains(b, "btns-init")) {
                for (var c = b.querySelectorAll("." + a.i.Ve), d = q(a.be, a), e = {}, f = 0; f < c.length; e = {
                    ac: e.ac
                }, f++)
                    e.ac = c[f], function(b) {
                        return function(c) {
                            var e = new ti(c);
                            if (L.contains(c, "sharing-element-link"))
                                pj(a, c), P(e, "key", function(a) {
                                    if (32 == a.keyCode || 13 == a.keyCode)
                                        c.click(), a.preventDefault()
                                });
                            else {
                                var f = function() {
                                    var a = b.ac;
                                    if ("undefined" !== typeof ga) {
                                        var e = a.querySelector(".platform-sharing-text");
                                        e = e ? e.innerText : "Unknown";
                                        a = a.getAttribute("data-url");
                                        ga("blogger.send",
                                        {
                                            hitType: "social",
                                            socialNetwork: e,
                                            socialAction: "Share",
                                            socialTarget: a,
                                            transport: "beacon"
                                        })
                                    }
                                    var f = c.getAttribute("data-href");
                                    a = {
                                        target: "_blank",
                                        height: 430,
                                        width: 640
                                    };
                                    e = window;
                                    if (f instanceof rc)
                                        var h = f;
                                    else
                                        h = "undefined" != typeof f.href ? f.href : String(f), h instanceof rc || (h = "object" == typeof h && h.Na ? h.Ma() : String(h), tc.test(h) || (h = "about:invalid#zClosurez"), h = uc(h));
                                    f = a.target || f.target;
                                    var k = [];
                                    for (m in a)
                                        switch (m) {
                                        case "width":
                                        case "height":
                                        case "top":
                                        case "left":
                                            k.push(m + "=" + a[m]);
                                            break;
                                        case "target":
                                        case "noopener":
                                        case "noreferrer":
                                            break;
                                        default:
                                            k.push(m + "=" + (a[m] ? 1 : 0))
                                        }
                                    var m = k.join(",");
                                    if (Fb() && e.navigator && e.navigator.standalone && f && "_self" != f) {
                                        k = (k = (m = e.document.createElement("A")) && m.ownerDocument) && (k.defaultView || k.parentWindow) || l;
                                        if ("undefined" != typeof k.HTMLAnchorElement && "undefined" != typeof k.Location && "undefined" != typeof k.Element) {
                                            k = m && (m instanceof k.HTMLAnchorElement || !(m instanceof k.Location || m instanceof k.Element));
                                            var r = ua(m) ? m.constructor.displayName || m.constructor.name || Object.prototype.toString.call(m) : void 0 ===
                                            m ? "undefined" : null === m ? "null" : typeof m;
                                            u(k, "Argument is not a %s (or a non-Element, non-Location mock); got: %s", "HTMLAnchorElement", r)
                                        }
                                        h instanceof rc || h instanceof rc || (h = "object" == typeof h && h.Na ? h.Ma() : String(h), u(tc.test(h), "%s does not match the safe URL pattern", h) || (h = "about:invalid#zClosurez"), h = uc(h));
                                        m.href = sc(h);
                                        m.setAttribute("target", f);
                                        a.noreferrer && m.setAttribute("rel", "noreferrer");
                                        a = document.createEvent("MouseEvent");
                                        a.initMouseEvent("click", !0, !0, e, 1);
                                        m.dispatchEvent(a)
                                    } else
                                        a.noreferrer ?
                                        (e = e.open("", f, m), h = sc(h), e && (Mb && -1 != h.indexOf(";") && (h = "'" + h.replace(/'/g, "%27") + "'"), e.opener = null, a = new kc(ic, "b/12014412, meta tag with sanitized URL"), h = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + lb(h) + '">', Ma(lc(a), "must provide justification"), u(!/^[\s\xa0]*$/.test(lc(a)), "must provide non-empty justification"), a = yc(h, null), e.document.write(xc(a)), e.document.close())) : (e = e.open(sc(h), f, m)) && a.noopener && (e.opener = null);
                                    d();
                                    return !1
                                };
                                P(e, "key",
                                function(a) {
                                    if (32 == a.keyCode || 13 == a.keyCode)
                                        f(), a.preventDefault()
                                });
                                P(c, "click", f)
                            }
                        }
                    }(e)(e.ac);
                L.add(b, "btns-init")
            }
        },
        pj = function(a, b) {
            if (b && "undefined" !== typeof Clipboard && Clipboard) {
                var c = new ClipboardJs(b, {
                        text: function(a) {
                            return a.getAttribute("data-url")
                        }
                    }),
                    d = q(a.be, a),
                    e = fh("postUrl") || "Post Link";
                c.on("error", function(a) {
                    window.prompt(e, a.trigger.getAttribute("data-url"));
                    d();
                    return !1
                });
                c.on("success", function() {
                    var a = fh("linkCopiedToClipboard") || "Link copied to clipboard.";
                    eh("sharing_get_link_dialog").then(function(b) {
                        if (b &&
                        0 <= qi()) {
                            b = fh("ok") || "Ok";
                            var c = new Z,
                                e = Nf(document.body, function() {
                                    c.D(!1)
                                }, "getlink-dim-overlay");
                            e.show();
                            var f = (new $i).set(b, b, !0, !0);
                            c.fa = f;
                            c.ea && (c.fa ? ej(c.fa, c.ea) : Cc(c.ea, zc), I(c.ea, !!c.fa));
                            c.Te(a);
                            c.ge = !1;
                            dj(c, !1);
                            c.fe = !0;
                            1 != c.yd && cj(c, !0);
                            c.Qb();
                            L.add(hj(f, b), "flat-button");
                            L.add(c.h(), "dialog");
                            L.add(c.h(), "link-copied-dialog");
                            c.D(!0);
                            P(c, "hide", function() {
                                e.V()
                            })
                        } else
                            window.alert(a);
                        d()
                    });
                    return !1
                })
            } else
                sf(a.a, "Clipboard not initialized.")
        };
    nj.prototype.b = function() {
        this.j && (this.j.V(), this.j = null);
        this.ub && ae(this.ub);
        this.ub = null;
        if (this.Rb)
            for (var a = 0; a < this.Rb.length; a++)
                xe(window, "resize", this.Rb[a]);
        this.Rb = null;
        a = document.querySelectorAll(".sharing .share-buttons .sharing-platform-button");
        for (var b = 0; b < a.length; b++)
            R(a[b], "click");
        a = document.querySelectorAll(".sharing");
        for (b = 0; b < a.length; b++) {
            var c = F("sharing-button", a[b]);
            R(c, "click")
        }
    };
    var qj = function() {
        var a = this;
        this.a = K("blogger.templates.responsive.SidebarToggle");
        V(this.a, "Initializing SidebarToggle.");
        try {
            var b = document.querySelector(".sidebar-container");
            if (b) {
                this.Kd = b;
                var c = this.Kd.parentElement;
                this.j = c && Nf(c, function() {
                    return a.Qd()
                });
                (this.Nc = document.querySelector(".sidebar-back")) && P(this.Nc, "click", this.Qd, !1, this);
                (this.qc = document.querySelector(".centered-top-container .hamburger-menu")) && P(this.qc, "click", this.Qd, !1, this);
                V(this.a, "Finished initializing sidebar toggle.")
            } else
                U(this.a,
                "There was an error initializing the sidebar toggle section. sidebar not found.")
        } catch (d) {
            U(this.a, "Error initializing sidebar toggle. Uncaught exception.", d), this.b()
        }
    };
    qj.prototype.Qd = function() {
        ri(this.Kd)();
        L.contains(this.Kd, "sidebar-invisible") ? (this.j && this.j.Lb(), L.remove(document.body, "sidebar-visible")) : (this.j && this.j.show(), L.add(document.body, "sidebar-visible"))
    };
    qj.prototype.b = function() {
        this.qc && R(this.qc, "click");
        this.Nc && R(this.Nc, "click");
        this.j && (this.j.V(), this.j = null)
    };
    var rj = function() {
        this.Db = "r-snippet-container";
        this.hb = "r-snippetized";
        this.Lf = "r-snippet-fade"
    };
    var sj = function() {
        var a = this;
        this.a = K("blogger.templates.responsive.Snippets");
        V(this.a, "Initializing Snippets.");
        try {
            this.i = new rj, this.ma = new Og(new Ng(this.i.Db, this.i.hb, function(b, c) {
                return a.Ec(b, c)
            })), V(this.a, "Finished initializing Snippets.")
        } catch (b) {
            U(this.a, "Error initializing Snippets. Uncaught exception.", b), this.b()
        }
    };
    sj.prototype.Ec = function(a, b) {
        var c = F(this.i.Lf, a);
        c && L.enable(c, "hidden", !b)
    };
    sj.prototype.b = function() {
        this.ma && (this.ma.b(), this.ma = null)
    };
    var tj = function(a) {
        pi.call(this);
        a = a || new Lg;
        V(this.Sa, "Initializing indie template.");
        try {
            this.Xc = new Kg(a.sf);
            this.Jd = new qj;
            this.Gd = new nj;
            this.Ld = new sj;
            new Yg;
            var b = new Qg;
            b.cb = ["collapsed-header-show", "collapsed-header-hide"];
            this.Fc = Xg(b);
            this.Fc.forEach(function(a) {
                return a.aa()
            });
            V(this.Sa, "Finished initializing indie template.")
        } catch (c) {
            U(this.Sa, "Error initializing indie template. Uncaught exception.", c), this.b()
        }
    };
    ja(tj, pi);
    tj.prototype.b = function() {
        var a = this;
        return pi.prototype.b.call(this).then(function() {
            a.Xc && a.Xc.b();
            a.Jd && a.Jd.b();
            a.Gd && a.Gd.b();
            a.Ld && a.Ld.b();
            a.Fc && a.Fc.forEach(function(a) {
                return a.b()
            });
            a.Xc = null;
            a.Jd = null;
            a.Gd = null;
            a.Ld = null;
            a.Fc = null
        })
    };
    (function(a) {
        var b = function() {
            document.body.setAttribute("data-js-state", "loading");
            a();
            document.body.setAttribute("data-js-state", "loaded")
        };
        "loading" != document.readyState ? b() : P(window, "DOMContentLoaded", b)
    })(function() {
        return new tj
    });
}).call(this);
}