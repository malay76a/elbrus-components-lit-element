import {LitElement, html, css, customElement, property} from 'lit-element';
import {isMobile} from '../../../utils/response-query';

@customElement('uc-header-search')
class UcHeaderSearch extends LitElement {
    @property({type: String}) action;

    static styles = css`
        :host {
            display: block; }
        @media (max-width: 991px) and (min-width: 768px) {
        :host {
                width: 22px;
                height: 22px; } }
        @media (max-width: 767px) {
        :host {
                width: 1.57143em;
                height: 1.57143em; } }
        
        ::slotted(form) {
            display: none; }
        
        .icon {
            display: block;
            width: 100%;
            height: 100%;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiI+ICAgIDxkZWZzPiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0wIDIyaDIyVjBIMHoiLz4gICAgPC9kZWZzPiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4gICAgICAgIDwvbWFzaz4gICAgICAgIDxwYXRoIGZpbGw9IiMyQTJBMkEiIGQ9Ik0xMy40MDcgMi43NWE1Ljg0NCA1Ljg0NCAwIDEgMCAwIDExLjY4NSA1Ljg0NCA1Ljg0NCAwIDAgMCAwLTExLjY4NnpNMy41NTMgMjEuMzYxQTIuMDYyIDIuMDYyIDAgMSAxIC43NiAxOC4zMzdsNS40NTctNS4wMzVBOC41OTUgOC41OTUgMCAxIDEgMjIgOC41OTRhOC41OTQgOC41OTQgMCAwIDEtMTIuNzU5IDcuNTE4bC01LjY4OCA1LjI1eiIgbWFzaz0idXJsKCNiKSIvPiAgICA8L2c+PC9zdmc+);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat; }
        
        form {
            display: flex;
            height: 100%;
            width: 100%; }
        
        input {
            flex: 1 1 90%;
            padding: 12px 18px 12px;
            border: 3px solid #66c05d;
            font-size: 12px;
            color: #999999; }
        
        button {
            width: 40px;
            height: 40px;
            background-color: #66c05d;
            border: none;
            background-size: 14px;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMCAyMmgyMlYwSDB6Ii8+PC9kZWZzPjxnIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImIiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZD0iTTEzLjQwNyAyLjc1YTUuODQ0IDUuODQ0IDAgMSAwIDAgMTEuNjg1IDUuODQ0IDUuODQ0IDAgMCAwIDAtMTEuNjg2ek0zLjU1MyAyMS4zNjFBMi4wNjIgMi4wNjIgMCAxIDEgLjc2IDE4LjMzN2w1LjQ1Ny01LjAzNUE4LjU5NSA4LjU5NSAwIDEgMSAyMiA4LjU5NGE4LjU5NCA4LjU5NCAwIDAgMS0xMi43NTkgNy41MThsLTUuNjg4IDUuMjV6IiBtYXNrPSJ1cmwoI2IpIi8+PC9nPjwvc3ZnPg==); }

    `;

    render() {
        return isMobile() ? html`
            <div class="icon"></div>
        ` : html`
            <form method="get" action="${this.action}">
                <input type="text" name="query" placeholder="Поиск по советам, товарам, услугам"/>
                <button type="submit"></button>
            </form>
        `;
    }
}



