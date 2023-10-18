function Nh(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : {
                        enumerable: !0,
                        get: ()=>r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i=>{
        for (const o of i)
            if (o.type === "childList")
                for (const l of o.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
function jh(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var w = {}
  , Oh = {
    get exports() {
        return w
    },
    set exports(e) {
        w = e
    }
}
  , xo = {}
  , k = {}
  , Rh = {
    get exports() {
        return k
    },
    set exports(e) {
        k = e
    }
}
  , I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ei = Symbol.for("react.element")
  , Th = Symbol.for("react.portal")
  , $h = Symbol.for("react.fragment")
  , zh = Symbol.for("react.strict_mode")
  , Ih = Symbol.for("react.profiler")
  , Mh = Symbol.for("react.provider")
  , Lh = Symbol.for("react.context")
  , Dh = Symbol.for("react.forward_ref")
  , Uh = Symbol.for("react.suspense")
  , Ah = Symbol.for("react.memo")
  , Fh = Symbol.for("react.lazy")
  , Na = Symbol.iterator;
function Wh(e) {
    return e === null || typeof e != "object" ? null : (e = Na && e[Na] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Rf = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Tf = Object.assign
  , $f = {};
function Gn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = $f,
    this.updater = n || Rf
}
Gn.prototype.isReactComponent = {};
Gn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Gn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function zf() {}
zf.prototype = Gn.prototype;
function ds(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = $f,
    this.updater = n || Rf
}
var ps = ds.prototype = new zf;
ps.constructor = ds;
Tf(ps, Gn.prototype);
ps.isPureReactComponent = !0;
var ja = Array.isArray
  , If = Object.prototype.hasOwnProperty
  , hs = {
    current: null
}
  , Mf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Lf(e, t, n) {
    var r, i = {}, o = null, l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            If.call(t, r) && !Mf.hasOwnProperty(r) && (i[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1)
        i.children = n;
    else if (1 < u) {
        for (var s = Array(u), a = 0; a < u; a++)
            s[a] = arguments[a + 2];
        i.children = s
    }
    if (e && e.defaultProps)
        for (r in u = e.defaultProps,
        u)
            i[r] === void 0 && (i[r] = u[r]);
    return {
        $$typeof: ei,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: hs.current
    }
}
function Bh(e, t) {
    return {
        $$typeof: ei,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function ms(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ei
}
function Vh(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Oa = /\/+/g;
function sl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Vh("" + e.key) : t.toString(36)
}
function Ni(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var l = !1;
    if (e === null)
        l = !0;
    else
        switch (o) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ei:
            case Th:
                l = !0
            }
        }
    if (l)
        return l = e,
        i = i(l),
        e = r === "" ? "." + sl(l, 0) : r,
        ja(i) ? (n = "",
        e != null && (n = e.replace(Oa, "$&/") + "/"),
        Ni(i, t, n, "", function(a) {
            return a
        })) : i != null && (ms(i) && (i = Bh(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Oa, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (l = 0,
    r = r === "" ? "." : r + ":",
    ja(e))
        for (var u = 0; u < e.length; u++) {
            o = e[u];
            var s = r + sl(o, u);
            l += Ni(o, t, n, s, i)
        }
    else if (s = Wh(e),
    typeof s == "function")
        for (e = s.call(e),
        u = 0; !(o = e.next()).done; )
            o = o.value,
            s = r + sl(o, u++),
            l += Ni(o, t, n, s, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}
function ai(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Ni(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function Hh(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ge = {
    current: null
}
  , ji = {
    transition: null
}
  , bh = {
    ReactCurrentDispatcher: ge,
    ReactCurrentBatchConfig: ji,
    ReactCurrentOwner: hs
};
I.Children = {
    map: ai,
    forEach: function(e, t, n) {
        ai(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ai(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ai(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ms(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
I.Component = Gn;
I.Fragment = $h;
I.Profiler = Ih;
I.PureComponent = ds;
I.StrictMode = zh;
I.Suspense = Uh;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bh;
I.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Tf({}, e.props)
      , i = e.key
      , o = e.ref
      , l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        l = hs.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var u = e.type.defaultProps;
        for (s in t)
            If.call(t, s) && !Mf.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        r.children = n;
    else if (1 < s) {
        u = Array(s);
        for (var a = 0; a < s; a++)
            u[a] = arguments[a + 2];
        r.children = u
    }
    return {
        $$typeof: ei,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: l
    }
}
;
I.createContext = function(e) {
    return e = {
        $$typeof: Lh,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Mh,
        _context: e
    },
    e.Consumer = e
}
;
I.createElement = Lf;
I.createFactory = function(e) {
    var t = Lf.bind(null, e);
    return t.type = e,
    t
}
;
I.createRef = function() {
    return {
        current: null
    }
}
;
I.forwardRef = function(e) {
    return {
        $$typeof: Dh,
        render: e
    }
}
;
I.isValidElement = ms;
I.lazy = function(e) {
    return {
        $$typeof: Fh,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Hh
    }
}
;
I.memo = function(e, t) {
    return {
        $$typeof: Ah,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
I.startTransition = function(e) {
    var t = ji.transition;
    ji.transition = {};
    try {
        e()
    } finally {
        ji.transition = t
    }
}
;
I.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
I.useCallback = function(e, t) {
    return ge.current.useCallback(e, t)
}
;
I.useContext = function(e) {
    return ge.current.useContext(e)
}
;
I.useDebugValue = function() {}
;
I.useDeferredValue = function(e) {
    return ge.current.useDeferredValue(e)
}
;
I.useEffect = function(e, t) {
    return ge.current.useEffect(e, t)
}
;
I.useId = function() {
    return ge.current.useId()
}
;
I.useImperativeHandle = function(e, t, n) {
    return ge.current.useImperativeHandle(e, t, n)
}
;
I.useInsertionEffect = function(e, t) {
    return ge.current.useInsertionEffect(e, t)
}
;
I.useLayoutEffect = function(e, t) {
    return ge.current.useLayoutEffect(e, t)
}
;
I.useMemo = function(e, t) {
    return ge.current.useMemo(e, t)
}
;
I.useReducer = function(e, t, n) {
    return ge.current.useReducer(e, t, n)
}
;
I.useRef = function(e) {
    return ge.current.useRef(e)
}
;
I.useState = function(e) {
    return ge.current.useState(e)
}
;
I.useSyncExternalStore = function(e, t, n) {
    return ge.current.useSyncExternalStore(e, t, n)
}
;
I.useTransition = function() {
    return ge.current.useTransition()
}
;
I.version = "18.2.0";
(function(e) {
    e.exports = I
}
)(Rh);
const ee = jh(k)
  , Jl = Nh({
    __proto__: null,
    default: ee
}, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kh = k
  , Qh = Symbol.for("react.element")
  , Yh = Symbol.for("react.fragment")
  , Xh = Object.prototype.hasOwnProperty
  , Gh = Kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Zh = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Df(e, t, n) {
    var r, i = {}, o = null, l = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
    for (r in t)
        Xh.call(t, r) && !Zh.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Qh,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: Gh.current
    }
}
xo.Fragment = Yh;
xo.jsx = Df;
xo.jsxs = Df;
(function(e) {
    e.exports = xo
}
)(Oh);
var eu = {}
  , $r = {}
  , qh = {
    get exports() {
        return $r
    },
    set exports(e) {
        $r = e
    }
}
  , ze = {}
  , tu = {}
  , Jh = {
    get exports() {
        return tu
    },
    set exports(e) {
        tu = e
    }
}
  , Uf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(j, $) {
        var z = j.length;
        j.push($);
        e: for (; 0 < z; ) {
            var b = z - 1 >>> 1
              , Z = j[b];
            if (0 < i(Z, $))
                j[b] = $,
                j[z] = Z,
                z = b;
            else
                break e
        }
    }
    function n(j) {
        return j.length === 0 ? null : j[0]
    }
    function r(j) {
        if (j.length === 0)
            return null;
        var $ = j[0]
          , z = j.pop();
        if (z !== $) {
            j[0] = z;
            e: for (var b = 0, Z = j.length, Yt = Z >>> 1; b < Yt; ) {
                var Pe = 2 * (b + 1) - 1
                  , yn = j[Pe]
                  , Xt = Pe + 1
                  , si = j[Xt];
                if (0 > i(yn, z))
                    Xt < Z && 0 > i(si, yn) ? (j[b] = si,
                    j[Xt] = z,
                    b = Xt) : (j[b] = yn,
                    j[Pe] = z,
                    b = Pe);
                else if (Xt < Z && 0 > i(si, z))
                    j[b] = si,
                    j[Xt] = z,
                    b = Xt;
                else
                    break e
            }
        }
        return $
    }
    function i(j, $) {
        var z = j.sortIndex - $.sortIndex;
        return z !== 0 ? z : j.id - $.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var l = Date
          , u = l.now();
        e.unstable_now = function() {
            return l.now() - u
        }
    }
    var s = []
      , a = []
      , h = 1
      , v = null
      , p = 3
      , g = !1
      , S = !1
      , d = !1
      , y = typeof setTimeout == "function" ? setTimeout : null
      , c = typeof clearTimeout == "function" ? clearTimeout : null
      , f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(j) {
        for (var $ = n(a); $ !== null; ) {
            if ($.callback === null)
                r(a);
            else if ($.startTime <= j)
                r(a),
                $.sortIndex = $.expirationTime,
                t(s, $);
            else
                break;
            $ = n(a)
        }
    }
    function x(j) {
        if (d = !1,
        m(j),
        !S)
            if (n(s) !== null)
                S = !0,
                lr(E);
            else {
                var $ = n(a);
                $ !== null && vn(x, $.startTime - j)
            }
    }
    function E(j, $) {
        S = !1,
        d && (d = !1,
        c(N),
        N = -1),
        g = !0;
        var z = p;
        try {
            for (m($),
            v = n(s); v !== null && (!(v.expirationTime > $) || j && !L()); ) {
                var b = v.callback;
                if (typeof b == "function") {
                    v.callback = null,
                    p = v.priorityLevel;
                    var Z = b(v.expirationTime <= $);
                    $ = e.unstable_now(),
                    typeof Z == "function" ? v.callback = Z : v === n(s) && r(s),
                    m($)
                } else
                    r(s);
                v = n(s)
            }
            if (v !== null)
                var Yt = !0;
            else {
                var Pe = n(a);
                Pe !== null && vn(x, Pe.startTime - $),
                Yt = !1
            }
            return Yt
        } finally {
            v = null,
            p = z,
            g = !1
        }
    }
    var _ = !1
      , P = null
      , N = -1
      , T = 5
      , O = -1;
    function L() {
        return !(e.unstable_now() - O < T)
    }
    function ce() {
        if (P !== null) {
            var j = e.unstable_now();
            O = j;
            var $ = !0;
            try {
                $ = P(!0, j)
            } finally {
                $ ? Je() : (_ = !1,
                P = null)
            }
        } else
            _ = !1
    }
    var Je;
    if (typeof f == "function")
        Je = function() {
            f(ce)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Qt = new MessageChannel
          , mn = Qt.port2;
        Qt.port1.onmessage = ce,
        Je = function() {
            mn.postMessage(null)
        }
    } else
        Je = function() {
            y(ce, 0)
        }
        ;
    function lr(j) {
        P = j,
        _ || (_ = !0,
        Je())
    }
    function vn(j, $) {
        N = y(function() {
            j(e.unstable_now())
        }, $)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(j) {
        j.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        S || g || (S = !0,
        lr(E))
    }
    ,
    e.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < j ? Math.floor(1e3 / j) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return p
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }
    ,
    e.unstable_next = function(j) {
        switch (p) {
        case 1:
        case 2:
        case 3:
            var $ = 3;
            break;
        default:
            $ = p
        }
        var z = p;
        p = $;
        try {
            return j()
        } finally {
            p = z
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(j, $) {
        switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            j = 3
        }
        var z = p;
        p = j;
        try {
            return $()
        } finally {
            p = z
        }
    }
    ,
    e.unstable_scheduleCallback = function(j, $, z) {
        var b = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay,
        z = typeof z == "number" && 0 < z ? b + z : b) : z = b,
        j) {
        case 1:
            var Z = -1;
            break;
        case 2:
            Z = 250;
            break;
        case 5:
            Z = 1073741823;
            break;
        case 4:
            Z = 1e4;
            break;
        default:
            Z = 5e3
        }
        return Z = z + Z,
        j = {
            id: h++,
            callback: $,
            priorityLevel: j,
            startTime: z,
            expirationTime: Z,
            sortIndex: -1
        },
        z > b ? (j.sortIndex = z,
        t(a, j),
        n(s) === null && j === n(a) && (d ? (c(N),
        N = -1) : d = !0,
        vn(x, z - b))) : (j.sortIndex = Z,
        t(s, j),
        S || g || (S = !0,
        lr(E))),
        j
    }
    ,
    e.unstable_shouldYield = L,
    e.unstable_wrapCallback = function(j) {
        var $ = p;
        return function() {
            var z = p;
            p = $;
            try {
                return j.apply(this, arguments)
            } finally {
                p = z
            }
        }
    }
}
)(Uf);
(function(e) {
    e.exports = Uf
}
)(Jh);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Af = k
  , Te = tu;
function C(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Ff = new Set
  , zr = {};
function dn(e, t) {
    Wn(e, t),
    Wn(e + "Capture", t)
}
function Wn(e, t) {
    for (zr[e] = t,
    e = 0; e < t.length; e++)
        Ff.add(t[e])
}
var dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , nu = Object.prototype.hasOwnProperty
  , em = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Ra = {}
  , Ta = {};
function tm(e) {
    return nu.call(Ta, e) ? !0 : nu.call(Ra, e) ? !1 : em.test(e) ? Ta[e] = !0 : (Ra[e] = !0,
    !1)
}
function nm(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function rm(e, t, n, r) {
    if (t === null || typeof t > "u" || nm(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Se(e, t, n, r, i, o, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = l
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ae[e] = new Se(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ae[t] = new Se(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ae[e] = new Se(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ae[e] = new Se(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ae[e] = new Se(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ae[e] = new Se(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ae[e] = new Se(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ae[e] = new Se(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ae[e] = new Se(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var vs = /[\-:]([a-z])/g;
function ys(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(vs, ys);
    ae[t] = new Se(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(vs, ys);
    ae[t] = new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(vs, ys);
    ae[t] = new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ae[e] = new Se(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ae.xlinkHref = new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ae[e] = new Se(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function gs(e, t, n, r) {
    var i = ae.hasOwnProperty(t) ? ae[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (rm(t, n, i, r) && (n = null),
    r || i === null ? tm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var yt = Af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ci = Symbol.for("react.element")
  , wn = Symbol.for("react.portal")
  , xn = Symbol.for("react.fragment")
  , Ss = Symbol.for("react.strict_mode")
  , ru = Symbol.for("react.profiler")
  , Wf = Symbol.for("react.provider")
  , Bf = Symbol.for("react.context")
  , ws = Symbol.for("react.forward_ref")
  , iu = Symbol.for("react.suspense")
  , ou = Symbol.for("react.suspense_list")
  , xs = Symbol.for("react.memo")
  , xt = Symbol.for("react.lazy")
  , Vf = Symbol.for("react.offscreen")
  , $a = Symbol.iterator;
function ur(e) {
    return e === null || typeof e != "object" ? null : (e = $a && e[$a] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Y = Object.assign, al;
function vr(e) {
    if (al === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            al = t && t[1] || ""
        }
    return `
` + al + e
}
var cl = !1;
function fl(e, t) {
    if (!e || cl)
        return "";
    cl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (a) {
                    var r = a
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (a) {
                    r = a
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (a) {
                r = a
            }
            e()
        }
    } catch (a) {
        if (a && r && typeof a.stack == "string") {
            for (var i = a.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, u = o.length - 1; 1 <= l && 0 <= u && i[l] !== o[u]; )
                u--;
            for (; 1 <= l && 0 <= u; l--,
            u--)
                if (i[l] !== o[u]) {
                    if (l !== 1 || u !== 1)
                        do
                            if (l--,
                            u--,
                            0 > u || i[l] !== o[u]) {
                                var s = `
` + i[l].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= l && 0 <= u);
                    break
                }
        }
    } finally {
        cl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? vr(e) : ""
}
function im(e) {
    switch (e.tag) {
    case 5:
        return vr(e.type);
    case 16:
        return vr("Lazy");
    case 13:
        return vr("Suspense");
    case 19:
        return vr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = fl(e.type, !1),
        e;
    case 11:
        return e = fl(e.type.render, !1),
        e;
    case 1:
        return e = fl(e.type, !0),
        e;
    default:
        return ""
    }
}
function lu(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case xn:
        return "Fragment";
    case wn:
        return "Portal";
    case ru:
        return "Profiler";
    case Ss:
        return "StrictMode";
    case iu:
        return "Suspense";
    case ou:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Bf:
            return (e.displayName || "Context") + ".Consumer";
        case Wf:
            return (e._context.displayName || "Context") + ".Provider";
        case ws:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case xs:
            return t = e.displayName || null,
            t !== null ? t : lu(e.type) || "Memo";
        case xt:
            t = e._payload,
            e = e._init;
            try {
                return lu(e(t))
            } catch {}
        }
    return null
}
function om(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return lu(t);
    case 8:
        return t === Ss ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Ft(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Hf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function lm(e) {
    var t = Hf(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(l) {
                r = "" + l,
                o.call(this, l)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(l) {
                r = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function fi(e) {
    e._valueTracker || (e._valueTracker = lm(e))
}
function bf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Hf(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Ai(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function uu(e, t) {
    var n = t.checked;
    return Y({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function za(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Ft(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Kf(e, t) {
    t = t.checked,
    t != null && gs(e, "checked", t, !1)
}
function su(e, t) {
    Kf(e, t);
    var n = Ft(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? au(e, t.type, n) : t.hasOwnProperty("defaultValue") && au(e, t.type, Ft(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Ia(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function au(e, t, n) {
    (t !== "number" || Ai(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var yr = Array.isArray;
function zn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Ft(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function cu(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(C(91));
    return Y({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Ma(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(C(92));
            if (yr(n)) {
                if (1 < n.length)
                    throw Error(C(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Ft(n)
    }
}
function Qf(e, t) {
    var n = Ft(t.value)
      , r = Ft(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function La(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Yf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function fu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Yf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var di, Xf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (di = di || document.createElement("div"),
        di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = di.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ir(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Er = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , um = ["Webkit", "ms", "Moz", "O"];
Object.keys(Er).forEach(function(e) {
    um.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Er[t] = Er[e]
    })
});
function Gf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Er.hasOwnProperty(e) && Er[e] ? ("" + t).trim() : t + "px"
}
function Zf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = Gf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var sm = Y({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function du(e, t) {
    if (t) {
        if (sm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(C(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(C(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(C(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(C(62))
    }
}
function pu(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var hu = null;
function Es(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var mu = null
  , In = null
  , Mn = null;
function Da(e) {
    if (e = ri(e)) {
        if (typeof mu != "function")
            throw Error(C(280));
        var t = e.stateNode;
        t && (t = Po(t),
        mu(e.stateNode, e.type, t))
    }
}
function qf(e) {
    In ? Mn ? Mn.push(e) : Mn = [e] : In = e
}
function Jf() {
    if (In) {
        var e = In
          , t = Mn;
        if (Mn = In = null,
        Da(e),
        t)
            for (e = 0; e < t.length; e++)
                Da(t[e])
    }
}
function ed(e, t) {
    return e(t)
}
function td() {}
var dl = !1;
function nd(e, t, n) {
    if (dl)
        return e(t, n);
    dl = !0;
    try {
        return ed(e, t, n)
    } finally {
        dl = !1,
        (In !== null || Mn !== null) && (td(),
        Jf())
    }
}
function Mr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Po(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(C(231, t, typeof n));
    return n
}
var vu = !1;
if (dt)
    try {
        var sr = {};
        Object.defineProperty(sr, "passive", {
            get: function() {
                vu = !0
            }
        }),
        window.addEventListener("test", sr, sr),
        window.removeEventListener("test", sr, sr)
    } catch {
        vu = !1
    }
function am(e, t, n, r, i, o, l, u, s) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, a)
    } catch (h) {
        this.onError(h)
    }
}
var kr = !1
  , Fi = null
  , Wi = !1
  , yu = null
  , cm = {
    onError: function(e) {
        kr = !0,
        Fi = e
    }
};
function fm(e, t, n, r, i, o, l, u, s) {
    kr = !1,
    Fi = null,
    am.apply(cm, arguments)
}
function dm(e, t, n, r, i, o, l, u, s) {
    if (fm.apply(this, arguments),
    kr) {
        if (kr) {
            var a = Fi;
            kr = !1,
            Fi = null
        } else
            throw Error(C(198));
        Wi || (Wi = !0,
        yu = a)
    }
}
function pn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function rd(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Ua(e) {
    if (pn(e) !== e)
        throw Error(C(188))
}
function pm(e) {
    var t = e.alternate;
    if (!t) {
        if (t = pn(e),
        t === null)
            throw Error(C(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return Ua(i),
                    e;
                if (o === r)
                    return Ua(i),
                    t;
                o = o.sibling
            }
            throw Error(C(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var l = !1, u = i.child; u; ) {
                if (u === n) {
                    l = !0,
                    n = i,
                    r = o;
                    break
                }
                if (u === r) {
                    l = !0,
                    r = i,
                    n = o;
                    break
                }
                u = u.sibling
            }
            if (!l) {
                for (u = o.child; u; ) {
                    if (u === n) {
                        l = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (u === r) {
                        l = !0,
                        r = o,
                        n = i;
                        break
                    }
                    u = u.sibling
                }
                if (!l)
                    throw Error(C(189))
            }
        }
        if (n.alternate !== r)
            throw Error(C(190))
    }
    if (n.tag !== 3)
        throw Error(C(188));
    return n.stateNode.current === n ? e : t
}
function id(e) {
    return e = pm(e),
    e !== null ? od(e) : null
}
function od(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = od(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var ld = Te.unstable_scheduleCallback
  , Aa = Te.unstable_cancelCallback
  , hm = Te.unstable_shouldYield
  , mm = Te.unstable_requestPaint
  , G = Te.unstable_now
  , vm = Te.unstable_getCurrentPriorityLevel
  , ks = Te.unstable_ImmediatePriority
  , ud = Te.unstable_UserBlockingPriority
  , Bi = Te.unstable_NormalPriority
  , ym = Te.unstable_LowPriority
  , sd = Te.unstable_IdlePriority
  , Eo = null
  , rt = null;
function gm(e) {
    if (rt && typeof rt.onCommitFiberRoot == "function")
        try {
            rt.onCommitFiberRoot(Eo, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Ge = Math.clz32 ? Math.clz32 : xm
  , Sm = Math.log
  , wm = Math.LN2;
function xm(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Sm(e) / wm | 0) | 0
}
var pi = 64
  , hi = 4194304;
function gr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Vi(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , l = n & 268435455;
    if (l !== 0) {
        var u = l & ~i;
        u !== 0 ? r = gr(u) : (o &= l,
        o !== 0 && (r = gr(o)))
    } else
        l = n & ~i,
        l !== 0 ? r = gr(l) : o !== 0 && (r = gr(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Ge(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function Em(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function km(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var l = 31 - Ge(o)
          , u = 1 << l
          , s = i[l];
        s === -1 ? (!(u & n) || u & r) && (i[l] = Em(u, t)) : s <= t && (e.expiredLanes |= u),
        o &= ~u
    }
}
function gu(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function ad() {
    var e = pi;
    return pi <<= 1,
    !(pi & 4194240) && (pi = 64),
    e
}
function pl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ti(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Ge(t),
    e[t] = n
}
function _m(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Ge(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function _s(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Ge(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var D = 0;
function cd(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var fd, Cs, dd, pd, hd, Su = !1, mi = [], Ot = null, Rt = null, Tt = null, Lr = new Map, Dr = new Map, kt = [], Cm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Fa(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Ot = null;
        break;
    case "dragenter":
    case "dragleave":
        Rt = null;
        break;
    case "mouseover":
    case "mouseout":
        Tt = null;
        break;
    case "pointerover":
    case "pointerout":
        Lr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Dr.delete(t.pointerId)
    }
}
function ar(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = ri(t),
    t !== null && Cs(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function Pm(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Ot = ar(Ot, e, t, n, r, i),
        !0;
    case "dragenter":
        return Rt = ar(Rt, e, t, n, r, i),
        !0;
    case "mouseover":
        return Tt = ar(Tt, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return Lr.set(o, ar(Lr.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        Dr.set(o, ar(Dr.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function md(e) {
    var t = en(e.target);
    if (t !== null) {
        var n = pn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = rd(n),
                t !== null) {
                    e.blockedOn = t,
                    hd(e.priority, function() {
                        dd(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Oi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = wu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            hu = r,
            n.target.dispatchEvent(r),
            hu = null
        } else
            return t = ri(n),
            t !== null && Cs(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Wa(e, t, n) {
    Oi(e) && n.delete(t)
}
function Nm() {
    Su = !1,
    Ot !== null && Oi(Ot) && (Ot = null),
    Rt !== null && Oi(Rt) && (Rt = null),
    Tt !== null && Oi(Tt) && (Tt = null),
    Lr.forEach(Wa),
    Dr.forEach(Wa)
}
function cr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Su || (Su = !0,
    Te.unstable_scheduleCallback(Te.unstable_NormalPriority, Nm)))
}
function Ur(e) {
    function t(i) {
        return cr(i, e)
    }
    if (0 < mi.length) {
        cr(mi[0], e);
        for (var n = 1; n < mi.length; n++) {
            var r = mi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Ot !== null && cr(Ot, e),
    Rt !== null && cr(Rt, e),
    Tt !== null && cr(Tt, e),
    Lr.forEach(t),
    Dr.forEach(t),
    n = 0; n < kt.length; n++)
        r = kt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < kt.length && (n = kt[0],
    n.blockedOn === null); )
        md(n),
        n.blockedOn === null && kt.shift()
}
var Ln = yt.ReactCurrentBatchConfig
  , Hi = !0;
function jm(e, t, n, r) {
    var i = D
      , o = Ln.transition;
    Ln.transition = null;
    try {
        D = 1,
        Ps(e, t, n, r)
    } finally {
        D = i,
        Ln.transition = o
    }
}
function Om(e, t, n, r) {
    var i = D
      , o = Ln.transition;
    Ln.transition = null;
    try {
        D = 4,
        Ps(e, t, n, r)
    } finally {
        D = i,
        Ln.transition = o
    }
}
function Ps(e, t, n, r) {
    if (Hi) {
        var i = wu(e, t, n, r);
        if (i === null)
            kl(e, t, r, bi, n),
            Fa(e, r);
        else if (Pm(i, e, t, n, r))
            r.stopPropagation();
        else if (Fa(e, r),
        t & 4 && -1 < Cm.indexOf(e)) {
            for (; i !== null; ) {
                var o = ri(i);
                if (o !== null && fd(o),
                o = wu(e, t, n, r),
                o === null && kl(e, t, r, bi, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            kl(e, t, r, null, n)
    }
}
var bi = null;
function wu(e, t, n, r) {
    if (bi = null,
    e = Es(r),
    e = en(e),
    e !== null)
        if (t = pn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = rd(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return bi = e,
    null
}
function vd(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (vm()) {
        case ks:
            return 1;
        case ud:
            return 4;
        case Bi:
        case ym:
            return 16;
        case sd:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Pt = null
  , Ns = null
  , Ri = null;
function yd() {
    if (Ri)
        return Ri;
    var e, t = Ns, n = t.length, r, i = "value"in Pt ? Pt.value : Pt.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === i[o - r]; r++)
        ;
    return Ri = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Ti(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function vi() {
    return !0
}
function Ba() {
    return !1
}
function Ie(e) {
    function t(n, r, i, o, l) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = l,
        this.currentTarget = null;
        for (var u in e)
            e.hasOwnProperty(u) && (n = e[u],
            this[u] = n ? n(o) : o[u]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? vi : Ba,
        this.isPropagationStopped = Ba,
        this
    }
    return Y(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = vi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = vi)
        },
        persist: function() {},
        isPersistent: vi
    }),
    t
}
var Zn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, js = Ie(Zn), ni = Y({}, Zn, {
    view: 0,
    detail: 0
}), Rm = Ie(ni), hl, ml, fr, ko = Y({}, ni, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Os,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== fr && (fr && e.type === "mousemove" ? (hl = e.screenX - fr.screenX,
        ml = e.screenY - fr.screenY) : ml = hl = 0,
        fr = e),
        hl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : ml
    }
}), Va = Ie(ko), Tm = Y({}, ko, {
    dataTransfer: 0
}), $m = Ie(Tm), zm = Y({}, ni, {
    relatedTarget: 0
}), vl = Ie(zm), Im = Y({}, Zn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Mm = Ie(Im), Lm = Y({}, Zn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Dm = Ie(Lm), Um = Y({}, Zn, {
    data: 0
}), Ha = Ie(Um), Am = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Fm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Wm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Bm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Wm[e]) ? !!t[e] : !1
}
function Os() {
    return Bm
}
var Vm = Y({}, ni, {
    key: function(e) {
        if (e.key) {
            var t = Am[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ti(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Fm[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Os,
    charCode: function(e) {
        return e.type === "keypress" ? Ti(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ti(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Hm = Ie(Vm)
  , bm = Y({}, ko, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , ba = Ie(bm)
  , Km = Y({}, ni, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Os
})
  , Qm = Ie(Km)
  , Ym = Y({}, Zn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Xm = Ie(Ym)
  , Gm = Y({}, ko, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Zm = Ie(Gm)
  , qm = [9, 13, 27, 32]
  , Rs = dt && "CompositionEvent"in window
  , _r = null;
dt && "documentMode"in document && (_r = document.documentMode);
var Jm = dt && "TextEvent"in window && !_r
  , gd = dt && (!Rs || _r && 8 < _r && 11 >= _r)
  , Ka = String.fromCharCode(32)
  , Qa = !1;
function Sd(e, t) {
    switch (e) {
    case "keyup":
        return qm.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function wd(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var En = !1;
function e0(e, t) {
    switch (e) {
    case "compositionend":
        return wd(t);
    case "keypress":
        return t.which !== 32 ? null : (Qa = !0,
        Ka);
    case "textInput":
        return e = t.data,
        e === Ka && Qa ? null : e;
    default:
        return null
    }
}
function t0(e, t) {
    if (En)
        return e === "compositionend" || !Rs && Sd(e, t) ? (e = yd(),
        Ri = Ns = Pt = null,
        En = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return gd && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var n0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Ya(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!n0[e.type] : t === "textarea"
}
function xd(e, t, n, r) {
    qf(r),
    t = Ki(t, "onChange"),
    0 < t.length && (n = new js("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Cr = null
  , Ar = null;
function r0(e) {
    $d(e, 0)
}
function _o(e) {
    var t = Cn(e);
    if (bf(t))
        return e
}
function i0(e, t) {
    if (e === "change")
        return t
}
var Ed = !1;
if (dt) {
    var yl;
    if (dt) {
        var gl = "oninput"in document;
        if (!gl) {
            var Xa = document.createElement("div");
            Xa.setAttribute("oninput", "return;"),
            gl = typeof Xa.oninput == "function"
        }
        yl = gl
    } else
        yl = !1;
    Ed = yl && (!document.documentMode || 9 < document.documentMode)
}
function Ga() {
    Cr && (Cr.detachEvent("onpropertychange", kd),
    Ar = Cr = null)
}
function kd(e) {
    if (e.propertyName === "value" && _o(Ar)) {
        var t = [];
        xd(t, Ar, e, Es(e)),
        nd(r0, t)
    }
}
function o0(e, t, n) {
    e === "focusin" ? (Ga(),
    Cr = t,
    Ar = n,
    Cr.attachEvent("onpropertychange", kd)) : e === "focusout" && Ga()
}
function l0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return _o(Ar)
}
function u0(e, t) {
    if (e === "click")
        return _o(t)
}
function s0(e, t) {
    if (e === "input" || e === "change")
        return _o(t)
}
function a0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var qe = typeof Object.is == "function" ? Object.is : a0;
function Fr(e, t) {
    if (qe(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!nu.call(t, i) || !qe(e[i], t[i]))
            return !1
    }
    return !0
}
function Za(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function qa(e, t) {
    var n = Za(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Za(n)
    }
}
function _d(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _d(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Cd() {
    for (var e = window, t = Ai(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ai(e.document)
    }
    return t
}
function Ts(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function c0(e) {
    var t = Cd()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && _d(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ts(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = qa(n, o);
                var l = qa(n, r);
                i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var f0 = dt && "documentMode"in document && 11 >= document.documentMode
  , kn = null
  , xu = null
  , Pr = null
  , Eu = !1;
function Ja(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Eu || kn == null || kn !== Ai(r) || (r = kn,
    "selectionStart"in r && Ts(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Pr && Fr(Pr, r) || (Pr = r,
    r = Ki(xu, "onSelect"),
    0 < r.length && (t = new js("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = kn)))
}
function yi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var _n = {
    animationend: yi("Animation", "AnimationEnd"),
    animationiteration: yi("Animation", "AnimationIteration"),
    animationstart: yi("Animation", "AnimationStart"),
    transitionend: yi("Transition", "TransitionEnd")
}
  , Sl = {}
  , Pd = {};
dt && (Pd = document.createElement("div").style,
"AnimationEvent"in window || (delete _n.animationend.animation,
delete _n.animationiteration.animation,
delete _n.animationstart.animation),
"TransitionEvent"in window || delete _n.transitionend.transition);
function Co(e) {
    if (Sl[e])
        return Sl[e];
    if (!_n[e])
        return e;
    var t = _n[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Pd)
            return Sl[e] = t[n];
    return e
}
var Nd = Co("animationend")
  , jd = Co("animationiteration")
  , Od = Co("animationstart")
  , Rd = Co("transitionend")
  , Td = new Map
  , ec = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ht(e, t) {
    Td.set(e, t),
    dn(t, [e])
}
for (var wl = 0; wl < ec.length; wl++) {
    var xl = ec[wl]
      , d0 = xl.toLowerCase()
      , p0 = xl[0].toUpperCase() + xl.slice(1);
    Ht(d0, "on" + p0)
}
Ht(Nd, "onAnimationEnd");
Ht(jd, "onAnimationIteration");
Ht(Od, "onAnimationStart");
Ht("dblclick", "onDoubleClick");
Ht("focusin", "onFocus");
Ht("focusout", "onBlur");
Ht(Rd, "onTransitionEnd");
Wn("onMouseEnter", ["mouseout", "mouseover"]);
Wn("onMouseLeave", ["mouseout", "mouseover"]);
Wn("onPointerEnter", ["pointerout", "pointerover"]);
Wn("onPointerLeave", ["pointerout", "pointerover"]);
dn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
dn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
dn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
dn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
dn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Sr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , h0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));
function tc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    dm(r, t, void 0, e),
    e.currentTarget = null
}
function $d(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var u = r[l]
                      , s = u.instance
                      , a = u.currentTarget;
                    if (u = u.listener,
                    s !== o && i.isPropagationStopped())
                        break e;
                    tc(i, u, a),
                    o = s
                }
            else
                for (l = 0; l < r.length; l++) {
                    if (u = r[l],
                    s = u.instance,
                    a = u.currentTarget,
                    u = u.listener,
                    s !== o && i.isPropagationStopped())
                        break e;
                    tc(i, u, a),
                    o = s
                }
        }
    }
    if (Wi)
        throw e = yu,
        Wi = !1,
        yu = null,
        e
}
function W(e, t) {
    var n = t[Nu];
    n === void 0 && (n = t[Nu] = new Set);
    var r = e + "__bubble";
    n.has(r) || (zd(t, e, 2, !1),
    n.add(r))
}
function El(e, t, n) {
    var r = 0;
    t && (r |= 4),
    zd(n, e, r, t)
}
var gi = "_reactListening" + Math.random().toString(36).slice(2);
function Wr(e) {
    if (!e[gi]) {
        e[gi] = !0,
        Ff.forEach(function(n) {
            n !== "selectionchange" && (h0.has(n) || El(n, !1, e),
            El(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[gi] || (t[gi] = !0,
        El("selectionchange", !1, t))
    }
}
function zd(e, t, n, r) {
    switch (vd(t)) {
    case 1:
        var i = jm;
        break;
    case 4:
        i = Om;
        break;
    default:
        i = Ps
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !vu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function kl(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var l = r.tag;
            if (l === 3 || l === 4) {
                var u = r.stateNode.containerInfo;
                if (u === i || u.nodeType === 8 && u.parentNode === i)
                    break;
                if (l === 4)
                    for (l = r.return; l !== null; ) {
                        var s = l.tag;
                        if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo,
                        s === i || s.nodeType === 8 && s.parentNode === i))
                            return;
                        l = l.return
                    }
                for (; u !== null; ) {
                    if (l = en(u),
                    l === null)
                        return;
                    if (s = l.tag,
                    s === 5 || s === 6) {
                        r = o = l;
                        continue e
                    }
                    u = u.parentNode
                }
            }
            r = r.return
        }
    nd(function() {
        var a = o
          , h = Es(n)
          , v = [];
        e: {
            var p = Td.get(e);
            if (p !== void 0) {
                var g = js
                  , S = e;
                switch (e) {
                case "keypress":
                    if (Ti(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    g = Hm;
                    break;
                case "focusin":
                    S = "focus",
                    g = vl;
                    break;
                case "focusout":
                    S = "blur",
                    g = vl;
                    break;
                case "beforeblur":
                case "afterblur":
                    g = vl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    g = Va;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    g = $m;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    g = Qm;
                    break;
                case Nd:
                case jd:
                case Od:
                    g = Mm;
                    break;
                case Rd:
                    g = Xm;
                    break;
                case "scroll":
                    g = Rm;
                    break;
                case "wheel":
                    g = Zm;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    g = Dm;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    g = ba
                }
                var d = (t & 4) !== 0
                  , y = !d && e === "scroll"
                  , c = d ? p !== null ? p + "Capture" : null : p;
                d = [];
                for (var f = a, m; f !== null; ) {
                    m = f;
                    var x = m.stateNode;
                    if (m.tag === 5 && x !== null && (m = x,
                    c !== null && (x = Mr(f, c),
                    x != null && d.push(Br(f, x, m)))),
                    y)
                        break;
                    f = f.return
                }
                0 < d.length && (p = new g(p,S,null,n,h),
                v.push({
                    event: p,
                    listeners: d
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover",
                g = e === "mouseout" || e === "pointerout",
                p && n !== hu && (S = n.relatedTarget || n.fromElement) && (en(S) || S[pt]))
                    break e;
                if ((g || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window,
                g ? (S = n.relatedTarget || n.toElement,
                g = a,
                S = S ? en(S) : null,
                S !== null && (y = pn(S),
                S !== y || S.tag !== 5 && S.tag !== 6) && (S = null)) : (g = null,
                S = a),
                g !== S)) {
                    if (d = Va,
                    x = "onMouseLeave",
                    c = "onMouseEnter",
                    f = "mouse",
                    (e === "pointerout" || e === "pointerover") && (d = ba,
                    x = "onPointerLeave",
                    c = "onPointerEnter",
                    f = "pointer"),
                    y = g == null ? p : Cn(g),
                    m = S == null ? p : Cn(S),
                    p = new d(x,f + "leave",g,n,h),
                    p.target = y,
                    p.relatedTarget = m,
                    x = null,
                    en(h) === a && (d = new d(c,f + "enter",S,n,h),
                    d.target = m,
                    d.relatedTarget = y,
                    x = d),
                    y = x,
                    g && S)
                        t: {
                            for (d = g,
                            c = S,
                            f = 0,
                            m = d; m; m = gn(m))
                                f++;
                            for (m = 0,
                            x = c; x; x = gn(x))
                                m++;
                            for (; 0 < f - m; )
                                d = gn(d),
                                f--;
                            for (; 0 < m - f; )
                                c = gn(c),
                                m--;
                            for (; f--; ) {
                                if (d === c || c !== null && d === c.alternate)
                                    break t;
                                d = gn(d),
                                c = gn(c)
                            }
                            d = null
                        }
                    else
                        d = null;
                    g !== null && nc(v, p, g, d, !1),
                    S !== null && y !== null && nc(v, y, S, d, !0)
                }
            }
            e: {
                if (p = a ? Cn(a) : window,
                g = p.nodeName && p.nodeName.toLowerCase(),
                g === "select" || g === "input" && p.type === "file")
                    var E = i0;
                else if (Ya(p))
                    if (Ed)
                        E = s0;
                    else {
                        E = l0;
                        var _ = o0
                    }
                else
                    (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = u0);
                if (E && (E = E(e, a))) {
                    xd(v, E, n, h);
                    break e
                }
                _ && _(e, p, a),
                e === "focusout" && (_ = p._wrapperState) && _.controlled && p.type === "number" && au(p, "number", p.value)
            }
            switch (_ = a ? Cn(a) : window,
            e) {
            case "focusin":
                (Ya(_) || _.contentEditable === "true") && (kn = _,
                xu = a,
                Pr = null);
                break;
            case "focusout":
                Pr = xu = kn = null;
                break;
            case "mousedown":
                Eu = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Eu = !1,
                Ja(v, n, h);
                break;
            case "selectionchange":
                if (f0)
                    break;
            case "keydown":
            case "keyup":
                Ja(v, n, h)
            }
            var P;
            if (Rs)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var N = "onCompositionStart";
                        break e;
                    case "compositionend":
                        N = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        N = "onCompositionUpdate";
                        break e
                    }
                    N = void 0
                }
            else
                En ? Sd(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
            N && (gd && n.locale !== "ko" && (En || N !== "onCompositionStart" ? N === "onCompositionEnd" && En && (P = yd()) : (Pt = h,
            Ns = "value"in Pt ? Pt.value : Pt.textContent,
            En = !0)),
            _ = Ki(a, N),
            0 < _.length && (N = new Ha(N,e,null,n,h),
            v.push({
                event: N,
                listeners: _
            }),
            P ? N.data = P : (P = wd(n),
            P !== null && (N.data = P)))),
            (P = Jm ? e0(e, n) : t0(e, n)) && (a = Ki(a, "onBeforeInput"),
            0 < a.length && (h = new Ha("onBeforeInput","beforeinput",null,n,h),
            v.push({
                event: h,
                listeners: a
            }),
            h.data = P))
        }
        $d(v, t)
    })
}
function Br(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ki(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = Mr(e, n),
        o != null && r.unshift(Br(e, o, i)),
        o = Mr(e, t),
        o != null && r.push(Br(e, o, i))),
        e = e.return
    }
    return r
}
function gn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function nc(e, t, n, r, i) {
    for (var o = t._reactName, l = []; n !== null && n !== r; ) {
        var u = n
          , s = u.alternate
          , a = u.stateNode;
        if (s !== null && s === r)
            break;
        u.tag === 5 && a !== null && (u = a,
        i ? (s = Mr(n, o),
        s != null && l.unshift(Br(n, s, u))) : i || (s = Mr(n, o),
        s != null && l.push(Br(n, s, u)))),
        n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var m0 = /\r\n?/g
  , v0 = /\u0000|\uFFFD/g;
function rc(e) {
    return (typeof e == "string" ? e : "" + e).replace(m0, `
`).replace(v0, "")
}
function Si(e, t, n) {
    if (t = rc(t),
    rc(e) !== t && n)
        throw Error(C(425))
}
function Qi() {}
var ku = null
  , _u = null;
function Cu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Pu = typeof setTimeout == "function" ? setTimeout : void 0
  , y0 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , ic = typeof Promise == "function" ? Promise : void 0
  , g0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof ic < "u" ? function(e) {
    return ic.resolve(null).then(e).catch(S0)
}
: Pu;
function S0(e) {
    setTimeout(function() {
        throw e
    })
}
function _l(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    Ur(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Ur(t)
}
function $t(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function oc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var qn = Math.random().toString(36).slice(2)
  , nt = "__reactFiber$" + qn
  , Vr = "__reactProps$" + qn
  , pt = "__reactContainer$" + qn
  , Nu = "__reactEvents$" + qn
  , w0 = "__reactListeners$" + qn
  , x0 = "__reactHandles$" + qn;
function en(e) {
    var t = e[nt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[pt] || n[nt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = oc(e); e !== null; ) {
                    if (n = e[nt])
                        return n;
                    e = oc(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function ri(e) {
    return e = e[nt] || e[pt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Cn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(C(33))
}
function Po(e) {
    return e[Vr] || null
}
var ju = []
  , Pn = -1;
function bt(e) {
    return {
        current: e
    }
}
function B(e) {
    0 > Pn || (e.current = ju[Pn],
    ju[Pn] = null,
    Pn--)
}
function F(e, t) {
    Pn++,
    ju[Pn] = e.current,
    e.current = t
}
var Wt = {}
  , me = bt(Wt)
  , Ee = bt(!1)
  , ln = Wt;
function Bn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Wt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function ke(e) {
    return e = e.childContextTypes,
    e != null
}
function Yi() {
    B(Ee),
    B(me)
}
function lc(e, t, n) {
    if (me.current !== Wt)
        throw Error(C(168));
    F(me, t),
    F(Ee, n)
}
function Id(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(C(108, om(e) || "Unknown", i));
    return Y({}, n, r)
}
function Xi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Wt,
    ln = me.current,
    F(me, e),
    F(Ee, Ee.current),
    !0
}
function uc(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(C(169));
    n ? (e = Id(e, t, ln),
    r.__reactInternalMemoizedMergedChildContext = e,
    B(Ee),
    B(me),
    F(me, e)) : B(Ee),
    F(Ee, n)
}
var st = null
  , No = !1
  , Cl = !1;
function Md(e) {
    st === null ? st = [e] : st.push(e)
}
function E0(e) {
    No = !0,
    Md(e)
}
function Kt() {
    if (!Cl && st !== null) {
        Cl = !0;
        var e = 0
          , t = D;
        try {
            var n = st;
            for (D = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            st = null,
            No = !1
        } catch (i) {
            throw st !== null && (st = st.slice(e + 1)),
            ld(ks, Kt),
            i
        } finally {
            D = t,
            Cl = !1
        }
    }
    return null
}
var Nn = []
  , jn = 0
  , Gi = null
  , Zi = 0
  , De = []
  , Ue = 0
  , un = null
  , at = 1
  , ct = "";
function Zt(e, t) {
    Nn[jn++] = Zi,
    Nn[jn++] = Gi,
    Gi = e,
    Zi = t
}
function Ld(e, t, n) {
    De[Ue++] = at,
    De[Ue++] = ct,
    De[Ue++] = un,
    un = e;
    var r = at;
    e = ct;
    var i = 32 - Ge(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - Ge(t) + i;
    if (30 < o) {
        var l = i - i % 5;
        o = (r & (1 << l) - 1).toString(32),
        r >>= l,
        i -= l,
        at = 1 << 32 - Ge(t) + i | n << i | r,
        ct = o + e
    } else
        at = 1 << o | n << i | r,
        ct = e
}
function $s(e) {
    e.return !== null && (Zt(e, 1),
    Ld(e, 1, 0))
}
function zs(e) {
    for (; e === Gi; )
        Gi = Nn[--jn],
        Nn[jn] = null,
        Zi = Nn[--jn],
        Nn[jn] = null;
    for (; e === un; )
        un = De[--Ue],
        De[Ue] = null,
        ct = De[--Ue],
        De[Ue] = null,
        at = De[--Ue],
        De[Ue] = null
}
var Re = null
  , Oe = null
  , H = !1
  , Ye = null;
function Dd(e, t) {
    var n = Ae(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function sc(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Re = e,
        Oe = $t(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Re = e,
        Oe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = un !== null ? {
            id: at,
            overflow: ct
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ae(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Re = e,
        Oe = null,
        !0) : !1;
    default:
        return !1
    }
}
function Ou(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ru(e) {
    if (H) {
        var t = Oe;
        if (t) {
            var n = t;
            if (!sc(e, t)) {
                if (Ou(e))
                    throw Error(C(418));
                t = $t(n.nextSibling);
                var r = Re;
                t && sc(e, t) ? Dd(r, n) : (e.flags = e.flags & -4097 | 2,
                H = !1,
                Re = e)
            }
        } else {
            if (Ou(e))
                throw Error(C(418));
            e.flags = e.flags & -4097 | 2,
            H = !1,
            Re = e
        }
    }
}
function ac(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Re = e
}
function wi(e) {
    if (e !== Re)
        return !1;
    if (!H)
        return ac(e),
        H = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Cu(e.type, e.memoizedProps)),
    t && (t = Oe)) {
        if (Ou(e))
            throw Ud(),
            Error(C(418));
        for (; t; )
            Dd(e, t),
            t = $t(t.nextSibling)
    }
    if (ac(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(C(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Oe = $t(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Oe = null
        }
    } else
        Oe = Re ? $t(e.stateNode.nextSibling) : null;
    return !0
}
function Ud() {
    for (var e = Oe; e; )
        e = $t(e.nextSibling)
}
function Vn() {
    Oe = Re = null,
    H = !1
}
function Is(e) {
    Ye === null ? Ye = [e] : Ye.push(e)
}
var k0 = yt.ReactCurrentBatchConfig;
function Ke(e, t) {
    if (e && e.defaultProps) {
        t = Y({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var qi = bt(null)
  , Ji = null
  , On = null
  , Ms = null;
function Ls() {
    Ms = On = Ji = null
}
function Ds(e) {
    var t = qi.current;
    B(qi),
    e._currentValue = t
}
function Tu(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Dn(e, t) {
    Ji = e,
    Ms = On = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (xe = !0),
    e.firstContext = null)
}
function Be(e) {
    var t = e._currentValue;
    if (Ms !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        On === null) {
            if (Ji === null)
                throw Error(C(308));
            On = e,
            Ji.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            On = On.next = e;
    return t
}
var tn = null;
function Us(e) {
    tn === null ? tn = [e] : tn.push(e)
}
function Ad(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    Us(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    ht(e, r)
}
function ht(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Et = !1;
function As(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Fd(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function ft(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function zt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    M & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        ht(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    Us(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    ht(e, n)
}
function $i(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        _s(e, n)
    }
}
function cc(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = l : o = o.next = l,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function eo(e, t, n, r) {
    var i = e.updateQueue;
    Et = !1;
    var o = i.firstBaseUpdate
      , l = i.lastBaseUpdate
      , u = i.shared.pending;
    if (u !== null) {
        i.shared.pending = null;
        var s = u
          , a = s.next;
        s.next = null,
        l === null ? o = a : l.next = a,
        l = s;
        var h = e.alternate;
        h !== null && (h = h.updateQueue,
        u = h.lastBaseUpdate,
        u !== l && (u === null ? h.firstBaseUpdate = a : u.next = a,
        h.lastBaseUpdate = s))
    }
    if (o !== null) {
        var v = i.baseState;
        l = 0,
        h = a = s = null,
        u = o;
        do {
            var p = u.lane
              , g = u.eventTime;
            if ((r & p) === p) {
                h !== null && (h = h.next = {
                    eventTime: g,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var S = e
                      , d = u;
                    switch (p = t,
                    g = n,
                    d.tag) {
                    case 1:
                        if (S = d.payload,
                        typeof S == "function") {
                            v = S.call(g, v, p);
                            break e
                        }
                        v = S;
                        break e;
                    case 3:
                        S.flags = S.flags & -65537 | 128;
                    case 0:
                        if (S = d.payload,
                        p = typeof S == "function" ? S.call(g, v, p) : S,
                        p == null)
                            break e;
                        v = Y({}, v, p);
                        break e;
                    case 2:
                        Et = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64,
                p = i.effects,
                p === null ? i.effects = [u] : p.push(u))
            } else
                g = {
                    eventTime: g,
                    lane: p,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                },
                h === null ? (a = h = g,
                s = v) : h = h.next = g,
                l |= p;
            if (u = u.next,
            u === null) {
                if (u = i.shared.pending,
                u === null)
                    break;
                p = u,
                u = p.next,
                p.next = null,
                i.lastBaseUpdate = p,
                i.shared.pending = null
            }
        } while (1);
        if (h === null && (s = v),
        i.baseState = s,
        i.firstBaseUpdate = a,
        i.lastBaseUpdate = h,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                l |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        an |= l,
        e.lanes = l,
        e.memoizedState = v
    }
}
function fc(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(C(191, i));
                i.call(r)
            }
        }
}
var Wd = new Af.Component().refs;
function $u(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Y({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var jo = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? pn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ye()
          , i = Mt(e)
          , o = ft(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = zt(e, o, i),
        t !== null && (Ze(t, e, i, r),
        $i(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ye()
          , i = Mt(e)
          , o = ft(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = zt(e, o, i),
        t !== null && (Ze(t, e, i, r),
        $i(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ye()
          , r = Mt(e)
          , i = ft(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = zt(e, i, r),
        t !== null && (Ze(t, e, r, n),
        $i(t, e, r))
    }
};
function dc(e, t, n, r, i, o, l) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !Fr(n, r) || !Fr(i, o) : !0
}
function Bd(e, t, n) {
    var r = !1
      , i = Wt
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = Be(o) : (i = ke(t) ? ln : me.current,
    r = t.contextTypes,
    o = (r = r != null) ? Bn(e, i) : Wt),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = jo,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function pc(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && jo.enqueueReplaceState(t, t.state, null)
}
function zu(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = Wd,
    As(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Be(o) : (o = ke(t) ? ln : me.current,
    i.context = Bn(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && ($u(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && jo.enqueueReplaceState(i, i.state, null),
    eo(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function dr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(C(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(C(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
                var u = i.refs;
                u === Wd && (u = i.refs = {}),
                l === null ? delete u[o] : u[o] = l
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(C(284));
        if (!n._owner)
            throw Error(C(290, e))
    }
    return e
}
function xi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function hc(e) {
    var t = e._init;
    return t(e._payload)
}
function Vd(e) {
    function t(c, f) {
        if (e) {
            var m = c.deletions;
            m === null ? (c.deletions = [f],
            c.flags |= 16) : m.push(f)
        }
    }
    function n(c, f) {
        if (!e)
            return null;
        for (; f !== null; )
            t(c, f),
            f = f.sibling;
        return null
    }
    function r(c, f) {
        for (c = new Map; f !== null; )
            f.key !== null ? c.set(f.key, f) : c.set(f.index, f),
            f = f.sibling;
        return c
    }
    function i(c, f) {
        return c = Lt(c, f),
        c.index = 0,
        c.sibling = null,
        c
    }
    function o(c, f, m) {
        return c.index = m,
        e ? (m = c.alternate,
        m !== null ? (m = m.index,
        m < f ? (c.flags |= 2,
        f) : m) : (c.flags |= 2,
        f)) : (c.flags |= 1048576,
        f)
    }
    function l(c) {
        return e && c.alternate === null && (c.flags |= 2),
        c
    }
    function u(c, f, m, x) {
        return f === null || f.tag !== 6 ? (f = $l(m, c.mode, x),
        f.return = c,
        f) : (f = i(f, m),
        f.return = c,
        f)
    }
    function s(c, f, m, x) {
        var E = m.type;
        return E === xn ? h(c, f, m.props.children, x, m.key) : f !== null && (f.elementType === E || typeof E == "object" && E !== null && E.$$typeof === xt && hc(E) === f.type) ? (x = i(f, m.props),
        x.ref = dr(c, f, m),
        x.return = c,
        x) : (x = Ui(m.type, m.key, m.props, null, c.mode, x),
        x.ref = dr(c, f, m),
        x.return = c,
        x)
    }
    function a(c, f, m, x) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation ? (f = zl(m, c.mode, x),
        f.return = c,
        f) : (f = i(f, m.children || []),
        f.return = c,
        f)
    }
    function h(c, f, m, x, E) {
        return f === null || f.tag !== 7 ? (f = on(m, c.mode, x, E),
        f.return = c,
        f) : (f = i(f, m),
        f.return = c,
        f)
    }
    function v(c, f, m) {
        if (typeof f == "string" && f !== "" || typeof f == "number")
            return f = $l("" + f, c.mode, m),
            f.return = c,
            f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case ci:
                return m = Ui(f.type, f.key, f.props, null, c.mode, m),
                m.ref = dr(c, null, f),
                m.return = c,
                m;
            case wn:
                return f = zl(f, c.mode, m),
                f.return = c,
                f;
            case xt:
                var x = f._init;
                return v(c, x(f._payload), m)
            }
            if (yr(f) || ur(f))
                return f = on(f, c.mode, m, null),
                f.return = c,
                f;
            xi(c, f)
        }
        return null
    }
    function p(c, f, m, x) {
        var E = f !== null ? f.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return E !== null ? null : u(c, f, "" + m, x);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case ci:
                return m.key === E ? s(c, f, m, x) : null;
            case wn:
                return m.key === E ? a(c, f, m, x) : null;
            case xt:
                return E = m._init,
                p(c, f, E(m._payload), x)
            }
            if (yr(m) || ur(m))
                return E !== null ? null : h(c, f, m, x, null);
            xi(c, m)
        }
        return null
    }
    function g(c, f, m, x, E) {
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return c = c.get(m) || null,
            u(f, c, "" + x, E);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case ci:
                return c = c.get(x.key === null ? m : x.key) || null,
                s(f, c, x, E);
            case wn:
                return c = c.get(x.key === null ? m : x.key) || null,
                a(f, c, x, E);
            case xt:
                var _ = x._init;
                return g(c, f, m, _(x._payload), E)
            }
            if (yr(x) || ur(x))
                return c = c.get(m) || null,
                h(f, c, x, E, null);
            xi(f, x)
        }
        return null
    }
    function S(c, f, m, x) {
        for (var E = null, _ = null, P = f, N = f = 0, T = null; P !== null && N < m.length; N++) {
            P.index > N ? (T = P,
            P = null) : T = P.sibling;
            var O = p(c, P, m[N], x);
            if (O === null) {
                P === null && (P = T);
                break
            }
            e && P && O.alternate === null && t(c, P),
            f = o(O, f, N),
            _ === null ? E = O : _.sibling = O,
            _ = O,
            P = T
        }
        if (N === m.length)
            return n(c, P),
            H && Zt(c, N),
            E;
        if (P === null) {
            for (; N < m.length; N++)
                P = v(c, m[N], x),
                P !== null && (f = o(P, f, N),
                _ === null ? E = P : _.sibling = P,
                _ = P);
            return H && Zt(c, N),
            E
        }
        for (P = r(c, P); N < m.length; N++)
            T = g(P, c, N, m[N], x),
            T !== null && (e && T.alternate !== null && P.delete(T.key === null ? N : T.key),
            f = o(T, f, N),
            _ === null ? E = T : _.sibling = T,
            _ = T);
        return e && P.forEach(function(L) {
            return t(c, L)
        }),
        H && Zt(c, N),
        E
    }
    function d(c, f, m, x) {
        var E = ur(m);
        if (typeof E != "function")
            throw Error(C(150));
        if (m = E.call(m),
        m == null)
            throw Error(C(151));
        for (var _ = E = null, P = f, N = f = 0, T = null, O = m.next(); P !== null && !O.done; N++,
        O = m.next()) {
            P.index > N ? (T = P,
            P = null) : T = P.sibling;
            var L = p(c, P, O.value, x);
            if (L === null) {
                P === null && (P = T);
                break
            }
            e && P && L.alternate === null && t(c, P),
            f = o(L, f, N),
            _ === null ? E = L : _.sibling = L,
            _ = L,
            P = T
        }
        if (O.done)
            return n(c, P),
            H && Zt(c, N),
            E;
        if (P === null) {
            for (; !O.done; N++,
            O = m.next())
                O = v(c, O.value, x),
                O !== null && (f = o(O, f, N),
                _ === null ? E = O : _.sibling = O,
                _ = O);
            return H && Zt(c, N),
            E
        }
        for (P = r(c, P); !O.done; N++,
        O = m.next())
            O = g(P, c, N, O.value, x),
            O !== null && (e && O.alternate !== null && P.delete(O.key === null ? N : O.key),
            f = o(O, f, N),
            _ === null ? E = O : _.sibling = O,
            _ = O);
        return e && P.forEach(function(ce) {
            return t(c, ce)
        }),
        H && Zt(c, N),
        E
    }
    function y(c, f, m, x) {
        if (typeof m == "object" && m !== null && m.type === xn && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case ci:
                e: {
                    for (var E = m.key, _ = f; _ !== null; ) {
                        if (_.key === E) {
                            if (E = m.type,
                            E === xn) {
                                if (_.tag === 7) {
                                    n(c, _.sibling),
                                    f = i(_, m.props.children),
                                    f.return = c,
                                    c = f;
                                    break e
                                }
                            } else if (_.elementType === E || typeof E == "object" && E !== null && E.$$typeof === xt && hc(E) === _.type) {
                                n(c, _.sibling),
                                f = i(_, m.props),
                                f.ref = dr(c, _, m),
                                f.return = c,
                                c = f;
                                break e
                            }
                            n(c, _);
                            break
                        } else
                            t(c, _);
                        _ = _.sibling
                    }
                    m.type === xn ? (f = on(m.props.children, c.mode, x, m.key),
                    f.return = c,
                    c = f) : (x = Ui(m.type, m.key, m.props, null, c.mode, x),
                    x.ref = dr(c, f, m),
                    x.return = c,
                    c = x)
                }
                return l(c);
            case wn:
                e: {
                    for (_ = m.key; f !== null; ) {
                        if (f.key === _)
                            if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
                                n(c, f.sibling),
                                f = i(f, m.children || []),
                                f.return = c,
                                c = f;
                                break e
                            } else {
                                n(c, f);
                                break
                            }
                        else
                            t(c, f);
                        f = f.sibling
                    }
                    f = zl(m, c.mode, x),
                    f.return = c,
                    c = f
                }
                return l(c);
            case xt:
                return _ = m._init,
                y(c, f, _(m._payload), x)
            }
            if (yr(m))
                return S(c, f, m, x);
            if (ur(m))
                return d(c, f, m, x);
            xi(c, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        f !== null && f.tag === 6 ? (n(c, f.sibling),
        f = i(f, m),
        f.return = c,
        c = f) : (n(c, f),
        f = $l(m, c.mode, x),
        f.return = c,
        c = f),
        l(c)) : n(c, f)
    }
    return y
}
var Hn = Vd(!0)
  , Hd = Vd(!1)
  , ii = {}
  , it = bt(ii)
  , Hr = bt(ii)
  , br = bt(ii);
function nn(e) {
    if (e === ii)
        throw Error(C(174));
    return e
}
function Fs(e, t) {
    switch (F(br, t),
    F(Hr, e),
    F(it, ii),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : fu(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = fu(t, e)
    }
    B(it),
    F(it, t)
}
function bn() {
    B(it),
    B(Hr),
    B(br)
}
function bd(e) {
    nn(br.current);
    var t = nn(it.current)
      , n = fu(t, e.type);
    t !== n && (F(Hr, e),
    F(it, n))
}
function Ws(e) {
    Hr.current === e && (B(it),
    B(Hr))
}
var K = bt(0);
function to(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Pl = [];
function Bs() {
    for (var e = 0; e < Pl.length; e++)
        Pl[e]._workInProgressVersionPrimary = null;
    Pl.length = 0
}
var zi = yt.ReactCurrentDispatcher
  , Nl = yt.ReactCurrentBatchConfig
  , sn = 0
  , Q = null
  , te = null
  , ie = null
  , no = !1
  , Nr = !1
  , Kr = 0
  , _0 = 0;
function fe() {
    throw Error(C(321))
}
function Vs(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!qe(e[n], t[n]))
            return !1;
    return !0
}
function Hs(e, t, n, r, i, o) {
    if (sn = o,
    Q = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    zi.current = e === null || e.memoizedState === null ? j0 : O0,
    e = n(r, i),
    Nr) {
        o = 0;
        do {
            if (Nr = !1,
            Kr = 0,
            25 <= o)
                throw Error(C(301));
            o += 1,
            ie = te = null,
            t.updateQueue = null,
            zi.current = R0,
            e = n(r, i)
        } while (Nr)
    }
    if (zi.current = ro,
    t = te !== null && te.next !== null,
    sn = 0,
    ie = te = Q = null,
    no = !1,
    t)
        throw Error(C(300));
    return e
}
function bs() {
    var e = Kr !== 0;
    return Kr = 0,
    e
}
function tt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ie === null ? Q.memoizedState = ie = e : ie = ie.next = e,
    ie
}
function Ve() {
    if (te === null) {
        var e = Q.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = te.next;
    var t = ie === null ? Q.memoizedState : ie.next;
    if (t !== null)
        ie = t,
        te = e;
    else {
        if (e === null)
            throw Error(C(310));
        te = e,
        e = {
            memoizedState: te.memoizedState,
            baseState: te.baseState,
            baseQueue: te.baseQueue,
            queue: te.queue,
            next: null
        },
        ie === null ? Q.memoizedState = ie = e : ie = ie.next = e
    }
    return ie
}
function Qr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function jl(e) {
    var t = Ve()
      , n = t.queue;
    if (n === null)
        throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = te
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var l = i.next;
            i.next = o.next,
            o.next = l
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var u = l = null
          , s = null
          , a = o;
        do {
            var h = a.lane;
            if ((sn & h) === h)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                }),
                r = a.hasEagerState ? a.eagerState : e(r, a.action);
            else {
                var v = {
                    lane: h,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                };
                s === null ? (u = s = v,
                l = r) : s = s.next = v,
                Q.lanes |= h,
                an |= h
            }
            a = a.next
        } while (a !== null && a !== o);
        s === null ? l = r : s.next = u,
        qe(r, t.memoizedState) || (xe = !0),
        t.memoizedState = r,
        t.baseState = l,
        t.baseQueue = s,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            Q.lanes |= o,
            an |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Ol(e) {
    var t = Ve()
      , n = t.queue;
    if (n === null)
        throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var l = i = i.next;
        do
            o = e(o, l.action),
            l = l.next;
        while (l !== i);
        qe(o, t.memoizedState) || (xe = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function Kd() {}
function Qd(e, t) {
    var n = Q
      , r = Ve()
      , i = t()
      , o = !qe(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    xe = !0),
    r = r.queue,
    Ks(Gd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || ie !== null && ie.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Yr(9, Xd.bind(null, n, r, i, t), void 0, null),
        oe === null)
            throw Error(C(349));
        sn & 30 || Yd(n, t, i)
    }
    return i
}
function Yd(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = Q.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Q.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Xd(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Zd(t) && qd(e)
}
function Gd(e, t, n) {
    return n(function() {
        Zd(t) && qd(e)
    })
}
function Zd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !qe(e, n)
    } catch {
        return !0
    }
}
function qd(e) {
    var t = ht(e, 1);
    t !== null && Ze(t, e, 1, -1)
}
function mc(e) {
    var t = tt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = N0.bind(null, Q, e),
    [t.memoizedState, e]
}
function Yr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = Q.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Q.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Jd() {
    return Ve().memoizedState
}
function Ii(e, t, n, r) {
    var i = tt();
    Q.flags |= e,
    i.memoizedState = Yr(1 | t, n, void 0, r === void 0 ? null : r)
}
function Oo(e, t, n, r) {
    var i = Ve();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (te !== null) {
        var l = te.memoizedState;
        if (o = l.destroy,
        r !== null && Vs(r, l.deps)) {
            i.memoizedState = Yr(t, n, o, r);
            return
        }
    }
    Q.flags |= e,
    i.memoizedState = Yr(1 | t, n, o, r)
}
function vc(e, t) {
    return Ii(8390656, 8, e, t)
}
function Ks(e, t) {
    return Oo(2048, 8, e, t)
}
function ep(e, t) {
    return Oo(4, 2, e, t)
}
function tp(e, t) {
    return Oo(4, 4, e, t)
}
function np(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function rp(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Oo(4, 4, np.bind(null, t, e), n)
}
function Qs() {}
function ip(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vs(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function op(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vs(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function lp(e, t, n) {
    return sn & 21 ? (qe(n, t) || (n = ad(),
    Q.lanes |= n,
    an |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    xe = !0),
    e.memoizedState = n)
}
function C0(e, t) {
    var n = D;
    D = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Nl.transition;
    Nl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        D = n,
        Nl.transition = r
    }
}
function up() {
    return Ve().memoizedState
}
function P0(e, t, n) {
    var r = Mt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    sp(e))
        ap(t, n);
    else if (n = Ad(e, t, n, r),
    n !== null) {
        var i = ye();
        Ze(n, e, r, i),
        cp(n, t, r)
    }
}
function N0(e, t, n) {
    var r = Mt(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (sp(e))
        ap(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var l = t.lastRenderedState
                  , u = o(l, n);
                if (i.hasEagerState = !0,
                i.eagerState = u,
                qe(u, l)) {
                    var s = t.interleaved;
                    s === null ? (i.next = i,
                    Us(t)) : (i.next = s.next,
                    s.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = Ad(e, t, i, r),
        n !== null && (i = ye(),
        Ze(n, e, r, i),
        cp(n, t, r))
    }
}
function sp(e) {
    var t = e.alternate;
    return e === Q || t !== null && t === Q
}
function ap(e, t) {
    Nr = no = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function cp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        _s(e, n)
    }
}
var ro = {
    readContext: Be,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1
}
  , j0 = {
    readContext: Be,
    useCallback: function(e, t) {
        return tt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Be,
    useEffect: vc,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Ii(4194308, 4, np.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Ii(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ii(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = tt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = tt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = P0.bind(null, Q, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = tt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: mc,
    useDebugValue: Qs,
    useDeferredValue: function(e) {
        return tt().memoizedState = e
    },
    useTransition: function() {
        var e = mc(!1)
          , t = e[0];
        return e = C0.bind(null, e[1]),
        tt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = Q
          , i = tt();
        if (H) {
            if (n === void 0)
                throw Error(C(407));
            n = n()
        } else {
            if (n = t(),
            oe === null)
                throw Error(C(349));
            sn & 30 || Yd(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        vc(Gd.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        Yr(9, Xd.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = tt()
          , t = oe.identifierPrefix;
        if (H) {
            var n = ct
              , r = at;
            n = (r & ~(1 << 32 - Ge(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Kr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = _0++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , O0 = {
    readContext: Be,
    useCallback: ip,
    useContext: Be,
    useEffect: Ks,
    useImperativeHandle: rp,
    useInsertionEffect: ep,
    useLayoutEffect: tp,
    useMemo: op,
    useReducer: jl,
    useRef: Jd,
    useState: function() {
        return jl(Qr)
    },
    useDebugValue: Qs,
    useDeferredValue: function(e) {
        var t = Ve();
        return lp(t, te.memoizedState, e)
    },
    useTransition: function() {
        var e = jl(Qr)[0]
          , t = Ve().memoizedState;
        return [e, t]
    },
    useMutableSource: Kd,
    useSyncExternalStore: Qd,
    useId: up,
    unstable_isNewReconciler: !1
}
  , R0 = {
    readContext: Be,
    useCallback: ip,
    useContext: Be,
    useEffect: Ks,
    useImperativeHandle: rp,
    useInsertionEffect: ep,
    useLayoutEffect: tp,
    useMemo: op,
    useReducer: Ol,
    useRef: Jd,
    useState: function() {
        return Ol(Qr)
    },
    useDebugValue: Qs,
    useDeferredValue: function(e) {
        var t = Ve();
        return te === null ? t.memoizedState = e : lp(t, te.memoizedState, e)
    },
    useTransition: function() {
        var e = Ol(Qr)[0]
          , t = Ve().memoizedState;
        return [e, t]
    },
    useMutableSource: Kd,
    useSyncExternalStore: Qd,
    useId: up,
    unstable_isNewReconciler: !1
};
function Kn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += im(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function Rl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Iu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var T0 = typeof WeakMap == "function" ? WeakMap : Map;
function fp(e, t, n) {
    n = ft(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        oo || (oo = !0,
        Hu = r),
        Iu(e, t)
    }
    ,
    n
}
function dp(e, t, n) {
    n = ft(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Iu(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Iu(e, t),
        typeof r != "function" && (It === null ? It = new Set([this]) : It.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }
    ),
    n
}
function yc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new T0;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = b0.bind(null, e, t, n),
    t.then(e, e))
}
function gc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Sc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ft(-1, 1),
    t.tag = 2,
    zt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var $0 = yt.ReactCurrentOwner
  , xe = !1;
function ve(e, t, n, r) {
    t.child = e === null ? Hd(t, null, n, r) : Hn(t, e.child, n, r)
}
function wc(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Dn(t, i),
    r = Hs(e, t, n, r, o, i),
    n = bs(),
    e !== null && !xe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    mt(e, t, i)) : (H && n && $s(t),
    t.flags |= 1,
    ve(e, t, r, i),
    t.child)
}
function xc(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !ta(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        pp(e, t, o, r, i)) : (e = Ui(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var l = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Fr,
        n(l, r) && e.ref === t.ref)
            return mt(e, t, i)
    }
    return t.flags |= 1,
    e = Lt(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function pp(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Fr(o, r) && e.ref === t.ref)
            if (xe = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (xe = !0);
            else
                return t.lanes = e.lanes,
                mt(e, t, i)
    }
    return Mu(e, t, n, r, i)
}
function hp(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            F(Tn, Ne),
            Ne |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                F(Tn, Ne),
                Ne |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            F(Tn, Ne),
            Ne |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        F(Tn, Ne),
        Ne |= r;
    return ve(e, t, i, n),
    t.child
}
function mp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Mu(e, t, n, r, i) {
    var o = ke(n) ? ln : me.current;
    return o = Bn(t, o),
    Dn(t, i),
    n = Hs(e, t, n, r, o, i),
    r = bs(),
    e !== null && !xe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    mt(e, t, i)) : (H && r && $s(t),
    t.flags |= 1,
    ve(e, t, n, i),
    t.child)
}
function Ec(e, t, n, r, i) {
    if (ke(n)) {
        var o = !0;
        Xi(t)
    } else
        o = !1;
    if (Dn(t, i),
    t.stateNode === null)
        Mi(e, t),
        Bd(t, n, r),
        zu(t, n, r, i),
        r = !0;
    else if (e === null) {
        var l = t.stateNode
          , u = t.memoizedProps;
        l.props = u;
        var s = l.context
          , a = n.contextType;
        typeof a == "object" && a !== null ? a = Be(a) : (a = ke(n) ? ln : me.current,
        a = Bn(t, a));
        var h = n.getDerivedStateFromProps
          , v = typeof h == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        v || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== a) && pc(t, l, r, a),
        Et = !1;
        var p = t.memoizedState;
        l.state = p,
        eo(t, r, l, i),
        s = t.memoizedState,
        u !== r || p !== s || Ee.current || Et ? (typeof h == "function" && ($u(t, n, h, r),
        s = t.memoizedState),
        (u = Et || dc(t, n, u, r, p, s, a)) ? (v || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = s),
        l.props = r,
        l.state = s,
        l.context = a,
        r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        l = t.stateNode,
        Fd(e, t),
        u = t.memoizedProps,
        a = t.type === t.elementType ? u : Ke(t.type, u),
        l.props = a,
        v = t.pendingProps,
        p = l.context,
        s = n.contextType,
        typeof s == "object" && s !== null ? s = Be(s) : (s = ke(n) ? ln : me.current,
        s = Bn(t, s));
        var g = n.getDerivedStateFromProps;
        (h = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== v || p !== s) && pc(t, l, r, s),
        Et = !1,
        p = t.memoizedState,
        l.state = p,
        eo(t, r, l, i);
        var S = t.memoizedState;
        u !== v || p !== S || Ee.current || Et ? (typeof g == "function" && ($u(t, n, g, r),
        S = t.memoizedState),
        (a = Et || dc(t, n, a, r, p, S, s) || !1) ? (h || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, S, s),
        typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, S, s)),
        typeof l.componentDidUpdate == "function" && (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = S),
        l.props = r,
        l.state = S,
        l.context = s,
        r = a) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Lu(e, t, n, r, o, i)
}
function Lu(e, t, n, r, i, o) {
    mp(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l)
        return i && uc(t, n, !1),
        mt(e, t, o);
    r = t.stateNode,
    $0.current = t;
    var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && l ? (t.child = Hn(t, e.child, null, o),
    t.child = Hn(t, null, u, o)) : ve(e, t, u, o),
    t.memoizedState = r.state,
    i && uc(t, n, !0),
    t.child
}
function vp(e) {
    var t = e.stateNode;
    t.pendingContext ? lc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && lc(e, t.context, !1),
    Fs(e, t.containerInfo)
}
function kc(e, t, n, r, i) {
    return Vn(),
    Is(i),
    t.flags |= 256,
    ve(e, t, n, r),
    t.child
}
var Du = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Uu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function yp(e, t, n) {
    var r = t.pendingProps, i = K.current, o = !1, l = (t.flags & 128) !== 0, u;
    if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    u ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    F(K, i & 1),
    e === null)
        return Ru(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (l = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        l = {
            mode: "hidden",
            children: l
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = l) : o = $o(l, r, 0, null),
        e = on(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = Uu(n),
        t.memoizedState = Du,
        e) : Ys(t, l));
    if (i = e.memoizedState,
    i !== null && (u = i.dehydrated,
    u !== null))
        return z0(e, t, l, r, u, i, n);
    if (o) {
        o = r.fallback,
        l = t.mode,
        i = e.child,
        u = i.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = s,
        t.deletions = null) : (r = Lt(i, s),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        u !== null ? o = Lt(u, o) : (o = on(o, l, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        l = e.child.memoizedState,
        l = l === null ? Uu(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        },
        o.memoizedState = l,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = Du,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = Lt(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Ys(e, t) {
    return t = $o({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ei(e, t, n, r) {
    return r !== null && Is(r),
    Hn(t, e.child, null, n),
    e = Ys(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function z0(e, t, n, r, i, o, l) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Rl(Error(C(422))),
        Ei(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = $o({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = on(o, i, l, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && Hn(t, e.child, null, l),
        t.child.memoizedState = Uu(l),
        t.memoizedState = Du,
        o);
    if (!(t.mode & 1))
        return Ei(e, t, l, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var u = r.dgst;
        return r = u,
        o = Error(C(419)),
        r = Rl(o, r, void 0),
        Ei(e, t, l, r)
    }
    if (u = (l & e.childLanes) !== 0,
    xe || u) {
        if (r = oe,
        r !== null) {
            switch (l & -l) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | l) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            ht(e, i),
            Ze(r, e, i, -1))
        }
        return ea(),
        r = Rl(Error(C(421))),
        Ei(e, t, l, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = K0.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Oe = $t(i.nextSibling),
    Re = t,
    H = !0,
    Ye = null,
    e !== null && (De[Ue++] = at,
    De[Ue++] = ct,
    De[Ue++] = un,
    at = e.id,
    ct = e.overflow,
    un = t),
    t = Ys(t, r.children),
    t.flags |= 4096,
    t)
}
function _c(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Tu(e.return, t, n)
}
function Tl(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function gp(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (ve(e, t, r.children, n),
    r = K.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && _c(e, n, t);
                else if (e.tag === 19)
                    _c(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (F(K, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && to(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Tl(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && to(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Tl(t, !0, n, null, o);
            break;
        case "together":
            Tl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Mi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function mt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    an |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(C(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Lt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Lt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function I0(e, t, n) {
    switch (t.tag) {
    case 3:
        vp(t),
        Vn();
        break;
    case 5:
        bd(t);
        break;
    case 1:
        ke(t.type) && Xi(t);
        break;
    case 4:
        Fs(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        F(qi, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (F(K, K.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? yp(e, t, n) : (F(K, K.current & 1),
            e = mt(e, t, n),
            e !== null ? e.sibling : null);
        F(K, K.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return gp(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        F(K, K.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        hp(e, t, n)
    }
    return mt(e, t, n)
}
var Sp, Au, wp, xp;
Sp = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Au = function() {}
;
wp = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        nn(it.current);
        var o = null;
        switch (n) {
        case "input":
            i = uu(e, i),
            r = uu(e, r),
            o = [];
            break;
        case "select":
            i = Y({}, i, {
                value: void 0
            }),
            r = Y({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = cu(e, i),
            r = cu(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qi)
        }
        du(n, r);
        var l;
        n = null;
        for (a in i)
            if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
                if (a === "style") {
                    var u = i[a];
                    for (l in u)
                        u.hasOwnProperty(l) && (n || (n = {}),
                        n[l] = "")
                } else
                    a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (zr.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
        for (a in r) {
            var s = r[a];
            if (u = i != null ? i[a] : void 0,
            r.hasOwnProperty(a) && s !== u && (s != null || u != null))
                if (a === "style")
                    if (u) {
                        for (l in u)
                            !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}),
                            n[l] = "");
                        for (l in s)
                            s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}),
                            n[l] = s[l])
                    } else
                        n || (o || (o = []),
                        o.push(a, n)),
                        n = s;
                else
                    a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    u = u ? u.__html : void 0,
                    s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (zr.hasOwnProperty(a) ? (s != null && a === "onScroll" && W("scroll", e),
                    o || u === s || (o = [])) : (o = o || []).push(a, s))
        }
        n && (o = o || []).push("style", n);
        var a = o;
        (t.updateQueue = a) && (t.flags |= 4)
    }
}
;
xp = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function pr(e, t) {
    if (!H)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function de(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function M0(e, t, n) {
    var r = t.pendingProps;
    switch (zs(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return de(t),
        null;
    case 1:
        return ke(t.type) && Yi(),
        de(t),
        null;
    case 3:
        return r = t.stateNode,
        bn(),
        B(Ee),
        B(me),
        Bs(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (wi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Ye !== null && (Qu(Ye),
        Ye = null))),
        Au(e, t),
        de(t),
        null;
    case 5:
        Ws(t);
        var i = nn(br.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            wp(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(C(166));
                return de(t),
                null
            }
            if (e = nn(it.current),
            wi(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[nt] = t,
                r[Vr] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    W("cancel", r),
                    W("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    W("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < Sr.length; i++)
                        W(Sr[i], r);
                    break;
                case "source":
                    W("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    W("error", r),
                    W("load", r);
                    break;
                case "details":
                    W("toggle", r);
                    break;
                case "input":
                    za(r, o),
                    W("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    W("invalid", r);
                    break;
                case "textarea":
                    Ma(r, o),
                    W("invalid", r)
                }
                du(n, o),
                i = null;
                for (var l in o)
                    if (o.hasOwnProperty(l)) {
                        var u = o[l];
                        l === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Si(r.textContent, u, e),
                        i = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Si(r.textContent, u, e),
                        i = ["children", "" + u]) : zr.hasOwnProperty(l) && u != null && l === "onScroll" && W("scroll", r)
                    }
                switch (n) {
                case "input":
                    fi(r),
                    Ia(r, o, !0);
                    break;
                case "textarea":
                    fi(r),
                    La(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = Qi)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                l = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Yf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                    is: r.is
                }) : (e = l.createElement(n),
                n === "select" && (l = e,
                r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n),
                e[nt] = t,
                e[Vr] = r,
                Sp(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (l = pu(n, r),
                    n) {
                    case "dialog":
                        W("cancel", e),
                        W("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        W("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < Sr.length; i++)
                            W(Sr[i], e);
                        i = r;
                        break;
                    case "source":
                        W("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        W("error", e),
                        W("load", e),
                        i = r;
                        break;
                    case "details":
                        W("toggle", e),
                        i = r;
                        break;
                    case "input":
                        za(e, r),
                        i = uu(e, r),
                        W("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = Y({}, r, {
                            value: void 0
                        }),
                        W("invalid", e);
                        break;
                    case "textarea":
                        Ma(e, r),
                        i = cu(e, r),
                        W("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    du(n, i),
                    u = i;
                    for (o in u)
                        if (u.hasOwnProperty(o)) {
                            var s = u[o];
                            o === "style" ? Zf(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && Xf(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Ir(e, s) : typeof s == "number" && Ir(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (zr.hasOwnProperty(o) ? s != null && o === "onScroll" && W("scroll", e) : s != null && gs(e, o, s, l))
                        }
                    switch (n) {
                    case "input":
                        fi(e),
                        Ia(e, r, !1);
                        break;
                    case "textarea":
                        fi(e),
                        La(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Ft(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? zn(e, !!r.multiple, o, !1) : r.defaultValue != null && zn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = Qi)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return de(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            xp(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(C(166));
            if (n = nn(br.current),
            nn(it.current),
            wi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[nt] = t,
                (o = r.nodeValue !== n) && (e = Re,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Si(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Si(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[nt] = t,
                t.stateNode = r
        }
        return de(t),
        null;
    case 13:
        if (B(K),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (H && Oe !== null && t.mode & 1 && !(t.flags & 128))
                Ud(),
                Vn(),
                t.flags |= 98560,
                o = !1;
            else if (o = wi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(C(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(C(317));
                    o[nt] = t
                } else
                    Vn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                de(t),
                o = !1
            } else
                Ye !== null && (Qu(Ye),
                Ye = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || K.current & 1 ? ne === 0 && (ne = 3) : ea())),
        t.updateQueue !== null && (t.flags |= 4),
        de(t),
        null);
    case 4:
        return bn(),
        Au(e, t),
        e === null && Wr(t.stateNode.containerInfo),
        de(t),
        null;
    case 10:
        return Ds(t.type._context),
        de(t),
        null;
    case 17:
        return ke(t.type) && Yi(),
        de(t),
        null;
    case 19:
        if (B(K),
        o = t.memoizedState,
        o === null)
            return de(t),
            null;
        if (r = (t.flags & 128) !== 0,
        l = o.rendering,
        l === null)
            if (r)
                pr(o, !1);
            else {
                if (ne !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (l = to(e),
                        l !== null) {
                            for (t.flags |= 128,
                            pr(o, !1),
                            r = l.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                l = o.alternate,
                                l === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = l.childLanes,
                                o.lanes = l.lanes,
                                o.child = l.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = l.memoizedProps,
                                o.memoizedState = l.memoizedState,
                                o.updateQueue = l.updateQueue,
                                o.type = l.type,
                                e = l.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return F(K, K.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && G() > Qn && (t.flags |= 128,
                r = !0,
                pr(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = to(l),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    pr(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !l.alternate && !H)
                        return de(t),
                        null
                } else
                    2 * G() - o.renderingStartTime > Qn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    pr(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (l.sibling = t.child,
            t.child = l) : (n = o.last,
            n !== null ? n.sibling = l : t.child = l,
            o.last = l)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = G(),
        t.sibling = null,
        n = K.current,
        F(K, r ? n & 1 | 2 : n & 1),
        t) : (de(t),
        null);
    case 22:
    case 23:
        return Js(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ne & 1073741824 && (de(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(C(156, t.tag))
}
function L0(e, t) {
    switch (zs(t),
    t.tag) {
    case 1:
        return ke(t.type) && Yi(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return bn(),
        B(Ee),
        B(me),
        Bs(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Ws(t),
        null;
    case 13:
        if (B(K),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(C(340));
            Vn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return B(K),
        null;
    case 4:
        return bn(),
        null;
    case 10:
        return Ds(t.type._context),
        null;
    case 22:
    case 23:
        return Js(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ki = !1
  , he = !1
  , D0 = typeof WeakSet == "function" ? WeakSet : Set
  , R = null;
function Rn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                X(e, t, r)
            }
        else
            n.current = null
}
function Fu(e, t, n) {
    try {
        n()
    } catch (r) {
        X(e, t, r)
    }
}
var Cc = !1;
function U0(e, t) {
    if (ku = Hi,
    e = Cd(),
    Ts(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var l = 0
                      , u = -1
                      , s = -1
                      , a = 0
                      , h = 0
                      , v = e
                      , p = null;
                    t: for (; ; ) {
                        for (var g; v !== n || i !== 0 && v.nodeType !== 3 || (u = l + i),
                        v !== o || r !== 0 && v.nodeType !== 3 || (s = l + r),
                        v.nodeType === 3 && (l += v.nodeValue.length),
                        (g = v.firstChild) !== null; )
                            p = v,
                            v = g;
                        for (; ; ) {
                            if (v === e)
                                break t;
                            if (p === n && ++a === i && (u = l),
                            p === o && ++h === r && (s = l),
                            (g = v.nextSibling) !== null)
                                break;
                            v = p,
                            p = v.parentNode
                        }
                        v = g
                    }
                    n = u === -1 || s === -1 ? null : {
                        start: u,
                        end: s
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (_u = {
        focusedElem: e,
        selectionRange: n
    },
    Hi = !1,
    R = t; R !== null; )
        if (t = R,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            R = e;
        else
            for (; R !== null; ) {
                t = R;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var d = S.memoizedProps
                                  , y = S.memoizedState
                                  , c = t.stateNode
                                  , f = c.getSnapshotBeforeUpdate(t.elementType === t.type ? d : Ke(t.type, d), y);
                                c.__reactInternalSnapshotBeforeUpdate = f
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(C(163))
                        }
                } catch (x) {
                    X(t, t.return, x)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    R = e;
                    break
                }
                R = t.return
            }
    return S = Cc,
    Cc = !1,
    S
}
function jr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && Fu(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function Ro(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Wu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Ep(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Ep(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[nt],
    delete t[Vr],
    delete t[Nu],
    delete t[w0],
    delete t[x0])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function kp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Pc(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || kp(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Bu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Qi));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Bu(e, t, n),
        e = e.sibling; e !== null; )
            Bu(e, t, n),
            e = e.sibling
}
function Vu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Vu(e, t, n),
        e = e.sibling; e !== null; )
            Vu(e, t, n),
            e = e.sibling
}
var ue = null
  , Qe = !1;
function gt(e, t, n) {
    for (n = n.child; n !== null; )
        _p(e, t, n),
        n = n.sibling
}
function _p(e, t, n) {
    if (rt && typeof rt.onCommitFiberUnmount == "function")
        try {
            rt.onCommitFiberUnmount(Eo, n)
        } catch {}
    switch (n.tag) {
    case 5:
        he || Rn(n, t);
    case 6:
        var r = ue
          , i = Qe;
        ue = null,
        gt(e, t, n),
        ue = r,
        Qe = i,
        ue !== null && (Qe ? (e = ue,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ue.removeChild(n.stateNode));
        break;
    case 18:
        ue !== null && (Qe ? (e = ue,
        n = n.stateNode,
        e.nodeType === 8 ? _l(e.parentNode, n) : e.nodeType === 1 && _l(e, n),
        Ur(e)) : _l(ue, n.stateNode));
        break;
    case 4:
        r = ue,
        i = Qe,
        ue = n.stateNode.containerInfo,
        Qe = !0,
        gt(e, t, n),
        ue = r,
        Qe = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!he && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , l = o.destroy;
                o = o.tag,
                l !== void 0 && (o & 2 || o & 4) && Fu(n, t, l),
                i = i.next
            } while (i !== r)
        }
        gt(e, t, n);
        break;
    case 1:
        if (!he && (Rn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (u) {
                X(n, t, u)
            }
        gt(e, t, n);
        break;
    case 21:
        gt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (he = (r = he) || n.memoizedState !== null,
        gt(e, t, n),
        he = r) : gt(e, t, n);
        break;
    default:
        gt(e, t, n)
    }
}
function Nc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new D0),
        t.forEach(function(r) {
            var i = Q0.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function be(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , l = t
                  , u = l;
                e: for (; u !== null; ) {
                    switch (u.tag) {
                    case 5:
                        ue = u.stateNode,
                        Qe = !1;
                        break e;
                    case 3:
                        ue = u.stateNode.containerInfo,
                        Qe = !0;
                        break e;
                    case 4:
                        ue = u.stateNode.containerInfo,
                        Qe = !0;
                        break e
                    }
                    u = u.return
                }
                if (ue === null)
                    throw Error(C(160));
                _p(o, l, i),
                ue = null,
                Qe = !1;
                var s = i.alternate;
                s !== null && (s.return = null),
                i.return = null
            } catch (a) {
                X(i, t, a)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Cp(t, e),
            t = t.sibling
}
function Cp(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (be(t, e),
        et(e),
        r & 4) {
            try {
                jr(3, e, e.return),
                Ro(3, e)
            } catch (d) {
                X(e, e.return, d)
            }
            try {
                jr(5, e, e.return)
            } catch (d) {
                X(e, e.return, d)
            }
        }
        break;
    case 1:
        be(t, e),
        et(e),
        r & 512 && n !== null && Rn(n, n.return);
        break;
    case 5:
        if (be(t, e),
        et(e),
        r & 512 && n !== null && Rn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Ir(i, "")
            } catch (d) {
                X(e, e.return, d)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , l = n !== null ? n.memoizedProps : o
              , u = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    u === "input" && o.type === "radio" && o.name != null && Kf(i, o),
                    pu(u, l);
                    var a = pu(u, o);
                    for (l = 0; l < s.length; l += 2) {
                        var h = s[l]
                          , v = s[l + 1];
                        h === "style" ? Zf(i, v) : h === "dangerouslySetInnerHTML" ? Xf(i, v) : h === "children" ? Ir(i, v) : gs(i, h, v, a)
                    }
                    switch (u) {
                    case "input":
                        su(i, o);
                        break;
                    case "textarea":
                        Qf(i, o);
                        break;
                    case "select":
                        var p = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var g = o.value;
                        g != null ? zn(i, !!o.multiple, g, !1) : p !== !!o.multiple && (o.defaultValue != null ? zn(i, !!o.multiple, o.defaultValue, !0) : zn(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Vr] = o
                } catch (d) {
                    X(e, e.return, d)
                }
        }
        break;
    case 6:
        if (be(t, e),
        et(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(C(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (d) {
                X(e, e.return, d)
            }
        }
        break;
    case 3:
        if (be(t, e),
        et(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Ur(t.containerInfo)
            } catch (d) {
                X(e, e.return, d)
            }
        break;
    case 4:
        be(t, e),
        et(e);
        break;
    case 13:
        be(t, e),
        et(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (Zs = G())),
        r & 4 && Nc(e);
        break;
    case 22:
        if (h = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (he = (a = he) || h,
        be(t, e),
        he = a) : be(t, e),
        et(e),
        r & 8192) {
            if (a = e.memoizedState !== null,
            (e.stateNode.isHidden = a) && !h && e.mode & 1)
                for (R = e,
                h = e.child; h !== null; ) {
                    for (v = R = h; R !== null; ) {
                        switch (p = R,
                        g = p.child,
                        p.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            jr(4, p, p.return);
                            break;
                        case 1:
                            Rn(p, p.return);
                            var S = p.stateNode;
                            if (typeof S.componentWillUnmount == "function") {
                                r = p,
                                n = p.return;
                                try {
                                    t = r,
                                    S.props = t.memoizedProps,
                                    S.state = t.memoizedState,
                                    S.componentWillUnmount()
                                } catch (d) {
                                    X(r, n, d)
                                }
                            }
                            break;
                        case 5:
                            Rn(p, p.return);
                            break;
                        case 22:
                            if (p.memoizedState !== null) {
                                Oc(v);
                                continue
                            }
                        }
                        g !== null ? (g.return = p,
                        R = g) : Oc(v)
                    }
                    h = h.sibling
                }
            e: for (h = null,
            v = e; ; ) {
                if (v.tag === 5) {
                    if (h === null) {
                        h = v;
                        try {
                            i = v.stateNode,
                            a ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = v.stateNode,
                            s = v.memoizedProps.style,
                            l = s != null && s.hasOwnProperty("display") ? s.display : null,
                            u.style.display = Gf("display", l))
                        } catch (d) {
                            X(e, e.return, d)
                        }
                    }
                } else if (v.tag === 6) {
                    if (h === null)
                        try {
                            v.stateNode.nodeValue = a ? "" : v.memoizedProps
                        } catch (d) {
                            X(e, e.return, d)
                        }
                } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
                    v.child.return = v,
                    v = v.child;
                    continue
                }
                if (v === e)
                    break e;
                for (; v.sibling === null; ) {
                    if (v.return === null || v.return === e)
                        break e;
                    h === v && (h = null),
                    v = v.return
                }
                h === v && (h = null),
                v.sibling.return = v.return,
                v = v.sibling
            }
        }
        break;
    case 19:
        be(t, e),
        et(e),
        r & 4 && Nc(e);
        break;
    case 21:
        break;
    default:
        be(t, e),
        et(e)
    }
}
function et(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (kp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(C(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Ir(i, ""),
                r.flags &= -33);
                var o = Pc(e);
                Vu(e, o, i);
                break;
            case 3:
            case 4:
                var l = r.stateNode.containerInfo
                  , u = Pc(e);
                Bu(e, u, l);
                break;
            default:
                throw Error(C(161))
            }
        } catch (s) {
            X(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function A0(e, t, n) {
    R = e,
    Pp(e)
}
function Pp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; R !== null; ) {
        var i = R
          , o = i.child;
        if (i.tag === 22 && r) {
            var l = i.memoizedState !== null || ki;
            if (!l) {
                var u = i.alternate
                  , s = u !== null && u.memoizedState !== null || he;
                u = ki;
                var a = he;
                if (ki = l,
                (he = s) && !a)
                    for (R = i; R !== null; )
                        l = R,
                        s = l.child,
                        l.tag === 22 && l.memoizedState !== null ? Rc(i) : s !== null ? (s.return = l,
                        R = s) : Rc(i);
                for (; o !== null; )
                    R = o,
                    Pp(o),
                    o = o.sibling;
                R = i,
                ki = u,
                he = a
            }
            jc(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            R = o) : jc(e)
    }
}
function jc(e) {
    for (; R !== null; ) {
        var t = R;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        he || Ro(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !he)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Ke(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && fc(t, o, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            fc(t, l, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && n.focus();
                                break;
                            case "img":
                                s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var a = t.alternate;
                            if (a !== null) {
                                var h = a.memoizedState;
                                if (h !== null) {
                                    var v = h.dehydrated;
                                    v !== null && Ur(v)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(C(163))
                    }
                he || t.flags & 512 && Wu(t)
            } catch (p) {
                X(t, t.return, p)
            }
        }
        if (t === e) {
            R = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            R = n;
            break
        }
        R = t.return
    }
}
function Oc(e) {
    for (; R !== null; ) {
        var t = R;
        if (t === e) {
            R = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            R = n;
            break
        }
        R = t.return
    }
}
function Rc(e) {
    for (; R !== null; ) {
        var t = R;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Ro(4, t)
                } catch (s) {
                    X(t, n, s)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (s) {
                        X(t, i, s)
                    }
                }
                var o = t.return;
                try {
                    Wu(t)
                } catch (s) {
                    X(t, o, s)
                }
                break;
            case 5:
                var l = t.return;
                try {
                    Wu(t)
                } catch (s) {
                    X(t, l, s)
                }
            }
        } catch (s) {
            X(t, t.return, s)
        }
        if (t === e) {
            R = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return,
            R = u;
            break
        }
        R = t.return
    }
}
var F0 = Math.ceil
  , io = yt.ReactCurrentDispatcher
  , Xs = yt.ReactCurrentOwner
  , Fe = yt.ReactCurrentBatchConfig
  , M = 0
  , oe = null
  , q = null
  , se = 0
  , Ne = 0
  , Tn = bt(0)
  , ne = 0
  , Xr = null
  , an = 0
  , To = 0
  , Gs = 0
  , Or = null
  , we = null
  , Zs = 0
  , Qn = 1 / 0
  , ut = null
  , oo = !1
  , Hu = null
  , It = null
  , _i = !1
  , Nt = null
  , lo = 0
  , Rr = 0
  , bu = null
  , Li = -1
  , Di = 0;
function ye() {
    return M & 6 ? G() : Li !== -1 ? Li : Li = G()
}
function Mt(e) {
    return e.mode & 1 ? M & 2 && se !== 0 ? se & -se : k0.transition !== null ? (Di === 0 && (Di = ad()),
    Di) : (e = D,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : vd(e.type)),
    e) : 1
}
function Ze(e, t, n, r) {
    if (50 < Rr)
        throw Rr = 0,
        bu = null,
        Error(C(185));
    ti(e, n, r),
    (!(M & 2) || e !== oe) && (e === oe && (!(M & 2) && (To |= n),
    ne === 4 && _t(e, se)),
    _e(e, r),
    n === 1 && M === 0 && !(t.mode & 1) && (Qn = G() + 500,
    No && Kt()))
}
function _e(e, t) {
    var n = e.callbackNode;
    km(e, t);
    var r = Vi(e, e === oe ? se : 0);
    if (r === 0)
        n !== null && Aa(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Aa(n),
        t === 1)
            e.tag === 0 ? E0(Tc.bind(null, e)) : Md(Tc.bind(null, e)),
            g0(function() {
                !(M & 6) && Kt()
            }),
            n = null;
        else {
            switch (cd(r)) {
            case 1:
                n = ks;
                break;
            case 4:
                n = ud;
                break;
            case 16:
                n = Bi;
                break;
            case 536870912:
                n = sd;
                break;
            default:
                n = Bi
            }
            n = Ip(n, Np.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Np(e, t) {
    if (Li = -1,
    Di = 0,
    M & 6)
        throw Error(C(327));
    var n = e.callbackNode;
    if (Un() && e.callbackNode !== n)
        return null;
    var r = Vi(e, e === oe ? se : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = uo(e, r);
    else {
        t = r;
        var i = M;
        M |= 2;
        var o = Op();
        (oe !== e || se !== t) && (ut = null,
        Qn = G() + 500,
        rn(e, t));
        do
            try {
                V0();
                break
            } catch (u) {
                jp(e, u)
            }
        while (1);
        Ls(),
        io.current = o,
        M = i,
        q !== null ? t = 0 : (oe = null,
        se = 0,
        t = ne)
    }
    if (t !== 0) {
        if (t === 2 && (i = gu(e),
        i !== 0 && (r = i,
        t = Ku(e, i))),
        t === 1)
            throw n = Xr,
            rn(e, 0),
            _t(e, r),
            _e(e, G()),
            n;
        if (t === 6)
            _t(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !W0(i) && (t = uo(e, r),
            t === 2 && (o = gu(e),
            o !== 0 && (r = o,
            t = Ku(e, o))),
            t === 1))
                throw n = Xr,
                rn(e, 0),
                _t(e, r),
                _e(e, G()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(C(345));
            case 2:
                qt(e, we, ut);
                break;
            case 3:
                if (_t(e, r),
                (r & 130023424) === r && (t = Zs + 500 - G(),
                10 < t)) {
                    if (Vi(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        ye(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = Pu(qt.bind(null, e, we, ut), t);
                    break
                }
                qt(e, we, ut);
                break;
            case 4:
                if (_t(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var l = 31 - Ge(r);
                    o = 1 << l,
                    l = t[l],
                    l > i && (i = l),
                    r &= ~o
                }
                if (r = i,
                r = G() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * F0(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Pu(qt.bind(null, e, we, ut), r);
                    break
                }
                qt(e, we, ut);
                break;
            case 5:
                qt(e, we, ut);
                break;
            default:
                throw Error(C(329))
            }
        }
    }
    return _e(e, G()),
    e.callbackNode === n ? Np.bind(null, e) : null
}
function Ku(e, t) {
    var n = Or;
    return e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
    e = uo(e, t),
    e !== 2 && (t = we,
    we = n,
    t !== null && Qu(t)),
    e
}
function Qu(e) {
    we === null ? we = e : we.push.apply(we, e)
}
function W0(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!qe(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function _t(e, t) {
    for (t &= ~Gs,
    t &= ~To,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Ge(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Tc(e) {
    if (M & 6)
        throw Error(C(327));
    Un();
    var t = Vi(e, 0);
    if (!(t & 1))
        return _e(e, G()),
        null;
    var n = uo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = gu(e);
        r !== 0 && (t = r,
        n = Ku(e, r))
    }
    if (n === 1)
        throw n = Xr,
        rn(e, 0),
        _t(e, t),
        _e(e, G()),
        n;
    if (n === 6)
        throw Error(C(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    qt(e, we, ut),
    _e(e, G()),
    null
}
function qs(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n,
        M === 0 && (Qn = G() + 500,
        No && Kt())
    }
}
function cn(e) {
    Nt !== null && Nt.tag === 0 && !(M & 6) && Un();
    var t = M;
    M |= 1;
    var n = Fe.transition
      , r = D;
    try {
        if (Fe.transition = null,
        D = 1,
        e)
            return e()
    } finally {
        D = r,
        Fe.transition = n,
        M = t,
        !(M & 6) && Kt()
    }
}
function Js() {
    Ne = Tn.current,
    B(Tn)
}
function rn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    y0(n)),
    q !== null)
        for (n = q.return; n !== null; ) {
            var r = n;
            switch (zs(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Yi();
                break;
            case 3:
                bn(),
                B(Ee),
                B(me),
                Bs();
                break;
            case 5:
                Ws(r);
                break;
            case 4:
                bn();
                break;
            case 13:
                B(K);
                break;
            case 19:
                B(K);
                break;
            case 10:
                Ds(r.type._context);
                break;
            case 22:
            case 23:
                Js()
            }
            n = n.return
        }
    if (oe = e,
    q = e = Lt(e.current, null),
    se = Ne = t,
    ne = 0,
    Xr = null,
    Gs = To = an = 0,
    we = Or = null,
    tn !== null) {
        for (t = 0; t < tn.length; t++)
            if (n = tn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var l = o.next;
                    o.next = i,
                    r.next = l
                }
                n.pending = r
            }
        tn = null
    }
    return e
}
function jp(e, t) {
    do {
        var n = q;
        try {
            if (Ls(),
            zi.current = ro,
            no) {
                for (var r = Q.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                no = !1
            }
            if (sn = 0,
            ie = te = Q = null,
            Nr = !1,
            Kr = 0,
            Xs.current = null,
            n === null || n.return === null) {
                ne = 1,
                Xr = t,
                q = null;
                break
            }
            e: {
                var o = e
                  , l = n.return
                  , u = n
                  , s = t;
                if (t = se,
                u.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var a = s
                      , h = u
                      , v = h.tag;
                    if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
                        var p = h.alternate;
                        p ? (h.updateQueue = p.updateQueue,
                        h.memoizedState = p.memoizedState,
                        h.lanes = p.lanes) : (h.updateQueue = null,
                        h.memoizedState = null)
                    }
                    var g = gc(l);
                    if (g !== null) {
                        g.flags &= -257,
                        Sc(g, l, u, o, t),
                        g.mode & 1 && yc(o, a, t),
                        t = g,
                        s = a;
                        var S = t.updateQueue;
                        if (S === null) {
                            var d = new Set;
                            d.add(s),
                            t.updateQueue = d
                        } else
                            S.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            yc(o, a, t),
                            ea();
                            break e
                        }
                        s = Error(C(426))
                    }
                } else if (H && u.mode & 1) {
                    var y = gc(l);
                    if (y !== null) {
                        !(y.flags & 65536) && (y.flags |= 256),
                        Sc(y, l, u, o, t),
                        Is(Kn(s, u));
                        break e
                    }
                }
                o = s = Kn(s, u),
                ne !== 4 && (ne = 2),
                Or === null ? Or = [o] : Or.push(o),
                o = l;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var c = fp(o, s, t);
                        cc(o, c);
                        break e;
                    case 1:
                        u = s;
                        var f = o.type
                          , m = o.stateNode;
                        if (!(o.flags & 128) && (typeof f.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (It === null || !It.has(m)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var x = dp(o, u, t);
                            cc(o, x);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            Tp(n)
        } catch (E) {
            t = E,
            q === n && n !== null && (q = n = n.return);
            continue
        }
        break
    } while (1)
}
function Op() {
    var e = io.current;
    return io.current = ro,
    e === null ? ro : e
}
function ea() {
    (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    oe === null || !(an & 268435455) && !(To & 268435455) || _t(oe, se)
}
function uo(e, t) {
    var n = M;
    M |= 2;
    var r = Op();
    (oe !== e || se !== t) && (ut = null,
    rn(e, t));
    do
        try {
            B0();
            break
        } catch (i) {
            jp(e, i)
        }
    while (1);
    if (Ls(),
    M = n,
    io.current = r,
    q !== null)
        throw Error(C(261));
    return oe = null,
    se = 0,
    ne
}
function B0() {
    for (; q !== null; )
        Rp(q)
}
function V0() {
    for (; q !== null && !hm(); )
        Rp(q)
}
function Rp(e) {
    var t = zp(e.alternate, e, Ne);
    e.memoizedProps = e.pendingProps,
    t === null ? Tp(e) : q = t,
    Xs.current = null
}
function Tp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = L0(n, t),
            n !== null) {
                n.flags &= 32767,
                q = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ne = 6,
                q = null;
                return
            }
        } else if (n = M0(n, t, Ne),
        n !== null) {
            q = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            q = t;
            return
        }
        q = t = e
    } while (t !== null);
    ne === 0 && (ne = 5)
}
function qt(e, t, n) {
    var r = D
      , i = Fe.transition;
    try {
        Fe.transition = null,
        D = 1,
        H0(e, t, n, r)
    } finally {
        Fe.transition = i,
        D = r
    }
    return null
}
function H0(e, t, n, r) {
    do
        Un();
    while (Nt !== null);
    if (M & 6)
        throw Error(C(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(C(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (_m(e, o),
    e === oe && (q = oe = null,
    se = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || _i || (_i = !0,
    Ip(Bi, function() {
        return Un(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = Fe.transition,
        Fe.transition = null;
        var l = D;
        D = 1;
        var u = M;
        M |= 4,
        Xs.current = null,
        U0(e, n),
        Cp(n, e),
        c0(_u),
        Hi = !!ku,
        _u = ku = null,
        e.current = n,
        A0(n),
        mm(),
        M = u,
        D = l,
        Fe.transition = o
    } else
        e.current = n;
    if (_i && (_i = !1,
    Nt = e,
    lo = i),
    o = e.pendingLanes,
    o === 0 && (It = null),
    gm(n.stateNode),
    _e(e, G()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (oo)
        throw oo = !1,
        e = Hu,
        Hu = null,
        e;
    return lo & 1 && e.tag !== 0 && Un(),
    o = e.pendingLanes,
    o & 1 ? e === bu ? Rr++ : (Rr = 0,
    bu = e) : Rr = 0,
    Kt(),
    null
}
function Un() {
    if (Nt !== null) {
        var e = cd(lo)
          , t = Fe.transition
          , n = D;
        try {
            if (Fe.transition = null,
            D = 16 > e ? 16 : e,
            Nt === null)
                var r = !1;
            else {
                if (e = Nt,
                Nt = null,
                lo = 0,
                M & 6)
                    throw Error(C(331));
                var i = M;
                for (M |= 4,
                R = e.current; R !== null; ) {
                    var o = R
                      , l = o.child;
                    if (R.flags & 16) {
                        var u = o.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var a = u[s];
                                for (R = a; R !== null; ) {
                                    var h = R;
                                    switch (h.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        jr(8, h, o)
                                    }
                                    var v = h.child;
                                    if (v !== null)
                                        v.return = h,
                                        R = v;
                                    else
                                        for (; R !== null; ) {
                                            h = R;
                                            var p = h.sibling
                                              , g = h.return;
                                            if (Ep(h),
                                            h === a) {
                                                R = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = g,
                                                R = p;
                                                break
                                            }
                                            R = g
                                        }
                                }
                            }
                            var S = o.alternate;
                            if (S !== null) {
                                var d = S.child;
                                if (d !== null) {
                                    S.child = null;
                                    do {
                                        var y = d.sibling;
                                        d.sibling = null,
                                        d = y
                                    } while (d !== null)
                                }
                            }
                            R = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && l !== null)
                        l.return = o,
                        R = l;
                    else
                        e: for (; R !== null; ) {
                            if (o = R,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    jr(9, o, o.return)
                                }
                            var c = o.sibling;
                            if (c !== null) {
                                c.return = o.return,
                                R = c;
                                break e
                            }
                            R = o.return
                        }
                }
                var f = e.current;
                for (R = f; R !== null; ) {
                    l = R;
                    var m = l.child;
                    if (l.subtreeFlags & 2064 && m !== null)
                        m.return = l,
                        R = m;
                    else
                        e: for (l = f; R !== null; ) {
                            if (u = R,
                            u.flags & 2048)
                                try {
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ro(9, u)
                                    }
                                } catch (E) {
                                    X(u, u.return, E)
                                }
                            if (u === l) {
                                R = null;
                                break e
                            }
                            var x = u.sibling;
                            if (x !== null) {
                                x.return = u.return,
                                R = x;
                                break e
                            }
                            R = u.return
                        }
                }
                if (M = i,
                Kt(),
                rt && typeof rt.onPostCommitFiberRoot == "function")
                    try {
                        rt.onPostCommitFiberRoot(Eo, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            D = n,
            Fe.transition = t
        }
    }
    return !1
}
function $c(e, t, n) {
    t = Kn(n, t),
    t = fp(e, t, 1),
    e = zt(e, t, 1),
    t = ye(),
    e !== null && (ti(e, 1, t),
    _e(e, t))
}
function X(e, t, n) {
    if (e.tag === 3)
        $c(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                $c(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (It === null || !It.has(r))) {
                    e = Kn(n, e),
                    e = dp(t, e, 1),
                    t = zt(t, e, 1),
                    e = ye(),
                    t !== null && (ti(t, 1, e),
                    _e(t, e));
                    break
                }
            }
            t = t.return
        }
}
function b0(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ye(),
    e.pingedLanes |= e.suspendedLanes & n,
    oe === e && (se & n) === n && (ne === 4 || ne === 3 && (se & 130023424) === se && 500 > G() - Zs ? rn(e, 0) : Gs |= n),
    _e(e, t)
}
function $p(e, t) {
    t === 0 && (e.mode & 1 ? (t = hi,
    hi <<= 1,
    !(hi & 130023424) && (hi = 4194304)) : t = 1);
    var n = ye();
    e = ht(e, t),
    e !== null && (ti(e, t, n),
    _e(e, n))
}
function K0(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    $p(e, n)
}
function Q0(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(C(314))
    }
    r !== null && r.delete(t),
    $p(e, n)
}
var zp;
zp = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ee.current)
            xe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return xe = !1,
                I0(e, t, n);
            xe = !!(e.flags & 131072)
        }
    else
        xe = !1,
        H && t.flags & 1048576 && Ld(t, Zi, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Mi(e, t),
        e = t.pendingProps;
        var i = Bn(t, me.current);
        Dn(t, n),
        i = Hs(null, t, r, e, i, n);
        var o = bs();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        ke(r) ? (o = !0,
        Xi(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        As(t),
        i.updater = jo,
        t.stateNode = i,
        i._reactInternals = t,
        zu(t, r, e, n),
        t = Lu(null, t, r, !0, o, n)) : (t.tag = 0,
        H && o && $s(t),
        ve(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Mi(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = X0(r),
            e = Ke(r, e),
            i) {
            case 0:
                t = Mu(null, t, r, e, n);
                break e;
            case 1:
                t = Ec(null, t, r, e, n);
                break e;
            case 11:
                t = wc(null, t, r, e, n);
                break e;
            case 14:
                t = xc(null, t, r, Ke(r.type, e), n);
                break e
            }
            throw Error(C(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ke(r, i),
        Mu(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ke(r, i),
        Ec(e, t, r, i, n);
    case 3:
        e: {
            if (vp(t),
            e === null)
                throw Error(C(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            Fd(e, t),
            eo(t, r, null, n);
            var l = t.memoizedState;
            if (r = l.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = Kn(Error(C(423)), t),
                    t = kc(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Kn(Error(C(424)), t),
                    t = kc(e, t, r, n, i);
                    break e
                } else
                    for (Oe = $t(t.stateNode.containerInfo.firstChild),
                    Re = t,
                    H = !0,
                    Ye = null,
                    n = Hd(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Vn(),
                r === i) {
                    t = mt(e, t, n);
                    break e
                }
                ve(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return bd(t),
        e === null && Ru(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        l = i.children,
        Cu(r, i) ? l = null : o !== null && Cu(r, o) && (t.flags |= 32),
        mp(e, t),
        ve(e, t, l, n),
        t.child;
    case 6:
        return e === null && Ru(t),
        null;
    case 13:
        return yp(e, t, n);
    case 4:
        return Fs(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Hn(t, null, r, n) : ve(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ke(r, i),
        wc(e, t, r, i, n);
    case 7:
        return ve(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ve(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ve(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            l = i.value,
            F(qi, r._currentValue),
            r._currentValue = l,
            o !== null)
                if (qe(o.value, l)) {
                    if (o.children === i.children && !Ee.current) {
                        t = mt(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var u = o.dependencies;
                        if (u !== null) {
                            l = o.child;
                            for (var s = u.firstContext; s !== null; ) {
                                if (s.context === r) {
                                    if (o.tag === 1) {
                                        s = ft(-1, n & -n),
                                        s.tag = 2;
                                        var a = o.updateQueue;
                                        if (a !== null) {
                                            a = a.shared;
                                            var h = a.pending;
                                            h === null ? s.next = s : (s.next = h.next,
                                            h.next = s),
                                            a.pending = s
                                        }
                                    }
                                    o.lanes |= n,
                                    s = o.alternate,
                                    s !== null && (s.lanes |= n),
                                    Tu(o.return, n, t),
                                    u.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (o.tag === 10)
                            l = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (l = o.return,
                            l === null)
                                throw Error(C(341));
                            l.lanes |= n,
                            u = l.alternate,
                            u !== null && (u.lanes |= n),
                            Tu(l, n, t),
                            l = o.sibling
                        } else
                            l = o.child;
                        if (l !== null)
                            l.return = o;
                        else
                            for (l = o; l !== null; ) {
                                if (l === t) {
                                    l = null;
                                    break
                                }
                                if (o = l.sibling,
                                o !== null) {
                                    o.return = l.return,
                                    l = o;
                                    break
                                }
                                l = l.return
                            }
                        o = l
                    }
            ve(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Dn(t, n),
        i = Be(i),
        r = r(i),
        t.flags |= 1,
        ve(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = Ke(r, t.pendingProps),
        i = Ke(r.type, i),
        xc(e, t, r, i, n);
    case 15:
        return pp(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ke(r, i),
        Mi(e, t),
        t.tag = 1,
        ke(r) ? (e = !0,
        Xi(t)) : e = !1,
        Dn(t, n),
        Bd(t, r, i),
        zu(t, r, i, n),
        Lu(null, t, r, !0, e, n);
    case 19:
        return gp(e, t, n);
    case 22:
        return hp(e, t, n)
    }
    throw Error(C(156, t.tag))
}
;
function Ip(e, t) {
    return ld(e, t)
}
function Y0(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ae(e, t, n, r) {
    return new Y0(e,t,n,r)
}
function ta(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function X0(e) {
    if (typeof e == "function")
        return ta(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === ws)
            return 11;
        if (e === xs)
            return 14
    }
    return 2
}
function Lt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ae(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Ui(e, t, n, r, i, o) {
    var l = 2;
    if (r = e,
    typeof e == "function")
        ta(e) && (l = 1);
    else if (typeof e == "string")
        l = 5;
    else
        e: switch (e) {
        case xn:
            return on(n.children, i, o, t);
        case Ss:
            l = 8,
            i |= 8;
            break;
        case ru:
            return e = Ae(12, n, t, i | 2),
            e.elementType = ru,
            e.lanes = o,
            e;
        case iu:
            return e = Ae(13, n, t, i),
            e.elementType = iu,
            e.lanes = o,
            e;
        case ou:
            return e = Ae(19, n, t, i),
            e.elementType = ou,
            e.lanes = o,
            e;
        case Vf:
            return $o(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Wf:
                    l = 10;
                    break e;
                case Bf:
                    l = 9;
                    break e;
                case ws:
                    l = 11;
                    break e;
                case xs:
                    l = 14;
                    break e;
                case xt:
                    l = 16,
                    r = null;
                    break e
                }
            throw Error(C(130, e == null ? e : typeof e, ""))
        }
    return t = Ae(l, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function on(e, t, n, r) {
    return e = Ae(7, e, r, t),
    e.lanes = n,
    e
}
function $o(e, t, n, r) {
    return e = Ae(22, e, r, t),
    e.elementType = Vf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function $l(e, t, n) {
    return e = Ae(6, e, null, t),
    e.lanes = n,
    e
}
function zl(e, t, n) {
    return t = Ae(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function G0(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = pl(0),
    this.expirationTimes = pl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = pl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function na(e, t, n, r, i, o, l, u, s) {
    return e = new G0(e,t,n,u,s),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = Ae(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    As(o),
    e
}
function Z0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: wn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Mp(e) {
    if (!e)
        return Wt;
    e = e._reactInternals;
    e: {
        if (pn(e) !== e || e.tag !== 1)
            throw Error(C(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (ke(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(C(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ke(n))
            return Id(e, n, t)
    }
    return t
}
function Lp(e, t, n, r, i, o, l, u, s) {
    return e = na(n, r, !0, e, i, o, l, u, s),
    e.context = Mp(null),
    n = e.current,
    r = ye(),
    i = Mt(n),
    o = ft(r, i),
    o.callback = t ?? null,
    zt(n, o, i),
    e.current.lanes = i,
    ti(e, i, r),
    _e(e, r),
    e
}
function zo(e, t, n, r) {
    var i = t.current
      , o = ye()
      , l = Mt(i);
    return n = Mp(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = ft(o, l),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = zt(i, t, l),
    e !== null && (Ze(e, i, l, o),
    $i(e, i, l)),
    l
}
function so(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function zc(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function ra(e, t) {
    zc(e, t),
    (e = e.alternate) && zc(e, t)
}
function q0() {
    return null
}
var Dp = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function ia(e) {
    this._internalRoot = e
}
Io.prototype.render = ia.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(C(409));
    zo(e, t, null, null)
}
;
Io.prototype.unmount = ia.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        cn(function() {
            zo(null, e, null, null)
        }),
        t[pt] = null
    }
}
;
function Io(e) {
    this._internalRoot = e
}
Io.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = pd();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++)
            ;
        kt.splice(n, 0, e),
        n === 0 && md(e)
    }
}
;
function oa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Mo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Ic() {}
function J0(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var a = so(l);
                o.call(a)
            }
        }
        var l = Lp(t, r, e, 0, null, !1, !1, "", Ic);
        return e._reactRootContainer = l,
        e[pt] = l.current,
        Wr(e.nodeType === 8 ? e.parentNode : e),
        cn(),
        l
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var u = r;
        r = function() {
            var a = so(s);
            u.call(a)
        }
    }
    var s = na(e, 0, !1, null, null, !1, !1, "", Ic);
    return e._reactRootContainer = s,
    e[pt] = s.current,
    Wr(e.nodeType === 8 ? e.parentNode : e),
    cn(function() {
        zo(t, s, n, r)
    }),
    s
}
function Lo(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var l = o;
        if (typeof i == "function") {
            var u = i;
            i = function() {
                var s = so(l);
                u.call(s)
            }
        }
        zo(t, l, e, i)
    } else
        l = J0(n, t, e, i, r);
    return so(l)
}
fd = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = gr(t.pendingLanes);
            n !== 0 && (_s(t, n | 1),
            _e(t, G()),
            !(M & 6) && (Qn = G() + 500,
            Kt()))
        }
        break;
    case 13:
        cn(function() {
            var r = ht(e, 1);
            if (r !== null) {
                var i = ye();
                Ze(r, e, 1, i)
            }
        }),
        ra(e, 1)
    }
}
;
Cs = function(e) {
    if (e.tag === 13) {
        var t = ht(e, 134217728);
        if (t !== null) {
            var n = ye();
            Ze(t, e, 134217728, n)
        }
        ra(e, 134217728)
    }
}
;
dd = function(e) {
    if (e.tag === 13) {
        var t = Mt(e)
          , n = ht(e, t);
        if (n !== null) {
            var r = ye();
            Ze(n, e, t, r)
        }
        ra(e, t)
    }
}
;
pd = function() {
    return D
}
;
hd = function(e, t) {
    var n = D;
    try {
        return D = e,
        t()
    } finally {
        D = n
    }
}
;
mu = function(e, t, n) {
    switch (t) {
    case "input":
        if (su(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Po(r);
                    if (!i)
                        throw Error(C(90));
                    bf(r),
                    su(r, i)
                }
            }
        }
        break;
    case "textarea":
        Qf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && zn(e, !!n.multiple, t, !1)
    }
}
;
ed = qs;
td = cn;
var ev = {
    usingClientEntryPoint: !1,
    Events: [ri, Cn, Po, qf, Jf, qs]
}
  , hr = {
    findFiberByHostInstance: en,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , tv = {
    bundleType: hr.bundleType,
    version: hr.version,
    rendererPackageName: hr.rendererPackageName,
    rendererConfig: hr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = id(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: hr.findFiberByHostInstance || q0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ci.isDisabled && Ci.supportsFiber)
        try {
            Eo = Ci.inject(tv),
            rt = Ci
        } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ev;
ze.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!oa(t))
        throw Error(C(200));
    return Z0(e, t, null, n)
}
;
ze.createRoot = function(e, t) {
    if (!oa(e))
        throw Error(C(299));
    var n = !1
      , r = ""
      , i = Dp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = na(e, 1, !1, null, null, n, !1, r, i),
    e[pt] = t.current,
    Wr(e.nodeType === 8 ? e.parentNode : e),
    new ia(t)
}
;
ze.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","),
        Error(C(268, e)));
    return e = id(t),
    e = e === null ? null : e.stateNode,
    e
}
;
ze.flushSync = function(e) {
    return cn(e)
}
;
ze.hydrate = function(e, t, n) {
    if (!Mo(t))
        throw Error(C(200));
    return Lo(null, e, t, !0, n)
}
;
ze.hydrateRoot = function(e, t, n) {
    if (!oa(e))
        throw Error(C(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , l = Dp;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    t = Lp(t, null, e, 1, n ?? null, i, !1, o, l),
    e[pt] = t.current,
    Wr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Io(t)
}
;
ze.render = function(e, t, n) {
    if (!Mo(t))
        throw Error(C(200));
    return Lo(null, e, t, !1, n)
}
;
ze.unmountComponentAtNode = function(e) {
    if (!Mo(e))
        throw Error(C(40));
    return e._reactRootContainer ? (cn(function() {
        Lo(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[pt] = null
        })
    }),
    !0) : !1
}
;
ze.unstable_batchedUpdates = qs;
ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Mo(n))
        throw Error(C(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(C(38));
    return Lo(e, t, n, !1, r)
}
;
ze.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
            } catch (n) {
                console.error(n)
            }
    }
    t(),
    e.exports = ze
}
)(qh);
var Mc = $r;
eu.createRoot = Mc.createRoot,
eu.hydrateRoot = Mc.hydrateRoot;
function Up(e) {
    return w.jsxs("svg", {
        ...e,
        id: "icon-game-mines",
        viewBox: "0 0 32 32",
        children: [w.jsx("path", {
            d: "M31.813 3.653c-0.842-0.901-2.023-1.476-3.339-1.52l-0.008-0c-0.060-0.003-0.13-0.004-0.201-0.004-1.112 0-2.134 0.383-2.942 1.025l0.010-0.007c-1.333-1.173-3.12-1.747-4.293-0.64l-1.147 1.093c2.488 1.303 4.515 3.189 5.949 5.482l0.037 0.064 0.787-0.693c1.16-1.093 0.747-2.84-0.307-4.24 0.547-0.408 1.236-0.654 1.982-0.654 0.965 0 1.834 0.41 2.442 1.065l0.002 0.002c0.127 0.139 0.31 0.227 0.513 0.227 0.003 0 0.005 0 0.008-0h-0c0.188-0 0.357-0.077 0.48-0.2l0-0c0.136-0.129 0.221-0.311 0.221-0.513 0-0.189-0.074-0.36-0.195-0.487l0 0z"
        }), w.jsx("path", {
            d: "M26 17.093c0 7.18-5.82 13-13 13s-13-5.82-13-13c0-7.18 5.82-13 13-13s13 5.82 13 13z"
        })]
    })
}
function nv(e) {
    return w.jsxs("svg", {
        ...e,
        id: "icon-plinko",
        viewBox: "0 0 32 32",
        children: [w.jsx("path", {
            d: "M16 11.333c-2.577 0-4.667-2.089-4.667-4.667s2.089-4.667 4.667-4.667c2.577 0 4.667 2.089 4.667 4.667v0c0 2.577-2.089 4.667-4.667 4.667v0zM16 4.667c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c0-1.105-0.895-2-2-2v0z"
        }), w.jsx("path", {
            d: "M32 26c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z"
        }), w.jsx("path", {
            d: "M20 26c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z"
        }), w.jsx("path", {
            d: "M8 26c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z"
        }), w.jsx("path", {
            d: "M25.333 16.667c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z"
        }), w.jsx("path", {
            d: "M13.333 16.667c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z"
        })]
    })
}
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Gr() {
    return Gr = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Gr.apply(this, arguments)
}
var jt;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(jt || (jt = {}));
const Lc = "popstate";
function rv(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let {pathname: o, search: l, hash: u} = r.location;
        return Yu("", {
            pathname: o,
            search: l,
            hash: u
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : ao(i)
    }
    return ov(t, n, null, e)
}
function re(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function la(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function iv() {
    return Math.random().toString(36).substr(2, 8)
}
function Dc(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Yu(e, t, n, r) {
    return n === void 0 && (n = null),
    Gr({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Jn(t) : t, {
        state: n,
        key: t && t.key || r || iv()
    })
}
function ao(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Jn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function ov(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: i=document.defaultView, v5Compat: o=!1} = r
      , l = i.history
      , u = jt.Pop
      , s = null
      , a = h();
    a == null && (a = 0,
    l.replaceState(Gr({}, l.state, {
        idx: a
    }), ""));
    function h() {
        return (l.state || {
            idx: null
        }).idx
    }
    function v() {
        u = jt.Pop;
        let y = h()
          , c = y == null ? null : y - a;
        a = y,
        s && s({
            action: u,
            location: d.location,
            delta: c
        })
    }
    function p(y, c) {
        u = jt.Push;
        let f = Yu(d.location, y, c);
        n && n(f, y),
        a = h() + 1;
        let m = Dc(f, a)
          , x = d.createHref(f);
        try {
            l.pushState(m, "", x)
        } catch {
            i.location.assign(x)
        }
        o && s && s({
            action: u,
            location: d.location,
            delta: 1
        })
    }
    function g(y, c) {
        u = jt.Replace;
        let f = Yu(d.location, y, c);
        n && n(f, y),
        a = h();
        let m = Dc(f, a)
          , x = d.createHref(f);
        l.replaceState(m, "", x),
        o && s && s({
            action: u,
            location: d.location,
            delta: 0
        })
    }
    function S(y) {
        let c = i.location.origin !== "null" ? i.location.origin : i.location.href
          , f = typeof y == "string" ? y : ao(y);
        return re(c, "No window.location.(origin|href) available to create URL for href: " + f),
        new URL(f,c)
    }
    let d = {
        get action() {
            return u
        },
        get location() {
            return e(i, l)
        },
        listen(y) {
            if (s)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(Lc, v),
            s = y,
            ()=>{
                i.removeEventListener(Lc, v),
                s = null
            }
        },
        createHref(y) {
            return t(i, y)
        },
        createURL: S,
        encodeLocation(y) {
            let c = S(y);
            return {
                pathname: c.pathname,
                search: c.search,
                hash: c.hash
            }
        },
        push: p,
        replace: g,
        go(y) {
            return l.go(y)
        }
    };
    return d
}
var Uc;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Uc || (Uc = {}));
function lv(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? Jn(t) : t
      , i = ua(r.pathname || "/", n);
    if (i == null)
        return null;
    let o = Ap(e);
    uv(o);
    let l = null;
    for (let u = 0; l == null && u < o.length; ++u)
        l = vv(o[u], Sv(i));
    return l
}
function Ap(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let i = (o,l,u)=>{
        let s = {
            relativePath: u === void 0 ? o.path || "" : u,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: l,
            route: o
        };
        s.relativePath.startsWith("/") && (re(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        s.relativePath = s.relativePath.slice(r.length));
        let a = Dt([r, s.relativePath])
          , h = n.concat(s);
        o.children && o.children.length > 0 && (re(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + a + '".')),
        Ap(o.children, t, h, a)),
        !(o.path == null && !o.index) && t.push({
            path: a,
            score: hv(a, o.index),
            routesMeta: h
        })
    }
    ;
    return e.forEach((o,l)=>{
        var u;
        if (o.path === "" || !((u = o.path) != null && u.includes("?")))
            i(o, l);
        else
            for (let s of Fp(o.path))
                i(o, l, s)
    }
    ),
    t
}
function Fp(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [o, ""] : [o];
    let l = Fp(r.join("/"))
      , u = [];
    return u.push(...l.map(s=>s === "" ? o : [o, s].join("/"))),
    i && u.push(...l),
    u.map(s=>e.startsWith("/") && s === "" ? "/" : s)
}
function uv(e) {
    e.sort((t,n)=>t.score !== n.score ? n.score - t.score : mv(t.routesMeta.map(r=>r.childrenIndex), n.routesMeta.map(r=>r.childrenIndex)))
}
const sv = /^:\w+$/
  , av = 3
  , cv = 2
  , fv = 1
  , dv = 10
  , pv = -2
  , Ac = e=>e === "*";
function hv(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Ac) && (r += pv),
    t && (r += cv),
    n.filter(i=>!Ac(i)).reduce((i,o)=>i + (sv.test(o) ? av : o === "" ? fv : dv), r)
}
function mv(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r,i)=>r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function vv(e, t) {
    let {routesMeta: n} = e
      , r = {}
      , i = "/"
      , o = [];
    for (let l = 0; l < n.length; ++l) {
        let u = n[l]
          , s = l === n.length - 1
          , a = i === "/" ? t : t.slice(i.length) || "/"
          , h = yv({
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: s
        }, a);
        if (!h)
            return null;
        Object.assign(r, h.params);
        let v = u.route;
        o.push({
            params: r,
            pathname: Dt([i, h.pathname]),
            pathnameBase: kv(Dt([i, h.pathnameBase])),
            route: v
        }),
        h.pathnameBase !== "/" && (i = Dt([i, h.pathnameBase]))
    }
    return o
}
function yv(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = gv(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let o = i[0]
      , l = o.replace(/(.)\/+$/, "$1")
      , u = i.slice(1);
    return {
        params: r.reduce((a,h,v)=>{
            if (h === "*") {
                let p = u[v] || "";
                l = o.slice(0, o.length - p.length).replace(/(.)\/+$/, "$1")
            }
            return a[h] = wv(u[v] || "", h),
            a
        }
        , {}),
        pathname: o,
        pathnameBase: l,
        pattern: e
    }
}
function gv(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    la(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (l,u)=>(r.push(u),
    "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push("*"),
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,t ? void 0 : "i"), r]
}
function Sv(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return la(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function wv(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return la(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")),
        e
    }
}
function ua(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function xv(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: i=""} = typeof e == "string" ? Jn(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Ev(n, t) : t,
        search: _v(r),
        hash: Cv(i)
    }
}
function Ev(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i=>{
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Il(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Wp(e) {
    return e.filter((t,n)=>n === 0 || t.route.path && t.route.path.length > 0)
}
function Bp(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = Jn(e) : (i = Gr({}, e),
    re(!i.pathname || !i.pathname.includes("?"), Il("?", "pathname", "search", i)),
    re(!i.pathname || !i.pathname.includes("#"), Il("#", "pathname", "hash", i)),
    re(!i.search || !i.search.includes("#"), Il("#", "search", "hash", i)));
    let o = e === "" || i.pathname === "", l = o ? "/" : i.pathname, u;
    if (r || l == null)
        u = n;
    else {
        let v = t.length - 1;
        if (l.startsWith("..")) {
            let p = l.split("/");
            for (; p[0] === ".."; )
                p.shift(),
                v -= 1;
            i.pathname = p.join("/")
        }
        u = v >= 0 ? t[v] : "/"
    }
    let s = xv(i, u)
      , a = l && l !== "/" && l.endsWith("/")
      , h = (o || l === ".") && n.endsWith("/");
    return !s.pathname.endsWith("/") && (a || h) && (s.pathname += "/"),
    s
}
const Dt = e=>e.join("/").replace(/\/\/+/g, "/")
  , kv = e=>e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , _v = e=>!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , Cv = e=>!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Pv(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Nv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
const jv = typeof Object.is == "function" ? Object.is : Nv
  , {useState: Ov, useEffect: Rv, useLayoutEffect: Tv, useDebugValue: $v} = Jl;
function zv(e, t, n) {
    const r = t()
      , [{inst: i},o] = Ov({
        inst: {
            value: r,
            getSnapshot: t
        }
    });
    return Tv(()=>{
        i.value = r,
        i.getSnapshot = t,
        Ml(i) && o({
            inst: i
        })
    }
    , [e, r, t]),
    Rv(()=>(Ml(i) && o({
        inst: i
    }),
    e(()=>{
        Ml(i) && o({
            inst: i
        })
    }
    )), [e]),
    $v(r),
    r
}
function Ml(e) {
    const t = e.getSnapshot
      , n = e.value;
    try {
        const r = t();
        return !jv(n, r)
    } catch {
        return !0
    }
}
function Iv(e, t, n) {
    return t()
}
const Mv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , Lv = !Mv
  , Dv = Lv ? Iv : zv;
"useSyncExternalStore"in Jl && (e=>e.useSyncExternalStore)(Jl);
const Vp = k.createContext(null)
  , sa = k.createContext(null)
  , er = k.createContext(null)
  , Do = k.createContext(null)
  , tr = k.createContext({
    outlet: null,
    matches: []
})
  , Hp = k.createContext(null);
function Xu() {
    return Xu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Xu.apply(this, arguments)
}
function Uv(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    oi() || re(!1);
    let {basename: r, navigator: i} = k.useContext(er)
      , {hash: o, pathname: l, search: u} = aa(e, {
        relative: n
    })
      , s = l;
    return r !== "/" && (s = l === "/" ? r : Dt([r, l])),
    i.createHref({
        pathname: s,
        search: u,
        hash: o
    })
}
function oi() {
    return k.useContext(Do) != null
}
function nr() {
    return oi() || re(!1),
    k.useContext(Do).location
}
function Av() {
    oi() || re(!1);
    let {basename: e, navigator: t} = k.useContext(er)
      , {matches: n} = k.useContext(tr)
      , {pathname: r} = nr()
      , i = JSON.stringify(Wp(n).map(u=>u.pathnameBase))
      , o = k.useRef(!1);
    return k.useEffect(()=>{
        o.current = !0
    }
    ),
    k.useCallback(function(u, s) {
        if (s === void 0 && (s = {}),
        !o.current)
            return;
        if (typeof u == "number") {
            t.go(u);
            return
        }
        let a = Bp(u, JSON.parse(i), r, s.relative === "path");
        e !== "/" && (a.pathname = a.pathname === "/" ? e : Dt([e, a.pathname])),
        (s.replace ? t.replace : t.push)(a, s.state, s)
    }, [e, t, i, r])
}
function aa(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {matches: r} = k.useContext(tr)
      , {pathname: i} = nr()
      , o = JSON.stringify(Wp(r).map(l=>l.pathnameBase));
    return k.useMemo(()=>Bp(e, JSON.parse(o), i, n === "path"), [e, o, i, n])
}
function Fv(e, t) {
    oi() || re(!1);
    let {navigator: n} = k.useContext(er)
      , r = k.useContext(sa)
      , {matches: i} = k.useContext(tr)
      , o = i[i.length - 1]
      , l = o ? o.params : {};
    o && o.pathname;
    let u = o ? o.pathnameBase : "/";
    o && o.route;
    let s = nr(), a;
    if (t) {
        var h;
        let d = typeof t == "string" ? Jn(t) : t;
        u === "/" || (h = d.pathname) != null && h.startsWith(u) || re(!1),
        a = d
    } else
        a = s;
    let v = a.pathname || "/"
      , p = u === "/" ? v : v.slice(u.length) || "/"
      , g = lv(e, {
        pathname: p
    })
      , S = Hv(g && g.map(d=>Object.assign({}, d, {
        params: Object.assign({}, l, d.params),
        pathname: Dt([u, n.encodeLocation ? n.encodeLocation(d.pathname).pathname : d.pathname]),
        pathnameBase: d.pathnameBase === "/" ? u : Dt([u, n.encodeLocation ? n.encodeLocation(d.pathnameBase).pathname : d.pathnameBase])
    })), i, r || void 0);
    return t && S ? k.createElement(Do.Provider, {
        value: {
            location: Xu({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, a),
            navigationType: jt.Pop
        }
    }, S) : S
}
function Wv() {
    let e = Yv()
      , t = Pv(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    }
      , o = null;
    return k.createElement(k.Fragment, null, k.createElement("h2", null, "Unexpected Application Error!"), k.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? k.createElement("pre", {
        style: i
    }, n) : null, o)
}
class Bv extends k.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location ? {
            error: t.error,
            location: t.location
        } : {
            error: t.error || n.error,
            location: n.location
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error ? k.createElement(tr.Provider, {
            value: this.props.routeContext
        }, k.createElement(Hp.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Vv(e) {
    let {routeContext: t, match: n, children: r} = e
      , i = k.useContext(Vp);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(tr.Provider, {
        value: t
    }, r)
}
function Hv(e, t, n) {
    if (t === void 0 && (t = []),
    e == null)
        if (n != null && n.errors)
            e = n.matches;
        else
            return null;
    let r = e
      , i = n == null ? void 0 : n.errors;
    if (i != null) {
        let o = r.findIndex(l=>l.route.id && (i == null ? void 0 : i[l.route.id]));
        o >= 0 || re(!1),
        r = r.slice(0, Math.min(r.length, o + 1))
    }
    return r.reduceRight((o,l,u)=>{
        let s = l.route.id ? i == null ? void 0 : i[l.route.id] : null
          , a = null;
        n && (l.route.ErrorBoundary ? a = k.createElement(l.route.ErrorBoundary, null) : l.route.errorElement ? a = l.route.errorElement : a = k.createElement(Wv, null));
        let h = t.concat(r.slice(0, u + 1))
          , v = ()=>{
            let p = o;
            return s ? p = a : l.route.Component ? p = k.createElement(l.route.Component, null) : l.route.element && (p = l.route.element),
            k.createElement(Vv, {
                match: l,
                routeContext: {
                    outlet: o,
                    matches: h
                },
                children: p
            })
        }
        ;
        return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0) ? k.createElement(Bv, {
            location: n.location,
            component: a,
            error: s,
            children: v(),
            routeContext: {
                outlet: null,
                matches: h
            }
        }) : v()
    }
    , null)
}
var Fc;
(function(e) {
    e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator"
}
)(Fc || (Fc = {}));
var co;
(function(e) {
    e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator"
}
)(co || (co = {}));
function bv(e) {
    let t = k.useContext(sa);
    return t || re(!1),
    t
}
function Kv(e) {
    let t = k.useContext(tr);
    return t || re(!1),
    t
}
function Qv(e) {
    let t = Kv()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || re(!1),
    n.route.id
}
function Yv() {
    var e;
    let t = k.useContext(Hp)
      , n = bv(co.UseRouteError)
      , r = Qv(co.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r])
}
function wr(e) {
    re(!1)
}
function Xv(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: i=jt.Pop, navigator: o, static: l=!1} = e;
    oi() && re(!1);
    let u = t.replace(/^\/*/, "/")
      , s = k.useMemo(()=>({
        basename: u,
        navigator: o,
        static: l
    }), [u, o, l]);
    typeof r == "string" && (r = Jn(r));
    let {pathname: a="/", search: h="", hash: v="", state: p=null, key: g="default"} = r
      , S = k.useMemo(()=>{
        let d = ua(a, u);
        return d == null ? null : {
            location: {
                pathname: d,
                search: h,
                hash: v,
                state: p,
                key: g
            },
            navigationType: i
        }
    }
    , [u, a, h, v, p, g, i]);
    return S == null ? null : k.createElement(er.Provider, {
        value: s
    }, k.createElement(Do.Provider, {
        children: n,
        value: S
    }))
}
function Gv(e) {
    let {children: t, location: n} = e
      , r = k.useContext(Vp)
      , i = r && !t ? r.router.routes : Gu(t);
    return Fv(i, n)
}
var Wc;
(function(e) {
    e[e.pending = 0] = "pending",
    e[e.success = 1] = "success",
    e[e.error = 2] = "error"
}
)(Wc || (Wc = {}));
new Promise(()=>{}
);
function Gu(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return k.Children.forEach(e, (r,i)=>{
        if (!k.isValidElement(r))
            return;
        let o = [...t, i];
        if (r.type === k.Fragment) {
            n.push.apply(n, Gu(r.props.children, o));
            return
        }
        r.type !== wr && re(!1),
        !r.props.index || !r.props.children || re(!1);
        let l = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (l.children = Gu(r.props.children, o)),
        n.push(l)
    }
    ),
    n
}
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function fo() {
    return fo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    fo.apply(this, arguments)
}
function bp(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
        i = r[o],
        !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function Zv(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function qv(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Zv(e)
}
const Jv = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"]
  , ey = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
function ty(e) {
    let {basename: t, children: n, window: r} = e
      , i = k.useRef();
    i.current == null && (i.current = rv({
        window: r,
        v5Compat: !0
    }));
    let o = i.current
      , [l,u] = k.useState({
        action: o.action,
        location: o.location
    });
    return k.useLayoutEffect(()=>o.listen(u), [o]),
    k.createElement(Xv, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: o
    })
}
const ny = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , ry = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , iy = k.forwardRef(function(t, n) {
    let {onClick: r, relative: i, reloadDocument: o, replace: l, state: u, target: s, to: a, preventScrollReset: h} = t, v = bp(t, Jv), {basename: p} = k.useContext(er), g, S = !1;
    if (typeof a == "string" && ry.test(a) && (g = a,
    ny)) {
        let f = new URL(window.location.href)
          , m = a.startsWith("//") ? new URL(f.protocol + a) : new URL(a)
          , x = ua(m.pathname, p);
        m.origin === f.origin && x != null ? a = x + m.search + m.hash : S = !0
    }
    let d = Uv(a, {
        relative: i
    })
      , y = oy(a, {
        replace: l,
        state: u,
        target: s,
        preventScrollReset: h,
        relative: i
    });
    function c(f) {
        r && r(f),
        f.defaultPrevented || y(f)
    }
    return k.createElement("a", fo({}, v, {
        href: g || d,
        onClick: S || o ? r : c,
        ref: n,
        target: s
    }))
})
  , Ll = k.forwardRef(function(t, n) {
    let {"aria-current": r="page", caseSensitive: i=!1, className: o="", end: l=!1, style: u, to: s, children: a} = t
      , h = bp(t, ey)
      , v = aa(s, {
        relative: h.relative
    })
      , p = nr()
      , g = k.useContext(sa)
      , {navigator: S} = k.useContext(er)
      , d = S.encodeLocation ? S.encodeLocation(v).pathname : v.pathname
      , y = p.pathname
      , c = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
    i || (y = y.toLowerCase(),
    c = c ? c.toLowerCase() : null,
    d = d.toLowerCase());
    let f = y === d || !l && y.startsWith(d) && y.charAt(d.length) === "/", m = c != null && (c === d || !l && c.startsWith(d) && c.charAt(d.length) === "/"), x = f ? r : void 0, E;
    typeof o == "function" ? E = o({
        isActive: f,
        isPending: m
    }) : E = [o, f ? "active" : null, m ? "pending" : null].filter(Boolean).join(" ");
    let _ = typeof u == "function" ? u({
        isActive: f,
        isPending: m
    }) : u;
    return k.createElement(iy, fo({}, h, {
        "aria-current": x,
        className: E,
        ref: n,
        style: _,
        to: s
    }), typeof a == "function" ? a({
        isActive: f,
        isPending: m
    }) : a)
});
var Bc;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmitImpl = "useSubmitImpl",
    e.UseFetcher = "useFetcher"
}
)(Bc || (Bc = {}));
var Vc;
(function(e) {
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Vc || (Vc = {}));
function oy(e, t) {
    let {target: n, replace: r, state: i, preventScrollReset: o, relative: l} = t === void 0 ? {} : t
      , u = Av()
      , s = nr()
      , a = aa(e, {
        relative: l
    });
    return k.useCallback(h=>{
        if (qv(h, n)) {
            h.preventDefault();
            let v = r !== void 0 ? r : ao(s) === ao(a);
            u(e, {
                replace: v,
                state: i,
                preventScrollReset: o,
                relative: l
            })
        }
    }
    , [s, u, a, r, i, n, e, o, l])
}
function ly(e) {
    return w.jsxs("svg", {
        ...e,
        viewBox: "0 0 32 32",
        children: [w.jsx("path", {
            d: "M16 3.080c7.136 0 12.92 5.784 12.92 12.92s-5.784 12.92-12.92 12.92c-7.136 0-12.92-5.784-12.92-12.92v0c0.008-7.132 5.788-12.912 12.919-12.92h0.001zM16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16v0c0-8.837-7.163-16-16-16v0z"
        }), w.jsx("path", {
            d: "M16 9.44c3.623 0 6.56 2.937 6.56 6.56s-2.937 6.56-6.56 6.56c-3.623 0-6.56-2.937-6.56-6.56v0c0.008-3.62 2.94-6.552 6.559-6.56h0.001zM16 6.36c-5.324 0-9.64 4.316-9.64 9.64s4.316 9.64 9.64 9.64c5.324 0 9.64-4.316 9.64-9.64v0c0-5.324-4.316-9.64-9.64-9.64v0z"
        }), w.jsx("path", {
            d: "M19.28 16c0 1.811-1.468 3.28-3.28 3.28s-3.28-1.468-3.28-3.28c0-1.812 1.469-3.28 3.28-3.28s3.28 1.469 3.28 3.28z"
        })]
    })
}
function uy() {
    return w.jsxs("div", {
        className: "navbar",
        children: [w.jsxs(Ll, {
            to: "/plinko",
            children: [w.jsx(nv, {
                fill: "white",
                width: "1rem"
            }), w.jsx("span", {
                children: "Plinko"
            })]
        }), w.jsxs(Ll, {
            to: "/mines",
            children: [w.jsx(Up, {
                fill: "white",
                width: "1rem"
            }), w.jsx("span", {
                children: "Mines"
            })]
        }), w.jsxs(Ll, {
            to: "/limbo",
            children: [w.jsx(ly, {
                fill: "white",
                width: "1rem"
            }), w.jsx("span", {
                children: "Limbo"
            })]
        })]
    })
}
function ot({onChange: e, placeholder: t, innerRef: n, onEnter: r, ...i}) {
    function o(l) {
        l.key === "Enter" && (r == null || r())
    }
    return w.jsx("input", {
        ref: n,
        ...i,
        className: "text-5xl",
        onKeyUp: o,
        onChange: e,
        placeholder: t,
        onFocus: l=>l.target.select()
    })
}
const sy = (e,t,n)=>{
    function r(d, y, c) {
        let f = 0
          , m = [1e3, 130, 26, 9, 4, 2, .2, .2, .2, .2, .2, 2, 4, 9, 26, 130, 1e3];
        return u(o(d, y, c, 128)).forEach(x=>{
            let E = Math.floor(x * 2);
            f += E
        }
        ),
        m[f]
    }
    let i = (d,y)=>CryptoJS.HmacSHA256(y, d)
      , o = (d,y,c,f,m)=>{
        let x = ""
          , E = 0;
        for (; x.length < f; )
            x += i(d, `${y}:${c || 0}:${E++}`);
        return x.length > f && (x = x.substring(0, f)),
        m && (x = x.substring(f - m, f)),
        x
    }
      , l = d=>{
        let y = 0;
        for (let c = 0; c < 4; c++)
            y += parseInt(d.substr(c * 2, 2), 16) / Math.pow(256, c + 1);
        return y
    }
      , u = d=>{
        let y = [];
        for (let c = 0; c * 8 < d.length; c++)
            y.push(l(d.substr(c * 8)));
        return y
    }
      , s = {
        nonces: {
            "1000x": [],
            "130x": []
        },
        maxLoss: 0,
        profit: 0,
        serverSeed: e,
        clientSeed: t
    }
      , a = 0;
    const h = 1e12
      , v = 1;
    let p = h
      , g = h
      , S = !0;
    for ((isNaN(n) || n == 0) && (n = 1e5); a++ <= n; ) {
        let d = r(e, t, a);
        p -= v,
        p += v * d,
        S && p < g && (g = p),
        d === 1e3 ? (s.nonces["1000x"].length === 0 && (s.profit = Math.round(p - h),
        s.maxLoss = Math.round(h - g),
        S = !1),
        s.nonces["1000x"].push(a)) : d === 130 && s.nonces["130x"].push(a)
    }
    return s
}
;
var Hc = Object.prototype.hasOwnProperty;
function Zu(e, t) {
    var n, r;
    if (e === t)
        return !0;
    if (e && t && (n = e.constructor) === t.constructor) {
        if (n === Date)
            return e.getTime() === t.getTime();
        if (n === RegExp)
            return e.toString() === t.toString();
        if (n === Array) {
            if ((r = e.length) === t.length)
                for (; r-- && Zu(e[r], t[r]); )
                    ;
            return r === -1
        }
        if (!n || typeof e == "object") {
            r = 0;
            for (n in e)
                if (Hc.call(e, n) && ++r && !Hc.call(t, n) || !(n in t) || !Zu(e[n], t[n]))
                    return !1;
            return Object.keys(t).length === r
        }
    }
    return e !== e && t !== t
}
var qu, ay = function(e) {
    return function(t) {
        return Promise.resolve(e.fn.apply(e, t.data[0])).then(function(n) {
            var r, i = e.transferable === "auto" && (r = n,
            "ArrayBuffer"in self && r instanceof ArrayBuffer || "MessagePort"in self && r instanceof MessagePort || "ImageBitmap"in self && r instanceof ImageBitmap || "OffscreenCanvas"in self && r instanceof OffscreenCanvas) ? [n] : [];
            postMessage(["SUCCESS", n], i)
        }).catch(function(n) {
            postMessage(["ERROR", n])
        })
    }
}, cy = function(e, t, n) {
    var r = `
    ` + function(o) {
        return o.length === 0 ? "" : "importScripts(" + o.map(function(l) {
            return "'" + l + "'"
        }).toString() + ")"
    }(t) + `;
    onmessage=(` + ay + `)({
      fn: (` + e + `),
      transferable: '` + n + `'
    })
  `
      , i = new Blob([r],{
        type: "text/javascript"
    });
    return URL.createObjectURL(i)
};
(function(e) {
    e.PENDING = "PENDING",
    e.SUCCESS = "SUCCESS",
    e.RUNNING = "RUNNING",
    e.ERROR = "ERROR",
    e.TIMEOUT_EXPIRED = "TIMEOUT_EXPIRED"
}
)(qu || (qu = {}));
var po, St = qu;
(function(e) {
    e.AUTO = "auto",
    e.NONE = "none"
}
)(po || (po = {}));
var Gt = {
    timeout: void 0,
    remoteDependencies: [],
    autoTerminate: !0,
    transferable: po.AUTO
}
  , ca = function(e, t) {
    t === void 0 && (t = Gt);
    var n, r, i, o = ee.useState(St.PENDING), l = o[0], u = o[1], s = ee.useRef(), a = ee.useRef(!1), h = ee.useRef({}), v = ee.useRef(), p = ee.useCallback(function(m) {
        a.current = m === St.RUNNING,
        u(m)
    }, []), g = ee.useCallback(function() {
        var m;
        (m = s.current) !== null && m !== void 0 && m._url && (s.current.terminate(),
        URL.revokeObjectURL(s.current._url),
        h.current = {},
        s.current = void 0,
        window.clearTimeout(v.current))
    }, []), S = ee.useCallback(function(m) {
        (t.autoTerminate != null ? t.autoTerminate : Gt.autoTerminate) && g(),
        p(m)
    }, [t.autoTerminate, g, p]), d = (n = function() {
        var m = t.remoteDependencies
          , x = t.timeout
          , E = x === void 0 ? Gt.timeout : x
          , _ = t.transferable
          , P = cy(e, m === void 0 ? Gt.remoteDependencies : m, _ === void 0 ? Gt.transferable : _)
          , N = new Worker(P);
        return N._url = P,
        N.onmessage = function(T) {
            var O, L, ce, Je, Qt = T.data, mn = Qt[1];
            switch (Qt[0]) {
            case St.SUCCESS:
                (O = (L = h.current).resolve) === null || O === void 0 || O.call(L, mn),
                S(St.SUCCESS);
                break;
            default:
                (ce = (Je = h.current).reject) === null || ce === void 0 || ce.call(Je, mn),
                S(St.ERROR)
            }
        }
        ,
        N.onerror = function(T) {
            var O, L;
            (O = (L = h.current).reject) === null || O === void 0 || O.call(L, T),
            S(St.ERROR)
        }
        ,
        E && (v.current = window.setTimeout(function() {
            g(),
            p(St.TIMEOUT_EXPIRED)
        }, E)),
        N
    }
    ,
    i = ee.useRef(r = [e, t, g]),
    Zu(i.current, r) || (i.current = r),
    ee.useCallback(n, i.current)), y = ee.useCallback(function() {
        var m = [].slice.call(arguments)
          , x = t
          , E = x.transferable
          , _ = E === void 0 ? Gt.transferable : E;
        return new Promise(function(P, N) {
            var T, O;
            h.current = ((T = {}).resolve = P,
            T.reject = N,
            T);
            var L = _ === po.AUTO ? m.filter(function(ce) {
                return "ArrayBuffer"in window && ce instanceof ArrayBuffer || "MessagePort"in window && ce instanceof MessagePort || "ImageBitmap"in window && ce instanceof ImageBitmap || "OffscreenCanvas"in window && ce instanceof OffscreenCanvas
            }) : [];
            (O = s.current) === null || O === void 0 || O.postMessage([[].concat(m)], L),
            p(St.RUNNING)
        }
        )
    }, [p]), c = ee.useCallback(function() {
        var m = t.autoTerminate != null ? t.autoTerminate : Gt.autoTerminate;
        return a.current ? (console.error("[useWorker] You can only run one instance of the worker at a time, if you want to run more than one in parallel, create another instance with the hook useWorker(). Read more: https://github.com/alewin/useWorker"),
        Promise.reject()) : (!m && s.current || (s.current = d()),
        y.apply(void 0, [].slice.call(arguments)))
    }, [t.autoTerminate, d, y]), f = {
        status: l,
        kill: g
    };
    return ee.useEffect(function() {
        return function() {
            g()
        }
    }, [g]),
    [c, f]
}
  , Ju = {}
  , fy = {
    get exports() {
        return Ju
    },
    set exports(e) {
        Ju = e
    }
}
  , Kp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn = k;
function dy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var py = typeof Object.is == "function" ? Object.is : dy
  , hy = Yn.useState
  , my = Yn.useEffect
  , vy = Yn.useLayoutEffect
  , yy = Yn.useDebugValue;
function gy(e, t) {
    var n = t()
      , r = hy({
        inst: {
            value: n,
            getSnapshot: t
        }
    })
      , i = r[0].inst
      , o = r[1];
    return vy(function() {
        i.value = n,
        i.getSnapshot = t,
        Dl(i) && o({
            inst: i
        })
    }, [e, n, t]),
    my(function() {
        return Dl(i) && o({
            inst: i
        }),
        e(function() {
            Dl(i) && o({
                inst: i
            })
        })
    }, [e]),
    yy(n),
    n
}
function Dl(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !py(e, n)
    } catch {
        return !0
    }
}
function Sy(e, t) {
    return t()
}
var wy = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Sy : gy;
Kp.useSyncExternalStore = Yn.useSyncExternalStore !== void 0 ? Yn.useSyncExternalStore : wy;
(function(e) {
    e.exports = Kp
}
)(fy);
var es = {}
  , xy = {
    get exports() {
        return es
    },
    set exports(e) {
        es = e
    }
}
  , Qp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uo = k
  , Ey = Ju;
function ky(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var _y = typeof Object.is == "function" ? Object.is : ky
  , Cy = Ey.useSyncExternalStore
  , Py = Uo.useRef
  , Ny = Uo.useEffect
  , jy = Uo.useMemo
  , Oy = Uo.useDebugValue;
Qp.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
    var o = Py(null);
    if (o.current === null) {
        var l = {
            hasValue: !1,
            value: null
        };
        o.current = l
    } else
        l = o.current;
    o = jy(function() {
        function s(g) {
            if (!a) {
                if (a = !0,
                h = g,
                g = r(g),
                i !== void 0 && l.hasValue) {
                    var S = l.value;
                    if (i(S, g))
                        return v = S
                }
                return v = g
            }
            if (S = v,
            _y(h, g))
                return S;
            var d = r(g);
            return i !== void 0 && i(S, d) ? S : (h = g,
            v = d)
        }
        var a = !1, h, v, p = n === void 0 ? null : n;
        return [function() {
            return s(t())
        }
        , p === null ? void 0 : function() {
            return s(p())
        }
        ]
    }, [t, n, r, i]);
    var u = Cy(e, o[0], o[1]);
    return Ny(function() {
        l.hasValue = !0,
        l.value = u
    }, [u]),
    Oy(u),
    u
}
;
(function(e) {
    e.exports = Qp
}
)(xy);
function Ry(e) {
    e()
}
let Yp = Ry;
const Ty = e=>Yp = e
  , $y = ()=>Yp
  , Bt = k.createContext(null);
function Xp() {
    return k.useContext(Bt)
}
const zy = ()=>{
    throw new Error("uSES not initialized!")
}
;
let Gp = zy;
const Iy = e=>{
    Gp = e
}
  , My = (e,t)=>e === t;
function Ly(e=Bt) {
    const t = e === Bt ? Xp : ()=>k.useContext(e);
    return function(r, i=My) {
        const {store: o, subscription: l, getServerState: u} = t()
          , s = Gp(l.addNestedSub, o.getState, u || o.getState, r, i);
        return k.useDebugValue(s),
        s
    }
}
const Zp = Ly();
function ts() {
    return ts = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ts.apply(this, arguments)
}
var ns = {}
  , Dy = {
    get exports() {
        return ns
    },
    set exports(e) {
        ns = e
    }
}
  , U = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var le = typeof Symbol == "function" && Symbol.for
  , fa = le ? Symbol.for("react.element") : 60103
  , da = le ? Symbol.for("react.portal") : 60106
  , Ao = le ? Symbol.for("react.fragment") : 60107
  , Fo = le ? Symbol.for("react.strict_mode") : 60108
  , Wo = le ? Symbol.for("react.profiler") : 60114
  , Bo = le ? Symbol.for("react.provider") : 60109
  , Vo = le ? Symbol.for("react.context") : 60110
  , pa = le ? Symbol.for("react.async_mode") : 60111
  , Ho = le ? Symbol.for("react.concurrent_mode") : 60111
  , bo = le ? Symbol.for("react.forward_ref") : 60112
  , Ko = le ? Symbol.for("react.suspense") : 60113
  , Uy = le ? Symbol.for("react.suspense_list") : 60120
  , Qo = le ? Symbol.for("react.memo") : 60115
  , Yo = le ? Symbol.for("react.lazy") : 60116
  , Ay = le ? Symbol.for("react.block") : 60121
  , Fy = le ? Symbol.for("react.fundamental") : 60117
  , Wy = le ? Symbol.for("react.responder") : 60118
  , By = le ? Symbol.for("react.scope") : 60119;
function Me(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case fa:
            switch (e = e.type,
            e) {
            case pa:
            case Ho:
            case Ao:
            case Wo:
            case Fo:
            case Ko:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case Vo:
                case bo:
                case Yo:
                case Qo:
                case Bo:
                    return e;
                default:
                    return t
                }
            }
        case da:
            return t
        }
    }
}
function qp(e) {
    return Me(e) === Ho
}
U.AsyncMode = pa;
U.ConcurrentMode = Ho;
U.ContextConsumer = Vo;
U.ContextProvider = Bo;
U.Element = fa;
U.ForwardRef = bo;
U.Fragment = Ao;
U.Lazy = Yo;
U.Memo = Qo;
U.Portal = da;
U.Profiler = Wo;
U.StrictMode = Fo;
U.Suspense = Ko;
U.isAsyncMode = function(e) {
    return qp(e) || Me(e) === pa
}
;
U.isConcurrentMode = qp;
U.isContextConsumer = function(e) {
    return Me(e) === Vo
}
;
U.isContextProvider = function(e) {
    return Me(e) === Bo
}
;
U.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === fa
}
;
U.isForwardRef = function(e) {
    return Me(e) === bo
}
;
U.isFragment = function(e) {
    return Me(e) === Ao
}
;
U.isLazy = function(e) {
    return Me(e) === Yo
}
;
U.isMemo = function(e) {
    return Me(e) === Qo
}
;
U.isPortal = function(e) {
    return Me(e) === da
}
;
U.isProfiler = function(e) {
    return Me(e) === Wo
}
;
U.isStrictMode = function(e) {
    return Me(e) === Fo
}
;
U.isSuspense = function(e) {
    return Me(e) === Ko
}
;
U.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Ao || e === Ho || e === Wo || e === Fo || e === Ko || e === Uy || typeof e == "object" && e !== null && (e.$$typeof === Yo || e.$$typeof === Qo || e.$$typeof === Bo || e.$$typeof === Vo || e.$$typeof === bo || e.$$typeof === Fy || e.$$typeof === Wy || e.$$typeof === By || e.$$typeof === Ay)
}
;
U.typeOf = Me;
(function(e) {
    e.exports = U
}
)(Dy);
var Jp = ns
  , Vy = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}
  , Hy = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}
  , eh = {};
eh[Jp.ForwardRef] = Vy;
eh[Jp.Memo] = Hy;
var bc = {}
  , by = {
    get exports() {
        return bc
    },
    set exports(e) {
        bc = e
    }
}
  , A = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ha = Symbol.for("react.element"), ma = Symbol.for("react.portal"), Xo = Symbol.for("react.fragment"), Go = Symbol.for("react.strict_mode"), Zo = Symbol.for("react.profiler"), qo = Symbol.for("react.provider"), Jo = Symbol.for("react.context"), Ky = Symbol.for("react.server_context"), el = Symbol.for("react.forward_ref"), tl = Symbol.for("react.suspense"), nl = Symbol.for("react.suspense_list"), rl = Symbol.for("react.memo"), il = Symbol.for("react.lazy"), Qy = Symbol.for("react.offscreen"), th;
th = Symbol.for("react.module.reference");
function He(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case ha:
            switch (e = e.type,
            e) {
            case Xo:
            case Zo:
            case Go:
            case tl:
            case nl:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case Ky:
                case Jo:
                case el:
                case il:
                case rl:
                case qo:
                    return e;
                default:
                    return t
                }
            }
        case ma:
            return t
        }
    }
}
A.ContextConsumer = Jo;
A.ContextProvider = qo;
A.Element = ha;
A.ForwardRef = el;
A.Fragment = Xo;
A.Lazy = il;
A.Memo = rl;
A.Portal = ma;
A.Profiler = Zo;
A.StrictMode = Go;
A.Suspense = tl;
A.SuspenseList = nl;
A.isAsyncMode = function() {
    return !1
}
;
A.isConcurrentMode = function() {
    return !1
}
;
A.isContextConsumer = function(e) {
    return He(e) === Jo
}
;
A.isContextProvider = function(e) {
    return He(e) === qo
}
;
A.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ha
}
;
A.isForwardRef = function(e) {
    return He(e) === el
}
;
A.isFragment = function(e) {
    return He(e) === Xo
}
;
A.isLazy = function(e) {
    return He(e) === il
}
;
A.isMemo = function(e) {
    return He(e) === rl
}
;
A.isPortal = function(e) {
    return He(e) === ma
}
;
A.isProfiler = function(e) {
    return He(e) === Zo
}
;
A.isStrictMode = function(e) {
    return He(e) === Go
}
;
A.isSuspense = function(e) {
    return He(e) === tl
}
;
A.isSuspenseList = function(e) {
    return He(e) === nl
}
;
A.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Xo || e === Zo || e === Go || e === tl || e === nl || e === Qy || typeof e == "object" && e !== null && (e.$$typeof === il || e.$$typeof === rl || e.$$typeof === qo || e.$$typeof === Jo || e.$$typeof === el || e.$$typeof === th || e.getModuleId !== void 0)
}
;
A.typeOf = He;
(function(e) {
    e.exports = A
}
)(by);
function Yy() {
    const e = $y();
    let t = null
      , n = null;
    return {
        clear() {
            t = null,
            n = null
        },
        notify() {
            e(()=>{
                let r = t;
                for (; r; )
                    r.callback(),
                    r = r.next
            }
            )
        },
        get() {
            let r = []
              , i = t;
            for (; i; )
                r.push(i),
                i = i.next;
            return r
        },
        subscribe(r) {
            let i = !0
              , o = n = {
                callback: r,
                next: null,
                prev: n
            };
            return o.prev ? o.prev.next = o : t = o,
            function() {
                !i || t === null || (i = !1,
                o.next ? o.next.prev = o.prev : n = o.prev,
                o.prev ? o.prev.next = o.next : t = o.next)
            }
        }
    }
}
const Kc = {
    notify() {},
    get: ()=>[]
};
function Xy(e, t) {
    let n, r = Kc;
    function i(v) {
        return s(),
        r.subscribe(v)
    }
    function o() {
        r.notify()
    }
    function l() {
        h.onStateChange && h.onStateChange()
    }
    function u() {
        return !!n
    }
    function s() {
        n || (n = t ? t.addNestedSub(l) : e.subscribe(l),
        r = Yy())
    }
    function a() {
        n && (n(),
        n = void 0,
        r.clear(),
        r = Kc)
    }
    const h = {
        addNestedSub: i,
        notifyNestedSubs: o,
        handleChangeWrapper: l,
        isSubscribed: u,
        trySubscribe: s,
        tryUnsubscribe: a,
        getListeners: ()=>r
    };
    return h
}
const Gy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , Zy = Gy ? k.useLayoutEffect : k.useEffect;
function qy({store: e, context: t, children: n, serverState: r}) {
    const i = k.useMemo(()=>{
        const u = Xy(e);
        return {
            store: e,
            subscription: u,
            getServerState: r ? ()=>r : void 0
        }
    }
    , [e, r])
      , o = k.useMemo(()=>e.getState(), [e]);
    Zy(()=>{
        const {subscription: u} = i;
        return u.onStateChange = u.notifyNestedSubs,
        u.trySubscribe(),
        o !== e.getState() && u.notifyNestedSubs(),
        ()=>{
            u.tryUnsubscribe(),
            u.onStateChange = void 0
        }
    }
    , [i, o]);
    const l = t || Bt;
    return ee.createElement(l.Provider, {
        value: i
    }, n)
}
function nh(e=Bt) {
    const t = e === Bt ? Xp : ()=>k.useContext(e);
    return function() {
        const {store: r} = t();
        return r
    }
}
const Jy = nh();
function eg(e=Bt) {
    const t = e === Bt ? Jy : nh(e);
    return function() {
        return t().dispatch
    }
}
const rh = eg();
Iy(es.useSyncExternalStoreWithSelector);
Ty($r.unstable_batchedUpdates);
function Xe(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function(i) {
        return "'" + i + "'"
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
}
function Vt(e) {
    return !!e && !!e[V]
}
function vt(e) {
    var t;
    return !!e && (function(n) {
        if (!n || typeof n != "object")
            return !1;
        var r = Object.getPrototypeOf(n);
        if (r === null)
            return !0;
        var i = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
        return i === Object || typeof i == "function" && Function.toString.call(i) === ag
    }(e) || Array.isArray(e) || !!e[Jc] || !!(!((t = e.constructor) === null || t === void 0) && t[Jc]) || va(e) || ya(e))
}
function fn(e, t, n) {
    n === void 0 && (n = !1),
    rr(e) === 0 ? (n ? Object.keys : Fn)(e).forEach(function(r) {
        n && typeof r == "symbol" || t(r, e[r], e)
    }) : e.forEach(function(r, i) {
        return t(i, r, e)
    })
}
function rr(e) {
    var t = e[V];
    return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : va(e) ? 2 : ya(e) ? 3 : 0
}
function An(e, t) {
    return rr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function tg(e, t) {
    return rr(e) === 2 ? e.get(t) : e[t]
}
function ih(e, t, n) {
    var r = rr(e);
    r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n
}
function oh(e, t) {
    return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t
}
function va(e) {
    return ug && e instanceof Map
}
function ya(e) {
    return sg && e instanceof Set
}
function Jt(e) {
    return e.o || e.t
}
function ga(e) {
    if (Array.isArray(e))
        return Array.prototype.slice.call(e);
    var t = uh(e);
    delete t[V];
    for (var n = Fn(t), r = 0; r < n.length; r++) {
        var i = n[r]
          , o = t[i];
        o.writable === !1 && (o.writable = !0,
        o.configurable = !0),
        (o.get || o.set) && (t[i] = {
            configurable: !0,
            writable: !0,
            enumerable: o.enumerable,
            value: e[i]
        })
    }
    return Object.create(Object.getPrototypeOf(e), t)
}
function Sa(e, t) {
    return t === void 0 && (t = !1),
    wa(e) || Vt(e) || !vt(e) || (rr(e) > 1 && (e.set = e.add = e.clear = e.delete = ng),
    Object.freeze(e),
    t && fn(e, function(n, r) {
        return Sa(r, !0)
    }, !0)),
    e
}
function ng() {
    Xe(2)
}
function wa(e) {
    return e == null || typeof e != "object" || Object.isFrozen(e)
}
function lt(e) {
    var t = ls[e];
    return t || Xe(18, e),
    t
}
function rg(e, t) {
    ls[e] || (ls[e] = t)
}
function rs() {
    return Zr
}
function Ul(e, t) {
    t && (lt("Patches"),
    e.u = [],
    e.s = [],
    e.v = t)
}
function ho(e) {
    is(e),
    e.p.forEach(ig),
    e.p = null
}
function is(e) {
    e === Zr && (Zr = e.l)
}
function Qc(e) {
    return Zr = {
        p: [],
        l: Zr,
        h: e,
        m: !0,
        _: 0
    }
}
function ig(e) {
    var t = e[V];
    t.i === 0 || t.i === 1 ? t.j() : t.g = !0
}
function Al(e, t) {
    t._ = t.p.length;
    var n = t.p[0]
      , r = e !== void 0 && e !== n;
    return t.h.O || lt("ES5").S(t, e, r),
    r ? (n[V].P && (ho(t),
    Xe(4)),
    vt(e) && (e = mo(t, e),
    t.l || vo(t, e)),
    t.u && lt("Patches").M(n[V].t, e, t.u, t.s)) : e = mo(t, n, []),
    ho(t),
    t.u && t.v(t.u, t.s),
    e !== lh ? e : void 0
}
function mo(e, t, n) {
    if (wa(t))
        return t;
    var r = t[V];
    if (!r)
        return fn(t, function(u, s) {
            return Yc(e, r, t, u, s, n)
        }, !0),
        t;
    if (r.A !== e)
        return t;
    if (!r.P)
        return vo(e, r.t, !0),
        r.t;
    if (!r.I) {
        r.I = !0,
        r.A._--;
        var i = r.i === 4 || r.i === 5 ? r.o = ga(r.k) : r.o
          , o = i
          , l = !1;
        r.i === 3 && (o = new Set(i),
        i.clear(),
        l = !0),
        fn(o, function(u, s) {
            return Yc(e, r, i, u, s, n, l)
        }),
        vo(e, i, !1),
        n && e.u && lt("Patches").N(r, n, e.u, e.s)
    }
    return r.o
}
function Yc(e, t, n, r, i, o, l) {
    if (Vt(i)) {
        var u = mo(e, i, o && t && t.i !== 3 && !An(t.R, r) ? o.concat(r) : void 0);
        if (ih(n, r, u),
        !Vt(u))
            return;
        e.m = !1
    } else
        l && n.add(i);
    if (vt(i) && !wa(i)) {
        if (!e.h.D && e._ < 1)
            return;
        mo(e, i),
        t && t.A.l || vo(e, i)
    }
}
function vo(e, t, n) {
    n === void 0 && (n = !1),
    !e.l && e.h.D && e.m && Sa(t, n)
}
function Fl(e, t) {
    var n = e[V];
    return (n ? Jt(n) : e)[t]
}
function Xc(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r)
                return r;
            n = Object.getPrototypeOf(n)
        }
}
function Ct(e) {
    e.P || (e.P = !0,
    e.l && Ct(e.l))
}
function Wl(e) {
    e.o || (e.o = ga(e.t))
}
function os(e, t, n) {
    var r = va(t) ? lt("MapSet").F(t, n) : ya(t) ? lt("MapSet").T(t, n) : e.O ? function(i, o) {
        var l = Array.isArray(i)
          , u = {
            i: l ? 1 : 0,
            A: o ? o.A : rs(),
            P: !1,
            I: !1,
            R: {},
            l: o,
            t: i,
            k: null,
            o: null,
            j: null,
            C: !1
        }
          , s = u
          , a = qr;
        l && (s = [u],
        a = xr);
        var h = Proxy.revocable(s, a)
          , v = h.revoke
          , p = h.proxy;
        return u.k = p,
        u.j = v,
        p
    }(t, n) : lt("ES5").J(t, n);
    return (n ? n.A : rs()).p.push(r),
    r
}
function og(e) {
    return Vt(e) || Xe(22, e),
    function t(n) {
        if (!vt(n))
            return n;
        var r, i = n[V], o = rr(n);
        if (i) {
            if (!i.P && (i.i < 4 || !lt("ES5").K(i)))
                return i.t;
            i.I = !0,
            r = Gc(n, o),
            i.I = !1
        } else
            r = Gc(n, o);
        return fn(r, function(l, u) {
            i && tg(i.t, l) === u || ih(r, l, t(u))
        }),
        o === 3 ? new Set(r) : r
    }(e)
}
function Gc(e, t) {
    switch (t) {
    case 2:
        return new Map(e);
    case 3:
        return Array.from(e)
    }
    return ga(e)
}
function lg() {
    function e(o, l) {
        var u = i[o];
        return u ? u.enumerable = l : i[o] = u = {
            configurable: !0,
            enumerable: l,
            get: function() {
                var s = this[V];
                return qr.get(s, o)
            },
            set: function(s) {
                var a = this[V];
                qr.set(a, o, s)
            }
        },
        u
    }
    function t(o) {
        for (var l = o.length - 1; l >= 0; l--) {
            var u = o[l][V];
            if (!u.P)
                switch (u.i) {
                case 5:
                    r(u) && Ct(u);
                    break;
                case 4:
                    n(u) && Ct(u)
                }
        }
    }
    function n(o) {
        for (var l = o.t, u = o.k, s = Fn(u), a = s.length - 1; a >= 0; a--) {
            var h = s[a];
            if (h !== V) {
                var v = l[h];
                if (v === void 0 && !An(l, h))
                    return !0;
                var p = u[h]
                  , g = p && p[V];
                if (g ? g.t !== v : !oh(p, v))
                    return !0
            }
        }
        var S = !!l[V];
        return s.length !== Fn(l).length + (S ? 0 : 1)
    }
    function r(o) {
        var l = o.k;
        if (l.length !== o.t.length)
            return !0;
        var u = Object.getOwnPropertyDescriptor(l, l.length - 1);
        if (u && !u.get)
            return !0;
        for (var s = 0; s < l.length; s++)
            if (!l.hasOwnProperty(s))
                return !0;
        return !1
    }
    var i = {};
    rg("ES5", {
        J: function(o, l) {
            var u = Array.isArray(o)
              , s = function(h, v) {
                if (h) {
                    for (var p = Array(v.length), g = 0; g < v.length; g++)
                        Object.defineProperty(p, "" + g, e(g, !0));
                    return p
                }
                var S = uh(v);
                delete S[V];
                for (var d = Fn(S), y = 0; y < d.length; y++) {
                    var c = d[y];
                    S[c] = e(c, h || !!S[c].enumerable)
                }
                return Object.create(Object.getPrototypeOf(v), S)
            }(u, o)
              , a = {
                i: u ? 5 : 4,
                A: l ? l.A : rs(),
                P: !1,
                I: !1,
                R: {},
                l,
                t: o,
                k: s,
                o: null,
                g: !1,
                C: !1
            };
            return Object.defineProperty(s, V, {
                value: a,
                writable: !0
            }),
            s
        },
        S: function(o, l, u) {
            u ? Vt(l) && l[V].A === o && t(o.p) : (o.u && function s(a) {
                if (a && typeof a == "object") {
                    var h = a[V];
                    if (h) {
                        var v = h.t
                          , p = h.k
                          , g = h.R
                          , S = h.i;
                        if (S === 4)
                            fn(p, function(m) {
                                m !== V && (v[m] !== void 0 || An(v, m) ? g[m] || s(p[m]) : (g[m] = !0,
                                Ct(h)))
                            }),
                            fn(v, function(m) {
                                p[m] !== void 0 || An(p, m) || (g[m] = !1,
                                Ct(h))
                            });
                        else if (S === 5) {
                            if (r(h) && (Ct(h),
                            g.length = !0),
                            p.length < v.length)
                                for (var d = p.length; d < v.length; d++)
                                    g[d] = !1;
                            else
                                for (var y = v.length; y < p.length; y++)
                                    g[y] = !0;
                            for (var c = Math.min(p.length, v.length), f = 0; f < c; f++)
                                p.hasOwnProperty(f) || (g[f] = !0),
                                g[f] === void 0 && s(p[f])
                        }
                    }
                }
            }(o.p[0]),
            t(o.p))
        },
        K: function(o) {
            return o.i === 4 ? n(o) : r(o)
        }
    })
}
var Zc, Zr, xa = typeof Symbol < "u" && typeof Symbol("x") == "symbol", ug = typeof Map < "u", sg = typeof Set < "u", qc = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", lh = xa ? Symbol.for("immer-nothing") : ((Zc = {})["immer-nothing"] = !0,
Zc), Jc = xa ? Symbol.for("immer-draftable") : "__$immer_draftable", V = xa ? Symbol.for("immer-state") : "__$immer_state", ag = "" + Object.prototype.constructor, Fn = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
}
: Object.getOwnPropertyNames, uh = Object.getOwnPropertyDescriptors || function(e) {
    var t = {};
    return Fn(e).forEach(function(n) {
        t[n] = Object.getOwnPropertyDescriptor(e, n)
    }),
    t
}
, ls = {}, qr = {
    get: function(e, t) {
        if (t === V)
            return e;
        var n = Jt(e);
        if (!An(n, t))
            return function(i, o, l) {
                var u, s = Xc(o, l);
                return s ? "value"in s ? s.value : (u = s.get) === null || u === void 0 ? void 0 : u.call(i.k) : void 0
            }(e, n, t);
        var r = n[t];
        return e.I || !vt(r) ? r : r === Fl(e.t, t) ? (Wl(e),
        e.o[t] = os(e.A.h, r, e)) : r
    },
    has: function(e, t) {
        return t in Jt(e)
    },
    ownKeys: function(e) {
        return Reflect.ownKeys(Jt(e))
    },
    set: function(e, t, n) {
        var r = Xc(Jt(e), t);
        if (r != null && r.set)
            return r.set.call(e.k, n),
            !0;
        if (!e.P) {
            var i = Fl(Jt(e), t)
              , o = i == null ? void 0 : i[V];
            if (o && o.t === n)
                return e.o[t] = n,
                e.R[t] = !1,
                !0;
            if (oh(n, i) && (n !== void 0 || An(e.t, t)))
                return !0;
            Wl(e),
            Ct(e)
        }
        return e.o[t] === n && (n !== void 0 || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n,
        e.R[t] = !0),
        !0
    },
    deleteProperty: function(e, t) {
        return Fl(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1,
        Wl(e),
        Ct(e)) : delete e.R[t],
        e.o && delete e.o[t],
        !0
    },
    getOwnPropertyDescriptor: function(e, t) {
        var n = Jt(e)
          , r = Reflect.getOwnPropertyDescriptor(n, t);
        return r && {
            writable: !0,
            configurable: e.i !== 1 || t !== "length",
            enumerable: r.enumerable,
            value: n[t]
        }
    },
    defineProperty: function() {
        Xe(11)
    },
    getPrototypeOf: function(e) {
        return Object.getPrototypeOf(e.t)
    },
    setPrototypeOf: function() {
        Xe(12)
    }
}, xr = {};
fn(qr, function(e, t) {
    xr[e] = function() {
        return arguments[0] = arguments[0][0],
        t.apply(this, arguments)
    }
}),
xr.deleteProperty = function(e, t) {
    return xr.set.call(this, e, t, void 0)
}
,
xr.set = function(e, t, n) {
    return qr.set.call(this, e[0], t, n, e[0])
}
;
var cg = function() {
    function e(n) {
        var r = this;
        this.O = qc,
        this.D = !0,
        this.produce = function(i, o, l) {
            if (typeof i == "function" && typeof o != "function") {
                var u = o;
                o = i;
                var s = r;
                return function(d) {
                    var y = this;
                    d === void 0 && (d = u);
                    for (var c = arguments.length, f = Array(c > 1 ? c - 1 : 0), m = 1; m < c; m++)
                        f[m - 1] = arguments[m];
                    return s.produce(d, function(x) {
                        var E;
                        return (E = o).call.apply(E, [y, x].concat(f))
                    })
                }
            }
            var a;
            if (typeof o != "function" && Xe(6),
            l !== void 0 && typeof l != "function" && Xe(7),
            vt(i)) {
                var h = Qc(r)
                  , v = os(r, i, void 0)
                  , p = !0;
                try {
                    a = o(v),
                    p = !1
                } finally {
                    p ? ho(h) : is(h)
                }
                return typeof Promise < "u" && a instanceof Promise ? a.then(function(d) {
                    return Ul(h, l),
                    Al(d, h)
                }, function(d) {
                    throw ho(h),
                    d
                }) : (Ul(h, l),
                Al(a, h))
            }
            if (!i || typeof i != "object") {
                if ((a = o(i)) === void 0 && (a = i),
                a === lh && (a = void 0),
                r.D && Sa(a, !0),
                l) {
                    var g = []
                      , S = [];
                    lt("Patches").M(i, a, g, S),
                    l(g, S)
                }
                return a
            }
            Xe(21, i)
        }
        ,
        this.produceWithPatches = function(i, o) {
            if (typeof i == "function")
                return function(a) {
                    for (var h = arguments.length, v = Array(h > 1 ? h - 1 : 0), p = 1; p < h; p++)
                        v[p - 1] = arguments[p];
                    return r.produceWithPatches(a, function(g) {
                        return i.apply(void 0, [g].concat(v))
                    })
                }
                ;
            var l, u, s = r.produce(i, o, function(a, h) {
                l = a,
                u = h
            });
            return typeof Promise < "u" && s instanceof Promise ? s.then(function(a) {
                return [a, l, u]
            }) : [s, l, u]
        }
        ,
        typeof (n == null ? void 0 : n.useProxies) == "boolean" && this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" && this.setAutoFreeze(n.autoFreeze)
    }
    var t = e.prototype;
    return t.createDraft = function(n) {
        vt(n) || Xe(8),
        Vt(n) && (n = og(n));
        var r = Qc(this)
          , i = os(this, n, void 0);
        return i[V].C = !0,
        is(r),
        i
    }
    ,
    t.finishDraft = function(n, r) {
        var i = n && n[V]
          , o = i.A;
        return Ul(o, r),
        Al(void 0, o)
    }
    ,
    t.setAutoFreeze = function(n) {
        this.D = n
    }
    ,
    t.setUseProxies = function(n) {
        n && !qc && Xe(20),
        this.O = n
    }
    ,
    t.applyPatches = function(n, r) {
        var i;
        for (i = r.length - 1; i >= 0; i--) {
            var o = r[i];
            if (o.path.length === 0 && o.op === "replace") {
                n = o.value;
                break
            }
        }
        i > -1 && (r = r.slice(i + 1));
        var l = lt("Patches").$;
        return Vt(n) ? l(n, r) : this.produce(n, function(u) {
            return l(u, r)
        })
    }
    ,
    e
}()
  , $e = new cg
  , sh = $e.produce;
$e.produceWithPatches.bind($e);
$e.setAutoFreeze.bind($e);
$e.setUseProxies.bind($e);
$e.applyPatches.bind($e);
$e.createDraft.bind($e);
$e.finishDraft.bind($e);
function Jr(e) {
    return Jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Jr(e)
}
function fg(e, t) {
    if (Jr(e) !== "object" || e === null)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (Jr(r) !== "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function dg(e) {
    var t = fg(e, "string");
    return Jr(t) === "symbol" ? t : String(t)
}
function pg(e, t, n) {
    return t = dg(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function ef(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function tf(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? ef(Object(n), !0).forEach(function(r) {
            pg(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ef(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function pe(e) {
    return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
}
var nf = function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable"
}()
  , Bl = function() {
    return Math.random().toString(36).substring(7).split("").join(".")
}
  , yo = {
    INIT: "@@redux/INIT" + Bl(),
    REPLACE: "@@redux/REPLACE" + Bl(),
    PROBE_UNKNOWN_ACTION: function() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + Bl()
    }
};
function hg(e) {
    if (typeof e != "object" || e === null)
        return !1;
    for (var t = e; Object.getPrototypeOf(t) !== null; )
        t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t
}
function ah(e, t, n) {
    var r;
    if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
        throw new Error(pe(0));
    if (typeof t == "function" && typeof n > "u" && (n = t,
    t = void 0),
    typeof n < "u") {
        if (typeof n != "function")
            throw new Error(pe(1));
        return n(ah)(e, t)
    }
    if (typeof e != "function")
        throw new Error(pe(2));
    var i = e
      , o = t
      , l = []
      , u = l
      , s = !1;
    function a() {
        u === l && (u = l.slice())
    }
    function h() {
        if (s)
            throw new Error(pe(3));
        return o
    }
    function v(d) {
        if (typeof d != "function")
            throw new Error(pe(4));
        if (s)
            throw new Error(pe(5));
        var y = !0;
        return a(),
        u.push(d),
        function() {
            if (y) {
                if (s)
                    throw new Error(pe(6));
                y = !1,
                a();
                var f = u.indexOf(d);
                u.splice(f, 1),
                l = null
            }
        }
    }
    function p(d) {
        if (!hg(d))
            throw new Error(pe(7));
        if (typeof d.type > "u")
            throw new Error(pe(8));
        if (s)
            throw new Error(pe(9));
        try {
            s = !0,
            o = i(o, d)
        } finally {
            s = !1
        }
        for (var y = l = u, c = 0; c < y.length; c++) {
            var f = y[c];
            f()
        }
        return d
    }
    function g(d) {
        if (typeof d != "function")
            throw new Error(pe(10));
        i = d,
        p({
            type: yo.REPLACE
        })
    }
    function S() {
        var d, y = v;
        return d = {
            subscribe: function(f) {
                if (typeof f != "object" || f === null)
                    throw new Error(pe(11));
                function m() {
                    f.next && f.next(h())
                }
                m();
                var x = y(m);
                return {
                    unsubscribe: x
                }
            }
        },
        d[nf] = function() {
            return this
        }
        ,
        d
    }
    return p({
        type: yo.INIT
    }),
    r = {
        dispatch: p,
        subscribe: v,
        getState: h,
        replaceReducer: g
    },
    r[nf] = S,
    r
}
function mg(e) {
    Object.keys(e).forEach(function(t) {
        var n = e[t]
          , r = n(void 0, {
            type: yo.INIT
        });
        if (typeof r > "u")
            throw new Error(pe(12));
        if (typeof n(void 0, {
            type: yo.PROBE_UNKNOWN_ACTION()
        }) > "u")
            throw new Error(pe(13))
    })
}
function vg(e) {
    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var i = t[r];
        typeof e[i] == "function" && (n[i] = e[i])
    }
    var o = Object.keys(n), l;
    try {
        mg(n)
    } catch (u) {
        l = u
    }
    return function(s, a) {
        if (s === void 0 && (s = {}),
        l)
            throw l;
        for (var h = !1, v = {}, p = 0; p < o.length; p++) {
            var g = o[p]
              , S = n[g]
              , d = s[g]
              , y = S(d, a);
            if (typeof y > "u")
                throw a && a.type,
                new Error(pe(14));
            v[g] = y,
            h = h || y !== d
        }
        return h = h || o.length !== Object.keys(s).length,
        h ? v : s
    }
}
function go() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return t.length === 0 ? function(r) {
        return r
    }
    : t.length === 1 ? t[0] : t.reduce(function(r, i) {
        return function() {
            return r(i.apply(void 0, arguments))
        }
    })
}
function yg() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return function(r) {
        return function() {
            var i = r.apply(void 0, arguments)
              , o = function() {
                throw new Error(pe(15))
            }
              , l = {
                getState: i.getState,
                dispatch: function() {
                    return o.apply(void 0, arguments)
                }
            }
              , u = t.map(function(s) {
                return s(l)
            });
            return o = go.apply(void 0, u)(i.dispatch),
            tf(tf({}, i), {}, {
                dispatch: o
            })
        }
    }
}
function ch(e) {
    var t = function(r) {
        var i = r.dispatch
          , o = r.getState;
        return function(l) {
            return function(u) {
                return typeof u == "function" ? u(i, o, e) : l(u)
            }
        }
    };
    return t
}
var fh = ch();
fh.withExtraArgument = ch;
const rf = fh;
var dh = globalThis && globalThis.__extends || function() {
    var e = function(t, n) {
        return e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(r, i) {
            r.__proto__ = i
        }
        || function(r, i) {
            for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
        }
        ,
        e(t, n)
    };
    return function(t, n) {
        if (typeof n != "function" && n !== null)
            throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        e(t, n);
        function r() {
            this.constructor = t
        }
        t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype,
        new r)
    }
}()
  , gg = globalThis && globalThis.__generator || function(e, t) {
    var n = {
        label: 0,
        sent: function() {
            if (o[0] & 1)
                throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    }, r, i, o, l;
    return l = {
        next: u(0),
        throw: u(1),
        return: u(2)
    },
    typeof Symbol == "function" && (l[Symbol.iterator] = function() {
        return this
    }
    ),
    l;
    function u(a) {
        return function(h) {
            return s([a, h])
        }
    }
    function s(a) {
        if (r)
            throw new TypeError("Generator is already executing.");
        for (; n; )
            try {
                if (r = 1,
                i && (o = a[0] & 2 ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i),
                0) : i.next) && !(o = o.call(i, a[1])).done)
                    return o;
                switch (i = 0,
                o && (a = [a[0] & 2, o.value]),
                a[0]) {
                case 0:
                case 1:
                    o = a;
                    break;
                case 4:
                    return n.label++,
                    {
                        value: a[1],
                        done: !1
                    };
                case 5:
                    n.label++,
                    i = a[1],
                    a = [0];
                    continue;
                case 7:
                    a = n.ops.pop(),
                    n.trys.pop();
                    continue;
                default:
                    if (o = n.trys,
                    !(o = o.length > 0 && o[o.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (a[0] === 3 && (!o || a[1] > o[0] && a[1] < o[3])) {
                        n.label = a[1];
                        break
                    }
                    if (a[0] === 6 && n.label < o[1]) {
                        n.label = o[1],
                        o = a;
                        break
                    }
                    if (o && n.label < o[2]) {
                        n.label = o[2],
                        n.ops.push(a);
                        break
                    }
                    o[2] && n.ops.pop(),
                    n.trys.pop();
                    continue
                }
                a = t.call(e, n)
            } catch (h) {
                a = [6, h],
                i = 0
            } finally {
                r = o = 0
            }
        if (a[0] & 5)
            throw a[1];
        return {
            value: a[0] ? a[1] : void 0,
            done: !0
        }
    }
}
  , Xn = globalThis && globalThis.__spreadArray || function(e, t) {
    for (var n = 0, r = t.length, i = e.length; n < r; n++,
    i++)
        e[i] = t[n];
    return e
}
  , Sg = Object.defineProperty
  , wg = Object.defineProperties
  , xg = Object.getOwnPropertyDescriptors
  , of = Object.getOwnPropertySymbols
  , Eg = Object.prototype.hasOwnProperty
  , kg = Object.prototype.propertyIsEnumerable
  , lf = function(e, t, n) {
    return t in e ? Sg(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n
}
  , Ut = function(e, t) {
    for (var n in t || (t = {}))
        Eg.call(t, n) && lf(e, n, t[n]);
    if (of)
        for (var r = 0, i = of(t); r < i.length; r++) {
            var n = i[r];
            kg.call(t, n) && lf(e, n, t[n])
        }
    return e
}
  , Vl = function(e, t) {
    return wg(e, xg(t))
}
  , _g = function(e, t, n) {
    return new Promise(function(r, i) {
        var o = function(s) {
            try {
                u(n.next(s))
            } catch (a) {
                i(a)
            }
        }
          , l = function(s) {
            try {
                u(n.throw(s))
            } catch (a) {
                i(a)
            }
        }
          , u = function(s) {
            return s.done ? r(s.value) : Promise.resolve(s.value).then(o, l)
        };
        u((n = n.apply(e, t)).next())
    }
    )
}
  , Cg = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
    if (arguments.length !== 0)
        return typeof arguments[0] == "object" ? go : go.apply(null, arguments)
}
;
function Pg(e) {
    if (typeof e != "object" || e === null)
        return !1;
    var t = Object.getPrototypeOf(e);
    if (t === null)
        return !0;
    for (var n = t; Object.getPrototypeOf(n) !== null; )
        n = Object.getPrototypeOf(n);
    return t === n
}
var Ng = function(e) {
    dh(t, e);
    function t() {
        for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
        var i = e.apply(this, n) || this;
        return Object.setPrototypeOf(i, t.prototype),
        i
    }
    return Object.defineProperty(t, Symbol.species, {
        get: function() {
            return t
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.concat = function() {
        for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
        return e.prototype.concat.apply(this, n)
    }
    ,
    t.prototype.prepend = function() {
        for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0]) ? new (t.bind.apply(t, Xn([void 0], n[0].concat(this)))) : new (t.bind.apply(t, Xn([void 0], n.concat(this))))
    }
    ,
    t
}(Array)
  , jg = function(e) {
    dh(t, e);
    function t() {
        for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
        var i = e.apply(this, n) || this;
        return Object.setPrototypeOf(i, t.prototype),
        i
    }
    return Object.defineProperty(t, Symbol.species, {
        get: function() {
            return t
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.concat = function() {
        for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
        return e.prototype.concat.apply(this, n)
    }
    ,
    t.prototype.prepend = function() {
        for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0]) ? new (t.bind.apply(t, Xn([void 0], n[0].concat(this)))) : new (t.bind.apply(t, Xn([void 0], n.concat(this))))
    }
    ,
    t
}(Array);
function us(e) {
    return vt(e) ? sh(e, function() {}) : e
}
function Og(e) {
    return typeof e == "boolean"
}
function Rg() {
    return function(t) {
        return Tg(t)
    }
}
function Tg(e) {
    e === void 0 && (e = {});
    var t = e.thunk
      , n = t === void 0 ? !0 : t;
    e.immutableCheck,
    e.serializableCheck;
    var r = new Ng;
    return n && (Og(n) ? r.push(rf) : r.push(rf.withExtraArgument(n.extraArgument))),
    r
}
var $g = !0;
function zg(e) {
    var t = Rg(), n = e || {}, r = n.reducer, i = r === void 0 ? void 0 : r, o = n.middleware, l = o === void 0 ? t() : o, u = n.devTools, s = u === void 0 ? !0 : u, a = n.preloadedState, h = a === void 0 ? void 0 : a, v = n.enhancers, p = v === void 0 ? void 0 : v, g;
    if (typeof i == "function")
        g = i;
    else if (Pg(i))
        g = vg(i);
    else
        throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    var S = l;
    typeof S == "function" && (S = S(t));
    var d = yg.apply(void 0, S)
      , y = go;
    s && (y = Cg(Ut({
        trace: !$g
    }, typeof s == "object" && s)));
    var c = new jg(d)
      , f = c;
    Array.isArray(p) ? f = Xn([d], p) : typeof p == "function" && (f = p(c));
    var m = y.apply(void 0, f);
    return ah(g, h, m)
}
function At(e, t) {
    function n() {
        for (var r = [], i = 0; i < arguments.length; i++)
            r[i] = arguments[i];
        if (t) {
            var o = t.apply(void 0, r);
            if (!o)
                throw new Error("prepareAction did not return an object");
            return Ut(Ut({
                type: e,
                payload: o.payload
            }, "meta"in o && {
                meta: o.meta
            }), "error"in o && {
                error: o.error
            })
        }
        return {
            type: e,
            payload: r[0]
        }
    }
    return n.toString = function() {
        return "" + e
    }
    ,
    n.type = e,
    n.match = function(r) {
        return r.type === e
    }
    ,
    n
}
function ph(e) {
    var t = {}, n = [], r, i = {
        addCase: function(o, l) {
            var u = typeof o == "string" ? o : o.type;
            if (u in t)
                throw new Error("addCase cannot be called with two reducers for the same action type");
            return t[u] = l,
            i
        },
        addMatcher: function(o, l) {
            return n.push({
                matcher: o,
                reducer: l
            }),
            i
        },
        addDefaultCase: function(o) {
            return r = o,
            i
        }
    };
    return e(i),
    [t, n, r]
}
function Ig(e) {
    return typeof e == "function"
}
function Mg(e, t, n, r) {
    n === void 0 && (n = []);
    var i = typeof t == "function" ? ph(t) : [t, n, r], o = i[0], l = i[1], u = i[2], s;
    if (Ig(e))
        s = function() {
            return us(e())
        }
        ;
    else {
        var a = us(e);
        s = function() {
            return a
        }
    }
    function h(v, p) {
        v === void 0 && (v = s());
        var g = Xn([o[p.type]], l.filter(function(S) {
            var d = S.matcher;
            return d(p)
        }).map(function(S) {
            var d = S.reducer;
            return d
        }));
        return g.filter(function(S) {
            return !!S
        }).length === 0 && (g = [u]),
        g.reduce(function(S, d) {
            if (d)
                if (Vt(S)) {
                    var y = S
                      , c = d(y, p);
                    return c === void 0 ? S : c
                } else {
                    if (vt(S))
                        return sh(S, function(f) {
                            return d(f, p)
                        });
                    var c = d(S, p);
                    if (c === void 0) {
                        if (S === null)
                            return S;
                        throw Error("A case reducer on a non-draftable value must not return undefined")
                    }
                    return c
                }
            return S
        }, v)
    }
    return h.getInitialState = s,
    h
}
function Lg(e, t) {
    return e + "/" + t
}
function Dg(e) {
    var t = e.name;
    if (!t)
        throw new Error("`name` is a required option for createSlice");
    typeof process < "u";
    var n = typeof e.initialState == "function" ? e.initialState : us(e.initialState)
      , r = e.reducers || {}
      , i = Object.keys(r)
      , o = {}
      , l = {}
      , u = {};
    i.forEach(function(h) {
        var v = r[h], p = Lg(t, h), g, S;
        "reducer"in v ? (g = v.reducer,
        S = v.prepare) : g = v,
        o[h] = g,
        l[p] = g,
        u[h] = S ? At(p, S) : At(p)
    });
    function s() {
        var h = typeof e.extraReducers == "function" ? ph(e.extraReducers) : [e.extraReducers]
          , v = h[0]
          , p = v === void 0 ? {} : v
          , g = h[1]
          , S = g === void 0 ? [] : g
          , d = h[2]
          , y = d === void 0 ? void 0 : d
          , c = Ut(Ut({}, p), l);
        return Mg(n, function(f) {
            for (var m in c)
                f.addCase(m, c[m]);
            for (var x = 0, E = S; x < E.length; x++) {
                var _ = E[x];
                f.addMatcher(_.matcher, _.reducer)
            }
            y && f.addDefaultCase(y)
        })
    }
    var a;
    return {
        name: t,
        reducer: function(h, v) {
            return a || (a = s()),
            a(h, v)
        },
        actions: u,
        caseReducers: o,
        getInitialState: function() {
            return a || (a = s()),
            a.getInitialState()
        }
    }
}
var Ug = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"
  , Ag = function(e) {
    e === void 0 && (e = 21);
    for (var t = "", n = e; n--; )
        t += Ug[Math.random() * 64 | 0];
    return t
}
  , Fg = ["name", "message", "stack", "code"]
  , Hl = function() {
    function e(t, n) {
        this.payload = t,
        this.meta = n
    }
    return e
}()
  , uf = function() {
    function e(t, n) {
        this.payload = t,
        this.meta = n
    }
    return e
}()
  , Wg = function(e) {
    if (typeof e == "object" && e !== null) {
        for (var t = {}, n = 0, r = Fg; n < r.length; n++) {
            var i = r[n];
            typeof e[i] == "string" && (t[i] = e[i])
        }
        return t
    }
    return {
        message: String(e)
    }
};
(function() {
    function e(t, n, r) {
        var i = At(t + "/fulfilled", function(a, h, v, p) {
            return {
                payload: a,
                meta: Vl(Ut({}, p || {}), {
                    arg: v,
                    requestId: h,
                    requestStatus: "fulfilled"
                })
            }
        })
          , o = At(t + "/pending", function(a, h, v) {
            return {
                payload: void 0,
                meta: Vl(Ut({}, v || {}), {
                    arg: h,
                    requestId: a,
                    requestStatus: "pending"
                })
            }
        })
          , l = At(t + "/rejected", function(a, h, v, p, g) {
            return {
                payload: p,
                error: (r && r.serializeError || Wg)(a || "Rejected"),
                meta: Vl(Ut({}, g || {}), {
                    arg: v,
                    requestId: h,
                    rejectedWithValue: !!p,
                    requestStatus: "rejected",
                    aborted: (a == null ? void 0 : a.name) === "AbortError",
                    condition: (a == null ? void 0 : a.name) === "ConditionError"
                })
            }
        })
          , u = typeof AbortController < "u" ? AbortController : function() {
            function a() {
                this.signal = {
                    aborted: !1,
                    addEventListener: function() {},
                    dispatchEvent: function() {
                        return !1
                    },
                    onabort: function() {},
                    removeEventListener: function() {},
                    reason: void 0,
                    throwIfAborted: function() {}
                }
            }
            return a.prototype.abort = function() {}
            ,
            a
        }();
        function s(a) {
            return function(h, v, p) {
                var g = r != null && r.idGenerator ? r.idGenerator(a) : Ag(), S = new u, d;
                function y(f) {
                    d = f,
                    S.abort()
                }
                var c = function() {
                    return _g(this, null, function() {
                        var f, m, x, E, _, P, N;
                        return gg(this, function(T) {
                            switch (T.label) {
                            case 0:
                                return T.trys.push([0, 4, , 5]),
                                E = (f = r == null ? void 0 : r.condition) == null ? void 0 : f.call(r, a, {
                                    getState: v,
                                    extra: p
                                }),
                                Vg(E) ? [4, E] : [3, 2];
                            case 1:
                                E = T.sent(),
                                T.label = 2;
                            case 2:
                                if (E === !1 || S.signal.aborted)
                                    throw {
                                        name: "ConditionError",
                                        message: "Aborted due to condition callback returning false."
                                    };
                                return _ = new Promise(function(O, L) {
                                    return S.signal.addEventListener("abort", function() {
                                        return L({
                                            name: "AbortError",
                                            message: d || "Aborted"
                                        })
                                    })
                                }
                                ),
                                h(o(g, a, (m = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : m.call(r, {
                                    requestId: g,
                                    arg: a
                                }, {
                                    getState: v,
                                    extra: p
                                }))),
                                [4, Promise.race([_, Promise.resolve(n(a, {
                                    dispatch: h,
                                    getState: v,
                                    extra: p,
                                    requestId: g,
                                    signal: S.signal,
                                    abort: y,
                                    rejectWithValue: function(O, L) {
                                        return new Hl(O,L)
                                    },
                                    fulfillWithValue: function(O, L) {
                                        return new uf(O,L)
                                    }
                                })).then(function(O) {
                                    if (O instanceof Hl)
                                        throw O;
                                    return O instanceof uf ? i(O.payload, g, a, O.meta) : i(O, g, a)
                                })])];
                            case 3:
                                return x = T.sent(),
                                [3, 5];
                            case 4:
                                return P = T.sent(),
                                x = P instanceof Hl ? l(null, g, a, P.payload, P.meta) : l(P, g, a),
                                [3, 5];
                            case 5:
                                return N = r && !r.dispatchConditionRejection && l.match(x) && x.meta.condition,
                                N || h(x),
                                [2, x]
                            }
                        })
                    })
                }();
                return Object.assign(c, {
                    abort: y,
                    requestId: g,
                    arg: a,
                    unwrap: function() {
                        return c.then(Bg)
                    }
                })
            }
        }
        return Object.assign(s, {
            pending: o,
            rejected: l,
            fulfilled: i,
            typePrefix: t
        })
    }
    return e.withTypes = function() {
        return e
    }
    ,
    e
}
)();
function Bg(e) {
    if (e.meta && e.meta.rejectedWithValue)
        throw e.payload;
    if (e.error)
        throw e.error;
    return e.payload
}
function Vg(e) {
    return e !== null && typeof e == "object" && typeof e.then == "function"
}
var Ea = "listenerMiddleware";
At(Ea + "/add");
At(Ea + "/removeAll");
At(Ea + "/remove");
var sf;
typeof queueMicrotask == "function" && queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis);
lg();
var af = {}
  , Hg = {
    get exports() {
        return af
    },
    set exports(e) {
        af = e
    }
}
  , J = {};
/**
 * @license React
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir = k
  , ka = $r;
function hh(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function cf(e) {
    if (hh(e) !== e)
        throw Error("Unable to find node on an unmounted component.")
}
function bg(e) {
    var t = e.alternate;
    if (!t) {
        if (t = hh(e),
        t === null)
            throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return cf(i),
                    e;
                if (o === r)
                    return cf(i),
                    t;
                o = o.sibling
            }
            throw Error("Unable to find node on an unmounted component.")
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var l = !1, u = i.child; u; ) {
                if (u === n) {
                    l = !0,
                    n = i,
                    r = o;
                    break
                }
                if (u === r) {
                    l = !0,
                    r = i,
                    n = o;
                    break
                }
                u = u.sibling
            }
            if (!l) {
                for (u = o.child; u; ) {
                    if (u === n) {
                        l = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (u === r) {
                        l = !0,
                        r = o,
                        n = i;
                        break
                    }
                    u = u.sibling
                }
                if (!l)
                    throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")
            }
        }
        if (n.alternate !== r)
            throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")
    }
    if (n.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
    return n.stateNode.current === n ? e : t
}
var Ce = Object.assign;
function bl(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Pi() {
    return !0
}
function ff() {
    return !1
}
function Le(e) {
    function t(n, r, i, o, l) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = l,
        this.currentTarget = null;
        for (var u in e)
            e.hasOwnProperty(u) && (n = e[u],
            this[u] = n ? n(o) : o[u]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Pi : ff,
        this.isPropagationStopped = ff,
        this
    }
    return Ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Pi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Pi)
        },
        persist: function() {},
        isPersistent: Pi
    }),
    t
}
var or = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}
  , Kg = Le(or)
  , li = Ce({}, or, {
    view: 0,
    detail: 0
});
Le(li);
var Kl, Ql, mr, ol = Ce({}, li, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: _a,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== mr && (mr && e.type === "mousemove" ? (Kl = e.screenX - mr.screenX,
        Ql = e.screenY - mr.screenY) : Ql = Kl = 0,
        mr = e),
        Kl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Ql
    }
});
Le(ol);
var Qg = Ce({}, ol, {
    dataTransfer: 0
});
Le(Qg);
var Yg = Ce({}, li, {
    relatedTarget: 0
});
Le(Yg);
var Xg = Ce({}, or, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
});
Le(Xg);
var Gg = Ce({}, or, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
});
Le(Gg);
var Zg = Ce({}, or, {
    data: 0
});
Le(Zg);
var qg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}
  , Jg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}
  , e1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function t1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = e1[e]) ? !!t[e] : !1
}
function _a() {
    return t1
}
var n1 = Ce({}, li, {
    key: function(e) {
        if (e.key) {
            var t = qg[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = bl(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Jg[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _a,
    charCode: function(e) {
        return e.type === "keypress" ? bl(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? bl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
});
Le(n1);
var r1 = Ce({}, ol, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
});
Le(r1);
var i1 = Ce({}, li, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _a
});
Le(i1);
var o1 = Ce({}, or, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
});
Le(o1);
var l1 = Ce({}, ol, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
});
Le(l1);
function u1(e, t, n, r, i, o, l, u, s) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, a)
    } catch (h) {
        this.onError(h)
    }
}
var Tr = !1
  , So = null
  , wo = !1
  , ss = null
  , s1 = {
    onError: function(e) {
        Tr = !0,
        So = e
    }
};
function a1(e, t, n, r, i, o, l, u, s) {
    Tr = !1,
    So = null,
    u1.apply(s1, arguments)
}
function c1(e, t, n, r, i, o, l, u, s) {
    if (a1.apply(this, arguments),
    Tr) {
        if (Tr) {
            var a = So;
            Tr = !1,
            So = null
        } else
            throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
        wo || (wo = !0,
        ss = a)
    }
}
var Ca = Array.isArray
  , ui = ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events
  , f1 = ui[0]
  , d1 = ui[1]
  , p1 = ui[2]
  , h1 = ui[3]
  , m1 = ui[4]
  , v1 = ir.unstable_act;
function y1() {}
function g1(e, t) {
    if (!e)
        return [];
    if (e = bg(e),
    !e)
        return [];
    for (var n = e, r = []; ; ) {
        if (n.tag === 5 || n.tag === 6 || n.tag === 1 || n.tag === 0) {
            var i = n.stateNode;
            t(i) && r.push(i)
        }
        if (n.child)
            n.child.return = n,
            n = n.child;
        else {
            if (n === e)
                return r;
            for (; !n.sibling; ) {
                if (!n.return || n.return === e)
                    return r;
                n = n.return
            }
            n.sibling.return = n.return,
            n = n.sibling
        }
    }
}
function hn(e, t) {
    if (e && !e._reactInternals) {
        var n = String(e);
        throw e = Ca(e) ? "an array" : e && e.nodeType === 1 && e.tagName ? "a DOM node" : n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n,
        Error(t + "(...): the first argument must be a React class instance. Instead received: " + (e + "."))
    }
}
function ll(e) {
    return !(!e || e.nodeType !== 1 || !e.tagName)
}
function Pa(e) {
    return ll(e) ? !1 : e != null && typeof e.render == "function" && typeof e.setState == "function"
}
function mh(e, t) {
    return Pa(e) ? e._reactInternals.type === t : !1
}
function ul(e, t) {
    return hn(e, "findAllInRenderedTree"),
    e ? g1(e._reactInternals, t) : []
}
function vh(e, t) {
    return hn(e, "scryRenderedDOMComponentsWithClass"),
    ul(e, function(n) {
        if (ll(n)) {
            var r = n.className;
            typeof r != "string" && (r = n.getAttribute("class") || "");
            var i = r.split(/\s+/);
            if (!Ca(t)) {
                if (t === void 0)
                    throw Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
                t = t.split(/\s+/)
            }
            return t.every(function(o) {
                return i.indexOf(o) !== -1
            })
        }
        return !1
    })
}
function yh(e, t) {
    return hn(e, "scryRenderedDOMComponentsWithTag"),
    ul(e, function(n) {
        return ll(n) && n.tagName.toUpperCase() === t.toUpperCase()
    })
}
function gh(e, t) {
    return hn(e, "scryRenderedComponentsWithType"),
    ul(e, function(n) {
        return mh(n, t)
    })
}
function df(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = d1(n),
    c1(r, t, void 0, e),
    e.currentTarget = null
}
function Sh(e, t, n) {
    for (var r = []; e; ) {
        r.push(e);
        do
            e = e.return;
        while (e && e.tag !== 5);
        e = e || null
    }
    for (e = r.length; 0 < e--; )
        t(r[e], "captured", n);
    for (e = 0; e < r.length; e++)
        t(r[e], "bubbled", n)
}
function wh(e, t) {
    var n = e.stateNode;
    if (!n)
        return null;
    var r = p1(n);
    if (!r)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof n + "` type.");
    return n
}
function S1(e, t, n) {
    e && n && n._reactName && (t = wh(e, n._reactName)) && (n._dispatchListeners == null && (n._dispatchListeners = []),
    n._dispatchInstances == null && (n._dispatchInstances = []),
    n._dispatchListeners.push(t),
    n._dispatchInstances.push(e))
}
function w1(e, t, n) {
    var r = n._reactName;
    t === "captured" && (r += "Capture"),
    (t = wh(e, r)) && (n._dispatchListeners == null && (n._dispatchListeners = []),
    n._dispatchInstances == null && (n._dispatchInstances = []),
    n._dispatchListeners.push(t),
    n._dispatchInstances.push(e))
}
var xh = {}
  , x1 = new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
function E1(e) {
    return function(t, n) {
        if (ir.isValidElement(t))
            throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
        if (Pa(t))
            throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
        var r = "on" + e[0].toUpperCase() + e.slice(1)
          , i = new y1;
        i.target = t,
        i.type = e.toLowerCase();
        var o = f1(t)
          , l = new Kg(r,i.type,o,i,t);
        l.persist(),
        Ce(l, n),
        x1.has(e) ? l && l._reactName && S1(l._targetInst, null, l) : l && l._reactName && Sh(l._targetInst, w1, l),
        ka.unstable_batchedUpdates(function() {
            if (h1(t),
            l) {
                var u = l._dispatchListeners
                  , s = l._dispatchInstances;
                if (Ca(u))
                    for (var a = 0; a < u.length && !l.isPropagationStopped(); a++)
                        df(l, u[a], s[a]);
                else
                    u && df(l, u, s);
                l._dispatchListeners = null,
                l._dispatchInstances = null,
                l.isPersistent() || l.constructor.release(l)
            }
            if (wo)
                throw u = ss,
                wo = !1,
                ss = null,
                u
        }),
        m1()
    }
}
"blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate".split(" ").forEach(function(e) {
    xh[e] = E1(e)
});
J.Simulate = xh;
J.act = v1;
J.findAllInRenderedTree = ul;
J.findRenderedComponentWithType = function(e, t) {
    if (hn(e, "findRenderedComponentWithType"),
    e = gh(e, t),
    e.length !== 1)
        throw Error("Did not find exactly one match (found: " + e.length + ") for componentType:" + t);
    return e[0]
}
;
J.findRenderedDOMComponentWithClass = function(e, t) {
    if (hn(e, "findRenderedDOMComponentWithClass"),
    e = vh(e, t),
    e.length !== 1)
        throw Error("Did not find exactly one match (found: " + e.length + ") for class:" + t);
    return e[0]
}
;
J.findRenderedDOMComponentWithTag = function(e, t) {
    if (hn(e, "findRenderedDOMComponentWithTag"),
    e = yh(e, t),
    e.length !== 1)
        throw Error("Did not find exactly one match (found: " + e.length + ") for tag:" + t);
    return e[0]
}
;
J.isCompositeComponent = Pa;
J.isCompositeComponentWithType = mh;
J.isDOMComponent = ll;
J.isDOMComponentElement = function(e) {
    return !!(e && ir.isValidElement(e) && e.tagName)
}
;
J.isElement = function(e) {
    return ir.isValidElement(e)
}
;
J.isElementOfType = function(e, t) {
    return ir.isValidElement(e) && e.type === t
}
;
J.mockComponent = function(e, t) {
    return t = t || e.mockTagName || "div",
    e.prototype.render.mockImplementation(function() {
        return ir.createElement(t, null, this.props.children)
    }),
    this
}
;
J.nativeTouchData = function(e, t) {
    return {
        touches: [{
            pageX: e,
            pageY: t
        }]
    }
}
;
J.renderIntoDocument = function(e) {
    var t = document.createElement("div");
    return ka.render(e, t)
}
;
J.scryRenderedComponentsWithType = gh;
J.scryRenderedDOMComponentsWithClass = vh;
J.scryRenderedDOMComponentsWithTag = yh;
J.traverseTwoPhase = Sh;
(function(e) {
    e.exports = J
}
)(Hg);
const Eh = Dg({
    name: "main",
    initialState: {
        Working: !1,
        Config: {
            activationSeed: "",
            serverSeed: "",
            betCount: 1e5
        },
        PlinkoData: {
            nonces: {
                "1000x": [],
                "130x": []
            },
            maxLoss: 0,
            profit: 0,
            bets: 1e5
        },
        MinesData: {
            nonces: [],
            mines: 3
        },
        LimboData: {
            parameters: {},
            results: [{
                index: 0,
                value: 1.6
            }],
            streaks: [],
            stats: {}
        }
    },
    reducers: {
        setPlinko: (e,t)=>{
            e.PlinkoData = t.payload
        }
        ,
        setMines: (e,t)=>{
            e.MinesData = t.payload
        }
        ,
        setLimboResults: (e,t)=>{
            e.LimboData.results = t.payload
        }
        ,
        setLimboStreaks: (e,t)=>{
            e.LimboData.streaks = t.payload
        }
        ,
        setLimboStats: (e,t)=>{
            e.LimboData.stats = t.payload
        }
        ,
        setWorking: (e,t)=>{
            e.Working = t.payload
        }
        ,
        setConfig: (e,t)=>{
            e.Config = t.payload
        }
    }
})
  , k1 = zg({
    reducer: {
        main: Eh.reducer
    }
})
  , kh = Eh.actions
  , je = {
    limbo: {
        serverSeed: "",
        clientSeed: "",
        bets: ""
    },
    mines: {
        serverSeed: "",
        clientSeed: "",
        bets: "",
        mineCount: 3
    },
    plinko: {
        serverSeed: "",
        clientSeed: "",
        bets: ""
    }
};
function _1() {
    const [e,t] = k.useState(je.plinko.serverSeed)
      , [n,r] = k.useState(je.plinko.clientSeed)
      , [i,o] = k.useState(je.plinko.bets)
      , [l,u] = k.useState(!1)
      , s = y=>{
        t(y.target.value)
    }
      , a = y=>{
        r(y.target.value)
    }
      , h = y=>{
        o(y.target.value)
    }
      , [v,p] = ca(sy, {
        remoteDependencies: ["https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"]
    });
    k.useEffect(()=>()=>{
        p.kill()
    }
    , []);
    const g = rh()
      , S = async y=>{
        const c = y.target
          , f = c.innerText;
        c.disabled = !0;
        let m = 0;
        const x = setInterval(()=>{
            c.innerText = "working" + ".".repeat(m++),
            m > 3 && (m = 0)
        }
        , 400);
        u(!0);
        const E = await v(e, n, i);
        g(kh.setPlinko(E)),
        clearInterval(x),
        c.disabled = !1,
        c.innerText = f,
        u(!1),
        d()
    }
    ;
    function d() {
        je.plinko = {
            serverSeed: e,
            clientSeed: n,
            bets: i
        }
    }
    return w.jsx("div", {
        className: "seed-form",
        disabled: l,
        children: w.jsxs("div", {
            children: [w.jsx(ot, {
                defaultValue: e,
                onChange: y=>s(y),
                placeholder: "Server Seed"
            }), w.jsx(ot, {
                defaultValue: n,
                onChange: y=>a(y),
                placeholder: "Client Seed"
            }), w.jsx(ot, {
                defaultValue: i,
                type: "number",
                min: "1000",
                max: "1000000",
                onChange: y=>h(y),
                placeholder: "Bets to Check (default: 100,000)"
            }), w.jsx("button", {
                disabled: e === "" || n === "",
                onClick: S,
                children: "When was it biatch?"
            })]
        })
    })
}
function C1({data: e}) {
    return w.jsx("div", {
        children: w.jsxs("span", {
            className: "",
            children: [w.jsx("span", {
                children: "Your 1st"
            }), " ", w.jsx("span", {
                className: "special",
                children: "1000x"
            }), " ", w.jsx("span", {
                className: "",
                children: "was at nonce"
            }), " ", w.jsx("span", {
                className: "special",
                children: e.nonces["1000x"][0]
            }), " ", w.jsx("span", {
                children: "If you did"
            }), " ", w.jsx("span", {
                className: "special",
                children: "$1"
            }), " ", w.jsx("span", {
                children: "bets, you would've needed a balance of at least"
            }), " ", w.jsxs("span", {
                className: "special",
                children: ["$", e.maxLoss]
            }), " ", w.jsx("span", {
                children: "to hit it and you wouldve ended up"
            }), " ", w.jsx("span", {
                children: e.profit > 0 ? "profiting" : "down"
            }), " ", w.jsxs("span", {
                className: "special",
                "data-profit": e.profit > 0,
                children: ["$", Math.abs(e.profit)]
            }), " ", w.jsx("span", {
                children: "after hitting it"
            }), " "]
        })
    })
}
function pf({type: e, game: t, title: n, data: r, className: i}) {
    return w.jsxs("div", {
        className: (i || "") + " list",
        children: [w.jsx("span", {
            className: "m-auto",
            children: w.jsxs("span", {
                className: "flex gap-1",
                children: [w.jsx("span", {
                    children: n
                }), w.jsx("span", {
                    className: "text-1sm flex items-center justify-center",
                    children: `${r.nonces[e].length}`
                })]
            })
        }), w.jsx("ol", {
            className: "scrollX",
            children: r.nonces[e].map(o=>w.jsx("li", {
                children: w.jsx("a", {
                    target: "_blank",
                    href: `https://stake.com/provably-fair/calculation?game=plinko&nonce=${o}&plinkoRisk=high&plinkoRow=16&clientSeed=${r.clientSeed}&serverSeed=${r.serverSeed}&c=gawbly`,
                    children: o
                })
            }))
        })]
    })
}
function hf() {
    const e = Zp(t=>t.main.PlinkoData);
    return w.jsx(w.Fragment, {
        children: w.jsxs("div", {
            className: "content",
            children: [w.jsx(_1, {}), w.jsx("div", {
                className: ""
            }), w.jsxs("div", {
                className: "mine-board-container sm-container mb-2",
                children: [e.nonces["1000x"].length > 0 && w.jsx(pf, {
                    className: "m-0 gap-0",
                    type: "1000x",
                    title: "1000×",
                    data: e
                }), e.nonces["130x"].length > 0 && w.jsx(pf, {
                    className: "p-0 m-0 gap-0",
                    type: "130x",
                    title: "130×",
                    data: e
                })]
            }), e.nonces["1000x"].length > 0 && w.jsx(C1, {
                data: e
            })]
        })
    })
}
const Yl = {
    getMinesMulti(e, t) {
        if (t === 0)
            return 0;
        let n = 1
          , r = 25
          , i = 25 - e;
        function o(v) {
            let p = v;
            for (let g = v; g > 1; g--)
                p *= g - 1;
            return p
        }
        function l(v, p) {
            return v === p ? 1 : o(v) / (o(p) * o(v - p))
        }
        let u = l(r, t)
          , s = l(i, t)
          , a = .99 * (u / s);
        a = Math.round(a * 100) / 100;
        let h = n * a;
        return h = Math.round(h * 1e8) / 1e8,
        h
    },
    numberWithCommas(e) {
        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    getRandomPattern(e) {
        let t = [];
        for (let r = 0; r < 25; r++)
            t.push(r);
        let n = [];
        for (let r = 0; r < e; r++) {
            let i = Math.floor(Math.random() * (25 - r));
            n.push(t[i]),
            t.splice(i, 1)
        }
        return n
    }
};
function P1(e) {
    return w.jsxs("svg", {
        ...e,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 76.61 70",
        children: [w.jsx("defs", {
            children: w.jsx("style", {
                children: ".cls-1{fill:#051d27;}.cls-2{fill:#06e403;}.cls-3{fill:#05a902;}.cls-4{fill:#01e501;}.cls-5{fill:#00d503;}.cls-6{fill:#09fd02;}.cls-7{fill:#019902;}.cls-8{fill:#01e300;}.cls-9{fill:#57fd7f;}.cls-10{fill:#03be02;}"
            })
        }), w.jsxs("g", {
            id: "Layer_1",
            "data-name": "Layer 1",
            children: [w.jsx("path", {
                className: "cls-1",
                d: "M38,70h0a2.75,2.75,0,0,1-2-.92L.7,29.62a2.76,2.76,0,0,1-.31-3.25L11,8.55a2.76,2.76,0,0,1,1.27-1.12L23.12,2.71a2.77,2.77,0,0,1,.62-.19L37.74,0a3.09,3.09,0,0,1,1,0L52.62,2.52a3.38,3.38,0,0,1,.62.18L64.42,7.58l.13,0h0a2.69,2.69,0,0,1,.65.45h0a3,3,0,0,1,.4.47h0l.09.14L76.23,26.6a2.73,2.73,0,0,1-.34,3.25L40.06,69.1A2.76,2.76,0,0,1,38,70Z"
            }), w.jsx("path", {
                className: "cls-2",
                d: "M22.13,18.75c-2.64,7-1.74,13.65,2.09,20,6.74-3.1,11.83-8.4,14.44-17C33,18.93,27.49,17.74,22.13,18.75Z"
            }), w.jsx("path", {
                className: "cls-3",
                d: "M73.86,28,63.33,10.1c-6.26,1.19-8.79,4.41-9,8.91C58.67,25.3,65.39,28,73.86,28Z"
            }), w.jsx("path", {
                className: "cls-4",
                d: "M38.49,21.94c.15,7.77,4.2,13.31,12.19,16.57l.07,0c4.5-5.59,5.9-12,3.62-19.47C48.26,16.08,42.9,16.72,38.49,21.94Z"
            }), w.jsx("path", {
                className: "cls-5",
                d: "M24.22,38.76q13.19,6.43,26.46-.25L38.49,21.94Z"
            }), w.jsx("path", {
                className: "cls-6",
                d: "M24.22,38.76c1,9.17,6.29,18.72,13.81,28.49,7.4-9,12.5-18.4,12.72-28.77Z"
            }), w.jsx("path", {
                className: "cls-7",
                d: "M50.75,38.48,38,67.25,73.86,28C64.47,28.32,56.19,30.75,50.75,38.48Z"
            }), w.jsx("path", {
                className: "cls-8",
                d: "M2.75,27.79,38,67.25,24.22,38.76C20.11,31,11.89,28.8,2.75,27.79Z"
            }), w.jsx("path", {
                className: "cls-9",
                d: "M13.39,10,2.75,27.79c9.33,1.22,16.19-1.21,19.54-8.88C24.57,13.79,21.22,11,13.39,10Z"
            }), w.jsx("polygon", {
                className: "cls-6",
                points: "2.75 27.79 24.22 38.76 22.29 18.91 2.75 27.79"
            }), w.jsx("polygon", {
                className: "cls-6",
                points: "52.14 5.23 38.22 2.75 24.22 5.23 13.39 9.96 22.29 18.91 38.49 21.94 54.37 19.01 63.33 10.1 52.14 5.23"
            }), w.jsx("polygon", {
                className: "cls-10",
                points: "50.74 38.48 73.86 27.99 54.37 19.01 50.74 38.48"
            }), w.jsx("polygon", {
                className: "cls-9",
                points: "13.89 10.83 24.37 5.43 38.22 2.75 24.22 5.23 13.39 9.96 13.89 10.83"
            }), w.jsx("polygon", {
                className: "cls-9",
                points: "22.29 18.91 24.22 38.76 21.1 19.05 22.29 18.91"
            }), w.jsx("polygon", {
                className: "cls-9",
                points: "22.29 18.91 38.49 21.94 38.03 22.48 22.29 18.91"
            }), w.jsx("polygon", {
                className: "cls-9",
                points: "63.33 10.1 53 19.28 54.37 19.01 63.33 10.1"
            })]
        })]
    })
}
function N1(e) {
    return w.jsx("svg", {
        ...e,
        viewBox: "0 0 32 32",
        children: w.jsx("path", {
            d: "M17.427 1.427c-7.488 0.043-13.644 5.691-14.487 12.958l-0.006 0.068h-2.813l4.933 7 4.947-7h-2.6c0.787-4.881 4.969-8.563 10.011-8.563 5.596 0 10.133 4.537 10.133 10.133s-4.537 10.133-10.133 10.133c-2.545 0-4.87-0.938-6.65-2.487l0.012 0.010-2.893 3.333c2.542 2.212 5.885 3.56 9.544 3.56 8.049 0 14.573-6.525 14.573-14.573s-6.523-14.572-14.571-14.573h-0z"
        })
    })
}
function j1(e) {
    return w.jsx("svg", {
        ...e,
        viewBox: "0 0 32 32",
        children: w.jsx("path", {
            d: "M21.333 4v-4h-10.667v4h-9.333v4.907h4v23.093h21.333v-23.093h4v-4.907zM13.333 26.667h-4v-13.333h4zM22.667 26.667h-4v-13.333h4z"
        })
    })
}
function O1({mineCount: e, setPattern: t}) {
    const [n,r] = k.useState(s())
      , [i,o] = k.useState(0)
      , [l,u] = k.useState(0);
    function s() {
        let c = [];
        for (let f = 0; f < 25; f++)
            c.push({
                index: f,
                selected: !1
            });
        return c
    }
    function a(c) {
        if (S() >= v() && c.target.dataset.selected !== "true")
            return;
        let f = c.target
          , m = parseInt(f.dataset.index);
        n[m].selected = !n[m].selected,
        r([...n]),
        t(p())
    }
    function h() {
        o(S()),
        u(Yl.getMinesMulti(e, S()))
    }
    function v() {
        return 25 - e
    }
    function p() {
        return g().map(c=>c.index)
    }
    function g() {
        return n.filter(c=>c.selected)
    }
    function S() {
        return g().length
    }
    k.useEffect(()=>{
        h()
    }
    , [n]),
    k.useEffect(()=>{
        let c = S() - v();
        if (c > 0) {
            let f = g();
            for (; c-- > 0; )
                f.pop().selected = !1
        }
        r([...n])
    }
    , [e]);
    function d() {
        for (let c of n)
            c.selected = !1;
        r(s()),
        t([])
    }
    function y() {
        d();
        let c = Yl.getRandomPattern(25 - e);
        t(c);
        for (let f of c)
            n[f].selected = !0;
        r([...n])
    }
    return w.jsxs("div", {
        className: "mine-board-container flex gap-2",
        children: [w.jsxs("div", {
            children: [w.jsx("div", {
                className: "mine-board",
                children: n.map(c=>w.jsx("button", {
                    className: "button-v-1",
                    "data-selected": c.selected,
                    tabIndex: 0,
                    onClick: a,
                    "data-index": c.index,
                    children: c.index + 1
                }, c.index))
            }), w.jsxs("span", {
                className: "flex justify-between footer px-1",
                children: [w.jsxs("span", {
                    className: "flex gap-2",
                    children: [w.jsxs("span", {
                        className: "grx23",
                        children: [w.jsx(Up, {
                            fill: "#fa0036",
                            width: "1rem"
                        }), w.jsx("span", {
                            children: e
                        })]
                    }), w.jsxs("span", {
                        className: "grx23",
                        children: [w.jsx(P1, {
                            fill: "white",
                            width: "1rem"
                        }), w.jsx("span", {
                            children: i
                        })]
                    })]
                }), w.jsx("span", {
                    children: Yl.numberWithCommas(l) + "×"
                })]
            })]
        }), w.jsxs("div", {
            className: "items-start flex flex-col  gap-2",
            children: [w.jsx("button", {
                onClick: y,
                className: "button-v-1 align-top ",
                children: w.jsx(N1, {
                    fill: "white",
                    width: "1rem"
                })
            }), w.jsx("button", {
                onClick: d,
                className: "button-v-1",
                children: w.jsx(j1, {
                    fill: "white",
                    width: "1rem"
                })
            })]
        })]
    })
}
const R1 = (e,t,n,r,i)=>{
    function o(v, p, g, S) {
        let d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
          , y = new Array(25);
        return a(u(v, p, g, S * 8)).forEach((c,f)=>{
            let m = Math.floor(c * (25 - f));
            y[d[m]] = !0,
            d.splice(m, 1)
        }
        ),
        y
    }
    let l = (v,p)=>CryptoJS.HmacSHA256(p, v)
      , u = (v,p,g,S,d)=>{
        let y = ""
          , c = 0;
        for (; y.length < S; )
            y += l(v, `${p}:${g || 0}:${c++}`);
        return y.length > S && (y = y.substring(0, S)),
        d && (y = y.substring(S - d, S)),
        y
    }
      , s = v=>{
        let p = 0;
        for (let g = 0; g < 4; g++)
            p += parseInt(v.substr(g * 2, 2), 16) / Math.pow(256, g + 1);
        return p
    }
      , a = v=>{
        let p = [];
        for (let g = 0; g * 8 < v.length; g++)
            p.push(s(v.substr(g * 8)));
        return p
    }
    ;
    function h() {
        let v = {
            nonces: [],
            minesCount: r,
            serverSeed: e,
            clientSeed: t
        }
          , p = 0
          , g = !1;
        (isNaN(n) || n == 0) && (n = 1e8,
        g = !0);
        e: for (; p++ <= n; ) {
            let S = o(e, t, p, r);
            for (let d of i)
                if (S[d] === !0)
                    continue e;
            if (v.nonces.push(p),
            g)
                break
        }
        return v
    }
    return h()
}
;
function T1() {
    const [e,t] = k.useState(je.mines.serverSeed)
      , [n,r] = k.useState(je.mines.clientSeed)
      , [i,o] = k.useState(je.mines.bets)
      , [l,u] = k.useState(je.mines.mineCount)
      , [s,a] = k.useState(!1)
      , [h,v] = k.useState([])
      , p = E=>{
        t(E.target.value)
    }
      , g = E=>{
        r(E.target.value)
    }
      , S = E=>{
        o(E.target.value)
    }
      , [d,y] = ca(R1, {
        remoteDependencies: ["https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"]
    });
    k.useEffect(()=>()=>{
        y.kill()
    }
    , []);
    const c = rh()
      , f = async E=>{
        m();
        const _ = E.target
          , P = _.innerText;
        _.disabled = !0;
        let N = 0;
        const T = setInterval(()=>{
            _.innerText = "working" + ".".repeat(N++),
            N > 3 && (N = 0)
        }
        , 400);
        a(!0),
        await new Promise(L=>setTimeout(L, 250));
        const O = await d(e, n, i, l, h);
        c(kh.setMines(O)),
        clearInterval(T),
        _.disabled = !1,
        _.innerText = P,
        a(!1)
    }
    ;
    function m() {
        je.mines = {
            serverSeed: e,
            clientSeed: n,
            bets: i,
            mineCount: l
        }
    }
    const x = [];
    for (let E = 1; E <= 24; E++) {
        let _ = E === 1 ? "mine" : "mines";
        x.push(`${E} ${_}`)
    }
    return w.jsxs("div", {
        className: "seed-form",
        disabled: s,
        children: [w.jsxs("div", {
            children: [w.jsx(ot, {
                defaultValue: e,
                onChange: E=>p(E),
                placeholder: "Server Seed"
            }), w.jsx(ot, {
                defaultValue: n,
                onChange: E=>g(E),
                placeholder: "Client Seed"
            }), w.jsx(ot, {
                defaultValue: i,
                type: "number",
                min: "1",
                max: "1000000",
                onChange: E=>S(E),
                placeholder: "Bets to Check (empty = stops on 1st hit)"
            }), w.jsx("select", {
                defaultValue: l + " mines",
                onChange: E=>{
                    u(parseInt(E.target.value))
                }
                ,
                children: x.map(E=>w.jsx("option", {
                    children: E
                }, E))
            }), w.jsx("button", {
                disabled: e === "" || n === "" || h.length === 0,
                onClick: f,
                children: "let me know pls"
            })]
        }), w.jsx(O1, {
            mineCount: l,
            setPattern: v
        })]
    })
}
function $1({type: e, data: t}) {
    return w.jsxs("div", {
        className: "list",
        children: [w.jsx("span", {
            children: w.jsx("span", {
                children: `Hits <${t.nonces.length}>`
            })
        }), w.jsx("ol", {
            className: "scrollX",
            children: t.nonces.map(n=>w.jsx("li", {
                children: w.jsx("a", {
                    target: "_blank",
                    href: `https://stake.com/provably-fair/calculation?game=mines&nonce=${n}&minesCount=${t.minesCount}&clientSeed=${t.clientSeed}&serverSeed=${t.serverSeed}`,
                    children: n
                })
            }))
        })]
    })
}
function z1() {
    const e = Zp(t=>t.main.MinesData);
    return w.jsx(w.Fragment, {
        children: w.jsxs("div", {
            className: "content",
            children: [w.jsx(T1, {}), e.nonces.length > 0 && w.jsx($1, {
                type: "Hits:",
                data: e
            })]
        })
    })
}
function I1({working: e, onFetchNewResults: t}) {
    const [n,r] = k.useState(je.limbo.serverSeed)
      , [i,o] = k.useState(je.limbo.clientSeed)
      , [l,u] = k.useState(je.limbo.bets)
      , s = k.useRef()
      , a = k.useRef()
      , h = y=>{
        r(y.target.value)
    }
      , v = y=>{
        o(y.target.value)
    }
      , p = y=>{
        u(y.target.value)
    }
      , g = async()=>{
        t(n, i, l),
        je.limbo = {
            serverSeed: n,
            clientSeed: i,
            bets: l
        }
    }
      , [S,d] = k.useState(0);
    return k.useEffect(()=>{
        if (e === !1)
            clearInterval(S),
            s.current.disabled = !1,
            s.current.innerText = "Analyze Seed";
        else {
            s.current.disabled = !0;
            let y = 0
              , c = setInterval(()=>{
                if (!s.current) {
                    clearInterval(c);
                    return
                }
                s.current.innerText = "working" + ".".repeat(y++),
                y > 3 && (y = 0)
            }
            , 400);
            d(c)
        }
        return ()=>{
            clearInterval(S)
        }
    }
    , [e]),
    w.jsx("div", {
        className: "seed-form",
        disabled: e,
        children: w.jsxs("div", {
            children: [w.jsx(ot, {
                defaultValue: n,
                innerRef: a,
                onChange: y=>h(y),
                placeholder: "Server Seed"
            }), w.jsx(ot, {
                defaultValue: i,
                onChange: y=>v(y),
                placeholder: "Client Seed"
            }), w.jsx(ot, {
                defaultValue: l,
                type: "number",
                min: "1000",
                max: "1000000",
                onChange: y=>p(y),
                placeholder: "Bets to Fetch (default: 100,000)"
            }), w.jsx("button", {
                ref: s,
                disabled: n === "" || i === "",
                onClick: g,
                children: "Analyze Seed"
            })]
        })
    })
}
function mf(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function as(e, t) {
    return as = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i,
        r
    }
    ,
    as(e, t)
}
function M1(e, t) {
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    as(e, t)
}
var vf = Number.isNaN || function(t) {
    return typeof t == "number" && t !== t
}
;
function L1(e, t) {
    return !!(e === t || vf(e) && vf(t))
}
function D1(e, t) {
    if (e.length !== t.length)
        return !1;
    for (var n = 0; n < e.length; n++)
        if (!L1(e[n], t[n]))
            return !1;
    return !0
}
function Xl(e, t) {
    t === void 0 && (t = D1);
    var n, r = [], i, o = !1;
    function l() {
        for (var u = [], s = 0; s < arguments.length; s++)
            u[s] = arguments[s];
        return o && n === this && t(u, r) || (i = e.apply(this, u),
        o = !0,
        n = this,
        r = u),
        i
    }
    return l
}
var U1 = typeof performance == "object" && typeof performance.now == "function"
  , yf = U1 ? function() {
    return performance.now()
}
: function() {
    return Date.now()
}
;
function gf(e) {
    cancelAnimationFrame(e.id)
}
function A1(e, t) {
    var n = yf();
    function r() {
        yf() - n >= t ? e.call(null) : i.id = requestAnimationFrame(r)
    }
    var i = {
        id: requestAnimationFrame(r)
    };
    return i
}
var Gl = -1;
function Sf(e) {
    if (e === void 0 && (e = !1),
    Gl === -1 || e) {
        var t = document.createElement("div")
          , n = t.style;
        n.width = "50px",
        n.height = "50px",
        n.overflow = "scroll",
        document.body.appendChild(t),
        Gl = t.offsetWidth - t.clientWidth,
        document.body.removeChild(t)
    }
    return Gl
}
var Sn = null;
function wf(e) {
    if (e === void 0 && (e = !1),
    Sn === null || e) {
        var t = document.createElement("div")
          , n = t.style;
        n.width = "50px",
        n.height = "50px",
        n.overflow = "scroll",
        n.direction = "rtl";
        var r = document.createElement("div")
          , i = r.style;
        return i.width = "100px",
        i.height = "100px",
        t.appendChild(r),
        document.body.appendChild(t),
        t.scrollLeft > 0 ? Sn = "positive-descending" : (t.scrollLeft = 1,
        t.scrollLeft === 0 ? Sn = "negative" : Sn = "positive-ascending"),
        document.body.removeChild(t),
        Sn
    }
    return Sn
}
var F1 = 150
  , W1 = function(t, n) {
    return t
};
function B1(e) {
    var t, n = e.getItemOffset, r = e.getEstimatedTotalSize, i = e.getItemSize, o = e.getOffsetForIndexAndAlignment, l = e.getStartIndexForOffset, u = e.getStopIndexForStartIndex, s = e.initInstanceProps, a = e.shouldResetStyleCacheOnItemSizeChange, h = e.validateProps;
    return t = function(v) {
        M1(p, v);
        function p(S) {
            var d;
            return d = v.call(this, S) || this,
            d._instanceProps = s(d.props, mf(d)),
            d._outerRef = void 0,
            d._resetIsScrollingTimeoutId = null,
            d.state = {
                instance: mf(d),
                isScrolling: !1,
                scrollDirection: "forward",
                scrollOffset: typeof d.props.initialScrollOffset == "number" ? d.props.initialScrollOffset : 0,
                scrollUpdateWasRequested: !1
            },
            d._callOnItemsRendered = void 0,
            d._callOnItemsRendered = Xl(function(y, c, f, m) {
                return d.props.onItemsRendered({
                    overscanStartIndex: y,
                    overscanStopIndex: c,
                    visibleStartIndex: f,
                    visibleStopIndex: m
                })
            }),
            d._callOnScroll = void 0,
            d._callOnScroll = Xl(function(y, c, f) {
                return d.props.onScroll({
                    scrollDirection: y,
                    scrollOffset: c,
                    scrollUpdateWasRequested: f
                })
            }),
            d._getItemStyle = void 0,
            d._getItemStyle = function(y) {
                var c = d.props, f = c.direction, m = c.itemSize, x = c.layout, E = d._getItemStyleCache(a && m, a && x, a && f), _;
                if (E.hasOwnProperty(y))
                    _ = E[y];
                else {
                    var P = n(d.props, y, d._instanceProps)
                      , N = i(d.props, y, d._instanceProps)
                      , T = f === "horizontal" || x === "horizontal"
                      , O = f === "rtl"
                      , L = T ? P : 0;
                    E[y] = _ = {
                        position: "absolute",
                        left: O ? void 0 : L,
                        right: O ? L : void 0,
                        top: T ? 0 : P,
                        height: T ? "100%" : N,
                        width: T ? N : "100%"
                    }
                }
                return _
            }
            ,
            d._getItemStyleCache = void 0,
            d._getItemStyleCache = Xl(function(y, c, f) {
                return {}
            }),
            d._onScrollHorizontal = function(y) {
                var c = y.currentTarget
                  , f = c.clientWidth
                  , m = c.scrollLeft
                  , x = c.scrollWidth;
                d.setState(function(E) {
                    if (E.scrollOffset === m)
                        return null;
                    var _ = d.props.direction
                      , P = m;
                    if (_ === "rtl")
                        switch (wf()) {
                        case "negative":
                            P = -m;
                            break;
                        case "positive-descending":
                            P = x - f - m;
                            break
                        }
                    return P = Math.max(0, Math.min(P, x - f)),
                    {
                        isScrolling: !0,
                        scrollDirection: E.scrollOffset < m ? "forward" : "backward",
                        scrollOffset: P,
                        scrollUpdateWasRequested: !1
                    }
                }, d._resetIsScrollingDebounced)
            }
            ,
            d._onScrollVertical = function(y) {
                var c = y.currentTarget
                  , f = c.clientHeight
                  , m = c.scrollHeight
                  , x = c.scrollTop;
                d.setState(function(E) {
                    if (E.scrollOffset === x)
                        return null;
                    var _ = Math.max(0, Math.min(x, m - f));
                    return {
                        isScrolling: !0,
                        scrollDirection: E.scrollOffset < _ ? "forward" : "backward",
                        scrollOffset: _,
                        scrollUpdateWasRequested: !1
                    }
                }, d._resetIsScrollingDebounced)
            }
            ,
            d._outerRefSetter = function(y) {
                var c = d.props.outerRef;
                d._outerRef = y,
                typeof c == "function" ? c(y) : c != null && typeof c == "object" && c.hasOwnProperty("current") && (c.current = y)
            }
            ,
            d._resetIsScrollingDebounced = function() {
                d._resetIsScrollingTimeoutId !== null && gf(d._resetIsScrollingTimeoutId),
                d._resetIsScrollingTimeoutId = A1(d._resetIsScrolling, F1)
            }
            ,
            d._resetIsScrolling = function() {
                d._resetIsScrollingTimeoutId = null,
                d.setState({
                    isScrolling: !1
                }, function() {
                    d._getItemStyleCache(-1, null)
                })
            }
            ,
            d
        }
        p.getDerivedStateFromProps = function(d, y) {
            return V1(d, y),
            h(d),
            null
        }
        ;
        var g = p.prototype;
        return g.scrollTo = function(d) {
            d = Math.max(0, d),
            this.setState(function(y) {
                return y.scrollOffset === d ? null : {
                    scrollDirection: y.scrollOffset < d ? "forward" : "backward",
                    scrollOffset: d,
                    scrollUpdateWasRequested: !0
                }
            }, this._resetIsScrollingDebounced)
        }
        ,
        g.scrollToItem = function(d, y) {
            y === void 0 && (y = "auto");
            var c = this.props
              , f = c.itemCount
              , m = c.layout
              , x = this.state.scrollOffset;
            d = Math.max(0, Math.min(d, f - 1));
            var E = 0;
            if (this._outerRef) {
                var _ = this._outerRef;
                m === "vertical" ? E = _.scrollWidth > _.clientWidth ? Sf() : 0 : E = _.scrollHeight > _.clientHeight ? Sf() : 0
            }
            this.scrollTo(o(this.props, d, y, x, this._instanceProps, E))
        }
        ,
        g.componentDidMount = function() {
            var d = this.props
              , y = d.direction
              , c = d.initialScrollOffset
              , f = d.layout;
            if (typeof c == "number" && this._outerRef != null) {
                var m = this._outerRef;
                y === "horizontal" || f === "horizontal" ? m.scrollLeft = c : m.scrollTop = c
            }
            this._callPropsCallbacks()
        }
        ,
        g.componentDidUpdate = function() {
            var d = this.props
              , y = d.direction
              , c = d.layout
              , f = this.state
              , m = f.scrollOffset
              , x = f.scrollUpdateWasRequested;
            if (x && this._outerRef != null) {
                var E = this._outerRef;
                if (y === "horizontal" || c === "horizontal")
                    if (y === "rtl")
                        switch (wf()) {
                        case "negative":
                            E.scrollLeft = -m;
                            break;
                        case "positive-ascending":
                            E.scrollLeft = m;
                            break;
                        default:
                            var _ = E.clientWidth
                              , P = E.scrollWidth;
                            E.scrollLeft = P - _ - m;
                            break
                        }
                    else
                        E.scrollLeft = m;
                else
                    E.scrollTop = m
            }
            this._callPropsCallbacks()
        }
        ,
        g.componentWillUnmount = function() {
            this._resetIsScrollingTimeoutId !== null && gf(this._resetIsScrollingTimeoutId)
        }
        ,
        g.render = function() {
            var d = this.props
              , y = d.children
              , c = d.className
              , f = d.direction
              , m = d.height
              , x = d.innerRef
              , E = d.innerElementType
              , _ = d.innerTagName
              , P = d.itemCount
              , N = d.itemData
              , T = d.itemKey
              , O = T === void 0 ? W1 : T
              , L = d.layout
              , ce = d.outerElementType
              , Je = d.outerTagName
              , Qt = d.style
              , mn = d.useIsScrolling
              , lr = d.width
              , vn = this.state.isScrolling
              , j = f === "horizontal" || L === "horizontal"
              , $ = j ? this._onScrollHorizontal : this._onScrollVertical
              , z = this._getRangeToRender()
              , b = z[0]
              , Z = z[1]
              , Yt = [];
            if (P > 0)
                for (var Pe = b; Pe <= Z; Pe++)
                    Yt.push(k.createElement(y, {
                        data: N,
                        key: O(Pe, N),
                        index: Pe,
                        isScrolling: mn ? vn : void 0,
                        style: this._getItemStyle(Pe)
                    }));
            var yn = r(this.props, this._instanceProps);
            return k.createElement(ce || Je || "div", {
                className: c,
                onScroll: $,
                ref: this._outerRefSetter,
                style: ts({
                    position: "relative",
                    height: m,
                    width: lr,
                    overflow: "auto",
                    WebkitOverflowScrolling: "touch",
                    willChange: "transform",
                    direction: f
                }, Qt)
            }, k.createElement(E || _ || "div", {
                children: Yt,
                ref: x,
                style: {
                    height: j ? "100%" : yn,
                    pointerEvents: vn ? "none" : void 0,
                    width: j ? yn : "100%"
                }
            }))
        }
        ,
        g._callPropsCallbacks = function() {
            if (typeof this.props.onItemsRendered == "function") {
                var d = this.props.itemCount;
                if (d > 0) {
                    var y = this._getRangeToRender()
                      , c = y[0]
                      , f = y[1]
                      , m = y[2]
                      , x = y[3];
                    this._callOnItemsRendered(c, f, m, x)
                }
            }
            if (typeof this.props.onScroll == "function") {
                var E = this.state
                  , _ = E.scrollDirection
                  , P = E.scrollOffset
                  , N = E.scrollUpdateWasRequested;
                this._callOnScroll(_, P, N)
            }
        }
        ,
        g._getRangeToRender = function() {
            var d = this.props
              , y = d.itemCount
              , c = d.overscanCount
              , f = this.state
              , m = f.isScrolling
              , x = f.scrollDirection
              , E = f.scrollOffset;
            if (y === 0)
                return [0, 0, 0, 0];
            var _ = l(this.props, E, this._instanceProps)
              , P = u(this.props, _, E, this._instanceProps)
              , N = !m || x === "backward" ? Math.max(1, c) : 1
              , T = !m || x === "forward" ? Math.max(1, c) : 1;
            return [Math.max(0, _ - N), Math.max(0, Math.min(y - 1, P + T)), _, P]
        }
        ,
        p
    }(k.PureComponent),
    t.defaultProps = {
        direction: "ltr",
        itemData: void 0,
        layout: "vertical",
        overscanCount: 2,
        useIsScrolling: !1
    },
    t
}
var V1 = function(t, n) {
    t.children,
    t.direction,
    t.height,
    t.layout,
    t.innerTagName,
    t.outerTagName,
    t.width,
    n.instance
}
  , H1 = 50
  , $n = function(t, n, r) {
    var i = t
      , o = i.itemSize
      , l = r.itemMetadataMap
      , u = r.lastMeasuredIndex;
    if (n > u) {
        var s = 0;
        if (u >= 0) {
            var a = l[u];
            s = a.offset + a.size
        }
        for (var h = u + 1; h <= n; h++) {
            var v = o(h);
            l[h] = {
                offset: s,
                size: v
            },
            s += v
        }
        r.lastMeasuredIndex = n
    }
    return l[n]
}
  , b1 = function(t, n, r) {
    var i = n.itemMetadataMap
      , o = n.lastMeasuredIndex
      , l = o > 0 ? i[o].offset : 0;
    return l >= r ? _h(t, n, o, 0, r) : K1(t, n, Math.max(0, o), r)
}
  , _h = function(t, n, r, i, o) {
    for (; i <= r; ) {
        var l = i + Math.floor((r - i) / 2)
          , u = $n(t, l, n).offset;
        if (u === o)
            return l;
        u < o ? i = l + 1 : u > o && (r = l - 1)
    }
    return i > 0 ? i - 1 : 0
}
  , K1 = function(t, n, r, i) {
    for (var o = t.itemCount, l = 1; r < o && $n(t, r, n).offset < i; )
        r += l,
        l *= 2;
    return _h(t, n, Math.min(r, o - 1), Math.floor(r / 2), i)
}
  , xf = function(t, n) {
    var r = t.itemCount
      , i = n.itemMetadataMap
      , o = n.estimatedItemSize
      , l = n.lastMeasuredIndex
      , u = 0;
    if (l >= r && (l = r - 1),
    l >= 0) {
        var s = i[l];
        u = s.offset + s.size
    }
    var a = r - l - 1
      , h = a * o;
    return u + h
}
  , Ef = B1({
    getItemOffset: function(t, n, r) {
        return $n(t, n, r).offset
    },
    getItemSize: function(t, n, r) {
        return r.itemMetadataMap[n].size
    },
    getEstimatedTotalSize: xf,
    getOffsetForIndexAndAlignment: function(t, n, r, i, o, l) {
        var u = t.direction
          , s = t.height
          , a = t.layout
          , h = t.width
          , v = u === "horizontal" || a === "horizontal"
          , p = v ? h : s
          , g = $n(t, n, o)
          , S = xf(t, o)
          , d = Math.max(0, Math.min(S - p, g.offset))
          , y = Math.max(0, g.offset - p + g.size + l);
        switch (r === "smart" && (i >= y - p && i <= d + p ? r = "auto" : r = "center"),
        r) {
        case "start":
            return d;
        case "end":
            return y;
        case "center":
            return Math.round(y + (d - y) / 2);
        case "auto":
        default:
            return i >= y && i <= d ? i : i < y ? y : d
        }
    },
    getStartIndexForOffset: function(t, n, r) {
        return b1(t, r, n)
    },
    getStopIndexForStartIndex: function(t, n, r, i) {
        for (var o = t.direction, l = t.height, u = t.itemCount, s = t.layout, a = t.width, h = o === "horizontal" || s === "horizontal", v = h ? a : l, p = $n(t, n, i), g = r + v, S = p.offset + p.size, d = n; d < u - 1 && S < g; )
            d++,
            S += $n(t, d, i).size;
        return d
    },
    initInstanceProps: function(t, n) {
        var r = t
          , i = r.estimatedItemSize
          , o = {
            itemMetadataMap: {},
            estimatedItemSize: i || H1,
            lastMeasuredIndex: -1
        };
        return n.resetAfterIndex = function(l, u) {
            u === void 0 && (u = !0),
            o.lastMeasuredIndex = Math.min(o.lastMeasuredIndex, l - 1),
            n._getItemStyleCache(-1),
            u && n.forceUpdate()
        }
        ,
        o
    },
    shouldResetStyleCacheOnItemSizeChange: !1,
    validateProps: function(t) {
        t.itemSize
    }
})
  , Q1 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}
  , Ch = {};
let We;
typeof window < "u" ? We = window : typeof self < "u" ? We = self : We = Q1;
let cs = null
  , fs = null;
const kf = 20
  , Zl = We.clearTimeout
  , _f = We.setTimeout
  , ql = We.cancelAnimationFrame || We.mozCancelAnimationFrame || We.webkitCancelAnimationFrame
  , Cf = We.requestAnimationFrame || We.mozRequestAnimationFrame || We.webkitRequestAnimationFrame;
ql == null || Cf == null ? (cs = Zl,
fs = function(t) {
    return _f(t, kf)
}
) : (cs = function([t,n]) {
    ql(t),
    Zl(n)
}
,
fs = function(t) {
    const n = Cf(function() {
        Zl(r),
        t()
    })
      , r = _f(function() {
        ql(n),
        t()
    }, kf);
    return [n, r]
}
);
function Y1(e) {
    let t, n, r, i, o, l, u;
    const s = typeof document < "u" && document.attachEvent;
    if (!s) {
        l = function(c) {
            const f = c.__resizeTriggers__
              , m = f.firstElementChild
              , x = f.lastElementChild
              , E = m.firstElementChild;
            x.scrollLeft = x.scrollWidth,
            x.scrollTop = x.scrollHeight,
            E.style.width = m.offsetWidth + 1 + "px",
            E.style.height = m.offsetHeight + 1 + "px",
            m.scrollLeft = m.scrollWidth,
            m.scrollTop = m.scrollHeight
        }
        ,
        o = function(c) {
            return c.offsetWidth !== c.__resizeLast__.width || c.offsetHeight !== c.__resizeLast__.height
        }
        ,
        u = function(c) {
            if (c.target.className && typeof c.target.className.indexOf == "function" && c.target.className.indexOf("contract-trigger") < 0 && c.target.className.indexOf("expand-trigger") < 0)
                return;
            const f = this;
            l(this),
            this.__resizeRAF__ && cs(this.__resizeRAF__),
            this.__resizeRAF__ = fs(function() {
                o(f) && (f.__resizeLast__.width = f.offsetWidth,
                f.__resizeLast__.height = f.offsetHeight,
                f.__resizeListeners__.forEach(function(E) {
                    E.call(f, c)
                }))
            })
        }
        ;
        let p = !1
          , g = "";
        r = "animationstart";
        const S = "Webkit Moz O ms".split(" ");
        let d = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ")
          , y = "";
        {
            const c = document.createElement("fakeelement");
            if (c.style.animationName !== void 0 && (p = !0),
            p === !1) {
                for (let f = 0; f < S.length; f++)
                    if (c.style[S[f] + "AnimationName"] !== void 0) {
                        y = S[f],
                        g = "-" + y.toLowerCase() + "-",
                        r = d[f],
                        p = !0;
                        break
                    }
            }
        }
        n = "resizeanim",
        t = "@" + g + "keyframes " + n + " { from { opacity: 0; } to { opacity: 0; } } ",
        i = g + "animation: 1ms " + n + "; "
    }
    const a = function(p) {
        if (!p.getElementById("detectElementResize")) {
            const g = (t || "") + ".resize-triggers { " + (i || "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }'
              , S = p.head || p.getElementsByTagName("head")[0]
              , d = p.createElement("style");
            d.id = "detectElementResize",
            d.type = "text/css",
            e != null && d.setAttribute("nonce", e),
            d.styleSheet ? d.styleSheet.cssText = g : d.appendChild(p.createTextNode(g)),
            S.appendChild(d)
        }
    };
    return {
        addResizeListener: function(p, g) {
            if (s)
                p.attachEvent("onresize", g);
            else {
                if (!p.__resizeTriggers__) {
                    const S = p.ownerDocument
                      , d = We.getComputedStyle(p);
                    d && d.position === "static" && (p.style.position = "relative"),
                    a(S),
                    p.__resizeLast__ = {},
                    p.__resizeListeners__ = [],
                    (p.__resizeTriggers__ = S.createElement("div")).className = "resize-triggers";
                    const y = S.createElement("div");
                    y.className = "expand-trigger",
                    y.appendChild(S.createElement("div"));
                    const c = S.createElement("div");
                    c.className = "contract-trigger",
                    p.__resizeTriggers__.appendChild(y),
                    p.__resizeTriggers__.appendChild(c),
                    p.appendChild(p.__resizeTriggers__),
                    l(p),
                    p.addEventListener("scroll", u, !0),
                    r && (p.__resizeTriggers__.__animationListener__ = function(m) {
                        m.animationName === n && l(p)
                    }
                    ,
                    p.__resizeTriggers__.addEventListener(r, p.__resizeTriggers__.__animationListener__))
                }
                p.__resizeListeners__.push(g)
            }
        },
        removeResizeListener: function(p, g) {
            if (s)
                p.detachEvent("onresize", g);
            else if (p.__resizeListeners__.splice(p.__resizeListeners__.indexOf(g), 1),
            !p.__resizeListeners__.length) {
                p.removeEventListener("scroll", u, !0),
                p.__resizeTriggers__.__animationListener__ && (p.__resizeTriggers__.removeEventListener(r, p.__resizeTriggers__.__animationListener__),
                p.__resizeTriggers__.__animationListener__ = null);
                try {
                    p.__resizeTriggers__ = !p.removeChild(p.__resizeTriggers__)
                } catch {}
            }
        }
    }
}
Ch = {
    createDetectElementResize: Y1
};
function wt(e, t, n) {
    return t = X1(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function X1(e) {
    var t = G1(e, "string");
    return typeof t == "symbol" ? t : String(t)
}
function G1(e, t) {
    if (typeof e != "object" || e === null)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
class Ph extends k.Component {
    constructor(...t) {
        super(...t),
        wt(this, "state", {
            height: this.props.defaultHeight || 0,
            scaledHeight: this.props.defaultHeight || 0,
            scaledWidth: this.props.defaultWidth || 0,
            width: this.props.defaultWidth || 0
        }),
        wt(this, "_autoSizer", null),
        wt(this, "_detectElementResize", null),
        wt(this, "_parentNode", null),
        wt(this, "_resizeObserver", null),
        wt(this, "_onResize", ()=>{
            const {disableHeight: n, disableWidth: r, onResize: i} = this.props;
            if (this._parentNode) {
                var o, l, u, s;
                const a = window.getComputedStyle(this._parentNode) || {}
                  , h = parseInt((o = a.paddingLeft) !== null && o !== void 0 ? o : "0", 10)
                  , v = parseInt((l = a.paddingRight) !== null && l !== void 0 ? l : "0", 10)
                  , p = parseInt((u = a.paddingTop) !== null && u !== void 0 ? u : "0", 10)
                  , g = parseInt((s = a.paddingBottom) !== null && s !== void 0 ? s : "0", 10)
                  , S = this._parentNode.getBoundingClientRect()
                  , d = S.height - p - g
                  , y = S.width - h - v
                  , c = this._parentNode.offsetHeight - p - g
                  , f = this._parentNode.offsetWidth - h - v;
                (!n && (this.state.height !== c || this.state.scaledHeight !== d) || !r && (this.state.width !== f || this.state.scaledWidth !== y)) && (this.setState({
                    height: c,
                    width: f,
                    scaledHeight: d,
                    scaledWidth: y
                }),
                typeof i == "function" && i({
                    height: c,
                    scaledHeight: d,
                    scaledWidth: y,
                    width: f
                }))
            }
        }
        ),
        wt(this, "_setRef", n=>{
            this._autoSizer = n
        }
        )
    }
    componentDidMount() {
        const {nonce: t} = this.props;
        this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement && (this._parentNode = this._autoSizer.parentNode,
        this._parentNode != null && (typeof ResizeObserver < "u" ? (this._resizeObserver = new ResizeObserver(()=>{
            setTimeout(this._onResize, 0)
        }
        ),
        this._resizeObserver.observe(this._parentNode)) : (this._detectElementResize = (0,
        Ch.createDetectElementResize)(t),
        this._detectElementResize.addResizeListener(this._parentNode, this._onResize)),
        this._onResize()))
    }
    componentWillUnmount() {
        this._parentNode && (this._detectElementResize && this._detectElementResize.removeResizeListener(this._parentNode, this._onResize),
        this._resizeObserver && (this._resizeObserver.observe(this._parentNode),
        this._resizeObserver.disconnect()))
    }
    render() {
        const {children: t, defaultHeight: n, defaultWidth: r, disableHeight: i, disableWidth: o, nonce: l, onResize: u, style: s, tagName: a="div", ...h} = this.props
          , {height: v, scaledHeight: p, scaledWidth: g, width: S} = this.state
          , d = {
            overflow: "visible"
        }
          , y = {};
        let c = !1;
        return i || (v === 0 && (c = !0),
        d.height = 0,
        y.height = v,
        y.scaledHeight = p),
        o || (S === 0 && (c = !0),
        d.width = 0,
        y.width = S,
        y.scaledWidth = g),
        k.createElement(a, {
            ref: this._setRef,
            style: {
                ...d,
                ...s
            },
            ...h
        }, !c && t(y))
    }
}
wt(Ph, "defaultProps", {
    onResize: ()=>{}
    ,
    disableHeight: !1,
    disableWidth: !1,
    style: {}
});
var Pf = Ph;
function Z1({stats: e}) {
    return w.jsx("div", {
        className: "stats",
        children: Object.keys(e).map(t=>w.jsxs("div", {
            className: "stat shadow-lg",
            children: [w.jsx("span", {
                children: t
            }), w.jsx("span", {
                children: e[t]
            })]
        }))
    })
}
function q1({streaks: e, results: t, stats: n, onMultiChange: r, multi: i}) {
    const o = ee.createRef()
      , l = ee.createRef()
      , u = ee.createRef()
      , [s,a] = k.useState(0)
      , h = ({data: y, index: c, style: f})=>w.jsx("li", {
        onClick: p,
        "data-highlighted": y[c].highlighted,
        "data-index": c,
        "data-selected": y[c].selected,
        style: {
            ...f,
            height: 30
        },
        children: y[c].value + "×"
    })
      , v = ({data: y, index: c, style: f})=>w.jsx("li", {
        "data-highlighted": y[c].type === "green",
        "data-index": c,
        onClick: g,
        style: {
            ...f,
            height: 30
        },
        children: y[c].value
    });
    function p(y) {
        if (y.button === 0) {
            let c = parseInt(y.target.dataset.index);
            S(c)
        }
    }
    function g(y) {
        if (y.button === 0) {
            let c = parseInt(y.target.dataset.index)
              , f = 0;
            for (let m = 0; m < c; m++)
                f += e[m].value,
                m === c - 1 && (f += 0);
            o.current.scrollToItem(f, "start"),
            S(f)
        }
    }
    function S(y) {
        s && (t[s].selected = !1),
        t[y] = {
            ...t[y],
            selected: !0
        },
        a(y)
    }
    function d() {
        r(parseInt(u.current.value))
    }
    return k.useEffect(()=>{
        l.current !== null && (l.current.resetAfterIndex(0, !1),
        o.current.resetAfterIndex(0, !1),
        o.current.scrollToItem(0, "start"),
        l.current.scrollToItem(0, "start"))
    }
    , [e]),
    w.jsxs("div", {
        className: "list",
        children: [w.jsxs("div", {
            className: "flex gap-2 h-[40px] mt-[5px] mb-[5px]",
            children: [w.jsx(ot, {
                onEnter: d,
                defaultValue: 100,
                type: "number",
                min: "1.0",
                max: "1000000",
                step: 1,
                innerRef: u,
                placeholder: "enter multi"
            }), w.jsx("button", {
                className: "flex justify-center items-center max-w-fit",
                onClick: y=>{
                    y.button === 0 && d()
                }
                ,
                children: "Set Multi"
            })]
        }), w.jsx(w.Fragment, {}), w.jsx(Pf, {
            children: ({height: y, width: c})=>w.jsx(Ef, {
                ref: l,
                innerElementType: "ul",
                itemData: e,
                itemCount: e.length,
                itemSize: f=>30 + (e[f].value + "").length * 10,
                itemKey: f=>f + e[f].key,
                layout: "horizontal",
                height: 44,
                width: c,
                children: v
            })
        }), w.jsx(Pf, {
            children: ({height: y, width: c})=>w.jsx(Ef, {
                ref: o,
                innerElementType: "ul",
                itemData: t,
                itemCount: t.length,
                itemSize: f=>30 + (t[f].value + "").length * 10,
                layout: "horizontal",
                height: 44,
                width: c,
                children: h
            })
        }), w.jsxs("span", {
            className: "flat-out-bullshit flex px-[2px] py-1 r-2 rounded-lg  justify-between w-[100%] ",
            children: [w.jsxs("span", {
                children: [" ", w.jsx("span", {
                    className: "opacity-75 ",
                    children: "Nonce:"
                }), " ", w.jsx("span", {
                    children: s + 1
                })]
            }), w.jsxs("span", {
                children: [" ", w.jsx("span", {
                    className: "opacity-75 ",
                    children: "Multi:"
                }), " ", w.jsx("span", {
                    children: i + "×"
                })]
            })]
        }), w.jsx(Z1, {
            stats: n
        }), w.jsxs("span", {
            className: "info-card",
            children: ["· The 1st list is a list of ", w.jsx("b", {
                children: "streaks"
            }), " for the selected multiplier", w.jsx("br", {}), " ", w.jsx("b", {
                children: "· Grey"
            }), " = amount of misses between wins", w.jsx("br", {}), " ", w.jsx("b", {
                children: " * Click"
            }), " on streak to scroll to result"]
        })]
    })
}
function Nf(e, t) {
    for (let n = 0; n < e.length; n++)
        e[n].highlighted = e[n].value >= t
}
function jf(e, t) {
    let n = [];
    if (!e || (e == null ? void 0 : e.length) === 0)
        return [];
    let r = 0
      , i = e[0] >= t ? 1 : -1;
    for (let o = 0; o < e.length; o++)
        e[o].value >= t ? (i === -1 && o !== 0 && (i = 1,
        n.push({
            type: "red",
            value: r,
            key: crypto.randomUUID()
        }),
        r = 0),
        r++) : (i === 1 && (i = -1,
        n.push({
            type: "green",
            value: r,
            key: crypto.randomUUID()
        }),
        r = 0),
        r++);
    return n.push({
        type: i === 1 ? "green" : "red",
        value: r
    }),
    n
}
function Of(e, t) {
    let n = 0
      , r = 0
      , i = 0
      , o = 0
      , l = 0
      , u = 0
      , s = 0
      , a = 0;
    for (let h = 0; h < e.length; h++) {
        let v = e[h].value;
        s++,
        v >= t ? (n++,
        i = 0,
        u++,
        n > r && (r = n),
        a += t) : (i++,
        n = 0,
        l++,
        i > o && (o = i))
    }
    return {
        Hits: u,
        "Max Hit Streak": r,
        "Hit %": (u / (l + u) * 100).toFixed(2) + "%",
        RTP: (a / s * 100).toFixed(2) + "%",
        "Max Miss Streak": o,
        "Miss %": (l / (l + u) * 100).toFixed(2) + "%"
    }
}
const J1 = (e,t,n,r,i)=>{
    function o(a, h, v, p) {
        const S = 1e8 / (u(l(a, `${h}:${v || 0}:0`)) * 1e8) * .99;
        return Math.max(1, Math.floor(S * 100) / 100)
    }
    let l = (a,h)=>CryptoJS.HmacSHA256(h, a).toString()
      , u = a=>{
        let h = 0;
        for (let v = 0; v < 4; v++)
            h += parseInt(a.substr(v * 2, 2), 16) / Math.pow(256, v + 1);
        return h
    }
    ;
    function s() {
        let a = {
            results: [],
            parameters: {
                serverSeed: e,
                clientSeed: t
            }
        }
          , h = 0;
        for ((isNaN(n) || n == 0) && (n = 1e5); h++ < n; ) {
            let v = o(e, t, h);
            a.results.push({
                value: v,
                index: h,
                highlighted: !1,
                key: crypto.randomUUID()
            })
        }
        return a
    }
    return s()
}
;
function eS() {
    const [e,t] = k.useState([])
      , [n,r] = k.useState([])
      , [i,o] = k.useState({})
      , [l,u] = k.useState(100)
      , [s,a] = k.useState(!1);
    function h(S) {
        Nf(e, S),
        r([...jf(e, S)]),
        t([...e]),
        o(Of(e, S)),
        u(S)
    }
    const [v,p] = ca(J1, {
        remoteDependencies: ["https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"]
    });
    k.useEffect(()=>()=>{
        p.kill()
    }
    , []);
    async function g(S, d, y) {
        a(!0);
        try {
            await new Promise(f=>setTimeout(f, 250));
            const c = await v(S, d, y);
            Nf(c.results, l),
            t(c.results),
            r(jf(c.results, l)),
            o(Of(c.results, l))
        } catch (c) {
            console.log(c.stack)
        }
        a(!1)
    }
    return w.jsx(w.Fragment, {
        children: w.jsxs("div", {
            className: "content limbo-page",
            children: [w.jsx(I1, {
                onFetchNewResults: g,
                working: s
            }), e.length > 0 && w.jsx(q1, {
                multi: l,
                stats: i,
                results: e,
                onMultiChange: h,
                streaks: n
            })]
        })
    })
}
function tS() {
    const e = nr()
      , [t,n] = k.useState(r());
    function r() {
        switch (e.pathname.split("/")[1].toLowerCase()) {
        case "plinko":
            return "When Was My 1000×?";
        case "mines":
            return "When My Mines Hitting Yo?";
        case "limbo":
            return "Analyze Your Limbo Seed"
        }
    }
    return k.useEffect(()=>{
        let i = r();
        document.title = i,
        n(i)
    }
    , [e]),
    w.jsxs(w.Fragment, {
        children: [w.jsxs("header", {
            children: [w.jsx(uy, {}), w.jsx("h1", {
                className: "text-4xl",
                children: t
            }), w.jsx("h3", {
                className: "text-1xl mb-2.5",
                children: "by gawbly"
            })]
        }), w.jsxs(Gv, {
            children: [w.jsx(wr, {
                path: "/",
                element: w.jsx(hf, {})
            }), w.jsx(wr, {
                path: "/plinko",
                element: w.jsx(hf, {})
            }), w.jsx(wr, {
                path: "/mines",
                element: w.jsx(z1, {})
            }), w.jsx(wr, {
                path: "/limbo",
                element: w.jsx(eS, {})
            })]
        })]
    })
}
eu.createRoot(document.getElementById("root")).render(w.jsx(qy, {
    store: k1,
    children: w.jsx(ee.StrictMode, {
        children: w.jsx(ty, {
            children: w.jsx(tS, {})
        })
    })
}));
