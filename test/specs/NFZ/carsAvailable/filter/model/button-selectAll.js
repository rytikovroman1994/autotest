describe('test button select all', () => {
    before('open page filter', () => {
        browser.helpers.openFilter();
    });

    // провеярем работу кнопки "Выбрать все"
    it('Check button select all', () => {
        // отрываем меню выбора комплектаций в первой карточке
        browser.click('.avn008_car__wrap[data-name="Caddy"]');
        // проверяем что нет не одной активной кнопки комплектации
        browser.waitUntil(
            () => browser.isExisting('.avn008_kits__btn--selected') === false,
            5000, "На странице есть изначально активная кнопка комплектации");
        // ожидаем появления кнопки
        browser.waitForVisible('.avn008_kits__inner div:nth-child(6)');
        // кликаем по кнопке "Выбрать всё"
        browser.click('.avn008_kits__inner div:nth-child(6)');

        // проверяем, что появилось 5 активных кнопок с комплектацией
        const numberAcrivButton = $$('.avn008_kits__btn--selected').length;
        expect(numberAcrivButton).to.be.equal(5);
    });

    // проверяем работу кнопки "Отменить всё"
    it('Check buttun cancel all', () => {
        // нажимаеи на кнопку 
        browser.click('.avn008_kits__inner div:nth-child(6)');
        // проверяем, что все активные кнопки комплектации пропали
        browser.waitUntil(
            () => browser.isExisting('.avn008_kits__btn--selected') === false,
            5000, "В фильре осталась выбранная комплектация");
    });
});