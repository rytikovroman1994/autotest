describe('test types machines', () => {
    // список заблоченных машин в категории для семьи
    const listFamily = [
        'Caddy (коммерческий)',
        'Crafter'
    ];
    // список заблоченных машин в категории для бизнесса
    const listBusines = [
        'Caddy',
        'Amarok',
        'California'
    ];

    Array.prototype.diff = function(a) {
        return this.filter(function(i){
            return a.indexOf(i) < 0;});
    };

    before('open page filter', () => {
        browser.helpers.openFilter();
    });

    // порвеярем что в каегории "Для бизнесса" два скрытых автобибиля
    it('Check for family', () => {
        // переходим на вкладку для семьи
        browser.click('.avn008_model__filter-item[data-name="Для семьи"]');
        // считаем количество заблокированных карточек 
        const blockCards = $$('.false.avn008_car--for_business').length;
        // проверяем что число равно 2
        expect(blockCards).to.be.equal(2)

        // проверяем, что заблокированны нужные автомобили
        const listFamilyBlock = browser.getText('.false.avn008_car--for_business h4');
        // сравниваем два массива на наличие оличий 
        const result = listFamilyBlock.diff(listFamily);
        // считаем количество несовпадений между массивами
        const emptyArray = result.length;
        // количество элементов в массиве не должно быть больше 0
        browser.waitUntil(
            () => (emptyArray == 0) === true,
            5000, `${result[0]} отображается не в том списке`);
    });

    // порвеярем что в каегории "Для семьи" два скрытых автобибиля
    it('Check for business', () => {
        // переходим на вкладку для бизнесса
        browser.click('.avn008_model__filter-item[data-name="Для бизнеса"]');
        // считаем количество заблокированных карточек 
        const blockCards = $$('.false.avn008_car--for_family').length;
        // проверяем что число равно 2
        expect(blockCards).to.be.equal(3);

        // проверяем, что заблокированны нужные автомобили
        const listBusinessBlock = browser.getText('.false.avn008_car--for_family h4');
        // сравниваем два массива на наличие оличий 
        const result = listBusinessBlock.diff(listBusines);
        // считаем количество несовпадений между массивами
        const emptyArray = result.length;
        // количество элементов в массиве не должно быть больше 0
        browser.waitUntil(
            () => (emptyArray == 0) === true,
            5000, `${result[0]} отображается не в том списке`);
    });
});