let express=require('express')
let router=express.Router()
let all=require('./controll')
router.route('/').get(all.home)
router.route('/signup').post(all.signup)
router.route('/login').post(all.login)
router.route('/contact').post(all.contact)

module.exports=router