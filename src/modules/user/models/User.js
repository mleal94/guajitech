const { Schema, model } = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const bcrypt = require('bcrypt');
const { Regex: { NAME } } = require('../../core/utils');

const User = new Schema({
  name: {
    type: String,
    required: true,
    match: NAME,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  email: {
    type: String,
    validate: {
      validator(value) {
        if (value !== null) return isEmail(value);
        return true;
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
    required: true,
    unique: true,
  },
});

User.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

User.methods.matchPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

User.index({ name: 'text', email: 'text' });

module.exports = model('User', User);
