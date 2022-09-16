
/**
 * Capa route, utilizada para el mapeo de los path
 */
 const express = require('express');
 const shoesRouter = express.Router();
 
 const {
     get,
     getById,
     create,
     edit,
     editComplete,
     delet
 } = require('../../controllers/shoes/');
 
shoesRouter.get('/', get);

shoesRouter.get('/:id', getById);

shoesRouter.post('/', create);

shoesRouter.patch('/:id', edit);

shoesRouter.put('/:id', editComplete);

shoesRouter.delete('/:id', delet);

module.exports = shoesRouter;