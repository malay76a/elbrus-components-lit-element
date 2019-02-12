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

            var css$1 = ":host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n@media (min-width: 768px) {\n    :host {\n        margin-top: 40px;\n        margin-bottom: 40px; } }\n@media (max-width: 1199px) {\n    :host {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column; } }\n@media (max-width: 767px) {\n    :host {\n        margin-bottom: 2.14286em; } }\n\n@media (min-width: 1200px) {\n    ::slotted(uc-footer-menu) {\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 70%;\n        flex: 1 1 70%; } }\n\n@media (max-width: 1199px) and (min-width: 992px) {\n    ::slotted(uc-footer-menu) {\n        margin-bottom: 46px; } }\n\n@media (max-width: 991px) and (min-width: 768px) {\n    ::slotted(uc-footer-menu) {\n        margin-bottom: 44px; } }\n\n@media (max-width: 767px) {\n    ::slotted(uc-footer-menu) {\n        margin-bottom: 18px; } }\n\n@media (min-width: 1200px) {\n    ::slotted(uc-footer-link-block) {\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 30%;\n        flex: 1 1 30%; } }\n";

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

            var UcFooter = _decorate([customElement('uc-footer')], function (_initialize, _LitElement) {
              var UcFooter =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcFooter, _LitElement2);

                function UcFooter() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcFooter);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcFooter)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcFooter;
              }(_LitElement);

              return {
                F: UcFooter,
                d: [{
                  kind: "field",
                  static: true,
                  key: "styles",
                  value: function value() {
                    return css(_templateObject(), unsafeCSS(css$1));
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

        }
    };
});
//# sourceMappingURL=chunk-0738d728.js.map
