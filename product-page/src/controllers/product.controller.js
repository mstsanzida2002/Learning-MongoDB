const sampleProducts = [
  { id: 1, name: 'Coffee Mug', price: 12.99, description: 'Ceramic mug, holds 350ml', imageUrl: 'https://placehold.co/300x200?text=Mug' },
  { id: 2, name: 'Notebook', price: 5.5, description: 'A5 dotted notebook, 120 pages', imageUrl: 'https://placehold.co/300x200?text=Notebook' },
  { id: 3, name: 'Desk Lamp', price: 24.0, description: 'Adjustable LED desk lamp', imageUrl: 'https://placehold.co/300x200?text=Lamp' },
];

export function getProducts(req, res) {
  res.json(sampleProducts);
}
