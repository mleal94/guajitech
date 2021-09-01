require('dotenv').config({ path: '../../../config/.env' });
const jwt = require('jsonwebtoken');
const CustomErrors = require('./CustomErrors');

const verifyToken = async (req, res, next) => {
  const token = req.headers['pets-shop-access'];
  if (!token) res.status(401).json({ message: CustomErrors.MISSING_TOKEN_ERROR.MESSAGE });
  else {
    try {
      const user = await jwt.verify(token, process.env.GUAJITECH_APP_SECRET);
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: CustomErrors.MISSING_TOKEN_ERROR });
    }
  }
};

module.exports = {
  verifyToken,
};
