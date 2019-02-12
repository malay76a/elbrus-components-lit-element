import { a as _decorate, b as customElement, d as css, e as html, f as LitElement, c as property, i as unsafeCSS } from './chunk-96426fcb.js';
import { b as isXs } from './chunk-bb8482fa.js';
import { a as uniqid } from './chunk-ef0f8014.js';

function addData(eventAct, eventCat, obj, event) {
  let dataLayerEvent = {
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

  for (let event in dataLayerEvent) {
    dataLayerEvent[event] = dataLayerEvent[event] || "not set";
  }

  return dataLayerEvent;
}

function getElemPos(elem) {
  for (let i = 0; i < elem.parentElement.children.length; i++) {
    if (elem.parentElement.children[i] === elem) {
      return i + 1;
    }
  }
}

let UcPlpItemImg = _decorate([customElement('uc-plp-item-img')], function (_initialize, _LitElement) {
  class UcPlpItemImg extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: UcPlpItemImg,
    d: [{
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return css`
        :host {
            padding: 5px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            max-width: 100%;
            max-height: 100%; }
        
        @media (min-width: 1200px) {
        :host-context([typed="card"]) {
                padding: 30px; } }
        
        ::slotted(img) {
            max-width: 100%;
            max-height: 100%; }
    `;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html`
            <slot></slot>
        `;
      }
    }]
  };
}, LitElement);

let UcPlpItemTitle = _decorate([customElement('uc-plp-item-title')], function (_initialize, _LitElement) {
  class UcPlpItemTitle extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: UcPlpItemTitle,
    d: [{
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return css`
        :host {
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            width: 100%;
            max-height: 100%;
            position: relative; }
        
        ::slotted(*) {
            text-decoration: none;
            color: #333333; }
        @media (min-width: 1200px) {
            ::slotted(*) {
                font-size: 17px;
                line-height: 1.12; } }
        @media (max-width: 1199px) and (min-width: 992px) {
            ::slotted(*) {
                font-size: 17px;
                line-height: 1.12; } }
        @media (max-width: 991px) and (min-width: 768px) {
            ::slotted(*) {
                font-size: 14px;
                line-height: 1.36; } }
        @media (max-width: 767px) {
            ::slotted(*) {
                font-size: 0.85714em;
                line-height: normal; } }
    `;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html`
            <slot></slot>
        `;
      }
    }]
  };
}, LitElement);

