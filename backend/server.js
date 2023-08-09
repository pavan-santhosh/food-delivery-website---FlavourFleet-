import { app } from './app.js'
import Razorpay from 'razorpay'

export const instance = new Razorpay ({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
}) 




app.listen(process.env.PORT, ()=>{
    console.log(`The server is working on ${process.env.PORT}`);
});



















//  Authentication Part is below   //


/*const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel = require('./models/User')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://pavansanthosh24042002:anjCoeVcmVXPy0eY@cluster0.6omkfcw.mongodb.net/")


app.post('/login', (req,res) => {
    const {email,password} = req.body
    UserModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            } else{
                res.json("the password is incorrect!")
            }
        } else{
            res.json("No record exists!")
        }
    })
})



app.post('/signup', (req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})




console.log("poda naveen")


app.listen(5000, ()=>{
    console.log("server is running!!!!!!!!!!!!!!!!!!!!")
})*/