//require files here
var Animal=require('./animalModel.js');

module.exports ={
	getAllAnimals : function (req, res) {
		Animal.find().exec(function (err, allanimals) {
      if(err){
        res.status(500).send('err');
      }else{
      	console.log(req.params.id)
        res.status(200).send(allanimals);
      }
    });
	
	},
	addAnimal:function(req, res){
		// var type=req.body.type;
		// var name=req.body.name;
		// var des=req.body.des;
		console.log(req.body);
		
		for (var i = 0; i < req.body.length; i++) {
			console.log(req.body[i]);
			Animal.create(req.body[i],function(err,ok){
			if(err){
				res.json(err);
			}
		});
		}
		res.json("animal Added")
		

		// Animal.create({
		// name:type,
		// family:name,
		// type:des

		// },function(err,ok){
		// 	if(err){
		// 		res.json(err);
		// 	}
		// 	else{
		// 		res.json("add Animal!!")
		// 	}

		// })
	},
	getAnimal:function(req,res){
		var id = req.params.id;
		console.log(req.params.id);
		Animal.find({_id:id},function (err, animal) {
      if(err){
        res.status(500).send('err');
      }else{
        res.status(200).send(animal);
      }
  })
	
	}
	//you have to use the books model to make a new database entry 
	
	//you need to use params.id to find a books from your database
	
}