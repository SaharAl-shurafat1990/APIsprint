//require the model here
var Cat=require('./catModel.js');

module.exports ={
	getAllCats : function (req, res) {
		Cat.find().exec(function (err, allcats) {
      if(err){
        res.status(500).send('err');
      }else{
        res.status(200).send(allcats);
      }
    });
	
	},
	addCat:function(req, res){
		var type=req.body.type;
		var name=req.body.name;
		var des=req.body.des;

		Cat.create({
		cat_type:type,
		cat_Name:name,
		cat_des:des

		},function(err,ok){
			if(err){
				res.json(err);
			}
			else{
				res.json("add cat!!")
				
			}

		})

	},
	getCat:function(req,res){
		var id = req.params.id;
		console.log(req.params.id);
		Cat.find({_id:id},function (err, cat) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).send(cat);
			}
		})
	}
//you have to use the movie model to make a new database entry 
	
//you need to use params.id to find a movie from your database
		
}
