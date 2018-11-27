describe('test images detall in all model', () => {
    // модель автомобиля
    let nameCar;
    // коплектация автомобиля
    let nameEquipment;
    // название папки
    let nameFolder = "November27";
    before('open page filter', () => {
        browser.helpers.openFilter();
    });

    // открываем цикл 
    for(let i = 1; i <= 8; i++) {
        it(`Choose model`, () => {
            // проверяем, что карточку видно
            if(browser.isVisible(`.avn008_model__wrap > div.gridcontainer > div:nth-child(${i})`) === false) {
                browser.scroll(`.avn008_model__wrap > div.gridcontainer > div:nth-child(${i})`, 5, 5);
                if(browser.isVisible(`.avn008_kits__close`) === true) {
                    browser.click('.avn008_kits__close');
                    // ждём появления карточки
                    browser.waitForVisible(`.avn008_model__wrap > div.gridcontainer > div:nth-child(${i})`);
                }
            }
            // получаем имя автомобиля
            nameCar = browser.getText(`div:nth-child(${i}) > div > div > div.avn008_car__info > div.avn008_car__desc > h4`);
            console.log(nameCar);
            browser.scroll(`.avn008_model__wrap > div.gridcontainer > div:nth-child(${i})`, 0, 0);
            // кликаем на карточку
            browser.click(`.avn008_model__wrap > div.gridcontainer > div:nth-child(${i})`);
            // ожидаем появления поля с комплектациями
            browser.waitUntil(
                () => browser.isVisible('.avn008_kits__inner') === true,
                5000, `У автомобиля ${nameCar} не открывается окно комплектаций`);

            // считаем количетсво комплектаций 
            const numberEquipment = $$('.avn008_kits__btn');
            for( let y = 1; y <= numberEquipment.length - 1; y++ ) {
                    // получаем имя комплектации
                    nameEquipment = browser.getText(`div:nth-child(${y}) > div.avn008_kits__btn-title`);
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
                    while( browser.isVisible('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img') === false) {
                        browser.scroll(0, -50);
                    }
                    browser.click('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
                    // ждём появления картинки
                    browser.waitForVisible('.preview_img img', 60000);
                    
                    
                    // делаем размер окна браузера
                    browser.windowHandleSize ({width: 1152, height: 864});
                    //ждём пока ресайзнится окно 
                    browser.pause(4000);
                    // делаем скриншот страницы и сохраняем в папку
                    var screen1 = browser.saveScreenshot(`./screenshotModel/${nameFolder}/size1152x864/${nameCar}-${nameEquipment}.png`);
                    expect(screen1).to.not.equal(null);

                    browser.windowHandleSize ({width: 1400, height: 1050});
                    //ждём пока ресайзнится окно 
                    browser.pause(4000);
                    // делаем скриншот страницы и сохраняем в папку
                    var screen2 = browser.saveScreenshot(`./screenshotModel/${nameFolder}/size1400x1050/${nameCar}-${nameEquipment}.png`);
                    expect(screen2).to.not.equal(null);

                    browser.windowHandleSize ({width: 1600, height: 1200});
                    //ждём пока ресайзнится окно 
                    browser.pause(4000);
                    // делаем скриншот страницы и сохраняем в папку
                    var screen3 = browser.saveScreenshot(`./screenshotModel/${nameFolder}/size1600x1200/${nameCar}-${nameEquipment}.png`);
                    expect(screen3).to.not.equal(null);

                    browser.windowHandleSize ({width: 1920, height: 1080});
                    //ждём пока ресайзнится окно 
                    browser.pause(4000);
                    // делаем скриншот страницы и сохраняем в папку
                    var screen4 = browser.saveScreenshot(`./screenshotModel/${nameFolder}/size1920х1080/${nameCar}-${nameEquipment}.png`);
                    expect(screen4).to.not.equal(null);


                    // возвращаемся в фильтр
                    browser.click('.avn003_link-back .link-back');
                    // открываем фильтр
                    while(browser.isVisible('.avn008_display-item_content') === false) {
                    browser.click('body #prompt-toggler_filter');

                    // проверяем, что карточку видно
                    if(browser.isVisible(`.avn008_model__wrap > div.gridcontainer > div:nth-child(${i})`) === false) {
                        browser.scroll(`.avn008_model__wrap > div.gridcontainer > div:nth-child(${i})`, 5, 5);
                    }
                    // кликаем на карточку
                    browser.click(`.avn008_model__wrap > div.gridcontainer > div:nth-child(${i})`);
                    // очищаем фильтр  
                    browser.click(`.grid_s_11.grid_m_8.grid_l_9 > div > div:nth-child(${y})`);
                    }
            }
        });
    }
});