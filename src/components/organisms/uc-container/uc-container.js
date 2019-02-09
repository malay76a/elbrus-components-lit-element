import {LitElement, html, css, customElement} from 'lit-element';

@customElement('uc-container')
class UcContainer extends LitElement {
    static styles = css`
        :host {
            display: block;
            margin-left: auto;
            margin-right: auto; 
        }
        @media (min-width: 1200px) {
            :host {
                width: 1200px; 
            } 
        }
        @media (max-width: 1199px) and (min-width: 992px) {
            :host {
                width: 972px; 
            } 
        }
        @media (max-width: 991px) and (min-width: 768px) {
            :host {
                width: 768px; 
            } 
        }
        @media (max-width: 767px) {
            :host {
                padding-left: 0.71429em;
                padding-right: 0.71429em;
                width: 100%; 
            } 
        }
    `;

    render() {
        return html`
            <slot></slot>
        `;
    }
}