const express = require('express')
const router = express.Router()
const signupHandler = require("../Controllers/signupController")
const loginHandler = require("../Controllers/loginController")


router.route("/register")
      .post(signupHandler)

router.route("/login")
      .post(loginHandler)

module.exports = router