import {LitElement, html, css, customElement} from 'lit-element';

@customElement('uc-header-shop-map')
class UcHeaderShopMap extends LitElement {
    static styles = css`
        :host {
            display: block;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIyMyIgdmlld0JveD0iMCAwIDE4IDIzIj4gICAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiMyQTJBMkEiIHN0cm9rZS13aWR0aD0iLjUiIGQ9Ik04LjgyMiA2LjZjLTEuMTc4IDAtMi4xMzMuOTQtMi4xMzMgMi4xIDAgMS4xNi45NTUgMi4xIDIuMTMzIDIuMSAxLjE3OSAwIDIuMTM0LS45NCAyLjEzNC0yLjEgMC0xLjE2LS45NTUtMi4xLTIuMTM0LTIuMXpNOSAxQzQuNTgyIDEgMSA0LjUyNyAxIDguODc1YzAgMS41NzQuNDcgMy4wNCAxLjI3NyA0LjI3bDUuMzIyIDguMTA0Yy4yOTcuNDUyLjgxNC43NTEgMS40MDEuNzUxLjU4NyAwIDEuMTA0LS4zIDEuNC0uNzUxbDUuMzIzLTguMTA1QTcuNzUgNy43NSAwIDAgMCAxNyA4Ljg3NUMxNyA0LjUyNyAxMy40MTkgMSA5IDF6bTUuMDQzIDExLjA3Nkw5IDE5Ljc1NmwtNS4wNDMtNy42OEE1LjgxOCA1LjgxOCAwIDAgMSAzIDguODc1YzAtMy4yNTcgMi42OTItNS45MDYgNi01LjkwNnM2IDIuNjQ5IDYgNS45MDZjMCAxLjE0LS4zMyAyLjI0OC0uOTU3IDMuMnoiLz48L3N2Zz4=);
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat; }
        @media (max-width: 991px) and (min-width: 768px) {
        :host {
                width: 18px;
                height: 24px; } }
        @media (max-width: 767px) {
        :host {
                width: 1.28571em;
                height: 1.71429em; } }
        
        ::slotted(a) {
            opacity: 0;
            width: 100%;
            height: 100%;
            display: block; }
    `;

    render() {
        return html`
            <slot></slot>
        `;
    }
}