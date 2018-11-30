describe.skip('test screenshots cars', () => {
    let nameCar;
    before('open page filter', () => {
        // делаем размер окна браузера
        browser.windowHandleSize ({width: 1600, height: 1200});
        // переходим на страницу
        browser.url('https://nfz.kodix.ru');
        // открываем фильтр
        while(browser.isVisible('.avn008_display-item_content') === false) {
            browser.click('body #prompt-toggler_filter');
        }
    });

    // проверяем доступность коплектаций в каточках
        it(`Make a screenshot California`, () => {
            // проверяем, что карточку видно
            if(browser.isVisible(`.avn008_model__wrap > div.gridcontainer > div:nth-child(5)`) === false) {
                browser.scroll(`.avn008_model__wrap > div.gridcontainer > div:nth-child(5)`, 5, 5);
            }
            // получаем имя автомобиля
            nameCar = browser.getText(`div:nth-child(5) > div > div > div.avn008_car__info > div.avn008_car__desc > h4`);
            console.log(nameCar);
            browser.scroll(`.avn008_model__wrap > div.gridcontainer > div:nth-child(5)`, 0, 0);
            // кликаем на карточку
            browser.click(`.avn008_model__wrap > div.gridcontainer > div:nth-child(5)`);
            // ожидаем появления поля с комплектациями
            browser.waitUntil(
                () => browser.isVisible('.avn008_kits__inner') === true,
                5000, `У автомобиля ${nameCar} не открывается окно комплектаций`);

            // считаем количетсво комплектаций 
            const numberEquipment = $$('.avn008_kits__btn');
            for( let y = 1; y <= numberEquipment.length - 1; y++ ) {
                // получаем имя комплектации
                const nameEquipment = browser.getText(`div:nth-child(${y}) > div.avn008_kits__btn-title`);
                // кликаем по кнопки комплектации
                browser.click(`.grid_s_11.grid_m_8.grid_l_9 > div > div:nth-child(${y})`);
                // проверяем что в фильтре появилось условие 
                browser.waitUntil(
                    () => browser.isExisting('.avn008_filter-value-item__inner ') === true,
                    5000, `Не удалось выбрать комплектацию ${nameEquipment}`);
                browser.pause(3000);
                // скролим до появления кнопки Показать
                browser.scroll('.avn008_overlay_submit-block_btn .btn__text', 0, 0);
                // переходим к списку автомобилей
                browser.click('.avn008_overlay_submit-block_btn .btn__text');
                // ждём пока загрузится список 
                browser.waitForVisible('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
                browser.scroll(0, -50);
                // выбираем первый автомобиль
                browser.click('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
                // ждём появления картинки
                browser.waitForVisible('.preview_img img');
                // делаем скриншот страницы и сохраняем в папку
                var screen = browser.saveScreenshot(`./screenshotModel/versionThree/size1600x1200/${nameCar}-${nameEquipment}.png`);
                expect(screen).to.not.equal(null);

                // возвращаемся в фильтр
                browser.click('.avn003_link-back .link-back');
                // открываем фильтр
                while(browser.isVisible('.avn008_display-item_content') === false) {
                browser.click('body #prompt-toggler_filter');

                // проверяем, что карточку видно
                if(browser.isVisible(`.avn008_model__wrap > div.gridcontainer > div:nth-child(5)`) === false) {
                    browser.scroll(`.avn008_model__wrap > div.gridcontainer > div:nth-child(5)`, 5, 5);
                }
                // кликаем на карточку
                browser.click(`.avn008_model__wrap > div.gridcontainer > div:nth-child(5)`);
                // очищаем фильтр  
                browser.click(`.grid_s_11.grid_m_8.grid_l_9 > div > div:nth-child(${y})`);
                }
            }

            // закрываем список комплектаций
            browser.click(`.avn008_model__wrap > div.gridcontainer > div:nth-child(5)`);
        });
})