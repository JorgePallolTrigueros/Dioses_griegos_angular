'use strict';

var utils = require('../utils/writer.js');
var Mito = require('../service/MitoService');

module.exports.createMito = function createMito (req, res, next, body) {
  Mito.createMito(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteMito = function deleteMito (req, res, next, id) {
  Mito.deleteMito(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMitosByDiosId = function getMitosByDiosId (req, res, next, id) {
  Mito.getMitosByDiosId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMitoById = function getMitoById (req, res, next, id) {
  Mito.getMitoById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMitos = function getMitos (req, res, next) {
  Mito.getMitos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateMito = function updateMito (req, res, next, body, id) {
  Mito.updateMito(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
