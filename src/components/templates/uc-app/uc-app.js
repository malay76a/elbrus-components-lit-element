import {html, property, LitElement, css, customElement} from 'lit-element';

@customElement('uc-app')
class UcApp extends LitElement {
    @property({type: Boolean}) comparePanel = false;

    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }
        
        ::slotted(uc-nckd) {
            order: -4;
        }
        
        ::slotted(uc-header-panel) {
            order: -3;
        }
        
        ::slotted(uc-header) {
            order: -2;
            position: sticky;
            top: 0;
            z-index: 10;
        }
        
        ::slotted(main) {
            order: -1;
        }
        
        ::slotted(footer) {
            order: 1;
        }
        
        @media (max-width: 991px) {
            ::slotted(uc-header-panel) {
                display: none;
            }
            ::slotted(uc-nckd) {
                display: none;
            }
        }
        
        @media (min-width: 768px) {
            ::slotted(footer) {
                border-top: 5px solid #66c05d;
                margin-top: 40px;
            }
        }
        
        @media (max-width: 767px) {
            ::slotted(footer) {
                border-top: calc((5px/14) * 1em) solid #66c05d;
                margin-top: 20px;
            }
        }
    `;

    render() {
        return html`
            <slot></slot>
            ${this.comparePanel ? html`<uc-compare-panel></uc-compare-panel>` : ''}
        `;
    }
}