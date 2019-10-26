const express=require('express');
const app=express();

//middleware
app.use(express.json());


app.use(require('./routers/RouterUsuario'));
app.use(require('./routers/RouterNotas'));
module.exports=app;