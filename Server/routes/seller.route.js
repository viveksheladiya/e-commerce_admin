const express = require('express');
const multer = require('multer');
const { getseller, deleteseller, addseller, getupdateseller, editseller, searchseller } = require('../controllers/seller.constroller');

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

router.get("/getseller", getseller);
router.get("/getupdateseller/:id", getupdateseller);
router.get("/searchseller/:key", searchseller);
router.post("/addseller", upload.single('image'), addseller);
router.put("/editseller/:id", editseller);
router.delete("/deleteseller/:id", deleteseller);

module.exports = router;