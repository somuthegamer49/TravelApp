const Hotel = require("../models/hotels")

const singleHotelHandler = async(req,res)=>{
    try{
        const {id} = req.params
        const hotel = await Hotel.findById(id)
        res.json(hotel)
    }
    catch(err){
        res.status(404).json({message:"Hotel Not Found"})
    }
}

module.exports = singleHotelHandler