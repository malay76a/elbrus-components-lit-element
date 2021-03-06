import {LitElement, html, css, customElement} from 'lit-element';
import {isMobile} from '../../../utils/response-query';

@customElement('uc-facet-and-list')
class UcFacetAndList extends LitElement {

    static styles = css`
        @media (min-width: 992px) {
        :host {
                display: -ms-grid;
                display: grid;
                -ms-grid-columns: 3fr 20px 9fr;
                grid-template-columns: 3fr 9fr;
                -ms-grid-rows: auto;
                grid-template-rows: auto;
                grid-template-areas: "faset list";
                grid-column-gap: 20px; } }
        
        @media (min-width: 992px) {
            uc-fasets-list {
                grid-area: faset; } }
        
        @media (min-width: 992px) {
            uc-item-list {
                grid-area: list; } }
        
        @media (min-width: 992px) {
            uc-fasets-list {
                -ms-grid-row: 1;
                -ms-grid-column: 1; }
            uc-item-list {
                -ms-grid-row: 1;
                -ms-grid-column: 3; } }
        
        .hamburger {
            position: fixed;
            height: 11.07143em;
            width: 2.85714em;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            bottom: 10vh;
            right: 0;
            z-index: 1;
            cursor: pointer;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzQgMTAyMyI+ICA8cGF0aCBkPSJNMCA1MTEuNUM0IDc4Ni4zOCAzMjMuMDcgNzcyLjI4IDM3NCAxMDIzVjBDMzIzLjA3IDI1MC43MiA0IDIzNi42MiAwIDUxMS41eiIgZmlsbD0iIzY2YzA1ZCIvPjwvc3ZnPg==);
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain; }
        
        .filter-icon {
            width: 1.14286em;
            height: 1.21429em;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE2IDE3Ij4gICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwaDE2bC02IDd2MTBsLTQtMi45NDNWN3oiLz48L3N2Zz4=);
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain; }
    `;

    toggleFilter(e) {
        let event = new CustomEvent('filterShow', {
            detail: e
        });
        this.dispatchEvent(event);
    }

    render() {
        return !isMobile() ? html`<slot></slot>` : html`
            <slot></slot>
            <div class="hamburger" @click="${this.toggleFilter}">
                <div class="filter-icon"></div>
            </div>
        `;
    }
}