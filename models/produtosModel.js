const db = require('../config/db');

const Product = {
    // Cria um novo produto
    create: (product, callback) => {
        const query = 'INSERT INTO products (name, price, description, category) VALUES (?, ?, ?, ?)';
        db.query(query, [product.name, product.price, product.description, product.category], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId); // Retorna o ID do produto recém-criado
        });
    },

    // Encontra um produto pelo ID
    findById: (id, callback) => {
        const query = 'SELECT * FROM products WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            // Retorna o primeiro resultado, que deve ser o produto com o ID fornecido
            callback(null, results[0]);
        });
    },

    // Atualiza um produto pelo ID
    update: (id, product, callback) => {
        const query = 'UPDATE products SET name = ?, price = ?, description = ?, category = ? WHERE id = ?';
        db.query(query, [product.name, product.price, product.description, product.category, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            // Retorna os resultados da atualização (pode ser útil para verificar a contagem de linhas afetadas)
            callback(null, results);
        });
    },

    // Deleta um produto pelo ID
    delete: (id, callback) => {
        const query = 'DELETE FROM products WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            // Retorna os resultados da exclusão (pode ser útil para verificar a contagem de linhas afetadas)
            callback(null, results);
        });
    },

    // Obtém todos os produtos
    getAll: (callback) => {
        const query = 'SELECT * FROM products';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            // Retorna todos os produtos encontrados
            callback(null, results);
        });
    },
};

module.exports = Product;
