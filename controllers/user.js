import User from "../models/User.js";

export const updateProfile = async(req,res)=>{
    try {
        const body = req.body
        const {userId,name,email,address,phone,city,state} = body
        const update = await User.findByIdAndUpdate({_id:userId},{name,email,address,city,state,phone})
       // console.log(body)
       if(update){
        res.status(200).json({message:"profile is updated"})
       }
       
    } catch (error) {
        res.status(403).json({message:error.message})
    }
}

export const getUser = async(req,res)=>{
    try {
        const {id} = req.params
        console.log(id)
        const update = await User.findById({_id:id})
       // console.log(body)
       if(update){
        res.status(200).json(update)
       }
       
    } catch (error) {
        res.status(403).json({message:error.message})
    }
}