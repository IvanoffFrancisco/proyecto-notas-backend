const UsuarioMethods={}

const Usuario=require('../models/Usuario');
const jwt=require('jsonwebtoken');


UsuarioMethods.login=async(req,res)=>{
    const {email,password}=req.body;
    const user=await Usuario.findOne({email:email});
    if(!user){
        res.status(400).json({"advertencia":"email y/o password incorrectos"});
    }
    const verificar=await user.comparePassword(password);

    if(!verificar){

        res.status(400).json({"advertencia":"email y/o password incorrectos"});
    }else{
        const token=await jwt.sign({id:user._id},"mysecret");
        res.json({"token":token,user:user.user,id:user._id});
    }
    
};

UsuarioMethods.registro=async(req,res)=>{
    const {user,email,password}=req.body;

        const usuario=new Usuario({
            user:user,
            email:email,
            password:password
        })
        usuario.password=await usuario.encryptPassword(password);
        await usuario.save();
        res.send("usuario guardado");
};

module.exports=UsuarioMethods;