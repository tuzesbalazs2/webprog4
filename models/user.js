var db = require('../modules/db');

var Schema = db.Schema;

var UserSchema = new Schema({
	username: { type: String, required: true, index: { unique: true} },
	password: { type: String, required: true},
	skills: {type: Array}
}, { collection: 'users' });

module.exports = db.model('User', UserSchema);