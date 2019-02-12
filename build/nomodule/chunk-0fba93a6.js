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
              var data = _taggedTemplateLiteral(["\n            <slot></slot>\n            <div class=\"hamburger\" @click=\"", "\">\n                <div class=\"filter-icon\"></div>\n            </div>\n        "]);

              _templateObject3 = function _templateObject3() {
                return data;
              };

              return data;
            }

            function _templateObject2() {
              var data = _taggedTemplateLiteral(["<slot></slot>"]);

              _templateObject2 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject() {
              var data = _taggedTemplateLiteral(["\n        @media (min-width: 992px) {\n        :host {\n                display: -ms-grid;\n                display: grid;\n                -ms-grid-columns: 3fr 20px 9fr;\n                grid-template-columns: 3fr 9fr;\n                -ms-grid-rows: auto;\n                grid-template-rows: auto;\n                grid-template-areas: \"faset list\";\n                grid-column-gap: 20px; } }\n        \n        @media (min-width: 992px) {\n            uc-fasets-list {\n                grid-area: faset; } }\n        \n        @media (min-width: 992px) {\n            uc-item-list {\n                grid-area: list; } }\n        \n        @media (min-width: 992px) {\n            uc-fasets-list {\n                -ms-grid-row: 1;\n                -ms-grid-column: 1; }\n            uc-item-list {\n                -ms-grid-row: 1;\n                -ms-grid-column: 3; } }\n        \n        .hamburger {\n            position: fixed;\n            height: 11.07143em;\n            width: 2.85714em;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: center;\n            -ms-flex-pack: center;\n            justify-content: center;\n            -webkit-box-align: center;\n            -ms-flex-align: center;\n            align-items: center;\n            bottom: 10vh;\n            right: 0;\n            z-index: 1;\n            cursor: pointer;\n            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzQgMTAyMyI+ICA8cGF0aCBkPSJNMCA1MTEuNUM0IDc4Ni4zOCAzMjMuMDcgNzcyLjI4IDM3NCAxMDIzVjBDMzIzLjA3IDI1MC43MiA0IDIzNi42MiAwIDUxMS41eiIgZmlsbD0iIzY2YzA1ZCIvPjwvc3ZnPg==);\n            background-position: center;\n            background-repeat: no-repeat;\n            background-size: contain; }\n        \n        .filter-icon {\n            width: 1.14286em;\n            height: 1.21429em;\n            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE2IDE3Ij4gICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwaDE2bC02IDd2MTBsLTQtMi45NDNWN3oiLz48L3N2Zz4=);\n            background-position: center;\n            background-repeat: no-repeat;\n            background-size: contain; }\n    "]);

              _templateObject = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcFacetAndList = _decorate([customElement('uc-facet-and-list')], function (_initialize, _LitElement) {
              var UcFacetAndList =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcFacetAndList, _LitElement2);

                function UcFacetAndList() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcFacetAndList);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcFacetAndList)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcFacetAndList;
              }(_LitElement);

              return {
                F: UcFacetAndList,
                d: [{
                  kind: "field",
                  static: true,
                  key: "styles",
                  value: function value() {
                    return css(_templateObject());
                  }
                }, {
                  kind: "method",
                  key: "toggleFilter",
                  value: function toggleFilter(e) {
                    var event = new CustomEvent('filterShow', {
                      detail: e
                    });
                    this.dispatchEvent(event);
                  }
                }, {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return !isMobile() ? html(_templateObject2()) : html(_templateObject3(), this.toggleFilter);
                  }
                }]
              };
            }, LitElement);

        }
    };
});
//# sourceMappingURL=chunk-0fba93a6.js.map
