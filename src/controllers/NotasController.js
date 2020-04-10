const NotasController={}

const Usuario=require('../models/Usuario');
const jwt=require('jsonwebtoken');

//getnotas
NotasController.getNotas=async(req,res)=>{
    const token=req.headers['access-token'];
    if(!token){
        res.json({error:"no access-token"})
    }
   const validate=await jwt.verify(token,"mysecret")
    const user=await Usuario.findOne({_id:validate.id});
    if(!user){
        res.json({error:"no access-token"})
    }else{
        res.json(user.notas);
    }
}

//buscarNotas
NotasController.buscarNotas=async(req,res)=>{
    const token=req.headers['access-token'];
    if(!token){
        res.json({error:"no access-token"})
    }
   const validate=await jwt.verify(token,"mysecret")
   if(!validate){
    res.json({error:"no access-token"})
    }
    const user=await Usuario.findOne({_id:validate.id});
    if(!user){
        res.json({error:"no access-token"})
    }else{
        const notas=user.notas;
        const datos=notas.find(prueba=>prueba.titulo==req.body.titulo);
        if(!datos){
            res.status(400).json({error:"no se encontro la nota"});
        }else{
            res.json(datos);
        }
    }
}

//agregarNotas
NotasController.postNotas=async (req,res)=>{
    const token=req.headers['access-token'];
    if(!token){
        res.json({error:"no access-token"})
    }
   const validate=await jwt.verify(token,"mysecret")
    const user=await Usuario.findOne({_id:validate.id});
    if(!user){
        res.json({error:"no access-token"})
    }else{
       await Usuario.updateOne({_id:validate.id},
        {$push:{
                notas:
                    {titulo:req.body.titulo,descripcion:req.body.descripcion,fecha:req.body.fecha}
                }
        }
        
                    )
    }
    res.send("se agrego la nota");
}

//modificarNotas
NotasController.modificaNotas=async(req,res)=>{
    const token=req.headers['access-token'];
    if(!token){
        res.json({error:"no access-token"})
    }
   const validate=await jwt.verify(token,"mysecret");
   
    const user=await Usuario.findOne({_id:validate.id});
    if(!user){
        res.json({error:"no access-token"})
    }else{
        Usuario.update({_id:validate.id, 'notas._id':req.body.id},
        {$set:{'notas.$.titulo':req.body.titulo,'notas.$.descripcion':req.body.descripcion,'notas.$.fecha':req.body.fecha}}, function (error, result) {
            console.log(result);
        }
        );
        res.send(" se modifico la nota");
    }
}

//eliminarNota

NotasController.eliminarNota=async(req,res)=>{
    const token=req.headers['access-token'];
        if(!token){
            res.json({error:"no access-token"})
        }
       const validate=await jwt.verify(token,"mysecret")
        const user=await Usuario.findOne({_id:validate.id});
        if(!user){
            res.json({error:"no access-token"})
        }else{
            Usuario.update({
                'notas._id': req.body.id
              }, {
                $pull: { notas: { _id: req.body.id } }
              }, function (error, result) {
                  console.log(result);
              });

            res.send("se elimino la nota");
        }
}

module.exports=NotasController;