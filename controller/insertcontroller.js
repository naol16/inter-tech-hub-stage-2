const {connection,Book,countermodel}=require("../db/model")
 async function add(req,res) {
connection()
 try{
const title = req.body.title;
const author = req.body.Author;
const isbn = req.body.isbn;
const publishedyear=req.body.publishedyear;
 const data= await countermodel.findOneAndUpdate(
    {id : "auto increment"},
    {"$inc":{"sequence":1}},
    {new :true,}
 );
var sqid;
if(!data){
            const newval =new countermodel({id:"auto increment",sequence:1})
            newval.save()
            sqid=1
        }
        else{
            sqid=data.sequence
        }
 const newbook= new Book(
    {
        Title:title,
        Author:author,
        Isbn :isbn,
        Publishedyear:publishedyear,
        id:sqid
    }
 )


     console.log("data",data)
     const savedbook= await newbook.save()
     console.log("stored successfully",savedbook);
     res.status(500).send("stored successfully");
    
 }
 catch(error){
    console.log(error);
    res.status(400).send("there is some problem")
 }
 }
module.exports=add;
 
