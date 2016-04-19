require('./distribution/controller');

var car = angular.module('car', ['distribution']);

//路由可以像这样单独写道功能模块里，原理我明白的, 记得要注入ngRoute
//car.config(['$routeProvider', function($routeProvider) {
//    $routeProvider
//        .when('/car', {
//            controller: 'carController',
//            templateUrl: 'page_modules/car_management/main.html'
//        })
//        .otherwise({redirectTo: '/'});
//}]);

car.controller('carController', function($scope){
    $scope.model = {
        title: '车辆管理'
    };
});

module.exports = car;