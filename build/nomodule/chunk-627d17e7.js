System.register(['./chunk-65e75638.js', './chunk-d72fc7c5.js'], function (exports, module) {
    'use strict';
    var _decorate, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _assertThisInitialized, _taggedTemplateLiteral, customElement, property, css, html, LitElement;
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
            property = module.b;
            css = module.c;
            html = module.d;
            LitElement = module.e;
        }],
        execute: function () {

            function _templateObject4() {
              var data = _taggedTemplateLiteral([""]);

              _templateObject4 = function _templateObject4() {
                return data;
              };

              return data;
            }

            function _templateObject3() {
              var data = _taggedTemplateLiteral(["<span>(", ")</span>"]);

              _templateObject3 = function _templateObject3() {
                return data;
              };

              return data;
            }

            function _templateObject2() {
              var data = _taggedTemplateLiteral(["\n            <slot></slot>\n            ", "\n        "]);

              _templateObject2 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject() {
              var data = _taggedTemplateLiteral(["\n        :host {\n            display: block; }\n        @media (min-width: 1200px) {\n        :host {\n                margin-top: 26px;\n                margin-bottom: 18px; } }\n        @media (max-width: 1199px) and (min-width: 992px) {\n        :host {\n                margin-top: 30px;\n                margin-bottom: 20px; } }\n        @media (max-width: 991px) and (min-width: 768px) {\n        :host {\n                margin-top: 19px;\n                margin-bottom: 22px; } }\n        @media (max-width: 767px) {\n        :host {\n                margin-top: 21px;\n                margin-bottom: 18px; } }\n        \n        ::slotted(h1),\n            span {\n            display: inline;\n            margin: 0;\n            font-weight: bold;\n            color: #333333;\n            text-transform: uppercase; }\n        @media (min-width: 1200px) {\n            ::slotted(h1),\n                span {\n                font-size: 36px; } }\n        @media (max-width: 1199px) and (min-width: 992px) {\n            ::slotted(h1),\n                span {\n                font-size: 32px; } }\n        @media (max-width: 991px) and (min-width: 768px) {\n            ::slotted(h1),\n                span {\n                font-size: 25px; } }\n        @media (max-width: 767px) {\n            ::slotted(h1),\n                span {\n                font-size: 1.28571em; } }\n    "]);

              _templateObject = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcPageTitle = _decorate([customElement('uc-page-title')], function (_initialize, _LitElement) {
              var UcPageTitle =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcPageTitle, _LitElement2);

                function UcPageTitle() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcPageTitle);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcPageTitle)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcPageTitle;
              }(_LitElement);

              return {
                F: UcPageTitle,
                d: [{
                  kind: "field",
                  decorators: [property({
                    type: String
                  })],
                  key: "counter",
                  value: function value() {
                    return '';
                  }
                }, {
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
                    return html(_templateObject2(), this.counter ? html(_templateObject3(), this.counter) : html(_templateObject4()));
                  }
                }]
              };
            }, LitElement);

        }
    };
});
//# sourceMappingURL=chunk-627d17e7.js.map
