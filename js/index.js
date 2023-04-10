/*! grapesjs-users-blocks - 0.1.2 */
!(function (A, e) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = e(require("grapesjs")))
        : "function" == typeof define && define.amd
        ? define(["grapesjs"], e)
        : "object" == typeof exports
        ? (exports["grapesjs-users-blocks"] = e(require("grapesjs")))
        : (A["grapesjs-users-blocks"] = e(A.grapesjs));
})("undefined" != typeof self ? self : this, function (A) {
    return (function (A) {
        function e(n) {
            if (t[n]) return t[n].exports;
            var r = (t[n] = { i: n, l: !1, exports: {} });
            return A[n].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
        }
        var t = {};
        return (
            (e.m = A),
            (e.c = t),
            (e.d = function (A, t, n) {
                e.o(A, t) || Object.defineProperty(A, t, { configurable: !1, enumerable: !0, get: n });
            }),
            (e.n = function (A) {
                var t =
                    A && A.__esModule
                        ? function () {
                              return A.default;
                          }
                        : function () {
                              return A;
                          };
                return e.d(t, "a", t), t;
            }),
            (e.o = function (A, e) {
                return Object.prototype.hasOwnProperty.call(A, e);
            }),
            (e.p = ""),
            e((e.s = 0))
        );
    })([
        function (A, e, t) {
            "use strict";
            function n(A) {
                return A && A.__esModule ? A : { default: A };
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = t(1),
                o = n(r),
                s = t(2),
                i = n(s);
            e.default = o.default.plugins.add("grapesjs-users-blocks", function (A, e) {
                function t(A, e) {
                    var r = n();
                    return (t = function (A, e) {
                        return (A -= 122), r[A];
                    })(A, e);
                }
                function n() {
                    var A = ["dev", "28nTgrKz", "Something wrong!", "1796913HYiYYH", "2520528pVkxDw", "2400150RoCMMn", "2LUkzwy", "5mLcisk", "520816LeckPs", "pro", "39605500tyzLio", "50UAiJMM", "858429WRdglB", "host", "1461764uqnlVd"];
                    return (n = function () {
                        return A;
                    })();
                }
                var r = t;
                !(function (A, e) {
                    for (var n = t, r = A(); []; )
                        try {
                            if (
                                608618 ===
                                -parseInt(n(133)) / 1 +
                                    (parseInt(n(127)) / 2) * (-parseInt(n(125)) / 3) +
                                    (-parseInt(n(135)) / 4) * (-parseInt(n(128)) / 5) +
                                    -parseInt(n(126)) / 6 +
                                    (parseInt(n(122)) / 7) * (-parseInt(n(129)) / 8) +
                                    (parseInt(n(124)) / 9) * (-parseInt(n(132)) / 10) +
                                    parseInt(n(131)) / 11
                            )
                                break;
                            r.push(r.shift());
                        } catch (A) {
                            r.push(r.shift());
                        }
                })(n);
                var o = r(136),
                    s = r(130);
                // if (location[r(134)] != o + "future." + s) throw Error(r(123));
                (0, i.default)(A, e);
            });
        },
        function (e, t) {
            e.exports = A;
        },
        function (A, e, t) {
            "use strict";
            function n(A) {
                return A && A.__esModule ? A : { default: A };
            }
            function r(A) {
                if (Array.isArray(A)) {
                    for (var e = 0, t = Array(A.length); e < A.length; e++) t[e] = A[e];
                    return t;
                }
                return Array.from(A);
            }
            function o(A, e) {
                if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function s(A, e) {
                var t = i();
                return (s = function (A, e) {
                    return (A -= 471), t[A];
                })(A, e);
            }
            function i() {
                var A = [
                    "shouldValidate",
                    "value",
                    "focus",
                    '<svg fill="#ffffff" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m764.386 112.941 225.882 338.824H225.882v112.94H1920v1072.942c0 93.402-76.01 169.412-169.412 169.412H169.412C76.009 1807.059 0 1731.049 0 1637.647V112.941h764.386ZM1040 858.846H880v240H640v160h240v240h160v-240h240v-160h-240v-240Z" fill-rule="evenodd"></path> </g></svg>',
                    "handleOnSaveClick",
                    "addSelected",
                    "trim",
                    "editorTextArea",
                    "handleOnComponentSelected",
                    "preview",
                    "showPreviewExtra",
                    "Modal",
                    "blockDescriptionInput",
                    "tabBtns",
                    "previewImg",
                    "#css-editor-group-container",
                    "showCssEditor",
                    "grapesjsStyles",
                    "createModalContent",
                    "modalBlockDescriptionInput",
                    "formData",
                    "forEachValidatedArea",
                    "modalBlockCategoryInput",
                    "14242ARoTXl",
                    "1439347rlCzFT",
                    "set",
                    "deleteModalElement",
                    "codeViewerCss",
                    "appendChild",
                    "\n          </body>\n        </html>\n      ",
                    "handleOnDeleteCansel",
                    "input",
                    "cssString",
                    "DEFAULT_BLOCK_CSS",
                    "updatePreview",
                    "onload",
                    "showHtmlEditor",
                    "src",
                    "CodeManager",
                    "#css-style",
                    "#main-preview-container",
                    "htmlmixed",
                    "CODE_VIEWER_CSS_TUNINGS",
                    "document",
                    "showDescription",
                    "bind",
                    "description",
                    "hopscotch",
                    ".error-notice",
                    "textContent",
                    "getViewer",
                    "3822492rLaiPV",
                    "log",
                    "open",
                    "createDeleteModalContent",
                    "tabId",
                    "call-btn-dash",
                    "54xniTXn",
                    "modalContent",
                    "modalPreviewIFrameDoc",
                    "#iframe-editor",
                    "#block-name",
                    "reopen",
                    "addEventListener",
                    "grapesjsFrame",
                    "setContent",
                    "BlockManagerContainer",
                    "handleServerError",
                    "codeViewer",
                    "push",
                    "handleOnAllLoaded",
                    "saveBlock",
                    "#tab-2-btn",
                    "modalBlockNameInput",
                    "getSelected",
                    "handleOpenEditorCommand",
                    "style",
                    "24324jLIWYO",
                    "12105976BwabDB",
                    "remove",
                    "handleOnLoad",
                    "change",
                    "classList",
                    "head",
                    "getContent",
                    "toDataURL",
                    "editor",
                    "htmlEditor",
                    "validate",
                    "#preview-container",
                    "frame:load",
                    "init",
                    "querySelector",
                    "updatePreviewImg",
                    "string",
                    "#html-code",
                    "addButtonText",
                    "201cJOpdj",
                    "setTitle",
                    "#cansel-btn",
                    "get",
                    "modalElement",
                    "none",
                    "find",
                    "Edit Block",
                    "hide",
                    ".validate",
                    "contentWindow",
                    "querySelectorAll",
                    "showPreviewMain",
                    "CodeMirror",
                    "3960585oDUePS",
                    "label",
                    "click",
                    "655eyYTEn",
                    "component:selected",
                    "modalMainTabBtn",
                    "encodedHtml",
                    "%cServer error: ",
                    "showExtraTab",
                    "localstorage",
                    "block",
                    "\n            </style>\n          </head>\n          <body>\n            ",
                    "srcdoc",
                    "children",
                    "modal",
                    "modalCodeTextArea",
                    "editorIframe",
                    "handleModalClose",
                    "DEFAULT_BLOCK_HTML",
                    "display",
                    "blockCategoryInput",
                    "#delete-btn",
                    "parentElement",
                    "editedId",
                    "#description-input",
                    ".tabs_link",
                    "then",
                    "element",
                    "active",
                    "map",
                    "catch",
                    "close",
                    "modalDeleteBtn",
                    "modalPreviewIFrame",
                    "addButton",
                    "#PreviewImagesBase64",
                    "contentDocument",
                    "_UserBlocksData",
                    "insertBefore",
                    "load",
                    "onChange",
                    "server",
                    "reopenBlockModal",
                    '<div class="my-block-class">\n                My new block example\n            </div>',
                    "handleOnFrameLoad",
                    "selected",
                    "2874810MkoJVH",
                    "color: red",
                    "blockManager",
                    "clone",
                    "main",
                    "editorIframeContainer",
                    "#description-container",
                    "#main-tab-btn",
                    "modalCssTextArea",
                    "mainTabBtn",
                    "addBlockToBlockManager",
                    "contains",
                    "grapesjsFrameContentWindow",
                    "addSelectedCommand",
                    "div",
                    "length",
                    "add",
                    "data",
                    "deleteBtn",
                    "tuneCodeViewer",
                    "join",
                    "dataset",
                    "new",
                    "getAll",
                    "openTab",
                    "tab-custom-other-",
                    "cssTextArea",
                    "some",
                    "text/css",
                    "object",
                    "forEach",
                    "deleteModalContent",
                    "Add custom block",
                    "extra",
                    "replaceAll",
                ];
                return (i = function () {
                    return A;
                })();
            }
            function B(A, e, t) {
                var n = document.createElement(A);
                return a(n, t), e && e.appendChild(n), n;
            }
            function a(A, e) {
                if (e) for (var t in e) "object" === l(e[t]) ? a(A[t], e[t]) : (A[t] = e[t]);
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var c = (function () {
                    function A(A, e) {
                        var t = [],
                            n = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var s, i = A[Symbol.iterator](); !(n = (s = i.next()).done) && (t.push(s.value), !e || t.length !== e); n = !0);
                        } catch (A) {
                            (r = !0), (o = A);
                        } finally {
                            try {
                                !n && i.return && i.return();
                            } finally {
                                if (r) throw o;
                            }
                        }
                        return t;
                    }
                    return function (e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e)) return A(e, t);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    };
                })(),
                l =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (A) {
                              return typeof A;
                          }
                        : function (A) {
                              return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
                          },
                g = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n);
                        }
                    }
                    return function (e, t, n) {
                        return t && A(e.prototype, t), n && A(e, n), e;
                    };
                })(),
                u = t(3),
                Q = n(u),
                w = t(4),
                d = n(w),
                C = t(5),
                h = n(C),
                U = t(6),
                F = n(U),
                f = t(7),
                p = n(f),
                H = t(8),
                y = n(H),
                E = t(9),
                m = n(E),
                I = t(10),
                b = n(I);
            e.default = function (A) {
                function e(A, n) {
                    var r = t();
                    return (e = function (A, e) {
                        return (A -= 122), r[A];
                    })(A, n);
                }
                function t() {
                    var A = ["dev", "28nTgrKz", "Something wrong!", "1796913HYiYYH", "2520528pVkxDw", "2400150RoCMMn", "2LUkzwy", "5mLcisk", "520816LeckPs", "pro", "39605500tyzLio", "50UAiJMM", "858429WRdglB", "host", "1461764uqnlVd"];
                    return (t = function () {
                        return A;
                    })();
                }
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = e;
                !(function (A, t) {
                    for (var n = e, r = A(); []; )
                        try {
                            if (
                                608618 ===
                                -parseInt(n(133)) / 1 +
                                    (parseInt(n(127)) / 2) * (-parseInt(n(125)) / 3) +
                                    (-parseInt(n(135)) / 4) * (-parseInt(n(128)) / 5) +
                                    -parseInt(n(126)) / 6 +
                                    (parseInt(n(122)) / 7) * (-parseInt(n(129)) / 8) +
                                    (parseInt(n(124)) / 9) * (-parseInt(n(132)) / 10) +
                                    parseInt(n(131)) / 11
                            )
                                break;
                            r.push(r.shift());
                        } catch (A) {
                            r.push(r.shift());
                        }
                })(t);
                var o = r(136),
                    s = r(130);
                // if (location[r(134)] != o + "future." + s) throw Error(r(123));
                new K(A, n);
            };
            var v = s;
            !(function (A, e) {
                for (var t = s, n = A(); []; )
                    try {
                        if (
                            851767 ===
                            (-parseInt(t(488)) / 1) * (parseInt(t(606)) / 2) +
                                -parseInt(t(502)) / 3 +
                                (parseInt(t(660)) / 4) * (parseInt(t(505)) / 5) +
                                -parseInt(t(634)) / 6 +
                                parseInt(t(607)) / 7 +
                                parseInt(t(661)) / 8 +
                                (parseInt(t(640)) / 9) * (parseInt(t(548)) / 10)
                        )
                            break;
                        n.push(n.shift());
                    } catch (A) {
                        n.push(n.shift());
                    }
            })(i);
            var K = (function () {
                function A(e, t) {
                    var n = t.server,
                        r = void 0 === n ? v(511) : n,
                        s = t.labels;
                    s = void 0 === s ? {} : s;
                    var i = s.addButton,
                        B = void 0 === i ? v(580) : i,
                        a = t.display;
                    a = void 0 === a ? {} : a;
                    var c = a.htmlEditor,
                        g = void 0 === c ? !![] : c,
                        u = a.cssEditor,
                        Q = void 0 === u ? !![] : u,
                        w = a.previewMain,
                        d = void 0 === w ? !![] : w,
                        C = a.previewExtra,
                        h = void 0 === C ? !![] : C,
                        U = a.description,
                        F = void 0 === U ? !![] : U;
                    o(this, A);
                    var f = v;
                    (this._UserBlocksData = {
                        editor: e,
                        blockManager: new y.default(e, r),
                        grapesjsFrame: null,
                        editorIframe: null,
                        codeViewer: e[f(621)][f(633)]("CodeMirror")[f(551)](),
                        codeViewerCss: e[f(621)][f(633)](f(501)).clone(),
                        modalContent: null,
                        deleteModalContent: null,
                        addSelected: this.addSelectedCommand[f(628)](this),
                        shouldValidate: ![],
                        editedId: void 0,
                        reopenBlockModal: ![],
                        server: r === f(511) ? new m.default() : new b.default((void 0 === r ? "undefined" : l(r)) === f(577) ? r : {}),
                        labels: { addButton: B },
                        display: { main: { htmlEditor: g, cssEditor: Q, preview: d }, extra: { preview: h, description: F } },
                    }),
                        (this.codeViewer[f(542)] = this[f(610)].onChange = this[f(617)][f(628)](this)),
                        this[f(567)](),
                        this[f(477)].on(f(541), this[f(471)].bind(this)),
                        this[f(477)].on(f(481), this[f(546)][f(628)](this)),
                        this.editor.on(f(506), this[f(591)].bind(this)),
                        this.editor.on("modal:close", this.handleModalClose.bind(this)),
                        this[f(543)][f(571)]()[f(528)](this[f(653)][f(628)](this)).catch(this[f(650)].bind(this));
                }
                return (
                    g(A, [
                        {
                            key: "handleOnLoad",
                            value: function () {
                                var A = this,
                                    e = v,
                                    t = this[e(649)],
                                    n = B("button", null, {
                                        className: e(639),
                                        innerText: this.addButtonText,
                                        onclick: function () {
                                            return A[e(658)]("new"), ![];
                                        },
                                    });
                                t[e(515)][e(563)] ? t[e(540)](n, t[e(515)][0]) : t[e(611)](n), B(e(659), document.querySelector(e(474)), { type: e(576), innerText: d.default[e(582)]("\r\n", "") });
                            },
                        },
                        {
                            key: v(546),
                            value: function (A) {
                                var e = A.el;
                                A.model, A.view;
                                this.grapesjsFrame = e;
                            },
                        },
                        {
                            key: v(561),
                            value: function () {
                                this.handleOpenEditorCommand("selected");
                            },
                        },
                        {
                            key: v(591),
                            value: function () {
                                var A = this,
                                    e = v,
                                    t = this[e(477)].getSelected(),
                                    n = t[e(491)]("toolbar");
                                !n[e(575)](function (t) {
                                    return t.command === A[e(588)];
                                }) && t.set({ toolbar: [{ label: e(586), command: this[e(588)] }].concat(r(n)) });
                            },
                        },
                        {
                            key: "handleOpenEditorCommand",
                            value: function () {
                                var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v(570),
                                    e = this,
                                    t = arguments[1],
                                    n = arguments[2],
                                    r = v;
                                if ((this[r(516)].setContent(this[r(492)])[r(636)](), "reopen" !== A)) {
                                    var o = void 0,
                                        s = void 0,
                                        i = "",
                                        B = "",
                                        a = "",
                                        c = ![],
                                        l = "Create Block";
                                    switch (((this[r(525)] = void 0), A)) {
                                        case r(547):
                                            var g = this[r(477)].getSelected();
                                            (o = new Q.default().run(this[r(477)], ![], { target: g })), (s = this[r(477)][r(657)]().toHTML());
                                            break;
                                        case r(512):
                                            var u = n.category,
                                                w = n.attributes,
                                                d = n.basic,
                                                C = d.html,
                                                h = d.css,
                                                U = d.description;
                                            (s = C), (o = h), (i = w.title), (B = u[r(503)]), (this.editedId = t), (a = U), (c = !![]), (l = r(495));
                                            break;
                                        case r(570):
                                        default:
                                            (s = this.DEFAULT_BLOCK_HTML), (o = this.DEFAULT_BLOCK_CSS);
                                    }
                                    this[r(651)][r(648)](s),
                                        this.codeViewerCss[r(648)](o),
                                        (this[r(656)][r(584)] = i),
                                        (this.modalBlockCategoryInput[r(584)] = B),
                                        (this.modalBlockDescriptionInput[r(584)] = a),
                                        (this[r(534)][r(659)][r(521)] = c ? null : r(493)),
                                        this[r(516)][r(489)](l),
                                        this[r(604)](function (A, e) {
                                            return (e.style[r(521)] = r(493));
                                        }),
                                        (this[r(583)] = ![]),
                                        this[r(572)](this.modalMainTabBtn),
                                        setTimeout(function () {
                                            var A = r;
                                            e.codeViewer[A(477)].refresh(), e[A(610)][A(477)].refresh();
                                        }, 1);
                                }
                            },
                        },
                        {
                            key: v(604),
                            value: function (A) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this[v(492)],
                                    t = v;
                                e[t(499)](t(497))[t(578)](function (e) {
                                    return A(e[t(483)](t(614)), e[t(483)](t(631)));
                                });
                            },
                        },
                        {
                            key: v(637),
                            value: function () {
                                var A = v,
                                    e = B("div", null, { innerHTML: F.default });
                                e.querySelector(A(523))[A(646)](A(504), this.handleOnDeleteConfirm[A(628)](this)), e.querySelector(A(490))[A(646)]("click", this[A(613)].bind(this)), (this[A(579)] = { element: e });
                            },
                        },
                        {
                            key: v(601),
                            value: function () {
                                var A = this,
                                    e = v,
                                    t = B(e(562), null, { innerHTML: h.default }),
                                    n = [];
                                t[e(499)](e(527))[e(578)](function (t) {
                                    var r = e;
                                    t[r(646)](r(504), function (e) {
                                        return A[r(572)](t);
                                    }),
                                        n[r(652)](t);
                                }),
                                    t[e(483)]("#save-block-btn")[e(646)](e(504), this[e(587)].bind(this)),
                                    this.forEachValidatedArea(function (t, n) {
                                        return t.addEventListener(e(472), function () {
                                            return A[e(583)] && A[e(479)]();
                                        });
                                    }, t);
                                var r = t[e(483)]("#delete-btn");
                                r[e(646)](e(504), this.handleOnDeleteClick[e(628)](this)),
                                    (this.modalContent = {
                                        element: t,
                                        editorTextArea: t.querySelector(e(486)),
                                        cssTextArea: t[e(483)](e(622)),
                                        mainTabBtn: t[e(483)](e(555)),
                                        editorIframeContainer: t[e(483)](e(643)),
                                        previewImg: t.querySelector(e(537)),
                                        blockNameInput: t[e(483)](e(644)),
                                        blockDescriptionInput: t[e(483)](e(526)),
                                        blockCategoryInput: t[e(483)]("#cat-value"),
                                        deleteBtn: r,
                                        tabBtns: n,
                                    }),
                                    [
                                        [this[e(593)], e(480)],
                                        [this[e(627)], e(554)],
                                        [this[e(510)], "#tab-2"],
                                        [this[e(510)], e(655)],
                                        [this[e(619)], "#html-editor-group-container"],
                                        [this.showCssEditor, e(598)],
                                        [this[e(500)], e(623), "hide-preview"],
                                    ][e(578)](function (A) {
                                        var n = c(A, 3),
                                            r = n[0],
                                            o = n[1],
                                            s = n[2];
                                        return r || t[e(483)](o).classList[e(564)](s || e(496));
                                    }),
                                    this[e(651)][e(482)](this[e(517)]),
                                    this.codeViewerCss[e(482)](this.modalCssTextArea),
                                    (this[e(535)][e(618)] = this[e(484)][e(628)](this));
                            },
                        },
                        {
                            key: v(572),
                            value: function (A) {
                                var e = v,
                                    t = (void 0 === A ? "undefined" : l(A)) === e(485) ? A : A[e(569)][e(638)];
                                this.modalElement.querySelectorAll(".tabs_content")[e(578)](function (A) {
                                    return (A[e(659)].display = e(493));
                                }),
                                    this[e(492)].querySelectorAll(".tabs_link")[e(578)](function (A) {
                                        return A[e(473)][e(662)]("active");
                                    }),
                                    (this[e(492)].querySelector("#" + t)[e(659)][e(521)] = e(512));
                                var n = this.modalTabBtns[e(494)](function (A) {
                                    return A[e(569)].tabId === t;
                                });
                                n && n[e(473)][e(564)](e(530));
                            },
                        },
                        {
                            key: "tuneCodeViewer",
                            value: function () {
                                var A = v;
                                this.codeViewer[A(608)](this.CODE_VIEWER_TUNINGS), this[A(610)][A(608)](this[A(625)]);
                            },
                        },
                        {
                            key: v(484),
                            value: function () {
                                var A = this,
                                    e = v;
                                (0, p.default)(this[e(642)].body)[e(528)](function (t) {
                                    return (A[e(597)].src = t[e(476)]());
                                });
                            },
                        },
                        {
                            key: v(617),
                            value: function () {
                                var A = v;
                                this[A(535)][A(514)] =
                                    "\n        <html>\n          <head>\n            <style>\n              " + this.grapesjsStyles + " \n              " + this.codeViewerCss[A(475)]() + A(513) + this[A(651)][A(475)]() + A(612);
                            },
                        },
                        {
                            key: "handleOnSaveClick",
                            value: function () {
                                var A = v;
                                if (((this[A(583)] = !![]), this.validate())) {
                                    var e = this[A(558)](this[A(525)], this[A(603)]);
                                    this[A(543)][A(654)](e, this[A(603)])[A(532)](this[A(650)].bind(this)), this.modal[A(533)]();
                                }
                            },
                        },
                        {
                            key: v(558),
                            value: function (A, e) {
                                var t = this;
                                return this.blockManager.saveBlock(A, e, function (A, e) {
                                    var n = s;
                                    t[n(658)](n(512), A, e);
                                });
                            },
                        },
                        {
                            key: "handleOnDeleteClick",
                            value: function () {
                                var A = v;
                                this.modal[A(648)](this[A(609)]), (this[A(544)] = !![]);
                            },
                        },
                        {
                            key: "handleOnDeleteConfirm",
                            value: function () {
                                var A = v,
                                    e = this[A(525)];
                                this[A(550)].remove(e), this[A(543)][A(662)](e)[A(532)](this[A(650)][A(628)](this)), (this[A(544)] = ![]), this[A(516)].close();
                            },
                        },
                        {
                            key: v(613),
                            value: function () {
                                var A = v;
                                this[A(516)][A(533)]();
                            },
                        },
                        {
                            key: v(519),
                            value: function () {
                                var A = v;
                                this[A(544)] && this.handleOpenEditorCommand(A(645)), (this[A(544)] = ![]);
                            },
                        },
                        {
                            key: "validate",
                            value: function () {
                                var A = this,
                                    e = v,
                                    t = !![];
                                return (
                                    this[e(604)](function (n, r) {
                                        var o = e;
                                        if ("" === n[o(584)][o(589)]()) {
                                            r.style[o(521)] = null;
                                            for (var s = n[o(524)]; s && !s[o(473)][o(559)]("tabs_content"); ) s = s[o(524)];
                                            s && A[o(572)](s.id), n[o(585)](), (t = ![]);
                                        } else r[o(659)].display = o(493);
                                    }),
                                    t
                                );
                            },
                        },
                        {
                            key: v(653),
                            value: function (A) {
                                var e = this,
                                    t = v;
                                A[t(578)](function (A) {
                                    return e[t(558)](A.id, A[t(565)]);
                                });
                            },
                        },
                        {
                            key: v(650),
                            value: function (A) {
                                var e = v;
                                console[e(635)](e(509) + A, e(549));
                            },
                        },
                        {
                            key: "CODE_VIEWER_TUNINGS",
                            get: function () {
                                var A = v;
                                return { codeName: A(624), readOnly: 0, theme: A(630), autoBeautify: !![], autoCloseTags: !![], autoCloseBrackets: !![], lineWrapping: !![], styleActiveLine: !![], smartIndent: !![], indentWithTabs: !![] };
                            },
                        },
                        {
                            key: v(625),
                            get: function () {
                                return { codeName: "css", readOnly: 0, theme: v(630), autoBeautify: !![], autoCloseTags: !![], autoCloseBrackets: !![], lineWrapping: !![], styleActiveLine: !![], smartIndent: !![], indentWithTabs: !![] };
                            },
                        },
                        {
                            key: v(520),
                            get: function () {
                                return v(545);
                            },
                        },
                        {
                            key: v(616),
                            get: function () {
                                return ".my-block-class {\n              color: #555;\n              font-size: 3rem;\n              padding: 50px;\n              text-align: center;\n            }\n            ";
                            },
                        },
                        {
                            key: v(647),
                            get: function () {
                                return this._UserBlocksData.grapesjsFrame;
                            },
                            set: function (A) {
                                this[v(539)].grapesjsFrame = A;
                            },
                        },
                        {
                            key: "grapesjsFrameContentWindow",
                            get: function () {
                                var A = v;
                                return this[A(647)] && this.grapesjsFrame[A(498)];
                            },
                        },
                        {
                            key: v(600),
                            get: function () {
                                var A = v,
                                    e = this[A(560)];
                                return e
                                    ? []
                                          .concat(r(e[A(626)][A(499)](".gjs-css-rules style")))
                                          [A(531)](function (e) {
                                              return e[A(632)];
                                          })
                                          [A(568)]("")
                                    : "";
                            },
                        },
                        {
                            key: v(651),
                            get: function () {
                                return this[v(539)].codeViewer;
                            },
                        },
                        {
                            key: v(610),
                            get: function () {
                                var A = v;
                                return this[A(539)][A(610)];
                            },
                        },
                        {
                            key: v(477),
                            get: function () {
                                var A = v;
                                return this._UserBlocksData[A(477)];
                            },
                        },
                        {
                            key: v(516),
                            get: function () {
                                var A = v;
                                return editor[A(594)];
                            },
                        },
                        {
                            key: "blockManager",
                            get: function () {
                                var A = v;
                                return this[A(539)][A(550)];
                            },
                        },
                        {
                            key: v(649),
                            get: function () {
                                return this[v(550)].getContainer();
                            },
                        },
                        {
                            key: v(518),
                            get: function () {
                                return this[v(539)].editorIframe;
                            },
                            set: function (A) {
                                var e = v;
                                this[e(539)][e(518)] = A;
                            },
                        },
                        {
                            key: v(641),
                            get: function () {
                                var A = v;
                                return !this[A(539)][A(641)] && this[A(601)](), this._UserBlocksData[A(641)];
                            },
                            set: function (A) {
                                var e = v;
                                this._UserBlocksData[e(641)] = A;
                            },
                        },
                        {
                            key: v(579),
                            get: function () {
                                var A = v;
                                return !this[A(539)][A(579)] && this[A(637)](), this[A(539)][A(579)];
                            },
                        },
                        {
                            key: "deleteModalContent",
                            set: function (A) {
                                var e = v;
                                this._UserBlocksData[e(579)] = A;
                            },
                        },
                        {
                            key: "modalElement",
                            get: function () {
                                var A = v;
                                return this.modalContent[A(529)];
                            },
                        },
                        {
                            key: v(609),
                            get: function () {
                                return this[v(579)].element;
                            },
                        },
                        {
                            key: v(517),
                            get: function () {
                                var A = v;
                                return this[A(641)][A(590)];
                            },
                        },
                        {
                            key: v(556),
                            get: function () {
                                var A = v;
                                return this[A(641)][A(574)];
                            },
                        },
                        {
                            key: v(507),
                            get: function () {
                                var A = v;
                                return this[A(641)][A(557)];
                            },
                        },
                        {
                            key: v(656),
                            get: function () {
                                return this.modalContent.blockNameInput;
                            },
                        },
                        {
                            key: v(602),
                            get: function () {
                                var A = v;
                                return this.modalContent[A(595)];
                            },
                        },
                        {
                            key: v(605),
                            get: function () {
                                var A = v;
                                return this[A(641)][A(522)];
                            },
                        },
                        {
                            key: v(535),
                            get: function () {
                                var A = v;
                                return this[A(641)][A(553)];
                            },
                        },
                        {
                            key: v(642),
                            get: function () {
                                var A = v;
                                return this[A(535)] && this[A(535)][A(538)];
                            },
                        },
                        {
                            key: v(534),
                            get: function () {
                                var A = v;
                                return this[A(641)][A(566)];
                            },
                        },
                        {
                            key: "modalTabBtns",
                            get: function () {
                                var A = v;
                                return this[A(641)][A(596)];
                            },
                        },
                        {
                            key: v(597),
                            get: function () {
                                var A = v;
                                return this[A(641)][A(597)];
                            },
                        },
                        {
                            key: "addSelected",
                            get: function () {
                                var A = v;
                                return this[A(539)][A(588)];
                            },
                        },
                        {
                            key: v(583),
                            get: function () {
                                var A = v;
                                return this[A(539)][A(583)];
                            },
                        },
                        {
                            key: "shouldValidate",
                            set: function (A) {
                                this[v(539)].shouldValidate = A;
                            },
                        },
                        {
                            key: "formData",
                            get: function () {
                                var A = v,
                                    e = this[A(605)][A(584)][A(589)]();
                                return {
                                    basic: { html: this.encodedHtml, css: this[A(615)], preview: this.previewImg[A(620)], description: this[A(602)][A(584)][A(589)]() },
                                    category: { id: A(573) + e, label: e },
                                    attributes: { title: this[A(656)].value[A(589)]() },
                                };
                            },
                        },
                        {
                            key: v(508),
                            get: function () {
                                var A = v;
                                return this.codeViewer[A(475)]();
                            },
                        },
                        {
                            key: v(615),
                            get: function () {
                                var A = v;
                                return this.codeViewerCss[A(475)]();
                            },
                        },
                        {
                            key: v(525),
                            get: function () {
                                var A = v;
                                return this[A(539)][A(525)];
                            },
                        },
                        {
                            key: "editedId",
                            set: function (A) {
                                var e = v;
                                this[e(539)][e(525)] = A;
                            },
                        },
                        {
                            key: "reopenBlockModal",
                            get: function () {
                                return this[v(539)].reopenBlockModal;
                            },
                        },
                        {
                            key: v(544),
                            set: function (A) {
                                this[v(539)].reopenBlockModal = A;
                            },
                        },
                        {
                            key: v(543),
                            get: function () {
                                var A = v;
                                return this[A(539)][A(543)];
                            },
                        },
                        {
                            key: v(487),
                            get: function () {
                                var A = v;
                                return this._UserBlocksData.labels[A(536)];
                            },
                        },
                        {
                            key: "showPreviewExtra",
                            get: function () {
                                var A = v;
                                return this[A(539)][A(521)][A(581)][A(592)];
                            },
                        },
                        {
                            key: "showDescription",
                            get: function () {
                                var A = v;
                                return this[A(539)][A(521)][A(581)][A(629)];
                            },
                        },
                        {
                            key: "showExtraTab",
                            get: function () {
                                var A = this,
                                    e = v;
                                return Object.keys(this[e(539)][e(521)][e(581)]).some(function (t) {
                                    return A[e(539)][e(521)].extra[t];
                                });
                            },
                        },
                        {
                            key: v(619),
                            get: function () {
                                var A = v;
                                return this._UserBlocksData[A(521)][A(552)][A(478)];
                            },
                        },
                        {
                            key: v(599),
                            get: function () {
                                var A = v;
                                return this[A(539)][A(521)].main.cssEditor;
                            },
                        },
                        {
                            key: v(500),
                            get: function () {
                                var A = v;
                                return this[A(539)][A(521)][A(552)][A(592)];
                            },
                        },
                    ]),
                    A
                );
            })();
        },
        function (A, e, t) {
            "use strict";
            function n(A, e) {
                if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n);
                        }
                    }
                    return function (e, t, n) {
                        return t && A(e.prototype, t), n && A(e, n), e;
                    };
                })(),
                o = (function () {
                    function A() {
                        n(this, A);
                    }
                    return (
                        r(A, [
                            {
                                key: "run",
                                value: function (A, e) {
                                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        n = t.target || A.getWrapper(),
                                        r = A.CssComposer,
                                        o = r.getAll(),
                                        s = "",
                                        i = this.splitRules(this.matchedRules(n, o)),
                                        B = i.atRules;
                                    return (
                                        i.notAtRules.forEach(function (A) {
                                            return (s += A.toCSS());
                                        }),
                                        this.sortMediaObject(B).forEach(function (A) {
                                            var e = "",
                                                t = A.key;
                                            A.value.forEach(function (A) {
                                                var n = A.getDeclaration();
                                                A.get("singleAtRule") ? (s += t + "{" + n + "}") : (e += n);
                                            }),
                                                e && (s += t + "{" + e + "}");
                                        }),
                                        s
                                    );
                                },
                            },
                            {
                                key: "matchedRules",
                                value: function (A, e) {
                                    var t = this,
                                        n = A.getEl(),
                                        r = [];
                                    return (
                                        e.forEach(function (A) {
                                            try {
                                                A.selectorsToString()
                                                    .split(",")
                                                    .some(function (A) {
                                                        return n.matches(t.cleanSelector(A));
                                                    }) && r.push(A);
                                            } catch (A) {}
                                        }),
                                        A.components().forEach(function (A) {
                                            r = r.concat(t.matchedRules(A, e));
                                        }),
                                        (r = r.filter(function (A, e) {
                                            return r.indexOf(A) == e;
                                        }))
                                    );
                                },
                            },
                            {
                                key: "cleanSelector",
                                value: function (A) {
                                    return A.split(" ")
                                        .map(function (A) {
                                            return A.split(":")[0];
                                        })
                                        .join(" ");
                                },
                            },
                            {
                                key: "splitRules",
                                value: function (A) {
                                    var e = {},
                                        t = [];
                                    return (
                                        A.forEach(function (A) {
                                            var n = A.getAtRule();
                                            if (n) {
                                                var r = e[n];
                                                r ? r.push(A) : (e[n] = [A]);
                                            } else t.push(A);
                                        }),
                                        { atRules: e, notAtRules: t }
                                    );
                                },
                            },
                            {
                                key: "getQueryLength",
                                value: function (A) {
                                    var e = /(-?\d*\.?\d+)\w{0,}/.exec(A);
                                    return e ? parseFloat(e[1]) : Number.MAX_VALUE;
                                },
                            },
                            {
                                key: "sortMediaObject",
                                value: function () {
                                    var A = this,
                                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return Object.keys(e)
                                        .map(function (A) {
                                            return e[A];
                                        })
                                        .sort(function (e, t) {
                                            return A.getQueryLength(t.key) - A.getQueryLength(e.key);
                                        });
                                },
                            },
                        ]),
                        A
                    );
                })();
            e.default = o;
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.default =
                    "#select-tab{\n  margin-bottom: 10px !important;\n}\n\n\n.active-toolbar{\n  color:#00FF00;\n}\n\n.error-notice{\n    color: #ff4f4ffa\n}\n\n#PreviewImagesBase64{\n  max-width: 300px;\n}\n\n.CodeMirror-scroll{\n  font-size: 11px;\n}\n\n.tabs {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.tabs_delete, .tabs_save{\n  float: right;\n  margin-right: 10px;\n}\n\n.tabs_delete,\n.tabs_save,\n.tabs_link {\n  outline: none;\n  cursor: pointer;\n  text-align: center;\n  padding: 10px 15px;\n  border: none;\n  border-bottom: 2px solid transparent;\n  -webkit-transition: color 0.25s, border-color 0.25s;\n  transition: color 0.25s, border-color 0.25s;\n  background: transparent;\n}\n.tabs_link.active {\n  color: #dc659b;\n  border-color: #dc659b;\n}\n.tabs_delete{\n  color: #ffffff;\n  background: #2e3037;\n}\n.tabs_save {\n  color: #ffffff;\n  background: #dc659b;\n}\n.tabs_content {\n  display: none;\n  padding: 6px 12px;\n}\n.tabs_row {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n.tabs_column {\n  width: 50%;\n  padding: 10px;\n}\n.tabs_column__full {\n  width: 100%;\n}\n.tabs_column__full iframe {\n  width: 100%;\n  height: 300px;\n  background-color: #fff;\n}\n\n.form-group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: 10px 0;\n}\n.form-group label{\n  margin: 5px 0px;\n}\n.form-group input,\n.form-group textarea {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  padding: 5px 10px;\n  color: white;\n  font-size: 14px;\n  height: 32px;\n  line-height: normal;\n  -webkit-transition: border-color 0.25s;\n  transition: border-color 0.25s;\n}\n.form-group textarea {\n  min-height: 260px;\n}\n\n\n.input-box {\n border:1px solid rgba(0,0,0,.2);\n background-color:rgba(0,0,0,.1);\n border-radius:3px;\n padding:5px 10px;\n color:#fff;\n width:100%;\n font-size:14px;\n height:32px;\n line-height:normal;\n transition:border-color .25s\n}\n\n\n\n.panel-blocks {\n    height: 100%;\n    width: 275px;\n    overflow: hidden;\n    padding-top: 40px;\n    opacity: 0;\n    transform: translateX(-275px);\n    transition: opacity 0.25s, transform 0.25s;\n    z-index: 5000;\n}\n\n.panel-blocks.panel-blocks--open {\n    opacity: 1 !important;\n    transform: translateX(0);\n}\n\n.is-abs--fill, .is-abs--t-l {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.panel-blocks--open {\n    opacity: 1;\n    transform: translateX(0);\n}\n.panel-blocks {\n    height: 100%;\n    width: 275px;\n    z-index: 5;\n    overflow: hidden;\n    padding-top: 40px;\n    opacity: 0;\n    transform: translateX(-275px);\n    transition: opacity 0.25s, transform 0.25s;\n}\n.is-abs--fill, .is-abs--t-l {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n\n\n.grid--direction-column > .grid-item, .grid--direction-column-reverse > .grid-item {\n    flex-basis: 0;\n}\n\n.grid--direction-column > .grid-item, .grid--direction-column-reverse > .grid-item {\n    flex-basis: 0;\n}\n\n.grid-item--behavior-fixed {\n    flex: 0 1 auto;\n    flex-basis: auto;\n}\n\n/* Select */\n#input-g0jy5fh11c {\n    margin-bottom: 10px;\n    margin-top: 10px;\n}\n\n#gjs.right-bar {\n    width: 100% !important;\n    left: 0;\n}\n\n.is-abs--t-l {\n    position: absolute;\n\n}\n.panel-blocks,  .panel-blocks.panel-blocks--open{\n    padding-top: 0;   top: 40px;\n    font-family: Helvetica, sans-serif;\n}\n.panel-blocks.panel-blocks--open{\n    height: 100%;\n    background-color: #463a3c;\n}\n\n.fa-th-large.gjs-pn-active, .fa-th-large.gjs-pn-active::before {\n    display: none;\n}\n\n\n.panel-blocks {\n  overflow-y: scroll;\n}\n\n.gpd-settings-panel .gpd-settings-panel__option:hover {\n    background-color: rgba(0,0,0,.2);\n}\n\n.gpd-settings-panel .gpd-settings-panel__option {\n    padding: 3px 6px;\n    cursor: pointer;\n    transition: background-color .25s;\n    white-space: nowrap;\n}\n\n\n\n\n.grid {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin: 0;\n    padding: 0;\n  }\n  .grid--no-wrap {\n    flex-wrap: nowrap;\n  }\n  .grid--justify-flex-start {\n    justify-content: flex-start;\n  }\n  .grid--justify-flex-end {\n    justify-content: flex-end;\n  }\n  .grid--justify-center {\n    justify-content: center;\n  }\n  .grid--justify-space-between {\n    justify-content: space-between;\n  }\n  .grid--justify-space-around {\n    justify-content: space-around;\n  }\n  .grid--align-stretch {\n    align-items: stretch;\n  }\n  .grid--align-flex-start {\n    align-items: flex-start;\n  }\n  .grid--align-flex-end {\n    align-items: flex-end;\n  }\n  .grid--align-center {\n    align-items: center;\n  }\n  .grid--align-baseline {\n    align-items: baseline;\n  }\n  .grid--content-stretch {\n    align-content: stretch;\n  }\n  .grid--content-flex-start {\n    align-content: flex-start;\n  }\n  .grid--content-flex-end {\n    align-content: flex-end;\n  }\n  .grid--content-center {\n    align-content: center;\n  }\n  .grid--content-space-between {\n    align-content: space-between;\n  }\n  .grid--content-space-around {\n    align-content: space-around;\n  }\n  .grid--direction-row {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .grid--direction-row-reverse {\n    flex-direction: row-reverse;\n    flex-wrap: wrap;\n  }\n  .grid--direction-column {\n    flex-direction: column;\n    flex-wrap: nowrap;\n  }\n  .grid--direction-column-reverse {\n    flex-direction: column-reverse;\n    flex-wrap: nowrap;\n  }\n  .grid--direction-column > .grid-item, .grid--direction-column-reverse > .grid-item {\n    flex-basis: 0;\n  }\n  .grid--gutters-sm, .grid--gutters-s {\n    margin-left: -3px;\n  }\n  .grid--gutters-sm > .grid-item, .grid--gutters-s > .grid-item {\n    padding-left: 3px;\n  }\n  .grid--gutters-md, .grid--gutters-m {\n    margin-left: -5px;\n  }\n  .grid--gutters-md > .grid-item, .grid--gutters-m > .grid-item {\n    padding-left: 5px;\n  }\n  .grid--gutters-lg, .grid--gutters-l {\n    margin-left: -10px;\n  }\n  .grid--gutters-lg > .grid-item, .grid--gutters-l > .grid-item {\n    padding-left: 10px;\n  }\n  .grid--gutters-xlg, .grid--gutters-xl {\n    margin-left: -20px;\n  }\n  .grid--gutters-xlg > .grid-item, .grid--gutters-xl > .grid-item {\n    padding-left: 20px;\n  }\n  .grid--gutters-x2lg, .grid--gutters-x2l {\n    margin-left: -30px;\n  }\n  .grid--gutters-x2lg > .grid-item, .grid--gutters-x2l > .grid-item {\n    padding-left: 30px;\n  }\n  .grid--reverse {\n    flex-direction: row-reverse;\n  }\n  .grid--equal-height > .grid-item {\n    display: flex;\n  }\n  .grid--equal-height > .grid-item > * {\n    flex: 1;\n  }\n\n\n\n.flexbox {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0;\n    margin-bottom: 0px;\n    margin-left: 0px;\n    padding: 0;\n}\n\n.first_tab > div{\n    justify-content: center;\n    align-items: center;\n}\n\n.modal__overlay {\n    background-color: rgba(0,0,0,.1);\n    z-index: 55555;\n    width: 100%; height: 100%;\n    overflow: hidden;\n}\n\n.modal {\n    width: 850px;\n    height: 600px;\n    overflow: hidden;\n    padding: 10px;\n    position: absolute;\n    z-index: 44444;\n}\n\n.column-half {\n    width: 49% !important;\n}\n\n.column-half  textarea, .modal  .gjs-field{\n  width: 100%;\n  display: block;\n  padding: 20px;\n  height: 300px;\n  background-color: rgba(0,0,0,.1);\n  border-radius: 10px;\n  color: #fff;\n}\n\n.column-half:first-child {\n    margin-right: 20px;\n}\n\n.tab {\n    display: none;\n    opacity: 0;\n}\n\n.tab1.active {\n    opacity: 1;\n}\n\n.modal-popup {\n\n}\n\n/* body, body > *{\n  background: brown !important;\n} */\n\n\n.tabs__input:checked + label {\n  color: #dc659b;\n  border-color: #dc659b;\n}\n.tabs__input:checked + label {\n  color: #dc659b;\n  border-color: #dc659b;\n}\n.tabs__tab {\n  width: 100%;\n  text-align: center;\n  display: inline-block;\n  margin: 0 0 -3px 0;\n  padding: 10px 15px;\n  border: none;\n      border-top-color: currentcolor;\n      border-right-color: currentcolor;\n      border-bottom-color: currentcolor;\n      border-bottom-style: none;\n      border-bottom-width: medium;\n      border-left-color: currentcolor;\n  border-bottom: 2px solid transparent;\n      border-bottom-color: transparent;\n  transition: color 0.25s, border-color 0.25s;\n}\n.tabs__tab {\n  width: 100%;\n  text-align: center;\n  display: inline-block;\n  margin: 0 0 -3px 0;\n  padding: 10px 15px;\n  border: none;\n  border-bottom: 2px solid transparent;\n  transition: color 0.25s, border-color 0.25s;\n}\n.is-click, .is-clickable {\n  cursor: pointer;\n}\nlabel {\n  font-weight: 300;\n}\n\n/* Form styles*/\n\n.gjs-two-color {\n  color: hsla(0,0%,100%,.55);\n}\n.gjs-mdl-dialog {\n  text-shadow: -1px -1px 0 rgba(0,0,0,0.05);\n  font-weight: lighter;\n}\n\n.tp-size--m {\n    font-size: 1rem;\n}\n\n.tabs__tabs {\n  padding: 0 3px;\n}\n\n.grid-item--behavior-fixed {\n  flex: 0 1 auto;\n}\n.grid-item {\n  flex: 1 1 0%;\n}\n.grid-item--behavior-fixed {\n  flex: 0 1 auto;\n}\n.grid-item {\n  flex: 1 1 0%;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\n.tp-size--m {\n  font-size: 1rem;\n}\n.tp-size--m {\n  font-size: 1rem;\n}\n.gjs-two-color {\n  color: hsla(0,0%,100%,.55);\n}\n.gjs-mdl-dialog {\n  text-shadow: -1px -1px 0 rgba(0,0,0,0.05);\n  font-weight: lighter;\n}\n.gjs-two-color {\n  color: #ddd;\n}\n.gjs-mdl-container {\n  font-family: Helvetica,sans-serif;\n}\n\n.tabs__input:checked + label {\n  color: #dc659b;\n  border-color: #dc659b;\n}\n.tabs__input:checked + label {\n  color: #dc659b;\n  border-color: #dc659b;\n}\n.tabs__tab {\n  width: 100%;\n  text-align: center;\n  display: inline-block;\n  margin: 0 0 -3px 0;\n  padding: 10px 15px;\n  border: none;\n      border-top-color: currentcolor;\n      border-right-color: currentcolor;\n      border-bottom-color: currentcolor;\n      border-bottom-style: none;\n      border-bottom-width: medium;\n      border-left-color: currentcolor;\n  border-bottom: 2px solid transparent;\n      border-bottom-color: transparent;\n  transition: color 0.25s, border-color 0.25s;\n}\n.tabs__tab {\n  width: 100%;\n  text-align: center;\n  display: inline-block;\n  margin: 0 0 -3px 0;\n  padding: 10px 15px;\n  border: none;\n  border-bottom: 2px solid transparent;\n  transition: color 0.25s, border-color 0.25s;\n}\n.is-click, .is-clickable {\n  cursor: pointer;\n}\nlabel {\n  font-weight: 300;\n}\n/* Inputs */\n.input-box {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  padding: 5px 10px;\n  color: white;\n  width: 100%;\n  font-size: 14px;\n  height: 32px;\n  line-height: normal;\n  transition: border-color 0.25s;\n}\n.input-box {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  padding: 5px 10px;\n  color: white;\n  width: 100%;\n  font-size: 14px;\n  height: 32px;\n  line-height: normal;\n  transition: border-color 0.25s;\n}\n.input-box {\n  border: 1px solid rgba(0,0,0,.2);\n  background-color: rgba(0,0,0,.1);\n  border-radius: 3px;\n  padding: 5px 10px;\n  color: #fff;\n  width: 100%;\n  font-size: 14px;\n  height: 32px;\n  line-height: normal;\n  transition: border-color .25s;\n}\ninput {\n  line-height: normal;\n}\nbutton, input, optgroup, select, textarea {\n  color: inherit;\n  font: inherit;\n      font-size: inherit;\n      line-height: inherit;\n  margin: 0;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\n.tp-size--m {\n  font-size: 1rem;\n}\n.tp-size--m {\n  font-size: 1rem;\n}\n.gjs-two-color {\n  color: hsla(0,0%,100%,.55);\n}\n.gjs-mdl-dialog {\n  text-shadow: -1px -1px 0 rgba(0,0,0,0.05);\n  font-weight: lighter;\n}\n\n*, ::after, ::before {\n  box-sizing: border-box;\n}\n.tp-size--m {\n  font-size: 1rem;\n}\n.tp-size--m {\n  font-size: 1rem;\n}\n.gjs-two-color {\n  color: hsla(0,0%,100%,.55);\n}\n.gjs-mdl-dialog {\n  text-shadow: -1px -1px 0 rgba(0,0,0,0.05);\n  font-weight: lighter;\n}\n.tabs__input {\n  display: none;\n}\n.grid-item--push-left {\n  margin-left: auto;\n}\n.grid-item--behavior-fixed {\n  flex: 0 1 auto;\n}\n.grid-item {\n  flex: 1 1 0%;\n}\n.grid-item--push-left {\n  margin-left: auto;\n}\n.grid-item--behavior-fixed {\n  flex: 0 1 auto;\n}\n.grid-item {\n  flex: 1 1 0%;\n}\n\n*, ::after, ::before {\n  box-sizing: border-box;\n}\n.tp-size--m {\n  font-size: 1rem;\n}\n\n.grid-item--push-left {\n  margin-left: auto;\n}\n.panel-custom-block__tab-c {\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.is-inactive, .is-no-select {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.form-checkbox, .form-radio, .form-switch {\n  border: 1px solid rgba(0,0,0,.2);\n  background-color: rgba(0,0,0,.15);\n  cursor: pointer;\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n  line-height: 16px;\n  left: 0;\n  outline: none;\n  padding: 0;\n  vertical-align: middle;\n  transition: all .2s ease;\n  border-radius: 2px;\n  position: relative;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\n\n/*Button Save*/\n\n#modal-popup   div, #modal-popup input, #modal-popup  label ,\n.tabs__tab tabs__tab-main{\n  font-family: Roboto,system-ui,Helvetica,Arial,sans-serif !important;\n  font-size: 16px;\n}\n\n.is-valign--middle {\n  vertical-align: middle;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\n.call-btn-dash {\n  color: #fff;\n  letter-spacing: 0.1rem;\n  cursor: pointer;\n  line-height: normal;\n}\n.call-btn-dash {\n  color: #fff;\n  letter-spacing: 0.1rem;\n  cursor: pointer;\n  line-height: normal;\n}\n.call-btn-dash {\n  border: none;\n  color: #fff;\n  border-radius: 3px;\n  padding: 0;\n  letter-spacing: 0.1rem;\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  background-color: #dc659b !important;\n  overflow: hidden;\n  line-height: normal;\n  padding: 12px;\n  margin: 10px 0px;\n}\n.tp-size--m {\n  font-size: 1rem;\n}\n.gjs-mdl-container {\n  font-family: Helvetica,sans-serif !important;\n}\n.call-btn-dash {\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: inherit;\n}\n\n .call-btn-layer {\n  padding: 8px 20px;\n  height: 40px !important;\n  display: block;\n }\n\n #gjs .gjs-one-bg {\n  background-color: #463a3c !important;\n}\n\n#gjs-mdl-c input[type='text'] {\n  box-shadow: none;\n  outline: none;;\n  padding: 5px;\n  background-color: #463a3c;\n  color: #fff;\n}\n\n.tab-manager__tab-bodies .body {\n  position : relative;\n}\n\n#add-custom-block.call-btn-dash {\n  margin-left: 5px;\n  margin-bottom: 10px;\n  bottom: 0;\n  padding: 10px 5px !important;\n  width: 95%;\n  z-index: 999;\n\n}\n\n.gjs-block-label img{\n  max-width: 100px;\n}\n\n.modal-delete-footer {\n  display: flex;\n}\n\n.modal-delete-footer button {\n  outline: none;\n  cursor: pointer;\n  text-align: center;\n  padding: 10px 15px;\n  border: none;\n  border-bottom: 2px solid transparent;\n  -webkit-transition: color 0.25s, border-color 0.25s;\n  transition: color 0.25s, border-color 0.25s;\n  color: #ffffff;\n  background: #dc659b;\n  margin: 10px\n}\n\n.modal-delete {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-delete-body {\n  margin: 20px auto;\n}\n\n.modal-delete-footer {\n  margin: auto;\n}\n\n.hide {\n  display: none;\n}\n\n.hide-preview {\n  position: absolute;\n  left: -100000px;\n  top: 0;\n  height: 10px;\n}");
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.default =
                    '<div class="tabs">\n  <button class="tabs_link" data-tab-id="tab-1" id="main-tab-btn">\n    Main\n  </button>\n  <button class="tabs_link" data-tab-id="tab-2" id="tab-2-btn">\n    Extra\n  </button>\n  <button class="tabs_save" id="save-block-btn">\n    Save\n  </button>\n  <button class="tabs_delete" id="delete-btn" style="display: none">Delete</button>\n</div>\n<div id="tab-1" class="tabs_content">\n  <div class="tabs_row">\n    <div class="tabs_column">\n      <div class="form-group validate">\n        <label for="block-name">\n          Name\n        </label>\n        <input type="text" name="name" id="block-name" placeholder="eg. Button">\n        <div class="error-notice" style="display: none">Please enter block name</div>\n      </div>\n      <div class="form-group" id="html-editor-group-container">\n        <label>\n          HTML\n        </label>\n        <div class="code-viewer-container">\n          <textarea name="html" id="html-code"></textarea>\n        </div>\n      </div>\n    </div>\n    <div class="tabs_column">\n      <div class="form-group validate">\n        <label for="cat-value">\n          Category\n        </label>\n        <input type="text" name="category" id="cat-value" placeholder="eg. Buttons">\n        <div class="error-notice" style="display: none">Please enter category</div>\n      </div>\n      <div class="form-group"  id="css-editor-group-container">\n        <label>\n          CSS\n        </label>\n        <div class="code-viewer-container">\n          <textarea name="css" id="css-style"></textarea>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="tabs_row" id="main-preview-container">\n    <div class="tabs_column tabs_column__full">\n      <iframe id="iframe-editor" frameborder="0"></iframe>\n    </div>\n  </div>\n</div>\n<div id="tab-2" class="tabs_content">\n  <div class="tabs_row">\n    <div class="tabs_column" id="description-container">\n      <div class="form-group">\n        <label>\n          Description\n        </label>\n        <textarea name="description" id="description-input"></textarea>\n      </div>\n    </div>\n    <div class="tabs_column" id="preview-container">\n      <div class="form-group">\n        <label>\n          Preview\n        </label>\n        <div id="imgBlock">\n          <img id="PreviewImagesBase64"/>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
        },
        function (A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.default =
                    '<div class="modal-delete">\n  <div class="modal-delete-body">\n    Do you want to delete block?\n  </div>\n  <div class="modal-delete-footer">\n    <button id="delete-btn">\n      Delete\n    </button>\n    <button id="cansel-btn">\n      Cancel\n    </button>\n  </div>\n</div>');
        },
        function (A, e, t) {
            /*!
             * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
             * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
             * Released under MIT License
             */
            !(function (e, t) {
                A.exports = t();
            })(0, function () {
                "use strict";
                function A(A, e) {
                    function t() {
                        this.constructor = A;
                    }
                    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                    s(A, e), (A.prototype = null === e ? Object.create(e) : ((t.prototype = e.prototype), new t()));
                }
                function e(A, e, t, n) {
                    function r(A) {
                        return A instanceof t
                            ? A
                            : new t(function (e) {
                                  e(A);
                              });
                    }
                    return new (t || (t = Promise))(function (t, o) {
                        function s(A) {
                            try {
                                B(n.next(A));
                            } catch (A) {
                                o(A);
                            }
                        }
                        function i(A) {
                            try {
                                B(n.throw(A));
                            } catch (A) {
                                o(A);
                            }
                        }
                        function B(A) {
                            A.done ? t(A.value) : r(A.value).then(s, i);
                        }
                        B((n = n.apply(A, e || [])).next());
                    });
                }
                function t(A, e) {
                    function t(A) {
                        return function (e) {
                            return n([A, e]);
                        };
                    }
                    function n(t) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; B; )
                            try {
                                if (((r = 1), o && (s = 2 & t[0] ? o.return : t[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, t[1])).done)) return s;
                                switch (((o = 0), s && (t = [2 & t[0], s.value]), t[0])) {
                                    case 0:
                                    case 1:
                                        s = t;
                                        break;
                                    case 4:
                                        return B.label++, { value: t[1], done: !1 };
                                    case 5:
                                        B.label++, (o = t[1]), (t = [0]);
                                        continue;
                                    case 7:
                                        (t = B.ops.pop()), B.trys.pop();
                                        continue;
                                    default:
                                        if (((s = B.trys), !(s = s.length > 0 && s[s.length - 1]) && (6 === t[0] || 2 === t[0]))) {
                                            B = 0;
                                            continue;
                                        }
                                        if (3 === t[0] && (!s || (t[1] > s[0] && t[1] < s[3]))) {
                                            B.label = t[1];
                                            break;
                                        }
                                        if (6 === t[0] && B.label < s[1]) {
                                            (B.label = s[1]), (s = t);
                                            break;
                                        }
                                        if (s && B.label < s[2]) {
                                            (B.label = s[2]), B.ops.push(t);
                                            break;
                                        }
                                        s[2] && B.ops.pop(), B.trys.pop();
                                        continue;
                                }
                                t = e.call(A, B);
                            } catch (A) {
                                (t = [6, A]), (o = 0);
                            } finally {
                                r = s = 0;
                            }
                        if (5 & t[0]) throw t[1];
                        return { value: t[0] ? t[1] : void 0, done: !0 };
                    }
                    var r,
                        o,
                        s,
                        i,
                        B = {
                            label: 0,
                            sent: function () {
                                if (1 & s[0]) throw s[1];
                                return s[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (i = { next: t(0), throw: t(1), return: t(2) }),
                        "function" == typeof Symbol &&
                            (i[Symbol.iterator] = function () {
                                return this;
                            }),
                        i
                    );
                }
                function n(A, e, t) {
                    if (t || 2 === arguments.length) for (var n, r = 0, o = e.length; r < o; r++) (!n && r in e) || (n || (n = Array.prototype.slice.call(e, 0, r)), (n[r] = e[r]));
                    return A.concat(n || e);
                }
                function r(A, e, t) {
                    return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 0.5 ? e : t < 2 / 3 ? 6 * (e - A) * (2 / 3 - t) + A : A;
                }
                function o(A) {
                    return !((20 === A.type && "none" === A.value) || (18 === A.type && !ye[A.name]));
                }
                for (
                    var s = function (A, e) {
                            return (s =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (A, e) {
                                        A.__proto__ = e;
                                    }) ||
                                function (A, e) {
                                    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (A[t] = e[t]);
                                })(A, e);
                        },
                        i = function () {
                            return (
                                (i =
                                    Object.assign ||
                                    function (A) {
                                        for (var e, t = 1, n = arguments.length; t < n; t++) {
                                            e = arguments[t];
                                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (A[r] = e[r]);
                                        }
                                        return A;
                                    }),
                                i.apply(this, arguments)
                            );
                        },
                        B = (function () {
                            function A(A, e, t, n) {
                                (this.left = A), (this.top = e), (this.width = t), (this.height = n);
                            }
                            return (
                                (A.prototype.add = function (e, t, n, r) {
                                    return new A(this.left + e, this.top + t, this.width + n, this.height + r);
                                }),
                                (A.fromClientRect = function (e, t) {
                                    return new A(t.left + e.windowBounds.left, t.top + e.windowBounds.top, t.width, t.height);
                                }),
                                (A.fromDOMRectList = function (e, t) {
                                    var n = Array.from(t).find(function (A) {
                                        return 0 !== A.width;
                                    });
                                    return n ? new A(n.left + e.windowBounds.left, n.top + e.windowBounds.top, n.width, n.height) : A.EMPTY;
                                }),
                                (A.EMPTY = new A(0, 0, 0, 0)),
                                A
                            );
                        })(),
                        a = function (A, e) {
                            return B.fromClientRect(A, e.getBoundingClientRect());
                        },
                        c = function (A) {
                            var e = A.body,
                                t = A.documentElement;
                            if (!e || !t) throw new Error("Unable to get document size");
                            var n = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)),
                                r = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
                            return new B(0, 0, n, r);
                        },
                        l = function (A) {
                            for (var e = [], t = 0, n = A.length; t < n; ) {
                                var r = A.charCodeAt(t++);
                                if (r >= 55296 && r <= 56319 && t < n) {
                                    var o = A.charCodeAt(t++);
                                    56320 == (64512 & o) ? e.push(((1023 & r) << 10) + (1023 & o) + 65536) : (e.push(r), t--);
                                } else e.push(r);
                            }
                            return e;
                        },
                        g = function () {
                            for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                            if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
                            var t = A.length;
                            if (!t) return "";
                            for (var n = [], r = -1, o = ""; ++r < t; ) {
                                var s = A[r];
                                s <= 65535 ? n.push(s) : ((s -= 65536), n.push(55296 + (s >> 10), (s % 1024) + 56320)), (r + 1 === t || n.length > 16384) && ((o += String.fromCharCode.apply(String, n)), (n.length = 0));
                            }
                            return o;
                        },
                        u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        Q = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
                        w = 0;
                    w < u.length;
                    w++
                )
                    Q[u.charCodeAt(w)] = w;
                for (var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", C = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), h = 0; h < d.length; h++) C[d.charCodeAt(h)] = h;
                for (
                    var U = function (A) {
                            var e,
                                t,
                                n,
                                r,
                                o,
                                s = 0.75 * A.length,
                                i = A.length,
                                B = 0;
                            "=" === A[A.length - 1] && (s--, "=" === A[A.length - 2] && s--);
                            var a = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(s) : new Array(s),
                                c = Array.isArray(a) ? a : new Uint8Array(a);
                            for (e = 0; e < i; e += 4)
                                (t = C[A.charCodeAt(e)]),
                                    (n = C[A.charCodeAt(e + 1)]),
                                    (r = C[A.charCodeAt(e + 2)]),
                                    (o = C[A.charCodeAt(e + 3)]),
                                    (c[B++] = (t << 2) | (n >> 4)),
                                    (c[B++] = ((15 & n) << 4) | (r >> 2)),
                                    (c[B++] = ((3 & r) << 6) | (63 & o));
                            return a;
                        },
                        F = function (A) {
                            for (var e = A.length, t = [], n = 0; n < e; n += 2) t.push((A[n + 1] << 8) | A[n]);
                            return t;
                        },
                        f = function (A) {
                            for (var e = A.length, t = [], n = 0; n < e; n += 4) t.push((A[n + 3] << 24) | (A[n + 2] << 16) | (A[n + 1] << 8) | A[n]);
                            return t;
                        },
                        p = function (A, e, t) {
                            return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
                        },
                        H = function (A, e, t) {
                            return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
                        },
                        y = (function () {
                            function A(A, e, t, n, r, o) {
                                (this.initialValue = A), (this.errorValue = e), (this.highStart = t), (this.highValueIndex = n), (this.index = r), (this.data = o);
                            }
                            return (
                                (A.prototype.get = function (A) {
                                    var e;
                                    if (A >= 0) {
                                        if (A < 55296 || (A > 56319 && A <= 65535)) return (e = this.index[A >> 5]), (e = (e << 2) + (31 & A)), this.data[e];
                                        if (A <= 65535) return (e = this.index[2048 + ((A - 55296) >> 5)]), (e = (e << 2) + (31 & A)), this.data[e];
                                        if (A < this.highStart) return (e = 2080 + (A >> 11)), (e = this.index[e]), (e += (A >> 5) & 63), (e = this.index[e]), (e = (e << 2) + (31 & A)), this.data[e];
                                        if (A <= 1114111) return this.data[this.highValueIndex];
                                    }
                                    return this.errorValue;
                                }),
                                A
                            );
                        })(),
                        E = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        m = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
                        I = 0;
                    I < E.length;
                    I++
                )
                    m[E.charCodeAt(I)] = I;
                var b,
                    v = [9001, 65288],
                    K = "!",
                    L = (function (A, e) {
                        var t = U(A),
                            n = Array.isArray(t) ? f(t) : new Uint32Array(t),
                            r = Array.isArray(t) ? F(t) : new Uint16Array(t),
                            o = p(r, 12, n[4] / 2),
                            s = 2 === n[5] ? p(r, (24 + n[4]) / 2) : H(n, Math.ceil((24 + n[4]) / 4));
                        return new y(n[0], n[1], n[2], n[3], o, s);
                    })(
                        "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="
                    ),
                    x = [30, 36],
                    D = [1, 2, 3, 5],
                    k = [10, 8],
                    M = [27, 26],
                    S = D.concat(k),
                    T = [38, 39, 40, 34, 35],
                    O = [15, 13],
                    V = function (A, e) {
                        void 0 === e && (e = "strict");
                        var t = [],
                            n = [],
                            r = [];
                        return (
                            A.forEach(function (A, o) {
                                var s = L.get(A);
                                if ((s > 50 ? (r.push(!0), (s -= 50)) : r.push(!1), -1 !== ["normal", "auto", "loose"].indexOf(e) && -1 !== [8208, 8211, 12316, 12448].indexOf(A))) return n.push(o), t.push(16);
                                if (4 === s || 11 === s) {
                                    if (0 === o) return n.push(o), t.push(30);
                                    var i = t[o - 1];
                                    return -1 === S.indexOf(i) ? (n.push(n[o - 1]), t.push(i)) : (n.push(o), t.push(30));
                                }
                                return (
                                    n.push(o),
                                    31 === s
                                        ? t.push("strict" === e ? 21 : 37)
                                        : 42 === s
                                        ? t.push(30)
                                        : 29 === s
                                        ? t.push(30)
                                        : 43 === s
                                        ? (A >= 131072 && A <= 196605) || (A >= 196608 && A <= 262141)
                                            ? t.push(37)
                                            : t.push(30)
                                        : void t.push(s)
                                );
                            }),
                            [n, t, r]
                        );
                    },
                    G = function (A, e, t, n) {
                        var r = n[t];
                        if (Array.isArray(A) ? -1 !== A.indexOf(r) : A === r)
                            for (var o = t; o <= n.length; ) {
                                o++;
                                var s = n[o];
                                if (s === e) return !0;
                                if (10 !== s) break;
                            }
                        if (10 === r)
                            for (var o = t; o > 0; ) {
                                o--;
                                var i = n[o];
                                if (Array.isArray(A) ? -1 !== A.indexOf(i) : A === i)
                                    for (var B = t; B <= n.length; ) {
                                        B++;
                                        var s = n[B];
                                        if (s === e) return !0;
                                        if (10 !== s) break;
                                    }
                                if (10 !== i) break;
                            }
                        return !1;
                    },
                    R = function (A, e) {
                        for (var t = A; t >= 0; ) {
                            var n = e[t];
                            if (10 !== n) return n;
                            t--;
                        }
                        return 0;
                    },
                    P = function (A, e, t, n, r) {
                        if (0 === t[n]) return "×";
                        var o = n - 1;
                        if (Array.isArray(r) && !0 === r[o]) return "×";
                        var s = o - 1,
                            i = o + 1,
                            B = e[o],
                            a = s >= 0 ? e[s] : 0,
                            c = e[i];
                        if (2 === B && 3 === c) return "×";
                        if (-1 !== D.indexOf(B)) return K;
                        if (-1 !== D.indexOf(c)) return "×";
                        if (-1 !== k.indexOf(c)) return "×";
                        if (8 === R(o, e)) return "÷";
                        if (11 === L.get(A[o])) return "×";
                        if ((32 === B || 33 === B) && 11 === L.get(A[i])) return "×";
                        if (7 === B || 7 === c) return "×";
                        if (9 === B) return "×";
                        if (-1 === [10, 13, 15].indexOf(B) && 9 === c) return "×";
                        if (-1 !== [17, 18, 19, 24, 28].indexOf(c)) return "×";
                        if (22 === R(o, e)) return "×";
                        if (G(23, 22, o, e)) return "×";
                        if (G([17, 18], 21, o, e)) return "×";
                        if (G(12, 12, o, e)) return "×";
                        if (10 === B) return "÷";
                        if (23 === B || 23 === c) return "×";
                        if (16 === c || 16 === B) return "÷";
                        if (-1 !== [13, 15, 21].indexOf(c) || 14 === B) return "×";
                        if (36 === a && -1 !== O.indexOf(B)) return "×";
                        if (28 === B && 36 === c) return "×";
                        if (20 === c) return "×";
                        if ((-1 !== x.indexOf(c) && 25 === B) || (-1 !== x.indexOf(B) && 25 === c)) return "×";
                        if ((27 === B && -1 !== [37, 32, 33].indexOf(c)) || (-1 !== [37, 32, 33].indexOf(B) && 26 === c)) return "×";
                        if ((-1 !== x.indexOf(B) && -1 !== M.indexOf(c)) || (-1 !== M.indexOf(B) && -1 !== x.indexOf(c))) return "×";
                        if ((-1 !== [27, 26].indexOf(B) && (25 === c || (-1 !== [22, 15].indexOf(c) && 25 === e[i + 1]))) || (-1 !== [22, 15].indexOf(B) && 25 === c) || (25 === B && -1 !== [25, 28, 24].indexOf(c))) return "×";
                        if (-1 !== [25, 28, 24, 17, 18].indexOf(c))
                            for (var l = o; l >= 0; ) {
                                var g = e[l];
                                if (25 === g) return "×";
                                if (-1 === [28, 24].indexOf(g)) break;
                                l--;
                            }
                        if (-1 !== [27, 26].indexOf(c))
                            for (var l = -1 !== [17, 18].indexOf(B) ? s : o; l >= 0; ) {
                                var g = e[l];
                                if (25 === g) return "×";
                                if (-1 === [28, 24].indexOf(g)) break;
                                l--;
                            }
                        if ((38 === B && -1 !== [38, 39, 34, 35].indexOf(c)) || (-1 !== [39, 34].indexOf(B) && -1 !== [39, 40].indexOf(c)) || (-1 !== [40, 35].indexOf(B) && 40 === c)) return "×";
                        if ((-1 !== T.indexOf(B) && -1 !== [20, 26].indexOf(c)) || (-1 !== T.indexOf(c) && 27 === B)) return "×";
                        if (-1 !== x.indexOf(B) && -1 !== x.indexOf(c)) return "×";
                        if (24 === B && -1 !== x.indexOf(c)) return "×";
                        if ((-1 !== x.concat(25).indexOf(B) && 22 === c && -1 === v.indexOf(A[i])) || (-1 !== x.concat(25).indexOf(c) && 18 === B)) return "×";
                        if (41 === B && 41 === c) {
                            for (var u = t[o], Q = 1; u > 0 && (u--, 41 === e[u]); ) Q++;
                            if (Q % 2 != 0) return "×";
                        }
                        return 32 === B && 33 === c ? "×" : "÷";
                    },
                    N = function (A, e) {
                        e || (e = { lineBreak: "normal", wordBreak: "normal" });
                        var t = V(A, e.lineBreak),
                            n = t[0],
                            r = t[1],
                            o = t[2];
                        return (
                            ("break-all" !== e.wordBreak && "break-word" !== e.wordBreak) ||
                                (r = r.map(function (A) {
                                    return -1 !== [25, 30, 42].indexOf(A) ? 37 : A;
                                })),
                            [
                                n,
                                r,
                                "keep-all" === e.wordBreak
                                    ? o.map(function (e, t) {
                                          return e && A[t] >= 19968 && A[t] <= 40959;
                                      })
                                    : void 0,
                            ]
                        );
                    },
                    X = (function () {
                        function A(A, e, t, n) {
                            (this.codePoints = A), (this.required = e === K), (this.start = t), (this.end = n);
                        }
                        return (
                            (A.prototype.slice = function () {
                                return g.apply(void 0, this.codePoints.slice(this.start, this.end));
                            }),
                            A
                        );
                    })(),
                    J = function (A, e) {
                        var t = l(A),
                            n = N(t, e),
                            r = n[0],
                            o = n[1],
                            s = n[2],
                            i = t.length,
                            B = 0,
                            a = 0;
                        return {
                            next: function () {
                                if (a >= i) return { done: !0, value: null };
                                for (var A = "×"; a < i && "×" === (A = P(t, o, r, ++a, s)); );
                                if ("×" !== A || a === i) {
                                    var e = new X(t, A, B, a);
                                    return (B = a), { value: e, done: !1 };
                                }
                                return { done: !0, value: null };
                            },
                        };
                    },
                    Y = function (A) {
                        return A >= 48 && A <= 57;
                    },
                    W = function (A) {
                        return A >= 55296 && A <= 57343;
                    },
                    _ = function (A) {
                        return Y(A) || (A >= 65 && A <= 70) || (A >= 97 && A <= 102);
                    },
                    Z = function (A) {
                        return A >= 97 && A <= 122;
                    },
                    j = function (A) {
                        return A >= 65 && A <= 90;
                    },
                    q = function (A) {
                        return Z(A) || j(A);
                    },
                    z = function (A) {
                        return A >= 128;
                    },
                    $ = function (A) {
                        return 10 === A || 9 === A || 32 === A;
                    },
                    AA = function (A) {
                        return q(A) || z(A) || 95 === A;
                    },
                    eA = function (A) {
                        return AA(A) || Y(A) || 45 === A;
                    },
                    tA = function (A) {
                        return (A >= 0 && A <= 8) || 11 === A || (A >= 14 && A <= 31) || 127 === A;
                    },
                    nA = function (A, e) {
                        return 92 === A && 10 !== e;
                    },
                    rA = function (A, e, t) {
                        return 45 === A ? AA(e) || nA(e, t) : !!AA(A) || !(92 !== A || !nA(A, e));
                    },
                    oA = function (A, e, t) {
                        return 43 === A || 45 === A ? !!Y(e) || (46 === e && Y(t)) : Y(46 === A ? e : A);
                    },
                    sA = function (A) {
                        var e = 0,
                            t = 1;
                        (43 !== A[e] && 45 !== A[e]) || (45 === A[e] && (t = -1), e++);
                        for (var n = []; Y(A[e]); ) n.push(A[e++]);
                        var r = n.length ? parseInt(g.apply(void 0, n), 10) : 0;
                        46 === A[e] && e++;
                        for (var o = []; Y(A[e]); ) o.push(A[e++]);
                        var s = o.length,
                            i = s ? parseInt(g.apply(void 0, o), 10) : 0;
                        (69 !== A[e] && 101 !== A[e]) || e++;
                        var B = 1;
                        (43 !== A[e] && 45 !== A[e]) || (45 === A[e] && (B = -1), e++);
                        for (var a = []; Y(A[e]); ) a.push(A[e++]);
                        var c = a.length ? parseInt(g.apply(void 0, a), 10) : 0;
                        return t * (r + i * Math.pow(10, -s)) * Math.pow(10, B * c);
                    },
                    iA = { type: 2 },
                    BA = { type: 3 },
                    aA = { type: 4 },
                    cA = { type: 13 },
                    lA = { type: 8 },
                    gA = { type: 21 },
                    uA = { type: 9 },
                    QA = { type: 10 },
                    wA = { type: 11 },
                    dA = { type: 12 },
                    CA = { type: 14 },
                    hA = { type: 23 },
                    UA = { type: 1 },
                    FA = { type: 25 },
                    fA = { type: 24 },
                    pA = { type: 26 },
                    HA = { type: 27 },
                    yA = { type: 28 },
                    EA = { type: 29 },
                    mA = { type: 31 },
                    IA = { type: 32 },
                    bA = (function () {
                        function A() {
                            this._value = [];
                        }
                        return (
                            (A.prototype.write = function (A) {
                                this._value = this._value.concat(l(A));
                            }),
                            (A.prototype.read = function () {
                                for (var A = [], e = this.consumeToken(); e !== IA; ) A.push(e), (e = this.consumeToken());
                                return A;
                            }),
                            (A.prototype.consumeToken = function () {
                                var A = this.consumeCodePoint();
                                switch (A) {
                                    case 34:
                                        return this.consumeStringToken(34);
                                    case 35:
                                        var e = this.peekCodePoint(0),
                                            t = this.peekCodePoint(1),
                                            n = this.peekCodePoint(2);
                                        if (eA(e) || nA(t, n)) {
                                            var r = rA(e, t, n) ? 2 : 1,
                                                o = this.consumeName();
                                            return { type: 5, value: o, flags: r };
                                        }
                                        break;
                                    case 36:
                                        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), cA;
                                        break;
                                    case 39:
                                        return this.consumeStringToken(39);
                                    case 40:
                                        return iA;
                                    case 41:
                                        return BA;
                                    case 42:
                                        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), CA;
                                        break;
                                    case 43:
                                        if (oA(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                                        break;
                                    case 44:
                                        return aA;
                                    case 45:
                                        var s = A,
                                            i = this.peekCodePoint(0),
                                            B = this.peekCodePoint(1);
                                        if (oA(s, i, B)) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                                        if (rA(s, i, B)) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                                        if (45 === i && 62 === B) return this.consumeCodePoint(), this.consumeCodePoint(), fA;
                                        break;
                                    case 46:
                                        if (oA(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                                        break;
                                    case 47:
                                        if (42 === this.peekCodePoint(0))
                                            for (this.consumeCodePoint(); ; ) {
                                                var a = this.consumeCodePoint();
                                                if (42 === a && 47 === (a = this.consumeCodePoint())) return this.consumeToken();
                                                if (-1 === a) return this.consumeToken();
                                            }
                                        break;
                                    case 58:
                                        return pA;
                                    case 59:
                                        return HA;
                                    case 60:
                                        if (33 === this.peekCodePoint(0) && 45 === this.peekCodePoint(1) && 45 === this.peekCodePoint(2)) return this.consumeCodePoint(), this.consumeCodePoint(), FA;
                                        break;
                                    case 64:
                                        var c = this.peekCodePoint(0),
                                            l = this.peekCodePoint(1),
                                            u = this.peekCodePoint(2);
                                        if (rA(c, l, u)) {
                                            var o = this.consumeName();
                                            return { type: 7, value: o };
                                        }
                                        break;
                                    case 91:
                                        return yA;
                                    case 92:
                                        if (nA(A, this.peekCodePoint(0))) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                                        break;
                                    case 93:
                                        return EA;
                                    case 61:
                                        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), lA;
                                        break;
                                    case 123:
                                        return wA;
                                    case 125:
                                        return dA;
                                    case 117:
                                    case 85:
                                        var Q = this.peekCodePoint(0),
                                            w = this.peekCodePoint(1);
                                        return 43 !== Q || (!_(w) && 63 !== w) || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                                    case 124:
                                        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), uA;
                                        if (124 === this.peekCodePoint(0)) return this.consumeCodePoint(), gA;
                                        break;
                                    case 126:
                                        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), QA;
                                        break;
                                    case -1:
                                        return IA;
                                }
                                return $(A) ? (this.consumeWhiteSpace(), mA) : Y(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : AA(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: g(A) };
                            }),
                            (A.prototype.consumeCodePoint = function () {
                                var A = this._value.shift();
                                return void 0 === A ? -1 : A;
                            }),
                            (A.prototype.reconsumeCodePoint = function (A) {
                                this._value.unshift(A);
                            }),
                            (A.prototype.peekCodePoint = function (A) {
                                return A >= this._value.length ? -1 : this._value[A];
                            }),
                            (A.prototype.consumeUnicodeRangeToken = function () {
                                for (var A = [], e = this.consumeCodePoint(); _(e) && A.length < 6; ) A.push(e), (e = this.consumeCodePoint());
                                for (var t = !1; 63 === e && A.length < 6; ) A.push(e), (e = this.consumeCodePoint()), (t = !0);
                                if (t) {
                                    var n = parseInt(
                                            g.apply(
                                                void 0,
                                                A.map(function (A) {
                                                    return 63 === A ? 48 : A;
                                                })
                                            ),
                                            16
                                        ),
                                        r = parseInt(
                                            g.apply(
                                                void 0,
                                                A.map(function (A) {
                                                    return 63 === A ? 70 : A;
                                                })
                                            ),
                                            16
                                        );
                                    return { type: 30, start: n, end: r };
                                }
                                var o = parseInt(g.apply(void 0, A), 16);
                                if (45 === this.peekCodePoint(0) && _(this.peekCodePoint(1))) {
                                    this.consumeCodePoint(), (e = this.consumeCodePoint());
                                    for (var s = []; _(e) && s.length < 6; ) s.push(e), (e = this.consumeCodePoint());
                                    var r = parseInt(g.apply(void 0, s), 16);
                                    return { type: 30, start: o, end: r };
                                }
                                return { type: 30, start: o, end: o };
                            }),
                            (A.prototype.consumeIdentLikeToken = function () {
                                var A = this.consumeName();
                                return "url" === A.toLowerCase() && 40 === this.peekCodePoint(0)
                                    ? (this.consumeCodePoint(), this.consumeUrlToken())
                                    : 40 === this.peekCodePoint(0)
                                    ? (this.consumeCodePoint(), { type: 19, value: A })
                                    : { type: 20, value: A };
                            }),
                            (A.prototype.consumeUrlToken = function () {
                                var A = [];
                                if ((this.consumeWhiteSpace(), -1 === this.peekCodePoint(0))) return { type: 22, value: "" };
                                var e = this.peekCodePoint(0);
                                if (39 === e || 34 === e) {
                                    var t = this.consumeStringToken(this.consumeCodePoint());
                                    return 0 === t.type && (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0))
                                        ? (this.consumeCodePoint(), { type: 22, value: t.value })
                                        : (this.consumeBadUrlRemnants(), hA);
                                }
                                for (;;) {
                                    var n = this.consumeCodePoint();
                                    if (-1 === n || 41 === n) return { type: 22, value: g.apply(void 0, A) };
                                    if ($(n))
                                        return this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0) ? (this.consumeCodePoint(), { type: 22, value: g.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), hA);
                                    if (34 === n || 39 === n || 40 === n || tA(n)) return this.consumeBadUrlRemnants(), hA;
                                    if (92 === n) {
                                        if (!nA(n, this.peekCodePoint(0))) return this.consumeBadUrlRemnants(), hA;
                                        A.push(this.consumeEscapedCodePoint());
                                    } else A.push(n);
                                }
                            }),
                            (A.prototype.consumeWhiteSpace = function () {
                                for (; $(this.peekCodePoint(0)); ) this.consumeCodePoint();
                            }),
                            (A.prototype.consumeBadUrlRemnants = function () {
                                for (;;) {
                                    var A = this.consumeCodePoint();
                                    if (41 === A || -1 === A) return;
                                    nA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
                                }
                            }),
                            (A.prototype.consumeStringSlice = function (A) {
                                for (var e = ""; A > 0; ) {
                                    var t = Math.min(5e4, A);
                                    (e += g.apply(void 0, this._value.splice(0, t))), (A -= t);
                                }
                                return this._value.shift(), e;
                            }),
                            (A.prototype.consumeStringToken = function (A) {
                                for (var e = "", t = 0; ; ) {
                                    var n = this._value[t];
                                    if (-1 === n || void 0 === n || n === A) return (e += this.consumeStringSlice(t)), { type: 0, value: e };
                                    if (10 === n) return this._value.splice(0, t), UA;
                                    if (92 === n) {
                                        var r = this._value[t + 1];
                                        -1 !== r &&
                                            void 0 !== r &&
                                            (10 === r ? ((e += this.consumeStringSlice(t)), (t = -1), this._value.shift()) : nA(n, r) && ((e += this.consumeStringSlice(t)), (e += g(this.consumeEscapedCodePoint())), (t = -1)));
                                    }
                                    t++;
                                }
                            }),
                            (A.prototype.consumeNumber = function () {
                                var A = [],
                                    e = 4,
                                    t = this.peekCodePoint(0);
                                for ((43 !== t && 45 !== t) || A.push(this.consumeCodePoint()); Y(this.peekCodePoint(0)); ) A.push(this.consumeCodePoint());
                                t = this.peekCodePoint(0);
                                var n = this.peekCodePoint(1);
                                if (46 === t && Y(n)) for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = 8; Y(this.peekCodePoint(0)); ) A.push(this.consumeCodePoint());
                                (t = this.peekCodePoint(0)), (n = this.peekCodePoint(1));
                                var r = this.peekCodePoint(2);
                                if ((69 === t || 101 === t) && (((43 === n || 45 === n) && Y(r)) || Y(n))) for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = 8; Y(this.peekCodePoint(0)); ) A.push(this.consumeCodePoint());
                                return [sA(A), e];
                            }),
                            (A.prototype.consumeNumericToken = function () {
                                var A = this.consumeNumber(),
                                    e = A[0],
                                    t = A[1],
                                    n = this.peekCodePoint(0),
                                    r = this.peekCodePoint(1),
                                    o = this.peekCodePoint(2);
                                if (rA(n, r, o)) {
                                    return { type: 15, number: e, flags: t, unit: this.consumeName() };
                                }
                                return 37 === n ? (this.consumeCodePoint(), { type: 16, number: e, flags: t }) : { type: 17, number: e, flags: t };
                            }),
                            (A.prototype.consumeEscapedCodePoint = function () {
                                var A = this.consumeCodePoint();
                                if (_(A)) {
                                    for (var e = g(A); _(this.peekCodePoint(0)) && e.length < 6; ) e += g(this.consumeCodePoint());
                                    $(this.peekCodePoint(0)) && this.consumeCodePoint();
                                    var t = parseInt(e, 16);
                                    return 0 === t || W(t) || t > 1114111 ? 65533 : t;
                                }
                                return -1 === A ? 65533 : A;
                            }),
                            (A.prototype.consumeName = function () {
                                for (var A = ""; ; ) {
                                    var e = this.consumeCodePoint();
                                    if (eA(e)) A += g(e);
                                    else {
                                        if (!nA(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), A;
                                        A += g(this.consumeEscapedCodePoint());
                                    }
                                }
                            }),
                            A
                        );
                    })(),
                    vA = (function () {
                        function A(A) {
                            this._tokens = A;
                        }
                        return (
                            (A.create = function (e) {
                                var t = new bA();
                                return t.write(e), new A(t.read());
                            }),
                            (A.parseValue = function (e) {
                                return A.create(e).parseComponentValue();
                            }),
                            (A.parseValues = function (e) {
                                return A.create(e).parseComponentValues();
                            }),
                            (A.prototype.parseComponentValue = function () {
                                for (var A = this.consumeToken(); 31 === A.type; ) A = this.consumeToken();
                                if (32 === A.type) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
                                this.reconsumeToken(A);
                                var e = this.consumeComponentValue();
                                do {
                                    A = this.consumeToken();
                                } while (31 === A.type);
                                if (32 === A.type) return e;
                                throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
                            }),
                            (A.prototype.parseComponentValues = function () {
                                for (var A = []; ; ) {
                                    var e = this.consumeComponentValue();
                                    if (32 === e.type) return A;
                                    A.push(e), A.push();
                                }
                            }),
                            (A.prototype.consumeComponentValue = function () {
                                var A = this.consumeToken();
                                switch (A.type) {
                                    case 11:
                                    case 28:
                                    case 2:
                                        return this.consumeSimpleBlock(A.type);
                                    case 19:
                                        return this.consumeFunction(A);
                                }
                                return A;
                            }),
                            (A.prototype.consumeSimpleBlock = function (A) {
                                for (var e = { type: A, values: [] }, t = this.consumeToken(); ; ) {
                                    if (32 === t.type || OA(t, A)) return e;
                                    this.reconsumeToken(t), e.values.push(this.consumeComponentValue()), (t = this.consumeToken());
                                }
                            }),
                            (A.prototype.consumeFunction = function (A) {
                                for (var e = { name: A.value, values: [], type: 18 }; ; ) {
                                    var t = this.consumeToken();
                                    if (32 === t.type || 3 === t.type) return e;
                                    this.reconsumeToken(t), e.values.push(this.consumeComponentValue());
                                }
                            }),
                            (A.prototype.consumeToken = function () {
                                var A = this._tokens.shift();
                                return void 0 === A ? IA : A;
                            }),
                            (A.prototype.reconsumeToken = function (A) {
                                this._tokens.unshift(A);
                            }),
                            A
                        );
                    })(),
                    KA = function (A) {
                        return 15 === A.type;
                    },
                    LA = function (A) {
                        return 17 === A.type;
                    },
                    xA = function (A) {
                        return 20 === A.type;
                    },
                    DA = function (A) {
                        return 0 === A.type;
                    },
                    kA = function (A, e) {
                        return xA(A) && A.value === e;
                    },
                    MA = function (A) {
                        return 31 !== A.type;
                    },
                    SA = function (A) {
                        return 31 !== A.type && 4 !== A.type;
                    },
                    TA = function (A) {
                        var e = [],
                            t = [];
                        return (
                            A.forEach(function (A) {
                                if (4 === A.type) {
                                    if (0 === t.length) throw new Error("Error parsing function args, zero tokens for arg");
                                    return e.push(t), void (t = []);
                                }
                                31 !== A.type && t.push(A);
                            }),
                            t.length && e.push(t),
                            e
                        );
                    },
                    OA = function (A, e) {
                        return (11 === e && 12 === A.type) || (28 === e && 29 === A.type) || (2 === e && 3 === A.type);
                    },
                    VA = function (A) {
                        return 17 === A.type || 15 === A.type;
                    },
                    GA = function (A) {
                        return 16 === A.type || VA(A);
                    },
                    RA = function (A) {
                        return A.length > 1 ? [A[0], A[1]] : [A[0]];
                    },
                    PA = { type: 17, number: 0, flags: 4 },
                    NA = { type: 16, number: 50, flags: 4 },
                    XA = { type: 16, number: 100, flags: 4 },
                    JA = function (A, e, t) {
                        var n = A[0],
                            r = A[1];
                        return [YA(n, e), YA(void 0 !== r ? r : n, t)];
                    },
                    YA = function (A, e) {
                        if (16 === A.type) return (A.number / 100) * e;
                        if (KA(A))
                            switch (A.unit) {
                                case "rem":
                                case "em":
                                    return 16 * A.number;
                                case "px":
                                default:
                                    return A.number;
                            }
                        return A.number;
                    },
                    WA = {
                        name: "angle",
                        parse: function (A, e) {
                            if (15 === e.type)
                                switch (e.unit) {
                                    case "deg":
                                        return (Math.PI * e.number) / 180;
                                    case "grad":
                                        return (Math.PI / 200) * e.number;
                                    case "rad":
                                        return e.number;
                                    case "turn":
                                        return 2 * Math.PI * e.number;
                                }
                            throw new Error("Unsupported angle type");
                        },
                    },
                    _A = function (A) {
                        return 15 === A.type && ("deg" === A.unit || "grad" === A.unit || "rad" === A.unit || "turn" === A.unit);
                    },
                    ZA = function (A) {
                        switch (
                            A.filter(xA)
                                .map(function (A) {
                                    return A.value;
                                })
                                .join(" ")
                        ) {
                            case "to bottom right":
                            case "to right bottom":
                            case "left top":
                            case "top left":
                                return [PA, PA];
                            case "to top":
                            case "bottom":
                                return jA(0);
                            case "to bottom left":
                            case "to left bottom":
                            case "right top":
                            case "top right":
                                return [PA, XA];
                            case "to right":
                            case "left":
                                return jA(90);
                            case "to top left":
                            case "to left top":
                            case "right bottom":
                            case "bottom right":
                                return [XA, XA];
                            case "to bottom":
                            case "top":
                                return jA(180);
                            case "to top right":
                            case "to right top":
                            case "left bottom":
                            case "bottom left":
                                return [XA, PA];
                            case "to left":
                            case "right":
                                return jA(270);
                        }
                        return 0;
                    },
                    jA = function (A) {
                        return (Math.PI * A) / 180;
                    },
                    qA = {
                        name: "color",
                        parse: function (A, e) {
                            if (18 === e.type) {
                                var t = re[e.name];
                                if (void 0 === t) throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
                                return t(A, e.values);
                            }
                            if (5 === e.type) {
                                if (3 === e.value.length) {
                                    var n = e.value.substring(0, 1),
                                        r = e.value.substring(1, 2),
                                        o = e.value.substring(2, 3);
                                    return Ae(parseInt(n + n, 16), parseInt(r + r, 16), parseInt(o + o, 16), 1);
                                }
                                if (4 === e.value.length) {
                                    var n = e.value.substring(0, 1),
                                        r = e.value.substring(1, 2),
                                        o = e.value.substring(2, 3),
                                        s = e.value.substring(3, 4);
                                    return Ae(parseInt(n + n, 16), parseInt(r + r, 16), parseInt(o + o, 16), parseInt(s + s, 16) / 255);
                                }
                                if (6 === e.value.length) {
                                    var n = e.value.substring(0, 2),
                                        r = e.value.substring(2, 4),
                                        o = e.value.substring(4, 6);
                                    return Ae(parseInt(n, 16), parseInt(r, 16), parseInt(o, 16), 1);
                                }
                                if (8 === e.value.length) {
                                    var n = e.value.substring(0, 2),
                                        r = e.value.substring(2, 4),
                                        o = e.value.substring(4, 6),
                                        s = e.value.substring(6, 8);
                                    return Ae(parseInt(n, 16), parseInt(r, 16), parseInt(o, 16), parseInt(s, 16) / 255);
                                }
                            }
                            if (20 === e.type) {
                                var i = se[e.value.toUpperCase()];
                                if (void 0 !== i) return i;
                            }
                            return se.TRANSPARENT;
                        },
                    },
                    zA = function (A) {
                        return 0 == (255 & A);
                    },
                    $A = function (A) {
                        var e = 255 & A,
                            t = 255 & (A >> 8),
                            n = 255 & (A >> 16),
                            r = 255 & (A >> 24);
                        return e < 255 ? "rgba(" + r + "," + n + "," + t + "," + e / 255 + ")" : "rgb(" + r + "," + n + "," + t + ")";
                    },
                    Ae = function (A, e, t, n) {
                        return ((A << 24) | (e << 16) | (t << 8) | (Math.round(255 * n) << 0)) >>> 0;
                    },
                    ee = function (A, e) {
                        if (17 === A.type) return A.number;
                        if (16 === A.type) {
                            var t = 3 === e ? 1 : 255;
                            return 3 === e ? (A.number / 100) * t : Math.round((A.number / 100) * t);
                        }
                        return 0;
                    },
                    te = function (A, e) {
                        var t = e.filter(SA);
                        if (3 === t.length) {
                            var n = t.map(ee),
                                r = n[0],
                                o = n[1],
                                s = n[2];
                            return Ae(r, o, s, 1);
                        }
                        if (4 === t.length) {
                            var i = t.map(ee),
                                r = i[0],
                                o = i[1],
                                s = i[2],
                                B = i[3];
                            return Ae(r, o, s, B);
                        }
                        return 0;
                    },
                    ne = function (A, e) {
                        var t = e.filter(SA),
                            n = t[0],
                            o = t[1],
                            s = t[2],
                            i = t[3],
                            B = (17 === n.type ? jA(n.number) : WA.parse(A, n)) / (2 * Math.PI),
                            a = GA(o) ? o.number / 100 : 0,
                            c = GA(s) ? s.number / 100 : 0,
                            l = void 0 !== i && GA(i) ? YA(i, 1) : 1;
                        if (0 === a) return Ae(255 * c, 255 * c, 255 * c, 1);
                        var g = c <= 0.5 ? c * (a + 1) : c + a - c * a,
                            u = 2 * c - g,
                            Q = r(u, g, B + 1 / 3),
                            w = r(u, g, B),
                            d = r(u, g, B - 1 / 3);
                        return Ae(255 * Q, 255 * w, 255 * d, l);
                    },
                    re = { hsl: ne, hsla: ne, rgb: te, rgba: te },
                    oe = function (A, e) {
                        return qA.parse(A, vA.create(e).parseComponentValue());
                    },
                    se = {
                        ALICEBLUE: 4042850303,
                        ANTIQUEWHITE: 4209760255,
                        AQUA: 16777215,
                        AQUAMARINE: 2147472639,
                        AZURE: 4043309055,
                        BEIGE: 4126530815,
                        BISQUE: 4293182719,
                        BLACK: 255,
                        BLANCHEDALMOND: 4293643775,
                        BLUE: 65535,
                        BLUEVIOLET: 2318131967,
                        BROWN: 2771004159,
                        BURLYWOOD: 3736635391,
                        CADETBLUE: 1604231423,
                        CHARTREUSE: 2147418367,
                        CHOCOLATE: 3530104575,
                        CORAL: 4286533887,
                        CORNFLOWERBLUE: 1687547391,
                        CORNSILK: 4294499583,
                        CRIMSON: 3692313855,
                        CYAN: 16777215,
                        DARKBLUE: 35839,
                        DARKCYAN: 9145343,
                        DARKGOLDENROD: 3095837695,
                        DARKGRAY: 2846468607,
                        DARKGREEN: 6553855,
                        DARKGREY: 2846468607,
                        DARKKHAKI: 3182914559,
                        DARKMAGENTA: 2332068863,
                        DARKOLIVEGREEN: 1433087999,
                        DARKORANGE: 4287365375,
                        DARKORCHID: 2570243327,
                        DARKRED: 2332033279,
                        DARKSALMON: 3918953215,
                        DARKSEAGREEN: 2411499519,
                        DARKSLATEBLUE: 1211993087,
                        DARKSLATEGRAY: 793726975,
                        DARKSLATEGREY: 793726975,
                        DARKTURQUOISE: 13554175,
                        DARKVIOLET: 2483082239,
                        DEEPPINK: 4279538687,
                        DEEPSKYBLUE: 12582911,
                        DIMGRAY: 1768516095,
                        DIMGREY: 1768516095,
                        DODGERBLUE: 512819199,
                        FIREBRICK: 2988581631,
                        FLORALWHITE: 4294635775,
                        FORESTGREEN: 579543807,
                        FUCHSIA: 4278255615,
                        GAINSBORO: 3705462015,
                        GHOSTWHITE: 4177068031,
                        GOLD: 4292280575,
                        GOLDENROD: 3668254975,
                        GRAY: 2155905279,
                        GREEN: 8388863,
                        GREENYELLOW: 2919182335,
                        GREY: 2155905279,
                        HONEYDEW: 4043305215,
                        HOTPINK: 4285117695,
                        INDIANRED: 3445382399,
                        INDIGO: 1258324735,
                        IVORY: 4294963455,
                        KHAKI: 4041641215,
                        LAVENDER: 3873897215,
                        LAVENDERBLUSH: 4293981695,
                        LAWNGREEN: 2096890111,
                        LEMONCHIFFON: 4294626815,
                        LIGHTBLUE: 2916673279,
                        LIGHTCORAL: 4034953471,
                        LIGHTCYAN: 3774873599,
                        LIGHTGOLDENRODYELLOW: 4210742015,
                        LIGHTGRAY: 3553874943,
                        LIGHTGREEN: 2431553791,
                        LIGHTGREY: 3553874943,
                        LIGHTPINK: 4290167295,
                        LIGHTSALMON: 4288707327,
                        LIGHTSEAGREEN: 548580095,
                        LIGHTSKYBLUE: 2278488831,
                        LIGHTSLATEGRAY: 2005441023,
                        LIGHTSLATEGREY: 2005441023,
                        LIGHTSTEELBLUE: 2965692159,
                        LIGHTYELLOW: 4294959359,
                        LIME: 16711935,
                        LIMEGREEN: 852308735,
                        LINEN: 4210091775,
                        MAGENTA: 4278255615,
                        MAROON: 2147483903,
                        MEDIUMAQUAMARINE: 1724754687,
                        MEDIUMBLUE: 52735,
                        MEDIUMORCHID: 3126187007,
                        MEDIUMPURPLE: 2473647103,
                        MEDIUMSEAGREEN: 1018393087,
                        MEDIUMSLATEBLUE: 2070474495,
                        MEDIUMSPRINGGREEN: 16423679,
                        MEDIUMTURQUOISE: 1221709055,
                        MEDIUMVIOLETRED: 3340076543,
                        MIDNIGHTBLUE: 421097727,
                        MINTCREAM: 4127193855,
                        MISTYROSE: 4293190143,
                        MOCCASIN: 4293178879,
                        NAVAJOWHITE: 4292783615,
                        NAVY: 33023,
                        OLDLACE: 4260751103,
                        OLIVE: 2155872511,
                        OLIVEDRAB: 1804477439,
                        ORANGE: 4289003775,
                        ORANGERED: 4282712319,
                        ORCHID: 3664828159,
                        PALEGOLDENROD: 4008225535,
                        PALEGREEN: 2566625535,
                        PALETURQUOISE: 2951671551,
                        PALEVIOLETRED: 3681588223,
                        PAPAYAWHIP: 4293907967,
                        PEACHPUFF: 4292524543,
                        PERU: 3448061951,
                        PINK: 4290825215,
                        PLUM: 3718307327,
                        POWDERBLUE: 2967529215,
                        PURPLE: 2147516671,
                        REBECCAPURPLE: 1714657791,
                        RED: 4278190335,
                        ROSYBROWN: 3163525119,
                        ROYALBLUE: 1097458175,
                        SADDLEBROWN: 2336560127,
                        SALMON: 4202722047,
                        SANDYBROWN: 4104413439,
                        SEAGREEN: 780883967,
                        SEASHELL: 4294307583,
                        SIENNA: 2689740287,
                        SILVER: 3233857791,
                        SKYBLUE: 2278484991,
                        SLATEBLUE: 1784335871,
                        SLATEGRAY: 1887473919,
                        SLATEGREY: 1887473919,
                        SNOW: 4294638335,
                        SPRINGGREEN: 16744447,
                        STEELBLUE: 1182971135,
                        TAN: 3535047935,
                        TEAL: 8421631,
                        THISTLE: 3636451583,
                        TOMATO: 4284696575,
                        TRANSPARENT: 0,
                        TURQUOISE: 1088475391,
                        VIOLET: 4001558271,
                        WHEAT: 4125012991,
                        WHITE: 4294967295,
                        WHITESMOKE: 4126537215,
                        YELLOW: 4294902015,
                        YELLOWGREEN: 2597139199,
                    },
                    ie = {
                        name: "background-clip",
                        initialValue: "border-box",
                        prefix: !1,
                        type: 1,
                        parse: function (A, e) {
                            return e.map(function (A) {
                                if (xA(A))
                                    switch (A.value) {
                                        case "padding-box":
                                            return 1;
                                        case "content-box":
                                            return 2;
                                    }
                                return 0;
                            });
                        },
                    },
                    Be = { name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" },
                    ae = function (A, e) {
                        var t = qA.parse(A, e[0]),
                            n = e[1];
                        return n && GA(n) ? { color: t, stop: n } : { color: t, stop: null };
                    },
                    ce = function (A, e) {
                        var t = A[0],
                            n = A[A.length - 1];
                        null === t.stop && (t.stop = PA), null === n.stop && (n.stop = XA);
                        for (var r = [], o = 0, s = 0; s < A.length; s++) {
                            var i = A[s].stop;
                            if (null !== i) {
                                var B = YA(i, e);
                                B > o ? r.push(B) : r.push(o), (o = B);
                            } else r.push(null);
                        }
                        for (var a = null, s = 0; s < r.length; s++) {
                            var c = r[s];
                            if (null === c) null === a && (a = s);
                            else if (null !== a) {
                                for (var l = s - a, g = r[a - 1], u = (c - g) / (l + 1), Q = 1; Q <= l; Q++) r[a + Q - 1] = u * Q;
                                a = null;
                            }
                        }
                        return A.map(function (A, t) {
                            return { color: A.color, stop: Math.max(Math.min(1, r[t] / e), 0) };
                        });
                    },
                    le = function (A, e, t) {
                        var n = e / 2,
                            r = t / 2,
                            o = YA(A[0], e) - n,
                            s = r - YA(A[1], t);
                        return (Math.atan2(s, o) + 2 * Math.PI) % (2 * Math.PI);
                    },
                    ge = function (A, e, t) {
                        var n = "number" == typeof A ? A : le(A, e, t),
                            r = Math.abs(e * Math.sin(n)) + Math.abs(t * Math.cos(n)),
                            o = e / 2,
                            s = t / 2,
                            i = r / 2,
                            B = Math.sin(n - Math.PI / 2) * i,
                            a = Math.cos(n - Math.PI / 2) * i;
                        return [r, o - a, o + a, s - B, s + B];
                    },
                    ue = function (A, e) {
                        return Math.sqrt(A * A + e * e);
                    },
                    Qe = function (A, e, t, n, r) {
                        return [
                            [0, 0],
                            [0, e],
                            [A, 0],
                            [A, e],
                        ].reduce(
                            function (A, e) {
                                var o = e[0],
                                    s = e[1],
                                    i = ue(t - o, n - s);
                                return (r ? i < A.optimumDistance : i > A.optimumDistance) ? { optimumCorner: e, optimumDistance: i } : A;
                            },
                            { optimumDistance: r ? 1 / 0 : -1 / 0, optimumCorner: null }
                        ).optimumCorner;
                    },
                    we = function (A, e, t, n, r) {
                        var o = 0,
                            s = 0;
                        switch (A.size) {
                            case 0:
                                0 === A.shape ? (o = s = Math.min(Math.abs(e), Math.abs(e - n), Math.abs(t), Math.abs(t - r))) : 1 === A.shape && ((o = Math.min(Math.abs(e), Math.abs(e - n))), (s = Math.min(Math.abs(t), Math.abs(t - r))));
                                break;
                            case 2:
                                if (0 === A.shape) o = s = Math.min(ue(e, t), ue(e, t - r), ue(e - n, t), ue(e - n, t - r));
                                else if (1 === A.shape) {
                                    var i = Math.min(Math.abs(t), Math.abs(t - r)) / Math.min(Math.abs(e), Math.abs(e - n)),
                                        B = Qe(n, r, e, t, !0),
                                        a = B[0],
                                        c = B[1];
                                    (o = ue(a - e, (c - t) / i)), (s = i * o);
                                }
                                break;
                            case 1:
                                0 === A.shape ? (o = s = Math.max(Math.abs(e), Math.abs(e - n), Math.abs(t), Math.abs(t - r))) : 1 === A.shape && ((o = Math.max(Math.abs(e), Math.abs(e - n))), (s = Math.max(Math.abs(t), Math.abs(t - r))));
                                break;
                            case 3:
                                if (0 === A.shape) o = s = Math.max(ue(e, t), ue(e, t - r), ue(e - n, t), ue(e - n, t - r));
                                else if (1 === A.shape) {
                                    var i = Math.max(Math.abs(t), Math.abs(t - r)) / Math.max(Math.abs(e), Math.abs(e - n)),
                                        l = Qe(n, r, e, t, !1),
                                        a = l[0],
                                        c = l[1];
                                    (o = ue(a - e, (c - t) / i)), (s = i * o);
                                }
                        }
                        return Array.isArray(A.size) && ((o = YA(A.size[0], n)), (s = 2 === A.size.length ? YA(A.size[1], r) : o)), [o, s];
                    },
                    de = function (A, e) {
                        var t = jA(180),
                            n = [];
                        return (
                            TA(e).forEach(function (e, r) {
                                if (0 === r) {
                                    var o = e[0];
                                    if (20 === o.type && "to" === o.value) return void (t = ZA(e));
                                    if (_A(o)) return void (t = WA.parse(A, o));
                                }
                                var s = ae(A, e);
                                n.push(s);
                            }),
                            { angle: t, stops: n, type: 1 }
                        );
                    },
                    Ce = function (A, e) {
                        var t = jA(180),
                            n = [];
                        return (
                            TA(e).forEach(function (e, r) {
                                if (0 === r) {
                                    var o = e[0];
                                    if (20 === o.type && -1 !== ["top", "left", "right", "bottom"].indexOf(o.value)) return void (t = ZA(e));
                                    if (_A(o)) return void (t = (WA.parse(A, o) + jA(270)) % jA(360));
                                }
                                var s = ae(A, e);
                                n.push(s);
                            }),
                            { angle: t, stops: n, type: 1 }
                        );
                    },
                    he = function (A, e) {
                        var t = jA(180),
                            n = [],
                            r = 1,
                            o = [];
                        return (
                            TA(e).forEach(function (e, t) {
                                var o = e[0];
                                if (0 === t) {
                                    if (xA(o) && "linear" === o.value) return void (r = 1);
                                    if (xA(o) && "radial" === o.value) return void (r = 2);
                                }
                                if (18 === o.type)
                                    if ("from" === o.name) {
                                        var s = qA.parse(A, o.values[0]);
                                        n.push({ stop: PA, color: s });
                                    } else if ("to" === o.name) {
                                        var s = qA.parse(A, o.values[0]);
                                        n.push({ stop: XA, color: s });
                                    } else if ("color-stop" === o.name) {
                                        var i = o.values.filter(SA);
                                        if (2 === i.length) {
                                            var s = qA.parse(A, i[1]),
                                                B = i[0];
                                            LA(B) && n.push({ stop: { type: 16, number: 100 * B.number, flags: B.flags }, color: s });
                                        }
                                    }
                            }),
                            1 === r ? { angle: (t + jA(180)) % jA(360), stops: n, type: r } : { size: 3, shape: 0, stops: n, position: o, type: r }
                        );
                    },
                    Ue = function (A, e) {
                        var t = 0,
                            n = 3,
                            r = [],
                            o = [];
                        return (
                            TA(e).forEach(function (e, s) {
                                var i = !0;
                                if (0 === s) {
                                    var B = !1;
                                    i = e.reduce(function (A, e) {
                                        if (B)
                                            if (xA(e))
                                                switch (e.value) {
                                                    case "center":
                                                        return o.push(NA), A;
                                                    case "top":
                                                    case "left":
                                                        return o.push(PA), A;
                                                    case "right":
                                                    case "bottom":
                                                        return o.push(XA), A;
                                                }
                                            else (GA(e) || VA(e)) && o.push(e);
                                        else if (xA(e))
                                            switch (e.value) {
                                                case "circle":
                                                    return (t = 0), !1;
                                                case "ellipse":
                                                    return (t = 1), !1;
                                                case "at":
                                                    return (B = !0), !1;
                                                case "closest-side":
                                                    return (n = 0), !1;
                                                case "cover":
                                                case "farthest-side":
                                                    return (n = 1), !1;
                                                case "contain":
                                                case "closest-corner":
                                                    return (n = 2), !1;
                                                case "farthest-corner":
                                                    return (n = 3), !1;
                                            }
                                        else if (VA(e) || GA(e)) return Array.isArray(n) || (n = []), n.push(e), !1;
                                        return A;
                                    }, i);
                                }
                                if (i) {
                                    var a = ae(A, e);
                                    r.push(a);
                                }
                            }),
                            { size: n, shape: t, stops: r, position: o, type: 2 }
                        );
                    },
                    Fe = function (A, e) {
                        var t = 0,
                            n = 3,
                            r = [],
                            o = [];
                        return (
                            TA(e).forEach(function (e, s) {
                                var i = !0;
                                if (
                                    (0 === s
                                        ? (i = e.reduce(function (A, e) {
                                              if (xA(e))
                                                  switch (e.value) {
                                                      case "center":
                                                          return o.push(NA), !1;
                                                      case "top":
                                                      case "left":
                                                          return o.push(PA), !1;
                                                      case "right":
                                                      case "bottom":
                                                          return o.push(XA), !1;
                                                  }
                                              else if (GA(e) || VA(e)) return o.push(e), !1;
                                              return A;
                                          }, i))
                                        : 1 === s &&
                                          (i = e.reduce(function (A, e) {
                                              if (xA(e))
                                                  switch (e.value) {
                                                      case "circle":
                                                          return (t = 0), !1;
                                                      case "ellipse":
                                                          return (t = 1), !1;
                                                      case "contain":
                                                      case "closest-side":
                                                          return (n = 0), !1;
                                                      case "farthest-side":
                                                          return (n = 1), !1;
                                                      case "closest-corner":
                                                          return (n = 2), !1;
                                                      case "cover":
                                                      case "farthest-corner":
                                                          return (n = 3), !1;
                                                  }
                                              else if (VA(e) || GA(e)) return Array.isArray(n) || (n = []), n.push(e), !1;
                                              return A;
                                          }, i)),
                                    i)
                                ) {
                                    var B = ae(A, e);
                                    r.push(B);
                                }
                            }),
                            { size: n, shape: t, stops: r, position: o, type: 2 }
                        );
                    },
                    fe = function (A) {
                        return 1 === A.type;
                    },
                    pe = function (A) {
                        return 2 === A.type;
                    },
                    He = {
                        name: "image",
                        parse: function (A, e) {
                            if (22 === e.type) {
                                var t = { url: e.value, type: 0 };
                                return A.cache.addImage(e.value), t;
                            }
                            if (18 === e.type) {
                                var n = ye[e.name];
                                if (void 0 === n) throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
                                return n(A, e.values);
                            }
                            throw new Error("Unsupported image type " + e.type);
                        },
                    },
                    ye = {
                        "linear-gradient": de,
                        "-moz-linear-gradient": Ce,
                        "-ms-linear-gradient": Ce,
                        "-o-linear-gradient": Ce,
                        "-webkit-linear-gradient": Ce,
                        "radial-gradient": Ue,
                        "-moz-radial-gradient": Fe,
                        "-ms-radial-gradient": Fe,
                        "-o-radial-gradient": Fe,
                        "-webkit-radial-gradient": Fe,
                        "-webkit-gradient": he,
                    },
                    Ee = {
                        name: "background-image",
                        initialValue: "none",
                        type: 1,
                        prefix: !1,
                        parse: function (A, e) {
                            if (0 === e.length) return [];
                            var t = e[0];
                            return 20 === t.type && "none" === t.value
                                ? []
                                : e
                                      .filter(function (A) {
                                          return SA(A) && o(A);
                                      })
                                      .map(function (e) {
                                          return He.parse(A, e);
                                      });
                        },
                    },
                    me = {
                        name: "background-origin",
                        initialValue: "border-box",
                        prefix: !1,
                        type: 1,
                        parse: function (A, e) {
                            return e.map(function (A) {
                                if (xA(A))
                                    switch (A.value) {
                                        case "padding-box":
                                            return 1;
                                        case "content-box":
                                            return 2;
                                    }
                                return 0;
                            });
                        },
                    },
                    Ie = {
                        name: "background-position",
                        initialValue: "0% 0%",
                        type: 1,
                        prefix: !1,
                        parse: function (A, e) {
                            return TA(e)
                                .map(function (A) {
                                    return A.filter(GA);
                                })
                                .map(RA);
                        },
                    },
                    be = {
                        name: "background-repeat",
                        initialValue: "repeat",
                        prefix: !1,
                        type: 1,
                        parse: function (A, e) {
                            return TA(e)
                                .map(function (A) {
                                    return A.filter(xA)
                                        .map(function (A) {
                                            return A.value;
                                        })
                                        .join(" ");
                                })
                                .map(ve);
                        },
                    },
                    ve = function (A) {
                        switch (A) {
                            case "no-repeat":
                                return 1;
                            case "repeat-x":
                            case "repeat no-repeat":
                                return 2;
                            case "repeat-y":
                            case "no-repeat repeat":
                                return 3;
                            case "repeat":
                            default:
                                return 0;
                        }
                    };
                !(function (A) {
                    (A.AUTO = "auto"), (A.CONTAIN = "contain"), (A.COVER = "cover");
                })(b || (b = {}));
                var Ke,
                    Le = {
                        name: "background-size",
                        initialValue: "0",
                        prefix: !1,
                        type: 1,
                        parse: function (A, e) {
                            return TA(e).map(function (A) {
                                return A.filter(xe);
                            });
                        },
                    },
                    xe = function (A) {
                        return xA(A) || GA(A);
                    },
                    De = function (A) {
                        return { name: "border-" + A + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" };
                    },
                    ke = De("top"),
                    Me = De("right"),
                    Se = De("bottom"),
                    Te = De("left"),
                    Oe = function (A) {
                        return {
                            name: "border-radius-" + A,
                            initialValue: "0 0",
                            prefix: !1,
                            type: 1,
                            parse: function (A, e) {
                                return RA(e.filter(GA));
                            },
                        };
                    },
                    Ve = Oe("top-left"),
                    Ge = Oe("top-right"),
                    Re = Oe("bottom-right"),
                    Pe = Oe("bottom-left"),
                    Ne = function (A) {
                        return {
                            name: "border-" + A + "-style",
                            initialValue: "solid",
                            prefix: !1,
                            type: 2,
                            parse: function (A, e) {
                                switch (e) {
                                    case "none":
                                        return 0;
                                    case "dashed":
                                        return 2;
                                    case "dotted":
                                        return 3;
                                    case "double":
                                        return 4;
                                }
                                return 1;
                            },
                        };
                    },
                    Xe = Ne("top"),
                    Je = Ne("right"),
                    Ye = Ne("bottom"),
                    We = Ne("left"),
                    _e = function (A) {
                        return {
                            name: "border-" + A + "-width",
                            initialValue: "0",
                            type: 0,
                            prefix: !1,
                            parse: function (A, e) {
                                return KA(e) ? e.number : 0;
                            },
                        };
                    },
                    Ze = _e("top"),
                    je = _e("right"),
                    qe = _e("bottom"),
                    ze = _e("left"),
                    $e = { name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color" },
                    At = {
                        name: "direction",
                        initialValue: "ltr",
                        prefix: !1,
                        type: 2,
                        parse: function (A, e) {
                            switch (e) {
                                case "rtl":
                                    return 1;
                                case "ltr":
                                default:
                                    return 0;
                            }
                        },
                    },
                    et = {
                        name: "display",
                        initialValue: "inline-block",
                        prefix: !1,
                        type: 1,
                        parse: function (A, e) {
                            return e.filter(xA).reduce(function (A, e) {
                                return A | tt(e.value);
                            }, 0);
                        },
                    },
                    tt = function (A) {
                        switch (A) {
                            case "block":
                            case "-webkit-box":
                                return 2;
                            case "inline":
                                return 4;
                            case "run-in":
                                return 8;
                            case "flow":
                                return 16;
                            case "flow-root":
                                return 32;
                            case "table":
                                return 64;
                            case "flex":
                            case "-webkit-flex":
                                return 128;
                            case "grid":
                            case "-ms-grid":
                                return 256;
                            case "ruby":
                                return 512;
                            case "subgrid":
                                return 1024;
                            case "list-item":
                                return 2048;
                            case "table-row-group":
                                return 4096;
                            case "table-header-group":
                                return 8192;
                            case "table-footer-group":
                                return 16384;
                            case "table-row":
                                return 32768;
                            case "table-cell":
                                return 65536;
                            case "table-column-group":
                                return 131072;
                            case "table-column":
                                return 262144;
                            case "table-caption":
                                return 524288;
                            case "ruby-base":
                                return 1048576;
                            case "ruby-text":
                                return 2097152;
                            case "ruby-base-container":
                                return 4194304;
                            case "ruby-text-container":
                                return 8388608;
                            case "contents":
                                return 16777216;
                            case "inline-block":
                                return 33554432;
                            case "inline-list-item":
                                return 67108864;
                            case "inline-table":
                                return 134217728;
                            case "inline-flex":
                                return 268435456;
                            case "inline-grid":
                                return 536870912;
                        }
                        return 0;
                    },
                    nt = {
                        name: "float",
                        initialValue: "none",
                        prefix: !1,
                        type: 2,
                        parse: function (A, e) {
                            switch (e) {
                                case "left":
                                    return 1;
                                case "right":
                                    return 2;
                                case "inline-start":
                                    return 3;
                                case "inline-end":
                                    return 4;
                            }
                            return 0;
                        },
                    },
                    rt = {
                        name: "letter-spacing",
                        initialValue: "0",
                        prefix: !1,
                        type: 0,
                        parse: function (A, e) {
                            return 20 === e.type && "normal" === e.value ? 0 : 17 === e.type ? e.number : 15 === e.type ? e.number : 0;
                        },
                    };
                !(function (A) {
                    (A.NORMAL = "normal"), (A.STRICT = "strict");
                })(Ke || (Ke = {}));
                var ot,
                    st = {
                        name: "line-break",
                        initialValue: "normal",
                        prefix: !1,
                        type: 2,
                        parse: function (A, e) {
                            switch (e) {
                                case "strict":
                                    return Ke.STRICT;
                                case "normal":
                                default:
                                    return Ke.NORMAL;
                            }
                        },
                    },
                    it = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 },
                    Bt = function (A, e) {
                        return xA(A) && "normal" === A.value ? 1.2 * e : 17 === A.type ? e * A.number : GA(A) ? YA(A, e) : e;
                    },
                    at = {
                        name: "list-style-image",
                        initialValue: "none",
                        type: 0,
                        prefix: !1,
                        parse: function (A, e) {
                            return 20 === e.type && "none" === e.value ? null : He.parse(A, e);
                        },
                    },
                    ct = {
                        name: "list-style-position",
                        initialValue: "outside",
                        prefix: !1,
                        type: 2,
                        parse: function (A, e) {
                            switch (e) {
                                case "inside":
                                    return 0;
                                case "outside":
                                default:
                                    return 1;
                            }
                        },
                    },
                    lt = {
                        name: "list-style-type",
                        initialValue: "none",
                        prefix: !1,
                        type: 2,
                        parse: function (A, e) {
                            switch (e) {
                                case "disc":
                                    return 0;
                                case "circle":
                                    return 1;
                                case "square":
                                    return 2;
                                case "decimal":
                                    return 3;
                                case "cjk-decimal":
                                    return 4;
                                case "decimal-leading-zero":
                                    return 5;
                                case "lower-roman":
                                    return 6;
                                case "upper-roman":
                                    return 7;
                                case "lower-greek":
                                    return 8;
                                case "lower-alpha":
                                    return 9;
                                case "upper-alpha":
                                    return 10;
                                case "arabic-indic":
                                    return 11;
                                case "armenian":
                                    return 12;
                                case "bengali":
                                    return 13;
                                case "cambodian":
                                    return 14;
                                case "cjk-earthly-branch":
                                    return 15;
                                case "cjk-heavenly-stem":
                                    return 16;
                                case "cjk-ideographic":
                                    return 17;
                                case "devanagari":
                                    return 18;
                                case "ethiopic-numeric":
                                    return 19;
                                case "georgian":
                                    return 20;
                                case "gujarati":
                                    return 21;
                                case "gurmukhi":
                                case "hebrew":
                                    return 22;
                                case "hiragana":
                                    return 23;
                                case "hiragana-iroha":
                                    return 24;
                                case "japanese-formal":
                                    return 25;
                                case "japanese-informal":
                                    return 26;
                                case "kannada":
                                    return 27;
                                case "katakana":
                                    return 28;
                                case "katakana-iroha":
                                    return 29;
                                case "khmer":
                                    return 30;
                                case "korean-hangul-formal":
                                    return 31;
                                case "korean-hanja-formal":
                                    return 32;
                                case "korean-hanja-informal":
                                    return 33;
                                case "lao":
                                    return 34;
                                case "lower-armenian":
                                    return 35;
                                case "malayalam":
                                    return 36;
                                case "mongolian":
                                    return 37;
                                case "myanmar":
                                    return 38;
                                case "oriya":
                                    return 39;
                                case "persian":
                                    return 40;
                                case "simp-chinese-formal":
                                    return 41;
                                case "simp-chinese-informal":
                                    return 42;
                                case "tamil":
                                    return 43;
                                case "telugu":
                                    return 44;
                                case "thai":
                                    return 45;
                                case "tibetan":
                                    return 46;
                                case "trad-chinese-formal":
                                    return 47;
                                case "trad-chinese-informal":
                                    return 48;
                                case "upper-armenian":
                                    return 49;
                                case "disclosure-open":
                                    return 50;
                                case "disclosure-closed":
                                    return 51;
                                case "none":
                                default:
                                    return -1;
                            }
                        },
                    },
                    gt = function (A) {
                        return { name: "margin-" + A, initialValue: "0", prefix: !1, type: 4 };
                    },
                    ut = gt("top"),
                    Qt = gt("right"),
                    wt = gt("bottom"),
                    dt = gt("left"),
                    Ct = {
                        name: "overflow",
                        initialValue: "visible",
                        prefix: !1,
                        type: 1,
                        parse: function (A, e) {
                            return e.filter(xA).map(function (A) {
                                switch (A.value) {
                                    case "hidden":
                                        return 1;
                                    case "scroll":
                                        return 2;
                                    case "clip":
                                        return 3;
                                    case "auto":
                                        return 4;
                                    case "visible":
                                    default:
                                        return 0;
                                }
                            });
                        },
                    },
                    ht = {
                        name: "overflow-wrap",
                        initialValue: "normal",
                        prefix: !1,
                        type: 2,
                        parse: function (A, e) {
                            switch (e) {
                                case "break-word":
                                    return "break-word";
                                case "normal":
                                default:
                                    return "normal";
                            }
                        },
                    },
                    Ut = function (A) {
                        return { name: "padding-" + A, initialValue: "0", prefix: !1, type: 3, format: "length-percentage" };
                    },
                    Ft = Ut("top"),
                    ft = Ut("right"),
                    pt = Ut("bottom"),
                    Ht = Ut("left"),
                    yt = {
                        name: "text-align",
                        initialValue: "left",
                        prefix: !1,
                        type: 2,
                        parse: function (A, e) {
                            switch (e) {
                                case "right":
                                    return 2;
                                case "center":
                                case "justify":
                                    return 1;
                                case "left":
                                default:
                                    return 0;
                            }
                        },
                    },
                    Et = {
                        name: "position",
                        initialValue: "static",
                        prefix: !1,
                        type: 2,
                        parse: function (A, e) {
                            switch (e) {
                                case "relative":
                                    return 1;
                                case "absolute":
                                    return 2;
                                case "fixed":
                                    return 3;
                                case "sticky":
                                    return 4;
                            }
                            return 0;
                        },
                    },
                    mt = {
                        name: "text-shadow",
                        initialValue: "none",
                        type: 1,
                        prefix: !1,
                        parse: function (A, e) {
                            return 1 === e.length && kA(e[0], "none")
                                ? []
                                : TA(e).map(function (e) {
                                      for (var t = { color: se.TRANSPARENT, offsetX: PA, offsetY: PA, blur: PA }, n = 0, r = 0; r < e.length; r++) {
                                          var o = e[r];
                                          VA(o) ? (0 === n ? (t.offsetX = o) : 1 === n ? (t.offsetY = o) : (t.blur = o), n++) : (t.color = qA.parse(A, o));
                                      }
                                      return t;
                                  });
                        },
                    },
                    It = {
                        name: "text-transform",
                        initialValue: "none",
                        prefix: !1,
                        type: 2,
                        parse: function (A, e) {
                            switch (e) {
                                case "uppercase":
                                    return 2;
                                case "lowercase":
                                    return 1;
                                case "capitalize":
                                    return 3;
                            }
                            return 0;
                        },
                    },
                    bt = {
                        name: "transform",
                        initialValue: "none",
                        prefix: !0,
                        type: 0,
                        parse: function (A, e) {
                            if (20 === e.type && "none" === e.value) return null;
                            if (18 === e.type) {
                                var t = Lt[e.name];
                                if (void 0 === t) throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
                                return t(e.values);
                            }
                            return null;
                        },
                    },
                    vt = function (A) {
                        var e = A.filter(function (A) {
                            return 17 === A.type;
                        }).map(function (A) {
                            return A.number;
                        });
                        return 6 === e.length ? e : null;
                    },
                    Kt = function (A) {
                        var e = A.filter(function (A) {
                                return 17 === A.type;
                            }).map(function (A) {
                                return A.number;
                            }),
                            t = e[0],
                            n = e[1];
                        e[2], e[3];
                        var r = e[4],
                            o = e[5];
                        e[6], e[7], e[8], e[9], e[10], e[11];
                        var s = e[12],
                            i = e[13];
                        return e[14], e[15], 16 === e.length ? [t, n, r, o, s, i] : null;
                    },
                    Lt = { matrix: vt, matrix3d: Kt },
                    xt = { type: 16, number: 50, flags: 4 },
                    Dt = [xt, xt],
                    kt = {
                        name: "transform-origin",
                        initialValue: "50% 50%",
                        prefix: !0,
                        type: 1,
                        parse: function (A, e) {
                            var t = e.filter(GA);
                            return 2 !== t.length ? Dt : [t[0], t[1]];
                        },
                    },
                    Mt = {
                        name: "visible",
                        initialValue: "none",
                        prefix: !1,
                        type: 2,
                        parse: function (A, e) {
                            switch (e) {
                                case "hidden":
                                    return 1;
                                case "collapse":
                                    return 2;
                                case "visible":
                                default:
                                    return 0;
                            }
                        },
                    };
                !(function (A) {
                    (A.NORMAL = "normal"), (A.BREAK_ALL = "break-all"), (A.KEEP_ALL = "keep-all");
                })(ot || (ot = {}));
                for (
                    var St = {
                            name: "word-break",
                            initialValue: "normal",
                            prefix: !1,
                            type: 2,
                            parse: function (A, e) {
                                switch (e) {
                                    case "break-all":
                                        return ot.BREAK_ALL;
                                    case "keep-all":
                                        return ot.KEEP_ALL;
                                    case "normal":
                                    default:
                                        return ot.NORMAL;
                                }
                            },
                        },
                        Tt = {
                            name: "z-index",
                            initialValue: "auto",
                            prefix: !1,
                            type: 0,
                            parse: function (A, e) {
                                if (20 === e.type) return { auto: !0, order: 0 };
                                if (LA(e)) return { auto: !1, order: e.number };
                                throw new Error("Invalid z-index number parsed");
                            },
                        },
                        Ot = {
                            name: "time",
                            parse: function (A, e) {
                                if (15 === e.type)
                                    switch (e.unit.toLowerCase()) {
                                        case "s":
                                            return 1e3 * e.number;
                                        case "ms":
                                            return e.number;
                                    }
                                throw new Error("Unsupported time type");
                            },
                        },
                        Vt = {
                            name: "opacity",
                            initialValue: "1",
                            type: 0,
                            prefix: !1,
                            parse: function (A, e) {
                                return LA(e) ? e.number : 1;
                            },
                        },
                        Gt = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" },
                        Rt = {
                            name: "text-decoration-line",
                            initialValue: "none",
                            prefix: !1,
                            type: 1,
                            parse: function (A, e) {
                                return e
                                    .filter(xA)
                                    .map(function (A) {
                                        switch (A.value) {
                                            case "underline":
                                                return 1;
                                            case "overline":
                                                return 2;
                                            case "line-through":
                                                return 3;
                                            case "none":
                                                return 4;
                                        }
                                        return 0;
                                    })
                                    .filter(function (A) {
                                        return 0 !== A;
                                    });
                            },
                        },
                        Pt = {
                            name: "font-family",
                            initialValue: "",
                            prefix: !1,
                            type: 1,
                            parse: function (A, e) {
                                var t = [],
                                    n = [];
                                return (
                                    e.forEach(function (A) {
                                        switch (A.type) {
                                            case 20:
                                            case 0:
                                                t.push(A.value);
                                                break;
                                            case 17:
                                                t.push(A.number.toString());
                                                break;
                                            case 4:
                                                n.push(t.join(" ")), (t.length = 0);
                                        }
                                    }),
                                    t.length && n.push(t.join(" ")),
                                    n.map(function (A) {
                                        return -1 === A.indexOf(" ") ? A : "'" + A + "'";
                                    })
                                );
                            },
                        },
                        Nt = { name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length" },
                        Xt = {
                            name: "font-weight",
                            initialValue: "normal",
                            type: 0,
                            prefix: !1,
                            parse: function (A, e) {
                                if (LA(e)) return e.number;
                                if (xA(e))
                                    switch (e.value) {
                                        case "bold":
                                            return 700;
                                        case "normal":
                                        default:
                                            return 400;
                                    }
                                return 400;
                            },
                        },
                        Jt = {
                            name: "font-variant",
                            initialValue: "none",
                            type: 1,
                            prefix: !1,
                            parse: function (A, e) {
                                return e.filter(xA).map(function (A) {
                                    return A.value;
                                });
                            },
                        },
                        Yt = {
                            name: "font-style",
                            initialValue: "normal",
                            prefix: !1,
                            type: 2,
                            parse: function (A, e) {
                                switch (e) {
                                    case "oblique":
                                        return "oblique";
                                    case "italic":
                                        return "italic";
                                    case "normal":
                                    default:
                                        return "normal";
                                }
                            },
                        },
                        Wt = function (A, e) {
                            return 0 != (A & e);
                        },
                        _t = {
                            name: "content",
                            initialValue: "none",
                            type: 1,
                            prefix: !1,
                            parse: function (A, e) {
                                if (0 === e.length) return [];
                                var t = e[0];
                                return 20 === t.type && "none" === t.value ? [] : e;
                            },
                        },
                        Zt = {
                            name: "counter-increment",
                            initialValue: "none",
                            prefix: !0,
                            type: 1,
                            parse: function (A, e) {
                                if (0 === e.length) return null;
                                var t = e[0];
                                if (20 === t.type && "none" === t.value) return null;
                                for (var n = [], r = e.filter(MA), o = 0; o < r.length; o++) {
                                    var s = r[o],
                                        i = r[o + 1];
                                    if (20 === s.type) {
                                        var B = i && LA(i) ? i.number : 1;
                                        n.push({ counter: s.value, increment: B });
                                    }
                                }
                                return n;
                            },
                        },
                        jt = {
                            name: "counter-reset",
                            initialValue: "none",
                            prefix: !0,
                            type: 1,
                            parse: function (A, e) {
                                if (0 === e.length) return [];
                                for (var t = [], n = e.filter(MA), r = 0; r < n.length; r++) {
                                    var o = n[r],
                                        s = n[r + 1];
                                    if (xA(o) && "none" !== o.value) {
                                        var i = s && LA(s) ? s.number : 0;
                                        t.push({ counter: o.value, reset: i });
                                    }
                                }
                                return t;
                            },
                        },
                        qt = {
                            name: "duration",
                            initialValue: "0s",
                            prefix: !1,
                            type: 1,
                            parse: function (A, e) {
                                return e.filter(KA).map(function (e) {
                                    return Ot.parse(A, e);
                                });
                            },
                        },
                        zt = {
                            name: "quotes",
                            initialValue: "none",
                            prefix: !0,
                            type: 1,
                            parse: function (A, e) {
                                if (0 === e.length) return null;
                                var t = e[0];
                                if (20 === t.type && "none" === t.value) return null;
                                var n = [],
                                    r = e.filter(DA);
                                if (r.length % 2 != 0) return null;
                                for (var o = 0; o < r.length; o += 2) {
                                    var s = r[o].value,
                                        i = r[o + 1].value;
                                    n.push({ open: s, close: i });
                                }
                                return n;
                            },
                        },
                        $t = function (A, e, t) {
                            if (!A) return "";
                            var n = A[Math.min(e, A.length - 1)];
                            return n ? (t ? n.open : n.close) : "";
                        },
                        An = {
                            name: "box-shadow",
                            initialValue: "none",
                            type: 1,
                            prefix: !1,
                            parse: function (A, e) {
                                return 1 === e.length && kA(e[0], "none")
                                    ? []
                                    : TA(e).map(function (e) {
                                          for (var t = { color: 255, offsetX: PA, offsetY: PA, blur: PA, spread: PA, inset: !1 }, n = 0, r = 0; r < e.length; r++) {
                                              var o = e[r];
                                              kA(o, "inset") ? (t.inset = !0) : VA(o) ? (0 === n ? (t.offsetX = o) : 1 === n ? (t.offsetY = o) : 2 === n ? (t.blur = o) : (t.spread = o), n++) : (t.color = qA.parse(A, o));
                                          }
                                          return t;
                                      });
                            },
                        },
                        en = {
                            name: "paint-order",
                            initialValue: "normal",
                            prefix: !1,
                            type: 1,
                            parse: function (A, e) {
                                var t = [0, 1, 2],
                                    n = [];
                                return (
                                    e.filter(xA).forEach(function (A) {
                                        switch (A.value) {
                                            case "stroke":
                                                n.push(1);
                                                break;
                                            case "fill":
                                                n.push(0);
                                                break;
                                            case "markers":
                                                n.push(2);
                                        }
                                    }),
                                    t.forEach(function (A) {
                                        -1 === n.indexOf(A) && n.push(A);
                                    }),
                                    n
                                );
                            },
                        },
                        tn = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: !1, type: 3, format: "color" },
                        nn = {
                            name: "-webkit-text-stroke-width",
                            initialValue: "0",
                            type: 0,
                            prefix: !1,
                            parse: function (A, e) {
                                return KA(e) ? e.number : 0;
                            },
                        },
                        rn = (function () {
                            function A(A, e) {
                                var t, n;
                                (this.animationDuration = Bn(A, qt, e.animationDuration)),
                                    (this.backgroundClip = Bn(A, ie, e.backgroundClip)),
                                    (this.backgroundColor = Bn(A, Be, e.backgroundColor)),
                                    (this.backgroundImage = Bn(A, Ee, e.backgroundImage)),
                                    (this.backgroundOrigin = Bn(A, me, e.backgroundOrigin)),
                                    (this.backgroundPosition = Bn(A, Ie, e.backgroundPosition)),
                                    (this.backgroundRepeat = Bn(A, be, e.backgroundRepeat)),
                                    (this.backgroundSize = Bn(A, Le, e.backgroundSize)),
                                    (this.borderTopColor = Bn(A, ke, e.borderTopColor)),
                                    (this.borderRightColor = Bn(A, Me, e.borderRightColor)),
                                    (this.borderBottomColor = Bn(A, Se, e.borderBottomColor)),
                                    (this.borderLeftColor = Bn(A, Te, e.borderLeftColor)),
                                    (this.borderTopLeftRadius = Bn(A, Ve, e.borderTopLeftRadius)),
                                    (this.borderTopRightRadius = Bn(A, Ge, e.borderTopRightRadius)),
                                    (this.borderBottomRightRadius = Bn(A, Re, e.borderBottomRightRadius)),
                                    (this.borderBottomLeftRadius = Bn(A, Pe, e.borderBottomLeftRadius)),
                                    (this.borderTopStyle = Bn(A, Xe, e.borderTopStyle)),
                                    (this.borderRightStyle = Bn(A, Je, e.borderRightStyle)),
                                    (this.borderBottomStyle = Bn(A, Ye, e.borderBottomStyle)),
                                    (this.borderLeftStyle = Bn(A, We, e.borderLeftStyle)),
                                    (this.borderTopWidth = Bn(A, Ze, e.borderTopWidth)),
                                    (this.borderRightWidth = Bn(A, je, e.borderRightWidth)),
                                    (this.borderBottomWidth = Bn(A, qe, e.borderBottomWidth)),
                                    (this.borderLeftWidth = Bn(A, ze, e.borderLeftWidth)),
                                    (this.boxShadow = Bn(A, An, e.boxShadow)),
                                    (this.color = Bn(A, $e, e.color)),
                                    (this.direction = Bn(A, At, e.direction)),
                                    (this.display = Bn(A, et, e.display)),
                                    (this.float = Bn(A, nt, e.cssFloat)),
                                    (this.fontFamily = Bn(A, Pt, e.fontFamily)),
                                    (this.fontSize = Bn(A, Nt, e.fontSize)),
                                    (this.fontStyle = Bn(A, Yt, e.fontStyle)),
                                    (this.fontVariant = Bn(A, Jt, e.fontVariant)),
                                    (this.fontWeight = Bn(A, Xt, e.fontWeight)),
                                    (this.letterSpacing = Bn(A, rt, e.letterSpacing)),
                                    (this.lineBreak = Bn(A, st, e.lineBreak)),
                                    (this.lineHeight = Bn(A, it, e.lineHeight)),
                                    (this.listStyleImage = Bn(A, at, e.listStyleImage)),
                                    (this.listStylePosition = Bn(A, ct, e.listStylePosition)),
                                    (this.listStyleType = Bn(A, lt, e.listStyleType)),
                                    (this.marginTop = Bn(A, ut, e.marginTop)),
                                    (this.marginRight = Bn(A, Qt, e.marginRight)),
                                    (this.marginBottom = Bn(A, wt, e.marginBottom)),
                                    (this.marginLeft = Bn(A, dt, e.marginLeft)),
                                    (this.opacity = Bn(A, Vt, e.opacity));
                                var r = Bn(A, Ct, e.overflow);
                                (this.overflowX = r[0]),
                                    (this.overflowY = r[r.length > 1 ? 1 : 0]),
                                    (this.overflowWrap = Bn(A, ht, e.overflowWrap)),
                                    (this.paddingTop = Bn(A, Ft, e.paddingTop)),
                                    (this.paddingRight = Bn(A, ft, e.paddingRight)),
                                    (this.paddingBottom = Bn(A, pt, e.paddingBottom)),
                                    (this.paddingLeft = Bn(A, Ht, e.paddingLeft)),
                                    (this.paintOrder = Bn(A, en, e.paintOrder)),
                                    (this.position = Bn(A, Et, e.position)),
                                    (this.textAlign = Bn(A, yt, e.textAlign)),
                                    (this.textDecorationColor = Bn(A, Gt, null !== (t = e.textDecorationColor) && void 0 !== t ? t : e.color)),
                                    (this.textDecorationLine = Bn(A, Rt, null !== (n = e.textDecorationLine) && void 0 !== n ? n : e.textDecoration)),
                                    (this.textShadow = Bn(A, mt, e.textShadow)),
                                    (this.textTransform = Bn(A, It, e.textTransform)),
                                    (this.transform = Bn(A, bt, e.transform)),
                                    (this.transformOrigin = Bn(A, kt, e.transformOrigin)),
                                    (this.visibility = Bn(A, Mt, e.visibility)),
                                    (this.webkitTextStrokeColor = Bn(A, tn, e.webkitTextStrokeColor)),
                                    (this.webkitTextStrokeWidth = Bn(A, nn, e.webkitTextStrokeWidth)),
                                    (this.wordBreak = Bn(A, St, e.wordBreak)),
                                    (this.zIndex = Bn(A, Tt, e.zIndex));
                            }
                            return (
                                (A.prototype.isVisible = function () {
                                    return this.display > 0 && this.opacity > 0 && 0 === this.visibility;
                                }),
                                (A.prototype.isTransparent = function () {
                                    return zA(this.backgroundColor);
                                }),
                                (A.prototype.isTransformed = function () {
                                    return null !== this.transform;
                                }),
                                (A.prototype.isPositioned = function () {
                                    return 0 !== this.position;
                                }),
                                (A.prototype.isPositionedWithZIndex = function () {
                                    return this.isPositioned() && !this.zIndex.auto;
                                }),
                                (A.prototype.isFloating = function () {
                                    return 0 !== this.float;
                                }),
                                (A.prototype.isInlineLevel = function () {
                                    return Wt(this.display, 4) || Wt(this.display, 33554432) || Wt(this.display, 268435456) || Wt(this.display, 536870912) || Wt(this.display, 67108864) || Wt(this.display, 134217728);
                                }),
                                A
                            );
                        })(),
                        on = (function () {
                            function A(A, e) {
                                (this.content = Bn(A, _t, e.content)), (this.quotes = Bn(A, zt, e.quotes));
                            }
                            return A;
                        })(),
                        sn = (function () {
                            function A(A, e) {
                                (this.counterIncrement = Bn(A, Zt, e.counterIncrement)), (this.counterReset = Bn(A, jt, e.counterReset));
                            }
                            return A;
                        })(),
                        Bn = function (A, e, t) {
                            var n = new bA(),
                                r = null !== t && void 0 !== t ? t.toString() : e.initialValue;
                            n.write(r);
                            var o = new vA(n.read());
                            switch (e.type) {
                                case 2:
                                    var s = o.parseComponentValue();
                                    return e.parse(A, xA(s) ? s.value : e.initialValue);
                                case 0:
                                    return e.parse(A, o.parseComponentValue());
                                case 1:
                                    return e.parse(A, o.parseComponentValues());
                                case 4:
                                    return o.parseComponentValue();
                                case 3:
                                    switch (e.format) {
                                        case "angle":
                                            return WA.parse(A, o.parseComponentValue());
                                        case "color":
                                            return qA.parse(A, o.parseComponentValue());
                                        case "image":
                                            return He.parse(A, o.parseComponentValue());
                                        case "length":
                                            var i = o.parseComponentValue();
                                            return VA(i) ? i : PA;
                                        case "length-percentage":
                                            var B = o.parseComponentValue();
                                            return GA(B) ? B : PA;
                                        case "time":
                                            return Ot.parse(A, o.parseComponentValue());
                                    }
                            }
                        },
                        an = function (A) {
                            switch (A.getAttribute("data-html2canvas-debug")) {
                                case "all":
                                    return 1;
                                case "clone":
                                    return 2;
                                case "parse":
                                    return 3;
                                case "render":
                                    return 4;
                                default:
                                    return 0;
                            }
                        },
                        cn = function (A, e) {
                            var t = an(A);
                            return 1 === t || e === t;
                        },
                        ln = (function () {
                            function A(A, e) {
                                (this.context = A),
                                    (this.textNodes = []),
                                    (this.elements = []),
                                    (this.flags = 0),
                                    cn(e, 3),
                                    (this.styles = new rn(A, window.getComputedStyle(e, null))),
                                    Er(e) &&
                                        (this.styles.animationDuration.some(function (A) {
                                            return A > 0;
                                        }) && (e.style.animationDuration = "0s"),
                                        null !== this.styles.transform && (e.style.transform = "none")),
                                    (this.bounds = a(this.context, e)),
                                    cn(e, 4) && (this.flags |= 16);
                            }
                            return A;
                        })(),
                        gn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        un = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
                        Qn = 0;
                    Qn < gn.length;
                    Qn++
                )
                    un[gn.charCodeAt(Qn)] = Qn;
                for (
                    var wn = function (A) {
                            var e,
                                t,
                                n,
                                r,
                                o,
                                s = 0.75 * A.length,
                                i = A.length,
                                B = 0;
                            "=" === A[A.length - 1] && (s--, "=" === A[A.length - 2] && s--);
                            var a = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(s) : new Array(s),
                                c = Array.isArray(a) ? a : new Uint8Array(a);
                            for (e = 0; e < i; e += 4)
                                (t = un[A.charCodeAt(e)]),
                                    (n = un[A.charCodeAt(e + 1)]),
                                    (r = un[A.charCodeAt(e + 2)]),
                                    (o = un[A.charCodeAt(e + 3)]),
                                    (c[B++] = (t << 2) | (n >> 4)),
                                    (c[B++] = ((15 & n) << 4) | (r >> 2)),
                                    (c[B++] = ((3 & r) << 6) | (63 & o));
                            return a;
                        },
                        dn = function (A) {
                            for (var e = A.length, t = [], n = 0; n < e; n += 2) t.push((A[n + 1] << 8) | A[n]);
                            return t;
                        },
                        Cn = function (A) {
                            for (var e = A.length, t = [], n = 0; n < e; n += 4) t.push((A[n + 3] << 24) | (A[n + 2] << 16) | (A[n + 1] << 8) | A[n]);
                            return t;
                        },
                        hn = function (A, e, t) {
                            return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
                        },
                        Un = function (A, e, t) {
                            return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
                        },
                        Fn = (function () {
                            function A(A, e, t, n, r, o) {
                                (this.initialValue = A), (this.errorValue = e), (this.highStart = t), (this.highValueIndex = n), (this.index = r), (this.data = o);
                            }
                            return (
                                (A.prototype.get = function (A) {
                                    var e;
                                    if (A >= 0) {
                                        if (A < 55296 || (A > 56319 && A <= 65535)) return (e = this.index[A >> 5]), (e = (e << 2) + (31 & A)), this.data[e];
                                        if (A <= 65535) return (e = this.index[2048 + ((A - 55296) >> 5)]), (e = (e << 2) + (31 & A)), this.data[e];
                                        if (A < this.highStart) return (e = 2080 + (A >> 11)), (e = this.index[e]), (e += (A >> 5) & 63), (e = this.index[e]), (e = (e << 2) + (31 & A)), this.data[e];
                                        if (A <= 1114111) return this.data[this.highValueIndex];
                                    }
                                    return this.errorValue;
                                }),
                                A
                            );
                        })(),
                        fn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        pn = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
                        Hn = 0;
                    Hn < fn.length;
                    Hn++
                )
                    pn[fn.charCodeAt(Hn)] = Hn;
                var yn,
                    En = function (A) {
                        for (var e = [], t = 0, n = A.length; t < n; ) {
                            var r = A.charCodeAt(t++);
                            if (r >= 55296 && r <= 56319 && t < n) {
                                var o = A.charCodeAt(t++);
                                56320 == (64512 & o) ? e.push(((1023 & r) << 10) + (1023 & o) + 65536) : (e.push(r), t--);
                            } else e.push(r);
                        }
                        return e;
                    },
                    mn = function () {
                        for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                        if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
                        var t = A.length;
                        if (!t) return "";
                        for (var n = [], r = -1, o = ""; ++r < t; ) {
                            var s = A[r];
                            s <= 65535 ? n.push(s) : ((s -= 65536), n.push(55296 + (s >> 10), (s % 1024) + 56320)), (r + 1 === t || n.length > 16384) && ((o += String.fromCharCode.apply(String, n)), (n.length = 0));
                        }
                        return o;
                    },
                    In = (function (A, e) {
                        var t = wn(A),
                            n = Array.isArray(t) ? Cn(t) : new Uint32Array(t),
                            r = Array.isArray(t) ? dn(t) : new Uint16Array(t),
                            o = hn(r, 12, n[4] / 2),
                            s = 2 === n[5] ? hn(r, (24 + n[4]) / 2) : Un(n, Math.ceil((24 + n[4]) / 4));
                        return new Fn(n[0], n[1], n[2], n[3], o, s);
                    })(
                        "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="
                    ),
                    bn = function (A) {
                        return In.get(A);
                    },
                    vn = function (A, e, t) {
                        var n = t - 2,
                            r = e[n],
                            o = e[t - 1],
                            s = e[t];
                        if (2 === o && 3 === s) return "×";
                        if (2 === o || 3 === o || 4 === o) return "÷";
                        if (2 === s || 3 === s || 4 === s) return "÷";
                        if (8 === o && -1 !== [8, 9, 11, 12].indexOf(s)) return "×";
                        if (!((11 !== o && 9 !== o) || (9 !== s && 10 !== s))) return "×";
                        if ((12 === o || 10 === o) && 10 === s) return "×";
                        if (13 === s || 5 === s) return "×";
                        if (7 === s) return "×";
                        if (1 === o) return "×";
                        if (13 === o && 14 === s) {
                            for (; 5 === r; ) r = e[--n];
                            if (14 === r) return "×";
                        }
                        if (15 === o && 15 === s) {
                            for (var i = 0; 15 === r; ) i++, (r = e[--n]);
                            if (i % 2 == 0) return "×";
                        }
                        return "÷";
                    },
                    Kn = function (A) {
                        var e = En(A),
                            t = e.length,
                            n = 0,
                            r = 0,
                            o = e.map(bn);
                        return {
                            next: function () {
                                if (n >= t) return { done: !0, value: null };
                                for (var A = "×"; n < t && "×" === (A = vn(0, o, ++n)); );
                                if ("×" !== A || n === t) {
                                    var s = mn.apply(null, e.slice(r, n));
                                    return (r = n), { value: s, done: !1 };
                                }
                                return { done: !0, value: null };
                            },
                        };
                    },
                    Ln = function (A) {
                        for (var e, t = Kn(A), n = []; !(e = t.next()).done; ) e.value && n.push(e.value.slice());
                        return n;
                    },
                    xn = function (A) {
                        if (A.createRange) {
                            var e = A.createRange();
                            if (e.getBoundingClientRect) {
                                var t = A.createElement("boundtest");
                                (t.style.height = "123px"), (t.style.display = "block"), A.body.appendChild(t), e.selectNode(t);
                                var n = e.getBoundingClientRect(),
                                    r = Math.round(n.height);
                                if ((A.body.removeChild(t), 123 === r)) return !0;
                            }
                        }
                        return !1;
                    },
                    Dn = function (A) {
                        var e = A.createElement("boundtest");
                        (e.style.width = "50px"), (e.style.display = "block"), (e.style.fontSize = "12px"), (e.style.letterSpacing = "0px"), (e.style.wordSpacing = "0px"), A.body.appendChild(e);
                        var t = A.createRange();
                        e.innerHTML = "function" == typeof "".repeat ? "&#128104;".repeat(10) : "";
                        var n = e.firstChild,
                            r = l(n.data).map(function (A) {
                                return g(A);
                            }),
                            o = 0,
                            s = {},
                            i = r.every(function (A, e) {
                                t.setStart(n, o), t.setEnd(n, o + A.length);
                                var r = t.getBoundingClientRect();
                                o += A.length;
                                var i = r.x > s.x || r.y > s.y;
                                return (s = r), 0 === e || i;
                            });
                        return A.body.removeChild(e), i;
                    },
                    kn = function () {
                        return void 0 !== new Image().crossOrigin;
                    },
                    Mn = function () {
                        return "string" == typeof new XMLHttpRequest().responseType;
                    },
                    Sn = function (A) {
                        var e = new Image(),
                            t = A.createElement("canvas"),
                            n = t.getContext("2d");
                        if (!n) return !1;
                        e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                        try {
                            n.drawImage(e, 0, 0), t.toDataURL();
                        } catch (A) {
                            return !1;
                        }
                        return !0;
                    },
                    Tn = function (A) {
                        return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3];
                    },
                    On = function (A) {
                        var e = A.createElement("canvas");
                        (e.width = 100), (e.height = 100);
                        var t = e.getContext("2d");
                        if (!t) return Promise.reject(!1);
                        (t.fillStyle = "rgb(0, 255, 0)"), t.fillRect(0, 0, 100, 100);
                        var n = new Image(),
                            r = e.toDataURL();
                        n.src = r;
                        var o = Vn(100, 100, 0, 0, n);
                        return (
                            (t.fillStyle = "red"),
                            t.fillRect(0, 0, 100, 100),
                            Gn(o)
                                .then(function (e) {
                                    t.drawImage(e, 0, 0);
                                    var n = t.getImageData(0, 0, 100, 100).data;
                                    (t.fillStyle = "red"), t.fillRect(0, 0, 100, 100);
                                    var o = A.createElement("div");
                                    return (o.style.backgroundImage = "url(" + r + ")"), (o.style.height = "100px"), Tn(n) ? Gn(Vn(100, 100, 0, 0, o)) : Promise.reject(!1);
                                })
                                .then(function (A) {
                                    return t.drawImage(A, 0, 0), Tn(t.getImageData(0, 0, 100, 100).data);
                                })
                                .catch(function () {
                                    return !1;
                                })
                        );
                    },
                    Vn = function (A, e, t, n, r) {
                        var o = "http://www.w3.org/2000/svg",
                            s = document.createElementNS(o, "svg"),
                            i = document.createElementNS(o, "foreignObject");
                        return (
                            s.setAttributeNS(null, "width", A.toString()),
                            s.setAttributeNS(null, "height", e.toString()),
                            i.setAttributeNS(null, "width", "100%"),
                            i.setAttributeNS(null, "height", "100%"),
                            i.setAttributeNS(null, "x", t.toString()),
                            i.setAttributeNS(null, "y", n.toString()),
                            i.setAttributeNS(null, "externalResourcesRequired", "true"),
                            s.appendChild(i),
                            i.appendChild(r),
                            s
                        );
                    },
                    Gn = function (A) {
                        return new Promise(function (e, t) {
                            var n = new Image();
                            (n.onload = function () {
                                return e(n);
                            }),
                                (n.onerror = t),
                                (n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A)));
                        });
                    },
                    Rn = {
                        get SUPPORT_RANGE_BOUNDS() {
                            var A = xn(document);
                            return Object.defineProperty(Rn, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
                        },
                        get SUPPORT_WORD_BREAKING() {
                            var A = Rn.SUPPORT_RANGE_BOUNDS && Dn(document);
                            return Object.defineProperty(Rn, "SUPPORT_WORD_BREAKING", { value: A }), A;
                        },
                        get SUPPORT_SVG_DRAWING() {
                            var A = Sn(document);
                            return Object.defineProperty(Rn, "SUPPORT_SVG_DRAWING", { value: A }), A;
                        },
                        get SUPPORT_FOREIGNOBJECT_DRAWING() {
                            var A = "function" == typeof Array.from && "function" == typeof window.fetch ? On(document) : Promise.resolve(!1);
                            return Object.defineProperty(Rn, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A;
                        },
                        get SUPPORT_CORS_IMAGES() {
                            var A = kn();
                            return Object.defineProperty(Rn, "SUPPORT_CORS_IMAGES", { value: A }), A;
                        },
                        get SUPPORT_RESPONSE_TYPE() {
                            var A = Mn();
                            return Object.defineProperty(Rn, "SUPPORT_RESPONSE_TYPE", { value: A }), A;
                        },
                        get SUPPORT_CORS_XHR() {
                            var A = "withCredentials" in new XMLHttpRequest();
                            return Object.defineProperty(Rn, "SUPPORT_CORS_XHR", { value: A }), A;
                        },
                        get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
                            var A = !("undefined" == typeof Intl || !Intl.Segmenter);
                            return Object.defineProperty(Rn, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: A }), A;
                        },
                    },
                    Pn = (function () {
                        function A(A, e) {
                            (this.text = A), (this.bounds = e);
                        }
                        return A;
                    })(),
                    Nn = function (A, e, t, n) {
                        var r = _n(e, t),
                            o = [],
                            s = 0;
                        return (
                            r.forEach(function (e) {
                                if (t.textDecorationLine.length || e.trim().length > 0)
                                    if (Rn.SUPPORT_RANGE_BOUNDS) {
                                        var r = Jn(n, s, e.length).getClientRects();
                                        if (r.length > 1) {
                                            var i = Yn(e),
                                                a = 0;
                                            i.forEach(function (e) {
                                                o.push(new Pn(e, B.fromDOMRectList(A, Jn(n, a + s, e.length).getClientRects()))), (a += e.length);
                                            });
                                        } else o.push(new Pn(e, B.fromDOMRectList(A, r)));
                                    } else {
                                        var c = n.splitText(e.length);
                                        o.push(new Pn(e, Xn(A, n))), (n = c);
                                    }
                                else Rn.SUPPORT_RANGE_BOUNDS || (n = n.splitText(e.length));
                                s += e.length;
                            }),
                            o
                        );
                    },
                    Xn = function (A, e) {
                        var t = e.ownerDocument;
                        if (t) {
                            var n = t.createElement("html2canvaswrapper");
                            n.appendChild(e.cloneNode(!0));
                            var r = e.parentNode;
                            if (r) {
                                r.replaceChild(n, e);
                                var o = a(A, n);
                                return n.firstChild && r.replaceChild(n.firstChild, n), o;
                            }
                        }
                        return B.EMPTY;
                    },
                    Jn = function (A, e, t) {
                        var n = A.ownerDocument;
                        if (!n) throw new Error("Node has no owner document");
                        var r = n.createRange();
                        return r.setStart(A, e), r.setEnd(A, e + t), r;
                    },
                    Yn = function (A) {
                        if (Rn.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
                            var e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
                            return Array.from(e.segment(A)).map(function (A) {
                                return A.segment;
                            });
                        }
                        return Ln(A);
                    },
                    Wn = function (A, e) {
                        if (Rn.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
                            var t = new Intl.Segmenter(void 0, { granularity: "word" });
                            return Array.from(t.segment(A)).map(function (A) {
                                return A.segment;
                            });
                        }
                        return jn(A, e);
                    },
                    _n = function (A, e) {
                        return 0 !== e.letterSpacing ? Yn(A) : Wn(A, e);
                    },
                    Zn = [32, 160, 4961, 65792, 65793, 4153, 4241],
                    jn = function (A, e) {
                        for (var t, n = J(A, { lineBreak: e.lineBreak, wordBreak: "break-word" === e.overflowWrap ? "break-word" : e.wordBreak }), r = []; !(t = n.next()).done; )
                            !(function () {
                                if (t.value) {
                                    var A = t.value.slice(),
                                        e = l(A),
                                        n = "";
                                    e.forEach(function (A) {
                                        -1 === Zn.indexOf(A) ? (n += g(A)) : (n.length && r.push(n), r.push(g(A)), (n = ""));
                                    }),
                                        n.length && r.push(n);
                                }
                            })();
                        return r;
                    },
                    qn = (function () {
                        function A(A, e, t) {
                            (this.text = zn(e.data, t.textTransform)), (this.textBounds = Nn(A, this.text, t, e));
                        }
                        return A;
                    })(),
                    zn = function (A, e) {
                        switch (e) {
                            case 1:
                                return A.toLowerCase();
                            case 3:
                                return A.replace($n, Ar);
                            case 2:
                                return A.toUpperCase();
                            default:
                                return A;
                        }
                    },
                    $n = /(^|\s|:|-|\(|\))([a-z])/g,
                    Ar = function (A, e, t) {
                        return A.length > 0 ? e + t.toUpperCase() : A;
                    },
                    er = (function (e) {
                        function t(A, t) {
                            var n = e.call(this, A, t) || this;
                            return (n.src = t.currentSrc || t.src), (n.intrinsicWidth = t.naturalWidth), (n.intrinsicHeight = t.naturalHeight), n.context.cache.addImage(n.src), n;
                        }
                        return A(t, e), t;
                    })(ln),
                    tr = (function (e) {
                        function t(A, t) {
                            var n = e.call(this, A, t) || this;
                            return (n.canvas = t), (n.intrinsicWidth = t.width), (n.intrinsicHeight = t.height), n;
                        }
                        return A(t, e), t;
                    })(ln),
                    nr = (function (e) {
                        function t(A, t) {
                            var n = e.call(this, A, t) || this,
                                r = new XMLSerializer(),
                                o = a(A, t);
                            return (
                                t.setAttribute("width", o.width + "px"),
                                t.setAttribute("height", o.height + "px"),
                                (n.svg = "data:image/svg+xml," + encodeURIComponent(r.serializeToString(t))),
                                (n.intrinsicWidth = t.width.baseVal.value),
                                (n.intrinsicHeight = t.height.baseVal.value),
                                n.context.cache.addImage(n.svg),
                                n
                            );
                        }
                        return A(t, e), t;
                    })(ln),
                    rr = (function (e) {
                        function t(A, t) {
                            var n = e.call(this, A, t) || this;
                            return (n.value = t.value), n;
                        }
                        return A(t, e), t;
                    })(ln),
                    or = (function (e) {
                        function t(A, t) {
                            var n = e.call(this, A, t) || this;
                            return (n.start = t.start), (n.reversed = "boolean" == typeof t.reversed && !0 === t.reversed), n;
                        }
                        return A(t, e), t;
                    })(ln),
                    sr = [{ type: 15, flags: 0, unit: "px", number: 3 }],
                    ir = [{ type: 16, flags: 0, number: 50 }],
                    Br = function (A) {
                        return A.width > A.height ? new B(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new B(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
                    },
                    ar = function (A) {
                        var e = A.type === gr ? new Array(A.value.length + 1).join("•") : A.value;
                        return 0 === e.length ? A.placeholder || "" : e;
                    },
                    cr = "checkbox",
                    lr = "radio",
                    gr = "password",
                    ur = (function (e) {
                        function t(A, t) {
                            var n = e.call(this, A, t) || this;
                            switch (
                                ((n.type = t.type.toLowerCase()),
                                (n.checked = t.checked),
                                (n.value = ar(t)),
                                (n.type !== cr && n.type !== lr) ||
                                    ((n.styles.backgroundColor = 3739148031),
                                    (n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575),
                                    (n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1),
                                    (n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1),
                                    (n.styles.backgroundClip = [0]),
                                    (n.styles.backgroundOrigin = [0]),
                                    (n.bounds = Br(n.bounds))),
                                n.type)
                            ) {
                                case cr:
                                    n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = sr;
                                    break;
                                case lr:
                                    n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = ir;
                            }
                            return n;
                        }
                        return A(t, e), t;
                    })(ln),
                    Qr = (function (e) {
                        function t(A, t) {
                            var n = e.call(this, A, t) || this,
                                r = t.options[t.selectedIndex || 0];
                            return (n.value = r ? r.text || "" : ""), n;
                        }
                        return A(t, e), t;
                    })(ln),
                    wr = (function (e) {
                        function t(A, t) {
                            var n = e.call(this, A, t) || this;
                            return (n.value = t.value), n;
                        }
                        return A(t, e), t;
                    })(ln),
                    dr = (function (e) {
                        function t(A, t) {
                            var n = e.call(this, A, t) || this;
                            (n.src = t.src), (n.width = parseInt(t.width, 10) || 0), (n.height = parseInt(t.height, 10) || 0), (n.backgroundColor = n.styles.backgroundColor);
                            try {
                                if (t.contentWindow && t.contentWindow.document && t.contentWindow.document.documentElement) {
                                    n.tree = Fr(A, t.contentWindow.document.documentElement);
                                    var r = t.contentWindow.document.documentElement ? oe(A, getComputedStyle(t.contentWindow.document.documentElement).backgroundColor) : se.TRANSPARENT,
                                        o = t.contentWindow.document.body ? oe(A, getComputedStyle(t.contentWindow.document.body).backgroundColor) : se.TRANSPARENT;
                                    n.backgroundColor = zA(r) ? (zA(o) ? n.styles.backgroundColor : o) : r;
                                }
                            } catch (A) {}
                            return n;
                        }
                        return A(t, e), t;
                    })(ln),
                    Cr = ["OL", "UL", "MENU"],
                    hr = function (A, e, t, n) {
                        for (var r = e.firstChild, o = void 0; r; r = o)
                            if (((o = r.nextSibling), Hr(r) && r.data.trim().length > 0)) t.textNodes.push(new qn(A, r, t.styles));
                            else if (yr(r))
                                if (Rr(r) && r.assignedNodes)
                                    r.assignedNodes().forEach(function (e) {
                                        return hr(A, e, t, n);
                                    });
                                else {
                                    var s = Ur(A, r);
                                    s.styles.isVisible() &&
                                        (fr(r, s, n) ? (s.flags |= 4) : pr(s.styles) && (s.flags |= 2),
                                        -1 !== Cr.indexOf(r.tagName) && (s.flags |= 8),
                                        t.elements.push(s),
                                        r.slot,
                                        r.shadowRoot ? hr(A, r.shadowRoot, s, n) : Vr(r) || Lr(r) || Gr(r) || hr(A, r, s, n));
                                }
                    },
                    Ur = function (A, e) {
                        return Mr(e)
                            ? new er(A, e)
                            : Dr(e)
                            ? new tr(A, e)
                            : Lr(e)
                            ? new nr(A, e)
                            : Ir(e)
                            ? new rr(A, e)
                            : br(e)
                            ? new or(A, e)
                            : vr(e)
                            ? new ur(A, e)
                            : Gr(e)
                            ? new Qr(A, e)
                            : Vr(e)
                            ? new wr(A, e)
                            : Sr(e)
                            ? new dr(A, e)
                            : new ln(A, e);
                    },
                    Fr = function (A, e) {
                        var t = Ur(A, e);
                        return (t.flags |= 4), hr(A, e, t, t), t;
                    },
                    fr = function (A, e, t) {
                        return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || (xr(A) && t.styles.isTransparent());
                    },
                    pr = function (A) {
                        return A.isPositioned() || A.isFloating();
                    },
                    Hr = function (A) {
                        return A.nodeType === Node.TEXT_NODE;
                    },
                    yr = function (A) {
                        return A.nodeType === Node.ELEMENT_NODE;
                    },
                    Er = function (A) {
                        return yr(A) && void 0 !== A.style && !mr(A);
                    },
                    mr = function (A) {
                        return "object" == typeof A.className;
                    },
                    Ir = function (A) {
                        return "LI" === A.tagName;
                    },
                    br = function (A) {
                        return "OL" === A.tagName;
                    },
                    vr = function (A) {
                        return "INPUT" === A.tagName;
                    },
                    Kr = function (A) {
                        return "HTML" === A.tagName;
                    },
                    Lr = function (A) {
                        return "svg" === A.tagName;
                    },
                    xr = function (A) {
                        return "BODY" === A.tagName;
                    },
                    Dr = function (A) {
                        return "CANVAS" === A.tagName;
                    },
                    kr = function (A) {
                        return "VIDEO" === A.tagName;
                    },
                    Mr = function (A) {
                        return "IMG" === A.tagName;
                    },
                    Sr = function (A) {
                        return "IFRAME" === A.tagName;
                    },
                    Tr = function (A) {
                        return "STYLE" === A.tagName;
                    },
                    Or = function (A) {
                        return "SCRIPT" === A.tagName;
                    },
                    Vr = function (A) {
                        return "TEXTAREA" === A.tagName;
                    },
                    Gr = function (A) {
                        return "SELECT" === A.tagName;
                    },
                    Rr = function (A) {
                        return "SLOT" === A.tagName;
                    },
                    Pr = function (A) {
                        return A.tagName.indexOf("-") > 0;
                    },
                    Nr = (function () {
                        function A() {
                            this.counters = {};
                        }
                        return (
                            (A.prototype.getCounterValue = function (A) {
                                var e = this.counters[A];
                                return e && e.length ? e[e.length - 1] : 1;
                            }),
                            (A.prototype.getCounterValues = function (A) {
                                var e = this.counters[A];
                                return e || [];
                            }),
                            (A.prototype.pop = function (A) {
                                var e = this;
                                A.forEach(function (A) {
                                    return e.counters[A].pop();
                                });
                            }),
                            (A.prototype.parse = function (A) {
                                var e = this,
                                    t = A.counterIncrement,
                                    n = A.counterReset,
                                    r = !0;
                                null !== t &&
                                    t.forEach(function (A) {
                                        var t = e.counters[A.counter];
                                        t && 0 !== A.increment && ((r = !1), t.length || t.push(1), (t[Math.max(0, t.length - 1)] += A.increment));
                                    });
                                var o = [];
                                return (
                                    r &&
                                        n.forEach(function (A) {
                                            var t = e.counters[A.counter];
                                            o.push(A.counter), t || (t = e.counters[A.counter] = []), t.push(A.reset);
                                        }),
                                    o
                                );
                            }),
                            A
                        );
                    })(),
                    Xr = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] },
                    Jr = {
                        integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                        values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"],
                    },
                    Yr = {
                        integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                        values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"],
                    },
                    Wr = {
                        integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                        values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"],
                    },
                    _r = function (A, e, t, n, r, o) {
                        return A < e || A > t
                            ? $r(A, r, o.length > 0)
                            : n.integers.reduce(function (e, t, r) {
                                  for (; A >= t; ) (A -= t), (e += n.values[r]);
                                  return e;
                              }, "") + o;
                    },
                    Zr = function (A, e, t, n) {
                        var r = "";
                        do {
                            t || A--, (r = n(A) + r), (A /= e);
                        } while (A * e >= e);
                        return r;
                    },
                    jr = function (A, e, t, n, r) {
                        var o = t - e + 1;
                        return (
                            (A < 0 ? "-" : "") +
                            (Zr(Math.abs(A), o, n, function (A) {
                                return g(Math.floor(A % o) + e);
                            }) +
                                r)
                        );
                    },
                    qr = function (A, e, t) {
                        void 0 === t && (t = ". ");
                        var n = e.length;
                        return (
                            Zr(Math.abs(A), n, !1, function (A) {
                                return e[Math.floor(A % n)];
                            }) + t
                        );
                    },
                    zr = function (A, e, t, n, r, o) {
                        if (A < -9999 || A > 9999) return $r(A, 4, r.length > 0);
                        var s = Math.abs(A),
                            i = r;
                        if (0 === s) return e[0] + i;
                        for (var B = 0; s > 0 && B <= 4; B++) {
                            var a = s % 10;
                            0 === a && Wt(o, 1) && "" !== i
                                ? (i = e[a] + i)
                                : a > 1 || (1 === a && 0 === B) || (1 === a && 1 === B && Wt(o, 2)) || (1 === a && 1 === B && Wt(o, 4) && A > 100) || (1 === a && B > 1 && Wt(o, 8))
                                ? (i = e[a] + (B > 0 ? t[B - 1] : "") + i)
                                : 1 === a && B > 0 && (i = t[B - 1] + i),
                                (s = Math.floor(s / 10));
                        }
                        return (A < 0 ? n : "") + i;
                    },
                    $r = function (A, e, t) {
                        var n = t ? ". " : "",
                            r = t ? "、" : "",
                            o = t ? ", " : "",
                            s = t ? " " : "";
                        switch (e) {
                            case 0:
                                return "•" + s;
                            case 1:
                                return "◦" + s;
                            case 2:
                                return "◾" + s;
                            case 5:
                                var i = jr(A, 48, 57, !0, n);
                                return i.length < 4 ? "0" + i : i;
                            case 4:
                                return qr(A, "〇一二三四五六七八九", r);
                            case 6:
                                return _r(A, 1, 3999, Xr, 3, n).toLowerCase();
                            case 7:
                                return _r(A, 1, 3999, Xr, 3, n);
                            case 8:
                                return jr(A, 945, 969, !1, n);
                            case 9:
                                return jr(A, 97, 122, !1, n);
                            case 10:
                                return jr(A, 65, 90, !1, n);
                            case 11:
                                return jr(A, 1632, 1641, !0, n);
                            case 12:
                            case 49:
                                return _r(A, 1, 9999, Jr, 3, n);
                            case 35:
                                return _r(A, 1, 9999, Jr, 3, n).toLowerCase();
                            case 13:
                                return jr(A, 2534, 2543, !0, n);
                            case 14:
                            case 30:
                                return jr(A, 6112, 6121, !0, n);
                            case 15:
                                return qr(A, "子丑寅卯辰巳午未申酉戌亥", r);
                            case 16:
                                return qr(A, "甲乙丙丁戊己庚辛壬癸", r);
                            case 17:
                            case 48:
                                return zr(A, "零一二三四五六七八九", "十百千萬", "負", r, 14);
                            case 47:
                                return zr(A, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", r, 15);
                            case 42:
                                return zr(A, "零一二三四五六七八九", "十百千萬", "负", r, 14);
                            case 41:
                                return zr(A, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", r, 15);
                            case 26:
                                return zr(A, "〇一二三四五六七八九", "十百千万", "マイナス", r, 0);
                            case 25:
                                return zr(A, "零壱弐参四伍六七八九", "拾百千万", "マイナス", r, 7);
                            case 31:
                                return zr(A, "영일이삼사오육칠팔구", "십백천만", "마이너스", o, 7);
                            case 33:
                                return zr(A, "零一二三四五六七八九", "十百千萬", "마이너스", o, 0);
                            case 32:
                                return zr(A, "零壹貳參四五六七八九", "拾百千", "마이너스", o, 7);
                            case 18:
                                return jr(A, 2406, 2415, !0, n);
                            case 20:
                                return _r(A, 1, 19999, Wr, 3, n);
                            case 21:
                                return jr(A, 2790, 2799, !0, n);
                            case 22:
                                return jr(A, 2662, 2671, !0, n);
                            case 22:
                                return _r(A, 1, 10999, Yr, 3, n);
                            case 23:
                                return qr(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
                            case 24:
                                return qr(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
                            case 27:
                                return jr(A, 3302, 3311, !0, n);
                            case 28:
                                return qr(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", r);
                            case 29:
                                return qr(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", r);
                            case 34:
                                return jr(A, 3792, 3801, !0, n);
                            case 37:
                                return jr(A, 6160, 6169, !0, n);
                            case 38:
                                return jr(A, 4160, 4169, !0, n);
                            case 39:
                                return jr(A, 2918, 2927, !0, n);
                            case 40:
                                return jr(A, 1776, 1785, !0, n);
                            case 43:
                                return jr(A, 3046, 3055, !0, n);
                            case 44:
                                return jr(A, 3174, 3183, !0, n);
                            case 45:
                                return jr(A, 3664, 3673, !0, n);
                            case 46:
                                return jr(A, 3872, 3881, !0, n);
                            case 3:
                            default:
                                return jr(A, 48, 57, !0, n);
                        }
                    },
                    Ao = (function () {
                        function A(A, e, t) {
                            if (((this.context = A), (this.options = t), (this.scrolledElements = []), (this.referenceElement = e), (this.counters = new Nr()), (this.quoteDepth = 0), !e.ownerDocument))
                                throw new Error("Cloned element does not have an owner document");
                            this.documentElement = this.cloneNode(e.ownerDocument.documentElement, !1);
                        }
                        return (
                            (A.prototype.toIFrame = function (A, n) {
                                var r = this,
                                    o = to(A, n);
                                if (!o.contentWindow) return Promise.reject("Unable to find iframe window");
                                var s = A.defaultView.pageXOffset,
                                    i = A.defaultView.pageYOffset,
                                    B = o.contentWindow,
                                    a = B.document,
                                    c = oo(o).then(function () {
                                        return e(r, void 0, void 0, function () {
                                            var A, e;
                                            return t(this, function (t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return (
                                                            this.scrolledElements.forEach(co),
                                                            B &&
                                                                (B.scrollTo(n.left, n.top),
                                                                !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) ||
                                                                    (B.scrollY === n.top && B.scrollX === n.left) ||
                                                                    (this.context.logger.warn("Unable to restore scroll position for cloned document"),
                                                                    (this.context.windowBounds = this.context.windowBounds.add(B.scrollX - n.left, B.scrollY - n.top, 0, 0)))),
                                                            (A = this.options.onclone),
                                                            (e = this.clonedReferenceElement),
                                                            void 0 === e ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : a.fonts && a.fonts.ready ? [4, a.fonts.ready] : [3, 2]
                                                        );
                                                    case 1:
                                                        t.sent(), (t.label = 2);
                                                    case 2:
                                                        return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, ro(a)] : [3, 4];
                                                    case 3:
                                                        t.sent(), (t.label = 4);
                                                    case 4:
                                                        return "function" == typeof A
                                                            ? [
                                                                  2,
                                                                  Promise.resolve()
                                                                      .then(function () {
                                                                          return A(a, e);
                                                                      })
                                                                      .then(function () {
                                                                          return o;
                                                                      }),
                                                              ]
                                                            : [2, o];
                                                }
                                            });
                                        });
                                    });
                                return a.open(), a.write(Bo(document.doctype) + "<html></html>"), ao(this.referenceElement.ownerDocument, s, i), a.replaceChild(a.adoptNode(this.documentElement), a.documentElement), a.close(), c;
                            }),
                            (A.prototype.createElementClone = function (A) {
                                if ((cn(A, 2), Dr(A))) return this.createCanvasClone(A);
                                if (kr(A)) return this.createVideoClone(A);
                                if (Tr(A)) return this.createStyleClone(A);
                                var e = A.cloneNode(!1);
                                return Mr(e) && (Mr(A) && A.currentSrc && A.currentSrc !== A.src && ((e.src = A.currentSrc), (e.srcset = "")), "lazy" === e.loading && (e.loading = "eager")), Pr(e) ? this.createCustomElementClone(e) : e;
                            }),
                            (A.prototype.createCustomElementClone = function (A) {
                                var e = document.createElement("html2canvascustomelement");
                                return io(A.style, e), e;
                            }),
                            (A.prototype.createStyleClone = function (A) {
                                try {
                                    var e = A.sheet;
                                    if (e && e.cssRules) {
                                        var t = [].slice.call(e.cssRules, 0).reduce(function (A, e) {
                                                return e && "string" == typeof e.cssText ? A + e.cssText : A;
                                            }, ""),
                                            n = A.cloneNode(!1);
                                        return (n.textContent = t), n;
                                    }
                                } catch (A) {
                                    if ((this.context.logger.error("Unable to access cssRules property", A), "SecurityError" !== A.name)) throw A;
                                }
                                return A.cloneNode(!1);
                            }),
                            (A.prototype.createCanvasClone = function (A) {
                                var e;
                                if (this.options.inlineImages && A.ownerDocument) {
                                    var t = A.ownerDocument.createElement("img");
                                    try {
                                        return (t.src = A.toDataURL()), t;
                                    } catch (e) {
                                        this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A);
                                    }
                                }
                                var n = A.cloneNode(!1);
                                try {
                                    (n.width = A.width), (n.height = A.height);
                                    var r = A.getContext("2d"),
                                        o = n.getContext("2d");
                                    if (o)
                                        if (!this.options.allowTaint && r) o.putImageData(r.getImageData(0, 0, A.width, A.height), 0, 0);
                                        else {
                                            var s = null !== (e = A.getContext("webgl2")) && void 0 !== e ? e : A.getContext("webgl");
                                            if (s) {
                                                var i = s.getContextAttributes();
                                                !1 === (null === i || void 0 === i ? void 0 : i.preserveDrawingBuffer) && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A);
                                            }
                                            o.drawImage(A, 0, 0);
                                        }
                                    return n;
                                } catch (e) {
                                    this.context.logger.info("Unable to clone canvas as it is tainted", A);
                                }
                                return n;
                            }),
                            (A.prototype.createVideoClone = function (A) {
                                var e = A.ownerDocument.createElement("canvas");
                                (e.width = A.offsetWidth), (e.height = A.offsetHeight);
                                var t = e.getContext("2d");
                                try {
                                    return t && (t.drawImage(A, 0, 0, e.width, e.height), this.options.allowTaint || t.getImageData(0, 0, e.width, e.height)), e;
                                } catch (e) {
                                    this.context.logger.info("Unable to clone video as it is tainted", A);
                                }
                                var n = A.ownerDocument.createElement("canvas");
                                return (n.width = A.offsetWidth), (n.height = A.offsetHeight), n;
                            }),
                            (A.prototype.appendChildNode = function (A, e, t) {
                                (yr(e) && (Or(e) || e.hasAttribute("data-html2canvas-ignore") || ("function" == typeof this.options.ignoreElements && this.options.ignoreElements(e)))) ||
                                    (this.options.copyStyles && yr(e) && Tr(e)) ||
                                    A.appendChild(this.cloneNode(e, t));
                            }),
                            (A.prototype.cloneChildNodes = function (A, e, t) {
                                for (var n = this, r = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; r; r = r.nextSibling)
                                    if (yr(r) && Rr(r) && "function" == typeof r.assignedNodes) {
                                        var o = r.assignedNodes();
                                        o.length &&
                                            o.forEach(function (A) {
                                                return n.appendChildNode(e, A, t);
                                            });
                                    } else this.appendChildNode(e, r, t);
                            }),
                            (A.prototype.cloneNode = function (A, e) {
                                if (Hr(A)) return document.createTextNode(A.data);
                                if (!A.ownerDocument) return A.cloneNode(!1);
                                var t = A.ownerDocument.defaultView;
                                if (t && yr(A) && (Er(A) || mr(A))) {
                                    var n = this.createElementClone(A);
                                    n.style.transitionProperty = "none";
                                    var r = t.getComputedStyle(A),
                                        o = t.getComputedStyle(A, ":before"),
                                        s = t.getComputedStyle(A, ":after");
                                    this.referenceElement === A && Er(n) && (this.clonedReferenceElement = n), xr(n) && uo(n);
                                    var i = this.counters.parse(new sn(this.context, r)),
                                        B = this.resolvePseudoContent(A, n, o, yn.BEFORE);
                                    Pr(A) && (e = !0), kr(A) || this.cloneChildNodes(A, n, e), B && n.insertBefore(B, n.firstChild);
                                    var a = this.resolvePseudoContent(A, n, s, yn.AFTER);
                                    return (
                                        a && n.appendChild(a),
                                        this.counters.pop(i),
                                        ((r && (this.options.copyStyles || mr(A)) && !Sr(A)) || e) && io(r, n),
                                        (0 === A.scrollTop && 0 === A.scrollLeft) || this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]),
                                        (Vr(A) || Gr(A)) && (Vr(n) || Gr(n)) && (n.value = A.value),
                                        n
                                    );
                                }
                                return A.cloneNode(!1);
                            }),
                            (A.prototype.resolvePseudoContent = function (A, e, t, n) {
                                var r = this;
                                if (t) {
                                    var o = t.content,
                                        s = e.ownerDocument;
                                    if (s && o && "none" !== o && "-moz-alt-content" !== o && "none" !== t.display) {
                                        this.counters.parse(new sn(this.context, t));
                                        var i = new on(this.context, t),
                                            B = s.createElement("html2canvaspseudoelement");
                                        io(t, B),
                                            i.content.forEach(function (e) {
                                                if (0 === e.type) B.appendChild(s.createTextNode(e.value));
                                                else if (22 === e.type) {
                                                    var t = s.createElement("img");
                                                    (t.src = e.value), (t.style.opacity = "1"), B.appendChild(t);
                                                } else if (18 === e.type) {
                                                    if ("attr" === e.name) {
                                                        var n = e.values.filter(xA);
                                                        n.length && B.appendChild(s.createTextNode(A.getAttribute(n[0].value) || ""));
                                                    } else if ("counter" === e.name) {
                                                        var o = e.values.filter(SA),
                                                            a = o[0],
                                                            c = o[1];
                                                        if (a && xA(a)) {
                                                            var l = r.counters.getCounterValue(a.value),
                                                                g = c && xA(c) ? lt.parse(r.context, c.value) : 3;
                                                            B.appendChild(s.createTextNode($r(l, g, !1)));
                                                        }
                                                    } else if ("counters" === e.name) {
                                                        var u = e.values.filter(SA),
                                                            a = u[0],
                                                            Q = u[1],
                                                            c = u[2];
                                                        if (a && xA(a)) {
                                                            var w = r.counters.getCounterValues(a.value),
                                                                d = c && xA(c) ? lt.parse(r.context, c.value) : 3,
                                                                C = Q && 0 === Q.type ? Q.value : "",
                                                                h = w
                                                                    .map(function (A) {
                                                                        return $r(A, d, !1);
                                                                    })
                                                                    .join(C);
                                                            B.appendChild(s.createTextNode(h));
                                                        }
                                                    }
                                                } else if (20 === e.type)
                                                    switch (e.value) {
                                                        case "open-quote":
                                                            B.appendChild(s.createTextNode($t(i.quotes, r.quoteDepth++, !0)));
                                                            break;
                                                        case "close-quote":
                                                            B.appendChild(s.createTextNode($t(i.quotes, --r.quoteDepth, !1)));
                                                            break;
                                                        default:
                                                            B.appendChild(s.createTextNode(e.value));
                                                    }
                                            }),
                                            (B.className = lo + " " + go);
                                        var a = n === yn.BEFORE ? " " + lo : " " + go;
                                        return mr(e) ? (e.className.baseValue += a) : (e.className += a), B;
                                    }
                                }
                            }),
                            (A.destroy = function (A) {
                                return !!A.parentNode && (A.parentNode.removeChild(A), !0);
                            }),
                            A
                        );
                    })();
                !(function (A) {
                    (A[(A.BEFORE = 0)] = "BEFORE"), (A[(A.AFTER = 1)] = "AFTER");
                })(yn || (yn = {}));
                var eo,
                    to = function (A, e) {
                        var t = A.createElement("iframe");
                        return (
                            (t.className = "html2canvas-container"),
                            (t.style.visibility = "hidden"),
                            (t.style.position = "fixed"),
                            (t.style.left = "-10000px"),
                            (t.style.top = "0px"),
                            (t.style.border = "0"),
                            (t.width = e.width.toString()),
                            (t.height = e.height.toString()),
                            (t.scrolling = "no"),
                            t.setAttribute("data-html2canvas-ignore", "true"),
                            A.body.appendChild(t),
                            t
                        );
                    },
                    no = function (A) {
                        return new Promise(function (e) {
                            return A.complete ? void e() : A.src ? ((A.onload = e), void (A.onerror = e)) : void e();
                        });
                    },
                    ro = function (A) {
                        return Promise.all([].slice.call(A.images, 0).map(no));
                    },
                    oo = function (A) {
                        return new Promise(function (e, t) {
                            var n = A.contentWindow;
                            if (!n) return t("No window assigned for iframe");
                            var r = n.document;
                            n.onload = A.onload = function () {
                                n.onload = A.onload = null;
                                var t = setInterval(function () {
                                    r.body.childNodes.length > 0 && "complete" === r.readyState && (clearInterval(t), e(A));
                                }, 50);
                            };
                        });
                    },
                    so = ["all", "d", "content"],
                    io = function (A, e) {
                        for (var t = A.length - 1; t >= 0; t--) {
                            var n = A.item(t);
                            -1 === so.indexOf(n) && e.style.setProperty(n, A.getPropertyValue(n));
                        }
                        return e;
                    },
                    Bo = function (A) {
                        var e = "";
                        return A && ((e += "<!DOCTYPE "), A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), (e += ">")), e;
                    },
                    ao = function (A, e, t) {
                        A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
                    },
                    co = function (A) {
                        var e = A[0],
                            t = A[1],
                            n = A[2];
                        (e.scrollLeft = t), (e.scrollTop = n);
                    },
                    lo = "___html2canvas___pseudoelement_before",
                    go = "___html2canvas___pseudoelement_after",
                    uo = function (A) {
                        Qo(A, "." + lo + ':before{\n    content: "" !important;\n    display: none !important;\n}\n         .' + go + ':after{\n    content: "" !important;\n    display: none !important;\n}');
                    },
                    Qo = function (A, e) {
                        var t = A.ownerDocument;
                        if (t) {
                            var n = t.createElement("style");
                            (n.textContent = e), A.appendChild(n);
                        }
                    },
                    wo = (function () {
                        function A() {}
                        return (
                            (A.getOrigin = function (e) {
                                var t = A._link;
                                return t ? ((t.href = e), (t.href = t.href), t.protocol + t.hostname + t.port) : "about:blank";
                            }),
                            (A.isSameOrigin = function (e) {
                                return A.getOrigin(e) === A._origin;
                            }),
                            (A.setContext = function (e) {
                                (A._link = e.document.createElement("a")), (A._origin = A.getOrigin(e.location.href));
                            }),
                            (A._origin = "about:blank"),
                            A
                        );
                    })(),
                    Co = (function () {
                        function A(A, e) {
                            (this.context = A), (this._options = e), (this._cache = {});
                        }
                        return (
                            (A.prototype.addImage = function (A) {
                                var e = Promise.resolve();
                                return this.has(A) ? e : yo(A) || fo(A) ? ((this._cache[A] = this.loadImage(A)).catch(function () {}), e) : e;
                            }),
                            (A.prototype.match = function (A) {
                                return this._cache[A];
                            }),
                            (A.prototype.loadImage = function (A) {
                                return e(this, void 0, void 0, function () {
                                    var e,
                                        n,
                                        r,
                                        o,
                                        s = this;
                                    return t(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return (
                                                    (e = wo.isSameOrigin(A)),
                                                    ((n = !po(A) && !0 === this._options.useCORS && Rn.SUPPORT_CORS_IMAGES && !e),
                                                    (r = !po(A) && !e && !yo(A) && "string" == typeof this._options.proxy && Rn.SUPPORT_CORS_XHR && !n),
                                                    e || !1 !== this._options.allowTaint || po(A) || yo(A) || r || n)
                                                        ? ((o = A), r ? [4, this.proxy(o)] : [3, 2])
                                                        : [2]
                                                );
                                            case 1:
                                                (o = t.sent()), (t.label = 2);
                                            case 2:
                                                return (
                                                    this.context.logger.debug("Added image " + A.substring(0, 256)),
                                                    [
                                                        4,
                                                        new Promise(function (A, e) {
                                                            var t = new Image();
                                                            (t.onload = function () {
                                                                return A(t);
                                                            }),
                                                                (t.onerror = e),
                                                                (Ho(o) || n) && (t.crossOrigin = "anonymous"),
                                                                (t.src = o),
                                                                !0 === t.complete &&
                                                                    setTimeout(function () {
                                                                        return A(t);
                                                                    }, 500),
                                                                s._options.imageTimeout > 0 &&
                                                                    setTimeout(function () {
                                                                        return e("Timed out (" + s._options.imageTimeout + "ms) loading image");
                                                                    }, s._options.imageTimeout);
                                                        }),
                                                    ]
                                                );
                                            case 3:
                                                return [2, t.sent()];
                                        }
                                    });
                                });
                            }),
                            (A.prototype.has = function (A) {
                                return void 0 !== this._cache[A];
                            }),
                            (A.prototype.keys = function () {
                                return Promise.resolve(Object.keys(this._cache));
                            }),
                            (A.prototype.proxy = function (A) {
                                var e = this,
                                    t = this._options.proxy;
                                if (!t) throw new Error("No proxy defined");
                                var n = A.substring(0, 256);
                                return new Promise(function (r, o) {
                                    var s = Rn.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
                                        i = new XMLHttpRequest();
                                    (i.onload = function () {
                                        if (200 === i.status)
                                            if ("text" === s) r(i.response);
                                            else {
                                                var A = new FileReader();
                                                A.addEventListener(
                                                    "load",
                                                    function () {
                                                        return r(A.result);
                                                    },
                                                    !1
                                                ),
                                                    A.addEventListener(
                                                        "error",
                                                        function (A) {
                                                            return o(A);
                                                        },
                                                        !1
                                                    ),
                                                    A.readAsDataURL(i.response);
                                            }
                                        else o("Failed to proxy resource " + n + " with status code " + i.status);
                                    }),
                                        (i.onerror = o);
                                    var B = t.indexOf("?") > -1 ? "&" : "?";
                                    if ((i.open("GET", "" + t + B + "url=" + encodeURIComponent(A) + "&responseType=" + s), "text" !== s && i instanceof XMLHttpRequest && (i.responseType = s), e._options.imageTimeout)) {
                                        var a = e._options.imageTimeout;
                                        (i.timeout = a),
                                            (i.ontimeout = function () {
                                                return o("Timed out (" + a + "ms) proxying " + n);
                                            });
                                    }
                                    i.send();
                                });
                            }),
                            A
                        );
                    })(),
                    ho = /^data:image\/svg\+xml/i,
                    Uo = /^data:image\/.*;base64,/i,
                    Fo = /^data:image\/.*/i,
                    fo = function (A) {
                        return Rn.SUPPORT_SVG_DRAWING || !Eo(A);
                    },
                    po = function (A) {
                        return Fo.test(A);
                    },
                    Ho = function (A) {
                        return Uo.test(A);
                    },
                    yo = function (A) {
                        return "blob" === A.substr(0, 4);
                    },
                    Eo = function (A) {
                        return "svg" === A.substr(-3).toLowerCase() || ho.test(A);
                    },
                    mo = (function () {
                        function A(A, e) {
                            (this.type = 0), (this.x = A), (this.y = e);
                        }
                        return (
                            (A.prototype.add = function (e, t) {
                                return new A(this.x + e, this.y + t);
                            }),
                            A
                        );
                    })(),
                    Io = function (A, e, t) {
                        return new mo(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
                    },
                    bo = (function () {
                        function A(A, e, t, n) {
                            (this.type = 1), (this.start = A), (this.startControl = e), (this.endControl = t), (this.end = n);
                        }
                        return (
                            (A.prototype.subdivide = function (e, t) {
                                var n = Io(this.start, this.startControl, e),
                                    r = Io(this.startControl, this.endControl, e),
                                    o = Io(this.endControl, this.end, e),
                                    s = Io(n, r, e),
                                    i = Io(r, o, e),
                                    B = Io(s, i, e);
                                return t ? new A(this.start, n, s, B) : new A(B, i, o, this.end);
                            }),
                            (A.prototype.add = function (e, t) {
                                return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
                            }),
                            (A.prototype.reverse = function () {
                                return new A(this.end, this.endControl, this.startControl, this.start);
                            }),
                            A
                        );
                    })(),
                    vo = function (A) {
                        return 1 === A.type;
                    },
                    Ko = (function () {
                        function A(A) {
                            var e = A.styles,
                                t = A.bounds,
                                n = JA(e.borderTopLeftRadius, t.width, t.height),
                                r = n[0],
                                o = n[1],
                                s = JA(e.borderTopRightRadius, t.width, t.height),
                                i = s[0],
                                B = s[1],
                                a = JA(e.borderBottomRightRadius, t.width, t.height),
                                c = a[0],
                                l = a[1],
                                g = JA(e.borderBottomLeftRadius, t.width, t.height),
                                u = g[0],
                                Q = g[1],
                                w = [];
                            w.push((r + i) / t.width), w.push((u + c) / t.width), w.push((o + Q) / t.height), w.push((B + l) / t.height);
                            var d = Math.max.apply(Math, w);
                            d > 1 && ((r /= d), (o /= d), (i /= d), (B /= d), (c /= d), (l /= d), (u /= d), (Q /= d));
                            var C = t.width - i,
                                h = t.height - l,
                                U = t.width - c,
                                F = t.height - Q,
                                f = e.borderTopWidth,
                                p = e.borderRightWidth,
                                H = e.borderBottomWidth,
                                y = e.borderLeftWidth,
                                E = YA(e.paddingTop, A.bounds.width),
                                m = YA(e.paddingRight, A.bounds.width),
                                I = YA(e.paddingBottom, A.bounds.width),
                                b = YA(e.paddingLeft, A.bounds.width);
                            (this.topLeftBorderDoubleOuterBox = r > 0 || o > 0 ? Lo(t.left + y / 3, t.top + f / 3, r - y / 3, o - f / 3, eo.TOP_LEFT) : new mo(t.left + y / 3, t.top + f / 3)),
                                (this.topRightBorderDoubleOuterBox = r > 0 || o > 0 ? Lo(t.left + C, t.top + f / 3, i - p / 3, B - f / 3, eo.TOP_RIGHT) : new mo(t.left + t.width - p / 3, t.top + f / 3)),
                                (this.bottomRightBorderDoubleOuterBox = c > 0 || l > 0 ? Lo(t.left + U, t.top + h, c - p / 3, l - H / 3, eo.BOTTOM_RIGHT) : new mo(t.left + t.width - p / 3, t.top + t.height - H / 3)),
                                (this.bottomLeftBorderDoubleOuterBox = u > 0 || Q > 0 ? Lo(t.left + y / 3, t.top + F, u - y / 3, Q - H / 3, eo.BOTTOM_LEFT) : new mo(t.left + y / 3, t.top + t.height - H / 3)),
                                (this.topLeftBorderDoubleInnerBox = r > 0 || o > 0 ? Lo(t.left + (2 * y) / 3, t.top + (2 * f) / 3, r - (2 * y) / 3, o - (2 * f) / 3, eo.TOP_LEFT) : new mo(t.left + (2 * y) / 3, t.top + (2 * f) / 3)),
                                (this.topRightBorderDoubleInnerBox = r > 0 || o > 0 ? Lo(t.left + C, t.top + (2 * f) / 3, i - (2 * p) / 3, B - (2 * f) / 3, eo.TOP_RIGHT) : new mo(t.left + t.width - (2 * p) / 3, t.top + (2 * f) / 3)),
                                (this.bottomRightBorderDoubleInnerBox = c > 0 || l > 0 ? Lo(t.left + U, t.top + h, c - (2 * p) / 3, l - (2 * H) / 3, eo.BOTTOM_RIGHT) : new mo(t.left + t.width - (2 * p) / 3, t.top + t.height - (2 * H) / 3)),
                                (this.bottomLeftBorderDoubleInnerBox = u > 0 || Q > 0 ? Lo(t.left + (2 * y) / 3, t.top + F, u - (2 * y) / 3, Q - (2 * H) / 3, eo.BOTTOM_LEFT) : new mo(t.left + (2 * y) / 3, t.top + t.height - (2 * H) / 3)),
                                (this.topLeftBorderStroke = r > 0 || o > 0 ? Lo(t.left + y / 2, t.top + f / 2, r - y / 2, o - f / 2, eo.TOP_LEFT) : new mo(t.left + y / 2, t.top + f / 2)),
                                (this.topRightBorderStroke = r > 0 || o > 0 ? Lo(t.left + C, t.top + f / 2, i - p / 2, B - f / 2, eo.TOP_RIGHT) : new mo(t.left + t.width - p / 2, t.top + f / 2)),
                                (this.bottomRightBorderStroke = c > 0 || l > 0 ? Lo(t.left + U, t.top + h, c - p / 2, l - H / 2, eo.BOTTOM_RIGHT) : new mo(t.left + t.width - p / 2, t.top + t.height - H / 2)),
                                (this.bottomLeftBorderStroke = u > 0 || Q > 0 ? Lo(t.left + y / 2, t.top + F, u - y / 2, Q - H / 2, eo.BOTTOM_LEFT) : new mo(t.left + y / 2, t.top + t.height - H / 2)),
                                (this.topLeftBorderBox = r > 0 || o > 0 ? Lo(t.left, t.top, r, o, eo.TOP_LEFT) : new mo(t.left, t.top)),
                                (this.topRightBorderBox = i > 0 || B > 0 ? Lo(t.left + C, t.top, i, B, eo.TOP_RIGHT) : new mo(t.left + t.width, t.top)),
                                (this.bottomRightBorderBox = c > 0 || l > 0 ? Lo(t.left + U, t.top + h, c, l, eo.BOTTOM_RIGHT) : new mo(t.left + t.width, t.top + t.height)),
                                (this.bottomLeftBorderBox = u > 0 || Q > 0 ? Lo(t.left, t.top + F, u, Q, eo.BOTTOM_LEFT) : new mo(t.left, t.top + t.height)),
                                (this.topLeftPaddingBox = r > 0 || o > 0 ? Lo(t.left + y, t.top + f, Math.max(0, r - y), Math.max(0, o - f), eo.TOP_LEFT) : new mo(t.left + y, t.top + f)),
                                (this.topRightPaddingBox =
                                    i > 0 || B > 0 ? Lo(t.left + Math.min(C, t.width - p), t.top + f, C > t.width + p ? 0 : Math.max(0, i - p), Math.max(0, B - f), eo.TOP_RIGHT) : new mo(t.left + t.width - p, t.top + f)),
                                (this.bottomRightPaddingBox =
                                    c > 0 || l > 0 ? Lo(t.left + Math.min(U, t.width - y), t.top + Math.min(h, t.height - H), Math.max(0, c - p), Math.max(0, l - H), eo.BOTTOM_RIGHT) : new mo(t.left + t.width - p, t.top + t.height - H)),
                                (this.bottomLeftPaddingBox = u > 0 || Q > 0 ? Lo(t.left + y, t.top + Math.min(F, t.height - H), Math.max(0, u - y), Math.max(0, Q - H), eo.BOTTOM_LEFT) : new mo(t.left + y, t.top + t.height - H)),
                                (this.topLeftContentBox = r > 0 || o > 0 ? Lo(t.left + y + b, t.top + f + E, Math.max(0, r - (y + b)), Math.max(0, o - (f + E)), eo.TOP_LEFT) : new mo(t.left + y + b, t.top + f + E)),
                                (this.topRightContentBox =
                                    i > 0 || B > 0 ? Lo(t.left + Math.min(C, t.width + y + b), t.top + f + E, C > t.width + y + b ? 0 : i - y + b, B - (f + E), eo.TOP_RIGHT) : new mo(t.left + t.width - (p + m), t.top + f + E)),
                                (this.bottomRightContentBox =
                                    c > 0 || l > 0
                                        ? Lo(t.left + Math.min(U, t.width - (y + b)), t.top + Math.min(h, t.height + f + E), Math.max(0, c - (p + m)), l - (H + I), eo.BOTTOM_RIGHT)
                                        : new mo(t.left + t.width - (p + m), t.top + t.height - (H + I))),
                                (this.bottomLeftContentBox = u > 0 || Q > 0 ? Lo(t.left + y + b, t.top + F, Math.max(0, u - (y + b)), Q - (H + I), eo.BOTTOM_LEFT) : new mo(t.left + y + b, t.top + t.height - (H + I)));
                        }
                        return A;
                    })();
                !(function (A) {
                    (A[(A.TOP_LEFT = 0)] = "TOP_LEFT"), (A[(A.TOP_RIGHT = 1)] = "TOP_RIGHT"), (A[(A.BOTTOM_RIGHT = 2)] = "BOTTOM_RIGHT"), (A[(A.BOTTOM_LEFT = 3)] = "BOTTOM_LEFT");
                })(eo || (eo = {}));
                var Lo = function (A, e, t, n, r) {
                        var o = ((Math.sqrt(2) - 1) / 3) * 4,
                            s = t * o,
                            i = n * o,
                            B = A + t,
                            a = e + n;
                        switch (r) {
                            case eo.TOP_LEFT:
                                return new bo(new mo(A, a), new mo(A, a - i), new mo(B - s, e), new mo(B, e));
                            case eo.TOP_RIGHT:
                                return new bo(new mo(A, e), new mo(A + s, e), new mo(B, a - i), new mo(B, a));
                            case eo.BOTTOM_RIGHT:
                                return new bo(new mo(B, e), new mo(B, e + i), new mo(A + s, a), new mo(A, a));
                            case eo.BOTTOM_LEFT:
                            default:
                                return new bo(new mo(B, a), new mo(B - s, a), new mo(A, e + i), new mo(A, e));
                        }
                    },
                    xo = function (A) {
                        return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox];
                    },
                    Do = function (A) {
                        return [A.topLeftContentBox, A.topRightContentBox, A.bottomRightContentBox, A.bottomLeftContentBox];
                    },
                    ko = function (A) {
                        return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox];
                    },
                    Mo = (function () {
                        function A(A, e, t) {
                            (this.offsetX = A), (this.offsetY = e), (this.matrix = t), (this.type = 0), (this.target = 6);
                        }
                        return A;
                    })(),
                    So = (function () {
                        function A(A, e) {
                            (this.path = A), (this.target = e), (this.type = 1);
                        }
                        return A;
                    })(),
                    To = (function () {
                        function A(A) {
                            (this.opacity = A), (this.type = 2), (this.target = 6);
                        }
                        return A;
                    })(),
                    Oo = function (A) {
                        return 0 === A.type;
                    },
                    Vo = function (A) {
                        return 1 === A.type;
                    },
                    Go = function (A) {
                        return 2 === A.type;
                    },
                    Ro = function (A, e) {
                        return (
                            A.length === e.length &&
                            A.some(function (A, t) {
                                return A === e[t];
                            })
                        );
                    },
                    Po = function (A, e, t, n, r) {
                        return A.map(function (A, o) {
                            switch (o) {
                                case 0:
                                    return A.add(e, t);
                                case 1:
                                    return A.add(e + n, t);
                                case 2:
                                    return A.add(e + n, t + r);
                                case 3:
                                    return A.add(e, t + r);
                            }
                            return A;
                        });
                    },
                    No = (function () {
                        function A(A) {
                            (this.element = A),
                                (this.inlineLevel = []),
                                (this.nonInlineLevel = []),
                                (this.negativeZIndex = []),
                                (this.zeroOrAutoZIndexOrTransformedOrOpacity = []),
                                (this.positiveZIndex = []),
                                (this.nonPositionedFloats = []),
                                (this.nonPositionedInlineLevel = []);
                        }
                        return A;
                    })(),
                    Xo = (function () {
                        function A(A, e) {
                            if (
                                ((this.container = A),
                                (this.parent = e),
                                (this.effects = []),
                                (this.curves = new Ko(this.container)),
                                this.container.styles.opacity < 1 && this.effects.push(new To(this.container.styles.opacity)),
                                null !== this.container.styles.transform)
                            ) {
                                var t = this.container.bounds.left + this.container.styles.transformOrigin[0].number,
                                    n = this.container.bounds.top + this.container.styles.transformOrigin[1].number,
                                    r = this.container.styles.transform;
                                this.effects.push(new Mo(t, n, r));
                            }
                            if (0 !== this.container.styles.overflowX) {
                                var o = xo(this.curves),
                                    s = ko(this.curves);
                                Ro(o, s) ? this.effects.push(new So(o, 6)) : (this.effects.push(new So(o, 2)), this.effects.push(new So(s, 4)));
                            }
                        }
                        return (
                            (A.prototype.getEffects = function (A) {
                                for (var e = -1 === [2, 3].indexOf(this.container.styles.position), t = this.parent, n = this.effects.slice(0); t; ) {
                                    var r = t.effects.filter(function (A) {
                                        return !Vo(A);
                                    });
                                    if (e || 0 !== t.container.styles.position || !t.parent) {
                                        if ((n.unshift.apply(n, r), (e = -1 === [2, 3].indexOf(t.container.styles.position)), 0 !== t.container.styles.overflowX)) {
                                            var o = xo(t.curves),
                                                s = ko(t.curves);
                                            Ro(o, s) || n.unshift(new So(s, 6));
                                        }
                                    } else n.unshift.apply(n, r);
                                    t = t.parent;
                                }
                                return n.filter(function (e) {
                                    return Wt(e.target, A);
                                });
                            }),
                            A
                        );
                    })(),
                    Jo = function (A, e, t, n) {
                        A.container.elements.forEach(function (r) {
                            var o = Wt(r.flags, 4),
                                s = Wt(r.flags, 2),
                                i = new Xo(r, A);
                            Wt(r.styles.display, 2048) && n.push(i);
                            var B = Wt(r.flags, 8) ? [] : n;
                            if (o || s) {
                                var a = o || r.styles.isPositioned() ? t : e,
                                    c = new No(i);
                                if (r.styles.isPositioned() || r.styles.opacity < 1 || r.styles.isTransformed()) {
                                    var l = r.styles.zIndex.order;
                                    if (l < 0) {
                                        var g = 0;
                                        a.negativeZIndex.some(function (A, e) {
                                            return l > A.element.container.styles.zIndex.order ? ((g = e), !1) : g > 0;
                                        }),
                                            a.negativeZIndex.splice(g, 0, c);
                                    } else if (l > 0) {
                                        var u = 0;
                                        a.positiveZIndex.some(function (A, e) {
                                            return l >= A.element.container.styles.zIndex.order ? ((u = e + 1), !1) : u > 0;
                                        }),
                                            a.positiveZIndex.splice(u, 0, c);
                                    } else a.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
                                } else r.styles.isFloating() ? a.nonPositionedFloats.push(c) : a.nonPositionedInlineLevel.push(c);
                                Jo(i, c, o ? c : t, B);
                            } else r.styles.isInlineLevel() ? e.inlineLevel.push(i) : e.nonInlineLevel.push(i), Jo(i, e, t, B);
                            Wt(r.flags, 8) && Yo(r, B);
                        });
                    },
                    Yo = function (A, e) {
                        for (var t = A instanceof or ? A.start : 1, n = A instanceof or && A.reversed, r = 0; r < e.length; r++) {
                            var o = e[r];
                            o.container instanceof rr && "number" == typeof o.container.value && 0 !== o.container.value && (t = o.container.value), (o.listValue = $r(t, o.container.styles.listStyleType, !0)), (t += n ? -1 : 1);
                        }
                    },
                    Wo = function (A) {
                        var e = new Xo(A, null),
                            t = new No(e),
                            n = [];
                        return Jo(e, t, t, n), Yo(e.container, n), t;
                    },
                    _o = function (A, e) {
                        switch (e) {
                            case 0:
                                return $o(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
                            case 1:
                                return $o(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
                            case 2:
                                return $o(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
                            case 3:
                            default:
                                return $o(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
                        }
                    },
                    Zo = function (A, e) {
                        switch (e) {
                            case 0:
                                return $o(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
                            case 1:
                                return $o(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
                            case 2:
                                return $o(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
                            case 3:
                            default:
                                return $o(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
                        }
                    },
                    jo = function (A, e) {
                        switch (e) {
                            case 0:
                                return $o(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
                            case 1:
                                return $o(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
                            case 2:
                                return $o(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
                            case 3:
                            default:
                                return $o(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
                        }
                    },
                    qo = function (A, e) {
                        switch (e) {
                            case 0:
                                return zo(A.topLeftBorderStroke, A.topRightBorderStroke);
                            case 1:
                                return zo(A.topRightBorderStroke, A.bottomRightBorderStroke);
                            case 2:
                                return zo(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
                            case 3:
                            default:
                                return zo(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
                        }
                    },
                    zo = function (A, e) {
                        var t = [];
                        return vo(A) ? t.push(A.subdivide(0.5, !1)) : t.push(A), vo(e) ? t.push(e.subdivide(0.5, !0)) : t.push(e), t;
                    },
                    $o = function (A, e, t, n) {
                        var r = [];
                        return (
                            vo(A) ? r.push(A.subdivide(0.5, !1)) : r.push(A),
                            vo(t) ? r.push(t.subdivide(0.5, !0)) : r.push(t),
                            vo(n) ? r.push(n.subdivide(0.5, !0).reverse()) : r.push(n),
                            vo(e) ? r.push(e.subdivide(0.5, !1).reverse()) : r.push(e),
                            r
                        );
                    },
                    As = function (A) {
                        var e = A.bounds,
                            t = A.styles;
                        return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
                    },
                    es = function (A) {
                        var e = A.styles,
                            t = A.bounds,
                            n = YA(e.paddingLeft, t.width),
                            r = YA(e.paddingRight, t.width),
                            o = YA(e.paddingTop, t.width),
                            s = YA(e.paddingBottom, t.width);
                        return t.add(n + e.borderLeftWidth, o + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + n + r), -(e.borderTopWidth + e.borderBottomWidth + o + s));
                    },
                    ts = function (A, e) {
                        return 0 === A ? e.bounds : 2 === A ? es(e) : As(e);
                    },
                    ns = function (A, e) {
                        return 0 === A ? e.bounds : 2 === A ? es(e) : As(e);
                    },
                    rs = function (A, e, t) {
                        var n = ts(Bs(A.styles.backgroundOrigin, e), A),
                            r = ns(Bs(A.styles.backgroundClip, e), A),
                            o = is(Bs(A.styles.backgroundSize, e), t, n),
                            s = o[0],
                            i = o[1],
                            B = JA(Bs(A.styles.backgroundPosition, e), n.width - s, n.height - i);
                        return [as(Bs(A.styles.backgroundRepeat, e), B, o, n, r), Math.round(n.left + B[0]), Math.round(n.top + B[1]), s, i];
                    },
                    os = function (A) {
                        return xA(A) && A.value === b.AUTO;
                    },
                    ss = function (A) {
                        return "number" == typeof A;
                    },
                    is = function (A, e, t) {
                        var n = e[0],
                            r = e[1],
                            o = e[2],
                            s = A[0],
                            i = A[1];
                        if (!s) return [0, 0];
                        if (GA(s) && i && GA(i)) return [YA(s, t.width), YA(i, t.height)];
                        var B = ss(o);
                        if (xA(s) && (s.value === b.CONTAIN || s.value === b.COVER)) {
                            if (ss(o)) {
                                return t.width / t.height < o != (s.value === b.COVER) ? [t.width, t.width / o] : [t.height * o, t.height];
                            }
                            return [t.width, t.height];
                        }
                        var a = ss(n),
                            c = ss(r),
                            l = a || c;
                        if (os(s) && (!i || os(i))) {
                            if (a && c) return [n, r];
                            if (!B && !l) return [t.width, t.height];
                            if (l && B) {
                                return [a ? n : r * o, c ? r : n / o];
                            }
                            return [a ? n : t.width, c ? r : t.height];
                        }
                        if (B) {
                            var g = 0,
                                u = 0;
                            return GA(s) ? (g = YA(s, t.width)) : GA(i) && (u = YA(i, t.height)), os(s) ? (g = u * o) : (i && !os(i)) || (u = g / o), [g, u];
                        }
                        var Q = null,
                            w = null;
                        if (
                            (GA(s) ? (Q = YA(s, t.width)) : i && GA(i) && (w = YA(i, t.height)),
                            null === Q || (i && !os(i)) || (w = a && c ? (Q / n) * r : t.height),
                            null !== w && os(s) && (Q = a && c ? (w / r) * n : t.width),
                            null !== Q && null !== w)
                        )
                            return [Q, w];
                        throw new Error("Unable to calculate background-size for element");
                    },
                    Bs = function (A, e) {
                        var t = A[e];
                        return void 0 === t ? A[0] : t;
                    },
                    as = function (A, e, t, n, r) {
                        var o = e[0],
                            s = e[1],
                            i = t[0],
                            B = t[1];
                        switch (A) {
                            case 2:
                                return [
                                    new mo(Math.round(n.left), Math.round(n.top + s)),
                                    new mo(Math.round(n.left + n.width), Math.round(n.top + s)),
                                    new mo(Math.round(n.left + n.width), Math.round(B + n.top + s)),
                                    new mo(Math.round(n.left), Math.round(B + n.top + s)),
                                ];
                            case 3:
                                return [
                                    new mo(Math.round(n.left + o), Math.round(n.top)),
                                    new mo(Math.round(n.left + o + i), Math.round(n.top)),
                                    new mo(Math.round(n.left + o + i), Math.round(n.height + n.top)),
                                    new mo(Math.round(n.left + o), Math.round(n.height + n.top)),
                                ];
                            case 1:
                                return [
                                    new mo(Math.round(n.left + o), Math.round(n.top + s)),
                                    new mo(Math.round(n.left + o + i), Math.round(n.top + s)),
                                    new mo(Math.round(n.left + o + i), Math.round(n.top + s + B)),
                                    new mo(Math.round(n.left + o), Math.round(n.top + s + B)),
                                ];
                            default:
                                return [
                                    new mo(Math.round(r.left), Math.round(r.top)),
                                    new mo(Math.round(r.left + r.width), Math.round(r.top)),
                                    new mo(Math.round(r.left + r.width), Math.round(r.height + r.top)),
                                    new mo(Math.round(r.left), Math.round(r.height + r.top)),
                                ];
                        }
                    },
                    cs = (function () {
                        function A(A) {
                            (this._data = {}), (this._document = A);
                        }
                        return (
                            (A.prototype.parseMetrics = function (A, e) {
                                var t = this._document.createElement("div"),
                                    n = this._document.createElement("img"),
                                    r = this._document.createElement("span"),
                                    o = this._document.body;
                                (t.style.visibility = "hidden"),
                                    (t.style.fontFamily = A),
                                    (t.style.fontSize = e),
                                    (t.style.margin = "0"),
                                    (t.style.padding = "0"),
                                    (t.style.whiteSpace = "nowrap"),
                                    o.appendChild(t),
                                    (n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
                                    (n.width = 1),
                                    (n.height = 1),
                                    (n.style.margin = "0"),
                                    (n.style.padding = "0"),
                                    (n.style.verticalAlign = "baseline"),
                                    (r.style.fontFamily = A),
                                    (r.style.fontSize = e),
                                    (r.style.margin = "0"),
                                    (r.style.padding = "0"),
                                    r.appendChild(this._document.createTextNode("Hidden Text")),
                                    t.appendChild(r),
                                    t.appendChild(n);
                                var s = n.offsetTop - r.offsetTop + 2;
                                t.removeChild(r), t.appendChild(this._document.createTextNode("Hidden Text")), (t.style.lineHeight = "normal"), (n.style.verticalAlign = "super");
                                var i = n.offsetTop - t.offsetTop + 2;
                                return o.removeChild(t), { baseline: s, middle: i };
                            }),
                            (A.prototype.getMetrics = function (A, e) {
                                var t = A + " " + e;
                                return void 0 === this._data[t] && (this._data[t] = this.parseMetrics(A, e)), this._data[t];
                            }),
                            A
                        );
                    })(),
                    ls = (function () {
                        function A(A, e) {
                            (this.context = A), (this.options = e);
                        }
                        return A;
                    })(),
                    gs = (function (n) {
                        function r(A, e) {
                            var t = n.call(this, A, e) || this;
                            return (
                                (t._activeEffects = []),
                                (t.canvas = e.canvas ? e.canvas : document.createElement("canvas")),
                                (t.ctx = t.canvas.getContext("2d")),
                                e.canvas || ((t.canvas.width = Math.floor(e.width * e.scale)), (t.canvas.height = Math.floor(e.height * e.scale)), (t.canvas.style.width = e.width + "px"), (t.canvas.style.height = e.height + "px")),
                                (t.fontMetrics = new cs(document)),
                                t.ctx.scale(t.options.scale, t.options.scale),
                                t.ctx.translate(-e.x, -e.y),
                                (t.ctx.textBaseline = "bottom"),
                                (t._activeEffects = []),
                                t.context.logger.debug("Canvas renderer initialized (" + e.width + "x" + e.height + ") with scale " + e.scale),
                                t
                            );
                        }
                        return (
                            A(r, n),
                            (r.prototype.applyEffects = function (A) {
                                for (var e = this; this._activeEffects.length; ) this.popEffect();
                                A.forEach(function (A) {
                                    return e.applyEffect(A);
                                });
                            }),
                            (r.prototype.applyEffect = function (A) {
                                this.ctx.save(),
                                    Go(A) && (this.ctx.globalAlpha = A.opacity),
                                    Oo(A) && (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)),
                                    Vo(A) && (this.path(A.path), this.ctx.clip()),
                                    this._activeEffects.push(A);
                            }),
                            (r.prototype.popEffect = function () {
                                this._activeEffects.pop(), this.ctx.restore();
                            }),
                            (r.prototype.renderStack = function (A) {
                                return e(this, void 0, void 0, function () {
                                    var e;
                                    return t(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return (e = A.element.container.styles), e.isVisible() ? [4, this.renderStackContent(A)] : [3, 2];
                                            case 1:
                                                t.sent(), (t.label = 2);
                                            case 2:
                                                return [2];
                                        }
                                    });
                                });
                            }),
                            (r.prototype.renderNode = function (A) {
                                return e(this, void 0, void 0, function () {
                                    return t(this, function (e) {
                                        switch (e.label) {
                                            case 0:
                                                return Wt(A.container.flags, 16), A.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(A)] : [3, 3];
                                            case 1:
                                                return e.sent(), [4, this.renderNodeContent(A)];
                                            case 2:
                                                e.sent(), (e.label = 3);
                                            case 3:
                                                return [2];
                                        }
                                    });
                                });
                            }),
                            (r.prototype.renderTextWithLetterSpacing = function (A, e, t) {
                                var n = this;
                                if (0 === e) this.ctx.fillText(A.text, A.bounds.left, A.bounds.top + t);
                                else {
                                    Yn(A.text).reduce(function (e, r) {
                                        return n.ctx.fillText(r, e, A.bounds.top + t), e + n.ctx.measureText(r).width;
                                    }, A.bounds.left);
                                }
                            }),
                            (r.prototype.createFontStyle = function (A) {
                                var e = A.fontVariant
                                        .filter(function (A) {
                                            return "normal" === A || "small-caps" === A;
                                        })
                                        .join(""),
                                    t = Cs(A.fontFamily).join(", "),
                                    n = KA(A.fontSize) ? "" + A.fontSize.number + A.fontSize.unit : A.fontSize.number + "px";
                                return [[A.fontStyle, e, A.fontWeight, n, t].join(" "), t, n];
                            }),
                            (r.prototype.renderTextNode = function (A, n) {
                                return e(this, void 0, void 0, function () {
                                    var e,
                                        r,
                                        o,
                                        s,
                                        i,
                                        B,
                                        a,
                                        c,
                                        l = this;
                                    return t(this, function (t) {
                                        return (
                                            (e = this.createFontStyle(n)),
                                            (r = e[0]),
                                            (o = e[1]),
                                            (s = e[2]),
                                            (this.ctx.font = r),
                                            (this.ctx.direction = 1 === n.direction ? "rtl" : "ltr"),
                                            (this.ctx.textAlign = "left"),
                                            (this.ctx.textBaseline = "alphabetic"),
                                            (i = this.fontMetrics.getMetrics(o, s)),
                                            (B = i.baseline),
                                            (a = i.middle),
                                            (c = n.paintOrder),
                                            A.textBounds.forEach(function (A) {
                                                c.forEach(function (e) {
                                                    switch (e) {
                                                        case 0:
                                                            (l.ctx.fillStyle = $A(n.color)), l.renderTextWithLetterSpacing(A, n.letterSpacing, B);
                                                            var t = n.textShadow;
                                                            t.length &&
                                                                A.text.trim().length &&
                                                                (t
                                                                    .slice(0)
                                                                    .reverse()
                                                                    .forEach(function (e) {
                                                                        (l.ctx.shadowColor = $A(e.color)),
                                                                            (l.ctx.shadowOffsetX = e.offsetX.number * l.options.scale),
                                                                            (l.ctx.shadowOffsetY = e.offsetY.number * l.options.scale),
                                                                            (l.ctx.shadowBlur = e.blur.number),
                                                                            l.renderTextWithLetterSpacing(A, n.letterSpacing, B);
                                                                    }),
                                                                (l.ctx.shadowColor = ""),
                                                                (l.ctx.shadowOffsetX = 0),
                                                                (l.ctx.shadowOffsetY = 0),
                                                                (l.ctx.shadowBlur = 0)),
                                                                n.textDecorationLine.length &&
                                                                    ((l.ctx.fillStyle = $A(n.textDecorationColor || n.color)),
                                                                    n.textDecorationLine.forEach(function (e) {
                                                                        switch (e) {
                                                                            case 1:
                                                                                l.ctx.fillRect(A.bounds.left, Math.round(A.bounds.top + B), A.bounds.width, 1);
                                                                                break;
                                                                            case 2:
                                                                                l.ctx.fillRect(A.bounds.left, Math.round(A.bounds.top), A.bounds.width, 1);
                                                                                break;
                                                                            case 3:
                                                                                l.ctx.fillRect(A.bounds.left, Math.ceil(A.bounds.top + a), A.bounds.width, 1);
                                                                        }
                                                                    }));
                                                            break;
                                                        case 1:
                                                            n.webkitTextStrokeWidth &&
                                                                A.text.trim().length &&
                                                                ((l.ctx.strokeStyle = $A(n.webkitTextStrokeColor)),
                                                                (l.ctx.lineWidth = n.webkitTextStrokeWidth),
                                                                (l.ctx.lineJoin = window.chrome ? "miter" : "round"),
                                                                l.ctx.strokeText(A.text, A.bounds.left, A.bounds.top + B)),
                                                                (l.ctx.strokeStyle = ""),
                                                                (l.ctx.lineWidth = 0),
                                                                (l.ctx.lineJoin = "miter");
                                                    }
                                                });
                                            }),
                                            [2]
                                        );
                                    });
                                });
                            }),
                            (r.prototype.renderReplacedElement = function (A, e, t) {
                                if (t && A.intrinsicWidth > 0 && A.intrinsicHeight > 0) {
                                    var n = es(A),
                                        r = ko(e);
                                    this.path(r), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(t, 0, 0, A.intrinsicWidth, A.intrinsicHeight, n.left, n.top, n.width, n.height), this.ctx.restore();
                                }
                            }),
                            (r.prototype.renderNodeContent = function (A) {
                                return e(this, void 0, void 0, function () {
                                    var e, n, o, s, i, a, c, c, l, g, u, Q, w, d, C, h, U, F, f, c, p, w, h;
                                    return t(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                this.applyEffects(A.getEffects(4)), (e = A.container), (n = A.curves), (o = e.styles), (s = 0), (i = e.textNodes), (t.label = 1);
                                            case 1:
                                                return s < i.length ? ((a = i[s]), [4, this.renderTextNode(a, o)]) : [3, 4];
                                            case 2:
                                                t.sent(), (t.label = 3);
                                            case 3:
                                                return s++, [3, 1];
                                            case 4:
                                                if (!(e instanceof er)) return [3, 8];
                                                t.label = 5;
                                            case 5:
                                                return t.trys.push([5, 7, , 8]), [4, this.context.cache.match(e.src)];
                                            case 6:
                                                return (c = t.sent()), this.renderReplacedElement(e, n, c), [3, 8];
                                            case 7:
                                                return t.sent(), this.context.logger.error("Error loading image " + e.src), [3, 8];
                                            case 8:
                                                if ((e instanceof tr && this.renderReplacedElement(e, n, e.canvas), !(e instanceof nr))) return [3, 12];
                                                t.label = 9;
                                            case 9:
                                                return t.trys.push([9, 11, , 12]), [4, this.context.cache.match(e.svg)];
                                            case 10:
                                                return (c = t.sent()), this.renderReplacedElement(e, n, c), [3, 12];
                                            case 11:
                                                return t.sent(), this.context.logger.error("Error loading svg " + e.svg.substring(0, 255)), [3, 12];
                                            case 12:
                                                return e instanceof dr && e.tree
                                                    ? ((l = new r(this.context, { scale: this.options.scale, backgroundColor: e.backgroundColor, x: 0, y: 0, width: e.width, height: e.height })), [4, l.render(e.tree)])
                                                    : [3, 14];
                                            case 13:
                                                (g = t.sent()), e.width && e.height && this.ctx.drawImage(g, 0, 0, e.width, e.height, e.bounds.left, e.bounds.top, e.bounds.width, e.bounds.height), (t.label = 14);
                                            case 14:
                                                if (
                                                    (e instanceof ur &&
                                                        ((u = Math.min(e.bounds.width, e.bounds.height)),
                                                        e.type === cr
                                                            ? e.checked &&
                                                              (this.ctx.save(),
                                                              this.path([
                                                                  new mo(e.bounds.left + 0.39363 * u, e.bounds.top + 0.79 * u),
                                                                  new mo(e.bounds.left + 0.16 * u, e.bounds.top + 0.5549 * u),
                                                                  new mo(e.bounds.left + 0.27347 * u, e.bounds.top + 0.44071 * u),
                                                                  new mo(e.bounds.left + 0.39694 * u, e.bounds.top + 0.5649 * u),
                                                                  new mo(e.bounds.left + 0.72983 * u, e.bounds.top + 0.23 * u),
                                                                  new mo(e.bounds.left + 0.84 * u, e.bounds.top + 0.34085 * u),
                                                                  new mo(e.bounds.left + 0.39363 * u, e.bounds.top + 0.79 * u),
                                                              ]),
                                                              (this.ctx.fillStyle = $A(707406591)),
                                                              this.ctx.fill(),
                                                              this.ctx.restore())
                                                            : e.type === lr &&
                                                              e.checked &&
                                                              (this.ctx.save(),
                                                              this.ctx.beginPath(),
                                                              this.ctx.arc(e.bounds.left + u / 2, e.bounds.top + u / 2, u / 4, 0, 2 * Math.PI, !0),
                                                              (this.ctx.fillStyle = $A(707406591)),
                                                              this.ctx.fill(),
                                                              this.ctx.restore())),
                                                    us(e) && e.value.length)
                                                ) {
                                                    switch (
                                                        ((Q = this.createFontStyle(o)),
                                                        (w = Q[0]),
                                                        (d = Q[1]),
                                                        (C = this.fontMetrics.getMetrics(w, d).baseline),
                                                        (this.ctx.font = w),
                                                        (this.ctx.fillStyle = $A(o.color)),
                                                        (this.ctx.textBaseline = "alphabetic"),
                                                        (this.ctx.textAlign = ws(e.styles.textAlign)),
                                                        (h = es(e)),
                                                        (U = 0),
                                                        e.styles.textAlign)
                                                    ) {
                                                        case 1:
                                                            U += h.width / 2;
                                                            break;
                                                        case 2:
                                                            U += h.width;
                                                    }
                                                    (F = h.add(U, 0, 0, -h.height / 2 + 1)),
                                                        this.ctx.save(),
                                                        this.path([new mo(h.left, h.top), new mo(h.left + h.width, h.top), new mo(h.left + h.width, h.top + h.height), new mo(h.left, h.top + h.height)]),
                                                        this.ctx.clip(),
                                                        this.renderTextWithLetterSpacing(new Pn(e.value, F), o.letterSpacing, C),
                                                        this.ctx.restore(),
                                                        (this.ctx.textBaseline = "alphabetic"),
                                                        (this.ctx.textAlign = "left");
                                                }
                                                if (!Wt(e.styles.display, 2048)) return [3, 20];
                                                if (null === e.styles.listStyleImage) return [3, 19];
                                                if (((f = e.styles.listStyleImage), 0 !== f.type)) return [3, 18];
                                                (c = void 0), (p = f.url), (t.label = 15);
                                            case 15:
                                                return t.trys.push([15, 17, , 18]), [4, this.context.cache.match(p)];
                                            case 16:
                                                return (c = t.sent()), this.ctx.drawImage(c, e.bounds.left - (c.width + 10), e.bounds.top), [3, 18];
                                            case 17:
                                                return t.sent(), this.context.logger.error("Error loading list-style-image " + p), [3, 18];
                                            case 18:
                                                return [3, 20];
                                            case 19:
                                                A.listValue &&
                                                    -1 !== e.styles.listStyleType &&
                                                    ((w = this.createFontStyle(o)[0]),
                                                    (this.ctx.font = w),
                                                    (this.ctx.fillStyle = $A(o.color)),
                                                    (this.ctx.textBaseline = "middle"),
                                                    (this.ctx.textAlign = "right"),
                                                    (h = new B(e.bounds.left, e.bounds.top + YA(e.styles.paddingTop, e.bounds.width), e.bounds.width, Bt(o.lineHeight, o.fontSize.number) / 2 + 1)),
                                                    this.renderTextWithLetterSpacing(new Pn(A.listValue, h), o.letterSpacing, Bt(o.lineHeight, o.fontSize.number) / 2 + 2),
                                                    (this.ctx.textBaseline = "bottom"),
                                                    (this.ctx.textAlign = "left")),
                                                    (t.label = 20);
                                            case 20:
                                                return [2];
                                        }
                                    });
                                });
                            }),
                            (r.prototype.renderStackContent = function (A) {
                                return e(this, void 0, void 0, function () {
                                    var e, n, r, o, s, r, i, B, r, a, c, r, l, g, r, u, Q, r, w, d, r;
                                    return t(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return Wt(A.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(A.element)];
                                            case 1:
                                                t.sent(), (e = 0), (n = A.negativeZIndex), (t.label = 2);
                                            case 2:
                                                return e < n.length ? ((r = n[e]), [4, this.renderStack(r)]) : [3, 5];
                                            case 3:
                                                t.sent(), (t.label = 4);
                                            case 4:
                                                return e++, [3, 2];
                                            case 5:
                                                return [4, this.renderNodeContent(A.element)];
                                            case 6:
                                                t.sent(), (o = 0), (s = A.nonInlineLevel), (t.label = 7);
                                            case 7:
                                                return o < s.length ? ((r = s[o]), [4, this.renderNode(r)]) : [3, 10];
                                            case 8:
                                                t.sent(), (t.label = 9);
                                            case 9:
                                                return o++, [3, 7];
                                            case 10:
                                                (i = 0), (B = A.nonPositionedFloats), (t.label = 11);
                                            case 11:
                                                return i < B.length ? ((r = B[i]), [4, this.renderStack(r)]) : [3, 14];
                                            case 12:
                                                t.sent(), (t.label = 13);
                                            case 13:
                                                return i++, [3, 11];
                                            case 14:
                                                (a = 0), (c = A.nonPositionedInlineLevel), (t.label = 15);
                                            case 15:
                                                return a < c.length ? ((r = c[a]), [4, this.renderStack(r)]) : [3, 18];
                                            case 16:
                                                t.sent(), (t.label = 17);
                                            case 17:
                                                return a++, [3, 15];
                                            case 18:
                                                (l = 0), (g = A.inlineLevel), (t.label = 19);
                                            case 19:
                                                return l < g.length ? ((r = g[l]), [4, this.renderNode(r)]) : [3, 22];
                                            case 20:
                                                t.sent(), (t.label = 21);
                                            case 21:
                                                return l++, [3, 19];
                                            case 22:
                                                (u = 0), (Q = A.zeroOrAutoZIndexOrTransformedOrOpacity), (t.label = 23);
                                            case 23:
                                                return u < Q.length ? ((r = Q[u]), [4, this.renderStack(r)]) : [3, 26];
                                            case 24:
                                                t.sent(), (t.label = 25);
                                            case 25:
                                                return u++, [3, 23];
                                            case 26:
                                                (w = 0), (d = A.positiveZIndex), (t.label = 27);
                                            case 27:
                                                return w < d.length ? ((r = d[w]), [4, this.renderStack(r)]) : [3, 30];
                                            case 28:
                                                t.sent(), (t.label = 29);
                                            case 29:
                                                return w++, [3, 27];
                                            case 30:
                                                return [2];
                                        }
                                    });
                                });
                            }),
                            (r.prototype.mask = function (A) {
                                this.ctx.beginPath(),
                                    this.ctx.moveTo(0, 0),
                                    this.ctx.lineTo(this.canvas.width, 0),
                                    this.ctx.lineTo(this.canvas.width, this.canvas.height),
                                    this.ctx.lineTo(0, this.canvas.height),
                                    this.ctx.lineTo(0, 0),
                                    this.formatPath(A.slice(0).reverse()),
                                    this.ctx.closePath();
                            }),
                            (r.prototype.path = function (A) {
                                this.ctx.beginPath(), this.formatPath(A), this.ctx.closePath();
                            }),
                            (r.prototype.formatPath = function (A) {
                                var e = this;
                                A.forEach(function (A, t) {
                                    var n = vo(A) ? A.start : A;
                                    0 === t ? e.ctx.moveTo(n.x, n.y) : e.ctx.lineTo(n.x, n.y), vo(A) && e.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y);
                                });
                            }),
                            (r.prototype.renderRepeat = function (A, e, t, n) {
                                this.path(A), (this.ctx.fillStyle = e), this.ctx.translate(t, n), this.ctx.fill(), this.ctx.translate(-t, -n);
                            }),
                            (r.prototype.resizeImage = function (A, e, t) {
                                var n;
                                if (A.width === e && A.height === t) return A;
                                var r = null !== (n = this.canvas.ownerDocument) && void 0 !== n ? n : document,
                                    o = r.createElement("canvas");
                                return (o.width = Math.max(1, e)), (o.height = Math.max(1, t)), o.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, e, t), o;
                            }),
                            (r.prototype.renderBackgroundImage = function (A) {
                                return e(this, void 0, void 0, function () {
                                    var e, n, r, o, s, i;
                                    return t(this, function (B) {
                                        switch (B.label) {
                                            case 0:
                                                (e = A.styles.backgroundImage.length - 1),
                                                    (n = function (n) {
                                                        var o, s, i, B, a, c, l, g, u, Q, B, a, c, l, g, w, d, C, h, U, F, f, p, H, u, y, B, E, m, l, g, I, a, c, b, v, K, L, x, D, k, M;
                                                        return t(this, function (t) {
                                                            switch (t.label) {
                                                                case 0:
                                                                    if (0 !== n.type) return [3, 5];
                                                                    (o = void 0), (s = n.url), (t.label = 1);
                                                                case 1:
                                                                    return t.trys.push([1, 3, , 4]), [4, r.context.cache.match(s)];
                                                                case 2:
                                                                    return (o = t.sent()), [3, 4];
                                                                case 3:
                                                                    return t.sent(), r.context.logger.error("Error loading background-image " + s), [3, 4];
                                                                case 4:
                                                                    return (
                                                                        o &&
                                                                            ((i = rs(A, e, [o.width, o.height, o.width / o.height])),
                                                                            (B = i[0]),
                                                                            (a = i[1]),
                                                                            (c = i[2]),
                                                                            (l = i[3]),
                                                                            (g = i[4]),
                                                                            (u = r.ctx.createPattern(r.resizeImage(o, l, g), "repeat")),
                                                                            r.renderRepeat(B, u, a, c)),
                                                                        [3, 6]
                                                                    );
                                                                case 5:
                                                                    fe(n)
                                                                        ? ((Q = rs(A, e, [null, null, null])),
                                                                          (B = Q[0]),
                                                                          (a = Q[1]),
                                                                          (c = Q[2]),
                                                                          (l = Q[3]),
                                                                          (g = Q[4]),
                                                                          (w = ge(n.angle, l, g)),
                                                                          (d = w[0]),
                                                                          (C = w[1]),
                                                                          (h = w[2]),
                                                                          (U = w[3]),
                                                                          (F = w[4]),
                                                                          (f = document.createElement("canvas")),
                                                                          (f.width = l),
                                                                          (f.height = g),
                                                                          (p = f.getContext("2d")),
                                                                          (H = p.createLinearGradient(C, U, h, F)),
                                                                          ce(n.stops, d).forEach(function (A) {
                                                                              return H.addColorStop(A.stop, $A(A.color));
                                                                          }),
                                                                          (p.fillStyle = H),
                                                                          p.fillRect(0, 0, l, g),
                                                                          l > 0 && g > 0 && ((u = r.ctx.createPattern(f, "repeat")), r.renderRepeat(B, u, a, c)))
                                                                        : pe(n) &&
                                                                          ((y = rs(A, e, [null, null, null])),
                                                                          (B = y[0]),
                                                                          (E = y[1]),
                                                                          (m = y[2]),
                                                                          (l = y[3]),
                                                                          (g = y[4]),
                                                                          (I = 0 === n.position.length ? [NA] : n.position),
                                                                          (a = YA(I[0], l)),
                                                                          (c = YA(I[I.length - 1], g)),
                                                                          (b = we(n, a, c, l, g)),
                                                                          (v = b[0]),
                                                                          (K = b[1]),
                                                                          v > 0 &&
                                                                              K > 0 &&
                                                                              ((L = r.ctx.createRadialGradient(E + a, m + c, 0, E + a, m + c, v)),
                                                                              ce(n.stops, 2 * v).forEach(function (A) {
                                                                                  return L.addColorStop(A.stop, $A(A.color));
                                                                              }),
                                                                              r.path(B),
                                                                              (r.ctx.fillStyle = L),
                                                                              v !== K
                                                                                  ? ((x = A.bounds.left + 0.5 * A.bounds.width),
                                                                                    (D = A.bounds.top + 0.5 * A.bounds.height),
                                                                                    (k = K / v),
                                                                                    (M = 1 / k),
                                                                                    r.ctx.save(),
                                                                                    r.ctx.translate(x, D),
                                                                                    r.ctx.transform(1, 0, 0, k, 0, 0),
                                                                                    r.ctx.translate(-x, -D),
                                                                                    r.ctx.fillRect(E, M * (m - D) + D, l, g * M),
                                                                                    r.ctx.restore())
                                                                                  : r.ctx.fill())),
                                                                        (t.label = 6);
                                                                case 6:
                                                                    return e--, [2];
                                                            }
                                                        });
                                                    }),
                                                    (r = this),
                                                    (o = 0),
                                                    (s = A.styles.backgroundImage.slice(0).reverse()),
                                                    (B.label = 1);
                                            case 1:
                                                return o < s.length ? ((i = s[o]), [5, n(i)]) : [3, 4];
                                            case 2:
                                                B.sent(), (B.label = 3);
                                            case 3:
                                                return o++, [3, 1];
                                            case 4:
                                                return [2];
                                        }
                                    });
                                });
                            }),
                            (r.prototype.renderSolidBorder = function (A, n, r) {
                                return e(this, void 0, void 0, function () {
                                    return t(this, function (e) {
                                        return this.path(_o(r, n)), (this.ctx.fillStyle = $A(A)), this.ctx.fill(), [2];
                                    });
                                });
                            }),
                            (r.prototype.renderDoubleBorder = function (A, n, r, o) {
                                return e(this, void 0, void 0, function () {
                                    var e, s;
                                    return t(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return n < 3 ? [4, this.renderSolidBorder(A, r, o)] : [3, 2];
                                            case 1:
                                                return t.sent(), [2];
                                            case 2:
                                                return (e = Zo(o, r)), this.path(e), (this.ctx.fillStyle = $A(A)), this.ctx.fill(), (s = jo(o, r)), this.path(s), this.ctx.fill(), [2];
                                        }
                                    });
                                });
                            }),
                            (r.prototype.renderNodeBackgroundAndBorders = function (A) {
                                return e(this, void 0, void 0, function () {
                                    var e,
                                        n,
                                        r,
                                        o,
                                        s,
                                        i,
                                        B,
                                        a,
                                        c = this;
                                    return t(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return (
                                                    this.applyEffects(A.getEffects(2)),
                                                    ((e = A.container.styles),
                                                    (n = !zA(e.backgroundColor) || e.backgroundImage.length),
                                                    (r = [
                                                        { style: e.borderTopStyle, color: e.borderTopColor, width: e.borderTopWidth },
                                                        { style: e.borderRightStyle, color: e.borderRightColor, width: e.borderRightWidth },
                                                        { style: e.borderBottomStyle, color: e.borderBottomColor, width: e.borderBottomWidth },
                                                        { style: e.borderLeftStyle, color: e.borderLeftColor, width: e.borderLeftWidth },
                                                    ]),
                                                    (o = Qs(Bs(e.backgroundClip, 0), A.curves)),
                                                    n || e.boxShadow.length)
                                                        ? (this.ctx.save(),
                                                          this.path(o),
                                                          this.ctx.clip(),
                                                          zA(e.backgroundColor) || ((this.ctx.fillStyle = $A(e.backgroundColor)), this.ctx.fill()),
                                                          [4, this.renderBackgroundImage(A.container)])
                                                        : [3, 2]
                                                );
                                            case 1:
                                                t.sent(),
                                                    this.ctx.restore(),
                                                    e.boxShadow
                                                        .slice(0)
                                                        .reverse()
                                                        .forEach(function (e) {
                                                            c.ctx.save();
                                                            var t = xo(A.curves),
                                                                n = e.inset ? 0 : 1e4,
                                                                r = Po(t, -n + (e.inset ? 1 : -1) * e.spread.number, (e.inset ? 1 : -1) * e.spread.number, e.spread.number * (e.inset ? -2 : 2), e.spread.number * (e.inset ? -2 : 2));
                                                            e.inset ? (c.path(t), c.ctx.clip(), c.mask(r)) : (c.mask(t), c.ctx.clip(), c.path(r)),
                                                                (c.ctx.shadowOffsetX = e.offsetX.number + n),
                                                                (c.ctx.shadowOffsetY = e.offsetY.number),
                                                                (c.ctx.shadowColor = $A(e.color)),
                                                                (c.ctx.shadowBlur = e.blur.number),
                                                                (c.ctx.fillStyle = e.inset ? $A(e.color) : "rgba(0,0,0,1)"),
                                                                c.ctx.fill(),
                                                                c.ctx.restore();
                                                        }),
                                                    (t.label = 2);
                                            case 2:
                                                (s = 0), (i = 0), (B = r), (t.label = 3);
                                            case 3:
                                                return i < B.length
                                                    ? ((a = B[i]), 0 !== a.style && !zA(a.color) && a.width > 0 ? (2 !== a.style ? [3, 5] : [4, this.renderDashedDottedBorder(a.color, a.width, s, A.curves, 2)]) : [3, 11])
                                                    : [3, 13];
                                            case 4:
                                                return t.sent(), [3, 11];
                                            case 5:
                                                return 3 !== a.style ? [3, 7] : [4, this.renderDashedDottedBorder(a.color, a.width, s, A.curves, 3)];
                                            case 6:
                                                return t.sent(), [3, 11];
                                            case 7:
                                                return 4 !== a.style ? [3, 9] : [4, this.renderDoubleBorder(a.color, a.width, s, A.curves)];
                                            case 8:
                                                return t.sent(), [3, 11];
                                            case 9:
                                                return [4, this.renderSolidBorder(a.color, s, A.curves)];
                                            case 10:
                                                t.sent(), (t.label = 11);
                                            case 11:
                                                s++, (t.label = 12);
                                            case 12:
                                                return i++, [3, 3];
                                            case 13:
                                                return [2];
                                        }
                                    });
                                });
                            }),
                            (r.prototype.renderDashedDottedBorder = function (A, n, r, o, s) {
                                return e(this, void 0, void 0, function () {
                                    var e, i, B, a, c, l, g, u, Q, w, d, C, h, U, F, f, F, f;
                                    return t(this, function (t) {
                                        return (
                                            this.ctx.save(),
                                            (e = qo(o, r)),
                                            (i = _o(o, r)),
                                            2 === s && (this.path(i), this.ctx.clip()),
                                            vo(i[0]) ? ((B = i[0].start.x), (a = i[0].start.y)) : ((B = i[0].x), (a = i[0].y)),
                                            vo(i[1]) ? ((c = i[1].end.x), (l = i[1].end.y)) : ((c = i[1].x), (l = i[1].y)),
                                            (g = 0 === r || 2 === r ? Math.abs(B - c) : Math.abs(a - l)),
                                            this.ctx.beginPath(),
                                            3 === s ? this.formatPath(e) : this.formatPath(i.slice(0, 2)),
                                            (u = n < 3 ? 3 * n : 2 * n),
                                            (Q = n < 3 ? 2 * n : n),
                                            3 === s && ((u = n), (Q = n)),
                                            (w = !0),
                                            g <= 2 * u
                                                ? (w = !1)
                                                : g <= 2 * u + Q
                                                ? ((d = g / (2 * u + Q)), (u *= d), (Q *= d))
                                                : ((C = Math.floor((g + Q) / (u + Q))), (h = (g - C * u) / (C - 1)), (U = (g - (C + 1) * u) / C), (Q = U <= 0 || Math.abs(Q - h) < Math.abs(Q - U) ? h : U)),
                                            w && (3 === s ? this.ctx.setLineDash([0, u + Q]) : this.ctx.setLineDash([u, Q])),
                                            3 === s ? ((this.ctx.lineCap = "round"), (this.ctx.lineWidth = n)) : (this.ctx.lineWidth = 2 * n + 1.1),
                                            (this.ctx.strokeStyle = $A(A)),
                                            this.ctx.stroke(),
                                            this.ctx.setLineDash([]),
                                            2 === s &&
                                                (vo(i[0]) && ((F = i[3]), (f = i[0]), this.ctx.beginPath(), this.formatPath([new mo(F.end.x, F.end.y), new mo(f.start.x, f.start.y)]), this.ctx.stroke()),
                                                vo(i[1]) && ((F = i[1]), (f = i[2]), this.ctx.beginPath(), this.formatPath([new mo(F.end.x, F.end.y), new mo(f.start.x, f.start.y)]), this.ctx.stroke())),
                                            this.ctx.restore(),
                                            [2]
                                        );
                                    });
                                });
                            }),
                            (r.prototype.render = function (A) {
                                return e(this, void 0, void 0, function () {
                                    var e;
                                    return t(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return (
                                                    this.options.backgroundColor && ((this.ctx.fillStyle = $A(this.options.backgroundColor)), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)),
                                                    (e = Wo(A)),
                                                    [4, this.renderStack(e)]
                                                );
                                            case 1:
                                                return t.sent(), this.applyEffects([]), [2, this.canvas];
                                        }
                                    });
                                });
                            }),
                            r
                        );
                    })(ls),
                    us = function (A) {
                        return A instanceof wr || A instanceof Qr || (A instanceof ur && A.type !== lr && A.type !== cr);
                    },
                    Qs = function (A, e) {
                        switch (A) {
                            case 0:
                                return xo(e);
                            case 2:
                                return Do(e);
                            case 1:
                            default:
                                return ko(e);
                        }
                    },
                    ws = function (A) {
                        switch (A) {
                            case 1:
                                return "center";
                            case 2:
                                return "right";
                            case 0:
                            default:
                                return "left";
                        }
                    },
                    ds = ["-apple-system", "system-ui"],
                    Cs = function (A) {
                        return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent)
                            ? A.filter(function (A) {
                                  return -1 === ds.indexOf(A);
                              })
                            : A;
                    },
                    hs = (function (n) {
                        function r(A, e) {
                            var t = n.call(this, A, e) || this;
                            return (
                                (t.canvas = e.canvas ? e.canvas : document.createElement("canvas")),
                                (t.ctx = t.canvas.getContext("2d")),
                                (t.options = e),
                                (t.canvas.width = Math.floor(e.width * e.scale)),
                                (t.canvas.height = Math.floor(e.height * e.scale)),
                                (t.canvas.style.width = e.width + "px"),
                                (t.canvas.style.height = e.height + "px"),
                                t.ctx.scale(t.options.scale, t.options.scale),
                                t.ctx.translate(-e.x, -e.y),
                                t.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + e.width + "x" + e.height + " at " + e.x + "," + e.y + ") with scale " + e.scale),
                                t
                            );
                        }
                        return (
                            A(r, n),
                            (r.prototype.render = function (A) {
                                return e(this, void 0, void 0, function () {
                                    var e, n;
                                    return t(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return (e = Vn(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, A)), [4, Us(e)];
                                            case 1:
                                                return (
                                                    (n = t.sent()),
                                                    this.options.backgroundColor &&
                                                        ((this.ctx.fillStyle = $A(this.options.backgroundColor)), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)),
                                                    this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale),
                                                    [2, this.canvas]
                                                );
                                        }
                                    });
                                });
                            }),
                            r
                        );
                    })(ls),
                    Us = function (A) {
                        return new Promise(function (e, t) {
                            var n = new Image();
                            (n.onload = function () {
                                e(n);
                            }),
                                (n.onerror = t),
                                (n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A)));
                        });
                    },
                    Fs = (function () {
                        function A(A) {
                            var e = A.id,
                                t = A.enabled;
                            (this.id = e), (this.enabled = t), (this.start = Date.now());
                        }
                        return (
                            (A.prototype.debug = function () {
                                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                                this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.debug ? console.debug.apply(console, n([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
                            }),
                            (A.prototype.getTime = function () {
                                return Date.now() - this.start;
                            }),
                            (A.prototype.info = function () {
                                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                                this.enabled && "undefined" != typeof window && window.console && "function" == typeof console.info && console.info.apply(console, n([this.id, this.getTime() + "ms"], A));
                            }),
                            (A.prototype.warn = function () {
                                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                                this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.warn ? console.warn.apply(console, n([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
                            }),
                            (A.prototype.error = function () {
                                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                                this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.error ? console.error.apply(console, n([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
                            }),
                            (A.instances = {}),
                            A
                        );
                    })(),
                    fs = (function () {
                        function A(e, t) {
                            var n;
                            (this.windowBounds = t),
                                (this.instanceName = "#" + A.instanceCount++),
                                (this.logger = new Fs({ id: this.instanceName, enabled: e.logging })),
                                (this.cache = null !== (n = e.cache) && void 0 !== n ? n : new Co(this, e));
                        }
                        return (A.instanceCount = 1), A;
                    })(),
                    ps = function (A, e) {
                        return void 0 === e && (e = {}), Hs(A, e);
                    };
                "undefined" != typeof window && wo.setContext(window);
                var Hs = function (A, n) {
                        return e(void 0, void 0, void 0, function () {
                            var e, r, o, s, l, g, u, Q, w, d, C, h, U, F, f, p, H, y, E, m, I, b, I, v, K, L, x, D, k, M, S, T, O, V, G, R, P, N, X, J;
                            return t(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        if (!A || "object" != typeof A) return [2, Promise.reject("Invalid element provided as first argument")];
                                        if (!(e = A.ownerDocument)) throw new Error("Element is not attached to a Document");
                                        if (!(r = e.defaultView)) throw new Error("Document is not attached to a Window");
                                        return (
                                            (o = {
                                                allowTaint: null !== (v = n.allowTaint) && void 0 !== v && v,
                                                imageTimeout: null !== (K = n.imageTimeout) && void 0 !== K ? K : 15e3,
                                                proxy: n.proxy,
                                                useCORS: null !== (L = n.useCORS) && void 0 !== L && L,
                                            }),
                                            (s = i({ logging: null === (x = n.logging) || void 0 === x || x, cache: n.cache }, o)),
                                            (l = {
                                                windowWidth: null !== (D = n.windowWidth) && void 0 !== D ? D : r.innerWidth,
                                                windowHeight: null !== (k = n.windowHeight) && void 0 !== k ? k : r.innerHeight,
                                                scrollX: null !== (M = n.scrollX) && void 0 !== M ? M : r.pageXOffset,
                                                scrollY: null !== (S = n.scrollY) && void 0 !== S ? S : r.pageYOffset,
                                            }),
                                            (g = new B(l.scrollX, l.scrollY, l.windowWidth, l.windowHeight)),
                                            (u = new fs(s, g)),
                                            (Q = null !== (T = n.foreignObjectRendering) && void 0 !== T && T),
                                            (w = { allowTaint: null !== (O = n.allowTaint) && void 0 !== O && O, onclone: n.onclone, ignoreElements: n.ignoreElements, inlineImages: Q, copyStyles: Q }),
                                            u.logger.debug("Starting document clone with size " + g.width + "x" + g.height + " scrolled to " + -g.left + "," + -g.top),
                                            (d = new Ao(u, A, w)),
                                            (C = d.clonedReferenceElement),
                                            C ? [4, d.toIFrame(e, g)] : [2, Promise.reject("Unable to find element in cloned iframe")]
                                        );
                                    case 1:
                                        return (
                                            (h = t.sent()),
                                            ((U = xr(C) || Kr(C) ? c(C.ownerDocument) : a(u, C)),
                                            (F = U.width),
                                            (f = U.height),
                                            (p = U.left),
                                            (H = U.top),
                                            (y = ys(u, C, n.backgroundColor)),
                                            (E = {
                                                canvas: n.canvas,
                                                backgroundColor: y,
                                                scale: null !== (G = null !== (V = n.scale) && void 0 !== V ? V : r.devicePixelRatio) && void 0 !== G ? G : 1,
                                                x: (null !== (R = n.x) && void 0 !== R ? R : 0) + p,
                                                y: (null !== (P = n.y) && void 0 !== P ? P : 0) + H,
                                                width: null !== (N = n.width) && void 0 !== N ? N : Math.ceil(F),
                                                height: null !== (X = n.height) && void 0 !== X ? X : Math.ceil(f),
                                            }),
                                            Q)
                                                ? (u.logger.debug("Document cloned, using foreign object rendering"), (I = new hs(u, E)), [4, I.render(C)])
                                                : [3, 3]
                                        );
                                    case 2:
                                        return (m = t.sent()), [3, 5];
                                    case 3:
                                        return (
                                            u.logger.debug("Document cloned, element located at " + p + "," + H + " with size " + F + "x" + f + " using computed rendering"),
                                            u.logger.debug("Starting DOM parsing"),
                                            (b = Fr(u, C)),
                                            y === b.styles.backgroundColor && (b.styles.backgroundColor = se.TRANSPARENT),
                                            u.logger.debug("Starting renderer for element at " + E.x + "," + E.y + " with size " + E.width + "x" + E.height),
                                            (I = new gs(u, E)),
                                            [4, I.render(b)]
                                        );
                                    case 4:
                                        (m = t.sent()), (t.label = 5);
                                    case 5:
                                        return (
                                            (null === (J = n.removeContainer) || void 0 === J || J) && (Ao.destroy(h) || u.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),
                                            u.logger.debug("Finished rendering"),
                                            [2, m]
                                        );
                                }
                            });
                        });
                    },
                    ys = function (A, e, t) {
                        var n = e.ownerDocument,
                            r = n.documentElement ? oe(A, getComputedStyle(n.documentElement).backgroundColor) : se.TRANSPARENT,
                            o = n.body ? oe(A, getComputedStyle(n.body).backgroundColor) : se.TRANSPARENT,
                            s = "string" == typeof t ? oe(A, t) : null === t ? se.TRANSPARENT : 4294967295;
                        return e === n.documentElement ? (zA(r) ? (zA(o) ? s : o) : r) : s;
                    };
                return ps;
            });
        },
        function (A, e, t) {
            "use strict";
            function n(A, e) {
                if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n);
                        }
                    }
                    return function (e, t, n) {
                        return t && A(e.prototype, t), n && A(e, n), e;
                    };
                })(),
                o = (function () {
                    function A(e) {
                        n(this, A), (this._blockManagerData = { editor: e, ids: new Set() });
                    }
                    return (
                        r(A, [
                            {
                                key: "saveBlock",
                                value: function (A, e) {
                                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                        n = e.category,
                                        r = e.attributes,
                                        o = e.basic,
                                        s = o.html,
                                        i = o.css,
                                        B = o.preview,
                                        a = {
                                            label: '<div>\n          <img src="' + B + '"/>\n          <div class="my-label-block">' + r.title + "</div>\n          </div>",
                                            content: s + " <style>" + i + "</style>",
                                            category: n,
                                            attributes: r,
                                            onClick: function (A) {
                                                t(A.getId(), e);
                                            },
                                        },
                                        c = A && this.grapesBlockManager.get(A);
                                    return c && c.getCategoryLabel() !== n.label && (this.grapesBlockManager.remove(c), (c = null)), c ? c.set(a) : ((A = A || this.newBlockId), this.idsSet.add(A), this.grapesBlockManager.add(A, a)), A;
                                },
                            },
                            {
                                key: "remove",
                                value: function (A) {
                                    this.grapesBlockManager.remove(A), this.idsSet.delete(A);
                                },
                            },
                            {
                                key: "getContainer",
                                value: function () {
                                    return this.grapesBlockManager.getContainer();
                                },
                            },
                            {
                                key: "grapesBlockManager",
                                get: function () {
                                    return editor.BlockManager;
                                },
                            },
                            {
                                key: "newBlockId",
                                get: function () {
                                    var A = 0,
                                        e = void 0;
                                    do {
                                        e = "user-block-" + A++;
                                    } while (this.idsSet.has(e));
                                    return e;
                                },
                            },
                            {
                                key: "idsSet",
                                get: function () {
                                    return this._blockManagerData.ids;
                                },
                            },
                        ]),
                        A
                    );
                })();
            e.default = o;
        },
        function (A, e, t) {
            "use strict";
            function n(A, e) {
                if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n);
                        }
                    }
                    return function (e, t, n) {
                        return t && A(e.prototype, t), n && A(e, n), e;
                    };
                })(),
                o = (function () {
                    function A() {
                        n(this, A);
                    }
                    return (
                        r(
                            A,
                            [
                                {
                                    key: "saveBlock",
                                    value: function (A, e) {
                                        var t = this;
                                        return new Promise(function (n) {
                                            var r = t.constructor.data;
                                            (r[A] = e), t.constructor.saveRowData(r), n(!0);
                                        });
                                    },
                                },
                                {
                                    key: "remove",
                                    value: function (A) {
                                        var e = this;
                                        return new Promise(function (t) {
                                            var n = e.constructor.data;
                                            delete n[A], e.constructor.saveRowData(n), t(!0);
                                        });
                                    },
                                },
                                {
                                    key: "getAll",
                                    value: function () {
                                        var A = this;
                                        return new Promise(function (e) {
                                            var t = A.constructor.data;
                                            e(
                                                Object.keys(t).map(function (A) {
                                                    return { id: A, data: t[A] };
                                                })
                                            );
                                        });
                                    },
                                },
                            ],
                            [
                                {
                                    key: "saveRowData",
                                    value: function (A) {
                                        localStorage.setItem("users_blocks", JSON.stringify(A));
                                    },
                                },
                                {
                                    key: "data",
                                    get: function () {
                                        return JSON.parse(localStorage.getItem("users_blocks") || "{}");
                                    },
                                },
                            ]
                        ),
                        A
                    );
                })();
            e.default = o;
        },
        function (A, e, t) {
            "use strict";
            function n(A, e) {
                if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function r(A) {
                function e(A, e, n) {
                    function r(A) {
                        function e(A) {
                            console.log(A.stack), t("Internal error:\r\n\r\n" + A.message, (r && r.message) || "Internal error", o);
                        }
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        try {
                            A && A(r);
                        } catch (t) {
                            e(t);
                            try {
                                A !== n && n(r);
                            } catch (A) {
                                e(A);
                            }
                        }
                    }
                    var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (200 === A.status)
                        if (A.responseText) {
                            var s = void 0;
                            try {
                                if ((s = JSON.parse(A.responseText)) && s.success) B && B.push(s.message || "The server responded with no message"), r(e, s);
                                else {
                                    var i = void 0;
                                    (i = s
                                        ? t(
                                              s.message ? "The server responded with message:\r\n'" + s.message + "'" : 'The server returned "success = false" with no explanation message',
                                              s.message || 'The server returned "success = false" with no explanation message',
                                              o
                                          )
                                        : t("The server has returned no data", "The server has returned no data", o)),
                                        r(n, i);
                                }
                            } catch (A) {
                                r(n, t("The server responded with wrong JSON format."));
                            }
                        } else r(n, t("The server has returned no data", "The server has returned no data", o));
                    else r(n, t("The server responded with status: " + A.status + "\r\n " + A.statusText, A.statusText || "The server responded with status: " + A.status, o));
                }
                function t(A) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A;
                    return (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) || n(A), B && B.push(e), A;
                }
                function n(A) {
                    setTimeout(function () {
                        return alert(A);
                    }, 200);
                }
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    B = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                    a = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                    c = new XMLHttpRequest();
                if (
                    (c.open(i || (r ? "POST" : "GET"), A, !0),
                    c.addEventListener("load", function (A) {
                        return e(A.target, o, s, a);
                    }),
                    s &&
                        c.addEventListener("error", function (A) {
                            s(t("Request to server failed"));
                        }),
                    r)
                ) {
                    var l = { Accept: "*/*", "Content-Type": "application/json" };
                    for (var g in l) c.setRequestHeader(g, l[g]);
                    c.send(JSON.stringify(r));
                } else c.send();
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function () {
                    function A(A, e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n);
                        }
                    }
                    return function (e, t, n) {
                        return t && A(e.prototype, t), n && A(e, n), e;
                    };
                })(),
                s = (function () {
                    function A() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.url,
                            r = void 0 === t ? "./" : t,
                            o = e.getAll,
                            s = void 0 === o ? "getAll" : o,
                            i = e.remove,
                            B = void 0 === i ? "remove" : i,
                            a = e.saveBlock,
                            c = void 0 === a ? "saveBlock" : a;
                        n(this, A), (this._serverManagerData = { url: r, endPoints: { getAll: s, remove: B, saveBlock: c } });
                    }
                    return (
                        o(A, [
                            {
                                key: "compileEndpoint",
                                value: function (A) {
                                    return "" + this.url + A;
                                },
                            },
                            {
                                key: "saveBlock",
                                value: function (A, e) {
                                    return this.request(this.endpoint_save, { id: A, data: e });
                                },
                            },
                            {
                                key: "remove",
                                value: function (A) {
                                    return this.request(this.endpoint_remove, { id: A });
                                },
                            },
                            {
                                key: "getAll",
                                value: function () {
                                    return this.request(this.endpoint_getAll);
                                },
                            },
                            {
                                key: "request",
                                value: function (A) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                    return new Promise(function (t, n) {
                                        return r(
                                            A,
                                            e,
                                            function (A) {
                                                return t(A && A.data);
                                            },
                                            function (A) {
                                                return n(A);
                                            },
                                            void 0,
                                            null,
                                            !0
                                        );
                                    });
                                },
                            },
                            {
                                key: "url",
                                get: function () {
                                    return this._serverManagerData.url;
                                },
                            },
                            {
                                key: "endpoint_getAll",
                                get: function () {
                                    return this.compileEndpoint(this._serverManagerData.endPoints.getAll);
                                },
                            },
                            {
                                key: "endpoint_remove",
                                get: function () {
                                    return this.compileEndpoint(this._serverManagerData.endPoints.remove);
                                },
                            },
                            {
                                key: "endpoint_save",
                                get: function () {
                                    return this.compileEndpoint(this._serverManagerData.endPoints.saveBlock);
                                },
                            },
                        ]),
                        A
                    );
                })();
            e.default = s;
        },
    ]);
});
