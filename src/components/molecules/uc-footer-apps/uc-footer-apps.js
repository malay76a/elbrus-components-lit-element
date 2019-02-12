import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-footer-apps.css';
import '../../atoms/uc-footer-app-mobile/uc-footer-app-mobile';

@customElement('uc-footer-apps')
class UcFooterApps extends LitElement {
    static styles = css`${unsafeCSS(style)}`;

    render() {
        return html`<slot></slot>`
    }
}