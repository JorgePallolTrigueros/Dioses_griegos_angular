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
 * Crear un nuevo dios
 *
 * body Dios  (optional)
 * no response value expected for this operation
 **/
exports.createDios = function(body) {
  return new Promise(function(resolve, reject) {
    const { Name, Origen, Descripcion, Simbolo, Poderes, Genero, Clase, Mitologia, Fotografia, Id_mitologia } = body;
    const query = 'INSERT INTO dios (Name, Origen, Descripcion, Simbolo, Poderes, Genero, Clase, Mitologia, Fotografia, Id_mitologia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    connection.query(query, [Name, Origen, Descripcion, Simbolo, Poderes, Genero, Clase, Mitologia, Fotografia, Id_mitologia], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Eliminar un dios
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteDios = function(id) {
  return new Promise(function(resolve, reject) {
    const query = 'DELETE FROM dios WHERE Id = ?';

    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Obtener un dios por ID
 *
 * id Integer 
 * returns Dios
 **/
exports.getDiosById = function(id) {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM dios WHERE Id = ?';

    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results[0]);
    });
  });
}

/**
 * Obtener todos los dioses
 *
 * returns List
 **/
exports.getDioses = function() {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM dios';

    connection.query(query, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Actualizar un dios existente
 *
 * body Dios  (optional)
 * id Integer 
 * no response value expected for this operation
 **/
exports.updateDios = function(body, id) {
  return new Promise(function(resolve, reject) {
    const { Name, Origen, Descripcion, Simbolo, Poderes, Genero, Clase, Mitologia, Fotografia, Id_mitologia } = body;
    const query = 'UPDATE dios SET Name = ?, Origen = ?, Descripcion = ?, Simbolo = ?, Poderes = ?, Genero = ?, Clase = ?, Mitologia = ?, Fotografia = ?, Id_mitologia = ? WHERE Id = ?';

    connection.query(query, [Name, Origen, Descripcion, Simbolo, Poderes, Genero, Clase, Mitologia, Fotografia, Id_mitologia, id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}
