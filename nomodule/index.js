System.register([], function (exports, module) {
  'use strict';
  return {
    execute: function () {

      /**
       * Web component polyfills loader, based on: https://github.com/webcomponents/webcomponentsjs/blob/master/webcomponents-loader.js
       *
       * Adapted to not load language polyfills and use dynamic imports
       */
      function needsTemplatePolyfill() {
        // no real <template> because no `content` property (IE and older browsers)
        var template = document.createElement('template');

        if (!('content' in template)) {
          return true;
        } // broken doc fragment (older Edge)


        if (!(template.content.cloneNode() instanceof DocumentFragment)) {
          return true;
        } // broken <template> cloning (Edge up to at least version 17)


        var template2 = document.createElement('template');
        template2.content.appendChild(document.createElement('div'));
        template.content.appendChild(template2);
        var clone = template.cloneNode(true);
        return clone.content.childNodes.length === 0 || clone.content.firstChild.content.childNodes.length === 0;
      }
      /**
       * Loads web component polyfills if needed
       * @returns {Promise<void>} resolves when polyfills are loaded
       */


      function loadPolyfills() {
        var polyfills = [];
        var needsTemplate = needsTemplatePolyfill();
        var needsShadowDom = !('attachShadow' in Element.prototype) || !('getRootNode' in Element.prototype) || window.ShadyDOM && window.ShadyDOM.force;
        var needsCustomElements = !window.customElements || window.customElements.forcePolyfill; // URL is required by webcomponents polyfill
        // We can use URLSearchParams as a watermark for URL support

        if (!('URLSearchParams' in window)) {
          polyfills.push(module.import('./chunk-3e198b68.js'));
        }

        if (needsTemplate) {
          // template is a watermark for requiring all polyfills (IE11 and Edge)
          polyfills.push(module.import('./chunk-a258e974.js'));
        } else if (needsShadowDom || needsCustomElements) {
          // only chrome 53 supports shadow dom but not custom elements. this is an older browser, there is no need
          // for complicating the setup here. there is no harm in loading the polyfills there
          polyfills.push(module.import('./chunk-d843d68f.js'));
        }

        return Promise.all(polyfills);
      }

      loadPolyfills().then(function () {
        var allTag = Array.from(document.querySelectorAll('*'));
        var uniqCustomElement = new Set(allTag.filter(function (i) {
          return i.tagName.includes('-');
        }).map(function (i) {
          return i.tagName.toLowerCase();
        }));
        uniqCustomElement.forEach(function (i) {
          return lazyLoadCustomElement(i);
        });
      });

      function lazyLoadCustomElement(tag) {
        switch (tag) {
          case 'uc-app':
            module.import('./chunk-ad97807e.js');
            break;

          case 'uc-nckd':
            module.import('./chunk-45bffcea.js');
            break;

          case 'uc-header-panel':
            module.import('./chunk-801d76b2.js');
            break;

          case 'uc-header':
            module.import('./chunk-07d982bf.js');
            break;

          case 'uc-container':
            module.import('./chunk-91733622.js');
            break;

          case 'uc-header-catalog':
            module.import('./chunk-7d532c02.js');
            break;

          case 'uc-header-shop-list':
            module.import('./chunk-7ee64479.js');
            break;

          case 'uc-header-basket':
            module.import('./chunk-d4e16f9b.js');
            break;

          case 'uc-seo-block':
            module.import('./chunk-083a355f.js');
            break;

          case 'uc-breadcrumb-list':
            module.import('./chunk-f12a695c.js');
            break;

          case 'uc-page-title':
            module.import('./chunk-627d17e7.js');
            break;

          case 'uc-facet-and-list':
            module.import('./chunk-0fba93a6.js');
            break;

          case 'uc-plp-wrapper':
            module.import('./chunk-e1d1cff6.js');
            break;

          case 'uc-plp-list':
            module.import('./chunk-59963554.js');
            break;

          case 'uc-plp-item':
            module.import('./chunk-8e799234.js');
            break;

          case 'uc-facets-list':
            module.import('./chunk-18dc8496.js');
            break;

          case 'uc-current-filter':
            module.import('./chunk-953e70f0.js');
            break;

          case 'uc-facet-toggle':
            module.import('./chunk-c40593b0.js');
            break;

          case 'uc-footer':
            module.import('./chunk-0738d728.js');
            break;

          case 'uc-footer-menu':
            module.import('./chunk-b65674ba.js');
            break;

          case 'uc-footer-link-block':
            module.import('./chunk-8d54af1a.js');
            break;

          case 'uc-footer-apps':
            module.import('./chunk-2335cca1.js');
            break;

          default:
            break;
        }
      }

    }
  };
});
//# sourceMappingURL=index.js.map
