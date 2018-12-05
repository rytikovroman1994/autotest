describe.skip('test pictures detail', () => {
    let nameCar;
    let nameCarFilter;

    // список моделей
    const list = [
        'Caddy',
        'Caddy (коммерческий)',
        'Crafter',
        'Amarok',
        'California',
        'Caravelle',
        'Multivan',
        'Transporter'
    ];
    before('open page filter', () => {
        browser.helpers.openFilter();
    });

    // открываем цикл на проверку каждой модели
    for( let i = 1; i <= 8; i++ ) {
        it(`Check the complete set in ${list[i-1]}`, () => {
            // проверяем, что карточку видно
            if(browser.isVisible(`.avn008_model__wrap > div.gridcontainer > div:nth-child(${i})`) === false) {
                browser.scroll(`.avn008_model__wrap > div.gridcontainer > div:nth-child(${i})`, 5, 5);
            }
            // получаем имя автомобиля
            nameCar = browser.getText(`div:nth-child(${i}) > div > div > div.avn008_car__info > div.avn008_car__desc > h4`);
            console.log(nameCar);
            // кликаем на карточку
            browser.click(`.avn008_model__wrap > div.gridcontainer > div:nth-child(${i})`);
            // ожидаем появления поля с комплектациями
            browser.waitUntil(
                () => browser.isVisible('.avn008_kits__inner') === true,
                5000, `У автомобиля ${nameCar} не открывается окно комплектаций`);

            // считаем количетсво комплектаций 
            const numberEquipment = $$('.avn008_kits__btn');
            for( let y = 1; y <= numberEquipment.length - 1; y++ ) {
                const disable = browser.getCssProperty(`.grid_s_11.grid_m_8.grid_l_9 > div > div:nth-child(${y})`, 'opacity');
                console.log(disable.value);
                if(disable.value == 1) {
                    // получаем имя комплектации
                    const nameEquipment = browser.getText(`div:nth-child(${y}) > div.avn008_kits__btn-title`);
                    // кликаем по кнопки комплектации
                    browser.click(`.grid_s_11.grid_m_8.grid_l_9 > div > div:nth-child(${y})`);
                    // проверяем что в фильтре появилось условие 
                    browser.waitUntil(
                        () => browser.isVisible('.avn008_overlay_bar_container .avn008_filter-value-item') === true,
                        5000, `Не удалось выбрать комплектацию ${nameEquipment}`);

                    // проверяем что имя можели в фильтре совпадает с проверяемой
                    nameCarFilter = browser.getText('.avn008_overlay_bar_container .avn008_filter-value-item_text__bottom');
                    console.log(nameCarFilter)
                    expect(nameCarFilter).to.be.equal(nameCar.toUpperCase());

                    browser.pause(3000);
                    // скролим до появления кнопки Показать
                    browser.scroll('.avn008_overlay_submit-block_btn .btn__text', 0, 0);
                    // переходим к списку автомобилей
                    browser.click('.avn008_overlay_submit-block_btn .btn__text');
                    // ждём пока загрузится список 
                    browser.waitForVisible('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
                    browser.scroll(0, -50);

                    // проверяем, что все картинки прогрузились
                    browser.waitUntil(
                        () => browser.isExisting('.image-lazyload_overlay.is_visible  .content-loader__self') === false,
                        10000, `Не отображаются картинки в списках модели ${nameCar} комплектации ${nameEquipment}`);
                    
                    browser.click('body #prompt-toggler_filter');
                    // ждём появления кнопки очистить 
                    browser.waitForVisible('.avn008_overlay_bar_column-left .avn008_overlay_bar_action-item');
                    // нажимаем её
                    browser.click('.avn008_overlay_bar_column-left .avn008_overlay_bar_action-item');
                    // проверяем, что очистилось
                    browser.waitUntil(
                        () => browser.isExisting('.avn008_overlay_bar_container .avn008_filter-value-item') === false,
                        10000, "Условие не пропало из фильтра");

                    // кликаем на карточку
                    browser.click(`.avn008_model__wrap > div.gridcontainer > div:nth-child(${i})`);
                    
                }    
            }
            // закрываем окно комплектаций 
            browser.click('.avn008_kits__close');
        });
    }
});
// .image-lazyload_overlay.is_visible  .content-loader__self