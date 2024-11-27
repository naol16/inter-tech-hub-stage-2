// adding into read list of user books and listing
const express = require("express")
const {shower,previous}=require("../controller/previouscontroller")
const router = express.Router();
//listing read book
router.get('/previousreads',shower)
//adding book based on the id into read list
router.get('/previousreads/:id',previous)
module.exports=router;