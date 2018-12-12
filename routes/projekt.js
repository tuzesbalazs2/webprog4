var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	//res.render('');
	res.send('Hello world projekt');
});

router.get('/rolunk', function(req, res) {
	//res.render('');
	res.send('Rolunk projekt');
});

module.exports = router;