const express = require("express");
const { loginUser, registerUser, addToCart, getCart, deleteProduct } = require("../controllers/user.controller");
const { isAuthenticated } = require('../controllers/auth.controller');

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/addtocart", addToCart);
router.get("/getproduct", getCart);
router.delete("/deleteProduct/:id", isAuthenticated, deleteProduct);

module.exports = router;