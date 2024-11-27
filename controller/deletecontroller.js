const{connection,Book,countermodel}= require("../db/model")
async function  deleting (req,res){
try{
    connection();
  const objectid =req.params.id;
  const result= await Book.deleteOne({id:objectid})
  res.send("deleted",result)
}
catch(error){
    console.log("error",error)
}
    

}
