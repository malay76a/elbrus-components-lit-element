System.register(['./chunk-65e75638.js', './chunk-d72fc7c5.js'], function (exports, module) {
    'use strict';
    var _decorate, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _assertThisInitialized, _taggedTemplateLiteral, customElement, css, html, LitElement;
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
            html = module.d;
            LitElement = module.e;
        }],
        execute: function () {

            function _templateObject2() {
              var data = _taggedTemplateLiteral(["\n            <slot></slot>\n        "]);

              _templateObject2 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject() {
              var data = _taggedTemplateLiteral(["\n        :host {\n            display: block;\n            margin-left: auto;\n            margin-right: auto; \n        }\n        @media (min-width: 1200px) {\n            :host {\n                width: 1200px; \n            } \n        }\n        @media (max-width: 1199px) and (min-width: 992px) {\n            :host {\n                width: 972px; \n            } \n        }\n        @media (max-width: 991px) and (min-width: 768px) {\n            :host {\n                width: 768px; \n            } \n        }\n        @media (max-width: 767px) {\n            :host {\n                padding-left: 0.71429em;\n                padding-right: 0.71429em;\n                width: 100%; \n            } \n        }\n    "]);

              _templateObject = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcContainer = _decorate([customElement('uc-container')], function (_initialize, _LitElement) {
              var UcContainer =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcContainer, _LitElement2);

                function UcContainer() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcContainer);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcContainer;
              }(_LitElement);

              return {
                F: UcContainer,
                d: [{
                  kind: "field",
                  static: true,
                  key: "styles",
                  value: function value() {
                    return css(_templateObject());
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
//# sourceMappingURL=chunk-91733622.js.map
