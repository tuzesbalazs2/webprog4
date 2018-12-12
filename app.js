var express = require('express');
var bodyParser = require('body-parser');

var honlapRoute = require('./routes/honlap');
var projektRoute = require('./routes/projekt');

//var weboldalRoutes = require('./routes/weboldal');
var loginRoute = require('./routes/login');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use('/', honlapRoute);
app.use('/projekt', projektRoute);
app.use('/', loginRoute);

app.listen(8080);
