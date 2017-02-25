//you need to require some files here
var catController=require('.././cat/catController.js');
var animalController=require('.././animal/animalController.js');

module.exports = function (app, express) {

//=============================================================================
/*								movie route									 */
//=============================================================================
	app.get('/api/getAll',catController.getAllCats);
	app.post('/api/addcat',catController.addCat);
	app.get('/api/cat/:id',catController.getCat);
	//here you have to add two more routes
	
//=============================================================================
/*								book route									 */
//=============================================================================
	//app.post('/api/book/insterbooks', bookController.insertBooks);
	//here you have to add two more routes
	app.get('/api/animals',animalController.getAllAnimals);
	app.post('/api/addanimal',animalController.addAnimal);
	app.get('/api/:id',animalController.getAnimal);

};

