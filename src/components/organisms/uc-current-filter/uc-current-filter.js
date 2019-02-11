import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-current-filter.css';
import '../../molecules/uc-current-filter-group/uc-current-filter-group';

@customElement('uc-current-filter')
class UcCurrentFilter extends LitElement {
    static get properties() {
        return {
            count: { type: String, reflect: true },
            resetButton: {type: Boolean}
        };
    }

    static styles = css`${unsafeCSS(style)}`;

    constructor() {
        super();
        this.count = '0';
        this.resetButton = false;
    }

    render() {
        return html`
            <h2>Ваш выбор:</h2>
            <div>Найдено ${this.count} товаров</div>
            <slot />
            ${this.resetButton ? html`<button>Сбросить все фильтры</button>` : html``}
        `;
    }
}