const User = require('../models');
const { CustomErrors, Regex: { ID } } = require('../../core/utils');
const { DEFAULT_PROJECTIONS } = require('../constanst');

const findUser = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    if (!ID.test(id)) {
      return res.status(400).json({ message: CustomErrors.NOT_VALID_ID_ERROR.MESSAGE });
    }
    const user = await User.findOne({ _id: id }, DEFAULT_PROJECTIONS);
    if (!user) {
      return res.status(404).json({ message: CustomErrors.USER_NOT_FOUND_ERROR.MESSAGE });
    }
    req.entity = user;
    return next();
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  findUser,
};
