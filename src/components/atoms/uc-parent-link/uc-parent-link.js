import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-parent-link.css';

@customElement('uc-parent-link')
class UcParentLink extends LitElement {
    static styles = css`${unsafeCSS(style)}`;

    render() {
        return html`<slot></slot>`
    }
}