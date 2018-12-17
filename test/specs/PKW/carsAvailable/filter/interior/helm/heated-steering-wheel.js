import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('test heated steering wheel', () => {
    let conditions = 'Подогрев';
    before('open page helm', () => {
        browser.helpers.openSite();
    });

    // выносим проверку в отдельный тест
    it('Check images', () => {
        // переходим на страницу интерьер
        PkwFilter.interior();
        // ожидаем загрузки картинки сиденья
        browser.click('.avn008_filter__second-tab[data-name="Руль"]');
    });

    // проверяем чекбокс материал-кожа
    it('Material leather', () => {
        browser.helpers.checkCheckbox(conditions, 'ПОДОГРЕВ', 'wheel-heating');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditions(conditions, 'Подогрев руля');
        // проверяем
        expect(newArray).to.be.equal('Подогрев руля');
      });
});