(function(e, t) {
		function n(e) {
			var t = e.length,
				n = ue.type(e);
			return ue.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
		}

		function r(e) {
			var t = Ne[e] = {};
			return ue.each(e.match(ce) || [], function(e, n) {
				t[n] = !0
			}), t
		}

		function i(e, n, r, i) {
			if(ue.acceptData(e)) {
				var o, a, s = ue.expando,
					u = "string" == typeof n,
					l = e.nodeType,
					c = l ? ue.cache : e,
					f = l ? e[s] : e[s] && s;
				if(f && c[f] && (i || c[f].data) || !u || r !== t) return f || (l ? e[s] = f = Z.pop() || ue.guid++ : f = s), c[f] || (c[f] = {}, l || (c[f].toJSON = ue.noop)), "object" != typeof n && "function" != typeof n || (i ? c[f] = ue.extend(c[f], n) : c[f].data = ue.extend(c[f].data, n)), o = c[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[ue.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[ue.camelCase(n)])) : a = o, a
			}
		}

		function o(e, t, n) {
			if(ue.acceptData(e)) {
				var r, i, o, a = e.nodeType,
					u = a ? ue.cache : e,
					l = a ? e[ue.expando] : ue.expando;
				if(u[l]) {
					if(t && (o = n ? u[l] : u[l].data)) {
						ue.isArray(t) ? t = t.concat(ue.map(t, ue.camelCase)) : t in o ? t = [t] : (t = ue.camelCase(t), t = t in o ? [t] : t.split(" "));
						for(r = 0, i = t.length; i > r; r++) delete o[t[r]];
						if(!(n ? s : ue.isEmptyObject)(o)) return
					}(n || (delete u[l].data, s(u[l]))) && (a ? ue.cleanData([e], !0) : ue.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
				}
			}
		}

		function a(e, n, r) {
			if(r === t && 1 === e.nodeType) {
				var i = "data-" + n.replace(ke, "-$1").toLowerCase();
				if(r = e.getAttribute(i), "string" == typeof r) {
					try {
						r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : Ce.test(r) ? ue.parseJSON(r) : r
					} catch(o) {}
					ue.data(e, n, r)
				} else r = t
			}
			return r
		}

		function s(e) {
			var t;
			for(t in e)
				if(("data" !== t || !ue.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
			return !0
		}

		function u() {
			return !0
		}

		function l() {
			return !1
		}

		function c(e, t) {
			do e = e[t]; while (e && 1 !== e.nodeType);
			return e
		}

		function f(e, t, n) {
			if(t = t || 0, ue.isFunction(t)) return ue.grep(e, function(e, r) {
				var i = !!t.call(e, r, e);
				return i === n
			});
			if(t.nodeType) return ue.grep(e, function(e) {
				return e === t === n
			});
			if("string" == typeof t) {
				var r = ue.grep(e, function(e) {
					return 1 === e.nodeType
				});
				if(Ie.test(t)) return ue.filter(t, r, !n);
				t = ue.filter(t, r)
			}
			return ue.grep(e, function(e) {
				return ue.inArray(e, t) >= 0 === n
			})
		}

		function p(e) {
			var t = Ue.split("|"),
				n = e.createDocumentFragment();
			if(n.createElement)
				for(; t.length;) n.createElement(t.pop());
			return n
		}

		function d(e, t) {
			return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
		}

		function h(e) {
			var t = e.getAttributeNode("type");
			return e.type = (t && t.specified) + "/" + e.type, e
		}

		function g(e) {
			var t = it.exec(e.type);
			return t ? e.type = t[1] : e.removeAttribute("type"), e
		}

		function m(e, t) {
			for(var n, r = 0; null != (n = e[r]); r++) ue._data(n, "globalEval", !t || ue._data(t[r], "globalEval"))
		}

		function y(e, t) {
			if(1 === t.nodeType && ue.hasData(e)) {
				var n, r, i, o = ue._data(e),
					a = ue._data(t, o),
					s = o.events;
				if(s) {
					delete a.handle, a.events = {};
					for(n in s)
						for(r = 0, i = s[n].length; i > r; r++) ue.event.add(t, n, s[n][r])
				}
				a.data && (a.data = ue.extend({}, a.data))
			}
		}

		function v(e, t) {
			var n, r, i;
			if(1 === t.nodeType) {
				if(n = t.nodeName.toLowerCase(), !ue.support.noCloneEvent && t[ue.expando]) {
					i = ue._data(t);
					for(r in i.events) ue.removeEvent(t, r, i.handle);
					t.removeAttribute(ue.expando)
				}
				"script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ue.support.html5Clone && e.innerHTML && !ue.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
			}
		}

		function b(e, n) {
			var r, i, o = 0,
				a = typeof e.getElementsByTagName !== V ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== V ? e.querySelectorAll(n || "*") : t;
			if(!a)
				for(a = [], r = e.childNodes || e; null != (i = r[o]); o++) !n || ue.nodeName(i, n) ? a.push(i) : ue.merge(a, b(i, n));
			return n === t || n && ue.nodeName(e, n) ? ue.merge([e], a) : a
		}

		function x(e) {
			tt.test(e.type) && (e.defaultChecked = e.checked)
		}

		function w(e, t) {
			if(t in e) return t;
			for(var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Ct.length; i--;)
				if(t = Ct[i] + n, t in e) return t;
			return r
		}

		function T(e, t) {
			return e = t || e, "none" === ue.css(e, "display") || !ue.contains(e.ownerDocument, e)
		}

		function N(e, t) {
			for(var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ue._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && T(r) && (o[a] = ue._data(r, "olddisplay", S(r.nodeName)))) : o[a] || (i = T(r), (n && "none" !== n || !i) && ue._data(r, "olddisplay", i ? n : ue.css(r, "display"))));
			for(a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
			return e
		}

		function C(e, t, n) {
			var r = yt.exec(t);
			return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
		}

		function k(e, t, n, r, i) {
			for(var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ue.css(e, n + Nt[o], !0, i)), r ? ("content" === n && (a -= ue.css(e, "padding" + Nt[o], !0, i)), "margin" !== n && (a -= ue.css(e, "border" + Nt[o] + "Width", !0, i))) : (a += ue.css(e, "padding" + Nt[o], !0, i), "padding" !== n && (a += ue.css(e, "border" + Nt[o] + "Width", !0, i)));
			return a
		}

		function E(e, t, n) {
			var r = !0,
				i = "width" === t ? e.offsetWidth : e.offsetHeight,
				o = ct(e),
				a = ue.support.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, o);
			if(0 >= i || null == i) {
				if(i = ft(e, t, o), (0 > i || null == i) && (i = e.style[t]), vt.test(i)) return i;
				r = a && (ue.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
			}
			return i + k(e, t, n || (a ? "border" : "content"), r, o) + "px"
		}

		function S(e) {
			var t = Y,
				n = xt[e];
			return n || (n = A(e, t), "none" !== n && n || (lt = (lt || ue("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (lt[0].contentWindow || lt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = A(e, t), lt.detach()), xt[e] = n), n
		}

		function A(e, t) {
			var n = ue(t.createElement(e)).appendTo(t.body),
				r = ue.css(n[0], "display");
			return n.remove(), r
		}

		function j(e, t, n, r) {
			var i;
			if(ue.isArray(t)) ue.each(t, function(t, i) {
				n || Et.test(e) ? r(e, i) : j(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
			});
			else if(n || "object" !== ue.type(t)) r(e, t);
			else
				for(i in t) j(e + "[" + i + "]", t[i], n, r)
		}

		function D(e) {
			return function(t, n) {
				"string" != typeof t && (n = t, t = "*");
				var r, i = 0,
					o = t.toLowerCase().match(ce) || [];
				if(ue.isFunction(n))
					for(; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
			}
		}

		function L(e, t, n, r) {
			function i(s) {
				var u;
				return o[s] = !0, ue.each(e[s] || [], function(e, s) {
					var l = s(t, n, r);
					return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
				}), u
			}
			var o = {},
				a = e === It;
			return i(t.dataTypes[0]) || !o["*"] && i("*")
		}

		function H(e, n) {
			var r, i, o = ue.ajaxSettings.flatOptions || {};
			for(i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
			return r && ue.extend(!0, e, r), e
		}

		function q(e, n, r) {
			var i, o, a, s, u = e.contents,
				l = e.dataTypes,
				c = e.responseFields;
			for(s in c) s in r && (n[c[s]] = r[s]);
			for(;
				"*" === l[0];) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
			if(o)
				for(s in u)
					if(u[s] && u[s].test(o)) {
						l.unshift(s);
						break
					}
			if(l[0] in r) a = l[0];
			else {
				for(s in r) {
					if(!l[0] || e.converters[s + " " + l[0]]) {
						a = s;
						break
					}
					i || (i = s)
				}
				a = a || i
			}
			return a ? (a !== l[0] && l.unshift(a), r[a]) : void 0
		}

		function M(e, t) {
			var n, r, i, o, a = {},
				s = 0,
				u = e.dataTypes.slice(),
				l = u[0];
			if(e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1])
				for(i in e.converters) a[i.toLowerCase()] = e.converters[i];
			for(; r = u[++s];)
				if("*" !== r) {
					if("*" !== l && l !== r) {
						if(i = a[l + " " + r] || a["* " + r], !i)
							for(n in a)
								if(o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
									i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
									break
								}
						if(i !== !0)
							if(i && e["throws"]) t = i(t);
							else try {
								t = i(t)
							} catch(c) {
								return {
									state: "parsererror",
									error: i ? c : "No conversion from " + l + " to " + r
								}
							}
					}
					l = r
				}
			return {
				state: "success",
				data: t
			}
		}

		function _() {
			try {
				return new e.XMLHttpRequest
			} catch(t) {}
		}

		function F() {
			try {
				return new e.ActiveXObject("Microsoft.XMLHTTP")
			} catch(t) {}
		}

		function O() {
			return setTimeout(function() {
				Kt = t
			}), Kt = ue.now()
		}

		function B(e, t) {
			ue.each(t, function(t, n) {
				for(var r = (on[t] || []).concat(on["*"]), i = 0, o = r.length; o > i; i++)
					if(r[i].call(e, t, n)) return
			})
		}

		function P(e, t, n) {
			var r, i, o = 0,
				a = rn.length,
				s = ue.Deferred().always(function() {
					delete u.elem
				}),
				u = function() {
					if(i) return !1;
					for(var t = Kt || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
					return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
				},
				l = s.promise({
					elem: e,
					props: ue.extend({}, t),
					opts: ue.extend(!0, {
						specialEasing: {}
					}, n),
					originalProperties: t,
					originalOptions: n,
					startTime: Kt || O(),
					duration: n.duration,
					tweens: [],
					createTween: function(t, n) {
						var r = ue.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
						return l.tweens.push(r), r
					},
					stop: function(t) {
						var n = 0,
							r = t ? l.tweens.length : 0;
						if(i) return this;
						for(i = !0; r > n; n++) l.tweens[n].run(1);
						return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
					}
				}),
				c = l.props;
			for(R(c, l.opts.specialEasing); a > o; o++)
				if(r = rn[o].call(l, e, c, l.opts)) return r;
			return B(l, c), ue.isFunction(l.opts.start) && l.opts.start.call(e, l), ue.fx.timer(ue.extend(u, {
				elem: e,
				anim: l,
				queue: l.opts.queue
			})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
		}

		function R(e, t) {
			var n, r, i, o, a;
			for(i in e)
				if(r = ue.camelCase(i), o = t[r], n = e[i], ue.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = ue.cssHooks[r], a && "expand" in a) {
					n = a.expand(n), delete e[r];
					for(i in n) i in e || (e[i] = n[i], t[i] = o)
				} else t[r] = o
		}

		function W(e, t, n) {
			var r, i, o, a, s, u, l, c, f, p = this,
				d = e.style,
				h = {},
				g = [],
				m = e.nodeType && T(e);
			n.queue || (c = ue._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function() {
				c.unqueued || f()
			}), c.unqueued++, p.always(function() {
				p.always(function() {
					c.unqueued--, ue.queue(e, "fx").length || c.empty.fire()
				})
			})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ue.css(e, "display") && "none" === ue.css(e, "float") && (ue.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ue.support.shrinkWrapBlocks || p.always(function() {
				d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
			}));
			for(i in t)
				if(a = t[i], en.exec(a)) {
					if(delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
					g.push(i)
				}
			if(o = g.length) {
				s = ue._data(e, "fxshow") || ue._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? ue(e).show() : p.done(function() {
					ue(e).hide()
				}), p.done(function() {
					var t;
					ue._removeData(e, "fxshow");
					for(t in h) ue.style(e, t, h[t])
				});
				for(i = 0; o > i; i++) r = g[i], l = p.createTween(r, m ? s[r] : 0), h[r] = s[r] || ue.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
			}
		}

		function $(e, t, n, r, i) {
			return new $.prototype.init(e, t, n, r, i)
		}

		function I(e, t) {
			var n, r = {
					height: e
				},
				i = 0;
			for(t = t ? 1 : 0; 4 > i; i += 2 - t) n = Nt[i], r["margin" + n] = r["padding" + n] = e;
			return t && (r.opacity = r.width = e), r
		}

		function z(e) {
			return ue.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
		}
		var X, U, V = typeof t,
			Y = e.document,
			J = e.location,
			G = e.jQuery,
			Q = e.$,
			K = {},
			Z = [],
			ee = "1.9.1",
			te = Z.concat,
			ne = Z.push,
			re = Z.slice,
			ie = Z.indexOf,
			oe = K.toString,
			ae = K.hasOwnProperty,
			se = ee.trim,
			ue = function(e, t) {
				return new ue.fn.init(e, t, U)
			},
			le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			ce = /\S+/g,
			fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			pe = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			he = /^[\],:{}\s]*$/,
			ge = /(?:^|:|,)(?:\s*\[)+/g,
			me = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
			ye = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
			ve = /^-ms-/,
			be = /-([\da-z])/gi,
			xe = function(e, t) {
				return t.toUpperCase()
			},
			we = function(e) {
				(Y.addEventListener || "load" === e.type || "complete" === Y.readyState) && (Te(), ue.ready())
			},
			Te = function() {
				Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", we, !1), e.removeEventListener("load", we, !1)) : (Y.detachEvent("onreadystatechange", we), e.detachEvent("onload", we))
			};
		ue.fn = ue.prototype = {
			jquery: ee,
			constructor: ue,
			init: function(e, n, r) {
				var i, o;
				if(!e) return this;
				if("string" == typeof e) {
					if(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : pe.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
					if(i[1]) {
						if(n = n instanceof ue ? n[0] : n, ue.merge(this, ue.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : Y, !0)), de.test(i[1]) && ue.isPlainObject(n))
							for(i in n) ue.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
						return this
					}
					if(o = Y.getElementById(i[2]), o && o.parentNode) {
						if(o.id !== i[2]) return r.find(e);
						this.length = 1, this[0] = o
					}
					return this.context = Y, this.selector = e, this
				}
				return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ue.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ue.makeArray(e, this))
			},
			selector: "",
			length: 0,
			size: function() {
				return this.length
			},
			toArray: function() {
				return re.call(this)
			},
			get: function(e) {
				return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
			},
			pushStack: function(e) {
				var t = ue.merge(this.constructor(), e);
				return t.prevObject = this, t.context = this.context, t
			},
			each: function(e, t) {
				return ue.each(this, e, t)
			},
			ready: function(e) {
				return ue.ready.promise().done(e), this
			},
			slice: function() {
				return this.pushStack(re.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(e) {
				var t = this.length,
					n = +e + (0 > e ? t : 0);
				return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
			},
			map: function(e) {
				return this.pushStack(ue.map(this, function(t, n) {
					return e.call(t, n, t)
				}))
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: ne,
			sort: [].sort,
			splice: [].splice
		}, ue.fn.init.prototype = ue.fn, ue.extend = ue.fn.extend = function() {
			var e, n, r, i, o, a, s = arguments[0] || {},
				u = 1,
				l = arguments.length,
				c = !1;
			for("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || ue.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)
				if(null != (o = arguments[u]))
					for(i in o) e = s[i], r = o[i], s !== r && (c && r && (ue.isPlainObject(r) || (n = ue.isArray(r))) ? (n ? (n = !1, a = e && ue.isArray(e) ? e : []) : a = e && ue.isPlainObject(e) ? e : {}, s[i] = ue.extend(c, a, r)) : r !== t && (s[i] = r));
			return s
		}, ue.extend({
			noConflict: function(t) {
				return e.$ === ue && (e.$ = Q), t && e.jQuery === ue && (e.jQuery = G), ue
			},
			isReady: !1,
			readyWait: 1,
			holdReady: function(e) {
				e ? ue.readyWait++ : ue.ready(!0)
			},
			ready: function(e) {
				if(e === !0 ? !--ue.readyWait : !ue.isReady) {
					if(!Y.body) return setTimeout(ue.ready);
					ue.isReady = !0, e !== !0 && --ue.readyWait > 0 || (X.resolveWith(Y, [ue]), ue.fn.trigger && ue(Y).trigger("ready").off("ready"))
				}
			},
			isFunction: function(e) {
				return "function" === ue.type(e)
			},
			isArray: Array.isArray || function(e) {
				return "array" === ue.type(e)
			},
			isWindow: function(e) {
				return null != e && e == e.window
			},
			isNumeric: function(e) {
				return !isNaN(parseFloat(e)) && isFinite(e)
			},
			type: function(e) {
				return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? K[oe.call(e)] || "object" : typeof e
			},
			isPlainObject: function(e) {
				if(!e || "object" !== ue.type(e) || e.nodeType || ue.isWindow(e)) return !1;
				try {
					if(e.constructor && !ae.call(e, "constructor") && !ae.call(e.constructor.prototype, "isPrototypeOf")) return !1
				} catch(n) {
					return !1
				}
				var r;
				for(r in e);
				return r === t || ae.call(e, r)
			},
			isEmptyObject: function(e) {
				var t;
				for(t in e) return !1;
				return !0
			},
			error: function(e) {
				throw new Error(e)
			},
			parseHTML: function(e, t, n) {
				if(!e || "string" != typeof e) return null;
				"boolean" == typeof t && (n = t, t = !1), t = t || Y;
				var r = de.exec(e),
					i = !n && [];
				return r ? [t.createElement(r[1])] : (r = ue.buildFragment([e], t, i), i && ue(i).remove(), ue.merge([], r.childNodes))
			},
			parseJSON: function(t) {
				return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = ue.trim(t), t && he.test(t.replace(me, "@").replace(ye, "]").replace(ge, ""))) ? new Function("return " + t)() : void ue.error("Invalid JSON: " + t)
			},
			parseXML: function(n) {
				var r, i;
				if(!n || "string" != typeof n) return null;
				try {
					e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
				} catch(o) {
					r = t
				}
				return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ue.error("Invalid XML: " + n), r
			},
			noop: function() {},
			globalEval: function(t) {
				t && ue.trim(t) && (e.execScript || function(t) {
					e.eval.call(e, t)
				})(t)
			},
			camelCase: function(e) {
				return e.replace(ve, "ms-").replace(be, xe)
			},
			nodeName: function(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function(e, t, r) {
				var i, o = 0,
					a = e.length,
					s = n(e);
				if(r) {
					if(s)
						for(; a > o && (i = t.apply(e[o], r), i !== !1); o++);
					else
						for(o in e)
							if(i = t.apply(e[o], r), i === !1) break
				} else if(s)
					for(; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
				else
					for(o in e)
						if(i = t.call(e[o], o, e[o]), i === !1) break; return e
			},
			trim: se && !se.call("\ufeff ") ? function(e) {
				return null == e ? "" : se.call(e)
			} : function(e) {
				return null == e ? "" : (e + "").replace(fe, "")
			},
			makeArray: function(e, t) {
				var r = t || [];
				return null != e && (n(Object(e)) ? ue.merge(r, "string" == typeof e ? [e] : e) : ne.call(r, e)), r
			},
			inArray: function(e, t, n) {
				var r;
				if(t) {
					if(ie) return ie.call(t, e, n);
					for(r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
						if(n in t && t[n] === e) return n
				}
				return -1
			},
			merge: function(e, n) {
				var r = n.length,
					i = e.length,
					o = 0;
				if("number" == typeof r)
					for(; r > o; o++) e[i++] = n[o];
				else
					for(; n[o] !== t;) e[i++] = n[o++];
				return e.length = i, e
			},
			grep: function(e, t, n) {
				var r, i = [],
					o = 0,
					a = e.length;
				for(n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
				return i
			},
			map: function(e, t, r) {
				var i, o = 0,
					a = e.length,
					s = n(e),
					u = [];
				if(s)
					for(; a > o; o++) i = t(e[o], o, r), null != i && (u[u.length] = i);
				else
					for(o in e) i = t(e[o], o, r), null != i && (u[u.length] = i);
				return te.apply([], u)
			},
			guid: 1,
			proxy: function(e, n) {
				var r, i, o;
				return "string" == typeof n && (o = e[n], n = e, e = o), ue.isFunction(e) ? (r = re.call(arguments, 2), i = function() {
					return e.apply(n || this, r.concat(re.call(arguments)))
				}, i.guid = e.guid = e.guid || ue.guid++, i) : t
			},
			access: function(e, n, r, i, o, a, s) {
				var u = 0,
					l = e.length,
					c = null == r;
				if("object" === ue.type(r)) {
					o = !0;
					for(u in r) ue.access(e, n, u, r[u], !0, a, s)
				} else if(i !== t && (o = !0, ue.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
						return c.call(ue(e), n)
					})), n))
					for(; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
				return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
			},
			now: function() {
				return(new Date).getTime()
			}
		}), ue.ready.promise = function(t) {
			if(!X)
				if(X = ue.Deferred(), "complete" === Y.readyState) setTimeout(ue.ready);
				else if(Y.addEventListener) Y.addEventListener("DOMContentLoaded", we, !1), e.addEventListener("load", we, !1);
			else {
				Y.attachEvent("onreadystatechange", we), e.attachEvent("onload", we);
				var n = !1;
				try {
					n = null == e.frameElement && Y.documentElement
				} catch(r) {}
				n && n.doScroll && ! function i() {
					if(!ue.isReady) {
						try {
							n.doScroll("left")
						} catch(e) {
							return setTimeout(i, 50)
						}
						Te(), ue.ready()
					}
				}()
			}
			return X.promise(t)
		}, ue.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
			K["[object " + t + "]"] = t.toLowerCase()
		}), U = ue(Y);
		var Ne = {};
		ue.Callbacks = function(e) {
			e = "string" == typeof e ? Ne[e] || r(e) : ue.extend({}, e);
			var n, i, o, a, s, u, l = [],
				c = !e.once && [],
				f = function(t) {
					for(i = e.memory && t, o = !0, s = u || 0, u = 0, a = l.length, n = !0; l && a > s; s++)
						if(l[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
							i = !1;
							break
						}
					n = !1, l && (c ? c.length && f(c.shift()) : i ? l = [] : p.disable())
				},
				p = {
					add: function() {
						if(l) {
							var t = l.length;
							! function r(t) {
								ue.each(t, function(t, n) {
									var i = ue.type(n);
									"function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
								})
							}(arguments), n ? a = l.length : i && (u = t, f(i))
						}
						return this
					},
					remove: function() {
						return l && ue.each(arguments, function(e, t) {
							for(var r;
								(r = ue.inArray(t, l, r)) > -1;) l.splice(r, 1), n && (a >= r && a--, s >= r && s--)
						}), this
					},
					has: function(e) {
						return e ? ue.inArray(e, l) > -1 : !(!l || !l.length)
					},
					empty: function() {
						return l = [], this
					},
					disable: function() {
						return l = c = i = t, this
					},
					disabled: function() {
						return !l
					},
					lock: function() {
						return c = t, i || p.disable(), this
					},
					locked: function() {
						return !c
					},
					fireWith: function(e, t) {
						return t = t || [], t = [e, t.slice ? t.slice() : t], !l || o && !c || (n ? c.push(t) : f(t)), this
					},
					fire: function() {
						return p.fireWith(this, arguments), this
					},
					fired: function() {
						return !!o
					}
				};
			return p
		}, ue.extend({
			Deferred: function(e) {
				var t = [
						["resolve", "done", ue.Callbacks("once memory"), "resolved"],
						["reject", "fail", ue.Callbacks("once memory"), "rejected"],
						["notify", "progress", ue.Callbacks("memory")]
					],
					n = "pending",
					r = {
						state: function() {
							return n
						},
						always: function() {
							return i.done(arguments).fail(arguments), this
						},
						then: function() {
							var e = arguments;
							return ue.Deferred(function(n) {
								ue.each(t, function(t, o) {
									var a = o[0],
										s = ue.isFunction(e[t]) && e[t];
									i[o[1]](function() {
										var e = s && s.apply(this, arguments);
										e && ue.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
									})
								}), e = null
							}).promise()
						},
						promise: function(e) {
							return null != e ? ue.extend(e, r) : r
						}
					},
					i = {};
				return r.pipe = r.then, ue.each(t, function(e, o) {
					var a = o[2],
						s = o[3];
					r[o[1]] = a.add, s && a.add(function() {
						n = s
					}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
						return i[o[0] + "With"](this === i ? r : this, arguments), this
					}, i[o[0] + "With"] = a.fireWith
				}), r.promise(i), e && e.call(i, i), i
			},
			when: function(e) {
				var t, n, r, i = 0,
					o = re.call(arguments),
					a = o.length,
					s = 1 !== a || e && ue.isFunction(e.promise) ? a : 0,
					u = 1 === s ? e : ue.Deferred(),
					l = function(e, n, r) {
						return function(i) {
							n[e] = this, r[e] = arguments.length > 1 ? re.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
						}
					};
				if(a > 1)
					for(t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ue.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
				return s || u.resolveWith(r, o), u.promise()
			}
		}), ue.support = function() {
			var t, n, r, i, o, a, s, u, l, c, f = Y.createElement("div");
			if(f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*"), r = f.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
			o = Y.createElement("select"), s = o.appendChild(Y.createElement("option")), i = f.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
				getSetAttribute: "t" !== f.className,
				leadingWhitespace: 3 === f.firstChild.nodeType,
				tbody: !f.getElementsByTagName("tbody").length,
				htmlSerialize: !!f.getElementsByTagName("link").length,
				style: /top/.test(r.getAttribute("style")),
				hrefNormalized: "/a" === r.getAttribute("href"),
				opacity: /^0.5/.test(r.style.opacity),
				cssFloat: !!r.style.cssFloat,
				checkOn: !!i.value,
				optSelected: s.selected,
				enctype: !!Y.createElement("form").enctype,
				html5Clone: "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML,
				boxModel: "CSS1Compat" === Y.compatMode,
				deleteExpando: !0,
				noCloneEvent: !0,
				inlineBlockNeedsLayout: !1,
				shrinkWrapBlocks: !1,
				reliableMarginRight: !0,
				boxSizingReliable: !0,
				pixelPosition: !1
			}, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
			try {
				delete f.test
			} catch(p) {
				t.deleteExpando = !1
			}
			i = Y.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = Y.createDocumentFragment(), a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function() {
				t.noCloneEvent = !1
			}), f.cloneNode(!0).click());
			for(c in {
					submit: !0,
					change: !0,
					focusin: !0
				}) f.setAttribute(u = "on" + c, "t"), t[c + "Bubbles"] = u in e || f.attributes[u].expando === !1;
			return f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === f.style.backgroundClip, ue(function() {
				var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
					a = Y.getElementsByTagName("body")[0];
				a && (n = Y.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === f.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {
					width: "4px"
				}).width, r = f.appendChild(Y.createElement("div")), r.style.cssText = f.style.cssText = o, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof f.style.zoom !== V && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = f = i = r = null)
			}), n = o = a = s = r = i = null, t
		}();
		var Ce = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
			ke = /([A-Z])/g;
		ue.extend({
			cache: {},
			expando: "jQuery" + (ee + Math.random()).replace(/\D/g, ""),
			noData: {
				embed: !0,
				object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
				applet: !0
			},
			hasData: function(e) {
				return e = e.nodeType ? ue.cache[e[ue.expando]] : e[ue.expando], !!e && !s(e)
			},
			data: function(e, t, n) {
				return i(e, t, n)
			},
			removeData: function(e, t) {
				return o(e, t)
			},
			_data: function(e, t, n) {
				return i(e, t, n, !0)
			},
			_removeData: function(e, t) {
				return o(e, t, !0)
			},
			acceptData: function(e) {
				if(e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
				var t = e.nodeName && ue.noData[e.nodeName.toLowerCase()];
				return !t || t !== !0 && e.getAttribute("classid") === t
			}
		}), ue.fn.extend({
			data: function(e, n) {
				var r, i, o = this[0],
					s = 0,
					u = null;
				if(e === t) {
					if(this.length && (u = ue.data(o), 1 === o.nodeType && !ue._data(o, "parsedAttrs"))) {
						for(r = o.attributes; s < r.length; s++) i = r[s].name, i.indexOf("data-") || (i = ue.camelCase(i.slice(5)), a(o, i, u[i]));
						ue._data(o, "parsedAttrs", !0)
					}
					return u
				}
				return "object" == typeof e ? this.each(function() {
					ue.data(this, e)
				}) : ue.access(this, function(n) {
					return n === t ? o ? a(o, e, ue.data(o, e)) : null : void this.each(function() {
						ue.data(this, e, n)
					})
				}, null, n, arguments.length > 1, null, !0)
			},
			removeData: function(e) {
				return this.each(function() {
					ue.removeData(this, e)
				})
			}
		}), ue.extend({
			queue: function(e, t, n) {
				var r;
				return e ? (t = (t || "fx") + "queue", r = ue._data(e, t), n && (!r || ue.isArray(n) ? r = ue._data(e, t, ue.makeArray(n)) : r.push(n)), r || []) : void 0
			},
			dequeue: function(e, t) {
				t = t || "fx";
				var n = ue.queue(e, t),
					r = n.length,
					i = n.shift(),
					o = ue._queueHooks(e, t),
					a = function() {
						ue.dequeue(e, t)
					};
				"inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
			},
			_queueHooks: function(e, t) {
				var n = t + "queueHooks";
				return ue._data(e, n) || ue._data(e, n, {
					empty: ue.Callbacks("once memory").add(function() {
						ue._removeData(e, t + "queue"), ue._removeData(e, n)
					})
				})
			}
		}), ue.fn.extend({
			queue: function(e, n) {
				var r = 2;
				return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? ue.queue(this[0], e) : n === t ? this : this.each(function() {
					var t = ue.queue(this, e, n);
					ue._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ue.dequeue(this, e)
				})
			},
			dequeue: function(e) {
				return this.each(function() {
					ue.dequeue(this, e)
				})
			},
			delay: function(e, t) {
				return e = ue.fx ? ue.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
					var r = setTimeout(t, e);
					n.stop = function() {
						clearTimeout(r)
					}
				})
			},
			clearQueue: function(e) {
				return this.queue(e || "fx", [])
			},
			promise: function(e, n) {
				var r, i = 1,
					o = ue.Deferred(),
					a = this,
					s = this.length,
					u = function() {
						--i || o.resolveWith(a, [a])
					};
				for("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = ue._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
				return u(), o.promise(n)
			}
		});
		var Ee, Se, Ae = /[\t\r\n]/g,
			je = /\r/g,
			De = /^(?:input|select|textarea|button|object)$/i,
			Le = /^(?:a|area)$/i,
			He = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
			qe = /^(?:checked|selected)$/i,
			Me = ue.support.getSetAttribute,
			_e = ue.support.input;
		ue.fn.extend({
			attr: function(e, t) {
				return ue.access(this, ue.attr, e, t, arguments.length > 1)
			},
			removeAttr: function(e) {
				return this.each(function() {
					ue.removeAttr(this, e)
				})
			},
			prop: function(e, t) {
				return ue.access(this, ue.prop, e, t, arguments.length > 1)
			},
			removeProp: function(e) {
				return e = ue.propFix[e] || e, this.each(function() {
					try {
						this[e] = t, delete this[e]
					} catch(n) {}
				})
			},
			addClass: function(e) {
				var t, n, r, i, o, a = 0,
					s = this.length,
					u = "string" == typeof e && e;
				if(ue.isFunction(e)) return this.each(function(t) {
					ue(this).addClass(e.call(this, t, this.className))
				});
				if(u)
					for(t = (e || "").match(ce) || []; s > a; a++)
						if(n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : " ")) {
							for(o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
							n.className = ue.trim(r)
						}
				return this
			},
			removeClass: function(e) {
				var t, n, r, i, o, a = 0,
					s = this.length,
					u = 0 === arguments.length || "string" == typeof e && e;
				if(ue.isFunction(e)) return this.each(function(t) {
					ue(this).removeClass(e.call(this, t, this.className))
				});
				if(u)
					for(t = (e || "").match(ce) || []; s > a; a++)
						if(n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : "")) {
							for(o = 0; i = t[o++];)
								for(; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
							n.className = e ? ue.trim(r) : ""
						}
				return this
			},
			toggleClass: function(e, t) {
				var n = typeof e,
					r = "boolean" == typeof t;
				return ue.isFunction(e) ? this.each(function(n) {
					ue(this).toggleClass(e.call(this, n, this.className, t), t)
				}) : this.each(function() {
					if("string" === n)
						for(var i, o = 0, a = ue(this), s = t, u = e.match(ce) || []; i = u[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
					else n !== V && "boolean" !== n || (this.className && ue._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ue._data(this, "__className__") || "")
				})
			},
			hasClass: function(e) {
				for(var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
					if(1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ae, " ").indexOf(t) >= 0) return !0;
				return !1
			},
			val: function(e) {
				var n, r, i, o = this[0]; {
					if(arguments.length) return i = ue.isFunction(e), this.each(function(n) {
						var o, a = ue(this);
						1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ue.isArray(o) && (o = ue.map(o, function(e) {
							return null == e ? "" : e + ""
						})), r = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
					});
					if(o) return r = ue.valHooks[o.type] || ue.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(je, "") : null == n ? "" : n)
				}
			}
		}), ue.extend({
			valHooks: {
				option: {
					get: function(e) {
						var t = e.attributes.value;
						return !t || t.specified ? e.value : e.text
					}
				},
				select: {
					get: function(e) {
						for(var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
							if(n = r[u], (n.selected || u === i) && (ue.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ue.nodeName(n.parentNode, "optgroup"))) {
								if(t = ue(n).val(), o) return t;
								a.push(t)
							}
						return a
					},
					set: function(e, t) {
						var n = ue.makeArray(t);
						return ue(e).find("option").each(function() {
							this.selected = ue.inArray(ue(this).val(), n) >= 0
						}), n.length || (e.selectedIndex = -1), n
					}
				}
			},
			attr: function(e, n, r) {
				var i, o, a, s = e.nodeType;
				if(e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === V ? ue.prop(e, n, r) : (o = 1 !== s || !ue.isXMLDoc(e), o && (n = n.toLowerCase(), i = ue.attrHooks[n] || (He.test(n) ? Se : Ee)), r === t ? i && o && "get" in i && null !== (a = i.get(e, n)) ? a : (typeof e.getAttribute !== V && (a = e.getAttribute(n)), null == a ? t : a) : null !== r ? i && o && "set" in i && (a = i.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : void ue.removeAttr(e, n))
			},
			removeAttr: function(e, t) {
				var n, r, i = 0,
					o = t && t.match(ce);
				if(o && 1 === e.nodeType)
					for(; n = o[i++];) r = ue.propFix[n] || n, He.test(n) ? !Me && qe.test(n) ? e[ue.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : ue.attr(e, n, ""), e.removeAttribute(Me ? n : r)
			},
			attrHooks: {
				type: {
					set: function(e, t) {
						if(!ue.support.radioValue && "radio" === t && ue.nodeName(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			},
			propFix: {
				tabindex: "tabIndex",
				readonly: "readOnly",
				"for": "htmlFor",
				"class": "className",
				maxlength: "maxLength",
				cellspacing: "cellSpacing",
				cellpadding: "cellPadding",
				rowspan: "rowSpan",
				colspan: "colSpan",
				usemap: "useMap",
				frameborder: "frameBorder",
				contenteditable: "contentEditable"
			},
			prop: function(e, n, r) {
				var i, o, a, s = e.nodeType;
				if(e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !ue.isXMLDoc(e), a && (n = ue.propFix[n] || n, o = ue.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
			},
			propHooks: {
				tabIndex: {
					get: function(e) {
						var n = e.getAttributeNode("tabindex");
						return n && n.specified ? parseInt(n.value, 10) : De.test(e.nodeName) || Le.test(e.nodeName) && e.href ? 0 : t
					}
				}
			}
		}), Se = {
			get: function(e, n) {
				var r = ue.prop(e, n),
					i = "boolean" == typeof r && e.getAttribute(n),
					o = "boolean" == typeof r ? _e && Me ? null != i : qe.test(n) ? e[ue.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
				return o && o.value !== !1 ? n.toLowerCase() : t
			},
			set: function(e, t, n) {
				return t === !1 ? ue.removeAttr(e, n) : _e && Me || !qe.test(n) ? e.setAttribute(!Me && ue.propFix[n] || n, n) : e[ue.camelCase("default-" + n)] = e[n] = !0, n
			}
		}, _e && Me || (ue.attrHooks.value = {
			get: function(e, n) {
				var r = e.getAttributeNode(n);
				return ue.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
			},
			set: function(e, t, n) {
				return ue.nodeName(e, "input") ? void(e.defaultValue = t) : Ee && Ee.set(e, t, n)
			}
		}), Me || (Ee = ue.valHooks.button = {
			get: function(e, n) {
				var r = e.getAttributeNode(n);
				return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
			},
			set: function(e, n, r) {
				var i = e.getAttributeNode(r);
				return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
			}
		}, ue.attrHooks.contenteditable = {
			get: Ee.get,
			set: function(e, t, n) {
				Ee.set(e, "" === t ? !1 : t, n)
			}
		}, ue.each(["width", "height"], function(e, t) {
			ue.attrHooks[t] = ue.extend(ue.attrHooks[t], {
				set: function(e, n) {
					return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
				}
			})
		})), ue.support.hrefNormalized || (ue.each(["href", "src", "width", "height"], function(e, n) {
			ue.attrHooks[n] = ue.extend(ue.attrHooks[n], {
				get: function(e) {
					var r = e.getAttribute(n, 2);
					return null == r ? t : r
				}
			})
		}), ue.each(["href", "src"], function(e, t) {
			ue.propHooks[t] = {
				get: function(e) {
					return e.getAttribute(t, 4)
				}
			}
		})), ue.support.style || (ue.attrHooks.style = {
			get: function(e) {
				return e.style.cssText || t
			},
			set: function(e, t) {
				return e.style.cssText = t + ""
			}
		}), ue.support.optSelected || (ue.propHooks.selected = ue.extend(ue.propHooks.selected, {
			get: function(e) {
				var t = e.parentNode;
				return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
			}
		})), ue.support.enctype || (ue.propFix.enctype = "encoding"), ue.support.checkOn || ue.each(["radio", "checkbox"], function() {
			ue.valHooks[this] = {
				get: function(e) {
					return null === e.getAttribute("value") ? "on" : e.value
				}
			}
		}), ue.each(["radio", "checkbox"], function() {
			ue.valHooks[this] = ue.extend(ue.valHooks[this], {
				set: function(e, t) {
					return ue.isArray(t) ? e.checked = ue.inArray(ue(e).val(), t) >= 0 : void 0
				}
			})
		});
		var Fe = /^(?:input|select|textarea)$/i,
			Oe = /^key/,
			Be = /^(?:mouse|contextmenu)|click/,
			Pe = /^(?:focusinfocus|focusoutblur)$/,
			Re = /^([^.]*)(?:\.(.+)|)$/;
		ue.event = {
				global: {},
				add: function(e, n, r, i, o) {
					var a, s, u, l, c, f, p, d, h, g, m, y = ue._data(e);
					if(y) {
						for(r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = ue.guid++), (s = y.events) || (s = y.events = {}), (f = y.handle) || (f = y.handle = function(e) {
								return typeof ue === V || e && ue.event.triggered === e.type ? t : ue.event.dispatch.apply(f.elem, arguments)
							}, f.elem = e), n = (n || "").match(ce) || [""], u = n.length; u--;) a = Re.exec(n[u]) || [], h = m = a[1], g = (a[2] || "").split(".").sort(), c = ue.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = ue.event.special[h] || {}, p = ue.extend({
							type: h,
							origType: m,
							data: i,
							handler: r,
							guid: r.guid,
							selector: o,
							needsContext: o && ue.expr.match.needsContext.test(o),
							namespace: g.join(".")
						}, l), (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, c.setup && c.setup.call(e, i, g, f) !== !1 || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), ue.event.global[h] = !0;
						e = null
					}
				},
				remove: function(e, t, n, r, i) {
					var o, a, s, u, l, c, f, p, d, h, g, m = ue.hasData(e) && ue._data(e);
					if(m && (c = m.events)) {
						for(t = (t || "").match(ce) || [""], l = t.length; l--;)
							if(s = Re.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
								for(f = ue.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = c[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;) a = p[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
								u && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ue.removeEvent(e, d, m.handle), delete c[d])
							} else
								for(d in c) ue.event.remove(e, d + t[l], n, r, !0);
						ue.isEmptyObject(c) && (delete m.handle, ue._removeData(e, "events"))
					}
				},
				trigger: function(n, r, i, o) {
					var a, s, u, l, c, f, p, d = [i || Y],
						h = ae.call(n, "type") ? n.type : n,
						g = ae.call(n, "namespace") ? n.namespace.split(".") : [];
					if(u = f = i = i || Y, 3 !== i.nodeType && 8 !== i.nodeType && !Pe.test(h + ue.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), s = h.indexOf(":") < 0 && "on" + h, n = n[ue.expando] ? n : new ue.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ue.makeArray(r, [n]), c = ue.event.special[h] || {}, o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
						if(!o && !c.noBubble && !ue.isWindow(i)) {
							for(l = c.delegateType || h, Pe.test(l + h) || (u = u.parentNode); u; u = u.parentNode) d.push(u), f = u;
							f === (i.ownerDocument || Y) && d.push(f.defaultView || f.parentWindow || e)
						}
						for(p = 0;
							(u = d[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? l : c.bindType || h, a = (ue._data(u, "events") || {})[n.type] && ue._data(u, "handle"), a && a.apply(u, r), a = s && u[s], a && ue.acceptData(u) && a.apply && a.apply(u, r) === !1 && n.preventDefault();
						if(n.type = h, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(i.ownerDocument, r) === !1) && ("click" !== h || !ue.nodeName(i, "a")) && ue.acceptData(i) && s && i[h] && !ue.isWindow(i)) {
							f = i[s], f && (i[s] = null), ue.event.triggered = h;
							try {
								i[h]()
							} catch(m) {}
							ue.event.triggered = t, f && (i[s] = f)
						}
						return n.result
					}
				},
				dispatch: function(e) {
					e = ue.event.fix(e);
					var n, r, i, o, a, s = [],
						u = re.call(arguments),
						l = (ue._data(this, "events") || {})[e.type] || [],
						c = ue.event.special[e.type] || {};
					if(u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
						for(s = ue.event.handlers.call(this, e, l), n = 0;
							(o = s[n++]) && !e.isPropagationStopped();)
							for(e.currentTarget = o.elem, a = 0;
								(i = o.handlers[a++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i, e.data = i.data, r = ((ue.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
						return c.postDispatch && c.postDispatch.call(this, e), e.result
					}
				},
				handlers: function(e, n) {
					var r, i, o, a, s = [],
						u = n.delegateCount,
						l = e.target;
					if(u && l.nodeType && (!e.button || "click" !== e.type))
						for(; l != this; l = l.parentNode || this)
							if(1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
								for(o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? ue(r, this).index(l) >= 0 : ue.find(r, this, null, [l]).length), o[r] && o.push(i);
								o.length && s.push({
									elem: l,
									handlers: o
								})
							}
					return u < n.length && s.push({
						elem: this,
						handlers: n.slice(u)
					}), s
				},
				fix: function(e) {
					if(e[ue.expando]) return e;
					var t, n, r, i = e.type,
						o = e,
						a = this.fixHooks[i];
					for(a || (this.fixHooks[i] = a = Be.test(i) ? this.mouseHooks : Oe.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ue.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
					return e.target || (e.target = o.srcElement || Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
				},
				props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
				fixHooks: {},
				keyHooks: {
					props: "char charCode key keyCode".split(" "),
					filter: function(e, t) {
						return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
					}
				},
				mouseHooks: {
					props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
					filter: function(e, n) {
						var r, i, o, a = n.button,
							s = n.fromElement;
						return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || Y, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
					}
				},
				special: {
					load: {
						noBubble: !0
					},
					click: {
						trigger: function() {
							return ue.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
						}
					},
					focus: {
						trigger: function() {
							if(this !== Y.activeElement && this.focus) try {
								return this.focus(), !1
							} catch(e) {}
						},
						delegateType: "focusin"
					},
					blur: {
						trigger: function() {
							return this === Y.activeElement && this.blur ? (this.blur(), !1) : void 0
						},
						delegateType: "focusout"
					},
					beforeunload: {
						postDispatch: function(e) {
							e.result !== t && (e.originalEvent.returnValue = e.result)
						}
					}
				},
				simulate: function(e, t, n, r) {
					var i = ue.extend(new ue.Event, n, {
						type: e,
						isSimulated: !0,
						originalEvent: {}
					});
					r ? ue.event.trigger(i, null, t) : ue.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
				}
			}, ue.removeEvent = Y.removeEventListener ? function(e, t, n) {
				e.removeEventListener && e.removeEventListener(t, n, !1)
			} : function(e, t, n) {
				var r = "on" + t;
				e.detachEvent && (typeof e[r] === V && (e[r] = null), e.detachEvent(r, n))
			}, ue.Event = function(e, t) {
				return this instanceof ue.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u : l) : this.type = e, t && ue.extend(this, t), this.timeStamp = e && e.timeStamp || ue.now(), void(this[ue.expando] = !0)) : new ue.Event(e, t)
			}, ue.Event.prototype = {
				isDefaultPrevented: l,
				isPropagationStopped: l,
				isImmediatePropagationStopped: l,
				preventDefault: function() {
					var e = this.originalEvent;
					this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
				},
				stopPropagation: function() {
					var e = this.originalEvent;
					this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
				},
				stopImmediatePropagation: function() {
					this.isImmediatePropagationStopped = u, this.stopPropagation()
				}
			}, ue.each({
				mouseenter: "mouseover",
				mouseleave: "mouseout"
			}, function(e, t) {
				ue.event.special[e] = {
					delegateType: t,
					bindType: t,
					handle: function(e) {
						var n, r = this,
							i = e.relatedTarget,
							o = e.handleObj;
						return i && (i === r || ue.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
					}
				}
			}), ue.support.submitBubbles || (ue.event.special.submit = {
				setup: function() {
					return ue.nodeName(this, "form") ? !1 : void ue.event.add(this, "click._submit keypress._submit", function(e) {
						var n = e.target,
							r = ue.nodeName(n, "input") || ue.nodeName(n, "button") ? n.form : t;
						r && !ue._data(r, "submitBubbles") && (ue.event.add(r, "submit._submit", function(e) {
							e._submit_bubble = !0
						}), ue._data(r, "submitBubbles", !0))
					})
				},
				postDispatch: function(e) {
					e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ue.event.simulate("submit", this.parentNode, e, !0))
				},
				teardown: function() {
					return ue.nodeName(this, "form") ? !1 : void ue.event.remove(this, "._submit")
				}
			}), ue.support.changeBubbles || (ue.event.special.change = {
				setup: function() {
					return Fe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ue.event.add(this, "propertychange._change", function(e) {
						"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
					}), ue.event.add(this, "click._change", function(e) {
						this._just_changed && !e.isTrigger && (this._just_changed = !1), ue.event.simulate("change", this, e, !0)
					})), !1) : void ue.event.add(this, "beforeactivate._change", function(e) {
						var t = e.target;
						Fe.test(t.nodeName) && !ue._data(t, "changeBubbles") && (ue.event.add(t, "change._change", function(e) {
							!this.parentNode || e.isSimulated || e.isTrigger || ue.event.simulate("change", this.parentNode, e, !0)
						}), ue._data(t, "changeBubbles", !0))
					})
				},
				handle: function(e) {
					var t = e.target;
					return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
				},
				teardown: function() {
					return ue.event.remove(this, "._change"), !Fe.test(this.nodeName)
				}
			}), ue.support.focusinBubbles || ue.each({
				focus: "focusin",
				blur: "focusout"
			}, function(e, t) {
				var n = 0,
					r = function(e) {
						ue.event.simulate(t, e.target, ue.event.fix(e), !0)
					};
				ue.event.special[t] = {
					setup: function() {
						0 === n++ && Y.addEventListener(e, r, !0)
					},
					teardown: function() {
						0 === --n && Y.removeEventListener(e, r, !0)
					}
				}
			}), ue.fn.extend({
				on: function(e, n, r, i, o) {
					var a, s;
					if("object" == typeof e) {
						"string" != typeof n && (r = r || n, n = t);
						for(a in e) this.on(a, n, r, e[a], o);
						return this
					}
					if(null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = l;
					else if(!i) return this;
					return 1 === o && (s = i, i = function(e) {
						return ue().off(e), s.apply(this, arguments)
					}, i.guid = s.guid || (s.guid = ue.guid++)), this.each(function() {
						ue.event.add(this, e, i, r, n)
					})
				},
				one: function(e, t, n, r) {
					return this.on(e, t, n, r, 1)
				},
				off: function(e, n, r) {
					var i, o;
					if(e && e.preventDefault && e.handleObj) return i = e.handleObj, ue(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
					if("object" == typeof e) {
						for(o in e) this.off(o, n, e[o]);
						return this
					}
					return n !== !1 && "function" != typeof n || (r = n, n = t), r === !1 && (r = l), this.each(function() {
						ue.event.remove(this, e, r, n)
					})
				},
				bind: function(e, t, n) {
					return this.on(e, null, t, n)
				},
				unbind: function(e, t) {
					return this.off(e, null, t)
				},
				delegate: function(e, t, n, r) {
					return this.on(t, e, n, r)
				},
				undelegate: function(e, t, n) {
					return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
				},
				trigger: function(e, t) {
					return this.each(function() {
						ue.event.trigger(e, t, this)
					})
				},
				triggerHandler: function(e, t) {
					var n = this[0];
					return n ? ue.event.trigger(e, t, n, !0) : void 0
				}
			}),
			function(e, t) {
				function n(e) {
					return he.test(e + "")
				}

				function r() {
					var e, t = [];
					return e = function(n, r) {
						return t.push(n += " ") > C.cacheLength && delete e[t.shift()], e[n] = r
					}
				}

				function i(e) {
					return e[P] = !0, e
				}

				function o(e) {
					var t = L.createElement("div");
					try {
						return e(t)
					} catch(n) {
						return !1
					} finally {
						t = null
					}
				}

				function a(e, t, n, r) {
					var i, o, a, s, u, l, c, d, h, g;
					if((t ? t.ownerDocument || t : R) !== L && D(t), t = t || L, n = n || [], !e || "string" != typeof e) return n;
					if(1 !== (s = t.nodeType) && 9 !== s) return [];
					if(!q && !r) {
						if(i = ge.exec(e))
							if(a = i[1]) {
								if(9 === s) {
									if(o = t.getElementById(a), !o || !o.parentNode) return n;
									if(o.id === a) return n.push(o), n
								} else if(t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && O(t, o) && o.id === a) return n.push(o), n
							} else {
								if(i[2]) return Q.apply(n, K.call(t.getElementsByTagName(e), 0)), n;
								if((a = i[3]) && W.getByClassName && t.getElementsByClassName) return Q.apply(n, K.call(t.getElementsByClassName(a), 0)), n
							}
						if(W.qsa && !M.test(e)) {
							if(c = !0, d = P, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
								for(l = f(e), (c = t.getAttribute("id")) ? d = c.replace(ve, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
								h = de.test(e) && t.parentNode || t, g = l.join(",")
							}
							if(g) try {
								return Q.apply(n, K.call(h.querySelectorAll(g), 0)), n
							} catch(m) {} finally {
								c || t.removeAttribute("id")
							}
						}
					}
					return x(e.replace(ae, "$1"), t, n, r)
				}

				function s(e, t) {
					var n = t && e,
						r = n && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
					if(r) return r;
					if(n)
						for(; n = n.nextSibling;)
							if(n === t) return -1;
					return e ? 1 : -1
				}

				function u(e) {
					return function(t) {
						var n = t.nodeName.toLowerCase();
						return "input" === n && t.type === e
					}
				}

				function l(e) {
					return function(t) {
						var n = t.nodeName.toLowerCase();
						return("input" === n || "button" === n) && t.type === e
					}
				}

				function c(e) {
					return i(function(t) {
						return t = +t, i(function(n, r) {
							for(var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
						})
					})
				}

				function f(e, t) {
					var n, r, i, o, s, u, l, c = X[e + " "];
					if(c) return t ? 0 : c.slice(0);
					for(s = e, u = [], l = C.preFilter; s;) {
						n && !(r = se.exec(s)) || (r && (s = s.slice(r[0].length) || s), u.push(i = [])), n = !1, (r = le.exec(s)) && (n = r.shift(), i.push({
							value: n,
							type: r[0].replace(ae, " ")
						}), s = s.slice(n.length));
						for(o in C.filter) !(r = pe[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
							value: n,
							type: o,
							matches: r
						}), s = s.slice(n.length));
						if(!n) break
					}
					return t ? s.length : s ? a.error(e) : X(e, u).slice(0)
				}

				function p(e) {
					for(var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
					return r
				}

				function d(e, t, n) {
					var r = t.dir,
						i = n && "parentNode" === r,
						o = I++;
					return t.first ? function(t, n, o) {
						for(; t = t[r];)
							if(1 === t.nodeType || i) return e(t, n, o)
					} : function(t, n, a) {
						var s, u, l, c = $ + " " + o;
						if(a) {
							for(; t = t[r];)
								if((1 === t.nodeType || i) && e(t, n, a)) return !0
						} else
							for(; t = t[r];)
								if(1 === t.nodeType || i)
									if(l = t[P] || (t[P] = {}), (u = l[r]) && u[0] === c) {
										if((s = u[1]) === !0 || s === N) return s === !0
									} else if(u = l[r] = [c], u[1] = e(t, n, a) || N, u[1] === !0) return !0
					}
				}

				function h(e) {
					return e.length > 1 ? function(t, n, r) {
						for(var i = e.length; i--;)
							if(!e[i](t, n, r)) return !1;
						return !0
					} : e[0]
				}

				function g(e, t, n, r, i) {
					for(var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
					return a
				}

				function m(e, t, n, r, o, a) {
					return r && !r[P] && (r = m(r)), o && !o[P] && (o = m(o, a)), i(function(i, a, s, u) {
						var l, c, f, p = [],
							d = [],
							h = a.length,
							m = i || b(t || "*", s.nodeType ? [s] : s, []),
							y = !e || !i && t ? m : g(m, p, e, s, u),
							v = n ? o || (i ? e : h || r) ? [] : a : y;
						if(n && n(y, v, s, u), r)
							for(l = g(v, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
						if(i) {
							if(o || e) {
								if(o) {
									for(l = [], c = v.length; c--;)(f = v[c]) && l.push(y[c] = f);
									o(null, v = [], l, u)
								}
								for(c = v.length; c--;)(f = v[c]) && (l = o ? Z.call(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f))
							}
						} else v = g(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, u) : Q.apply(a, v)
					})
				}

				function y(e) {
					for(var t, n, r, i = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = d(function(e) {
							return e === t
						}, a, !0), l = d(function(e) {
							return Z.call(t, e) > -1
						}, a, !0), c = [function(e, n, r) {
							return !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
						}]; i > s; s++)
						if(n = C.relative[e[s].type]) c = [d(h(c), n)];
						else {
							if(n = C.filter[e[s].type].apply(null, e[s].matches), n[P]) {
								for(r = ++s; i > r && !C.relative[e[r].type]; r++);
								return m(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1)).replace(ae, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && p(e))
							}
							c.push(n)
						}
					return h(c)
				}

				function v(e, t) {
					var n = 0,
						r = t.length > 0,
						o = e.length > 0,
						s = function(i, s, u, l, c) {
							var f, p, d, h = [],
								m = 0,
								y = "0",
								v = i && [],
								b = null != c,
								x = j,
								w = i || o && C.find.TAG("*", c && s.parentNode || s),
								T = $ += null == x ? 1 : Math.random() || .1;
							for(b && (j = s !== L && s, N = n); null != (f = w[y]); y++) {
								if(o && f) {
									for(p = 0; d = e[p++];)
										if(d(f, s, u)) {
											l.push(f);
											break
										}
									b && ($ = T, N = ++n)
								}
								r && ((f = !d && f) && m--, i && v.push(f))
							}
							if(m += y, r && y !== m) {
								for(p = 0; d = t[p++];) d(v, h, s, u);
								if(i) {
									if(m > 0)
										for(; y--;) v[y] || h[y] || (h[y] = G.call(l));
									h = g(h)
								}
								Q.apply(l, h), b && !i && h.length > 0 && m + t.length > 1 && a.uniqueSort(l)
							}
							return b && ($ = T, j = x), v
						};
					return r ? i(s) : s
				}

				function b(e, t, n) {
					for(var r = 0, i = t.length; i > r; r++) a(e, t[r], n);
					return n
				}

				function x(e, t, n, r) {
					var i, o, a, s, u, l = f(e);
					if(!r && 1 === l.length) {
						if(o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !q && C.relative[o[1].type]) {
							if(t = C.find.ID(a.matches[0].replace(xe, we), t)[0], !t) return n;
							e = e.slice(o.shift().value.length)
						}
						for(i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !C.relative[s = a.type]);)
							if((u = C.find[s]) && (r = u(a.matches[0].replace(xe, we), de.test(o[0].type) && t.parentNode || t))) {
								if(o.splice(i, 1), e = r.length && p(o), !e) return Q.apply(n, K.call(r, 0)), n;
								break
							}
					}
					return S(e, l)(r, t, q, n, de.test(e)), n
				}

				function w() {}
				var T, N, C, k, E, S, A, j, D, L, H, q, M, _, F, O, B, P = "sizzle" + -new Date,
					R = e.document,
					W = {},
					$ = 0,
					I = 0,
					z = r(),
					X = r(),
					U = r(),
					V = typeof t,
					Y = 1 << 31,
					J = [],
					G = J.pop,
					Q = J.push,
					K = J.slice,
					Z = J.indexOf || function(e) {
						for(var t = 0, n = this.length; n > t; t++)
							if(this[t] === e) return t;
						return -1
					},
					ee = "[\\x20\\t\\r\\n\\f]",
					te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
					ne = te.replace("w", "w#"),
					re = "([*^$|!~]?=)",
					ie = "\\[" + ee + "*(" + te + ")" + ee + "*(?:" + re + ee + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ne + ")|)|)" + ee + "*\\]",
					oe = ":(" + te + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ie.replace(3, 8) + ")*)|.*)\\)|)",
					ae = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
					se = new RegExp("^" + ee + "*," + ee + "*"),
					le = new RegExp("^" + ee + "*([\\x20\\t\\r\\n\\f>+~])" + ee + "*"),
					ce = new RegExp(oe),
					fe = new RegExp("^" + ne + "$"),
					pe = {
						ID: new RegExp("^#(" + te + ")"),
						CLASS: new RegExp("^\\.(" + te + ")"),
						NAME: new RegExp("^\\[name=['\"]?(" + te + ")['\"]?\\]"),
						TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
						ATTR: new RegExp("^" + ie),
						PSEUDO: new RegExp("^" + oe),
						CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
						needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
					},
					de = /[\x20\t\r\n\f]*[+~]/,
					he = /^[^{]+\{\s*\[native code/,
					ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
					me = /^(?:input|select|textarea|button)$/i,
					ye = /^h\d$/i,
					ve = /'|\\/g,
					be = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
					xe = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
					we = function(e, t) {
						var n = "0x" + t - 65536;
						return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
					};
				try {
					K.call(R.documentElement.childNodes, 0)[0].nodeType
				} catch(Te) {
					K = function(e) {
						for(var t, n = []; t = this[e++];) n.push(t);
						return n
					}
				}
				E = a.isXML = function(e) {
					var t = e && (e.ownerDocument || e).documentElement;
					return t ? "HTML" !== t.nodeName : !1
				}, D = a.setDocument = function(e) {
					var r = e ? e.ownerDocument || e : R;
					return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, H = r.documentElement, q = E(r), W.tagNameNoComments = o(function(e) {
						return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
					}), W.attributes = o(function(e) {
						e.innerHTML = "<select></select>";
						var t = typeof e.lastChild.getAttribute("multiple");
						return "boolean" !== t && "string" !== t
					}), W.getByClassName = o(function(e) {
						return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
					}), W.getByName = o(function(e) {
						e.id = P + 0, e.innerHTML = "<a name='" + P + "'></a><div name='" + P + "'></div>", H.insertBefore(e, H.firstChild);
						var t = r.getElementsByName && r.getElementsByName(P).length === 2 + r.getElementsByName(P + 0).length;
						return W.getIdNotName = !r.getElementById(P), H.removeChild(e), t
					}), C.attrHandle = o(function(e) {
						return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== V && "#" === e.firstChild.getAttribute("href")
					}) ? {} : {
						href: function(e) {
							return e.getAttribute("href", 2)
						},
						type: function(e) {
							return e.getAttribute("type")
						}
					}, W.getIdNotName ? (C.find.ID = function(e, t) {
						if(typeof t.getElementById !== V && !q) {
							var n = t.getElementById(e);
							return n && n.parentNode ? [n] : []
						}
					}, C.filter.ID = function(e) {
						var t = e.replace(xe, we);
						return function(e) {
							return e.getAttribute("id") === t
						}
					}) : (C.find.ID = function(e, n) {
						if(typeof n.getElementById !== V && !q) {
							var r = n.getElementById(e);
							return r ? r.id === e || typeof r.getAttributeNode !== V && r.getAttributeNode("id").value === e ? [r] : t : []
						}
					}, C.filter.ID = function(e) {
						var t = e.replace(xe, we);
						return function(e) {
							var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
							return n && n.value === t
						}
					}), C.find.TAG = W.tagNameNoComments ? function(e, t) {
						return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
					} : function(e, t) {
						var n, r = [],
							i = 0,
							o = t.getElementsByTagName(e);
						if("*" === e) {
							for(; n = o[i++];) 1 === n.nodeType && r.push(n);
							return r
						}
						return o
					}, C.find.NAME = W.getByName && function(e, t) {
						return typeof t.getElementsByName !== V ? t.getElementsByName(name) : void 0
					}, C.find.CLASS = W.getByClassName && function(e, t) {
						return typeof t.getElementsByClassName === V || q ? void 0 : t.getElementsByClassName(e)
					}, _ = [], M = [":focus"], (W.qsa = n(r.querySelectorAll)) && (o(function(e) {
						e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || M.push("\\[" + ee + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || M.push(":checked")
					}), o(function(e) {
						e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && M.push("[*^$]=" + ee + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
					})), (W.matchesSelector = n(F = H.matchesSelector || H.mozMatchesSelector || H.webkitMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
						W.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), _.push("!=", oe)
					}), M = new RegExp(M.join("|")), _ = new RegExp(_.join("|")), O = n(H.contains) || H.compareDocumentPosition ? function(e, t) {
						var n = 9 === e.nodeType ? e.documentElement : e,
							r = t && t.parentNode;
						return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
					} : function(e, t) {
						if(t)
							for(; t = t.parentNode;)
								if(t === e) return !0;
						return !1
					}, B = H.compareDocumentPosition ? function(e, t) {
						var n;
						return e === t ? (A = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || O(R, e) ? -1 : t === r || O(R, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
					} : function(e, t) {
						var n, i = 0,
							o = e.parentNode,
							a = t.parentNode,
							u = [e],
							l = [t];
						if(e === t) return A = !0, 0;
						if(!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
						if(o === a) return s(e, t);
						for(n = e; n = n.parentNode;) u.unshift(n);
						for(n = t; n = n.parentNode;) l.unshift(n);
						for(; u[i] === l[i];) i++;
						return i ? s(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
					}, A = !1, [0, 0].sort(B), W.detectDuplicates = A, L) : L
				}, a.matches = function(e, t) {
					return a(e, null, null, t)
				}, a.matchesSelector = function(e, t) {
					if((e.ownerDocument || e) !== L && D(e), t = t.replace(be, "='$1']"), W.matchesSelector && !q && (!_ || !_.test(t)) && !M.test(t)) try {
						var n = F.call(e, t);
						if(n || W.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
					} catch(r) {}
					return a(t, L, null, [e]).length > 0
				}, a.contains = function(e, t) {
					return(e.ownerDocument || e) !== L && D(e), O(e, t)
				}, a.attr = function(e, t) {
					var n;
					return(e.ownerDocument || e) !== L && D(e), q || (t = t.toLowerCase()), (n = C.attrHandle[t]) ? n(e) : q || W.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
				}, a.error = function(e) {
					throw new Error("Syntax error, unrecognized expression: " + e)
				}, a.uniqueSort = function(e) {
					var t, n = [],
						r = 1,
						i = 0;
					if(A = !W.detectDuplicates, e.sort(B), A) {
						for(; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
						for(; i--;) e.splice(n[i], 1)
					}
					return e
				}, k = a.getText = function(e) {
					var t, n = "",
						r = 0,
						i = e.nodeType;
					if(i) {
						if(1 === i || 9 === i || 11 === i) {
							if("string" == typeof e.textContent) return e.textContent;
							for(e = e.firstChild; e; e = e.nextSibling) n += k(e)
						} else if(3 === i || 4 === i) return e.nodeValue
					} else
						for(; t = e[r]; r++) n += k(t);
					return n
				}, C = a.selectors = {
					cacheLength: 50,
					createPseudo: i,
					match: pe,
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: !0
						},
						" ": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: !0
						},
						"~": {
							dir: "previousSibling"
						}
					},
					preFilter: {
						ATTR: function(e) {
							return e[1] = e[1].replace(xe, we), e[3] = (e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						CHILD: function(e) {
							return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]), e
						},
						PSEUDO: function(e) {
							var t, n = !e[5] && e[2];
							return pe.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ce.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
						}
					},
					filter: {
						TAG: function(e) {
							return "*" === e ? function() {
								return !0
							} : (e = e.replace(xe, we).toLowerCase(), function(t) {
								return t.nodeName && t.nodeName.toLowerCase() === e
							})
						},
						CLASS: function(e) {
							var t = z[e + " "];
							return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && z(e, function(e) {
								return t.test(e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
							})
						},
						ATTR: function(e, t, n) {
							return function(r) {
								var i = a.attr(r, e);
								return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
							}
						},
						CHILD: function(e, t, n, r, i) {
							var o = "nth" !== e.slice(0, 3),
								a = "last" !== e.slice(-4),
								s = "of-type" === t;
							return 1 === r && 0 === i ? function(e) {
								return !!e.parentNode
							} : function(t, n, u) {
								var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
									m = t.parentNode,
									y = s && t.nodeName.toLowerCase(),
									v = !u && !s;
								if(m) {
									if(o) {
										for(; g;) {
											for(f = t; f = f[g];)
												if(s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
											h = g = "only" === e && !h && "nextSibling"
										}
										return !0
									}
									if(h = [a ? m.firstChild : m.lastChild], a && v) {
										for(c = m[P] || (m[P] = {}), l = c[e] || [], d = l[0] === $ && l[1], p = l[0] === $ && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
											if(1 === f.nodeType && ++p && f === t) {
												c[e] = [$, d, p];
												break
											}
									} else if(v && (l = (t[P] || (t[P] = {}))[e]) && l[0] === $) p = l[1];
									else
										for(;
											(f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[P] || (f[P] = {}))[e] = [$, p]), f !== t)););
									return p -= i, p === r || p % r === 0 && p / r >= 0
								}
							}
						},
						PSEUDO: function(e, t) {
							var n, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
							return r[P] ? r(t) : r.length > 1 ? (n = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
								for(var i, o = r(e, t), a = o.length; a--;) i = Z.call(e, o[a]), e[i] = !(n[i] = o[a])
							}) : function(e) {
								return r(e, 0, n)
							}) : r
						}
					},
					pseudos: {
						not: i(function(e) {
							var t = [],
								n = [],
								r = S(e.replace(ae, "$1"));
							return r[P] ? i(function(e, t, n, i) {
								for(var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
							}) : function(e, i, o) {
								return t[0] = e, r(t, null, o, n), !n.pop()
							}
						}),
						has: i(function(e) {
							return function(t) {
								return a(e, t).length > 0
							}
						}),
						contains: i(function(e) {
							return function(t) {
								return(t.textContent || t.innerText || k(t)).indexOf(e) > -1
							}
						}),
						lang: i(function(e) {
							return fe.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(),
								function(t) {
									var n;
									do
										if(n = q ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
									while((t = t.parentNode) && 1 === t.nodeType);
									return !1
								}
						}),
						target: function(t) {
							var n = e.location && e.location.hash;
							return n && n.slice(1) === t.id
						},
						root: function(e) {
							return e === H
						},
						focus: function(e) {
							return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
						},
						enabled: function(e) {
							return e.disabled === !1
						},
						disabled: function(e) {
							return e.disabled === !0
						},
						checked: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && !!e.checked || "option" === t && !!e.selected
						},
						selected: function(e) {
							return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
						},
						empty: function(e) {
							for(e = e.firstChild; e; e = e.nextSibling)
								if(e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
							return !0
						},
						parent: function(e) {
							return !C.pseudos.empty(e)
						},
						header: function(e) {
							return ye.test(e.nodeName)
						},
						input: function(e) {
							return me.test(e.nodeName)
						},
						button: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						text: function(e) {
							var t;
							return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
						},
						first: c(function() {
							return [0]
						}),
						last: c(function(e, t) {
							return [t - 1]
						}),
						eq: c(function(e, t, n) {
							return [0 > n ? n + t : n]
						}),
						even: c(function(e, t) {
							for(var n = 0; t > n; n += 2) e.push(n);
							return e
						}),
						odd: c(function(e, t) {
							for(var n = 1; t > n; n += 2) e.push(n);
							return e
						}),
						lt: c(function(e, t, n) {
							for(var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
							return e
						}),
						gt: c(function(e, t, n) {
							for(var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
							return e
						})
					}
				};
				for(T in {
						radio: !0,
						checkbox: !0,
						file: !0,
						password: !0,
						image: !0
					}) C.pseudos[T] = u(T);
				for(T in {
						submit: !0,
						reset: !0
					}) C.pseudos[T] = l(T);
				S = a.compile = function(e, t) {
					var n, r = [],
						i = [],
						o = U[e + " "];
					if(!o) {
						for(t || (t = f(e)), n = t.length; n--;) o = y(t[n]), o[P] ? r.push(o) : i.push(o);
						o = U(e, v(i, r))
					}
					return o
				}, C.pseudos.nth = C.pseudos.eq, C.filters = w.prototype = C.pseudos, C.setFilters = new w, D(), a.attr = ue.attr, ue.find = a, ue.expr = a.selectors, ue.expr[":"] = ue.expr.pseudos, ue.unique = a.uniqueSort, ue.text = a.getText, ue.isXMLDoc = a.isXML, ue.contains = a.contains
			}(e);
		var We = /Until$/,
			$e = /^(?:parents|prev(?:Until|All))/,
			Ie = /^.[^:#\[\.,]*$/,
			ze = ue.expr.match.needsContext,
			Xe = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		ue.fn.extend({
			find: function(e) {
				var t, n, r, i = this.length;
				if("string" != typeof e) return r = this, this.pushStack(ue(e).filter(function() {
					for(t = 0; i > t; t++)
						if(ue.contains(r[t], this)) return !0
				}));
				for(n = [], t = 0; i > t; t++) ue.find(e, this[t], n);
				return n = this.pushStack(i > 1 ? ue.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
			},
			has: function(e) {
				var t, n = ue(e, this),
					r = n.length;
				return this.filter(function() {
					for(t = 0; r > t; t++)
						if(ue.contains(this, n[t])) return !0
				})
			},
			not: function(e) {
				return this.pushStack(f(this, e, !1))
			},
			filter: function(e) {
				return this.pushStack(f(this, e, !0))
			},
			is: function(e) {
				return !!e && ("string" == typeof e ? ze.test(e) ? ue(e, this.context).index(this[0]) >= 0 : ue.filter(e, this).length > 0 : this.filter(e).length > 0)
			},
			closest: function(e, t) {
				for(var n, r = 0, i = this.length, o = [], a = ze.test(e) || "string" != typeof e ? ue(e, t || this.context) : 0; i > r; r++)
					for(n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
						if(a ? a.index(n) > -1 : ue.find.matchesSelector(n, e)) {
							o.push(n);
							break
						}
						n = n.parentNode
					}
				return this.pushStack(o.length > 1 ? ue.unique(o) : o)
			},
			index: function(e) {
				return e ? "string" == typeof e ? ue.inArray(this[0], ue(e)) : ue.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(e, t) {
				var n = "string" == typeof e ? ue(e, t) : ue.makeArray(e && e.nodeType ? [e] : e),
					r = ue.merge(this.get(), n);
				return this.pushStack(ue.unique(r))
			},
			addBack: function(e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), ue.fn.andSelf = ue.fn.addBack, ue.each({
			parent: function(e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function(e) {
				return ue.dir(e, "parentNode")
			},
			parentsUntil: function(e, t, n) {
				return ue.dir(e, "parentNode", n)
			},
			next: function(e) {
				return c(e, "nextSibling")
			},
			prev: function(e) {
				return c(e, "previousSibling")
			},
			nextAll: function(e) {
				return ue.dir(e, "nextSibling")
			},
			prevAll: function(e) {
				return ue.dir(e, "previousSibling")
			},
			nextUntil: function(e, t, n) {
				return ue.dir(e, "nextSibling", n)
			},
			prevUntil: function(e, t, n) {
				return ue.dir(e, "previousSibling", n)
			},
			siblings: function(e) {
				return ue.sibling((e.parentNode || {}).firstChild, e)
			},
			children: function(e) {
				return ue.sibling(e.firstChild)
			},
			contents: function(e) {
				return ue.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ue.merge([], e.childNodes)
			}
		}, function(e, t) {
			ue.fn[e] = function(n, r) {
				var i = ue.map(this, t, n);
				return We.test(e) || (r = n), r && "string" == typeof r && (i = ue.filter(r, i)), i = this.length > 1 && !Xe[e] ? ue.unique(i) : i, this.length > 1 && $e.test(e) && (i = i.reverse()), this.pushStack(i)
			}
		}), ue.extend({
			filter: function(e, t, n) {
				return n && (e = ":not(" + e + ")"), 1 === t.length ? ue.find.matchesSelector(t[0], e) ? [t[0]] : [] : ue.find.matches(e, t)
			},
			dir: function(e, n, r) {
				for(var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ue(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
				return i
			},
			sibling: function(e, t) {
				for(var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			}
		});
		var Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
			Ve = / jQuery\d+="(?:null|\d+)"/g,
			Ye = new RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
			Je = /^\s+/,
			Ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			Qe = /<([\w:]+)/,
			Ke = /<tbody/i,
			Ze = /<|&#?\w+;/,
			et = /<(?:script|style|link)/i,
			tt = /^(?:checkbox|radio)$/i,
			nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
			rt = /^$|\/(?:java|ecma)script/i,
			it = /^true\/(.*)/,
			ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			at = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				legend: [1, "<fieldset>", "</fieldset>"],
				area: [1, "<map>", "</map>"],
				param: [1, "<object>", "</object>"],
				thead: [1, "<table>", "</table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: ue.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
			},
			st = p(Y),
			ut = st.appendChild(Y.createElement("div"));
		at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td, ue.fn.extend({
			text: function(e) {
				return ue.access(this, function(e) {
					return e === t ? ue.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(e))
				}, null, e, arguments.length)
			},
			wrapAll: function(e) {
				if(ue.isFunction(e)) return this.each(function(t) {
					ue(this).wrapAll(e.call(this, t))
				});
				if(this[0]) {
					var t = ue(e, this[0].ownerDocument).eq(0).clone(!0);
					this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
						for(var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
						return e
					}).append(this)
				}
				return this
			},
			wrapInner: function(e) {
				return ue.isFunction(e) ? this.each(function(t) {
					ue(this).wrapInner(e.call(this, t))
				}) : this.each(function() {
					var t = ue(this),
						n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e)
				})
			},
			wrap: function(e) {
				var t = ue.isFunction(e);
				return this.each(function(n) {
					ue(this).wrapAll(t ? e.call(this, n) : e)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					ue.nodeName(this, "body") || ue(this).replaceWith(this.childNodes)
				}).end()
			},
			append: function() {
				return this.domManip(arguments, !0, function(e) {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.appendChild(e)
				})
			},
			prepend: function() {
				return this.domManip(arguments, !0, function(e) {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.insertBefore(e, this.firstChild)
				})
			},
			before: function() {
				return this.domManip(arguments, !1, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function() {
				return this.domManip(arguments, !1, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			remove: function(e, t) {
				for(var n, r = 0; null != (n = this[r]); r++)(!e || ue.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || ue.cleanData(b(n)), n.parentNode && (t && ue.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n)));
				return this
			},
			empty: function() {
				for(var e, t = 0; null != (e = this[t]); t++) {
					for(1 === e.nodeType && ue.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
					e.options && ue.nodeName(e, "select") && (e.options.length = 0)
				}
				return this
			},
			clone: function(e, t) {
				return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
					return ue.clone(this, e, t)
				})
			},
			html: function(e) {
				return ue.access(this, function(e) {
					var n = this[0] || {},
						r = 0,
						i = this.length;
					if(e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ve, "") : t;
					if("string" == typeof e && !et.test(e) && (ue.support.htmlSerialize || !Ye.test(e)) && (ue.support.leadingWhitespace || !Je.test(e)) && !at[(Qe.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = e.replace(Ge, "<$1></$2>");
						try {
							for(; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (ue.cleanData(b(n, !1)), n.innerHTML = e);
							n = 0
						} catch(o) {}
					}
					n && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function(e) {
				var t = ue.isFunction(e);
				return t || "string" == typeof e || (e = ue(e).not(this).detach()), this.domManip([e], !0, function(e) {
					var t = this.nextSibling,
						n = this.parentNode;
					n && (ue(this).remove(), n.insertBefore(e, t))
				})
			},
			detach: function(e) {
				return this.remove(e, !0)
			},
			domManip: function(e, n, r) {
				e = te.apply([], e);
				var i, o, a, s, u, l, c = 0,
					f = this.length,
					p = this,
					m = f - 1,
					y = e[0],
					v = ue.isFunction(y);
				if(v || !(1 >= f || "string" != typeof y || ue.support.checkClone) && nt.test(y)) return this.each(function(i) {
					var o = p.eq(i);
					v && (e[0] = y.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
				});
				if(f && (l = ue.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
					for(n = n && ue.nodeName(i, "tr"), s = ue.map(b(l, "script"), h), a = s.length; f > c; c++) o = l, c !== m && (o = ue.clone(o, !0, !0), a && ue.merge(s, b(o, "script"))), r.call(n && ue.nodeName(this[c], "table") ? d(this[c], "tbody") : this[c], o, c);
					if(a)
						for(u = s[s.length - 1].ownerDocument, ue.map(s, g), c = 0; a > c; c++) o = s[c], rt.test(o.type || "") && !ue._data(o, "globalEval") && ue.contains(u, o) && (o.src ? ue.ajax({
							url: o.src,
							type: "GET",
							dataType: "script",
							async: !1,
							global: !1,
							"throws": !0
						}) : ue.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
					l = i = null
				}
				return this
			}
		}), ue.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(e, t) {
			ue.fn[e] = function(e) {
				for(var n, r = 0, i = [], o = ue(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ue(o[r])[t](n), ne.apply(i, n.get());
				return this.pushStack(i)
			}
		}), ue.extend({
			clone: function(e, t, n) {
				var r, i, o, a, s, u = ue.contains(e.ownerDocument, e);
				if(ue.support.html5Clone || ue.isXMLDoc(e) || !Ye.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ut.innerHTML = e.outerHTML, ut.removeChild(o = ut.firstChild)), !(ue.support.noCloneEvent && ue.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ue.isXMLDoc(e)))
					for(r = b(o), s = b(e), a = 0; null != (i = s[a]); ++a) r[a] && v(i, r[a]);
				if(t)
					if(n)
						for(s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++) y(i, r[a]);
					else y(e, o);
				return r = b(o, "script"), r.length > 0 && m(r, !u && b(e, "script")), r = s = i = null, o
			},
			buildFragment: function(e, t, n, r) {
				for(var i, o, a, s, u, l, c, f = e.length, d = p(t), h = [], g = 0; f > g; g++)
					if(o = e[g], o || 0 === o)
						if("object" === ue.type(o)) ue.merge(h, o.nodeType ? [o] : o);
						else if(Ze.test(o)) {
					for(s = s || d.appendChild(t.createElement("div")), u = (Qe.exec(o) || ["", ""])[1].toLowerCase(), c = at[u] || at._default, s.innerHTML = c[1] + o.replace(Ge, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
					if(!ue.support.leadingWhitespace && Je.test(o) && h.push(t.createTextNode(Je.exec(o)[0])), !ue.support.tbody)
						for(o = "table" !== u || Ke.test(o) ? "<table>" !== c[1] || Ke.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ue.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
					for(ue.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
					s = d.lastChild
				} else h.push(t.createTextNode(o));
				for(s && d.removeChild(s), ue.support.appendChecked || ue.grep(b(h, "input"), x), g = 0; o = h[g++];)
					if((!r || -1 === ue.inArray(o, r)) && (a = ue.contains(o.ownerDocument, o), s = b(d.appendChild(o), "script"), a && m(s), n))
						for(i = 0; o = s[i++];) rt.test(o.type || "") && n.push(o);
				return s = null, d
			},
			cleanData: function(e, t) {
				for(var n, r, i, o, a = 0, s = ue.expando, u = ue.cache, l = ue.support.deleteExpando, c = ue.event.special; null != (n = e[a]); a++)
					if((t || ue.acceptData(n)) && (i = n[s], o = i && u[i])) {
						if(o.events)
							for(r in o.events) c[r] ? ue.event.remove(n, r) : ue.removeEvent(n, r, o.handle);
						u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== V ? n.removeAttribute(s) : n[s] = null, Z.push(i))
					}
			}
		});
		var lt, ct, ft, pt = /alpha\([^)]*\)/i,
			dt = /opacity\s*=\s*([^)]*)/,
			ht = /^(top|right|bottom|left)$/,
			gt = /^(none|table(?!-c[ea]).+)/,
			mt = /^margin/,
			yt = new RegExp("^(" + le + ")(.*)$", "i"),
			vt = new RegExp("^(" + le + ")(?!px)[a-z%]+$", "i"),
			bt = new RegExp("^([+-])=(" + le + ")", "i"),
			xt = {
				BODY: "block"
			},
			wt = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			Tt = {
				letterSpacing: 0,
				fontWeight: 400
			},
			Nt = ["Top", "Right", "Bottom", "Left"],
			Ct = ["Webkit", "O", "Moz", "ms"];
		ue.fn.extend({
			css: function(e, n) {
				return ue.access(this, function(e, n, r) {
					var i, o, a = {},
						s = 0;
					if(ue.isArray(n)) {
						for(o = ct(e), i = n.length; i > s; s++) a[n[s]] = ue.css(e, n[s], !1, o);
						return a
					}
					return r !== t ? ue.style(e, n, r) : ue.css(e, n)
				}, e, n, arguments.length > 1)
			},
			show: function() {
				return N(this, !0)
			},
			hide: function() {
				return N(this)
			},
			toggle: function(e) {
				var t = "boolean" == typeof e;
				return this.each(function() {
					(t ? e : T(this)) ? ue(this).show(): ue(this).hide()
				})
			}
		}), ue.extend({
			cssHooks: {
				opacity: {
					get: function(e, t) {
						if(t) {
							var n = ft(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				columnCount: !0,
				fillOpacity: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				"float": ue.support.cssFloat ? "cssFloat" : "styleFloat"
			},
			style: function(e, n, r, i) {
				if(e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var o, a, s, u = ue.camelCase(n),
						l = e.style;
					if(n = ue.cssProps[u] || (ue.cssProps[u] = w(l, u)), s = ue.cssHooks[n] || ue.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
					if(a = typeof r, "string" === a && (o = bt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ue.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ue.cssNumber[u] || (r += "px"), ue.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
						l[n] = r
					} catch(c) {}
				}
			},
			css: function(e, n, r, i) {
				var o, a, s, u = ue.camelCase(n);
				return n = ue.cssProps[u] || (ue.cssProps[u] = w(e.style, u)), s = ue.cssHooks[n] || ue.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = ft(e, n, i)), "normal" === a && n in Tt && (a = Tt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || ue.isNumeric(o) ? o || 0 : a) : a
			},
			swap: function(e, t, n, r) {
				var i, o, a = {};
				for(o in t) a[o] = e.style[o], e.style[o] = t[o];
				i = n.apply(e, r || []);
				for(o in t) e.style[o] = a[o];
				return i
			}
		}), e.getComputedStyle ? (ct = function(t) {
			return e.getComputedStyle(t, null)
		}, ft = function(e, n, r) {
			var i, o, a, s = r || ct(e),
				u = s ? s.getPropertyValue(n) || s[n] : t,
				l = e.style;
			return s && ("" !== u || ue.contains(e.ownerDocument, e) || (u = ue.style(e, n)), vt.test(u) && mt.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
		}) : Y.documentElement.currentStyle && (ct = function(e) {
			return e.currentStyle
		}, ft = function(e, n, r) {
			var i, o, a, s = r || ct(e),
				u = s ? s[n] : t,
				l = e.style;
			return null == u && l && l[n] && (u = l[n]), vt.test(u) && !ht.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
		}), ue.each(["height", "width"], function(e, t) {
			ue.cssHooks[t] = {
				get: function(e, n, r) {
					return n ? 0 === e.offsetWidth && gt.test(ue.css(e, "display")) ? ue.swap(e, wt, function() {
						return E(e, t, r)
					}) : E(e, t, r) : void 0
				},
				set: function(e, n, r) {
					var i = r && ct(e);
					return C(e, n, r ? k(e, t, r, ue.support.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, i), i) : 0)
				}
			}
		}), ue.support.opacity || (ue.cssHooks.opacity = {
			get: function(e, t) {
				return dt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
			},
			set: function(e, t) {
				var n = e.style,
					r = e.currentStyle,
					i = ue.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
					o = r && r.filter || n.filter || "";
				n.zoom = 1, (t >= 1 || "" === t) && "" === ue.trim(o.replace(pt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = pt.test(o) ? o.replace(pt, i) : o + " " + i)
			}
		}), ue(function() {
			ue.support.reliableMarginRight || (ue.cssHooks.marginRight = {
				get: function(e, t) {
					return t ? ue.swap(e, {
						display: "inline-block"
					}, ft, [e, "marginRight"]) : void 0
				}
			}), !ue.support.pixelPosition && ue.fn.position && ue.each(["top", "left"], function(e, t) {
				ue.cssHooks[t] = {
					get: function(e, n) {
						return n ? (n = ft(e, t), vt.test(n) ? ue(e).position()[t] + "px" : n) : void 0
					}
				}
			})
		}), ue.expr && ue.expr.filters && (ue.expr.filters.hidden = function(e) {
			return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ue.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ue.css(e, "display"))
		}, ue.expr.filters.visible = function(e) {
			return !ue.expr.filters.hidden(e)
		}), ue.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(e, t) {
			ue.cssHooks[e + t] = {
				expand: function(n) {
					for(var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Nt[r] + t] = o[r] || o[r - 2] || o[0];
					return i
				}
			}, mt.test(e) || (ue.cssHooks[e + t].set = C)
		});
		var kt = /%20/g,
			Et = /\[\]$/,
			St = /\r?\n/g,
			At = /^(?:submit|button|image|reset|file)$/i,
			jt = /^(?:input|select|textarea|keygen)/i;
		ue.fn.extend({
			serialize: function() {
				return ue.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var e = ue.prop(this, "elements");
					return e ? ue.makeArray(e) : this
				}).filter(function() {
					var e = this.type;
					return this.name && !ue(this).is(":disabled") && jt.test(this.nodeName) && !At.test(e) && (this.checked || !tt.test(e))
				}).map(function(e, t) {
					var n = ue(this).val();
					return null == n ? null : ue.isArray(n) ? ue.map(n, function(e) {
						return {
							name: t.name,
							value: e.replace(St, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(St, "\r\n")
					}
				}).get()
			}
		}), ue.param = function(e, n) {
			var r, i = [],
				o = function(e, t) {
					t = ue.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
				};
			if(n === t && (n = ue.ajaxSettings && ue.ajaxSettings.traditional), ue.isArray(e) || e.jquery && !ue.isPlainObject(e)) ue.each(e, function() {
				o(this.name, this.value)
			});
			else
				for(r in e) j(r, e[r], n, o);
			return i.join("&").replace(kt, "+")
		}, ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
			ue.fn[t] = function(e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
			}
		}), ue.fn.hover = function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		};
		var Dt, Lt, Ht = ue.now(),
			qt = /\?/,
			Mt = /#.*$/,
			_t = /([?&])_=[^&]*/,
			Ft = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
			Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			Bt = /^(?:GET|HEAD)$/,
			Pt = /^\/\//,
			Rt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
			Wt = ue.fn.load,
			$t = {},
			It = {},
			zt = "*/".concat("*");
		try {
			Lt = J.href
		} catch(Xt) {
			Lt = Y.createElement("a"), Lt.href = "", Lt = Lt.href
		}
		Dt = Rt.exec(Lt.toLowerCase()) || [], ue.fn.load = function(e, n, r) {
			if("string" != typeof e && Wt) return Wt.apply(this, arguments);
			var i, o, a, s = this,
				u = e.indexOf(" ");
			return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), ue.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ue.ajax({
				url: e,
				type: a,
				dataType: "html",
				data: n
			}).done(function(e) {
				o = arguments, s.html(i ? ue("<div>").append(ue.parseHTML(e)).find(i) : e)
			}).complete(r && function(e, t) {
				s.each(r, o || [e.responseText, t, e])
			}), this
		}, ue.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
			ue.fn[t] = function(e) {
				return this.on(t, e)
			}
		}), ue.each(["get", "post"], function(e, n) {
			ue[n] = function(e, r, i, o) {
				return ue.isFunction(r) && (o = o || i, i = r, r = t), ue.ajax({
					url: e,
					type: n,
					dataType: o,
					data: r,
					success: i
				})
			}
		}), ue.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Lt,
				type: "GET",
				isLocal: Ot.test(Dt[1]),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": zt,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText"
				},
				converters: {
					"* text": e.String,
					"text html": !0,
					"text json": ue.parseJSON,
					"text xml": ue.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(e, t) {
				return t ? H(H(e, ue.ajaxSettings), t) : H(ue.ajaxSettings, e)
			},
			ajaxPrefilter: D($t),
			ajaxTransport: D(It),
			ajax: function(e, n) {
				function r(e, n, r, i) {
					var o, f, v, b, w, N = n;
					2 !== x && (x = 2, u && clearTimeout(u), c = t, s = i || "", T.readyState = e > 0 ? 4 : 0, r && (b = q(p, T, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ue.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (ue.etag[a] = w)), 204 === e ? (o = !0, N = "nocontent") : 304 === e ? (o = !0, N = "notmodified") : (o = M(p, b), N = o.state, f = o.data, v = o.error, o = !v)) : (v = N, !e && N || (N = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || N) + "", o ? g.resolveWith(d, [f, N, T]) : g.rejectWith(d, [T, N, v]), T.statusCode(y), y = t, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, p, o ? f : v]), m.fireWith(d, [T, N]), l && (h.trigger("ajaxComplete", [T, p]), --ue.active || ue.event.trigger("ajaxStop")))
				}
				"object" == typeof e && (n = e, e = t), n = n || {};
				var i, o, a, s, u, l, c, f, p = ue.ajaxSetup({}, n),
					d = p.context || p,
					h = p.context && (d.nodeType || d.jquery) ? ue(d) : ue.event,
					g = ue.Deferred(),
					m = ue.Callbacks("once memory"),
					y = p.statusCode || {},
					v = {},
					b = {},
					x = 0,
					w = "canceled",
					T = {
						readyState: 0,
						getResponseHeader: function(e) {
							var t;
							if(2 === x) {
								if(!f)
									for(f = {}; t = Ft.exec(s);) f[t[1].toLowerCase()] = t[2];
								t = f[e.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders: function() {
							return 2 === x ? s : null
						},
						setRequestHeader: function(e, t) {
							var n = e.toLowerCase();
							return x || (e = b[n] = b[n] || e, v[e] = t), this
						},
						overrideMimeType: function(e) {
							return x || (p.mimeType = e), this
						},
						statusCode: function(e) {
							var t;
							if(e)
								if(2 > x)
									for(t in e) y[t] = [y[t], e[t]];
								else T.always(e[T.status]);
							return this
						},
						abort: function(e) {
							var t = e || w;
							return c && c.abort(t), r(0, t), this
						}
					};
				if(g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || Lt) + "").replace(Mt, "").replace(Pt, Dt[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ue.trim(p.dataType || "*").toLowerCase().match(ce) || [""], null == p.crossDomain && (i = Rt.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === Dt[1] && i[2] === Dt[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (Dt[3] || ("http:" === Dt[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = ue.param(p.data, p.traditional)), L($t, p, n, T), 2 === x) return T;
				l = p.global, l && 0 === ue.active++ && ue.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Bt.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (qt.test(a) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = _t.test(a) ? a.replace(_t, "$1_=" + Ht++) : a + (qt.test(a) ? "&" : "?") + "_=" + Ht++)), p.ifModified && (ue.lastModified[a] && T.setRequestHeader("If-Modified-Since", ue.lastModified[a]), ue.etag[a] && T.setRequestHeader("If-None-Match", ue.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : p.accepts["*"]);
				for(o in p.headers) T.setRequestHeader(o, p.headers[o]);
				if(p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === x)) return T.abort();
				w = "abort";
				for(o in {
						success: 1,
						error: 1,
						complete: 1
					}) T[o](p[o]);
				if(c = L(It, p, n, T)) {
					T.readyState = 1, l && h.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (u = setTimeout(function() {
						T.abort("timeout")
					}, p.timeout));
					try {
						x = 1, c.send(v, r)
					} catch(N) {
						if(!(2 > x)) throw N;
						r(-1, N)
					}
				} else r(-1, "No Transport");
				return T
			},
			getScript: function(e, n) {
				return ue.get(e, t, n, "script")
			},
			getJSON: function(e, t, n) {
				return ue.get(e, t, n, "json")
			}
		}), ue.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function(e) {
					return ue.globalEval(e), e
				}
			}
		}), ue.ajaxPrefilter("script", function(e) {
			e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
		}), ue.ajaxTransport("script", function(e) {
			if(e.crossDomain) {
				var n, r = Y.head || ue("head")[0] || Y.documentElement;
				return {
					send: function(t, i) {
						n = Y.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
							(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
						}, r.insertBefore(n, r.firstChild)
					},
					abort: function() {
						n && n.onload(t, !0)
					}
				}
			}
		});
		var Ut = [],
			Vt = /(=)\?(?=&|$)|\?\?/;
		ue.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var e = Ut.pop() || ue.expando + "_" + Ht++;
				return this[e] = !0, e
			}
		}), ue.ajaxPrefilter("json jsonp", function(n, r, i) {
			var o, a, s, u = n.jsonp !== !1 && (Vt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(n.data) && "data");
			return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ue.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Vt, "$1" + o) : n.jsonp !== !1 && (n.url += (qt.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
				return s || ue.error(o + " was not called"), s[0]
			}, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
				s = arguments
			}, i.always(function() {
				e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Ut.push(o)), s && ue.isFunction(a) && a(s[0]), s = a = t
			}), "script") : void 0
		});
		var Yt, Jt, Gt = 0,
			Qt = e.ActiveXObject && function() {
				var e;
				for(e in Yt) Yt[e](t, !0)
			};
		ue.ajaxSettings.xhr = e.ActiveXObject ? function() {
			return !this.isLocal && _() || F()
		} : _, Jt = ue.ajaxSettings.xhr(), ue.support.cors = !!Jt && "withCredentials" in Jt, Jt = ue.support.ajax = !!Jt, Jt && ue.ajaxTransport(function(n) {
			if(!n.crossDomain || ue.support.cors) {
				var r;
				return {
					send: function(i, o) {
						var a, s, u = n.xhr();
						if(n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
							for(s in n.xhrFields) u[s] = n.xhrFields[s];
						n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
						try {
							for(s in i) u.setRequestHeader(s, i[s])
						} catch(l) {}
						u.send(n.hasContent && n.data || null), r = function(e, i) {
							var s, l, c, f;
							try {
								if(r && (i || 4 === u.readyState))
									if(r = t, a && (u.onreadystatechange = ue.noop, Qt && delete Yt[a]), i) 4 !== u.readyState && u.abort();
									else {
										f = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (f.text = u.responseText);
										try {
											c = u.statusText
										} catch(p) {
											c = ""
										}
										s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
									}
							} catch(d) {
								i || o(-1, d)
							}
							f && o(s, c, f, l)
						}, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Gt, Qt && (Yt || (Yt = {}, ue(e).unload(Qt)), Yt[a] = r), u.onreadystatechange = r) : r()
					},
					abort: function() {
						r && r(t, !0)
					}
				}
			}
		});
		var Kt, Zt, en = /^(?:toggle|show|hide)$/,
			tn = new RegExp("^(?:([+-])=|)(" + le + ")([a-z%]*)$", "i"),
			nn = /queueHooks$/,
			rn = [W],
			on = {
				"*": [function(e, t) {
					var n, r, i = this.createTween(e, t),
						o = tn.exec(t),
						a = i.cur(),
						s = +a || 0,
						u = 1,
						l = 20;
					if(o) {
						if(n = +o[2], r = o[3] || (ue.cssNumber[e] ? "" : "px"), "px" !== r && s) {
							s = ue.css(i.elem, e, !0) || n || 1;
							do u = u || ".5", s /= u, ue.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l)
						}
						i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
					}
					return i
				}]
			};
		ue.Animation = ue.extend(P, {
			tweener: function(e, t) {
				ue.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				for(var n, r = 0, i = e.length; i > r; r++) n = e[r], on[n] = on[n] || [], on[n].unshift(t)
			},
			prefilter: function(e, t) {
				t ? rn.unshift(e) : rn.push(e)
			}
		}), ue.Tween = $, $.prototype = {
			constructor: $,
			init: function(e, t, n, r, i, o) {
				this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ue.cssNumber[n] ? "" : "px")
			},
			cur: function() {
				var e = $.propHooks[this.prop];
				return e && e.get ? e.get(this) : $.propHooks._default.get(this)
			},
			run: function(e) {
				var t, n = $.propHooks[this.prop];
				return this.options.duration ? this.pos = t = ue.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
			}
		}, $.prototype.init.prototype = $.prototype, $.propHooks = {
			_default: {
				get: function(e) {
					var t;
					return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ue.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
				},
				set: function(e) {
					ue.fx.step[e.prop] ? ue.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ue.cssProps[e.prop]] || ue.cssHooks[e.prop]) ? ue.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
				}
			}
		}, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
			set: function(e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, ue.each(["toggle", "show", "hide"], function(e, t) {
			var n = ue.fn[t];
			ue.fn[t] = function(e, r, i) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i)
			}
		}), ue.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(T).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function(e, t, n, r) {
				var i = ue.isEmptyObject(e),
					o = ue.speed(t, n, r),
					a = function() {
						var t = P(this, ue.extend({}, e), o);
						a.finish = function() {
							t.stop(!0)
						}, (i || ue._data(this, "finish")) && t.stop(!0)
					};
				return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function(e, n, r) {
				var i = function(e) {
					var t = e.stop;
					delete e.stop, t(r)
				};
				return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						n = null != e && e + "queueHooks",
						o = ue.timers,
						a = ue._data(this);
					if(n) a[n] && a[n].stop && i(a[n]);
					else
						for(n in a) a[n] && a[n].stop && nn.test(n) && i(a[n]);
					for(n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
					!t && r || ue.dequeue(this, e)
				})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, n = ue._data(this),
						r = n[e + "queue"],
						i = n[e + "queueHooks"],
						o = ue.timers,
						a = r ? r.length : 0;
					for(n.finish = !0, ue.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					for(t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
					delete n.finish
				})
			}
		}), ue.each({
			slideDown: I("show"),
			slideUp: I("hide"),
			slideToggle: I("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			ue.fn[e] = function(e, n, r) {
				return this.animate(t, e, n, r)
			}
		}), ue.speed = function(e, t, n) {
			var r = e && "object" == typeof e ? ue.extend({}, e) : {
				complete: n || !n && t || ue.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !ue.isFunction(t) && t
			};
			return r.duration = ue.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ue.fx.speeds ? ue.fx.speeds[r.duration] : ue.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
				ue.isFunction(r.old) && r.old.call(this), r.queue && ue.dequeue(this, r.queue)
			}, r
		}, ue.easing = {
			linear: function(e) {
				return e
			},
			swing: function(e) {
				return .5 - Math.cos(e * Math.PI) / 2
			}
		}, ue.timers = [], ue.fx = $.prototype.init, ue.fx.tick = function() {
			var e, n = ue.timers,
				r = 0;
			for(Kt = ue.now(); r < n.length; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
			n.length || ue.fx.stop(), Kt = t
		}, ue.fx.timer = function(e) {
			e() && ue.timers.push(e) && ue.fx.start()
		}, ue.fx.interval = 13, ue.fx.start = function() {
			Zt || (Zt = setInterval(ue.fx.tick, ue.fx.interval))
		}, ue.fx.stop = function() {
			clearInterval(Zt), Zt = null
		}, ue.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, ue.fx.step = {}, ue.expr && ue.expr.filters && (ue.expr.filters.animated = function(e) {
			return ue.grep(ue.timers, function(t) {
				return e === t.elem
			}).length
		}), ue.fn.offset = function(e) {
			if(arguments.length) return e === t ? this : this.each(function(t) {
				ue.offset.setOffset(this, e, t)
			});
			var n, r, i = {
					top: 0,
					left: 0
				},
				o = this[0],
				a = o && o.ownerDocument;
			if(a) return n = a.documentElement, ue.contains(n, o) ? (typeof o.getBoundingClientRect !== V && (i = o.getBoundingClientRect()), r = z(a), {
				top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
				left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
			}) : i
		}, ue.offset = {
			setOffset: function(e, t, n) {
				var r = ue.css(e, "position");
				"static" === r && (e.style.position = "relative");
				var i, o, a = ue(e),
					s = a.offset(),
					u = ue.css(e, "top"),
					l = ue.css(e, "left"),
					c = ("absolute" === r || "fixed" === r) && ue.inArray("auto", [u, l]) > -1,
					f = {},
					p = {};
				c ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), ue.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f)
			}
		}, ue.fn.extend({
			position: function() {
				if(this[0]) {
					var e, t, n = {
							top: 0,
							left: 0
						},
						r = this[0];
					return "fixed" === ue.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ue.nodeName(e[0], "html") || (n = e.offset()), n.top += ue.css(e[0], "borderTopWidth", !0), n.left += ue.css(e[0], "borderLeftWidth", !0)), {
						top: t.top - n.top - ue.css(r, "marginTop", !0),
						left: t.left - n.left - ue.css(r, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for(var e = this.offsetParent || Y.documentElement; e && !ue.nodeName(e, "html") && "static" === ue.css(e, "position");) e = e.offsetParent;
					return e || Y.documentElement
				})
			}
		}), ue.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(e, n) {
			var r = /Y/.test(n);
			ue.fn[e] = function(i) {
				return ue.access(this, function(e, i, o) {
					var a = z(e);
					return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : void(a ? a.scrollTo(r ? ue(a).scrollLeft() : o, r ? o : ue(a).scrollTop()) : e[i] = o)
				}, e, i, arguments.length, null)
			}
		}), ue.each({
			Height: "height",
			Width: "width"
		}, function(e, n) {
			ue.each({
				padding: "inner" + e,
				content: n,
				"": "outer" + e
			}, function(r, i) {
				ue.fn[i] = function(i, o) {
					var a = arguments.length && (r || "boolean" != typeof i),
						s = r || (i === !0 || o === !0 ? "margin" : "border");
					return ue.access(this, function(n, r, i) {
						var o;
						return ue.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ue.css(n, r, s) : ue.style(n, r, i, s)
					}, n, a ? i : t, a, null)
				}
			})
		}), e.jQuery = e.$ = ue, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
			return ue
		})
	})(window);