let UcPlpItemRating = _decorate([customElement('uc-plp-item-rating')], function (_initialize, _LitElement) {
  class UcPlpItemRating extends _LitElement {
    constructor() {
      super();

      _initialize(this);

      this.rating = '0';
      this.count = '0';
    }

  }

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

      value() {
        return css`
        .rating-wrapper {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex; }
        @media (max-width: 767px) {
        .rating-wrapper {
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between; } }
        
        @media (min-width: 768px) {
        :host-context([typed="card"]) .rating-wrapper {
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between; } }
        
        .stars {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center; }
        @media (min-width: 768px) {
        .stars {
                margin-right: 18px; } }
        @media (max-width: 767px) {
        .stars {
                margin-right: 1.28571em; } }
        
        .star {
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            display: block; }
        @media (min-width: 768px) {
        .star {
                width: 12px;
                height: 11px;
                margin-right: 2px; } }
        @media (max-width: 767px) {
        .star {
                width: 0.85714em;
                height: 0.78571em;
                margin-right: 0.14286em; } }
        
        .on {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpdD0nJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCBtZWV0JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9JyNlYmRmMjUnIGQ9J00xMiwxOC4zMjQgTDE5LjQxNiwyMi44IEwxNy40NDgsMTQuMzY0IEwyNCw4LjY4OCBMMTUuMzcyLDcuOTU2IEwxMiwwIEw4LjYyOCw3Ljk1NiBMMCw4LjY4OCBMNi41NTIsMTQuMzY0IEw0LjU4NCwyMi44IEwxMiwxOC4zMjQgTDEyLDE4LjMyNCBaJz48L3BhdGg+PC9zdmc+); }
        
        .off {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpdD0nJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCBtZWV0JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9JyNlYmRmMjUnIGQ9J00yNCw4LjY4OCBMMTUuMzcyLDcuOTQ0IEwxMiwwIEw4LjYyOCw3Ljk1NiBMMCw4LjY4OCBMNi41NTIsMTQuMzY0IEw0LjU4NCwyMi44IEwxMiwxOC4zMjQgTDE5LjQxNiwyMi44IEwxNy40NiwxNC4zNjQgTDI0LDguNjg4IEwyNCw4LjY4OCBaIE03LjQ4OCwxOC44MDQgTDguNjg4LDEzLjY2OCBMNC43MDQsMTAuMjEyIEw5Ljk2LDkuNzU2IEwxMiw0LjkyIEwxNC4wNTIsOS43NjggTDE5LjMwOCwxMC4yMjQgTDE1LjMyNCwxMy42OCBMMTYuNTI0LDE4LjgxNiBMMTIsMTYuMDggTDcuNDg4LDE4LjgwNCBMNy40ODgsMTguODA0IFonPjwvcGF0aD48L3N2Zz4=); }
        
        .half {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpdD0nJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCBtZWV0JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9JyNlYmRmMjUnIGQ9J00yNCw5LjE4OCBMMTUuMzcyLDguNDQ0IEwxMiwwLjUgTDguNjI4LDguNDU2IEwwLDkuMTg4IEw2LjU1MiwxNC44NjQgTDQuNTg0LDIzLjMgTDEyLDE4LjgyNCBMMTkuNDE2LDIzLjMgTDE3LjQ2LDE0Ljg2NCBMMjQsOS4xODggTDI0LDkuMTg4IFogTTEyLDE2LjU4IEwxMiw1LjQyIEwxNC4wNTIsMTAuMjY4IEwxOS4zMDgsMTAuNzI0IEwxNS4zMjQsMTQuMTggTDE2LjUyNCwxOS4zMTYgTDEyLDE2LjU4IEwxMiwxNi41OCBaJz48L3BhdGg+PC9zdmc+); }
        
        .reviews {
            color: #66c05d;
            text-decoration: none;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center; }
        @media (min-width: 768px) {
        .reviews {
                font-size: 13px; } }
        @media (max-width: 767px) {
        .reviews {
                font-size: 0.78571em; } }
        
        .reviews-icon {
            display: inline-block;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE4IDE1Ij4gICAgPGcgZmlsbD0iIzY2QzA1RCIgZmlsbC1ydWxlPSJub256ZXJvIj4gICAgICAgIDxwYXRoIGQ9Ik02Ljk2NCAyLjY1NUMzLjExOCAyLjY1NSAwIDUuMDUzIDAgOC4wMTJjMCAxLjQ1Ljc1MSAyLjc3IDEuOTcgMy43MzQtLjA3Ljk4NC0uMzA3IDIuMTg3LS45OTMgMi44MzUgMS4zNjUgMCAyLjc2LS44NTUgMy42NDItMS41MjRhOC44NTEgOC44NTEgMCAwIDAgMi4zNDUuMzEyYzMuODQ3IDAgNi45NjUtMi4zOTYgNi45NjUtNS4zNTcgMC0yLjk2LTMuMTE4LTUuMzU3LTYuOTY1LTUuMzU3eiIvPiAgICAgICAgPHBhdGggZD0iTTE2LjIyMSA4LjUzNGMuNTg3LS43ODMuOTIyLTEuNjk0LjkyMi0yLjY2NSAwLTIuOTU5LTMuMTE4LTUuMzU3LTYuOTY0LTUuMzU3LTEuNjkzIDAtMy4yNDUuNDY1LTQuNDUxIDEuMjM3QTkuNTYxIDkuNTYxIDAgMCAxIDcuNSAxLjU4NGM0LjE0MiAwIDcuNSAyLjYzOCA3LjUgNS44OTIgMCAxLjI4My0uNTIgMi40NzEtMS40MDYgMy40MzYuODguNjcgMi4yNzcgMS41MjYgMy42NDIgMS41MjYtLjk3LS45MjEtMS4wNC0yLjk2My0xLjAxNS0zLjkwNHoiLz4gICAgPC9nPjwvc3ZnPg==);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center; }
        @media (min-width: 768px) {
        .reviews-icon {
                width: 18px;
                height: 15px;
                margin-right: 4px; } }
        @media (max-width: 767px) {
        .reviews-icon {
                width: 1.63636em;
                height: 1.36364em;
                margin-right: 0.36364em; } }
    `;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        //TODO: define algorithm create stars
        return html`
            <div class="rating-wrapper">
                <div class="stars">
                    <div class="star on"></div>
                    <div class="star on"></div>
                    <div class="star half"></div>
                    <div class="star off"></div>
                    <div class="star off"></div>
                </div>
                <a class="reviews" href="#reviews">
                    <span class="reviews-icon"></span>
                    <span class="reviews-text">
                        ${isXs() ? html`(${this.count})` : html`${this.count} отзывов`}
                    </span>
                </a>
            </div>
        `;
      }
    }]
  };
}, LitElement);

let UcPlpItemDescriptionItem = _decorate([customElement('uc-plp-item-description-item')], function (_initialize, _LitElement) {
  class UcPlpItemDescriptionItem extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: UcPlpItemDescriptionItem,
    d: [{
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return css`
        ::slotted(.key) {
            color: #727272; }
        @media (min-width: 768px) {
            ::slotted(.key) {
                font-size: 12px; } }
        @media (max-width: 767px) {
            ::slotted(.key) {
                font-size: 0.78571em; } }
        ::slotted(.key)::after {
            content: ':'; }
        
        ::slotted(.value) {
            font-size: 12px;
            color: #4a4a4a; }
        @media (min-width: 768px) {
            ::slotted(.value) {
                font-size: 12px; } }
        @media (max-width: 767px) {
            ::slotted(.value) {
                font-size: 0.78571em; } }
    `;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html`<slot></slot>`;
      }
    }]
  };
}, LitElement);

