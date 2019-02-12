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

            function _templateObject3() {
              var data = _taggedTemplateLiteral(["<uc-compare-panel></uc-compare-panel>"]);

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
              var data = _taggedTemplateLiteral(["\n        :host {\n            display: flex;\n            flex-direction: column;\n            position: relative;\n        }\n        \n        ::slotted(uc-nckd) {\n            order: -4;\n        }\n        \n        ::slotted(uc-header-panel) {\n            order: -3;\n        }\n        \n        ::slotted(uc-header) {\n            order: -2;\n            position: sticky;\n            top: 0;\n            z-index: 10;\n        }\n        \n        ::slotted(main) {\n            order: -1;\n        }\n        \n        ::slotted(footer) {\n            order: 1;\n        }\n        \n        @media (max-width: 991px) {\n            ::slotted(uc-header-panel) {\n                display: none;\n            }\n            ::slotted(uc-nckd) {\n                display: none;\n            }\n        }\n        \n        @media (min-width: 768px) {\n            ::slotted(footer) {\n                border-top: 5px solid #66c05d;\n                margin-top: 40px;\n            }\n        }\n        \n        @media (max-width: 767px) {\n            ::slotted(footer) {\n                border-top: calc((5px/14) * 1em) solid #66c05d;\n                margin-top: 20px;\n            }\n        }\n    "]);

              _templateObject = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcApp = _decorate([customElement('uc-app')], function (_initialize, _LitElement) {
              var UcApp =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcApp, _LitElement2);

                function UcApp() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcApp);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcApp;
              }(_LitElement);

              return {
                F: UcApp,
                d: [{
                  kind: "field",
                  decorators: [property({
                    type: Boolean
                  })],
                  key: "comparePanel",
                  value: function value() {
                    return false;
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
                    return html(_templateObject2(), this.comparePanel ? html(_templateObject3()) : '');
                  }
                }]
              };
            }, LitElement);

        }
    };
});
//# sourceMappingURL=chunk-ad97807e.js.map
