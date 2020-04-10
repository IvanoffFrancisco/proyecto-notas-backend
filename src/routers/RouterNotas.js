const {Router}=require('express');
const router=Router();

const {getNotas,buscarNotas,eliminarNota,modificaNotas,postNotas}=require('../controllers/NotasController');

//obtener todas las notas
router.get("/notas",getNotas);

    //buscar nota
router.post("/buscar-nota",buscarNotas);

    //agregar nota
router.post("/nueva-nota",postNotas);

    //modificar nota
router.post("/modificar-nota",modificaNotas);

//eliminar nota
router.post("/eliminar-nota",eliminarNota);

module.exports=router