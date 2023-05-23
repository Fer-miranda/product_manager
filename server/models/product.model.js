const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Debe ingresar un título del producto.'],
        minlength: [3, 'Un producto debe tener al menos 3 caracteres']
    }, 

    price: {
        type: Number,
        required: [true, 'Debe ingresar el precio del producto'],
    },

    description: {
        type: String,
        required: [true, 'Debe ingresar una descripción del producto.'],
        maxlength: [100, 'La descripción debe tener menos de 100 caracteres']
    },
}, { timestamps: true });

const Product = model('Product', ProductSchema);

module.exports = Product;
