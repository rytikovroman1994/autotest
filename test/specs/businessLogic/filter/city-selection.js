describe('test get all name city', () => {
    const list = [];
    before('open page location', () => {
        browser.helpers.openSite();
        // закрываем фильтр
        browser.click('.avn003__action-item__text');
        // выбираем сортировку по удалёности
        browser.click('.avn001-1_catalogue-head > div > div.avn001-1_left > div > div:nth-child(3)');
        // // выбираем наиболее удалённые
        // browser.click('.avn001-1_catalogue-head > div > div.avn001-1_left > div > div:nth-child(3)');

        // открываем окно выбора метоположения
        browser.click('#prompt-toggler_selectLocation');
        // ожидаем появления копки выбрать другой город
        browser.waitForVisible('.btn.nay-btn');
        // нажимаем на неё
        browser.click('.btn.nay-btn');
        // ожидаем появления всплывающего окна
        browser.waitForVisible('.avn005_geolocation-prompt__content')
        // ожидаем появления списка
        browser.waitForVisible('.avn005-2_citieslist_inner');
    });

    // получаем список городов
    it('get list city', () => {
        for(let i = 2; i <= 80; i++ ) {
            const getCity = browser.getText(`.avn005-2_citieslist_inner div:nth-child(${i})`);
            list.push(getCity);
        }
        console.log(list);
    });

    // проверяем выборку каждого города, на наличие карточек с другим городом
    it('Check the city in the card', () => {
        for(let i = 2; i <= 80; i++ ) {
            // переносим курсор на нужный город
            browser.moveToObject(`.avn005-2_citieslist_inner div:nth-child(${i})`);
            // выбираем город
            browser.click(`.avn005-2_citieslist_inner div:nth-child(${i})`);
            // ожидаем перерекдеринг карточек
            browser.pause(1000);
            // проверяем город первой карточки
            const nameCity = browser.getText('div:nth-child(1) > div > div > div > div:nth-child(4) > div > div > a > div');
            console.log(nameCity);
            const nameCityString = nameCity.join();
            let getNameCityArray = list[i-2];
            console.log(getNameCityArray);
            const getNameCity = nameCityString.match(getNameCityArray);
            console.log(getNameCity);
            expect(getNameCity[0]).to.be.include(getNameCityArray);

            // открываем окно выбора метоположения
            browser.click('#prompt-toggler_selectLocation');
            // ожидаем появления копки выбрать другой город
            browser.waitForVisible('.btn.nay-btn');
            // нажимаем на неё
            browser.click('.btn.nay-btn');
            // ожидаем появления всплывающего окна
            browser.waitForVisible('.avn005_geolocation-prompt__content')
            // ожидаем появления списка
            browser.waitForVisible('.avn005-2_citieslist_inner');
        }
    });
});