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
            browser.waitForVisible('.preview_img-inner .image-container img');
            // возращаемся к списку
            browser.click('.avn003_link-back');
        }
    });

    // проверяем карточки в разделе "Вы уже просматривали"
    it('Check cards in viewed cars', () => {
        // переходим в деталку карточки, которую ещё не посещали
        browser.click(`.avn001_display__enable-hover > div:nth-child(2) > div > div > div:nth-child(1) img`);
        // ждём пока загрузится картинка
        browser.waitForVisible('.preview_img-inner .image-container img');
        // скролим страницу до блока "Вы уже смотрели"
        browser.scroll('.nfz001_title > div > h2', 0, 10);
        browser.pause(5000);
        // получаем массив ид машин 
        const idCarViewes = browser.getAttribute(`.avn001-2_catalogue-item.avn001-2_catalogue-item__tiles`, 'data-carid');

        // проверяем совпадение массивов
        const result = idCarViewes.diff(list);
        // считаем количество несовпадений между массивами
        const emptyArray = result.length;
        // количество элементов в массиве не должно быть больше 0
        browser.waitUntil(
            () => (emptyArray == 0) === true,
            5000, `${result[0]} id карточек не совпали`);
    });
});