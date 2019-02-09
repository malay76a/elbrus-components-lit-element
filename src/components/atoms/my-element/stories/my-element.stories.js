import { document, console } from 'global';
import { storiesOf } from '@storybook/polymer';
import '../my-element.js';

storiesOf('Test', module)
    .add('my-element', () => {
        const el = document.createElement('my-element');
        return el;
    })