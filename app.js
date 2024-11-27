require('dotenv').config()
const express= require("express")
const port =process.env.PORT || 3432
const app = new express()
const {connection}= require('./db/model')
const insert=require('./routes/insert')
const retrive= require('./routes/retrive')
const deleteing= require('./routes/delete')
const updating = require('./routes/update')
connection()
app.use(express.json())
app.get('/',(req,res)=>{
res.send("connected")
}
)
app.use(express.json())
app.use('/books',insert)
app.use('/books',retrive)
app.use('/books',deleteing)
app.use('/books',updating)

// app.use(model)

app.listen(port,()=>{
    console.log(`the server is running on${port}`)
}
)



