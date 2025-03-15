const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Sample product list
const products = [
    { id: 1, name: "Laptop", price: 800, image: "images/laptop.jpg" },
    { id: 2, name: "Smartphone", price: 600, image: "images/phone.jpg" },
    { id: 3, name: "Headphones", price: 150, image: "images/headphones.jpg" },
    { id: 4, name: "Smartwatch", price: 200, image: "images/smartwatch.jpg" },
    { id: 5, name: "Gaming Mouse", price: 50, image: "images/mouse.jpg" },
    { id: 6, name: "Wireless Keyboard", price: 70, image: "images/keyboard.jpg" },
    { id: 7, name: "Backpack", price: 40, image: "images/backpack.jpg" },
    { id: 8, name: "Sneakers", price: 120, image: "images/sneakers.jpg" },
    { id: 9, name: "T-shirt", price: 30, image: "images/tshirt.jpg" },
    { id: 10, name: "Sunglasses", price: 80, image: "images/sunglasses.jpg" }
];

// API endpoint to get all products
app.get('/products', (req, res) => {
    res.json(products);
});

// Start server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
