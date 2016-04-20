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
	'ui.router'
]);

app.config( function($stateProvider, $urlRouterProvider) {
    // 如果未匹配到router中设置的url，默认重定向到'/car'
	$urlRouterProvider.otherwise("/car");
	$stateProvider
		.state('car', {
			url: '/car',
			controller: 'carController',
			templateUrl: 'page_modules/car_management/main.html'
		})
            .state('car.distribution', {
                url: '/distribution',
                controller: 'distributionController',
                templateUrl: 'page_modules/car_management/distribution/main.html'
            })
            .state('car.useage-rate', {
                url: '/useage-rate',
                controller: 'useageRateController',
                templateUrl: 'page_modules/car_management/useage-rate/main.html'
            })
            .state('car.fault', {
                url: '/fault',
                controller: 'faultController',
                templateUrl: 'page_modules/car_management/fault/main.html'
            })
            .state('car.vehicle-condition', {
                url: '/vehicle-condition',
                controller: 'vehicleConditionController',
                templateUrl: 'page_modules/car_management/vehicle-condition/main.html'
            })
            .state('car.path', {
                url: '/path',
                controller: 'pathController',
                templateUrl: 'page_modules/car_management/path/main.html'
            })
		.state('drive', {
			url: '/drive',
			controller: 'driveController',
			templateUrl: 'page_modules/drive_management/main.html'
		})
		.state('credit', {
            url: '/credit',
			controller: 'creditController',
			templateUrl: 'page_modules/credit_management/main.html'
		})
		.state('fuel', {
            url: '/fuel',
			controller: 'fuelController',
			templateUrl: 'page_modules/fuel_management/main.html'
		})
		.state('logistics', {
            url: '/logistics',
			controller: 'logisticsController',
			templateUrl: 'page_modules/logistics_management/main.html'
		})
		.state('path', {
            url: '/path',
			controller: 'pathController',
			templateUrl: 'page_modules/path_management/main.html'
		})
		.state('system', {
            url: '/system',
			controller: 'systemController',
			templateUrl: 'page_modules/system_settings/main.html'
		})
});

app.controller('bdController', function($scope, $state){
    $state.go("car");
});