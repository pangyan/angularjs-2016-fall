(function () {
'use strict';

angular.module('assignment1App', [])

.controller('Assignment1Controller', function ($scope) {
	$scope.name = "DJ Ridiculands";
	$scope.sayHello = function() {
		return "Yes.  I, " + $scope.name + ", hereby DNLM."
	}
	
	$scope.advice = "";
	$scope.foodList = "";
	$scope.performChecking = function() {
		console.log("Entering method performChecking()...");
		console.log("Food list: " + $scope.foodList);
		$scope.advice = "";

		if ($scope.foodList == "") {
			$scope.advice = "Please enter data first";
		} else {
			var foodArray = $scope.foodList.split(",");
			if (foodArray.length < 4) {
				$scope.advice = "Enjoy!";
			} else {
				$scope.advice = "Too much!";
			}
		}

		console.log("Exiting method performChecking()...");
	}
});

})();