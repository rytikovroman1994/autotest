import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test awd', () => {
    before('open page filter', () => {
        browser.helpers.openFilter();
    });

    it('Open page engine', function() {
        this.retries(3);
        // проверяем переход на страницу Интерьер
        NfzFilter.engine();
    });

    // выбираем полный привод
    it('Check awd', function() {
        this.retries(3);
        browser.helpers.checkCheckboxNfz('Полный привод', 'ПОЛНЫЙ', 'chassis');

        // переходим к списку
        browser.click('.checkbox[data-name="Полный привод"]');
        // проверяем что кнопка "Показать" активна
        browser.waitUntil(
            () => browser.isExisting('avn008_overlay_bar--progress') === false,
            10000, "Кнопка Показать не активна в течении 10 секунд");
        browser.click('.avn008_overlay_bar_content .avn008_overlay_submit-block_btn');
    });

    // ожидаем, пока загрузится первая карточка и проверяем наличие комплектации
    it('Check condition in the card', function() {
        this.retries(3);
        // ожидаем, пока перерендерится список карточек
        browser.pause(2000);
        // проверяем, что в карточке есть условие 4WD
        const getView = browser.getText('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) [title="Полный привод"]');
        expect(getView).to.be.include('4WD');
    });
});