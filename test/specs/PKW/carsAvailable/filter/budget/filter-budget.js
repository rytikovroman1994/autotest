import PkwFilter from 'Pageobjects/pkw-filter.page.js'

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
    // запоминаем имя браузера
    let nameBrowser;

    before(() => {
        browser.helpers.openSite();
        // получаем имя браузера 
        nameBrowser = browser.desiredCapabilities.browserName;
    });
    
    // переходим на страницу бюджета
    it('page budget', function() {
        this.retries(3);
        // кликаем по кнопке Бюджет
        PkwFilter.budget();
        // ожидаем перехода на страницу 
        browser.waitForExist('.gridcontainer.avn008_filter__grid-align');
    });

    // Проверяем работу левого ползунка
    it('move the left slider', function() {
        this.retries(3);
        if(nameBrowser === 'chrome') {
        // получаем минимальную цену автомобиля
        startingMinPrice = getMinPrise();
        // двигаем ползунок 
        browser.helpers.slider('.rc-slider-handle-1','.rc-slider-step', 200, 0 );
        browser.pause(1000);

        // получаем новую минимальную цену
        newstartingMinPrice = getMinPrise();
        expect(startingMinPrice).not.equal(null);
        expect(newstartingMinPrice).to.not.equal(startingMinPrice);
        }
    });

    // проверяем, что в низжей плашке появился пункт минмальной цены
    it('minimum budget', function() {
        this.retries(3);
        if(nameBrowser === 'chrome') {
        browser.waitForExist(' div:nth-child(1) > div.avn008_filter-value-item__inner.avn008_filter-value-item__with-price');
        }
    });

    // Проверяем работу правого ползунка
    it('right slider motion', () => {
        if(nameBrowser === 'chrome') {
        // проверяем наличие кнопки 
        browser.waitForVisible('.rc-slider-handle-2');
        // двигаем ползунок 
        browser.helpers.slider( '.rc-slider-handle-2', '.rc-slider-step', 300, 0);
        // ждём появления условия максимальной цены в фильтре
        browser.waitForVisible('div:nth-child(2) > .avn008_filter-value-item__inner > .avn008_filter-value-item_price-self');
        // получаем максимальную цену автомобиля
        maximumpPrice = getMaxPrise();
        browser.helpers.slider('.rc-slider-handle-2', '.rc-slider-step', 400, 0);
        browser.pause(1000);

        // получаем новую максимальную цену
        newstartingMaxPrice = getMaxPrise();
        expect(maximumpPrice).not.equal(null);
        expect(newstartingMaxPrice).to.not.equal(maximumpPrice);
        browser.pause(5000);
        }
    });

    // проверяем, что в низжей плашке появился пункт максимальной цены
    it('minimum budget', () => {
        if(nameBrowser === 'chrome') {
        browser.waitForExist('div:nth-child(2) > div.avn008_filter-value-item__inner.avn008_filter-value-item__with-price');
        }
    });
});