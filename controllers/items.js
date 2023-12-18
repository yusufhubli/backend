import Items from '../models/Items.js'

export const postItems =async(req,res)=>{
    try {
        const items = await Items.find()
        res.status(200).send(items)
    } catch (error) {
      res.status(400).json({message:error.message})   
    }
}