let UcPlpItemDescription = _decorate([customElement('uc-plp-item-description')], function (_initialize, _LitElement) {
  class UcPlpItemDescription extends _LitElement {
    constructor() {
      super();

      _initialize(this);

      window.addEventListener('plpChangeType', this.handleChangeTypeList);
    }

  }

  return {
    F: UcPlpItemDescription,
    d: [{
      kind: "field",
      decorators: [property({
        type: String,
        reflect: true
      })],
      key: "typed",

      value() {
        return 'list';
      }

    }, {
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return css`
        :host {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            line-height: 1.5; }
        @media (max-width: 767px) {
        :host {
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column; } }
        
        @media (min-width: 768px) {
        :host([typed="list"]) {
                -ms-flex-wrap: wrap;
                flex-wrap: wrap; } }
        
        @media (min-width: 768px) {
        :host([typed="list"]) ::slotted(uc-plp-item-description-item) {
                -webkit-box-flex: 1;
                -ms-flex: 1 1 50%;
                flex: 1 1 50%; } }
        
        @media (min-width: 768px) {
        :host([typed="card"]) {
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column; } }
    `;
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
        return html`
            <slot></slot>
        `;
      }
    }]
  };
}, LitElement);

let UcPlpItemPrice = _decorate([customElement('uc-plp-item-price')], function (_initialize, _LitElement) {
  class UcPlpItemPrice extends _LitElement {
    constructor() {
      super();

      _initialize(this);

      this.type = 'main';
    }

  }

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

      value() {
        return css`
        :host([type="main"]) {
            color: #333333; }
        @media (max-width: 767px) {
        :host([type="main"]) .first-part {
                font-size: 1.5em; } }
        @media (max-width: 767px) {
        :host([type="main"]) .second-part {
                font-size: 1.07143em; } }
        @media (max-width: 767px) {
        :host([type="main"]) .unit {
                font-size: 0.78571em; } }
        
        :host([type="second"]) {
            color: #727272; }
        @media (max-width: 767px) {
        :host([type="second"]) .first-part {
                font-size: 0.85714em; } }
        @media (max-width: 767px) {
        :host([type="second"]) .second-part {
                font-size: 0.85714em; } }
        @media (max-width: 767px) {
        :host([type="second"]) .unit {
                font-size: 0.92857em; } }
        
        .first-part {
            font-weight: bold; }
        
        .second-part {
            font-weight: bold; }
        
        .unit {
            margin-left: 5px; }
        @media (min-width: 768px) {
        .unit {
                font-size: 13px; } }
        
        @media (min-width: 768px) {
        :host([type="main"]) .first-part {
                font-size: 24px; }
        :host([type="main"]) .second-part {
                font-size: 18px; } }
        
        @media (min-width: 768px) {
        :host([type="second"]) .first-part {
                font-size: 14px; }
        :host([type="second"]) .second-part {
                font-size: 14px; } }
    `;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const [firstPart, secondPart] = this.content.split(',');
        return html`
            <div>
                <span class="first-part">${firstPart}</span>
                <span class="second-part">,${secondPart}</span>
                <span class="unit">${this.currency}</span>
            </div>
        `;
      }
    }]
  };
}, LitElement);

let UcPlpItemPrices = _decorate([customElement('uc-plp-item-prices')], function (_initialize, _LitElement) {
  class UcPlpItemPrices extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: UcPlpItemPrices,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html`<slot></slot>`;
      }
    }]
  };
}, LitElement);

