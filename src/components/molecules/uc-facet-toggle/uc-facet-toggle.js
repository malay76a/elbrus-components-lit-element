import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-facet-toggle.css';
import '../../atoms/uc-facet-slider/uc-facet-slider';

@customElement('uc-facet-toggle')
class UcFacetToggle extends LitElement {
    static get properties() {
        return {
            closed: { type: Boolean, reflect: true },
            titleFacet: { type: String }
        };
    }

    static styles = css`${unsafeCSS(style)}`;

    toggle() {
        this.closed = !this.closed;
    }

    constructor() {
        super();
        this.closed = false;
    }

    render() {
        return html`
            ${this.titleFacet ? html`<h2>${this.titleFacet}</h2>` : html``}
            <div class="toggler" @click="${this.toggle}"></div>
            ${!this.closed ? html`<slot></slot>` : html``}
        `;
    }
}