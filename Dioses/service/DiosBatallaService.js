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
    const { DiosId, BatallasIds } = body;

    // Borrar la relacion anterior
    const query = 'DELETE FROM diosbatallas WHERE DiosId = ?';
    connection.query(query, [DiosId], (error, results) => {
      if (error) {
        return reject(error);
      } 
      const query2 = 'INSERT INTO diosbatallas (DiosId, BatallaId, FechaParticipacion) VALUES (?, ?, ?)'

      // TODO: Hay que ajustar esto para que se haga una transacción de SQL / Node con un Insert Multiple insertando todas las batallas seleccionadas (los ids)

/*

const mysql = require('mysql2/promise');

// Configuración de la conexión a la base de datos
const pool = mysql.createPool({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos'
});

async function asociarBatallas(diosId, batallas) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    // 1️⃣ Eliminar batallas previas del dios
    await connection.query('DELETE FROM diosbatallas WHERE DiosId = ?', [diosId]);

    // 2️⃣ Si hay nuevas batallas, hacer un INSERT múltiple
    if (batallas.length > 0) {
      const values = batallas.map(b => [diosId, b.BatallaId, b.FechaParticipacion]);
      const query = 'INSERT INTO diosbatallas (DiosId, BatallaId, FechaParticipacion) VALUES ?';

      await connection.query(query, [values]);
    }

    await connection.commit();
    console.log(`✅ Se asociaron ${batallas.length} batallas al dios ${diosId}`);
  } catch (error) {
    await connection.rollback();
    console.error('❌ Error al asociar batallas:', error);
  } finally {
    connection.release();
  }
}

// 🟢 Ejemplo de uso
const diosId = 1;
const batallas = [
  { BatallaId: 5, FechaParticipacion: '2025-02-09' },
  { BatallaId: 7, FechaParticipacion: '2025-02-10' },
  { BatallaId: 12, FechaParticipacion: '2025-02-11' }
];

asociarBatallas(diosId, batallas);

*/

      //resolve(results);
    });

    /*const query = 'INSERT INTO diosbatallas (DiosId, BatallaId, FechaParticipacion) VALUES (?, ?, ?)';

    connection.query(query, [DiosId, BatallaId, FechaParticipacion], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });*/
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
