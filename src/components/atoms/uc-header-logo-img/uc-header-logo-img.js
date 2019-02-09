import {LitElement, html, css, customElement} from 'lit-element';

@customElement('uc-header-logo-img')
class UcHeaderLogoImg extends LitElement {
    static styles = css`
        :host {
            width: 100%;
            height: 100%;
            display: block;
        }
        
        ::slotted(img) {
            height: calc(100% + 16px);
            margin-top: -8px;
            margin-bottom: -8px;
        }
    `;

    render() {
        return html`
            <slot></slot>
        `;
    }
}