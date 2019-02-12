import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-footer-app-mobile.css';

@customElement('uc-footer-app-mobile')
class UcFooterAppMobile extends LitElement {
    static styles = css`${unsafeCSS(style)}`;

    render() {
        return html`<slot></slot>`
    }
}