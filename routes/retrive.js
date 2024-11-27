const express=require("express")
const retrive= require("../controller/retrivecontroller")
const router=express.Router()
router.get("/",retrive)
module.exports=router
