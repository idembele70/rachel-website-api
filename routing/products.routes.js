const router = require("express").Router()
const Product = require("../database/model/product.model")
const { verifyTokenAndAdmin } = require("./verifyToken")

// CREATE

router.post("/new", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body)

  try {
    const savedProduct = await newProduct.save()
    res.status(200).json(savedProduct)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get("/", (req, res) => res.send("Welcome to Product Route"))
module.exports = router