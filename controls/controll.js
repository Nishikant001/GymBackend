let gymData=require('../database/db2')
let bcrypt=require('bcrypt')
let home= async(req,res)=>{

    try {
        res.status(204).send('home')

        
    } catch (error) {
        res.status(401).send(error)
        
    }
}
let signup=async(req,res)=>{
    
    try {
        let {name,email,phone,username,password}=req.body
        let existmail= await gymData.findOne({email})
        if(existmail){
          return  res.status(400).json({message:'email alredy exist '})

        }
        let setPass= await bcrypt.hash(password,10)
        let result=await gymData.create({name,email,phone,username,password:setPass})

        

       return res.status(202).json({message:'registration sucess',token:await result.addToken(),userid:result._id})

        
    } catch (error) {
        return res.status(404).json({message:'registarion faild'})
        
    }
}

let login=async(req,res)=>{
    try {
        let{email,password}=req.body
        let emailexist2=await gymData.findOne({email})
        let vpass= await bcrypt.compare(password,emailexist2.password)
        if(! emailexist2){
           return res.status(404).json({message:'email not exist'})
        }else if (! vpass) {
           return res.status(400).json({message:'password not match'})

        
       }
      return  res.status(200).json({message:'login sucess ',token:await emailexist2.addToken(),userid:emailexist2._id})

        
    } catch (error) {
       return res.status(401).json({message:'login faild'})
        
    }
}


let contact=async(req,res)=>{
    try {
        let{email,name,phone,comment}=req.body
        let com= await gymData.create({email,name,phone,comment})
      return  res.status(200).json({message:'send sucess',com})
    } catch (error) {
      return  res.status(404).send(error)
        
    }

}

module.exports={home,signup,login,contact}

