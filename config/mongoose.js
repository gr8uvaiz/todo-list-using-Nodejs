const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/todo-database');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'An error is encountered during database connection '))
db.once('open',()=>{
    console.log("Database is Successfully Connected !");
})