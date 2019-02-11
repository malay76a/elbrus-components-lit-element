import {LitElement, html, css, customElement} from 'lit-element';
import {isXs} from '../../../utils/response-query';
import '../../molecules/uc-plp-chenge-typed/uc-plp-chenge-typed';

@customElement('uc-plp-wrapper')
class UcPlpWrapper extends LitElement {
    static get properties() {
        return {
            sorted: { type: Boolean },
            showed: { type: Boolean },
            typed: { type: Boolean }
        };
    }

    static styles = css`
        .option {
            margin-bottom: 10px; }
    `;

    constructor() {
        super();
        this.sorted = false;
        this.showed = false;
        this.typed = false;
    }

    render() {
        return html`
            ${this.sorted || this.showed || this.typed ? html`
                <div class="option">
                    ${this.typed && !isXs() ? html`
                        <uc-plp-chenge-typed></uc-plp-chenge-typed>
                    ` : html``}
                </div>
            ` : html``}
            <slot></slot>
        `;
    }
}