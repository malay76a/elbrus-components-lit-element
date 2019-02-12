import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-footer-menu.css';
import '../../molecules/uc-footer-menu-toggle/uc-footer-menu-toggle';
import '../../molecules/uc-payment-systems/uc-payment-systems';
import '../../atoms/uc-adeo-link/uc-adeo-link.js';
import '../../atoms/uc-parent-link/uc-parent-link.js';

@customElement('uc-footer-menu')
class UcFooterMenu extends LitElement {
    static styles = css`${unsafeCSS(style)}`;

    render() {
        return html`<slot></slot>`
    }
}