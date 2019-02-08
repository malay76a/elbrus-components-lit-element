import loadPolyfills from '@open-wc/polyfills-loader';

loadPolyfills().then(() => import('./dynamic-components.js'));