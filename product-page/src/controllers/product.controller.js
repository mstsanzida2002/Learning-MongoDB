import Product from '../models/product.model.js';

export async function getProducts(req, res, next) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    next(err);
  }
}

export async function createProduct(req, res, next) {
  try {
    const { name, price, description, imageUrl } = req.body;
    const product = await Product.create({ name, price, description, imageUrl });
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
}

export async function deleteProduct(req, res, next) {
  try {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted' });
  } catch (err) {
    next(err);
  }
}
