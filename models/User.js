import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    address:String,
    city:String,
    state:String,
    phone:Number,
})

const User = mongoose.model("User",userSchema)
export default User