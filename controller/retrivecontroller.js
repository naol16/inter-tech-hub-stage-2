const {connection,Book,countermodel} = require("../db/model")
async function  retrive(req,res){
  try{
  connection();
  //retrving all the books
  const books= await Book.find();
  console.log(books);
  if(books.length===0){
    res.status(404).send("there is no book registered ")
  }
  return res.status(200).json(books)
  }
catch(error){
console.log("error",error)
}
}

module.exports=retrive



