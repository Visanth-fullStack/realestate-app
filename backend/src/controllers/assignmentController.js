const Property = require("../models/Property");
const User = require("../models/User");
const mongoose = require('mongoose');

exports.assignProperties = async (req, res) => {
  try {
    const { leadId, propertyIds } = req.body;

    // Verify that the user is a lead/customer
    const lead = await User.findOne({ _id: leadId, role: "customer" });
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    // Verify that all properties exist
    const properties = await Property.find({ _id: { $in: propertyIds } });
    if (properties.length !== propertyIds.length) {
      return res
        .status(400)
        .json({ message: "One or more properties not found" });
    }

    // Update the user's assignedProperties field
    await User.updateOne(
      { _id: leadId },
      { $set: { properties: propertyIds} }
    );

    res.status(200).json({ message: "Properties assigned successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
