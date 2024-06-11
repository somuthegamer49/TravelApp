const Category = require("../models/category")

const getAllCategoryHandler = async(req,res)=>{
    const hotelCategory = req.query.category
    try{
      let categ
      if(hotelCategory){
        hotels = await Category.find({category:hotelCategory})
      }
      else{
        hotels = await Category.find({})
      }
      hotels? res.json(hotels):res.status(404).json({message:"No data found"})
    }
    catch(err){
      console.log(err)
    }
  }

module.exports = getAllCategoryHandler