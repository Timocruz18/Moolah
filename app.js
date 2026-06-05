const container = document.getElementById('product-container');

// Load product from config
const product = MoolahConfig.activeProducts[0];

container.innerHTML = `
    <div class="product-card">
        <h3>${product.name}</h3>
        <p>Investment: ₦${product.price.toLocaleString()}</p>
        <p>Total Return: ₦${product.totalReturn.toLocaleString()}</p>
        <button class="btn" onclick="alert('Proceeding to payment...')">Invest Now</button>
    </div>
`;

