var md = angular.module('app.service', []);

md.service('testService', function(){
    this.ts = 'testService';
});

module.exports = md;