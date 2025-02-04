'use strict';

var utils = require('../utils/writer.js');
var Batalla = require('../service/BatallaService');

module.exports.createBatalla = function createBatalla (req, res, next, body) {
  Batalla.createBatalla(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBatalla = function deleteBatalla (req, res, next, id) {
  Batalla.deleteBatalla(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBatallaById = function getBatallaById (req, res, next, id) {
  Batalla.getBatallaById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBatallas = function getBatallas (req, res, next) {
  Batalla.getBatallas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBatalla = function updateBatalla (req, res, next, body, id) {
  Batalla.updateBatalla(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
