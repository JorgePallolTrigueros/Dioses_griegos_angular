'use strict';

var utils = require('../utils/writer.js');
var Categoria = require('../service/CategoriasService');

// Crear una nueva categoría
module.exports.createCategoria = function createCategoria(req, res, next) {
  const body = req.body;  // Obtener el cuerpo de la solicitud directamente de req.body
  Categoria.createCategoria(body)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

// Eliminar una categoría por ID
module.exports.deleteCategoria = function deleteCategoria(req, res, next) {
  const id = req.params.id;  // Obtener el ID de req.params
  Categoria.deleteCategoria(id)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

// Obtener una categoría por ID
module.exports.getCategoriaById = function getCategoriaById(req, res, next) {
  const id = req.params.id;  // Obtener el ID de req.params
  Categoria.getCategoriaById(id)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

// Obtener todas las categorías
module.exports.getCategorias = function getCategorias(req, res, next) {
  Categoria.getCategorias()
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

// Actualizar una categoría por ID
module.exports.updateCategoria = function updateCategoria(req, res, next) {
  const id = req.params.id;  // Obtener el ID de req.params
  const body = req.body;  // Obtener el cuerpo de la solicitud de req.body
  Categoria.updateCategoria(id, body)  // Pasar el ID primero y luego el cuerpo
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};