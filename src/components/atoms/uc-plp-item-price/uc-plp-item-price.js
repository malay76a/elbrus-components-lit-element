import {LitElement, html, css, customElement} from 'lit-element';

@customElement('uc-plp-item-price')
class UcPlpItemPrice extends LitElement{
    static get properties() {
        return {
            type: { type: String },
            content: { type: String },
            currency: { type: String }
        };
    }

    static styles = css`
        :host([type="main"]) {
            color: #333333; }
        @media (max-width: 767px) {
        :host([type="main"]) .first-part {
                font-size: 1.5em; } }
        @media (max-width: 767px) {
        :host([type="main"]) .second-part {
                font-size: 1.07143em; } }
        @media (max-width: 767px) {
        :host([type="main"]) .unit {
                font-size: 0.78571em; } }
        
        :host([type="second"]) {
            color: #727272; }
        @media (max-width: 767px) {
        :host([type="second"]) .first-part {
                font-size: 0.85714em; } }
        @media (max-width: 767px) {
        :host([type="second"]) .second-part {
                font-size: 0.85714em; } }
        @media (max-width: 767px) {
        :host([type="second"]) .unit {
                font-size: 0.92857em; } }
        
        .first-part {
            font-weight: bold; }
        
        .second-part {
            font-weight: bold; }
        
        .unit {
            margin-left: 5px; }
        @media (min-width: 768px) {
        .unit {
                font-size: 13px; } }
        
        @media (min-width: 768px) {
        :host([type="main"]) .first-part {
                font-size: 24px; }
        :host([type="main"]) .second-part {
                font-size: 18px; } }
        
        @media (min-width: 768px) {
        :host([type="second"]) .first-part {
                font-size: 14px; }
        :host([type="second"]) .second-part {
                font-size: 14px; } }
    `;

    constructor() {
        super();
        this.type = 'main';
    }

    render() {
        const [firstPart, secondPart] = this.content.split(',');
        return html`
            <div>
                <span class="first-part">${firstPart}</span>
                <span class="second-part">,${secondPart}</span>
                <span class="unit">${this.currency}</span>
            </div>
        `;
    }
}