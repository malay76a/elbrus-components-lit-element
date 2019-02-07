import {UcAppDynamic} from './uc-app-dynamic.js';
import {html} from 'lit-element';

export class UcApp extends UcAppDynamic {
    render() {
        return html`
      <h1>I've been upgraded</h1>
      My message is ${this.message}.
    `;
    }
}