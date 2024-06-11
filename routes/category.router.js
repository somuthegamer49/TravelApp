const express = require('express')
const router = express.Router()
const getAllCategoryHandler = require("../Controllers/categoryController")

router.route("/")
      .get(getAllCategoryHandler)

module.exports = router