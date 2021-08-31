const { Schema, model } = require('mongoose');
const { Regex: { NAME } } = require('../../core/utils');

const Breed = new Schema({
  name: {
    type: String,
    required: true,
    match: NAME,
    trim: true,
    unique: true,
  },
});

Breed.index({ name: 'text' });

module.exports = model('Breed', Breed);
