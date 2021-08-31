const Animal = require('../models');
const { CustomErrors, Regex: { ID } } = require('../../core/utils');
const { DEFAULT_PROJECTIONS } = require('../constanst');

const findAnimal = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    if (!ID.test(id)) {
      return res.status(400).json({ message: CustomErrors.NOT_VALID_ID_ERROR.MESSAGE });
    }
    const animal = await Animal.findOne({ _id: id }, DEFAULT_PROJECTIONS);
    if (!animal) {
      return res.status(404).json({ message: CustomErrors.ANIMAL_NOT_FOUND_ERROR.MESSAGE });
    }
    req.entity = animal;
    return next();
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  findAnimal,
};
