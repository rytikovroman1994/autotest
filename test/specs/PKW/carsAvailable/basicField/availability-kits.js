describe(' test availability of kits', () => {
    before('open filter model', () => {
        browser.helpers.openSite();
    });

    // проверяем наличие комплектаций и их активность
    it('check availability kits', function() {
        this.retries(3);
        // получаем количетсво карточек
        const cards = $$('.slick-track .avn008_car').length;
        for(let i = 1; i <= cards; i++) {
            // класс карточки
            const selectorCards = `.slick-slider> div > div > div:nth-child(${i})`;
            if(i > 2) {
                // двигаем слайдер
                browser.click('.slick-arrow.slick-next');
            }
            // проверяем, что карточка существует
            browser.waitForVisible(selectorCards);
            // считаем сколько в карточке комплектаций
            const equipment = $$(`.slick-slider> div > div > div:nth-child(${i}) .icon-nextstep-checkmark`).length;
            // получаем имя модели 
            const nameModel = browser.getHTML(`.slick-initialized > div > div > div:nth-child(${i}) .avn008_car__title`, false);

            for(let y = 2; y <= equipment + 1; y++ ) {
                // нажимаем на чекбокс комплектации
                browser.execute(function(i,y) {
                    document.querySelector(`.slick-initialized > div > div > div:nth-child(${i}) label:nth-child(${y}) > div`).click();
                }, i, y);
                // получаем имя комплектации
                const nameEquipment = browser.getHTML(`div:nth-child(${i}) > div > div > div > div:nth-child(3) > div > label:nth-child(${y}) .avn008_car__kit-title`, false);
                // проверяем, что появилось условие в фильтре
                browser.waitUntil(
                    () => browser.isVisible('.avn008_filter-value-item') === true,
                    5000, `Модель ${nameModel} с комплектацией ${nameEquipment} не выбирается`);
                // ждём пока загрузится картинка условия
                browser.waitUntil(
                    () => browser.isVisible('.avn008_filter-value-item_image') === true,
                    5000, `Картинка "${nameModel} не появилась`);
                
                browser.waitForVisible('.avn008_filter-value-item_image');
                // убираем условие комплектации
                browser.execute(function(i,y) {
                    document.querySelector(`.slick-initialized > div > div > div:nth-child(${i}) label:nth-child(${y}) > div`).click();
                }, i, y);

                // проверяем, что условие в фильтре пропало
                browser.waitUntil(
                    () => browser.isVisible('.avn008_filter-value-item') === false,
                    5000, "Выбранная комплектация не пропала из фильтра");
            }
        }
    }); 
});