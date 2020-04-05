let mongoose = require('mongoose');
let zakaz = mongoose.model('zakaz');
let token = mongoose.model('token');
const h = require('../helpers/common');

module.exports.getAll = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    zakaz.find({}, (err, zakaz) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,200, zakaz);
    });
};

module.exports.getOne = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    zakaz.findById(req.params.id, (err, zakaz) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,200, zakaz);
    });
};

module.exports.create = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }


    zakaz.create(req.body, (err, zakaz) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,201, zakaz);
    });
};

module.exports.update = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    zakaz.findById(req.params.id, (err, zakaz) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }

        if(req.body.fio){
            zakaz.fio = req.body.fio;
        }
        if(req.body.adress){
            zakaz.adress = req.body.adress;
        }
        if(req.body.dostavshik){
            zakaz.dostavshik = req.body.dostavshik;
        }
        if(req.body.tel){
            zakaz.tel = req.body.tel;
        }
        if(req.body.dateDostavki){
            zakaz.dateDostavki = req.body.dateDostavki;
        }

        zakaz.save((err, zakaz) => {
            if(err){
                h.sendJsonResponse(res,400, err);
            }
            h.sendJsonResponse(res,200, zakaz);
        });

    });

};

module.exports.delete = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    zakaz.findByIdAndRemove(req.params.id, (err) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,204, null);
    });
};