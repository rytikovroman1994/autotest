import NfzListPage from 'Pageobjects/nfz-list.page.js'
import NfzDetail from 'Pageobjects/nfz-detail.page.js'

describe('test gallery in detail', function() {
    this.retries(2);

    // пусть к кнопке
    let wayButton = '.preview_action';

    before('open page detail', () => {
        browser.helpers.openListNfz();
    });

    // выносим проверку по картинке, для того, что бы проверка теста от неё не зависила
    it('Check detail images', function() {
        this.retries(3);
        // ждём появления картинки в карточках 
        browser.waitForVisible('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
        // кликаем по карточке
        NfzListPage.card();
        // проверм что появилась картинка в деталке
        browser.waitForVisible(NfzDetail.selectorCarImage, 40000);
    });

    // проверяем кнопку галерея
    it('check button gallery', function() {
        this.retries(3);
        // проверяем, что кнопка есть в дом и отображается
        browser.waitForExist(wayButton);
        browser.waitForVisible(wayButton);
        // проверяем, что текс кнопки Галерея
        const getTest = browser.getText(wayButton);
        expect(getTest).to.be.equal("Галерея");
    });

    // переходим в галерею
    it('click button gallery', function() {
        this.retries(3);
        // кликаем по кнопке 
        browser.click(wayButton);
        // проверяем, что открылост окно с картинками
        browser.isVisible('.slick-slide.slick-active img');
    });

    // проверяем, что в галереии отображаются все картинки
    it('check image in gallery', function() {
        this.retries(3)
        // ждём загрузки страницы и появлениния кнопок галереии
        browser.waitForVisible('.mk002__dots button');
        // считаем количество картинок
        const numberImage = $$('.mk002__dots button').length;
        for(let i = 2; i <= numberImage; i++) {
            // листаем картинки
            browser.click(`.mk002__carousel li:nth-child(${i}) button`);
            browser.pause(1000);
            // проверяем что пропадает лоадер
            browser.waitUntil(
                () => browser.isVisible('.avn007-4_loader-wrapper.is_visible > div > div') === false,
                20000, `${i} по счёту картинка не отображается`);
        }
    });
});