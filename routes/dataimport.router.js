const express = require('express')
const mongoose = require('mongoose')

const Hotel = require('../models/hotels')
const hotels = require('../data/hotels')

const router = express.Router()

router.route("/").post(async(req,res)=>{
    try{
        const hotelsInDb = await Hotel.insertMany(hotels.data)
        res.json(hotelsInDb)
    }
    catch(err){
        console.log(err)
        res.json("could not add data to database")
    }
})

module.exports = router