import {LitElement, html, css, customElement, property} from 'lit-element';

@customElement('uc-page-title')
class UcPageTitle extends LitElement {
    @property({type: String}) counter = '';

    static styles = css`
        :host {
            display: block; }
        @media (min-width: 1200px) {
        :host {
                margin-top: 26px;
                margin-bottom: 18px; } }
        @media (max-width: 1199px) and (min-width: 992px) {
        :host {
                margin-top: 30px;
                margin-bottom: 20px; } }
        @media (max-width: 991px) and (min-width: 768px) {
        :host {
                margin-top: 19px;
                margin-bottom: 22px; } }
        @media (max-width: 767px) {
        :host {
                margin-top: 21px;
                margin-bottom: 18px; } }
        
        ::slotted(h1),
            span {
            display: inline;
            margin: 0;
            font-weight: bold;
            color: #333333;
            text-transform: uppercase; }
        @media (min-width: 1200px) {
            ::slotted(h1),
                span {
                font-size: 36px; } }
        @media (max-width: 1199px) and (min-width: 992px) {
            ::slotted(h1),
                span {
                font-size: 32px; } }
        @media (max-width: 991px) and (min-width: 768px) {
            ::slotted(h1),
                span {
                font-size: 25px; } }
        @media (max-width: 767px) {
            ::slotted(h1),
                span {
                font-size: 1.28571em; } }
    `;

    render() {
        return html`
            <slot></slot>
            ${this.counter ? html`<span>(${this.counter})</span>` : html``}
        `;
    }
}