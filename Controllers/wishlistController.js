const Wishlist = require("../models/wishlist")


const createWishlist = async(req,res)=>{
    const wishList = new Wishlist(req.body)
    try{
        const savedWishlist = wishList.save()
        res.status(201).json(savedWishlist)
    }catch(err){
        res.status(500).json({message:"Request Failed"})
    }
}

const deleteWishlist = async(req,res)=>{
    try{
        await Wishlist.findByIdAndDelete(req.params.id)
        res.json({message:"Wishlist Hotel Deleted"})
    }
    catch(err){
        res.status(500).json({message:"Hotel couldn't de Deleted"})
    } 
}

const getWishlist = async(req,res)=>{
    try{
        const wishList = await Wishlist.find({})
        wishList ? res.json(wishList) : res.json({message:"Items not found"})
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = {createWishlist,getWishlist,deleteWishlist}