var css$1 = ":host {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\nlabel {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\nlabel::before {\n    content: '';\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n@media (min-width: 768px) {\n    label::before {\n        height: 22px;\n        width: 22px;\n        font-size: 12px;\n    }\n}\n@media (max-width: 767px) {\n    label::before {\n        font-size: 0.85714em;\n        height: 1.83333em;\n        width: 1.83333em;\n    }\n}\n\n@media (min-width: 1200px) {\n    :host-context([typed=\"list\"]) label::before {\n        margin-right: 20px;\n    }\n}\n\n@media (max-width: 1199px) and (min-width: 992px) {\n    :host-context([typed=\"list\"]) label::before {\n        margin-right: 15px;\n    }\n}\n\n:host-context([typed=\"card\"]) label {\n    flex-direction: column;\n}\n@media (min-width: 992px) {\n    :host-context([typed=\"card\"]) label::before {\n        margin-bottom: 2px;\n    }\n}\n\n@media (max-width: 991px) {\n    .text {\n        display: none;\n    }\n}\n\n@media (min-width: 768px) {\n    .text {\n        font-size: 12px;\n    }\n}\n\n@media (max-width: 767px) {\n    .text {\n        font-size: 0.85714em;\n    }\n}\n\n.styled-checkbox {\n    position: absolute;\n    opacity: 0;\n}\n\n:host([typebutton=\"compare\"]) {\n    background-color: #fff;\n    box-shadow: 0 0 0 1px #eeeeee inset;\n}\n:host([typebutton=\"compare\"]) label {\n    color: #464646;\n}\n:host([typebutton=\"compare\"]) .styled-checkbox:checked + label::before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIyIDIwIj4gICAgPGcgZmlsbD0iI0VDQTI0NyIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxwYXRoIGQ9Ik0xMSA2YTMgMyAwIDEgMSAwLTYgMyAzIDAgMCAxIDAgNnptMC0yYTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMnoiLz4gICAgICAgIDxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjIiIHg9IjIiIHk9IjIiIHJ4PSIxIi8+ICAgICAgICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSIyIiB4PSIxMiIgeT0iMiIgcng9IjEiLz4gICAgICAgIDxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjE1IiB4PSIxMCIgeT0iNSIgcng9IjEiLz4gICAgICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIyIiB4PSIzIiB5PSIxOCIgcng9IjEiLz4gICAgICAgIDxwYXRoIGQ9Ik0wIDExaDhhNCA0IDAgMSAxLTggMHpNMTQgMTFoOGE0IDQgMCAxIDEtOCAweiIvPiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMy41OSA1LjcxM2EuNS41IDAgMSAxIC44Mi41NzRsLTMuNSA1YS41LjUgMCAwIDEtLjgyLS41NzRsMy41LTV6TTE3LjU5IDUuNzEzYS41LjUgMCAwIDEgLjgyLjU3NGwtMy41IDVhLjUuNSAwIDAgMS0uODItLjU3NGwzLjUtNXoiLz4gICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTQuNDEgNS43MTNhLjUuNSAwIDEgMC0uODIuNTc0bDMuNSA1YS41LjUgMCAwIDAgLjgyLS41NzRsLTMuNS01ek0xOC40MSA1LjcxM2EuNS41IDAgMCAwLS44Mi41NzRsMy41IDVhLjUuNSAwIDAgMCAuODItLjU3NGwtMy41LTV6Ii8+ICAgIDwvZz48L3N2Zz4=); }\n:host([typebutton=\"compare\"]) .styled-checkbox:checked + label .icon-check {\n    border-top-color: #eca247; }\n:host([typebutton=\"compare\"]) .styled-checkbox:checked + label .icon-check::after {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgMTEgOCI+ICAgIDxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICA8cGF0aCBkPSJNLjU4NiA0TDIgMi41ODYgNS40MTQgNiA0IDcuNDE0eiIvPiAgICAgICAgPHBhdGggZD0iTTQuNSA3LjkxNEwzLjA4NiA2LjUgOS41LjA4NiAxMC45MTQgMS41eiIvPiAgICA8L2c+PC9zdmc+); }\n:host([typebutton=\"compare\"]) .styled-checkbox:not(:checked) + label::before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIzIDIwIj4gICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSguNTY4KSI+ICAgICAgICA8cGF0aCBmaWxsPSIjRDRENEQ0IiBkPSJNMTEgNmEzIDMgMCAxIDEgMC02IDMgMyAwIDAgMSAwIDZ6bTAtMmExIDEgMCAxIDAgMC0yIDEgMSAwIDAgMCAwIDJ6Ii8+ICAgICAgICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSIyIiB4PSIyIiB5PSIyIiBmaWxsPSIjRDRENEQ0IiByeD0iMSIvPiAgICAgICAgPHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iMiIgeD0iMTIiIHk9IjIiIGZpbGw9IiNENEQ0RDQiIHJ4PSIxIi8+ICAgICAgICA8cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxNSIgeD0iMTAiIHk9IjUiIGZpbGw9IiNENUQ1RDUiIHJ4PSIxIi8+ICAgICAgICA8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMiIgeD0iMyIgeT0iMTgiIGZpbGw9IiNENEQ0RDQiIHJ4PSIxIi8+ICAgICAgICA8cGF0aCBmaWxsPSIjRDRENEQ0IiBkPSJNMCAxMWg4YTQgNCAwIDEgMS04IDB6TTE0IDExaDhhNCA0IDAgMSAxLTggMHoiLz4gICAgICAgIDxwYXRoIGZpbGw9IiNENEQ0RDQiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMuNTkgNS43MTNhLjUuNSAwIDEgMSAuODIuNTc0bC0zLjUgNWEuNS41IDAgMCAxLS44Mi0uNTc0bDMuNS01ek0xNy41OSA1LjcxM2EuNS41IDAgMCAxIC44Mi41NzRsLTMuNSA1YS41LjUgMCAwIDEtLjgyLS41NzRsMy41LTV6Ii8+ICAgICAgICA8cGF0aCBmaWxsPSIjRDRENEQ0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00LjQxIDUuNzEzYS41LjUgMCAxIDAtLjgyLjU3NGwzLjUgNWEuNS41IDAgMCAwIC44Mi0uNTc0bC0zLjUtNXpNMTguNDEgNS43MTNhLjUuNSAwIDAgMC0uODIuNTc0bDMuNSA1YS41LjUgMCAwIDAgLjgyLS41NzRsLTMuNS01eiIvPiAgICA8L2c+PC9zdmc+); }\n\n:host([typebutton=\"shoping-list\"]) {\n    background-color: #fff;\n    -webkit-box-shadow: 0 0 0 1px #eeeeee inset;\n    box-shadow: 0 0 0 1px #eeeeee inset; }\n:host([typebutton=\"shoping-list\"]) label {\n    color: #464646; }\n:host([typebutton=\"shoping-list\"]) .styled-checkbox:checked + label::before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSI+ICAgIDxkZWZzPiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0yMi43OCAyMi4xOTZIMFYwaDIyLjc4eiIvPiAgICA8L2RlZnM+ICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPiAgICAgICAgPC9tYXNrPiAgICAgICAgPHBhdGggZmlsbD0iIzdFNUQ5MSIgZD0iTTYuNDc1IDEwLjM5di0uNDUyYzAtLjI3Ni4yNDItLjUuNTQzLS41aDMuMjNjLjMgMCAuNTQzLjIyNC41NDMuNXYuNDUzYzAgLjI3Ni0uMjQzLjUtLjU0My41aC0zLjIzYy0uMyAwLS41NDMtLjIyNC0uNTQzLS41em00LjMxNi0yLjkwNGMwIC4yNzctLjI0My41LS41NDMuNWgtMy4yM2MtLjMgMC0uNTQzLS4yMjMtLjU0My0uNXYtLjQ1M2MwLS4yNzYuMjQyLS40OTkuNTQzLS40OTloMy4yM2MuMyAwIC41NDMuMjIzLjU0My40OTl2LjQ1M3ptLS41NDMtMi40MDRoLTMuMjNjLS4zIDAtLjU0My0uMjI0LS41NDMtLjVWNC4xM2MwLS4yNzYuMjQyLS41LjU0My0uNWgzLjIzYy4zIDAgLjU0My4yMjQuNTQzLjV2LjQ1M2MwIC4yNzUtLjI0My41LS41NDMuNXptMi40NDctMS43NDdhMS42MiAxLjYyIDAgMCAwLTEuNjEtMS42MjZoLTcuNzhjLS44OSAwLTEuNjExLjcyOS0xLjYxMSAxLjYyNnY3Ljg1YzAgLjg5OC43MiAxLjYyNiAxLjYxIDEuNjI2aDYuOTc2YTYuMTU4IDYuMTU4IDAgMCAwLS4zOTkgMS43MUgzLjA0M0MxLjM2MyAxNC41MiAwIDEzLjE0NCAwIDExLjQ0OFYzLjA3QzAgMS4zNzUgMS4zNjMgMCAzLjA0MyAwaDguMzAzYzEuNjggMCAzLjA0MiAxLjM3NSAzLjA0MiAzLjA3MXY2LjA1YTUuOTk3IDUuOTk3IDAgMCAwLTEuNjkzLjc0NlYzLjMzNXptLTcuNjYgNC4xNTFjMCAuMjc3LS4yMi41LS40OTQuNWgtLjQ0OWEuNDk3LjQ5NyAwIDAgMS0uNDk1LS41di0uNDUzYzAtLjI3Ni4yMjEtLjQ5OS40OTUtLjQ5OWguNDQ5Yy4yNzQgMCAuNDk1LjIyMy40OTUuNDk5di40NTN6bS0uNDk0LTIuNDA0aC0uNDQ5YS40OTcuNDk3IDAgMCAxLS40OTUtLjVWNC4xM2MwLS4yNzYuMjIxLS41LjQ5NS0uNWguNDQ5Yy4yNzQgMCAuNDk1LjIyNC40OTUuNXYuNDUzYzAgLjI3NS0uMjIxLjUtLjQ5NS41em0uNDk1IDUuMzA5YzAgLjI3Ni0uMjIxLjUtLjQ5NS41aC0uNDQ5YS40OTcuNDk3IDAgMCAxLS40OTUtLjV2LS40NTNjMC0uMjc2LjIyMS0uNS40OTUtLjVoLjQ0OWMuMjc0IDAgLjQ5NS4yMjQuNDk1LjV2LjQ1M3ptMTIuNDM4IDQuMzRIMTYuMzR2LTEuMTQ3YS41MTQuNTE0IDAgMCAwLS41MTItLjUxNi41MTQuNTE0IDAgMCAwLS41MTIuNTE2djEuMTQ3aC0xLjEzNmEuNTE0LjUxNCAwIDAgMC0uNTEyLjUxNmMwIC4yODYuMjI5LjUxNy41MTIuNTE3aDEuMTM2djEuMTQ0YzAgLjI4NS4yMy41MTYuNTEyLjUxNmEuNTE0LjUxNCAwIDAgMCAuNTEyLS41MTZ2LTEuMTQ0aDEuMTMzYS41MTQuNTE0IDAgMCAwIC41MTEtLjUxNy41MTQuNTE0IDAgMCAwLS41MTEtLjUxNnptLTEuNjQ3IDUuNTk3Yy0yLjc4IDAtNS4wMzYtMi4yNzUtNS4wMzYtNS4wODJzMi4yNTUtNS4wODIgNS4wMzYtNS4wODJjMi43ODIgMCA1LjAzNiAyLjI3NSA1LjAzNiA1LjA4MnMtMi4yNTQgNS4wODItNS4wMzYgNS4wODJ6IiBtYXNrPSJ1cmwoI2IpIi8+ICAgIDwvZz48L3N2Zz4=); }\n:host([typebutton=\"shoping-list\"]) .styled-checkbox:checked + label .icon-check {\n    border-top-color: #7e5d91; }\n:host([typebutton=\"shoping-list\"]) .styled-checkbox:checked + label .icon-check::after {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgMTEgOCI+ICAgIDxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICA8cGF0aCBkPSJNLjU4NiA0TDIgMi41ODYgNS40MTQgNiA0IDcuNDE0eiIvPiAgICAgICAgPHBhdGggZD0iTTQuNSA3LjkxNEwzLjA4NiA2LjUgOS41LjA4NiAxMC45MTQgMS41eiIvPiAgICA8L2c+PC9zdmc+); }\n:host([typebutton=\"shoping-list\"]) .styled-checkbox:not(:checked) + label::before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyNCAyMyI+ICAgIDxkZWZzPiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0yMy4wNyAyMS45NDhIMFYwaDIzLjA3eiIvPiAgICA8L2RlZnM+ICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAuNSkiPiAgICAgICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4gICAgICAgIDwvbWFzaz4gICAgICAgIDxwYXRoIGZpbGw9IiNENEQ0RDQiIGQ9Ik03LjI5MSAxMS4yMTZ2LS41NGMwLS4zMjguMjY2LS41OTUuNTk1LS41OTVoMy41NGMuMzMgMCAuNTk1LjI2Ny41OTUuNTk1di41NGEuNTk1LjU5NSAwIDAgMS0uNTk1LjU5NWgtMy41NGEuNTk1LjU5NSAwIDAgMS0uNTk1LS41OTV6bTQuNzMtMy4wMTZhLjU5NS41OTUgMCAwIDEtLjU5NS41OTVoLTMuNTRhLjU5NS41OTUgMCAwIDEtLjU5NS0uNTk1di0uNTRjMC0uMzI4LjI2Ni0uNTk0LjU5NS0uNTk0aDMuNTRjLjMzIDAgLjU5NS4yNjYuNTk1LjU5NHYuNTR6bS0uNTk1LTIuNDIxaC0zLjU0YS41OTUuNTk1IDAgMCAxLS41OTUtLjU5NXYtLjU0YzAtLjMyOC4yNjYtLjU5NS41OTUtLjU5NWgzLjU0Yy4zMyAwIC41OTUuMjY3LjU5NS41OTZ2LjUzOWEuNTk1LjU5NSAwIDAgMS0uNTk1LjU5NXptMi42NS0yLjExNmMwLS45ODYtLjgtMS43ODYtMS43ODctMS43ODZIMy42NjNjLS45ODcgMC0xLjc4Ni44LTEuNzg2IDEuNzg2djguNjJjMCAuOTg3LjggMS43ODYgMS43ODYgMS43ODZoNy43MzRhNi43MDkgNi43MDkgMCAwIDAtLjQ0MiAxLjg3N0gzLjM3M0EzLjM3NCAzLjM3NCAwIDAgMSAwIDEyLjU3M3YtOS4yQTMuMzc0IDMuMzc0IDAgMCAxIDMuMzczIDBoOS4yMDZhMy4zNzMgMy4zNzMgMCAwIDEgMy4zNzMgMy4zNzN2Ni42NDRhNi42ODEgNi42ODEgMCAwIDAtMS44NzcuODE5VjMuNjYzek01LjgyIDguMmEuNTk1LjU5NSAwIDAgMS0uNTk1LjU5NWgtLjUzOWEuNTk1LjU5NSAwIDAgMS0uNTk1LS41OTV2LS41NGMwLS4zMjguMjY2LS41OTQuNTk1LS41OTRoLjU0Yy4zMjggMCAuNTk0LjI2Ni41OTQuNTk0di41NHptLS41OTUtMi40MjFoLS41MzlhLjU5NS41OTUgMCAwIDEtLjU5NS0uNTk1di0uNTRjMC0uMzI4LjI2Ni0uNTk1LjU5NS0uNTk1aC41NGMuMzI4IDAgLjU5NC4yNjcuNTk0LjU5NnYuNTM5YS41OTUuNTk1IDAgMCAxLS41OTUuNTk1em0uNTk1IDUuNDM3YS41OTUuNTk1IDAgMCAxLS41OTUuNTk1aC0uNTM5YS41OTUuNTk1IDAgMCAxLS41OTUtLjU5NXYtLjU0YzAtLjMyOC4yNjYtLjU5NS41OTUtLjU5NWguNTRjLjMyOCAwIC41OTQuMjY3LjU5NC41OTV2LjU0em0xMy43IDQuNzU5aC0xLjI3MlYxNC43YS41NzQuNTc0IDAgMCAwLTEuMTQ5IDB2MS4yNzVoLTEuMjc1YS41NzQuNTc0IDAgMSAwIDAgMS4xNDlIMTcuMXYxLjI3MmEuNTc0LjU3NCAwIDAgMCAxLjE1IDB2LTEuMjcyaDEuMjdhLjU3NC41NzQgMCAwIDAgMC0xLjE1em0tMS44NDkgNS45NzNhNS40IDUuNCAwIDAgMS01LjM5Ny01LjQgNS4zOTggNS4zOTggMCAwIDEgMTAuNzk0IDBjMCAyLjk4Mi0yLjQxNiA1LjQtNS4zOTcgNS40eiIgbWFzaz0idXJsKCNiKSIvPiAgICA8L2c+PC9zdmc+); }\n\n:host([typebutton=\"buy\"]) {\n    background-color: #ce4139; }\n:host([typebutton=\"buy\"]) label {\n    color: #ffffff; }\n:host([typebutton=\"buy\"]) label::before {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDIyIDE2Ij4gICAgPGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxyZWN0IHdpZHRoPSIxMC41IiBoZWlnaHQ9IjIiIHg9IjciIHk9IjgiIHJ4PSIxIi8+ICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNi41IDE2YTIuNSAyLjUgMCAxIDEgMC01IDIuNSAyLjUgMCAwIDEgMCA1ek04LjUgMTZhMi41IDIuNSAwIDEgMSAwLTUgMi41IDIuNSAwIDAgMSAwIDV6Ii8+ICAgICAgICA8cmVjdCB3aWR0aD0iNiIgaGVpZ2h0PSIyIiByeD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjY2KSIvPiAgICAgICAgPHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iMiIgcng9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0IDEpIi8+ICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00Ljg2MiAxLjI0M2ExIDEgMCAwIDEgMS45NC0uNDg2bDIgOGExIDEgMCAwIDEtMS45NC40ODZsLTItOHpNMjAuMTU5IDEuNDZhMSAxIDAgMSAxIDEuNjgyIDEuMDhsLTQuNDc3IDYuOTdhMSAxIDAgMCAxLTEuNjgzLTEuMDgybDQuNDc4LTYuOTY5eiIvPiAgICA8L2c+PC9zdmc+); }\n:host([typebutton=\"buy\"]) .styled-checkbox:checked + label .icon-check {\n    border-top-color: #ffffff; }\n:host([typebutton=\"buy\"]) .styled-checkbox:checked + label .icon-check::after {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgMTEgOCI+ICAgIDxnIGZpbGw9IiNDRTQxMzkiIGZpbGwtcnVsZT0ibm9uemVybyI+ICAgICAgICA8cGF0aCBkPSJNLjU4NiA0TDIgMi41ODYgNS40MTQgNiA0IDcuNDE0eiIvPiAgICAgICAgPHBhdGggZD0iTTQuNSA3LjkxNEwzLjA4NiA2LjUgOS41LjA4NiAxMC45MTQgMS41eiIvPiAgICA8L2c+PC9zdmc+); }\n.icon-check {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 0;\n    height: 0; }\n@media (min-width: 768px) {\n    .icon-check {\n        border-top: 30px solid transparent;\n        border-left: 30px solid transparent; } }\n@media (max-width: 767px) {\n    .icon-check {\n        border-top: 2.14286em solid transparent;\n        border-left: 2.14286em solid transparent; } }\n.icon-check::after {\n    content: '';\n    display: block;\n    position: absolute;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center; }\n@media (min-width: 768px) {\n    .icon-check::after {\n        height: 8px;\n        width: 11px;\n        top: -25px;\n        right: 3px; } }\n@media (max-width: 767px) {\n    .icon-check::after {\n        height: 0.57143em;\n        width: 0.78571em;\n        top: -1.78571em;\n        right: 0.21429em; } }\n\n.hidden {\n    display: none; }";

