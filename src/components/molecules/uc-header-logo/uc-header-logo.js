import {LitElement, html, css, customElement} from 'lit-element';
import '../../atoms/uc-header-logo-img/uc-header-logo-img';

@customElement('uc-header-logo')
class UcHeaderLogo extends LitElement {
    static styles = css`
        :host {
            display: block;
        }
        
        ::slotted(a) {
            display: block;
            height: 100%;
            width: 100%;
        }
    `;

    render() {
        return html`
            <slot></slot>
        `;
    }
}