import {LitElement, html, css, customElement, property} from 'lit-element';

@customElement('uc-header-list-popup')
class UcHeaderListPopup extends LitElement {
    @property({type: String}) dataType = '';
    @property({type: Array}) dataList = [];

    static styles = css`
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

    render() {
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
}