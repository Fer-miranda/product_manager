const { getAllProducts, createProduct, updateProduct, deleteProduct, getOneProduct } = require("../controllers/product.controllers");


module.exports = (app) => {
    app.get('/api/product', getAllProducts);
    app.get('/api/product/:id', getOneProduct);
    app.post('/api/product', createProduct);
    app.put('/api/product/:id', updateProduct);
    app.delete('/api/product/:id', deleteProduct);
}
