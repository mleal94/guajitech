const { Router } = require('express');
const { VerifyToken: { verifyToken } } = require('../../core/utils');

const ShopRouter = Router();
const { ShopService } = require('../services');
const { findShop, animalInfoValidation, checkAnimalStock } = require('../middlewares');

const prefix = '/shops';

ShopRouter.post(prefix, ShopService.create);
ShopRouter.post(`${prefix}/buy-animal`, [verifyToken, animalInfoValidation, checkAnimalStock],
  ShopService.buyAnimal);
ShopRouter.post(`${prefix}/search`, ShopService.search);
ShopRouter.get(`${prefix}/:id`, findShop, ShopService.get);
ShopRouter.patch(`${prefix}/:id`, findShop, ShopService.update);
ShopRouter.delete(`${prefix}/:id`, findShop, ShopService.remove);

module.exports = ShopRouter;
