const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes")
const app = express();
const cors= require("cors")
//middleware

// app.use("/",(req,res)=>{
//     res.send("This is our app")
// })
app.use(express.json())
app.use(cors())
app.use("/books", router)   // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://user1:Welcome123@cluster0.y1tvm.mongodb.net/book-keeping-app?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to database"))
  .then(()=>{
      app.listen(5000)
  }).catch((error)=>console.log(error))
