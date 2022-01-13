const router = require('express').Router()
const KEY = process.env.STRIPE_SECRET_KEY
const stripe = require('stripe')(KEY)

//CREATE
router.post("/payment", (req, res) => {
  const { tokenId, amount } = req.body
  stripe.charges.create({
    source: tokenId,
    amount,
    currency: "eur"
  }, (stripeErr, stripeRes) => {
    if (stripeErr){
      res.status(500).json(stripeErr)
    }
    else{
      res.status(200).json(stripeRes)
    }
  })
})

module.exports = router