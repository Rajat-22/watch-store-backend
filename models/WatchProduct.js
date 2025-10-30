const mongoose = require('mongoose');

const watchProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  salePrice: Number, // discounted price if any
  tags: [String], // array of tags like ['men', 'luxury']
  isBestSeller: {
    type: Boolean,
    default: false,
  },
  // ✅ Single category (string)
    category: {
      type: String,
      required: true,
    },

    // ✅ Single image (string URL)
    image: {
      type: String,
      required: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('WatchProduct', watchProductSchema);
