import NfzModel from 'Pageobjects/nfz-model.page.js'
import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test check equipment', () => {
    let nameCar;
    let nameCarFilter;

    // список моделей
    const list = [
        'Caddy',
        'Caddy (коммерческий)',
        'Crafter',
        'Amarok',
        'California',
        'Caravelle',
        'Multivan',
        'Transporter'
    ];
    before('open page filter', () => {
        browser.helpers.openFilter();
    });

    // проверяем доступность коплектаций в каточках
    for( let i = 1; i <= 8; i++ ) {
        it(`Check the complete set in ${list[i-1]}`, function() {
            this.retries(2);
            // проверяем, что карточку видно
            if(browser.isVisible(`.avn008_model__wrap > div.gridcontainer > div:nth-child(${i})`) === false) {
                browser.scroll(`.avn008_model__wrap > div.gridcontainer > div:nth-child(${i})`, 5, 5);
            }
            // получаем имя автомобиля
            nameCar = browser.getText(`div:nth-child(${i}) > div > div > div.avn008_car__info > div.avn008_car__desc > h4`);
            console.log(nameCar);
            // кликаем на карточку
            browser.click(`.avn008_model__wrap > div.gridcontainer > div:nth-child(${i})`);
            // ожидаем появления поля с комплектациями
            browser.waitUntil(
                () => browser.isVisible(NfzModel.pickingField) === true,
                5000, `У автомобиля ${nameCar} не открывается окно комплектаций`);

            // считаем количетсво комплектаций 
            const numberEquipment = $$(NfzModel.Equipment);
            for( let y = 1; y <= numberEquipment.length - 1; y++ ) {
                const disable = browser.getCssProperty(`.grid_s_11.grid_m_8.grid_l_9 > div > div:nth-child(${y})`, 'opacity');
                console.log(disable.value);
                if(disable.value == 1) {
                    // получаем имя комплектации
                    const nameEquipment = browser.getText(`div:nth-child(${y}) > div.avn008_kits__btn-title`);
                    // кликаем по кнопки комплектации
                    browser.click(`.grid_s_11.grid_m_8.grid_l_9 > div > div:nth-child(${y})`);
                    // проверяем что в фильтре появилось условие 
                    browser.waitUntil(
                        () => browser.isVisible(NfzFilter.conditionFilter) === true,
                        5000, `Не удалось выбрать комплектацию ${nameEquipment}`);

                    // проверяем что имя можели в фильтре совпадает с проверяемой
                    nameCarFilter = browser.getText('.avn008_filter-value-item_text__bottom');
                    console.log(nameCarFilter)
                    expect(nameCarFilter).to.be.equal(nameCar.toUpperCase());

                    // убираем комплектацию
                    browser.click(`.grid_s_11.grid_m_8.grid_l_9 > div > div:nth-child(${y})`);
                }
            }
            // закрываем окно комплектаций 
            browser.click('.avn008_kits__close');
        });
    }
})