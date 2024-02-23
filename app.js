const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
const {Todo}= require('./model/db') 

app.set("view engine","ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',async (req, res)=>{
    const list = await (await Todo.find({})).map((e)=>e.title)
    
    const data ={'name':list}
    res.render("index",data)
}
)

app.post('/',(req,res)=>{
    const data = req.body.message;
    const todo = new Todo({
        title:data,
        completed:false
    })
    todo.save()
    res.redirect('/')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))