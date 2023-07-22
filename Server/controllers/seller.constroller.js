const Seller = require("../Model/Seller");

exports.getseller = async (req, res) => {
    let result = await Seller.find({});
    res.send(result);
}

exports.addseller = async (req, res) => {
    const { sid, name, email, phone } = req.body;
    const image = req.file ? req.file.filename : '';
    let result = new Seller({
        sid,
        name,
        email,
        phone,
        image,
    });
    try {
        const response = await result.save();
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add product', err: err.message });
    }
}

exports.getupdateseller = async (req, res) => {
    let result = await Seller.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    } else {
        res.send({})
    }
}

exports.editseller = async (req, res) => {
    let result = await Seller.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    res.send(result);
}

exports.deleteseller = async (req, res) => {
    let result = await Seller.deleteOne({ _id: req.params.id });
    res.send(result);
}

exports.searchseller = async (req, res) => {
    let result = await Seller.find({
        "$or": [
            { name: { $regex: req.params.key } },
            { sid: { $regex: req.params.key } },
        ]
    });
    res.send(result);
}