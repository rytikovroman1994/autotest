/**
 * @todo В данном тесте дичь с координатоми, хром чситает в пиксилях, фокс в %.
 */

describe('test of the price slider', () => {
    // вызов начальной цены
    const getMinPrise = () => browser.getText('.avn008_overlay_submit-block_price-display span.price-text');
    const getMaxPrise = () => browser.getText('div:nth-child(2) > .avn008_filter-value-item__inner > .avn008_filter-value-item_price-self');
    // начальная минимальная цена
    let startingMinPrice;
    // новая цена после сдвига ползунка
    let newstartingMinPrice;
    // начальная максимальная цена
    let maximumpPrice;
    // // новая максимальная цена
    let newstartingMaxPrice;

    before(() => {
        browser.helpers.openSite();
    });
    
    // переходим на страницу бюджета
    it('page budget', () => {
        // кликаем по кнопке Бюджет
        browser.click('#react-tabs-2');
        // ожидаем перехода на страницу 
        browser.waitForExist('.gridcontainer.avn008_filter__grid-align');
    });

    // Проверяем работу левого ползунка
    it('move the left slider', () => {
        // получаем минимальную цену автомобиля
        startingMinPrice = getMinPrise();
        // двигаем ползунок 
        browser.helpers.slider( '.rc-slider-handle-1','.avn008_budget__slider-self', 200, 0 );

        // получаем новую минимальную цену
        newstartingMinPrice = getMinPrise();
        expect(startingMinPrice).not.equal(null);
        expect(newstartingMinPrice).to.not.equal(startingMinPrice);
    });

    // проверяем, что в низжей плашке появился пункт минмальной цены
    it('minimum budget', () => {
        browser.waitForExist(' div:nth-child(1) > div.avn008_filter-value-item__inner.avn008_filter-value-item__with-price');
    });

    // Проверяем работу правого ползунка
    it('right slider motion', () => {
        // проверяем наличие кнопки 
        browser.waitForVisible('.rc-slider-handle-2');
        // двигаем ползунок 
        browser.helpers.slider( '.rc-slider-handle-2', '.avn008_budget__slider-self', 100, 0);
        // получаем максимальную цену автомобиля
        maximumpPrice = getMaxPrise();
        browser.helpers.slider( '.rc-slider-handle-2', '.avn008_budget__slider-self', 300, 0);

        // получаем новую минимальную цену
        newstartingMaxPrice = getMaxPrise();
        expect(maximumpPrice).not.equal(null);
        expect(newstartingMaxPrice).to.not.equal(maximumpPrice);
    });

    // проверяем, что в низжей плашке появился пункт минмальной цены
    it('minimum budget', () => {
        browser.waitForExist(' div:nth-child(2) > div.avn008_filter-value-item__inner.avn008_filter-value-item__with-price');
    });
});