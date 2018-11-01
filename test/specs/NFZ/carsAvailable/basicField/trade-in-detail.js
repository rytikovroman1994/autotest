describe('test trade in detail', () => {
    before('open page list', () => {
        browser.helpers.openListNfz();
        // переходим в деталку
        browser.click('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
        // ждём появления картинки
        browser.waitForVisible('.preview_img img');
    })

    // проверяем работу чекбокса Трейд ин
    it('Check checkbox trade-in', () => {
        // проверяем наличие акции выбранной машины
        if( $$('.mainStageinfo_price .price').length = 1) {
            // получаем начальную цену автомобиля
            const priseCar = browser.getText('.mainStageinfo_price .price');
            // выбираем покупку по дрейд ин
            browser.click('.mainStageinfo_section-buy .checkbox ');
            // проверяем, что цена изменилась 
            const currentPriseCar = browser.getText('.mainStageinfo_price-normal > div:nth-child(1) > h3 >span');
            expect(currentPriseCar).to.not.equal(priseCar);
            // проверяем, что старая цена отображется
            browser.waitUntil(
                () => browser.isVisible('.mainStageinfo_price-discount > span') === true,
                5000, "Старая цена не отображается");
        } else {
            // получаем началью цену автомобиля по акции
            const priseCarSale = browser.getText('.mainStageinfo_price-normal > div:nth-child(1) > h3 >span');
            // получаем цену автомобиля до акции
            const priseBefore = browser.getText('.mainStageinfo_price-discount > span');
            // выбираем покупку по дрейд ин
            browser.click('.mainStageinfo_section-buy .checkbox ');
            const currentPriseCarSale = browser.getText('.mainStageinfo_price-normal > div:nth-child(1) > h3 >span');
            expect(currentPriseCarSale).to.not.equal(priseCarSale);
            // проверяем, что цена до акции не изменилась
            browser.waitUntil(
                () => browser.getText('.mainStageinfo_price-discount > span').equals(priseBefore) === true,
                5000, "Цена до акции изменилась");
            }
    });
});