var express = require('express');
var router = express.Router();
let ctrlzakaz = require('../controllers/zakaz');
let ctrlAuth = require('../controllers/auth');

router.get('/zakaz', ctrlzakaz.getAll);
router.get('/zakaz/:id', ctrlzakaz.getOne);
router.post('/zakaz', ctrlzakaz.create);
router.put('/zakaz/:id', ctrlzakaz.update);
router.delete('/zakaz/:id', ctrlzakaz.delete);

router.post('/signup', ctrlAuth.signup);
router.post('/login', ctrlAuth.login);
router.get('/logout/:login', ctrlAuth.logout);
router.delete('/selfremove/:login', ctrlAuth.selfremove);

module.exports = router;