describe('test options', () => {
    before('open page options', () => {
        browser.helpers.openSite();
        // переходим на страницу интерьера
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
    });

    // проверяем чекбокс елекропривод
    it('check checkbox electric drive', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // включаем чекбокс
        browser.click('.checkbox[data-name="Электропривод сидений"]');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('ПРИВОД СИДЕНИЙ');
        // убираем условие
        browser.click('.checkbox[data-name="Электропривод сидений"]');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
    });

    // проверяем чекбокс массаж
    it('check checkbox massage', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // включаем чекбокс
        browser.click('.checkbox[data-name="Массаж"]');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('СИДЕНИЯ С МАССАЖЕМ');
        // убираем условие
        browser.click('.checkbox[data-name="Массаж"]');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
    });

    // проверяем чекбокс память
    it('check checkbox memory', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // включаем чекбокс
        browser.click('.checkbox[data-name="Память"]');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('ПАМЯТЬ СИДЕНИЙ');
        // убираем условие
        browser.click('.checkbox[data-name="Память"]');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
    });

    // проверяем чекбокс вентиляция
    it('check checkbox ventilation', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // включаем чекбокс
        browser.click('.checkbox[data-name="Вентиляция"]');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('ВЕНТИЛЯЦИЯ СИДЕНИЙ');
        // убираем условие
        browser.click('.checkbox[data-name="Вентиляция"]');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
    });
});