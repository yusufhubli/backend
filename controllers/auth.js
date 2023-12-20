import User from "../models/User.js"
import bcrypt from 'bcrypt'

export const register = async(req,res)=>{
    try {
       const {name,email,password} = req.body
        //console.log(email)
        const user = await User.findOne({email:email})
       // console.log(user)
        const hash = bcrypt.hashSync(password,2)
        console.log(hash)
        if(user != null){
          res.status(400).json({message:"user already exist",success:false})
        }else{
         const id = await User.create({
            name:name,
            email:email,
            password:hash
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
       //onst hash = bcrypt.hashSync(password,2)
        const user = await User.findOne({email:email})
       // console.log(user[0]._id)
       const com = bcrypt.compareSync(password,user.password)
       if(com == true){
        res.status(200).json(user)
       }
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}