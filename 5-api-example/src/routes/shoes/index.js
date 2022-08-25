
/**
 * Capa route, utilizada para el mapeo de los path
 */
const express = require('express');
const shoesRouter = express.Router();
const ShoesServices = require('../../services/shoes/');

const shoeService = new ShoesServices();

// http://localhost:3000/shoes/
// Query Params: Filtrar información
// http://localhost:3000/shoes/?page=1&pageSize=10&brand=%22noke%22
// %20 => espacio en blanco
// %22 => comillas dobles
shoesRouter.get('/', async (req, res) => {
    // 6.1.1: Leer la request
    const { price } = req.query;
    try {
        // 6.1.2: Acceder a la capa service para tener una respuesta
        const shoes = await shoeService.findAll(price);
        res.status(200).json(shoes);
    } catch(error) {
        // 6.1.3: Si hay un error al acceder al services respondemos un error generico
        res.status(404).json( { message: 'no hay datos'} );
    }
    
});

// Request Param: Son utilizados para ejecutar operaciones sobre un elemento especifico
// http://localhost:3000/shoes/999
shoesRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const foundedShoe = await shoeService.findOne(id);
        res.status(200).send( { message: 'encontrado!', foundedShoe } );
    } catch {
        res.status(404).send({ message: 'ese id no existe' } );
    }
});

// http://localhost:3000/shoes/
// { id: 4, brand: 'pima', price: 600, size: 26 }
shoesRouter.post('/', async (req, res) => {
    // 6.1.1: Leer la request
    const newShoe = req.body;
    try {
        // 6.1.2: Acceder a la capa service para tener una respuesta
        await shoeService.create(newShoe);
        res.status(201).send();
    } catch(error) {
        // 6.1.3: Si hay un error al acceder al services respondemos un error generico
        res.status(500).send( { message: 'intenten más tarde' } );
    }
});

// PARTIAL EDITION: PATCH
shoesRouter.patch('/:id', async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    console.log('route', id)
    try {
        await shoeService.editPartial(id, body);
        res.status(200).send( { message: 'modificacion patch exitosa!', id } );
    } catch {
        res.status(404).send({ message: 'ese id no existe' } );
    }
});

// COMPLETE EDITION: PUT
shoesRouter.put('/:id', async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    try {
        await shoeService.editComplete(id, body);
        res.status(200).send( { message: 'modificacion put exitosa!', id } );
    } catch {
        res.status(404).send({ message: 'ese id no existe' } );
    }
});

// DELETE: DELETE
shoesRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await shoeService.delete(id);
        res.status(200).send( { message: 'eliminacion exitosa!' } );
    } catch {
        res.status(404).send({ message: 'ese id no existe' } );
    }
});

module.exports = shoesRouter;