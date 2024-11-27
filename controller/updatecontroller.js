const {connection,Book,countermodel}= require("../db/model")
async  function updating(req,res){
try{
// accepeting the id 
const objectid = req.params.id
console.log(objectid)
// accepting all the bodies
const title =req.body.title;
const Author=req.body.Author;
const isbn=req.body.isbn;
const publishedyear=req.body.publishedyear;

// checking if there are strings which are numbers
const isbnNumber = Number(isbn);
const publishedYearNumber = Number(publishedyear);
// checking if it is string
function stringchecker(value){ 
      return value!== null && value!== undefined && typeof value ==='string';
    }
// checking if it is number
function numberchecker(value){
  return value !==null && value !==undefined && !isNaN(value)
}

// checking the bodies and doing the update operation
 if (stringchecker(title) && stringchecker(Author) && numberchecker(isbnNumber) && numberchecker(publishedYearNumber)){
    //updating based on the given id
     const result= await Book.updateOne({id:objectid},
      {$set :{Title:title, 
             Author:Author,
             Isbn:isbnNumber,
             Publishedyear:publishedYearNumber}
     }
    )
    // sending the value does not exist
   if (result.matchedCount===0){
    return res.status(404).send("the book does not exist or it is deleted")

   }
    // sending the input is updated 
   return res.status(201).send(" the input is updated")
 
    }

    else{
      // refering the input values are not correct
      return res.status(400).send("the inputs are not valid");

     }

    } 
    catch(error){
      console.log("error",error)

    }
  }
module.exports =updating
