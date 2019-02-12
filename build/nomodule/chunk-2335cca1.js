System.register(['./chunk-65e75638.js', './chunk-d72fc7c5.js'], function (exports, module) {
    'use strict';
    var _decorate, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _assertThisInitialized, _taggedTemplateLiteral, customElement, css, unsafeCSS, html, LitElement;
    return {
        setters: [function (module) {
            _decorate = module.k;
            _inherits = module.e;
            _classCallCheck = module.c;
            _possibleConstructorReturn = module.f;
            _getPrototypeOf = module.g;
            _assertThisInitialized = module.l;
            _taggedTemplateLiteral = module.m;
        }, function (module) {
            customElement = module.a;
            css = module.c;
            unsafeCSS = module.f;
            html = module.d;
            LitElement = module.e;
        }],
        execute: function () {

            var css$1 = ":host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n\n::slotted(*) {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%; }\n";

            var css$2 = ":host {\n    color: transparent;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    position: relative;\n    display: block;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain; }\n@media (min-width: 768px) {\n    :host {\n        max-width: 180px;\n        height: 43px; } }\n@media (max-width: 767px) {\n    :host {\n        max-width: 10.35714em;\n        height: 3.07143em; } }\n\n:host([android]) {\n    background-image: url(\"https://res.cloudinary.com/lmru/image/upload/index/google.svg\"); }\n\n:host([ios]) {\n    background-image: url(\"https://res.cloudinary.com/lmru/image/upload/index/appstore.svg\"); }\n\n::slotted(*:not(a)) {\n    display: none; }\n\n::slotted(a) {\n    display: block;\n    color: transparent;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    position: absolute;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%; }\n";

            function _templateObject2() {
              var data = _taggedTemplateLiteral(["<slot></slot>"]);

              _templateObject2 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject() {
              var data = _taggedTemplateLiteral(["", ""]);

              _templateObject = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcFooterAppMobile = _decorate([customElement('uc-footer-app-mobile')], function (_initialize, _LitElement) {
              var UcFooterAppMobile =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcFooterAppMobile, _LitElement2);

                function UcFooterAppMobile() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcFooterAppMobile);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcFooterAppMobile)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcFooterAppMobile;
              }(_LitElement);

              return {
                F: UcFooterAppMobile,
                d: [{
                  kind: "field",
                  static: true,
                  key: "styles",
                  value: function value() {
                    return css(_templateObject(), unsafeCSS(css$2));
                  }
                }, {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return html(_templateObject2());
                  }
                }]
              };
            }, LitElement);

            function _templateObject2$1() {
              var data = _taggedTemplateLiteral(["<slot></slot>"]);

              _templateObject2$1 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject$1() {
              var data = _taggedTemplateLiteral(["", ""]);

              _templateObject$1 = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcFooterApps = _decorate([customElement('uc-footer-apps')], function (_initialize, _LitElement) {
              var UcFooterApps =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcFooterApps, _LitElement2);

                function UcFooterApps() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcFooterApps);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcFooterApps)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcFooterApps;
              }(_LitElement);

              return {
                F: UcFooterApps,
                d: [{
                  kind: "field",
                  static: true,
                  key: "styles",
                  value: function value() {
                    return css(_templateObject$1(), unsafeCSS(css$1));
                  }
                }, {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return html(_templateObject2$1());
                  }
                }]
              };
            }, LitElement);

        }
    };
});
//# sourceMappingURL=chunk-2335cca1.js.map
