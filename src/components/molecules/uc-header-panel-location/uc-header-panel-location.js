import {LitElement, html, css, property, customElement} from 'lit-element';

@customElement('uc-header-panel-location')
class UcHeaderPanelLocation extends LitElement {
    @property({type: String}) region;

    static styles = css`
        :host {
            display: flex;
            align-items: center;
        }
        
        .region-label {
            font-size: 11px;
            color: #666666;
            margin-right: 8px;
        }
        .region-name {
            cursor: pointer;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            text-decoration: underline;
            color: #66c05d;
        }
    `;

    render() {
        return html`
            <div class="region-label">Регион:</div>,
            <div class="region-name">{this.region}</div>
        `
    }
}