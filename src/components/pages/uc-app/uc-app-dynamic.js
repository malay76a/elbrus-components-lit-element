import {SplitElement} from '../../../utils/split-element.js';

export class UcAppDynamic extends SplitElement {
    static async load() {
        return (await import('./uc-app.js')).UcApp;
    }
}
customElements.define('uc-app', UcAppDynamic);