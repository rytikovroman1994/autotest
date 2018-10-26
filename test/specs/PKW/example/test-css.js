describe('my website should always look the same',function() {
    it('header should look the same', (done) => {
        browser.url('http://webdriver.io');
        browser.waitForVisible('.header');
        browser.webdrivercss('homepage', {
                name: 'header',
                elem: '.header',
                screenWidth: [ 320 , 640 , 960 ]
            }, function ( err, res) {
                assert.ifError (err);
                assert.ok (res.isWithinMisMatchTolerance);
            });
            browser.call(done);
    });
});