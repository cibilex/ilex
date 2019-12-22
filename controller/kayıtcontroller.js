var path=require("path")
const yenikayitlar=require("../schemas/kayıtlar")


module.exports.kayıtekranı=(req,res)=>{
    res.render("kayıt")
}
module.exports.kayitlar=(req,res)=>{
    
    var username=req.body.username;
    var password=req.body.password;

    var yenikay=new yenikayitlar({
        adi:username,
        pasword:password
    })

    yenikay.save((err,result)=>{
        if(err) throw err
        else{
            console.log("kayıt eklendi")
            yenikayitlar.find({},(err,data)=>{
                var kayitlar=data;
                var y=data.length;
                
                
            
              
              res.render("dene",{
                  kayitler:kayitlar,
          
              })
              
          })
        }
    })

  
}
module.exports.removeThisRecord=((req,res)=>{
     yenikayitlar.findOneAndDelete({adi:req.params.thisRemove},(err)=>{
        if(err)  console.log("silinemedi")
        else{
            console.log(req.params.thisRemove+""+"Veritabanından silindi")
            res.render("sil",{
                silindi:req.params.thisRemove
            })
        }

    })
})