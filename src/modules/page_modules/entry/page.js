require('./page.less');
require('../../../components/entry/main.js');
require('../car_management/controller.js');

var app = angular.module('app', [
	'app.components',
	'car'
]);