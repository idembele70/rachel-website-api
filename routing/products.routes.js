const router = require("express").Router()

router.get("/",(req,res)=>res.send("Welcome to Product Route"))
module.exports = router