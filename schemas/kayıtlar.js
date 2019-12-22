var  mongoose=require("mongoose")
validators = require('mongoose-validators');
var Schema=mongoose.Schema;

var  kayıtseması=new Schema({
    adi:String,
    pasword:{type:String,unique:[true,"Eşsiz parola yazılmalı"]}
})

var yenikayıt=mongoose.model("yenikayıt",kayıtseması)

module.exports=yenikayıt;