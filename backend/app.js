const express=require('express')
const app=express()
const router=require("./routers/index")
const connectDB=require("./database/db")

app.use(express.urlencoded({ extended: true })) 
app.use(express.json())

app.use("/",router)

connectDB()

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})