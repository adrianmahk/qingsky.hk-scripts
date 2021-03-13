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
                    sf: !0
                },
                ha = {};
            try {
                ha.__proto__ = fa;
                ea = ha.sf;
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
    var Ea = function(a, b, c) {
        var d = void 0 === d ? window : d;
        this.ng = void 0 === a ? 200 : a;
        this.Sf = void 0 === b ? 300 : b;
        this.Cg = void 0 === c ? ".centered-bottom" : c;
        this.yg = d
    };
    var Fa = function() {
        this.Ff = new Ea(void 0, void 0, ".hero-image")
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
        this.Nd = a === ic && b || "";
        this.nf = jc
    };
    kc.prototype.Na = !0;
    kc.prototype.Ma = function() {
        return this.Nd
    };
    kc.prototype.toString = function() {
        return "Const{" + this.Nd + "}"
    };
    var lc = function(a) {
            if (a instanceof kc && a.constructor === kc && a.nf === jc)
                return a.Nd;
            Ka("expected object of type Const, got '" + a + "'");
            return "type_error:Const"
        },
        jc = {},
        ic = {};
    var nc = function() {
        this.Ic = "";
        this.pf = mc
    };
    g = nc.prototype;
    g.Na = !0;
    g.Ma = function() {
        return this.Ic
    };
    g.rd = !0;
    g.oc = function() {
        return 1
    };
    g.toString = function() {
        return "TrustedResourceUrl{" + this.Ic + "}"
    };
    var oc = function(a) {
            if (a instanceof nc && a.constructor === nc && a.pf === mc)
                return a.Ic;
            Ka("expected object of type TrustedResourceUrl, got '" + a + "' of type " + qa(a));
            return "type_error:TrustedResourceUrl"
        },
        mc = {},
        pc = function(a) {
            var b = new nc;
            b.Ic = a;
            return b
        };
    var rc = function() {
        this.ta = "";
        this.mf = qc
    };
    g = rc.prototype;
    g.Na = !0;
    g.Ma = function() {
        return this.ta
    };
    g.rd = !0;
    g.oc = function() {
        return 1
    };
    g.toString = function() {
        return "SafeUrl{" + this.ta + "}"
    };
    var sc = function(a) {
            if (a instanceof rc && a.constructor === rc && a.mf === qc)
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
        this.lf = vc;
        this.fe = null
    };
    g = wc.prototype;
    g.rd = !0;
    g.oc = function() {
        return this.fe
    };
    g.Na = !0;
    g.Ma = function() {
        return this.ta
    };
    g.toString = function() {
        return "SafeHtml{" + this.ta + "}"
    };
    var xc = function(a) {
            if (a instanceof wc && a.constructor === wc && a.lf === vc)
                return a.ta;
            Ka("expected object of type SafeHtml, got '" + a + "' of type " + qa(a));
            return "type_error:SafeHtml"
        },
        vc = {},
        yc = function(a, b) {
            return (new wc).Vf(a, b)
        };
    wc.prototype.Vf = function(a, b) {
        this.ta = a;
        this.fe = b;
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
        $c = function(a) {
            return Zc(a,
            function(a) {
                return p(a.className) && $a(a.className.split(/\s+/), "comment")
            })
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
    g.xe = Vc;
    g.removeNode = Xc;
    g.od = function(a) {
        return fc && void 0 != a.children ? a.children : Sa(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    };
    g.contains = Yc;
    g.Ue = function(a) {
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
    var fd;
    fd = A ? "webkitTransitionEnd" : Kb ? "otransitionend" : "transitionend";
    var gd = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    g = gd.prototype;
    g.me = function() {
        return this.bottom - this.top
    };
    g.clone = function() {
        return new gd(this.top, this.right, this.bottom, this.left)
    };
    g.toString = function() {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    };
    g.contains = function(a) {
        return this && a ? a instanceof gd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
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
    var hd = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    g = hd.prototype;
    g.clone = function() {
        return new hd(this.left, this.top, this.width, this.height)
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
    var jd = function(a, b, c) {
            if (p(b))
                (b = id(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d],
                        f = id(c, d);
                    f && (c.style[f] = e)
                }
        },
        kd = {},
        id = function(a, b) {
            var c = kd[b];
            if (!c) {
                var d = pb(b);
                c = d;
                void 0 === a.style[d] && (d = (A ? "Webkit" : z ? "Moz" : w ? "ms" : Kb ? "O" : null) + qb(d), void 0 !== a.style[d] && (c = d));
                kd[b] = c
            }
            return c
        },
        G = function(a, b) {
            var c = C(a);
            return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
        },
        ld = function(a, b) {
            return G(a, b) || (a.currentStyle ?
                a.currentStyle[b] : null) || a.style && a.style[b]
        },
        md = function(a) {
            return ld(a, "position")
        },
        od = function(a, b, c) {
            if (b instanceof B) {
                var d = b.x;
                b = b.y
            } else
                d = b, b = c;
            a.style.left = nd(d, !1);
            a.style.top = nd(b, !1)
        },
        pd = function(a) {
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
        qd = function(a) {
            if (w && !bc(8))
                return u(a && "offsetParent" in
                a), a.offsetParent;
            var b = C(a),
                c = ld(a, "position"),
                d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (11 == a.nodeType && a.host && (a = a.host), c = ld(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
                    return a;
            return null
        },
        sd = function(a) {
            for (var b = new gd(0, Infinity, Infinity, 0), c = D(a), d = c.f.body, e = c.f.documentElement, f = Mc(c.f); a = qd(a);)
                if (!(w && 0 == a.clientWidth || A && 0 == a.clientHeight &&
                a == d) && a != d && a != e && "visible" != ld(a, "overflow")) {
                    var h = rd(a),
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
        rd =
        function(a) {
            var b = C(a);
            Pa(a, "Parameter is required");
            var c = new B(0, 0);
            var d = b ? C(b) : document;
            d = !w || bc(9) || Kc(D(d).f) ? d.documentElement : d.body;
            if (a == d)
                return c;
            a = pd(a);
            b = Nc(D(b).f);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        td = function(a, b, c) {
            if (b instanceof Ec)
                c = b.height, b = b.width;
            else if (void 0 == c)
                throw Error("missing height argument");
            a.style.width = nd(b, !0);
            H(a, c)
        },
        nd = function(a, b) {
            "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
            return a
        },
        H = function(a, b) {
            a.style.height = nd(b, !0)
        },
        vd = function(a) {
            var b =
            ud;
            if ("none" != ld(a, "display"))
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
        ud = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = A && !b && !c;
            return n(b) && !d || !a.getBoundingClientRect ? new Ec(b, c) : (a = pd(a), new Ec(a.right - a.left, a.bottom - a.top))
        },
        wd = function(a, b) {
            u(a);
            var c = a.style;
            "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter =
            "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")")
        },
        I = function(a, b) {
            a.style.display = b ? "" : "none"
        },
        xd = function(a) {
            return "rtl" == ld(a, "direction")
        },
        yd = function(a, b) {
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
        zd = function(a, b) {
            var c = a.currentStyle ? a.currentStyle[b] : null;
            return c ? yd(a, c) : 0
        },
        Ad = {
            thin: 2,
            medium: 4,
            thick: 6
        },
        Bd = function(a, b) {
            if ("none" ==
            (a.currentStyle ? a.currentStyle[b + "Style"] : null))
                return 0;
            var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
            return c in Ad ? Ad[c] : yd(a, c)
        },
        Dd = function(a) {
            if (w && !bc(9)) {
                var b = Bd(a, "borderLeft"),
                    c = Bd(a, "borderRight"),
                    d = Bd(a, "borderTop");
                a = Bd(a, "borderBottom");
                return new gd(d, c, a, b)
            }
            b = G(a, "borderLeftWidth");
            c = G(a, "borderRightWidth");
            d = G(a, "borderTopWidth");
            a = G(a, "borderBottomWidth");
            return new gd(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
        };
    var Ed = !1,
        Fd = !1,
        Gd = function(a) {
            var b = document.createElement("div");
            a = ba(a);
            for (var c = a.next(); !c.done; c = a.next())
                if (null != b.style[c.value])
                    return !0;
            return !1
        };
    Gd(["WebkitAnimation", "MozAnimation", "OAnimation", "animation"]);
    var J = Gd(["WebkitTransition", "MozTransition", "OTransition", "transition"]) ? fd : null,
        Hd = function() {
            if (Fd)
                return Ed;
            var a = document.createElement("DETAILS");
            if (!("open" in a))
                return !1;
            Uc(a, Qc("SUMMARY", null, "a"), "b");
            jd(a, "display", "block");
            document.body.appendChild(a);
            var b = a.offsetHeight;
            a.setAttribute("open", !0);
            b = a.offsetHeight != b;
            Xc(a);
            Ed = b;
            Fd = !0;
            return b
        };
    var Id = Object.freeze || function(a) {
        return a
    };
    var Jd = function(a, b, c) {
        this.reset(a, b, c, void 0, void 0)
    };
    Jd.prototype.ld = null;
    var Kd = 0;
    Jd.prototype.reset = function(a, b, c, d, e) {
        "number" == typeof e || Kd++;
        this.ff = d || Da();
        this.Ra = a;
        this.dg = b;
        this.Ce = c;
        delete this.ld
    };
    Jd.prototype.Te = function(a) {
        this.Ra = a
    };
    var Ld = function(a) {
            this.Cc = a;
            this.Kb = this.ya = this.Ra = this.A = null
        },
        Md = function(a, b) {
            this.name = a;
            this.value = b
        };
    Md.prototype.toString = function() {
        return this.name
    };
    var Nd = new Md("SEVERE", 1E3),
        Od = new Md("WARNING", 900),
        Pd = new Md("INFO", 800),
        Qd = new Md("CONFIG", 700),
        Rd = new Md("FINE", 500);
    Ld.prototype.getName = function() {
        return this.Cc
    };
    Ld.prototype.getParent = function() {
        return this.A
    };
    Ld.prototype.od = function() {
        this.ya || (this.ya = {});
        return this.ya
    };
    Ld.prototype.Te = function(a) {
        this.Ra = a
    };
    var Sd = function(a) {
        if (a.Ra)
            return a.Ra;
        if (a.A)
            return Sd(a.A);
        Ka("Root logger has no level set.");
        return null
    };
    Ld.prototype.log = function(a, b, c) {
        if (a.value >= Sd(this).value)
            for (ta(b) && (b = b()), a = new Jd(a, String(b), this.Cc), c && (a.ld = c), c = this; c;) {
                var d = c,
                    e = a;
                if (d.Kb)
                    for (var f = 0; b = d.Kb[f]; f++)
                        b(e);
                c = c.getParent()
            }
    };
    Ld.prototype.info = function(a, b) {
        this.log(Pd, a, b)
    };
    var Td = {},
        Ud = null,
        Vd = function() {
            Ud || (Ud = new Ld(""), Td[""] = Ud, Ud.Te(Qd))
        },
        K = function(a) {
            Vd();
            var b;
            if (!(b = Td[a])) {
                b = new Ld(a);
                var c = a.lastIndexOf("."),
                    d = a.substr(c + 1);
                c = K(a.substr(0, c));
                c.od()[d] = b;
                b.A = c;
                Td[a] = b
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
    var Wd = function() {
        this.Ja = this.Ja;
        this.Ta = this.Ta
    };
    Wd.prototype.Ja = !1;
    Wd.prototype.pa = function() {
        this.Ja || (this.Ja = !0, this.u())
    };
    Wd.prototype.u = function() {
        if (this.Ta)
            for (; this.Ta.length;)
                this.Ta.shift()()
    };
    var Xd = function(a) {
            a && "function" == typeof a.pa && a.pa()
        },
        Yd = function(a) {
            for (var b = 0, c = arguments.length; b < c; ++b) {
                var d = arguments[b];
                sa(d) ? Yd.apply(null, d) : Xd(d)
            }
        };
    var O = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.Ya = !1;
        this.Qe = !0
    };
    O.prototype.stopPropagation = function() {
        this.Ya = !0
    };
    O.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Qe = !1
    };
    var Zd = function(a) {
        a.preventDefault()
    };
    var $d = function(a, b) {
        O.call(this, a ? a.type : "");
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
    t($d, O);
    var ae = Id([1, 4, 2]),
        be = Id({
            2: "touch",
            3: "pen",
            4: "mouse"
        });
    $d.prototype.aa = function(a, b) {
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
        a.pointerType : be[a.pointerType] || "";
        this.state = a.state;
        this.ja = a;
        a.defaultPrevented && this.preventDefault()
    };
    $d.prototype.stopPropagation = function() {
        $d.m.stopPropagation.call(this);
        this.ja.stopPropagation ? this.ja.stopPropagation() : this.ja.cancelBubble = !0
    };
    $d.prototype.preventDefault = function() {
        $d.m.preventDefault.call(this);
        var a = this.ja;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1, dd)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    };
    var ce = "closure_listenable_" + (1E6 * Math.random() | 0),
        de = function(a) {
            return !(!a || !a[ce])
        },
        ee = 0;
    var fe = function(a, b, c, d, e) {
            this.listener = a;
            this.Jc = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.rc = e;
            this.key = ++ee;
            this.vb = this.ec = !1
        },
        ge = function(a) {
            a.vb = !0;
            a.listener = null;
            a.Jc = null;
            a.src = null;
            a.rc = null
        };
    var he = function(a) {
        this.src = a;
        this.C = {};
        this.Zb = 0
    };
    he.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.C[f];
        a || (a = this.C[f] = [], this.Zb++);
        var h = ie(a, b, d, e);
        -1 < h ? (b = a[h], c || (b.ec = !1)) : (b = new fe(b, this.src, f, !!d, e), b.ec = c, a.push(b));
        return b
    };
    he.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.C))
            return !1;
        var e = this.C[a];
        b = ie(e, b, c, d);
        return -1 < b ? (ge(e[b]), u(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.C[a], this.Zb--), !0) : !1
    };
    var je = function(a, b) {
        var c = b.type;
        if (!(c in a.C))
            return !1;
        var d = ab(a.C[c], b);
        d && (ge(b), 0 == a.C[c].length && (delete a.C[c], a.Zb--));
        return d
    };
    he.prototype.ba = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.C)
            if (!a || c == a) {
                for (var d = this.C[c], e = 0; e < d.length; e++)
                    ++b, ge(d[e]);
                delete this.C[c];
                this.Zb--
            }
        return b
    };
    he.prototype.Hb = function(a, b, c, d) {
        a = this.C[a.toString()];
        var e = -1;
        a && (e = ie(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    he.prototype.hasListener = function(a, b) {
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
    var ie = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.vb && f.listener == b && f.capture == !!c && f.rc == d)
                return e
        }
        return -1
    };
    var ke = "closure_lm_" + (1E6 * Math.random() | 0),
        le = {},
        me = 0,
        P = function(a, b, c, d, e) {
            if (d && d.once)
                return ne(a, b, c, d, e);
            if (ra(b)) {
                for (var f = 0; f < b.length; f++)
                    P(a, b[f], c, d, e);
                return null
            }
            c = oe(c);
            return de(a) ? a.w(b, c, ua(d) ? !!d.capture : !!d, e) : pe(a, b, c, !1, d, e)
        },
        pe = function(a, b, c, d, e, f) {
            if (!b)
                throw Error("Invalid event type");
            var h = ua(e) ? !!e.capture : !!e,
                k = qe(a);
            k || (a[ke] = k = new he(a));
            c = k.add(b, c, d, h, f);
            if (c.Jc)
                return c;
            d = re();
            c.Jc = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener)
                ed || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(),
                d, e);
            else if (a.attachEvent)
                a.attachEvent(se(b.toString()), d);
            else if (a.addListener && a.removeListener)
                u("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
            else
                throw Error("addEventListener and attachEvent are unavailable.");
            me++;
            return c
        },
        re = function() {
            var a = te,
                b = cd ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c)
                        return c
                };
            return b
        },
        ne = function(a, b, c, d, e) {
            if (ra(b)) {
                for (var f = 0; f < b.length; f++)
                    ne(a, b[f], c, d, e);
                return null
            }
            c = oe(c);
            return de(a) ?
            a.yd(b, c, ua(d) ? !!d.capture : !!d, e) : pe(a, b, c, !0, d, e)
        },
        ue = function(a, b, c, d, e) {
            if (ra(b))
                for (var f = 0; f < b.length; f++)
                    ue(a, b[f], c, d, e);
            else
                d = ua(d) ? !!d.capture : !!d, c = oe(c), de(a) ? a.$b(b, c, d, e) : a && (a = qe(a)) && (b = a.Hb(b, c, d, e)) && Q(b)
        },
        Q = function(a) {
            if (oa(a) || !a || a.vb)
                return !1;
            var b = a.src;
            if (de(b))
                return je(b.U, a);
            var c = a.type,
                d = a.Jc;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(se(c), d) : b.addListener && b.removeListener && b.removeListener(d);
            me--;
            (c = qe(b)) ? (je(c, a), 0 == c.Zb &&
            (c.src = null, b[ke] = null)) : ge(a);
            return !0
        },
        R = function(a, b) {
            if (a)
                if (de(a))
                    a.U && a.U.ba(b);
                else {
                    var c = qe(a);
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
        se = function(a) {
            return a in le ? le[a] : le[a] = "on" + a
        },
        xe = function(a, b) {
            var c = window;
            de(c) ? ve(c, a, !1, b) : we(c, a, !1, b)
        },
        we = function(a, b, c, d) {
            var e = !0;
            if (a = qe(a))
                if (b = a.C[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.vb && (f = ye(f, d), e = e && !1 !== f)
                    }
            return e
        },
        ye = function(a, b) {
            var c = a.listener,
                d = a.rc || a.src;
            a.ec && Q(a);
            return c.call(d, b)
        },
        te = function(a, b) {
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
                c = new $d(e, this);
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
                        var k = we(e[h], f, !0, c);
                        d = d && k
                    }
                    for (h = 0; !c.Ya && h < e.length; h++)
                        c.currentTarget = e[h], k = we(e[h], f, !1, c), d = d && k
                }
                return d
            }
            return ye(a, new $d(b, this))
        },
        qe = function(a) {
            a = a[ke];
            return a instanceof he ? a : null
        },
        ze = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        oe = function(a) {
            u(a, "Listener can not be null.");
            if (ta(a))
                return a;
            u(a.handleEvent, "An object listener must have handleEvent method.");
            a[ze] || (a[ze] = function(b) {
                return a.handleEvent(b)
            });
            return a[ze]
        };
    var Ae = function(a) {
        Wd.call(this);
        this.O = a;
        this.s = {}
    };
    t(Ae, Wd);
    var Be = [];
    Ae.prototype.w = function(a, b, c, d) {
        ra(b) || (b && (Be[0] = b.toString()), b = Be);
        for (var e = 0; e < b.length; e++) {
            var f = P(a, b[e], c || this.handleEvent, d || !1, this.O || this);
            if (!f)
                break;
            this.s[f.key] = f
        }
        return this
    };
    Ae.prototype.yd = function(a, b, c, d) {
        return Ce(this, a, b, c, d)
    };
    var Ce = function(a, b, c, d, e, f) {
        if (ra(c))
            for (var h = 0; h < c.length; h++)
                Ce(a, b, c[h], d, e, f);
        else {
            b = ne(b, c, d || a.handleEvent, e, f || a.O || a);
            if (!b)
                return a;
            a.s[b.key] = b
        }
        return a
    };
    Ae.prototype.$b = function(a, b, c, d, e) {
        if (ra(b))
            for (var f = 0; f < b.length; f++)
                this.$b(a, b[f], c, d, e);
        else
            c = c || this.handleEvent, d = ua(d) ? !!d.capture : !!d, e = e || this.O || this, c = oe(c), d = !!d, b = de(a) ? a.Hb(b, c, d, e) : a ? (a = qe(a)) ? a.Hb(b, c, d, e) : null : null, b && (Q(b), delete this.s[b.key]);
        return this
    };
    Ae.prototype.ba = function() {
        ub(this.s, function(a, b) {
            this.s.hasOwnProperty(b) && Q(a)
        }, this);
        this.s = {}
    };
    Ae.prototype.u = function() {
        Ae.m.u.call(this);
        this.ba()
    };
    Ae.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var S = function() {
        Wd.call(this);
        this.U = new he(this);
        this.uf = this;
        this.Hc = null
    };
    t(S, Wd);
    S.prototype[ce] = !0;
    g = S.prototype;
    g.Fd = function(a) {
        this.Hc = a
    };
    g.addEventListener = function(a, b, c, d) {
        P(this, a, b, c, d)
    };
    g.removeEventListener = function(a, b, c, d) {
        ue(this, a, b, c, d)
    };
    g.dispatchEvent = function(a) {
        De(this);
        var b = this.Hc;
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.Hc)
                c.push(b), u(1E3 > ++d, "infinite loop")
        }
        b = this.uf;
        d = a.type || a;
        if (p(a))
            a = new O(a, b);
        else if (a instanceof O)
            a.target = a.target || b;
        else {
            var e = a;
            a = new O(d, b);
            yb(a, e)
        }
        e = !0;
        if (c)
            for (var f = c.length - 1; !a.Ya && 0 <= f; f--) {
                var h = a.currentTarget = c[f];
                e = ve(h, d, !0, a) && e
            }
        a.Ya || (h = a.currentTarget = b, e = ve(h, d, !0, a) && e, a.Ya || (e = ve(h, d, !1, a) && e));
        if (c)
            for (f = 0; !a.Ya && f < c.length; f++)
                h = a.currentTarget = c[f], e = ve(h, d, !1, a) && e;
        return e
    };
    g.u = function() {
        S.m.u.call(this);
        this.U && this.U.ba(void 0);
        this.Hc = null
    };
    g.w = function(a, b, c, d) {
        De(this);
        return this.U.add(String(a), b, !1, c, d)
    };
    g.yd = function(a, b, c, d) {
        return this.U.add(String(a), b, !0, c, d)
    };
    g.$b = function(a, b, c, d) {
        return this.U.remove(String(a), b, c, d)
    };
    var ve = function(a, b, c, d) {
        b = a.U.C[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.vb && h.capture == c) {
                var k = h.listener,
                    m = h.rc || h.src;
                h.ec && je(a.U, h);
                e = !1 !== k.call(m, d) && e
            }
        }
        return e && 0 != d.Qe
    };
    S.prototype.Hb = function(a, b, c, d) {
        return this.U.Hb(String(a), b, c, d)
    };
    S.prototype.hasListener = function(a, b) {
        return this.U.hasListener(n(a) ? String(a) : void 0, b)
    };
    var De = function(a) {
        u(a.U, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var Ee = function(a, b) {
        for (var c = [a], d = b.length - 1; 0 <= d; --d)
            c.push(typeof b[d], b[d]);
        return c.join("\x0B")
    };
    var Fe = function(a, b) {
        this.Xf = 100;
        this.If = a;
        this.xg = b;
        this.Dc = 0;
        this.sc = null
    };
    Fe.prototype.get = function() {
        if (0 < this.Dc) {
            this.Dc--;
            var a = this.sc;
            this.sc = a.next;
            a.next = null
        } else
            a = this.If();
        return a
    };
    Fe.prototype.put = function(a) {
        this.xg(a);
        this.Dc < this.Xf && (this.Dc++, a.next = this.sc, this.sc = a)
    };
    var Ge = function(a) {
            l.setTimeout(function() {
                throw a;
            }, 0)
        },
        He,
        Ie = function() {
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
                        var a = c.be;
                        c.be = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        be: a
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
    var Je = function() {
            this.Vc = this.ab = null
        },
        Le = new Fe(function() {
            return new Ke
        }, function(a) {
            a.reset()
        });
    Je.prototype.add = function(a, b) {
        var c = Le.get();
        c.set(a, b);
        this.Vc ? this.Vc.next = c : (u(!this.ab), this.ab = c);
        this.Vc = c
    };
    Je.prototype.remove = function() {
        var a = null;
        this.ab && (a = this.ab, this.ab = this.ab.next, this.ab || (this.Vc = null), a.next = null);
        return a
    };
    var Ke = function() {
        this.next = this.scope = this.ra = null
    };
    Ke.prototype.set = function(a, b) {
        this.ra = a;
        this.scope = b;
        this.next = null
    };
    Ke.prototype.reset = function() {
        this.next = this.scope = this.ra = null
    };
    var Qe = function(a, b) {
            Me || Ne();
            Oe || (Me(), Oe = !0);
            Pe.add(a, b)
        },
        Me,
        Ne = function() {
            if (l.Promise && l.Promise.resolve) {
                var a = l.Promise.resolve(void 0);
                Me = function() {
                    a.then(Re)
                }
            } else
                Me = function() {
                    var a = Re;
                    !ta(l.setImmediate) || l.Window && l.Window.prototype && !v("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (He || (He = Ie()), He(a)) : l.setImmediate(a)
                }
        },
        Oe = !1,
        Pe = new Je,
        Re = function() {
            for (var a; a = Pe.remove();) {
                try {
                    a.ra.call(a.scope)
                } catch (b) {
                    Ge(b)
                }
                Le.put(a)
            }
            Oe = !1
        };
    var T = function(a) {
            this.X = 0;
            this.Pe = void 0;
            this.gb = this.na = this.A = null;
            this.pc = this.md = !1;
            if (a != pa)
                try {
                    var b = this;
                    a.call(void 0, function(a) {
                        Se(b, 2, a)
                    }, function(a) {
                        if (!(a instanceof Te))
                            try {
                                if (a instanceof Error)
                                    throw a;
                                throw Error("Promise rejected.");
                            } catch (d) {}
                        Se(b, 3, a)
                    })
                } catch (c) {
                    Se(this, 3, c)
                }
        },
        Ue = function() {
            this.next = this.context = this.tb = this.Ua = this.Ha = null;
            this.cc = !1
        };
    Ue.prototype.reset = function() {
        this.context = this.tb = this.Ua = this.Ha = null;
        this.cc = !1
    };
    var Ve = new Fe(function() {
            return new Ue
        }, function(a) {
            a.reset()
        }),
        We = function(a, b, c) {
            var d = Ve.get();
            d.Ua = a;
            d.tb = b;
            d.context = c;
            return d
        },
        Xe = function(a) {
            if (a instanceof T)
                return a;
            var b = new T(pa);
            Se(b, 2, a);
            return b
        },
        Ye = function(a) {
            return new T(function(b, c) {
                c(a)
            })
        },
        $e = function(a, b, c) {
            Ze(a, b, c, null) || Qe(Ca(b, a))
        },
        af = function(a) {
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
                        m = a[k], $e(m, Ca(f, k), h);
                else
                    b(e)
            })
        };
    T.prototype.then = function(a, b, c) {
        null != a && Na(a, "opt_onFulfilled should be a function.");
        null != b && Na(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return bf(this, ta(a) ? a : null, ta(b) ? b : null, c)
    };
    T.prototype.$goog_Thenable = !0;
    var cf = function(a, b) {
        return bf(a, null, b, void 0)
    };
    T.prototype.cancel = function(a) {
        0 == this.X && Qe(function() {
            var b = new Te(a);
            df(this, b)
        }, this)
    };
    var df = function(a, b) {
            if (0 == a.X)
                if (a.A) {
                    var c = a.A;
                    if (c.na) {
                        for (var d = 0, e = null, f = null, h = c.na; h && (h.cc || (d++, h.Ha == a && (e = h), !(e && 1 < d))); h = h.next)
                            e || (f = h);
                        e && (0 == c.X && 1 == d ? df(c, b) : (f ? (d = f, u(c.na), u(null != d), d.next == c.gb && (c.gb = d), d.next = d.next.next) : ef(c), ff(c, e, 3, b)))
                    }
                    a.A = null
                } else
                    Se(a, 3, b)
        },
        hf = function(a, b) {
            a.na || 2 != a.X && 3 != a.X || gf(a);
            u(null != b.Ua);
            a.gb ? a.gb.next = b : a.na = b;
            a.gb = b
        },
        bf = function(a, b, c, d) {
            var e = We(null, null, null);
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
                        !n(e) && b instanceof Te ? h(b) : a(e)
                    } catch (r) {
                        h(r)
                    }
                } : h
            });
            e.Ha.A = a;
            hf(a, e);
            return e.Ha
        };
    T.prototype.Kg = function(a) {
        u(1 == this.X);
        this.X = 0;
        Se(this, 2, a)
    };
    T.prototype.Lg = function(a) {
        u(1 == this.X);
        this.X = 0;
        Se(this, 3, a)
    };
    var Se = function(a, b, c) {
            0 == a.X && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.X = 1, Ze(c, a.Kg, a.Lg, a) || (a.Pe = c, a.X = b, a.A = null, gf(a), 3 != b || c instanceof Te || jf(a, c)))
        },
        Ze = function(a, b, c, d) {
            if (a instanceof T)
                return null != b && Na(b, "opt_onFulfilled should be a function."), null != c && Na(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), hf(a, We(b || pa, c || null, d)), !0;
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
                        return kf(a, f, b, c, d), !0
                } catch (h) {
                    return c.call(d, h), !0
                }
            return !1
        },
        kf = function(a, b, c, d, e) {
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
        gf = function(a) {
            a.md || (a.md = !0, Qe(a.Lf, a))
        },
        ef = function(a) {
            var b = null;
            a.na && (b = a.na, a.na = b.next, b.next = null);
            a.na || (a.gb = null);
            null != b && u(null != b.Ua);
            return b
        };
    T.prototype.Lf = function() {
        for (var a; a = ef(this);)
            ff(this, a, this.X, this.Pe);
        this.md = !1
    };
    var ff = function(a, b, c, d) {
            if (3 == c && b.tb && !b.cc)
                for (; a && a.pc; a = a.A)
                    a.pc = !1;
            if (b.Ha)
                b.Ha.A = null, lf(b, c, d);
            else
                try {
                    b.cc ? b.Ua.call(b.context) : lf(b, c, d)
                } catch (e) {
                    mf.call(null, e)
                }
            Ve.put(b)
        },
        lf = function(a, b, c) {
            2 == b ? a.Ua.call(a.context, c) : a.tb && a.tb.call(a.context, c)
        },
        jf = function(a, b) {
            a.pc = !0;
            Qe(function() {
                a.pc && mf.call(null, b)
            })
        },
        mf = Ge,
        Te = function(a) {
            Ha.call(this, a)
        };
    t(Te, Ha);
    Te.prototype.name = "cancel";
    var nf = function(a, b, c) {
        if (ta(a))
            c && (a = q(a, c));
        else if (a && "function" == typeof a.handleEvent)
            a = q(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0)
    };
    var of = function(a, b) {
        var c = b || Ee;
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
            a && a.log(Nd, b, c)
        },
        pf = function(a, b) {
            a && a.log(Od, b, void 0)
        },
        V = function(a, b) {
            a && a.info(b, void 0)
        },
        qf = function(a, b) {
            a && a.log(Rd, b, void 0)
        };
    var rf = Bb(),
        sf = Eb() || v("iPod"),
        tf = v("iPad"),
        uf = v("Android") && !(Cb() || Bb() || v("Opera") || v("Silk")),
        vf = Cb(),
        wf = Db() && !Fb();
    var xf = function(a) {
            return (a = a.exec(rb)) ? a[1] : ""
        },
        yf = function() {
            if (rf)
                return xf(/Firefox\/([0-9.]+)/);
            if (w || Lb || Kb)
                return Zb;
            if (vf)
                return Fb() ? xf(/CriOS\/([0-9.]+)/) : xf(/Chrome\/([0-9.]+)/);
            if (wf && !Fb())
                return xf(/Version\/([0-9.]+)/);
            if (sf || tf) {
                var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(rb);
                if (a)
                    return a[1] + "." + a[2]
            } else if (uf)
                return (a = xf(/Android\s+([0-9.]+)/)) ? a : xf(/Version\/([0-9.]+)/);
            return ""
        }();
    var zf = gc(function() {
            return !w || 0 <= ob(yf, 9)
        }),
        Af = gc(function() {
            return A || Lb || z && 0 <= ob(yf, 10) || w && 0 <= ob(yf, 10)
        }),
        Cf = function(a, b) {
            if (zf()) {
                var c = Af() ? "translate3d(0px," + b + "px,0px)" : "translate(0px," + b + "px)";
                jd(a, Bf(), c)
            }
        },
        Bf = gc(function() {
            return w && 9 == ac ? "-ms-transform" : "transform"
        });
    var Ef = function(a) {
        this.a = K("blogger.templates.responsive.CollapsedHeader");
        V(this.a, "Initializing collapsed header.");
        try {
            if (this.hc = a || new Ea, this.Wb = null, this.o = document.querySelector(".centered-top-container"))
                if (this.Z = document.querySelector(".centered-top-placeholder"))
                    if (this.Ze = document.querySelector(this.hc.Cg)) {
                        var b = this.o.querySelector(".centered-top");
                        if (b) {
                            this.Df = b.cloneNode(!0);
                            this.Jd = this.Mb = !1;
                            this.wd = Nc(document).y;
                            var c = hc(this.$f, this.hc.ng, this);
                            this.Wb = c;
                            c();
                            P(this.hc.yg, "scroll",
                            this.Wb);
                            Df(this);
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
    Ef.prototype.$f = function() {
        var a = this,
            b = this.wd;
        this.wd = Nc(document).y;
        //b = this.wd < b;
        b = true;
        0 > this.Ze.getBoundingClientRect().top && b ? this.Jd || (this.Mb && (J in this.o && R(this.o, J), this.Mb = !1), this.Jd = !0, L.add(document.body, "collapsed-header"), L.contains(this.Z, "cloned") || (L.add(this.Z, "cloned"), this.Z.appendChild(this.Df)), L.add(this.o, "sticky"), L.remove(this.o, "animating"), Ff(this), setTimeout(function() {
            L.add(a.o, "animating");
            Cf(a.o, 0);
            a.o.style.opacity = "1";
            xe("collapsed-header-show", new Gf("collapsed-header-show"))
        }, 0),
        document.body.appendChild(this.o)) : (this.Jd = !1, L.contains(this.Z, "cloned") && (Ff(this), J ? P(this.o, J, this.te, !1, this) : setTimeout(function() {
            return a.te()
        }, this.hc.Sf), this.Mb = !0))
    };
    var Ff = function(a) {
        var b = a.o.getBoundingClientRect().height;
        Cf(a.o, -b);
        a.o.style.opacity = "0"
    };
    Ef.prototype.te = function() {
        this.Mb && (this.o.style.transform = "", this.o.style.opacity = "", J && R(this.o, J), this.Mb = !1, this.Z.parentNode.insertBefore(this.o, this.Z), L.remove(document.body, "collapsed-header"), L.contains(this.Z, "cloned") && (L.remove(this.Z, "cloned"), this.Z.removeChild(this.Z.lastChild)), L.remove(this.o, "sticky"), xe("collapsed-header-hide", new Gf("collapsed-header-hide")))
    };
    Ef.prototype.I = function() {
        return L.contains(document.body, "collapsed-header")
    };
    Ef.prototype.me = function() {
        return this.I() && this.o.offsetHeight || 0
    };
    var Df = function(a) {
            Hf(a, window.location.hash, !0);
            P(window, "hashchange", function() {
                return Hf(a, window.location.hash)
            });
            P(document.body, "click", function(b) {
                b = b.target;
                "A" == b.nodeName && Hf(a, b.getAttribute("href"), !1, !0)
            })
        },
        Hf = function(a, b, c, d) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? !1 : d;
            if (!/^#[^ ]+$/.test(b))
                return !1;
            var e = document.getElementById(b.slice(1));
            if (e) {
                var f = ne(window, "collapsed-header-show", If(a, e));
                setTimeout(function() {
                    Q(f)
                }, c ? 3E3 : 100);
                of && d && window.history.pushState({}, document.title, window.location.pathname +
                b)
            }
            return !!e
        },
        If = function(a, b) {
            return function() {
                if (!a.I())
                    return !1;
                var c = a.me() + 20,
                    d = b.getBoundingClientRect().top;
                return 0 <= d && d < c && window.pageYOffset > c ? (window.scrollTo(window.pageXOffset, window.pageYOffset - c), !0) : !1
            }
        };
    Ef.prototype.b = function() {
        this.Wb && (ue(window, "scroll", this.Wb), this.Wb = null)
    };
    var Gf = function(a, b) {
        O.call(this, a, b)
    };
    ja(Gf, O);
    var Jf = function(a) {
        this.G = a
    };
    Jf.prototype.show = function() {
        this.G && L.remove(this.G, "hidden")
    };
    Jf.prototype.Lb = function() {
        this.G && L.add(this.G, "hidden")
    };
    Jf.prototype.V = function() {
        this.G && this.G.parentNode && (this.G.parentNode.removeChild(this.G), this.G = null)
    };
    var Kf = function(a, b, c) {
        var d = document.createElement("div");
        L.add(d, "dim-overlay");
        L.add(d, "hidden");
        c && (d.id = c);
        a.appendChild(d);
        var e = new Jf(d);
        P(d, "click", function(a) {
            b && b(a);
            e.Lb()
        });
        return e
    };
    var Nf = function(a, b, c, d, e, f) {
            if (A && !$b("525"))
                return !0;
            if (Nb && e)
                return Lf(a);
            if (e && !d)
                return !1;
            if (!z) {
                oa(b) && (b = Mf(b));
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
            return z && (d || e || f) ? !1 : Lf(a)
        },
        Lf = function(a) {
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
        Mf = function(a) {
            if (z)
                a = Of(a);
            else if (Nb && A)
                switch (a) {
                case 93:
                    a = 91
                }
            return a
        },
        Of = function(a) {
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
    var Pf = {
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
    var Sf = function(a) {
            S.call(this);
            this.Fb = this.Ub = {};
            this.zc = 0;
            this.Pf = zb.apply(null, Qf);
            this.Ig = zb.apply(null, Rf);
            this.yf = !0;
            this.wf = this.zf = !1;
            this.bg = !0;
            this.xf = !1;
            this.Zc = null;
            this.Qa = a;
            P(this.Qa, "keydown", this.Jb, void 0, this);
            Ob && P(this.Qa, "keypress", this.oe, void 0, this);
            P(this.Qa, "keyup", this.ne, void 0, this)
        },
        Tf;
    t(Sf, S);
    var Uf = function(a) {
            this.Xe = a || null;
            this.next = a ? null : {}
        },
        Qf = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
        Rf = "color date datetime datetime-local email month number password search tel text time url week".split(" ");
    Sf.prototype.vg = function(a, b) {
        Vf(this.Ub, Wf(arguments), a)
    };
    var Wf = function(a) {
        if (p(a[1]))
            a = Ta(Xf(a[1]), function(a) {
                La(a.keyCode, "A non-modifier key is needed in each stroke.");
                return Yf(a.key || "", a.keyCode, a.cg)
            });
        else {
            var b = a,
                c = 1;
            ra(a[1]) && (b = a[1], c = 0);
            for (a = []; c < b.length; c += 2)
                a.push(Yf("", b[c], b[c + 1]))
        }
        return a
    };
    Sf.prototype.u = function() {
        Sf.m.u.call(this);
        this.Ub = {};
        ue(this.Qa, "keydown", this.Jb, !1, this);
        Ob && ue(this.Qa, "keypress", this.oe, !1, this);
        ue(this.Qa, "keyup", this.ne, !1, this);
        this.Qa = null
    };
    var Xf = function(a) {
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
                if (!Tf) {
                    h = {};
                    for (e in Pf)
                        h[Pf[e]] = Mf(parseInt(e, 10));
                    Tf = h
                }
                h = Tf[f];
                La(h, "Key name not found in goog.events.KeyNames: " +
                k);
                f = k;
                break
            }
            b.push({
                key: f,
                keyCode: h,
                cg: c
            })
        }
        return b
    };
    Sf.prototype.ne = function(a) {
        z && (32 == this.Zc && 32 == a.keyCode && a.preventDefault(), this.Zc = null);
        Ob && !this.ze && Ob && a.ctrlKey && a.altKey && this.Jb(a)
    };
    Sf.prototype.oe = function(a) {
        32 < a.keyCode && Ob && a.ctrlKey && a.altKey && (this.ze = !0)
    };
    var Vf = function(a, b, c) {
            var d = b.shift();
            Ra(d, function(c) {
                if ((c = a[c]) && (0 == b.length || c.Xe))
                    throw Error("Keyboard shortcut conflicts with existing shortcut");
            });
            b.length ? Ra(d, function(d) {
                d = d.toString();
                var e = new Uf;
                d = d in a ? a[d] : a[d] = e;
                e = b.slice(0);
                Vf(u(d.next, "An internal node must have a next map"), e, c)
            }) : Ra(d, function(b) {
                a[b] = new Uf(c)
            })
        },
        Zf = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a[b[c]];
                if (d)
                    return d
            }
        },
        Yf = function(a, b, c) {
            c = c || 0;
            b = ["c_" + b + "_" + c];
            "" != a && b.push("n_" + a + "_" + c);
            return b
        };
    Sf.prototype.Jb = function(a) {
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
            b = !d && !e || this.Pf[b] || this.wf ? !0 : e ? !1 : this.bg && (a.altKey || a.ctrlKey || a.metaKey) ? !0 : "INPUT" == c.tagName && this.Ig[c.type] ? 13 == b : "INPUT" == c.tagName ||
            "BUTTON" == c.tagName ? this.xf ? !0 : 32 != b : !1
        }if (b)
            if ("keydown" == a.type && Ob && a.ctrlKey && a.altKey)
                this.ze = !1;
            else {
                b = Mf(a.keyCode);
                c = Yf(a.key, b, (a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.altKey ? 4 : 0) | (a.metaKey ? 8 : 0));
                d = Zf(this.Fb, c);
                if (!d || 1500 <= Da() - this.zc)
                    this.Fb = this.Ub, this.zc = Da();
                (d = Zf(this.Fb, c)) && d.next && (this.Fb = d.next, this.zc = Da());
                d && (d.next ? a.preventDefault() : (this.Fb = this.Ub, this.zc = Da(), this.yf && a.preventDefault(), this.zf && a.stopPropagation(), c = Ma(d.Xe, "A terminal node must have a string shortcut identifier."),
                d = a.target, e = this.dispatchEvent(new $f("shortcut", c, d)), (e &= this.dispatchEvent(new $f("shortcut_" + c, c, d))) || a.preventDefault(), z && (this.Zc = b)))
            }
    };
    var $f = function(a, b, c) {
        O.call(this, a, c);
        this.identifier = b
    };
    t($f, O);
    var bg = function() {
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
                        (this.Za = d && Array.prototype.slice.call(d, 0)) && 0 != this.Za.length ? (this.Tb = this.Eb.querySelector(".search-close"), this.G = b && Kf(this.Ea, function() {
                            return a.Qd()
                        }) || null, (this.ed = this.Eb.querySelector(".centered-top")) ?
                        (this.Re = this.Ea.querySelector(".search-action"), (this.$a = this.Ea.querySelector(".search-input input")) ? (this.Ae = new Sf(document), ag(this), V(this.a, "Finished initializing search section.")) : U(this.a, "There was an error initializing the search section. search input not found.")) : U(this.a, "There was an error initializing the search section. centered-top not found.")) : pf(this.a, "There was an error initializing the search section. No search buttons found.")
                    } else
                        U(this.a, "There was an error initializing the search section. search section not found.")
                } else
                    U(this.a,
                    "There was an error initializing the search section. container not found.")
            } catch (e) {
                U(this.a, "Error initializing section. Uncaught exception.", e), this.b()
            }
        },
        ag = function(a) {
            if (a.Za)
                for (var b = ba(a.Za), c = b.next(); !c.done; c = b.next())
                    P(c.value, "click", a.Qd, !1, a);
            a.Tb && P(a.Tb, "click", a.Qd, !1, a);
            b = function() {
                a.Re && (a.Re.disabled = "" == a.$a.value)
            };
            P(a.$a, "input", b);
            b();
            a.Ae.vg("showSearch", 191, 0);
            P(a.Ae, "shortcut", a.le, !1, a)
        };
    bg.prototype.Qd = function() {
        L.contains(this.Ea, "focused") ? L.contains(this.Ea, "focused") && (L.remove(this.Ea, "focused"), L.remove(this.ed, "search-focused"), this.G && this.G.Lb()) : this.le()
    };
    bg.prototype.le = function() {
        L.contains(this.Ea, "focused") || (L.add(this.ed, "search-focused"), L.add(this.Ea, "focused"), this.G && this.G.show());
        this.$a.focus()
    };
    bg.prototype.b = function() {
        this.G && (this.G.V(), this.G = null);
        if (this.Za) {
            for (var a = ba(this.Za), b = a.next(); !b.done; b = a.next())
                R(b.value, "click");
            this.Za = null
        }
        this.Tb && (R(this.Tb, "click"), this.Tb = null);
        this.$a && (R(this.$a, "input"), this.$a = null)
    };
    var cg = function() {};
    cg.prototype.L = function() {};
    var dg = function() {
        if (Ob) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(rb)) ? a[1] : "0"
        }
        return Nb ? (a = /10[_.][0-9_.]+/, (a = a.exec(rb)) ? a[0].replace(/_/g, ".") : "10") : Pb ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(rb)) ? a[1] : "") : Qb || Rb || Sb ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(rb)) ? a[1].replace(/_/g, ".") : "") : ""
    }();
    var gg = function(a, b, c, d, e, f, h, k, m) {
            u(c);
            var r;
            if (r = c.offsetParent) {
                var x = "HTML" == r.tagName || "BODY" == r.tagName;
                if (!x || "static" != md(r)) {
                    var y = rd(r);
                    if (!x) {
                        x = xd(r);
                        var E;
                        if (E = x) {
                            E = wf && 0 <= ob(yf, 10);
                            var M;
                            if (M = Tb)
                                M = 0 <= ob(dg, 10);
                            E = z || E || M
                        }
                        x = E ? -r.scrollLeft : !x || Mb && $b("8") || "visible" == ld(r, "overflowX") ? r.scrollLeft : r.scrollWidth - r.clientWidth - r.scrollLeft;
                        y = Dc(y, new B(x, r.scrollTop))
                    }
                }
            }
            r = y || new B;
            y = rd(a);
            x = vd(a);
            y = new hd(y.x, y.y, x.width, x.height);
            if (x = sd(a)) {
                var N = new hd(x.left, x.top, x.right - x.left, x.bottom -
                x.top);
                x = Math.max(y.left, N.left);
                E = Math.min(y.left + y.width, N.left + N.width);
                x <= E && (M = Math.max(y.top, N.top), N = Math.min(y.top + y.height, N.top + N.height), M <= N && (y.left = x, y.top = M, y.width = E - x, y.height = N - M))
            }
            x = D(a);
            M = D(c);
            if (x.f != M.f) {
                E = x.f.body;
                M = ad(M);
                N = new B(0, 0);
                var za = Oc(C(E));
                if (Hb(za, "parent")) {
                    var Cd = E;
                    do {
                        if (za == M)
                            var Oa = rd(Cd);
                        else
                            Oa = u(Cd), Oa = pd(Oa), Oa = new B(Oa.left, Oa.top);
                        N.x += Oa.x;
                        N.y += Oa.y
                    } while (za && za != M && za != za.parent && (Cd = za.frameElement) && (za = za.parent))
                }
                E = Dc(N, rd(E));
                !w || bc(9) || Kc(x.f) ||
                (E = Dc(E, Nc(x.f)));
                y.left += E.x;
                y.top += E.y
            }
            a = eg(a, b);
            b = y.left;
            a & 4 ? b += y.width : a & 2 && (b += y.width / 2);
            b = new B(b, y.top + (a & 1 ? y.height : 0));
            b = Dc(b, r);
            e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
            if (h)
                if (m)
                    var wa = m;
                else if (wa = sd(c))
                    wa.top -= r.y, wa.right -= r.x, wa.bottom -= r.y, wa.left -= r.x;
            return fg(b, c, d, f, wa, h, k)
        },
        fg = function(a, b, c, d, e, f, h) {
            a = a.clone();
            var k = eg(b, c);
            c = vd(b);
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
            f = new hd(0, 0, 0, 0);
            f.left = a.x;
            f.top = a.y;
            f.width = h.width;
            f.height = h.height;
            e = m;
            if (e & 496)
                return e;
            od(b, new B(f.left, f.top));
            h = new Ec(f.width, f.height);
            c == h || c && h && c.width == h.width && c.height == h.height ||
            (c = h, h = C(b), a = Kc(D(h).f), !w || $b("10") || a && $b("8") ? (b = b.style, z ? b.MozBoxSizing = "border-box" : A ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(c.width, 0) + "px", b.height = Math.max(c.height, 0) + "px") : (h = b.style, a ? (w ? (a = zd(b, "paddingLeft"), f = zd(b, "paddingRight"), d = zd(b, "paddingTop"), k = zd(b, "paddingBottom"), a = new gd(d, f, k, a)) : (a = G(b, "paddingLeft"), f = G(b, "paddingRight"), d = G(b, "paddingTop"), k = G(b, "paddingBottom"), a = new gd(parseFloat(d), parseFloat(f), parseFloat(k), parseFloat(a))), b = Dd(b),
            h.pixelWidth = c.width - b.left - a.left - a.right - b.right, h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth = c.width, h.pixelHeight = c.height)));
            return e
        },
        eg = function(a, b) {
            return (b & 8 && xd(a) ? b ^ 4 : b) & -9
        };
    var hg = function(a, b) {
        this.Gf = a instanceof B ? a : new B(a, b)
    };
    t(hg, cg);
    hg.prototype.L = function(a, b, c, d) {
        fg(this.Gf, a, b, c, null, null, d)
    };
    var ig,
        jg = {
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
    var kg = {
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
    var lg = function(a, b) {
            b ? (u(wb(kg, b), "No such ARIA role " + b), a.setAttribute("role", b)) : a.removeAttribute("role")
        },
        W = function(a, b, c) {
            ra(c) && (c = c.join(" "));
            var d = mg(b);
            "" === c || void 0 == c ? (ig || (ig = {
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
            }), c = ig, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d,
            c)
        },
        og = function(a, b) {
            var c = ng(a, b);
            /^[\s\xa0]*$/.test(null == c ? "" : String(c)) || "true" == c || "false" == c ? W(a, b, "true" == c ? "false" : "true") : a.removeAttribute(mg(b))
        },
        ng = function(a, b) {
            var c = a.getAttribute(mg(b));
            return null == c || void 0 == c ? "" : String(c)
        },
        mg = function(a) {
            u(a, "ARIA attribute cannot be empty.");
            u(wb(jg, a), "No such ARIA attribute " + a);
            return "aria-" + a
        };
    var pg = "StopIteration" in l ? l.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        qg = function() {};
    qg.prototype.next = function() {
        throw pg;
    };
    qg.prototype.qf = function() {
        return this
    };
    var rg = function(a, b) {
        this.la = {};
        this.s = [];
        this.ac = this.ib = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else
            a && this.addAll(a)
    };
    rg.prototype.Ib = function() {
        sg(this);
        for (var a = [], b = 0; b < this.s.length; b++)
            a.push(this.la[this.s[b]]);
        return a
    };
    rg.prototype.lb = function() {
        sg(this);
        return this.s.concat()
    };
    rg.prototype.clear = function() {
        this.la = {};
        this.ac = this.ib = this.s.length = 0
    };
    rg.prototype.remove = function(a) {
        return Object.prototype.hasOwnProperty.call(this.la, a) ? (delete this.la[a], this.ib--, this.ac++, this.s.length > 2 * this.ib && sg(this), !0) : !1
    };
    var sg = function(a) {
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
    g = rg.prototype;
    g.get = function(a, b) {
        return Object.prototype.hasOwnProperty.call(this.la, a) ? this.la[a] : b
    };
    g.set = function(a, b) {
        Object.prototype.hasOwnProperty.call(this.la, a) || (this.ib++, this.s.push(a), this.ac++);
        this.la[a] = b
    };
    g.addAll = function(a) {
        if (a instanceof rg)
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
        return new rg(this)
    };
    g.qf = function(a) {
        sg(this);
        var b = 0,
            c = this.ac,
            d = this,
            e = new qg;
        e.next = function() {
            if (c != d.ac)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.s.length)
                throw pg;
            var e = d.s[b++];
            return a ? e : d.la[e]
        };
        return e
    };
    var tg = function(a, b) {
        if ("FORM" == a.tagName)
            for (var c = a.elements, d = 0; a = c[d]; d++)
                tg(a, b);
        else
            1 == b && a.blur(), a.disabled = b
    };
    var ug = function() {
            this.Cb = this.Cc = ""
        },
        vg = /"/g,
        wg = /\\/g,
        xg = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;
    ug.prototype.getName = function() {
        return this.Cc
    };
    ug.prototype.toString = function() {
        var a = this.getName();
        a = a.replace(vg, "");
        var b;
        a:
        {
            for (b = 0; 13 > b; b++)
                if (-1 != a.indexOf('()<>@:\\".[],;'[b])) {
                    b = !0;
                    break a
                }
            b = !1
        }b && (a = '"' + a.replace(wg, "\\\\") + '"');
        return "" == a ? this.Cb : "" == this.Cb ? a : a + " <" + this.Cb + ">"
    };
    var zg = function(a, b) {
        S.call(this);
        this.O = new Ae(this);
        var c = a || null;
        yg(this);
        this.c = c;
        b && (this.Ab = b)
    };
    t(zg, S);
    g = zg.prototype;
    g.c = null;
    g.Zd = !0;
    g.Xd = null;
    g.Yd = null;
    g.qb = !1;
    g.Bg = !1;
    g.xd = -1;
    g.qe = !1;
    g.Jf = !0;
    g.Ab = "toggle_display";
    g.h = function() {
        return this.c
    };
    var Ag = function(a) {
            yg(a);
            a.Zd = !0
        },
        Bg = function(a) {
            yg(a);
            a.qe = !0
        };
    zg.prototype.Ve = function(a, b) {
        this.yb = a;
        this.ob = b
    };
    zg.prototype.Ba = function() {
        return this.O
    };
    var yg = function(a) {
        if (a.qb)
            throw Error("Can not change this state of the popup while showing.");
    };
    g = zg.prototype;
    g.I = function() {
        return this.qb
    };
    g.D = function(a) {
        this.yb && this.yb.stop();
        this.ob && this.ob.stop();
        a ? this.Id() : this.pb()
    };
    g.L = pa;
    g.Id = function() {
        if (!this.qb && this.dispatchEvent("beforeshow")) {
            if (!this.c)
                throw Error("Caller must call setElement before trying to show the popup");
            this.L();
            var a = C(this.c);
            this.qe && this.O.w(a, "keydown", this.ig, !0);
            if (this.Zd)
                if (this.O.w(a, "mousedown", this.Fe, !0), w) {
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
                    this.O.w(a, "mousedown", this.Fe, !0);
                    this.O.w(a, "deactivate", this.Ee)
                } else
                    this.O.w(a,
                    "blur", this.Ee);
            "toggle_display" == this.Ab ? (this.c.style.visibility = "visible", I(this.c, !0)) : "move_offscreen" == this.Ab && this.L();
            this.qb = !0;
            this.xd = Da();
            this.yb ? (ne(this.yb, "end", this.Va, !1, this), this.yb.play()) : this.Va()
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
        this.ob ? (ne(this.ob, "end", Ca(this.ee, a), !1, this), this.ob.play()) : this.ee(a);
        return !0
    };
    g.ee = function(a) {
        "toggle_display" == this.Ab ? this.Bg ? nf(this.re, 0, this) : this.re() : "move_offscreen" == this.Ab && (this.c.style.top = "-10000px");
        this.sb(a)
    };
    g.re = function() {
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
    g.Fe = function(a) {
        a = a.target;
        Yc(this.c, a) || Cg(this, a) || this.Yd && !Yc(this.Yd, a) || 150 > Da() - this.xd || this.pb(a)
    };
    g.ig = function(a) {
        27 == a.keyCode && this.pb(a.target) && (a.preventDefault(), a.stopPropagation())
    };
    g.Ee = function(a) {
        if (this.Jf) {
            var b = C(this.c);
            if ("undefined" != typeof document.activeElement) {
                if (a = b.activeElement, !a || Yc(this.c, a) || "BODY" == a.tagName)
                    return
            } else if (a.target != b)
                return;
            150 > Da() - this.xd || this.pb()
        }
    };
    var Cg = function(a, b) {
        return Ua(a.Xd || [], function(a) {
            return b === a || Yc(a, b)
        })
    };
    zg.prototype.u = function() {
        zg.m.u.call(this);
        this.O.pa();
        Xd(this.yb);
        Xd(this.ob);
        delete this.c;
        delete this.O;
        delete this.Xd
    };
    var Dg = function(a, b) {
        this.Cd = 8;
        this.Dd = b || void 0;
        zg.call(this, a)
    };
    t(Dg, zg);
    Dg.prototype.setPosition = function(a) {
        this.Dd = a || void 0;
        this.I() && this.L()
    };
    Dg.prototype.L = function() {
        if (this.Dd) {
            var a = !this.I() && "move_offscreen" != this.Ab,
                b = this.h();
            a && (b.style.visibility = "hidden", I(b, !0));
            this.Dd.L(b, this.Cd, this.Qi);
            a && I(b, !1)
        }
    };
    var Fg = function() {
        this.a = K("blogger.templates.responsive.Subscribe");
        V(this.a, "Initializing Subscribe.");
        try {
            if (this.Cf = ".centered-top", this.j = document.body && Kf(document.body, null, "subscribe-dim-overlay"), this.o = document.querySelector(".centered-top-container"))
                if (this.J = this.o.querySelector(".subscribe-popup"))
                    if (this.l = new Dg(this.J), this.Od = this.o.querySelector(".subscribe-popup-container"))
                        if (this.Vb = this.o.querySelector(".subscribe-button"))
                            if (this.sa = this.J.querySelector(".follow-by-email-address")) {
                                if (this.kb =
                                this.J.querySelector(".follow-by-email-submit"))
                                    P(this.sa, "input", this.jf, !1, this), Eg(this, !0), this.jf(), this.Gd(), V(this.a, "Finished initializing Subscribe.")
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
    Fg.prototype.jf = function() {
        var a = "function" == typeof document.createElement("input").checkValidity,
            b;
        if (b = "" != this.sa.value)
            (a = a && this.sa.validity.valid) || (a = new ug, a.Cb = this.sa.value.trim(), a = xg.test(a.Cb)), b = a;
        Eg(this, !b)
    };
    var Eg = function(a, b) {
        a.kb && (tg(a.kb, b), W(a.kb, "disabled", b))
    };
    Fg.prototype.Gd = function() {
        var a = this;
        Bg(this.l);
        Ag(this.l);
        P(window, "resize", this.Le, !1, this);
        P(this.Vb, "click", this.xb, !1, this);
        P(this.l, "hide", this.nb, !1, this);
        P(this.kb, "click", function() {
            !a.kb.disabled && a.nb()
        }, !1, this)
    };
    Fg.prototype.nb = function() {
        this.sa && this.sa.blur();
        L.add(this.J, "hidden");
        document.body.removeChild(this.J);
        this.Od.appendChild(this.J);
        this.j.Lb();
        this.Vb.focus()
    };
    Fg.prototype.Le = function() {
        this.l && this.l.I() && (Gg(this), this.l.L())
    };
    var Gg = function(a) {
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
        d = a.Cf;
        var e = document.querySelector(void 0 === d ? ".centered" : d).getBoundingClientRect();
        d = e.left;
        e = e.width;
        var f = window.innerHeight;
        b = ("ltr" == document.documentElement.getAttribute("dir") ? -1 : 1) * b / 2;
        a.l.setPosition(new hg(d + e / 2 + b, f / 2 - c / 2))
    };
    Fg.prototype.xb = function() {
        this.Od.removeChild(this.J);
        document.body.appendChild(this.J);
        this.l.D(!1);
        L.remove(this.J, "hidden");
        this.l.D(!0);
        Gg(this);
        this.j.show();
        (this.l.h().querySelector("input:not([type=hidden])") || this.l.h()).focus()
    };
    Fg.prototype.b = function() {
        this.j && (this.j.V(), this.j = null);
        ue(window, "resize", this.Le, !1, this);
        this.l && (this.l.pa(), this.l = null);
        this.sa && R(this.sa, "input");
        this.Vb && R(this.Vb, "click")
    };
    var Hg = function(a) {
        this.a = K("blogger.templates.fancy.ActionBar");
        V(this.a, "Initializing fancy actionbar.");
        try {
            a = a || new Fa, this.de = new Ef(a.Ff), this.ef = new Fg, this.Se = new bg, V(this.a, "Finished initializing fancy actionbar.")
        } catch (b) {
            U(this.a, "Error initializing fancy actionbar. Uncaught exception.", b), this.b()
        }
    };
    Hg.prototype.b = function() {
        this.de.b();
        this.ef.b();
        this.Se.b();
        this.Se = this.ef = this.de = null
    };
    var Ig = function() {
        this.tf = new Fa
    };
    var Jg = function(a, b, c, d) {
            b = void 0 === b ? 10 : b;
            c = void 0 === c ? 1E3 : c;
            d = void 0 === d ? null : d;
            var e = 0,
                f = function() {
                    e++ < c ? a() || setTimeout(f, b) : d && d()
                };
            f()
        },
        Lg = function() {
            var a = Kg();
            var b = void 0 === b ? 10 : b;
            var c = void 0 === c ? 1E3 : c;
            return new T(function(d, e) {
                var f = !1;
                Jg(a, b, c, function() {
                    f = !0;
                    e()
                });
                f || d()
            })
        };
    var Mg = function() {
            this.a = K("blogger.templates.fancy.Layout");
            this.Pb = null
        },
        Ng = function(a) {
            L.contains(document.body, "feed-view") && Jg(function() {
                V(a.a, "Checking if Masonry has loaded.");
                return window.imagesLoaded && window.Masonry ? (V(a.a, "Masonry has loaded."), window.imagesLoaded(".blog-posts", function() {
                    V(a.a, "Images have loaded. Setting up Masonry");
                    window.addEventListener && window.dispatchEvent ? window.addEventListener("skinUpdated", function() {
                        return window.dispatchEvent(new Event("resize"))
                    }) : window.attachEvent &&
                    window.fireEvent && window.attachEvent("skinUpdated", function() {
                        return window.fireEvent(new Event("resize"))
                    });
                    var b = "ltr" === l.document.documentElement.getAttribute("dir");
                    a.Pb = new window.Masonry(".blog-posts", {
                        gutter: 20,
                        isOriginLeft: b,
                        itemSelector: ".post-outer-container",
                        transitionDuration: 0
                    });
                    document.body.setAttribute("data-js-layout", "complete");
                    setTimeout(function() {
                        return a.Pb.layout()
                    }, 1E3)
                }), !0) : !1
            }, 10, 1E3, function() {
                U(a.a, "Timed out waiting for Masonry to load.")
            })
        };
    Mg.prototype.b = function() {
        this.Pb && (this.Pb.destroy(), this.Pb = null)
    };
    var Og = function() {};
    Og.prototype.aa = function() {
        throw Error('Component "init" method must be implemented.');
    };
    Og.prototype.b = function() {
        throw Error('Component "teardown" method must be implemented.');
    };
    var Pg = function(a, b, c, d) {
        d = void 0 === d ? [] : d;
        this.Db = a;
        this.hb = b;
        this.Mg = c;
        this.cb = d
    };
    var Qg = function(a) {
            this.a = K("blogger.templates.responsive.OverflowDetector");
            V(this.a, "Initializing overflow detector.");
            try {
                this.i = a;
                this.i.cb.push("load");
                this.i.cb.push("resize");
                for (var b = ba(this.i.cb), c = b.next(); !c.done; c = b.next())
                    P(window, c.value, this.Mc, !1, this);
                this.Mc();
                V(this.a, "Finished initializing overflow detector.")
            } catch (d) {
                U(this.a, "Error initializing overflow detector. Uncaught exception.", d), this.b()
            }
        },
        Rg = function(a, b) {
            var c = F(a.i.hb, b);
            return c ? c.offsetHeight > b.offsetHeight : !1
        };
    Qg.prototype.Mc = function() {
        for (var a = ba(Array.prototype.slice.call(document.querySelectorAll("." + this.i.Db), 0)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = F(this.i.hb, b);
            c && this.i.Mg(b, c.offsetHeight > b.offsetHeight)
        }
    };
    Qg.prototype.b = function() {
        ue(window, "resize", this.Mc);
        ue(window, "load", this.Mc)
    };
    var Sg = function() {
        this.Db = "overflowable-container";
        this.hb = "overflowable-contents";
        this.wc = "overflowable-item";
        this.$d = "overflow-button";
        this.Hf = "overflow-count";
        this.ug = 50;
        this.cb = []
    };
    var Tg = function(a, b, c) {
        this.element = a;
        this.hd = b;
        this.qg = c
    };
    t(Tg, cg);
    Tg.prototype.L = function(a, b, c) {
        gg(this.element, this.hd, a, b, void 0, c, this.qg)
    };
    var Ug = function(a, b, c, d) {
        Tg.call(this, a, b);
        this.Wf = c ? 5 : 0;
        this.Ad = d || void 0
    };
    t(Ug, Tg);
    Ug.prototype.L = function(a, b, c, d) {
        var e = gg(this.element, this.hd, a, b, null, c, 10, d, this.Ad);
        if (e & 496) {
            var f = Vg(e, this.hd);
            b = Vg(e, b);
            e = gg(this.element, f, a, b, null, c, 10, d, this.Ad);
            e & 496 && (f = Vg(e, f), b = Vg(e, b), gg(this.element, f, a, b, null, c, this.Wf, d, this.Ad))
        }
    };
    var Vg = function(a, b) {
        a & 48 && (b ^= 4);
        a & 192 && (b ^= 1);
        return b
    };
    var Wg = function(a, b) {
        this.a = K("blogger.templates.responsive.Overflowable");
        this.i = b || new Sg;
        this.ha = a;
        this.j = this.dc = this.Lc = this.l = this.Y = this.Pa = this.xa = this.cd = this.Ia = null;
        this.Bf = this.i.$d + "-container";
        this.ma = null
    };
    ja(Wg, Og);
    Wg.prototype.aa = function() {
        var a = this;
        V(this.a, "Initializing overflowable.");
        try {
            this.Ia = F(this.i.hb, this.ha);
            if (!this.Ia)
                return U(this.a, "There was an error initializing an overflowable. content element not found."), Ye();
            this.xa = F(this.i.$d, this.ha);
            this.cd = Xg(this);
            Wc(this.cd, this.Ia);
            L.contains(this.ha, "overflowable-no-popup") || (this.Y = document.createElement("DIV"), L.add(this.Y, "overflow-popup"), I(this.Y, !1), Wc(this.Y, this.ha));
            this.Lc = P(window, "resize", this.mg);
            this.Gd();
            Yg(this);
            var b = "overflowable-" +
            ya(this);
            L.add(this.ha, b);
            this.ma = new Qg(new Pg(b, "overflowable-backup-content", hc(function(b, d) {
                return a.Fc(b, d)
            }, this.i.ug, this), this.i.cb));
            this.Fc(this.ha, Rg(this.ma, this.ha));
            V(this.a, "Finished initializing overflowable.");
            return Xe()
        } catch (c) {
            return U(this.a, "Error initializing overflowable. Uncaught exception.", c), Ye(c)
        }
    };
    var Xg = function(a) {
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
    Wg.prototype.Gd = function() {
        var a = this;
        this.xa && this.Y && (this.Y.innerHTML = this.Ia.innerHTML, this.l = new Dg(this.Y), Bg(this.l), Ag(this.l), this.dc = P(this.xa, "click", function(b) {
            a.xb();
            b.preventDefault()
        }), P(this.l, "hide", this.kg, !1, this))
    };
    var Yg = function(a) {
        var b = Hc(a.i.wc, a.Ia);
        if (a.xa && 0 < b.length) {
            b = b[b.length - 1];
            var c = document.createElement(String(b.tagName));
            L.add(c, a.Bf);
            I(c, !1);
            L.remove(a.xa, "hidden");
            Tc(c, a.xa);
            Vc(c, b);
            a.Pa = c
        }
    };
    g = Wg.prototype;
    g.Fc = function(a, b) {
        var c = this;
        if (this.ma) {
            var d = Hc(this.i.wc, this.Ia);
            this.Pa && (I(this.Pa, b), W(this.Pa, "hidden", !b));
            var e = 0;
            if (b) {
                var f = Hc(this.i.wc, this.cd),
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
            if (d = F(this.i.Hf, a))
                d.innerText = e.toString()
        }
    };
    g.xb = function() {
        this.l.D(!1);
        var a = this.l;
        a.Cd = 4;
        a.I() && a.L();
        this.xa && this.l.setPosition(new Ug(this.xa, 4));
        this.l.D(!0);
        this.j = Kf(this.ha, null, "overflowable-dim-overlay");
        this.j.show()
    };
    g.mg = function() {
        this.l && this.l.I() && this.l.L()
    };
    g.kg = function() {
        this.Y && this.Y.style.left && (this.Y.style.left = "0");
        this.j && (this.j.V(), this.j = null)
    };
    g.b = function() {
        this.j && (this.j.V(), this.j = null);
        Xd(this.l);
        this.l = null;
        this.Lc && (Q(this.Lc), this.Lc = null);
        this.dc && (Q(this.dc), this.dc = null);
        this.ma && (this.ma.b(), this.ma = null);
        return Xe()
    };
    var Zg = function(a) {
        return Ta(Hc(a.Db), function(b) {
            return new Wg(b, a)
        })
    };
    var $g = null,
        bh = function() {
            return ah("blog").then(function(a) {
                return a.bloggerUrl
            })
        },
        ch = function(a) {
            return ah("features").then(function(b) {
                return b[a] && "TRUE" == b[a].toUpperCase()
            })
        };
    function ah(a) {
        return $g ? Xe($g[a]) : Lg().then(function() {
            var b = _WidgetManager._GetAllData(),
                c = {},
                d;
            for (d in b)
                c[d] = b[d];
            $g = c;
            return $g[a]
        })
    }
    function Kg() {
        return function() {
            return "undefined" !== typeof _WidgetManager && _WidgetManager ? !0 : !1
        }
    }
    ;
    var dh = function(a) {
        if ("undefined" !== typeof _WidgetManager && _WidgetManager) {
            var b = _WidgetManager._GetAllData();
            if (b && b.messages && b.messages[a])
                return b.messages[a]
        }
        return null
    };
    var eh = function() {
        this.ie = !0;
        this.se = this.af = null;
        this.We = "sharing-platform-button";
        this.Af = !0
    };
    var fh = function(a) {
        this.a = K("blogger.templates.responsive.Collapsible");
        this.ha = a;
        this.Sd = this.Pd = this.Gb = this.Fa = this.v = null
    };
    ja(fh, Og);
    fh.prototype.aa = function() {
        V(this.a, "Initializing collapsible.");
        try {
            var a = (this.ha || document).getElementsByTagName("DETAILS");
            if (1 != a.length)
                return U(this.a, "Collapsible did not contain exactly one details element."), Xe();
            this.v = a[0];
            var b = (this.v || document).getElementsByTagName("SUMMARY");
            if (1 != b.length)
                return U(this.a, "Collapsible did not contain exactly one summary element."), Xe();
            this.Fa = b[0];
            this.Gb = "b-details-" + ya(this.v);
            Hd() || (this.v.id = this.Gb, lg(this.Fa, "button"), W(this.Fa, "controls", this.Gb),
            W(this.v, "expanded", !1), W(this.Fa, "expanded", !1), bb(document.querySelectorAll("#" + this.Gb + " > :not(summary)")).forEach(function(a) {
                return W(a, "hidden", !0)
            }));
            this.Pd = P(this.Fa, "click", this.Qc, !1, this)
        } catch (c) {
            return U(this.a, "Error initializing collapsible. Uncaught exception.", c), this.b().then(function() {
                return Ye()
            })
        }
        V(this.a, "Finished initializing collapsible.");
        return Xe()
    };
    fh.prototype.Qc = function(a) {
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
                b.Sd = P(b.v, J, function() {
                    H(b.v, "auto");
                    R(b.v, J)
                })
            }, 0)
        }
        Hd() || (this.v && og(this.v, "expanded"), this.Fa && og(this.Fa, "expanded"),
        bb(document.querySelectorAll("#" + this.Gb + " > :not(summary)")).forEach(function(a) {
            return og(a, "hidden")
        }))
    };
    fh.prototype.b = function() {
        this.Pd && Q(this.Pd);
        this.Sd && Q(this.Sd);
        return Xe()
    };
    var gh = function(a) {
        a = document.querySelectorAll(a);
        for (var b = [], c = 0; a && c < a.length; c++)
            b.push(new fh(a[c]));
        return b
    };
    var hh = function(a, b, c) {
        this.a = K("blogger.templates.responsive.Extendable");
        V(this.a, "Initializing extendable.");
        try {
            this.H = a, this.Nc = b, this.wb = c ? c : null, P(b, "click", this.Qc, !1, this), c && P(c, "click", this.Qc, !1, this)
        } catch (d) {
            U(this.a, "Error initializing extendable. Uncaught exception.", d), this.b()
        }
        V(this.a, "Finished initializing extendable.")
    };
    hh.prototype.Qc = function() {
        var a = this;
        if (L.contains(this.H, "expanded"))
            J && (R(this.H, J), H(this.H, G(this.H, "height")), setTimeout(function() {
                H(a.H, 0)
            }, 0)), L.remove(this.H, "expanded"), L.remove(this.Nc, "hidden"), this.wb && L.add(this.wb, "hidden");
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
            L.add(this.Nc, "hidden");
            this.wb && L.remove(this.wb, "hidden")
        }
    };
    hh.prototype.b = function() {
        this.Nc && R(this.Nc, "click");
        this.wb && R(this.wb, "click");
        this.H && (R(this.H, J), R(this.H, "click"))
    };
    var ih = function(a) {
        a = document.querySelectorAll(".widget." + a);
        for (var b = [], c = 0; a && c < a.length; c++) {
            var d = a[c],
                e = F("show-more", d),
                f = F("show-less", d);
            d = F("remaining-items", d);
            e && d && b.push(new hh(d, e, f))
        }
        return b
    };
    var jh = function() {
        this.a = K("blogger.templates.responsive.Archive");
        this.Aa = this.T = null;
        V(this.a, "Initializing archive.")
    };
    ja(jh, Og);
    jh.prototype.aa = function() {
        var a = this;
        this.T = gh(".widget.BlogArchive");
        return cf(af(this.T.map(function(a) {
            return a.aa()
        })).then(function() {
            a.Aa = ih("BlogArchive");
            V(a.a, "Finished initializing archive.");
            return Xe()
        }), function(b) {
            U(a.a, "Error initializing archive. Uncaught exception.", b instanceof Error ? b : null);
            return a.b().then(function() {
                return Ye()
            })
        })
    };
    jh.prototype.b = function() {
        var a = this;
        return (this.T && af(this.T.map(function(a) {
            return a.b()
        })) || Xe()).then(function() {
            a.Aa && a.Aa.forEach(function(a) {
                return a.b()
            });
            a.T = null;
            a.Aa = null
        })
    };
    var kh = function() {
        this.a = K("blogger.templates.responsive.AsyncCss");
        "loading" != document.readyState ? this.td() : P(window, "load", this.td)
    };
    kh.prototype.td = function() {
        this.a && V(this.a, "Initializing async CSS.");
        for (var a = ba(Array.prototype.slice.call(document.getElementsByTagName("link"), 0)), b = a.next(); !b.done; b = a.next())
            b = b.value, "true" == b.getAttribute("data-async-css") && "none" == b.getAttribute("media") && b.setAttribute("media", "all");
        this.a && V(this.a, "Finished initializing async CSS.")
    };
    kh.prototype.b = function() {
        ue(window, "load", this.td)
    };
    var lh = function(a, b) {
        this.a = K("blogger.templates.responsive.AvatarReplacer");
        V(this.a, "Initializing avatar replacer.");
        this.jd = D();
        var c;
        if (!(c = a)) {
            c = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            L.add(c, "svg-icon-24");
            L.add(c, "avatar-icon");
            var d = document.createElementNS("http://www.w3.org/2000/svg", "use");
            d.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "/responsive/sprite_v1_6.css.svg#ic_person_black_24dp");
            c.appendChild(d)
        }
        this.wg = c;
        this.Ng = b || /(?:https?:)?\/\/img[12]\.blogblog\.com\/img\/blank\.gif/;
        V(this.a, "Finished initializing avatar replacer.")
    };
    lh.prototype.replace = function() {
        for (var a = document.querySelectorAll("#comments .comment .avatar-image-container"), b = 0; a && b < a.length; b++) {
            var c = Gc(this.jd.f, "img", null, a[b]);
            for (var d = 0; c && d < c.length; d++)
                if (c[d].src && this.Ng.test(c[d].src)) {
                    this.jd.removeNode(c[d]);
                    var e = this.wg.cloneNode(!0);
                    this.jd.appendChild(a[b], e)
                }
        }
    };
    var mh = function() {
        var a = document.createElement("img");
        //a.src = "https://lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=w35";
        a.src = "";
        L.add(a, "blogger-icon");
        return new lh(a, /(?:https?:)?\/\/img[12]\.blogblog\.com\/img\/b16-rounded\.gif/)
    };
    var nh = function(a) {
        this.Da = a
    };
    nh.prototype.show = function() {
        this.Da && L.remove(this.Da, "hidden")
    };
    nh.prototype.Lb = function() {
        this.Da && L.add(this.Da, "hidden")
    };
    nh.prototype.V = function() {
        this.Da && (this.Da.parentNode.removeChild(this.Da), this.Da = null)
    };
    var oh = function(a, b, c) {
        c = Qc("DIV", ["loading-spinner-large", "mspin-" + c + "-large", "hidden"], Qc("DIV", "", Qc("DIV")));
        Tc(document.body, c);
        c.style.left = a - 24 + "px";
        c.style.top = b - 24 + "px";
        return new nh(c)
    };
    var ph = !w && !Db(),
        qh = function(a) {
            return /-[a-z]/.test("resized") ? !1 : ph && a.dataset ? "resized" in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + "resized".replace(/([A-Z])/g, "-$1").toLowerCase()) : !!a.getAttribute("data-" + "resized".replace(/([A-Z])/g, "-$1").toLowerCase())
        };
    var sh = function() {
            var a = this;
            this.qd = this.pd = this.W = null;
            var b = document.getElementById("comment-editor"),
                c = document.querySelector(".page_body .centered-bottom");
            b && c && window.addEventListener && (qh(b) || this.W || (this.W = rh(), this.W.show()), this.pd = P(b, "iframeMoved", function() {
                a.W && a.W.V();
                a.W = rh();
                a.W.show();
                for (var c = document.querySelectorAll(".comment-actions"), e = 0; e < c.length; e++)
                    L.remove(c[e], "invisible");
                (c = (c = $c(b)) && c.querySelector(".comment-actions")) && L.add(c, "invisible")
            }), this.qd = P(window, "message",
            function(b) {
                b = b.ja.data;
                p(b) && 0 == b.indexOf("set-comment-editor-height") && a.W && (a.W.V(), a.W = null)
            }))
        },
        rh = function() {
            var a = document.getElementById("comment-editor"),
                b = document.querySelector(".page_body .centered-bottom");
            if (a && b) {
                b = a.getBoundingClientRect();
                a = b.left + window.pageXOffset + b.width / 2;
                b = b.top + window.pageYOffset + b.height / 2;
                var c = document.querySelector(".centered-bottom .sharing-button");
                c = "rgb(255,255,255)" == (c && window.getComputedStyle(c).getPropertyValue("fill")) ? "white" : "grey_54";
                var d = oh(a,
                b, c);
                setTimeout(function() {
                    d && d.V()
                }, 1E4);
                return d
            }
            return null
        };
    sh.prototype.b = function() {
        this.W && (this.W.V(), this.W = null);
        this.pd && Q(this.pd);
        this.qd && Q(this.qd)
    };
    var th = function() {
        this.a = K("blogger.templates.responsive.Labels");
        V(this.a, "Initializing labels.");
        try {
            this.T = gh(".widget.Label"), this.T.map(function(a) {
                return a.aa()
            }), this.Aa = ih("Label"), V(this.a, "Finished initializing labels.")
        } catch (a) {
            U(this.a, "Error initializing labels. Uncaught exception.", a), this.b()
        }
    };
    th.prototype.b = function() {
        this.T && this.T.forEach(function(a) {
            return a.b()
        });
        this.Aa && this.Aa.forEach(function(a) {
            return a.b()
        });
        this.Aa = this.T = null
    };
    var uh = function() {};
    uh.prototype.ae = null;
    var wh = function(a) {
        var b;
        (b = a.ae) || (b = {}, vh(a) && (b[0] = !0, b[1] = !0), b = a.ae = b);
        return b
    };
    var xh,
        yh = function() {};
    t(yh, uh);
    var zh = function(a) {
            return (a = vh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        vh = function(a) {
            if (!a.we && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.we = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.we
        };
    xh = new yh;
    var Ah = function(a) {
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
        Bh = function(a, b) {
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
                d = Ah(a);
                e = d.length;
                for (var f = 0; f < e; f++)
                    b.call(void 0, d[f], c && c[f], a)
            }
        };
    var Ch = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    var X = function(a) {
        S.call(this);
        this.headers = new rg;
        this.Xc = a || null;
        this.wa = !1;
        this.Wc = this.g = null;
        this.Nb = this.Be = this.Ob = "";
        this.Oa = this.sd = this.uc = this.kd = !1;
        this.Xb = 0;
        this.Pc = null;
        this.Oe = "";
        this.Sc = this.sg = this.kf = !1
    };
    t(X, S);
    X.prototype.a = K("goog.net.XhrIo");
    var Dh = /^https?$/i,
        Eh = ["POST", "PUT"],
        Fh = [],
        Gh = function(a, b) {
            var c = new X;
            Fh.push(c);
            b && c.w("complete", b);
            c.yd("ready", c.Ef);
            c.send(a, "HEAD", void 0, void 0)
        };
    X.prototype.Ef = function() {
        this.pa();
        ab(Fh, this)
    };
    X.prototype.send = function(a, b, c, d) {
        if (this.g)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Ob + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.Ob = a;
        this.Nb = "";
        this.Be = b;
        this.kd = !1;
        this.wa = !0;
        this.g = this.Xc ? zh(this.Xc) : zh(xh);
        this.Wc = this.Xc ? wh(this.Xc) : wh(xh);
        this.g.onreadystatechange = q(this.He, this);
        this.sg && "onprogress" in this.g && (this.g.onprogress = q(function(a) {
            this.Ge(a, !0)
        }, this), this.g.upload && (this.g.upload.onprogress = q(this.Ge, this)));
        try {
            qf(this.a, Hh(this, "Opening Xhr")),
            this.sd = !0, this.g.open(b, String(a), !0), this.sd = !1
        } catch (f) {
            qf(this.a, Hh(this, "Error opening Xhr: " + f.message));
            Ih(this, f);
            return
        }
        a = c || "";
        var e = this.headers.clone();
        d && Bh(d, function(a, b) {
            e.set(b, a)
        });
        d = Ya(e.lb());
        c = l.FormData && a instanceof l.FormData;
        !$a(Eh, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(a, b) {
            this.g.setRequestHeader(b, a)
        }, this);
        this.Oe && (this.g.responseType = this.Oe);
        "withCredentials" in this.g && this.g.withCredentials !== this.kf && (this.g.withCredentials =
        this.kf);
        try {
            Jh(this), 0 < this.Xb && (this.Sc = Kh(this.g), qf(this.a, Hh(this, "Will abort after " + this.Xb + "ms if incomplete, xhr2 " + this.Sc)), this.Sc ? (this.g.timeout = this.Xb, this.g.ontimeout = q(this.gf, this)) : this.Pc = nf(this.gf, this.Xb, this)), qf(this.a, Hh(this, "Sending request")), this.uc = !0, this.g.send(a), this.uc = !1
        } catch (f) {
            qf(this.a, Hh(this, "Send error: " + f.message)), Ih(this, f)
        }
    };
    var Kh = function(a) {
            return w && $b(9) && oa(a.timeout) && n(a.ontimeout)
        },
        Xa = function(a) {
            return "content-type" == a.toLowerCase()
        };
    X.prototype.gf = function() {
        "undefined" != typeof na && this.g && (this.Nb = "Timed out after " + this.Xb + "ms, aborting", qf(this.a, Hh(this, this.Nb)), this.dispatchEvent("timeout"), this.abort(8))
    };
    var Ih = function(a, b) {
            a.wa = !1;
            a.g && (a.Oa = !0, a.g.abort(), a.Oa = !1);
            a.Nb = b;
            Lh(a);
            Mh(a)
        },
        Lh = function(a) {
            a.kd || (a.kd = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    X.prototype.abort = function() {
        this.g && this.wa && (qf(this.a, Hh(this, "Aborting")), this.wa = !1, this.Oa = !0, this.g.abort(), this.Oa = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Mh(this))
    };
    X.prototype.u = function() {
        this.g && (this.wa && (this.wa = !1, this.Oa = !0, this.g.abort(), this.Oa = !1), Mh(this, !0));
        X.m.u.call(this)
    };
    X.prototype.He = function() {
        this.Ja || (this.sd || this.uc || this.Oa ? Nh(this) : this.lg())
    };
    X.prototype.lg = function() {
        Nh(this)
    };
    var Nh = function(a) {
        if (a.wa && "undefined" != typeof na)
            if (a.Wc[1] && 4 == Oh(a) && 2 == Ph(a))
                qf(a.a, Hh(a, "Local request error detected and ignored"));
            else if (a.uc && 4 == Oh(a))
                nf(a.He, 0, a);
            else if (a.dispatchEvent("readystatechange"), 4 == Oh(a)) {
                qf(a.a, Hh(a, "Request complete"));
                a.wa = !1;
                try {
                    if (Qh(a))
                        a.dispatchEvent("complete"), a.dispatchEvent("success");
                    else {
                        try {
                            var b = 2 < Oh(a) ? a.g.statusText : ""
                        } catch (c) {
                            qf(a.a, "Can not get status: " + c.message), b = ""
                        }
                        a.Nb = b + " [" + Ph(a) + "]";
                        Lh(a)
                    }
                } finally {
                    Mh(a)
                }
            }
    };
    X.prototype.Ge = function(a, b) {
        u("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
        this.dispatchEvent(Rh(a, "progress"));
        this.dispatchEvent(Rh(a, b ? "downloadprogress" : "uploadprogress"))
    };
    var Rh = function(a, b) {
            return {
                type: b,
                lengthComputable: a.lengthComputable,
                loaded: a.loaded,
                total: a.total
            }
        },
        Mh = function(a, b) {
            if (a.g) {
                Jh(a);
                var c = a.g,
                    d = a.Wc[0] ? pa : null;
                a.g = null;
                a.Wc = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {
                    U(a.a, "Problem encountered resetting onreadystatechange: " + e.message)
                }
            }
        },
        Jh = function(a) {
            a.g && a.Sc && (a.g.ontimeout = null);
            a.Pc && (l.clearTimeout(a.Pc), a.Pc = null)
        },
        Qh = function(a) {
            var b = Ph(a);
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
                    a = String(a.Ob).match(Ch)[1] || null, !a && l.self && l.self.location && (a = l.self.location.protocol, a = a.substr(0, a.length - 1)), b = !Dh.test(a ? a.toLowerCase() : "");
                c = b
            }
            return c
        },
        Oh = function(a) {
            return a.g ? a.g.readyState : 0
        },
        Ph = function(a) {
            try {
                return 2 < Oh(a) ? a.g.status : -1
            } catch (b) {
                return -1
            }
        };
    X.prototype.getResponseHeader = function(a) {
        if (this.g && 4 == Oh(this))
            return a = this.g.getResponseHeader(a), null === a ? void 0 : a
    };
    X.prototype.getAllResponseHeaders = function() {
        return this.g && 4 == Oh(this) ? this.g.getAllResponseHeaders() || "" : ""
    };
    var Hh = function(a, b) {
        return b + " [" + a.Be + " " + a.Ob + " " + Ph(a) + "]"
    };
    var Sh = function() {
            this.a = K("blogger.templates.responsive.SourcesetEnhancer")
        },
        Uh = function() {
            var a = new Sh;
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
                    Th(a, d)
                }
                V(a.a, "Finished initializing sourceset enhancer.")
            } catch (y) {
                U(a.a, "Error enhancing sourcesets.", y)
            }
        },
        Th = function(a, b) {
            var c = b.getAttribute("data-ess");
            Gh(c, function(c) {
                c = c.target;
                if (Qh(c)) {
                    c = String(c.Ob);
                    var d = b.srcset || "";
                    d.trim() && (d += ", ");
                    b.setAttribute("srcset", d + c);
                    V(a.a, "Successfully loaded image " + c + " for image " + b.id)
                }
            });
            V(a.a, "Fetching higher-res image " + c + " for image " + b.id)
        };
    var Vh = function() {
        this.a = K("blogger.templates.responsive.Video")
    };
    ja(Vh, Og);
    Vh.prototype.aa = function() {
        V(this.a, "Initializing video support.");
        window.addEventListener ? window.addEventListener("message", this.Ec, !1) : window.attachEvent("onmessage", this.Ec);
        return Xe()
    };
    Vh.prototype.Ec = function(a) {
        var b = a.data;
        b && "video_resize" === b.name && b.iframe_id && bh().then(function(c) {
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
    Vh.prototype.b = function() {
        window.removeEventListener ? window.removeEventListener("message", this.Ec) : window.detachEvent("onmessage", this.Ec);
        return Xe()
    };
    var Wh = function() {
            this.Ke = Da()
        },
        Xh = null;
    Wh.prototype.set = function(a) {
        this.Ke = a
    };
    Wh.prototype.reset = function() {
        this.set(Da())
    };
    Wh.prototype.get = function() {
        return this.Ke
    };
    var Yh = function(a) {
        this.rg = a || "";
        Xh || (Xh = new Wh);
        this.Gg = Xh
    };
    g = Yh.prototype;
    g.Wd = !0;
    g.Ye = !0;
    g.Eg = !0;
    g.Dg = !0;
    g.$e = !1;
    g.Fg = !1;
    var Zh = function(a) {
            return 10 > a ? "0" + a : String(a)
        },
        $h = function(a, b) {
            var c = (a.ff - b) / 1E3,
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
        ai = function(a) {
            Yh.call(this, a)
        };
    t(ai, Yh);
    var bi = function(a, b) {
        var c = [];
        c.push(a.rg, " ");
        if (a.Ye) {
            var d = new Date(b.ff);
            c.push("[", Zh(d.getFullYear() - 2E3) + Zh(d.getMonth() + 1) + Zh(d.getDate()) + " " + Zh(d.getHours()) + ":" + Zh(d.getMinutes()) + ":" + Zh(d.getSeconds()) + "." + Zh(Math.floor(d.getMilliseconds() / 10)), "] ")
        }
        a.Eg && c.push("[", $h(b, a.Gg.get()), "s] ");
        a.Dg && c.push("[", b.Ce, "] ");
        a.Fg && c.push("[", b.Ra.name, "] ");
        c.push(b.dg);
        a.$e && (d = b.ld) && c.push("\n", d instanceof Error ? d.message : d.toString());
        a.Wd && c.push("\n");
        return c.join("")
    };
    var ci = function() {
            this.tg = q(this.vf, this);
            this.lc = new ai;
            this.lc.Ye = !1;
            this.lc.$e = !1;
            this.ye = this.lc.Wd = !1;
            this.Nf = {}
        },
        ei = function() {
            var a = di;
            if (1 != a.ye) {
                Vd();
                var b = Ud;
                var c = a.tg;
                b.Kb || (b.Kb = []);
                b.Kb.push(c);
                a.ye = !0
            }
        };
    ci.prototype.vf = function(a) {
        function b(a) {
            if (a) {
                if (a.value >= Nd.value)
                    return "error";
                if (a.value >= Od.value)
                    return "warn";
                if (a.value >= Qd.value)
                    return "log"
            }
            return "debug"
        }
        if (!this.Nf[a.Ce]) {
            var c = bi(this.lc, a),
                d = fi;
            d && gi(d, b(a.Ra), c)
        }
    };
    var di = null,
        fi = l.console,
        gi = function(a, b, c) {
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

























    function hi(a, b, c) {
        if (c) {
            var d = document.createDocumentFragment(),
                e = !b.hasAttribute("viewBox") && c.getAttribute("viewBox");
            e && b.setAttribute("viewBox", e);
            for (b = c.cloneNode(!0); b.childNodes.length;)
                d.appendChild(b.firstChild);
            a.appendChild(d)
        }
    }
    function ii(a) {
        a.onreadystatechange = function() {
            if (4 === a.readyState) {
                var b = a.rf;
                b || (b = a.rf = document.implementation.createHTMLDocument(""), b.body.innerHTML = a.responseText, a.Ud = {});
                a.Vd.splice(0).map(function(c) {
                    var d = a.Ud[c.id];
                    d || (d = a.Ud[c.id] = b.getElementById(c.id));
                    hi(c.parent, c.Hg, d)
                })
            }
        };
        a.onreadystatechange()
    }
    function ji() {
        return "undefined" != typeof LEGACY_SUPPORT && LEGACY_SUPPORT
    }
    var ki = function() {
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
                    if (ji() && d) {
                        var r = document.createElement("img");
                        r.style.cssText = "display:inline-block;height:100%;width:100%";
                        r.setAttribute("width", k.getAttribute("width") || k.clientWidth);
                        r.setAttribute("height", k.getAttribute("height") || k.clientHeight);
                        r.src = c(m, k, f);
                        h.replaceChild(r, f)
                    } else
                        x && (!b.Pg || b.Pg(m, k, f) ? (h.removeChild(f), m = m.split("#"), f = m.shift(), m = m.join("#"), f.length ? (r = y[f], r || (r = y[f] = new XMLHttpRequest, r.open("GET", f), r.send(), r.Vd = []), r.Vd.push({
                            parent: h,
                            Hg: k,
                            id: m
                        }), ii(r)) : hi(h, k, document.getElementById(m))) : (++e, ++M))
                } else
                    ++e
            }
            if (!E.length || 0 < E.length - M)
                window.requestAnimationFrame ? window.requestAnimationFrame(a) : setTimeout(a, 67)
        }
        var b = Object(void 0);
        if (ji()) {
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
        var x = "polyfill" in b ? b.Si : ji() ? e.test(navigator.userAgent) || f.test(navigator.userAgent) || 10547 > (navigator.userAgent.match(k) || [])[1] || 537 > (navigator.userAgent.match(h) || [])[1] || m.test(navigator.userAgent) && r : f.test(navigator.userAgent) ||
        10547 > (navigator.userAgent.match(k) || [])[1] || 537 > (navigator.userAgent.match(h) || [])[1] || m.test(navigator.userAgent) && r;
        var y = {},
            E = document.getElementsByTagName("use"),
            M = 0;
        x && a()
    };
    var ni = function() {
            var a = this;
            l.console && (di || (di = new ci), l.location && -1 != l.location.href.indexOf("Debug=true") && ei());
            this.Sa = K("blogger.templates.responsive.Template");
            try {
                V(this.Sa, "Initializing responsive template."), this.fd = new sh, this.archive = new jh, cf(this.archive.aa(), function(b) {
                    return li(a, b)
                }), this.T = gh(".widget.collapsible"), this.labels = new th, Uh(), (new lh).replace(), mh().replace(), ki(), this.ad = new kh, mi(), this.Tc = new Vh, cf(this.Tc.aa(), function(b) {
                    return li(a, b)
                }), V(this.Sa, "Finished initializing responsive template.")
            } catch (b) {
                li(this,
                b), this.b()
            }
        },
        li = function(a, b) {
            a.Sa && U(a.Sa, "Error initializing responsive template. Uncaught exception.", b)
        },
        mi = function() {
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
    ni.prototype.b = function() {
        var a = this;
        return (this.T && af(this.T.map(function(a) {
            return a.b()
        })) || Xe()).then(function() {
            a.archive && a.archive.b();
            a.labels && a.labels.b();
            a.fd && a.fd.b();
            a.ad && a.ad.b();
            a.Tc && a.Tc.b();
            a.archive = null;
            a.labels = null;
            a.fd = null;
            a.ad = null;
            a.Tc = null
        })
    };
    var oi = function() {
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
    var pi = function(a) {
        return function() {
            L.toggle(a, "sidebar-invisible")
        }
    };
    function qi(a, b) {
        var c = function(a) {
            var b = 0;
            do b += a.offsetTop;
            while (a = a.offsetParent);
            return b
        };
        Math.abs(c(a) - c(b)) >= window.innerHeight ? L.remove(a, "invisible") : L.add(a, "invisible")
    }
    ;
    var ri = function(a, b) {
        S.call(this);
        a && (this.yc && this.detach(), this.c = a, this.xc = P(this.c, "keypress", this, b), this.vd = P(this.c, "keydown", this.Jb, b, this), this.yc = P(this.c, "keyup", this.Qf, b, this))
    };
    t(ri, S);
    g = ri.prototype;
    g.c = null;
    g.xc = null;
    g.vd = null;
    g.yc = null;
    g.P = -1;
    g.ka = -1;
    g.$c = !1;
    var si = {
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
        ti = {
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
        ui = !A || $b("525"),
        vi = Nb && z;
    g = ri.prototype;
    g.Jb = function(a) {
        if (A || Lb)
            if (17 == this.P && !a.ctrlKey || 18 == this.P && !a.altKey || Nb && 91 == this.P && !a.metaKey)
                this.ka = this.P = -1;
        -1 == this.P && (a.ctrlKey && 17 != a.keyCode ? this.P = 17 : a.altKey && 18 != a.keyCode ? this.P = 18 : a.metaKey && 91 != a.keyCode && (this.P = 91));
        ui && !Nf(a.keyCode, this.P, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.ka = Mf(a.keyCode), vi && (this.$c = a.altKey))
    };
    g.Qf = function(a) {
        this.ka = this.P = -1;
        this.$c = a.altKey
    };
    g.handleEvent = function(a) {
        var b = a.ja,
            c = b.altKey;
        if (w && "keypress" == a.type) {
            var d = this.ka;
            var e = 13 != d && 27 != d ? b.keyCode : 0
        } else
            (A || Lb) && "keypress" == a.type ? (d = this.ka, e = 0 <= b.charCode && 63232 > b.charCode && Lf(d) ? b.charCode : 0) : Kb && !A ? (d = this.ka, e = Lf(d) ? b.keyCode : 0) : ("keypress" == a.type ? (vi && (c = this.$c), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.ka, e = b.charCode) : (d = b.keyCode || this.ka, e = b.charCode || 0)) : (d = b.keyCode || this.ka, e = b.charCode || 0), Nb && 63 == e && 224 == d && (d = 191));
        var f = d = Mf(d);
        d ? 63232 <=
        d && d in si ? f = si[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in ti && (f = ti[b.keyIdentifier]);
        z && ui && "keypress" == a.type && !Nf(f, this.P, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.P, this.P = f, b = new wi(f, e, a, b), b.altKey = c, this.dispatchEvent(b))
    };
    g.h = function() {
        return this.c
    };
    g.detach = function() {
        this.xc && (Q(this.xc), Q(this.vd), Q(this.yc), this.yc = this.vd = this.xc = null);
        this.c = null;
        this.ka = this.P = -1
    };
    g.u = function() {
        ri.m.u.call(this);
        this.detach()
    };
    var wi = function(a, b, c, d) {
        $d.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    };
    t(wi, $d);
    var yi = function(a, b, c) {
        S.call(this);
        this.target = a;
        this.handle = b || a;
        this.Bc = c || new hd(NaN, NaN, NaN, NaN);
        this.f = C(a);
        this.ia = new Ae(this);
        a = Ca(Xd, this.ia);
        this.Ja ? n(void 0) ? a.call(void 0) : a() : (this.Ta || (this.Ta = []), this.Ta.push(n(void 0) ? q(a, void 0) : a));
        this.deltaY = this.deltaX = this.df = this.cf = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.je = !0;
        this.Ka = !1;
        this.Je = !0;
        this.ue = 0;
        this.Td = this.Uf = !1;
        P(this.handle, ["touchstart", "mousedown"], this.bf, !1, this);
        this.Rc = xi
    };
    t(yi, S);
    var xi = l.document && l.document.documentElement && !!l.document.documentElement.setCapture && !!l.document.releaseCapture;
    yi.prototype.Ba = function() {
        return this.ia
    };
    yi.prototype.u = function() {
        yi.m.u.call(this);
        ue(this.handle, ["touchstart", "mousedown"], this.bf, !1, this);
        this.ia.ba();
        this.Rc && this.f.releaseCapture();
        this.handle = this.target = null
    };
    var zi = function(a) {
        n(a.Ed) || (a.Ed = xd(a.target));
        return a.Ed
    };
    yi.prototype.bf = function(a) {
        var b = "mousedown" == a.type;
        if (!this.je || this.Ka || b && (!(bd ? 0 == a.ja.button : "click" == a.type || a.ja.button & ae[0]) || A && Nb && a.ctrlKey))
            this.dispatchEvent("earlycancel");
        else {
            if (0 == this.ue)
                if (this.dispatchEvent(new Ai("start", this, a.clientX, a.clientY, a)))
                    this.Ka = !0, this.Je && b && a.preventDefault();
                else
                    return;
            else
                this.Je && b && a.preventDefault();
            b = this.f;
            var c = b.documentElement,
                d = !this.Rc;
            this.ia.w(b, ["touchmove", "mousemove"], this.Rf, {
                capture: d,
                passive: !1
            });
            this.ia.w(b, ["touchend",
            "mouseup"], this.kc, d);
            this.Rc ? (c.setCapture(!1), this.ia.w(c, "losecapture", this.kc)) : this.ia.w(Oc(b), "blur", this.kc);
            w && this.Uf && this.ia.w(b, "dragstart", Zd);
            this.zg && this.ia.w(this.zg, "scroll", this.og, d);
            this.clientX = this.cf = a.clientX;
            this.clientY = this.df = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            this.Td ? (a = this.target, b = a.offsetLeft, c = a.offsetParent, c || "fixed" != md(a) || (c = C(a).documentElement), c ? (z && !$b(58) ? (d = Dd(c), b += d.left) : bc(8) && !bc(9) && (d = Dd(c), b -= d.left), a = xd(c) ? c.clientWidth -
            (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
            this.deltaX = a;
            this.deltaY = this.target.offsetTop;
            this.Bd = Nc(D(this.f).f)
        }
    };
    yi.prototype.kc = function(a, b) {
        this.ia.ba();
        this.Rc && this.f.releaseCapture();
        this.Ka ? (this.Ka = !1, this.dispatchEvent(new Ai("end", this, a.clientX, a.clientY, a, Bi(this, this.deltaX), Ci(this, this.deltaY), b || "touchcancel" == a.type))) : this.dispatchEvent("earlycancel")
    };
    yi.prototype.Rf = function(a) {
        if (this.je) {
            var b = (this.Td && zi(this) ? -1 : 1) * (a.clientX - this.clientX),
                c = a.clientY - this.clientY;
            this.clientX = a.clientX;
            this.clientY = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            if (!this.Ka) {
                var d = this.cf - this.clientX,
                    e = this.df - this.clientY;
                if (d * d + e * e > this.ue)
                    if (this.dispatchEvent(new Ai("start", this, a.clientX, a.clientY, a)))
                        this.Ka = !0;
                    else {
                        this.Ja || this.kc(a);
                        return
                    }
            }
            c = Di(this, b, c);
            b = c.x;
            c = c.y;
            this.Ka && this.dispatchEvent(new Ai("beforedrag", this, a.clientX, a.clientY,
            a, b, c)) && (Ei(this, a, b, c), a.preventDefault())
        }
    };
    var Di = function(a, b, c) {
        var d = Nc(D(a.f).f);
        b += d.x - a.Bd.x;
        c += d.y - a.Bd.y;
        a.Bd = d;
        a.deltaX += b;
        a.deltaY += c;
        return new B(Bi(a, a.deltaX), Ci(a, a.deltaY))
    };
    yi.prototype.og = function(a) {
        var b = Di(this, 0, 0);
        a.clientX = this.clientX;
        a.clientY = this.clientY;
        Ei(this, a, b.x, b.y)
    };
    var Ei = function(a, b, c, d) {
            a.Td && zi(a) ? a.target.style.right = c + "px" : a.target.style.left = c + "px";
            a.target.style.top = d + "px";
            a.dispatchEvent(new Ai("drag", a, b.clientX, b.clientY, b, c, d))
        },
        Bi = function(a, b) {
            var c = a.Bc,
                d = isNaN(c.left) ? null : c.left;
            c = isNaN(c.width) ? 0 : c.width;
            return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
        },
        Ci = function(a, b) {
            var c = a.Bc,
                d = isNaN(c.top) ? null : c.top;
            c = isNaN(c.height) ? 0 : c.height;
            return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
        },
        Ai = function(a,
        b, c, d, e, f, h) {
            O.call(this, a);
            this.clientX = c;
            this.clientY = d;
            this.left = n(f) ? f : b.deltaX;
            this.top = n(h) ? h : b.deltaY
        };
    t(Ai, O);
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
    var Fi = [[], []],
        Gi = 0,
        Hi = !1,
        Ii = 0,
        Ki = function(a, b) {
            var c = Ii++,
                d = {
                    ag: {
                        id: c,
                        ra: a.measure,
                        context: b
                    },
                    fg: {
                        id: c,
                        ra: a.eg,
                        context: b
                    },
                    state: {},
                    S: void 0,
                    vc: !1
                };
            return function() {
                0 < arguments.length ? (d.S || (d.S = []), d.S.length = 0, d.S.push.apply(d.S, arguments), d.S.push(d.state)) : d.S && 0 != d.S.length ? (d.S[0] = d.state, d.S.length = 1) : d.S = [d.state];
                d.vc || (d.vc = !0, Fi[Gi].push(d));
                Hi || (Hi = !0, window.requestAnimationFrame(Ji))
            }
        },
        Ji = function() {
            Hi = !1;
            var a = Fi[Gi],
                b = a.length;
            Gi = (Gi + 1) % 2;
            for (var c, d = 0; d < b; ++d) {
                c = a[d];
                var e = c.ag;
                c.vc =
                !1;
                e.ra && e.ra.apply(e.context, c.S)
            }
            for (d = 0; d < b; ++d)
                c = a[d], e = c.fg, c.vc = !1, e.ra && e.ra.apply(e.context, c.S), c.state = {};
            a.length = 0
        };
    var Li = w ? pc(lc(new kc(ic, 'javascript:""'))) : pc(lc(new kc(ic, "about:blank"))),
        Mi = oc(Li),
        Ni = w ? pc(lc(new kc(ic, 'javascript:""'))) : pc(lc(new kc(ic, "javascript:undefined")));
    oc(Ni);
    var Oi = function(a) {
        S.call(this);
        this.c = a;
        a = w ? "focusout" : "blur";
        this.Yf = P(this.c, w ? "focusin" : "focus", this, !w);
        this.Zf = P(this.c, a, this, !w)
    };
    t(Oi, S);
    Oi.prototype.handleEvent = function(a) {
        var b = new $d(a.ja);
        b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
        this.dispatchEvent(b)
    };
    Oi.prototype.u = function() {
        Oi.m.u.call(this);
        Q(this.Yf);
        Q(this.Zf);
        delete this.c
    };
    var Pi = function() {};
    Pi.ud = void 0;
    Pi.Of = function() {
        return Pi.ud ? Pi.ud : Pi.ud = new Pi
    };
    Pi.prototype.gg = 0;
    Pi.prototype.Tf = "";
    var Qi = function(a) {
        return a.Tf + ":" + (a.gg++).toString(36)
    };
    var Si = function(a) {
        S.call(this);
        this.qa = a || D();
        this.Ed = Ri;
        this.tc = null;
        this.$ = !1;
        this.c = null;
        this.Ca = void 0;
        this.gc = this.ya = this.A = null;
        this.Qg = !1
    };
    t(Si, S);
    Si.prototype.ve = Pi.Of();
    var Ri = null;
    g = Si.prototype;
    g.h = function() {
        return this.c
    };
    g.Ba = function() {
        this.Ca || (this.Ca = new Ae(this));
        return u(this.Ca)
    };
    g.getParent = function() {
        return this.A
    };
    g.Fd = function(a) {
        if (this.A && this.A != a)
            throw Error("Method not supported");
        Si.m.Fd.call(this, a)
    };
    g.B = function() {
        return this.qa
    };
    g.N = function() {
        this.c = this.qa.createElement("DIV")
    };
    g.Rb = function() {
        if (this.$)
            throw Error("Component already rendered");
        this.c || this.N();
        this.qa.f.body.appendChild(this.c);
        this.A && !this.A.$ || this.jb()
    };
    g.jb = function() {
        this.$ = !0;
        Ti(this, function(a) {
            !a.$ && a.h() && a.jb()
        })
    };
    g.La = function() {
        Ti(this, function(a) {
            a.$ && a.La()
        });
        this.Ca && this.Ca.ba();
        this.$ = !1
    };
    g.u = function() {
        this.$ && this.La();
        this.Ca && (this.Ca.pa(), delete this.Ca);
        Ti(this, function(a) {
            a.pa()
        });
        !this.Qg && this.c && Xc(this.c);
        this.A = this.c = this.gc = this.ya = null;
        Si.m.u.call(this)
    };
    var Ti = function(a, b) {
        a.ya && Ra(a.ya, b, void 0)
    };
    Si.prototype.removeChild = function(a, b) {
        if (a) {
            var c = p(a) ? a : a.tc || (a.tc = Qi(a.ve));
            if (this.gc && c) {
                var d = this.gc;
                d = (null !== d && c in d ? d[c] : void 0) || null
            } else
                d = null;
            a = d;
            if (c && a) {
                d = this.gc;
                c in d && delete d[c];
                ab(this.ya, a);
                b && (a.La(), a.c && Xc(a.c));
                c = a;
                if (null == c)
                    throw Error("Unable to set parent component");
                c.A = null;
                Si.m.Fd.call(c, null)
            }
        }
        if (!a)
            throw Error("Child is not in parent component");
        return a
    };
    var Ui = function(a, b) {
        this.c = a;
        this.qa = b
    };
    var Vi = function(a, b) {
        Si.call(this, b);
        this.Og = !!a;
        this.rb = null;
        this.Ne = Ki({
            eg: this.Kc
        }, this)
    };
    t(Vi, Si);
    g = Vi.prototype;
    g.nd = null;
    g.Uc = !1;
    g.M = null;
    g.K = null;
    g.ca = null;
    g.dd = !1;
    g.nc = function() {
        return "goog-modalpopup"
    };
    g.mc = function() {
        return this.M
    };
    g.N = function() {
        Vi.m.N.call(this);
        var a = this.h();
        u(a);
        L.addAll(a, db(this.nc()).split(" "));
        a.tabIndex = 0;
        I(a, !1);
        this.Og && !this.K && (this.K = this.B().N("IFRAME", {
            frameborder: 0,
            style: "border:0;vertical-align:bottom;",
            src: Mi
        }), this.K.className = this.nc() + "-bg", I(this.K, !1), wd(this.K, 0));
        this.M || (this.M = this.B().N("DIV", this.nc() + "-bg"), I(this.M, !1));
        this.ca || (this.ca = this.B().createElement("SPAN"), I(this.ca, !1), this.ca.tabIndex = 0, this.ca.style.position = "absolute")
    };
    g.Me = function() {
        this.dd = !1
    };
    g.jb = function() {
        u(!!this.M, "Background element must not be null.");
        this.K && Vc(this.K, this.h());
        Vc(this.M, this.h());
        Vi.m.jb.call(this);
        Wc(this.ca, this.h());
        this.nd = new Oi(this.B().f);
        this.Ba().w(this.nd, "focusin", this.jg);
        Wi(this, !1)
    };
    g.La = function() {
        this.I() && this.D(!1);
        Xd(this.nd);
        Vi.m.La.call(this);
        Xc(this.K);
        Xc(this.M);
        Xc(this.ca)
    };
    g.D = function(a) {
        u(this.$, "ModalPopup must be rendered first.");
        a != this.Uc && (this.Xa && this.Xa.stop(), this.fb && this.fb.stop(), this.Wa && this.Wa.stop(), this.eb && this.eb.stop(), this.$ && Wi(this, a), a ? this.Id() : this.pb())
    };
    var Wi = function(a, b) {
        if (!a.De) {
            var c = a.c;
            u(c, "Can not call getElementStrict before rendering/decorating.");
            a.De = new Ui(c, a.qa)
        }
        c = a.De;
        if (b) {
            c.mb || (c.mb = []);
            for (var d = c.qa.od(c.qa.f.body), e = 0; e < d.length; e++) {
                var f = d[e];
                f == c.c || ng(f, "hidden") || (W(f, "hidden", !0), c.mb.push(f))
            }
        } else if (c.mb) {
            for (e = 0; e < c.mb.length; e++)
                c.mb[e].removeAttribute(mg("hidden"));
            c.mb = null
        }
    };
    Vi.prototype.Ve = function(a, b) {
        this.Xa = a;
        this.Wa = b;
        this.eb = this.fb = void 0
    };
    Vi.prototype.Id = function() {
        if (this.dispatchEvent("beforeshow")) {
            try {
                this.rb = this.B().f.activeElement
            } catch (a) {}
            this.Kc();
            this.L();
            this.Ba().w(ad(this.B()), "resize", this.Kc).w(ad(this.B()), "orientationchange", this.Ne);
            Xi(this, !0);
            this.focus();
            this.Uc = !0;
            this.Xa && this.fb ? (ne(this.Xa, "end", this.Va, !1, this), this.fb.play(), this.Xa.play()) : this.Va()
        }
    };
    Vi.prototype.pb = function() {
        if (this.dispatchEvent("beforehide")) {
            this.Ba().$b(ad(this.B()), "resize", this.Kc).$b(ad(this.B()), "orientationchange", this.Ne);
            this.Uc = !1;
            this.Wa && this.eb ? (ne(this.Wa, "end", this.sb, !1, this), this.eb.play(), this.Wa.play()) : this.sb();
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
    var Xi = function(a, b) {
        a.K && I(a.K, b);
        a.M && I(a.M, b);
        I(a.h(), b);
        I(a.ca, b)
    };
    g = Vi.prototype;
    g.Va = function() {
        this.dispatchEvent("show")
    };
    g.sb = function() {
        Xi(this, !1);
        this.dispatchEvent("hide")
    };
    g.I = function() {
        return this.Uc
    };
    g.focus = function() {
        this.ke()
    };
    g.Kc = function() {
        this.K && I(this.K, !1);
        this.M && I(this.M, !1);
        var a = this.B().f,
            b = Lc(Oc(a) || window || window),
            c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth));
        a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
        this.K && (I(this.K, !0), td(this.K, c, a));
        this.M && (I(this.M, !0), td(this.M, c, a))
    };
    g.L = function() {
        var a = this.B().f,
            b = Oc(a) || window;
        if ("fixed" == md(this.h()))
            var c = a = 0;
        else
            c = Nc(this.B().f), a = c.x, c = c.y;
        var d = vd(this.h());
        b = Lc(b || window);
        a = Math.max(a + b.width / 2 - d.width / 2, 0);
        c = Math.max(c + b.height / 2 - d.height / 2, 0);
        od(this.h(), a, c);
        od(this.ca, a, c)
    };
    g.jg = function(a) {
        this.dd ? this.Me() : a.target == this.ca && nf(this.ke, 0, this)
    };
    g.ke = function() {
        try {
            w && this.B().f.body.focus(), this.h().focus()
        } catch (a) {}
    };
    g.u = function() {
        Xd(this.Xa);
        this.Xa = null;
        Xd(this.Wa);
        this.Wa = null;
        Xd(this.fb);
        this.fb = null;
        Xd(this.eb);
        this.eb = null;
        Vi.m.u.call(this)
    };
    var Z = function(a, b, c) {
        Vi.call(this, b, c);
        this.oa = a || "modal-dialog";
        this.fa = Y(Y(new Yi, Zi, !0), $i, !1, !0)
    };
    t(Z, Vi);
    g = Z.prototype;
    g.Kf = !0;
    g.pe = !0;
    g.zd = !0;
    g.he = !0;
    g.bd = .5;
    g.Jg = "";
    g.gd = null;
    g.za = null;
    g.ge = !1;
    g.zb = null;
    g.Yb = null;
    g.hf = null;
    g.ua = null;
    g.ic = null;
    g.ea = null;
    g.Ie = "dialog";
    g.nc = function() {
        return this.oa
    };
    g.Ue = function(a) {
        if (!(a instanceof wc)) {
            if (!(a instanceof wc)) {
                var b = "object" == typeof a,
                    c = null;
                b && a.rd && (c = a.oc());
                a = yc(lb(b && a.Na ? a.Ma() : String(a)), c)
            }
            a = yc(xc(a).replace(/(\r\n|\r|\n)/g, "<br>"), a.oc())
        }
        this.gd = a;
        this.ic && Cc(this.ic, a)
    };
    g.mc = function() {
        this.h() || this.Rb();
        return Z.m.mc.call(this)
    };
    var aj = function(a, b) {
            a.zd = b;
            if (a.$) {
                var c = a.B(),
                    d = a.mc(),
                    e = a.K;
                b ? (e && c.xe(e, a.h()), c.xe(d, a.h())) : (c.removeNode(e), c.removeNode(d))
            }
            a.I() && Wi(a, b)
        },
        bj = function(a, b) {
            var c = db(a.oa + "-title-draggable").split(" ");
            a.h() && (b ? L.addAll(u(a.zb), c) : L.ba(u(a.zb), c));
            b && !a.za ? (a.za = new yi(a.h(), a.zb), L.addAll(u(a.zb), c), P(a.za, "start", a.Ag, !1, a)) : !b && a.za && (a.za.pa(), a.za = null)
        };
    g = Z.prototype;
    g.N = function() {
        Z.m.N.call(this);
        var a = this.h();
        u(a, "getElement() returns null");
        var b = this.B();
        this.zb = b.N("DIV", this.oa + "-title", this.Yb = b.N("SPAN", {
            className: this.oa + "-title-text",
            id: this.tc || (this.tc = Qi(this.ve))
        }, this.Jg), this.ua = b.N("SPAN", this.oa + "-title-close"));
        Uc(a, this.zb, this.ic = b.N("DIV", this.oa + "-content"), this.ea = b.N("DIV", this.oa + "-buttons"));
        lg(this.Yb, "heading");
        lg(this.ua, "button");
        this.ua.tabIndex = 0;
        W(this.ua, "label", "Close");
        this.hf = this.Yb.id;
        lg(a, this.Ie);
        W(a, "labelledby", this.hf ||
        "");
        this.gd && Cc(this.ic, this.gd);
        I(this.ua, this.pe);
        this.fa && cj(this.fa, this.ea);
        I(this.ea, !!this.fa);
        this.bd = this.bd;
        this.h() && (a = this.mc()) && wd(a, this.bd)
    };
    g.jb = function() {
        Z.m.jb.call(this);
        this.Ba().w(this.h(), "keydown", this.Qb).w(this.h(), "keypress", this.Qb);
        this.Ba().w(this.ea, "click", this.hg);
        bj(this, this.he);
        this.Ba().w(this.ua, "click", this.pg);
        var a = this.h();
        u(a, "The DOM element for dialog cannot be null");
        lg(a, this.Ie);
        "" !== this.Yb.id && W(a, "labelledby", this.Yb.id);
        this.zd || aj(this, !1)
    };
    g.La = function() {
        this.I() && this.D(!1);
        bj(this, !1);
        Z.m.La.call(this)
    };
    g.D = function(a) {
        a != this.I() && (this.$ || this.Rb(), Z.m.D.call(this, a))
    };
    g.Va = function() {
        Z.m.Va.call(this);
        this.dispatchEvent("aftershow")
    };
    g.sb = function() {
        Z.m.sb.call(this);
        this.dispatchEvent("afterhide");
        this.ge && this.pa()
    };
    g.Ag = function() {
        var a = this.B().f,
            b = Lc(Oc(a) || window || window),
            c = Math.max(a.body.scrollWidth, b.width);
        a = Math.max(a.body.scrollHeight, b.height);
        var d = vd(this.h());
        "fixed" == md(this.h()) ? this.za.Bc = new hd(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)) : this.za.Bc = new hd(0, 0, c - d.width, a - d.height)
    };
    g.pg = function() {
        dj(this)
    };
    var dj = function(a) {
        if (a.pe) {
            var b = a.fa,
                c = b && b.fc;
            c ? (b = b.get(c), a.dispatchEvent(new ej(c, b)) && a.D(!1)) : a.D(!1)
        }
    };
    Z.prototype.u = function() {
        this.ea = this.ua = null;
        Z.m.u.call(this)
    };
    Z.prototype.hg = function(a) {
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
            this.dispatchEvent(new ej(a, b)) && this.D(!1)
        }
    };
    Z.prototype.Qb = function(a) {
        var b = !1,
            c = !1,
            d = this.fa,
            e = a.target;
        if ("keydown" == a.type)
            if (this.Kf && 27 == a.keyCode) {
                var f = d && d.fc;
                e = "SELECT" == e.tagName && !e.disabled;
                f && !e ? (c = !0, b = d.get(f), b = this.dispatchEvent(new ej(f, b))) : e || (b = !0)
            } else {
                if (9 == a.keyCode && a.shiftKey && e == this.h()) {
                    this.dd = !0;
                    try {
                        this.ca.focus()
                    } catch (m) {}
                    nf(this.Me, 0, this)
                }
            }
        else if (13 == a.keyCode) {
            if ("BUTTON" == e.tagName && !e.disabled)
                f = e.name;
            else if (e == this.ua)
                dj(this);
            else if (d) {
                var h = d.jc,
                    k = h && fj(d, h);
                e = ("TEXTAREA" == e.tagName || "SELECT" ==
                e.tagName || "A" == e.tagName) && !e.disabled;
                !k || k.disabled || e || (f = h)
            }
            f && d && (c = !0, b = this.dispatchEvent(new ej(f, String(d.get(f)))))
        } else
            e != this.ua || 32 != a.keyCode && " " != a.key || dj(this);
        if (b || c)
            a.stopPropagation(), a.preventDefault();
        b && this.D(!1)
    };
    var ej = function(a, b) {
        this.type = "dialogselect";
        this.key = a;
        this.caption = b
    };
    t(ej, O);
    var Yi = function(a) {
        this.qa = a || D();
        rg.call(this)
    };
    t(Yi, rg);
    g = Yi.prototype;
    g.oa = "goog-buttonset";
    g.jc = null;
    g.c = null;
    g.fc = null;
    g.clear = function() {
        rg.prototype.clear.call(this);
        this.jc = this.fc = null
    };
    g.set = function(a, b, c, d) {
        rg.prototype.set.call(this, a, b);
        c && (this.jc = a);
        d && (this.fc = a);
        return this
    };
    var Y = function(a, b, c, d) {
            return a.set(b.key, b.caption, c, d)
        },
        cj = function(a, b) {
            a.c = b;
            a.Rb()
        };
    Yi.prototype.Rb = function() {
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
    Yi.prototype.h = function() {
        return this.c
    };
    Yi.prototype.B = function() {
        return this.qa
    };
    var fj = function(a, b) {
            var c = (u(a.c) || document).getElementsByTagName("BUTTON");
            for (var d = 0, e; e = c[d]; d++)
                if (e.name == b || e.id == b)
                    return e;
            return null
        },
        Zi = {
            key: "ok",
            caption: "OK"
        },
        $i = {
            key: "cancel",
            caption: "Cancel"
        },
        gj = {
            key: "yes",
            caption: "Yes"
        },
        hj = {
            key: "no",
            caption: "No"
        },
        ij = {
            key: "save",
            caption: "Save"
        },
        jj = {
            key: "continue",
            caption: "Continue"
        };
    "undefined" != typeof document && (Y(new Yi, Zi, !0, !0), Y(Y(new Yi, Zi, !0), $i, !1, !0), Y(Y(new Yi, gj, !0), hj, !1, !0), Y(Y(Y(new Yi, gj), hj, !0), $i, !1, !0), Y(Y(Y(new Yi, jj), ij), $i, !0, !0));
    var lj = function() {
            this.a = K("blogger.templates.responsive.Sharing");
            V(this.a, "Initializing Sharing.");
            try {
                this.i = new eh;
                this.ub = [];
                this.j = null;
                this.Sb = [];
                kj(this);
                if (this.i.Af) {
                    var a = document.querySelector(".post-share-buttons-top"),
                        b = document.querySelector(".post-share-buttons-bottom");
                    a && b && qi(b, a)
                }
                V(this.a, "Finished initializing sharing.")
            } catch (c) {
                U(this.a, "Error initializing sharing. Uncaught exception.", c), this.b()
            }
        },
        kj = function(a) {
            ch("sharing_native").then(function(b) {
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
                        c.F = new Dg(c.da);
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
                        Bg(c.F);
                        Ag(c.F);
                        var h = a.i.af && a.i.af(c.F.h()),
                            k = a.i.se && a.i.se(c.F.h());
                        c.F.Ve(h, k);
                        P(window, "resize", e);
                        P(c.R, "click", f);
                        P(c.F, "hide", function(b) {
                            return function() {
                                return a.nb(b.F, b.da, b.va, b.R)
                            }
                        }(c));
                        f = new ri(c.R);
                        P(f, "key", function(b) {
                            return function(c) {
                                return a.Qb(b.F, b.da, b.va, b.R, c)
                            }
                        }(c));
                        f = new ri(c.da);
                        P(f, "key", function(b) {
                            return function(c) {
                                return a.Qb(b.F, b.da, b.va, b.R, c)
                            }
                        }(c));
                        lg(c.R, "button");
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
                        a.Sb.push(e)
                    }
            })
        };
    lj.prototype.ce = function() {
        if (this.ub)
            for (var a = ba(this.ub), b = a.next(); !b.done; b = a.next())
                (b = b.value) && b.D(!1)
    };
    lj.prototype.xb = function(a, b, c, d) {
        b && c && (c.removeChild(b), document.body.appendChild(b), a.D(!1), L.add(d, "sharing-open"), L.remove(b, "hidden"), W(b, "expanded", !0), W(b, "hidden", !1), c = "ltr" == l.document.documentElement.getAttribute("dir") ? 4 : 0, a.Cd = c, a.I() && a.L(), d && (W(d, "expanded", !0), a.setPosition(new Ug(d, c))), a.D(!0), this.i.ie && (this.j = Kf(document.body, null, "sharing-dim-overlay"), this.j.show()), mj(this, b))
    };
    lj.prototype.nb = function(a, b, c, d) {
        b && c && (L.remove(d, "sharing-open"), L.add(b, "hidden"), W(b, "expanded", !1), W(b, "hidden", !0), document.body.removeChild(b), c.appendChild(b), d && W(d, "expanded", !1), this.i.ie && (this.j.V(), this.j = null))
    };
    lj.prototype.Qb = function(a, b, c, d, e) {
        b && c && (38 == e.keyCode || 40 == e.keyCode) && (a.I() || this.xb(a, b, c, d), a = Array.prototype.slice.call(b.querySelectorAll("." + this.i.We)), b = a.indexOf(document.activeElement), b += 40 == e.keyCode ? 1 : -1, b = (b + a.length) % a.length, a[b].focus(), e.preventDefault())
    };
    var mj = function(a, b) {
            if (!L.contains(b, "btns-init")) {
                for (var c = b.querySelectorAll("." + a.i.We), d = q(a.ce, a), e = {}, f = 0; f < c.length; e = {
                    bc: e.bc
                }, f++)
                    e.bc = c[f], function(b) {
                        return function(c) {
                            var e = new ri(c);
                            if (L.contains(c, "sharing-element-link"))
                                nj(a, c), P(e, "key", function(a) {
                                    if (32 == a.keyCode || 13 == a.keyCode)
                                        c.click(), a.preventDefault()
                                });
                            else {
                                var f = function() {
                                    var a = b.bc;
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
                    }(e)(e.bc);
                L.add(b, "btns-init")
            }
        },
        nj = function(a, b) {
            if (b && "undefined" !== typeof Clipboard && Clipboard) {
                var c = new Clipboard(b, {
                        text: function(a) {
                            return a.getAttribute("data-url")
                        }
                    }),
                    d = q(a.ce, a),
                    e = dh("postUrl") || "Post Link";
                c.on("error", function(a) {
                    window.prompt(e, a.trigger.getAttribute("data-url"));
                    d();
                    return !1
                });
                c.on("success", function() {
                    var a = dh("linkCopiedToClipboard") || "Link copied to clipboard.";
                    ch("sharing_get_link_dialog").then(function(b) {
                        if (b &&
                        0 <= oi()) {
                            b = dh("ok") || "Ok";
                            var c = new Z,
                                e = Kf(document.body, function() {
                                    c.D(!1)
                                }, "getlink-dim-overlay");
                            e.show();
                            var f = (new Yi).set(b, b, !0, !0);
                            c.fa = f;
                            c.ea && (c.fa ? cj(c.fa, c.ea) : Cc(c.ea, zc), I(c.ea, !!c.fa));
                            c.Ue(a);
                            c.he = !1;
                            bj(c, !1);
                            c.ge = !0;
                            1 != c.zd && aj(c, !0);
                            c.Rb();
                            L.add(fj(f, b), "flat-button");
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
                pf(a.a, "Clipboard not initialized.")
        };
    lj.prototype.b = function() {
        this.j && (this.j.V(), this.j = null);
        this.ub && Yd(this.ub);
        this.ub = null;
        if (this.Sb)
            for (var a = 0; a < this.Sb.length; a++)
                ue(window, "resize", this.Sb[a]);
        this.Sb = null;
        a = document.querySelectorAll(".sharing .share-buttons .sharing-platform-button");
        for (var b = 0; b < a.length; b++)
            R(a[b], "click");
        a = document.querySelectorAll(".sharing");
        for (b = 0; b < a.length; b++) {
            var c = F("sharing-button", a[b]);
            R(c, "click")
        }
    };
    var oj = function() {
        var a = this;
        this.a = K("blogger.templates.responsive.SidebarToggle");
        V(this.a, "Initializing SidebarToggle.");
        try {
            var b = document.querySelector(".sidebar-container");
            if (b) {
                this.Ld = b;
                var c = this.Ld.parentElement;
                this.j = c && Kf(c, function() {
                    return a.Rd()
                });
                (this.Oc = document.querySelector(".sidebar-back")) && P(this.Oc, "click", this.Rd, !1, this);
                (this.qc = document.querySelector(".centered-top-container .hamburger-menu")) && P(this.qc, "click", this.Rd, !1, this);
                V(this.a, "Finished initializing sidebar toggle.")
            } else
                U(this.a,
                "There was an error initializing the sidebar toggle section. sidebar not found.")
        } catch (d) {
            U(this.a, "Error initializing sidebar toggle. Uncaught exception.", d), this.b()
        }
    };
    oj.prototype.Rd = function() {
        pi(this.Ld)();
        L.contains(this.Ld, "sidebar-invisible") ? (this.j && this.j.Lb(), L.remove(document.body, "sidebar-visible")) : (this.j && this.j.show(), L.add(document.body, "sidebar-visible"))
    };
    oj.prototype.b = function() {
        this.qc && R(this.qc, "click");
        this.Oc && R(this.Oc, "click");
        this.j && (this.j.V(), this.j = null)
    };
    var pj = function() {
        this.Db = "r-snippet-container";
        this.hb = "r-snippetized";
        this.Mf = "r-snippet-fade"
    };
    var qj = function() {
        var a = this;
        this.a = K("blogger.templates.responsive.Snippets");
        V(this.a, "Initializing Snippets.");
        try {
            this.i = new pj, this.ma = new Qg(new Pg(this.i.Db, this.i.hb, function(b, c) {
                return a.Fc(b, c)
            })), V(this.a, "Finished initializing Snippets.")
        } catch (b) {
            U(this.a, "Error initializing Snippets. Uncaught exception.", b), this.b()
        }
    };
    qj.prototype.Fc = function(a, b) {
        var c = F(this.i.Mf, a);
        c && L.enable(c, "hidden", !b)
    };
    qj.prototype.b = function() {
        this.ma && (this.ma.b(), this.ma = null)
    };
    var rj = function(a) {
        ni.call(this);
        a = a || new Ig;
        V(this.Sa, "Initializing fancy template.");
        try {
            this.Yc = new Hg(a.tf);
            this.Ac = new Mg;
            this.Kd = new oj;
            this.Hd = new lj;
            var b = new Sg;
            b.cb = ["collapsed-header-show", "collapsed-header-hide"];
            this.Gc = Zg(b);
            this.Gc.forEach(function(a) {
                return a.aa()
            });
            this.Md = new qj;
            Ng(this.Ac);
            V(this.Sa, "Finished initializing fancy template.")
        } catch (c) {
            U(this.Sa, "Error initializing fancy template. Uncaught exception.", c), this.b()
        }
    };
    ja(rj, ni);
    rj.prototype.b = function() {
        var a = this;
        return ni.prototype.b.call(this).then(function() {
            a.Yc && a.Yc.b();
            a.Ac && a.Ac.b();
            a.Kd && a.Kd.b();
            a.Hd && a.Hd.b();
            a.Gc && a.Gc.forEach(function(a) {
                return a.b()
            });
            a.Md && a.Md.b();
            a.Yc = null;
            a.Ac = null;
            a.Kd = null;
            a.Hd = null;
            a.Gc = null;
            a.Md = null
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
        return new rj
    });
}).call(this);

