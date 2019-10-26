require('dotenv').config();
const cross=require('cross');
const app=require('./app');
require('./database');

function main(){
    app.listen(4000,()=>{
        console.log("server en "+4000);
        
    })
}
main();