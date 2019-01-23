import "isomorphic-fetch"
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

describe('test test', () => {
    before('open site', () => {
        browser.url('https://nfz.kodix.ru/');
    });

    it('test test 2', () => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `https://nfz.kodix.ru/api/offers/filter`, false);
        xhr.send();
        const text = JSON.parse(xhr.responseText);
        // console.log(text.models.amarok.kits);

        // fetch("https://nfz.kodix.ru/api/offers/filter")
        //     .then(r =>  r.json().then(Blob => ({status: r.status, body: Blob})))
        //     .then(obj => console.log(obj));
    });

    it('test post', () => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", `https://nfz.kodix.ru/api/offers/filter`, false);
        var options = {
            filter: {
                trimline: ["4-caddy-comfortline"]
            }  
        }
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(JSON.stringify(options));
        console.log(xhr.status);
        expect(xhr.status).to.be.equal(200);
    });
});