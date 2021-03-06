import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('test color seats', () => {
    // считает количество объектов с таким классом 
    const numberColors = () => $$('.avn_color-picker_checks  .checkbox__control');
    const numberConditions = () => $$('.avn008_filter-value-item_color-gradient');
    // начальное число условий в фильре
    let stateQuantity;
    // текущее число условий в фильтре
    let currentQuantity;
    before('open page seats', () => {
        browser.helpers.openSite();
    });

    // выносим проверку в отдельный тест
    it('Check images', () => {
        // переходим на страницу интерьер
        PkwFilter.interior();
        // ожидаем загрузки картинки сиденья
        browser.waitForVisible('.avn008_image-switcher_image');
    });

    // выбираем цвет сидений
    it('check color seats', () => {
        let quantity = numberColors().length;
        console.log(quantity);
        stateQuantity = numberConditions().length;
        console.log(stateQuantity);
        for( let i = 1; i <= quantity; i++) {
            // прокручиваем до видимости кнопки
            browser.scroll(`.avn_color-picker_checks > div:nth-child(${i})`, 0, 20);
            // выбираем цвет
            browser.click(`.avn_color-picker_checks > div:nth-child(${i})`);
            // проверяем количество условий в фильтре
            currentQuantity = numberConditions().length;
            console.log(currentQuantity);
            // проверяем, что число свойст равно количеству выбранных цветов
            expect(currentQuantity).to.be.equal(i);
            // проверяем, что количество изменилось
            expect(currentQuantity).to.not.equal(stateQuantity);
            // меняем начально число
            stateQuantity = currentQuantity;
        }
    });
});