const router = require('express').Router()

router.get("/",(req,res)=>{
  res.send("Welcome to Cart Route !")
})
module.exports = router