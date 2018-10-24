/**
 * @memberOf Helpers
 * @function fromDetailToFilter
 * @param {string} conditions - дата атрибут конткретного элемента комплектации
 * @param {string} conditionsFilter - title условия в фильтре
 * @example
 *      browser.helpers.checkCheckbox('Интерьер', 'Руль', 'Электропривод сидений);
 */

export default function fromDetailToFilter(filterOne, conditions, filterToo) {
    // проверяем что кнопка существует 
    browser.waitForVisible('.avn012_link-back');
    // выходим из деталки 
    browser.click('.avn012_link-back');
    // скролим вверх, потому что при переходе съезжает
    browser.scroll(0, -300);
    // ожидаем появлеия кнопки
    browser.waitForVisible('body #prompt-toggler_filter');
    // возвращаетмся в фильтр
    browser.click('body #prompt-toggler_filter');
    // переходим на страницу интерьера
    browser.click(`.avn008_filter__tab[data-name="${filterOne}"]`);
    if(filterToo != undefined) {
        browser.click(`.avn008_filter__second-tab[data-name="${filterToo}"]`);
    }
    // убираем условие
    browser.click(`.checkbox[data-name="${conditions}"]`);
}