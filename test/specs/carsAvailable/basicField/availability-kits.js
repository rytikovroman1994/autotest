describe(' test availability of kits', () => {
    before('open filter model', () => {
        browser.helpers.openSite();
    });

    // проверяем наличие комплектаций и их активность
    it('check availability kits', () => {
        // получаем количетсво карточек
        const cards = $$('.slick-track .avn008_car').length;
        for(let i = 1; i <= cards; i++) {
            // класс карточки
            const selectorCards = `.slick-slider> div > div > div:nth-child(${i})`;
            if(i > 2) {
                browser.moveToObject('.slick-arrow.slick-next');
                // двигаем слайдер
                browser.click('.slick-arrow.slick-next');
            }
            // проверяем, что карточка существует
            browser.waitForVisible(selectorCards);
            // наводимся на карточку
            browser.moveToObject(selectorCards, 50, 50);
            // считаем сколько в карточке комплектаций
            const equipment = $$(`.slick-slider> div > div > div:nth-child(${i}) .icon-nextstep-checkmark`).length;
            console.log(equipment);
            // получаем имя модели 
            const nameModel = browser.getText(`.slick-initialized > div > div > div:nth-child(${i}) .avn008_car__title`);

            for(let y = 2; y <= equipment + 1; y++ ) {
                // нажимаем на чекбокс комплектации
                browser.click(`.slick-initialized > div > div > div:nth-child(${i}) label:nth-child(${y}) > div`);
                // получаем имся комплектации
                const nameEquipment = browser.getText(`div:nth-child(${i}) > div > div > div > div:nth-child(3) > div > label:nth-child(${y})  .avn008_car__kit-title`);
                // проверяем, что появилось условие в фильтре
                browser.waitUntil(
                    () => browser.isVisible('.avn008_filter-value-item') === true,
                    5000, `Модель ${nameModel} с комплектацией ${nameEquipment} не выбирается`);
                // ждём пока загрузится картинка условия
                browser.waitForVisible('.avn008_filter-value-item_image');
                // убираем условие комплектации
                browser.click(`.slick-initialized > div > div > div:nth-child(${i}) label:nth-child(${y}) > div`);
                // проверяем, что условие в фильтре пропало
                browser.waitUntil(
                    () => browser.isVisible('.avn008_filter-value-item') === false,
                    5000, "Выбранная комплектация не пропала из фильтра");
            }
        }
    }); 
});