const jwt = require("jsonwebtoken")
exports.isAuthenticated = (req, res, next) => {
    try {
        const idToken = req.headers.authorization.replace("Bearer ", "");
        // console.log(idToken);
        const decodeVal = jwt.verify(idToken, "E-commerce");
        req.userId = decodeVal.uid;
        next();
    } catch (error) {
        return res.status(401).json('Unauthorised..');
    }
}