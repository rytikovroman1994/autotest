describe('test booking car', () => {
    before('open site', () => {
        browser.helpers.openList();
        // ждём пока карточки станут видны
        browser.waitForVisible('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1)');
    }); 

    // добавляем сортировку по онлайн оплате
    it('click checkbox online payments', () => {
        // проверяем что что на странице есть чекбокс онлайн оплаты
        browser.waitForExist('.avn001-1_filter-item .toggle_switch__state');
        // кликаем по нему
        browser.click('.avn001-1_filter-item .toggle_switch__state');
        // проверяем что карточка стала с онлайн оплатой
        browser.waitForVisible('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) .avn001-2_tags');
        // наводимся на карточку
        browser.leftClick('.avn001-2_content .gridcontainer', 10, 10);
        // ждём появления картинки
        browser.waitForVisible('.avn007-1_car-image img');
    });

    // проверяем наличие кнопки купить на странице
    it('check the buy button', () => {
        // проверяем наличие кнопки в дом
        browser.waitForExist('.avn007-2_price .btn.btn_cta.show-op');
        // проверяем что кнопка отображется
        browser.waitForVisible('.avn007-2_price .btn.btn_cta.show-op');
        // что она имеет текст купить
        const textButton = browser.getText('.avn007-2_price .btn__text');
        expect(textButton).to.be.equal('Купить');
        // нажимаем на кнопку
        browser.click('.avn007-2_price .btn.btn_cta.show-op');
        // ожидаем загрузки картинки
        browser.waitForVisible('.gridcontainer.uac001_image-status  img')
        // скролим на случай если блок с резервированием не виден
        browser.moveToObject('.op005_form_title')
        // проверяем что перешли на страницу резервирования
        browser.waitUntil(
            () => browser.isVisible('.op005_form_title') === true,
            5000, "Переход на страницу Резервирование не осуществлён");
    });

    // проверяем работу подсказки и слайдера онлайн оплаты
    it('check the tooltip and slider', () => {
        // проверяем что в доме есть тултип
        browser.waitForExist('.op005_form_text .footnote-toggler');
        // кликаем не него
        browser.click('.op005_form_text .footnote-toggler');
        // проверяем что всплывающая подсказка появилась
        browser.waitForVisible('.m644__inner');
        // закрываем всплывающее окно
        browser.click('.op005_form_text .footnote-toggler');
        // изменяем размер предоплаты 
        let statePrise = browser.getAttribute('.flex-container .text-input input','value');
        // скролим до слайдера в том случаи если он не виден
        browser.moveToObject('.op005_form-btn .btn_cta');
        browser.helpers.slider('.rc-slider-handle', '.rc-slider-rail', 100, 0);
        let currentPrise = browser.getAttribute('.flex-container .text-input input','value');
        expect(currentPrise).to.not.equal(statePrise);
    });

    // проверяем что что загружаются реквизиты
    it('check for details', () => {
        //расскрываем список вариантов оплаты
        browser.click('.rw-i-caret-down');
        // выбираем оплату по реквизитам
        browser.click('#rw_1_listbox > li:nth-child(3)');
        // переносим курсор на "показать реквизиты"
        browser.moveToObject('.op005_pay-by-req .vwd5-textlink_text');
        // расскрываем данные по реквизитам
        browser.click('.op005_pay-by-req .vwd5-textlink_text');
        // проверяем что в каждом поле есть данные не равные "нет данных"
        for( let i = 1; i <= 7 ; i++) {
            const getRequisites = browser.getText(`.op005_form_text > div > div > div:nth-child(${i}) > div:nth-child(2)`)
            expect(getRequisites).to.not.equal('Нет данных');
        }
    });

    // проверяем кнопку отправить заказ и переход в личный кабинет
    it('check the submit order button', () => {
        // проверяем что кнопка существует в дом
        browser.waitForExist('.op005_form-btn .btn_cta');
        // проверяем что кнопка отображается
        browser.waitForVisible('.op005_form-btn .btn_cta');
        // проверяем что текст кнопки именно отправить заказ
        const getTextBUtton = browser.getText('.op005_form-btn .btn_cta');
        expect(getTextBUtton).to.be.equal('Отправить заказ');
        // скролим до кнопки
        browser.moveToObject('.op005_disclaimer', 20, 20);
        // кликаем по кнопке
        browser.click('.op005_form-btn .btn_cta');
        // проверяем что перешли на страницу авторизации в личном кабинете
        browser.waitUntil(
            () => browser.waitForExist('#usernameWithOutMask') === true,
            5000, "Страница авторизации не появилась");
    });
});