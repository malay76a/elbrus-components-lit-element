import {LitElement, html, css, customElement} from 'lit-element';

@customElement('uc-plp-chenge-typed')
class UcPlpChengeTyped extends LitElement {
    static get properties() {
        return {
            type: { type: String }
        };
    }

    static styles = css`
        :host {display: inline-block}
        .list[data-active] {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDE4IDEzIj4gICAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwaDE4djNIMFYwem0wIDVoMTh2M0gwVjV6bTAgNWgxOHYzSDB2LTN6Ii8+PC9zdmc+); }
        
        .list:not([data-active]) {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDE4IDEzIj4gICAgPHBhdGggZmlsbD0iIzY2QzA1RCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwaDE4djNIMFYwem0wIDVoMTh2M0gwVjV6bTAgNWgxOHYzSDB2LTN6Ii8+PC9zdmc+); }
        
        .card[data-active] {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4gICAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwaDh2OEgwVjB6bTEwIDBoOHY4aC04VjB6TTAgMTBoOHY4SDB2LTh6bTEwIDBoOHY4aC04di04eiIvPjwvc3ZnPg==); }
        
        .card:not([data-active]) {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4gICAgPHBhdGggZmlsbD0iIzY2QzA1RCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwaDh2OEgwVjB6bTEwIDBoOHY4aC04VjB6TTAgMTBoOHY4SDB2LTh6bTEwIDBoOHY4aC04di04eiIvPjwvc3ZnPg==); }
        
        .toggler {
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            border-radius: 2px;
            -webkit-box-shadow: inset 0 2px 3px 1px #ffffff;
            box-shadow: inset 0 2px 3px 1px #ffffff;
            border: 1px solid #d9d9d9;
            background-color: #fafafa; }
        .toggler div {
            width: 36px;
            height: 36px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 18px 18px;
            cursor: pointer; }
        .toggler div svg {
            fill: #66c05d; }
        .toggler div[data-active] {
            background-color: #66c05d; }
        .toggler div[data-active] svg {
            fill: #ffffff; }
    `;

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        this.changeTypeHandler(this.type)
    }

    changeType(event) {
        event.stopPropagation();
        this.type = event.currentTarget.classList.item(0);
        this.changeTypeHandler(this.type);
    }

    changeTypeHandler(type) {
        let event = new CustomEvent('plpChangeType', {
            detail: type
        });
        this.dispatchEvent(event);
    }

    render() {
        const isList = this.type === 'list';

        return html`
            <div class="toggler">
                <div class="list" 
                    ?data-active="${isList}" 
                    @click="${this.changeType}"></div>
                <div class="card" 
                    ?data-active="${!isList}" 
                    @click="${this.changeType.bind(this)}"></div>
            </div>
        `;
    }
}





