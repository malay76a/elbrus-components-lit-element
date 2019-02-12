import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-footer-social-links.css';

@customElement('uc-footer-social-links')
class UcFooterSocialLinks extends LitElement {
    static styles = css`${unsafeCSS(style)}`;

    render() {
        return html`<slot></slot>`
    }
}