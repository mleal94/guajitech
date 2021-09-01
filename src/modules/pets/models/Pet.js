const { Schema, model } = require('mongoose');

const Pet = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  breed: {
    type: Schema.Types.ObjectId,
    ref: 'Breed',
    required: true,
  },
  animal: {
    type: Schema.Types.ObjectId,
    ref: 'Animal',
    required: true,
  },
});

Pet.index({ name: 'text' });

module.exports = model('Pet', Pet);
