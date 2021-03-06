import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('test display diagonal', () => {
    // получаем количество чекбоксов 
    const numberCheckbox = () => $$('.avn008_option__slider-card .icon-nextstep-checkmark');
    // количество чекбоксов диагонали экрана
    let numbeSizes;

    before('open page multimedia', function() {
        this.retries(3);
        browser.helpers.openSite();
    });

    // выносим проверку в отдельный тест
    it('Check images', function() {
        this.retries(3);
        // переходим на страницу интерьер
        PkwFilter.interior();
        // ожидаем появление картинки кресла
        browser.waitForVisible('.avn008_image-switcher_image');
        // ожидаем загрузки картинки сиденья
        browser.click('.avn008_filter__second-tab[data-name="Мультимедиа"]');
        // ожидаем загрузки картинки руль
        browser.waitForVisible('.multimedia img');
    });

    // проверяем чекбоксы диагоналей дисплея
    it('check diagonal', () => {
        // считаем количество чекбоксов
        numbeSizes = numberCheckbox().length;
        for( let i =1; i <= numbeSizes; i++ ) {
            // частоиспользуемый класс
            let checkbox = `.avn008_multimedia__checkboxes label:nth-child(${i})`
            // проверяем что фильтр пуст
            browser.waitUntil(
                ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
                5000, "На странице уже есть одно условие фильтра");
            // включаем чекбокс
            browser.click(checkbox);
            // получаем размер диагонали
            const getDiagonal =  browser.getText(`.avn008_multimedia__checkboxes label:nth-child(${i}) > span`);
            // избавляемся от ковычек
            let convertNumber = parseFloat(getDiagonal);
            browser.waitUntil(
                ()=> browser.isVisible('.avn008_filter-value-item_image') === true,
                5000, `Кнопка диспелей ${convertNumber} дюймов не активна`);

            const text = browser.getText('.avn008_filter-value-item_text__bottom');
            expect(text).to.be.include(`ДИСПЛЕЙ ${convertNumber} ДЮЙМ`);
            // убираем условие
            browser.click(checkbox);
            // проверяем, что условие пропало
            browser.waitUntil(
                ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
                5000, "На странице уже есть одно условие фильтра");
        }
    });
});