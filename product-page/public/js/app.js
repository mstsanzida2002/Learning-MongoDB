async function loadProducts() {
  const res = await fetch('/api/products');
  const products = await res.json();
  renderProducts(products);
}

function renderProducts(products) {
  const list = document.getElementById('product-list');
  list.innerHTML = '';

  products.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p class="price">$${product.price.toFixed(2)}</p>
      <p class="description">${product.description}</p>
    `;
    list.appendChild(card);
  });
}

const addProductForm = document.getElementById('add-product-form');

addProductForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(addProductForm);
  const product = {
    name: formData.get('name'),
    price: parseFloat(formData.get('price')),
    description: formData.get('description'),
    imageUrl: formData.get('imageUrl'),
  };

  await fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });

  addProductForm.reset();
  loadProducts();
});

loadProducts();
