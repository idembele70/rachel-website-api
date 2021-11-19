const router = require("express").Router()
const usersRouter = require("./users.routes")
const cartsRouter = require("./carts.routes")
const ordersRouter= require("./orders.routes")
const productsRouter= require("./products.routes")
router.use("/api/users", usersRouter)
router.use("/cart", cartsRouter)
router.use("/order", ordersRouter)
router.use("/product", productsRouter)

module.exports = router
