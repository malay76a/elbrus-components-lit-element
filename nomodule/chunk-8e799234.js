System.register(['./chunk-65e75638.js', './chunk-d72fc7c5.js', './chunk-4836153e.js', './chunk-eee526ef.js'], function (exports, module) {
    'use strict';
    var _decorate, _inherits, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf, _assertThisInitialized, _taggedTemplateLiteral, _slicedToArray, customElement, css, html, LitElement, property, unsafeCSS, isXs, uniqid;
    return {
        setters: [function (module) {
            _decorate = module.k;
            _inherits = module.e;
            _classCallCheck = module.c;
            _possibleConstructorReturn = module.f;
            _getPrototypeOf = module.g;
            _assertThisInitialized = module.l;
            _taggedTemplateLiteral = module.m;
            _slicedToArray = module.n;
        }, function (module) {
            customElement = module.a;
            css = module.c;
            html = module.d;
            LitElement = module.e;
            property = module.b;
            unsafeCSS = module.f;
        }, function (module) {
            isXs = module.b;
        }, function (module) {
            uniqid = module.a;
        }],
        execute: function () {

            function addData(eventAct, eventCat, obj, event) {
              var dataLayerEvent = {
                "event": "LeroyMerlin",
                "eventAction": eventAct,
                "eventCategory": eventCat,
                "eventCategoryId": obj.dataCategoryId,
                "eventCategoryName": obj.dataCategory,
                "eventDivision": obj.dataDivision,
                "eventSubdivision": obj.dataSubDivision,
                "eventLabel": event.detail.buttonType,
                "eventLocation": obj.dataProductLocation,
                "eventPosition": obj.dataPosition,
                "eventProductId": obj.dataProductId,
                "eventProductName": obj.dataProductName,
                "eventProductPrice": obj.dataProductPrice
              };

              if (obj.ecommerce) {
                dataLayerEvent.ecommerce = obj.ecommerce;
              }

              for (var _event in dataLayerEvent) {
                dataLayerEvent[_event] = dataLayerEvent[_event] || "not set";
              }

              return dataLayerEvent;
            }

            function getElemPos(elem) {
              for (var i = 0; i < elem.parentElement.children.length; i++) {
                if (elem.parentElement.children[i] === elem) {
                  return i + 1;
                }
              }
            }

            function _templateObject2() {
              var data = _taggedTemplateLiteral(["\n            <slot></slot>\n        "]);

              _templateObject2 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject() {
              var data = _taggedTemplateLiteral(["\n        :host {\n            padding: 5px;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: center;\n            -ms-flex-pack: center;\n            justify-content: center;\n            -webkit-box-align: center;\n            -ms-flex-align: center;\n            align-items: center;\n            max-width: 100%;\n            max-height: 100%; }\n        \n        @media (min-width: 1200px) {\n        :host-context([typed=\"card\"]) {\n                padding: 30px; } }\n        \n        ::slotted(img) {\n            max-width: 100%;\n            max-height: 100%; }\n    "]);

              _templateObject = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcPlpItemImg = _decorate([customElement('uc-plp-item-img')], function (_initialize, _LitElement) {
              var UcPlpItemImg =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcPlpItemImg, _LitElement2);

                function UcPlpItemImg() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcPlpItemImg);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcPlpItemImg)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcPlpItemImg;
              }(_LitElement);

              return {
                F: UcPlpItemImg,
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

            function _templateObject2$1() {
              var data = _taggedTemplateLiteral(["\n            <slot></slot>\n        "]);

              _templateObject2$1 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject$1() {
              var data = _taggedTemplateLiteral(["\n        :host {\n            overflow: hidden;\n            -o-text-overflow: ellipsis;\n            text-overflow: ellipsis;\n            width: 100%;\n            max-height: 100%;\n            position: relative; }\n        \n        ::slotted(*) {\n            text-decoration: none;\n            color: #333333; }\n        @media (min-width: 1200px) {\n            ::slotted(*) {\n                font-size: 17px;\n                line-height: 1.12; } }\n        @media (max-width: 1199px) and (min-width: 992px) {\n            ::slotted(*) {\n                font-size: 17px;\n                line-height: 1.12; } }\n        @media (max-width: 991px) and (min-width: 768px) {\n            ::slotted(*) {\n                font-size: 14px;\n                line-height: 1.36; } }\n        @media (max-width: 767px) {\n            ::slotted(*) {\n                font-size: 0.85714em;\n                line-height: normal; } }\n    "]);

              _templateObject$1 = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcPlpItemTitle = _decorate([customElement('uc-plp-item-title')], function (_initialize, _LitElement) {
              var UcPlpItemTitle =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcPlpItemTitle, _LitElement2);

                function UcPlpItemTitle() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcPlpItemTitle);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcPlpItemTitle)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcPlpItemTitle;
              }(_LitElement);

              return {
                F: UcPlpItemTitle,
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

            function _templateObject4() {
              var data = _taggedTemplateLiteral(["", " \u043E\u0442\u0437\u044B\u0432\u043E\u0432"]);

              _templateObject4 = function _templateObject4() {
                return data;
              };

              return data;
            }

            function _templateObject3() {
              var data = _taggedTemplateLiteral(["(", ")"]);

              _templateObject3 = function _templateObject3() {
                return data;
              };

              return data;
            }

            function _templateObject2$2() {
              var data = _taggedTemplateLiteral(["\n            <div class=\"rating-wrapper\">\n                <div class=\"stars\">\n                    <div class=\"star on\"></div>\n                    <div class=\"star on\"></div>\n                    <div class=\"star half\"></div>\n                    <div class=\"star off\"></div>\n                    <div class=\"star off\"></div>\n                </div>\n                <a class=\"reviews\" href=\"#reviews\">\n                    <span class=\"reviews-icon\"></span>\n                    <span class=\"reviews-text\">\n                        ", "\n                    </span>\n                </a>\n            </div>\n        "]);

              _templateObject2$2 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject$2() {
              var data = _taggedTemplateLiteral(["\n        .rating-wrapper {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex; }\n        @media (max-width: 767px) {\n        .rating-wrapper {\n                -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                justify-content: space-between; } }\n        \n        @media (min-width: 768px) {\n        :host-context([typed=\"card\"]) .rating-wrapper {\n                -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                justify-content: space-between; } }\n        \n        .stars {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: center;\n            -ms-flex-pack: center;\n            justify-content: center;\n            -webkit-box-align: center;\n            -ms-flex-align: center;\n            align-items: center; }\n        @media (min-width: 768px) {\n        .stars {\n                margin-right: 18px; } }\n        @media (max-width: 767px) {\n        .stars {\n                margin-right: 1.28571em; } }\n        \n        .star {\n            background-size: contain;\n            background-position: center;\n            background-repeat: no-repeat;\n            display: block; }\n        @media (min-width: 768px) {\n        .star {\n                width: 12px;\n                height: 11px;\n                margin-right: 2px; } }\n        @media (max-width: 767px) {\n        .star {\n                width: 0.85714em;\n                height: 0.78571em;\n                margin-right: 0.14286em; } }\n        \n        .on {\n            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpdD0nJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCBtZWV0JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9JyNlYmRmMjUnIGQ9J00xMiwxOC4zMjQgTDE5LjQxNiwyMi44IEwxNy40NDgsMTQuMzY0IEwyNCw4LjY4OCBMMTUuMzcyLDcuOTU2IEwxMiwwIEw4LjYyOCw3Ljk1NiBMMCw4LjY4OCBMNi41NTIsMTQuMzY0IEw0LjU4NCwyMi44IEwxMiwxOC4zMjQgTDEyLDE4LjMyNCBaJz48L3BhdGg+PC9zdmc+); }\n        \n        .off {\n            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpdD0nJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCBtZWV0JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9JyNlYmRmMjUnIGQ9J00yNCw4LjY4OCBMMTUuMzcyLDcuOTQ0IEwxMiwwIEw4LjYyOCw3Ljk1NiBMMCw4LjY4OCBMNi41NTIsMTQuMzY0IEw0LjU4NCwyMi44IEwxMiwxOC4zMjQgTDE5LjQxNiwyMi44IEwxNy40NiwxNC4zNjQgTDI0LDguNjg4IEwyNCw4LjY4OCBaIE03LjQ4OCwxOC44MDQgTDguNjg4LDEzLjY2OCBMNC43MDQsMTAuMjEyIEw5Ljk2LDkuNzU2IEwxMiw0LjkyIEwxNC4wNTIsOS43NjggTDE5LjMwOCwxMC4yMjQgTDE1LjMyNCwxMy42OCBMMTYuNTI0LDE4LjgxNiBMMTIsMTYuMDggTDcuNDg4LDE4LjgwNCBMNy40ODgsMTguODA0IFonPjwvcGF0aD48L3N2Zz4=); }\n        \n        .half {\n            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpdD0nJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCBtZWV0JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9JyNlYmRmMjUnIGQ9J00yNCw5LjE4OCBMMTUuMzcyLDguNDQ0IEwxMiwwLjUgTDguNjI4LDguNDU2IEwwLDkuMTg4IEw2LjU1MiwxNC44NjQgTDQuNTg0LDIzLjMgTDEyLDE4LjgyNCBMMTkuNDE2LDIzLjMgTDE3LjQ2LDE0Ljg2NCBMMjQsOS4xODggTDI0LDkuMTg4IFogTTEyLDE2LjU4IEwxMiw1LjQyIEwxNC4wNTIsMTAuMjY4IEwxOS4zMDgsMTAuNzI0IEwxNS4zMjQsMTQuMTggTDE2LjUyNCwxOS4zMTYgTDEyLDE2LjU4IEwxMiwxNi41OCBaJz48L3BhdGg+PC9zdmc+); }\n        \n        .reviews {\n            color: #66c05d;\n            text-decoration: none;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: center;\n            -ms-flex-pack: center;\n            justify-content: center;\n            -webkit-box-align: center;\n            -ms-flex-align: center;\n            align-items: center; }\n        @media (min-width: 768px) {\n        .reviews {\n                font-size: 13px; } }\n        @media (max-width: 767px) {\n        .reviews {\n                font-size: 0.78571em; } }\n        \n        .reviews-icon {\n            display: inline-block;\n            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE4IDE1Ij4gICAgPGcgZmlsbD0iIzY2QzA1RCIgZmlsbC1ydWxlPSJub256ZXJvIj4gICAgICAgIDxwYXRoIGQ9Ik02Ljk2NCAyLjY1NUMzLjExOCAyLjY1NSAwIDUuMDUzIDAgOC4wMTJjMCAxLjQ1Ljc1MSAyLjc3IDEuOTcgMy43MzQtLjA3Ljk4NC0uMzA3IDIuMTg3LS45OTMgMi44MzUgMS4zNjUgMCAyLjc2LS44NTUgMy42NDItMS41MjRhOC44NTEgOC44NTEgMCAwIDAgMi4zNDUuMzEyYzMuODQ3IDAgNi45NjUtMi4zOTYgNi45NjUtNS4zNTcgMC0yLjk2LTMuMTE4LTUuMzU3LTYuOTY1LTUuMzU3eiIvPiAgICAgICAgPHBhdGggZD0iTTE2LjIyMSA4LjUzNGMuNTg3LS43ODMuOTIyLTEuNjk0LjkyMi0yLjY2NSAwLTIuOTU5LTMuMTE4LTUuMzU3LTYuOTY0LTUuMzU3LTEuNjkzIDAtMy4yNDUuNDY1LTQuNDUxIDEuMjM3QTkuNTYxIDkuNTYxIDAgMCAxIDcuNSAxLjU4NGM0LjE0MiAwIDcuNSAyLjYzOCA3LjUgNS44OTIgMCAxLjI4My0uNTIgMi40NzEtMS40MDYgMy40MzYuODguNjcgMi4yNzcgMS41MjYgMy42NDIgMS41MjYtLjk3LS45MjEtMS4wNC0yLjk2My0xLjAxNS0zLjkwNHoiLz4gICAgPC9nPjwvc3ZnPg==);\n            background-repeat: no-repeat;\n            background-size: contain;\n            background-position: center; }\n        @media (min-width: 768px) {\n        .reviews-icon {\n                width: 18px;\n                height: 15px;\n                margin-right: 4px; } }\n        @media (max-width: 767px) {\n        .reviews-icon {\n                width: 1.63636em;\n                height: 1.36364em;\n                margin-right: 0.36364em; } }\n    "]);

              _templateObject$2 = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcPlpItemRating = _decorate([customElement('uc-plp-item-rating')], function (_initialize, _LitElement) {
              var UcPlpItemRating =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcPlpItemRating, _LitElement2);

                function UcPlpItemRating() {
                  var _this;

                  _classCallCheck(this, UcPlpItemRating);

                  _this = _possibleConstructorReturn(this, _getPrototypeOf(UcPlpItemRating).call(this));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  _this.rating = '0';
                  _this.count = '0';
                  return _this;
                }

                return UcPlpItemRating;
              }(_LitElement);

              return {
                F: UcPlpItemRating,
                d: [{
                  kind: "get",
                  static: true,
                  key: "properties",
                  value: function properties() {
                    return {
                      rating: {
                        type: String
                      },
                      count: {
                        type: String
                      }
                    };
                  }
                }, {
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
                    //TODO: define algorithm create stars
                    return html(_templateObject2$2(), isXs() ? html(_templateObject3(), this.count) : html(_templateObject4(), this.count));
                  }
                }]
              };
            }, LitElement);

            function _templateObject2$3() {
              var data = _taggedTemplateLiteral(["<slot></slot>"]);

              _templateObject2$3 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject$3() {
              var data = _taggedTemplateLiteral(["\n        ::slotted(.key) {\n            color: #727272; }\n        @media (min-width: 768px) {\n            ::slotted(.key) {\n                font-size: 12px; } }\n        @media (max-width: 767px) {\n            ::slotted(.key) {\n                font-size: 0.78571em; } }\n        ::slotted(.key)::after {\n            content: ':'; }\n        \n        ::slotted(.value) {\n            font-size: 12px;\n            color: #4a4a4a; }\n        @media (min-width: 768px) {\n            ::slotted(.value) {\n                font-size: 12px; } }\n        @media (max-width: 767px) {\n            ::slotted(.value) {\n                font-size: 0.78571em; } }\n    "]);

              _templateObject$3 = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcPlpItemDescriptionItem = _decorate([customElement('uc-plp-item-description-item')], function (_initialize, _LitElement) {
              var UcPlpItemDescriptionItem =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcPlpItemDescriptionItem, _LitElement2);

                function UcPlpItemDescriptionItem() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcPlpItemDescriptionItem);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcPlpItemDescriptionItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcPlpItemDescriptionItem;
              }(_LitElement);

              return {
                F: UcPlpItemDescriptionItem,
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

            function _templateObject2$4() {
              var data = _taggedTemplateLiteral(["\n            <slot></slot>\n        "]);

              _templateObject2$4 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject$4() {
              var data = _taggedTemplateLiteral(["\n        :host {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            line-height: 1.5; }\n        @media (max-width: 767px) {\n        :host {\n                -webkit-box-orient: vertical;\n                -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                flex-direction: column; } }\n        \n        @media (min-width: 768px) {\n        :host([typed=\"list\"]) {\n                -ms-flex-wrap: wrap;\n                flex-wrap: wrap; } }\n        \n        @media (min-width: 768px) {\n        :host([typed=\"list\"]) ::slotted(uc-plp-item-description-item) {\n                -webkit-box-flex: 1;\n                -ms-flex: 1 1 50%;\n                flex: 1 1 50%; } }\n        \n        @media (min-width: 768px) {\n        :host([typed=\"card\"]) {\n                -webkit-box-orient: vertical;\n                -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                flex-direction: column; } }\n    "]);

              _templateObject$4 = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcPlpItemDescription = _decorate([customElement('uc-plp-item-description')], function (_initialize, _LitElement) {
              var UcPlpItemDescription =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcPlpItemDescription, _LitElement2);

                function UcPlpItemDescription() {
                  var _this;

                  _classCallCheck(this, UcPlpItemDescription);

                  _this = _possibleConstructorReturn(this, _getPrototypeOf(UcPlpItemDescription).call(this));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  window.addEventListener('plpChangeType', _this.handleChangeTypeList);
                  return _this;
                }

                return UcPlpItemDescription;
              }(_LitElement);

              return {
                F: UcPlpItemDescription,
                d: [{
                  kind: "field",
                  decorators: [property({
                    type: String,
                    reflect: true
                  })],
                  key: "typed",
                  value: function value() {
                    return 'list';
                  }
                }, {
                  kind: "field",
                  static: true,
                  key: "styles",
                  value: function value() {
                    return css(_templateObject$4());
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
                    return html(_templateObject2$4());
                  }
                }]
              };
            }, LitElement);

            function _templateObject2$5() {
              var data = _taggedTemplateLiteral(["\n            <div>\n                <span class=\"first-part\">", "</span>\n                <span class=\"second-part\">,", "</span>\n                <span class=\"unit\">", "</span>\n            </div>\n        "]);

              _templateObject2$5 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject$5() {
              var data = _taggedTemplateLiteral(["\n        :host([type=\"main\"]) {\n            color: #333333; }\n        @media (max-width: 767px) {\n        :host([type=\"main\"]) .first-part {\n                font-size: 1.5em; } }\n        @media (max-width: 767px) {\n        :host([type=\"main\"]) .second-part {\n                font-size: 1.07143em; } }\n        @media (max-width: 767px) {\n        :host([type=\"main\"]) .unit {\n                font-size: 0.78571em; } }\n        \n        :host([type=\"second\"]) {\n            color: #727272; }\n        @media (max-width: 767px) {\n        :host([type=\"second\"]) .first-part {\n                font-size: 0.85714em; } }\n        @media (max-width: 767px) {\n        :host([type=\"second\"]) .second-part {\n                font-size: 0.85714em; } }\n        @media (max-width: 767px) {\n        :host([type=\"second\"]) .unit {\n                font-size: 0.92857em; } }\n        \n        .first-part {\n            font-weight: bold; }\n        \n        .second-part {\n            font-weight: bold; }\n        \n        .unit {\n            margin-left: 5px; }\n        @media (min-width: 768px) {\n        .unit {\n                font-size: 13px; } }\n        \n        @media (min-width: 768px) {\n        :host([type=\"main\"]) .first-part {\n                font-size: 24px; }\n        :host([type=\"main\"]) .second-part {\n                font-size: 18px; } }\n        \n        @media (min-width: 768px) {\n        :host([type=\"second\"]) .first-part {\n                font-size: 14px; }\n        :host([type=\"second\"]) .second-part {\n                font-size: 14px; } }\n    "]);

              _templateObject$5 = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcPlpItemPrice = _decorate([customElement('uc-plp-item-price')], function (_initialize, _LitElement) {
              var UcPlpItemPrice =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcPlpItemPrice, _LitElement2);

                function UcPlpItemPrice() {
                  var _this;

                  _classCallCheck(this, UcPlpItemPrice);

                  _this = _possibleConstructorReturn(this, _getPrototypeOf(UcPlpItemPrice).call(this));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  _this.type = 'main';
                  return _this;
                }

                return UcPlpItemPrice;
              }(_LitElement);

              return {
                F: UcPlpItemPrice,
                d: [{
                  kind: "get",
                  static: true,
                  key: "properties",
                  value: function properties() {
                    return {
                      type: {
                        type: String
                      },
                      content: {
                        type: String
                      },
                      currency: {
                        type: String
                      }
                    };
                  }
                }, {
                  kind: "field",
                  static: true,
                  key: "styles",
                  value: function value() {
                    return css(_templateObject$5());
                  }
                }, {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    var _this$content$split = this.content.split(','),
                        _this$content$split2 = _slicedToArray(_this$content$split, 2),
                        firstPart = _this$content$split2[0],
                        secondPart = _this$content$split2[1];

                    return html(_templateObject2$5(), firstPart, secondPart, this.currency);
                  }
                }]
              };
            }, LitElement);

            function _templateObject$6() {
              var data = _taggedTemplateLiteral(["<slot></slot>"]);

              _templateObject$6 = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcPlpItemPrices = _decorate([customElement('uc-plp-item-prices')], function (_initialize, _LitElement) {
              var UcPlpItemPrices =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcPlpItemPrices, _LitElement2);

                function UcPlpItemPrices() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcPlpItemPrices);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcPlpItemPrices)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcPlpItemPrices;
              }(_LitElement);

              return {
                F: UcPlpItemPrices,
                d: [{
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return html(_templateObject$6());
                  }
                }]
              };
            }, LitElement);

            var css$1 = ":host {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\nlabel {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\nlabel::before {\n    content: '';\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n@media (min-width: 768px) {\n    label::before {\n        height: 22px;\n        width: 22px;\n        font-size: 12px;\n    }\n}\n@media (max-width: 767px) {\n    label::before {\n        font-size: 0.85714em;\n        height: 1.83333em;\n        width: 1.83333em;\n    }\n}\n\n@media (min-width: 1200px) {\n    :host-context([typed=\"list\"]) label::before {\n        margin-right: 20px;\n    }\n}\n\n@media (max-width: 1199px) and (min-width: 992px) {\n    :host-context([typed=\"list\"]) label::before {\n        margin-right: 15px;\n    }\n}\n\n:host-context([typed=\"card\"]) label {\n    flex-direction: column;\n}\n@media (min-width: 992px) {\n    :host-context([typed=\"card\"]) label::before {\n        margin-bottom: 2px;\n    }\n}\n\n@media (max-width: 991px) {\n    .text {\n        display: none;\n    }\n}\n\n@media (min-width: 768px) {\n    .text {\n        font-size: 12px;\n    }\n}\n\n@media (max-width: 767px) {\n    .text {\n        font-size: 0.85714em;\n    }\n}\n\n.styled-checkbox {\n    position: absolute;\n    opacity: 0;\n}\n\n:host([typebutton=\"compare\"]) {\n    background-color: #fff;\n    box-shadow: 0 0 0 1px #eeeeee inset;\n}\n:host([typebutton=\"compare\"]) label {\n    color: #464646;\n}\n:host([typebutton=\"compare\"]) .styled-checkbox:checked + label::before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIyIDIwIj4gICAgPGcgZmlsbD0iI0VDQTI0NyIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxwYXRoIGQ9Ik0xMSA2YTMgMyAwIDEgMSAwLTYgMyAzIDAgMCAxIDAgNnptMC0yYTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMnoiLz4gICAgICAgIDxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjIiIHg9IjIiIHk9IjIiIHJ4PSIxIi8+ICAgICAgICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSIyIiB4PSIxMiIgeT0iMiIgcng9IjEiLz4gICAgICAgIDxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjE1IiB4PSIxMCIgeT0iNSIgcng9IjEiLz4gICAgICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIyIiB4PSIzIiB5PSIxOCIgcng9IjEiLz4gICAgICAgIDxwYXRoIGQ9Ik0wIDExaDhhNCA0IDAgMSAxLTggMHpNMTQgMTFoOGE0IDQgMCAxIDEtOCAweiIvPiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMy41OSA1LjcxM2EuNS41IDAgMSAxIC44Mi41NzRsLTMuNSA1YS41LjUgMCAwIDEtLjgyLS41NzRsMy41LTV6TTE3LjU5IDUuNzEzYS41LjUgMCAwIDEgLjgyLjU3NGwtMy41IDVhLjUuNSAwIDAgMS0uODItLjU3NGwzLjUtNXoiLz4gICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTQuNDEgNS43MTNhLjUuNSAwIDEgMC0uODIuNTc0bDMuNSA1YS41LjUgMCAwIDAgLjgyLS41NzRsLTMuNS01ek0xOC40MSA1LjcxM2EuNS41IDAgMCAwLS44Mi41NzRsMy41IDVhLjUuNSAwIDAgMCAuODItLjU3NGwtMy41LTV6Ii8+ICAgIDwvZz48L3N2Zz4=); }\n:host([typebutton=\"compare\"]) .styled-checkbox:checked + label .icon-check {\n    border-top-color: #eca247; }\n:host([typebutton=\"compare\"]) .styled-checkbox:checked + label .icon-check::after {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgMTEgOCI+ICAgIDxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICA8cGF0aCBkPSJNLjU4NiA0TDIgMi41ODYgNS40MTQgNiA0IDcuNDE0eiIvPiAgICAgICAgPHBhdGggZD0iTTQuNSA3LjkxNEwzLjA4NiA2LjUgOS41LjA4NiAxMC45MTQgMS41eiIvPiAgICA8L2c+PC9zdmc+); }\n:host([typebutton=\"compare\"]) .styled-checkbox:not(:checked) + label::before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIzIDIwIj4gICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSguNTY4KSI+ICAgICAgICA8cGF0aCBmaWxsPSIjRDRENEQ0IiBkPSJNMTEgNmEzIDMgMCAxIDEgMC02IDMgMyAwIDAgMSAwIDZ6bTAtMmExIDEgMCAxIDAgMC0yIDEgMSAwIDAgMCAwIDJ6Ii8+ICAgICAgICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSIyIiB4PSIyIiB5PSIyIiBmaWxsPSIjRDRENEQ0IiByeD0iMSIvPiAgICAgICAgPHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iMiIgeD0iMTIiIHk9IjIiIGZpbGw9IiNENEQ0RDQiIHJ4PSIxIi8+ICAgICAgICA8cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxNSIgeD0iMTAiIHk9IjUiIGZpbGw9IiNENUQ1RDUiIHJ4PSIxIi8+ICAgICAgICA8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMiIgeD0iMyIgeT0iMTgiIGZpbGw9IiNENEQ0RDQiIHJ4PSIxIi8+ICAgICAgICA8cGF0aCBmaWxsPSIjRDRENEQ0IiBkPSJNMCAxMWg4YTQgNCAwIDEgMS04IDB6TTE0IDExaDhhNCA0IDAgMSAxLTggMHoiLz4gICAgICAgIDxwYXRoIGZpbGw9IiNENEQ0RDQiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMuNTkgNS43MTNhLjUuNSAwIDEgMSAuODIuNTc0bC0zLjUgNWEuNS41IDAgMCAxLS44Mi0uNTc0bDMuNS01ek0xNy41OSA1LjcxM2EuNS41IDAgMCAxIC44Mi41NzRsLTMuNSA1YS41LjUgMCAwIDEtLjgyLS41NzRsMy41LTV6Ii8+ICAgICAgICA8cGF0aCBmaWxsPSIjRDRENEQ0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00LjQxIDUuNzEzYS41LjUgMCAxIDAtLjgyLjU3NGwzLjUgNWEuNS41IDAgMCAwIC44Mi0uNTc0bC0zLjUtNXpNMTguNDEgNS43MTNhLjUuNSAwIDAgMC0uODIuNTc0bDMuNSA1YS41LjUgMCAwIDAgLjgyLS41NzRsLTMuNS01eiIvPiAgICA8L2c+PC9zdmc+); }\n\n:host([typebutton=\"shoping-list\"]) {\n    background-color: #fff;\n    -webkit-box-shadow: 0 0 0 1px #eeeeee inset;\n    box-shadow: 0 0 0 1px #eeeeee inset; }\n:host([typebutton=\"shoping-list\"]) label {\n    color: #464646; }\n:host([typebutton=\"shoping-list\"]) .styled-checkbox:checked + label::before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSI+ICAgIDxkZWZzPiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0yMi43OCAyMi4xOTZIMFYwaDIyLjc4eiIvPiAgICA8L2RlZnM+ICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPiAgICAgICAgPC9tYXNrPiAgICAgICAgPHBhdGggZmlsbD0iIzdFNUQ5MSIgZD0iTTYuNDc1IDEwLjM5di0uNDUyYzAtLjI3Ni4yNDItLjUuNTQzLS41aDMuMjNjLjMgMCAuNTQzLjIyNC41NDMuNXYuNDUzYzAgLjI3Ni0uMjQzLjUtLjU0My41aC0zLjIzYy0uMyAwLS41NDMtLjIyNC0uNTQzLS41em00LjMxNi0yLjkwNGMwIC4yNzctLjI0My41LS41NDMuNWgtMy4yM2MtLjMgMC0uNTQzLS4yMjMtLjU0My0uNXYtLjQ1M2MwLS4yNzYuMjQyLS40OTkuNTQzLS40OTloMy4yM2MuMyAwIC41NDMuMjIzLjU0My40OTl2LjQ1M3ptLS41NDMtMi40MDRoLTMuMjNjLS4zIDAtLjU0My0uMjI0LS41NDMtLjVWNC4xM2MwLS4yNzYuMjQyLS41LjU0My0uNWgzLjIzYy4zIDAgLjU0My4yMjQuNTQzLjV2LjQ1M2MwIC4yNzUtLjI0My41LS41NDMuNXptMi40NDctMS43NDdhMS42MiAxLjYyIDAgMCAwLTEuNjEtMS42MjZoLTcuNzhjLS44OSAwLTEuNjExLjcyOS0xLjYxMSAxLjYyNnY3Ljg1YzAgLjg5OC43MiAxLjYyNiAxLjYxIDEuNjI2aDYuOTc2YTYuMTU4IDYuMTU4IDAgMCAwLS4zOTkgMS43MUgzLjA0M0MxLjM2MyAxNC41MiAwIDEzLjE0NCAwIDExLjQ0OFYzLjA3QzAgMS4zNzUgMS4zNjMgMCAzLjA0MyAwaDguMzAzYzEuNjggMCAzLjA0MiAxLjM3NSAzLjA0MiAzLjA3MXY2LjA1YTUuOTk3IDUuOTk3IDAgMCAwLTEuNjkzLjc0NlYzLjMzNXptLTcuNjYgNC4xNTFjMCAuMjc3LS4yMi41LS40OTQuNWgtLjQ0OWEuNDk3LjQ5NyAwIDAgMS0uNDk1LS41di0uNDUzYzAtLjI3Ni4yMjEtLjQ5OS40OTUtLjQ5OWguNDQ5Yy4yNzQgMCAuNDk1LjIyMy40OTUuNDk5di40NTN6bS0uNDk0LTIuNDA0aC0uNDQ5YS40OTcuNDk3IDAgMCAxLS40OTUtLjVWNC4xM2MwLS4yNzYuMjIxLS41LjQ5NS0uNWguNDQ5Yy4yNzQgMCAuNDk1LjIyNC40OTUuNXYuNDUzYzAgLjI3NS0uMjIxLjUtLjQ5NS41em0uNDk1IDUuMzA5YzAgLjI3Ni0uMjIxLjUtLjQ5NS41aC0uNDQ5YS40OTcuNDk3IDAgMCAxLS40OTUtLjV2LS40NTNjMC0uMjc2LjIyMS0uNS40OTUtLjVoLjQ0OWMuMjc0IDAgLjQ5NS4yMjQuNDk1LjV2LjQ1M3ptMTIuNDM4IDQuMzRIMTYuMzR2LTEuMTQ3YS41MTQuNTE0IDAgMCAwLS41MTItLjUxNi41MTQuNTE0IDAgMCAwLS41MTIuNTE2djEuMTQ3aC0xLjEzNmEuNTE0LjUxNCAwIDAgMC0uNTEyLjUxNmMwIC4yODYuMjI5LjUxNy41MTIuNTE3aDEuMTM2djEuMTQ0YzAgLjI4NS4yMy41MTYuNTEyLjUxNmEuNTE0LjUxNCAwIDAgMCAuNTEyLS41MTZ2LTEuMTQ0aDEuMTMzYS41MTQuNTE0IDAgMCAwIC41MTEtLjUxNy41MTQuNTE0IDAgMCAwLS41MTEtLjUxNnptLTEuNjQ3IDUuNTk3Yy0yLjc4IDAtNS4wMzYtMi4yNzUtNS4wMzYtNS4wODJzMi4yNTUtNS4wODIgNS4wMzYtNS4wODJjMi43ODIgMCA1LjAzNiAyLjI3NSA1LjAzNiA1LjA4MnMtMi4yNTQgNS4wODItNS4wMzYgNS4wODJ6IiBtYXNrPSJ1cmwoI2IpIi8+ICAgIDwvZz48L3N2Zz4=); }\n:host([typebutton=\"shoping-list\"]) .styled-checkbox:checked + label .icon-check {\n    border-top-color: #7e5d91; }\n:host([typebutton=\"shoping-list\"]) .styled-checkbox:checked + label .icon-check::after {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgMTEgOCI+ICAgIDxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICA8cGF0aCBkPSJNLjU4NiA0TDIgMi41ODYgNS40MTQgNiA0IDcuNDE0eiIvPiAgICAgICAgPHBhdGggZD0iTTQuNSA3LjkxNEwzLjA4NiA2LjUgOS41LjA4NiAxMC45MTQgMS41eiIvPiAgICA8L2c+PC9zdmc+); }\n:host([typebutton=\"shoping-list\"]) .styled-checkbox:not(:checked) + label::before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyNCAyMyI+ICAgIDxkZWZzPiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0yMy4wNyAyMS45NDhIMFYwaDIzLjA3eiIvPiAgICA8L2RlZnM+ICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAuNSkiPiAgICAgICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4gICAgICAgIDwvbWFzaz4gICAgICAgIDxwYXRoIGZpbGw9IiNENEQ0RDQiIGQ9Ik03LjI5MSAxMS4yMTZ2LS41NGMwLS4zMjguMjY2LS41OTUuNTk1LS41OTVoMy41NGMuMzMgMCAuNTk1LjI2Ny41OTUuNTk1di41NGEuNTk1LjU5NSAwIDAgMS0uNTk1LjU5NWgtMy41NGEuNTk1LjU5NSAwIDAgMS0uNTk1LS41OTV6bTQuNzMtMy4wMTZhLjU5NS41OTUgMCAwIDEtLjU5NS41OTVoLTMuNTRhLjU5NS41OTUgMCAwIDEtLjU5NS0uNTk1di0uNTRjMC0uMzI4LjI2Ni0uNTk0LjU5NS0uNTk0aDMuNTRjLjMzIDAgLjU5NS4yNjYuNTk1LjU5NHYuNTR6bS0uNTk1LTIuNDIxaC0zLjU0YS41OTUuNTk1IDAgMCAxLS41OTUtLjU5NXYtLjU0YzAtLjMyOC4yNjYtLjU5NS41OTUtLjU5NWgzLjU0Yy4zMyAwIC41OTUuMjY3LjU5NS41OTZ2LjUzOWEuNTk1LjU5NSAwIDAgMS0uNTk1LjU5NXptMi42NS0yLjExNmMwLS45ODYtLjgtMS43ODYtMS43ODctMS43ODZIMy42NjNjLS45ODcgMC0xLjc4Ni44LTEuNzg2IDEuNzg2djguNjJjMCAuOTg3LjggMS43ODYgMS43ODYgMS43ODZoNy43MzRhNi43MDkgNi43MDkgMCAwIDAtLjQ0MiAxLjg3N0gzLjM3M0EzLjM3NCAzLjM3NCAwIDAgMSAwIDEyLjU3M3YtOS4yQTMuMzc0IDMuMzc0IDAgMCAxIDMuMzczIDBoOS4yMDZhMy4zNzMgMy4zNzMgMCAwIDEgMy4zNzMgMy4zNzN2Ni42NDRhNi42ODEgNi42ODEgMCAwIDAtMS44NzcuODE5VjMuNjYzek01LjgyIDguMmEuNTk1LjU5NSAwIDAgMS0uNTk1LjU5NWgtLjUzOWEuNTk1LjU5NSAwIDAgMS0uNTk1LS41OTV2LS41NGMwLS4zMjguMjY2LS41OTQuNTk1LS41OTRoLjU0Yy4zMjggMCAuNTk0LjI2Ni41OTQuNTk0di41NHptLS41OTUtMi40MjFoLS41MzlhLjU5NS41OTUgMCAwIDEtLjU5NS0uNTk1di0uNTRjMC0uMzI4LjI2Ni0uNTk1LjU5NS0uNTk1aC41NGMuMzI4IDAgLjU5NC4yNjcuNTk0LjU5NnYuNTM5YS41OTUuNTk1IDAgMCAxLS41OTUuNTk1em0uNTk1IDUuNDM3YS41OTUuNTk1IDAgMCAxLS41OTUuNTk1aC0uNTM5YS41OTUuNTk1IDAgMCAxLS41OTUtLjU5NXYtLjU0YzAtLjMyOC4yNjYtLjU5NS41OTUtLjU5NWguNTRjLjMyOCAwIC41OTQuMjY3LjU5NC41OTV2LjU0em0xMy43IDQuNzU5aC0xLjI3MlYxNC43YS41NzQuNTc0IDAgMCAwLTEuMTQ5IDB2MS4yNzVoLTEuMjc1YS41NzQuNTc0IDAgMSAwIDAgMS4xNDlIMTcuMXYxLjI3MmEuNTc0LjU3NCAwIDAgMCAxLjE1IDB2LTEuMjcyaDEuMjdhLjU3NC41NzQgMCAwIDAgMC0xLjE1em0tMS44NDkgNS45NzNhNS40IDUuNCAwIDAgMS01LjM5Ny01LjQgNS4zOTggNS4zOTggMCAwIDEgMTAuNzk0IDBjMCAyLjk4Mi0yLjQxNiA1LjQtNS4zOTcgNS40eiIgbWFzaz0idXJsKCNiKSIvPiAgICA8L2c+PC9zdmc+); }\n\n:host([typebutton=\"buy\"]) {\n    background-color: #ce4139; }\n:host([typebutton=\"buy\"]) label {\n    color: #ffffff; }\n:host([typebutton=\"buy\"]) label::before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDIyIDE2Ij4gICAgPGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxyZWN0IHdpZHRoPSIxMC41IiBoZWlnaHQ9IjIiIHg9IjciIHk9IjgiIHJ4PSIxIi8+ICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNi41IDE2YTIuNSAyLjUgMCAxIDEgMC01IDIuNSAyLjUgMCAwIDEgMCA1ek04LjUgMTZhMi41IDIuNSAwIDEgMSAwLTUgMi41IDIuNSAwIDAgMSAwIDV6Ii8+ICAgICAgICA8cmVjdCB3aWR0aD0iNiIgaGVpZ2h0PSIyIiByeD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjY2KSIvPiAgICAgICAgPHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iMiIgcng9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0IDEpIi8+ICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00Ljg2MiAxLjI0M2ExIDEgMCAwIDEgMS45NC0uNDg2bDIgOGExIDEgMCAwIDEtMS45NC40ODZsLTItOHpNMjAuMTU5IDEuNDZhMSAxIDAgMSAxIDEuNjgyIDEuMDhsLTQuNDc3IDYuOTdhMSAxIDAgMCAxLTEuNjgzLTEuMDgybDQuNDc4LTYuOTY5eiIvPiAgICA8L2c+PC9zdmc+); }\n:host([typebutton=\"buy\"]) .styled-checkbox:checked + label .icon-check {\n    border-top-color: #ffffff; }\n:host([typebutton=\"buy\"]) .styled-checkbox:checked + label .icon-check::after {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgMTEgOCI+ICAgIDxnIGZpbGw9IiNDRTQxMzkiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICA8cGF0aCBkPSJNLjU4NiA0TDIgMi41ODYgNS40MTQgNiA0IDcuNDE0eiIvPiAgICAgICAgPHBhdGggZD0iTTQuNSA3LjkxNEwzLjA4NiA2LjUgOS41LjA4NiAxMC45MTQgMS41eiIvPiAgICA8L2c+PC9zdmc+); }\n.icon-check {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 0;\n    height: 0; }\n@media (min-width: 768px) {\n    .icon-check {\n        border-top: 30px solid transparent;\n        border-left: 30px solid transparent; } }\n@media (max-width: 767px) {\n    .icon-check {\n        border-top: 2.14286em solid transparent;\n        border-left: 2.14286em solid transparent; } }\n.icon-check::after {\n    content: '';\n    display: block;\n    position: absolute;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center; }\n@media (min-width: 768px) {\n    .icon-check::after {\n        height: 8px;\n        width: 11px;\n        top: -25px;\n        right: 3px; } }\n@media (max-width: 767px) {\n    .icon-check::after {\n        height: 0.57143em;\n        width: 0.78571em;\n        top: -1.78571em;\n        right: 0.21429em; } }\n\n.hidden {\n    display: none; }";

            function _templateObject2$6() {
              var data = _taggedTemplateLiteral(["\n            <span class=\"hidden\"><slot></slot></span>\n            <input class=\"styled-checkbox\" id=\"", "\" type=\"checkbox\" ?checked=\"", "\" @click=\"", "\"/>\n            <label for=\"", "\">\n                <span class=\"text\">", "</span>\n                <span class=\"icon-check\"></span>\n            </label>\n        "]);

              _templateObject2$6 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject$7() {
              var data = _taggedTemplateLiteral(["", ""]);

              _templateObject$7 = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcPlpButton = _decorate([customElement('uc-plp-button')], function (_initialize, _LitElement) {
              var UcPlpButton =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcPlpButton, _LitElement2);

                function UcPlpButton() {
                  var _this;

                  _classCallCheck(this, UcPlpButton);

                  _this = _possibleConstructorReturn(this, _getPrototypeOf(UcPlpButton).call(this));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  _this.checked = false;
                  _this.buttonId = uniqid("styled-checkbox-");
                  _this.type = {
                    'compare': {
                      'false': 'Сравнить',
                      'true': 'В сравнении'
                    },
                    'shoping-list': {
                      'false': 'В список',
                      'true': 'Добавлено'
                    },
                    'buy': {
                      'false': 'В корзину',
                      'true': 'Добавлено'
                    }
                  };
                  return _this;
                }

                return UcPlpButton;
              }(_LitElement);

              return {
                F: UcPlpButton,
                d: [{
                  kind: "get",
                  static: true,
                  key: "properties",
                  value: function properties() {
                    return {
                      typeButton: {
                        type: String
                      },
                      checked: {
                        type: Boolean,
                        reflect: true
                      },
                      buttonId: {
                        type: String
                      },
                      type: {
                        type: String
                      }
                    };
                  }
                }, {
                  kind: "field",
                  static: true,
                  key: "styles",
                  value: function value() {
                    return css(_templateObject$7(), unsafeCSS(css$1));
                  }
                }, {
                  kind: "method",
                  key: "changeChecked",
                  value: function changeChecked() {
                    if (this.typeButton === 'compare') {
                      this.checked = !this.checked;
                    } else {
                      this.checked = true;
                    }
                  }
                }, {
                  kind: "method",
                  key: "buttonClickedHandler",
                  value: function buttonClickedHandler(e, type) {
                    e.preventDefault();
                    var data = {
                      'eventAction': !this.checked ? 'add' : 'remove',
                      'buttonType': type
                    };

                    if (type === 'compare' || !this.checked) {
                      var event = new CustomEvent('plpButtonClicked', {
                        detail: data
                      });
                      this.dispatchEvent(event);
                    }

                    this.changeChecked();
                  }
                }, {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    var _this2 = this;

                    var label = this.type[this.typeButton][this.checked];
                    return html(_templateObject2$6(), this.buttonId, this.checked, function (e) {
                      return _this2.buttonClickedHandler(e, _this2.typeButton);
                    }, this.buttonId, label);
                  }
                }]
              };
            }, LitElement);

            function _templateObject2$7() {
              var data = _taggedTemplateLiteral(["<slot></slot>"]);

              _templateObject2$7 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject$8() {
              var data = _taggedTemplateLiteral(["\n        :host {\n            display: -ms-grid;\n            display: grid; }\n        \n        @media (min-width: 768px) {\n        :host-context([typed='list']) {\n                -ms-grid-rows: 1fr 1fr 1fr;\n                grid-template-rows: 1fr 1fr 1fr;\n                -ms-grid-columns: auto;\n                grid-template-columns: auto; } }\n        \n        @media (max-width: 767px) {\n        :host-context([typed='list']) {\n                -ms-grid-rows: auto;\n                grid-template-rows: auto;\n                -ms-grid-columns: 1fr 1fr 1fr;\n                grid-template-columns: 1fr 1fr 1fr; } }\n        \n        :host-context([typed='card']) {\n            -ms-grid-rows: auto;\n            grid-template-rows: auto;\n            -ms-grid-columns: 1fr 1fr 1fr;\n            grid-template-columns: 1fr 1fr 1fr; }\n    "]);

              _templateObject$8 = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcPlpItemButtons = _decorate([customElement('uc-plp-item-buttons')], function (_initialize, _LitElement) {
              var UcPlpItemButtons =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcPlpItemButtons, _LitElement2);

                function UcPlpItemButtons() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, UcPlpItemButtons);

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UcPlpItemButtons)).call.apply(_getPrototypeOf2, [this].concat(args)));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  return _this;
                }

                return UcPlpItemButtons;
              }(_LitElement);

              return {
                F: UcPlpItemButtons,
                d: [{
                  kind: "field",
                  static: true,
                  key: "styles",
                  value: function value() {
                    return css(_templateObject$8());
                  }
                }, {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return html(_templateObject2$7());
                  }
                }]
              };
            }, LitElement);

            function _templateObject2$8() {
              var data = _taggedTemplateLiteral(["\n            <slot></slot>\n        "]);

              _templateObject2$8 = function _templateObject2() {
                return data;
              };

              return data;
            }

            function _templateObject$9() {
              var data = _taggedTemplateLiteral(["\n        :host {\n            background-color: #ffffff;\n            display: -ms-grid;\n            display: grid;\n            border: 1px solid #efeeee; }\n        @media (max-width: 767px) {\n        :host {\n                height: 21.42857em;\n                -ms-grid-columns: 1.42857em 1fr 1.42857em 1fr 1.42857em;\n                grid-template-columns: 1.42857em 1fr 1.42857em 1fr 1.42857em;\n                -ms-grid-rows: 1.07143em 0.35714em 4.78571em 0.35714em 1.71429em 0.35714em 3.57143em 0.35714em 1fr 0.35714em 3.64286em;\n                grid-template-rows: 1.07143em 4.78571em 1.71429em 3.57143em 1fr 3.64286em;\n                grid-row-gap: 0.35714em;\n                grid-template-areas: \".       .           .           .           .\" \".       img         .           title       .\" \".       img         .           rating      .\" \".       img         .           prices      .\" \".       description description description .\" \"buttons buttons     buttons     buttons     buttons\"; } }\n        \n        :host([typed='list']) {\n            width: 100%; }\n        @media (min-width: 768px) {\n        :host([typed='list']) {\n                -ms-grid-rows: 5px 5px 38px 5px 19px 5px 1fr 5px 52px 5px 10px;\n                grid-template-rows: 5px 38px 19px 1fr 52px 10px;\n                grid-row-gap: 5px;\n                grid-template-areas: \"img .           .           buttons\" \"img title       title       buttons\" \"img rating      .           buttons\" \"img description description buttons\" \"img prices      .           buttons\" \"img .           .           buttons\"; } }\n        @media (min-width: 1200px) {\n        :host([typed='list']) {\n                height: 193px;\n                -ms-grid-columns: 194px 1fr 1fr 191px;\n                grid-template-columns: 194px 1fr 1fr 191px;\n                grid-column-gap: 20px; } }\n        @media (max-width: 1199px) and (min-width: 992px) {\n        :host([typed='list']) {\n                height: 193px;\n                -ms-grid-columns: 180px 1fr 1fr 130px;\n                grid-template-columns: 180px 1fr 1fr 130px;\n                grid-column-gap: 10px; } }\n        @media (max-width: 991px) and (min-width: 768px) {\n        :host([typed='list']) {\n                height: 191px;\n                -ms-grid-columns: 152px 1fr 1fr 58px;\n                grid-template-columns: 152px 1fr 1fr 58px;\n                grid-column-gap: 10px; } }\n        \n        :host([typed='card']) {\n            width: 100%; }\n        @media (min-width: 1200px) {\n        :host([typed='card']) {\n                height: 520px;\n                -ms-grid-rows: 7px 236px 64px 20px 1fr 37px 62px;\n                grid-template-rows: 7px 236px 64px 20px 1fr 37px 62px; } }\n        @media (max-width: 1199px) and (min-width: 992px) {\n        :host([typed='card']) {\n                height: 532px;\n                -ms-grid-rows: 7px 236px 64px 20px 1fr 55px 62px;\n                grid-template-rows: 7px 236px 64px 20px 1fr 55px 62px; } }\n        @media (max-width: 991px) and (min-width: 768px) {\n        :host([typed='card']) {\n                height: 532px;\n                -ms-grid-rows: 7px 236px 64px 20px 1fr 55px 62px;\n                grid-template-rows: 7px 236px 64px 20px 1fr 55px 62px; } }\n        @media (min-width: 768px) {\n        :host([typed='card']) {\n                -ms-grid-columns: 10px 1fr 10px;\n                grid-template-columns: 10px 1fr 10px;\n                grid-row-gap: 5px;\n                -ms-grid-rows: auto 5px auto 5px auto 5px auto 5px auto 5px auto 5px auto;\n                grid-template-areas: \".       .           .\" \".       img         .\" \".       title       .\" \".       rating      .\" \".       description .\" \".       prices      .\" \"buttons buttons     buttons\"; } }\n        @media (min-width: 1200px) {\n        :host([typed='card']) ::slotted(uc-plp-item-prices) {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -ms-flex-pack: distribute;\n                justify-content: space-around;\n                -webkit-box-align: baseline;\n                -ms-flex-align: baseline;\n                align-items: baseline; } }\n        \n        ::slotted(.plp-item-img) {\n            grid-area: img;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: center;\n            -ms-flex-pack: center;\n            justify-content: center;\n            -webkit-box-align: center;\n            -ms-flex-align: center;\n            align-items: center; }\n        \n        ::slotted(uc-plp-item-title) {\n            grid-area: title;\n            -ms-grid-row-align: end;\n            align-self: end; }\n        \n        ::slotted(uc-plp-item-rating) {\n            grid-area: rating;\n            -ms-grid-row-align: center;\n            align-self: center; }\n        \n        ::slotted(uc-plp-item-description) {\n            grid-area: description; }\n        \n        ::slotted(uc-plp-item-prices) {\n            grid-area: prices; }\n        \n        ::slotted(uc-plp-item-buttons) {\n            grid-area: buttons; }\n    "]);

              _templateObject$9 = function _templateObject() {
                return data;
              };

              return data;
            }

            var UcPlpItem = _decorate([customElement('uc-plp-item')], function (_initialize, _LitElement) {
              var UcPlpItem =
              /*#__PURE__*/
              function (_LitElement2) {
                _inherits(UcPlpItem, _LitElement2);

                function UcPlpItem() {
                  var _this;

                  _classCallCheck(this, UcPlpItem);

                  _this = _possibleConstructorReturn(this, _getPrototypeOf(UcPlpItem).call(this));

                  _initialize(_assertThisInitialized(_assertThisInitialized(_this)));

                  _this.typed = 'list';
                  _this.dataProductId = '';
                  window.addEventListener('plpChangeType', _this.handleChangeTypeList);

                  _this.addEventListener('plpButtonClicked', _this.handleButtonClick);

                  return _this;
                }

                return UcPlpItem;
              }(_LitElement);

              return {
                F: UcPlpItem,
                d: [{
                  kind: "get",
                  static: true,
                  key: "properties",
                  value: function properties() {
                    return {
                      typed: {
                        type: String,
                        reflect: true
                      },
                      dataProductId: {
                        type: String
                      },
                      dataProductName: {
                        type: String
                      },
                      dataProductPrice: {
                        type: String
                      },
                      dataProductLocation: {
                        type: String
                      },
                      dataDivision: {
                        type: String
                      },
                      dataSubDivision: {
                        type: String
                      },
                      dataCategory: {
                        type: String
                      },
                      dataCategoryId: {
                        type: String
                      },
                      dataProductCategoryId: {
                        type: String
                      },
                      dataPosition: {
                        type: Number
                      }
                    };
                  }
                }, {
                  kind: "field",
                  static: true,
                  key: "styles",
                  value: function value() {
                    return css(_templateObject$9());
                  }
                }, {
                  kind: "method",
                  key: "handleChangeTypeList",
                  value: function handleChangeTypeList(event) {
                    this.typed = event.detail;
                  }
                }, {
                  kind: "method",
                  key: "handleButtonClick",
                  value: function handleButtonClick(event) {
                    event.stopPropagation();
                    window.dataLayer = window.dataLayer || [];
                    this.dataPosition = getElemPos(this);
                    window.dataLayer.push(addData("add", "Conversions", this, event));

                    if (event.detail.buttonType === 'compare') {
                      this.handleComparisionClick(event.detail);
                    }
                  }
                }, {
                  kind: "method",
                  key: "handleComparisionClick",
                  value: function handleComparisionClick(data) {
                    var event = new CustomEvent(data.eventAction === 'add' ? 'comparisonAddItem' : 'comparisonRemoveItem', {
                      detail: this.dataProductId
                    });
                    this.dispatchEvent(event);
                  }
                }, {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return html(_templateObject2$8());
                  }
                }]
              };
            }, LitElement);

        }
    };
});
//# sourceMappingURL=chunk-8e799234.js.map
