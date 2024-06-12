const mongoose  =require("mongoose")
const schema =mongoose.Schema(
{
"productid":{type:String,required:true},
"productname":{type:String,required:true},
"image":{type:String,required:true},
"price":{type:String,required:true}
}
)
let shopmodel=mongoose.model("shops",schema)
module.exports={shopmodel}