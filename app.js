const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {shopmodel}=require("./models/shop")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://snehatk:6282011259@cluster0.jd3vcot.mongodb.net/shopdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    let shop =new shopmodel(input)
    shop.save()
    console.log(shop)
    res.json({"status":"success"})
})

app.post("/view",(req,res)=>{
    shopmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})


app.listen(8080,()=>{
    console.log("server started")
    })
    