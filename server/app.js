const express = require('express')
const connectDB = require('./config/dbconfig')
const cors = require('cors')
const app = express()
const port = 3000

const productsRoute = require('./routes/products')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/uploads',express.static('uploads'))

// Connect to MongoDB
connectDB()


app.use('/products',productsRoute)

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen((port),(err)=>{
    if(err){
        console.log(err)
    }
    console.log(`Server is running on port ${port}`)
})