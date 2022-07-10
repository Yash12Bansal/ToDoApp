const express=require('express');
const app=express();

const port=8000;

const db= require('./config/mongoose');
// const Todo= require('./models/todo');

// SETING VIEW ENGINE AS EJS

app.set('view engine','ejs');

app.set('views','./views');

app.use(express.urlencoded());

//USING ASSETS FOLDER
app.use(express.static('assets'));

// app.get('/',function(req,res){
//     return res.render('details');

// });

//USING ROUTES FOLDER
app.use('/' , require('./routes'));


//LISTENING TO PORT 8000
app.listen(port,function(err){
    if (err){
        console.log(`Error : ${err}`);
        return;
    }
    console.log(`Server : ${port}`);

});
 