describe('test climate zones', () => {
    
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };

    // список названий климат контроля
    const nameList = [
        'Кондиционер',
        'Однозонный',
        '2х зонный',
        '3х зонный',
        '4х зонный'
    ];

    // список названий кдимат контроля в фильтре
    const nameListFilter = [
        'CLIMATIC',
        'ОДНОЗОННЫЙ',
        '2-ЗОННЫЙ',
        '3-ЗОННЫЙ',
        '4-ЗОННЫЙ',
    ];
    before('open page climate', () => {
        browser.helpers.openSite();
        // переходим в интерьер
        browser.click('#react-tabs-8');
        // переходим в раздел климат
        browser.click('.avn008_filter__second-tab-wrap li:nth-child(3)');
        // ожидаем загрузки картинки
        browser.waitForVisible('.push_3 > div > div > div:nth-child(1) img');
    });

    // проверяем работу слайдера и условий фильтра, а также, что меняется картинка
    it('check cards, filter and image', () => {
        // получаем количество видом климатконтроля
        const numberClimate = $$('.rc-slider-dot').length;
        for(let i = 1; i <= numberClimate - 1; i++) {
            // делаем изначальный скриншот
            ctx.originalScreenshot = browser.screenshot().value;
            // получаем название климат контроля
            const getNameClimate = browser.getText(`.rc-slider-default-marks div:nth-child(${i}`);
            // проверяем текст
            expect(getNameClimate).to.be.equal(nameList[i-1]);
            browser.scroll(0, 600);
            // двигаем курсор к чекбоксу
            browser.moveToObject(`.rc-slider-step span:nth-child(${i})`);
            // выбираем вид климат контроля
            browser.click(`.rc-slider-step span:nth-child(${i})`);
            // проверяем, что появилось условие в фильтре
            browser.waitForVisible('.avn008_filter-value-item');
            // получаем название климат контроля из фильтра
            const getNameClimatFIlter = browser.getText('.avn008_filter-value-item .avn008_filter-value-item_text__bottom');
            // проверяем текст
            expect(getNameClimatFIlter).to.be.equal(nameListFilter[i-1]);

            // делаем новый скриншот 
            ctx.newScreenshot = browser.screenshot().value;
            // проверяем, что картинки измениись 
            async () => {
                expect(ctx.originalScreenshot).not.equal(null);
                expect(ctx.newScreenshot).not.equal(null);
            
                const distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
        
                expect(distance).to.be.above(0.01);
            }
        }
    });
});