const {Schema,model}=require('mongoose');
const bcrypt=require('bcryptjs');
const SchemaUsuario=new Schema({
        user:{
            type:String,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:String,
        notas:[{
            titulo:String,
            descripcion:String,
            fecha:{type:Date,default:Date.now}
        }]
})

SchemaUsuario.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

SchemaUsuario.methods.comparePassword = function (password) {
    return bcrypt.compare(password,this.password);
};


module.exports=model("usuario",SchemaUsuario);
