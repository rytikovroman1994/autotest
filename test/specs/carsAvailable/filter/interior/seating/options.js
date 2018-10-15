describe('test options', () => {
    before('open page options', () => {
        browser.helpers.openSite();
        // переходим на страницу интерьера
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
    });

    // проверяем чекбокс елекропривод
    it('check checkbox electric drive', () => {
        browser.helpers.checkCheckbox('Электропривод сидений', 'ПРИВОД СИДЕНИЙ');
    });

    // проверяем чекбокс массаж
    it('check checkbox massage', () => {
        browser.helpers.checkCheckbox('Массаж', 'СИДЕНИЯ С МАССАЖЕМ');
    });

    // проверяем чекбокс память
    it('check checkbox memory', () => {
        browser.helpers.checkCheckbox('Память', 'ПАМЯТЬ СИДЕНИЙ');
    });

    // проверяем чекбокс вентиляция
    it('check checkbox ventilation', () => {
        browser.helpers.checkCheckbox('Вентиляция', 'ВЕНТИЛЯЦИЯ СИДЕНИЙ');
    });
});