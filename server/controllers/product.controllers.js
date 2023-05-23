const Product = require('../models/product.model');

module.exports.getAllProducts = async (req, res) => {
    try {
        const productList = await Product.find();
        res.json({ products: productList });
    } catch (error) {
        res.status(500).json({
            message: 'No hemos podido enviar la lista de productos',
            error,
        });
    }
};

module.exports.createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.json({ product: newProduct });
    } catch (error) {
        res.status(500).json({
            message: 'No hemos podido crear un nuev producto',
            error,
        });
    }
}

module.exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ product: updatedProduct });
    } catch (error) {
        res.status(500).json({
            message: 'No hemos podido actualizar el producto',
            error,
        });
    }
}

module.exports.deleteProduct = async (req, res) => {
    try {
        const response = await Product.deleteOne({ _id: req.params.id });
        res.json({ response });
    } catch (error) {
        res.status(500).json({
            message: 'No hemos podido eliminar el producto',
            error,
        });
    }
}

module.exports.getOneProduct = async (req, res) => {
    try {
        const oneProduct = await Product.findById(req.params.id)
        res.json({ product: oneProduct });
    } catch (error) {
        res.status(500).json({
            message: 'No hemos podido encontrar el producto',
            error,
        });
    }
}
