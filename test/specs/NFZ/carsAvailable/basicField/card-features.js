describe('test card features', () => {
    before('open page list', () => {
        browser.helpers.openListNfz();
    });

    // проверяем, что существуют особенности в карточках
    it('check card features', () => {
        // проверем, что в карточке есть параграф "Особенности"
        browser.waitUntil(
            () => browser.isVisible('div:nth-child(1) > div > div > div:nth-child(2) > div > div > div.gridcontainer > div:nth-child(4) > div > div > div:nth-child(2) > div > div') === true,
            5000, "Пропала категория особености в карточках");
        
        // проверяем, что в особеностях есть список
        browser.waitUntil(
            () => browser.isVisible('#root > div > div:nth-child(5) > main > div:nth-child(3) > div > div > div.avn001_display.avn001_display__view-tiles.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(2) > div > div > div.gridcontainer > div:nth-child(4) > div > div > div:nth-child(2) > div > div > ul') === true,
            5000, "Отсуствует список особеностей в карточках");     
    });
});