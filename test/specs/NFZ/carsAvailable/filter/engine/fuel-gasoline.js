describe('test fuel-gasoline', () => {
    before('open page filter', () => {
        browser.helpers.openFilter();
        // открываем страницу "Двигатель"
        browser.click('#react-tabs-2');
    });

    // выбираем топливо бензин
    it('Check fuel-gasoline', () => {
        browser.helpers.checkCheckboxNfz('div:nth-child(4) > div > label:nth-child(4)', 'БЕНЗИН');
    });

    // ожидаем, пока загрузится первая карточка и проверяем наличие комплектации
    it('Check condition in the card', () => {
        // ожидаем, пока появится карточка
        browser.waitForVisible('.avn001-2_content');
        // ожидаем, пока перерендерится список карточек
        browser.pause(2000);
        // проверяем, что в карточке есть условие АКП
        const getView = browser.getText('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) .gridcontainer > div:nth-child(4) > div > div > div:nth-child(1) > div > div > div:nth-child(1) > div.avn001-2_specs-item_text');
        expect(getView).to.be.include('MPI');
    });
});