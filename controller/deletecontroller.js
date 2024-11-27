const{connection,Book,countermodel}= require("../db/model")
async function  deleting (req,res){
try{
    connection();
  const objectid =req.params.id;
  console.log(objectid)

  function numberchecker(value){
    return value !==null && value !==undefined && !isNaN(value)
  }
  const value=numberchecker(objectid)
  if(!value){
    return res.status(400).send("there is no id or error on the type of the input used ")
  }

  const result= await Book.deleteOne({id:objectid})
  if(result.deletedCount=== 0){
    return res.status(404).send("the book does not exists or it is deleted")
  }

  res.status(200).send("deleted")
}
catch(error){
    console.log("error",error)
}
}
module.exports=deleting;