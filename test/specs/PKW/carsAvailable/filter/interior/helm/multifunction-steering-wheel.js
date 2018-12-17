import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('test multifunction steering wheel', () => {
    let conditions = 'Мультируль';
    before('open page helm', () => {
        browser.helpers.openSite();
    });

    // выносим проверку в отдельный тест
    it('Check images', () => {
        // переходим на страницу интерьер
        PkwFilter.interior();
        // ожидаем загрузки картинки сиденья
        browser.click('.avn008_filter__second-tab[data-name="Руль"]');
        // ожидаем загрузки картинки руль
        browser.waitForVisible('.avn008_image-switcher_image');
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