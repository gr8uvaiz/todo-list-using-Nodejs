const express = require('express');
const port = 3000;
const path = require('path');
const db = require('./config/mongoose')
const Todo = require('./models/todo')

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('public'));
app.use(express.urlencoded())



app.get('/',(req,res)=>{
    Todo.find({}).then(todoData=>{
        // console.log(todoData)
        return res.render('index',{
            title: 'TodoApp',
            todoData: todoData
        });
    })
    
})

app.post('/todo/data',(req,res)=>{
    Todo.create({
        name: req.body.name
    }).then(TodoData =>{
        // console.log(TodoData);
    }).catch(err=>{
        console.log("Erro is encountered while put data into db")
    })
    // console.log(req.body.name);
    return res.redirect('back');
})


app.get('/delete/todoData',(req,res)=>{
    let id = req.query.id;
    Todo.findByIdAndDelete(id).catch(err=>{
        console.log("An error occured in deleting the data from db");
    })
    res.redirect('back');
    // console.log(req.query)
})


app.listen(port,()=>{
    console.log("Your Server is Running on port:",port)
})