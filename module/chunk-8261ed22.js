import { a as _decorate, b as customElement, d as css, i as unsafeCSS, e as html, f as LitElement } from './chunk-96426fcb.js';

var css$1 = ":host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n\n::slotted(*) {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%; }\n";

var css$2 = ":host {\n    color: transparent;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    position: relative;\n    display: block;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain; }\n@media (min-width: 768px) {\n    :host {\n        max-width: 180px;\n        height: 43px; } }\n@media (max-width: 767px) {\n    :host {\n        max-width: 10.35714em;\n        height: 3.07143em; } }\n\n:host([android]) {\n    background-image: url(\"https://res.cloudinary.com/lmru/image/upload/index/google.svg\"); }\n\n:host([ios]) {\n    background-image: url(\"https://res.cloudinary.com/lmru/image/upload/index/appstore.svg\"); }\n\n::slotted(*:not(a)) {\n    display: none; }\n\n::slotted(a) {\n    display: block;\n    color: transparent;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    position: absolute;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%; }\n";

let UcFooterAppMobile = _decorate([customElement('uc-footer-app-mobile')], function (_initialize, _LitElement) {
  class UcFooterAppMobile extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: UcFooterAppMobile,
    d: [{
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return css`${unsafeCSS(css$2)}`;
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

let UcFooterApps = _decorate([customElement('uc-footer-apps')], function (_initialize, _LitElement) {
  class UcFooterApps extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: UcFooterApps,
    d: [{
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return css`${unsafeCSS(css$1)}`;
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
//# sourceMappingURL=chunk-8261ed22.js.map
