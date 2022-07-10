// IMPORTING MODELS/TODO

const Todo= require('../models/todo');

module.exports.delete=function(req,res){
    console.log(req.query);

    // let phone=req.query.phone;
    let id=req.query.id;

    Todo.findByIdAndDelete(id,function(err){
        
        if(err){
            console.log('e');
            return;
        }
        return res.redirect('back');
    });
}



    // let ci  = contactList.findIndex(contact => contact.phone == phone);
    // if (ci!=-1){
    //     contactList.splice(ci,1);

    // }
    // return res.redirect('back');  


