//implement model here
var mongoose = require('mongoose');

var catSchema = new mongoose.Schema({
	cat_type:String,
    cat_Name:String,
    cat_des:String
	
});

var Cat = mongoose.model('Cat', catSchema);

module.exports = Cat; 
