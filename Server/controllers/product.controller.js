const Product = require('../Model/Product');

exports.getProduct = async (req, res) => {
    let result = await Product.find({});
    return res.json(result);
}

exports.addproduct = async (req, res) => {
    const { title, brand, category, quantity, price } = req.body;
    const image = req.file ? req.file.filename : '';
    let result = new Product({
        title,
        brand,
        category,
        quantity,
        price,
        image,
    });
    try {
        const response = await result.save();
        res.json(response);
    } catch (err) {
        res.status(500).json({ message: 'Failed to add product', err: err.message });
    }
}

exports.editproduct = async (req, res) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    res.send(result);
}

exports.getupdateproduct = async (req, res) => {
    let result = await Product.findOne({ _id: req.params.id })
    if (result) {
        res.send(result);
    } else {
        res.send({})
    }
}

exports.deleteproduct = async (req, res) => {
    let result = await Product.deleteOne({ _id: req.params.id });
    res.send(result);
}

exports.searchproduct = async (req, res) => {
    let result = await Product.find({
        "$or": [
            { title: { $regex: req.params.key } },
            { brand: { $regex: req.params.key } },
        ]
    });
    res.send(result);
}