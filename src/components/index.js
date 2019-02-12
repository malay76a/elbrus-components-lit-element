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
        case 'uc-header':
            import('./organisms/uc-header/uc-header.js');
            break;
        case 'uc-container':
            import('./organisms/uc-container/uc-container.js');
            break;
        case 'uc-header-catalog':
            import('./organisms/uc-header-catalog/uc-header-catalog.js');
            break;
        case 'uc-header-shop-list':
            import('./organisms/uc-header-shop-list/uc-header-shop-list.js');
            break;
        case 'uc-header-basket':
            import('./organisms/uc-header-basket/uc-header-basket.js');
            break;
        case 'uc-seo-block':
            import('./organisms/uc-seo-block/uc-seo-block.js');
            break;
        case 'uc-breadcrumb-list':
            import('./molecules/uc-breadcrumb-list/uc-breadcrumb-list.js');
            break;
        case 'uc-page-title':
            import('./molecules/uc-page-title/uc-page-title.js');
            break;
        case 'uc-facet-and-list':
            import('./organisms/uc-facet-and-list/uc-facet-and-list.js');
            break;
        case 'uc-plp-wrapper':
            import('./organisms/uc-plp-wrapper/uc-plp-wrapper.js');
            break;
        case 'uc-plp-list':
            import('./organisms/uc-plp-list/uc-plp-list.js');
            break;
        case 'uc-plp-item':
            import('./organisms/uc-plp-item/uc-plp-item.js');
            break;
        case 'uc-facets-list':
            import('./organisms/uc-facets-list/uc-facets-list.js');
            break;
        case 'uc-current-filter':
            import('./organisms/uc-current-filter/uc-current-filter');
            break;
        case 'uc-facet-toggle':
            import('./molecules/uc-facet-toggle/uc-facet-toggle.js');
            break;
        case 'uc-footer':
            import('./organisms/uc-footer/uc-footer.js');
            break;
        case 'uc-footer-menu':
            import('./organisms/uc-footer-menu/uc-footer-menu.js');
            break;
        case 'uc-footer-link-block':
            import('./organisms/uc-footer-link-block/uc-footer-link-block.js');
            break;
        case 'uc-footer-apps':
            import('./molecules/uc-footer-apps/uc-footer-apps.js');
            break;
        default:
            break;
    }
}