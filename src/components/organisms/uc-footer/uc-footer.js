import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-footer.css';

@customElement('uc-footer')
class UcFooter extends LitElement {
    static styles = css`${unsafeCSS(style)}`;

    render() {
        return html`<slot></slot>`
    }
}