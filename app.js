require('dotenv').config()
const express= require("express")
const port =process.env.PORT
const app = new express()
const {connection}= require('./db/model')
const insert=require('./routes/insert')
const retrive= require('./routes/retrive')
const deleteing= require('./routes/delete')
const updating = require('./routes/update')
const previous= require('./routes/previous')
connection()
app.use(express.json())
app.get('/',(req,res)=>{
res.send("connected")
}
)
app.use(express.json())
//insertion
app.use('/books',insert)
//retriving
app.use('/books',retrive)
//deleting 
app.use('/books',deleteing)
//updating based on the id the id on the route
app.use('/books',updating)
// adding to lists of books which are read by the user and listing all read book based on the id.
app.use('/books',previous)

// app.use(model)

app.listen(port,()=>{
    console.log(`the server is running on${port}`)
}
)



