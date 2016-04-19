var drive = angular.module('drive', []);

drive.controller('driveController', function($scope){
    $scope.title = '驾驶管理';
});

module.exports = drive;