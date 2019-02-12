import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-footer-menu-item.css';

@customElement('uc-footer-menu-item')
class UcFooterMenuItem extends LitElement {
    static styles = css`${unsafeCSS(style)}`;

    render() {
        return html`<slot></slot>`
    }
}