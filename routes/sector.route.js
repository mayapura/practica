const sectorCrtl = require('./../controllers/sector.controller')
const express = require('express');
const router = express.Router();


//definimos las rutas para la gestion de agente
router.get('/', sectorCrtl.getSectores);
router.post('/', sectorCrtl.createSector);
/* router.get('/:id', sectorCrtl.getAgente);
router.put('/:id', sectorCrtl.editAgente);
router.delete('/:id', sectorCrtl.deleteAgente); */

//exportamos el modulo de rutas
module.exports = router;