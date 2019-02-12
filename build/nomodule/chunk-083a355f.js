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
              var data = _taggedTemplateLiteral(["\n            <div>\n                <slot></slot>\n            </div>\n        "]);

              _templateObject2 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject() {
              var data = _taggedTemplateLiteral(["\n        :host {\n            display: block;\n            width: 100%;\n            background-color: #fff; }\n        @media (min-width: 768px) {\n        :host {\n                padding: 30px;\n                margin-top: 30px; } }\n        @media (max-width: 767px) {\n        :host {\n                padding: 2.14286em;\n                margin-top: 2.14286em; } }\n        \n        ::slotted(h2) {\n            margin-top: 0;\n            color: #666; }\n        @media (min-width: 768px) {\n            ::slotted(h2) {\n                font-size: 16px; } }\n        @media (max-width: 767px) {\n            ::slotted(h2) {\n                font-size: 1.14286em; } }\n        \n        ::slotted(p) {\n            color: #666;\n            margin: 0; }\n        @media (min-width: 768px) {\n            ::slotted(p) {\n                font-size: 12px;\n                line-height: 20px; } }\n        @media (max-width: 767px) {\n            ::slotted(p) {\n                font-size: 0.85714em;\n                line-height: 1.66667em; } }\n    "]);

              _templateObject = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcSeoBlock = _decorate([customElement('uc-seo-block')], function (_initialize, _LitElement) {
              var UcSeoBlock =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcSeoBlock, _LitElement2);

                function UcSeoBlock() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcSeoBlock);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcSeoBlock)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcSeoBlock;
              }(_LitElement);

              return {
                F: UcSeoBlock,
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
//# sourceMappingURL=chunk-083a355f.js.map
