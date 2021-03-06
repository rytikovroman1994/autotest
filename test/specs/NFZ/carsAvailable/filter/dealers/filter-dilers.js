import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test page diler', () => {
    let nameDilerFilter;

    before('open page filter', () => {
        browser.helpers.openFilter();
    });

    // выбираем автомобиль
    it('Choose car', function() {
        this.retries(6);
        // выбираем модель
        browser.click('.avn008_car__wrap[data-name="Caddy (коммерческий)"]');
        // ожидаем появления кнопки нужной комплектации
        browser.waitForVisible('.grid_l_9 > div > div:nth-child(1)');
        // выбираем данную комплектацию 
        browser.click('.grid_l_9 > div > div:nth-child(1)');
        // закрываем окно комплектаций
        browser.click('.avn008_kits__close');
    });

    it('Chose page diler', function() {
        this.retries(3);
        // переходим на страницу дилеры
        NfzFilter.dilers();
        // выбираем первого дилера
        browser.click('div:nth-child(1) > div > div.grid_l_3 label');
        // получаем имя диллера 
        nameDilerFilter = browser.getText('div:nth-child(1) > div > div.grid_l_3 label .checkbox__title');
        // ждём пока кнопка Показать станет активной
        browser.waitUntil(
            () => browser.isExisting('avn008_overlay_bar--progress') === false,
            10000, "Кнопка Показать не активна в течении 10 секунд");
        // переходим к списку 
        NfzFilter.show();
    });

    it('Check model and diler', function() {
        this.retries(3);
        // ожидаем пока перерендерятся карточки
        browser.pause(2000);
        // проверяем что в списке только выбранные автомобили
        const nameCar = browser.getText('div:nth-child(1) > div > div > div.gridcontainer .avn001-2_model-name');
        console.log(nameCar);
        browser.waitUntil(
            () => (nameCar === 'Caddy Kasten') === true,
            5000, "Модель в списке не соответвует выбранной в фильтре");
        
        // проверяем дилера 
        const nameDiler = browser.getText('div:nth-child(1) > div > div > div.gridcontainer .avn001-2_dealer-link__text');
        browser.waitUntil(
            () => (nameDiler === nameDilerFilter) === true,
            5000, "Дилер в списке не соответвует выбранной в фильтре");
    });
});