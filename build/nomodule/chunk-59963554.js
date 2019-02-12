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
              var data = _taggedTemplateLiteral(["\n        :host {\n            display: -ms-grid;\n            display: grid;\n            width: 100%; }\n        @media (max-width: 767px) {\n        :host {\n                grid-row-gap: 0.71429em;\n                -ms-grid-columns: 1fr;\n                grid-template-columns: 1fr; } }\n        \n        @media (min-width: 768px) {\n        :host([typed='list']),\n        :host(:not([typed='card'])) {\n                grid-row-gap: 10px;\n                -ms-grid-columns: 1fr;\n                grid-template-columns: 1fr; } }\n        \n        @media (min-width: 768px) {\n        :host([typed='card']) {\n                -ms-grid-columns: (1fr)[3];\n                grid-template-columns: repeat(3, 1fr);\n                grid-row-gap: 20px;\n                grid-column-gap: 20px; } }\n    "]);

              _templateObject = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcPlpList = _decorate([customElement('uc-plp-list')], function (_initialize, _LitElement) {
              var UcPlpList =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcPlpList, _LitElement2);

                function UcPlpList() {
                  var _this;

                  _classCallCheck(this, UcPlpList);

                  _this = _possibleConstructorReturn(this, _getPrototypeOf(UcPlpList).call(this));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  _this.typed = 'list';
                  window.addEventListener('plpChangeType', _this.handleChangeTypeList);
                  return _this;
                }

                return UcPlpList;
              }(_LitElement);

              return {
                F: UcPlpList,
                d: [{
                  kind: "get",
                  static: true,
                  key: "properties",
                  value: function properties() {
                    return {
                      typed: {
                        type: String,
                        reflect: true
                      }
                    };
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
                  key: "handleChangeTypeList",
                  value: function handleChangeTypeList(event) {
                    this.typed = event.detail;
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
//# sourceMappingURL=chunk-59963554.js.map
