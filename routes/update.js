const updating= require("../controller/updatecontroller")
const express = require("express")
const router = express.Router()
router.put('/:id',updating)
module.exports =router