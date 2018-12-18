import PkwListPage from 'Pageobjects/pkw-list.page.js'
import PkwDetail from 'Pageobjects/pkw-detail.page.js'

describe('test pictures-detail', () => {
    const list = [];
    before('open page', () => {
        browser.helpers.openList();
    });

    // выносим проверку в отдельный тест
    it('Check images', () => {
        // кликаем на карточку
        PkwListPage.card();
        // ожидаем появления картинки на странице деталки
        browser.waitForVisible(PkwDetail.selectorCarImage, 40000);
        // скролим до нужного блока
        browser.scroll('.avn012-1_item.is_active', 0, 100);
    });

    // проверяем, что у каждой комплектации есть картинка 
    it('Check pictures detail', () => {
        // если есть "Показать ещё", кликаем на неё
        if( browser.isExisting('.avn013_usp_item__show-more') === true) {
            PkwDetail.showMore();
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