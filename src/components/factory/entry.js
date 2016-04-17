var md = angular.module('app.factory', []);

md.factory('testFactory', function(){
	return {
		test: function() {
			console.log('test factory');
		}
	}
});

module.exports = md;