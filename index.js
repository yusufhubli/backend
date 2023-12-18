import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import bodyparser from "body-parser"
import {readFileSync} from 'fs'
import cors from 'cors'
import Items from "./models/Items.js"
import { items } from "./data.js"
import { register,login } from "./controllers/auth.js"
import { updateProfile,getUser} from "./controllers/user.js"
import { postItems } from "./controllers/items.js"
import { addItems,addOrder, getOrder, sendItems,getSingleItem,getSingleOrder } from "./controllers/order.js"

const app = express()

dotenv.config()

const port = 3005
app.listen(port,()=>{
    console.log(`server is listen on ${port}`)
})
app.use(bodyparser.json({limit: "30mb",extended: true}));
 app.use(bodyparser.urlencoded({limit: "30mb",extended: true}));
//app.use(express.static('../frontend'));
app.use(cors())
app.post('/register',register)
app.post('/login',login)
app.get('/items',postItems)


app.post('/profile',updateProfile)
app.get('/profile/:id',getUser)

app.post('/order/items',addItems)
app.post('/order',addOrder)

app.get('/order/:id',getOrder)
app.get('/order/items/item',sendItems)

app.get('/order/orders/:id',getSingleOrder)
app.get('/order/items/item/:id',getSingleItem)


mongoose.connect(process.env.MONGO_URL,{
dbName:"grocery",
useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('database connected')

// Items.insertMany(items)
}).catch(err=>{
    console.log(err)
})

