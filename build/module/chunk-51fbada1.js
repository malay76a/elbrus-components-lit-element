import { a as _decorate, b as customElement, d as css, e as html, f as LitElement } from './chunk-96426fcb.js';

let UCNckd = _decorate([customElement('uc-nckd')], function (_initialize, _LitElement) {
  class UCNckd extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: UCNckd,
    d: [{
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return css`
        :host {
            height: 40px;
            background-color: #fce300;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        ::slotted(a),
        a {
            font-size: 24px;
            color: #e5112f;
            letter-spacing: -1px;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: bold;
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
//# sourceMappingURL=chunk-51fbada1.js.map
