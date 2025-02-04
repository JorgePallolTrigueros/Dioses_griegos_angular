'use strict';

var utils = require('../utils/writer.js');
var Actualente = require('../service/ActualenteService');

module.exports.createActualente = function createActualente (req, res, next, body) {
  Actualente.createActualente(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteActualente = function deleteActualente (req, res, next, id) {
  Actualente.deleteActualente(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActualenteById = function getActualenteById (req, res, next, id) {
  console.log('hola2');
  Actualente.getActualenteById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActualentesByDiosId = function getActualentesByDiosId (req, res, next, id) {
  console.log('holaaa');
  Actualente.getActualentesByDiosId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActualentesById = function getActualentesById (req, res, next, id) {
  Actualente.getActualentesById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActualentes = function getActualentes (req, res, next) {
  Actualente.getActualentes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateActualente = function updateActualente (req, res, next, body, id) {
  Actualente.updateActualente(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
