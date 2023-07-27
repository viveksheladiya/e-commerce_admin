const userDetail = require('../Model/userDetail');
const Jwt = require('jsonwebtoken');
const jwtkey = 'E-commerce';

exports.registerUser = async (req, res) => {
    let user = new userDetail(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    Jwt.sign({ result }, jwtkey, { expiresIn: '10d' }, (err, token) => {
        if (err) {
            res.send("Something Went Wrong");
        }
        res.send({ result, auth: token })
    })
}