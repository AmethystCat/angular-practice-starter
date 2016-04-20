require('./distribution/controller');
require('./fault/controller');
require('./path/controller');
require('./useage-rate/controller');
require('./vehicle-condition/controller');

var car = angular.module('car', [
    'distribution',
    'fault',
    'path',
    'useageRate',
    'vehicleCondition',
    'ui.router'
]);

//路由可以像这样单独写道功能模块里，原理我明白的, 记得要注入ngRoute
//car.config(['$routeProvider', function($routeProvider) {
//    $routeProvider
//        .when('/car', {
//            controller: 'carController',
//            templateUrl: 'page_modules/car_management/main.html'
//        })
//        .otherwise({redirectTo: '/'});
//}]);

car.controller('carController', function($scope, $state){
    $scope.model = {
        title: '车辆分别'
    };
    $state.go('car.distribution');
});

module.exports = car;