const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  community: { type: String, enum: ['CommunityA', 'CommunityB'], required: true },
  building: { type: String, enum: ['BuildingA', 'BuildingB'], required: true },
  unitNo: { type: String, required: true },
});

propertySchema.index({ community: 1, building: 1, unitNo: 1 }, { unique: true });

module.exports = mongoose.model('Property', propertySchema);