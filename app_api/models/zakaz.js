let mongoose = require( 'mongoose' );

let zakazSchema = new mongoose.Schema({
    fio: {type: String, required: true},
    adress: {type: String, required: true, default: "Неизвестный Адрес"},
    dostavshik: {type: String, required: true},
    tel: {type: Number, required: true},
    dateDostavki: {type: Date, required: true, default: Date.now},
    zakaz: {type: String, required: true},
    userId: {type: Number, required: false}
});

mongoose.model('zakaz', zakazSchema );

