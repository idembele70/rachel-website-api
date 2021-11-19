const router = require('express').Router()

router.get("/", (req,res)=>{
  res.send("Welcome to Orders Routes !")
})

module.exports = router