const mongoose = require('mongoose');

const Schema = mongoose.Schema

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;
