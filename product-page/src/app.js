import express from 'express';
import productRoutes from './routes/product.routes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the product-page API');
});

app.use('/api/products', productRoutes);

app.use(errorHandler);

export default app;
