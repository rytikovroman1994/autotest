// тест проверяющий работу слайдера диаметра дисков и добавления условий в фильтр
import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('test slider disks', () => {
    // вызов начального размера дисков
    const getMinDiametr = () => browser.getText('.avn008_filter-value-item_range__min span');
    // вызов максимального размера дисков
    const getMaxDiametr = () => browser.getText('.avn008_filter-value-item_range__max span');
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
        PkwFilter.exterior();
        // переходим на вкладку диски
        browser.click('.avn008_filter__second-tab[data-name="Диски"]');
        // ожидаем загрузки картинки дисков
        browser.waitForVisible('div:nth-child(2) > div > div.disc-item_image > img');
    });

    it('moov slider', () => {
        // проверяем что условие диаметра дисков отсутсвует 
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На скратице уже есть одно условие фильтра");
        // двигаем ползунок, для того, чтобы появилось условие в фильтре
        browser.click(`.rc-slider-step span:nth-child(2)`);
        // проверяем, что появилось условие в фильтре
        browser.waitForVisible('.avn008_filter-value-item_image');
        // получаем минималье размер дисков
        startingMinDiameter = getMinDiametr();
    });

    it('checking the operation of the left slider', () => {
        for( let i = 1; i <= 3; i ++) {
            // двигаем ползунок, для того, чтобы появилось условие в фильтре
            browser.click(`.rc-slider-step span:nth-child(${i})`);
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
        for( let i = 8; i > 6; i--) {
            // инициализируем правый слайдер
            browser.click('.rc-slider-handle-2');
            // двигаем ползунок, для того, чтобы появилось условие в фильтре
            browser.click(`.rc-slider-step span:nth-child(${i})`);
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