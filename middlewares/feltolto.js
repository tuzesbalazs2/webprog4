function feltolto(adatok) {
   return function(req, res, next){
   	  var feltoltes = {
		ezegyvaltozo: req.params.valtozom,
		szam: 2,
		szoveg: 'szoveg',
		tomb: ['alma', 'korte', 'barack']
	}

     adatok['feltoltes'] = feltoltes ;
     console.log('Itt vagyunk bent');
   	 return next();
   }
}

module.exports = feltolto;