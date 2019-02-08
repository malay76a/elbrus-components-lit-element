import loadPolyfills from '@open-wc/polyfills-loader';

loadPolyfills().then(() => {
    const allTag = Array.from(document.querySelectorAll('*'));
    const uniqCustomElement = new Set(
        allTag.filter(i => i.tagName.includes('-'))
              .map(i => i.tagName.toLowerCase())
    );

    uniqCustomElement.forEach(i => lazyLoadCustomElement(i));
});

function lazyLoadCustomElement(tag) {
    switch (tag) {
        case 'uc-app':
            import('./layouts/uc-app/uc-app.js');
            break;
        default:
            break;
    }
}