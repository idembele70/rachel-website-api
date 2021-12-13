const router = require("express").Router()
const authRouter = require("./auth.routes")
const usersRouter = require("./users.routes")
const productsRouter = require("./products.routes")
const cartsRouter = require("./carts.routes")
const ordersRouter = require("./orders.routes")
router.use("/api/auth", authRouter)
router.use("/api/users", usersRouter)
router.use("/api/products", productsRouter)
router.use("/api/carts", cartsRouter)
router.use("/api/orders", ordersRouter)

module.exports = router
