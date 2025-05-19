const express=require('express')
const router =express.Router()
const{getAllPhones,getOnephone,addphone,deletePhone,updatePhone}=require('../controllers/phone')

router.get('/getAll',getAllPhones)
router.get('/getOne/:id',getOnephone)
router.post('/post',addphone)
router.delete('/delete/:id',deletePhone)
router.put('/update/:id',updatePhone)


module.exports=router