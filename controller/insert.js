
 async function add(title,author,isbn,publishedyear) {
 try{
 const newbook= new Book(
    {
        Title:title,
        Author:author,
        Isbn :isbn,
        Publishedyear:publishedyear
    }
 )
     const savedbook= await newbook.save()
     console.log("stored successfully",savedbook);
 }
 catch(error){
    console.log(error);
 }
 }

 
