System.register(['./chunk-65e75638.js', './chunk-d72fc7c5.js', './chunk-4836153e.js'], function (exports, module) {
    'use strict';
    var _decorate, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _assertThisInitialized, _taggedTemplateLiteral, customElement, css, html, LitElement, isMobile;
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
        }, function (module) {
            isMobile = module.a;
        }],
        execute: function () {

            function _templateObject3() {
              var data = _taggedTemplateLiteral(["\n            <slot />\n            <div class=\"triangle\"></div>\n        "]);

              _templateObject3 = function _templateObject3() {
                return data;
              };

              return data;
            }

            function _templateObject2() {
              var data = _taggedTemplateLiteral(["\n            <div class=\"hamburger\"></div>\n        "]);

              _templateObject2 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject() {
              var data = _taggedTemplateLiteral(["\n        :host {\n            display: flex;\n            justify-content: center;\n            align-items: center; \n        }\n        @media (min-width: 1200px) {\n            :host {\n                width: 180px;\n                height: 40px; \n            } \n        }\n        @media (max-width: 1199px) and (min-width: 992px) {\n            :host {\n                width: 142px;\n                height: 35px; \n            } \n        }\n        @media (max-width: 991px) and (min-width: 768px) {\n            :host {\n                width: 24px;\n                height: 15px; \n            } \n        }\n        @media (max-width: 767px) {\n            :host {\n                width: 1.71429em;\n                height: 1.07143em; \n            } \n        }\n        @media (min-width: 992px) {\n            :host {\n                background-color: #66c05d; \n            } \n        }\n        @media (max-width: 991px) {\n            :host {\n                cursor: pointer;\n                background-size: cover;\n                background-position: center;\n                background-repeat: no-repeat;\n                background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDI0IDE1Ij4gICAgPGcgZmlsbD0iIzJBMkEyQSIgZmlsbC1ydWxlPSJub256ZXJvIj4gICAgICAgIDxwYXRoIGQ9Ik0uNzUgMmgyMi41Yy40MTQgMCAuNzUtLjQ0OC43NS0xcy0uMzM2LTEtLjc1LTFILjc1Qy4zMzYgMCAwIC40NDggMCAxcy4zMzYgMSAuNzUgMXpNMjMuMjUgNkguNzVDLjMzNiA2IDAgNi40NDggMCA3cy4zMzYgMSAuNzUgMWgyMi41Yy40MTQgMCAuNzUtLjQ0OC43NS0xcy0uMzM2LTEtLjc1LTF6TTIzLjI3MyAxM0g4LjcyN0M4LjMyNiAxMyA4IDEzLjQ0OCA4IDE0cy4zMjYgMSAuNzI3IDFoMTQuNTQ2Yy40MDEgMCAuNzI3LS40NDguNzI3LTFzLS4zMjYtMS0uNzI3LTF6Ii8+ICAgIDwvZz48L3N2Zz4=); \n            }\n        \n            ::slotted(a) {\n                display: none;\n            }\n        \n            .triangle {\n                display: none;\n            }\n        }\n        \n        ::slotted(a) {\n            font-size: 14px;\n            font-weight: bold;\n            color: #ffffff;\n            text-decoration: none;\n            text-transform: uppercase; \n        }\n        \n        .triangle {\n            width: 10px;\n            height: 5px;\n            margin-left: 26px;\n            margin-right: -10px;\n            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgMTAgNSI+ICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUgNUwwIDBoMTB6Ii8+PC9zdmc+);\n            background-size: cover;\n            background-position: center;\n            background-repeat: no-repeat; \n        }\n    "]);

              _templateObject = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcHeaderCatalog = _decorate([customElement('uc-header-catalog')], function (_initialize, _LitElement) {
              var UcHeaderCatalog =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcHeaderCatalog, _LitElement2);

                function UcHeaderCatalog() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcHeaderCatalog);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcHeaderCatalog)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcHeaderCatalog;
              }(_LitElement);

              return {
                F: UcHeaderCatalog,
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
                    return isMobile() ? html(_templateObject2()) : html(_templateObject3());
                  }
                }]
              };
            }, LitElement);

        }
    };
});
//# sourceMappingURL=chunk-7d532c02.js.map
