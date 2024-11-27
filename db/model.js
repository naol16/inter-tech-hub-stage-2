// const { default: mongoose } = require("mongoose");

// mongoose.connect("mongodb+srv://naol:bontu@cluster0.mtmulgw.mongodb.net/")
// .then(()=>{
//     console.log("running correctly")
// })
// .catch((err)=>{
//     console.error("there is error",err);
// })
require('dotenv').config({path:"../.env"});
const { default: mongoose, Model } = require("mongoose");
// console.log(process.env);
mongoose.promise= global.Promise
const  connect = mongoose.connection;
mongoose.set('strictQuery',true)
const connection= async  ()=> { 
try{
const mongodburl=process.env.MONGODB_URI;
console.log(mongodburl);
    connect.on('connected',()=>{
        console.log("connected");
    })
    connect.on('disconnectd',()=>{
        console.log("disconnected");
    })
    connect.on('reconnected',()=>{
        console.log("reconnected");
    })
    connect.on('close',()=>{
        console.log("close");
    })
    await mongoose.connect(process.env.MONGODB_URI)
}catch{(err)=>{
console.error("there is error",err);
}
}
}
const Bookschema=  new mongoose.Schema({
    Title:String,
    Author:String,
    Isbn:Number,
    Publishedyear:Number,
    id: Number
})
 const Book= mongoose.model("book", Bookschema);
 const counterSchema= new  mongoose.Schema({
    id : {
        type:String
    },
    sequence :{
       type:Number
   }
 })
 const countermodel= mongoose.model("counter",counterSchema);
 async function add() {
 try{
 const newbook= new Book(
    {
        Title:"dertogada",
        Author:"ysmake worku",
        Isbn : 1223123,
        Publishedyear: 453219
    }
 )
     const savedbook= await newbook.save()
     console.log("stored successfully",savedbook);
 }
 catch(error){
    console.log(error);
 }
 }


module.exports={connection,Book,countermodel}