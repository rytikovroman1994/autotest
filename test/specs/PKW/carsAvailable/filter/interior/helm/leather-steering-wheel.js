import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('test material and options', () => {
    let conditions = 'Кожа';
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

    // проверяе что картинка на месте
    it('Check images transmision', () => {
        // проверяем что картинка видна
        browser.waitForVisible('.avn008_wheel__display__bottom img');
        // проверяем что отображается нужная картинка
        const image = browser.getAttribute('.avn008_wheel__display__bottom img', 'src');
        expect(image).to.be.include('images/steering-wheel');
    });

    // проверяем чекбокс материал-кожа
    it('Material leather', () => {
        browser.helpers.checkCheckbox(conditions, 'КОЖАНЫЙ РУЛЬ', 'wheel-leather');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditions(conditions, 'Кожаный руль');
        // проверяем
        expect(newArray).to.be.equal('Кожаный руль');
      });
});