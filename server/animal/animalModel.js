var mongoose = require('mongoose');

var animalSchema = new mongoose.Schema({
	name:String,
	family:String,
	type:String
	
	
});

var animal = mongoose.model('animal', animalSchema);

module.exports = animal; 