describe('test businessLogic booking car', () => {
    before('open site', () => {
        browser.helpers.openList();
        // ждём пока карточки станут видны
        browser.waitForVisible('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1)');
    }); 

    // добавляем сортировку по онлайн оплате
    it('Click checkbox online payments',  function() {
        this.retries(3);
        // проверяем что что на странице есть чекбокс онлайн оплаты
        browser.waitForExist('.avn001-1_filter-item .toggle_switch__state');
        // кликаем по нему
        browser.click('.avn001-1_filter-item .toggle_switch__state');
        // Ждём пока карточки перерендерятся 
        browser.pause(3000);
        // проверяем что первая карточка стала с онлайн оплатой
        browser.waitUntil(
            () => browser.isVisible('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) .avn001-2_tags') === true,
            5000, "Сортировка по онлайн оплате не рабоатет");
        // наводимся на карточку
        browser.click('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
        // ждём появления картинки
        browser.waitForVisible('.avn007-1_car-image img');
    });

    // проверяем наличие кнопки купить на странице
    it('Check the buy button', function() {
        this.retries(3);
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
        browser.waitForVisible('.gridcontainer.uac001_image-status img')
        // проверяем что перешли на страницу резервирования
        browser.waitUntil(
            () => browser.isVisible('.op005_form_title') === true,
            5000, "Переход на страницу Резервирование не осуществлён");
    });

    // проверяем работу подсказки и слайдера онлайн оплаты
    it('Check the tooltip and slider', function() {
        this.retries(3);
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
        browser.scroll(0, 450);
        if(browser.isExisting('.op005_amount-range.is_disabled_temp') === false) {
            // двигаем слайдер
            browser.helpers.slider('.rc-slider-handle', '.rc-slider-rail', 100, 0);
            // получаем новый размер предоплаты
            let currentPrise = browser.getAttribute('.flex-container .text-input input','value');
            // проверяем что цена изменилась
            expect(currentPrise).to.not.equal(statePrise);
        }
    });

    // проверяем что что загружаются реквизиты
    it('Check for details', function() {
        this.retries(3);
        // т.к. убрали в некоторы карточках реквизиты, ставим проверку
        if(browser.isExisting('.is_filled.is_valid.is_disabled') === false) {
            //расскрываем список вариантов оплаты
            browser.click('.rw-i-caret-down');
            // выбираем оплату по реквизитам
            browser.click('body #rw_1_listbox > li:nth-child(3)');
            // расскрываем данные по реквизитам
            browser.click('.op005_pay-by-req__links .vwd5-textlink_inner');
            // проверяем, что появилась таблица с реквизитами
            browser.waitUntil(
                () => browser.isExisting('.op005_table') === true,
                5000, "Таблица реквизитов не отображается");
            // проверяем что в каждом поле есть данные не равные "нет данных"
            for( let i = 1; i <= 7 ; i++) {
                const getRequisites = browser.getText(`.op005_form_text > div > div > div:nth-child(${i}) > div:nth-child(2)`)
                expect(getRequisites).to.not.equal('Нет данных');
            }
        }
    });

    // проверяем кнопку отправить заказ и переход в личный кабинет
    it('Check the submit order button', function() {
        this.retries(3);
        // проверяем что кнопка существует в дом
        browser.waitForExist('.op005_form-btn .btn_cta');
        // проверяем что кнопка отображается
        browser.waitForVisible('.op005_form-btn .btn_cta');
        // проверяем что текст кнопки именно отправить заказ
        const getTextBUtton = browser.getText('.op005_form-btn .btn_cta');
        expect(getTextBUtton).to.be.equal('Отправить заказ');
        // кликаем по кнопке
        browser.click('.op005_form-btn .btn_cta');
        // проверяем что перешли на страницу авторизации в личном кабинете
        browser.waitUntil(
            () => browser.waitForExist('body #usernameWithOutMask') === true,
            5000, "Страница авторизации не появилась");
    });
});