import User from "../models/User.js"

export const register = async(req,res)=>{
    try {
       const {name,email,password} = req.body
        //console.log(email)
        const user = await User.findOne({email:email})
       // console.log(user)

        if(user != null){
          res.status(400).json({message:"user already exist",success:false})
        }else{
         const id = await User.create({
            name:name,
            email:email,
            password:password
         })
         //console.log(id)
        res.status(200).json(id)
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}
export const login = async(req,res)=>{
    //console.log(req.body)
    try {
        const {email,password} = req.body
        //console.log(email)
        const user = await User.findOne({email:email})
       // console.log(user[0]._id)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}