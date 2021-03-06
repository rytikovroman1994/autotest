describe('tesr check model card', () => {
    // считаем количество карточек
    const cars = () => $$('.avn008_car__wrap');
    // считаем количесто картинок в карточках 
    const image = () => $$('.avn008_car__image');
    // число машин
    let numberCars;
    // число картинок в каротчках
    let numberImage;
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

    Array.prototype.diff = function(a) {
        return this.filter(function(i){
            return a.indexOf(i) < 0;});
    };

    before('open page filter', () => {
        browser.helpers.openFilter();
    });

    it('Check availability of cards', function() {
        this.retries(3);
        // считаем количество карточек с машинами 
        numberCars = cars().length;
        // проверяем, что их количество равно 8 
        browser.waitUntil(
            () => numberCars === 8,
            5000, "Количество моделей не равно ожидаемому");
    });

    // проверяем что все карточки имеют картинки
    it('Check the presence of pictures in the cards', function() {
        this.retries(3)
        numberImage = image().length;
        // проверяем, что их количество равно количесту карточек 
        browser.waitUntil(
            () => numberImage === numberCars,
            5000, "Количество карточек с картинками не равно ожидаемому");
    });

    // проверяем, что видны все названия моделей
    it('Check the availability of the names of the models', function() {
        this.retries(3);
        // получаем список имён поделей автомобилей
        const listName = browser.getText('.avn008_car__title');
        // сравниваем два массива на наличие оличий 
        const result = listName.diff(list);
        // считаем количество несовпадений между массивами
        const emptyArray = result.length;
        // количество элементов в массиве не должно быть больше 0
        browser.waitUntil(
            () => (emptyArray == 0) === true,
            5000, `${result[0]} не отображается на странице фильтра в категории модели`);
    });
});