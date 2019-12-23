var  PORT=process.env.PORT || 8000; 
const express = require('express');
const app=express();
var path=require("path")
var bodyParser=require("body-parser")
const connectDb=require("./mongodb")             //veritabanıyla bağlantı eklendi
var öğrencimodeli=require("./schemas/öğrenci")  //öğrenci modeli eklendi
 //var yenikayıt=require("./schemas/kayıtlar")          //kayıtların modeli eklendi
var  ejslayout=require("express-ejs-layouts")          
var routers=require("./routers/Routers")
var route=require("./routers/kayıtrouters")
  


app.use(express.static("public"))    //statik dosyaların kullanımını sağlar.statik dosyaları eklerken bu dizinden başla.
app.use(express.static("public/aa"));

//görüntü motoru ve görünüm dosyalarının dizini eklendi.conrollerde dosyaları çağırırken views dizininden başla.
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"./views"))

// express-ejs-layouts projeye ekledi
app.use(ejslayout)
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
res.send("deneme55")
});


 //app.use("/",routers)
  //app.use("/",route)




app.listen(PORT, () => {
   console.log(`Server started on port`+PORT);
});