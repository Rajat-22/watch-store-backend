const WatchProduct = require('../models/WatchProduct');

// GET all products (public)
exports.getAllProducts = async (req, res) => {
  try {
    const products = await WatchProduct.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE new product (admin)
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, salePrice, tags, isBestSeller, category } = req.body;
    console.log('req.file:', req.file);

    let image = '';
    if (req.file) {
      image = req.file.path; // If using multer.single()
    } 
    else if (req.files && req.files.length > 0) {
      image = req.files[0].path; // If still using .array()
    }

    const product = await WatchProduct.create({
      name,
      description,
      price,
      salePrice,
     tags: Array.isArray(tags)
        ? tags
        : typeof tags === 'string'
        ? tags.split(',').map(t => t.trim())
        : [],
      isBestSeller: isBestSeller || false,
      category,
      image,
    });

    res.status(201).json(product);
  } catch (error) {
    console.error("❌ Error creating product:", error);
    res.status(500).json({ message: error.message });
  }
};

// GETPRODUCT by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await WatchProduct.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// UPDATE product (admin)
exports.updateProduct = async (req, res) => {
  try {
    const product = await WatchProduct.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const { name, description, price, salePrice, tags, isBestSeller, category } = req.body;

    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;
    if (salePrice) product.salePrice = salePrice;
    if (isBestSeller !== undefined) product.isBestSeller = isBestSeller;
    if (category) product.category = category;

    if (tags) {
      product.tags = Array.isArray(tags)
        ? tags
        : typeof tags === 'string'
        ? tags.split(',').map(t => t.trim())
        : [];
    }

    if (req.file) {
      product.image = req.file.path; // multer.single('image')
    } else if (req.files && req.files.length > 0) {
      product.image = req.files[0].path;
    }

    await product.save();
    res.json(product);
  } catch (error) {
    console.error('❌ Error updating product:', error);
    res.status(500).json({ message: error.message });
  }
};

// DELETE product (admin)
exports.deleteProduct = async (req, res) => {
  try {
    const product = await WatchProduct.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await WatchProduct.deleteOne({ _id: req.params.id });
    res.json({ message: 'Product removed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
