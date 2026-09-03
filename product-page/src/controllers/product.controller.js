import Product from '../models/product.model.js';

export async function getProducts(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function createProduct(req, res) {
  try {
    const { name, price, description, imageUrl } = req.body;
    const product = await Product.create({ name, price, description, imageUrl });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
