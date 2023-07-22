const express = require("express");
const multer = require('multer');
const path = require('path');

const { getProduct, addproduct, editproduct, getupdateproduct, deleteproduct, searchproduct } = require("../controllers/product.controller")

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})

const upload = multer({ storage });

router.get("/getproduct", getProduct);
router.get("/getupdateproduct/:id", getupdateproduct);
router.get("/searchproduct/:key", searchproduct);
router.post("/addproduct", upload.single('image'), addproduct);
router.put("/updateproduct/:id", editproduct);
router.delete("/deleteproduct/:id", deleteproduct);

module.exports = router
