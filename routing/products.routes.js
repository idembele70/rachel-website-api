const Product = require("../database/model/product.model")
const { verifyTokenAndAdmin } = require("./verifyToken")

const router = require("express").Router()
// CREATE
router.post("/new", verifyTokenAndAdmin, async (req, res) => {
  console.log(req.body)
  const newProduct = new Product(req.body)
  try {
    const savedProduct = await newProduct.save()
    res.status(200).json(savedProduct)
  } catch (error) {
    res.status(500).json(error)
  }
})

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const productUpdated = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      {
        new: true
      }
    )
    res.status(200).json(productUpdated)
  } catch (err) {
    res.status(500).json(err)
  }
})

// DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json("Product has been deleted")
  } catch (err) {
    res.status(500).json(err)
  }
})

// GET ONE PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) res.status(401).json("Product not Found")
    res.status(200).json(product)
  } catch (err) {
    res.status(500).json(err)
  }
})

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new
  const qCategory = req.query.category
  try {
    let products
    if (qNew)
      products = await Product.find().sort({ createdAt: -1 }).limit(5)
    else if (qCategory)
      products = await Product.find({ categories: { $in: [qCategory] } })
    else
      products = await Product.find()
    res.status(200).json(products)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router