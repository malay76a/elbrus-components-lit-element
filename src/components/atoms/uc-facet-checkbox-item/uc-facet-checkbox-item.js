import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-facet-checkbox-item.css';
import uniqid from '../../../utils/uniqid';

@customElement('uc-facet-checkbox-item')
class UcCurrentFilter extends LitElement {
    static get properties() {
        return {
            label: { type: String },
            count: { type: String },
            checked: { type: Boolean },
            disabled: { type: Boolean }
        };
    }

    static styles = css`${unsafeCSS(style)}`;

    constructor() {
        super();
        this.id = uniqid();
    }

    render() {
        return html`
            <div class="checkbox-container">
                <input type="checkbox" id="${this.id}" ?checked="${this.checked}" ?disabled="${this.disabled}"/>
                <label for="${this.id}">
                    <span class="text">
                        ${this.label} <span class="counter">(${this.count})</span>
                    </span>
                </label>
            </div>
        `;
    }
}
