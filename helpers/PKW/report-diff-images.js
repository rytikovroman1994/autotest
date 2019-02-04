/**
 * @memberOf Helpers
 * @function reportDiifImage - передаёт картинку в репортер если есть различия в скриншотах
 * @param {string} nameBrowser - имя браузера 
 * @param {string} diff - различие скриншотов в формате base64
 * @param {string} windowSize - размер екрана
 * @param {string} namePage - имя страницы на которой проверяются скриншоты
 * @example 
 *      browser.helpers.reportDiifImage('color-door', '800');
 */

import Jimp from 'jimp';
import fs from "file-system"
import reporter from 'wdio-allure-reporter'

export default function reportDiifImage(diff) {
    // const path = `test/reports/allure-results/${nameBrowser}-${windowSize}-${namePage}.png`;
    // diff.image.write(path, (err,image) => {
    // fs.readFileSync(path, "base64");
    // });

    // reporter.createAttachment("difference", Buffer.from(images, "base64"), 'image/png');
    
    // let img;
    // const path = `test/reports/allure-results/${nameBrowser}-400-${namePage}.png`;
    
    // browser.call(()=>{
    //     const zaebalo = new Promise((resolve)=>{
    //         diff.image.write(path, (err,image) => {
    //         resolve(path)
    //     });
    //     });
    //     zaebalo.then((path)=> function(path) { fs.readFileSync(path, "base64")})
    //     .then((img)=> reporter.createAttachment("difference", Buffer.from(img, "base64"), 'image/png'))
    //     .catch(error => console.error(error));
    // });
    browser.call(()=> {
        return new Promise((resolve)=>{
        diff.image.getBuffer(Jimp.AUTO, (err, res) => {
        resolve(res);
        });
    })
    .then((res)=>reporter.createAttachment("difference", Buffer.from(res, "base64"), 'image/png'))
});
}