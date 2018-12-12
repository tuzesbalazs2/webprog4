var db = require('mongoose');

var uri ='mongodb+srv://admin:nimda@cluster0-agqdc.mongodb.net/test?retryWrites=true'
db.connect(uri, function (err)) {
	console.log('mongodb connected');
	console.log(err);
});

module exports = db;