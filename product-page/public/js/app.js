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

loadProducts();
