var fault = angular.module('fault', []);

fault.controller('faultController', function($scope){
    $scope.title = '故障查询';
});

module.exports = fault;
