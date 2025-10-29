const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/watchProductController');

const { protect, admin } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

// Public route: Get all products
router.get('/', getAllProducts);

// Admin-only routes: Create, Update, Delete
// upload.array('images', 5) allows up to 5 images per product
router.post('/', protect, admin, upload.array('images', 5), createProduct);
router.get('/:id', protect, admin, getProductById);
router.put('/update/:id', protect, admin, upload.array('images', 5), updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

module.exports = router;
