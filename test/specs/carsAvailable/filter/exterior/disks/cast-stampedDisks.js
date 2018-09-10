describe('test cast stamped disks', () => {
    before('open page disks', () => {
        browser.helpers.openSite();
        // переходим на страницу экстерьер
        browser.click('#react-tabs-6');
        // переходим на вкладку диски
        browser.click('#react-tabs-14');
        // ожидаем загрузки картинки дисков
        browser.waitForVisible('div:nth-child(2) > div > div.disc-item_image > img');
    });

    it('choose cast disks', () => {
        // выбираем литые дички
        browser.click('div:nth-child(1) > div > div.disc-item_image > img');
        // проверяем что появилось условие в фильтре
        browser.waitForExist('.avn008_filter-value-item_image > img');
        // проверяем что это именно литые
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('ЛИТЫЕ ДИСКИ');
    });

    it('choose stamped disks', () => {
        // выбираем штампованные дички
        browser.click('div:nth-child(2) > div > div.disc-item_image > img');
        // проверяем что появилось условие в фильтре
        browser.waitForExist('.avn008_filter-value-item_image > img');
        // проверяем что это именно литые
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('ШТАМПОВАНЫЕ ДИСКИ');
    });
});