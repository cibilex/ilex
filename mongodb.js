let mongoose=require("mongoose")
mongoose.Promise=require("bluebird")
var mongodb="mongodb://localhost/mehmet"
mongoose.set('useCreateIndex', true)
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

module.exports=mongoose.connect(mongodb,function(err,db){
    if(err){
        console.log("veritabanına bağlanamadı")
    }
    else{
        console.log(mongodb +"bağlandı")
      
       
    }} 
    )

