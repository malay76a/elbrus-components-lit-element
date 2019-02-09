import {html, LitElement, customElement, css} from 'lit-element'

@customElement('uc-nckd')
class UCNckd extends LitElement {
    static styles = css`
        :host {
            height: 40px;
            background-color: #fce300;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        ::slotted(a),
        a {
            font-size: 24px;
            color: #e5112f;
            letter-spacing: -1px;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: bold;
        }
    `;

    render() {
        return html`
            <slot></slot>
        `
    }
}