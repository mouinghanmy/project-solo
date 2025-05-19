const jwt =require("jsonwebtoken")

var secretKey="bhy"

function CreateToken(req,res,next) {
    const user=req.body
    jwt.sign(user,secretKey,(err,resulat)=>{
if(err){
    res.send(err)
}else{
    res.send({token:resulat})
}
    })
    next()
}

module.exports=CreateToken