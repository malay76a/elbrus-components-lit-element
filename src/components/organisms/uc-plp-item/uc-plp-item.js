import {LitElement, html, css, customElement} from 'lit-element';
import { addData } from '../../../layers/ga';
import { getElemPos } from "../../../utils/utils";
import '../../atoms/uc-plp-item-img/uc-plp-item-img';

@customElement('uc-plp-item')
class UcPlpItem extends LitElement{
    static get properties() {
        return {
            typed: {
                type: String,
                reflect: true
            },
            dataProductId: { type: String },
            dataProductName: { type: String },
            dataProductPrice: { type: String },
            dataProductLocation: { type: String },
            dataDivision: { type: String },
            dataSubDivision: { type: String },
            dataCategory: { type: String },
            dataCategoryId: { type: String },
            dataProductCategoryId: { type: String },
            dataPosition: { type: Number }
        };
    }

    static styles = css`
        :host {
            background-color: #ffffff;
            display: -ms-grid;
            display: grid;
            border: 1px solid #efeeee; }
        @media (max-width: 767px) {
        :host {
                height: 21.42857em;
                -ms-grid-columns: 1.42857em 1fr 1.42857em 1fr 1.42857em;
                grid-template-columns: 1.42857em 1fr 1.42857em 1fr 1.42857em;
                -ms-grid-rows: 1.07143em 0.35714em 4.78571em 0.35714em 1.71429em 0.35714em 3.57143em 0.35714em 1fr 0.35714em 3.64286em;
                grid-template-rows: 1.07143em 4.78571em 1.71429em 3.57143em 1fr 3.64286em;
                grid-row-gap: 0.35714em;
                grid-template-areas: ".       .           .           .           ." ".       img         .           title       ." ".       img         .           rating      ." ".       img         .           prices      ." ".       description description description ." "buttons buttons     buttons     buttons     buttons"; } }
        
        :host([typed='list']) {
            width: 100%; }
        @media (min-width: 768px) {
        :host([typed='list']) {
                -ms-grid-rows: 5px 5px 38px 5px 19px 5px 1fr 5px 52px 5px 10px;
                grid-template-rows: 5px 38px 19px 1fr 52px 10px;
                grid-row-gap: 5px;
                grid-template-areas: "img .           .           buttons" "img title       title       buttons" "img rating      .           buttons" "img description description buttons" "img prices      .           buttons" "img .           .           buttons"; } }
        @media (min-width: 1200px) {
        :host([typed='list']) {
                height: 193px;
                -ms-grid-columns: 194px 1fr 1fr 191px;
                grid-template-columns: 194px 1fr 1fr 191px;
                grid-column-gap: 20px; } }
        @media (max-width: 1199px) and (min-width: 992px) {
        :host([typed='list']) {
                height: 193px;
                -ms-grid-columns: 180px 1fr 1fr 130px;
                grid-template-columns: 180px 1fr 1fr 130px;
                grid-column-gap: 10px; } }
        @media (max-width: 991px) and (min-width: 768px) {
        :host([typed='list']) {
                height: 191px;
                -ms-grid-columns: 152px 1fr 1fr 58px;
                grid-template-columns: 152px 1fr 1fr 58px;
                grid-column-gap: 10px; } }
        
        :host([typed='card']) {
            width: 100%; }
        @media (min-width: 1200px) {
        :host([typed='card']) {
                height: 520px;
                -ms-grid-rows: 7px 236px 64px 20px 1fr 37px 62px;
                grid-template-rows: 7px 236px 64px 20px 1fr 37px 62px; } }
        @media (max-width: 1199px) and (min-width: 992px) {
        :host([typed='card']) {
                height: 532px;
                -ms-grid-rows: 7px 236px 64px 20px 1fr 55px 62px;
                grid-template-rows: 7px 236px 64px 20px 1fr 55px 62px; } }
        @media (max-width: 991px) and (min-width: 768px) {
        :host([typed='card']) {
                height: 532px;
                -ms-grid-rows: 7px 236px 64px 20px 1fr 55px 62px;
                grid-template-rows: 7px 236px 64px 20px 1fr 55px 62px; } }
        @media (min-width: 768px) {
        :host([typed='card']) {
                -ms-grid-columns: 10px 1fr 10px;
                grid-template-columns: 10px 1fr 10px;
                grid-row-gap: 5px;
                -ms-grid-rows: auto 5px auto 5px auto 5px auto 5px auto 5px auto 5px auto;
                grid-template-areas: ".       .           ." ".       img         ." ".       title       ." ".       rating      ." ".       description ." ".       prices      ." "buttons buttons     buttons"; } }
        @media (min-width: 1200px) {
        :host([typed='card']) ::slotted(uc-plp-item-prices) {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-pack: distribute;
                justify-content: space-around;
                -webkit-box-align: baseline;
                -ms-flex-align: baseline;
                align-items: baseline; } }
        
        ::slotted(.plp-item-img) {
            grid-area: img;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center; }
        
        ::slotted(uc-plp-item-title) {
            grid-area: title;
            -ms-grid-row-align: end;
            align-self: end; }
        
        ::slotted(uc-plp-item-rating) {
            grid-area: rating;
            -ms-grid-row-align: center;
            align-self: center; }
        
        ::slotted(uc-plp-item-description) {
            grid-area: description; }
        
        ::slotted(uc-plp-item-prices) {
            grid-area: prices; }
        
        ::slotted(uc-plp-item-buttons) {
            grid-area: buttons; }
    `;

    handleChangeTypeList(event) {
        this.typed = event.detail;
    }

    handleButtonClick(event) {
        event.stopPropagation();
        window.dataLayer = window.dataLayer || [];
        this.dataPosition = getElemPos(this);
        window.dataLayer.push(addData("add", "Conversions", this, event));

        if(event.detail.buttonType === 'compare') {
            this.handleComparisionClick(event.detail);
        }
    }

    handleComparisionClick(data) {
        let event = new CustomEvent(data.eventAction === 'add' ? 'comparisonAddItem' : 'comparisonRemoveItem', {detail: this.dataProductId});
        this.dispatchEvent(event);
    }

    constructor() {
        super();
        this.typed = 'list';
        this.dataProductId = '';

        window.addEventListener('plpChangeType', this.handleChangeTypeList);
        this.addEventListener('plpButtonClicked', this.handleButtonClick);
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
}



