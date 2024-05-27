const router = require('express').Router();
const Property = require('../models/Property');
const verify = require('../verifyToken');

// Create property
router.post('/', verify, async (req, res) => {
  const { area, bedrooms, bathrooms, nearbyAmenities } = req.body;
  
  try {
    const newProperty = new Property({
      area,
      bedrooms,
      bathrooms,
      nearbyAmenities,
      seller: req.user._id
    });

    const savedProperty = await newProperty.save();
    res.json(savedProperty);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find().populate('seller', '-password');
    res.json(properties);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get properties by seller
router.get('/seller', verify, async (req, res) => {
  try {
    const properties = await Property.find({ seller: req.user._id });
    res.json(properties);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update property
router.put('/:id', verify, async (req, res) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedProperty);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete property
router.delete('/:id', verify, async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.json({ message: 'Property deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
