describe('test histories in comparison', () => {
    // список названий автомобилей в списке
    const listNameCar = [];
    // получаем количество машин в сравнении
    const numberCar = () => browser.getText('.avn003__action-item__counter');
    // начальное количетсво машин в сравнении
    let initialNumber = 0;
    // текущие количетсво машин в сравнении
    let currentNumber;

    before('open page list', () => {
        browser.helpers.openListNfz();
    });

    // добавляем машины в сравнение
    it('Add to comparison', function() {
        this.retries(3);
        // добавляем машины в сравнение
        for( let i = 1; i <= 4; i++ ) {
            // путь к конкретной карточке
            let path = `.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(${i})`;
            browser.click(`${path} .avn001-2_action-item_icon`);
            // проверяем, что количество машин в сравнении изменилось
            currentNumber = +numberCar();
            browser.waitUntil(
                () => currentNumber === (initialNumber + 1),
                5000, "Количество автомобилей в поле сравнения не изменилось");

            // приравниваем текущие число машин к начальному 
            initialNumber = currentNumber;
            // ожидаем появления текста 
            browser.waitForVisible(`${path} .avn001-2_model-name`);
            // получаем имя автомобиля
            const nameCar = browser.getText(`${path} .avn001-2_model-name`);
            
            listNameCar.push(nameCar);
            console.log(listNameCar);
        }
    });

    // переходим в раздел сравнить 
    it('Go to page comparison', function() {
        this.retries(3);
        // проверяем что кнопка видна
        browser.waitForVisible('.avn003_column-right .avn003__action-item.with-text');
        // кликаем на данную кнопку
        browser.click('.avn003_column-right .avn003__action-item.with-text');
        // проверяем, что перешли именно на страницу сравнения
        const URL = browser.getUrl();
        browser.waitUntil(
            () => URL === 'https://nfz.kodix.ru/comparison',
            5000, `Ожидался переход на страницу сравненения, а перешли на ${URL}`);

        // проверяем что в тайтле нужное количество автомобилей
        const title = browser.getText('.avn003_title h3');
        // получаем число из всей строки
        const lot = +title.replace( /\D+/ig , '');
        // сраниваем
        browser.waitUntil(
            () => lot === initialNumber,
            5000, "Начальное число автобобмлей не равно текущему");
    }); 

    // проверяем количество автомобилей
    it(' Check number car in comparison', function() {
        this.retries(3);
        // получаем количество автомобилей
        const numberCarComparison = $$('.avn006_cell-inner.is_visible').length;
        // сравниваем с количеством в списке
        browser.waitUntil(
            () => numberCarComparison === initialNumber,
            5000, "Количество автомобилей в списке отличается от начального");
        // ожидаем загрузки текста
        browser.waitForVisible('.avn006-1_head-cell__text a');
        // получаем имена автомобилей на странице сравления 
        const listNameComparison = browser.getText('.avn006-1_head-cell__text a');

        // сравниваем имена машин 
        console.log(listNameComparison);
        // проверяем совпадение массивов
        const result = browser.helpers.compareArray(listNameComparison, listNameCar);
        // считаем количество несовпадений между массивами
        const emptyArray = result.length;
        // количество элементов в массиве не должно быть больше 0
        browser.waitUntil(
            () => (emptyArray == 0) === true,
            5000, `${result[0]} нет на странице сравнения`);
    });

    // проверяем работу хистори
    it('Check histori in comparison', function() {
        this.retries(3)
        // кликаем на кнопку вернуться
        browser.click('.link-back .icon-link');
        // проверяем, что вернулись к списку
        const backURL = browser.getUrl();
        expect(backURL).to.be.equal('https://nfz.kodix.ru/');
    });
});