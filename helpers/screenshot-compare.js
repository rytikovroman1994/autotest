import Jimp from 'jimp';

/**
 * @memberOf Helpers
 * @function compareScreenshots
 * @param {string} screenshotOne - First Base64 encoded screenshot in PNG format.
 * @param {string} screenshotTwo - Second Base64 encoded screenshot in PNG format.
 * @example
 *  const distance = await browser.helpers.compareScreenshots(one, two);
 */
export default async function compareScreenshots(screenshotOne, screenshotTwo) {
  // console.log(screenshotOne);
  const imageOne = await Jimp.read(screenshotOne);
  console.log(imageOne);
  const imageTwo = await Jimp.read(Buffer.from(screenshotTwo, 'base64'));
  console.log(imageTwo);
  const distance = await Jimp.distance(imageOne, imageTwo);
  console.log(distance);
  return distance;
}
