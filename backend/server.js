import express from 'express';
import data from './data.js'

const app = express();
app.use('/api/product',(req,res)=>{
    res.send(data.products)
})
app.use('/',(req,res)=>{
    res.send("hello")
})
const port = process.env.Port||5000
app.listen(port)

// console.log(`serve at ${port}`)