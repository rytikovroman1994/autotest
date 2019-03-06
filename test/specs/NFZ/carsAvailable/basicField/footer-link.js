describe('test footer links all page', function() {
    // array list links
    const listLincs = [
        'http://www.navigation.com/is-bin/INTERSHOP.enfinity/WFS/Navteq-NavteqEurope-Site/en_GB/-/GBP/View-Promo?Page=VW_Europe_RU&NewLocaleID=en_GB&NewDomainName=Navteq-NavteqEurope-Site&cwt=application/ApplicationFrame_campaign_light',
        'https://cars.volkswagen.ru/news-subscribe/',
        'https://www.volkswagen.ru/ru/sport/vw-junior-masters.html',
        'https://cars.volkswagen.ru/recalls/',
        'https://www.volkswagen.ru/ru/press.html',
        'https://www.volkswagen.ru/ru/technologies/mqb.html',
        'https://www.volkswagen.ru/ru/legal/processing.html',
        'https://cars.volkswagen.ru/contact/',
        'https://www.volkswagen.ru/ru/shanghai-to-venice.html',
        'https://www.volkswagen.ru/ru/glossary.html',
        'https://www.volkswagen.ru/ru/become-dealer.html',
        'https://www.volkswagen.ru/ru/out-of-production.html',
        'https://www.volkswagen.ru/ru/sitemap.html'
    ];
    const listSocialLincs = [
        "https://www.facebook.com/Volkswagenrussia/", 
        "https://vk.com/club22130230", 
        "https://www.youtube.com/user/VolkswagenRu", 
        "https://twitter.com/volkswagenrus", 
        "https://ok.ru/volkswagenrussia", 
        "https://www.facebook.com/VolkswagenServiceRussia/", 
        "https://vk.com/vwservice", 
        "https://www.instagram.com/volkswagenrus/"
    ];

    const listBottomLinks = [
        "http://www.volkswagen.com/", 
        "https://www.volkswagen.ru/ru/legal/communication.html", 
        "https://www.volkswagen-commercial.ru/ru.html", 
        "http://www.volkswagen-media-services.ru/"
    ];
    before('open page list', function() {
        browser.helpers.openListNfz();
        // go to page detail
        browser.click('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
        // wait existing footer
        browser.waitForExist('.avn022_Footer_linksUrl');
    });

    it('Check that all link in footer are correct', function() {
        this.retries(2);
        // number of social links 
        const numberSocialLinks = $$('.avn022_Footer_links-social .avn022_Footer_linksItem').length;
        for(let i = 1; i <= numberSocialLinks; i++) {
            const link = browser.getAttribute(`.avn022_Footer_links-social div:nth-child(${i}) a`, 'href');
            expect(link).to.not.equal(null);
            expect(link).to.be.equal(listSocialLincs[i-1]);
        }
        // number of links
        const numberLinks = $$('.avn022_Footer_links-hide .avn022_Footer_linksItem').length;
        for(let i = 2; i <= numberLinks; i++) {
            const link = browser.getAttribute(`.avn022_Footer_links-hide div:nth-child(${i}) a`, 'href');
            expect(link).to.not.equal(null);
            expect(link).to.be.equal(listLincs[i-1]);
        };

        // number of buttom links
        const numberBottomLinks = $$('.avn022_Footer_legal .avn022_Footer_linksUrl').length;
        for(let i = 1; i <= numberBottomLinks; i++) {
            const link = browser.getAttribute(`.avn022_Footer_legal div:nth-child(${i}) a`, 'href');
            expect(link).to.not.equal(null);
            expect(link).to.be.equal(listBottomLinks[i-1]);
        };
    })
});