import { Order, OrderItem } from "../models/Order.js";
import mongoose from "mongoose";

export const addItems = async(req,res)=>{
    try {
        const body = req.body
        for(let i=0;i<body.length;i++){
            const {id,name,qty,img,category,count,price,total} = body[i]
            const order =await OrderItem.create({
              orderId:id,itemName:name,itemQty:qty,itemImage:img,category:category,itemCount:count,price:price,totalPrice:total
            })
            console.log(order)
        

        }
        res.status(200).json({message:"updated"})
    } catch (error) {
        res.status(400).json(error)
    }
}

export const addOrder = async(req,res)=>{
   try {
    const body = req.body
    const {userId,total} = body
    const od = await Order.create({userId:userId,amount:total})
    console.log(od)
    res.status(200).json(od)
   } catch (error) {
    res.status(400).json(error)
   }
}

export const getOrder = async(req,res)=>{
    try {
        const {id} =req.params

      const order = await Order.find({userId:id})
      res.status(200).json(order)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const sendItems =async(req,res)=>{
    try {
        const items = await OrderItem.find()
        res.status(200).json(items)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getSingleOrder = async(req,res)=>{
    try {
        const {id} = req.params
        const order = await Order.find({_id:id}).populate("userId")
        res.status(200).json(order)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const getSingleItem = async(req,res)=>{
    try {
        const {id} = req.params
        console.log(id)
        const order2 = await OrderItem.find({orderId:id})
        res.status(200).json(order2)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}