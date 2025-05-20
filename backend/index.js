const express=require('express')
const db=require('./config/db')
const cors =require('cors')
const app=express()
const PORT=3000
app.use(express.json())
app.use(cors())

const electronicroutes=require('./routes/electronic')
app.use('/electronic',electronicroutes)

app.listen(PORT,()=>{console.log(`server is listening on ${PORT}`);
})