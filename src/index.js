require('dotenv').config();
const app=require('./app');
require('./database');

function main(){
    app.listen(app.get("port"),()=>{
        console.log("server en ",app.get("port"));
        
    })
}
main();