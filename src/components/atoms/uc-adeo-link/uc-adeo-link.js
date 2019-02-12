import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-adeo-link.css';

@customElement('uc-adeo-link')
class UcAdeoLink extends LitElement {
    static styles = css`${unsafeCSS(style)}`;

    render() {
        return html`<slot></slot>`
    }
}