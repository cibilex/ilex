var express=require("express")
var router=express.Router();
var kayıtcontrollers=require("../controller/kayıtcontroller")

router.get("/kayit/:thisRemove",kayıtcontrollers.removeThisRecord)
router.get("/kayit",kayıtcontrollers.kayıtekranı)
router.post("/records",kayıtcontrollers.kayitlar)

module.exports=router;