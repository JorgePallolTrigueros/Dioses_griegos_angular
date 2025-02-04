'use strict';

var utils = require('../utils/writer.js');
var Usuario = require('../service/UsuarioService');

module.exports.createUsuario = function createUsuario (req, res, next, body) {
  Usuario.createUsuario(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUsuario = function deleteUsuario (req, res, next, id) {
  Usuario.deleteUsuario(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUsuarioById = function getUsuarioById (req, res, next, id) {
  Usuario.getUsuarioById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUsuarios = function getUsuarios (req, res, next) {
  Usuario.getUsuarios()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUsuario = function updateUsuario (req, res, next, body, id) {
  Usuario.updateUsuario(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
