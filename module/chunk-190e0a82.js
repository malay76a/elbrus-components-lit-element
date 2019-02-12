import { a as _decorate, b as customElement, d as css, g as _get, h as _getPrototypeOf, e as html, f as LitElement } from './chunk-96426fcb.js';
import { b as isXs } from './chunk-bb8482fa.js';

let UcPlpChengeTyped = _decorate([customElement('uc-plp-chenge-typed')], function (_initialize, _LitElement) {
  class UcPlpChengeTyped extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: UcPlpChengeTyped,
    d: [{
      kind: "get",
      static: true,
      key: "properties",
      value: function properties() {
        return {
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
        return css`
        :host {display: inline-block}
        .list[data-active] {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDE4IDEzIj4gICAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwaDE4djNIMFYwem0wIDVoMTh2M0gwVjV6bTAgNWgxOHYzSDB2LTN6Ii8+PC9zdmc+); }
        
        .list:not([data-active]) {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDE4IDEzIj4gICAgPHBhdGggZmlsbD0iIzY2QzA1RCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwaDE4djNIMFYwem0wIDVoMTh2M0gwVjV6bTAgNWgxOHYzSDB2LTN6Ii8+PC9zdmc+); }
        
        .card[data-active] {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4gICAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwaDh2OEgwVjB6bTEwIDBoOHY4aC04VjB6TTAgMTBoOHY4SDB2LTh6bTEwIDBoOHY4aC04di04eiIvPjwvc3ZnPg==); }
        
        .card:not([data-active]) {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4gICAgPHBhdGggZmlsbD0iIzY2QzA1RCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwaDh2OEgwVjB6bTEwIDBoOHY4aC04VjB6TTAgMTBoOHY4SDB2LTh6bTEwIDBoOHY4aC04di04eiIvPjwvc3ZnPg==); }
        
        .toggler {
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            border-radius: 2px;
            -webkit-box-shadow: inset 0 2px 3px 1px #ffffff;
            box-shadow: inset 0 2px 3px 1px #ffffff;
            border: 1px solid #d9d9d9;
            background-color: #fafafa; }
        .toggler div {
            width: 36px;
            height: 36px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 18px 18px;
            cursor: pointer; }
        .toggler div svg {
            fill: #66c05d; }
        .toggler div[data-active] {
            background-color: #66c05d; }
        .toggler div[data-active] svg {
            fill: #ffffff; }
    `;
      }

    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(_changedProperties) {
        _get(_getPrototypeOf(UcPlpChengeTyped.prototype), "firstUpdated", this).call(this, _changedProperties);

        this.changeTypeHandler(this.type);
      }
    }, {
      kind: "method",
      key: "changeType",
      value: function changeType(event) {
        event.stopPropagation();
        this.type = event.currentTarget.classList.item(0);
        this.changeTypeHandler(this.type);
      }
    }, {
      kind: "method",
      key: "changeTypeHandler",
      value: function changeTypeHandler(type) {
        let event = new CustomEvent('plpChangeType', {
          detail: type
        });
        this.dispatchEvent(event);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const isList = this.type === 'list';
        return html`
            <div class="toggler">
                <div class="list" 
                    ?data-active="${isList}" 
                    @click="${this.changeType}"></div>
                <div class="card" 
                    ?data-active="${!isList}" 
                    @click="${this.changeType.bind(this)}"></div>
            </div>
        `;
      }
    }]
  };
}, LitElement);

let UcPlpWrapper = _decorate([customElement('uc-plp-wrapper')], function (_initialize, _LitElement) {
  class UcPlpWrapper extends _LitElement {
    constructor() {
      super();

      _initialize(this);

      this.sorted = false;
      this.showed = false;
      this.typed = false;
    }

  }

  return {
    F: UcPlpWrapper,
    d: [{
      kind: "get",
      static: true,
      key: "properties",
      value: function properties() {
        return {
          sorted: {
            type: Boolean
          },
          showed: {
            type: Boolean
          },
          typed: {
            type: Boolean
          }
        };
      }
    }, {
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return css`
        .option {
            margin-bottom: 10px; }
    `;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html`
            ${this.sorted || this.showed || this.typed ? html`
                <div class="option">
                    ${this.typed && !isXs() ? html`
                        <uc-plp-chenge-typed></uc-plp-chenge-typed>
                    ` : html``}
                </div>
            ` : html``}
            <slot></slot>
        `;
      }
    }]
  };
}, LitElement);
//# sourceMappingURL=chunk-190e0a82.js.map
