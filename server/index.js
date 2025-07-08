const express = require('express')
const app = express();
require('dotenv').config()
const Port = (process.env.PORT)  || 9000
const cors = require ('cors')
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const AdminRoute = require('./Routes/AdminRoute');
const userRoute = require('./Routes/UserRoute')
const productRoute =require('./Routes/ProductRoute')


mongoose.connect(process.env.DBCON).then(()=>{
    console.log("MongoDB Database Established!!")
})
app.use (cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use('/admin', AdminRoute)
app.use('/user', userRoute)
app.use('/product', productRoute)
app.listen(Port, ()=>{
    console.log(`Server Runs on ${Port}!!`)
})