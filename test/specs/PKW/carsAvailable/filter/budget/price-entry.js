import faker from 'faker'

describe('online-payments', () => {

    const leftButtun = () => browser.getLocation('.rc-slider-handle-1');
    const rightButton =() => browser.getLocation('.rc-slider-handle-2');
    // начальная позиция левой кнопки
    let startingPositionLeft;
    // новая почици левой кнопки
    let newPositionLeft;
    // начальная позиция правой кнопки
    let startingPositionRight;
    // новая позиция правой кнопки
    let newPositionRight;

    before(() => {
        browser.helpers.openSite();
    });

     // переходим на страницу бюджета
     it('page budget', () => {
        // кликаем по кнопке Бюджет
        browser.click('.avn008_filter__tab[data-name="Бюджет"]');
        // ожидаем перехода на страницу 
        browser.waitForExist('.gridcontainer.avn008_filter__grid-align');
        // получаем позиции кнопок ползунка
        startingPositionLeft = leftButtun();
        startingPositionRight = rightButton();

        // проверяем что координаты не равны null
        expect(startingPositionLeft).to.not.equal(null);
        expect(startingPositionRight).to.not.equal(null);
    });

    // вводим свою минимальную цену
    it('conclusion of the minimum price', () => {
        const priseOne = 'div:nth-child(1) > .avn008_budget__price-item-self > div.avn008_budget__price-item-self-text > input[type="text"]';
        const priseTwo = 'div:nth-child(3) > .avn008_budget__price-item-self > div.avn008_budget__price-item-self-text > input[type="text"]';
        // очищаем поле ввода
        browser.clearElement(priseOne);
        // вводим цену
        browser.setValue(priseOne, faker.random.number({min: 600000, max: 1500000}));
        // очищаем поле
        browser.clearElement(priseTwo);
        // вводим цену
        browser.setValue(priseTwo, faker.random.number({min: 2000000, max: 4000000}));
        // вынужденный клик, без него цена сьрасывается на дефолтную 
        browser.click('form');
    });

        // проверяем что кнопки поменяли своё положение
        it('check position button', () => {
            newPositionLeft = leftButtun();
            newPositionRight = rightButton();

            //проверяем что координаты не равны null 
            expect(newPositionLeft).to.not.equal(null);
            expect(newPositionRight).to.not.equal(null);
            
            // проверяем что изменились координаты левой кнопки
            expect(newPositionLeft).to.not.equal(startingPositionLeft);
            // проверяем что изменились координаты правой кнопки
            expect(startingPositionRight).to.not.equal(newPositionRight);
        });

        // проверяем, что условие фильтра сбрасывается
        it('Check that the filter is cleared', () => {
            // сбрасываем условие фильтра
            browser.click('.avn008_overlay_bar_column-left .avn008_overlay_bar_action-item');
            // ждём пока подвал станет активным
            browser.waitUntil(
                () => browser.isExisting('.avn008_overlay_bar.avn008_overlay_bar--progress') === false,
                10000, "Подвал не стал активным после 10 секунд ожидания");

            newPositionLeft = leftButtun();
            newPositionRight = rightButton();
            // проверяем, что они равны изначальным
            browser.waitUntil(
                () => (newPositionLeft.x == startingPositionLeft.x) === true,
                5000, "ERROR - слайдер не изменил свою поцию на изначальную при очистке фильтра");
            browser.waitUntil(
                () => (newPositionRight.x == startingPositionRight.x) === true,
                5000, "ERROR - слайдер не изменил свою поцию на изначальную при очистке фильтра");
    });
});
