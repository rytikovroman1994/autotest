describe('test materials', () => {
    before('open page interior', () => {
        browser.helpers.openSite();
        // переходим на страницу интерьера
        browser.click('#react-tabs-8');
    });

    // проверяем чекбокс елекропривод
    it('check checkbox electric drive', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // включаем чекбокс
        browser.click('.grid_12.grid_s_6.grid_m_3.push_m_2 > div > div:nth-child(2) > div > div > label');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('ПРИВОД СИДЕНИЙ');
        // убираем условие
        browser.click('.grid_12.grid_s_6.grid_m_3.push_m_2 > div > div:nth-child(2) > div > div > label');
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
        browser.click('.grid_12.grid_s_6.grid_m_3.push_m_2 > div > div:nth-child(3) > div > div > label');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('СИДЕНИЯ С МАССАЖЕМ');
        // убираем условие
        browser.click('.grid_12.grid_s_6.grid_m_3.push_m_2 > div > div:nth-child(3) > div > div > label');
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
        browser.click('.grid_12.grid_s_6.grid_m_3.push_m_2 > div > div:nth-child(4) > div > div > label');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('ПАМЯТЬ СИДЕНИЙ');
        // убираем условие
        browser.click('.grid_12.grid_s_6.grid_m_3.push_m_2 > div > div:nth-child(4) > div > div > label');
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
        browser.click('.grid_12.grid_s_6.grid_m_3.push_m_2 > div > div:nth-child(5) > div > div > label');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('ВЕНТИЛЯЦИЯ СИДЕНИЙ');
        // убираем условие
        browser.click('.grid_12.grid_s_6.grid_m_3.push_m_2 > div > div:nth-child(5) > div > div > label');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
    });
});