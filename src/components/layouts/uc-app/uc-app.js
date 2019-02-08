import {html, property, LitElement, css, unsafeCSS, customElement} from 'lit-element';
import {respond, respondFrom, screenSmMax, screenSmMin, isXs} from '../../../utils/response-query';
import style from "./styles/uc-app.css";
import styleMobile from "./styles/uc-app-mobile.css";
import styleRespondFromSmMin from "./styles/uc-app-respond-from-sm-min.css";
import styleRespondSmMax from "./styles/uc-app-respond-sm-max.css";

@customElement('uc-app')
export class UcApp extends LitElement {
    @property({type: Boolean}) comparePanel = false;

    static styles = [
        css`${unsafeCSS(style)}`,
        respond(screenSmMax) ? css`${unsafeCSS(styleRespondSmMax)}` : css``,
        respondFrom(screenSmMin) ? css`${unsafeCSS(styleRespondFromSmMin)}` : css``,
        isXs() ? css`${unsafeCSS(styleMobile)}` : css``
    ];

    render() {
        return html`
            <slot></slot>
            ${this.comparePanel ? html`<uc-compare-panel></uc-compare-panel>` : ''}
        `;
    }
}