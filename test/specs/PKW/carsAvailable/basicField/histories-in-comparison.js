import PkwFilter from 'Pageobjects/pkw-filter.page.js'

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
        browser.helpers.openList();
    });

    // добавляем машины в сравнение
    it('Add to comparison', function() {
        this.retries(3);
        // добавляем машины в сравнение
        for( let i = 1; i <= 4; i++ ) {
            browser.click(`div:nth-child(1) > div > div > div:nth-child(${i}) > div > div > div > div:nth-child(5) > div > div:nth-child(1) .avn001-2_action-item_icon`);
            // проверяем, что количество машин в сравнении изменилось
            currentNumber = +numberCar();
            expect(currentNumber).to.be.equal(initialNumber + 1);

            // приравниваем текущие число машин к начальному 
            initialNumber = currentNumber;
            // ожидаем появления текста 
            browser.waitForVisible(`.avn001_display div:nth-child(1) > div > div > div:nth-child(${i}) > div > div > div > div:nth-child(2) .avn001-2_main.base-typo > h5`);
            // получаем имя автомобиля
            const nameCar = browser.getText(`.avn001_display div:nth-child(1) > div > div > div:nth-child(${i}) > div > div > div > div:nth-child(2) .avn001-2_main.base-typo > h5`);
            
            listNameCar.push(nameCar);
        }
    });

    // переходим в раздел сравнить 
    it('Go to page comparison', function() {
        this.retries(3);
        // проверяем что кнопка видна
        browser.waitForVisible('.avn003_column-right .avn003__action-item.with-text');
        // кликаем на данную кнопку
        PkwFilter.compare();
        // проверяем, что перешли именно на страницу сравнения
        const URL = browser.getUrl();
        expect(URL).to.be.equal('https://vw.kodix.ru/comparison');

        // проверяем что в тайтле нужное количество автомобилей
        const title = browser.getText('.avn003_title h3');
        // получаем число из всей строки
        const lot = +title.replace( /\D+/ig , '');
        // сраниваем
        expect(lot).to.be.equal(initialNumber);
    }); 

    // проверяем количество автомобилей
    it(' Check number car in comparison', function() {
        this.retries(3);
        // получаем количество автомобилей
        const numberCarComparison = $$('.avn006_cell-inner.is_visible').length;
        // сравниваем с количеством в списке
        expect(numberCarComparison).to.be.equal(initialNumber);

        // ожидаем загрузки последней картинки автомобиля
        browser.waitForVisible('div:nth-child(4) .avn006-1_head-cell__image img');
        // ожидаем пока прорекдерится картинка
        browser.pause(3000);
        // получаем имена автомобилей на странице сравления 
        const listNameComparison = browser.getText('.avn006-1_head-cell__text a');

        // сравниваем имена машин 
        console.log(listNameComparison);
        const result = browser.helpers.compareArray(listNameComparison,listNameCar);
        // считаем количество несовпадений между массивами
        const emptyArray = result.length;
        // количество элементов в массиве не должно быть больше 0
        browser.waitUntil(
            () => (emptyArray == 0) === true,
            5000, `${result[0]} нет на странице сравнения`);
    });

    // проверяем работу хистори
    it('Check histori in comparison', function() {
        this.retries(3);
        // кликаем на кнопку вернуться
        browser.click('.link-back .icon-link');
        // проверяем, что вернулись к списку
        const backURL = browser.getUrl();
        expect(backURL).to.be.equal('https://vw.kodix.ru/');
    });
});