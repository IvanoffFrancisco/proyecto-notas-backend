const mongoose=require('mongoose');


mongoose.connect("mongodb://localhost/Note",{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("se conecto a mongodb")
    
})
.catch(()=>{
    console.log("error al conectarce a mongodb")
    
})