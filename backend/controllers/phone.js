const db=require('../config/db')
const phones=db.phones
module.exports={
getAllPhones:function (req,res) {
    phones.findAll()
    .then((phone)=>{res.send(phone)})
    .catch((err)=>{console.log(err)})
},
getOnephone:function (req,res) {
    var getone=req.params.id
phones.findOne({where:{id:getone}})  
.then((phone)=>{res.send(phone)}) 
.catch((err)=>{console.log(err)}) 
},
addphone:function (req,res) {
    var added=req.body
    phones.create(added)
    .then((phone)=>{res.send(phone)})
    .catch((err)=>{console.log(err)})
    
},
deletePhone:function (req,res) {
    var del=req.params.id
    phones.destroy({where:{id:del}})
    .then((phone)=>{res.send(phone)})
    .catch((err)=>{console.log(err)})
},
updatePhone:function (req,res) {
    var update=req.params.id
    phones.update(req.body,{where:{id:update}})
    .then((phone)=>{res.send(phone)})
    .catch((err)=>{console.log(err)})
}

}