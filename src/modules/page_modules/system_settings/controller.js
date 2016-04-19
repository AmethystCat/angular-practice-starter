var system = angular.module('system', []);

system.controller('systemController', function($scope){
    $scope.title = "系统设置";
});

module.exports = system;