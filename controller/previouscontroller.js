const {connection,Book,countermodel,previousmodel}= require("../db/model")
//listing the book which are read --->shower function
//adding books into which are read by user ---> pervious
async function previous(req,res) {
    try{
        const objectid = req.params.id
    const books = await Book.find({ id: objectid})
       const newprevious = new previousmodel({
       Title: books.title,
       id:objectid
        }
       )
       const data= await newprevious.save()
       return res.status(201).send("stored");
    }
catch(error){

}
    
}
async function shower(req,res){
    try{
        const books= await previousmodel.find();
        console.log("book previously read by you",books);
        if(books.length===0){
          res.status(404).send("there is no book registered ")
        }
        return res.status(200).json(books)
        }

    
    catch(error){
        console.log(error);
    }
}

module.exports={previous,shower}
