describe('test slider filter', () => {
    before('open page filter', () => {
        browser.helpers.openSite();
    });

    // проверяем работу слайдера вправо
    it('click right slider button', function() {
        this.retries(3);
        while (browser.isVisible('.slick-next.slick-disabled') == false) {  
            browser.click('.slick-next');
            // проверяем, что нет оверлея на картинке
            browser.waitUntil(
                () => browser.isVisible('.image-lazyload_overlay.is_visible .content-loader__self') === false,
                5000, "Вместо картинки появился оверлей");
        }
    // проверяем, что появился класс, заблокированной кнопки
        browser.waitForExist('.slick-next.slick-disabled');
    });

    // проверяем работу слайдера влево
    it('click right slider button', function() {
        this.retries(3);
        while (browser.isVisible('.slick-prev.slick-disabled') == false) {  
            browser.click('.slick-prev');
            }
        // проверяем, что появился класс, заблокированной кнопки
            browser.waitForExist('.slick-prev.slick-disabled');
        });
    });