import {LitElement, html, css, customElement,unsafeCSS} from 'lit-element';
import uniqid from '../../../utils/uniqid';
import style from './uc-plp-button.css';

@customElement('uc-plp-button')
class UcPlpButton extends LitElement {
    static get properties() {
        return {
            typeButton: { type: String },
            checked: { type: Boolean, reflect: true },
            buttonId: { type: String },
            type: { type: String }
        };
    }

    static styles = css`${unsafeCSS(style)}`;

    constructor() {
        super();
        this.checked = false;
        this.buttonId = uniqid("styled-checkbox-");
        this.type = {
            'compare': {
                'false': 'Сравнить',
                'true': 'В сравнении'
            },
            'shoping-list': {
                'false': 'В список',
                'true': 'Добавлено'
            },
            'buy': {
                'false': 'В корзину',
                'true': 'Добавлено'
            }
        };
    }

    changeChecked() {
        if(this.typeButton === 'compare') {
            this.checked = !this.checked;
        } else {
            this.checked = true;
        }
    }

    buttonClickedHandler(e, type) {
        e.preventDefault();
        const data = {
            'eventAction': !this.checked ? 'add' : 'remove',
            'buttonType': type
        };
        if(type === 'compare' || !this.checked) {
            let event = new CustomEvent('plpButtonClicked', {
                detail: data
            });
            this.dispatchEvent(event);
        }
        this.changeChecked();
    }

    render() {
        const label = this.type[this.typeButton][this.checked];

        return html`
            <span class="hidden"><slot></slot></span>
            <input class="styled-checkbox" id="${this.buttonId}" type="checkbox" ?checked="${this.checked}" @click="${(e)=>this.buttonClickedHandler(e,this.typeButton)}"/>
            <label for="${this.buttonId}">
                <span class="text">${label}</span>
                <span class="icon-check"></span>
            </label>
        `;
    }
}