import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-footer-menu-toggle.css';
import '../../atoms/uc-footer-menu-item/uc-footer-menu-item';

@customElement('uc-footer-menu-toggle')
class UcFooterMenuToggle extends LitElement {
    static styles = css`${unsafeCSS(style)}`;

    render() {
        return html`<slot></slot>`
    }
}