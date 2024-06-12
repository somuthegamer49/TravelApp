const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/dbconfig')
const cors = require('cors')
const app = express()


const hotelRouter = require("./routes/hotel.router")
const hotelDataToDB = require('./routes/dataimport.router')
const categoryDataToDB = require('./routes/categoryimport.router')
const categoryRouter = require('./routes/category.router')
const singleHotelRouter = require('./routes/singlehotel.router')
const authRouter = require('./routes/auth.router')
const wishlistRouter = require('./routes/wishlist.router')

app.use(cors())
app.use(express.json())

const PORT = 3500

app.get("/",(req,res)=>{
    res.send("hello")
})
app.use("/api/hotels/",hotelRouter)
app.use("/api/hoteldata/",hotelDataToDB)
app.use("/api/categorydata/",categoryDataToDB)
app.use("/api/categories/",categoryRouter)
app.use("/api/hotels/",singleHotelRouter)
app.use("/api/auth/",authRouter)
app.use("/api/wishlist/",wishlistRouter)

app.listen(PORT,async()=>{
    await connectDB()
    console.log("Server is up and running "+ PORT)
})