import { a as _decorate, b as customElement, c as property, d as css, f as LitElement, e as html } from './chunk-96426fcb.js';

let UcHeaderListPopup = _decorate([customElement('uc-header-list-popup')], function (_initialize, _LitElement) {
  class UcHeaderListPopup extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: UcHeaderListPopup,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "dataType",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Array
      })],
      key: "dataList",

      value() {
        return [];
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
            padding: 10px 20px;
            border: 1px solid #eee;
            background-color: #fff;
            width: 400px;
        }
        
        .header {
            font-weight: 700;
            font-size: 18px;
            text-align: center;
        }
        
        .text {
            margin-top: 12px;
            font-size: 14px;
            text-align: left;
            font-style: italic;
        }
    `;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        let content;

        if (this.dataList.length < 1) {
          switch (this.dataType) {
            case 'shop-list':
              content = html`
                        <div class="header">Список покупок пуст</div>
                        <div class="text">Просто добавьте сюда товары, распечатайте список и пользуйтесь им в магазине.</div>
                        <div class="text">Список покупок не является резервом заказа в Магазине!</div>
                    `;
              break;

            case 'buy-list':
              content = html`
                        <div class="header">Корзина пуста</div>
                        <div class="text">Просто добавьте сюда товары</div>
                    `;
              break;

            default:
              break;
          }
        }

        return content;
      }
    }]
  };
}, LitElement);
//# sourceMappingURL=chunk-e5954f7a.js.map
