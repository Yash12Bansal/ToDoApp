const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_list+db')
const db = mongoose.connection;
db.on('error',console.error.bind(console,'error dbs'));
db.once('open',function(){
    console.log('Success'); 
});


module.exports = db;