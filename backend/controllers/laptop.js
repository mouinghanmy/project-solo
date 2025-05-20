
// const db=require('../config/db')
// const laptop=db.laptop
// module.exports={

// getAllLaptops:function (req,res) {
//     laptop.findAll()
//     .then((Laptop)=>{res.send(Laptop)})
//     .catch((err)=>{console.log(err)})
// },
// getOnelaptop:function (req,res) {
//     var getone=req.params.id
// laptop.findOne({where:{id:getone}})  
// .then((Laptop)=>{res.send(Laptop)}) 
// .catch((err)=>{console.log(err)}) 
// },
// addLaptop:function (req,res) {
//     var added=req.body
//     laptop.create(added)
//     .then((Laptop)=>{res.send(Laptop)})
//     .catch((err)=>{console.log(err)})
    
// },
// deleteLaptop:function (req,res) {
//     var del=req.params.id
//     laptop.destroy({where:{id:del}})
//     .then((Laptop)=>{res.send(Laptop)})
//     .catch((err)=>{console.log(err)})
// },
// updateLaptop:function (req,res) {
//     var update=req.params.id
//     laptop.update(req.body,{where:{id:update}})
//     .then((Laptop)=>{res.send(Laptop)})
//     .catch((err)=>{console.log(err)})
// }

// }