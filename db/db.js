const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb+srv://naol:bontu@cluster0.mtmulgw.mongodb.net/")
.then(()=>{
    console.log("running correctly")
})
.catch((err)=>{
    console.error("there is error",err);
})