import {LitElement, html, css, customElement} from 'lit-element';

@customElement('uc-plp-item-img')
class UcPlpItemImg extends LitElement {
    static styles = css`
        :host {
            padding: 5px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            max-width: 100%;
            max-height: 100%; }
        
        @media (min-width: 1200px) {
        :host-context([typed="card"]) {
                padding: 30px; } }
        
        ::slotted(img) {
            max-width: 100%;
            max-height: 100%; }
    `;

    render() {
        return html`
            <slot></slot>
        `;
    }
}