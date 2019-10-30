const mongoose=require('mongoose');


mongoose.connect("mongodb+srv://nicolas:nehcmfKuG1Ojjwmm@udemy-dojtx.mongodb.net/notas?retryWrites=true&w=majority",{
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