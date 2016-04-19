var logistics = angular.module('logistics', []);

logistics.controller('logisticsController', function($scope){
    $scope.title = '物流管理';
});

module.exports = logistics;