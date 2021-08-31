const User = require('../models');
const { CustomErrors } = require('../../core/utils');
const { DEFAULT_PROJECTIONS } = require('../constanst');

class UserRegistration {
  async singUp(req, res) {
    try {
      const { body } = req;
      if (!body.name) {
        return res.status(400).json({ message: CustomErrors.MISSING_NAME_ERROR.MESSAGE });
      }
      if (!body.email) {
        return res.status(400).json({ message: CustomErrors.MISSING_EMAIL_ERROR.MESSAGE });
      }
      if (!body.avatar) {
        return res.status(400).json({ message: CustomErrors.MISSING_AVATAR_ERROR.MESSAGE });
      }
      if (!body.password) {
        return res.status(400).json({ message: CustomErrors.MISSING_PASSWORD_ERROR.MESSAGE });
      }
      if (body.password.length < 4) {
        return res.status(400).json({ message: CustomErrors.PASSWORD_LENGTH_ERROR.MESSAGE });
      }
      if (body.password !== body.confirmPassword) {
        return res.status(400).json({ message: CustomErrors.NOT_EQUALS_PASSWORD_ERROR.MESSAGE });
      }
      const exist = await User.findOne({ email: body.email });
      if (exist) {
        return res.status(400).json({ message: CustomErrors.EXIST_EMAIL_ERROR.MESSAGE });
      }
      // eslint-disable-next-line prefer-destructuring
      body.username = body.email.split('@')[0];

      const user = new User({
        username: body.username,
        name: body.name,
        email: body.email,
        avatar: body.avatar,
      });
      user.password = await user.encryptPassword(body.password);
      const newUser = await user.save();
      if (!newUser) {
        return res.status(400).json({ message: CustomErrors.USER_CREATION_ERROR.MESSAGE });
      }
      const userDb = await User.findOne({ _id: newUser._id }, DEFAULT_PROJECTIONS).lean();
      return res.status(201).json(userDb);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
}

// Singleton Instance
module.exports = new UserRegistration();
