const { Schema, model } = require('mongoose');

const Pet = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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
