const mongoose=require("mongoose");


const Db="mongodb+srv://Info:Info@cluster0.seli7.mongodb.net/Info?retryWrites=true&w=majority"
mongoose.connect(Db,{useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology:true,
useFindAndModify:false}).then(()=>{ console.log("Connection successfull")}).catch((e)=>{console.log(e)});