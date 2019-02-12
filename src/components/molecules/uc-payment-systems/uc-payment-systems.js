import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-payment-systems.css';
import '../../atoms/uc-payment-systems-item/uc-payment-systems-item';

@customElement('uc-payment-systems')
class UcPaymentSystems extends LitElement {
    static styles = css`${unsafeCSS(style)}`;

    render() {
        return html`
            Мы принимаем:
            <uc-payment-systems-item system="mir"></uc-payment-systems-item>
            <uc-payment-systems-item system="visa"></uc-payment-systems-item>
            <uc-payment-systems-item system="mastercard"></uc-payment-systems-item>
        `
    }
}