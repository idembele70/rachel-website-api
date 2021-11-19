const router = require("express").Router()

router.get("/",(req,res)=>res.send("Welcome to Users Routes"))

module.exports = router