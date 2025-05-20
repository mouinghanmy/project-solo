const express=require('express')
const router =express.Router()
const{getAllElectonic,getOneElectonic,addElectronic,deleteElectronic,updateElectronic}=require('../controllers/electronic')

router.get('/getAll',getAllElectonic)
router.get('/getOne/:id',getOneElectonic)
router.post('/post',addElectronic)
router.delete('/delete/:id',deleteElectronic)
router.put('/update/:id',updateElectronic)


module.exports=router
