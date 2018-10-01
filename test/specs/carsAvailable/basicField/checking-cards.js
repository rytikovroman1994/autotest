describe('checking-cards', () => {
    before(() => {
        browser.helpers.openList();
    });

    // стандартный режим
    it('consider the number of cards', () => {
        // считае кол-во карточек на странице
        const { length: numberOfCards } = $$('.gridcontainer .grid_l_3');
        for( let i = 1; i <= 4; i++) {
            const card = `.avn001_display__enable-hover > div:nth-child(1) .grid_l_3:nth-child(${i})`;
            browser.moveToObject(card, 0, 200);
            browser.waitForExist(card, 10000);
            browser.waitForVisible(`${card} img`, 5000);
        }
        for( let i = 1; i <= numberOfCards - 4; i++) {
            const card = `.avn001_display__enable-hover > div:nth-child(2) .grid_l_3:nth-child(${i})`;
            browser.moveToObject(card, 0, 200);
            browser.waitForExist(card, 10000);
            browser.waitForVisible(`${card} img`, 5000);
        }
    });

    // списком
    it('consider the number of cards list', () => {
        browser.scroll(0, 0);
        browser.waitForVisible('.is_visible .toggle_switch__states  span');
        browser.click('.is_visible .toggle_switch__states  span');
        for(let i = 1; i < 29 ; i++) {
            const card = `.avn001_display__enable-hover .grid_12:nth-child(${i}) `;
            browser.moveToObject(card, 0, 200);
            browser.waitForExist(card, 10000);
            browser.waitForVisible(`${card} img`, 5000);
        }
    })
});