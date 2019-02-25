describe('test footer links all page', function() {
    // array list links
    const listLincs = [];
    const listSocialLincs = [];
    before('open page list', function() {
        browser.helpers.openList();
        // go to page detail
        browser.click('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
        // wait existing footer
        browser.waitForExist('.avn022_Footer_linksUrl');
    });

    it('Build all links', function() {
        this.retries(2);
        // number of links
        const numberLinks = $$('.avn022_Footer_links-hide .avn022_Footer_linksItem').length;
        for(let i = 2; i <= numberLinks; i++) {
            const link = browser.getAttribute(`.avn022_Footer_links div:nth-child(${i}) > div > a`, 'href');
            listLincs.push(link);
        };
        // number of social links 
        const numberSocialLinks = $$('.avn022_Footer_links-social .avn022_Footer_linksItem').length;
        for(let i = 2; i <= numberSocialLinks; i++) {
            const link = browser.getAttribute(`.avn022_Footer_links div:nth-child(${i}) > a`, 'href');
            listSocialLincs.push(link);
        }
    });

    it('Check that all link in footer are correct', function() {
        this.retries(2);
        // number of social links 
        const numberSocialLinks = $$('.avn022_Footer_links-social .avn022_Footer_linksItem').length;
        for(let i = 2; i <= numberSocialLinks; i++) {
            const link = browser.getAttribute(`.avn022_Footer_links div:nth-child(${i}) > a`, 'href');
            expect(link).to.not.equal(null);
            expect(link).to.be.equal(listSocialLincs[i - 2]);
        }
        // number of links
        const numberLinks = $$('.avn022_Footer_links-hide .avn022_Footer_linksItem').length;
        for(let i = 2; i <= numberLinks; i++) {
            const link = browser.getAttribute(`.avn022_Footer_links div:nth-child(${i}) > div > a`, 'href');
            expect(link).to.not.equal(null);
            expect(link).to.be.equal(listLincs[i-2]);
        };
    })
});