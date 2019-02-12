import {LitElement, html, css, customElement, unsafeCSS, property} from 'lit-element';
import style from './uc-footer-subscribe.css';
import {isXs} from '../../../utils/response-query';

@customElement('uc-footer-subscribe')
class UcFooterSubscribe extends LitElement {
    @property({type: String}) method = 'POST'; //GET
    @property({type: String}) action;

    static styles = css`${unsafeCSS(style)}`;

    render() {
        return html`
            <form method="${this.method}" action="${this.action}">
                ${isXs() ? html`` : html`
                    <input id="footer-subscrube-input" type="text" required placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Введите Ваш e-mail"/>
                    <label for="footer-subscrube-input"></label>
                `}
                <button type="submit">ПОДПИСАТЬСЯ НА&nbsp;РАССЫЛКУ</button>
            </form>
        `
    }
}