import { a as _decorate, b as customElement, d as css, e as html, f as LitElement } from './chunk-96426fcb.js';

let UcContainer = _decorate([customElement('uc-container')], function (_initialize, _LitElement) {
  class UcContainer extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: UcContainer,
    d: [{
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return css`
        :host {
            display: block;
            margin-left: auto;
            margin-right: auto; 
        }
        @media (min-width: 1200px) {
            :host {
                width: 1200px; 
            } 
        }
        @media (max-width: 1199px) and (min-width: 992px) {
            :host {
                width: 972px; 
            } 
        }
        @media (max-width: 991px) and (min-width: 768px) {
            :host {
                width: 768px; 
            } 
        }
        @media (max-width: 767px) {
            :host {
                padding-left: 0.71429em;
                padding-right: 0.71429em;
                width: 100%; 
            } 
        }
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
//# sourceMappingURL=chunk-9e5cb087.js.map
