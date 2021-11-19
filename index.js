const express = require("express")
const app = express()
const mongose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
mongose.connect(process.env.MONGO_URL)
.then(()=>console.log("Connected to DB"))
.catch((err)=>console.log("Error while connecting to DB",err))
app.use(express.json())
const router = require("./routing")
app.use(router)


app.listen(process.env.PORT || 5000,()=>console.log("Backend server is running !"))