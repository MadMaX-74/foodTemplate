require('es6-promise/auto');
import 'nodelist-foreach-polyfill';

import tabs from './src/modules/tabs';
import modal from './src/modules/modal';
import timer from './src/modules/timer';
import cards from './src/modules/cards';
import calculator from './src/modules/calculator';
import forms from './src/modules/forms';
import slider from './src/modules/slider';
import { showModal } from './src/modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => showModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal');
    timer('.timer', '2021-12-31');
    cards();
    calculator();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        slide: '.offer__slide'
    });
});