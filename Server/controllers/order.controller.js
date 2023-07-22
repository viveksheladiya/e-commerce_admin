const Order = require("../Model/Order");

exports.getorder = async (req, res) => {
    let result = await Order.find({});
    res.send(result);
}

exports.addorder = async (req, res) => {
    let result = Order(req.body);
    let data = await result.save();
    res.json(data);
}

exports.editorder = async (req, res) => {
    let result = await Order.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    res.send(result);
}

exports.deleteorder = async (req, res) => {
    let result = await Order.deleteOne({ _id: req.params.id });
    res.send(result);
}

exports.getupdateorder = async (req, res) => {
    let result = await Order.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    } else {
        res.send({});
    }
}

exports.searchorder = async (req, res) => {
    let result = await Order.find({
        "$or": [
            { oid: { $regex: req.params.key } },
        ]
    });
    res.send(result);
}