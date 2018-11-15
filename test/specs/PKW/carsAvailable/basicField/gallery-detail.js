describe('test gallery in detail', () => {

    // пусть к кнопке
    let wayButton = '.avn007-3_display-options div:nth-child(1) >.avn007-3_item-text';

    before('open page detail', () => {
        browser.helpers.openList();
        // отркываем деталку
        browser.click('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
    });

    // проверяем кнопку галерея
    it('check button gallery', () => {
        // проверяем, что кнопка есть в дом и отображается
        browser.waitForExist(wayButton);
        browser.waitForVisible(wayButton);
        // проверяем, что текс кнопки Галерея
        const getTest = browser.getText(wayButton);
        expect(getTest).to.be.equal("Галерея");
    });

    // переходим в галерею
    it('click button gallery', () => {
        // кликаем по кнопке 
        browser.click(wayButton);
        // проверяем, что открылост окно с картинками
        browser.isVisible('.slick-slide.slick-active img');
    });

    // проверяем, что в галереии отображаются все картинки
    it('check image in gallery', () => {
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