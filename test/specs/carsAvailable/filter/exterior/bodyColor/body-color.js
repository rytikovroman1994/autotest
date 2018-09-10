describe('body-color', () => {
    // считаем количетсво чекбоксов цвета
    const numberOfCheckbox = () => $$('.grid_12 .checkbox__control').map(i => i.getAttribute('type'));
    // полный класс условия добалнения цвета в фильтр
    let filterColor = '.avn008_filter-value-item__with-color'
    // считаем количество условий фильтра
    const numberOfColor = () => $$(filterColor);
    // текуший цвет копота на картинке
    let currentСolor;
    // новый цвет копота на картинке
    let newСolor;
    // получаем имя картинки
    const imageName = () => browser.getAttribute('.avn008_image-switcher_image', 'src');
    
    before('open site', () =>{
        browser.helpers.openSite();
    });

    // пеходим в раздел экстерьер-цвет кузова
    it('open page filter body color', () =>{
        browser.click('#react-tabs-6');
        // ожидаем загрузки карртинки цвета капота
        browser.waitForVisible('.avn008_image-switcher_container');
        // получаем цвет капота на картинке
        currentСolor = imageName();
    });

    it('add a new color', () => {
        const quantity = numberOfCheckbox().length;
        for(let i=1; i <= quantity; i++) {
            // выбираем цвет
            browser.click(`div.avn_color-picker_checks > div:nth-child(${i})`);
            // проверяем что появилось условие фильтра
            browser.waitForExist(filterColor);
            const numberColors = numberOfColor().length;
            expect(numberColors).to.be.equal(i);
            // получаем новый цвет капота
            newСolor = imageName();
            // проверяем что изменилось
            expect(currentСolor).to.not.equal(null);
            expect(newСolor).to.not.equal(null);
            expect(newСolor).to.not.equal(currentСolor);

            // приравниваем текущий цвет к новому
            currentСolor = newСolor;
        }
    });
});  