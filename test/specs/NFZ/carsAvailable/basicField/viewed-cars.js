import NfzListPage from 'Pageobjects/nfz-list.page.js'
import NfzDetail from 'Pageobjects/nfz-detail.page.js'

describe('test viewed cars', () => {
    // список id карточки
    const list = [];

    Array.prototype.diff = function(a) {
        return this.filter(function(i){
            return a.indexOf(i) < 0;});
    };

    before('open page list', () => {
        browser.helpers.openListNfz();
    });

    // получаем id первых 4 карточек
    it('Get list id cars', () => {
        for( let i = 1; i <= 4; i++ ) {
            // получаем ид автомобиля
            const idCar = browser.getAttribute(`.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(${i}) .avn001-2_catalogue-item`, 'data-carid');
            // записываем ид в массив
            list.push(idCar);
            // переходим в данную карточку
            browser.click(`.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(${i}) img`);
            // ждём пока загрузится картинка
            browser.waitForVisible('.preview_img-inner .image-container img', 40000);
            // возращаемся к списку
            browser.click('.avn003_link-back');
        }
    });
    // выносим проверку по картинке, для того, что бы проверка теста от неё не зависила
    it('Check detail images', () => {
        // ждём появления картинки в карточках 
        browser.waitForVisible('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
        // кликаем по карточке
        NfzListPage.card();
        // проверм что появилась картинка в деталке
        browser.waitForVisible(NfzDetail.selectorCarImage, 40000);
        // скролим страницу до блока "Вы уже смотрели" 
        browser.scroll('.avn022_Footer', 10, -400);
        // ждём пока отредерится карточки
        browser.pause(5000);
    });

    // проверяем карточки в разделе "Вы уже просматривали"
    it('Check cards in viewed cars', () => {
        // получаем массив ид машин 
        const idCarViewes = browser.getAttribute(`.avn001-2_catalogue-item.avn001-2_catalogue-item__tiles`, 'data-carid');

        // проверяем совпадение массивов
        const result = browser.helpers.compareArray(idCarViewes,list);
        // считаем количество несовпадений между массивами
        const emptyArray = result.length;
        // количество элементов в массиве не должно быть больше 0
        browser.waitUntil(
            () => (emptyArray == 0) === true,
            5000, `${result[0]} id карточек не совпали`);
    });
});