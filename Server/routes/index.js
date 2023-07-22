const express = require("express")
const router = express.Router()
const productRoutes = require("./product.route");
const customerRoutes = require("./customer.route");
const sellerRoutes = require("./seller.route");
const orderRoutes = require("./order.route");

router.use("/product", productRoutes);
router.use("/customer", customerRoutes);
router.use("/seller", sellerRoutes);
router.use("/order", orderRoutes);

module.exports = router;