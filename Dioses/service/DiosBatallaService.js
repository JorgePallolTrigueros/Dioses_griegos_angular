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
 * Crear una nueva relación Dios-Batalla
 *
 * body DiosBatalla  (optional)
 * no response value expected for this operation
 **/
exports.createDiosBatalla = function(body) {
  return new Promise(function(resolve, reject) {
    const { DiosId, BatallaId, FechaParticipacion } = body;
    const query = 'INSERT INTO diosbatallas (DiosId, BatallaId, FechaParticipacion) VALUES (?, ?, ?)';

    connection.query(query, [DiosId, BatallaId, FechaParticipacion], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Eliminar una relación Dios-Batalla
 *
 * diosId Integer 
 * batallaId Integer 
 * no response value expected for this operation
 **/
exports.deleteDiosBatalla = function(diosId, batallaId) {
  return new Promise(function(resolve, reject) {
    const query = 'DELETE FROM diosbatallas WHERE DiosId = ? AND BatallaId = ?';

    connection.query(query, [diosId, batallaId], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Obtener una relación Dios-Batalla por IDs
 *
 * diosId Integer 
 * batallaId Integer 
 * returns DiosBatalla
 **/
exports.getDiosBatallaByIds = function(diosId, batallaId) {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM diosbatallas WHERE DiosId = ? AND BatallaId = ?';

    connection.query(query, [diosId, batallaId], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results[0]);
    });
  });
}

/**
 * Obtener todas las relaciones Dios-Batalla
 *
 * returns List
 **/
exports.getDiosBatallas = function() {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM diosbatallas';

    connection.query(query, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Actualizar una relación Dios-Batalla existente
 *
 * body DiosBatalla  (optional)
 * diosId Integer 
 * batallaId Integer 
 * no response value expected for this operation
 **/
exports.updateDiosBatalla = function(body, diosId, batallaId) {
  return new Promise(function(resolve, reject) {
    const { FechaParticipacion } = body;
    const query = 'UPDATE diosbatallas SET FechaParticipacion = ? WHERE DiosId = ? AND BatallaId = ?';

    connection.query(query, [FechaParticipacion, diosId, batallaId], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}
