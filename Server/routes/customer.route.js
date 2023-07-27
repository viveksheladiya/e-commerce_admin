const express = require('express');
const multer = require('multer');

const { getcustomer, addcustomer, deletecustomer, editcustomer, getupdatecustomer, searchcustomer } = require('../controllers/customer.controller');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

router.get("/getcustomer", getcustomer);
router.get("/getupdatecustomer/:id", getupdatecustomer);
router.get("/searchcustomer/:key", searchcustomer)
router.post("/addcustomer", upload.single('image'), addcustomer);
router.put("/updatecustomer/:id", editcustomer);
router.delete("/deletecustomer/:id", deletecustomer);

module.exports = router;