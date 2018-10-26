const helper = require('protractor-firefox-support');

describe('test Polo busines logic', () => {
    // получаем количетсво условий для фильтра
    const numberConditions = () => $$('.avn008_filter-value-list .avn008_filter-value-item');
    // получаем число количества автомобилей
    const getCars = () => browser.getText('.avn008_overlay_submit-block_amount span');
    // получаем минимальную цену автомобиля 
    const minPrice = () => browser.getText('.avn008_overlay_submit-block_price-display .price-text');
    // проверяем что количество автомобилей в списке равно количеству в фильтре
    const listMachines = () => $$('.avn001-2_content');
    // начальное число условий в фильтре
    let startingNumber;
    // действующее количетво условий в фильтре
    let currentNumber;
    // количество автобомилей в фильтре
    let filterMachines;
    // минимальная цена автомобиля
    let numberPriseCarS;

    before('open page model', () => {
        browser.helpers.openSite();
        // получаем количество условий в фильтре 
        startingNumber = numberConditions().length;
    });

    // выбираем модель Polo
    it('Select the model Polo', () => {
        // очень не хороший костыль, который необзодим, ибо в докере в фф не работает команда moveToObject
        browser.execute(() => {
            document.querySelector('.slick-initialized > div > div > div:nth-child(2) div:nth-child(3) > div.avn008_car__kit > label:nth-child(2) > div').click();
          });
        browser.waitForExist('.avn008_filter-value-list .avn008_filter-value-item');
        // проверяем, что в фильтре появилось условие 
        currentNumber = numberConditions().length;
        expect(currentNumber).to.be.equal(startingNumber + 1);
        // проверяем что данное условие имеет имя Polo
        const Polo = browser.getText('div:nth-child(1) > div.avn008_filter-value-item__inner .avn008_filter-value-item_text');
        expect(Polo).to.be.equal('POLO');
    });

    // выбираем условие онлайн-олата
    it('Choose online payment', () => {
        // пеерходим на страницу бюджет
        browser.click('.avn008_filter__tab[data-name="Бюджет"]');
        // нажимаем на чекбокс 
        browser.click('.checkbox[data-name="Онлайн-оплата"]');
        // проверяем что в фильтре появилось условие онлайн оплата
        browser.waitUntil(
            () => browser.isVisible('div:nth-child(2) > div.avn008_filter-value-item__inner .avn008_filter-value-item_text') === true,
            5000, "Кнопка онлайн оплаты не доступна");
        currentNumber = numberConditions().length;
        expect(currentNumber).to.be.equal(startingNumber + 2);
        const Polo = browser.getText('div:nth-child(2) > div.avn008_filter-value-item__inner .avn008_filter-value-item_text');
        expect(Polo).to.be.equal('ОНЛАЙН ОПЛАТА');
    });

    // выбираем цвет кузова
    it('Choose body color', () => {
        // переходим на страницу экстерьер
        browser.click('.avn008_filter__tab[data-name="Экстерьер"]');
        // ожидаем загрузку картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // выбираем чёрный цвет кузова
        browser.click('div:nth-child(9) label');
        // проверяем, что добавилось условие цвет кузова
        currentNumber = numberConditions().length;
        expect(currentNumber).to.be.equal(startingNumber + 3);
        const Polo = browser.getText('div:nth-child(3) > div.avn008_filter-value-item__inner .avn008_filter-value-item_text');
        expect(Polo).to.be.equal('ЦВЕТ КУЗОВА');
    });

    // считаем количество найденых автомобилей и переходим к списку
    it('Get the number of cars', () => {
        // получаем число количества автомобилей
        filterMachines = +getCars();
        // получаем минимальною цену автомобиля
        const minPriceCars = minPrice();
        // избавляемся от пробела
        const minPriceCarsDelete = minPriceCars.replace(/\s/g, "");
        // преобразуем в число
        numberPriseCarS = +minPriceCarsDelete;
        // переходим к списку доступных автомобилей
        browser.click('.avn008_overlay_submit-block_btn');
        // проверяем что поле фильтра скрылось
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_model_align-center-vertical') === false,
        5000, "Окно фильтра всё ещё видно");
        // ждём появления карточки автомобиля
        browser.waitForVisible('.avn001-2_content');
    });

    // проверяем количество карточек и условия фильтра в каждой из них 
    it('Check the available list of cars', () => {
        let number = listMachines().length;
        for( let i = 1; i <= 1; i++ ) {
            let card = `.avn001_display__enable-hover > div:nth-child(1) .grid_l_3:nth-child(${i})`
            // получаем модель и комплектацию машины
            const carName = browser.getText(`${card} .avn001-2_model-name`);
            // так как могут быть разные комплектации вычленяем только модель
            const brandMachine = String(carName).match(/(Polo)/i);
            // проверяем что все машины модели поло
            expect(brandMachine[1]).to.be.include('Polo');
            // проверяем что у всех машит есть онлайн оплата
            browser.waitForVisible(`${card} .avn001-2_tags`);
            // получаем цену каждого автобобиля
            const carPrice = browser.getText(`${card} .price-text`);
            console.log(carPrice);
            // убираем пробел 
            const carPriceDelete = carPrice.replace(/\s/g, "");
            console.log(carPriceDelete);
            // преобразуем в число
            const numberCarPrice = +carPriceDelete;
            console.log(numberCarPrice);
            // проверяем что у всех машим цена не менее указанной в фильтре
            expect(numberCarPrice).to.be.least(numberPriseCarS);
        }

        if(number > 4) {
            for( let i = 1; i <= number - 4; i++ ) {
                let card = `.avn001_display__enable-hover > div:nth-child(3) .grid_l_3:nth-child(${i})`
                // получаем модель и комплектацию машины
                const carName = browser.getText(`${card} .avn001-2_model-name`);
                // так как могут быть разные комплектации вычленяем только модель
                const brandMachine = String(carName).match(/(Polo)/i);
                // проверяем что все машины модели поло
                expect(brandMachine[1]).to.be.include('Polo');
                // проверяем что у всех машит есть онлайн оплата
                browser.waitForVisible(`${card} .avn001-2_tags`);
                // получаем цену каждого автобобиля
                const carPrice = browser.getText(`${card} .price-text`);
                console.log(carPrice);
                // убираем пробел 
                const carPriceDelete = carPrice.replace(/\s/g, "");
                console.log(carPriceDelete);
                // преобразуем в число
                const numberCarPrice = +carPriceDelete;
                console.log(numberCarPrice);
                // проверяем что у всех машим цена не менее указанной в фильтре
                expect(numberCarPrice).to.be.least(numberPriseCarS);
            }
        }
    });
});