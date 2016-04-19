var credit = angular.module('credit', []);

credit.controller('creditController', function($scope){
    $scope.title = '信贷管理';
});

module.exports = credit;