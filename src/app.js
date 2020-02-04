const express=require('express');
const app=express();

//config
app.set("PORT",process.env.PORT || 4000);

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept,access-token ,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//middleware
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));


app.use(require('./routers/RouterUsuario'));
app.use(require('./routers/RouterNotas'));
module.exports=app;