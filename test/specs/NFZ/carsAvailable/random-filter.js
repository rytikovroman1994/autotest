import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test random-filter', () => {
    // вынес функцию генерации рандомного допустимого числа
    function randomNumber(number) {
        const randomCar = Math.random() * number.length;
        const rand = Math.round(randomCar);
        return rand;
    };

    before('open page folter', () => {
        browser.helpers.openFilter();
    });

    // выбираем модель и комплектацию автомобиля
    it('Choose model car', () => {
        //  получаем количество доступных моделей
        const numberCar = $$('.avn008_car:not(.avn008_car--disabled)');
        const randCar = randomNumber(numberCar);
        // выбираем один из доступных автомобилей 
        numberCar[randCar].click();

        // ожидаем появления окна с комплектациями
        browser.waitUntil(
            () => browser.isVisible('.avn008_kits__inner'),
            5000, " Окно с комплектациями автомобиля не появилось");
        // получаем количество доступных комплектаций 
        const numberEquipment = $$('.avn008_kits__btn:not(.avn008_kits__btn--disabled)');
        const randEquipment = randomNumber(numberEquipment);
        // выбираем одну из доступных комплектаций
        numberEquipment[randEquipment].click();
        // ожидаем появления автомобиля в фильтре
        browser.waitUntil(
            () => browser.isVisible('.avn008_filter-value-item'),
            5000, "Автомиобиль не появился в фильтре");
        // закрываем окно выбора комплектации
        browser.click('.avn008_kits__close');
        browser.pause(1000);
    });

    // выбираем доступную комплектацию на странице Двигатель
    it('Choose equipment in page Ingine', () => {
        // ждём появления кнопки Двигатель
        browser.waitForVisible('.avn008_filter__tab[data-name="Двигатель"]');
        // переходим на страницу Двигатель
        NfzFilter.engine();
        // получаем количество доступных чекбоксов 
        const numberChecbox = $$('.checkbox--transparent:not(.is_disabled)');
        const rundChecbox = randomNumber(numberChecbox);
        // выбираем один из доступных чекбоксов
        numberChecbox[rundChecbox].click();
        // ожидаем появления второго условия в фильтре
        browser.waitUntil(
            () => $$('.avn008_filter-value-item').length === 2,
            5000, "Второе условие не появилось в фильтре");
        browser.pause(1000);
    });

    // выбираем цвет автомобиля
    it('Choose color body car', () => {
        // переходим на страницу Цвет
        NfzFilter.color();
        // ждём появления иконок цвет
        browser.waitForVisible('.avn_color-container--enabled');
        // скролим до появления чекбоксов 
        browser.scroll(0, 100);
        // получаем количетсво доступных цветов 
        const numberColors = $$('.avn008_color-colors > div > div:not(.avn_color-container--disabled)');
        const rundColor = randomNumber(numberColors);
        // выбираем один из доступныз чекбокосов 
        numberColors[rundColor].click();
        // ожидаем появления третьего условия в фильтре 
        browser.waitUntil(
            () => $$('.avn008_filter-value-item').length === 3,
            5000, "Цвет кузова не появился в фильтре");
        browser.pause(1000);
    });

    // выбираем комплектацию экстерьера 
    it('Choose exsterier', () => {
        // переходим на страницу экстерьер
        NfzFilter.exterior();
        // получаем количество доступных чекбоксов
        const numberChecbox = $$('.checkbox--transparent:not(.is_disabled)');
        const rundChecbox = randomNumber(numberChecbox);
        // выбираем один из доступных чекбоксов
        numberChecbox[rundChecbox].click();
        // ожидаем появления второго условия в фильтре
        browser.waitUntil(
            () => $$('.avn008_filter-value-item').length === 4,
            5000, "Четвёртое условие не появилось в фильтре");
        // ждём пока перерендерится чекбоксы 
        browser.pause(1000);
    });

    // выбираем комплектацию интрерьера 
    it('Choose interior', () => {
        // переходим на страницу интерьера
        NfzFilter.interior();
        // получаем количество доступных чекбоксов
        const numberChecbox = $$('.checkbox--transparent:not(.is_disabled)');
        const rundChecbox = randomNumber(numberChecbox);
        // выбираем один из доступных чекбоксов
        numberChecbox[rundChecbox].click();
        // ожидаем появления второго условия в фильтре
        browser.waitUntil(
            () => $$('.avn008_filter-value-item').length === 5,
            5000, "Пятое условие не появилось в фильтре");
        // ждём пока перерендерится чекбоксы 
        browser.pause(1000);
    });
});
