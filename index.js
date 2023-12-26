const express=require('express')
const port=8085
const app=express()
const router=require('./routes')

app.use('/link',router)

app.listen(port,()=>console.log('running'))