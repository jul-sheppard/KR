let mongoose = require('mongoose');
let posecheniya = mongoose.model('posecheniya');
let token = mongoose.model('token');
const h = require('../helpers/common');

module.exports.getAll = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    posecheniya.find({}, (err, posecheniya) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,200, posecheniya);
    });
};

module.exports.getOne = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    posecheniya.findById(req.params.id, (err, posecheniya) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,200, posecheniya);
    });
};

module.exports.create = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }


    posecheniya.create(req.body, (err, posecheniya) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,201, posecheniya);
    });
};

module.exports.update = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    posecheniya.findById(req.params.id, (err, posecheniya) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }

        if(req.body.fio){
            posecheniya.fio = req.body.fio;
        }
        if(req.body.adress){
            posecheniya.adress = req.body.adress;
        }
        if(req.body.dostavshik){
            posecheniya.dostavshik = req.body.dostavshik;
        }
        if(req.body.tel){
            posecheniya.tel = req.body.tel;
        }
        if(req.body.dateDostavki){
            posecheniya.dateDostavki = req.body.dateDostavki;
        }

        posecheniya.save((err, posecheniya) => {
            if(err){
                h.sendJsonResponse(res,400, err);
            }
            h.sendJsonResponse(res,200, posecheniya);
        });

    });

};

module.exports.delete = async (req, res, next) => {

    if(!await h.isValidToken(req.headers.token)){
        h.sendJsonResponse(res, 401, {error: 'unauthorized'});
        return;
    }

    posecheniya.findByIdAndRemove(req.params.id, (err) => {
        if(err){
            h.sendJsonResponse(res,400, err);
        }
        h.sendJsonResponse(res,204, null);
    });
};