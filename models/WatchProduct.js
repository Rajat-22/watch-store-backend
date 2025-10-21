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
  bestseller: {
    type: Boolean,
    default: false,
  },
  categories: [String], // array of categories like ['digital', 'analog']
  images: [String], // array of image URLs (Cloudinary)
}, { timestamps: true });

module.exports = mongoose.model('WatchProduct', watchProductSchema);
