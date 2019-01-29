import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test bags too colors', () => {
    before('open page filter', () => {
        browser.helpers.openFilter();
    });

    // переходим на страницу Цвет
    it('Go to page Color and wait images door', function() {
        this.retries(3);
        // переходим на страницу цвет
        NfzFilter.color();
        // ожидаем появления картинки
        browser.waitForVisible('.avn008_image-switcher_container img');
    })

    // проверяем, что поле Кожанные сидения, очищаются 
    it('Check button-clean in the skin material', () => {
        // переключаемся на Интерьер
        NfzFilter.view();
        // выбираем матерьяр Кожу
        NfzFilter.material();
        // проверяем, что появилось условие в фильтре
        browser.waitUntil(
            () => browser.isVisible(NfzFilter.conditionFilter),
            5000, "Метериал Кожа не появился в фильтре");
        // возвращаемся на скраницу Экстерьер
        browser.click('.grid_s_12:nth-child(1) .rc-slider-dot:nth-child(2)');
        // очищаем фильтр
        NfzFilter.clear();
        // проверяем, что пропало условие из фильтра
        browser.waitUntil(
            () => browser.isVisible(NfzFilter.conditionFilter) === false,
            5000, "Материал Кожа не пропал из фильтра");
        // проверяем, что фильтр Два цвета стал активным
        browser.waitUntil(
            () => browser.isExisting('.rc-slider-default-marks-text-disabled') === false,
            5000, "Фильтр Два Цвета не стал активным после очистки фильтра");
    });
}); 