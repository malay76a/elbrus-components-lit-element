import {LitElement, html, css, customElement, unsafeCSS} from 'lit-element';
import style from './uc-facet-slider.css';
import 'nouislider';
import 'wnumb';
import uniqid from '../../../utils/uniqid';

@customElement('uc-facet-slider')
class UcFacetSlider extends LitElement {
    static get properties() {
        return {
            min: { type: String },
            max: { type: String },
            leftValue: { type: String },
            rightValue: { type: String },
            facetId: { type: String },
            step: { type: String }
        };
    }

    static styles = css`${unsafeCSS(style)}`;

    constructor() {
        super();
        this.id = uniqid();
        this.step = '10';
        this.slider = null;
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        this.slider = this.shadowRoot.querySelector(`#${this.id}`);
        const inputs = Array.from(this.shadowRoot.querySelectorAll('.input-field'));
        const resetButton = this.shadowRoot.querySelector('.reset');
        const min = Number(this.min);
        const max = Number(this.max);
        const leftValue = this.leftValue;
        const rightValue = this.rightValue;
        const step = Number(this.step);

        noUiSlider.create(this.slider, {
            start: [leftValue, rightValue],
            connect: true,
            behaviour: 'drag',
            step: step,
            range: {
                'min': min,
                'max': max
            },
            format: wNumb({
                decimals: 0
            })
        });

        this.slider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = values[handle];
        });

        inputs.forEach(function (input, handle) {
            input.addEventListener('change', function () {
                this.slider.noUiSlider.setHandle(handle, this.value);
            });
        });

        resetButton.addEventListener('click', function () {
            this.slider.noUiSlider.reset();
        })
    }

    render() {
        return html`
            <div id="${this.id}" class="slider"></div>
            <div class="input-fields">
                <input class="input-field" type="text"/>
                <div class="delimiter">—</div>
                <input class="input-field" type="text"/>
            </div>
            <div class="button-group">
                <div class="success">Применить</div>
                <div class="reset">Сбросить</div>
            </div>
        `;
    }
}