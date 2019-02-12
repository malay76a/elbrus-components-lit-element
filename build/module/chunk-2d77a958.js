import { a as _decorate, b as customElement, d as css, i as unsafeCSS, e as html, f as LitElement } from './chunk-96426fcb.js';

var css$1 = ":host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n@media (min-width: 768px) {\n    :host {\n        margin-top: 40px;\n        margin-bottom: 40px; } }\n@media (max-width: 1199px) {\n    :host {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column; } }\n@media (max-width: 767px) {\n    :host {\n        margin-bottom: 2.14286em; } }\n\n@media (min-width: 1200px) {\n    ::slotted(uc-footer-menu) {\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 70%;\n        flex: 1 1 70%; } }\n\n@media (max-width: 1199px) and (min-width: 992px) {\n    ::slotted(uc-footer-menu) {\n        margin-bottom: 46px; } }\n\n@media (max-width: 991px) and (min-width: 768px) {\n    ::slotted(uc-footer-menu) {\n        margin-bottom: 44px; } }\n\n@media (max-width: 767px) {\n    ::slotted(uc-footer-menu) {\n        margin-bottom: 18px; } }\n\n@media (min-width: 1200px) {\n    ::slotted(uc-footer-link-block) {\n        -webkit-box-flex: 1;\n        -ms-flex: 1 1 30%;\n        flex: 1 1 30%; } }\n";

let UcFooter = _decorate([customElement('uc-footer')], function (_initialize, _LitElement) {
  class UcFooter extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: UcFooter,
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
//# sourceMappingURL=chunk-2d77a958.js.map
