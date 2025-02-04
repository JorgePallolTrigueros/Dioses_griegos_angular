const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kojinanjo1@',
  database: 'diosesgriegos'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.message);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Crear una categoría
const createCategoria = (categoria) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO categorias (nombre) VALUES (?)';
        connection.query(query, [categoria.nombre], (err, results) => {
            if (err) reject(err);
            resolve({ id: results.insertId, ...categoria });
        });
    });
};

// Obtener todas las categorías
const getCategorias = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM categorias', (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

// Obtener una categoría por ID
const getCategoriaById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM categorias WHERE id = ?', [id], (err, results) => {
            if (err) reject(err);
            resolve(results[0]); // Retorna el primer resultado
        });
    });
};

// Actualizar una categoría
const updateCategoria = (id, categoria) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE categorias SET nombre = ? WHERE id = ?';
        connection.query(query, [categoria.nombre, id], (err, results) => {
            if (err) reject(err);
            resolve({ id, ...categoria });
        });
    });
};

// Eliminar una categoría
const deleteCategoria = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM categorias WHERE id = ?', [id], (err, results) => {
            if (err) reject(err);
            resolve(results.affectedRows > 0); // Devuelve true si la categoría fue eliminada
        });
    });
};

module.exports = {
    createCategoria,
    getCategorias,
    getCategoriaById,
    updateCategoria,
    deleteCategoria
};
