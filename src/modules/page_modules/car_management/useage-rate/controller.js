var useageRate = angular.module('useageRate', []);

useageRate.controller('useageRateController', function($scope){
    $scope.title = '使用率';
});

module.exports = useageRate;
