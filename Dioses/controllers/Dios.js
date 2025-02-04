'use strict';

var utils = require('../utils/writer.js');
var Dios = require('../service/DiosService');

module.exports.createDios = function createDios (req, res, next, body) {
  Dios.createDios(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDios = function deleteDios (req, res, next, id) {
  Dios.deleteDios(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDiosById = function getDiosById (req, res, next, id) {
  Dios.getDiosById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDioses = function getDioses (req, res, next) {
  Dios.getDioses()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateDios = function updateDios (req, res, next, body, id) {
  Dios.updateDios(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
