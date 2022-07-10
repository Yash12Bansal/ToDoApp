module.exports.home=function(req,res){
    // console.log('qwqwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww')

    // return res.render('index');

    // IMPORTING MODELS/TODO

    const Todo= require('../models/todo');

    Todo.find({},function(err,todo){
        if (err){
            console.log('ee');
            return;
        }
        return res.render('index',{
            to_do:todo
    
        });

    });

}
