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
/**
 * Crear una nueva bibliografía
 *
 * body Bibliografia  (optional)
 * no response value expected for this operation
 **/
exports.createBibliografia = function(body) {
  return new Promise(function(resolve, reject) {
    const { Referencia, DiosId } = body;
    const query = 'INSERT INTO bibliografias (Referencia, DiosId) VALUES (?, ?)';

    connection.query(query, [Referencia, DiosId], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Eliminar una bibliografía
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteBibliografia = function(id) {
  return new Promise(function(resolve, reject) {
    const query = 'DELETE FROM bibliografias WHERE DiosId = ?';

    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Obtener una bibliografía por ID
 *
 * id Integer 
 * returns Bibliografia
 **/
exports.getBibliografiaById = function(id) {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM bibliografias WHERE BibliografiaId = ?';

    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results[0]);
    });
  });
}

/**
 * Obtener una bibliografías del Dios Id
 *
 * id Integer 
 * returns Bibliografia
 **/
exports.getBibliografiasByDiosId = function(id) {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM bibliografias WHERE DiosId = ?';

    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}


/**
 * Obtener todas las bibliografías
 *
 * returns List
 **/
exports.getBibliografias = function() {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM bibliografias';

    connection.query(query, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Actualizar una bibliografía existente
 *
 * body Bibliografia  (optional)
 * id Integer 
 * no response value expected for this operation
 **/
exports.updateBibliografia = function(body, id) {
  return new Promise(function(resolve, reject) {
    const { Referencia, DiosId } = body;
    const query = 'UPDATE bibliografias SET Referencia = ?, DiosId = ? WHERE BibliografiaId = ?';

    connection.query(query, [Referencia, DiosId, id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}
