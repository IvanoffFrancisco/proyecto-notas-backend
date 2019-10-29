const {Schema,model}=require('mongoose');
const bcrypt=require('bcryptjs');
const SchemaUsuario=new Schema({
        user:{
            type:String
        },
        email:{
            type:String,
            required:true
        },
        password:String,
        notas:[{
            titulo:String,
            descripcion:String,
            fecha:String
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
