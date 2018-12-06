/**
 * @memberOf Helpers
 * @function diagonal - хелпер на проверк скриншотов в разных диагоналях
 * @param {} conditions - дата атрибут конткретного элемента комплектации
 * @param {string} localPicture - путь к ксриншоту 
 * @example
 *      browser.helpers.diagonal();
 */

export default async function diagonal({width: x, height: y}, localPicture) {
    // меняем разрешение экрана
    browser.windowHandleSize({width: x, height: y});
    // берём скриншот с локала
    const originalScreenshot = localPicture;
    // делаем текущий скриншот
    const newScreenshot = browser.screenshot().value;
    expect(originalScreenshot).not.equal(null);
    expect(newScreenshot).not.equal(null);
    
    return originalScreenshot,newScreenshot;
}