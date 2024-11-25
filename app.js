require('dotenv').config()
const express= require("express")
const port =process.env.PORT || 3432
const app = new express()

const {connection}= require('./db/model')
connection()
app.use(express.json())


// app.use(model)

app.listen(port,()=>{
    console.log(`the server is running on${port}`)
}
)



