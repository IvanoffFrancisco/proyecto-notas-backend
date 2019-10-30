const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://nicoo:O9UuAqW29iPXWrkT@udemy-dojtx.mongodb.net/test?retryWrites=true&w=majority",{
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