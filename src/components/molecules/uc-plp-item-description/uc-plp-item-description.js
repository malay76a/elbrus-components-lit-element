import {LitElement, html, css, customElement, property} from 'lit-element';
import '../../atoms/uc-plp-item-description-item/uc-plp-item-description-item';

@customElement('uc-plp-item-description')
class UcPlpItemDescription extends LitElement {
    @property({type: String, reflect: true}) typed = 'list';

    static styles = css`
        :host {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            line-height: 1.5; }
        @media (max-width: 767px) {
        :host {
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column; } }
        
        @media (min-width: 768px) {
        :host([typed="list"]) {
                -ms-flex-wrap: wrap;
                flex-wrap: wrap; } }
        
        @media (min-width: 768px) {
        :host([typed="list"]) ::slotted(uc-plp-item-description-item) {
                -webkit-box-flex: 1;
                -ms-flex: 1 1 50%;
                flex: 1 1 50%; } }
        
        @media (min-width: 768px) {
        :host([typed="card"]) {
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column; } }
    `;

    handleChangeTypeList(event) {
        this.typed = event.detail;
    }

    constructor() {
        super();
        window.addEventListener('plpChangeType', this.handleChangeTypeList)
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
}