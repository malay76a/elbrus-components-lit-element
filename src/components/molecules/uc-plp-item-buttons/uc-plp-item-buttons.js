import {LitElement, html, css, customElement} from 'lit-element';
import '../../atoms/uc-plp-button/uc-plp-button';

@customElement('uc-plp-item-buttons')
class UcPlpItemButtons extends LitElement {
    static styles = css`
        :host {
            display: -ms-grid;
            display: grid; }
        
        @media (min-width: 768px) {
        :host-context([typed='list']) {
                -ms-grid-rows: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr;
                -ms-grid-columns: auto;
                grid-template-columns: auto; } }
        
        @media (max-width: 767px) {
        :host-context([typed='list']) {
                -ms-grid-rows: auto;
                grid-template-rows: auto;
                -ms-grid-columns: 1fr 1fr 1fr;
                grid-template-columns: 1fr 1fr 1fr; } }
        
        :host-context([typed='card']) {
            -ms-grid-rows: auto;
            grid-template-rows: auto;
            -ms-grid-columns: 1fr 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr; }
    `;

    render() {
        return html`<slot></slot>`;
    }
}