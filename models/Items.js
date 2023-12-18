import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema({
    itemId:String,
    itemName:String,
    itemImage:String,
    itemQty:String,
    price:Number,
    category:String,
})

const Items = mongoose.model("Items",itemsSchema)
export default Items