describe('smoke test cards', () => {
    before('open page list', () => {
        browser.helpers.openList();
    });

    // пробуем перебрать карточки через форейч
    it('check cards', () => {
        $$('.avn001-2_catalogue-item').forEach((item)=>{
            console.log(item.ELEMENT);
            browser.waitForVisible('img');
        })
    });
});