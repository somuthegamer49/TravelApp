const express = require('express')
const mongoose = require('mongoose')

const Category = require('../models/category')
const categories = require('../data/categories')

const router = express.Router()

router.route("/").post(async(req,res)=>{
    try{
        const categoriesInDB = await Category.insertMany(categories.data)
        res.json(categoriesInDB)
    }
    catch(err){
        console.log(err)
        res.json("could not add data to database")
    }
})

module.exports = router