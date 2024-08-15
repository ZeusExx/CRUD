const Product = require('../models/produtosModel');

const productController = {
    // Cria um novo produto
    createProduct: (req, res) => {
        const newProduct = {
            name: req.body.name,
            price: parseFloat(req.body.price), // Certifique-se de converter o preço para um número
            description: req.body.description,
            category: req.body.category,
        };

        Product.create(newProduct, (err, productId) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/products');
        });
    },

    // Obtém um produto pelo ID
    getProductById: (req, res) => {
        const productId = req.params.id;

        Product.findById(productId, (err, product) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.render('products/show', { product });
        });
    },

    // Obtém todos os produtos
    getAllProducts: (req, res) => {
        Product.getAll((err, products) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.render('products/index', { products });
        });
    },

    // Renderiza o formulário para criar um produto
    renderCreateForm: (req, res) => {
        res.render('products/create');
    },

    // Renderiza o formulário para editar um produto
    renderEditForm: (req, res) => {
        const productId = req.params.id;

        Product.findById(productId, (err, product) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.render('products/edit', { product });
        });
    },

    // Atualiza um produto
    updateProduct: (req, res) => {
        const productId = req.params.id;
        const updatedProduct = {
            name: req.body.name,
            price: parseFloat(req.body.price), // Certifique-se de converter o preço para um número
            description: req.body.description,
            category: req.body.category,
        };

        Product.update(productId, updatedProduct, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/products');
        });
    },

    // Deleta um produto
    deleteProduct: (req, res) => {
        const productId = req.params.id;

        Product.delete(productId, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/products');
        });
    },
};

module.exports = productController;
