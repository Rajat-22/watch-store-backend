const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define schema for users
const watchUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    role: {
      type: String,
      enum: ['admin', 'customer'],
      default: 'customer'
    }
  },
  { timestamps: true }
);

// Hash password before saving
watchUserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Skip if not changed
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare entered password with hashed password
watchUserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const WatchUser = mongoose.model('WatchUser', watchUserSchema);
module.exports = WatchUser;
