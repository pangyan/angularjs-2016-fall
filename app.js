(function () {
'use strict';

var x = "hello";

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
	$scope.name = "DJ Ridiculands";
	$scope.sayHello = function() {
		return "Yes.  I, " + $scope.name + ", hereby DNLM."
	}
});

})();