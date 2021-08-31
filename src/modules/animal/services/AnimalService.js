const { DEFAULT_PROJECTIONS } = require('../constanst');
const CustomErrors = require('../../core/utils/CustomErrors');
const { ID } = require('../../core/utils/Regex');
const Animal = require('../models');

class AnimalService {
  async create(req, res) {
    try {
      const { body } = req;
      if (!body.shop) {
        return res.status(400).json({ message: CustomErrors.MISSING_SHOP_ERROR.MESSAGE });
      }
      if (!ID.test(body.shop)) {
        return res.status(400).json({ message: `${CustomErrors.NOT_VALID_ID_ERROR.MESSAGE} for shop path` });
      }
      if (!body.breed) {
        return res.status(400).json({ message: CustomErrors.MISSING_BREED_ERROR.MESSAGE });
      }
      if (!ID.test(body.breed)) {
        return res.status(400).json({ message: `${CustomErrors.NOT_VALID_ID_ERROR.MESSAGE} for breed path` });
      }
      if (!body.price) {
        return res.status(400).json({ message: CustomErrors.MISSING_PRICE_ANIMAL_ERROR.MESSAGE });
      }
      const newAnimal = await Animal.create(body);
      const animalDb = await Animal.findOne({ _id: newAnimal._id }, DEFAULT_PROJECTIONS).lean();
      return res.status(201).json(animalDb);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async update(req, res) {
    try {
      const { entity, body: updatedData } = req;
      // ignoring internal fields
      delete updatedData._id;
      delete updatedData.quantity;
      entity.set(updatedData);
      const updated = await entity.save();
      return res.status(200).json(updated);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async updateAnimalQuantityByBreed(req, res) {
    try {
      const { entity, body: { quantity } } = req;
      if (!quantity) {
        return res.status(400).json({ message: CustomErrors.MISSING_QUANTITY_ERROR.MESSAGE });
      }
      const filter = {
        _id: entity._id,
      };
      const update = {
        $inc: {
          quantity,
        },
      };
      await Animal.updateOne(filter, update);
      const animalDb = await Animal.findOne(filter, DEFAULT_PROJECTIONS).lean();
      return res.status(200).json(animalDb);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async remove(req, res) {
    try {
      const { entity } = req;
      const removed = await entity.remove();
      return res.status(200).json(removed);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  get(req, res) {
    try {
      const { entity } = req;
      return res.status(200).json(entity);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async search(req, res) {
    try {
      const { body: { search }, body } = req;
      let query = {};
      if (body.search) {
        query = {
          $text: {
            $search: search,
            $caseSensitive: false,
            $diacriticSensitive: false,
          },
        };
      }
      const result = await Animal.find(query, DEFAULT_PROJECTIONS);
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
}

// Singleton Instance
module.exports = new AnimalService();
