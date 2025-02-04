'use strict';

var utils = require('../utils/writer.js');
var ModoTransporte = require('../service/ModoTransporteService');

module.exports.createModoTransporte = function createModoTransporte (req, res, next, body) {
  ModoTransporte.createModoTransporte(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteModoTransporte = function deleteModoTransporte (req, res, next, id) {
  ModoTransporte.deleteModoTransporte(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getModoTransporte = function getModoTransporte (req, res, next) {
  ModoTransporte.getModoTransporte()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getModoTransporteById = function getModoTransporteById (req, res, next, id) {
  ModoTransporte.getModoTransporteById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.getModoTransportesById = function getModoTransporteById (req, res, next, id) {
  ModoTransporte.getModoTransportesById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};



module.exports.updateModoTransporte = function updateModoTransporte (req, res, next, body, id) {
  ModoTransporte.updateModoTransporte(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
