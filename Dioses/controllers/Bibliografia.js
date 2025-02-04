'use strict';

var utils = require('../utils/writer.js');
var Bibliografia = require('../service/BibliografiaService');

module.exports.createBibliografia = function createBibliografia (req, res, next, body) {
  Bibliografia.createBibliografia(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBibliografia = function deleteBibliografia (req, res, next, id) {
  Bibliografia.deleteBibliografia(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBibliografiaById = function getBibliografiaById (req, res, next, id) {
  Bibliografia.getBibliografiaById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};



module.exports.getBibliografiasByDiosId = function getBibliografiasByDiosId (req, res, next, id) {
  Bibliografia.getBibliografiasByDiosId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBibliografias = function getBibliografias (req, res, next) {
  Bibliografia.getBibliografias()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBibliografia = function updateBibliografia (req, res, next, body, id) {
  Bibliografia.updateBibliografia(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
