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
 * Crear un nuevo modo de transporte
 *
 * body ModoTransporte  (optional)
 * no response value expected for this operation
 **/
exports.createModoTransporte = function(body) {
  return new Promise(function(resolve, reject) {
    const { Medio, DiosId } = body;
    const query = 'INSERT INTO modo_transporte (Medio, DiosId) VALUES (?, ?)';

    connection.query(query, [Medio, DiosId], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Eliminar un modo de transporte
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteModoTransporte = function(id) {
  return new Promise(function(resolve, reject) {
    const query = 'DELETE FROM modo_transporte WHERE Modo_TransporteId = ?';

    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Obtener un modo de transporte por ID
 *
 * id Integer 
 * returns ModoTransporte
 **/
exports.getModoTransporteById = function(id) {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM modo_transporte WHERE DiosId = ?';

    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Obtener un modo de transporte por ID
 *
 * id Integer 
 * returns ModoTransporte
 **/
exports.getModoTransportesById = function(id) {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM modo_transporte WHERE Modo_TransporteId = ?';

    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}



/**
 * Obtener todos los modos de transporte
 *
 * returns List
 **/
exports.getModoTransporte = function() {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM modo_transporte';

    connection.query(query, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Actualizar un modo de transporte existente
 *
 * body ModoTransporte  (optional)
 * id Integer 
 * no response value expected for this operation
 **/
exports.updateModoTransporte = function(body, id) {
  return new Promise(function(resolve, reject) {
    const { Medio, DiosId } = body;
    const query = 'UPDATE modo_transporte SET Medio = ?, DiosId = ? WHERE Modo_TransporteId = ?';

    connection.query(query, [Medio, DiosId, id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}
