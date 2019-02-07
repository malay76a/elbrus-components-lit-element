import {html, LitElement, property, css, unsafeCSS} from 'lit-element';
import style from './my-element.css';

class MyElement extends LitElement {
    @property({type: String}) myProp = 'stuff';

    static styles = css`
        ${unsafeCSS(style)}
    `;

    render() {
        return html`
          <p>Hello World</p>
          ${this.myProp}
        `;
    }
}

customElements.define('my-element', MyElement);