function login(objectRepository){
return function (req, res, next) {

var felhasznalonev = 'gyozo';
var jelszo = '3627909A29C31381A071EC27F7C9CA97726182AED29A7DDD2E54353322CFB30ABB9E3A6DF2AC2C20FE23436311D678564D0C8D305930575F60E2D3D048184D79';

	var password = req.body.password;
	hashedPass = objectRepository.sha512.sha512(password).toUpperCase()

	hashedUser = {
		username: req.body.username,
		password: hashedPass
	}
	console.log(hashedPass);

	/*console.log(hashedPass);
	if (felhasznalonev == req.body.username &&
		jelszo == hashedPass) {
		return next();
	} else {
		console.log('hibás felhasználónév vagy jelszó.');
		return res.redirect('/login');
	}*/
	objectRepository.modelUser.findOne(hashedUser,
        'username skills',
        function(err, user){
        	if(!user){
        		console.log('Nincsen ilyen felhasználó!');
        		return res.redirect('/login');
        	}
        	objectRepository.skills = user.skills;
        	console.log(objectRepository.skills);
        	return next();
        });
 };

}

module.exports = login;