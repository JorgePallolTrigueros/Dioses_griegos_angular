'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Kojinanjo1@',
    database : 'diosesgriegos'
});
 
  
// Conectar a la base de datos
connection.connect(error => {
    if (error) throw error;
    console.log("Conectado exitosamente a la base de datos.");
});

// Función para ejecutar consultas
const query = (sql, callback) => {
    connection.query(sql, (error, results, fields) => {
        if (error) throw error;
        callback(results);
    });
};

// Exportar la función de consulta
module.exports = query;