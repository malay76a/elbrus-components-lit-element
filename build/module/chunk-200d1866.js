import { a as _decorate, b as customElement, d as css, e as html, f as LitElement } from './chunk-96426fcb.js';

let UcPlpList = _decorate([customElement('uc-plp-list')], function (_initialize, _LitElement) {
  class UcPlpList extends _LitElement {
    constructor() {
      super();

      _initialize(this);

      this.typed = 'list';
      window.addEventListener('plpChangeType', this.handleChangeTypeList);
    }

  }

  return {
    F: UcPlpList,
    d: [{
      kind: "get",
      static: true,
      key: "properties",
      value: function properties() {
        return {
          typed: {
            type: String,
            reflect: true
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
            display: -ms-grid;
            display: grid;
            width: 100%; }
        @media (max-width: 767px) {
        :host {
                grid-row-gap: 0.71429em;
                -ms-grid-columns: 1fr;
                grid-template-columns: 1fr; } }
        
        @media (min-width: 768px) {
        :host([typed='list']),
        :host(:not([typed='card'])) {
                grid-row-gap: 10px;
                -ms-grid-columns: 1fr;
                grid-template-columns: 1fr; } }
        
        @media (min-width: 768px) {
        :host([typed='card']) {
                -ms-grid-columns: (1fr)[3];
                grid-template-columns: repeat(3, 1fr);
                grid-row-gap: 20px;
                grid-column-gap: 20px; } }
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
//# sourceMappingURL=chunk-200d1866.js.map
