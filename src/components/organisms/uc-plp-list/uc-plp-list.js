import {LitElement, html, css, customElement} from 'lit-element';

@customElement('uc-plp-list')
class UcPlpList extends LitElement {
    static get properties() {
        return {
            typed: {
                type: String,
                reflect: true
            }
        };
    }

    static styles = css`
        :host {
            display: -ms-grid;
            display: grid;
            width: 100%; }
        @media (max-width: 767px) {
        :host {
                grid-row-gap: 0.71429em;
                -ms-grid-columns: 1fr;
                grid-template-columns: 1fr; } }
        
        @media (min-width: 768px) {
        :host([typed='list']),
        :host(:not([typed='card'])) {
                grid-row-gap: 10px;
                -ms-grid-columns: 1fr;
                grid-template-columns: 1fr; } }
        
        @media (min-width: 768px) {
        :host([typed='card']) {
                -ms-grid-columns: (1fr)[3];
                grid-template-columns: repeat(3, 1fr);
                grid-row-gap: 20px;
                grid-column-gap: 20px; } }
    `;

    constructor() {
        super();
        this.typed = 'list';

        window.addEventListener('plpChangeType', this.handleChangeTypeList);
    }

    handleChangeTypeList(event) {
        this.typed = event.detail;
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
}