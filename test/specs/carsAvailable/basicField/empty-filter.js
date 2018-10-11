describe('Test empty filter', () => {
    before('open page filter', () => {
        browser.helpers.openSite();
    }); 

    // проверяем, что верхний фильтр изначально пустой 
    it('Check top filter', () => {
        // проверяем что фильтр не содержит условий
        browser.waitUntil(
            () => browser.isVisible('.avn008_filter-value-list .avn008_filter-value-item') === false,
            5000, "В верхнем фильтре появилось условие, которое не выбиралось");
    });
})