let UcPlpButton = _decorate([customElement('uc-plp-button')], function (_initialize, _LitElement) {
  class UcPlpButton extends _LitElement {
    constructor() {
      super();

      _initialize(this);

      this.checked = false;
      this.buttonId = uniqid("styled-checkbox-");
      this.type = {
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
    }

  }

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

      value() {
        return css`${unsafeCSS(css$1)}`;
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
        const data = {
          'eventAction': !this.checked ? 'add' : 'remove',
          'buttonType': type
        };

        if (type === 'compare' || !this.checked) {
          let event = new CustomEvent('plpButtonClicked', {
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
        const label = this.type[this.typeButton][this.checked];
        return html`
            <span class="hidden"><slot></slot></span>
            <input class="styled-checkbox" id="${this.buttonId}" type="checkbox" ?checked="${this.checked}" @click="${e => this.buttonClickedHandler(e, this.typeButton)}"/>
            <label for="${this.buttonId}">
                <span class="text">${label}</span>
                <span class="icon-check"></span>
            </label>
        `;
      }
    }]
  };
}, LitElement);

let UcPlpItemButtons = _decorate([customElement('uc-plp-item-buttons')], function (_initialize, _LitElement) {
  class UcPlpItemButtons extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: UcPlpItemButtons,
    d: [{
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return css`
        :host {
            display: -ms-grid;
            display: grid; }
        
        @media (min-width: 768px) {
        :host-context([typed='list']) {
                -ms-grid-rows: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr;
                -ms-grid-columns: auto;
                grid-template-columns: auto; } }
        
        @media (max-width: 767px) {
        :host-context([typed='list']) {
                -ms-grid-rows: auto;
                grid-template-rows: auto;
                -ms-grid-columns: 1fr 1fr 1fr;
                grid-template-columns: 1fr 1fr 1fr; } }
        
        :host-context([typed='card']) {
            -ms-grid-rows: auto;
            grid-template-rows: auto;
            -ms-grid-columns: 1fr 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr; }
    `;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html`<slot></slot>`;
      }
    }]
  };
}, LitElement);

