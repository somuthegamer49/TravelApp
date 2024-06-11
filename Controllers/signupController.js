const User = require("../models/user")
const CryptoJs = require('crypto-js')


const signupHandler =async(req,res)=>{
    try{
        const newUser = new User({
            username:req.body.username,
            number:req.body.number,
            email:req.body.email,
            password:CryptoJs.AES.encrypt(req.body.password,'sompaada').toString()
        })
        const saveUser = newUser.save()
        res.status(201).json(saveUser)
    }
    catch(err){
        res.status(500).json({message:"Can't Add User"})
    }
}

module.exports = signupHandler