describe('test card features', () => {
    before('open page list', () => {
        browser.helpers.openList();
    });

    // проверяем, что существуют особенности в карточках
    it('check card features', function() {
        this.retries(2);
        // проверем, что в карточке есть параграф "Особенности"
        browser.waitUntil(
            () => browser.isVisible('div:nth-child(1) > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) div:nth-child(2) > div > div > div') === true,
            5000, "Пропала категория особености в карточках");
        
        // проверяем, что в особеностях есть список
        browser.waitUntil(
            () => browser.isVisible('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) .avn001-2_features_list li:nth-child(1)') === true,
            5000, "Отсуствует список особеностей в карточках");     
    });
});