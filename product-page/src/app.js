import express from 'express';
import productRoutes from './routes/product.routes.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the product-page API');
});

app.use('/api/products', productRoutes);

export default app;
