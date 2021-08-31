const { DEFAULT_PROJECTIONS } = require('../constanst');
const CustomErrors = require('../../core/utils/CustomErrors');
const Shop = require('../models');

class ShopService {
  async create(req, res) {
    try {
      const { body } = req;
      if (!body.name) {
        return res.status(400).json({ message: CustomErrors.MISSING_SHOP_NAME_ERROR.MESSAGE });
      }
      const exist = await Shop.findOne({ name: body.name });
      if (exist) {
        return res.status(400).json({ message: CustomErrors.SHOP_DUPLICATION_ERROR.MESSAGE });
      }
      const newShop = await Shop.create(body);
      const shopDb = await Shop.findOne({ _id: newShop._id }, DEFAULT_PROJECTIONS).lean();
      return res.status(201).json(shopDb);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async update(req, res) {
    try {
      const { entity, body: updatedData } = req;
      // ignoring internal fields
      delete updatedData._id;
      entity.set(updatedData);
      const updated = await entity.save();
      return res.status(200).json(updated);
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
      const result = await Shop.find(query, DEFAULT_PROJECTIONS);
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
}

// Singleton Instance
module.exports = new ShopService();
