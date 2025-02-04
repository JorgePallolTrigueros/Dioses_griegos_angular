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
 * Crear una nueva batalla
 *
 * body Batalla  (optional)
 * no response value expected for this operation
 **/
exports.createBatalla = function(body) {
  return new Promise(function(resolve, reject) {
    const { Nombre } = body;
    const query = 'INSERT INTO batallas (Nombre) VALUES (?)';

    connection.query(query, [Nombre], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Eliminar una batalla
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteBatalla = function(id) {
  return new Promise(function(resolve, reject) {
    const query = 'DELETE FROM batallas WHERE BatallaId = ?';

    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Obtener una batalla por ID
 *
 * id Integer 
 * returns Batalla
 **/





exports.getBatallaById = function(id) {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT b.BatallaId, b.Nombre FROM batallas b JOIN diosbatallas db ON b.BatallaId = db.BatallaId WHERE db.DiosId = ?';
    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}






/**
 * Obtener todas las batallas
 *
 * returns List
 **/
exports.getBatallas = function() {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM batallas';

    connection.query(query, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Actualizar una batalla existente
 *
 * body Batalla  (optional)
 * id Integer 
 * no response value expected for this operation
 **/
exports.updateBatalla = function(body, id) {
  return new Promise(function(resolve, reject) {
    const { Nombre } = body;
    const query = 'UPDATE batallas SET Nombre = ? WHERE BatallaId = ?';

    connection.query(query, [Nombre, id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}
