// тест проверяющий работу слайдера диаметра дисков и добавления условий в фильтр
/*
    @todo тест готов, но пока не работает в силу того, что нет дисков размера больше 19(не консистенты данные)
*/
describe('test slider disks', () => {
    // вызов начального размера дисков
    const getMinDiametr = () => browser.getText('div.avn008_filter-value-item_range.avn008_filter-value-item_range__min > span');
    // вызов максимального размера дисков
    const getMaxDiametr = () => browser.getText('div.avn008_filter-value-item_range.avn008_filter-value-item_range__max > span');
    // начальный минимальный размер диска
    let startingMinDiameter;
    // начальный максимальный размер диска
    let newstartingMinDiameter;
    // начальный минимальный размер диска
    let startingMaxDiameter;
    // начальный максимальный размер диска
    let newstartingMaxDiameter;
    before('open page disks', () => {
        browser.helpers.openSite();
        // переходим на страницу экстерьер
        browser.click('#react-tabs-6');
        // переходим на вкладку диски
        browser.click('#react-tabs-14');
        // ожидаем загрузки картинки дисков
        browser.waitForVisible('div:nth-child(2) > div > div.disc-item_image > img');
    });

    it('moov slider', () => {
        // проверяем что условие диаметра дисков отсутсвует 
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На скратице уже есть одно условие фильтра");
        // двигаем ползунок, для того, чтобы появилось условие в фильтре
        browser.helpers.slider( '.rc-slider-handle-1','div.rc-slider-step > span:nth-child(2)', 5, 5 );
        // проверяем, что появилось условие в фильтре
        browser.waitForVisible('.avn008_filter-value-item_image');
        // получаем минималье размер дисков
        startingMinDiameter = getMinDiametr();
    });

    it('checking the operation of the left slider', () => {
        for( let i = 1; i <= 4; i ++) {
            // двигаем ползунок, для того, чтобы появилось условие в фильтре
            browser.helpers.slider('.rc-slider-handle-1',`div.rc-slider-step > span:nth-child(${i})`, 5, 5 );
            browser.pause(2000);
            // получаем новый развер дисков 
            newstartingMinDiameter = getMinDiametr();
            // проверяем что размер изменился
            expect(startingMinDiameter).to.not.equal(null);
            expect(newstartingMinDiameter).to.not.equal(null);
            expect(newstartingMinDiameter).to.not.equal(startingMinDiameter);

            // приравниваем новое значение к изначальному 
            startingMinDiameter = newstartingMinDiameter;
        }
    });

    it('checking the operation of the right slider', () => {
        startingMaxDiameter = getMaxDiametr();
        console.log(startingMaxDiameter);
        for( let i = 8; i >= 5; i --) {
            // двигаем ползунок, для того, чтобы появилось условие в фильтре
            browser.helpers.slider('.rc-slider-handle-2',`div.rc-slider-step > span:nth-child(${i})`, 5, 5 );
            console.log(i);
            browser.pause(2000);
            // получаем новый развер дисков 
            newstartingMaxDiameter = getMaxDiametr();
            console.log(newstartingMaxDiameter);
            // проверяем что размер изменился
            expect(startingMaxDiameter).to.not.equal(null);
            expect(newstartingMaxDiameter).to.not.equal(null);
            expect(newstartingMaxDiameter).to.not.equal(startingMaxDiameter);

            // приравниваем новое значение к изначальному 
            startingMaxDiameter = newstartingMaxDiameter;
        }
    });
});