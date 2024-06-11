const mongoose = require('mongoose')

const WishlistSchema = new mongoose.Schema({
    hotelId:{type:String, required :true},
})

const Wishlist = mongoose.model('Wishlist',WishlistSchema)

module.exports = Wishlist