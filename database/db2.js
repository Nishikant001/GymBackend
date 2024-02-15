let mongoose=require('mongoose')
let JWT=require('jsonwebtoken')
let schema=new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    username:String,
    password:String,
    comment:String
    
})

schema.methods.addToken=async()=>{
    try {
        return(
        JWT.sign({
            userId:this._id,
            userMail:this.email
        },
        process.env.SIG)
        )

        
    } catch (error) {
        console.log(error)
        
    }

}

let gymData= new mongoose.model('gymData',schema)

module.exports=gymData