import {LitElement, html, css, customElement} from 'lit-element';

@customElement('uc-plp-item-description-item')
class UcPlpItemDescriptionItem extends LitElement {
    static styles = css`
        ::slotted(.key) {
            color: #727272; }
        @media (min-width: 768px) {
            ::slotted(.key) {
                font-size: 12px; } }
        @media (max-width: 767px) {
            ::slotted(.key) {
                font-size: 0.78571em; } }
        ::slotted(.key)::after {
            content: ':'; }
        
        ::slotted(.value) {
            font-size: 12px;
            color: #4a4a4a; }
        @media (min-width: 768px) {
            ::slotted(.value) {
                font-size: 12px; } }
        @media (max-width: 767px) {
            ::slotted(.value) {
                font-size: 0.78571em; } }
    `;

    render() {
        return html`<slot></slot>`;
    }
}