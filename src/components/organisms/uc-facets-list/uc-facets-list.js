import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import {isMobile} from '../../../utils/response-query';
import style from './uc-facets-list.css';

@customElement('uc-facets-list')
class UcFacetsList extends LitElement {
    static get properties() {
        return {
            show: { type: Boolean, reflect: true }
        };
    }

    static styles = css`${unsafeCSS(style)}`;

    filterShow() {
        this.chengeVisibiliti();
    }

    chengeVisibiliti() {
        this.show = !this.show;
    }

    constructor() {
        super();
        this.show = false;
        document.addEventListener('filterShow', this.filterShow.bind(this));
    }

    render() {
        return !isMobile() ? html`<slot></slot>` : html`
            <div class="header">
                <div class="filter">Фильтр</div>
                <div class="close" @click="${this.chengeVisibiliti}">Закрыть</div>
            </div>
            <div class="grid">
                <slot></slot>
            </div>
        `;
    }
}