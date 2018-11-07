/**
 * @memberOf Helpers
 * @function checkConditionsNfz
 * @param {string} filterCondition - дата атрибут конткретного элемента комплектации
 * @param {string} conditionDetail - title условия в деталке
 * @example
 *      browser.helpers.checkConditions('App Connect', 'App Connect');
 */

export default function checkConditionsNfz(filterCondition, conditionDetail) {
    // проверяем, что всплывающее окно подробнее скрыто
    if( browser.isVisible('.avn015_content .image-container') === true) {
        // закрываем всплывающее окно
        browser.click('.modal-window_close');
        // ожидаем появления кнопки
        browser.waitForVisible(`[data-name="${filterCondition}"]`);
    }

    // включаем чекбокс 
    browser.click(`[data-name="${filterCondition}"]`);
    // проверяем, что появилось условие
    browser.waitForVisible('.avn008_filter-value-item_image');

    // проверяем что кнопка "Показать" активна
    browser.waitUntil(
            () => browser.isExisting('avn008_overlay_bar--progress') === false,
            10000, "Кнопка Показать не активна в течении 10 секунд");
    // кликаем по данной кнопке 
    browser.click('.avn008_overlay_bar_content .avn008_overlay_submit-block_btn');

    // ожидаем пока перерендерица список карточек
    browser.pause(2000);
    // кликаем на карточку
    browser.click('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');

    // ожидаем появления картинки на странице деталки
    browser.waitForVisible('.preview_img img');

    // скролим вниз 
    browser.scroll(0, 600);

    // проеряем, на сущестовавание кнопки показать ещё
    if( browser.isVisible('.avn013_usp_item__show-more .avn013_usp_item_text') === true ) {
        // кликаем по данной кнопке
        browser.click('.avn013_usp_item__show-more .avn013_usp_item_text');
    }

    // получаем массив имён доступных комплектаций
    const list = [];
    const getListName = () => $$('.avn013_usp_item_title');
    const numberListName = getListName().length;
        for(let i = 1; i <= numberListName; i++ ) {
            const getCity = browser.getText(`div:nth-child(${i}) > div > div.avn013_usp_item_text .avn013_usp_item_title`);
            list.push(getCity);
        }
    console.log(list);    
    // проверяем, что в массиве есть проверяемая комплектация
    const newArray = list.indexOf(`${conditionDetail}`);
    console.log(newArray);
    return list[newArray];
}