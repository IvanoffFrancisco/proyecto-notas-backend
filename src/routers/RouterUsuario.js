const {Router}=require('express');
const router=Router();

const {login,registro}=require('../controllers/UsuarioController');

router.post("/registro",registro);

router.post("/login",login);

module.exports=router;
