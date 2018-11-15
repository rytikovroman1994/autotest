describe('test cast stamped disks', () => {
    before('open page disks', () => {
        browser.helpers.openSite();
        // переходим на страницу экстерьер
        browser.click('.avn008_filter__tab[data-name="Экстерьер"]');
        // переходим на вкладку диски
        browser.click('.avn008_filter__second-tab[data-name="Диски"]');
        // ожидаем загрузки картинки дисков
        browser.waitForVisible('div:nth-child(2) > div > div.disc-item_image > img');
    });

    it('choose cast disks', () => {
        // выбираем литые диски
        browser.click('div:nth-child(1) > div > div.disc-item_image > img');
        // проверяем, что штампованые диски не задизейблились
        browser.waitUntil(
            () => browser.isExisting('.disc-item.is_disabled') === false,
            10000, "Штампованые диски стали дизейбл");
        // проверяем что появилось условие в фильтре
        browser.waitForExist('.avn008_filter-value-item');
        // проверяем что это именно литые
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('ЛИТЫЕ ДИСКИ');
    });

    it('choose stamped disks', () => {
        // выбираем штампованные диски
        browser.click('div:nth-child(2) > div > div.disc-item_image > img');
        // проверяем, что литые диски не задизейблились
        browser.waitUntil(
            () => browser.isExisting('.disc-item.is_disabled') === false,
            10000, "Литые диски стали дизейбл");
        // проверяем что появилось условие в фильтре
        browser.waitForExist('.avn008_filter-value-item');
        // проверяем что это именно литые
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('ШТАМПОВАНЫЕ ДИСКИ');
    });
});