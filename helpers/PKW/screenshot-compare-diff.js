import Jimp from 'jimp';

/**
 * @memberOf Helpers
 * @function compareScreenshotsDiff
 * @param {string} screenshotOne - First Base64 encoded screenshot in PNG format.
 * @param {string} screenshotTwo - Second Base64 encoded screenshot in PNG format.
 * @example
 *  const distance = await browser.helpers.compareScreenshotsDiff(one, two);
 */
export default async function compareScreenshotsDiff(screenshotOne, screenshotTwo) {
    // console.log(screenshotOne);
    // данный способ нужен для чтения картинки с локала
    const imageOne = await Jimp.read(screenshotOne);
    // данный способ нужен для чтения картинки с буфера
    const imageTwo = await Jimp.read(Buffer.from(screenshotTwo, 'base64'));
    // сравниваем по пиксилям картинки
    const diff = await Jimp.diff(imageOne, imageTwo);
    // выводим разницу в процентном соотношении
    return diff
}
