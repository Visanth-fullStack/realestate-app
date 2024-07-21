const User = require('../models/User');

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({email:user.email,role:user.role});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const userSet = await User.find({role:req.params.id});
    res.status(200).json(userSet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { email, role } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { email, role },
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
 await User.findByIdAndDelete(req.params.id);
    res.status(204).json(null);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};