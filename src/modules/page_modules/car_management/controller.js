var car = angular.module('car', []);

car.controller('carManagement', function($scope){
    $scope.cars = 'this.is car management';
});

module.exports = car;