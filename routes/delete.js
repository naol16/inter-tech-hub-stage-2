const deleting =require("../controller/deletecontroller")
const express= require("express")
const router= express.Router()
router.delete('/:id',deleting)
module.exports=router