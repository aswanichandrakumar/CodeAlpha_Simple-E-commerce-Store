async function fetchProducts() {
    const response = await fetch('http://localhost:5000/products');
    const products = await response.json();

    document.getElementById('products').innerHTML = products.map(p =>
        `<div class="product">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>$${p.price}</p>
        </div>`
    ).join('');
}

fetchProducts();
