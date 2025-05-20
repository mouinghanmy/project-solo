const db=require('../config/db')
const electronic=db.electronic
module.exports={

getAllElectonic:function (req,res) {
    electronic.findAll()
    .then((electronics)=>{res.send(electronics)})
    .catch((err)=>{console.log(err)})
},
getOneElectonic:function (req,res) {
    var getone=req.params.id
electronic.findOne({where:{id:getone}})  
.then((electronics)=>{res.send(electronics)}) 
.catch((err)=>{console.log(err)}) 
},
addElectronic:function (req,res) {
    var added=req.body
    electronic.create(added)
    .then((electronics)=>{res.send(electronics)})
    .catch((err)=>{console.log(err)})
    
},
deleteElectronic:function (req,res) {
    var del=req.params.id
    electronic.destroy({where:{id:del}})
    .then((electronics)=>{res.send(electronics)})
    .catch((err)=>{console.log(err)})
},
updateElectronic:function (req,res) {
    var update=req.params.id
    electronic.update(req.body,{where:{id:update}})
    .then((electronics)=>{res.send(electronics)})
    .catch((err)=>{console.log(err)})
}

}