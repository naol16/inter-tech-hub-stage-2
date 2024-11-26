require('dotenv').config()
const express= require("express")
const port =process.env.PORT || 3432
const app = new express()
const {connection}= require('./db/model')
const insert=require('./routes/insert')
connection()
app.get('/',(req,res)=>{
res.send("connected")
}
)
app.use(express.json())
app.use('/POST/books',insert)
// app.use(model)

app.listen(port,()=>{
    console.log(`the server is running on${port}`)
}
)



