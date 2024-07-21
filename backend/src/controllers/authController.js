const User = require('../models/User');
const jwt = require('jsonwebtoken');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.register = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await User.create({ email, password, role });
    const token = signToken(user._id);
    res.status(201).json({ 
      token, 
      user: { 
        id: user._id, 
        email: user.email, 
        role: user.role
      } 
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    console.log("user:",req.user)
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }
    const token = signToken(user._id);
    res.json({ 
      token, 
      user: { 
        id: user._id, 
        email: user.email, 
        role: user.role
      } 
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};