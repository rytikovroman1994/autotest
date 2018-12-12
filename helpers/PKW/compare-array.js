/**
 * @memberOf Helpers
 * @function compareArray
 * @param {Array} a - новый массив
 * @param {Array} i - старый массив
 * @example
 *      browser.helpers.compareArray(array, array);
 */

export default function compareArray(a,i) {
    Array.prototype.diff = function(a) {
        return this.filter(function(i){
            return a.indexOf(i) < 0;});
    }
    // проверяем совпадение массивов
    const result = a.diff(i);
    return result
}