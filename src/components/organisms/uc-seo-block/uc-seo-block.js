import {LitElement, html, css, customElement} from 'lit-element';

@customElement('uc-seo-block')
class UcSeoBlock extends LitElement {
    static styles = css`
        :host {
            display: block;
            width: 100%;
            background-color: #fff; }
        @media (min-width: 768px) {
        :host {
                padding: 30px;
                margin-top: 30px; } }
        @media (max-width: 767px) {
        :host {
                padding: 2.14286em;
                margin-top: 2.14286em; } }
        
        ::slotted(h2) {
            margin-top: 0;
            color: #666; }
        @media (min-width: 768px) {
            ::slotted(h2) {
                font-size: 16px; } }
        @media (max-width: 767px) {
            ::slotted(h2) {
                font-size: 1.14286em; } }
        
        ::slotted(p) {
            color: #666;
            margin: 0; }
        @media (min-width: 768px) {
            ::slotted(p) {
                font-size: 12px;
                line-height: 20px; } }
        @media (max-width: 767px) {
            ::slotted(p) {
                font-size: 0.85714em;
                line-height: 1.66667em; } }
    `;

    render() {
        return html`
            <div>
                <slot></slot>
            </div>
        `;
    }
}