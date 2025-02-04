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
 * Crear un nuevo usuario
 *
 * body Usuario  (optional)
 * no response value expected for this operation
 **/
exports.createUsuario = function(body) {
  return new Promise(function(resolve, reject) {
    const { Nombre, Correo, Contraseña } = body;
    const query = 'INSERT INTO usuarios (Nombre, Correo, Contraseña) VALUES (?, ?, ?)';

    connection.query(query, [Nombre, Correo, Contraseña], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Eliminar un usuario
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteUsuario = function(id) {
  return new Promise(function(resolve, reject) {
    const query = 'DELETE FROM usuarios WHERE UsuarioId = ?';

    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Obtener un usuario por ID
 *
 * id Integer 
 * returns Usuario
 **/
exports.getUsuarioById = function(id) {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM usuarios WHERE UsuarioId = ?';

    connection.query(query, [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results[0]);
    });
  });
}

/**
 * Obtener todos los usuarios
 *
 * returns List
 **/
exports.getUsuarios = function() {
  return new Promise(function(resolve, reject) {
    const query = 'SELECT * FROM usuarios';

    connection.query(query, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

/**
 * Actualizar un usuario existente
 *
 * body Usuario  (optional)
 * id Integer 
 * no response value expected for this operation
 **/
exports.updateUsuario = function(body, id) {
  return new Promise(function(resolve, reject) {
    const { Nombre, Correo, Contraseña } = body;
    const query = 'UPDATE usuarios SET Nombre = ?, Correo = ?, Contraseña = ? WHERE UsuarioId = ?';

    connection.query(query, [Nombre, Correo, Contraseña, id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}
