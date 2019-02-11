import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-facet-checkbox-group.css';
import '../../atoms/uc-facet-checkbox-item/uc-facet-checkbox-item';

@customElement('uc-facet-checkbox-group')
class UcCurrentFilter extends LitElement {
    static get properties() {
        return {
            facetId: { type: String }
        };
    }

    static styles = css`${unsafeCSS(style)}`;

    render() {
        return html`<slot></slot>`;
    }
}