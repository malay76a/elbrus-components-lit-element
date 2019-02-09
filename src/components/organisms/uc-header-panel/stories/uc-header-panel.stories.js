import { document, console } from 'global';
import { storiesOf } from '@storybook/polymer';
import '../uc-header-panel.js';

storiesOf('Test', module)
    .add('uc-header-panel', () => {
        const el = document.createElement('uc-header-panel');
        el.innerHTML = `
            <uc-header-panel-location region="Кострома"></uc-header-panel-location>
            <uc-header-panel-nav>
                <a href="/advice/" data-icon="advice">
                    Советы
                </a>
                <a href="/shop/kostroma/service/" data-icon="services">
                    Услуги
                </a>
                <a href="/shop/" data-icon="shops">
                    Магазины
                </a>
                <a href="/postavshchikam/" data-icon="lifebuoy">
                    Поставщикам
                </a>
                <a href="/faq/" data-icon="faq">
                    FAQ
                </a>
            </uc-header-panel-nav>
            <uc-header-panel-user-profile>
            </uc-header-panel-user-profile>
        `;
        return el;
    });