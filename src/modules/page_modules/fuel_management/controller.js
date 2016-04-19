var fuel = angular.module('fuel', []);

fuel.controller('fuelController', function($scope){
    $scope.title = '油耗管理';
});

module.exports = fuel;