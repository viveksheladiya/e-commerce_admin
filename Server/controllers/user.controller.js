const userDetail = require("../Model/userDetail");
const Jwt = require('jsonwebtoken');
const jwtkey = 'E-commerce';

exports.loginUser = async (req, res) => {
    if (req.body.email && req.body.password) {
        let user = await userDetail.findOne(req.body).select('-password');
        if (user) {
            Jwt.sign({ user }, jwtkey, { expiresIn: "10d" }, (err, token) => {
                if (err) {
                    res.send('Something Went Wrong');
                }
                res.send({ user, auth: token, uid: user._id })
            })
        } else {
            res.send("No User Found..");
        }
    } else {
        res.send("No User Found..");
    }
}

exports.registerUser = async (req, res) => {
    let user = new userDetail(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    Jwt.sign({ result }, jwtkey, { expiresIn: '10d' }, (err, token) => {
        if (err) {
            res.send("Something Went Wrong");
        }
        res.send({ result, auth: token, uid: user._id })
    })
}

exports.addToCart = async (req, res) => {
    console.log(req.body);
    const productAdd = await userDetail.updateOne({ _id: req.body.uid }, {
        $addToSet: { cart: req.body.pid }
    })
    if (productAdd) {
        return res.send({ code: 200, message: 'Product Add' });
    } else {
        return res.send({ code: 500, message: 'Something Went Wrong' })
    }
}

exports.getCart = async (req, res) => {
    const userId = req.query.uid;
    const data = await userDetail
        .findOne({ _id: userId })
        .populate('cart');
    if (data) {
        return res.send({ code: 200, message: "Success", data: data.cart });
    } else {
        return res.send({ code: 500, message: "Something Went Wrong." });
    }
};

exports.deleteProduct = async (req, res) => {
    let result = await userDetail.deleteOne({ _id: req.params.id });
    res.send(result);
}
