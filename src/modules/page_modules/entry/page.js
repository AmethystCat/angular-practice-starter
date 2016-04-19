require('./page.less');
require('../../../components/entry/main.js');
require('../car_management/controller.js');
require('../drive_management/controller.js');
require('../credit_management/controller.js');
require('../fuel_management/controller.js');
require('../logistics_management/controller.js');
require('../path_management/controller.js');
require('../system_settings/controller.js');

var app = angular.module('app', [
	'app.components',
	'car',
	'drive',
	'credit',
	'fuel',
	'logistics',
	'path',
	'system',
	'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/car', {
			controller: 'carController',
			templateUrl: 'page_modules/car_management/main.html'
		})
		.when('/car/distribution', {
			controller: 'distributionController',
			templateUrl: 'page_modules/car_management/main.html'
		})
		.when('/drive', {
			controller: 'driveController',
			templateUrl: 'page_modules/drive_management/main.html'
		})
		.when('/credit', {
			controller: 'creditController',
			templateUrl: 'page_modules/credit_management/main.html'
		})
		.when('/fuel', {
			controller: 'fuelController',
			templateUrl: 'page_modules/fuel_management/main.html'
		})
		.when('/logistics', {
			controller: 'logisticsController',
			templateUrl: 'page_modules/logistics_management/main.html'
		})
		.when('/path', {
			controller: 'pathController',
			templateUrl: 'page_modules/path_management/main.html'
		})
		.when('/system', {
			controller: 'systemController',
			templateUrl: 'page_modules/system_settings/main.html'
		})
		.otherwise({redirectTo: '/'});
}]);