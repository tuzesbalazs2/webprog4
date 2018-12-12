var express = require('express');
var router = express.Router();

var ellenorzoMW = require('../middlewares/ellenorzo');
var feltoltoMW = require('../middlewares/feltolto');

var adatok = {}

router.get('/', function(req, res) {
	res.render('pages/home');
	//res.send('Hello world');
});

router.get('/rolunk/:valtozom',
  ellenorzoMW(adatok),
  feltoltoMW(adatok),
  function(req, res) {

	res.render('pages/home', adatok);	
});

module.exports = router;