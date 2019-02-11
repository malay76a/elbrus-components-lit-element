import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-current-filter-group.css';
import '../../atoms/uc-current-filter-item/uc-current-filter-item';

@customElement('uc-current-filter-group')
class UcCurrentFilterGroup extends LitElement{
    static get properties() {
        return {
            title: { type: String },
            facetId: {type: String }
        };
    }

    static styles = css`${unsafeCSS(style)}`;

    render() {
        return html`
            ${this.title ? html`<h2>${this.title}</h2>` : html``}
            <slot></slot>
        `;
    }
}