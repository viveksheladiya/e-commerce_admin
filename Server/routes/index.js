const express = require("express")
const router = express.Router()
const productRoutes = require("./product.route");
const customerRoutes = require("./customer.route");
const sellerRoutes = require("./seller.route");
const orderRoutes = require("./order.route");
const userRoutes = require("./user.route");

router.use("/product", productRoutes);
router.use("/customer", customerRoutes);
router.use("/seller", sellerRoutes);
router.use("/order", orderRoutes);
router.use("/user", userRoutes);

module.exports = router;