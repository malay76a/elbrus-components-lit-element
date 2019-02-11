import {LitElement, html, customElement} from 'lit-element';
import '../../atoms/uc-plp-item-price/uc-plp-item-price';

@customElement('uc-plp-item-prices')
class UcPlpItemPrices extends LitElement {
    render() {
        return html`<slot></slot>`;
    }
}