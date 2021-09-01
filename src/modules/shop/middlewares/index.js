const Shop = require('../models');
const Animal = require('../../animal/models');
const { CustomErrors, Regex: { ID } } = require('../../core/utils');
const { DEFAULT_PROJECTIONS, NON_STOCK } = require('../constanst');

const findShop = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    if (!ID.test(id)) {
      return res.status(400).json({ message: CustomErrors.NOT_VALID_ID_ERROR.MESSAGE });
    }
    const shop = await Shop.findOne({ _id: id }, DEFAULT_PROJECTIONS);
    if (!shop) {
      return res.status(404).json({ message: CustomErrors.SHOP_NOT_FOUND_ERROR.MESSAGE });
    }
    req.entity = shop;
    return next();
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const animalInfoValidation = (req, res, next) => {
  try {
    const { body } = req;
    if (!body.animal) {
      return res.status(400).json({ message: CustomErrors.MISSING_ANIMAL_TO_BUY.MESSAGE });
    }
    if (!ID.test(body.animal)) {
      return res.status(400).json({ message: `${CustomErrors.NOT_VALID_ID_ERROR.MESSAGE} for path animal` });
    }
    if (!body.name) {
      return res.status(400).json({ message: CustomErrors.MISSING_PET_NAME_TO_BUY.MESSAGE });
    }
    return next();
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const checkAnimalStock = async (req, res, next) => {
  try {
    const { body } = req;
    const filter = {
      _id: body.animal,
    };
    const exist = await Animal.findOne(filter);
    if (!exist) {
      return res.status(400).json({ message: CustomErrors.ANIMAL_NOT_FOUND_ERROR.MESSAGE });
    }
    const { quantity } = exist;
    if (quantity === NON_STOCK) {
      return res.status(400).json({ message: CustomErrors.ANIMAL_NON_STOCK_ERROR.MESSAGE });
    }
    req.animal = exist;
    return next();
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  findShop,
  animalInfoValidation,
  checkAnimalStock,
};
