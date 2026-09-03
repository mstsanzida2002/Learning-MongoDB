import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the product-page API');
});

export default app;
