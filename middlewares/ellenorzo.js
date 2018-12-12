function ellenorzo(adatok) {
   return function(req, res, next){

     console.log('Itt vagyunk bent');
   	 return next();
   }
}

module.exports = ellenorzo;