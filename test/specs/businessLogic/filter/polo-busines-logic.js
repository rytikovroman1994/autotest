describe('test polo busines logic', () => {
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

    // выбираем модель polo
    it('select the model polo', () => {
        // наводимся на поле карточки модели поло
        browser.moveToObject('.slick-slide.slick-active.slick-current', 50 , 50);
        // выбираем комплектацию 
        browser.click('.slick-active.slick-current div:nth-child(3) > div.avn008_car__kit > label:nth-child(4) > div');
        // ждём появления условия
        browser.waitForExist('.avn008_filter-value-list .avn008_filter-value-item');
        // проверяем, что в фильтре появилось условие 
        currentNumber = numberConditions().length;
        expect(currentNumber).to.be.equal(startingNumber + 1);
        // проверяем что данное условие имеет имя polo
        const polo = browser.getText('div:nth-child(1) > div.avn008_filter-value-item__inner .avn008_filter-value-item_text');
        expect(polo).to.be.equal('POLO');
    });

    // выбираем условие онлайн-олата
    it('choose online payment', () => {
        // пеерходим на страницу бюджет
        browser.click('#react-tabs-2');
        // нажимаем на чекбокс 
        browser.click('.icon-nextstep-checkmark');
        // проверяем что в фильтре появилось условие онлайн оплата
        currentNumber = numberConditions().length;
        expect(currentNumber).to.be.equal(startingNumber + 2);
        const polo = browser.getText('div:nth-child(2) > div.avn008_filter-value-item__inner .avn008_filter-value-item_text');
        expect(polo).to.be.equal('ОНЛАЙН ОПЛАТА');
    });

    // выбираем цвет кузова
    it('shoose body color', () => {
        // переходим на страницу экстерьер
        browser.click('#react-tabs-6');
        // ожидаем загрузку картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // выбираем чёрный цвет кузова
        browser.click('div:nth-child(11) label');
        // проверяем, что добавилось условие цвет кузова
        currentNumber = numberConditions().length;
        expect(currentNumber).to.be.equal(startingNumber + 3);
        const polo = browser.getText('div:nth-child(3) > div.avn008_filter-value-item__inner .avn008_filter-value-item_text');
        expect(polo).to.be.equal('ЦВЕТ КУЗОВА');
    });

    // выбираем вид фар
    it('shoose light', () => {
        // переходим на страницу свет
        browser.click('#react-tabs-16');
        // выбираем галоген 
        browser.click('.rc-slider-step > span:nth-child(1)');
        // проверяем что добавилось условие галоген
        currentNumber = numberConditions().length;
        expect(currentNumber).to.be.equal(startingNumber + 4);
        const polo = browser.getText('div:nth-child(4) > div.avn008_filter-value-item__inner .avn008_filter-value-item_text');
        expect(polo).to.be.equal('ГАЛОГЕН');
        // вынужденная пауза из-за того, что не всегда считает точно
        browser.pause(1000);
    });

    // считаем количество найденых автомобилей и переходим к списку
    it('get the number of cars', () => {
        // получаем число количества автомобилей
        filterMachines = +getCars();
        // получаем минимальною цену автомобиля
        const minPriceCars = minPrice();
        // избавляемся от пробела
        const minPriceCarsDelete = minPriceCars.replace(/\s/g, "");
        // преобразуем в число
        numberPriseCarS = +minPriceCarsDelete;
        // наводимся на кнопку показать 
        browser.moveToObject('.avn008_overlay_submit-block_btn');
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
    it('check the available list of cars', () => {
        let number = listMachines().length;
        expect(number).to.be.equal(filterMachines);
        for( let i = 1; i <= 4; i++ ) {
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

        for( let i = 1; i <= number - 4; i++ ) {
            let card = `.avn001_display__enable-hover > div:nth-child(2) .grid_l_3:nth-child(${i})`
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
    });
});