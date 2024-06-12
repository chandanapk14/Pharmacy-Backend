const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
const {addphmodel}=require("./models/addph")
mongoose.connect("mongodb+srv://Chandanapk:vishnuchandu1357@cluster0.bemah3y.mongodb.net/pharmacyDB?retryWrites=true&w=majority&appName=Cluster0")
app.post("/add",(req,res)=>{
    let input=req.body
    let addph=new addphmodel(input)
    addph.save()
    console.log(addph)
    res.json({"status":"success"})
})
app.post("/view",(req,res)=>{
    addphmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})
app.listen(8068,()=>{
    console.log("server started")
})