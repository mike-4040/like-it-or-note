const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Types = Schema.Types;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
    // required: true
  },
  providers: [
    {
      providerName: String,
      providerId: String
    }
  ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
