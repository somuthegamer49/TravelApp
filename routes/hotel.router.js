const express = require('express')
const router = express.Router()
const getAllHotelHandler = require("../Controllers/hotelController")

router.route("/")
      .get(getAllHotelHandler)

module.exports = router