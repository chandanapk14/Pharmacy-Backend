const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "medname":String,
        "meddescr":String,
        "ingre":String,
        "category":String,
        "dose":String,
        "price":String,
        "username":String,
        "address":String,
        "contactno":String,
    }
)
let addphmodel=mongoose.model("addphs",schema)
module.exports={addphmodel}