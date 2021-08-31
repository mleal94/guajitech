const { Router } = require('express');

const AnimalRouter = Router();
const { AnimalService } = require('../services');
const { findAnimal } = require('../middlewares');

const prefix = '/animals';

AnimalRouter.post(`${prefix}`, AnimalService.create);
AnimalRouter.post(`${prefix}/:id/update-quantity`, findAnimal, AnimalService.updateAnimalQuantityByBreed);
AnimalRouter.post(`${prefix}/search`, AnimalService.search);
AnimalRouter.get(`${prefix}/:id`, findAnimal, AnimalService.get);
AnimalRouter.patch(`${prefix}/:id`, findAnimal, AnimalService.update);
AnimalRouter.delete(`${prefix}/:id`, findAnimal, AnimalService.remove);

module.exports = AnimalRouter;
