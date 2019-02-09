import { document, console } from 'global';
import { storiesOf } from '@storybook/polymer';
import '../uc-nckd.js';

storiesOf('Test', module)
    .add('uc-nckd', () => {
        const el = document.createElement('uc-nckd');
        el.innerHTML = '<a href="/company/nizkiye-ceny-kazhdiy-den/" target="_blank">НИЗКИЕ ЦЕНЫ КАЖДЫЙ ДЕНЬ</a>';
        return el;
    });