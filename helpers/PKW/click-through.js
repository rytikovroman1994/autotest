/**
 * @memberOf Helpers
 * @function clickThought
 * @param {string} selector - селектор по которому совершается клик
 * @example
 *      browser.helpers.checkConditions('class');
 */

export default function clickThought(selector) {
    // очень не хороший костыль, который необзодим, ибо в докере в фф не работает команда moveToObject
    browser.execute(() => {
        document.querySelector(selector).click();
      });
}