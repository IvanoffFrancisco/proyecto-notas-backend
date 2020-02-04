require('dotenv').config();
const app=require('./app');
require('./database');

function main(){
    app.listen(app.get("PORT"),()=>{
        console.log("server en ",app.get("PORT"));
        
    })
}
main();