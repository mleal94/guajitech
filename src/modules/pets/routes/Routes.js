const { Router } = require('express');

const PetRouter = Router();
const { PetService } = require('../services');
const { findPet } = require('../middlewares');

const prefix = '/pets';

PetRouter.post(`${prefix}/search`, PetService.search);
PetRouter.get(`${prefix}/:id`, findPet, PetService.get);
PetRouter.patch(`${prefix}/:id`, findPet, PetService.update);
PetRouter.delete(`${prefix}/:id`, findPet, PetService.remove);

module.exports = PetRouter;
