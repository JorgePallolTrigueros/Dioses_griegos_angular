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
 * Eliminar un mito
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteMito = function(id) {
  return new Promise(function(resolve, reject) {
    const query = 'DELETE FROM mito WHERE Id = ?';

    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Obtener un mito por ID
 *
 * id Integer 
 * returns Mito
 **/
exports.getMitoById = function(id) {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM mito WHERE Id = ?';

    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results[0]);
    });
  });
}

/**
 * Obtener mitos por Dios ID
 *
 * diosId Integer 
 * returns Mitos
 **/
exports.getMitosByDiosId = function(diosId) {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM mito WHERE DiosId = ?';

    connection.query(query, [diosId], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Obtener todos los mitos
 *
 * returns List
 **/
exports.getMitos = function() {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM mito';

    connection.query(query, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Crear un nuevo mito
 *
 * body Mito  (optional)
 * no response value expected for this operation
 **/
exports.createMito = function(body) {
  return new Promise(function(resolve, reject) {
    const { historia, diosId } = body;
    const query = 'INSERT INTO mito (Historia, DiosId) VALUES (?, ?)';

    connection.query(query, [historia, diosId], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}


/**
 * Actualizar un mito existente
 *
 * body Mito  (optional)
 * id Integer 
 * no response value expected for this operation
 **/
exports.updateMito = function(body, id) {
  return new Promise(function(resolve, reject) {
    const { Historia, DiosId } = body;
    const query = 'UPDATE mito SET Historia = ?, DiosId = ? WHERE Id = ?';

    connection.query(query, [Historia, DiosId, id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}
