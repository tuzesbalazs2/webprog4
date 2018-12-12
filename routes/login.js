var express = require('express');
var sha512 = require('js-sha512');
var router = express.Router();

var loginMW = require('../middlewares/login');

var modelUser = require('../models/user');

var objectRepository = {
	sha512: sha512,
	modelUser: modelUser
}
router.get('/login', function(req, res) {
	res.render('pages/login');
});

router.post('/login',
	loginMW(objectRepository),
    function(req, res) {
    	res.render('pages/home');
    }
);

module.exports = router;