const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes")
const app = express();
const cors= require("cors")
const dotenv = require("dotenv");

//middleware
dotenv.config();
// app.use("/",(req,res)=>{
//     res.send("This is our app")
// })
app.use(express.json())
app.use(cors())
app.use("/books", router)   // localhost:5000/books

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => console.log("connected to database"))
  .then(()=>{
      app.listen(process.env.PORT || 5000)
  }).catch((error)=>console.log(error))
