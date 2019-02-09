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
            import('./templates/uc-app/uc-app.js');
            break;
        case 'uc-nckd':
            import('./organisms/uc-nckd/uc-nckd.js');
            break;
        case 'uc-header-panel':
            import('./organisms/uc-header-panel/uc-header-panel.js');
            break;
        default:
            break;
    }
}