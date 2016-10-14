(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
	var narrowItDownController = this;
	$scope.searchTerm = "";

	narrowItDownController.getMatchedMenuItems = function() {
		console.log("NarrowItDownController.getMatchedMenuItems called...");

		var promise = MenuSearchService.getMatchedMenuItems($scope.searchTerm);

		promise.then(function (response) {
			narrowItDownController.temp = response.data
		})
		.catch(function (error) {
			console.log("Something went wrong...");
		});
	}
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
	var service = this;

	service.getMatchedMenuItems = function(searchTerm) {
		console.log("MenuSearchService.getMatchedMenuItems called...");
		console.log("Searching for: " + searchTerm);

		var response = $http({
			method: "GET",
			url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
		});

		return response
	}
}

})();