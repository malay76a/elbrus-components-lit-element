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
              var data = _taggedTemplateLiteral(["\n        :host {\n            height: 40px;\n            background-color: #fce300;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n        \n        ::slotted(a),\n        a {\n            font-size: 24px;\n            color: #e5112f;\n            letter-spacing: -1px;\n            text-decoration: none;\n            text-transform: uppercase;\n            font-weight: bold;\n        }\n    "]);

              _templateObject = function _templateObject() {
                return data;
              };

              return data;
            }

            var UCNckd = _decorate([customElement('uc-nckd')], function (_initialize, _LitElement) {
              var UCNckd =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UCNckd, _LitElement2);

                function UCNckd() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UCNckd);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UCNckd)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UCNckd;
              }(_LitElement);

              return {
                F: UCNckd,
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
//# sourceMappingURL=chunk-45bffcea.js.map
