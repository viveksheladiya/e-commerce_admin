const Customer = require("../Model/Customer");

exports.getcustomer = async (req, res) => {
    let result = await Customer.find({});
    res.send(result);
}

exports.addcustomer = async (req, res) => {
    const { cid, name, email, phone, address } = req.body;
    const image = req.file ? req.file.filename : '';
    let result = new Customer({
        cid,
        name,
        email,
        phone,
        address,
        image,
    });
    try {
        const response = await result.save();
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add Customer', err: err.message });
    }
}

exports.editcustomer = async (req, res) => {
    let result = await Customer.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    res.send(result);
}

exports.getupdatecustomer = async (req, res) => {
    let result = await Customer.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    } else {
        res.send({});
    }
}

exports.deletecustomer = async (req, res) => {
    let result = await Customer.deleteOne({ _id: req.params.id })
    res.send(result);
}

exports.searchcustomer = async (req, res) => {
    let result = await Customer.find({
        "$or": [
            { name: { $regex: req.params.key } },
        ]
    });
    res.send(result);
}