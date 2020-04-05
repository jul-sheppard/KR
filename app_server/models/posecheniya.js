let mongoose = require( 'mongoose' );

let posecheniyaSchema = new mongoose.Schema({
    fio: {type: String, required: true},
    adress: {type: String, required: true, default: "Неизвестный Адрес"},
    dostavshik: {type: String, required: true},
    tel: {type: Number, required: true},
    dateDostavki: {type: Date, required: true, default: Date.now},
});

mongoose.model('posecheniya', posecheniyaSchema );

