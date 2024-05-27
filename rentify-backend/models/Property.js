const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  area: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  nearbyAmenities: [{ type: String }],
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Property', propertySchema);
