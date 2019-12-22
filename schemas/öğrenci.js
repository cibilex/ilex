var  mongoose=require("mongoose");

 var Schema=mongoose.Schema;

 var  yenikayıt=new Schema({
     adi:String,
     soyadi:String,
     age:{type:Number,unique:true}
 })

 var kayıtModel=mongoose.model("öğrenciler",yenikayıt)

 module.exports=kayıtModel;