const express = require('express');
const router = express.Router();
let Meal = require('../models/meal.model');

// GET all meals
router.get('/buy', async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create a meal
router.post('/', async (req, res) => {
  const meal = new Meal({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  });

  try {
    const newMeal = await meal.save();
    res.status(201).json(newMeal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;