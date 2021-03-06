describe('test checking cards in list', () => {
    before('open page list', () => {
        browser.helpers.openListNfz();
    });

    // проверяем, что все карточки доступны 
    it('consider the number of cards', () => {
        // считае кол-во карточек на странице
        const { length: numberOfCards } = $$('.avn001-2_catalogue-item');
        for( let i = 1; i <= numberOfCards; i++) {
            const card = `.avn001_display__enable-hover > div:nth-child(1) .grid_l_3:nth-child(${i})`;
            browser.scroll(card, 0, 400);
            browser.waitForExist(card, 10000);
            browser.waitForVisible(`${card} img`, 20000);
        }
        // for( let i = 1; i <= numberOfCards - 4; i++) {
        //     const card = `.avn001_display__enable-hover > div:nth-child(3) .grid_l_3:nth-child(${i})`;
        //     browser.scroll(card, 0, 400);
        //     browser.waitForExist(card, 10000);
        //     browser.waitForVisible(`${card} img`, 5000);
        // }
    });

    // проверяем, что все карточки доступны в режиме списка
    it('consider the number of cards list', () => {
        browser.scroll('.is_visible .toggle_switch__states  span', 0, -100);
        browser.waitForVisible('.is_visible .toggle_switch__states  span');
        browser.click('.is_visible .toggle_switch__states  span');
        for(let i = 1; i < 29 ; i++) {
            const card = `.avn001_display__enable-hover .grid_12:nth-child(${i})`;
            browser.scroll(card, 0, 400);
            browser.waitForExist(card, 10000);
            browser.waitForVisible(`${card} img`, 5000);
        }
    })
});