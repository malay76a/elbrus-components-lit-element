import { a as _decorate, b as customElement, d as css, e as html, f as LitElement } from './chunk-96426fcb.js';

let UcSeoBlock = _decorate([customElement('uc-seo-block')], function (_initialize, _LitElement) {
  class UcSeoBlock extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: UcSeoBlock,
    d: [{
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return css`
        :host {
            display: block;
            width: 100%;
            background-color: #fff; }
        @media (min-width: 768px) {
        :host {
                padding: 30px;
                margin-top: 30px; } }
        @media (max-width: 767px) {
        :host {
                padding: 2.14286em;
                margin-top: 2.14286em; } }
        
        ::slotted(h2) {
            margin-top: 0;
            color: #666; }
        @media (min-width: 768px) {
            ::slotted(h2) {
                font-size: 16px; } }
        @media (max-width: 767px) {
            ::slotted(h2) {
                font-size: 1.14286em; } }
        
        ::slotted(p) {
            color: #666;
            margin: 0; }
        @media (min-width: 768px) {
            ::slotted(p) {
                font-size: 12px;
                line-height: 20px; } }
        @media (max-width: 767px) {
            ::slotted(p) {
                font-size: 0.85714em;
                line-height: 1.66667em; } }
    `;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html`
            <div>
                <slot></slot>
            </div>
        `;
      }
    }]
  };
}, LitElement);
//# sourceMappingURL=chunk-dc05eb28.js.map
