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
 * Crear un nuevo actualente
 *
 * body Actualente  (optional) 
 * no response value expected for this operation
 **/ 
exports.createActualente = function(body) {
  return new Promise(function(resolve, reject) {
    const { Estado, Informacion, DiosId } = body;
    const query = 'INSERT INTO actualentes (Estado, Informacion, DiosId) VALUES (?, ?, ?)';

    connection.query(query, [Estado, Informacion, DiosId], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Eliminar un actualente
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteActualente = function(id) {
  return new Promise(function(resolve, reject) {
    const query = 'DELETE FROM actualentes WHERE ActualenteId = ?';

    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Obtener un actualente por ID
 *
 * id Integer 
 * returns Actualente
 **/
exports.getActualenteById = function(id) {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM actualentes WHERE ActualenteId = ?';

    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results[0]);
    });
  });
}


/**
 * Obtener un actualente por ID
 *
 * id Integer 
 * returns Actualente
 **/
exports.getActualentesById = function(id) {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM actualentes WHERE ActualenteId = ?';

    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Obtener todos los actualentes del dios dado el id de dios
 *
 * id Integer 
 * returns Actualente
 **/
exports.getActualentesByDiosId = function(id) {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM actualentes WHERE DiosId = ?';

    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}





/**
 * Obtener todos los actualentes
 *
 * returns List
 **/
exports.getActualentes = function() {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM actualentes';

    connection.query(query, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}








/**
 * Actualizar un actualente existente
 *
 * body Actualente  (optional)
 * id Integer 
 * no response value expected for this operation
 **/
exports.updateActualente = function(body, id) {
  return new Promise(function(resolve, reject) {
    const { Estado, Informacion, DiosId } = body;
    const query = 'UPDATE actualentes SET Estado = ?, Informacion = ?, DiosId = ? WHERE ActualenteId = ?';

    connection.query(query, [Estado, Informacion, DiosId, id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}
