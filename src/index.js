require('dotenv').config();
const app=require('./app');
const cors=require('cors');
require('./database');

function main(){
    app.listen(4000,()=>{
        console.log("server en "+4000);
        
    })
}
main();