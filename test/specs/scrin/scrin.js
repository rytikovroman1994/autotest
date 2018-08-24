import Jimp from 'jimp';

async function compareScreenshots(screenshotOne, screenshotTwo) {
    const imageOne = await Jimp.read(Buffer.from(screenshotOne, 'base64'));
    const imageTwo = await Jimp.read(Buffer.from(screenshotTwo, 'base64'));
  
    const distance = await Jimp.distance(imageOne, imageTwo);
  
    return distance;
  }

describe('Constructor - smoke screenshot test colorSchemes', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(() => {
        browser.windowHandleMaximize ();
        // переходим на страницу
        browser.url('https://cars.volkswagen.ru');
        // скрываем раздел Фильтр
        const firstFilter = browser.waitForVisible('.avn008_overlay');
        if(firstFilter === false) {
            browser.click('.avn003_column-left');
        }
    });

        it('take screenshot', () => {
            ctx.originalScreenshot = browser.screenshot().value;
        });

        it('take second screenshot', () => {
            ctx.newScreenshot = browser.screenshot().value;
        });

        it('compare screenshots', async () => {
            expect(ctx.originalScreenshot).not.equal(null);
            expect(ctx.newScreenshot).not.equal(null);
        
            const distance = await compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
        
            expect(distance).to.be.above(0.01);
          });
    });