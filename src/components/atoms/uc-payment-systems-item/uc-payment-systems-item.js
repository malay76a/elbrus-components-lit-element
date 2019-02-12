import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-payment-systems-item.css';

@customElement('uc-payment-systems-item')
class UcPaymentSystemsItem extends LitElement {
    static styles = css`${unsafeCSS(style)}`;

    render() {
        return html`<div></div>`;
    }
}