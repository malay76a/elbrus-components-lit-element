import {LitElement, html, css, customElement} from 'lit-element';

@customElement('uc-plp-item-title')
class UcPlpItemTitle extends LitElement {
    static styles = css`
        :host {
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            width: 100%;
            max-height: 100%;
            position: relative; }
        
        ::slotted(*) {
            text-decoration: none;
            color: #333333; }
        @media (min-width: 1200px) {
            ::slotted(*) {
                font-size: 17px;
                line-height: 1.12; } }
        @media (max-width: 1199px) and (min-width: 992px) {
            ::slotted(*) {
                font-size: 17px;
                line-height: 1.12; } }
        @media (max-width: 991px) and (min-width: 768px) {
            ::slotted(*) {
                font-size: 14px;
                line-height: 1.36; } }
        @media (max-width: 767px) {
            ::slotted(*) {
                font-size: 0.85714em;
                line-height: normal; } }
    `;

    render() {
        return html`
            <slot></slot>
        `;
    }
}