require('../factory/entry.js');
require('../service/entry.js');

var components = angular.module('app.components', ['app.factory','app.service']);

module.exports = components;