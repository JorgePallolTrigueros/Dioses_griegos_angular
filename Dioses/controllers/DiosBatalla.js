'use strict';

var utils = require('../utils/writer.js');
var DiosBatalla = require('../service/DiosBatallaService');

module.exports.createDiosBatalla = function createDiosBatalla (req, res, next, body) {
  DiosBatalla.createDiosBatalla(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDiosBatalla = function deleteDiosBatalla (req, res, next, diosId, batallaId) {
  DiosBatalla.deleteDiosBatalla(diosId, batallaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDiosBatallaByIds = function getDiosBatallaByIds (req, res, next, diosId, batallaId) {
  DiosBatalla.getDiosBatallaByIds(diosId, batallaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDiosBatallas = function getDiosBatallas (req, res, next) {
  DiosBatalla.getDiosBatallas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateDiosBatalla = function updateDiosBatalla (req, res, next, body, diosId, batallaId) {
  DiosBatalla.updateDiosBatalla(body, diosId, batallaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
