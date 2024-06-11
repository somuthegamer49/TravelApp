const express = require('express')
const router = express.Router()
const verifyUser = require("../middleware/verifyuser")
const wishListController = require("../Controllers/wishlistController")
const {createWishlist,getWishlist,deleteWishlist} = wishListController
router.route("/")
      .post(verifyUser,createWishlist)

router.route("/:id")
      .delete(verifyUser,deleteWishlist)

router.route("/")
      .get(getWishlist)
module.exports = router