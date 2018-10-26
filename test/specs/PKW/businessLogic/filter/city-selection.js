describe('test get all name city', () => {
    // получаем количетсво городов в списке
    const getListCity = () => $$('.avn005-2_citylist_item');
    const list = [];
    before('open page location', () => {
        browser.helpers.openSite();
        // закрываем фильтр
        browser.click('.avn003__action-item__text');
        // выбираем сортировку по удалёности
        browser.click('.avn001-1_catalogue-head > div > div.avn001-1_left > div > div:nth-child(3)');

        // открываем окно выбора метоположения
        browser.click('.avn003_column-right .icon.icon-pin');
        // ожидаем появления копки выбрать другой город
        browser.waitForVisible('.btn.nay-btn');
        // нажимаем на неё
        browser.click('.btn.nay-btn');
        // ожидаем появления всплывающего окна
        browser.waitForVisible('.avn005_geolocation-prompt__content')
        // ожидаем появления списка
        browser.waitForVisible('.avn005-2_citieslist_inner');
        // убираем пункт "Покаывать предложения по близости"
        browser.click('.avn005-2_switch .toggle_switch__states');
    });

    // получаем список городов
    it('get list city', () => {
        const getNumberCity = getListCity().length;
        console.log(getNumberCity);
        for(let i = 2; i <= getNumberCity; i++ ) {
            const getCity = browser.getText(`.avn005-2_citieslist_inner div:nth-child(${i})`);
            list.push(getCity);
        }
        console.log(list);
    });

    // проверяем выборку каждого города, на наличие карточек с другим городом
    it('Check the city in the card', () => {
        const getNumberCity = getListCity().length;
        for(let i = 2; i <= getNumberCity; i++ ) {
            // получаем имя города
            const nameCityList = browser.getText(`.avn005-2_citieslist_inner div:nth-child(${i})`);
            // выбираем город
            browser.click(`.avn005-2_citieslist_inner div:nth-child(${i})`);
            // ожидаем перерендеринг карточек
            browser.pause(2000);
            // проверяем на наличие предупреждения, что в городе машин
            browser.waitUntil(
                () => browser.isVisible('.avn001_not-found__title') === false,
                5000, `В городе ${nameCityList} нет списка доступных машин`);
            // проверяем город первой карточки
            const nameCity = browser.getText('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) > div > div > div > div:nth-child(4) > div > div > a > div');
            console.log(nameCity);
            // получаем город из всей надписи
            let getNameCityArray = list[i-2];
            const getNameCity = nameCity.match(getNameCityArray);
            expect(getNameCity[0]).to.be.include(getNameCityArray);

            // открываем окно выбора метоположения
            browser.click('.avn003_column-right .icon.icon-pin');
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