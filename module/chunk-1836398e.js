import { a as _decorate, b as customElement, c as property, d as css, e as html, f as LitElement } from './chunk-96426fcb.js';

let UcApp = _decorate([customElement('uc-app')], function (_initialize, _LitElement) {
  class UcApp extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: UcApp,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean
      })],
      key: "comparePanel",

      value() {
        return false;
      }

    }, {
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return css`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }
        
        ::slotted(uc-nckd) {
            order: -4;
        }
        
        ::slotted(uc-header-panel) {
            order: -3;
        }
        
        ::slotted(uc-header) {
            order: -2;
            position: sticky;
            top: 0;
            z-index: 10;
        }
        
        ::slotted(main) {
            order: -1;
        }
        
        ::slotted(footer) {
            order: 1;
        }
        
        @media (max-width: 991px) {
            ::slotted(uc-header-panel) {
                display: none;
            }
            ::slotted(uc-nckd) {
                display: none;
            }
        }
        
        @media (min-width: 768px) {
            ::slotted(footer) {
                border-top: 5px solid #66c05d;
                margin-top: 40px;
            }
        }
        
        @media (max-width: 767px) {
            ::slotted(footer) {
                border-top: calc((5px/14) * 1em) solid #66c05d;
                margin-top: 20px;
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
            ${this.comparePanel ? html`<uc-compare-panel></uc-compare-panel>` : ''}
        `;
      }
    }]
  };
}, LitElement);
//# sourceMappingURL=chunk-1836398e.js.map