let UcPlpItem = _decorate([customElement('uc-plp-item')], function (_initialize, _LitElement) {
  class UcPlpItem extends _LitElement {
    constructor() {
      super();

      _initialize(this);

      this.typed = 'list';
      this.dataProductId = '';
      window.addEventListener('plpChangeType', this.handleChangeTypeList);
      this.addEventListener('plpButtonClicked', this.handleButtonClick);
    }

  }

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

      value() {
        return css`
        :host {
            background-color: #ffffff;
            display: -ms-grid;
            display: grid;
            border: 1px solid #efeeee; }
        @media (max-width: 767px) {
        :host {
                height: 21.42857em;
                -ms-grid-columns: 1.42857em 1fr 1.42857em 1fr 1.42857em;
                grid-template-columns: 1.42857em 1fr 1.42857em 1fr 1.42857em;
                -ms-grid-rows: 1.07143em 0.35714em 4.78571em 0.35714em 1.71429em 0.35714em 3.57143em 0.35714em 1fr 0.35714em 3.64286em;
                grid-template-rows: 1.07143em 4.78571em 1.71429em 3.57143em 1fr 3.64286em;
                grid-row-gap: 0.35714em;
                grid-template-areas: ".       .           .           .           ." ".       img         .           title       ." ".       img         .           rating      ." ".       img         .           prices      ." ".       description description description ." "buttons buttons     buttons     buttons     buttons"; } }
        
        :host([typed='list']) {
            width: 100%; }
        @media (min-width: 768px) {
        :host([typed='list']) {
                -ms-grid-rows: 5px 5px 38px 5px 19px 5px 1fr 5px 52px 5px 10px;
                grid-template-rows: 5px 38px 19px 1fr 52px 10px;
                grid-row-gap: 5px;
                grid-template-areas: "img .           .           buttons" "img title       title       buttons" "img rating      .           buttons" "img description description buttons" "img prices      .           buttons" "img .           .           buttons"; } }
        @media (min-width: 1200px) {
        :host([typed='list']) {
                height: 193px;
                -ms-grid-columns: 194px 1fr 1fr 191px;
                grid-template-columns: 194px 1fr 1fr 191px;
                grid-column-gap: 20px; } }
        @media (max-width: 1199px) and (min-width: 992px) {
        :host([typed='list']) {
                height: 193px;
                -ms-grid-columns: 180px 1fr 1fr 130px;
                grid-template-columns: 180px 1fr 1fr 130px;
                grid-column-gap: 10px; } }
        @media (max-width: 991px) and (min-width: 768px) {
        :host([typed='list']) {
                height: 191px;
                -ms-grid-columns: 152px 1fr 1fr 58px;
                grid-template-columns: 152px 1fr 1fr 58px;
                grid-column-gap: 10px; } }
        
        :host([typed='card']) {
            width: 100%; }
        @media (min-width: 1200px) {
        :host([typed='card']) {
                height: 520px;
                -ms-grid-rows: 7px 236px 64px 20px 1fr 37px 62px;
                grid-template-rows: 7px 236px 64px 20px 1fr 37px 62px; } }
        @media (max-width: 1199px) and (min-width: 992px) {
        :host([typed='card']) {
                height: 532px;
                -ms-grid-rows: 7px 236px 64px 20px 1fr 55px 62px;
                grid-template-rows: 7px 236px 64px 20px 1fr 55px 62px; } }
        @media (max-width: 991px) and (min-width: 768px) {
        :host([typed='card']) {
                height: 532px;
                -ms-grid-rows: 7px 236px 64px 20px 1fr 55px 62px;
                grid-template-rows: 7px 236px 64px 20px 1fr 55px 62px; } }
        @media (min-width: 768px) {
        :host([typed='card']) {
                -ms-grid-columns: 10px 1fr 10px;
                grid-template-columns: 10px 1fr 10px;
                grid-row-gap: 5px;
                -ms-grid-rows: auto 5px auto 5px auto 5px auto 5px auto 5px auto 5px auto;
                grid-template-areas: ".       .           ." ".       img         ." ".       title       ." ".       rating      ." ".       description ." ".       prices      ." "buttons buttons     buttons"; } }
        @media (min-width: 1200px) {
        :host([typed='card']) ::slotted(uc-plp-item-prices) {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-pack: distribute;
                justify-content: space-around;
                -webkit-box-align: baseline;
                -ms-flex-align: baseline;
                align-items: baseline; } }
        
        ::slotted(.plp-item-img) {
            grid-area: img;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center; }
        
        ::slotted(uc-plp-item-title) {
            grid-area: title;
            -ms-grid-row-align: end;
            align-self: end; }
        
        ::slotted(uc-plp-item-rating) {
            grid-area: rating;
            -ms-grid-row-align: center;
            align-self: center; }
        
        ::slotted(uc-plp-item-description) {
            grid-area: description; }
        
        ::slotted(uc-plp-item-prices) {
            grid-area: prices; }
        
        ::slotted(uc-plp-item-buttons) {
            grid-area: buttons; }
    `;
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
        let event = new CustomEvent(data.eventAction === 'add' ? 'comparisonAddItem' : 'comparisonRemoveItem', {
          detail: this.dataProductId
        });
        this.dispatchEvent(event);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html`
            <slot></slot>
        `;
      }
    }]
  };
}, LitElement);
//# sourceMappingURL=chunk-e756673e.js.map
