const { Router } = require('express');

const BreedRouter = Router();
const { BreedService } = require('../services');
const { findBreed } = require('../middlewares');

const prefix = '/breeds';

BreedRouter.post(prefix, BreedService.create);
BreedRouter.post(`${prefix}/search`, BreedService.search);
BreedRouter.get(`${prefix}/:id`, findBreed, BreedService.get);
BreedRouter.patch(`${prefix}/:id`, findBreed, BreedService.update);
BreedRouter.delete(`${prefix}/:id`, findBreed, BreedService.remove);

module.exports = BreedRouter;
