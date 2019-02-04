const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

describe('test post request status', function() {
    this.timeout(200000);
    // запоминаем результат начального сокращёного фильтра
    let text;
    // проверка на ответ пустого запроса
    let emptyText;

    //  вынесем функцию отправления запроса на сервер
    function postRequire(options, name) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `https://nfz.kodix.ru/api/offers/filter`, false);
        // передаём тело запроса
        const option = options;
        // указываем парамерты запроса
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        // отправляем запрос
        xhr.send(JSON.stringify(option));
        const textNew = xhr.responseText;
        // проверяем на пустой json
        browser.waitUntil(
            () => textNew != emptyText,
            5000, `Запрос ${name} оказался пустым`);
        // проверяем что JSON изменился после отпрвления файла 
        browser.waitUntil(
            () => textNew !=  text,
            5000, `Запрос ${name} не изменил json`);
        // проверяем что ответ на запрос равен 200
        browser.waitUntil(
            () => xhr.status === 200,
            3000, `${name} на запрос отдаёт ${xhr.status}`);

        return textNew;
    };

    before('open page filter', () => {
        browser.helpers.openFilter();
        // получаем начальный json при пустом фильтре 
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `https://nfz.kodix.ru/api/offers/filter`, false);
        xhr.send();
        text = xhr.responseText;

        // получаем json при пустом запросе
        xhr.open("POST", `https://nfz.kodix.ru/api/offers/filter`, false);
        const option = {
            filter: {
                trimline: ["4-sbsdfjhsdjlfhgsdljhfg-comfortline"]
            }  
        }
        // указываем парамерты запроса
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        // отправляем запрос
        xhr.send(JSON.stringify(option));
        emptyText = xhr.responseText;
        console.log(emptyText);
    });

    // модели 
    it('Request status 4-caddy-comfortline', () => {
        const options = {
            filter: {
                trimline: ["4-caddy-comfortline"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status 4-caddy-conceptline', () => {
        const options = {
            filter: {
                trimline: ["4-caddy-conceptline"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status 4-caddy-maxi-comfortline', () => {
        const options = {
            filter: {
                trimline: ["4-caddy-maxi-comfortline"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status 4-caddy-maxi-trendline', () => {
        const options = {
            filter: {
                trimline: ["4-caddy-maxi-trendline"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status 4-caddy-trendline', () => {
        const options = {
            filter: {
                trimline: ["4-caddy-trendline"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status 4-caddy-com-kasten', () => {
        const options = {
            filter: {
                trimline: ["4-caddy-com-kasten"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

     it('Request status 4-caddy-com-kasten-econo', () => {
        const options = {
            filter: {
                trimline: ["4-caddy-com-kasten-econo"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

     it('Request status 4-caddy-com-kombi', () => {
        const options = {
            filter: {
                trimline: ["4-caddy-com-kombi"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

     it('Request status 4-caddy-com-maxi-kasten', () => {
        const options = {
            filter: {
                trimline: ["4-caddy-com-maxi-kasten"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

     it('Request status 4-caddy-com-maxi-kombi', () => {
        const options = {
            filter: {
                trimline: ["4-caddy-com-maxi-kombi"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status t6-transporter-kasten-long', () => {
        const options = {
            filter: {
                trimline: ["t6-transporter-kasten-long"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status t6-transporter-kasten-short', () => {
        const options = {
            filter: {
                trimline: ["t6-transporter-kasten-short"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status t6-transporter-kombi-long', () => {
        const options = {
            filter: {
                trimline: ["t6-transporter-kombi-long"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status t6-transporter-kombi-short', () => {
        const options = {
            filter: {
                trimline: ["t6-transporter-kombi-short"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status t6-caravelle_city', () => {
        const options = {
            filter: {
                trimline: ["t6-caravelle_city"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status t6-caravelle_city_long', () => {
        const options = {
            filter: {
                trimline: ["t6-caravelle_city_long"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status t6-caravelle_comfortline', () => {
        const options = {
            filter: {
                trimline: ["t6-caravelle_comfortline"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status t6-caravelle_comfortline_long', () => {
        const options = {
            filter: {
                trimline: ["t6-caravelle_comfortline_long"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status t6-caravelle_highline', () => {
        const options = {
            filter: {
                trimline: ["t6-caravelle_highline"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status t6-caravelle_highline_long', () => {
        const options = {
            filter: {
                trimline: ["t6-caravelle_highline_long"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status t6-caravelle_trendline', () => {
        const options = {
            filter: {
                trimline: ["t6-caravelle_trendline"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status t6-caravelle_trendline_long', () => {
        const options = {
            filter: {
                trimline: ["t6-caravelle_trendline_long"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status t6-multivan-long_comfortline', () => {
        const options = {
            filter: {
                trimline: ["t6-multivan-long_comfortline"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status t6-multivan_comfortline', () => {
        const options = {
            filter: {
                trimline: ["t6-multivan_comfortline"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status t6-multivan_highline', () => {
        const options = {
            filter: {
                trimline: ["t6-multivan_highline"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status t6-multivan_panamericana', () => {
        const options = {
            filter: {
                trimline: ["t6-multivan_panamericana"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status t6-multivan_trendline', () => {
        const options = {
            filter: {
                trimline: ["t6-multivan_trendline"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status 4-crafter-kasten', () => {
        const options = {
            filter: {
                trimline: ["4-crafter-kasten"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status 4-crafter-kasten-extralongbase-middleroof', () => {
        const options = {
            filter: {
                trimline: ["4-crafter-kasten-extralongbase-middleroof"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status 4-crafter-kasten-longbase-middleroof', () => {
        const options = {
            filter: {
                trimline: ["4-crafter-kasten-longbase-middleroof"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status amarok_1pa_comfortline', () => {
        const options = {
            filter: {
                trimline: ["amarok_1pa_comfortline"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status amarok_1pa_highline', () => {
        const options = {
            filter: {
                trimline: ["amarok_1pa_highline"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    it('Request status amarok_1pa_trendline', () => {
        const options = {
            filter: {
                trimline: ["amarok_1pa_trendline"]
            }   
        };
        postRequire(options, options.filter.trimline);
    });

    // двигатель
    it('Request status eng_powers', () => {
        const options = {
            filter: {
                eng_powers:[100,102,108,110,140]
            }   
        };
        postRequire(options, options.filter.eng_powers);
    });

    it('Request status transmission AT', () => {
        const options = {
            filter: {
                transmission:["AT"]
            }   
        };
        postRequire(options, options.filter.transmission);
    });

    it('Request status transmission MT', () => {
        const options = {
            filter: {
                transmission:["MT"]
            }   
        };
        postRequire(options, options.filter.transmission);
    });

    it('Request status drive 4wd', () => {
        const options = {
            filter: {
                drive:["4wd"]
            }   
        };
        postRequire(options, options.filter.drive);
    });

    it('Request status drive fwd', () => {
        const options = {
            filter: {
                drive:["fwd"]
            }   
        };
        postRequire(options, options.filter.drive);
    });

    it('Request status drive rwd', () => {
        const options = {
            filter: {
                drive:["rwd"]
            }   
        };
        postRequire(options, options.filter.drive);
    });

    it('Request status fuel_type diesel', () => {
        const options = {
            filter: {
                fuel_type:["diesel"]
            }   
        };
        postRequire(options, options.filter.fuel_type);
    });

    it('Request status fuel_type gasoline', () => {
        const options = {
            filter: {
                fuel_type:["gasoline"]
            }   
        };
        postRequire(options, options.filter.fuel_type);
    });

    // Экстерьер
    it('Request status disk_type', () => {
        const options = {
            filter: {
                disk_type:["509b9364-2169-4417-81c5-ac6ef8e26183"]
            }   
        };
        postRequire(options, options.filter.disk_type);
    });

    it('Request status disk_type', () => {
        const options = {
            filter: {
                disk_type:["d1403f4d-f8d9-43a7-b9d0-4f1b9e8d41f4"]
            }   
        };
        postRequire(options, options.filter.disk_type);
    });

    it('Request status disk_size 15', () => {
        const options = {
            filter: {
                disk_size:["c5d3acb4-9f2d-4469-8fab-7e03e0e35680"]
            }   
        };
        postRequire(options, options.filter.disk_size);
    });

    it('Request status disk_size 16', () => {
        const options = {
            filter: {
                disk_size:["4092b01c-c46c-4361-ad83-c18e20a128e7"]
            }   
        };
        postRequire(options, options.filter.disk_size);
    });

    it('Request status disk_size 17', () => {
        const options = {
            filter: {
                disk_size:["d3ec1026-14b3-4f72-8bf6-51e15e1979d8"]
            }   
        };
        postRequire(options, options.filter.disk_size);
    });

    it('Request status disk_size 18', () => {
        const options = {
            filter: {
                disk_size:["4d3dd2a-9148-4fa3-9887-8d7a7c878388"]
            }   
        };
        postRequire(options, options.filter.disk_size);
    });

    it('Request status disk_size 19', () => {
        const options = {
            filter: {
                disk_size:["e9c39a85-aa06-4fdf-b6a1-c96107bfaab8"]
            }   
        };
        postRequire(options, options.filter.disk_size);
    });

    it('Request status light', () => {
        const options = {
            filter: {
                light:["cdfec905-18c4-4d4d-ad79-bfda68ff0d80"]
            }   
        };
        postRequire(options, options.filter.light);
    });

    it('Request status light', () => {
        const options = {
            filter: {
                light:["b409cbcf-3e27-4a75-b65d-2e9844f16ed4"]
            }   
        };
        postRequire(options, options.filter.light);
    });

    it('Request status fog_lights', () => {
        const options = {
            filter: {
                fog_lights:["948c2783-cc16-43ae-9323-f60e6c05c43a"]
            }   
        };
        postRequire(options, options.filter.fog_lights);
    });

    it('Request status suspension', () => {
        const options = {
            filter: {
                suspension:["24f115e0-8898-4575-8bc3-6a1137320bab"]
            }   
        };
        postRequire(options, options.filter.suspension);
    });

    it('Request status suspension', () => {
        const options = {
            filter: {
                suspension:["39a94380-2fad-4463-af20-2fed20c88afa"]
            }   
        };
        postRequire(options, options.filter.suspension);
    });

    it('Request status suspension', () => {
        const options = {
            filter: {
                suspension:["1073d222-eec2-42a9-85f9-d288bedc5961"]
            }   
        };
        postRequire(options, options.filter.suspension);
    });

    it('Request status payload', () => {
        const options = {
            filter: {
                payload:["ab551935-7179-4916-8d52-bc78712b315c"]
            }   
        };
        postRequire(options, options.filter.payload);
    });

    it('Request status payload', () => {
        const options = {
            filter: {
                payload:["3f81111b-9f7f-4f0e-b7c3-4872293dbe3c"]
            }   
        };
        postRequire(options, options.filter.payload);
    });

    it('Request status gross_weight', () => {
        const options = {
            filter: {
                gross_weight:["94ded594-746d-434e-8d31-bb46255b1946"]
            }   
        };
        postRequire(options, options.filter.gross_weight);
    });

    it('Request status gross_weight', () => {
        const options = {
            filter: {
                gross_weight:["d5902bfc-7933-4e7e-9696-bf3077feb8fa"]
            }   
        };
        postRequire(options, options.filter.gross_weight);
    });

    it('Request status gross_weight', () => {
        const options = {
            filter: {
                gross_weight:["767c01c2-ada2-440d-a7e2-e2c8198d1e96"]
            }   
        };
        postRequire(options, options.filter.gross_weight);
    });

    it('Request status railings_and_lights', () => {
        const options = {
            filter: {
                railings_and_lights:["0cd71a57-b90a-43ec-b232-5debd0a23dad"]
            }   
        };
        postRequire(options, options.filter.railings_and_lights);
    });

    it('Request status alterations', () => {
        const options = {
            filter: {
                alterations:["3538a509-cea4-44e5-bf4f-c5a6256d1470"]
            }   
        };
        postRequire(options, options.filter.alterations);
    });

    // интерьер
    it('Request status climate', () => {
        const options = {
            filter: {
                climate:["6587a044-935e-48f0-b380-36b74c4e4f94"]
            }   
        };
        postRequire(options, options.filter.climate);
    });

    it('Request status climate 2', () => {
        const options = {
            filter: {
                climate:["763dc868-fe7b-4b22-a72e-6c5b782bc1af"]
            }   
        };
        postRequire(options, options.filter.climate);
    });

    it('Request status climate 3', () => {
        const options = {
            filter: {
                climate:["092f15a3-d4f4-41cb-aa93-68d829273ab1"]
            }   
        };
        postRequire(options, options.filter.climate);
    });

    it('Request status airbag_cnt 1', () => {
        const options = {
            filter: {
                airbag_cnt:["e00b1ebf-db02-4821-9383-ba402708b4bd"]
            }   
        };
        postRequire(options, options.filter.airbag_cnt);
    });

    it('Request status airbag_cnt 2', () => {
        const options = {
            filter: {
                airbag_cnt:["ec8d5c35-47a1-4872-9181-21e5bbcca9e4"]
            }   
        };
        postRequire(options, options.filter.airbag_cnt);
    });

    it('Request status airbag_cnt 3', () => {
        const options = {
            filter: {
                airbag_cnt:["23dcae71-4482-4efa-a385-507140649cc0"]
            }   
        };
        postRequire(options, options.filter.airbag_cnt);
    });

    it('Request status seat_cnt 2', () => {
        const options = {
            filter: {
                seat_cnt:["2121bf2d-f41a-480b-9792-7afefd505c81"]
            }   
        };
        postRequire(options, options.filter.seat_cnt);
    });

    it('Request status seat_cnt 5', () => {
        const options = {
            filter: {
                seat_cnt:["836d3dbf-f846-4bef-98f7-213d7241c789"]
            }   
        };
        postRequire(options, options.filter.seat_cnt);
    });

    it('Request status seat_cnt 7', () => {
        const options = {
            filter: {
                seat_cnt:["3343f233-119d-4478-be39-0cfb7c1327c2"]
            }   
        };
        postRequire(options, options.filter.seat_cnt);
    });

    it('Request status seats_material', () => {
        const options = {
            filter: {
                seats_material:["c43f4bb1-9af9-4ed3-a58b-1c89447472e7"]
            }   
        };
        postRequire(options, options.filter.seats_material);
    });
    
    it('Request status seats_material', () => {
        const options = {
            filter: {
                seats_material:["ced6d375-da4e-4b19-b0cb-cc34be403343"]
            }   
        };
        postRequire(options, options.filter.seats_material);
    });

    it('Request status seat_electric_drive', () => {
        const options = {
            filter: {
                seat_electric_drive:["3cbcb748-754e-4e4a-baa1-66b095334cf3"]
            }   
        };
        postRequire(options, options.filter.seat_electric_drive);
    });

    it('Request status navigation', () => {
        const options = {
            filter: {
                navigation:["721eaa9a-865b-4a6e-b79e-c2f699423b14"]
            }   
        };
        postRequire(options, options.filter.navigation);
    });

    it('Request status bluetooth', () => {
        const options = {
            filter: {
                bluetooth:["3cbcb748-754e-4e4a-baa1-66b095334cf3"]
            }   
        };
        postRequire(options, options.filter.bluetooth);
    });

    it('Request status multi_wheel', () => {
        const options = {
            filter: {
                multi_wheel:["8d6bd13c-5104-4752-b2be-85b7ec845c6e"]
            }   
        };
        postRequire(options, options.filter.multi_wheel);
    });

    it('Request status seat_heating', () => {
        const options = {
            filter: {
                seat_heating:["f2f7a05a-eb41-4a6e-9ed6-03ef96c6244d"]
            }   
        };
        postRequire(options, options.filter.seat_heating);
    });

    it('Request status min_price', () => {
        const options = {
            filter: {
                min_price: 1742970
            }   
        };
        postRequire(options, options.filter.min_price);
    });

    it('Request status max_price', () => {
        const options = {
            filter: {
                max_price: 4486398
            }   
        };
        postRequire(options, options.filter.max_price);
    });

    it('Request status credit', () => {
        const options = {
            filter: {
                credit: {
                    down_payment: 915323, 
                    term:39, 
                    month_payment:88211,
                    residual_payment:false
                }
            }   
        };
        postRequire(options, options.filter.credit);
    });

    it('Request status leasing', () => {
        const options = {
            filter: {
                leasing: {
                    down_payment:1919286,
                    term:27,
                    month_payment:119131,
                    balloon_payment:1361496
                }
            }   
        };
        postRequire(options, options.filter.leasing);
    });

    it('Request status dealer', () => {
        const options = {
            filter: {
                dealer: ["RUSN00119"]
            }   
        };
        postRequire(options, options.filter.dealer);
    });

    it('Request status exterior', () => {
        const options = {
            filter: {
                exterior: ["black-gray"]
            }   
        };
        postRequire(options, options.filter.exterior);
    });

    it('Request status seats_material', () => {
        const options = {
            filter: {
                seats_material: ["ced6d375-da4e-4b19-b0cb-cc34be403343"]
            }   
        };
        postRequire(options, options.filter.seats_material);
    });

    it('Request status seats_material', () => {
        const options = {
            filter: {
                seats_material: ["c43f4bb1-9af9-4ed3-a58b-1c89447472e7"]
            }   
        };
        postRequire(options, options.filter.seats_material);
    });
});