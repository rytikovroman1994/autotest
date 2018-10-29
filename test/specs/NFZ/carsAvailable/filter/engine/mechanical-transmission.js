describe('test mechanical transmission', () => {
    before('open page filter', () => {
        browser.helpers.openFilter();
        // переходим на страницу "Двигатель"
        browser.click('#react-tabs-2');
        // ожидаем загрузки последней картинки 
    });

    // выбираем механическую коробку передач
    it('Check the manual transmission', () => {
        browser.helpers.checkCheckboxNfz('.prefix_l_1 > div > label:nth-child(3)', 'MT');
    });

    // ожидаем, пока загрузится первая карточка и проверяем наличие комплектации
    it('Check condition in the card', () => {
        // ожидаем, пока перерендерится список карточек
        browser.pause(2000);
        // проверяем, что в карточке есть условие МКП
        const getView = browser.getText('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) .gridcontainer > div:nth-child(4) > div > div > div:nth-child(1) > div > div > div:nth-child(2) > div.avn001-2_specs-item_text');
        expect(getView).to.be.include('МКП');
    });
});