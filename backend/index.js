const express=require('express')
const db=require('./config/db')

const cors =require('cors')
const app=express()
const PORT=3000



app.use(express.json())
app.use(cors())
const userroutes=require('./routes/user')
const electronicroutes=require('./routes/electronic')
// const phoneroutes=require('./routes/phone')
// const laptoproutes=require('./routes/laptop')
// app.use('/phones',phoneroutes)
// app.use('/laptop',laptoproutes)
app.use('/electronic',electronicroutes)
app.use('/user',userroutes)
app.listen(PORT,()=>{console.log(`server is listening on ${PORT}`);
})