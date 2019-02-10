import {LitElement, html, css, customElement, property} from 'lit-element';

@customElement('uc-breadcrumb-item')
class UcBreadcrumbItem extends LitElement {
    @property({type: String, reflect: true}) icon = '';
    anchor;

    static styles = css`
        :host {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            border-radius: 3px;
            background-color: #ffffff;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            color: #000000;
            -webkit-transition: color .3s ease-in-out;
            -o-transition: color .3s ease-in-out;
            transition: color .3s ease-in-out; }
        @media (min-width: 768px) {
        :host {
                padding: 4px 7px; } }
        @media (max-width: 767px) {
        :host {
                padding: 0.28571em 0.5em; } }
        
        :host(:hover) {
            color: #66c05d; }
        
        ::slotted(a) {
            text-transform: uppercase;
            text-decoration: none;
            color: inherit; }
        @media (min-width: 768px) {
            ::slotted(a) {
                font-size: 11px; } }
        @media (max-width: 767px) {
            ::slotted(a) {
                font-size: 0.64286em; } }
        
        ::slotted(span) {
            text-transform: uppercase;
            color: #000000; }
        @media (min-width: 768px) {
            ::slotted(span) {
                font-size: 11px; } }
        @media (max-width: 767px) {
            ::slotted(span) {
                font-size: 0.64286em; } }
        
        .next {
            height: 0;
            display: inline-block;
            width: 0; }
        @media (min-width: 768px) {
        .next {
                margin-left: 5px;
                border-left: 5px solid #66c05d;
                border-top: 3px solid transparent;
                border-bottom: 3px solid transparent; } }
        @media (max-width: 767px) {
        .next {
                margin-left: 0.35714em;
                border-left: 0.35714em solid #66c05d;
                border-top: 0.21429em solid transparent;
                border-bottom: 0.21429em solid transparent; } }
        
        .house {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEyIDEwIj4gICAgPHBhdGggZmlsbD0iIzY2NiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNiAwTDAgNC45OTloMS45OTlWMTBoMlY3SDd2M2gzVjQuOTk5aDEuOTk5eiIvPjwvc3ZnPg==);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat; }
        @media (min-width: 768px) {
        .house {
                width: 12px;
                height: 10px;
                margin-right: 5px; } }
        @media (max-width: 767px) {
        .house {
                width: 0.85714em;
                height: 0.71429em;
                margin-right: 0.35714em; } }
    `;

    connectedCallback() {
        super.connectedCallback();
        this.anchor = this.querySelector('a');
    }

    render() {
        return html`
            ${this.icon ? html`<div class={this.icon}></div>` : html``}
            <slot />
            ${this.anchor ? html`<div class="next"></div>` : html``}
        `;
    }
}