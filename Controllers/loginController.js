const CryptoJs = require('crypto-js')
const User = require("../models/user")
const jwt = require('jsonwebtoken')

const loginHandler = async(req,res)=>{
    try{
        const user = await User.findOne({number:req.body.number})
        !user && res.status(401).json({message:"Invalid Number"})
        const decodePassword = CryptoJs.AES.decrypt(user.password,'sompaada').toString(CryptoJs.enc.Utf8)
        decodePassword !== req.body.password && res.status(401).json({message:"Invalid Password"})
        const {password, ...rest} = user._doc
        const accessToken = jwt.sign({username:user.username},'tupaada')
        res.json({...rest,accessToken})
    }
    catch(err){
        console.log(err)
    }
}

module.exports = loginHandler