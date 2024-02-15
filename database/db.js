let mongoose=require('mongoose')

let url=process.env.URI

let connect=async()=>{
    try {
        await  mongoose.connect(url)
        console.log('database is connected')
        
    } catch (error) {
        console.log(error)
    }
}

module.exports=connect