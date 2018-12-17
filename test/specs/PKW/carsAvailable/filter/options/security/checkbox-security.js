import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('test checkboxs page security', () => {
    const textList = [
            'ЗАДНИЕ БОКОВЫЕ П. Б.',
            'ШТОРКИ Б/П',
            'ФРОНТАЛЬНЫЕ П. Б.',
            'ПЕРЕДНИЕ БОКОВЫЕ П. Б.',
            'Б/П КОЛЕНЕЙ'
    ]

    before('Open page secutity', () => {
        browser.helpers.openSite();
    });

    // выносим проверку в отдельный тест
    it('Check images', () => {
        // переходим на страницу 
        PkwFilter.options();
        // переходим в вкладку безопастность 
        browser.click('.avn008_filter__second-tab[data-name="Безопасность"]');
        // ожидаем загрузку картинки
        browser.waitForVisible('.avn008_safety-images_main img');
    });

    // проверяем работу чекбоксов
    it('Check all checkbox in page security', () => {
        for( let i = 2; i <= 6; i++ ) {
            // проверяем что фильтр пуст
            browser.waitUntil(
                ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
                5000, "На странице уже есть одно условие фильтра");
            // включаем чекбокс
            browser.click(`div:nth-child(${i}) > div > div > label`);
            // проверяем, что в фильтре появилось условие
            browser.waitForExist('.avn008_filter-value-item_image');
            // проверяем, что это именно фаркоп
            const text = browser.getText('.avn008_filter-value-item_text__bottom');
            const verifiableText = textList[i - 2];
            expect(text).to.be.equal(verifiableText);
            // убираем условие
            browser.click(`div:nth-child(${i}) > div > div > label`);
            // проверяем, что условие пропало
            browser.waitUntil(
                ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
                5000, "На странице уже есть одно условие фильтра");
        }
    });
});