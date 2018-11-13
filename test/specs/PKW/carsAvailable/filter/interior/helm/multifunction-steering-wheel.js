describe('test multifunction steering wheel', () => {
    let conditions = 'Мультируль';
    before('open page helm', () => {
        browser.helpers.openSite();
        // переходим на страницу интерьер
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
        // переходим на страницу руль 
        browser.click('.avn008_filter__second-tab[data-name="Руль"]');
    });

    // проверяем чекбокс материал-кожа
    it('Material leather', () => {
        browser.helpers.checkCheckbox(conditions, 'МУЛЬТИРУЛЬ', 'wheel-multi');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditions(conditions, conditions);
        // проверяем
        expect(newArray).to.be.equal(conditions);
      });
});