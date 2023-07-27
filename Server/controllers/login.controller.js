const userDetail = require("../Model/userDetail");
const Jwt = require('jsonwebtoken');
const jwtkey = 'E-commerce';

exports.loginUser = async (req,res)=>{
    if(req.body.email && req.body.password){
        let user = await userDetail.findOne(req.body).select('-password');
        if(user){
            Jwt.sign({user},jwtkey,{expiresIn:"10d"},(err,token)=>{
                if(err){
                    res.send('Something Went Wrong');
                }
                res.send({user,auth:token})
            })
        }else{
            res.send("No User Found..");
        }
    }else{
        res.send("No User Found..");
    }
}