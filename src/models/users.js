import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  username: String,
  password: String
});

export default mongoose.model('SomeModel', SomeModelSchema);
