const imageName = [
    'activeInfoDisplay',
    'appConnect',
    'bluetooth',
    'navigation',
    'premiumAudio',
    'wirelessСharger'
];

const optionName = [
    'ACTIVE INFO DISPLAY',
    'APP CONNECT',
    'BLUETOOTH',
    'НАВИГАЦИЯ',
    'ПРЕМИУМ АУДИО',
    'QI ЗАРЯДКА'
];

describe('check of multimedia checkboxes', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before('open page multimedia', () => {
        browser.helpers.openSite();
        // переходим на страницу интерьер
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
        // ожидаем появление картинки кресла
        browser.waitForVisible('.avn008_image-switcher_image');
        // переходим на страницу мультимедиа 
        browser.click('.avn008_filter__second-tab[data-name="Мультимедиа"]');
        // ожидаем загрузки картинки диагональ экрана
        browser.waitForVisible('.multimedia img');
    });

    // проверяем каждый чекбокс по отдельности
        for( let i = 1; i <= 6; i++ ) {
            const name = imageName[i - 1];
            it(`test multimedia checkbox ${name}`, () => {
                // проверяем что фильтр пуст
                browser.waitUntil(
                    ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
                    5000, "На странице уже есть одно условие фильтра");
                // включаем чекбокс
                browser.click(`div:nth-child(${i}) > div > div > div.avn008_option-check_checkbox-self > label`);
                // проверяем, что в фильтре появилось условие
                browser.waitForExist('.avn008_filter-value-item_image');
                const topicalText = browser.getText('.avn008_filter-value-item_text__bottom');
                const verifiableText = optionName[i - 1];
                expect(topicalText).to.be.equal(verifiableText);
                // убираем условие
                browser.click(`div:nth-child(${i}) > div > div > div.avn008_option-check_checkbox-self > label`);
                // проверяем, что условие пропало
                browser.waitUntil(
                    ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
                    5000, "На странице уже есть одно условие фильтра");


                // открываем всплывающее окно
                browser.click(`div:nth-child(${i}) > div > div > div.avn008_option-check_more`);
                // ждём появления картинки
                browser.waitForVisible('.avn015_content .image-container');
                // берём скриншот с локала
                ctx.originalScreenshot = `snapshot/screenshotInterior/${name}.png`;
                // делаем актуальный скриншот
                ctx.newScreenshot = browser.screenshot().value;
                // закрываем всплывающее окно
                browser.click('.modal-window_close');

                it('compare screenshots', async () => {
                    expect(ctx.originalScreenshot).not.equal(null);
                    expect(ctx.newScreenshot).not.equal(null);
                
                    const distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
                    expect(distance).to.be.below(0.1);
                });
            });
        }
});
