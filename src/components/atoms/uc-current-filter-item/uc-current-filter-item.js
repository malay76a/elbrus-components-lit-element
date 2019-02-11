import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-current-filter-item.css';

@customElement('uc-current-filter-item')
class UcCurrentFilterItem extends LitElement {
    static get properties() {
        return {
            facetName: { type: String }
        };
    }

    static styles = css`${unsafeCSS(style)}`;

    render() {
        return html`
            <div></div>
            <p>${this.facetName}</p>
            <span></span>
        `;
    }
}