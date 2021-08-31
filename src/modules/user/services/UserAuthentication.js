const User = require('../models');
const { CustomErrors } = require('../../core/utils');
const { DEFAULT_PROJECTIONS } = require('../constanst');
const UserTokenization = require('./UserTokenization');

class UserAuthentication {
  async signIn(req, res) {
    try {
      const { body } = req;
      if (!body.identifier) {
        return res.status(400).json({ message: CustomErrors.MISSING_EMAIL_ERROR.MESSAGE });
      }
      if (!body.password) {
        return res.status(400).json();
      }
      const { identifier } = body;
      const filter = {
        $or: [
          { email: identifier },
          { username: identifier },
        ],
      };

      const user = await User.findOne(filter, DEFAULT_PROJECTIONS);
      if (!user) {
        return res.status(404).send({ message: CustomErrors.USER_NOT_FOUND_ERROR.MESSAGE });
      }
      const validPassword = await user.matchPassword(
        body.password,
        user.password,
      );
      if (!validPassword) {
        return res.status(401).send({ auth: false, token: null });
      }
      const token = UserTokenization.getToken(user);
      return res.status(200).json({ auth: true, token });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
}

// Singleton Instance
module.exports = new UserAuthentication();
