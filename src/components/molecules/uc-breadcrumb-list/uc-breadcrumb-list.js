import {LitElement, html, css, customElement} from 'lit-element';
import '../../atoms/uc-breadcrumb-item/uc-breadcrumb-item';

@customElement('uc-breadcrumb-list')
class UcBreadcrumbList extends LitElement {
    static styles = css`
        :host {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap; }
        @media (min-width: 1200px) {
        :host {
                margin-bottom: 26px; } }
        @media (max-width: 1199px) and (min-width: 992px) {
        :host {
                margin-bottom: 30px; } }
        @media (max-width: 991px) and (min-width: 768px) {
        :host {
                margin-bottom: 20px; } }
        @media (min-width: 768px) {
        :host {
                margin-top: 32px; } }
        @media (max-width: 767px) {
        :host {
                margin-top: 0.78571em;
                margin-bottom: 1.5em; } }
        
        @media (min-width: 768px) {
            ::slotted(uc-breadcrumb-item) {
                margin-right: 2px; } }
        
        @media (max-width: 767px) {
            ::slotted(uc-breadcrumb-item) {
                margin-right: 0.14286em;
                margin-bottom: 0.28571em; } }
    `;

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        // дичь, так нельзя делать
        const firstElement = this.querySelector('uc-breadcrumb-item');
        firstElement.setAttribute('icon', 'house');
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
}