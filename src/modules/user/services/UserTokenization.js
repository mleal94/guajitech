const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../../../config/.env' });

class UserTokenization {
  getToken(user, res) {
    try {
      return jwt.sign(user.toObject(), process.env.GUAJITECH_APP_SECRET, {
        expiresIn: 60 * 60 * 24,
      });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
}

// Singleton Instance
module.exports = new UserTokenization();
