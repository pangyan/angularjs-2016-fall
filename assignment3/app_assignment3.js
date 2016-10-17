(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
	var narrowItDownController = this;
	narrowItDownController.foundItems = [];
	$scope.searchTerm = "";

	narrowItDownController.getMatchedMenuItems = function() {
		console.log("NarrowItDownController.getMatchedMenuItems called...");

//		narrowItDownController.foundItems = MenuSearchService.getMatchedMenuItems($scope.searchTerm);
//		console.log("Found items in NarrowItDownController: " + narrowItDownController.foundItems);

		if ($scope.searchTerm.length > 0) {
			var promise = MenuSearchService.getMatchedMenuItems($scope.searchTerm)

			promise
			.then(function (response) {
				narrowItDownController.foundItems = response;
				console.log("Found " + narrowItDownController.foundItems.length + " items matching the criteria in NarrowItDownController.");
			})
			.catch(function (error) {
				console.log("Something went wrong in NarrowItDownController...");
			});
		}
	}

	narrowItDownController.removeItem = function(itemIndex) {
		console.log("NarrowItDownController.onRemove called...");
		narrowItDownController.foundItems.splice(itemIndex, 1);
	}
}

MenuSearchService.$inject = ['$http', '$q'];
function MenuSearchService($http, $q) {
	var service = this;

	service.getMatchedMenuItems = function(searchTerm) {
		console.log("MenuSearchService.getMatchedMenuItems called...");
		console.log("Searching for: " + searchTerm);

		var allItems = [];
		var foundItems = undefined;

		var deferred = $q.defer();

		$http({
			method: "GET",
			url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
		})
		.then(function (result) {
			allItems = result.data.menu_items;
			foundItems = [];

			// TO DO filter the result list
			// 
			for (var i = 0; i < allItems.length; i++) {
				if (allItems[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
					console.log(allItems[i].description);
					foundItems.push(allItems[i]);
				}
			}

			console.log("Found " + foundItems.length + " items matching the criteria in MenuSearchService.");
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