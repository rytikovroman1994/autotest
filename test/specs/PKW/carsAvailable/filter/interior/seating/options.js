describe.skip('test options', () => {
    before('open page options', () => {
        browser.helpers.openSite();
        // переходим на страницу интерьера
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
    });

    // проверяем чекбокс елекропривод
    it('check checkbox electric drive', () => {
        browser.helpers.checkCheckbox('Электропривод сидений', 'ПРИВОД СИДЕНИЙ');
    });
    
    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail Электропривод сидений', () => {
        const newArray = browser.helpers.checkConditions('Электропривод сидений', 'Электропривод сидений');
        // проверяем
        expect(newArray).to.be.equal('Электропривод сидений');

        // выходим из деталки 
        browser.helpers.fromDetailToFilter('Интерьер', 'Электропривод сидений');
    });

    // проверяем чекбокс массаж
    it('check checkbox massage', () => {
        browser.helpers.checkCheckbox('Массаж', 'СИДЕНИЯ С МАССАЖЕМ');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail Массаж', () => {
        const newArray = browser.helpers.checkConditions('Массаж', 'Сидения с массажем');
        // проверяем
        expect(newArray).to.be.equal('Сидения с массажем');

        // выходим из деталки 
        browser.helpers.fromDetailToFilter('Интерьер', 'Массаж');
    });

    // проверяем чекбокс память
    it('check checkbox memory', () => {
        browser.helpers.checkCheckbox('Память', 'ПАМЯТЬ СИДЕНИЙ');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail Память', () => {
        const newArray = browser.helpers.checkConditions('Память', 'Память сидений');
        // проверяем
        expect(newArray).to.be.equal('Память сидений');

        // выходим из деталки 
        browser.helpers.fromDetailToFilter('Интерьер', 'Память');
    });

    // проверяем чекбокс вентиляция
    it('check checkbox ventilation', () => {
        browser.helpers.checkCheckbox('Вентиляция', 'ВЕНТИЛЯЦИЯ СИДЕНИЙ');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail Вентиляция', () => {
        const newArray = browser.helpers.checkConditions('Вентиляция', 'Вентиляция сидений');
        // проверяем
        expect(newArray).to.be.equal('Вентиляция сидений');
    });
});