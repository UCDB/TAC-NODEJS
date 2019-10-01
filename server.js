
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
//app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.listen(3000, function(){
    console.log('Server running on port 3000')
})

app.get('/', (req,res)=>{
    res.send('Welcome')
})

app.post('/', (req,res)=>{
    res.send(req.body)
})

