//inserting route
const add=require("../controller/insertcontroller")
const express= require("express")
const router= express.Router()
router.post('/',add)
module.exports=router;

