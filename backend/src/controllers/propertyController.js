const Property = require('../models/Property');
const User = require('../models/User');

exports.getAllProperties = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).populate('properties');

    let properties;
    if (user.role === 'admin') {
        properties = await Property.find();
    } else if (user.role === 'customer') {
        properties = await Property.find({ _id: { $in: user.properties } });
    } else {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    res.json({
        properties,
        email: user.email,
        role: user.role
    });
} catch (error) {
    res.status(500).json({ message: 'Server error', error });
}
};

exports.createProperty = async (req, res) => {
  try {
    const { community, building, unitNo} = req.body;
    const property = await Property.create({ community, building, unitNo});
    // await User.findByIdAndUpdate(ownerId, { $push: { properties: property._id } });
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateProperty = async (req, res) => {
  try {
    const { community, building, unitNo } = req.body;
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      { community, building, unitNo },
      { new: true, runValidators: true }
    );
    if (!property) return res.status(404).json({ message: 'Property not found' });
    res.json(property);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ message: 'Property not found' });
    
    await User.updateMany(
      { properties: req.params.id },
      { $pull: { properties: req.params.id } }
  );    await Property.findByIdAndDelete(req.params.id);
    
    res.status(204).json(null);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    } else {
      res.status(200).json(property);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

