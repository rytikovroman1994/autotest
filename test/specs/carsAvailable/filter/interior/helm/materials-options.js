describe('test material and options', () => {
    before('open page helm', () => {
        browser.helpers.openSite();
        // переходим на страницу интерьер
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
        // переходим на страницу руль 
        browser.click('.avn008_filter__second-tab[data-name="Руль"]');
        // ожидаем загрузки картинки руль
        browser.waitForVisible('.avn008_image-switcher_image');
    })

    // проверяем чекбокс материал-кожа
    it('material leather', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // включаем чекбокс
        browser.click('.checkbox[data-name="Кожа"]');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('КОЖАНЫЙ РУЛЬ');
        // убираем условие
        browser.click('.checkbox[data-name="Кожа"]');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
    });

    // проверяем чекбокс опции- подогрев
    it('options heating', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // включаем чекбокс
        browser.click('.checkbox[data-name="Подогрев"]');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('ПОДОГРЕВ');
        // убираем условие
        browser.click('.checkbox[data-name="Подогрев"]');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
    });

    // проверяем чекбокс опции-мультируль
    it('options multi-wheel', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // включаем чекбокс
        browser.click('.checkbox[data-name="Мультируль"]');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('МУЛЬТИРУЛЬ');
        // убираем условие
        browser.click('.checkbox[data-name="Мультируль"]');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
    });

    // проверыем чекбокс опции-подрулеые лепестки 
    it('options  paddle-operated gearbox', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // включаем чекбокс
        browser.click('.checkbox[data-name="Подрулевые лепестки"]');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('ПОДРУЛЕВЫЕ ЛЕПЕСТКИ');
        // убираем условие
        browser.click('.checkbox[data-name="Подрулевые лепестки"]');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
    });
});