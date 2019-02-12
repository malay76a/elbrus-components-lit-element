System.register(['./chunk-65e75638.js', './chunk-d72fc7c5.js', './chunk-91733622.js'], function (exports, module) {
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
        }, function () {}],
        execute: function () {

            function _templateObject2() {
              var data = _taggedTemplateLiteral(["\n            <div class=\"region-label\">\u0420\u0435\u0433\u0438\u043E\u043D:</div>\n            <div class=\"region-name\">", "</div>\n        "]);

              _templateObject2 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject() {
              var data = _taggedTemplateLiteral(["\n        :host {\n            display: flex;\n            align-items: center;\n        }\n        \n        .region-label {\n            font-size: 11px;\n            color: #666666;\n            margin-right: 8px;\n        }\n        .region-name {\n            cursor: pointer;\n            font-size: 12px;\n            font-weight: bold;\n            text-transform: uppercase;\n            text-decoration: underline;\n            color: #66c05d;\n        }\n    "]);

              _templateObject = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcHeaderPanelLocation = _decorate([customElement('uc-header-panel-location')], function (_initialize, _LitElement) {
              var UcHeaderPanelLocation =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcHeaderPanelLocation, _LitElement2);

                function UcHeaderPanelLocation() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcHeaderPanelLocation);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcHeaderPanelLocation)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcHeaderPanelLocation;
              }(_LitElement);

              return {
                F: UcHeaderPanelLocation,
                d: [{
                  kind: "field",
                  decorators: [property({
                    type: String
                  })],
                  key: "region",
                  value: void 0
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
                    return html(_templateObject2(), this.region);
                  }
                }]
              };
            }, LitElement);

            function _templateObject2$1() {
              var data = _taggedTemplateLiteral(["\n            <slot></slot>\n        "]);

              _templateObject2$1 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject$1() {
              var data = _taggedTemplateLiteral(["\n        :host {\n            display: flex;\n            align-items: center;\n            margin-left: auto; \n        }\n        \n        ::slotted(a) {\n            font-size: 10px;\n            text-transform: uppercase;\n            color: #333333;\n            text-decoration: none;\n            display: flex;\n            align-items: center;\n            margin-left: 10px;\n            margin-right: 10px; \n        }\n        \n        ::slotted(a)::before {\n            display: inline-block;\n            content: '';\n            background-repeat: no-repeat;\n            background-position: center;\n            background-size: contain;\n            margin-right: 6px; \n        }\n        \n        ::slotted([data-icon=\"advice\"])::before {\n            width: 16px;\n            height: 16px;\n            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4gICAgPHBhdGggZmlsbD0iIzQ0NCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS41MDkgMEwuMDAzIDEuNTA2VjQuMTFIMHY3LjdoLjAwM3YyLjE1NmwxLjUwNiAxLjUwNWgzLjMxMnYuMDAxaDkuMTQ0bDEuNTA1LTEuNTA2VjExLjgxaC4wMDN2LTcuN2gtLjAwM1YxLjUwNkwxMy45NjUgMEgxLjUwOXptMS4zMjcgOC40NjFWNS4wMjNsMS4zLTEuM2gxLjg0MVYzLjcySDkuNDF2LjAwMWgxLjg0MWwxLjMgMS4zMDF2My40MzhsLTEuMyAxLjMwMWgtMS4wNDhsLjI4MiAyLjktMi43NzQtMi44OThINS45Nzd2LS4wMDJINC4xMzZsLTEuMy0xLjN6Ii8+PC9zdmc+); \n        }\n        \n        ::slotted([data-icon=\"services\"])::before {\n            width: 17px;\n            height: 16px;\n            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTciIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNyAxNiI+ICAgIDxkZWZzPiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMTYuMDgydjE1Ljk5NkgweiIvPiAgICA8L2RlZnM+ICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPiAgICAgICAgPC9tYXNrPiAgICAgICAgPHBhdGggZmlsbD0iIzQ0NCIgZD0iTTExLjE5NCA5LjY2NmMtLjE5LjMzMy0uMzU1LjYxMi0uMzY2LjYxNi0uMDEuMDA3LS4xNTUuMTQ4LS4zMDQuMjk3LS4xNDguMTQ4LS41NDQuNDIxLS44OC42MDYgMCAwLS43NTIuNDE0LTEuNTc2LjQxNGEzLjU4OCAzLjU4OCAwIDAgMS0zLjU4NC0zLjU5IDMuNTg5IDMuNTg5IDAgMCAxIDMuNTg0LTMuNTkyQTMuNTg4IDMuNTg4IDAgMCAxIDExLjY1IDguMDFjMCAuODU4LS40NTcgMS42NTctLjQ1NyAxLjY1N200LjE5MS0yLjg0N2gtLjAzYy0uMzgzIDAtLjc4NC0uMzAyLS44OTEtLjY3MmwtLjQ5Ni0xLjI0Yy0uMTgtLjM0LS4xMDQtLjg0LjE2Ni0xLjExNGwuMTI0LS4xMjJhLjcwMi43MDIgMCAwIDAgMC0uOTg4bC0uNzk4LS44YS43LjcgMCAwIDAtLjk4NiAwbC0uMTEuMTFjLS4yNzEuMjcxLS43NjguMzQxLTEuMTA0LjE1NWwtMS4yNjMtLjUyNkM5LjYzIDEuNTEgOS4zMyAxLjEwMyA5LjMzLjcyVi43QS43LjcgMCAwIDAgOC42MzMgMEg3LjUwNGEuNy43IDAgMCAwLS42OTguN3YuMDJjMCAuMzgzLS4zLjc4OC0uNjY4LjlsLTEuMTg5LjQ4NGMtLjMzNy4xODItLjgzNy4xMDgtMS4xMDctLjE2NGwtLjA1OC0uMDU4YS43LjcgMCAwIDAtLjk4NiAwTDIgMi42ODNhLjcwMi43MDIgMCAwIDAgMCAuOTg4bC4wNS4wNTFjLjI3Mi4yNzIuMzQuNzcuMTU1IDEuMTA1bC0uNDkgMS4xNTVjLS4xMTUuMzY2LS41MjQuNjY3LS45MDguNjY3aC0uMTFBLjcuNyAwIDAgMCAwIDcuMzQ3VjguNDhhLjcuNyAwIDAgMCAuNjk4LjY5OGguMDc5Yy4zODQgMCAuNzgzLjMwMy44OS42NzNsLjQ1MyAxLjE3MWMuMTc3LjM0Mi4xLjg0NS0uMTczIDEuMTE2bC0uMDY4LjA2OGEuNzAxLjcwMSAwIDAgMCAwIC45OWwuNzk3LjhhLjcuNyAwIDAgMCAuOTg3IDBsLjAzLS4wMjljLjI3LS4yNzIuNzY0LS4zMzcgMS4wOTctLjE0NWwxLjE4My41MjNjLjM2NS4xMjEuNjYyLjUzNS42NjIuOTJ2LjAzM2MwIC4zODUuMzE0LjcuNjk5LjdIOC40NmEuNjk0LjY5NCAwIDAgMCAuNjk4LS42ODZjMC0uMzc3LjMwMy0uNzY5LjY3My0uODdsMS4yNTMtLjQ4M2MuMzQyLS4xNzYuODQtLjEwMiAxLjEwNS4xNjVhLjY5Mi42OTIgMCAwIDAgLjk3OC0uMDFsLjc5OC0uNzk5Yy4yNy0uMjcyLjI4NC0uNzA0LjAyNy0uOTYtLjI1NS0uMjU3LS4zMS0uNzQtLjExOS0xLjA3NGwuNTQ2LTEuMjY3Yy4xMTctLjM2Ni41MjctLjY2NS45MS0uNjY1aC4wNTRhLjcwMS43MDEgMCAwIDAgLjY5OC0uN1Y3LjUyYS43LjcgMCAwIDAtLjY5OC0uNyIgbWFzaz0idXJsKCNiKSIvPiAgICA8L2c+PC9zdmc+); \n        }\n        \n        ::slotted([data-icon=\"shops\"])::before {\n            width: 11px;\n            height: 15px;\n            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTEiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxMSAxNSI+ICAgIDxkZWZzPiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik01LjQ4MiAwSDB2MTQuMzg4aDEwLjk2NFYweiIvPiAgICA8L2RlZnM+ICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPiAgICAgICAgPC9tYXNrPiAgICAgICAgPHBhdGggZmlsbD0iIzQ0NCIgZD0iTTUuNDgyIDcuNzE2YTIuMjM1IDIuMjM1IDAgMSAxIDAtNC40NjkgMi4yMzUgMi4yMzUgMCAwIDEgMCA0LjQ3bTUuNDgyLTIuMjM1QTUuNDgyIDUuNDgyIDAgMSAwIC42MjMgOC4wMTNILjZsLjA1OC4wNzZjLjI3Mi41MDEuNjIyLjk1MyAxLjAzIDEuMzQ1bDMuNzk1IDQuOTU0TDkuMjkgOS40MmMuMzk0LS4zODIuNzMzLS44MTkuOTk5LTEuMzA0bC4wNzgtLjEwMmgtLjAyN2E1LjQ0NCA1LjQ0NCAwIDAgMCAuNjIzLTIuNTMiIG1hc2s9InVybCgjYikiLz4gICAgPC9nPjwvc3ZnPg==); \n        }\n        \n        ::slotted([data-icon=\"lifebuoy\"])::before {\n            width: 25px;\n            height: 15px;\n            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDI1IDE1Ij4gICAgPGcgZmlsbD0iIzQ0NCIgZmlsbC1ydWxlPSJub256ZXJvIj4gICAgICAgIDxwYXRoIGQ9Ik0yMC45OTQuMDg3bC0yLjM4NiAxLjU1NyAzLjc3OCA2LjA4NyAyLjM4Ny0xLjU1OHpNOC42MzYgMTEuMDc3bC4yMjgtLjM0NmMuMTEzLS4xNDQuMTQyLS4zNDYuMTEzLS41MmEuNjUzLjY1MyAwIDAgMC0uMjg0LS40MzIuNTY1LjU2NSAwIDAgMC0uMzctLjExNi43MzguNzM4IDAgMCAwLS41NjcuMjg5bC0uNjU0IDEuMDFzMCAuMDI4LS4wMjguMDI4Yy0uMjU2LjM3NS0uNTQuODA4LS43OTYgMS4xODMgMCAuMDI5LS4wMjguMDI5LS4wMjguMDU4bC0uMTcuMjZhLjY5OC42OTggMCAwIDAgLjE3Ljk1MWMuMTQyLjExNi4zNC4xNDUuNTExLjExNmEuNjQzLjY0MyAwIDAgMCAuNDI2LS4yODlsLjExNC0uMTczYy4wMjktLjAyOS4wMjktLjA4Ni4wNTctLjExNWwxLjI3OC0xLjkwNHpNMTcuNzg0IDMuMDg3YTEuMDY0IDEuMDY0IDAgMCAxLS41OTYuMDU3TDE1LjM0IDIuNzRjLS45NjYtLjIwMi0xLjkzMi0uMjMtMi44OTgtLjAyOGwtMS43MzMuMzE3YTEuODM4IDEuODM4IDAgMCAwLTEuMTA4LjY5Mkw4LjEyNSA1LjY1NEEuMzgzLjM4MyAwIDAgMCA4LjA0IDZhLjY5LjY5IDAgMCAwIC4xNy4zMTdjLjE0Mi4xMTYuMzQxLjExNi40ODMuMDNsMy4xMjUtMS42NDVjLjMxMy0uMTczLjcxLS4xNDQgMS4wMjMuMDU4bDYuNzA0IDQuNDEzYy4wODYuMDU4LjE0Mi4xMTUuMi4xNzNsMS44NDYtMS43Ni0yLjk4My00Ljg0Ni0uODI0LjM0N3pNMTEuMDUxIDEzLjAxYS41NC41NCAwIDAgMC0uMzQtLjExNmgtLjA4NmEuNTI1LjUyNSAwIDAgMC0uMzQuMjAybC0uNzExIDEuMDM5YS41Ny41NyAwIDAgMC0uMDI5LjM3NWMuMDU3LjE3My4xNy4yODguMzEzLjM0Ni4yMjcuMDg2LjUxMS4wMjkuNjUzLS4yMDJsLjYyNS0uOTIzYy4yLS4yMDIuMTQyLS41NDgtLjA4NS0uNzIxek05LjgzIDEyLjc1bC4zOTctLjU3N2EuNjkuNjkgMCAwIDAtLjE0Mi0uOTIzLjY5MS42OTEgMCAwIDAtLjQyNi0uMTQ0aC0uMDg1YS43MzUuNzM1IDAgMCAwLS40NTUuMjZsLTEuMzYzIDIuMDE5Yy0uMDU3LjE0NC0uMDg2LjI4OC0uMDI5LjQzMmEuNjYuNjYgMCAwIDAgLjM0MS40MzMuNjYyLjY2MiAwIDAgMCAuODgtLjIwMmwuMi0uMjg4Yy4wMjgtLjAzLjAyOC0uMDU4LjA1Ny0uMDg3bC42MjUtLjkyM2MtLjAyOS4wMjktLjAyOS4wMjkgMCAweiIvPiAgICAgICAgPHBhdGggZD0iTTE5LjI2MSA5LjYzNUwxMi41NTcgNS4yMmEuNTA3LjUwNyAwIDAgMC0uNDU1LS4wMjlMOC45NzcgNi44MzdjLS4zNC4xNzMtLjc2Ny4xNDQtMS4wOC0uMDg3YS45NjcuOTY3IDAgMCAxLS4zOTctLjY5MiAxLjA4IDEuMDggMCAwIDEgLjE5OS0uNzhsMS4yNS0xLjY3Mi0xLjMzNS0uMjAyYTEuMzcxIDEuMzcxIDAgMCAxLS4zMTMtLjExNmwtLjkwOS0uNDktMi44NyA0LjYxNUw1LjA1OCA5LjQ5Yy4zNy0uNDkgMS4wOC0uNjM0IDEuNTktLjI4OC4yMjguMTQ0LjM5OC4zNDYuNDg0LjU3N2wuMTEzLS4xNzNBMS4yNDUgMS4yNDUgMCAwIDEgOC45NSA5LjI2Yy4yODQuMTczLjQ4My40NjEuNTQuODA3YTEuMjYgMS4yNiAwIDAgMSAwIC40NjJjLjMxMi0uMDI5LjY1My4wNTguODguMjYuNDI2LjM3NC41NjkuOTguMzQxIDEuNS4yMjcuMDI4LjQ1NS4xMTUuNjI1LjI2LjQ1NS4zNzQuNTQgMS4wMzguMiAxLjUyOGwtLjI1Ny4zNzUgMS44NzUuMjg4YTIuMDExIDIuMDExIDAgMCAwIDEuNTYzLS40MzJsLTEuOTMyLTEuMDM5Yy0uMTQyLS4wNTctLjE5OS0uMjYtLjExNC0uMzc1LjA4Ni0uMTQ0LjI1Ni0uMjAyLjM3LS4xMTVsMi4xODcgMS4xMjVhLjgzMy44MzMgMCAwIDAgMS4wOC0uMjg5Yy4xMTMtLjE0NC4xNDItLjI4OC4xMTMtLjQzMi0uMDI4LS4xNDUtLjExMy0uMjg5LS4yNTUtLjM0NmwtLjUxMi0uMzE4LTIuMDE3LTEuMTgyYy0uMTQyLS4wODctLjE5OC0uMjYtLjExMy0uNDA0LjA4NS0uMTQ1LjI1NS0uMjAyLjM5Ny0uMTE2bDIuODQxIDEuNTU4YS44OTYuODk2IDAgMCAwIDEuMTk0LS4zMTcuNjAyLjYwMiAwIDAgMCAuMDg1LS40MzMuNTY3LjU2NyAwIDAgMC0uMjU2LS4zNzVsLS4xOTktLjExNS0zLjA0LTEuODQ3Yy0uMTQyLS4wODYtLjE3LS4yNi0uMDg1LS40MDMuMDg1LS4xNDUuMjU2LS4xNzMuMzk4LS4wODdsMi44OTggMS43Ni4xNDIuMDg2LjU2OC4zNDZjLjM3LjIzMS44NTIuMTE2IDEuMDgtLjI2YS43NjUuNzY1IDAgMCAwIC4xMTMtLjYwNWMtLjA4NS0uMTczLS4xOTktLjM3NS0uMzk4LS40OXoiLz4gICAgICAgIDxwYXRoIGQ9Ik02LjcwNSAxMC4xNTRhLjYwNC42MDQgMCAwIDAtLjMxMy0uNDMzYy0uMTE0LS4wNTgtLjIyNy0uMTE1LS4zNy0uMTE1YS42NDYuNjQ2IDAgMCAwLS41MzkuMjg4bC0uODI0IDEuMTgzYy0uMTk5LjI4OC0uMTQyLjcyMS4xNy45MjNsLjAyOS4wMjlhLjU4Ny41ODcgMCAwIDAgLjQ4My4xMTUuODA3LjgwNyAwIDAgMCAuMzk4LS4yM2wuODUyLTEuMjdjLjExNC0uMTQ0LjE0Mi0uMzE3LjExNC0uNDl6TS4xOTIgNi4zNTNMMy45NjguMzdsMi4zOSAxLjUwOS0zLjc3NSA1Ljk4MnoiLz4gICAgPC9nPjwvc3ZnPg==); \n        }\n        \n        ::slotted([data-icon=\"faq\"])::before {\n            width: 16px;\n            height: 16px;\n            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4gICAgPHBhdGggZmlsbD0iIzQ0NCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOCAwYzQuNDU3IDAgOCAzLjU0MyA4IDhzLTMuNTQzIDgtOCA4YTcuOTUgNy45NSAwIDAgMS04LThjMC00LjQ1NyAzLjU0My04IDgtOHptLjU3MSA4LjkxNGMuMjI5LS4yMjguNDU4LS41NzEuNjg2LS42ODUuNTcyLS40NTggMS4wMjktLjkxNSAxLjM3Mi0xLjM3MmExLjkzIDEuOTMgMCAwIDAgLjM0Mi0xLjE0M2MwLS42ODUtLjM0Mi0xLjM3MS0uOTE0LTEuODI4LS41NzEtLjQ1Ny0xLjQ4Ni0uOC0yLjI4Ni0uNjg2LS44IDAtMS42LjIyOS0yLjI4NS44LS41NzIuMzQzLS45MTUgMS4wMjktLjkxNSAxLjgyOWwxLjYuMjI4Yy4xMTUtLjQ1Ny4yMjktLjguNTcyLTEuMTQzYTEuOTMgMS45MyAwIDAgMSAxLjE0My0uMzQzYy4zNDMgMCAuOC4xMTUgMS4wMjguMzQzLjIyOS4xMTUuNDU3LjQ1Ny40NTcuOCAwIC4yMjktLjExNC40NTctLjIyOC42ODYtLjM0My4yMjktLjY4Ni40NTctLjkxNC44LS40NTguMzQzLS44LjY4Ni0xLjAyOSAxLjE0My0uMjI5LjM0My0uMzQzLjY4Ni0uMjI5IDEuMTQzdi40NTdoMS42YTEuNTg2IDEuNTg2IDAgMCAxIDAtMS4wMjl6bS4xMTUgMy4zMTV2LTEuNzE1SDYuOTd2MS43MTVoMS43MTV6Ii8+PC9zdmc+); \n        }\n    "]);

              _templateObject$1 = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcHeaderPanelNav = _decorate([customElement('uc-header-panel-nav')], function (_initialize, _LitElement) {
              var UcHeaderPanelNav =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcHeaderPanelNav, _LitElement2);

                function UcHeaderPanelNav() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcHeaderPanelNav);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcHeaderPanelNav)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcHeaderPanelNav;
              }(_LitElement);

              return {
                F: UcHeaderPanelNav,
                d: [{
                  kind: "field",
                  static: true,
                  key: "styles",
                  value: function value() {
                    return css(_templateObject$1());
                  }
                }, {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return html(_templateObject2$1());
                  }
                }]
              };
            }, LitElement);

            function _templateObject2$2() {
              var data = _taggedTemplateLiteral(["\n            <div class=\"login\">\u0432\u0445\u043E\u0434</div>\n            <a href=\"/lk/register/\" class=\"registration\">\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</a>\n        "]);

              _templateObject2$2 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject$2() {
              var data = _taggedTemplateLiteral(["\n        :host {\n            padding-left: 16px;\n            padding-right: 16px;\n            background-color: #66c05d;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            height: 100%;\n        }\n        \n        .login,\n        .registration {\n            font-size: 10px;\n            font-weight: bold;\n            text-transform: uppercase;\n            color: #ffffff;\n            text-decoration: none;\n            cursor: pointer;\n        }\n        \n        .login + .registration::before {\n            content: '';\n            height: 100%;\n            width: 0;\n            border-left: 1px dashed #ffffff;\n            margin-left: 5px;\n            margin-right: 5px;\n        }\n        .registration:hover {\n            text-decoration: underline;\n        }\n    "]);

              _templateObject$2 = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcHeaderPanelUserProfile = _decorate([customElement('uc-header-panel-user-profile')], function (_initialize, _LitElement) {
              var UcHeaderPanelUserProfile =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcHeaderPanelUserProfile, _LitElement2);

                function UcHeaderPanelUserProfile() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcHeaderPanelUserProfile);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcHeaderPanelUserProfile)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcHeaderPanelUserProfile;
              }(_LitElement);

              return {
                F: UcHeaderPanelUserProfile,
                d: [{
                  kind: "field",
                  static: true,
                  key: "styles",
                  value: function value() {
                    return css(_templateObject$2());
                  }
                }, {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return html(_templateObject2$2());
                  }
                }]
              };
            }, LitElement);

            function _templateObject2$3() {
              var data = _taggedTemplateLiteral(["\n            <uc-container>\n                <div class=\"header-panel-wrapper\">\n                    <slot />\n                </div>\n            </uc-container>\n        "]);

              _templateObject2$3 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject$3() {
              var data = _taggedTemplateLiteral(["\n        :host {\n            display: block;\n            height: 30px;\n            background-color: #f7f7f7;\n        }\n        \n        .header-panel-wrapper {\n            display: flex;\n            height: 100%;\n            width: 100%;\n            align-items: center;\n        }\n        \n        uc-container {\n            height: 100%;\n        }\n    "]);

              _templateObject$3 = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcHeaderPanel = _decorate([customElement('uc-header-panel')], function (_initialize, _LitElement) {
              var UcHeaderPanel =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcHeaderPanel, _LitElement2);

                function UcHeaderPanel() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcHeaderPanel);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcHeaderPanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcHeaderPanel;
              }(_LitElement);

              return {
                F: UcHeaderPanel,
                d: [{
                  kind: "field",
                  static: true,
                  key: "styles",
                  value: function value() {
                    return css(_templateObject$3());
                  }
                }, {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return html(_templateObject2$3());
                  }
                }]
              };
            }, LitElement);

        }
    };
});
//# sourceMappingURL=chunk-801d76b2.js.map
