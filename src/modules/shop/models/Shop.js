const { Schema, model } = require('mongoose');

const Shop = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
});

Shop.index({ name: 'text' });

module.exports = model('Shop', Shop);
