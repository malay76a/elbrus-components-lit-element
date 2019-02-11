import {LitElement, html, css, customElement} from 'lit-element';
import {isXs} from '../../../utils/response-query';

@customElement('uc-plp-item-rating')
class UcPlpItemRating extends LitElement {
    static get properties() {
        return {
            rating: { type: String },
            count: { type: String }
        };
    }

    static styles = css`
        .rating-wrapper {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex; }
        @media (max-width: 767px) {
        .rating-wrapper {
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between; } }
        
        @media (min-width: 768px) {
        :host-context([typed="card"]) .rating-wrapper {
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between; } }
        
        .stars {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center; }
        @media (min-width: 768px) {
        .stars {
                margin-right: 18px; } }
        @media (max-width: 767px) {
        .stars {
                margin-right: 1.28571em; } }
        
        .star {
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            display: block; }
        @media (min-width: 768px) {
        .star {
                width: 12px;
                height: 11px;
                margin-right: 2px; } }
        @media (max-width: 767px) {
        .star {
                width: 0.85714em;
                height: 0.78571em;
                margin-right: 0.14286em; } }
        
        .on {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpdD0nJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCBtZWV0JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9JyNlYmRmMjUnIGQ9J00xMiwxOC4zMjQgTDE5LjQxNiwyMi44IEwxNy40NDgsMTQuMzY0IEwyNCw4LjY4OCBMMTUuMzcyLDcuOTU2IEwxMiwwIEw4LjYyOCw3Ljk1NiBMMCw4LjY4OCBMNi41NTIsMTQuMzY0IEw0LjU4NCwyMi44IEwxMiwxOC4zMjQgTDEyLDE4LjMyNCBaJz48L3BhdGg+PC9zdmc+); }
        
        .off {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpdD0nJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCBtZWV0JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9JyNlYmRmMjUnIGQ9J00yNCw4LjY4OCBMMTUuMzcyLDcuOTQ0IEwxMiwwIEw4LjYyOCw3Ljk1NiBMMCw4LjY4OCBMNi41NTIsMTQuMzY0IEw0LjU4NCwyMi44IEwxMiwxOC4zMjQgTDE5LjQxNiwyMi44IEwxNy40NiwxNC4zNjQgTDI0LDguNjg4IEwyNCw4LjY4OCBaIE03LjQ4OCwxOC44MDQgTDguNjg4LDEzLjY2OCBMNC43MDQsMTAuMjEyIEw5Ljk2LDkuNzU2IEwxMiw0LjkyIEwxNC4wNTIsOS43NjggTDE5LjMwOCwxMC4yMjQgTDE1LjMyNCwxMy42OCBMMTYuNTI0LDE4LjgxNiBMMTIsMTYuMDggTDcuNDg4LDE4LjgwNCBMNy40ODgsMTguODA0IFonPjwvcGF0aD48L3N2Zz4=); }
        
        .half {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpdD0nJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCBtZWV0JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9JyNlYmRmMjUnIGQ9J00yNCw5LjE4OCBMMTUuMzcyLDguNDQ0IEwxMiwwLjUgTDguNjI4LDguNDU2IEwwLDkuMTg4IEw2LjU1MiwxNC44NjQgTDQuNTg0LDIzLjMgTDEyLDE4LjgyNCBMMTkuNDE2LDIzLjMgTDE3LjQ2LDE0Ljg2NCBMMjQsOS4xODggTDI0LDkuMTg4IFogTTEyLDE2LjU4IEwxMiw1LjQyIEwxNC4wNTIsMTAuMjY4IEwxOS4zMDgsMTAuNzI0IEwxNS4zMjQsMTQuMTggTDE2LjUyNCwxOS4zMTYgTDEyLDE2LjU4IEwxMiwxNi41OCBaJz48L3BhdGg+PC9zdmc+); }
        
        .reviews {
            color: #66c05d;
            text-decoration: none;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center; }
        @media (min-width: 768px) {
        .reviews {
                font-size: 13px; } }
        @media (max-width: 767px) {
        .reviews {
                font-size: 0.78571em; } }
        
        .reviews-icon {
            display: inline-block;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE4IDE1Ij4gICAgPGcgZmlsbD0iIzY2QzA1RCIgZmlsbC1ydWxlPSJub256ZXJvIj4gICAgICAgIDxwYXRoIGQ9Ik02Ljk2NCAyLjY1NUMzLjExOCAyLjY1NSAwIDUuMDUzIDAgOC4wMTJjMCAxLjQ1Ljc1MSAyLjc3IDEuOTcgMy43MzQtLjA3Ljk4NC0uMzA3IDIuMTg3LS45OTMgMi44MzUgMS4zNjUgMCAyLjc2LS44NTUgMy42NDItMS41MjRhOC44NTEgOC44NTEgMCAwIDAgMi4zNDUuMzEyYzMuODQ3IDAgNi45NjUtMi4zOTYgNi45NjUtNS4zNTcgMC0yLjk2LTMuMTE4LTUuMzU3LTYuOTY1LTUuMzU3eiIvPiAgICAgICAgPHBhdGggZD0iTTE2LjIyMSA4LjUzNGMuNTg3LS43ODMuOTIyLTEuNjk0LjkyMi0yLjY2NSAwLTIuOTU5LTMuMTE4LTUuMzU3LTYuOTY0LTUuMzU3LTEuNjkzIDAtMy4yNDUuNDY1LTQuNDUxIDEuMjM3QTkuNTYxIDkuNTYxIDAgMCAxIDcuNSAxLjU4NGM0LjE0MiAwIDcuNSAyLjYzOCA3LjUgNS44OTIgMCAxLjI4My0uNTIgMi40NzEtMS40MDYgMy40MzYuODguNjcgMi4yNzcgMS41MjYgMy42NDIgMS41MjYtLjk3LS45MjEtMS4wNC0yLjk2My0xLjAxNS0zLjkwNHoiLz4gICAgPC9nPjwvc3ZnPg==);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center; }
        @media (min-width: 768px) {
        .reviews-icon {
                width: 18px;
                height: 15px;
                margin-right: 4px; } }
        @media (max-width: 767px) {
        .reviews-icon {
                width: 1.63636em;
                height: 1.36364em;
                margin-right: 0.36364em; } }
    `;

    constructor() {
        super();
        this.rating = '0';
        this.count = '0';
    }

    render() {
        //TODO: define algorithm create stars

        return html`
            <div class="rating-wrapper">
                <div class="stars">
                    <div class="star on"></div>
                    <div class="star on"></div>
                    <div class="star half"></div>
                    <div class="star off"></div>
                    <div class="star off"></div>
                </div>
                <a class="reviews" href="#reviews">
                    <span class="reviews-icon"></span>
                    <span class="reviews-text">
                        ${ isXs() ? html`(${this.count})` : html`${this.count} отзывов`}
                    </span>
                </a>
            </div>
        `;
    }
}