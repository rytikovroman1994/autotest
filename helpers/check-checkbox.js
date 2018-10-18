/**
 * @memberOf Helpers
 * @function slider
 * @param {string} conditions - дата атрибут конткретного элемента комплектации
 * @param {string} conditionsFilter - title условия в фильтре
 * @example
 *      browser.helpers.checkCheckbox('Active Info Display', 'ACTIVE INFO DISPLAY');
 */

export default function checkCheckbox(conditions, conditionsFilter) {
    // проверяем что фильтр пуст
    browser.waitUntil(
        ()=> browser.isVisible('.avn008_overlay_bar .avn008_filter-value-item_image') === false,
    5000, "На странице уже есть одно условие фильтра");
    // включаем чекбокс
    browser.click(`.checkbox[data-name="${conditions}"]`);
    // проверяем, что в фильтре появилось условие
    browser.waitUntil(
        () => browser.isVisible('.avn008_overlay_bar .avn008_filter-value-item_image') === true,
        5000, `Чекбокс ${conditions} не работает или условие не появилось в фильтре`);
    // проверяем, что это именно фаркоп
    const text = browser.getText('.avn008_overlay_bar .avn008_filter-value-item_text__bottom');
    expect(text).to.be.equal(conditionsFilter);
    // убираем условие
    browser.click(`.checkbox[data-name="${conditions}"]`);
    // проверяем, что условие пропало
    browser.waitUntil(
        ()=> browser.isVisible('.avn008_overlay_bar .avn008_filter-value-item_image') === false,
    5000, "На странице уже есть одно условие фильтра");
}