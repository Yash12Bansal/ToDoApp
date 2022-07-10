module.exports.d=function(req,res){

    return res.render('details');

}

// const t=require('../index.js');

// const Todo=t.Todo;

// IMPORTING MODELS/TODO
const Todo= require('../models/todo');

module.exports.createtodo=function(req,res){
    console.log(req.body);
    // contactList.push({
    //     name:req.body.name,
    //     phone:req.body.phone
    // });
    Todo.create(req.body,function(err,newContact){
        if (err){
            console.log('error creating conrat');
            return
        }
        console.log('new');
        return res.redirect('/');

    }
    
    );



    // return res.redirect('/');

}
