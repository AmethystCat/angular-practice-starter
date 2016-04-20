var vehicleCondition = angular.module('vehicleCondition', []);

vehicleCondition.controller('vehicleConditionController', function($scope){
    $scope.title = '车况查询';
});

module.exports = vehicleCondition;
