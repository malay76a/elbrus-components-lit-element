import {LitElement, html} from 'lit-element';

export class SplitElement extends LitElement {
    static loaded() {
        if (!this.hasOwnProperty('_loadedPromise')) {
            this._loadedPromise = new Promise((resolve, reject) => {
                this._resolveLoaded = resolve;
                this._rejectLoaded = reject;
            });
        }
        return this._loadedPromise;
    }
    static _upgrade(element, klass) {
        SplitElement._upgradingElement = element;
        Object.setPrototypeOf(element, klass.prototype);
        new klass();
        SplitElement._upgradingElement = undefined;
        element.requestUpdate();
        if (element.isConnected) {
            element.connectedCallback();
        }
    }
    constructor() {
        if (SplitElement._upgradingElement !== undefined) {
            return SplitElement._upgradingElement;
        }
        super();
        const ctor = this.constructor;
        if (ctor.hasOwnProperty('implClass')) {
            // Implementation already loaded, do the upgrade immediately
            ctor._upgrade(this, ctor.implClass);
        }
        else {
            // Implementation not loaded
            if (typeof ctor.load !== 'function') {
                throw new Error('A SplitElement must have a static `load` method');
            }
            (async () => {
                ctor.implClass = await ctor.load();
                ctor._upgrade(this, ctor.implClass);
            })();
        }
    }
    // So that stubs don't have to implement render
    render() {
        return html ``;
    }
}