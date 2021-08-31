const { Schema, model } = require('mongoose');

const Animal = new Schema({
  shop: {
    type: Schema.Types.ObjectId,
    ref: 'Shop',
    required: true,
  },
  breed: {
    type: Schema.Types.ObjectId,
    ref: 'Breed',
    required: true,
  },
  price: {
    type: Number,
    // eslint-disable-next-line radix
    set: (v) => parseFloat(v),
    validate: {
      validator: (v) => v >= 0,
      message: () => 'The number must be a number greater than zero',
    },
    required: true,
  },
  quantity: {
    type: Number,
    // eslint-disable-next-line radix
    set: (v) => parseInt(v),
    validate: {
      validator: (v) => v >= 0,
      message: () => 'The quantity must be a number greater than zero',
    },
    required: true,
    default: 0,
  },
});

module.exports = model('Animal', Animal);
