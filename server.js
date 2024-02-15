require('dotenv').config()
let express=require('express')
let app=express()
let  port=process.env.PORT||7000
let router=require('./controls/router')
let connect=require('./database/db')
let cors=require('cors')

app.use(cors())
app.use(express.json())
app.use('/api/user',router)





connect().then(()=>{
    app.listen(port,()=>{
        console.log('server is running')
    })

})
