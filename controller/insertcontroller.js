const {connection,Book,countermodel}=require("../db/model")
 async function add(req,res) {
connection()
 try{
const title = req.body.title;
const Author = req.body.Author;
const isbn = req.body.isbn;
const publishedyear=req.body.publishedyear;
//checking if it is string
function stringchecker(value){ 
    return value !==null && value !==undefined && typeof value ==="string";
  }
// checking if it is number
  function numberchecker(value){
    return value !==null && value !==undefined && !isNaN(value)
  }
if (stringchecker(title) && stringchecker(Author) && numberchecker(isbn) && numberchecker(publishedyear)){

// here auto incrementing function to increase id 
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
        Author:Author,
        Isbn :isbn,
        Publishedyear:publishedyear,
        id:sqid
    }
 )


     console.log("data",data)
     const savedbook= await newbook.save()
     console.log("stored successfully",savedbook);
     res.status(201).send("stored successfully");
}
else{
    res.status(400).send("you did not include all the data   or the  input you included is not valid")
}
 }
 catch(error){
    console.log(error);
 }
 }
module.exports=add;
 
