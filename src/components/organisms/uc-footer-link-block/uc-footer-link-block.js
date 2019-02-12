import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-footer-link-block.css';
import '../../atoms/uc-footer-social-links/uc-footer-social-links';
import '../../atoms/uc-footer-subscribe/uc-footer-subscribe';

@customElement('uc-footer-link-block')
class UcFooterLinkBlock extends LitElement {
    static styles = css`${unsafeCSS(style)}`;

    render() {
        return html`<slot></slot>`
    }
}