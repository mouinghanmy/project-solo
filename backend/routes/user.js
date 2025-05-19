const express=require("express")
const router=express.Router()

const CreateToken=require("../midlewere")
const {login,register}=require("../controllers/user")


router.get("/token",CreateToken)
router.post("/login",login)

router.post("/register",register)
module.exports=router
