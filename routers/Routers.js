var express = require('express');
var router=express.Router();
var controllers=require("../controller/Controllers")



router.get("/home",controllers.Home)
router.get("/login",controllers.Login)
router.post("/login",controllers.loginPost)
router.get('/kıs/:ne', (req, res) => {

    console.log(req.params.ne)
});


module.exports=router;  