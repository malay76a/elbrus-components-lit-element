import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-footer-menu.css';
import '../../molecules/uc-footer-menu-toggle/uc-footer-menu-toggle';

@customElement('uc-footer-menu')
class UcFooterMenu extends LitElement {
    static styles = css`${unsafeCSS(style)}`;

    render() {
        return html`<slot></slot>`
    }
}