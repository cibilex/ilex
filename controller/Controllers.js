var path=require("path")

module.exports.Login=function(req,res){
    
     
    res.render("login")
}
module.exports.Home=function(req,res){
    res.sendFile(path.join(__dirname,"../models/home.html"))
}
module.exports.loginPost=function(req,res){
    console.log(req.body)
     res.render("homeviews",{
       email:  req.body.username,
       sire:req.body.password

     })
}
