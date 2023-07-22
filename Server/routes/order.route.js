const express = require('express');

const router = express.Router();

const { getorder, addorder, deleteorder, getupdateorder, searchorder, editorder } = require("../controllers/order.controller");

router.get("/getorder", getorder);
router.get("/getupdateorder/:id", getupdateorder);
router.get("/searchorder/:key", searchorder);
router.post("/addorder", addorder);
router.put("/updateorder/:id", editorder);
router.delete("/deleteorder/:id", deleteorder);

module.exports = router;