const User = require('../models/user');

const getUser = (req, res) => {
  User.find({}, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  User.findByIdAndRemove(id, (err) => {
    if (err) throw err;
    res.json({
      status: 'succcess',
      id,
    });
  });
};

module.exports = { getUser, deleteUser };
