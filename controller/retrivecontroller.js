const {connection,Book,countermodel} = require("../db/model")
async function  retrive(req,res){
  try{
  connection();
  const books= await Book.find();
  console.log(books);
  res.send(books)
  }
catch(error){
console.log("error",error)
}
}

module.exports=retrive



