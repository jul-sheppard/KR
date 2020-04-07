let mongoose = require('mongoose');
module.exports.index = (req, res, next) => {

    // основные операции с данными с MongoDB

    // // создание записи в коллекции config:
    //
    // // объект для вставки в базу данных
    // let configRecord = {
    //     key: "шапка титульного листа",
    //     value: "МИНИСТЕРСТВО ОБРАЗОВАНИЯ, НАУКИ И МОЛОДЁЖНОЙ ПОЛИТИКИ НИЖЕГОРОДСКОЙ ОБЛАСТИ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ПРОФЕССИОНАЛЬНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ «НИЖЕГОРОДСКИЙ РАДИОТЕХНИЧЕСКИЙ КОЛЛЕДЖ»"
    // };
    //
    // // вызываем метод create модели config
    // config.create(configRecord, (err, config) => {
    //     // коллбэк при добавлении данных
    //     if(err){
    //         // если есть о
    //         res.render('index', { title: 'ERROR: ' + err });
    //     }
    //
    //     res.render('index', { title: 'CREATE OK: ' + JSON.stringify(config) });
    //
    // });

    // создание записи в коллекции zakaz:

    // // объект для вставки в базу данных
    // let zakazRecord = {
    //     fio: "по ПМ.02 Осуществление интеграции программных модулей",
    //     //adress: ,
    //     dostavshik: "Фамилия Имя Отчество",
    //     tel: "3ИСиП-17-1",
    //     //dateDostavki: ,
    // };
    //
    // // вызываем метод create модели config
    // zakaz.create(zakazRecord, (err, config) => {
    //     // коллбэк при добавлении данных
    //     if(err){
    //         // если есть о
    //         res.render('index', { title: 'ERROR: ' + err });
    //     }
    //
    //     res.render('index', { title: 'CREATE OK: ' + JSON.stringify(config) });
    //
    // });

    // изменение записи в коллекции zakaz:
    // zakaz.deleteMany({adress: "Неизвестный Адрес"}, (err) => {
    //         // коллбэк при удалении данных
    //         if (err) {
    //             // если есть ошибка
    //             res.render('index', {title: 'DELETE ERROR: ' + err});
    //         }
    //
    //         res.render('index', {title: 'DELETE OK.'});
    //     }
    // );


    res.render('index', {title: 'INFO: Смотрите закомментированный код в этом контроллере для изучения операций создания записей в коллекциях MongoDB'});

};