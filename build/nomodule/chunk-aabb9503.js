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
              var data = _taggedTemplateLiteral(["\n                        <div class=\"header\">\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430</div>\n                        <div class=\"text\">\u041F\u0440\u043E\u0441\u0442\u043E \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0441\u044E\u0434\u0430 \u0442\u043E\u0432\u0430\u0440\u044B</div>\n                    "]);

              _templateObject3 = function _templateObject3() {
                return data;
              };

              return data;
            }

            function _templateObject2() {
              var data = _taggedTemplateLiteral(["\n                        <div class=\"header\">\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A \u043F\u0443\u0441\u0442</div>\n                        <div class=\"text\">\u041F\u0440\u043E\u0441\u0442\u043E \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0441\u044E\u0434\u0430 \u0442\u043E\u0432\u0430\u0440\u044B, \u0440\u0430\u0441\u043F\u0435\u0447\u0430\u0442\u0430\u0439\u0442\u0435 \u0441\u043F\u0438\u0441\u043E\u043A \u0438 \u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435\u0441\u044C \u0438\u043C \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435.</div>\n                        <div class=\"text\">\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0440\u0435\u0437\u0435\u0440\u0432\u043E\u043C \u0437\u0430\u043A\u0430\u0437\u0430 \u0432 \u041C\u0430\u0433\u0430\u0437\u0438\u043D\u0435!</div>\n                    "]);

              _templateObject2 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject() {
              var data = _taggedTemplateLiteral(["\n        :host {\n            display: flex;\n            flex-direction: column;\n            padding: 10px 20px;\n            border: 1px solid #eee;\n            background-color: #fff;\n            width: 400px;\n        }\n        \n        .header {\n            font-weight: 700;\n            font-size: 18px;\n            text-align: center;\n        }\n        \n        .text {\n            margin-top: 12px;\n            font-size: 14px;\n            text-align: left;\n            font-style: italic;\n        }\n    "]);

              _templateObject = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcHeaderListPopup = _decorate([customElement('uc-header-list-popup')], function (_initialize, _LitElement) {
              var UcHeaderListPopup =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcHeaderListPopup, _LitElement2);

                function UcHeaderListPopup() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcHeaderListPopup);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcHeaderListPopup)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcHeaderListPopup;
              }(_LitElement);

              return {
                F: UcHeaderListPopup,
                d: [{
                  kind: "field",
                  decorators: [property({
                    type: String
                  })],
                  key: "dataType",
                  value: function value() {
                    return '';
                  }
                }, {
                  kind: "field",
                  decorators: [property({
                    type: Array
                  })],
                  key: "dataList",
                  value: function value() {
                    return [];
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
                    var content;

                    if (this.dataList.length < 1) {
                      switch (this.dataType) {
                        case 'shop-list':
                          content = html(_templateObject2());
                          break;

                        case 'buy-list':
                          content = html(_templateObject3());
                          break;

                        default:
                          break;
                      }
                    }

                    return content;
                  }
                }]
              };
            }, LitElement);

        }
    };
});
//# sourceMappingURL=chunk-aabb9503.js.map
