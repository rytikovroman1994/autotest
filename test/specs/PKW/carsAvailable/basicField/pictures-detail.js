describe('test pictures-detail', () => {
    const list = [];
    before('open page', () => {
        browser.helpers.openList();
        // переходим в деталку
        browser.click('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
        // ждём появления картинки
        browser.waitForVisible('.avn007-1_car-image img');
        // скролим до нужного блока
        browser.scroll('.avn012-1_item.is_active', 0, 100);
    });

    // проверяем, что у каждой комплектации есть картинка 
    it('Check pictures detail', () => {
        // если есть "Показать ещё", кликаем на неё
        if( browser.isExisting('.avn013_usp_item__show-more') === true) {
            browser.click('.avn013_usp_item__show-more');
        }
        // получаем количество коплектаций
        const number = $$('.avn013_usp_item_title').length;
        // получаем список названий комплектации 
        for( let i = 1; i <= number - 1; i++) {
            const listName = browser.getText(`div:nth-child(${i}) > div > div.avn013_usp_item_text`);
            list.push(listName);
        }

        for( let i = 1; i <= number - 1; i++ ) {
                // получаем значение атрибута картинки
                browser.waitUntil(
                    () => browser.getAttribute(`div:nth-child(${i}) > div > div.avn013_usp_item_pic img`, 'src').includes('https://') === true,
                    5000, `Комплектация ${list[i-1]} не содержит картинку`);
            }
    });
});