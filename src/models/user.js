const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
  email: String,
  username: String,
  password: String,
  name: String,
  lastname: String,
  token: String
});

module.exports = mongoose.model('users', UserModelSchema);
