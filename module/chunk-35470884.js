import { a as _decorate, b as customElement, d as css, i as unsafeCSS, e as html, f as LitElement } from './chunk-96426fcb.js';
import { a as isMobile } from './chunk-bb8482fa.js';

var css$1 = "@media (min-width: 992px) {\n    :host {\n        display: flex;\n        flex-direction: column; } }\n\n@media (max-width: 991px) {\n    :host {\n        position: fixed;\n        top: 0;\n        left: 0;\n        background-color: #f1f1f1;\n        width: 100vw;\n        height: 100vh;\n        overflow: auto;\n        transition: transform .3s ease-in-out;\n        transform: translate3d(-100vw, 0, 0);\n        z-index: 10; } }\n\n@media (min-width: 992px) {\n    ::slotted(*) {\n        margin-bottom: 10px; } }\n\n@media (max-width: 991px) {\n    .grid {\n        display: grid;\n        grid-row-gap: 0.71429em; } }\n\n@media (max-width: 991px) {\n    :host([show]) {\n        transform: translate3d(0, 0, 0); } }\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1em 0.78571em;\n    background-color: #fff; }\n\n.filter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    color: #333333;\n    text-transform: uppercase; }\n@media (min-width: 768px) {\n    .filter {\n        font-size: 13px; } }\n@media (max-width: 767px) {\n    .filter {\n        font-size: 0.92857em; } }\n.filter::before {\n    content: '';\n    display: block;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4gICAgPHBhdGggZmlsbD0iIzY2QzA1RCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMy42MjIgMS43NUw4IDYuOXY2LjEyNmwyIDEuNDg0VjYuOWw0LjM3OC01LjE1SDMuNjIyek0uMzc4LjI1aDE3LjI0NEwxMS41IDcuNDUyVjE3LjQ5bC01LTMuNzFWNy40NTNMLjM3OC4yNXoiLz48L3N2Zz4=); }\n@media (min-width: 768px) {\n    .filter::before {\n        width: 17px;\n        height: 17px;\n        margin-right: 8px; } }\n@media (max-width: 767px) {\n    .filter::before {\n        width: 1.30769em;\n        height: 1.30769em;\n        margin-right: 0.61538em; } }\n\n.close {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.85714em;\n    color: #2e2e2e;\n    cursor: pointer; }\n.close::before {\n    content: '';\n    display: block;\n    width: 1em;\n    height: 1em;\n    margin-right: 0.66667em;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIj4gICAgPHBhdGggZmlsbD0iIzJFMkUyRSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNy4wNjEgNmw0LjcyLTQuNzE5QS43NS43NSAwIDEgMCAxMC43MTguMjJMNiA0LjkzOSAxLjI4MS4yMTlBLjc1Ljc1IDAgMSAwIC4yMiAxLjI4Mmw0LjcxOSA0LjcyLTQuNzIgNC43MThhLjc1Ljc1IDAgMSAwIDEuMDYyIDEuMDYxbDQuNzItNC43MTkgNC43MTggNC43MmEuNzQ4Ljc0OCAwIDAgMCAxLjA2MSAwIC43NS43NSAwIDAgMCAwLTEuMDYyTDcuMDYxIDZ6Ii8+PC9zdmc+);\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat; }\n";

let UcFacetsList = _decorate([customElement('uc-facets-list')], function (_initialize, _LitElement) {
  class UcFacetsList extends _LitElement {
    constructor() {
      super();

      _initialize(this);

      this.show = false;
      document.addEventListener('filterShow', this.filterShow.bind(this));
    }

  }

  return {
    F: UcFacetsList,
    d: [{
      kind: "get",
      static: true,
      key: "properties",
      value: function properties() {
        return {
          show: {
            type: Boolean,
            reflect: true
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
      key: "filterShow",
      value: function filterShow() {
        this.chengeVisibiliti();
      }
    }, {
      kind: "method",
      key: "chengeVisibiliti",
      value: function chengeVisibiliti() {
        this.show = !this.show;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return !isMobile() ? html`<slot></slot>` : html`
            <div class="header">
                <div class="filter">Фильтр</div>
                <div class="close" @click="${this.chengeVisibiliti}">Закрыть</div>
            </div>
            <div class="grid">
                <slot></slot>
            </div>
        `;
      }
    }]
  };
}, LitElement);
//# sourceMappingURL=chunk-35470884.js.map
