import NfzFilter from 'Pageobjects/nfz-filter.js'
const fs = require('fs');

describe('test random-filter', () => {
    // вынес функцию генерации рандомного допустимого числа
    function randomNumber(number) {
        const randomCar = Math.random() * number.length;
        const rand = Math.round(randomCar);

        // проверка на допустимый символ
         if(rand == number) {
            return rand - 1;
        } else {
            return rand;
        }
    };

    // выносим шаги действий теста
    const stapTest = [];

    before('open page folter', () => {
        browser.helpers.openFilter();
    });

    // выбираем модель и комплектацию автомобиля
    it('Choose model car', () => {
        // ожидаем появления автомобилей
        browser.waitForVisible('.avn008_car__wrap img');
        //  получаем количество доступных моделей
        const numberCar = $$('.avn008_car:not(.avn008_car--disabled)');
        browser.pause(1000);
        const randCar = randomNumber(numberCar);
        const button = numberCar[randCar];
        // выбираем один из доступных автомобилей 
        button.click();
        // получаем модель автомобиля 
        const nameCar = browser.getText('.avn008_car--selected .avn008_car__title');
        stapTest.push(`Выбрали модель автомобиля - ${nameCar}`);

        // ожидаем появления окна с комплектациями
        browser.waitUntil(
            () => browser.isVisible('.avn008_kits__inner'),
            5000, " Окно с комплектациями автомобиля не появилось");
        // получаем количество доступных комплектаций 
        const numberEquipment = $$('.avn008_kits__btn:not(.avn008_kits__btn--disabled)');
        const randEquipment = randomNumber(numberEquipment);
        const button2 = numberEquipment[randEquipment];
        // выбираем одну из доступных комплектаций
        button2.click();
        // получаем имя комплектации 
        const nameEquipment = browser.getText('.avn008_kits__btn--selected .avn008_kits__btn-title');
        stapTest.push(`Выбрали модель автомобиля - ${nameEquipment}`);
        // закрываем окно выбора комплектации
        browser.click('.avn008_kits__close');
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
        const button = numberChecbox[rundChecbox];
        // выбираем один из доступных чекбоксов
        button.click();
        // получаем имя выбранного условия
        const nameTextBotton = browser.getText('.avn008_overlay_bar_column-center > div > div > div:nth-child(2) .avn008_filter-value-item_text__bottom');
        stapTest.push(`Выбрали условие на станице двигатель - ${nameTextBotton}`);
    });

    // выбираем цвет автомобиля
    it('Choose color body car', () => {
        // переходим на страницу Цвет
        NfzFilter.color();
        browser.waitForVisible('.avn_color-container--enabled');
        // скролим до появления чекбоксов 
        browser.scroll(0, 100);
        // получаем количетсво доступных цветов 
        const numberColors = $$('.avn008_color-colors > div > div:not(.avn_color-container--disabled)');
        const rundColor = randomNumber(numberColors);
        const button = numberColors[rundColor];
        // выбираем один из доступныз чекбокосов 
        button.click();
        // получаем выбранный цвет кузова 
        const nameColor = browser.getAttribute('.avn008_image-switcher_container img', 'src');
        stapTest.push(nameColor);
    });

    // выбираем комплектацию экстерьера 
    it('Choose exsterier', () => {
        // переходим на страницу экстерьер
        NfzFilter.exterior();
        // ждэм перерендер 
        browser.pause(3000);
        // получаем количество доступных чекбоксов
        const numberChecbox = $$('.checkbox--transparent:not(.is_disabled)');
        const rundChecbox = randomNumber(numberChecbox);
        const button = numberChecbox[rundChecbox];
        // выбираем один из доступных чекбоксов
        button.click();
        // получаем имя выбранного условия
        const nameTextBotton = browser.getText('.avn008_overlay_bar_column-center > div > div > div:nth-child(4) .avn008_filter-value-item_text__bottom');
        stapTest.push(`Выбрали условие на станице экстерьер - ${nameTextBotton}`);
    });

    // выбираем комплектацию интрерьера 
    it('Choose interior', () => {
        // переходим на страницу интерьера
        NfzFilter.interior();
        // ждэм перерендер 
        browser.pause(3000);
        // получаем количество доступных чекбоксов
        const numberChecbox = $$('.checkbox--transparent:not(.is_disabled)');
        const rundChecbox = randomNumber(numberChecbox);
        const button = numberChecbox[rundChecbox];
        // выбираем один из доступных чекбоксов
        button.click();
        // получаем имя выбранного условия
        const nameTextBotton = browser.getText('.avn008_overlay_bar_column-center > div > div > div:nth-child(5) .avn008_filter-value-item_text__bottom');
        stapTest.push(`Выбрали условие на станице интерьер - ${nameTextBotton}`);
    });

    it(`test ${stapTest[1]}`, () => {
        console.log(stapTest);
        fs.writeFile('./stapTest.json', stapTest , 'utf-8');
    });
});
