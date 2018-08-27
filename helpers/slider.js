/**
 * @memberOf Helpers
 * @function slider
 * @param {string} selectorOne - Селектор кнопки слайдера
 * @param {string} selectorTwo - Селектор оси по которой двигается кнопка слайдера.
 * @param {number} OsX - Координаты по оси X.
 * @param {number} OsY - Координаты по оси Y.
 * @example
 *      browser.helpers.slider(selectorOne, selectorToo, 0 , 0);
 */

export default async function slider(selectorOne, selectorTwo, OsX, OsY ) {
    browser.waitForVisible(selectorOne);
    // переносим курсор на кнопку ползунка
    browser.moveToObject(selectorOne, 20, 20);
    // кликаем с зажимом
    browser.buttonDown();
    // жвигаем курсор
    browser.moveToObject(selectorTwo, OsX, OsY);
    // отпускаем кнопку
    browser.buttonUp ();
}