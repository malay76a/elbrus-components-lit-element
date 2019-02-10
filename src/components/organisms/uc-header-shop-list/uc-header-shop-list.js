import {LitElement, html, css, customElement, property} from 'lit-element';
import {isMobile} from '../../../utils/response-query';
import '../../molecules/uc-header-list-popup/uc-header-list-popup';

@customElement('uc-header-shop-list')
class UcHeaderShopList extends LitElement {
    @property({type: Number}) count = 0;
    @property({type: String}) dataList;

    static styles = css`
        :host {
            position: relative;
            display: flex;
            align-items: center; }
        @media (min-width: 992px) {
        :host {
                padding: 10px;
                border-top: 1px solid transparent;
                border-left: 1px solid transparent;
                border-right: 1px solid transparent;
                z-index: 3;
                background-color: #fff; } }
        @media (max-width: 991px) {
        :host {
                overflow: hidden; } }
        @media (min-width: 992px) {
        :host(:hover) {
                border-top: 1px solid #eee;
                border-left: 1px solid #eee;
                border-right: 1px solid #eee; }
        :host(:hover) uc-header-list-popup {
                display: flex; }
        :host(:hover)::after {
                position: absolute;
                content: '';
                height: 1px;
                width: 100%;
                left: 0;
                bottom: 0;
                z-index: 4;
                background-color: #fff; } }
        
        ::slotted(a) {
            height: 100%;
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0; }
        
        .shop-list-icon {
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat; }
        @media (min-width: 992px) {
        .shop-list-icon {
                width: 26px;
                height: 32px;
                background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDI0IDMwIj4gICAgPHBhdGggZmlsbD0iIzY2QzA1RCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS4wMSAxMC40MDZoLTEuMmEuMy4zIDAgMCAwLS4zLjN2MS4yYS4zLjMgMCAwIDAgLjMuM2gxLjJhLjMuMyAwIDAgMCAuMy0uM3YtMS4yYS4zLjMgMCAwIDAtLjMtLjN6bTAgMy43NWgtMS4yYS4zLjMgMCAwIDAtLjMuM3YxLjJhLjMuMyAwIDAgMCAuMy4zaDEuMmEuMy4zIDAgMCAwIC4zLS4zdi0xLjJhLjMuMyAwIDAgMC0uMy0uM3ptMCAzLjc1aC0xLjJhLjMuMyAwIDAgMC0uMy4zdjEuMTk4YS4zLjMgMCAwIDAgLjMuM2gxLjJhLjMuMyAwIDAgMCAuMy0uM3YtMS4xOTlhLjMuMyAwIDAgMC0uMy0uM3ptNy4xOC03LjVoLTUuMzhhLjMuMyAwIDAgMC0uMy4zdjEuMmEuMy4zIDAgMCAwIC4zLjNoNS4zOGEuMy4zIDAgMCAwIC4zLS4zdi0xLjJhLjMuMyAwIDAgMC0uMy0uM3ptMCAzLjc1aC01LjM4YS4zLjMgMCAwIDAtLjMuM3YxLjJhLjMuMyAwIDAgMCAuMy4zaDUuMzhhLjMuMyAwIDAgMCAuMy0uM3YtMS4yYS4zLjMgMCAwIDAtLjMtLjN6bTAgMy43NWgtNS4zOGEuMy4zIDAgMCAwLS4zLjN2MS4xOThhLjMuMyAwIDAgMCAuMy4zaDUuMzhhLjMuMyAwIDAgMCAuMy0uM3YtMS4xOTlhLjMuMyAwIDAgMC0uMy0uM3ptNC43NzcgOC40OTVjMCAuMzMtLjI3LjYtLjYuNkgzLjYzMmMtLjMzIDAtLjYtLjI3LS42LS42VjUuMzk5YzAtLjMzLjI3LS42LjYtLjZINS44M0w3LjEgNi4xNmMuMjI2LjI0MS42OC40MzggMS4wMS40MzhoNy43OGMuMzI5IDAgLjc4My0uMTk3IDEuMDEtLjQzOGwxLjI2OS0xLjM2aDIuMTk4Yy4zMyAwIC42LjI3LjYuNnYyMXpNMjEuNiAxLjhoLTMuNDMxTDE2Ljg5OS40MzlDMTYuNjcyLjE5NyAxNi4yMTggMCAxNS44ODggMGgtNy43OGMtLjMzIDAtLjc4NC4xOTctMS4wMS40MzlMNS44MyAxLjhIMi40QzEuMDggMS44IDAgMi44OCAwIDQuMnYyMy40QzAgMjguOTIgMS4wOCAzMCAyLjQgMzBoMTkuMmMxLjMyIDAgMi40LTEuMDggMi40LTIuNFY0LjJjMC0xLjMyLTEuMDgtMi40LTIuNC0yLjR6Ii8+PC9zdmc+); } }
        @media (max-width: 991px) {
        .shop-list-icon {
                background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIyMyIgdmlld0JveD0iMCAwIDE5IDIzIj4gICAgPHBhdGggZmlsbD0iIzJBMkEyQSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy4xMzMgNy45NzhoLS45NWEuMjM1LjIzNSAwIDAgMC0uMjM4LjIzdi45MmMwIC4xMjYuMTA3LjIzLjIzOC4yM2guOTVjLjEzIDAgLjIzNy0uMTA0LjIzNy0uMjN2LS45MmEuMjM1LjIzNSAwIDAgMC0uMjM3LS4yM3ptMCAyLjg3NWgtLjk1YS4yMzQuMjM0IDAgMCAwLS4yMzguMjN2LjkyYzAgLjEyNi4xMDcuMjMuMjM4LjIzaC45NWMuMTMgMCAuMjM3LS4xMDQuMjM3LS4yM3YtLjkyYS4yMzQuMjM0IDAgMCAwLS4yMzctLjIzem0wIDIuODc0aC0uOTVhLjIzNS4yMzUgMCAwIDAtLjIzOC4yM3YuOTJjMCAuMTI2LjEwNy4yMy4yMzguMjNoLjk1Yy4xMyAwIC4yMzctLjEwNC4yMzctLjIzdi0uOTJhLjIzNS4yMzUgMCAwIDAtLjIzNy0uMjN6bTUuNjg0LTUuNzQ5aC00LjI2YS4yMzUuMjM1IDAgMCAwLS4yMzcuMjN2LjkyYzAgLjEyNi4xMDcuMjMuMjM4LjIzaDQuMjZjLjEzIDAgLjIzNy0uMTA0LjIzNy0uMjN2LS45MmEuMjM1LjIzNSAwIDAgMC0uMjM4LS4yM3ptMCAyLjg3NWgtNC4yNmEuMjM0LjIzNCAwIDAgMC0uMjM3LjIzdi45MmMwIC4xMjYuMTA3LjIzLjIzOC4yM2g0LjI2Yy4xMyAwIC4yMzctLjEwNC4yMzctLjIzdi0uOTJhLjIzNC4yMzQgMCAwIDAtLjIzOC0uMjN6bTAgMi44NzRoLTQuMjZhLjIzNS4yMzUgMCAwIDAtLjIzNy4yM3YuOTJjMCAuMTI2LjEwNy4yMy4yMzguMjNoNC4yNmMuMTMgMCAuMjM3LS4xMDQuMjM3LS4yM3YtLjkyYS4yMzUuMjM1IDAgMCAwLS4yMzgtLjIzem0zLjc4MyA2LjUxNGEuNDcuNDcgMCAwIDEtLjQ3NS40NkgyLjg3NWEuNDcuNDcgMCAwIDEtLjQ3NS0uNDZWNC4xMzlhLjQ3LjQ3IDAgMCAxIC40NzUtLjQ2aDEuNzRsMS4wMDYgMS4wNDRjLjE3OS4xODUuNTM4LjMzNi44LjMzNmg2LjE1OWMuMjYgMCAuNjItLjE1MS44LS4zMzZsMS4wMDQtMS4wNDRoMS43NGEuNDcuNDcgMCAwIDEgLjQ3Ni40NnYxNi4xMDJ6bS41LTE4Ljg2MWgtMi43MTZMMTMuMzc4LjMzNkExLjI3MiAxLjI3MiAwIDAgMCAxMi41OCAwSDYuNDJjLS4yNjEgMC0uNjIxLjE1LS44LjMzNkw0LjYxNyAxLjM4SDEuODk5Qy44NTUgMS4zOCAwIDIuMjA3IDAgMy4yMnYxNy45NEMwIDIyLjE3My44NTUgMjMgMS45IDIzaDE1LjJjMS4wNDYgMCAxLjktLjgyNyAxLjktMS44NFYzLjIyYzAtMS4wMTMtLjg1NC0xLjg0LTEuOS0xLjg0eiIvPjwvc3ZnPg==); } }
        @media (max-width: 991px) and (min-width: 768px) {
        .shop-list-icon {
                width: 19px;
                height: 23px; } }
        @media (max-width: 767px) {
        .shop-list-icon {
                width: 1.35714em;
                height: 1.64286em; } }
        
        .shop-list-text {
            font-size: 11px;
            font-weight: bold;
            line-height: 1.27;
            width: 53px;
            text-transform: uppercase;
            color: #333333;
            margin-left: 10px;
            margin-right: 10px; }
        @media (max-width: 991px) {
        .shop-list-text {
                display: none; } }
        
        .shop-list-tooltip {
            width: 14px;
            height: 14px;
            background-color: #66c05d;
            border-radius: 50%;
            color: #ffffff;
            font-size: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            align-self: flex-end;
            position: relative;
            user-select: none;
            margin-bottom: 3px; }
        @media (max-width: 991px) {
        .shop-list-tooltip {
                display: none; } }
        .shop-list-tooltip::after {
            display: none;
            content: attr(data-text);
            background-color: rgba(0, 0, 0, 0.7);
            border-radius: 3px;
            padding: 5px;
            position: absolute;
            bottom: 14px;
            right: 14px;
            width: 260px;
            font-size: 12px; }
        .shop-list-tooltip:hover::after {
            display: block; }
        
        uc-header-list-popup {
            z-index: -1;
            position: absolute;
            top: calc(100% - 1px);
            right: -1px;
            display: none; }
    `;

    render() {
        return html`
            <slot></slot>
            <div class="shop-list-icon" data-count="${this.count}"></div>
            ${isMobile() ? html`` : html`
                <div class="shop-list-text">СПИСОК ПОКУПОК</div>
                <div class="shop-list-tooltip"
                     data-text="Просто добавьте сюда товары, распечатайте список и пользуйтесь им в магазине">?</div>
                <uc-header-list-popup dataType="shop-list" dataList="${this.dataList}"></uc-header-list-popup>
            `}
        `;
    }
}