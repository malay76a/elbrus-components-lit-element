/**
 * Web component polyfills loader, based on: https://github.com/webcomponents/webcomponentsjs/blob/master/webcomponents-loader.js
 *
 * Adapted to not load language polyfills and use dynamic imports
 */
function needsTemplatePolyfill() {
  // no real <template> because no `content` property (IE and older browsers)
  const template = document.createElement('template');

  if (!('content' in template)) {
    return true;
  } // broken doc fragment (older Edge)


  if (!(template.content.cloneNode() instanceof DocumentFragment)) {
    return true;
  } // broken <template> cloning (Edge up to at least version 17)


  const template2 = document.createElement('template');
  template2.content.appendChild(document.createElement('div'));
  template.content.appendChild(template2);
  const clone = template.cloneNode(true);
  return clone.content.childNodes.length === 0 || clone.content.firstChild.content.childNodes.length === 0;
}
/**
 * Loads web component polyfills if needed
 * @returns {Promise<void>} resolves when polyfills are loaded
 */


function loadPolyfills() {
  const polyfills = [];
  const needsTemplate = needsTemplatePolyfill();
  const needsShadowDom = !('attachShadow' in Element.prototype) || !('getRootNode' in Element.prototype) || window.ShadyDOM && window.ShadyDOM.force;
  const needsCustomElements = !window.customElements || window.customElements.forcePolyfill; // URL is required by webcomponents polyfill
  // We can use URLSearchParams as a watermark for URL support

  if (!('URLSearchParams' in window)) {
    polyfills.push(import('./chunk-2be68422.js'));
  }

  if (needsTemplate) {
    // template is a watermark for requiring all polyfills (IE11 and Edge)
    polyfills.push(import('./chunk-1ac7e459.js'));
  } else if (needsShadowDom || needsCustomElements) {
    // only chrome 53 supports shadow dom but not custom elements. this is an older browser, there is no need
    // for complicating the setup here. there is no harm in loading the polyfills there
    polyfills.push(import('./chunk-37cc1944.js'));
  }

  return Promise.all(polyfills);
}

loadPolyfills().then(() => {
  const allTag = Array.from(document.querySelectorAll('*'));
  const uniqCustomElement = new Set(allTag.filter(i => i.tagName.includes('-')).map(i => i.tagName.toLowerCase()));
  uniqCustomElement.forEach(i => lazyLoadCustomElement(i));
});

function lazyLoadCustomElement(tag) {
  switch (tag) {
    case 'uc-app':
      import('./chunk-1836398e.js');
      break;

    case 'uc-nckd':
      import('./chunk-51fbada1.js');
      break;

    case 'uc-header-panel':
      import('./chunk-33bc0b15.js');
      break;

    case 'uc-header':
      import('./chunk-b12dca37.js');
      break;

    case 'uc-container':
      import('./chunk-9e5cb087.js');
      break;

    case 'uc-header-catalog':
      import('./chunk-03cf444f.js');
      break;

    case 'uc-header-shop-list':
      import('./chunk-e2a01c66.js');
      break;

    case 'uc-header-basket':
      import('./chunk-340f8ff6.js');
      break;

    case 'uc-seo-block':
      import('./chunk-dc05eb28.js');
      break;

    case 'uc-breadcrumb-list':
      import('./chunk-3cf45253.js');
      break;

    case 'uc-page-title':
      import('./chunk-3cf4438c.js');
      break;

    case 'uc-facet-and-list':
      import('./chunk-8264cb29.js');
      break;

    case 'uc-plp-wrapper':
      import('./chunk-190e0a82.js');
      break;

    case 'uc-plp-list':
      import('./chunk-200d1866.js');
      break;

    case 'uc-plp-item':
      import('./chunk-e756673e.js');
      break;

    case 'uc-facets-list':
      import('./chunk-35470884.js');
      break;

    case 'uc-current-filter':
      import('./chunk-8a08fb13.js');
      break;

    case 'uc-facet-toggle':
      import('./chunk-d83244ea.js');
      break;

    case 'uc-footer':
      import('./chunk-2d77a958.js');
      break;

    case 'uc-footer-menu':
      import('./chunk-9558736b.js');
      break;

    case 'uc-footer-link-block':
      import('./chunk-778cd381.js');
      break;

    case 'uc-footer-apps':
      import('./chunk-8261ed22.js');
      break;

    default:
      break;
  }
}
//# sourceMappingURL=index.js.map
