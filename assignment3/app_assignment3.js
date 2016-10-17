(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
	var narrowItDownController = this;
//	narrowItDownController.foundItems = [];
	$scope.searchTerm = "";

	narrowItDownController.getMatchedMenuItems = function() {
		console.log("NarrowItDownController.getMatchedMenuItems called...");

		narrowItDownController.foundItems = MenuSearchService.getMatchedMenuItems($scope.searchTerm);
//		console.log("Found items in NarrowItDownController: " + narrowItDownController.foundItems);

		var promise = MenuSearchService.getMatchedMenuItems($scope.searchTerm)

		promise
		.then(function (response) {
			narrowItDownController.foundItems = response;
			console.log("Found items in NarrowItDownController: " + narrowItDownController.foundItems);
		})
		.catch(function (error) {
			console.log("Something went wrong in NarrowItDownController...");
		});
	}
}

MenuSearchService.$inject = ['$http', '$q'];
function MenuSearchService($http, $q) {
	var service = this;

	service.getMatchedMenuItems = function(searchTerm) {
		console.log("MenuSearchService.getMatchedMenuItems called...");
		console.log("Searching for: " + searchTerm);

		var foundItems = [];

		var deferred = $q.defer();

		$http({
			method: "GET",
			url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
		})
		.then(function (result) {
			foundItems = result.data.menu_items;
			
			// TO DO filter the result list
			// 
			
			console.log("Found items in MenuSearchService: " + foundItems);
			deferred.resolve(foundItems);
		})
		.catch(function (error) {
			console.log("Something went wrong in MenuSearchService...");
			deferred.reject(error);
		});

		foundItems = deferred.promise;

		return $q.when(foundItems);
		
//		return response;
	}
}

function FoundItemsDirective() {
	var ddo = {
		templateUrl: 'foundItems.html',
		scope: {
			items: '<',
			onRemove: '&'
		}
	};

	return ddo;
}

})();